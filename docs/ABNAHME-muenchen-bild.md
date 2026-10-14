# Abnahme: München-Seiten – fehlendes Hero-/OG-Bild ersetzen

Ausgangslage: `/laborcontainer-muenchen` und `/en/lab-containers-munich` verweisen auf `/attached_assets/Laborcontainer_006_1769688326917.jpg`, die Datei hat nie existiert → 404 für Hero-Hintergrund und og:image.

Gewähltes Ersatzbild: `/attached_assets/Laborcontainer_010_1769690502589.jpg` (Außenaufnahme Laborcontainer mit Lüftungsleitungen, 1980 × 1485 px, WebP liegt daneben). Wird auf keiner anderen Städteseite verwendet (nur Hub `/laborcontainer` und Projekte-Galerie).

1. Wenn man in `src/` nach `Laborcontainer_006` sucht, dann findet man nichts mehr.
2. Wenn man `dist/client/laborcontainer-muenchen/index.html` und `dist/client/en/lab-containers-munich/index.html` öffnet, dann zeigt `og:image` auf `https://planexus.de/attached_assets/Laborcontainer_010_1769690502589.jpg`.
3. Wenn man den Hero-`<picture>` in beiden Dateien ansieht, dann gibt es eine `<source type="image/webp">` auf `Laborcontainer_010_1769690502589.webp` und ein `<img>` mit `width="1980" height="1485"`, die den echten Pixelmaßen der Datei entsprechen.
4. Wenn man `dist/client/attached_assets/` ansieht, dann liegen dort `Laborcontainer_010_1769690502589.jpg` und `.webp`.
5. Wenn man den Alt-Text liest, dann beschreibt er nur, was auf dem Foto zu sehen ist, und behauptet weder einen Standort München noch Merkmale, die das Foto nicht zeigt.
6. Wenn man die Bildverwendung aller Städteseiten (DE + EN) auflistet, dann nutzt keine andere Städteseite `Laborcontainer_010`.
7. Wenn `npm run check` und `npm run build` laufen, dann enden beide ohne Fehler.
8. Wenn man alle internen `href`/`src`/`srcset`/`og:image`-Verweise aller HTML-Dateien in `dist/client` gegen die Dateien in `dist/client` prüft, dann fehlt keine einzige Datei.
9. Gegenprobe: Wenn man denselben Linkcheck auf den Build-Stand vor der Änderung anwendet, dann meldet er `Laborcontainer_006_1769688326917.jpg` als fehlend (der Check erkennt den Fehler also wirklich).

## Erweiterung (beim Bauen gefunden, gleiche Fehlerart)

Der Linkcheck prüft jetzt zusätzlich `srcset`, `og:image`/`twitter:image` und Bild-URLs im JSON-LD. Dabei fielen vier weitere Verweise auf nicht vorhandene Dateien auf. Sie fallen unter Satz 8 und werden mit behoben (reine Pfadkorrektur, Bild existiert jeweils):

10. Wenn man `src/` nach `Planexus-logo.png` durchsucht, dann findet man nichts; `publisher.logo` auf `/ueber-uns/auszeichnungen`, `/en/about/awards`, `/laborcontainer/labtogo`, `/en/lab-containers/labtogo` zeigt auf `https://planexus.de/images/planexus-logo.png`.
11. Wenn man das JSON-LD von `/en/magazine/lab-container-costs-prices-2026` liest, dann zeigt `image` auf `https://planexus.de/magazin/laborcontainer-kosten-preise-hero.png` (statt `/en/magazine/…`).
12. Wenn man das JSON-LD von `/en/team/sven-biewald` und `/en/team/thomas-boss` liest, dann zeigt `image` auf `https://planexus.de/team/<name>.jpg` (statt `/en/team/…`).
