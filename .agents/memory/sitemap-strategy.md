---
name: Sitemap-Strategie
description: Wie die Sitemap erzeugt wird und warum lastmod aus Git kommt.
---

Sitemap wird vom `@astrojs/sitemap`-Plugin beim Build erzeugt
(`sitemap-index.xml` + `sitemap-0.xml` in `dist/client`), NICHT mehr als
statische `public/sitemap.xml`. `robots.txt` zeigt auf `sitemap-index.xml`.
`/admin` und `/api` werden per `filter` ausgeschlossen.

`lastmod` wird per `serialize` aus dem letzten Git-Commit-Datum der jeweiligen
Quelldatei gesetzt (`git log -1 --format=%cI -- <datei>`).

**Why:** Statische Sitemap driftet (neue Seiten fehlen) und hatte ein erfundenes
Einheits-lastmod (33x gleicher Tag) -> Google ignoriert das Signal. Echte Git-Daten
sind glaubwürdig und wartungsfrei.
**How to apply:** Sitemap erscheint NUR im Build, nicht im dev-Server. Verifikation
immer über Build + `dist/client/sitemap-0.xml`. Bei GSC-Wechsel muss der
User die neue `sitemap-index.xml` neu einreichen.
