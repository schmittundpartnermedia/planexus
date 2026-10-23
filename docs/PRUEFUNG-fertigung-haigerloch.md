# Prüfprotokoll: Fertigung nach Haigerloch (23.10.2026)

Grundlage: `docs/ABNAHME-fertigung-haigerloch.md`. Prüfwerkzeug: `scripts/check-fertigung-haigerloch.mjs` (liest alle
`.html`- und `.txt`-Dateien in `dist/client`, entfernt HTML-Tags, sucht Fertigungs-Angaben zu Albstadt in beiden
Wortstellungen und verlangt die neue Adresse im Footer und auf den Kontaktseiten).

Letzter Lauf: `lockf … npm run build` Exit 0, „Complete!“ (12:19:57); `astro check` 0 Fehler, 0 Warnungen;
Prüfskript „144 Seiten geprüft, 0 Fundstellen“, Exit 0. Commit: siehe `git log` (Commit „Fertigung nach Haigerloch …“).

## Neue Strecken ab Werk Haigerloch

Methode: OSRM (router.project-osrm.org), Start Hospach, Haigerloch (48.3437, 8.7965), Ziel jeweils Stadtmitte.
Wo die Seite eine Route beschreibt (Thayngen, Hochrhein/Weil am Rhein, Walserberg), wurde genau diese Route mit
Zwischenpunkten gerechnet. Gerundet auf 10 km; Fahrzeit = reine Pkw-Fahrzeit, gerundet auf 0,5 h.

| Ziel | vorher auf der Seite | neu | Fahrzeit neu | Route |
|---|---|---|---|---|
| Berlin | 720 km | 700 km | rund 7 h | A81 / A6 / A9 / A10 |
| Hamburg | 720 km | 730 km | rund 7,5 h | A81 / A8 / A5 / A7 |
| München | 280 km | 280 km | rund 3 h | A81 / A8 |
| Frankfurt | 320 km | 250 km | rund 2,5 h | A81 / A8 / A5 |
| Düsseldorf | 480 km | 450 km | rund 5 h | A81 / A8 / A5 / A3 |
| Stuttgart | 80 km | 70 km | rund 1 h | A81 (Anschlussstelle Empfingen) |
| Zürich | 150 km | 170 km | rund 2 h | A81 + Thayngen (A4) |
| Basel | 130 km | 230 km | rund 3,5 h | A81 bis Singen, Hochrhein (A98/B34), Weil am Rhein |
| Bern | 220 km | 280 km | rund 3,5 h | A81 + Thayngen + A1 |
| Wien | 580 km | 730 km | rund 7,5 h | A81 + A8 + Walserberg + A1 |
| Linz | 470 km | 570 km | rund 6 h | A81 + A8 + Walserberg + A1 |
| Graz | 660 km | 710 km | rund 7,5 h | A81 + A8 + Walserberg + A1 + A9 |

Nebenbefund: Mehrere alte Werte waren schon ab Albstadt falsch. OSRM ab Albstadt-Tailfingen: Basel 236 km über
Hochrhein (Seite: 130 km), Wien über Walserberg ca. 690 km (Seite: 580 km). Die Standorte-Seite hatte eigene, andere
Werte (z. B. Basel „45 km, 45 Minuten“, München 180 km). Jetzt nennen Städteseiten und Standorte-Seite dieselben Zahlen.

## Abgleich mit der Abnahmeliste

| Nr. | Satz | Geprüft wie | Ergebnis |
|---|---|---|---|
| 1 | Footer: neue Adresse + Telefon auf jeder Seite | Prüfskript (Pflichtmuster „Hospach 1“, „72401 Haigerloch“ auf allen Seiten mit Footer); Browser /en/contact 375 px: Footer-Text enthält Adresse und „+49 7474 / 4273000“ | ✓ |
| 2 | Kontakt DE/EN: Adresse, Telefon, Kartenpunkt Haigerloch | Prüfskript (`tel:+4974744273000` auf beiden Seiten); Browser Dev-Server: /kontakt (Desktop) und /en/contact (375 px) – beide Marker innerhalb der Karte (`inside: true`), kein waagrechtes Scrollen (scrollWidth 375) | ✓ Erst nach Review: Zoom 11 schnitt den Haigerloch-Marker ab, jetzt Zoom 10 |
| 3 | Autorenkasten „Werk“ = Haigerloch | Diff `AuthorBio.astro` | ✓ (vorher stand dort fälschlich die Büroadresse) |
| 4 | Büro, Impressum, Datenschutz, JSON-LD-Sitz unverändert | `git diff` auf `impressum`, `datenschutz`, `planexus-address.ts`: keine Änderung; JSON-LD `address` Am Steinbach 8 in allen Seiten unverändert | ✓ |
| 5 | Prüfskript 0 Fundstellen | Lauf nach letztem Build | ✓ 144 Seiten, 0 |
| 6 | Gegenprobe rot | Gleiches Skript auf dem Build vom 22.10.2026: 807 Fundstellen auf 142 Seiten. Zusätzlich: alte Adresse künstlich in `dist/client/kontakt/index.html` eingesetzt → 2 Fundstellen, danach zurückgesetzt. Erweiterte `.txt`-Prüfung fand im alten Build `llms.txt` „Fertigung im Werk Albstadt“ | ✓ |
| 7 | Entfernungen nach Tabelle | Zählung im Build: alte Werte (720/320/480/80/150/130/220/580/470/660 km) 0 Treffer auf den jeweiligen Städteseiten; neue Werte 6 bis 18 Treffer je Seite; Review hat DE/EN und Standorte-Seite gegen die Tabelle geprüft | ✓ |
| 8 | Firmensitz-Aussagen bleiben | Startseiten-Title/H1 „aus Albstadt“, Impressum „aus Albstadt“, Team-Rollenzeilen, „Projektleitung sitzt in Albstadt-Laufen“ stehen; im Skript als ausdrückliche Ausnahmen geführt | ✓ |
| 9 | FAQ-Frage = sichtbare Frage | Skript über alle 142 Seiten (Review) und Stichprobe 7 Seiten: 0 Abweichungen. Die FAQ-Fragen mit „vom Werk Albstadt“ / „from the Albstadt works“ heißen jetzt Haigerloch | ✓ |
| 10 | Startseiten-Hero | Diff `index.astro` / `en/index.astro`: nur der Untertitel-Text, jetzt „geplant in Albstadt, gefertigt im Werk Haigerloch“ (EN „planned in Albstadt, built at the Haigerloch works“); Bild, LiquidDistortion, Logo, Alt-Texte, Größen, Ladeverhalten unverändert | ✓ |
| 11 | Build und astro check | siehe oben | ✓ |
| 12 | Nichts erfunden, keine Preise | Review: keine neuen Preise/Kunden. Unbelegtes, das beim Bauen entstand, wurde wieder entfernt: „Anschlussstelle Haigerloch“ gibt es nicht (A81-Anschlussstellen: 30 Horb, 31 Empfingen, 32 Sulz; Quelle: de.wikipedia.org/wiki/Bundesautobahn_81) → überall „Anschlussstelle Empfingen“; „direkt an der A81“ → „nahe der A81 (Anschlussstelle Empfingen)“ | ✓ |

