# Planexus GmbH Website

## Overview

The Planexus GmbH website is a corporate online platform designed to market and inform about the company's expertise in laboratory containers and modular laboratory construction. It aims to establish Planexus GmbH as a leading provider of rapidly deployable laboratory infrastructure, targeting the pharmaceutical, biotech, research, and disaster relief sectors within the German-speaking market (Germany, Switzerland, Austria). A key objective is to achieve top-tier search engine rankings for relevant keywords, positioning the site as an exemplary marketing tool.

## User Preferences

- Preferred communication style: Simple, everyday language (German)
- Green accent color: #bbd700
- No company names on Projekte page
- KEINE konkreten Preise/€-Beträge im Content (Blog, Seiten). Wirtschaftlichkeit nur als Logik/Faustformel, Prozentangaben und technische Werte sind erlaubt. Konkrete Zahlen nur im individuellen Angebot.
- Part of Wesemann Holding GmbH
- WICHTIG: Gründlich arbeiten! Alles komplett durchdenken bevor etwas vorgeschlagen wird. Keine halben Sachen, keine oberflächlichen Fixes. Immer das Gesamtbild berücksichtigen (Server, Ports, Umgebungsvariablen, Dependencies, Nginx-Config). Jede Änderung muss vollständig und getestet sein – keine inkrementellen Debugging-Schleifen. User ist frustriert von Stückwerk und Korrekturschleifen.
- BLAUPAUSE: Alle Content-Standards, SEO-Regeln und Qualitätschecklisten sind in `Blaupause.md` dokumentiert. Dieses Dokument ist verbindlich für jede neue Seite. Vor jeder Content-Erstellung: Konkurrenzanalyse → Top-3 analysieren → besser bauen. Kein Wort ohne Berechtigung, keine Lügen, alles belegbar.
- PFLICHT-WORKFLOW FÜR JEDEN NEUEN CONTENT (Stadtseite, Branchenseite, Blog, Landing Page – AUSNAHMSLOS):
  1. **Konkurrenzanalyse**: Ziel-Keyword googeln, Top-3 Ergebnisse analysieren (Inhalt, Struktur, Tiefe, Schwächen)
  2. **Daten & Fakten sammeln**: Lokale Unternehmen, Institute, Baurecht, Normen, Branchendaten – alles verifiziert und belegbar
  3. **Lücken identifizieren**: Was fehlt bei der Konkurrenz? Wo können wir besser/tiefer/genauer sein?
  4. **Erst dann bauen**: Seite erstellen die nachweislich besser ist als alles was existiert
  - Dieser Workflow gilt IMMER und für ALLES. Keine Ausnahme. Nie blind Content erstellen.
- REIHENFOLGE: 1) Städteseiten (13 DE + 3 CH + 3 AT) → 2) Branchenseiten (6 Branchen) → 3) Blog-Beiträge (nach Recherche)
- QUALITÄTSSTANDARD: Diese Website ist das Paradebeispiel einer Marketing-Maschine. Höchstes Level ist Standard. Jede Seite muss Top-3-Ranking-würdig sein.
- Wichtig — User-Stimmung: User ist genervt von Konjunktiv und „vielleicht"-Formulierungen. Bei jeder Kommunikation klare Diagnose → klare Ursache → klare Lösung in einem Schritt. Keine Plan-A/B/C-Listen wenn nicht nötig.
- Deploy immer vom **Mac Mini, neues Terminalfenster** (Home-Verzeichnis, nie schon auf dem Server). Jeder Server-Befehl MUSS komplett sein: `ssh root@82.165.27.244 '…ganzer Ablauf…'`. Nie nur `cd /var/www/app && …` ohne SSH — das schlägt lokal fehl.

## System Architecture

The website is developed using **Astro 5.17.1** as a Static Site Generator (SSG) with a Node adapter for server-side capabilities. **React** is utilized for interactive "islands" to combine a lightweight core with dynamic elements. Styling is managed with **Tailwind CSS v4** for a utility-first approach, and **TypeScript** ensures type safety and maintainability.

The architecture emphasizes a modular, page-based structure, encompassing core pages, service pages, and geographically targeted city-specific pages (e.g., `laborcontainer-zuerich.astro`). Interactive components like `LiquidDistortion.tsx`, `AnimatedGlobe.tsx`, `Map.tsx`, `ProjekteGallery.tsx`, and `ContactForm.tsx` are implemented in React.

A secure `/admin` section is included for managing contact inquiries, featuring password protection, token-based authentication with DB-backed sessions, and rate-limiting for login attempts. Contact form submissions are stored persistently in a **PostgreSQL** database via `pg` client and Drizzle ORM, with optional email notifications via SMTP.

