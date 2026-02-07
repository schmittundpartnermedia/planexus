# Planexus GmbH Website

## Overview

This is a corporate website for Planexus GmbH, a German company specializing in laboratory containers (Laborcontainer) and modular laboratory construction (Modulbau). The site serves as a marketing and informational platform showcasing the company's services, team, and expertise in mobile laboratory solutions, BSL-2/BSL-3 labs, and smart lab integrations.

The application uses Astro (SSG with Node adapter) for static site generation with React islands for interactive components. Deployed on Replit with plans for IONOS VPS deployment.

## User Preferences

- Preferred communication style: Simple, everyday language (German)
- Green accent color: #bbd700
- No company names on Projekte page
- Part of Wesemann Holding GmbH

## Recent Changes

### Admin-Bereich für Kontaktanfragen (February 2026)
- PostgreSQL-Datenbank für Kontaktanfragen (contact_messages Tabelle)
- Kontakt-API speichert jetzt IMMER in DB, SMTP ist optional/Bonus
- Admin-Bereich unter /admin mit Passwort-Login (ADMIN_PASSWORD env var)
- Token-basierte Auth mit DB-Sessions (admin_sessions Tabelle, 24h Ablauf)
- Rate-Limiting: 5 Fehlversuche = 15 Min Sperre
- Admin-Seite: noindex, nicht in Sitemap
- Nachrichten lesen, als gelesen markieren, löschen, direkt per E-Mail antworten

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
- Production: `astro build` → `node dist/server/entry.mjs`
- Sitemap auto-generated via @astrojs/sitemap

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
