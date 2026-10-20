# Prüfprotokoll – Umsetzung Skill-Audit (20.10.2026)

Abnahmeliste: docs/ABNAHME-skill-umsetzung.md. Build: `lockf … npm run build` → „Complete!“, Exit 0 (letzter Lauf 03:56:29); `astro check` 0 Fehler. Geprüft gegen `dist/client` (138 Seiten), lokalen Server mit Wegwerf-DB und Browser (375 px / 1024–1440 px). Commit: noch keiner (wartet auf Freigabe).

| # | Prüfpunkt | Geprüft wie | Ergebnis |
|---|---|---|---|
| 1 | Kein „Pattern-Interrupt“ | Zählung in allen 138 dist-Seiten | 0 Treffer ✔ |
| 2 | Keine „100 % Kundenzufriedenheit“ | Zählung „Kundenzufriedenheit“, „Client/Customer satisfaction“ | 0 ✔ (ersetzt durch „DACH – Lieferung nach DE, AT, CH“) |
| 3 | Award-Überschrift | Zählung „Ausgezeichnet: LABtoGO“ | 0 ✔, neu: „Nominiert: LABtoGO beim Best of Industry Award 2026“ |
| 4 | Erfahrungsangaben stimmig | Zählung „15 Jahren spezialisierter“ | 0 ✔ („über zehn Jahre“) |
| 5 | Kein „kein Wettbewerber“/„namhafte Kunden“ | Zählung DE+EN | 0 ✔ |
| 6 | Labels verbunden, id/name/autocomplete | dist/kontakt: 8 `label for`, Felder mit `name`, `autoComplete`; Browser: Label-Klick fokussiert `email` | ✔ |
| 7 | Firma, Telefon, Anliegen | dist + Browser; Mieten vorbelegt `miete`, Kaufen `kauf` | ✔ |
| 8 | Datenschutz-Satz unter Button | dist/kontakt: Link `/datenschutz` im Formular | ✔ |
| 9 | Ereignis `anfrage_gesendet` | Browser-Durchlauf, `dataLayer` | ✔ (docs/DURCHLAUF-formulare.md) |
| 10 | HTML in Mail als Text | `mailRow` mit `tsx` ausgeführt; Gegenprobe alter Code | ✔ `&lt;b&gt;` |
| 11 | Zusatzfelder gespeichert ohne DB-Änderung | Test-DB Zeile 1 | ✔ |
| 12 | Kein falsches Upload-Versprechen | Zählung „Lastenheft oder beschreiben“ / „specification or describe“ | 0 ✔ |
| 13 | /kontakt Handy: Formular zuerst, 48 h | Browser 375 px: Formular bei 681 px (vorher 1.708), Karte bei 2.515; „48 Stunden“ im HTML | ✔ |
| 14 | Video erst bei Klick | dist: beide `<video>` `preload="none"`; Lighthouse LABtoGO 1.115 KiB (vorher live 30.118 KiB) | ✔ |
| 15 | CSS-Hintergründe als WebP | 36 + 8 Dateien umgestellt, 3 WebP neu erzeugt; Mieten lädt `…_001….webp`, `…_017….webp`; Startseiten-Hero ausgenommen | ✔ |
| 16 | Cookie-Banner statisch | dist: `id="cookie-consent"` im HTML, keine React-Insel; Browser: ablehnen → `localStorage`, `consent_update`; Footer-Link öffnet Einstellungen | ✔; Startseiten-LCP lokal 4,0 s (live vorher 14,7 s) |
| 17 | gzip in nginx-Vorlage | docs/nginx/planexus-gzip.conf + Verweis in planexus.de.conf | ✔ Vorlage; **live einspielen braucht Joachims Ja** |
| 18 | Navigation einzeilig | Browser 1024 (Burger-Menü, kein Überlauf), 1280/1366/1440: kein Element > 40 px hoch, Telefon innerhalb | ✔ |
| 19 | Barrierefreiheit ≥ 95 | Lighthouse lokal: Start 98, Mieten 99, LABtoGO 98, Hamburg 99, Kontakt 99, Pharma 99, EN 98 | ✔ (vorher live 91/93/83/93/92) |
| 20 | Anfrage-Button im ersten Handy-Bildschirm | Browser: feste Leiste „Anfrage stellen / Anrufen“ auf Mieten, Pharma, Hamburg, LABtoGO; springt zum Formular | ✔ (nicht auf Start/Kontakt) |
| 21 | LABtoGO Handy: max. 2 Buttons | Browser: „Jetzt anfragen“, „Innenansicht erleben“ (+ Broschüre); H1 bei 900 px (vorher 980) | ✔ |
| 22 | Title ≤ 60, Description ≤ 155 | Skript über 138 dist-Seiten | 0 Verstöße ✔ (vorher 60 + 59); Start-Title beginnt mit „Laborcontainer“ |
| 23 | Logo im Schema, kein priceRange | dist: Organization `logo` = planexus-logo.png; `priceRange` 0 Treffer | ✔ |
| 24 | LABtoGO-FAQ | dist DE/EN: 6 Fragen, FAQPage-`name` = `<summary>` | ✔ |
| 25 | Datum im Magazin | alle Artikel zeigen Datum; „Aktualisiert: 25. Juni 2026“ beim einzigen Artikel mit abweichendem `dateModified` (DE+EN) | ✔ |
| 26 | llms.txt | lokal HTTP 200 `text/plain`, keine Preise | ✔ lokal; live erst nach Deploy |
| 27 | Kasten Lastenheft-Vorlage | dist: Mieten, Kaufen, /laborcontainer, Artikel (DE+EN) | ✔ |
| 28 | Download + Speicherung | Browser-Durchlauf, Test-DB Zeile 2 | ✔ (Mail an info@ nur mit SMTP – im Test aus) |
| 29 | Word ohne Preise | `textutil`: Inhalt geprüft, 0 × „€“ | ✔ |
| 30 | Datenschutzerklärung | dist /datenschutz + /en/privacy: Abschnitt Download, Stand Oktober 2026 | ✔ |
| 31 | Blaupause/CLAUDE.md | Keyword-Dichte-Pflicht gestrichen; framer-motion statt GSAP; Text-Grün `#5c7300` dokumentiert | ✔ |
| 32 | Startseiten-Hero unverändert | Vergleich Hero-Abschnitt HEAD vs. jetzt (DE + EN) | identisch ✔ |
| 33 | Build | Exit 0, „Complete!“ | ✔ |

## Leistung (Lighthouse Handy, lokal, nach Umbau)
Start 85, Mieten 86, LABtoGO 68, Hamburg 69, Kontakt 72, Pharma 76, EN 71. Lokal läuft ohne nginx-gzip und auf einem stark belasteten Rechner; die Zahlen sind nicht direkt mit live vergleichbar. Sicher messbar: LABtoGO 30.118 → 1.115 KiB, Startseiten-LCP 14,7 → 4,0 s.

## Nicht umgesetzt (braucht Joachim)
- gzip auf dem Server einspielen (Befehl im Bericht).
- Projekte als Fallbeispiele (echte Projektdaten nötig).
- Mieten/Kaufen vertiefen (Konkurrenzanalyse mit Google-DE-Daten nötig).
- Belege für „50+ Projekte“ und „24/7 Service & Support“.