Deployment occurs on an IONOS VPS running Ubuntu, Nginx, and PM2. Nginx acts as a reverse proxy to the Astro application on port 5000. Environment variables are managed through `.env` files.

**Server-Deploy (verbindlich):**
- User startet immer ein **neues Mac-Terminal** (nicht schon per SSH auf dem VPS).
- Server-Pfad: `/var/www/app`
- PM2-Prozess-Name: `planexus` (ID 0, Script `server-start.mjs`)
- Domain/IP: `planexus.de` / `82.165.27.244`
- Deploy-Befehl (1:1 ins Mac-Terminal, Passwort kommt):  
  `ssh root@82.165.27.244 'cd /var/www/app && git checkout -- .astro && git fetch origin && git checkout main && git pull origin main && npm run build && pm2 restart planexus --update-env'`
- WICHTIG: `git checkout -- .astro` MUSS vor jedem `git pull` stehen. Astro generiert beim Build die Dateien in `.astro/` (u. a. `types.d.ts`) neu. Diese Dateien sind versehentlich in Git getrackt → ohne das Verwerfen blockiert der Build-Output den nächsten `git pull` ("local changes would be overwritten"). Das Verwerfen ist gefahrlos, da die Dateien im Build neu erzeugt werden.

**Nginx Canonical (www + Slash in einem 301):** Vorlagen in `docs/nginx/`. Live: `/etc/nginx/sites-available/planexus.de`, Map `/etc/nginx/conf.d/planexus-uri-map.conf`, Redirects `/etc/nginx/snippets/planexus-redirects.conf`. Nach Copy: `nginx -t && systemctl reload nginx`.

**Nginx-Aufgaben (einmalig auf dem Server, nicht nur im Repo):**
Diese Einstellungen werden in der nginx-Config gepflegt (`/etc/nginx/sites-enabled/<datei>`). Canonical-Vorlagen: `docs/nginx/`.

1. Sicherheits-Header in `/etc/nginx/snippets/planexus-headers.conf` auslagern:
   ```nginx
   add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
   add_header X-Content-Type-Options "nosniff" always;
   add_header Referrer-Policy "strict-origin-when-cross-origin" always;
   add_header X-Frame-Options "SAMEORIGIN" always;
   ```
2. Im `server`-Block (443) zwei `location`-Blöcke pflegen. Wichtig: nginx vererbt `add_header` NICHT in einen `location` mit eigenen Headern → `include` in beiden wiederholen.
   ```nginx
   # Fingerprinted Astro-Assets: 1 Jahr cachen
   location /_astro/ {
       proxy_pass http://127.0.0.1:5000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       include snippets/planexus-headers.conf;
       add_header Cache-Control "public, max-age=31536000, immutable" always;
   }
   # HTML: kurz cachen, im Hintergrund aktualisieren
   location / {
       proxy_pass http://127.0.0.1:5000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       include snippets/planexus-headers.conf;
       add_header Cache-Control "public, max-age=0, s-maxage=300, stale-while-revalidate=86400" always;
   }
   ```
3. Komprimierung in `nginx.conf` (`http`-Block): `gzip on;` + `gzip_types` für text/css, application/javascript, application/json, image/svg+xml. Brotli optional via `apt install libnginx-mod-http-brotli` (wenn verfügbar), sonst gzip.
4. Aktivieren: `nginx -t` (muss „successful" melden) → `systemctl reload nginx`. Bei Fehler NICHT reloaden.

A critical design focus is SEO, incorporating comprehensive Schema.org JSON-LD (Organization, LocalBusiness, FAQPage, Article, BreadcrumbList), optimized meta tags, and an automatically generated `sitemap.xml`. Image optimization, including compression, lazy loading, and alt-texts, is systematically applied.

## External Dependencies

-   **PostgreSQL**: Database for storing contact form submissions and admin session data.
-   **Nodemailer**: Library for sending email notifications from the contact form.
-   **IONOS SMTP**: The mail server (`smtp.ionos.de:465`) used for sending emails.
-   **PM2**: Process manager for Node.js applications, ensuring the Astro app runs continuously on the IONOS VPS.
-   **Git**: Used for version control and deployment.
-   **three.js, ogl, gsap**: Libraries for advanced 3D effects and animations.
-   **Leaflet, react-leaflet**: For implementing interactive map functionalities.
-   **Framer Motion**: Used for declarative animations, particularly in the Navbar.
-   **Lucide React**: Provides icons for use within React components.
-   **Drizzle ORM**: Facilitates database schema definition and interaction with PostgreSQL.