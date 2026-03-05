# Planexus GmbH Website

## Overview

This is a corporate website for Planexus GmbH, a German company specializing in laboratory containers (Laborcontainer) and modular laboratory construction (Modulbau). The site serves as a marketing and informational platform showcasing the company's services, team, and expertise in mobile laboratory solutions, BSL-2/BSL-3 labs, and smart lab integrations.

The application uses Astro (SSG with Node adapter) for static site generation with React islands for interactive components. Deployed on IONOS VPS with PM2 process manager.

## User Preferences

- Preferred communication style: Simple, everyday language (German)
- Green accent color: #bbd700
- No company names on Projekte page
- Part of Wesemann Holding GmbH
- WICHTIG: Gründlich arbeiten! Alles komplett durchdenken bevor etwas vorgeschlagen wird. Keine halben Sachen, keine oberflächlichen Fixes. Immer das Gesamtbild berücksichtigen (Server, Ports, Umgebungsvariablen, Dependencies, Nginx-Config). Jede Änderung muss vollständig und getestet sein – keine inkrementellen Debugging-Schleifen. User ist frustriert von Stückwerk und Korrekturschleifen.
- BLAUPAUSE: Alle Content-Standards, SEO-Regeln und Qualitätschecklisten sind in `Blaupause.md` dokumentiert. Dieses Dokument ist verbindlich für jede neue Seite. Vor jeder Content-Erstellung: Konkurrenzanalyse → Top-3 analysieren → besser bauen. Kein Wort ohne Berechtigung, keine Lügen, alles belegbar.
- REIHENFOLGE: 1) Städteseiten (13 DE + 3 CH + 3 AT) → 2) Branchenseiten (6 Branchen) → 3) Blog-Beiträge (nach Recherche)
- QUALITÄTSSTANDARD: Diese Website ist das Paradebeispiel einer Marketing-Maschine. Höchstes Level ist Standard. Jede Seite muss Top-3-Ranking-würdig sein.

## Recent Changes

### Admin-Bereich für Kontaktanfragen (February 2026)
- PostgreSQL-Datenbank für Kontaktanfragen (contact_messages Tabelle)
- Kontakt-API speichert jetzt IMMER in DB, SMTP ist optional/Bonus
- Admin-Bereich unter /admin mit Passwort-Login (ADMIN_PASSWORD env var)
- Token-basierte Auth mit DB-Sessions (admin_sessions Tabelle, 24h Ablauf)
- Rate-Limiting: 5 Fehlversuche = 15 Min Sperre
- Admin-Seite: noindex, nicht in Sitemap
- Nachrichten lesen, als gelesen markieren, löschen, direkt per E-Mail antworten

### 4 neue Blog-Beiträge (February/March 2026)
- "Laborcontainer mieten oder kaufen?" – Ratgeber mit Kostenvergleich, Checkliste, FAQ, 6 FAQPage-Schema
- "GMP-Reinraum im Container" – Pharma/Biotech Tiefeninhalt, GMP-Klassen, Qualifizierung, Kosten, FAQ
- "Laborcontainer Genehmigung – Baurecht, Vorschriften & Praxisleitfaden" – 16 LBOs, Sonderfälle Labor, Bauvoranfrage vs. Bauantrag, Checkliste, 7 häufigste Fehler, 6 FAQs
- "Klimatisierung im Laborcontainer – Temperatur, Lüftung & Normen" – DIN 1946-7, TRGS 526, Luftwechselraten, HEPA-Filtration, Unterdruckkonzepte, Energieeffizienz, Wartungsintervalle, Praxisbeispiel, 6 FAQs
- Alle: Schema.org (Article, BreadcrumbList, FAQPage), Canonical, 10+ interne Links
- Sitemap.xml aktualisiert, Magazin-Übersicht aktualisiert

### SEO-Audit Ergebnisse (gespeichert für spätere Umsetzung, February 2026)
- Title-Tags kürzen (10 Seiten, max 60 Zeichen)
- Meta-Descriptions kürzen (8 Seiten, max 155 Zeichen)
- Alt-Texte für alle Bilder ergänzen
- H1 auf Partner-Seite ergänzen
- Interne Links auf Über-uns/Kontakt/Projekte/Partner
- robots.txt: `/admin` statt `/admin/`
- 404-Seite: HTTP Status Code 404 setzen
- Breadcrumbs auf Hauptseiten ergänzen
- WebSite-Schema mit SearchAction im Layout
- Nginx Trailing-Slash-Redirect

### Blog-Vorschläge (gespeichert für spätere Umsetzung)
- Vorschlag 2: „Klimatisierung im Laborcontainer – Temperatur, Lüftung & Normen" (DIN 1946-7, TRGS 526, HEPA, Energieeffizienz)
- Vorschlag 3: „Laborcontainer Ausstattung – Die komplette Checkliste von A bis Z" (Labormöbel, Medien, Sicherheit, Normen)

