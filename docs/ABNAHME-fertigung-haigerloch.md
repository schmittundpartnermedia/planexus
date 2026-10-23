# Abnahmeliste: Fertigung nach Haigerloch umziehen (23.10.2026)

Auftrag (Joachim, 23.10.2026): „Die Fertigung ist ganz nach Haigerloch umgezogen. Albstadt bleibt nur das Büro.
Setz Stufe 1 und Stufe 2 um, Kilometer neu berechnen.“
Neue Fertigung: Hospach 1, 72401 Haigerloch, Tel. +49 7474 / 4273000.
Büro bleibt: Am Steinbach 8, 72459 Albstadt-Laufen, Tel. +49 7435 7519 700.

Fertig, wenn (Nachweis in `docs/PRUEFUNG-fertigung-haigerloch.md`):

## Stufe 1: Adressen
1. Wenn man auf einer beliebigen Seite (DE und EN) in den Footer schaut, steht unter „Fertigung“/„Production“
   „Hospach 1, 72401 Haigerloch“ und die Telefonnummer +49 7474 / 4273000 als anklickbarer Link.
2. Wenn man /kontakt und /en/contact öffnet, steht unter „Fertigung“/„Production“ die neue Adresse mit Telefon, und
   die Karte zeigt den Fertigungspunkt in Haigerloch-Hospach (48.3437, 8.7965) statt in Albstadt-Tailfingen.
3. Wenn man den Autorenkasten im Magazin liest, steht bei „Werk“ die Haigerlocher Adresse (vorher stand dort
   fälschlich die Büroadresse).
4. Büroadresse, Impressum, Datenschutz und Firmendaten im JSON-LD (Sitz Albstadt-Laufen) bleiben unverändert.

## Stufe 2: Texte
5. Wenn man das Prüfskript `node scripts/check-fertigung-haigerloch.mjs` nach dem Build laufen lässt, meldet es
   0 Fundstellen: keine „Emil-Mayer-Straße“, „72461“, „Tailfingen“, „Werk Albstadt“, „Albstadt works“, „ab Albstadt“,
   „Made in Albstadt“, „Werk & Zentrale“ mehr (DE und EN).
6. Gegenprobe: Dasselbe Skript auf dem Build vor der Änderung meldet Fundstellen (rot). Gemessen: 807 Fundstellen auf
   142 Seiten (Build vom 22.10.2026).
7. Alle Entfernungen und Fahrzeiten auf den Städteseiten sind ab Haigerloch neu berechnet (OSRM, Straßenroute zur
   Stadtmitte, gerundet auf 10 km, Fahrzeit Pkw gerundet auf eine halbe Stunde) und stimmen mit der Tabelle im
   Prüfprotokoll überein. Die Autobahnangaben passen zur neuen Route (z. B. München jetzt über A81 und A8).
8. Aussagen zum Firmensitz Albstadt (Büro, Impressum, „aus Albstadt“ im Startseiten-Title) bleiben stehen.
9. FAQ-Fragen im JSON-LD sind weiterhin wortgleich mit den sichtbaren Fragen.
10. Startseiten-Hero: Bild, Animation, Logo, Alt-Texte, Größen und Ladeverhalten sind unverändert.
11. `npm run build` läuft ohne Fehler, `astro check` ohne Fehler.
12. Keine neuen Preise, keine erfundenen Angaben. Was über das Werk gesagt wird, ist dasselbe wie vorher, nur der Ort
    ist ein anderer.
