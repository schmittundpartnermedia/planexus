# Abnahme: EN-Money-Seiten-Links + tote Branchen-Links (15.10.2026)

Anlass: Prüfung von PR #1 (/en) und PR #3 (Money-Seiten-Trennung, Commit 98166ee). Auf EN fehlen die Querverlinkungen aus PR #3; drei Branchen-Seiten verlinken auf 404/Redirect-URLs.

Geprüft wird gegen einen frischen `npm run build` in `dist/client`.

1. Wenn du `/en` öffnest, siehst du unter den Hero-Buttons die Zeile „Hire · Buy · LABtoGO“ mit Links auf `/en/rent-lab-containers`, `/en/buy-lab-containers`, `/en/lab-containers/labtogo`.
2. Wenn du `/en/lab-containers` öffnest, siehst du im Hero den Definitionstext („A lab container is a factory-built …“) mit Inline-Links Hire/Buy und die Buttons „Hire a lab container“, „Buy a lab container“, „Discover LABtoGO“ (kein „Get advice now“ mehr).
3. Wenn du auf `/en/lab-containers` zum Abschnitt „Why a Planexus lab container …“ scrollst, siehst du den Absatz zu Hire vs. Buy und zwei Buttons auf Hire/Buy.
4. Wenn du `/en/lab-containers/labtogo` öffnest, siehst du unter dem Hero eine sichtbare Breadcrumb-Leiste „Home › Lab containers › LABtoGO“ (Link auf `/en` und `/en/lab-containers`) und im Hero die Buttons „Hire“ und „Buy“.
5. Wenn du `/en/rent-lab-containers` oder `/en/buy-lab-containers` öffnest, ist „lab container“ im Hero-Text auf `/en/lab-containers` verlinkt, und im Link-Raster unten gibt es eine Karte „Overview – Lab containers“ auf `/en/lab-containers` (wie DE).
6. Title und H1 von `/en`, `/en/lab-containers`, `/en/lab-containers/labtogo`, `/en/rent-lab-containers`, `/en/buy-lab-containers` sind gegenüber vorher unverändert.
7. Wenn du `/branchen/bildung` und `/branchen/forschung-hochschule` öffnest, zeigt kein Link mehr auf `/magazin/laborcontainer-mieten-vs-kaufen`, sondern auf `/magazin/laborcontainer-mieten-oder-kaufen`.
8. Wenn du `/branchen/public-health-krisenvorsorge` öffnest, zeigt kein Link mehr auf `/magazin/laborcontainer-genehmigung-bauantrag` oder `/labtogo`, sondern direkt auf die Zielseiten (die nginx-301-Ziele).
9. In `dist/client` gibt es keinen internen `href="/…"`, der auf eine nicht gebaute Seite oder Datei zeigt.
10. `npm run check` und `npm run build` laufen ohne Fehler durch.
11. Keine Preise, keine erfundenen Referenzen, EN in British English („hire“, „enquire“).
