# STAND – Planexus Website

## 24.11.2026 (2) – Schreibweise „design by ELEVUM“

Joachims Vorgabe wörtlich: „design by ELEVUM design klein schreiben ohne als textlink unterstrcihen aber mit Link zu elevum“. Umgesetzt: der ganze Text „design by ELEVUM“ ist der Link auf https://elevum.io/ (nofollow, neues Fenster), ohne Unterstreichung, auch nicht beim Darüberfahren; Hover nur über die Farbe der Seite. Test auf die neue Schreibweise nachgezogen. Stand: live seit 24.11.2026 abends (Joachim hat den Server-Befehl ausgeführt), auf https://planexus.de/ geprüft.

Skill-Protokoll: Nicht per Skill-Werkzeug geladen, nach den Regeln gearbeitet: writing-plans (Plan im Chat, kein eigenes Plan-Dokument, weil eine Zeile je Seite), test-driven-development (Test zuerst auf die neue Schreibweise, dann die Fußzeile), verification-before-completion (Bau und Tests grün vor dem Commit). Bewusst weggelassen: Browser-Sichtprüfung und Lighthouse (reine Textänderung im Fuß, Regel „keine Tests bei Textänderungen“), requesting-code-review (Kleinständerung).

## 24.11.2026 – Fuß-Hinweis „Design by ELEVUM“

Im Fuß jeder Seite steht jetzt „Design by ELEVUM“ mit Link auf https://elevum.io/ (nofollow, neues Fenster) statt „Designed by rankPilot.de“. Grund: Entscheidung Joachim 24.11.2026, alle Kundenwebsites tragen den Design-Hinweis von ELEVUM. Test auf den neuen Hinweis nachgezogen. Geprüft: astro check und Bau grün, alle 144 gebauten Seiten tragen den Link, keine mehr mit rankpilot.de/webseiten. Stand: mit dem Eintrag darüber live.

Skill-Protokoll: writing-plans (Plan im Chat), verification-before-completion (Bau und Prüfung grün vor dem Commit).

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
