import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Hammer, Layers, Shield, Factory, Wrench, Cog, Phone, ChevronRight, Lightbulb } from "lucide-react";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/SEO";

export default function ConstructionService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Modulbau & Fertigung"
        description="Hochwertige Laborcontainer Made in Germany. Präzise Fertigung, robuste Stahlrahmenkonstruktion und labortaugliche Oberflächen. Qualität seit über 10 Jahren."
        canonical="/services/construction"
      />
      <ServiceSchema 
        name="Modulbau & Fertigung"
        description="Hochwertige Laborcontainer-Fertigung Made in Germany mit Stahlrahmenkonstruktion"
        url="/services/construction"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Leistungen", url: "/services" },
        { name: "Modulbau & Fertigung", url: "/services/construction" }
      ]} />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
              <Hammer className="w-4 h-4" />
              <span>Leistungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Modulbau & <span className="text-primary">Fertigung</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Hochwertige Laborcontainer 'Made in Germany'. Präzise Fertigung, robuste Konstruktion und durchdachte Details für langlebige Qualität.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Angebot anfordern <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href="tel:+4974357519700" className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" /> Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/"><a className="hover:text-primary">Start</a></Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services"><a className="hover:text-primary">Leistungen</a></Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Modulbau & Fertigung</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-slate-900">
                  Präzision und Qualität in jedem Detail
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Der Bau eines Laborcontainers erfordert höchste Präzision und ein tiefes Verständnis für die besonderen Anforderungen von Laborumgebungen. Bei Planexus vereinen wir handwerkliche Expertise mit modernster Fertigungstechnologie, um Containerlabore zu schaffen, die in Qualität und Funktionalität keine Kompromisse eingehen.
                  </p>
                  <p>
                    Unsere Fertigung erfolgt ausschließlich in Deutschland, in enger Zusammenarbeit mit zertifizierten Partnerbetrieben, die unsere hohen Qualitätsstandards teilen. Jeder Laborcontainer wird individuell nach den Spezifikationen unserer Planung gefertigt – Serienfertigung gibt es bei uns nicht. Denn wir wissen: Jedes Labor ist einzigartig und verdient eine maßgeschneiderte Lösung.
                  </p>
                  <p>
                    Die Vorteile der Modulbauweise liegen auf der Hand: Kurze Bauzeiten, kontrollierte Fertigungsbedingungen und eine gleichbleibend hohe Qualität. Während konventionelle Laborbauten oft Monate oder Jahre dauern, können wir einen voll funktionsfähigen Laborcontainer in wenigen Wochen realisieren – ohne Abstriche bei der Qualität.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Die Konstruktion unserer Laborcontainer
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Das Herzstück jedes Planexus-Laborcontainers ist ein robuster Stahlrahmen, der höchsten Belastungen standhält. Die Rahmenkonstruktion ist so ausgelegt, dass sie den Transport per LKW, Schiff oder Bahn problemlos übersteht und auch bei gestapelten Containern absolute Stabilität gewährleistet.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Wandaufbau und Isolierung</h4>
                  <p>
                    Die Wandelemente bestehen aus hochisolierenden Sandwichpaneelen mit einer Stärke von 80 bis 120 mm. Der Kern aus Polyurethan-Hartschaum oder Mineralwolle bietet eine hervorragende Wärmedämmung (U-Wert bis 0,20 W/m²K) und erfüllt höchste Brandschutzanforderungen. Die Oberflächen sind wahlweise aus pulverbeschichtetem Stahl, Edelstahl oder HPL-beschichteten Platten gefertigt – je nach Anforderung an Chemikalienbeständigkeit und Reinigungsfähigkeit.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Bodenaufbau</h4>
                  <p>
                    Der Boden unserer Laborcontainer ist für hohe Punktlasten ausgelegt und nimmt auch schwere Laborgeräte problemlos auf. Ein mehrschichtiger Aufbau mit Stahlunterkonstruktion, Isolierung und Estrich bildet die Basis für verschiedene Bodenbeläge. Für Labore mit erhöhten Anforderungen an die Chemikalienbeständigkeit verwenden wir spezielle Laborböden aus Epoxidharz oder PVC mit verschweißten Nähten.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Dachkonstruktion</h4>
                  <p>
                    Das Dach ist nicht nur für die Witterungsbeständigkeit entscheidend, sondern auch für die Integration technischer Anlagen. Unsere Dachkonstruktionen bieten ausreichend Raum für Klimageräte, Lüftungsanlagen und Abluftführungen. Die thermische Trennung zwischen Dach und Innenraum verhindert Kondensatbildung und sorgt für ein stabiles Raumklima.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Technische Ausstattung ab Werk
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <Cog className="w-6 h-6" />, title: "Elektroinstallation", desc: "Komplette elektrische Ausstattung nach VDE mit Sicherungsverteiler, Steckdosen und Beleuchtung." },
                    { icon: <Layers className="w-6 h-6" />, title: "Medienversorgung", desc: "Installation von Gas-, Wasser- und Druckluftleitungen nach Laborstandard." },
                    { icon: <Factory className="w-6 h-6" />, title: "Lüftungstechnik", desc: "Integrierte Lüftungsanlagen mit Filterung und optionaler Klimatisierung." },
                    { icon: <Shield className="w-6 h-6" />, title: "Sicherheitstechnik", desc: "Brandmeldeanlage, Notduschen und Augenspüleinrichtungen auf Wunsch." },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Fertigungsprozess und Qualitätssicherung
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Unser Fertigungsprozess folgt einem strukturierten Ablauf, der höchste Qualität bei effizienter Produktion gewährleistet. Jeder Arbeitsschritt wird dokumentiert und kontrolliert, sodass wir am Ende ein Produkt übergeben können, das unseren strengen Qualitätsanforderungen entspricht.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Vorfertigung der Komponenten</h4>
                  <p>
                    Die einzelnen Komponenten – Stahlrahmen, Wandelemente, Dachelemente – werden in spezialisierten Werkstätten vorgefertigt. Dies ermöglicht eine präzise Fertigung unter kontrollierten Bedingungen und verkürzt die Montagezeit vor Ort erheblich. Die Stahlkonstruktion wird sandgestrahlt und mit einer mehrschichtigen Korrosionsschutzbeschichtung versehen, die jahrzehntelangen Schutz bietet.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Montage und Ausbau</h4>
                  <p>
                    Die Montage erfolgt in einer überdachten Halle, geschützt vor Witterungseinflüssen. Die vorgefertigten Elemente werden zusammengefügt, die technischen Installationen eingebracht und der Innenausbau durchgeführt. Unser erfahrenes Montageteam arbeitet nach detaillierten Arbeitsplänen und stellt sicher, dass jedes Detail stimmt.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Endkontrolle und Abnahme</h4>
                  <p>
                    Vor der Auslieferung durchläuft jeder Laborcontainer eine umfassende Endkontrolle. Wir prüfen alle technischen Systeme, führen Dichtigkeitstests durch und dokumentieren den Zustand fotografisch. Die Abnahme erfolgt gemeinsam mit dem Kunden, sodass Sie sich vor Ort von der Qualität überzeugen können.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Containergrößen und Konfigurationen
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Unsere Laborcontainer sind in verschiedenen Standardgrößen verfügbar, die sich an den gängigen Container-Maßen orientieren und somit einen problemlosen Transport ermöglichen:
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "20-Fuß-Container: ca. 6,0 x 2,4 m (14,4 m² Nutzfläche)",
                      "40-Fuß-Container: ca. 12,0 x 2,4 m (28,8 m² Nutzfläche)",
                      "Überbreite Container: bis 3,0 m Breite (erhöhte Transportanforderungen)",
                      "Doppelstöckige Anlagen: für maximale Raumnutzung",
                      "Mehrteilige Komplexe: durch Verbindung mehrerer Module"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Auf Wunsch fertigen wir auch Sondergrößen, die exakt auf Ihre räumlichen Gegebenheiten abgestimmt sind. Sprechen Sie uns an – gemeinsam finden wir die optimale Lösung.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Nachhaltigkeit in der Fertigung
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Nachhaltigkeit ist für uns kein Marketing-Schlagwort, sondern gelebte Praxis. Bereits bei der Auswahl der Materialien achten wir auf Umweltverträglichkeit und Recyclingfähigkeit. Die modulare Bauweise unserer Container ermöglicht eine lange Lebensdauer und einfache Wiederverwendung oder Umnutzung.
                  </p>
                  <p>
                    Die effiziente Wärmedämmung unserer Container reduziert den Energiebedarf für Heizung und Kühlung erheblich. In Kombination mit energieeffizienten Lüftungs- und Klimaanlagen erreichen unsere Laborcontainer hervorragende Energiewerte, die konventionelle Laborgebäude oft übertreffen.
                  </p>
                  <p>
                    Am Ende ihrer Nutzungsdauer können die Container problemlos demontiert und die Materialien dem Recycling zugeführt werden. So schließt sich der Kreislauf, und auch die Entsorgung erfolgt umweltgerecht.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-primary text-white p-8 rounded-2xl">
                  <Lightbulb className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Individuelle Fertigung</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Jeder Laborcontainer wird nach Ihren Spezifikationen gefertigt. Lassen Sie uns über Ihr Projekt sprechen.
                  </p>
                  <Link href="/contact">
                    <a className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-slate-100 transition-colors">
                      Angebot anfordern
                    </a>
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Qualitätsmerkmale</h3>
                  <ul className="space-y-4">
                    {[
                      "Fertigung in Deutschland",
                      "Robuste Stahlkonstruktion",
                      "Hochwertige Isolierung",
                      "Labortaugliche Oberflächen",
                      "Vollständige Dokumentation",
                      "5 Jahre Gewährleistung"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Services */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Weitere Leistungen</h3>
                  <ul className="space-y-3">
                    <li><Link href="/services/planning"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Technische Fachplanung</a></Link></li>
                    <li><Link href="/services/logistics"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Logistik & Montage</a></Link></li>
                    <li><Link href="/services/equipment"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Laborausstattung</a></Link></li>
                    <li><Link href="/services/consulting"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Beratung & Genehmigung</a></Link></li>
                    <li><Link href="/services/smart-lab"><a className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Smart Lab Integration</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Qualität, die überzeugt
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Überzeugen Sie sich selbst von unserer Fertigungsqualität. Wir laden Sie herzlich ein, unsere Produktionsstätte zu besuchen.
          </p>
          <Link href="/contact">
            <a className="bg-primary text-white font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
