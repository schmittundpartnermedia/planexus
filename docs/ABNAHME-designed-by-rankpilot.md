# Abnahme: „Designed by rankPilot“ im Footer (Auftrag vom 25.10.2026)

Ziel: kleiner Credit-Link in der untersten Footer-Zeile auf jeder öffentlichen Seite, Ziel
https://rankpilot.de/webseiten/planexus (Case Study).

- **R1** Jede gebaute HTML-Seite (`dist/client/**/*.html`, DE und `/en`, inkl. 404) enthält in der
  Footer-Unterzeile „Designed by rankPilot“; „rankPilot“ ist ein Link auf
  `https://rankpilot.de/webseiten/planexus` mit `rel="nofollow noopener"` und `target="_blank"`.
- **R2** „Designed by“ kommt aus `src/i18n/ui.ts` (`footer.designedBy`, DE und EN), nicht hartkodiert.
- **R3** Optik wie Impressum/Datenschutz: `text-sm`, `text-slate-400` auf `bg-slate-900`
  (Kontrast ca. 7:1), Hover weiß; keine neue Farbe (Akzent `#bbd700` unverändert), keine neue
  Bibliothek, kein JavaScript.
- **R4** Handy: die Unterzeile ist unter `md` eine Spalte (`flex-col`), der Credit steht zentriert in
  einer eigenen Zeile; ab `md` steht er zwischen Copyright und Rechtslinks.
- **R5** Gegenprobe: Prüfskript über `dist/client` ist vor der Änderung rot (0 Seiten mit Link) und
  danach grün (alle Seiten).
- **R6** `lockf … check && build` fehlerfrei. Startseiten-Hero, Rechtstexte unverändert.
- **R7** Arbeit nur auf Zweig `designed-by-rankpilot`; kein Push, kein Deploy.
