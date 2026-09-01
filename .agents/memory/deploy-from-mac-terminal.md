---
name: Deploy immer vom neuen Mac-Terminal per SSH
description: User klebt Befehle in ein frisches Terminal auf dem Mac Mini, nie schon auf dem VPS.
---

Joachim startet für jedes Projekt ein **neues Terminalfenster auf dem Mac Mini** (`~`, nicht `/var/www/app`).

Deshalb immer den **kompletten** Einzeiler geben:

```
ssh root@82.165.27.244 'cd /var/www/app && git checkout -- .astro && git fetch origin && git checkout main && git pull origin main && npm run build && pm2 restart planexus --update-env'
```

Nie nur `cd /var/www/app && …` — das findet den Pfad auf dem Mac nicht.

Bei Merge-Konflikt durch Reste auf dem Server (z. B. `Layout.astro`, `canonical.ts`): lokale Kopien dieser Git-Dateien verwerfen, **nicht** `git clean` (sonst weg: `.env`, ungetrackte Seiten). Steht auch in `replit.md`.
