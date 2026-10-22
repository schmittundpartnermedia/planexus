# Prüfprotokoll: Magazin-Artikel „S1- und S2-Labor: Anforderungen nach GenTSV und BioStoffV“

Grundlage: `docs/ABNAHME-magazin-s1-s2-labor.md`. Geprüft am 22.10.2026 gegen einen frischen Build
(`lockf -t 3600 /tmp/elevum-bau.lock npm run build`, Exit 0, „Complete!“) in `dist/client/`.
Prüfskript: liest `index.html` aus `dist/client`, zählt H1, Title, Description, JSON-LD, FAQ, Wörter, Links, Bilder.
Commit: 4ecd38d

| Nr. | Satz der Abnahmeliste | Geprüft wie | Ergebnis |
|---|---|---|---|
| 1 | Genau eine H1 | Prüfskript, DE-Seite | 1 H1: „S1- und S2-Labor: Anforderungen nach GenTSV und BioStoffV“ ✓ |
| 2 | ≥ 3.000 Wörter | Wörter im `<article>` (Fließtext, Tabellen, Kästen) | DE 3.286, dazu 507 Wörter FAQ ✓ |
| 3 | Rechtsaussagen mit Primärquelle | Fakten gegen gesetze-im-internet.de (GenTG §§ 6, 7, 8, 12; BioStoffV §§ 15, 16, Anhang II; MuSchG § 11), buzer.de (GenTSV Anlage 2), BAG (ESV), TRGS 526 abgeglichen; Quellenliste am Artikelende | ✓ |
| 4 | S1 Anzeige / S2 Anmeldung 45 Tage / S3–S4 Genehmigung; nie „S2 ist genehmigungspflichtig“ | Tabelle im Artikel; Textsuche „genehmigungspflichtig“ im gerenderten Text | 1 Treffer: nur die FAQ-Frage „Ist ein S2-Labor genehmigungspflichtig?“, Antwort „nicht zwingend … Anmeldung“ ✓ |
| 5 | Keine Schleuse, kein Unterdruck, kein HEPA bei Schutzstufe 2 | Abschnitt „Was ein S2-Labor nicht braucht“ gegen BioStoffV Anhang II Nr. 2, 4, 5 | ✓ |
| 6 | Keine Preise, keine erfundenen Referenzen | Suche „€“, „EUR“, „Euro“: 0 Treffer; Uni Göttingen nicht genannt, BioM nur als Quelle für Marktlage | ✓ |
| 7 | Planexus-Aussagen gedeckt | „S1- und S2-Container“, „8 bis 14 Wochen“, „LABtoGO S2-fähig“ stehen schon auf `/laborcontainer`, `/laborcontainer/labtogo`, `/branchen/forschung-hochschule` | ✓ |
| 8 | Title ≤ 60 Zeichen | Prüfskript | DE 53 („S2-Labor Anforderungen: Checkliste GenTSV & BioStoffV“), EN 50 ✓ |
| 9 | Description ≤ 155 | Prüfskript | DE 139, EN 145 ✓ |
| 10 | ≥ 3 Schema-Typen | JSON-LD im HTML | Article, BreadcrumbList, FAQPage (+ Organization, LocalBusiness, WebSite aus dem Layout) ✓ |
| 11 | ≥ 6 FAQ, Schema = sichtbare Frage | Abgleich `name` ↔ `<summary>` | 8 FAQ, 0 Abweichungen (DE und EN) ✓ |
| 12 | publisher.logo | JSON-LD | `https://planexus.de/images/planexus-logo.png` ✓ |
| 13 | ≥ 10 interne Links ohne 404 | Links im Inhaltsbereich, Ziel als Datei in `dist/client` gesucht | DE 25, EN 25, fehlende Ziele: keine ✓ |
| 14 | Breadcrumbs sichtbar + Schema | HTML | sichtbar „Start › Magazin › S1/S2-Labor“, BreadcrumbList vorhanden ✓ |
| 15 | Bilder mit Alt, WebP, lazy | Prüfskript | Artikelbild `magazin-bsl-labor.webp`, Alt-Text, `loading="lazy"` ✓. Hinweis: Die Karten „Ähnliche Artikel“ zeigen die hinterlegten Vorschaubilder der anderen Artikel (teils `.jpg`) – bestehendes Verhalten der Komponente `RelatedArticles`, gilt für alle Artikel |
| 16 | Canonical + hreflang | HTML-Kopf | Canonical `https://planexus.de/magazin/s1-s2-labor-anforderungen`; hreflang de/en/x-default korrekt ✓ |
| 17 | Ganz oben in `/magazin` | `dist/client/magazin/index.html`, erster Artikel-Link | `/magazin/s1-s2-labor-anforderungen` ✓ (EN: `/en/magazine/s1-s2-lab-requirements-germany` ✓) |
| 18 | Drei „Ähnliche Artikel“ inkl. BSL | HTML der Seite | BSL-2/BSL-3, Genehmigung, Klimatisierung ✓. Zusätzlich verlinkt jetzt der BSL-Artikel zurück (DE und EN) ✓ |
| 19 | In der Sitemap mit hreflang | `dist/client/sitemap-0.xml` | `<loc>` vorhanden mit hreflang de-DE, en, x-default ✓ |
| 20 | Englische Fassung | Prüfskript auf `/en/magazine/s1-s2-lab-requirements-germany` | 1 H1, 3.845 Wörter, 8 FAQ ohne Abweichung, 25 englische interne Links ohne 404, British English ✓ |
| 21 | Sprachumschalter führt hin und zurück | Navbar-Link `hreflang=en` auf DE-Seite (Dev-Server, 375 px) | `/en/magazine/s1-s2-lab-requirements-germany` ✓ |
| 22 | Build sauber, beide `index.html` vorhanden | Build-Log, `ls` | Exit 0, beide Dateien (99 KB / 98 KB) ✓ |
| 23 | Handy 375 px ohne waagrechtes Scrollen | Eingebauter Browser, 375 × 812, `scrollWidth` | `scrollWidth` 375 = `innerWidth` 375; alle 3 Tabellen scrollen in ihrem Kasten (`overflow-x: auto`) ✓ |

## Befund nebenbei (nicht Teil dieses Auftrags, nicht geändert)

Bei der Faktenprüfung fielen auf bestehenden Seiten falsche Rechtsaussagen zu S1/S2 auf:
- `src/pages/branchen/forschung-hochschule.astro`: „S2-Anlagen nach GenTSV sind genehmigungspflichtig nach GenTG §8“, „ZKBS-Anzeige“ (Anzeige/Anmeldung geht an die Landesbehörde, nicht an die ZKBS).
- `src/pages/magazin/laborcontainer-genehmigung-baurecht-vorschriften.astro`: „Für ein Standard-S1-Labor rechnen Sie mit 8 bis 12 Wochen für die Genehmigung“ (S1 = Anzeige, Beginn sofort nach Eingang).
- Weitere Stellen mit „S2–S4 genehmigungspflichtig“, „S1-Anlagen: nur Anzeige, 4–8 Wochen“, „Für S2 … separate Personal- und Materialschleusen“, „ZKBS-Anzeige“: `branchen/pharma-biotech`, `standorte`, `branchen/public-health-krisenvorsorge`, `leistungen/beratung` und die englischen Gegenstücke.
Ursache: frühere Texte ohne Abgleich mit § 8/§ 12 GenTG und BioStoffV Anhang II. Lösung: eigene Korrektur aller Stellen DE/EN mit den Belegen aus diesem Artikel.
