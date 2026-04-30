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
- STÄDTESEITEN MONEY-PAGE V4 STATUS: Stuttgart (Master), Hamburg (V4: Sturmflut/C5-M/VC-D), Berlin (V4: 12-Bezirksämter/Spree-Sand/Charité-RKI-MDC-Adlershof), München (V4: Föhn-HVAC/Schotterebene/TUM-Garching-FRM-II-MLZ/Martinsried, 3.105 W, 7 FAQ, 84% unique vs Stuttgart, 80%+ vs Hamburg/Berlin). Verbleibend für V4-Rebuild: Düsseldorf, Frankfurt, Zürich, Basel, Bern, Wien, Graz, Linz.
- STÄDTESEITEN BASIS-STATUS (12 von 19 NEU GEBAUT): DE: Hamburg, Berlin, München, Stuttgart, Düsseldorf, Frankfurt (6/13) | CH: Zürich, Basel, Bern (3/3 ✓) | AT: Wien, Graz, Linz (3/3 ✓) — Alle 12 komplett neu gebaut mit 80-90% Content-Uniqueness, recherchierte Fakten, individuelle Narrative pro Stadt
- SEO-SANIERUNG ABGESCHLOSSEN: Doorway-Page-Pattern aufgelöst (Leistungen-Grid + Projektablauf entfernt, alle H2s individualisiert, "Gut zu wissen" → unique Fakten pro Stadt), Navbar mit Standorte-Dropdown (DE/CH/AT), Startseite Regionen-Block, Schema areaServed DACH, Hero-Bild-Duplikate (Berlin/München/Stuttgart) behoben, Title-Duplikation behoben
- SEO-AUDIT-FIXES (April 2026): Sitemap mit lastmod (alle 41 URLs), AuthorBio-Komponente (E-E-A-T) auf alle 12 Stadtseiten, CityCrossLinks-Komponente (DE/CH/AT-Cross-Linking) auf alle 12 Stadtseiten, Homepage erweitert von 505 auf ~1.400 Wörter mit Standorte-Hub + Leistungen-Hub + Magazin-Hub (interne Verlinkung)

## AKTUELLER STATUS (30.04.2026) — SMTP Microsoft 365 Setup

**Was läuft:**
- `server/email.ts` auf STARTTLS-Logik umgestellt (Port-abhängig, requireTLS bei 587, AUTH LOGIN, TLS≥1.2, escapeHtml, verifySmtp). Signatur sendContactEmail unverändert.
- Diagnose-Script `scripts/smtp-test.mjs` verfügbar (.env-Selbstparser, verify() + Test-Mail mit voller Microsoft-Antwort).
- Commits a620de3 + 183256a auf GitHub origin/main, Server-Deploy via `git pull && npm install && npm run build && pm2 restart all --update-env` durchgeführt, PM2 online.
- Kontaktformular speichert weiterhin in PostgreSQL ✓ — keine Anfragen gehen verloren, nur Mail-Benachrichtigung fehlt aktuell.

**Diagnose-Ergebnis (vom Server 82.165.27.244):**
- TCP+STARTTLS+EHLO zu smtp.office365.com:587 → ✅ ok
- Microsoft bietet `AUTH LOGIN XOAUTH2` an → ✅ SMTP-AUTH grundsätzlich erlaubt
- Login fehlgeschlagen mit: `535 5.7.139 Authentication unsuccessful, the user credentials were incorrect.`

**Microsoft-Konfiguration (von Thomas geprüft & Screenshots vorgelegt):**
- ✅ Authentifiziertes SMTP postfachseitig aktiv
- ✅ SMTP-AUTH tenant-weit NICHT deaktiviert (Nachrichtenflusseinstellungen)
- ✅ MFA für `server@planexus.de` in Entra entfernt
- ✅ Lizenz Exchange Online Plan 1 (vollwertig, kein Shared Mailbox)

**Ursache identifiziert:**
Das aktuell auf dem Server hinterlegte Passwort hat 12 Zeichen → mit hoher Wahrscheinlichkeit ein altes App-Passwort aus der Zeit, als MFA noch aktiv war. App-Passwörter sind technisch an MFA gekoppelt: sobald MFA abgeschaltet wird, werden sie automatisch ungültig. Genau das ist hier passiert.

**Nächster Schritt (wartet auf Thomas):**
Mail an Thomas wurde finalisiert und vom User abgesegnet. Inhalt: Thomas soll im Microsoft 365 Admin Center für `server@planexus.de` ein **neues normales Passwort** vergeben (mind. 16 Zeichen, gemischt), Häkchen „Erfordert Kennwortänderung beim ersten Anmelden" RAUS, einmal manuell unter login.microsoftonline.com einloggen, dann Passwort sicher an uns. Wir tragen es im `.env` ein, PM2-Restart, Test → fertig.

**Wenn Thomas das Passwort schickt:**
1. SSH auf IONOS-Server, in `/var/www/app/.env` `SMTP_PASS=<neues_passwort>` setzen
2. `pm2 restart all --update-env`
3. `node scripts/smtp-test.mjs` ausführen → muss „✅ OK" zeigen
4. Test über Kontaktformular auf der Website

**Wichtig — User-Stimmung:** User ist genervt von Konjunktiv und „vielleicht"-Formulierungen. Bei jeder Kommunikation klare Diagnose → klare Ursache → klare Lösung in einem Schritt. Keine Plan-A/B/C-Listen wenn nicht nötig.

**Pipeline danach (User-Versprechen offen):** Nächster Magazin-Artikel „Aufstellung/Bodenplatte/Statik" (DIN 1054, EC 7, LBO-Statik, DIN 18300) — Faktentabelle vorab Pflicht.

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