## Was sich am Text geändert hat (Überblick)

- 85 Dateien, DE und EN. Sechs Helfer haben die Dateigruppen getrennt bearbeitet (Städte in vier Gruppen, Startseite/
  Standorte/Team/Hub, Leistungen/Branchen/Magazin), danach ein unabhängiger Review.
- „Werk Albstadt“ → „Werk Haigerloch“, „Made in Albstadt“ → „Made in Haigerloch“, Label „Werk & Zentrale“ → „Werk“
  (die Zentrale ist das Büro), Adressblöcke auf Hospach 1.
- Gestrichene Vergleiche, die nicht mehr stimmen: Basel „kürzeste Schwerlast-Route zu jedem CH-Standort“, München
  „kürzeste DACH-Lieferdistanz“ und „eine der schnellsten Anlieferungen“, Standorte „kürzeste Anbindung aller
  Metropolregionen“, Basel „45 km, 45 Minuten“, Bern Alternative „(~250 km)“.
- Kleine Nebenänderungen wegen Zeichenlänge der Meta-Description: Hamburg „Kostenlose Beratung anfordern.“ →
  „Kostenlos beraten lassen.“; /leistungen/planung „GMP-Konformität“ → „GMP-konform“; EN services „consulting and
  Smart Lab“ → „consulting, Smart Lab“.
- Berlin: „via Würzburg und Nürnberg“ → „via Nürnberg“ (die Route A6/A9 führt nicht über Würzburg).
- `public/llms.txt`: „Fertigung im Werk Haigerloch (Baden-Württemberg), Büro in Albstadt-Laufen“.
- Besichtigungstermin LABtoGO (analytica-Artikel): Ortsangabe „in Albstadt“ gestrichen, weil nicht belegt ist, wo der
  LABtoGO heute steht.

## Offene Befunde (nicht geändert, brauchen Joachims Entscheidung)

1. **„Ein Transporttag“ steht auf 11 Städteseiten, kritisch bei Berlin (700 km), Hamburg (730 km), Wien (730 km), Graz (710 km), Linz (570 km).** Ursache: Die Fahrzeit ist
   Pkw-Fahrzeit; ein Schwerlast-Lkw ist langsamer und hat höchstens 9 bis 10 h Lenkzeit am Tag. Vorschlag: mit der
   Spedition klären oder neutral „Transport mit Lenkzeitpausen“ schreiben.
2. **Linz „nach Salzburg die mautgünstigste Landeshauptstadt-Anfahrt“.** Ursache: Bregenz und Innsbruck sind näher.
   Vorschlag: streichen oder „ohne A9-Pyhrn-Umweg“.
3. **Public-Health-Seite: Verlegezeiten Süd 12–18 h, West 8–12 h.** Ursache: alte Zahlen ohne Quelle, Süd länger als
   West. Vorschlag: fachlich prüfen oder streichen.
Hinweis Meta-Descriptions: Alle Seiten haben höchstens 155 Zeichen (gezählt mit aufgelösten HTML-Entities wie `&#38;`).
   Ein erster Zähllauf ohne Entity-Auflösung hatte fälschlich vier Seiten als zu lang gemeldet.
4. **Made-in-Germany-Artikel:** Teaser nennt jetzt Haigerloch, der Artikel lädt zum Termin in Albstadt-Laufen (Büro)
   ein. Inhaltlich richtig; ein Halbsatz „Büro in Albstadt-Laufen, Fertigung in Haigerloch“ wäre für Leser klarer.
5. **Live:** Nichts ist gepusht oder live. Nach Joachims Ja: pushen, dann Server-Einzeiler laut CLAUDE.md, danach
   /kontakt, /laborcontainer-basel und /llms.txt live prüfen.
