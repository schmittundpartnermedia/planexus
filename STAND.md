# STAND – Planexus Website

## 20.10.2026 – Umsetzung Skill-Audit (docs/BERICHT-skill-audit.md)

Vorgaben von Joachim: Startseiten-Hero (Bild, Animation, Logo-PNG, Alt-Text) bleibt unverändert, alle Heros bleiben dunkel. Abnahme: docs/ABNAHME-skill-umsetzung.md, Nachweise: docs/PRUEFUNG-skill-umsetzung.md.

### Entscheidungen (sicherere Auslegung, ohne Rückfrage getroffen)
- „100 % Kundenzufriedenheit“ ersetzt durch „DACH – Lieferung nach Deutschland, Österreich und in die Schweiz“ (belegbar). „50+ Projekte“ und „24/7 Service & Support“ (nur /leistungen) bleiben stehen – **Beleg bei Joachim**.
- „15 Jahre Engineering-Praxis“ auf „über zehn Jahre Praxis im Laborcontainerbau“ angeglichen (passt zu „10+ Jahre“ und „seit 2016“).
- Grüner Kleintext auf hellem Grund: neuer Textton `#5c7300` (WCAG AA). Akzentfarbe `#bbd700` unverändert; große Schrift nutzt `#7a9900`; Icons unverändert.
- Lead-Magnet: Download sofort nach E-Mail + Einwilligung; an die eingegebene Adresse wird keine Mail verschickt (Missbrauchsschutz). Speicherung in `contact_messages` (keine DB-Änderung nötig).
- Kontaktformular-Zusatzfelder (Firma, Telefon, Anliegen) werden in Mail und Nachricht gespeichert, nicht in eigenen DB-Spalten (kein `db:push` nötig).
- Kein Datei-Upload im Formular (Sicherheit/Speicher); stattdessen Hinweis „Lastenheft an info@planexus.de“.
- „Aktualisiert“-Datum nur, wo `dateModified` vom Veröffentlichungsdatum abweicht (nicht Git-Datum).
- Handy-Anfrageleiste auf allen Seiten außer Startseite (Hero bleibt optisch unberührt) und Kontaktseite.
- Blaupause: Keyword-Dichte-Pflicht (1,8–2,2 %) gestrichen.

### Offen (braucht Joachim)
- erledigt 20.10.2026: nginx-gzip live eingespielt (nginx -t erfolgreich, reload; CSS/JS/Text mit content-encoding: gzip und Vary geprüft).
- Projekte-Seite als anonymisierte Fallbeispiele – braucht echte Projektdaten (Branche, Region, Fläche, Bauzeit).
- Mieten/Kaufen inhaltlich vertiefen – braucht Konkurrenzanalyse mit Google-DE-Daten.
- Commit bcf0d9a gepusht (Freigabe Joachim 20.10.2026). Live-Deploy macht Joachim per SSH-Einzeiler.
