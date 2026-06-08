---
name: Dev-Server Crash durch file watchers
description: Astro/Vite dev-Server stürzt mit ENOSPC/OOM ab, wenn große Cache-Verzeichnisse überwacht werden.
---

Der Dev-Workflow stürzte reproduzierbar ab mit
`ENOSPC: System limit for number of file watchers reached` (watch auf
`.cache/.bun/install/cache/...`) gefolgt von `JavaScript heap out of memory`.

**Ursache:** Vite/chokidar überwacht standardmäßig auch große, irrelevante
Verzeichnisse (`.cache`, `.astro`, `dist`). Das sprengt das Linux-inotify-Limit
und treibt den Heap ins OOM.

**Lösung:** In `astro.config.mjs` unter `vite.server.watch.ignored` mindestens
`**/.cache/**`, `**/.astro/**`, `**/dist/**` (zusätzlich zu node_modules/.git/.local)
eintragen.

**Why:** Das inotify-Limit ist umgebungsbedingt (Replit-Container) niedrig; das
`.bun`-Cache enthält zehntausende Locale-Dateien. Ignorieren an der Quelle statt
Limit hochschrauben.
**How to apply:** Bei jedem „dev-Server crasht / Preview leer / ENOSPC" zuerst die
watch.ignored-Liste prüfen.
