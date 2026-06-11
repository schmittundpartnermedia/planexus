---
name: Schema publisher.logo Pfad
description: Korrekter Logo-Pfad für Schema.org publisher.logo in Magazin-Artikeln
---

# Schema publisher.logo: korrekter Pfad

In den Magazin-Artikeln (`src/pages/magazin/*.astro`) muss das JSON-LD-Feld
`publisher.logo.url` auf `https://planexus.de/images/planexus-logo.png` zeigen.

**Why:** Mehrere Artikel hatten historisch `https://planexus.de/Planexus-logo.png`
(Root-Pfad, Großschreibung) — diese Datei existiert nicht (404), was den Rich Result
(Google) ungültig macht. Die real existierende Datei liegt unter
`public/images/planexus-logo.png` (+ `.webp`).

**How to apply:** Beim Erstellen eines neuen Magazin-Artikels (Copy von Vorlage) den
publisher-Logo-Pfad prüfen. Andere existierende Logos: `public/images/labtogo-logo.png`.
