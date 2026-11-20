# Prüfprotokoll SEO-Umsetzung Phase 1 – 18.11.2026

Abnahme: `docs/ABNAHME-seo-umsetzung.md`. Prüfskript: `node scripts/check-seo-abnahme.mjs` (startet `dist/server/entry.mjs` selbst).

## Gegenprobe (vor den Änderungen, Build vom 17.11.)

`4/19 grün` – rot: 1 (/404 → 500), 3, 4, 5, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18, 20. Satz 14 war vorher fälschlich grün (Satz stand irgendwo im Text) → Prüfregel auf `data-cta-response` am Knopf verschärft; Satz 9 auf Titel inklusive „ | Planexus“ verschärft.

## Nachher (frischer Build, Exit 0, 18.11.2026)

`lockf -t 3600 /tmp/elevum-bau.lock npm run build` → Exit 0 (eine bekannte Vite-Warnung zu ungenutztem Import `gt`, alt).
Prüfskript: **19/19 grün**.

| Satz | Geprüft wie | Ergebnis | Commit |
|---|---|---|---|
| 1 | Skript: GET /404 am lokalen Server | 404, `noindex` (vorher 500, `FailedToFindPageMapSSR`) | folgt |
| 2 | Skript: zwei unbekannte Adressen DE/EN | 404/404, `noindex` | folgt |
| 3 | Skript: `AggregateOffer` in dist | 0 Seiten | folgt |
| 4 | Skript: LocalBusiness „Planexus GmbH – Laborcontainer …“ | 0 Seiten | folgt |
| 5 | Skript: `@id` #organization + parentOrganization | 142/142 Seiten | folgt |
| 6 | Skript: JSON.parse aller JSON-LD, Typen ≥ 3 | 0 Fehler, 0 Seiten < 3 Typen | folgt |
| 7 | Skript: 301-Ziel, Sitemap, interne Links, Event | 301 → Rückblick (DE/EN), nicht in Sitemap, 0 Links, 0 Event | folgt |
| 8 | Skript + Browser 375 px | `<img srcset fetchpriority=high>`, Handy lädt `-800.webp` (95 KB statt 449 KB) | folgt |
| 9 | Skript: alle Titel inkl. Suffix ≤ 60, Descriptions ≤ 155 | 0 Verstöße | folgt |
| 10 | Skript: H1 der 14 Seiten | alle mit Suchbegriff; LABtoGO-H1 enthielt schon „LABtoGO“ + „Laborcontainer“ → unverändert | folgt |
| 11 | Diff | neu: `/laborcontainer-zuerich`, `/en/lab-containers-zurich`, `/ueber-uns`, `/kontakt`, EN-Artikel Brandschutz, Laborabzug, Digitalisierung (Titel + Description) | folgt |
| 12 | Quelltext + lokaler POST ohne Betreff | Pflichtfeld entfernt; POST kommt durch die Prüfung bis zum DB-Schritt (lokal keine DB: `database … does not exist`, daher 500). Alter Code hätte mit 400 „Alle Felder sind erforderlich“ abgebrochen. Voller Durchlauf mit Speichern: nach Deploy auf dem Server | folgt |
| 13 | Skript + Browser 375 px | Schritte-Block und Ansprechpartner (Foto, Name, Funktion, Telefon) DE/EN, kein Überlauf | folgt |
| 14 | Skript | 48-h-Satz mit `data-cta-response` auf 8 Geldseiten | folgt |
| 15 | Skript | Hub-Anker „Laborcontainer mieten/kaufen“ vorhanden, Startseite verlinkt im „Über Planexus“-Absatz (außerhalb Hero) | folgt |
| 16 | Skript | Mieten/Kaufen DE/EN ≥ 10 interne Links im Inhalt | folgt |
| 17 | Skript gegen Crawl-Werte 18.11. | alle 8 Artikel ≥ +2 eingehende Links | folgt |
| 18 | Skript | keine „Mehrgeschossiges Pharmalabor“/„Mehrgeschossiger Laborcontainer“-Zuschreibung mehr; Startseitenkarte ohne „Pharma“-Etikett | folgt |
| 19 | Lighthouse 12 lokal (Playwright-Chromium) | Barrierefreiheit 100 auf Hub, Mieten, München, Laborräume, Kontakt; `heading-order`, `link-in-text-block`, `color-contrast` je 1 (vorher 95/99/99/92/99) | folgt |
| 20 | Skript | nur noch `/` und `/en` mit `opengraph.jpg` | folgt |
| 21 | – | offen: braucht Deploy der nginx-Vorlage (`proxy_hide_header Cache-Control`) über Joachims SSH | – |
| 22 | Skript: Hero-Abschnitt DE/EN gegen fee93a4 | identisch | folgt |

## Ursachen (systematic-debugging)

