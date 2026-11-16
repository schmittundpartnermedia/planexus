# Abnahmeliste: Magazin-Artikel „Anforderungen an Laborräume“

Auftrag (Joachim, 16.11.2026): Thema A aus der Themenrecherche vom 16.11.2026 („Mach A“).
Ziel-Keywords: „anforderungen an laborräume“, „laborbau anforderungen“, „notdusche labor pflicht“,
„dguv 213-850 bauliche anforderungen“ (Bing DE und Websuche, 16.11.2026; Google blockierte den Browser mit 429).
DE-Adresse: `/magazin/anforderungen-laborraeume`, EN-Adresse: `/en/magazine/laboratory-room-requirements-germany`.

Fertig, wenn jeder Satz belegt ist (Nachweis in `docs/PRUEFUNG-magazin-laborraeume.md`):

## Inhalt
1. Wenn man `/magazin/anforderungen-laborraeume` öffnet, sieht man genau eine H1, die „Anforderungen an Laborräume“ enthält.
2. Der Fließtext hat mindestens 2.500 Wörter (Bestandsartikel S2: Maßstab; Blaupause nennt 3.000 als Ziel, Tiefe vor Füllwörtern).
3. Jede Zahl und jede Rechtsaussage hat eine Fundstelle (TRGS 526, DGUV-I 213-850, ArbStättV/ASR, DIN EN 15154, TRGS 510). Was in den Originalquellen nicht belegt werden konnte, steht nicht im Artikel. Die Quellenliste steht am Artikelende.
4. Notdusche und Augendusche haben einen eigenen Abschnitt (Pflicht, Ort, Prüfung, Norm).
5. Ein Abschnitt sagt, was sich im Laborcontainer oder Modulbau ändert (Fluchtweg, Türen, Wasser/Frost, Abluft über Dach), ohne Behauptungen, die nicht schon auf planexus.de stehen.
6. Schweiz und Österreich sind mit Namen der jeweiligen Regel kurz genannt.
7. Keine Preise, keine €-Beträge, keine erfundenen Kunden oder Referenzen. Das Projektfoto trägt keinen Kundennamen.
8. Kein Marketing- oder KI-Ton: keine Gedankenstriche im Fließtext, keine „nicht X, sondern Y“-Enthüllungen, keine Superlative ohne Beleg.

## SEO und Technik
9. Der `<title>` ist höchstens 60 Zeichen lang (ohne „| Planexus“), Keyword vorne.
10. Die Meta-Description ist höchstens 155 Zeichen lang.
11. Im HTML stehen mindestens drei JSON-LD-Typen: Article, BreadcrumbList, FAQPage.
12. Es gibt mindestens 6 FAQs. Jeder `name` im FAQPage-JSON-LD ist Wort für Wort gleich der sichtbaren Frage im `<summary>`.
13. `publisher.logo` im Article-Schema ist `https://planexus.de/images/planexus-logo.png`.
14. Der Artikel hat mindestens 10 interne Links, und jeder führt auf eine Seite, die im Build existiert (kein 404).
15. Breadcrumbs sind sichtbar (Start › Magazin › Laborräume) und als Schema vorhanden.
16. Alle Artikelbilder haben einen Alt-Text, werden als WebP ausgeliefert und laden unterhalb des ersten Bildschirms lazy.
17. Canonical ist `https://planexus.de/magazin/anforderungen-laborraeume`, das hreflang-Paar zeigt auf die englische Fassung und zurück.
18. Kurz-gesagt-Kasten (40 bis 70 Wörter) vor dem ersten Abschnitt, H2 als Suchfragen, sichtbares Datum mit `<time>`, Autorenkasten mit Link auf `/team/thomas-boss`.

## Einbindung
19. Der Artikel steht ganz oben in `/magazin` und `/en/magazine`.
20. Unter dem Artikel erscheinen drei passende „Ähnliche Artikel“ (S2-Labor, Laborabzug, Brandschutz).
21. Der Artikel steht in `sitemap-0.xml` mit DE/EN-hreflang.
22. Mindestens drei bestehende Seiten verlinken im Fließtext auf den Artikel (DE und EN).

## Englische Fassung
23. `/en/magazine/laboratory-room-requirements-germany` zeigt den Artikel in British English mit denselben Fakten, eigener H1, eigenen FAQs (Schema = sichtbare Frage) und englischen internen Links.
24. Der Sprachumschalter führt von DE nach EN und zurück.

## Build
25. `npm run build` läuft ohne Fehler. Beide Seiten liegen als `index.html` in `dist/client/`.
26. Auf dem Handy (375 px) gibt es kein waagrechtes Scrollen; Tabellen scrollen in ihrem Kasten.

## Live
27. Nach Joachims Ja: Commit auf `main`, Push, Deploy nach CLAUDE.md, beide Adressen live mit Status 200 geprüft.
