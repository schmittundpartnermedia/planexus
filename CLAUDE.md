# CLAUDE.md – Planexus GmbH Website (planexus.de)

Firmenwebsite der Planexus GmbH (Laborcontainer, modularer Laborbau, Teil der Wesemann Holding GmbH).
Zielmarkt DACH (DE/CH/AT), Deutsch ist Hauptsprache, Englisch (British English) unter `/en`.
Hauptziel: Top-Rankings bei Google für Laborcontainer-Keywords und Anfragen über das Kontaktformular.

Ausführlichere Strategie-/Content-Dokumente im Projektordner (verbindlich, vor neuem Content lesen):
`Blaupause.md`, `Bauplan-Staedteseiten.md`, `Staedteseiten-Blaupause.md`, `Money-Page-Recherche.md`, `replit.md`.
Projekt-Erinnerungen aus früheren Agenten-Sessions: `.agents/memory/`. Deploy-Regel: `.cursor/rules/planexus-server-deploy.mdc`.

## Zusammenarbeit mit Joachim

- Kommunikation auf Deutsch, einfache Alltagssprache.
- Klar statt Konjunktiv: Diagnose → Ursache → Lösung in einem Schritt. Keine „vielleicht"-Formulierungen, keine Plan-A/B/C-Listen ohne Not.
- Gründlich arbeiten: Gesamtbild (Server, Ports, Env-Variablen, Dependencies, nginx) mitdenken. Keine halben Fixes, keine Korrekturschleifen. Jede Änderung vollständig und per Build geprüft.

## Design-Vorgaben

- **Stil:** Weiß, clean, professionell, nicht verspielt. Konsistente Bildsprache (Laborcontainer, Module, Technik).
- **Akzentfarbe:** `#bbd700` (Planexus-Grün) – nie ändern. Auch `theme-color` im Layout.
  - In CSS als `--primary` / `--accent` / `--ring` = `hsl(68 100% 42%)` in `src/styles/global.css`.
  - Dunklere Variante für Text/Hover auf Weiß: `#7a9900`. Weitere vorhandene Grüntöne: `#a8c200`, `#d4e157`.
- **Neutrale Farben:** Text `text-slate-900` (Überschriften/Hauptfarbe), `text-gray-600`/`text-gray-700` (Fließtext), Flächen `bg-slate-50`, dunkle Sektionen `bg-slate-900`.
- **Schriften (selbst gehostet, kein Google Fonts):** `public/fonts/`
  - Fließtext: **Inter** (variabel 100–900) → `font-sans`
  - Überschriften h1–h6: **Space Grotesk** (300–700) → `font-heading`, `tracking-tight`
- **Radius:** `--radius: 0.5rem`.
- **Hilfsklassen** in `global.css`: `.glass`, `.glass-dark`, `.bg-dot-pattern`, `.fade-in-up`, `.fade-in-scale`, `.hover-lift`.
- **Logo:** `public/images/planexus-logo.png` (+ `.webp`). LABtoGO-Logo: `public/images/labtogo-logo.png`.

## Content-Regeln (nie brechen)

