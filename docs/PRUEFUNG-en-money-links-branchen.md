# Prüfung: EN-Money-Seiten-Links + tote Branchen-Links (15.10.2026)

Abnahmeliste: `docs/ABNAHME-en-money-links-branchen.md`. Code-Commit: **3e319ad** (lokal, nicht gepusht).
Alle Prüfungen gegen frischen `npm run build` (Exit 0, 0 Fehler im Log) in `dist/client`.

| # | Satz | geprüft wie | Ergebnis | Commit |
|---|---|---|---|---|
| 1 | `/en` Hero-Zeile Hire · Buy · LABtoGO | grep in `dist/client/en/index.html` | 3 Links auf rent/buy/labtogo vorhanden | 3e319ad |
| 2 | Hub-Hero: Definitionstext, CTAs Hire/Buy/LABtoGO, kein „Get advice now“ | grep in `en/lab-containers/index.html` | Text da, testids mieten/kaufen/labtogo, „Get advice now“ 0× | 3e319ad |
| 3 | Hub-Absatz Hire vs. Buy + 2 Buttons | grep | Absatz da; je 5 Links auf rent/buy auf der Seite | 3e319ad |
| 4 | LABtoGO: sichtbare Breadcrumbs + Hire/Buy-Buttons | grep `aria-label="Breadcrumb"` in `en/lab-containers/labtogo/index.html` | Home → /en, Lab containers → /en/lab-containers, LABtoGO (aria-current); je 2 Links rent/buy | 3e319ad |
| 5 | Rent/Buy verlinken den Hub (Inline + Karte „Overview“) | grep `href="/en/lab-containers"` | je Inline-Link + Karte „Overview“ (1×) vorhanden | 3e319ad |
| 6 | Title/H1 unverändert | `git diff` auf `title=`/`<h1` (0 Zeilen) + Titel aus dist | unverändert, je genau 1 H1 | 3e319ad |
| 7 | Bildung/Forschung: kein `mieten-vs-kaufen` mehr | grep in dist | 0 alte Links, je 1× `/magazin/laborcontainer-mieten-oder-kaufen` | 3e319ad |
| 8 | Bauantrag-/labtogo-Links direkt aufs Ziel | grep in dist | 0 alte Links; Ziele `/magazin/laborcontainer-genehmigung-baurecht-vorschriften`, `/laborcontainer/labtogo` existieren im Build | 3e319ad |
| 9 | Keine internen Links auf nicht gebaute Seiten | Linkcheck-Script (unten) über alle 140 Seiten, 11.230 interne href/src | 0 kaputte Seiten-Links; 1 fehlendes **Bild** (siehe Offen) | 3e319ad |
| 10 | `npm run check` + `npm run build` grün | ausgeführt | check: 0 errors, 0 warnings; build: Exit 0 | 3e319ad |
| 11 | Keine Preise, British English | grep `€`/`EUR` in den 5 EN-Seiten; Wortwahl „hire“, „enquire“ | einziger Treffer `priceRange:"€€€"` im Organisations-Schema des Layouts (vorbestehend, kein Preis); keine Referenzen ergänzt | 3e319ad |

## Abweichungen vom Auftrag (Entscheidungen)

- `/magazin/laborcontainer-genehmigung-bauantrag` stand nicht in `public-health-krisenvorsorge`, sondern in `bildung` und `forschung-hochschule` – dort korrigiert. In `public-health-krisenvorsorge` war nur `/labtogo`.
- „Hub-Karte im Querverweis-Raster“ auf LABtoGO: Die DE-Seite hat kein solches Raster; der Hub-Link kommt dort über die sichtbare Breadcrumb. EN jetzt identisch (Breadcrumb mit Link auf `/en/lab-containers`), keine zusätzliche Karte erfunden.
- Zusätzlich übernommen, weil Teil derselben Lücke aus 98166ee: Hub-Link (Inline + Karte „Overview“) auf `/en/rent-lab-containers` und `/en/buy-lab-containers`.
- `npm run check` hatte 3 vorbestehende Fehler (rohes `<` vor Zahlen in `branchen/bildung` und `branchen/industrie-werkstoffpruefung`, seit Commit 3556f90). Als `&lt;` geschrieben – sichtbarer Text identisch.

## Gegenprobe (ohne Fix rot)

```
## Alte Ziele existieren nicht im Build (Linkcheck wäre rot):
magazin/laborcontainer-mieten-vs-kaufen fehlt
magazin/laborcontainer-genehmigung-bauantrag fehlt
labtogo fehlt
## HEAD-Stand (vor Fix) – Treffer:
src/pages/branchen/bildung.astro alt-Links: 2
src/pages/branchen/forschung-hochschule.astro alt-Links: 2
src/pages/branchen/public-health-krisenvorsorge.astro alt-Links: 1
en/index Hire-Zeile HEAD: 0
en/lab-containers rent-Links HEAD: 0, Get advice now HEAD: 1
en/labtogo Breadcrumbs HEAD: 0
en/rent Hub-Links HEAD: 0
en/buy Hub-Links HEAD: 0
```

## Rohdaten Abnahme (dist)

