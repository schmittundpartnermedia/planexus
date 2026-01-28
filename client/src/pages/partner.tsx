import { motion } from "framer-motion";
import { Handshake, Globe, Building2, Microscope, FlaskConical, Shield, Wrench, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { AnimatedGlobe } from "@/components/AnimatedGlobe";

const partners = [
  {
    name: "Wesemann GmbH",
    description: "Spezialisiert auf hochwertige Laboreinrichtungen mit individuell angepassten Lösungen. Das Portfolio umfasst flexible und modulare Möbelsysteme sowie modernste Sicherheitskomponenten wie Laborabzüge und Schutzschränke nach aktuellen Normen.",
    icon: Microscope,
    category: "Laboreinrichtung"
  },
  {
    name: "Wesemann Reinraumtechnik GmbH",
    description: "Experte für maßgeschneiderte Reinraumsysteme als Komplettlösung. Von der Konzeption über Fertigung und Aufbau bis zur finalen Abnahme wird der gesamte Prozess aus einer Hand betreut, um individuelle Kundenanforderungen präzise zu erfüllen.",
    icon: Shield,
    category: "Reinraumtechnik"
  },
  {
    name: "Abarcon GmbH",
    description: "Fokussiert auf innovative Arbeitsplatzsysteme für Labor und Industrie. Das Leistungsspektrum erstreckt sich von der Entwicklung über die Produktion bis zum Service von Personen- und Produktschutzsystemen mit höchsten Qualitätsstandards.",
    icon: Users,
    category: "Arbeitsplatzsysteme"
  },
  {
    name: "WS Funktions- und Reinraum GmbH",
    description: "Bietet ganzheitliche Lösungen für Reinräume und Funktionsräume. Die Leistungen umfassen Konzeption, Bau und Instandhaltung nach internationalen Standards wie ISO 14644 und GMP-Richtlinien mit Fokus auf Qualität und Nachhaltigkeit.",
    icon: Building2,
    category: "Funktionsräume"
  },
  {
    name: "Synergie Mobiliar GmbH",
    description: "Hersteller hochwertiger Möbel und innovativer Einrichtungskonzepte. Das Sortiment zeichnet sich durch robuste Materialqualität und ansprechendes Design aus, das funktionale Anforderungen mit ästhetischen Ansprüchen verbindet.",
    icon: Wrench,
    category: "Mobiliar"
  },
  {
    name: "Mesycon GmbH",
    description: "Spezialist für hochreine Versorgungssysteme im Laborbereich. Das Angebot reicht von Reinstgas- und Reinstwassersystemen über Chemikalienversorgung bis hin zu Gaswarn- und Kryotechnik - inklusive Planung, Installation und Inbetriebnahme.",
    icon: FlaskConical,
    category: "Versorgungssysteme"
  },
  {
    name: "Planexus GmbH",
    description: "Experte für Laborcontainer und modularen Laborbau. Mit innovativen Konzepten für mobile Laborlösungen, BSL-2/BSL-3 Sicherheitslabore und Smart Lab Integrationen bietet Planexus schlüsselfertige Lösungen für höchste Anforderungen.",
    icon: Building2,
    category: "Modulbau"
  },
  {
    name: "Wesemann Benelux B.V.",
    description: "Kompetenter Ansprechpartner für Laborprojekte in den Benelux-Ländern. Das erfahrene Team in Ede unterstützt bei Konfiguration, Lieferung, Montage und bietet darüber hinaus Wartungs- und Validierungsleistungen.",
    icon: Globe,
    category: "Benelux"
  },
  {
    name: "Wesemann Schweiz AG",
    description: "Zentraler Partner für Laborlösungen in der Schweiz. Von der Erstberatung über Projektplanung bis zur Umsetzung, Montage und Wartung werden Kunden durch alle Projektphasen begleitet - funktional, sicher und normgerecht.",
    icon: Globe,
    category: "Schweiz"
  },
  {
    name: "HibLab Solutions, S.L.",
    description: "Innovativer Anbieter für ganzheitliche Laborentwicklung. Die industrialisierten Lösungen werden individuell auf Kundenanforderungen zugeschnitten und decken den kompletten Laborlebenszyklus ab - von der Planung bis zur schlüsselfertigen Übergabe.",
    icon: Building2,
    category: "Spanien"
  },
  {
    name: "Wesemann Middle East",
    description: "Vertriebspartner für den Nahen Osten mit umfassendem Leistungsangebot. Von Labormöbeln über Reinraumlösungen bis zu Versorgungssystemen - Vertrieb, Installation und Wartung aus einer Hand für die gesamte Region.",
    icon: Globe,
    category: "Naher Osten"
  }
];

export default function Partner() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Partner Netzwerk - Unser Business-Ökosystem"
        description="Das Planexus Partner-Netzwerk: Erfahren Sie mehr über unser starkes Ökosystem aus spezialisierten Unternehmen für Laborlösungen, Reinraumtechnik und Laborausstattung."
        canonical="/partner"
      />
      
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>
        <AnimatedGlobe />
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Handshake className="w-5 h-5" />
              <span>Starke Partnerschaften</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Kollaborative Stärke für Ihren Erfolg
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unser Ökosystem vereint Expertise aus verschiedenen Fachbereichen. 
              Durch die enge Zusammenarbeit erhöhen wir die Flexibilität, nutzen Marktchancen 
              optimal und entwickeln zukunftsweisende Laborlösungen. Unsere umfassenden 
              Dienstleistungen - von der ersten Idee bis zur langfristigen Betreuung - 
              machen uns zum bevorzugten Partner für wissenschaftliche und industrielle Labore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
              Unsere Partner im Überblick
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jedes Unternehmen in unserem Netzwerk bringt einzigartige Kompetenzen ein
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative bg-white rounded-2xl p-8 transition-all duration-300 group
                  border-2 border-gray-100 hover:border-primary/30
                  shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:shadow-primary/10
                  hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all shadow-inner">
                    <partner.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 text-xs font-bold text-primary bg-primary/10 rounded-full uppercase tracking-wide mb-1">{partner.category}</span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {partner.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Gemeinsam zum Erfolg
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Sie möchten mehr über unser Netzwerk erfahren oder haben ein Laborprojekt? 
            Kontaktieren Sie uns - gemeinsam finden wir die optimale Lösung.
          </p>
          <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors group shadow-xl">
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
