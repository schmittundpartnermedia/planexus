# Durchlauf Kontaktformular + Lastenheft-Vorlage (20.10.2026, lokal)

Umgebung: gebauter Server (`node dist/server/entry.mjs`, Port 4610), Wegwerf-PostgreSQL 16 im Scratchpad (nach dem Test gelöscht), `SMTP_PASS` leer → es wurde keine Mail versendet. Bedienung im Browser mit Handy-Größe 375 × 812.

## 1. Kontaktformular auf /laborcontainer-mieten

| Schritt | Eingabe | Regel | Ergebnis |
|---|---|---|---|
| a | Alles leer, „Anfrage senden“ | Name ≥ 2, E-Mail-Muster, Betreff ≥ 5, Nachricht ≥ 10 Zeichen | 4 Fehlermeldungen, `aria-invalid` an name/email/subject/message, URL unverändert, nichts gespeichert |
| b | Klick auf Label „E-Mail-Adresse *“ | Label mit `for` verbunden | Cursor im Feld `email` |
| c | Name `Test <b>Fett</b>`, E-Mail `test@planexus-test.local`, Firma `Testlabor GmbH`, Telefon `0123 456789`, Anliegen (vorbelegt) `miete`, Betreff `Testanfrage Miete`, Nachricht `Testnachricht <script>alert(1)</script> fuer den Durchlauf.` | Honeypot leer, Zeit-Falle ≥ 3 s erfüllt, Längen ok, ≤ 5 Links | Erfolgsmeldung, `dataLayer`: `{event: "anfrage_gesendet", anfrage_anliegen: "miete", anfrage_seite: "/laborcontainer-mieten"}` |

Gespeichert (Tabelle `contact_messages`):

```
id 1 | name: Test <b>Fett</b> | email: test@planexus-test.local | subject: Testanfrage Miete
message: Firma: Testlabor GmbH ⏎ Telefon: 0123 456789 ⏎ Anliegen: Laborcontainer mieten ⏎ ⏎ Testnachricht <script>alert(1)</script> fuer den Durchlauf.
email_sent: false (kein SMTP im Test)
```

Mail-HTML (Funktion `mailRow`, mit `tsx` ausgeführt): `Test <b>Fett</b>` wird zu `Test &lt;b&gt;Fett&lt;/b&gt;` → kommt als Text an.
Gegenprobe: Der alte Code (`git show HEAD:src/pages/api/contact.ts`) schrieb `${name}` ungefiltert ins HTML → `<b>` wäre als Fettdruck bzw. `<script>` als HTML in der Mail gelandet.

## 2. Lastenheft-Vorlage auf /laborcontainer-mieten

| Schritt | Eingabe | Regel | Ergebnis |
|---|---|---|---|
| a | E-Mail `lead@planexus-test.local`, ohne Haken | Einwilligung Pflicht | Meldung „Bitte bestätigen Sie die Einwilligung …“, nichts gespeichert |
| b | Haken gesetzt, absenden | E-Mail-Muster, Einwilligung `true`, Zeit-Falle ≥ 2 s | Download-Knopf → `/downloads/planexus-lastenheft-vorlage-laborcontainer.docx` (HTTP 200, 41.025 Bytes, Word-Typ); `dataLayer`: `lead_magnet_lastenheft` |

Gespeichert:

```
id 2 | name: lead@planexus-test.local | email: lead@planexus-test.local | subject: Download: Lastenheft-Vorlage
message: Lastenheft-Vorlage heruntergeladen. ⏎ Seite: /laborcontainer-mieten ⏎ Einwilligung: Planexus darf einmal per E-Mail zum Laborprojekt Kontakt aufnehmen (Checkbox bestätigt).
```

## 3. Schutzregeln (curl gegen den lokalen Server)

| Anfrage | Ergebnis |
|---|---|
| `/api/lastenheft` mit E-Mail `x` | 400 `invalid-email`, nichts gespeichert |
| `/api/lastenheft` ohne Einwilligung | 400 `consent-required`, nichts gespeichert |
| `/api/lastenheft` nach 100 ms (Bot-Zeit) | 200 mit Download-Link, **nichts gespeichert** (Zeit-Falle) |
| `/api/contact` mit Telefon > 50 Zeichen | 400 „Ungültige Eingabe.“ |
| Formular ohne JavaScript (Form-POST, gleiche Herkunft) | 303 zurück auf `/laborcontainer-mieten`, nichts gespeichert, keine Daten in der URL |
| Form-POST von fremder Herkunft | 403 (Astro-Herkunftsprüfung) |

Fund während des Tests: Vor der Absicherung sendete der Browser das Formular ohne geladenes React als GET → Eingaben standen in der Adresszeile. Behoben mit `method="post"` + Rückleitung (Schritt „Formular ohne JavaScript“).
