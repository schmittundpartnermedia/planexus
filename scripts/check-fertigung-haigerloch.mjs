// Prüft den Build (dist/client) auf die Fertigungsadresse.
// Seit Oktober 2026 ist die Fertigung in Haigerloch (Hospach 1, 72401 Haigerloch),
// Albstadt-Laufen ist nur noch das Büro. Aufruf nach `npm run build`:
//   node scripts/check-fertigung-haigerloch.mjs
// Exit 0 = alles richtig, Exit 1 = Fundstellen (werden aufgelistet).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = "dist/client";

// Alles, was die Fertigung noch in Albstadt verortet (DE und EN).
const verboten = [
  /Emil-Mayer/i,
  /72461/,
  /Tailfingen/i,
  /Werks?\s+(in\s+)?Albstadt/i,
  /Werk\s*&(amp;)?\s*Zentrale/i,
  /Works\s*&(amp;)?\s*headquarters/i,
  /Albstadt[\s-](works|plant|factory)/i,
  /(works|plant|factory|production|manufactured|built|assembled|made)\s+(in|at)\s+(the\s+)?(our\s+)?Albstadt/i,
  /(Fertigung|Vorfertigung|Endmontage|gefertigt|produziert|hergestellt|gebaut)\s+(in|im)\s+(unserem\s+)?(Werk\s+)?Albstadt/i,
  /Made in Albstadt/i,
  /\b(ab|von|aus)\s+(dem\s+)?(Werk\s+)?Albstadt\b(?!\s*[-–]\s*Laufen)(?!-Laufen)/i,
  /\bfrom\s+(the\s+)?(our\s+)?Albstadt\b/i,
  /Albstadt\s*(→|->|&rarr;)/,
  // umgekehrte Wortstellung: „in Albstadt gefertigt“, „Albstadt production“
  /Albstadt\S*\s+(\S+\s+){0,2}(gefertigt|produziert|hergestellt|vorgefertigt|production|manufacturing|manufactured|prefabricated)\b/i,
  /(Produktion|Fertigung|Werksfertigung|Endmontage)\s+(\S+\s+){0,2}Albstadt/i,
];

// Erlaubt, weil sie den Firmensitz/das Büro in Albstadt meinen (Abnahmeliste, Satz 8).
const firmensitz = [
  "modularer Laborbau aus Albstadt",
  "modular labs from Albstadt",
  "modular laboratory construction from Albstadt",
  "Modulbau Spezialist aus Albstadt",
  "geplant in Albstadt, gefertigt im Werk Haigerloch",
];

const pflicht = [/Hospach 1/, /72401 Haigerloch/];
const kontaktPflicht = [/tel:\+4974744273000/, /\+49 7474 \/ 4273000/];

function* html(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* html(p);
    else if (name.endsWith(".html") || name.endsWith(".txt")) yield p;
  }
}

const fehler = [];
let seiten = 0;
for (const file of html(root)) {
  seiten++;
  const rel = relative(root, file);
  const roh = readFileSync(file, "utf8");
  // Tags entfernen, damit „Werk <strong>Albstadt</strong>“ auch gefunden wird.
  const ohneTags = roh.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const text = firmensitz.reduce((t, satz) => t.split(satz).join(""), ohneTags);
  for (const re of verboten) {
    const m = text.match(re);
    if (m) {
      const i = m.index ?? 0;
      fehler.push(`${rel}: verboten ${re} → „…${text.slice(Math.max(0, i - 60), i + 60).replace(/\s+/g, " ")}…“`);
    }
  }
  if (roh.includes("<footer")) {
    for (const re of pflicht) if (!re.test(ohneTags)) fehler.push(`${rel}: fehlt ${re}`);
  }
  if (rel === "kontakt/index.html" || rel === "en/contact/index.html") {
    for (const re of kontaktPflicht) if (!re.test(roh)) fehler.push(`${rel}: fehlt ${re}`);
  }
}

console.log(`${seiten} Seiten geprüft, ${fehler.length} Fundstellen.`);
for (const f of fehler) console.log(f);
process.exit(fehler.length ? 1 : 0);
