# Prüfung: München-Seiten – fehlendes Hero-/OG-Bild

Abnahmeliste: `docs/ABNAHME-muenchen-bild.md`. Fix-Commit: **9607627**.

Gebaut wurde in einer eigenen Kopie des Repos (Scratchpad, `git archive HEAD` + geänderte Dateien, `node_modules` verlinkt), weil parallel eine andere Session im Projektordner `npm run build` laufen ließ und `dist/` überschrieb. Vor dem Commit per `cmp` bestätigt: alle 9 geänderten Dateien in der Kopie sind byte-gleich mit dem Repo.

| # | Satz | Geprüft wie | Ergebnis | Commit |
|---|---|---|---|---|
| 1 | Kein `Laborcontainer_006` mehr in `src/` | `grep -rn Laborcontainer_006 src` | keine Treffer | 9607627 |
| 2 | og:image zeigt auf 010 | `grep og:image` in beiden `index.html` | DE + EN: `https://planexus.de/attached_assets/Laborcontainer_010_1769690502589.jpg` (twitter:image ebenso) | 9607627 |
| 3 | `<picture>` mit WebP-Source und 1980×1485 | Ausschnitt aus beiden `index.html` (unten) | `<source srcset="…_010_….webp" type="image/webp">`, `<img … width="1980" height="1485">`. `sips`: JPG 1980×1485, WebP 1920×1440 (gleiches Seitenverhältnis 4:3) | 9607627 |
| 4 | JPG + WebP im Build | `ls dist/client/attached_assets/Laborcontainer_010*` | `.jpg` 474.227 B, `.webp` 290.774 B; `convert-images-webp.mjs --dry` findet nichts zu konvertieren | 9607627 |
| 5 | Alt-Text nur, was das Foto zeigt | Foto angesehen: Container im Freien, Lüftungsrohre und Klimagerät auf dem Dach | DE: „Laborcontainer von Planexus mit Lüftungsleitungen und Klimagerät auf dem Dach, im Freien aufgestellt“; EN: „Planexus lab container with ventilation ducts and an air-conditioning unit on the roof, sited outdoors“. Alte Behauptungen (LABtoGO, 2,75 m, „im Raum München“) entfernt, weil das Foto sie nicht belegt | 9607627 |
| 6 | Keine andere Städteseite nutzt 010 | `grep -l Laborcontainer_010 dist/client/laborcontainer-*/index.html dist/client/en/lab-containers-*/index.html` | nur `laborcontainer-muenchen` und `en/lab-containers-munich` (010 sonst nur auf Hub `/laborcontainer` und Projekte-Galerie) | 9607627 |
| 7 | check + build grün | `npm run check`, `npm run build` | check: 0 errors, 0 warnings (484 hints); build: `EXIT 0`, „Complete!“ | 9607627 |
| 8 | Linkcheck ohne fehlende Dateien | `python3 linkcheck.py dist/client` (unten) | `Seiten 140 interne Verweise 12504 kaputt 0` | 9607627 |
| 9 | Gegenprobe: Check rot ohne Fix | gleicher Check auf Build von 7ddc3c4 | `kaputt 5`, darunter `Laborcontainer_006_1769688326917.jpg <- /en/lab-containers-munich, /laborcontainer-muenchen` | 7ddc3c4 |
| 10 | Logo-Pfad | `grep -rn Planexus-logo.png src`; `grep '"logo"'` im Build | keine Treffer in `src/`; `/ueber-uns/auszeichnungen` und `/laborcontainer/labtogo` (+ EN) zeigen auf `https://planexus.de/images/planexus-logo.png`. Gegenprobe: vorher als fehlend gemeldet | 9607627 |
| 11 | EN-Magazin-Bild | `grep '"image"'` im Build | `https://planexus.de/magazin/laborcontainer-kosten-preise-hero.png`. Vorher `/en/magazine/…` als fehlend gemeldet | 9607627 |
| 12 | EN-Team-Bilder | `grep '"image"'` im Build | `https://planexus.de/team/sven-biewald.jpg`, `https://planexus.de/team/thomas-boss.jpg`. Vorher `/en/team/…` als fehlend gemeldet | 9607627 |

## Durchlauf Linkcheck

