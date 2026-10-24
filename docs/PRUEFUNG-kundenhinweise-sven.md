# Prüfprotokoll: Kundenhinweise aus Svens Mail (25./26.10.2026)

Grundlage: `docs/ABNAHME-kundenhinweise-sven.md`. Geprüft am Build (`dist/client`, 142 HTML-Seiten) mit
`node scripts/check-kundenhinweise-sven.mjs`; als Rückfallprüfung zusätzlich `node scripts/check-fertigung-haigerloch.mjs`.
Commit: der Commit „Kundenhinweise Sven: Festpreis, Werk/Büro, Auszeichnung, Baurecht (DE/EN)“ (siehe `git log`).

## Gegenprobe (vor der Reparatur)

Prüfskript gegen den Build vom Stand `57a0db8`: **452 Fundstellen, Exit 1** – u. a. 348× JSON-LD mit Albstadt ohne
Fertigung, 24× „EU-Award“, je 12× „ausgezeichnet als „Führender Anbieter …““ (DE/EN), 11× pauschale 75-m³-Aussagen,
Satz „Alle Schemas …“ (DE/EN), Widerspruch Festpreis/Pauschalpreis (DE/EN).

## Ergebnis (nach der Reparatur)

| Satz | Geprüft wie | Ergebnis |
|---|---|---|
| 1. Kein „Alle Schemas auf jeder Stadtseite belegt“ | Prüfskript, alle Seiten, Text + JSON-LD | ✓ 0 Fundstellen. Satz auf DE/EN-Startseite gestrichen |
| 2. Festpreis und FAQ widersprechen sich nicht | Prüfskript: Pflichtsätze auf `index.html` und `en/index.html`, alter FAQ-Satz verboten | ✓ Karte: „ein Festpreis nach der Bedarfsanalyse – keine Pauschalpreise vorab“; FAQ: „Verbindlich ist der Festpreis nach der Bedarfsanalyse – keine Pauschalpreise vorab, weil …“ (EN entsprechend) |
| 3. Auszeichnung nur mit Originaltitel | Prüfskript: Mischtitel, „EU-Award“, „Award Winner 2026“, „international prämiert“, „ausgezeichnet als führender …“ verboten | ✓ 0 Fundstellen. 12+12 Städteseiten, Startseite, LABtoGO-Seite, analytica-Artikel, Auszeichnungsseite, `award` im Organisations-Schema (DE/EN) |
| 4. CEO-Award klar getrennt von der Best-of-Industry-Nominierung | Prüfskript: H3 der Award-Karte = „German CEO Excellence Awards 2026“ (DE/EN) | ✓ Die Nominierungskarte darunter sagte schon korrekt „Nominiert … Online-Voting“ und bleibt unverändert |
| 5. JSON-LD mit Albstadt nennt auch die Fertigung Haigerloch | Prüfskript je JSON-LD-Block; alle 834 Blöcke mit `JSON.parse` geprüft | ✓ 0 Fundstellen, 0 ungültige Blöcke. `location` mit „Büro (Firmensitz)“ und „Fertigung“ (bei Personen `workLocation`); zentral über `planexusLocations()` in `src/lib/planexus-address.ts` |
| 6. Fließtext verortet die GmbH nicht ohne Hinweis nur in Albstadt | Prüfskript | ✓ S1/S2-Artikel: „(Büro Albstadt, Fertigung Haigerloch)“; Teamseiten: „Sitz Albstadt“ (DE/EN) |
| 7. Keine pauschale 75-m³-Grenze | Prüfskript (NRW-Seiten ausgenommen) | ✓ 0 Fundstellen. Startseiten-FAQ, Standorte (inkl. falscher Bezeichnung „BauO HB“ für Hamburg → HBauO), Bildung (dazu das allgemeine „LBO §65/66“ → „nach der jeweiligen Landesbauordnung“), Forschung/Hochschule, jeweils DE/EN |
| 8. Build sauber, Prüfskript grün | `lockf … npm run build`, `npx astro check`, beide Prüfskripte | ✓ Build Exit 0; astro check 0 Fehler, 0 Warnungen; Kundenhinweise 0 Fundstellen (142 Seiten); Haigerloch 0 Fundstellen (144 Dateien) |

## Entscheidungen (sicherere Auslegung)

- **Titel der Auszeichnung:** Laut eigener Auszeichnungsseite heißen die Preise „Leading Modular Laboratory Containers
  Provider 2026“ (Planexus GmbH) und „Most Innovative Laboratory Spaces Leader 2026“ (Sven Biewald). Das bisherige
  „Führender Anbieter innovativer Laborräume“ mischte beide Titel und wurde durch den Originaltitel ersetzt. Die Seite
  von EU Business News zeigt eine Cloudflare-Abfrage und war nicht lesbar – Joachim sollte die Titel an der Urkunde bestätigen.
- **Baurecht:** keine neuen Zahlen eingesetzt, sondern die belegbare Aussage: Zuständig ist die jeweilige
  Landesbauordnung; Verfahrensfreiheit gilt meist nur für Gebäude ohne Aufenthaltsräume (so auch im eigenen Artikel
  `/magazin/laborcontainer-genehmigung-baurecht-vorschriften`). Die Düsseldorf-Seiten mit § 62 BauO NRW bleiben.
- **Nicht geändert:** Startseiten-Hero (unantastbar; die Zeile „geplant in Albstadt, gefertigt im Werk Haigerloch“
  ist korrekt), Standortliste (live: alle 12 Orte mit Text), Referenzen.

## Offen

- Live-Stellung: braucht Joachims Freigabe (Push + SSH-Einzeiler). Danach live mit dem Prüfskript-Ansatz gegen die
  Live-URLs prüfen.
