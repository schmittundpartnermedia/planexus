---
name: Kontaktformular & API-Handler-Architektur
description: Welche Datei das Kontaktformular wirklich verarbeitet und warum die Zeit-Falle client-seitig misst.
---

# Live-Handler vs. toter Code

- Der echte Kontakt-Handler ist der **Astro-Endpoint** `src/pages/api/contact.ts` (`prerender = false`). Produktion läuft über die Astro-Standalone-Build (`dist/server/entry.mjs`).
- Das `server/`-Verzeichnis (`index.ts` Express + `routes.ts`) ist **toter Code** — nirgends importiert, nicht in Produktion. Änderungen dort haben **null** Laufzeit-Wirkung.
- **How to apply:** Backend-/API-Änderungen IMMER in `src/pages/api/*` machen, nicht in `server/`. Vor Edits prüfen, ob die Datei überhaupt referenziert wird.

# Spamschutz: warum Zeit-Falle client-seitig

- Die Zeit-Falle nutzt `elapsedMs` aus der **Client-Mount-Zeit** (React `useEffect` in `ContactForm.tsx`), nicht aus einem Server-Timestamp oder Cookie.
- **Why:** nginx cached HTML (`s-maxage`/`stale-while-revalidate`, siehe replit.md). Ein in die HTML gebackener Server-Timestamp wäre bei cached Seiten veraltet; ein `Set-Cookie` würde nginx-HTML-Caching komplett deaktivieren (Performance-Regression). Client-Mount-Zeit ist die einzige cache-kompatible Variante.
- **Trade-off:** `elapsedMs` ist von einem gezielten Bot fälschbar (direkter POST mit `elapsedMs: 9000`). Akzeptiert, weil (a) User CAPTCHA ausdrücklich ablehnt, (b) Honeypot die Hauptverteidigung ist, (c) fehlendes/nicht-numerisches `elapsedMs` serverseitig als Spam gilt → generische Bots, die direkt posten, fallen durch. Kein No-CAPTCHA-Heuristik-Layer ist gegen gezielte Angreifer robust.