Vorher (Build von 7ddc3c4):
```
Seiten 140 interne Verweise 12502 kaputt 5
/Planexus-logo.png <- /en/about/awards, /en/lab-containers/labtogo, /laborcontainer/labtogo, /ueber-uns/auszeichnungen
/attached_assets/Laborcontainer_006_1769688326917.jpg <- /en/lab-containers-munich, /laborcontainer-muenchen
/en/magazine/laborcontainer-kosten-preise-hero.png <- /en/magazine/lab-container-costs-prices-2026
/en/team/sven-biewald.jpg <- /en/team/sven-biewald
/en/team/thomas-boss.jpg <- /en/team/thomas-boss
```

Nachher (Build mit 9607627):
```
Seiten 140 interne Verweise 12504 kaputt 0
```

Regel: Ein Verweis gilt als kaputt, wenn der Pfad (ohne `#`/`?`, URL-dekodiert) weder eine gebaute Seite noch eine Datei in `dist/client` ist; ausgenommen `/admin` und `/api/*` (SSR). Gegenüber dem Script aus `PRUEFUNG-en-money-links-branchen.md` zusätzlich: `srcset`, `content="https://planexus.de/…"` (og:/twitter:image, canonical, hreflang) und Bild-URLs in JSON-LD (`image`, `logo`, `url`, `contentUrl`, `thumbnailUrl`). Deshalb tauchten die Sätze 10–12 erst jetzt auf.

## Hero-Ausschnitt aus dem Build

```html
<picture><source srcset="/attached_assets/Laborcontainer_010_1769690502589.webp" type="image/webp"><img src="/attached_assets/Laborcontainer_010_1769690502589.jpg" alt="Laborcontainer von Planexus mit Lüftungsleitungen und Klimagerät auf dem Dach, im Freien aufgestellt" width="1980" height="1485" loading="eager" fetchpriority="high" decoding="async" class="w-full h-full object-cover opacity-20"></picture>
<picture><source srcset="/attached_assets/Laborcontainer_010_1769690502589.webp" type="image/webp"><img src="/attached_assets/Laborcontainer_010_1769690502589.jpg" alt="Planexus lab container with ventilation ducts and an air-conditioning unit on the roof, sited outdoors" width="1980" height="1485" loading="eager" fetchpriority="high" decoding="async" class="w-full h-full object-cover opacity-20"></picture>
```

Script (`python3 linkcheck.py dist/client`):

```python
import os,re,sys,html
from urllib.parse import unquote
root=sys.argv[1]
files=set(); pages=set()
for d,_,fs in os.walk(root):
    for f in fs:
        rel='/'+os.path.relpath(os.path.join(d,f),root).replace(os.sep,'/')
        files.add(rel)
        if f=='index.html':
            pages.add(rel[:-len('index.html')].rstrip('/') or '/')
        elif f.endswith('.html'):
            pages.add(rel[:-5])
server={'/admin'}
bad={}; total=0
def urls(s):
    for m in re.finditer(r'\s(?:href|src)="(/[^"]*)"',s): yield m.group(1)
    for m in re.finditer(r'\ssrcset="([^"]*)"',s):
        for part in m.group(1).split(','):
            u=part.strip().split(' ')[0]
            if u.startswith('/'): yield u
    for m in re.finditer(r'\scontent="https://planexus\.de(/[^"]*)"',s): yield m.group(1)
    for m in re.finditer(r'"(?:image|logo|url|contentUrl|thumbnailUrl)"\s*:\s*"https://planexus\.de(/[^"]*\.(?:jpg|jpeg|png|webp|svg|gif))"',s): yield m.group(1)
for p in sorted(pages):
    a=os.path.join(root,p.lstrip('/'),'index.html')
    fp=a if os.path.exists(a) else os.path.join(root,p.lstrip('/')+'.html')
    s=open(fp,encoding='utf-8').read()
    for raw in urls(s):
        u=html.unescape(raw).split('#')[0].split('?')[0]
        if not u or u.startswith('//'): continue
        total+=1; u=unquote(u)
        if u in pages or u.rstrip('/') in pages or u in files or u in server or u.startswith('/api/'): continue
        bad.setdefault(u,set()).add(p)
print('Seiten',len(pages),'interne Verweise',total,'kaputt',len(bad))
for u,ps in sorted(bad.items()): print(u,'<-',', '.join(sorted(ps))[:300])
```

## Offen

- Nicht gepusht, nicht deployt (Freigabe Joachim). Nach dem Deploy live prüfen: `https://planexus.de/attached_assets/Laborcontainer_010_1769690502589.jpg` → 200, og:image auf `/laborcontainer-muenchen`.
