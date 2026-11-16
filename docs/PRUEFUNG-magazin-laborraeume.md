# Prüfprotokoll: Magazin-Artikel „Anforderungen an Laborräume“

Grundlage: `docs/ABNAHME-magazin-laborraeume.md`. Geprüft am 16.11.2026.
Build: `lockf -t 3600 /tmp/elevum-bau.lock npm run build`, Exit 0, „Complete!“ (zweiter Lauf nach Anführungszeichen-Korrektur, ebenfalls Exit 0). Einzige Warnung im Log: unbenutzter Import `gt` in `src/pages/api/admin/*` (schon vorher vorhanden, nicht Teil dieses Auftrags).
Prüfskript: liest `dist/client/<route>/index.html` und zählt bzw. vergleicht H1, Title, Description, JSON-LD, FAQ, Links, Bilder, Wörter, Sitemap, eingehende Links.

| Nr. | Satz | Geprüft wie | Ergebnis |
|---|---|---|---|
| 1 | Genau eine H1 mit „Anforderungen an Laborräume“ | Prüfskript | 1 H1: „Anforderungen an Laborräume: Was ein Labor baulich braucht“ ✓ |
| 2 | Fließtext ≥ 2.500 Wörter | Prüfskript (Text im `<article>` ohne Seitenleiste) | DE 2.890, EN 3.364 ✓ |
| 3 | Jede Zahl/Rechtsaussage mit Fundstelle, Quellenliste am Ende | Wortlaut der TRGS 526 Nr. 6 und 7 selbst im Browser gelesen (BGN-Vorschriftendatenbank): Türen 6.2.3, Boden 6.2.4, Lüftung 25 m³ 6.2.5, Notduschen 30 l/min und 6 l/min 6.6, Gasabsperrung 6.5.2, monatliche Prüfung 7.2; ASR A2.3 Nr. 5 (35/35/25/10 m) selbst gelesen. Weitere Werte (ASR A1.2, 213-850 Nr. 6.2.1/6.2.2/6.2.1.1, TRGS 526 Nr. 4.3.3/4.15.1, TRGS 510 Anh. 1, EKAS 1871.d) aus Faktenrecherche mit Fundstelle und Zitat. Nicht Belegtes (RCD-Pflicht, Not-Aus-Pflicht, Österreich-Laborregel) steht nicht als Pflicht im Text | ✓ |
| 4 | Eigener Abschnitt Notdusche/Augendusche | `#notduschen` mit Tabelle (Pflicht, Ort, Wasser, Menge, Ventil, Kennzeichnung, 5 s, Prüfung, Norm) | ✓ |
| 5 | Container-Abschnitt ohne neue Behauptungen | `#container`: nur Planungsfolgen der Regeln; Planexus-Aussagen = Werk Haigerloch, 8 bis 14 Wochen (stehen bereits auf planexus.de) | ✓ |
| 6 | Schweiz und Österreich genannt | EKAS-Richtlinie „Labor“ 1871.d; Österreich ASchG/AStV mit Hinweis Arbeitsinspektorat | ✓ |
| 7 | Keine Preise, keine erfundenen Kunden | Prüfskript: 0 Treffer €/EUR/Euro; Projektfoto ohne Kundennamen (Bild aus Projekt „Mehrgeschossiges Pharmalabor“ auf /projekte) | ✓ |
| 8 | Kein KI-Ton | Prüfskript: 0 Gedankenstriche im Artikeltext; Suche nach „nicht …, sondern“, Floskeln: 0; zwei Doppelpunkt-Enthüllungen umgeschrieben | ✓ |
| 9 | Title ≤ 60 ohne Marke | DE 48, EN 48 Zeichen ✓ |
| 10 | Description ≤ 155 | DE 142, EN 144 ✓ |
| 11 | ≥ 3 JSON-LD-Typen | Article, BreadcrumbList, FAQPage (+ Organization, LocalBusiness, WebSite aus Layout) ✓ |
| 12 | ≥ 6 FAQ, name = summary | 8 FAQ je Sprache, 0 Abweichungen ✓ |
| 13 | publisher.logo | `https://planexus.de/images/planexus-logo.png` ✓ |
| 14 | ≥ 10 interne Links, keine 404 | 22 verschiedene interne Links im Artikel je Sprache, 0 tote Links (auch ganze Seite 0) ✓ |
| 15 | Breadcrumbs sichtbar + Schema | Start › Magazin › Laborräume / Home › Magazine › Laboratory rooms, BreadcrumbList ✓ |
| 16 | Bilder Alt, WebP, lazy | Artikelbild `<picture>` mit WebP-Quelle, Alt-Text, `loading="lazy"`, width/height ✓ |
| 17 | Canonical und hreflang | canonical je Seite korrekt; hreflang de/en/x-default zeigt gegenseitig ✓ |
| 18 | Kurz gesagt, H2 als Fragen, `<time>`, Autorenkasten | Kasten 59 Wörter (DE), H2 als Suchfragen, `<time datetime="2026-11-16">`, Link /team/thomas-boss bzw. /en/team/thomas-boss ✓ |
| 19 | Ganz oben in /magazin und /en/magazine | Prüfskript: erster Artikel-Link der Liste ist der neue Artikel (DE und EN) ✓ |
| 20 | Ähnliche Artikel | S2-Labor, Laborabzug, Brandschutz (DE und EN) ✓ |
| 21 | Sitemap mit hreflang | beide URLs in `sitemap-0.xml`, hreflang de-DE/en/x-default ✓ |
| 22 | ≥ 3 eingehende Links im Fließtext (DE und EN) | S2-Labor, Laborabzug, Ausstattung-Checkliste, je DE und EN (6 Seiten) ✓ |
| 23 | EN-Fassung | British English, eigene H1, 8 eigene FAQ, Schema = sichtbare Frage, englische Links, typografische Anführungszeichen ✓ |
| 24 | Sprachumschalter | DE-Seite verlinkt EN-Fassung, EN-Seite verlinkt DE-Fassung (Browser, Dev-Server) ✓ |
| 25 | Build ohne Fehler, beide index.html | Exit 0, beide Dateien vorhanden ✓ |
| 26 | Handy 375 px ohne waagrechtes Scrollen | Browser 375×812: scrollWidth 375 = Breite, 0 Elemente außerhalb (Tabellen in eigenem Scroll-Kasten), keine Konsolenfehler ✓ |
| 27 | Live | offen: wartet auf Joachims Ja |

## Nebenbefund, mit erledigt
Der bestehende Artikel „Laborcontainer Ausstattung – Checkliste“ (DE/EN) nannte „Notdusche max. 10 m vom Arbeitsplatz“, „Augendusche an jedem Laborspülbecken“, einen „Not-Aus-Schalter“ als TRGS-526-Pflicht und „ehemals GUV-I 8553“. Ursache: frühere Texte ohne Abgleich mit dem Wortlaut. Korrigiert auf TRGS 526 Nr. 6.6.1/6.6.2/6.5.2 (Notdusche am Ausgang 30 l/min, Augendusche 6 l/min, Gasabsperrung außen, Hauptschalter als Empfehlung der 213-850) und „früher BGI/GUV-I 850-0“; Kastenüberschrift neutral „Sicherheitseinrichtungen im Laborcontainer“.

## Hinweis
baua.de war für die automatisierte Abfrage gesperrt (Bot-Schutz). Die Texte der TRGS 526, TRGS 510 und ASR wurden in der Vorschriftendatenbank der BGN gelesen. Eine neuere Ausgabe der TRGS 526 als Februar 2008 wurde nirgends gefunden.
