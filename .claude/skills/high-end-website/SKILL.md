---
name: high-end-website
description: Maßstab und Regeln für jede Website, die von Hand oder mit dem Webseiten-Builder entsteht – Agentur-Niveau, keine KI-Landingpage, keine erfundenen Fakten, Lighthouse-/rankPilot-Pflicht. Verwenden beim Gestalten, Texten, Bebildern oder Prüfen einer Website für einen Betrieb.
---

# High-End-Website – Maßstab

Gilt für jede Website für einen echten Betrieb, egal ob der Webseiten-Builder sie erzeugt oder sie von Hand entsteht. Vollständige Regeln: `docs/REGELN.md`, Prüfliste: `docs/PRUEFLISTE.md` im Repo `webseiten-builder`.

## Vor dem Start
1. Kosten? Alles Bezahlte (Bilder, Google, APIs) erst nach Joachims Ja mit Betrag.
2. Faktenquelle festlegen: Auftrag, Google-Profil, alte Website. Was nicht belegt ist, wird nicht behauptet – sichtbar als `[PLATZHALTER: …]`.
3. Branche → einer der drei von Joachim **freigegebenen Looks** (`stile/<branche>.json`, `builder looks`). Kein Look ohne Freigabe; nichts mischen, nichts beim Bauen erfinden. Neue oder geänderte Looks erst über die Looks-Übersicht (`builder looks-uebersicht`) zur Freigabe vorlegen.

## Gestaltung
- Eine erkennbare Idee je Seite; ein Hero-Moment; große Größenkontraste; Weißraum; Editorial-Rhythmus.
- Keine Card-Grids von der Stange, kein Shadcn-/Template-Look, keine generischen Verläufe, keine Emojis als Icons.
- Überschriften: längstes Wort passt immer (nie Trennung mitten im Wort).
- Mobil eigenständig gestalten: Vollbild-Menü, Aktionsleiste „Anrufen | Anfrage“, lesbare Größen, Ziele ≥ 44 px.
- Bewegung führt (Überschrift → Text → Bild), nie Dekoration; `prefers-reduced-motion` respektieren.

## Texte
Nur Belegtes; keine Floskeln („kompetenter Partner“, „mit Leidenschaft“ …); belegpflichtige Wörter (Meister, zertifiziert, Garantie, seit …) nur mit Quelle; Kundenstimmen nur wörtlich; Titel ≤ 60 Zeichen mit Ort, Beschreibung ≤ 155, genau eine H1.

## Wirkung (Werbepsychologie, Stand 21.11.2026)
Quelle: geprüfte Teile des Whitepapers „Psychologisch optimierte Ads“ (PSYCHOLOGIE.BIZ). Gilt beim Planen, Texten und Prüfen; ersetzt keine Regel oben – Belegpflicht geht immer vor.
- **Erste Bildschirmansicht (mobil und Desktop):** Headline = was der Kunde bekommt / was sich für ihn ändert · Subline = wie es geht, warum weiterlesen · 2–3 konkrete Vorteile · Bild mit eigener Aussage · ein echter Beleg (Bewertung, Zahl, Referenz) · ein Knopf.
- **Knopf nennt den Nutzen:** z. B. „Rückruf in 24 h anfordern“, „Kostenloses Angebot für Ihre Kühlzelle“ statt „Absenden“ oder „Mehr erfahren“. Daneben steht, was nach dem Klick passiert. Zusagen wie „24 h“ nur, wenn der Kunde sie bestätigt hat.
- **Vertrauen auf drei Säulen:** Kompetenz zeigen statt behaupten (Projekte, Fotos, Ablauf) · Sympathie über echte Menschen und Inhaber · Integrität: sagen, für wen es passt und für wen nicht, keine übertriebenen Versprechen.
- **Reihenfolge:** stärkste belegte Aussage zuerst, Knopf am Ende jedes Abschnitts. Der erste Eindruck färbt alles danach.
- **Anfrage-Formular:** nur Felder, die der erste Kontakt braucht. Telefonnummer nur mit klarem Nutzen daneben.
- **Danke-Seite:** sagt, was jetzt passiert, wann und von wem, und bietet einen nächsten Schritt (Anruf, Termin, Unterlagen). Im STAND an den Kunden: Anfragen innerhalb von Minuten bis Stunden beantworten, nicht nach Tagen.
- **Nicht verwenden:** Emotionstypen mit Hormonen, „Neuro-Conversion-Matrix“, Umsatz-Hochrechnungen, Kniffe wie „Sie haben uns gebeten“, künstliche Verknappung – nicht belegt oder an der Grenze zur Manipulation.

## Bilder
Reihenfolge: Kundenfotos (Vollbau) → Gratis-Stockfotos von Pexels über rankPilot (Entwurf und Live, wenn die Qualität stimmt; Hero mindestens 2400 px breit, sonst 1600 px; Bildnachweis im Impressum) → KI nur als Ersatz nach Joachims Ja mit Betrag. Keine Originalfotos des Kunden im Entwurf. Videos werden nicht gebaut, nur der Hinweis „Video möglich – Extra-Posten“. Bildaufträge vermeiden Schrift und fremde Logos; Alt-Texte behaupten nie, es sei der Betrieb selbst. AVIF/WebP, feste Maße.

## Pflicht vor „fertig“
Lighthouse mobil ≥ 90/95/95/95, CLS < 0,1, Kopfzeile und Menü bedienbar und lesbar, kein Überlauf in 2560/1440/1280/1024/390/360, keine Konsolenfehler, Links ok, axe ohne ernste Verstöße, Formular funktioniert, rankPilot-Liste vollständig, unabhängige Prüfung bestanden, Wirkungs-Check bestanden (Startseite, Leistungsseite, Formular, Danke-Seite: Hält es? Erkennt sich der Besucher? Glaubt er es? Versteht er es sofort? Ist der nächste Schritt klar und attraktiv? – Ergebnis im Prüfbericht). Live nur nach Joachims Ja, ohne Platzhalter.
