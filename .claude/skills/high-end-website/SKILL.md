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

## Bilder
Reihenfolge: Kundenfotos (Vollbau) → Gratis-Stockfotos von Pexels über rankPilot (Entwurf und Live, wenn die Qualität stimmt; Hero mindestens 2400 px breit, sonst 1600 px; Bildnachweis im Impressum) → KI nur als Ersatz nach Joachims Ja mit Betrag. Keine Originalfotos des Kunden im Entwurf. Videos werden nicht gebaut, nur der Hinweis „Video möglich – Extra-Posten“. Bildaufträge vermeiden Schrift und fremde Logos; Alt-Texte behaupten nie, es sei der Betrieb selbst. AVIF/WebP, feste Maße.

## Pflicht vor „fertig“
Lighthouse mobil ≥ 90/95/95/95, CLS < 0,1, Kopfzeile und Menü bedienbar und lesbar, kein Überlauf in 2560/1440/1280/1024/390/360, keine Konsolenfehler, Links ok, axe ohne ernste Verstöße, Formular funktioniert, rankPilot-Liste vollständig, unabhängige Prüfung bestanden. Live nur nach Joachims Ja, ohne Platzhalter.
