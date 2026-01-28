import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Microscope, Beaker, Wind, Shield, Database, Gauge, Phone, ChevronRight, Lightbulb } from "lucide-react";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/SEO";

export default function EquipmentService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Laborausstattung"
        description="Komplette Laborausstattung für Ihren Container. Labormöbel, Abzüge, Sicherheitseinrichtungen und Geräteintegration aus einer Hand."
        canonical="/leistungen/ausstattung"
      />
      <ServiceSchema 
        name="Laborausstattung"
        description="Komplette Laborausstattung mit Labormöbeln, Abzügen und Sicherheitseinrichtungen"
        url="/leistungen/ausstattung"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "Laborausstattung", url: "/leistungen/ausstattung" }
      ]} />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium text-sm mb-6">
              <Microscope className="w-4 h-4" />
              <span>Leistungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Labor<span className="text-primary">ausstattung</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Vom Labortisch bis zur Sicherheitseinrichtung: Wir statten Ihren Laborcontainer mit allem aus, was Sie für effizientes und sicheres Arbeiten benötigen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Ausstattung anfragen <ArrowRight className="w-5 h-5" />
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
            <Link href="/" className="hover:text-primary">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/leistungen" className="hover:text-primary">Leistungen</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Laborausstattung</span>
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
                  Komplettausstattung für Ihr Labor
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Ein Laborcontainer ist nur so gut wie seine Ausstattung. Deshalb bieten wir nicht nur die Hülle, sondern auch alles, was Sie zum Arbeiten benötigen. Von hochwertigen Labormöbeln über spezialisierte Abzugssysteme bis hin zu kompletter Sicherheitsausstattung – bei Planexus erhalten Sie alles aus einer Hand.
                  </p>
                  <p>
                    Unser Ansatz ist dabei immer ganzheitlich: Wir betrachten Ihren Laborcontainer als integriertes System, in dem alle Komponenten optimal aufeinander abgestimmt sind. Die Möbel passen zu den technischen Anlagen, die Sicherheitseinrichtungen sind in den Arbeitsablauf integriert, und jedes Element trägt zur Effizienz und Sicherheit bei.
                  </p>
                  <p>
                    Als Teil der Wesemann Holding GmbH – einem der drei führenden Labormöbelhersteller in Europa – haben wir direkten Zugang zu erstklassigen Laborausstattungen. Dieses starke Netzwerk ermöglicht uns, Ihnen hochwertige Produkte zu optimalen Konditionen anzubieten. Gleichzeitig können wir Sonderlösungen realisieren, die speziell auf Ihre Anforderungen zugeschnitten sind.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Unsere Ausstattungsbereiche
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <Database className="w-6 h-6" />, title: "Labormöbel", desc: "Arbeitstische, Unterschränke, Oberschränke und Regalsysteme nach Laborstandard." },
                    { icon: <Wind className="w-6 h-6" />, title: "Abzugssysteme", desc: "Laborabzüge, Tischarbeitsplätze mit Absaugung und Umluftgeräte." },
                    { icon: <Shield className="w-6 h-6" />, title: "Sicherheitsausstattung", desc: "Notduschen, Augenspülungen, Feuerlöscher und Erste-Hilfe-Einrichtungen." },
                    { icon: <Gauge className="w-6 h-6" />, title: "Medienversorgung", desc: "Gasarmaturen, Wasserinstallationen und Druckluftanschlüsse." },
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
                  Labormöbel im Detail
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die Wahl der richtigen Labormöbel ist entscheidend für ergonomisches Arbeiten und effiziente Abläufe. Wir bieten eine breite Auswahl an hochwertigen Möbeln, die speziell für den Einsatz im Labor konzipiert sind.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Arbeitstische und Arbeitsplatten</h4>
                  <p>
                    Unsere Labortische sind robust, chemikalienbeständig und ergonomisch gestaltet. Die Arbeitsplatten sind in verschiedenen Materialien erhältlich – von klassischem Laborstein über Edelstahl bis hin zu speziellen Kunststoffen für besondere Anforderungen. Standardbreiten von 600 mm bis 900 mm und Höhen von 750 mm bis 900 mm ermöglichen sowohl Sitz- als auch Steharbeitsplätze.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Schranksysteme</h4>
                  <p>
                    Unterschränke, Oberschränke und Hochschränke bieten optimalen Stauraum für Laborgeräte, Chemikalien und Verbrauchsmaterialien. Für die sichere Aufbewahrung von Gefahrstoffen bieten wir zugelassene Sicherheitsschränke nach EN 14470-1 (für brennbare Flüssigkeiten) und EN 14470-2 (für Druckgasflaschen).
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Spülen und Becken</h4>
                  <p>
                    Laborspülen aus PP, Keramik oder Edelstahl mit entsprechenden Armaturen und Siphons. Spezielle Ausführungen für säurebeständige Anwendungen oder die Mikrobiologie sind selbstverständlich möglich.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Abzüge und Absaugsysteme
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Laborabzüge sind das Herzstück vieler Laborarbeiten. Sie schützen den Anwender vor gefährlichen Dämpfen, Gasen und Stäuben und sind in vielen Bereichen gesetzlich vorgeschrieben. Wir bieten eine umfassende Auswahl an Abzugssystemen für verschiedene Anwendungen.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Standard-Laborabzüge</h4>
                  <p>
                    Unsere Standard-Laborabzüge erfüllen die Anforderungen der EN 14175 und bieten zuverlässigen Schutz bei chemischen Arbeiten. Verschiedene Breiten von 1200 mm bis 1800 mm und unterschiedliche Ausstattungsvarianten ermöglichen eine optimale Anpassung an Ihre Bedürfnisse.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Spezialabzüge</h4>
                  <p>
                    Für besondere Anwendungen bieten wir Spezialabzüge: Säure-Basen-Abzüge mit resistenten Oberflächen, Wägeabzüge für präzise Arbeiten ohne störende Luftströmungen, Zytostatika-Abzüge für die sichere Handhabung von Chemotherapeutika oder Radioisotopen-Abzüge mit spezieller Abschirmung.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Umluftgeräte</h4>
                  <p>
                    Wenn eine Abluftführung ins Freie nicht möglich ist, bieten Umluftgeräte eine Alternative. Sie reinigen die Luft durch Aktivkohlefilter und führen sie in den Raum zurück. Ideal für mobile Anwendungen oder temporäre Aufstellungen.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Sicherheitsausstattung
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Sicherheit hat im Labor oberste Priorität. Unsere Laborcontainer sind mit allen erforderlichen Sicherheitseinrichtungen ausgestattet, die den geltenden Vorschriften entsprechen und den Schutz Ihrer Mitarbeiter gewährleisten.
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "Notduschen nach DIN EN 15154 für den Ernstfall",
                      "Augenspüleinrichtungen an jedem Arbeitsplatz mit Gefahrstoffumgang",
                      "Feuerlöscher entsprechend der Brandklassen im Labor",
                      "Erste-Hilfe-Ausstattung nach BGI/GUV-I 509",
                      "Notausgänge mit Panikbeschlägen und Fluchtwegkennzeichnung",
                      "Gaswarnanlagen für die Detektion gefährlicher Atmosphären",
                      "Not-Aus-Schalter für schnelles Abschalten aller Medien"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Medienversorgung und Armaturen
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die zuverlässige Versorgung mit Medien wie Gasen, Wasser und Druckluft ist für den Laborbetrieb unerlässlich. Wir installieren alle erforderlichen Systeme fachgerecht und nach den geltenden Normen.
                  </p>
                  <p>
                    <strong>Gasarmaturen:</strong> Für die Versorgung mit technischen Gasen (Stickstoff, Argon, Helium) oder Laborgasen (Propan/Butan) installieren wir entsprechende Entnahmestellen mit Absperrhähnen und Schnellkupplungen. Die farbliche Kennzeichnung erfolgt nach DIN EN 13792.
                  </p>
                  <p>
                    <strong>Wasserinstallationen:</strong> Laborwasser, VE-Wasser oder Reinstwasser – wir installieren die passenden Armaturen und Aufbereitungssysteme. Spezielle Laborarmaturen mit schwenkbarem Auslauf und Fußbedienung ermöglichen hygienisches Arbeiten.
                  </p>
                  <p>
                    <strong>Druckluftversorgung:</strong> Für Anwendungen, die ölfreie Druckluft benötigen, installieren wir entsprechende Anschlüsse mit Druckminderern und Wartungseinheiten.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Geräteintegration
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Viele Laborgeräte haben spezielle Anforderungen an Stromversorgung, Kühlung oder Abluftführung. Wir planen die Integration Ihrer Geräte von Anfang an mit und stellen sicher, dass alle Anschlüsse vorhanden sind.
                  </p>
                  <p>
                    Ob Spektrometer, Chromatographen, Inkubatoren oder Autoklaven – wir berücksichtigen die spezifischen Anforderungen jedes Geräts und sorgen für eine optimale Aufstellung. Schwingungsdämpfung für empfindliche Messgeräte, USV-Anbindung für kritische Anlagen oder spezielle Abluftführungen für wärmeerzeugende Geräte – wir denken an alles.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-primary text-slate-900 p-8 rounded-2xl">
                  <Lightbulb className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Alles aus einer Hand</h3>
                  <p className="text-slate-700 mb-6 text-sm">
                    Container und Ausstattung perfekt abgestimmt. Profitieren Sie von unserer Komplettlösung.
                  </p>
                  <Link href="/kontakt" className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-slate-100 transition-colors">
                      Beratung anfordern
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Unsere Stärken</h3>
                  <ul className="space-y-4">
                    {[
                      "Führende Hersteller",
                      "Individuelle Konfiguration",
                      "Normgerechte Installation",
                      "Integrierte Planung",
                      "After-Sales-Service",
                      "Ersatzteilversorgung"
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
                    <li><Link href="/leistungen/planung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Technische Fachplanung</Link></li>
                    <li><Link href="/leistungen/modulbau" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Modulbau & Fertigung</Link></li>
                    <li><Link href="/leistungen/logistik" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Logistik & Montage</Link></li>
                    <li><Link href="/leistungen/beratung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Beratung & Genehmigung</Link></li>
                    <li><Link href="/leistungen/smart-lab" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Smart Lab Integration</Link></li>
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
            Optimal ausgestattet für Ihre Forschung
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Lassen Sie uns gemeinsam die perfekte Ausstattung für Ihr Labor zusammenstellen.
          </p>
          <Link href="/kontakt" className="bg-primary text-white font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Jetzt Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
