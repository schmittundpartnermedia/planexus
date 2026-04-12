# Planexus GmbH Website

## Overview

This project is the corporate website for Planexus GmbH, a German company specializing in laboratory containers and modular laboratory construction. The website serves as a marketing and informational platform, showcasing the company's services, team, and expertise in mobile laboratory solutions, BSL-2/BSL-3 labs, and smart lab integrations. The business vision is to establish Planexus GmbH as a leading provider of high-quality, rapidly deployable laboratory infrastructure, targeting pharmaceutical, biotech, research, and disaster relief sectors with a strong focus on the German-speaking market (Germany, Switzerland, Austria). The project aims for top-tier search engine rankings for relevant keywords, positioning the site as a prime example of an effective marketing machine.

## User Preferences

- Preferred communication style: Simple, everyday language (German)
- Green accent color: #bbd700
- No company names on Projekte page
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
- STÄDTESEITEN STATUS (10 von 19): DE: Hamburg, Berlin, München, Stuttgart, Düsseldorf, Frankfurt (6/13) | CH: Zürich, Basel (2/3) | AT: Wien, Graz (2/3)

## System Architecture

The website is built on **Astro 5.17.1** configured as a Static Site Generator (SSG) with a Node adapter for server-side functionalities. **React** is used for interactive components ("islands") to ensure a fast, lightweight core with dynamic elements where needed. **Tailwind CSS v4** provides a utility-first CSS framework for rapid and consistent styling, and **TypeScript** is employed throughout the codebase for improved maintainability and type safety.

The application follows a modular page-based structure, with core pages, service pages, and an expanding set of localized city-specific pages (e.g., `laborcontainer-zuerich.astro`). Interactive elements such as `LiquidDistortion.tsx`, `AnimatedGlobe.tsx`, `Map.tsx`, `ProjekteGallery.tsx`, and `ContactForm.tsx` are implemented as React components.

A key architectural decision involves a dedicated `/admin` section for managing contact inquiries. This section is password-protected and uses token-based authentication with DB-backed sessions, including rate-limiting for login attempts. Contact form submissions are persistently stored in a **PostgreSQL** database (via `pg` client and Drizzle ORM) and optionally sent via SMTP.

Deployment is on an IONOS VPS running Ubuntu, Nginx, and PM2. Nginx acts as a reverse proxy, forwarding requests to the Astro application running on port 5000. Environment variables (`DATABASE_URL`, `ADMIN_PASSWORD`, `SMTP_PASS`) are managed via `.env` files on the server.

SEO is a critical design consideration, with comprehensive Schema.org JSON-LD (Organization, LocalBusiness, FAQPage, Article, BreadcrumbList), optimized meta tags, and an auto-generated `sitemap.xml`. Image optimization (compression, lazy loading, alt-texts) is systematically applied across the site.

## External Dependencies

- **PostgreSQL**: Used for storing contact form submissions and admin session data.
- **Nodemailer**: For sending contact form notifications via email.
- **IONOS SMTP**: The mail server used for sending emails from the contact form (`smtp.ionos.de:465`).
- **PM2**: A production process manager for Node.js applications, used for keeping the Astro application running on the IONOS VPS.
- **Git**: For version control and deployment via `git pull`.
- **three.js, ogl, gsap**: Libraries for advanced 3D effects and animations (e.g., LiquidDistortion, AnimatedGlobe).
- **Leaflet, react-leaflet**: For interactive map functionalities.
- **Framer Motion**: For declarative animations, particularly in the Navbar.
- **Lucide React**: For icons used within React components.
- **Drizzle ORM**: Used for database schema definition and interaction with PostgreSQL.