### Local SEO Städteseiten (February 2026)
- 3 von 16 Städteseiten erstellt: Stuttgart, München, Berlin
- Muster: laborcontainer-[stadt].astro
- Jede Seite: 12+ interne Links, 4 Schema.org-Typen, 6 FAQs, einzigartiger Content
- Verbleibend: 13 weitere Landeshauptstädte

### Astro Migration (COMPLETED - February 2026)
- Migrated from React SPA (Vite + Express) to Astro SSG
- 17+ pages fully migrated to .astro files
- React islands for interactive components (LiquidDistortion, AnimatedGlobe, Map, ContactForm, ProjekteGallery)
- Removed old Express server, PostCSS config
- Tailwind CSS v4 via Vite plugin
- Schema.org structured data on all service pages
- Contact form API route at /api/contact (nodemailer + IONOS SMTP)

## System Architecture

### Framework
- **Astro 5.17.1** with Node adapter (standalone mode)
- **React** for interactive islands (client:load / client:only)
- **Tailwind CSS v4** via @tailwindcss/vite plugin
- **TypeScript** throughout

### Project Structure
```
├── src/
│   ├── pages/            # Astro pages (17+ routes)
│   │   ├── index.astro
│   │   ├── ueber-uns.astro
│   │   ├── team.astro
│   │   ├── projekte.astro
│   │   ├── partner.astro
│   │   ├── kontakt.astro
│   │   ├── magazin.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── 404.astro
│   │   ├── leistungen/
│   │   │   ├── index.astro
│   │   │   ├── planung.astro
│   │   │   ├── modulbau.astro
│   │   │   ├── logistik.astro
│   │   │   ├── ausstattung.astro
│   │   │   ├── beratung.astro
│   │   │   └── smart-lab.astro
│   │   ├── admin.astro (noindex, password-protected)
│   │   └── api/
│   │       ├── contact.ts (saves to DB + tries SMTP)
│   │       └── admin/
│   │           ├── login.ts (token auth, rate-limiting)
│   │           └── messages.ts (CRUD for contact messages)
│   ├── components/       # React + Astro components
│   │   ├── Navbar.tsx (React, client:load)
│   │   ├── Footer.astro (static)
│   │   ├── AdminPanel.tsx (React, client:only)
│   │   ├── LiquidDistortion.tsx (React, client:load)
│   │   ├── AnimatedGlobe.tsx (React, client:load)
│   │   ├── Map.tsx (React, client:only="react")
│   │   ├── ProjekteGallery.tsx (React, client:load)
│   │   └── ContactForm.tsx (React, client:load)
│   ├── lib/
│   │   ├── db.ts (PostgreSQL connection via pg)
│   │   └── schema.ts (Drizzle ORM schema)
│   ├── layouts/
│   │   └── Layout.astro
│   └── styles/
│       └── global.css
├── public/               # Static assets (favicon, images, opengraph)
├── attached_assets/      # Project images (83+ files)
├── shared/               # Shared schemas
└── astro.config.mjs
```

### Build System
- Development: `astro dev --port 5000 --host 0.0.0.0`
- Production Build: `astro build` → `node server-start.mjs` (loads .env via dotenv)
- Sitemap auto-generated via @astrojs/sitemap

### IONOS VPS Deployment (LIVE)
- Server: 82.165.27.244, Ubuntu, Nginx, PM2
- App-Verzeichnis: `/var/www/app`
- PM2 Startscript: `server-start.mjs` (lädt dotenv, dann dist/server/entry.mjs)
- Alternativ: `ecosystem.config.cjs` für PM2
- Server-Port: 5000 (Astro default via HOST/PORT env)
- Nginx: proxy_pass auf localhost:5000
- `.env` Datei auf Server mit: DATABASE_URL, ADMIN_PASSWORD, SMTP_PASS
- Symlink nach Build: `ln -sf /var/www/app/attached_assets /var/www/app/dist/client/attached_assets`
- Deployment-Befehl (komplett):
  ```
  cd /var/www/app && git pull origin main && npm install && npx astro build && ln -sf /var/www/app/attached_assets /var/www/app/dist/client/attached_assets && pm2 restart planexus
  ```
- Admin-Login: /admin, Passwort über ADMIN_PASSWORD in .env
- WICHTIG: PM2 lädt .env NICHT automatisch – daher server-start.mjs mit dotenv

### SMTP Configuration
- Host: smtp.ionos.de:465 (SSL)
- User: Server@planexus.de
- Recipient: info@planexus.de
- Password stored as SMTP_PASS secret

### SEO & Meta
- Schema.org JSON-LD for Organization, LocalBusiness, and per-service pages
- Comprehensive meta tags for German market
- Sitemap.xml auto-generated
- Breadcrumb structured data on service sub-pages

### Key Dependencies
- astro, @astrojs/react, @astrojs/node, @astrojs/sitemap
- react, react-dom
- tailwindcss, @tailwindcss/vite
- three, ogl, gsap (3D effects)
- leaflet, react-leaflet (maps)
- framer-motion (Navbar animations)
- nodemailer (contact form)
- lucide-react (icons in React components)
