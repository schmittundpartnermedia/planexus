# Abnahme: Sprachumschalter mobil (22.10.2026)

Auftrag (Joachim): Auf dem Handy steht oben groß „Deutsch | English“, dadurch rutscht der Menü-Button aus dem Fenster
und das Menü ist nicht erreichbar. Statt der ganzen Wörter reicht „DE“ und „EN“ – auf allen Seiten, auch auf der Startseite.

Ursache (vorher gemessen im Dev-Server): `LanguageSwitch` in `src/components/Navbar.tsx` zeigt `copy.nav.languageDe/En`
(„Deutsch“/„English“, 152 px breit). Logo + Umschalter + Menü-Button passen nicht in 343 px Inhaltsbreite.
Menü-Button rechte Kante: 387 px bei 375 px Fensterbreite und 387 px bei 320 px Fensterbreite (komplett außerhalb).

Fertig, wenn:

1. Wenn man die Startseite `/` auf 375 px Breite öffnet, steht oben „DE | EN“ (nicht „Deutsch | English“).
2. Wenn man `/` und `/en` auf 375 px und 320 px öffnet, liegt der Menü-Button vollständig im Fenster (rechte Kante ≤ Fensterbreite).
3. Wenn man auf diesen Breiten auf den Menü-Button tippt, klappt das Menü auf.
4. Wenn man die Seite auf 320 px öffnet, gibt es kein waagrechtes Scrollen (`scrollWidth` = Fensterbreite).
5. Die aktive Sprache ist weiterhin grün markiert (`text-primary`, `aria-current`), die andere ist ein Link.
6. Für Screenreader heißen die Einträge weiterhin „Deutsch“ bzw. „English“ (`aria-label`), `lang`/`hreflang` bleiben am Link.
7. Auf dem Desktop (1440 px) steht ebenfalls „DE | EN“, die Navigation bleibt in einer Zeile.
8. Startseiten-Hero, Farben und Schriften sind unverändert (keine Änderung an `index.astro`, `en/index.astro`, `global.css`).
9. `npm run build` läuft sauber durch; in `dist/client/index.html` und `dist/client/en/index.html` steckt der Umschalter mit „DE“/„EN“.
