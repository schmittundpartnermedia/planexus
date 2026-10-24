# Abnahmeliste: Kundenhinweise aus Svens Mail (25.10.2026)

Auftrag (Joachim, 25.10.2026): Die von Sven gemeldeten Textfehler reparieren – Festpreis/Pauschalpreis,
Werk/Büro, Auszeichnung, Satz „Alle Schemas …“, 75-m³-Aussage. DE und EN. Geprüft wird der Build (`dist/client`)
mit `node scripts/check-kundenhinweise-sven.mjs`.

Nicht Teil des Auftrags: Standortliste und Österreich (live geprüft, zeigt alle 12 Orte mit Text), Referenzen
(bewusst ohne Kundennamen, Content-Regel), Startseiten-Hero (unantastbar).

1. Wenn man irgendeine Seite öffnet, steht dort nirgends „Alle Schemas auf jeder Stadtseite belegt“ bzw.
   „All schemas documented on every city page“.
2. Wenn man die Startseite (DE/EN) liest, widersprechen sich Leistungskarte und Kosten-FAQ nicht mehr: Beide sagen
   „Festpreis nach der Bedarfsanalyse, keine Pauschalpreise vorab“ (EN sinngemäß). Der Satz „Pauschalpreise sind bei
   Laborcontainern nicht sinnvoll“ / „blanket prices are not meaningful“ steht auf keiner Seite mehr.
3. Wenn eine Seite die German CEO Excellence Awards nennt, steht der Originaltitel in Anführungszeichen –
   „Leading Modular Laboratory Containers Provider 2026“ (Planexus GmbH) bzw. „Most Innovative Laboratory Spaces
   Leader 2026“ (Sven Biewald) – als Titel der Auszeichnung von EU Business News. Die Mischform „Führender Anbieter
   innovativer Laborräume“ / „Leading provider of innovative laboratory spaces“ steht nirgends mehr, ebenso wenig
   freie Aussagen wie „ausgezeichnet als führender Anbieter“, „Award Winner 2026“, „EU-Award“, „international prämiert“.
4. Wenn man die Startseite liest, ist die CEO-Excellence-Auszeichnung klar von der Best-of-Industry-**Nominierung**
   getrennt: Die Überschrift der Award-Karte ist der Name des Wettbewerbs, nicht „Führender Anbieter … 2026“.
5. Wenn eine Seite im JSON-LD die Adresse Albstadt-Laufen nennt, nennt dasselbe JSON-LD auch die Fertigung
   Hospach 1, 72401 Haigerloch – Albstadt ist als Büro, Haigerloch als Fertigung benannt.
6. Wenn ein Fließtext die Planexus GmbH in Albstadt verortet, ist klar, dass das der Sitz/das Büro ist
   (kein „Planexus GmbH in Albstadt“ ohne Hinweis auf die Fertigung in Haigerloch).
7. Wenn eine Seite über Baugenehmigungen in Deutschland allgemein spricht, steht dort keine feste Grenze
   „über 75 m³ = genehmigungspflichtig“ mehr, sondern: hängt von der Landesbauordnung ab, Verfahrensfreiheit gilt
   meist nur für Gebäude ohne Aufenthaltsräume. Ausnahme: die Düsseldorf-Seiten, die § 62 BauO NRW konkret benennen.
8. Wenn man `npm run build` fährt, läuft er ohne Fehler durch, und das Prüfskript meldet 0 Fundstellen.
   Vor der Reparatur meldet es Fundstellen (Gegenprobe).