- **/404 → 500:** Astro legt die vorab gebaute 404-Seite als `404.html` ab; ein direkter Aufruf von `/404` findet keine Datei und landet im Server-Router ohne Seitencode (`FailedToFindPageMapSSR`). Lösung: `prerender = false`.
- **Startseite LCP 12,7 s (Lighthouse, Handy):** Das Hero-Logo `Planexus_Home-…png` (1.534 KB) ist auf dem Handy per `hidden md:block` ausgeblendet, wird aber trotzdem geladen und konkurriert mit den wichtigen Dateien. Der Cookie-Banner ist nicht die Ursache (er wird schon beim Parsen eingeblendet; Annahme A1b im Bericht war falsch). Der Hero ist laut Kundenwunsch unantastbar → **keine Änderung ohne ausdrückliches Ja** (z. B. pixelgleiche WebP-Fassung oder `loading="lazy"` nur für das ausgeblendete Handy-Logo).
- **Doppelter Cache-Control:** Die Node-App liefert `public, max-age=0`, nginx hängt mit `add_header` eine zweite Zeile an. Lösung: `proxy_hide_header Cache-Control;` in der nginx-Vorlage.

## Hinweis Ladezeit lokal

Lokale Lighthouse-Leistungswerte (69–73) sind nicht mit live vergleichbar: lokal fehlt die gzip-Komprimierung von nginx. Vergleich Hub vorher (live 77 / LCP 6,3 s) gegen nachher erst nach Deploy.

## Unabhängige Code-Prüfung (requesting-code-review) und Nacharbeit

Urteil des Prüfers: „Mit Korrekturen“, nichts Kritisches. Umgesetzt:
1. Wichtig – Zürich-Description DE/EN behauptete „BSL-3 nach SIA 261“ (SIA 261 regelt Tragwerks-/Erdbebenlasten). Neu: „BSL-3, GMP-Reinraum, Erdbeben-Statik nach SIA 261 …“ (149 Zeichen). Im Build geprüft.
2. Handys mit hoher Pixeldichte: 1200w-Variante ergänzt (153 KB), 1600w auf 226 KB verkleinert.
3. Ankertexte: „Break-Even-Nutzungsdauer“/„break-even period of use“ statt „Faustformel:“; in den Ausstattungskacheln Link vom fetten Etikett in den Fließtext verschoben (einheitlich).
4. EN „Smart Lab-ready for LIMS and ELN“ vollständig verlinkt.
5. Schema: `provider` der 24 Städteseiten nur noch Verweis `@id` + Name.
6. Tote Formulartexte `subject*` aus `src/i18n/ui.ts` entfernt.
7. nginx-Vorlage: eigener Block `/admin|/api` mit `Cache-Control: no-store`.
8. Offen bis Deploy: Formular-Volldurchlauf mit Speichern (Satz 12).

Danach: Build Exit 0, Prüfskript 19/19 grün, Lighthouse Barrierefreiheit Kaufen/Mieten/EN-Kaufen je 100.

## Phase 2 (20.11.2026)

Gegenprobe vorher: Sätze 23–28 rot (Mieten 967 W/4 FAQ, Kaufen 957 W/4 FAQ, Hub 1.100 W ohne Maßabschnitt, Laborabzug-Artikel fehlt, BSL ohne Begriffsklärung/Vergleich, Genehmigung/Checkliste ohne neue Abschnitte).
Nachher: Build Exit 0, Prüfskript **25/25 grün**.

| Satz | Geprüft wie | Ergebnis |
|---|---|---|
| 23 | Skript | Mieten 1.674 W/8 FAQ, Kaufen 1.605 W/8 FAQ, EN Rent 1.922 W/8, EN Buy 1.856 W/8; alle FAQ sichtbar |
| 24 | Skript | /laborcontainer 1.959 W, /en/lab-containers 2.324 W, Maßabschnitt mit ISO 668 |
| 25 | Skript | /magazin/laborabzug-pruefen und /en/magazine/fume-cupboard-testing: Article, Breadcrumb, FAQPage, Titel/Description in Grenzen, 1 H1, in Sitemap |
| 26 | Skript | Alter Abzug-Artikel ↔ neuer Artikel verlinkt, in Magazinlisten DE/EN |
| 27 | Skript | BSL DE/EN: Abschnitt „Was bedeutet BSL?“ + Vergleichstabelle |
| 28 | Skript | Genehmigung: Abschnitt „Braucht ein Container eine Baugenehmigung?“; Checkliste: „Zwei 20-Fuß-Container oder ein 40-Fuß-Container?“ |
| 29 | Suche in allen geänderten/neuen Dateien | 0 €-Beträge in Seitentexten; alle neuen Zahlen aus Recherche-Fundstellen (scratchpad/recherche-*.md) bzw. vorhandenen Website-Angaben (LABtoGO-Maße). TRGS 526 Nr. 7.3 im Original gelesen (BGN-Vorschriftendatenbank, 20.11.2026) |
| 30 | – | nach Deploy |

