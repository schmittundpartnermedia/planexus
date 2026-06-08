---
name: Deploy-Konflikt durch getrackte .astro-Dateien
description: Warum git pull beim Server-Deploy mit "local changes would be overwritten" abbricht und wie es dauerhaft vermieden wird.
---

# Server-Deploy bricht ab: getrackte `.astro/`-Dateien

Beim Server-Deploy (`/var/www/app`, IONOS VPS) kann `git pull` mit
`error: Your local changes to the following files would be overwritten by merge: .astro/types.d.ts`
abbrechen.

**Ursache:** Das Verzeichnis `.astro/` (u. a. `types.d.ts`, `content.d.ts`, `data-store.json`,
`settings.json`) wird von Astro bei **jedem** `npm run build` neu generiert. Diese Dateien sind
historisch versehentlich in Git getrackt. Der Build auf dem Server verändert sie lokal →
beim nächsten `git pull` kollidieren sie mit den Versionen aus dem Repo.

**Dauerhafte Lösung (im Deploy-Befehl verankert):** Vor jedem `git pull` die lokalen
`.astro`-Änderungen verwerfen:
```
cd /var/www/app && git checkout -- .astro && git pull && npm run build && pm2 restart planexus --update-env
```
Das Verwerfen ist gefahrlos, weil der Build die Dateien sofort neu erzeugt.

**Why:** Ein reines `.gitignore`-Eintragen von `.astro` reicht NICHT, solange die Dateien
bereits getrackt sind — `.gitignore` greift nur für noch-nicht-getrackte Dateien. Ein echtes
Untracking (`git rm --cached .astro -r` + Commit auf origin/main) wäre die sauberste Lösung,
ist aber im Haupt-Agent gesperrt. Bis das einmal manuell passiert, ist `git checkout -- .astro`
vor dem Pull der verlässliche Workaround.

**How to apply:** Immer wenn ein Server-Deploy an einem `.astro/*`-Merge-Konflikt hängt:
`git checkout -- .astro` ausführen, dann normal pullen/builden. Der Deploy-Befehl in
`replit.md` enthält diesen Schritt bereits.
