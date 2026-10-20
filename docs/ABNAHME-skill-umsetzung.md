# Abnahmeliste – Umsetzung Skill-Audit (20.10.2026)

Grundlage: docs/BERICHT-skill-audit.md. Joachims Vorgaben vom 20.10.2026: Startseiten-Hero (Bild, Animation, Logo-PNG, Alt-Text) bleibt unverändert, alle Heros bleiben dunkel. Alles gilt für DE und EN.

## Texte
1. Wenn du eine der 12 Städteseiten (DE/EN) öffnest, steht nirgends „Pattern-Interrupt“/„Pattern interrupt“.
2. Wenn du Startseite oder /leistungen (DE/EN) öffnest, steht dort keine „100 % Kundenzufriedenheit“ mehr, sondern eine belegbare Angabe.
3. Wenn du die Award-Box auf der Startseite liest, heißt die Überschrift nicht mehr „Ausgezeichnet: … nominiert“.
4. Wenn du die Startseite liest, widersprechen sich die Erfahrungsangaben nicht mehr (kein „15 Jahre“ neben „10+ Jahre“/„seit 2016“).
5. Wenn du Städteseiten und /projekte liest, steht kein „kein Wettbewerber im DACH-Raum“ und kein „namhafte Kunden“ mehr.

## Kontaktformular und Kontaktseite
6. Wenn du auf ein Label im Formular klickst, springt der Cursor ins Feld; jedes Feld hat `id`, `name` und `autocomplete`.
7. Wenn du das Formular öffnest, gibt es zusätzlich die optionalen Felder Firma, Telefon und eine Auswahl „Anliegen“ (Miete / Kauf / LABtoGO / noch offen).
8. Wenn du unter den Absende-Button schaust, steht ein Satz mit Link zur Datenschutzerklärung.
9. Wenn eine Anfrage erfolgreich abgeschickt wird, steht im `dataLayer` ein Ereignis `anfrage_gesendet`.
10. Wenn jemand `<b>` oder `<script>` in Name/Betreff/Nachricht schreibt, kommt es in der Benachrichtigungs-Mail als Text an, nicht als HTML.
11. Wenn Firma/Telefon/Anliegen ausgefüllt sind, stehen sie in der Mail und in der gespeicherten Nachricht (ohne Änderung der Datenbank-Tabelle).
12. Wenn du auf Mieten/Kaufen/Laborcontainer (DE/EN) den Formular-Text liest, wird nicht mehr ein Lastenheft-Upload versprochen, den es nicht gibt.
13. Wenn du /kontakt bzw. /en/contact auf dem Handy öffnest, kommt das Formular vor Adresse und Karte, und die 48-Stunden-Zusage steht auf der Seite.

## Leistung
14. Wenn du /laborcontainer/labtogo (DE/EN) öffnest, wird das Video erst geladen, wenn „Innenansicht erleben“ geklickt wird.
15. Wenn eine Seite ein CSS-Hintergrundbild nutzt, zu dem es eine WebP-Datei gibt, wird die WebP-Datei geladen (Startseiten-Hero ausgenommen).
16. Wenn du eine Seite ohne gespeicherte Cookie-Wahl öffnest, steht der Cookie-Banner schon im HTML und braucht kein React; Buttons, Einstellungen und der Footer-Link „Cookie-Einstellungen“ funktionieren wie vorher, Consent Mode wird wie vorher gesetzt.
17. Wenn du `docs/nginx/planexus.de.conf` liest, ist gzip für CSS/JS/SVG/JSON eingeschaltet, und im Bericht steht der fertige Server-Einzeiler.

## Design und Barrierefreiheit
18. Wenn du die Seite bei 1024, 1280, 1366 und 1440 px Breite öffnest, steht jeder Navigationspunkt und die Telefonnummer in einer Zeile.
19. Wenn du Lighthouse (lokal, Handy) auf Start, Mieten, LABtoGO, Hamburg und Kontakt laufen lässt, ist Barrierefreiheit jeweils mindestens 95.
20. Wenn du eine Städte- oder Branchenseite auf dem Handy öffnest, ist im ersten Bildschirm ein Anfrage-Button sichtbar.
21. Wenn du LABtoGO auf dem Handy öffnest, steht weniger vor der H1 (höchstens zwei Buttons im Hero).

## SEO, Schema, KI-Suche
22. Wenn du alle Seiten in dist/client prüfst, ist jeder Title ≤ 60 und jede Description ≤ 155 Zeichen (DE und EN), der Startseiten-Title beginnt mit dem Keyword.
23. Wenn du das Organization-Schema liest, ist das Logo `https://planexus.de/images/planexus-logo.png`; `priceRange` gibt es nicht mehr.
24. Wenn du LABtoGO (DE/EN) öffnest, gibt es einen sichtbaren FAQ-Block, und die FAQPage-`name`s stimmen wortgleich mit den `<summary>` überein.
25. Wenn du einen Magazin-Artikel öffnest, steht sichtbar sein Datum; wo `dateModified` vom Veröffentlichungsdatum abweicht, steht zusätzlich „Aktualisiert: <Datum>“ (Entscheidung: nicht das Git-Datum, weil reine Code-/Farbänderungen sonst als inhaltliche Aktualisierung erscheinen würden).
26. Wenn du https://planexus.de/llms.txt aufrufst (nach Deploy), kommt ein Kurzprofil mit den wichtigsten Seiten, ohne Preise.

## Lead-Magnet
27. Wenn du auf Mieten, Kaufen, /laborcontainer und dem Lastenheft-Artikel (DE/EN) bist, gibt es den Kasten „Lastenheft-Vorlage“.
28. Wenn du dort eine E-Mail eingibst und absendest, bekommst du sofort den Download-Link; die Anfrage wird in der Datenbank gespeichert und info@ benachrichtigt (wenn SMTP gesetzt).
29. Wenn du die Vorlage herunterlädst, ist sie ein ausfüllbares Word-Dokument ohne Preise.
30. Wenn du die Datenschutzerklärung liest, ist der Download mit E-Mail beschrieben.

## Regeln/Doku
31. Wenn du Blaupause.md liest, steht die Keyword-Dichte-Vorgabe nicht mehr als Pflicht drin; CLAUDE.md nennt framer-motion statt GSAP.
32. Wenn du den Startseiten-Hero vergleichst (`git diff` der Hero-Section in index.astro und en/index.astro), ist er unverändert.
33. Wenn `npm run build` läuft, endet es mit „Complete!“ und Exit 0.
