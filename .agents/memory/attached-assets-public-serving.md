---
name: attached_assets nur über public/ in Production
description: Bilder unter /attached_assets/ müssen nach public/ kopiert werden, sonst 404 in Production
---

# Bilder /attached_assets/ → müssen in public/attached_assets/ liegen

Ein Bild, das im HTML über `/attached_assets/...` referenziert wird, muss physisch
unter `public/attached_assets/...` liegen (nicht nur im Quell-Ordner `attached_assets/`).

**Why:** Der Astro-**Dev**-Server liefert die Quell-`attached_assets/` aus (curl → 200,
image/png) — das täuscht. In **Production** (gebautes `dist/client`, von PM2/Node bzw.
nginx ausgeliefert) wird nur `public/` mitkopiert. Liegt das Bild nur in der Quelle,
ist es im Dev sichtbar, aber in Production 404 (gebrochenes Bild). Das Konvertier-Script
`scripts/convert-images-webp.mjs` kopiert PNGs NICHT von `attached_assets/` nach
`public/attached_assets/`; es erzeugt nur `.webp` neben dem jeweiligen Original.

**How to apply:** Nach Bild-Generierung in `attached_assets/generated_images/`:
1. PNG nach `public/attached_assets/generated_images/` kopieren.
2. `node scripts/convert-images-webp.mjs` ausführen (erzeugt `.webp` in beiden Ordnern).
3. Verifizieren: Datei muss nach `npm run build` in `dist/client/attached_assets/...` liegen.
