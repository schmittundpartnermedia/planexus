---
name: Build-Verifikation (Astro)
description: Wie der Produktions-Build zuverlässig durchläuft und verifiziert wird.
---

# Build-Verifikation

`npm run build` (astro build) dauert ~100 s (viele Stadt-/Magazinseiten + SSR-Bundle).

**Regel:** Synchron im Vordergrund ausführen mit Log-Redirect in eine **workspace-relative** Datei und Tool-Timeout ~119 s:
`npm run build > build-output.log 2>&1; echo "EXIT=$?"; tail -4 build-output.log`

**Why:**
- Hintergrund-Builds via `nohup ... &` werden in dieser Umgebung abgebrochen → `dist/` wird nicht neu erzeugt, alter Stand bleibt liegen.
- Logs unter `/tmp/` werden zwischendurch bereinigt (Log-Rotation) → `/tmp/*.log` verschwindet mitten im Warten.

**How to apply:** Nach Quelltext-Änderung an einer Seite immer einen frischen Vordergrund-Build fahren und gegen `dist/client/<route>/index.html` prüfen — NICHT nur gegen den Dev-Server (localhost:5000). Der Dev-Server liefert live aus dem Quelltext und verdeckt, ob `dist/` wirklich neu gebaut wurde.

**FAQ-Schema-Regel:** Die `name`-Felder im FAQPage-JSON-LD müssen **wortwörtlich** mit den sichtbaren `<summary>`-Fragen übereinstimmen (Google-Anforderung). Abgleich nach jedem Magazinartikel:
`grep -o '"@type":"Question","name":"[^"]*"' dist/client/<route>/index.html` gegen die sichtbaren summary-Texte.