Zusätzlich:
- FAQ-Abgleich über alle 142+ Seiten: 791 Fragen, 0 ohne sichtbare Entsprechung (vorher 17 in 10 älteren Artikeln – Schema an sichtbare Frage angeglichen).
- Lighthouse lokal (Barrierefreiheit/SEO): Hub, Mieten, Kaufen, Laborabzug DE/EN je 100/100; BSL, Genehmigung, Checkliste nach Korrektur der Überschriften-Ebenen (90 Überschriften in 24 Artikeln), Knopfbeschriftungen und Kontrast je 100.

### Korrigierte Falschaussagen (gefunden in der Recherche)
- Kaufen DE/EN: „AfA 10–15 Jahre“ → 10 Jahre (AfA-Tabelle AV Nr. 3.6), Gebäudefall bei fester Gründung (BFH III R 47/93).
- Übersicht DE/EN: „ÖNORM B 1300“ (regelt Objektsicherheitsprüfungen für Wohngebäude) entfernt; Festbau-Dauer vereinheitlicht („oft 24 Monate und länger“); „hunderte realisierte Projekte“ entfernt (widersprach „50+“).
- Genehmigung DE/EN: „3 Monate verfahrensfrei“-Tabellenspalte und „30–75 m²“ entfernt (MBO/LBO BW/BayBO kennen 3 Monate nur für Messegelände; Grenzen in m³); unbelegte Spalte „Besonderheit Labor“ entfernt.
- BSL DE/EN: „30 bis 50 Pascal“ → TRBA-Wortlaut (ständiger, kontrollierter Unterdruck mit Alarm); Duschpassage nur nach Gefährdungsbeurteilung.
- Checkliste DE/EN: „Pflicht ab 20 Litern“ → TRGS 510 empfiehlt; Giftschrank-Fundstelle ChemVerbotsV → GefStoffV § 8 Abs. 7 / TRGS 510 Nr. 4.3.
- Abzug-Artikel DE/EN: DIN EN 14175-7 = Abrauchabzüge (nicht „Sonderbauformen“); Teil 5 als CEN/TS gekennzeichnet.
- Mieten/Kaufen/Übersicht: „Konform mit BioStoffV …“ → „Ausgelegt nach …“.

### Unabhängige Prüfung Phase 2 und Nacharbeit
Urteil „Mit Korrekturen“, nichts Kritisches. Umgesetzt:
1. Gleiche Falschaussagen auf weiteren Seiten korrigiert (DE/EN): Kosten-Artikel und Energiewende-Artikel (AfA 10–15 J.), Projektablauf (3-Monats-Regel), Übergangslabor (Fliegender Bau/vereinfachtes Verfahren „<100 m², bis fünf Jahre“). Danach im Build: 0 Treffer für die alten Formulierungen außerhalb der CH-Städteseiten.
2. BFH III R 47/93 im Volltext gelesen (lexetius.com/1996,41): „Bürocontainer, die auf festen Fundamenten ruhen, sind … unabhängig von ihrer Zweckbestimmung als Gebäude anzusehen“; ohne Fundament zählt dauernde Nutzung und äußere Ortsfestigkeit. Formulierung „ohne feste Gründung in der Regel beweglich“ entsprechend korrigiert; AfA-Kennzahl im Kaufen-Hero durch „BSL-3 bis Sicherheitsstufe“ ersetzt; Hinweis Steuerberatung ergänzt.
3. nginx-Vorlage: Kopierschritt für planexus-cache-map.conf ergänzt.
4.–12. § 61-Liste vollständig (Gerüste, Toilettenwagen, Landesverteidigung); Transport-Satz eingeschränkt; „gehört“ → „eignet sich“; Laborabzug: DGUV-213-850-Satz abgeschwächt, Quellenliste ergänzt (DIN EN 14175-6/-7, DIN 12924-1, DGUV 213-850), Inbetriebnahme-Zeile auf TRGS 526 Nr. 7.1 gestützt; TRGS 526 Nr. 7.4 präzisiert (Wortlaut selbst gelesen – Prüferhinweis „unbelegt“ widerlegt); ASR-Minderung 0,25 m ergänzt; Hub-BSL-FAQ „Ausgelegt nach“, Dusche nach Gefährdungsbeurteilung; BSL-Tabelle Ausnahme RG 3(**); Bayern „außer im Außenbereich“; EN-Begriffe „undesignated outlying area“, „combustion appliances“; Pfeile #5c7300 mit aria-hidden; DIN EN 14175-5 „Installation &amp; Wartung (CEN/TS)“.
Danach: Build Exit 0, Prüfskript 25/25, FAQ-Abgleich 791/0.
Offen gelassen (Kundenbestätigung, Phase 3): H14-Filter und gefilterte Zuluft im BSL-Artikel als Planexus-Ausführung; Lebensdauer 15–20 J., Wiederverkauf 40–50 %, Wartung 2–4 %, Klimatisierung 30–40 %, 48-h-Aufstellung; CH/AT-Fristaussagen auf Städteseiten.
