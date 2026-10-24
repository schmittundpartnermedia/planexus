// Prüft den Build (dist/client) auf die Textfehler aus Svens Mail vom 25.10.2026
// (docs/ABNAHME-kundenhinweise-sven.md). Aufruf nach `npm run build`:
//   node scripts/check-kundenhinweise-sven.mjs
// Exit 0 = alles richtig, Exit 1 = Fundstellen (werden aufgelistet).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = "dist/client";

// Satz 1–3, 6, 7: verbotene Formulierungen im sichtbaren Text und im JSON-LD.
const verboten = [
  // Satz 1
  /Alle Schemas auf jeder Stadtseite/i,
  /All schemas documented on every city page/i,
  // Satz 2
  /Pauschalpreise sind bei Laborcontainern nicht sinnvoll/i,
  /blanket prices are not meaningful/i,
  // Satz 3
  // Die Titel heißen „Leading Modular Laboratory Containers Provider 2026“ (Firma) und
  // „Most Innovative Laboratory Spaces Leader 2026“ (Sven Biewald); die Mischform gibt es nicht.
  /Führender Anbieter innovativer Laborräume/i,
  /Leading provider of innovative laboratory spaces/i,
  /EU[- ]Award/i,
  /Award Winner 2026/i,
  /International prämiert/i,
  /Internationally awarded/i,
  /(ausgezeichnet|prämiert)\s+als\s+(„|"|“)?(der\s+)?(f|F)ührende/,
  /als\s+(„|"|“)?(f|F)ührende[rn]? Anbieter[^.]{0,80}(ausgezeichnet|prämiert)/,
  /(recognised|recognized|awarded)\s+as\s+(a\s+|the\s+)?(“|"|‘)?(l|L)eading provider/,
  /as\s+(a\s+|the\s+)?(“|")?(l|L)eading (p|P)rovider[^.]{0,80}(recognised|recognized|awarded)/,
  // Satz 6
  /Planexus GmbH in Albstadt\b(?![^.]{0,60}Haigerloch)/,
  /Planexus GmbH,? Albstadt\b(?![^.]{0,60}Haigerloch)/,
  // Satz 7
  /(über|>|&gt;)\s*75\s*m³/i,
  /75\s*m³\s*(überschreitet|übersteigt)/i,
  /(exceeding|exceeds|over|>|&gt;)\s*75\s*m³/i,
];

// Satz 7: NRW-Seiten dürfen § 62 BauO NRW mit der 75-m³-Grenze nennen.
const nrwSeiten = new Set(["laborcontainer-duesseldorf/index.html", "en/lab-containers-dusseldorf/index.html"]);
const nur75 = (re) => /75/.test(re.source);

// Satz 2 und 4: Pflichtformulierungen auf der Startseite.
const startPflicht = {
  "index.html": [/Festpreis nach der Bedarfsanalyse/, /keine Pauschalpreise vorab/, /<h3[^>]*>\s*German CEO Excellence Awards 2026\s*<\/h3>/],
  "en/index.html": [/fixed price after the requirements analysis/, /no blanket prices up front/, /<h3[^>]*>\s*German CEO Excellence Awards 2026\s*<\/h3>/],
};

function* html(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* html(p);
    else if (name.endsWith(".html")) yield p;
  }
}

function zeige(text, i) {
  return text.slice(Math.max(0, i - 60), i + 80).replace(/\s+/g, " ");
}

const fehler = [];
let seiten = 0;
for (const file of html(root)) {
  seiten++;
  const rel = relative(root, file);
  const roh = readFileSync(file, "utf8");
  const text = roh.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const ld = [...roh.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join("\n");
  const alles = text + "\n" + ld;

  for (const re of verboten) {
    if (nrwSeiten.has(rel) && nur75(re)) continue;
    const m = alles.match(re);
    if (m) fehler.push(`${rel}: verboten ${re} → „…${zeige(alles, m.index ?? 0)}…“`);
  }

  // Satz 5: Jeder JSON-LD-Block mit Albstadt-Laufen nennt auch die Fertigung in Haigerloch.
  for (const m of roh.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const block = m[1];
    if (/Albstadt-Laufen/.test(block) && !(/Hospach 1/.test(block) && /72401/.test(block))) {
      fehler.push(`${rel}: JSON-LD nennt Albstadt-Laufen ohne Fertigung Haigerloch → „…${zeige(block, block.indexOf("Albstadt-Laufen"))}…“`);
    }
  }

  for (const re of startPflicht[rel] ?? []) {
    if (!re.test(roh)) fehler.push(`${rel}: fehlt ${re}`);
  }
}

console.log(`${seiten} Seiten geprüft, ${fehler.length} Fundstellen.`);
for (const f of fehler) console.log(f);
process.exit(fehler.length ? 1 : 0);
