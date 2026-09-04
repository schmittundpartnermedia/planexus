---
name: Planexus Server-Deploy-Prozess
description: Was Joachim auf Mac und IONOS-VPS eingibt. deploy-rpw ist RankPilot, nicht Planexus.
---

# Planexus Live-Deploy

Siehe auch `.cursor/rules/planexus-server-deploy.mdc`.

- SSH: `ssh root@82.165.27.244`
- Pfad: `/var/www/app`
- PM2: `planexus`
- Standard auf dem Server: `cd /var/www/app && git checkout -- .astro && git pull && npm run build && pm2 restart planexus --update-env`
- Vorher muss der Stand auf `origin/main` liegen (Mac: merge + push).
- Englisch (`origin/cursor/english-i18n-eb67`) nicht mergen, bis Freigabe.
- Ein Befehl nach dem anderen. Keine Mac-Pfade in SSH. Kein Push vom Server.
- Alternative vom Mac: rsync (excludes `.git`, `node_modules`, `dist`, `.env`) plus remote `npm run build && pm2 restart planexus`.
