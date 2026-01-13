import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Calendar, User, Tag, Clock, CheckCircle2, Lightbulb, AlertTriangle, ChevronRight, Share2, Bookmark, TrendingUp, Zap, Box, Building } from "lucide-react";
import { motion } from "framer-motion";
import { SEO, ArticleSchema, BreadcrumbSchema } from "@/components/SEO";

export default function Article1() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Innovation im Modulbau: Die Zukunft des mobilen Labors"
        description="Wie modulare Bauweisen die Flexibilität in der Forschung erhöhen und warum Containerlabore eine echte Alternative zum Massivbau sind."
        canonical="/magazine/1"
        type="article"
      />
      <ArticleSchema 
        headline="Innovation im Modulbau: Die Zukunft des mobilen Labors"
        description="Wie modulare Bauweisen die Flexibilität in der Forschung erhöhen und warum Containerlabore eine echte Alternative zum Massivbau sind."
        author="Sven Biewald"
        datePublished="2026-01-12"
        image="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070"
        url="/magazine/1"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Magazin", url: "/magazine" },
        { name: "Innovation im Modulbau", url: "/magazine/1" }
      ]} />
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <Tag className="w-4 h-4" /> Technologie
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" /> 12 Min. Lesezeit
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Innovation im Modulbau: Die Zukunft des mobilen Labors
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Wie modulare Bauweisen die Flexibilität in der Forschung erhöhen und warum Containerlabore eine echte Alternative zum Massivbau sind.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 12. Januar 2026</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> Sven Biewald</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brotkrümel */}
      <div className="bg-slate-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/magazine" className="hover:text-primary">Magazin</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Innovation im Modulbau</span>
          </div>
        </div>
      </div>

      {/* Artikel-Inhalt */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Hauptinhalt */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                
                {/* Einleitung */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Die Welt der Laborforschung steht vor einem fundamentalen Wandel. Während traditionelle Laborgebäude oft Jahre in der Planung und Umsetzung benötigen, revolutioniert der modulare Laborbau die Art und Weise, wie Forschungseinrichtungen entstehen. In diesem umfassenden Artikel beleuchten wir die Innovationen im Modulbau und zeigen, warum immer mehr Unternehmen und Institutionen auf mobile Laborlösungen setzen.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Der Paradigmenwechsel im Laborbau
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die traditionelle Laborplanung und -errichtung ist ein langwieriger, kostenintensiver Prozess. Von der ersten Bedarfsanalyse bis zur Schlüsselübergabe vergehen nicht selten drei bis fünf Jahre. In einer Zeit, in der sich wissenschaftliche Anforderungen schnell ändern und Flexibilität zum entscheidenden Wettbewerbsfaktor wird, ist dieser Zeitrahmen oft nicht mehr akzeptabel.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hier setzt der modulare Laborbau an. Durch die Vorfertigung von Labormodulen in kontrollierten Produktionsumgebungen können Realisierungszeiten um bis zu 60 Prozent reduziert werden. Ein vollständig ausgestattetes Containerlabor kann innerhalb von 12 bis 16 Wochen geplant, gefertigt und in Betrieb genommen werden – ein Zeitraum, in dem bei konventionellen Projekten oft noch die Baugenehmigung aussteht.
                </p>

                {/* Profi-Tipp Box */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Profi-Tipp: Frühe Planung zahlt sich aus</h4>
                      <p className="text-gray-600 text-sm">
                        Beginnen Sie mit der <Link href="/services/planning" className="text-primary font-medium hover:underline">technischen Fachplanung</Link> bereits in der Konzeptphase. Je früher die Anforderungen definiert werden, desto besser kann das Containermodul auf Ihre spezifischen Bedürfnisse abgestimmt werden – ohne Mehrkosten durch nachträgliche Änderungen.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Technologische Innovationen im Containermodul
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Moderne Laborcontainer haben mit den einfachen Containerlösungen der Vergangenheit nichts mehr gemein. Die heutige Generation von Containermodulen vereint fortschrittliche Materialwissenschaft, präzise Fertigungstechniken und intelligente Gebäudetechnik zu einer Einheit, die konventionellen Laborgebäuden in vielen Aspekten überlegen ist.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                  {[
                    { icon: <Box className="w-6 h-6" />, title: "Modulare Architektur", desc: "Flexible Erweiterung durch standardisierte Schnittstellen" },
                    { icon: <Zap className="w-6 h-6" />, title: "Smart Integration", desc: "IoT-fähige Systeme für Echtzeitüberwachung" },
                    { icon: <Building className="w-6 h-6" />, title: "Robuste Konstruktion", desc: "Stahlrahmen für jahrzehntelange Nutzung" },
                    { icon: <TrendingUp className="w-6 h-6" />, title: "Wertstabilität", desc: "Hoher Wiederverkaufswert und Umnutzungspotential" },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-5 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Hochleistungsisolierung und Klimatechnik
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die thermische Hülle moderner Laborcontainer erreicht U-Werte von unter 0,20 W/m²K – Werte, die selbst ambitionierte Passivhausstandards übertreffen. Sandwichpaneele mit Polyurethan-Hartschaumkern oder Mineralwollfüllung bieten nicht nur hervorragende Dämmwerte, sondern erfüllen auch höchste Brandschutzanforderungen.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die integrierte Klimatechnik gewährleistet konstante Temperaturen und Luftfeuchtigkeiten – essentiell für präzise Laborarbeit. Moderne Lüftungsanlagen mit Wärmerückgewinnung minimieren den Energieverbrauch, während hocheffiziente Filter die erforderliche Luftreinheit sicherstellen. Bei Bedarf können auch Reinraumbedingungen nach ISO-Klassifizierung realisiert werden.
                </p>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Präzisionsfertigung unter kontrollierten Bedingungen
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ein entscheidender Vorteil des Modulbaus liegt in der Fertigung unter kontrollierten Werkstattbedingungen. Anders als auf der Baustelle, wo Witterungseinflüsse und wechselnde Teams die Qualität beeinträchtigen können, erfolgt die Produktion von Laborcontainern in spezialisierten Fertigungshallen.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Diese kontrollierte Umgebung ermöglicht eine Qualitätssicherung, die im konventionellen Bau kaum erreichbar ist. Jeder Arbeitsschritt wird dokumentiert, jede Naht geprüft, jedes System getestet. Das Ergebnis sind Module, die bei der Auslieferung bereits vollständig geprüft und abgenommen sind – ein wesentlicher Zeitvorteil bei der Inbetriebnahme.
                </p>

                {/* Wichtiger Hinweis */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Wichtig: Standortvorbereitung nicht vergessen</h4>
                      <p className="text-gray-600 text-sm">
                        Während das Containermodul in der Fabrik entsteht, sollte parallel die Standortvorbereitung erfolgen. Unsere <Link href="/services/logistics" className="text-primary font-medium hover:underline">Logistik- und Montageexperten</Link> unterstützen Sie bei der Planung von Fundament und Medienanschlüssen.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Flexibilität als strategischer Vorteil
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die größte Stärke des modularen Laborbaus liegt in seiner inhärenten Flexibilität. Ein Laborcontainer ist keine permanente Struktur, sondern ein mobiles Asset, das mit dem Unternehmen wachsen und sich verändern kann. Diese Flexibilität manifestiert sich in mehreren Dimensionen:
                </p>

                {/* Checkliste */}
                <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                  <h4 className="font-bold text-slate-900 mb-4">Flexibilitätsdimensionen im Überblick:</h4>
                  <ul className="space-y-3">
                    {[
                      "Räumliche Flexibilität: Standortwechsel innerhalb von Tagen statt Monaten",
                      "Kapazitätsflexibilität: Einfache Erweiterung durch zusätzliche Module",
                      "Funktionale Flexibilität: Umnutzung für neue Anwendungsbereiche",
                      "Finanzielle Flexibilität: Leasing-Optionen statt hoher Anfangsinvestitionen",
                      "Zeitliche Flexibilität: Schnelle Reaktion auf Marktveränderungen"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Anwendungsszenarien für mobile Labore
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Einsatzmöglichkeiten für Laborcontainer sind vielfältig. In der Pharmaindustrie dienen sie als temporäre Erweiterung bestehender Kapazitäten oder als dedizierte Einrichtungen für klinische Studien. Umweltlabore nutzen mobile Einheiten für Vor-Ort-Analysen an Feldstandorten. Industrieunternehmen schätzen die Möglichkeit, Qualitätskontrolllabore direkt an der Produktionslinie zu positionieren.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Besonders interessant ist der Einsatz in Forschungskooperationen: Wenn mehrere Partner an verschiedenen Standorten zusammenarbeiten, kann ein mobiles Labor die Distanzen überbrücken. Das Labor kommt zu den Proben – nicht umgekehrt. Dies reduziert Transportrisiken und verkürzt die Zeit von der Probenahme bis zum Ergebnis erheblich.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Wirtschaftlichkeitsbetrachtung: TCO im Vergleich
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die wirtschaftliche Bewertung von Laborcontainern muss über die reinen Anschaffungskosten hinausgehen. Eine umfassende Total-Cost-of-Ownership-Analyse (TCO) berücksichtigt sämtliche Kosten über den gesamten Lebenszyklus – und hier zeigen modulare Lösungen oft überraschende Vorteile.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Investitionskosten für einen Laborcontainer liegen typischerweise 20 bis 40 Prozent unter denen eines vergleichbaren konventionellen Labors. Hinzu kommen reduzierte Planungskosten durch standardisierte Prozesse und verkürzte Bauzeiten. Die schnellere Inbetriebnahme bedeutet zudem einen früheren Produktivitätsbeginn – ein Faktor, der in der ROI-Berechnung oft unterschätzt wird.
                </p>

                {/* Profi-Tipp */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Profi-Tipp: Leasing-Optionen prüfen</h4>
                      <p className="text-gray-600 text-sm">
                        Für temporäre Projekte oder bei begrenztem Investitionsbudget können Leasing-Modelle eine attraktive Alternative sein. Sprechen Sie uns in der <Link href="/services/consulting" className="text-primary font-medium hover:underline">Beratung</Link> auf die verschiedenen Finanzierungsoptionen an.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Sicherheit und Compliance im mobilen Labor
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ein häufiges Vorurteil gegenüber Containerlaboren betrifft die Einhaltung von Sicherheitsstandards. Tatsächlich können moderne Laborcontainer alle gängigen Sicherheits- und Qualitätsanforderungen erfüllen – von einfachen S1-Laboren bis hin zu BSL-3-Einrichtungen für die Arbeit mit gefährlichen biologischen Arbeitsstoffen.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Schlüssel zur Sicherheit liegen in der sorgfältigen Planung und hochwertigen Ausführung. Druckdichte Kabinenkonstruktionen ermöglichen die Aufrechterhaltung von Unterdruckzonen. Spezielle HEPA-Filteranlagen gewährleisten die sichere Abluftbehandlung. Dekontaminationsschleusen und Durchreicheautoklaven komplettieren das Sicherheitskonzept.
                </p>

                <h3 className="text-xl font-heading font-bold text-slate-900 mt-10 mb-4">
                  Normen und Zertifizierungen
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Laborcontainer von Planexus werden nach allen relevanten Normen geplant und gefertigt. Dies umfasst unter anderem die DIN EN 12128 für Laboratorien, die Arbeitsstättenverordnung, die Gefahrstoffverordnung sowie branchenspezifische Anforderungen wie GMP für die Pharmaindustrie oder die Gentechnik-Sicherheitsverordnung.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Unsere <Link href="/services/consulting" className="text-primary font-medium hover:underline">Beratungsexperten</Link> unterstützen Sie bei der Navigation durch die verschiedenen regulatorischen Anforderungen und stellen sicher, dass Ihr Laborcontainer alle erforderlichen Genehmigungen erhält.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Nachhaltigkeit und Umweltaspekte
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Der modulare Laborbau ist nicht nur wirtschaftlich attraktiv, sondern auch ökologisch vorteilhaft. Die Vorfertigung in der Fabrik reduziert Transportfahrten zur Baustelle, minimiert Materialverschwendung und ermöglicht eine optimale Abfallentsorgung und -verwertung.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die hohe Energieeffizienz moderner Laborcontainer senkt den Betriebsenergiebedarf – und damit sowohl Kosten als auch CO2-Emissionen. Am Ende der Nutzungsdauer können die Module demontiert und an anderer Stelle wiederverwendet oder die Materialien dem Recycling zugeführt werden. Ein Großteil der verwendeten Materialien – insbesondere der Stahl – kann vollständig wiederverwertet werden.
                </p>

                <h2 className="text-2xl font-heading font-bold text-slate-900 mt-12 mb-6">
                  Die Zukunft des mobilen Labors
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die Entwicklung im modularen Laborbau schreitet stetig voran. Aktuelle Trends zeigen in Richtung einer noch stärkeren Integration digitaler Technologien. <Link href="/services/smart-lab" className="text-primary font-medium hover:underline">Smart-Lab-Systeme</Link> mit IoT-Sensoren, cloudbasierter Datenanalyse und automatisierten Workflows werden zum Standard.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Auch die Fertigungstechnologien entwickeln sich weiter. 3D-Druck und robotergestützte Fertigung ermöglichen zunehmend individualisierte Lösungen bei gleichbleibend hoher Effizienz. Die Grenzen zwischen Standardmodulen und maßgeschneiderten Lösungen verschwimmen – zum Vorteil der Nutzer, die von beiden Welten profitieren.
                </p>

                {/* Fazit */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl my-12 not-prose">
                  <h3 className="text-xl font-bold mb-4">Fazit: Modulbau als Zukunftsstrategie</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Der modulare Laborbau hat sich von einer Nischenlösung zur ernsthaften Alternative für nahezu alle Laboranwendungen entwickelt. Die Kombination aus Geschwindigkeit, Flexibilität, Qualität und Wirtschaftlichkeit macht Containerlab ore zur ersten Wahl für zukunftsorientierte Unternehmen und Institutionen.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                      Beratungstermin vereinbaren <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Autor */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-4">Über den Autor</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      SB
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Sven Biewald</p>
                      <p className="text-gray-600 text-sm">Geschäftsführer Planexus GmbH</p>
                    </div>
                  </div>
                </div>

                {/* Teilen */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-4">Artikel teilen</h4>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Verwandte Leistungen */}
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <h4 className="font-bold text-slate-900 mb-4">Passende Leistungen</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/planning" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Technische Fachplanung
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/construction" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Modulbau & Fertigung
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/smart-lab" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Smart Lab Integration
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                  <h4 className="font-bold mb-3">Projekt besprechen?</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Lassen Sie uns über Ihre Anforderungen sprechen.
                  </p>
                  <Link href="/contact" className="block w-full bg-primary text-white font-bold py-3 rounded-lg text-center hover:bg-primary/90 transition-colors">
                      Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Weitere Artikel */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8">Weitere Artikel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/magazine/2" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 group">
                <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-2">Nachhaltigkeit</p>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech</h3>
                </div>
            </Link>
            <Link href="/magazine/3" className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 group">
                <div className="w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=400" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-2">Sicherheit</p>
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">BSL-2 und BSL-3 im Container: Geht das?</h3>
                </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Zurück */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/magazine" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Magazin
        </Link>
      </div>
    </div>
  );
}
