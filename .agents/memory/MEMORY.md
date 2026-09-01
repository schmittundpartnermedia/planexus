# Memory Index

- [Dev-Server Crash: file watchers](dev-server-file-watchers.md) — Astro/Vite dev OOM durch ENOSPC file-watcher-Limit; `.cache` muss in vite watch.ignored.
- [Sitemap-Strategie](sitemap-strategy.md) — @astrojs/sitemap statt statischer Datei; lastmod aus Git-Commit-Daten via serialize.
- [UWG-Referenz-Claims](uwg-referenz-claims.md) — Drittinstitutionen nur als Markt-/Standortkontext, nie als Kunden/Referenzprojekt; gilt auch im JSON-LD.
- [Kontaktformular & API-Architektur](contact-form-architecture.md) — echter Handler ist src/pages/api/contact.ts; server/ ist toter Code; Zeit-Falle client-seitig wegen nginx-HTML-Caching.
- [Build-Verifikation](build-verification.md) — Build ~100s, nur Vordergrund mit Workspace-Log; gegen dist/ prüfen, nicht Dev-Server; FAQ-Schema=sichtbar.
- [Schema publisher.logo](schema-publisher-logo.md) — Logo-URL muss /images/planexus-logo.png sein; Vorlage vererbt kaputten 404-Pfad /Planexus-logo.png.
- [attached_assets in Production](attached-assets-public-serving.md) — /attached_assets/-Bilder MÜSSEN nach public/ kopiert werden; Dev liefert Quelle, Production nur public/ → sonst 404.
- [Deploy-Konflikt .astro](deploy-astro-tracked-conflict.md) — getrackte .astro-Dateien blocken git pull; `git checkout -- .astro` vor Pull (steht im Deploy-Befehl).
- [Deploy vom Mac](deploy-from-mac-terminal.md) — immer `ssh root@82.165.27.244 '…'` als kompletter Einzeiler; User ist nie schon auf dem Server.