- **Keine konkreten Preise / €-Beträge** im Content (Seiten, Magazin). Wirtschaftlichkeit nur als Logik/Faustformel; Prozentangaben und technische Werte sind erlaubt.
- **Keine Firmennamen auf der Projekte-Seite.**
- **Keine erfundenen Referenzen (UWG):** Fremde Institutionen/Firmen (Roche, ETH, AKH …) nur als Markt-/Standortkontext („für Standorte wie …"), nie als Kunde, Referenzprojekt, Case Study oder „seit 20XX arbeiten wir mit …". Gilt auch im JSON-LD.
- Keine Lügen, keine Übertreibungen, kein Marketing-/KI-Ton. Alles belegbar.
- **Pflicht-Workflow für jeden neuen Content:** Ziel-Keyword googeln → Top-3 analysieren → Fakten verifiziert sammeln → Lücken finden → erst dann bauen. Details in `Blaupause.md`.
- SEO pro Seite: Title ≤ 60 Zeichen (Keyword vorne, „| Planexus" hinten – das Layout hängt es automatisch an), Meta-Description ≤ 155 Zeichen, genau eine H1, Breadcrumbs (sichtbar + Schema), ≥ 3 Schema-Typen, ≥ 10 interne Links, Bilder mit Alt-Text, lazy, WebP.
- **FAQ-Schema:** `name` im FAQPage-JSON-LD muss wortwörtlich der sichtbaren Frage (`<summary>`) entsprechen.
- **Schema publisher.logo** in Magazin-Artikeln: `https://planexus.de/images/planexus-logo.png` (nicht `/Planexus-logo.png`, das ist 404).
- Englische Seiten: British English. Der englische Bereich `/en` ist live – den alten Holdback (robots-Disallow `/en`, Middleware-404) **nie** wieder einbauen.

## Technik

- **Astro 5** (SSG + `@astrojs/node` standalone), **React 19** für interaktive Islands, **Tailwind CSS v4** (über `@tailwindcss/vite`), TypeScript.
- Ausgabe: `dist/client` (statisch) + `dist/server/entry.mjs` (Node-Server für API/Admin).
- URL-Regeln: `trailingSlash: 'never'`, Apex-Domain ohne www. www und Slash werden in **einem** 301 umgeleitet (nginx + `server-start.mjs` + `src/middleware.ts`). Startseite canonical mit Slash: `https://planexus.de/`.
- Sitemap: automatisch von `@astrojs/sitemap` beim Build (`sitemap-index.xml`, `sitemap-0.xml`), `lastmod` aus dem Git-Commit-Datum der Quelldatei, hreflang-Paare DE/EN. Gibt es nur im Build, nicht im Dev-Server.
- Tracking: Google Tag Manager `GTM-PDDSZ44P` mit Consent Mode V2 (Standard: alles `denied`), Cookie-Banner `src/components/CookieConsent.tsx`, Consent in `localStorage` `planexus_consent`.

## Wo liegt was

| Pfad | Inhalt |
|---|---|
| `src/pages/` | Alle deutschen Seiten (Dateiname = URL) |
| `src/pages/laborcontainer-<stadt>.astro` | Städteseiten (DE: Hamburg, Berlin, München, Stuttgart, Düsseldorf, Frankfurt; CH: Zürich, Basel, Bern; AT: Wien, Graz, Linz) |
| `src/pages/laborcontainer/`, `laborcontainer-mieten.astro`, `laborcontainer-kaufen.astro` | Money-Pages (Hub, LABtoGO, Miete, Kauf) – Keywords bewusst voneinander getrennt |
| `src/pages/branchen/`, `leistungen/`, `team/`, `ueber-uns/` | Branchen-, Leistungs-, Team-, Über-uns-Seiten |
| `src/pages/magazin/` | Magazin-Artikel (eine `.astro` pro Artikel) |
| `src/pages/en/` | Englische Seiten |
| `src/pages/api/contact.ts` | **Echter** Kontaktformular-Handler (Honeypot, Zeit-Falle, DB-Insert, Mail per SMTP) |
| `src/pages/api/admin/` + `src/pages/admin.astro` | Admin-Bereich für Anfragen (Passwort, DB-Sessions, Rate-Limit) |
| `src/layouts/Layout.astro` | Zentrales Layout: Meta, Canonical, hreflang, OG, GTM/Consent |
| `src/components/` | Navbar, Footer, ContactForm, Picture (WebP-Wrapper), Cross-Link-Komponenten, `ui/` (shadcn) |
| `src/data/magazin.ts` | Magazin-Liste (`magazinPosts`) + englische Felder (`magazinEn`) |
| `src/data/site-flags.ts` | Schalter `showBestOfIndustryBanner` (Wiedervorlage 1. Dezember 2026: auf `false` setzen, Award-Seite auf Ergebnis umschreiben) |
| `src/i18n/routes.ts` | DE↔EN-URL-Zuordnung (`DE_TO_EN`), Städte-Slugs, CH/AT-Pfade |
| `src/i18n/ui.ts` | UI-Texte DE/EN |
| `src/lib/` | `canonical.ts`, `schema.ts` (Drizzle-Tabellen `contact_messages`, `admin_sessions`), `db.ts`, `planexus-address.ts` (Adresse, Geo, Telefon) |
| `src/styles/global.css` | Farben, Schriften, Hilfsklassen |
| `public/` | Statische Dateien: `fonts/`, `images/`, `team/`, `attached_assets/`, `robots.txt`, Favicons |
| `attached_assets/` | Quellbilder (siehe Bilder-Regel unten) |
| `scripts/convert-images-webp.mjs` | Erzeugt WebP neben JPG/PNG (> 300 KB, max. 1920 px, Q80) |
| `script/copy-en-pages.mjs` | Einmal-Script, das DE-Seiten nach `/en` kopiert hat. **Überschreibt** die übersetzten EN-Seiten – nicht erneut laufen lassen |
| `docs/nginx/` | Vorlagen der live nginx-Config |
| `server-start.mjs` | Produktions-Start (lädt `.env`, www/Slash-Redirect, startet `dist/server/entry.mjs`) |
| `Blaupause.md` u. a. | Strategie- und Content-Standards |

**Toter Code (keine Wirkung in Produktion):** `server/` (alte Express-App), `client/` (alte Vite-App), `shared/schema.ts`, `script/build.ts`. Änderungen an Backend/API immer in `src/pages/api/`.

## Bilder

- Bilder, die als `/attached_assets/...` eingebunden werden, müssen **unter `public/attached_assets/`** liegen. Der Dev-Server liefert auch den Quellordner `attached_assets/` aus – das täuscht, in Produktion gibt es dann 404.
- Ablauf: Bild nach `public/...` legen → `node scripts/convert-images-webp.mjs` → im Build prüfen, dass es in `dist/client/...` liegt.
- Einbinden über `src/components/Picture.astro` (nimmt WebP, wenn es neben dem Original existiert).

## Befehle

```bash
npm install            # Abhängigkeiten
npm run dev            # Dev-Server auf http://localhost:5000
npm run check          # astro check (Typprüfung)
npm run build          # Produktions-Build nach dist/ (dauert ca. 100 s)
npm start              # gebauten Server lokal starten (ohne www/Slash-Redirect)
node server-start.mjs  # wie Produktion starten (mit .env und Redirects)
```

**Prüfen nach Änderungen:** Immer einen frischen `npm run build` im Vordergrund fahren und gegen `dist/client/<route>/index.html` prüfen, nicht nur gegen den Dev-Server. Beispiel FAQ-Abgleich:
`grep -o '"@type":"Question","name":"[^"]*"' dist/client/<route>/index.html`

**Neuer Magazin-Artikel:** `.astro` in `src/pages/magazin/` + Eintrag in `magazinPosts` (`src/data/magazin.ts`). Für Englisch zusätzlich `magazinEn`, `DE_TO_EN` in `src/i18n/routes.ts` und die Seite unter `src/pages/en/magazine/`.

## Live stellen (Deploy)

Hosting: **IONOS VPS** (Ubuntu), nginx als Reverse Proxy → Node-App, Prozess-Manager **PM2** (Prozess `planexus`, id 0, Script `server-start.mjs`), App-Pfad `/var/www/app`, Domain `planexus.de`, IP `82.165.27.244`. Der Server zieht von GitHub `origin/main`.

1. Lokal committen und nach `origin main` pushen (der Server holt nur, was auf `main` liegt).
2. Joachim öffnet ein **neues Terminal auf dem Mac** (nicht schon per SSH auf dem Server) und fügt den kompletten Einzeiler ein (Passwort wird abgefragt):

```bash
ssh root@82.165.27.244 'cd /var/www/app && git checkout -- .astro && git fetch origin && git checkout main && git pull origin main && npm run build && pm2 restart planexus --update-env'
```

- `git checkout -- .astro` muss vor jedem Pull stehen: `.astro/` ist versehentlich in Git getrackt und wird bei jedem Build neu erzeugt, sonst bricht der Pull ab.
- Server-Befehle immer als vollständigen `ssh root@82.165.27.244 '…'`-Einzeiler geben, nie nur `cd /var/www/app && …`.
- Danach die betroffene URL live prüfen.
- nginx-Änderungen: Vorlagen in `docs/nginx/`, live unter `/etc/nginx/sites-available/planexus.de`, `/etc/nginx/conf.d/planexus-uri-map.conf`, `/etc/nginx/snippets/planexus-redirects.conf` (+ `planexus-headers.conf`). Danach `nginx -t` und nur bei Erfolg `systemctl reload nginx`. nginx cached HTML (`s-maxage=300`, `stale-while-revalidate`) und `/_astro/` ein Jahr.
- `script/deploy.sh` ist veraltet (startet PM2-Prozess `app`, der nicht existiert) – nicht benutzen.
- `deploy-rpw` gehört zu RankPilot, nicht zu Planexus.

## Zugänge und Dienste

| Dienst | Wofür | Wo konfiguriert |
|---|---|---|
| GitHub `schmittundpartnermedia/planexus` | Code, Quelle für den Server-Deploy | `origin` |
| IONOS VPS `82.165.27.244` (root, SSH-Passwort) | Hosting, nginx, PM2 | – |
| PostgreSQL | Kontaktanfragen, Admin-Sessions | `DATABASE_URL` |
| IONOS SMTP `smtp.ionos.de:465` | Mail bei neuer Anfrage | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL` (Standard `info@planexus.de`) |
| Admin-Bereich `/admin` | Anfragen lesen | `ADMIN_PASSWORD` |
| Google Tag Manager `GTM-PDDSZ44P` | Analytics/Ads mit Consent | `Layout.astro` |
| Google Search Console | Sitemap `https://planexus.de/sitemap-index.xml` | – |

- Alle Secrets stehen in `.env` auf dem Server (`/var/www/app/.env`, nicht in Git). Mail wird nur versendet, wenn `SMTP_PASS` gesetzt ist; die Anfrage wird trotzdem in der DB gespeichert.
- Die Tabellen stehen in `src/lib/schema.ts`, `drizzle.config.ts` zeigt darauf. `npm run db:push` braucht `DATABASE_URL` und fragt nach, bevor es Tabellen löscht, die nicht im Schema stehen (z. B. eine alte `users`-Tabelle) – solche Löschungen ablehnen.
- Offene Ungereimtheiten (nicht geprüft, vor Änderungen am Server klären): `ecosystem.config.cjs` setzt `PORT=4321`, die nginx-Vorlagen und `replit.md` sprechen von Port 5000. Die `.cursor`-Regel nennt als Mac-Repo `~/Desktop/Webseiten/planexus`, gearbeitet wird aktuell in `/Volumes/ELEVUM/Projekte/joachim/planexus`.
- `.replit` ist ein Überbleibsel aus Replit. Das Admin-Passwort stand dort früher im Klartext und ist noch in der Git-Historie – nie wieder Secrets in `.replit` oder andere getrackte Dateien schreiben.

## Was du nie tun sollst

- Akzentfarbe `#bbd700`, Schriften (Inter / Space Grotesk) oder den weißen, cleanen Grundstil ändern.
- Preise/€-Beträge in Content schreiben, Firmennamen auf der Projekte-Seite nennen, Referenzen oder Kundenbeziehungen erfinden.
- Content ohne vorherige Konkurrenzanalyse und Faktenprüfung erstellen.
- Backend-Änderungen in `server/` oder `client/` machen (toter Code).
- `script/copy-en-pages.mjs` erneut ausführen (überschreibt die Übersetzungen).
- Den `/en`-Holdback wieder einbauen oder `/en` per robots sperren.
- Eine statische `public/sitemap.xml` anlegen (die Sitemap kommt aus dem Build).
- Auf dem Server `git clean` ausführen (löscht `.env` und ungetrackte Dateien), `git push` vom Server oder dort bei GitHub einloggen.
- Server-Befehle ohne vollständiges `ssh root@82.165.27.244 '…'` angeben.
- nginx neu laden, wenn `nginx -t` nicht „successful" meldet.
- Secrets, Passwörter oder `.env` committen oder in Chats/Doku schreiben.
- Ohne Freigabe pushen oder live stellen.
- „Fertig" melden, ohne dass `npm run build` sauber durchgelaufen und das Ergebnis in `dist/` geprüft ist.

## Was „fertig“ heißt (gilt für jeden Auftrag)
- Bevor du baust: schreib eine Abnahmeliste aus prüfbaren Sätzen („wenn X, dann siehst du Y“) nach docs/ABNAHME-<auftrag>.md. Sie ist der Vertrag.
- Fertig heißt: jeder Satz der Abnahmeliste belegt, in docs/PRUEFUNG-<auftrag>.md mit „geprüft wie, Ergebnis, Commit“.
- Jede Leitung, die Daten verarbeitet, bekommt einen echten Durchlauf als Textdatei: was kam rein, was wurde gespeichert, welche Regel hat mit welchen Zahlen entschieden, was wurde empfohlen. Kannst du den nicht schreiben, ist die Leitung nicht fertig.
- Was ein Mensch von dieser Funktion erwartet, ist drin, auch wenn es nicht gesagt wurde (Fehlerfälle, Abbruch, Wiederholung, Zeitzone, Leerzustand, Handy). Joachim fragt nie „geht auch noch …?“.
- Kein „nicht geprüft“ im STAND, außer es braucht Joachims Geld oder Ja – dann mit Betrag.
- Kein Test wird ans Ist-Verhalten angepasst. Jede Reparatur bekommt eine Gegenprobe, die ohne sie rot ist.
- Unklar? Nimm die sicherere Auslegung, schreib die Entscheidung in STAND.md, bau weiter. Keine Rückfrage nachts.
- Du sagst nie „fertig“, bevor PRUEFUNG-<auftrag>.md vollständig ist. Teilweise fertig heißt: nicht fertig.

## Skills – Rollenkarte (ergänzt 18.10.2026)

**Die Design-Vorgaben dieser CLAUDE.md (Farben, Schriften, Logo, Rechtstexte, URLs) stehen über jedem Skill. Kein Skill ändert sie.**

**Grundsatz:** Pro Aufgabe ist genau ein Skill zuständig. Die Regeln dieser CLAUDE.md stehen über jedem Skill. Ein Skill ändert nie Messlogik, Designgrundlagen, Kostenregeln oder Freigaben. Kein Skill löst etwas Kostenpflichtiges aus. Skills liegen in `.claude/skills/`, Quelle und Stand in `skills-lock.json`. Global (für alle Projekte, `~/.claude/skills/`): verification-before-completion, writing-plans, executing-plans, systematic-debugging, test-driven-development, requesting-code-review, receiving-code-review, handoff, playwright-cli, to-spec, codebase-design, wizard, agents-md, claude-settings-audit, context7-mcp (Doku über den MCP-Server context7). `setup-pre-commit` ist installiert, wird aber nur mit eigenem Auftrag ausgeführt.

| Aufgabe | Zuständiger Skill | Grenzen |
|---|---|---|
| Astro-Aufbau | `astro` | Kein Upgrade von Astro ohne eigenen Auftrag. |
| Leistung, Lighthouse | `perf-astro`, `core-web-vitals`, `perf-lighthouse` | Messung lokal, kein bezahlter Dienst. |
| SEO Google | `seo-audit` | Nur Wissen und Bericht. |
| SEO KI-Suche | `ai-seo` | Nur Wissen und Bericht. |
| Strukturierte Daten (JSON-LD) | `schema` (früher `schema-markup`) | Keine erfundenen Bewertungen oder Preise. |
| Texte | `marketing-psychology`, `cro` (früher `page-cro`), `lead-magnets` | Textregeln dieser Seite gelten: Ansprache wie auf der bestehenden Seite, keine Preise, keine erfundenen Referenzen (auch nicht im JSON-LD). Keine erfundenen Fakten. |
| Bewegung | GSAP-Skills, `animation-performance` | Die Seite nutzt GSAP: Bewegung nur mit der vorhandenen GSAP-Einbindung, Leistung nach animation-performance. |
| Stil-Pflege | `high-end-visual-design`, `design-taste-frontend`, `brandkit` | Nur innerhalb der bestehenden Vorgaben. |
| Bild → Code | `image-to-code` | Nur Vorlagen von Joachim. |
| Prüfung | `impeccable` (critique/audit/polish, dazu `impeccable adapt` und `impeccable harden`), `web-design-guidelines`, `landing-page-conversion-audit` | Nur Bericht und Feinschliff, gibt nicht den Stil vor. |
| Vollständigkeit | `full-output-enforcement` | Keine Platzhalter, keine halben Dateien. |
| Design auslesen | `extract-design-system` | Nur öffentliche Seiten. |

**Nicht in diesem Projekt:** withastro/astro-Skills (astro-developer usw. – die sind für die Entwicklung von Astro selbst), keine Next-Skills. **Kein Skill stellt live:** Deploy nur durch Joachim über den SSH-Einzeiler; `script/deploy.sh` nie.

Hinweis: `adapt`, `harden` und `audit` gibt es bei pbakaus/impeccable nicht mehr als eigene Skills; sie sind Befehle von `impeccable` (`impeccable adapt|harden|audit`, Anleitungen in `.claude/skills/impeccable/reference/adapt.md`, `harden.md`, `audit.md`). Das Hilfsprogramm (Live-Browser) von impeccable wird nicht heruntergeladen, Hooks werden nicht eingeschaltet. In der Marketing-Sammlung heißen `schema-markup` jetzt `schema` und `page-cro` jetzt `cro`.
