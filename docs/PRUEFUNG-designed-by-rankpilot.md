# Prüfung: „Designed by rankPilot“ im Footer (25.10.2026)

Abnahmeliste: `docs/ABNAHME-designed-by-rankpilot.md`. Zweig `designed-by-rankpilot` (Commit: siehe
`git log designed-by-rankpilot`, Nachricht „Footer: Designed by rankPilot (Link zur Case Study)“).

| # | Prüfung | Ergebnis |
|---|---|---|
| R1 | `grep -o 'Designed by <a href="https://rankpilot.de/webseiten/planexus" rel="nofollow noopener" target="_blank"…>rankPilot</a>'` in `dist/client/index.html`, `laborcontainer-mieten/`, `en/`, `en/imprint/` | je 1 Treffer |
| R1 | Prüfskript (Node, liest alle `dist/client/**/*.html`) | 142 von 142 Seiten mit Link |
| R2 | `src/i18n/ui.ts` | `footer.designedBy` = „Designed by“ in DE und EN; Footer nutzt `{copy.footer.designedBy}` |
| R3 | Code `Footer.astro` | erbt `text-sm text-slate-400` der Unterzeile, Link `hover:text-white` wie Impressum; keine neue Farbe, kein JS, keine Bibliothek |
| R4 | Code `Footer.astro` | Unterzeile `flex flex-col md:flex-row items-center`: unter `md` eigene, zentrierte Zeile (`text-center`), ab `md` zwischen Copyright und Rechtslinks |
| R5 | Prüfskript vor der Änderung (Build vom 25.10.2026 00:47) | 142 Seiten, 0 mit Link → rot (Exit 1) |
| R5/R6 | `lockf … sh -c 'npm run check && npm run build && <Prüfskript>'` | check 0 Fehler / 0 Warnungen; Build „Complete!“; 142/142 → grün (Exit 0) |
| R6 | `git diff main` auf `src/pages/index.astro`, `en/index.astro`, Impressum/Datenschutz DE+EN | leer — Hero und Rechtstexte unverändert |
| R7 | `git branch --show-current` | `designed-by-rankpilot`; kein Push, kein Deploy |
