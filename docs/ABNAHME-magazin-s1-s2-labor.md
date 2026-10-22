# Abnahmeliste: Magazin-Artikel „S1- und S2-Labor: Anforderungen nach GenTSV und BioStoffV“

Auftrag (Joachim, 22.10.2026): Blog-Thema 1 aus der Themenrecherche nach `Blaupause.md` schreiben.
Ziel-Keywords: „s2 labor anforderungen“, „s2 labor bauliche anforderungen“, „s1 labor anforderungen“, „s2 labor anforderungen lüftung“ (Google-Vorschläge, abgerufen 22.10.2026).

Fertig, wenn jeder Satz belegt ist (Nachweis in `docs/PRUEFUNG-magazin-s1-s2-labor.md`):

## Inhalt
1. Wenn man `/magazin/s1-s2-labor-anforderungen` öffnet, sieht man genau eine H1 „S1- und S2-Labor: Anforderungen nach GenTSV und BioStoffV“.
2. Der Fließtext hat mindestens 3.000 Wörter (Blaupause, Phase 3).
3. Jede Rechtsaussage ist mit Primärquelle belegt (GenTG §§ 7, 8, 12; GenTSV Anlage 2; BioStoffV §§ 15, 16 und Anhang II; MuSchG § 11; TRGS 526; Schweiz ESV/BAG). Die Quellenliste steht am Artikelende.
4. Der Artikel sagt richtig: S1 = Anzeige (Beginn sofort nach Eingang), S2 = Anmeldung (Beginn nach 45 Tagen oder früher mit Zustimmung), S3/S4 = Genehmigung. Nirgends steht „S2 ist genehmigungspflichtig“.
5. Der Artikel sagt richtig: Für Schutzstufe 2 verlangt die BioStoffV (Anhang II) weder Schleuse noch ständigen Unterdruck noch HEPA-Filter für Zu- und Abluft.
6. Keine Preise, keine €-Beträge, keine erfundenen Kunden oder Referenzen. Fremde Institutionen (Uni Göttingen, BioM) erscheinen nur als Quelle oder Marktkontext.
7. Kein Marketing-Ton: Aussagen zu Planexus decken sich mit dem, was schon auf der Seite steht (S1/S2-Container, 8 bis 14 Wochen Fertigung).

## SEO und Technik
8. Der `<title>` ist höchstens 60 Zeichen lang (ohne „| Planexus“), mit dem Keyword vorne.
9. Die Meta-Description ist höchstens 155 Zeichen lang.
10. Im HTML stehen mindestens drei JSON-LD-Typen: Article, BreadcrumbList, FAQPage.
11. Es gibt mindestens 6 FAQs. Jeder `name` im FAQPage-JSON-LD ist Wort für Wort gleich der sichtbaren Frage im `<summary>`.
12. `publisher.logo` im Article-Schema ist `https://planexus.de/images/planexus-logo.png`.
13. Der Artikel hat mindestens 10 interne Links, und jeder davon führt auf eine Seite, die im Build existiert (kein 404).
14. Breadcrumbs sind sichtbar (Start › Magazin › S1/S2-Labor) und als Schema vorhanden.
15. Alle Bilder haben einen Alt-Text und sind WebP. Bilder unterhalb des ersten Bildschirms laden lazy.
16. Canonical ist `https://planexus.de/magazin/s1-s2-labor-anforderungen`, das hreflang-Paar zeigt auf die englische Fassung.

## Einbindung
17. Der Artikel steht ganz oben in der Magazin-Übersicht `/magazin` (Eintrag in `magazinPosts`).
18. Unter dem Artikel erscheinen drei passende „Ähnliche Artikel“, darunter „BSL-2 und BSL-3 im Container“.
19. Der Artikel steht in der Sitemap (`sitemap-0.xml`) mit DE/EN-hreflang.

## Englische Fassung
20. Wenn man `/en/magazine/s1-s2-lab-requirements-germany` öffnet, sieht man den Artikel in British English mit denselben Fakten, eigener H1, eigenen FAQs (Schema = sichtbare Frage) und englischen internen Links.
21. Der Sprachumschalter auf der deutschen Seite führt zur englischen Seite und umgekehrt.

## Build
22. `npm run build` läuft ohne Fehler durch. Beide Seiten liegen als `index.html` in `dist/client/`.
23. Die Seite ist auf dem Handy (375 px) ohne waagrechtes Scrollen lesbar, Tabellen scrollen innerhalb ihres Kastens.