```
## 1 /en Hero-Zeile
href="/en/rent-lab-containers" class="underline hover:text-primary">Hire<
href="/en/buy-lab-containers" class="underline hover:text-primary">Buy<
href="/en/lab-containers/labtogo" class="underline hover:text-primary">LABtoGO<
## 2 Hub Hero
A lab container is a factory-built, ready-to-connect laboratory — from analytical laboratories to BSL-3 and GMP cleanrooms. Operational in 8 to 14 weeks. 
data-testid="link-hero-mieten"
data-testid="link-hero-kaufen"
data-testid="link-hero-labtogo"
0
## 3 Hub Absatz
Depending on the period of use and your balance-sheet objectives, you can 
   5 href="/en/buy-lab-containers"
   5 href="/en/rent-lab-containers"
## 4 LABtoGO Breadcrumb + Buttons
<a href="/en" class="hover:text-[#7a9900] transition-colors">Home</a>
<a href="/en/lab-containers" class="hover:text-[#7a9900] transition-colors">Lab containers</a>
<span class="text-primary font-medium" aria-current="page">LABtoGO</span>
   2 href="/en/buy-lab-containers"
   2 href="/en/rent-lab-containers"
## 5 rent/buy Hub
rent
href="/en/lab-containers" class="text-primary underline hover:no-underline">lab container<
href="/en/lab-containers" class="hover:text-[#7a9900] transition-colors">Lab containers<
href="/en/lab-containers" class="block bg-white rounded-xl p-8 border border-slate-200 hover:border-primary hover:shadow-lg transition-all group"> <
href="/en/lab-containers" class="text-slate-400 hover:text-primary transition-colors text-sm">Lab containers overview<
1
buy
href="/en/lab-containers" class="text-primary underline hover:no-underline">lab container<
href="/en/lab-containers" class="hover:text-[#7a9900] transition-colors">Lab containers<
href="/en/lab-containers" class="block bg-white rounded-xl p-8 border border-slate-200 hover:border-primary hover:shadow-lg transition-all group"> <
href="/en/lab-containers" class="text-slate-400 hover:text-primary transition-colors text-sm">Lab containers overview<
1
## 6 Title/H1
en | <title>Planexus – lab containers and modular laboratory construction from Albstadt | H1-Anzahl 1
en/lab-containers | <title>Lab containers – types, biosafety levels and equipment | Planexus | H1-Anzahl 1
en/lab-containers/labtogo | <title>LABtoGO – mobile lab container with 2,750 mm room height | Planexus | H1-Anzahl 1
en/rent-lab-containers | <title>Rent lab containers – turnkey from the works | Planexus | H1-Anzahl 1
en/buy-lab-containers | <title>Buy lab containers – turnkey from the works | Planexus | H1-Anzahl 1
## 7/8 Branchen
bildung alt: 0
   2 href="/laborcontainer/labtogo"
   1 href="/magazin/laborcontainer-genehmigung-baurecht-vorschriften"
   1 href="/magazin/laborcontainer-mieten-oder-kaufen"
forschung-hochschule alt: 0
   2 href="/laborcontainer/labtogo"
   1 href="/magazin/laborcontainer-genehmigung-baurecht-vorschriften"
   1 href="/magazin/laborcontainer-mieten-oder-kaufen"
public-health-krisenvorsorge alt: 0
   3 href="/laborcontainer/labtogo"
## Zielseiten existieren
laborcontainer/labtogo/index.html
magazin/laborcontainer-genehmigung-baurecht-vorschriften/index.html
magazin/laborcontainer-mieten-oder-kaufen/index.html
## Preise/€ in geänderten EN-Seiten
en/index.html:1
en/rent-lab-containers/index.html:1
en/lab-containers/labtogo/index.html:1
en/buy-lab-containers/index.html:1
en/lab-containers/index.html:1
```

## Linkcheck

```
Seiten 140 interne Links 11230 kaputt 1
/attached_assets/Laborcontainer_006_1769688326917.jpg <- /en/lab-containers-munich, /laborcontainer-muenchen
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
            p=rel[:-len('index.html')].rstrip('/') or '/'
            pages.add(p)
        elif f.endswith('.html'):
            pages.add(rel[:-5])
server={'/admin'}  # SSR-Routen
bad={}; total=0
for p in sorted(pages):
    fp=os.path.join(root, p.lstrip('/'), 'index.html') if os.path.exists(os.path.join(root,p.lstrip('/'),'index.html')) else os.path.join(root,p.lstrip('/')+'.html')
    s=open(fp,encoding='utf-8').read()
    for m in re.finditer(r'\s(?:href|src)="(/[^"]*)"',s):
        u=html.unescape(m.group(1)).split('#')[0].split('?')[0]
        if not u or u.startswith('//'): continue
        total+=1
        u=unquote(u)
        if u in pages or u.rstrip('/') in pages or u in files or u in server or u.startswith('/api/'): continue
        bad.setdefault(u,set()).add(p)
print('Seiten',len(pages),'interne Links',total,'kaputt',len(bad))
for u,ps in sorted(bad.items()): print(u,'<-',', '.join(sorted(ps))[:300])
```

## Offen (nicht Teil dieses Auftrags)

- `/attached_assets/Laborcontainer_006_1769688326917.jpg` wird auf `/laborcontainer-muenchen` und `/en/lab-containers-munich` als Hero-Hintergrund und `ogImage` verwendet, die Datei hat nie im Repo existiert (kein Git-Eintrag) → live 404. Braucht eine Bildauswahl.
- Nicht deployt: Push und Server-Deploy erst nach Joachims Freigabe.
