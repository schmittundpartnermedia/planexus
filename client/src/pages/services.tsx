import { motion } from "framer-motion";
import { Hammer, Truck, PenTool, ClipboardCheck, ArrowRight, Zap, Microscope, LayoutTemplate } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "planning",
      icon: <PenTool className="w-8 h-8" />,
      title: "Technische Fachplanung Labor",
      desc: "Detaillierte Planung Ihres Laborcontainers unter Berücksichtigung aller Sicherheits- und Effizienzanforderungen. Wir erstellen CAD-Zeichnungen, Layouts und TGA-Konzepte.",
      features: ["3D-Visualisierung", "Workflow-Optimierung", "Sicherheitskonzepte"]
    },
    {
      id: "construction",
      icon: <Hammer className="w-8 h-8" />,
      title: "Modulbau & Fertigung",
      desc: "Hochwertige Umsetzung in modularer Bauweise. Unsere Laborcontainer sind robust, langlebig und erfüllen alle relevanten Normen.",
      features: ["Stahlrahmenkonstruktion", "Hochwertige Isolierung", "Labor-gerechte Oberflächen"]
    },
    {
      id: "installation",
      icon: <Truck className="w-8 h-8" />,
      title: "Logistik & Montage",
      desc: "Sicherer Transport und fachgerechte Montage vor Ort. Wir kümmern uns um die Aufstellung und den Anschluss aller Medien für Ihr mobiles Labor.",
      features: ["Weltweiter Transport", "Schnelle Montage", "Plug & Play Lösungen"]
    },
    {
      id: "equipment",
      icon: <Microscope className="w-8 h-8" />,
      title: "Laborausstattung",
      desc: "Integration modernster Labortechnik und Möbel. Wir beraten Sie bei der Auswahl und integrieren Ihre Geräte nahtlos in den Container.",
      features: ["Labormöbel nach Maß", "Abzugssysteme", "Sicherheitsausstattung"]
    },
    {
      id: "consulting",
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Beratung & Genehmigung",
      desc: "Unterstützung bei Genehmigungsverfahren für Laborcontainer. Wir begleiten Sie durch den Dschungel der Bürokratie.",
      features: ["Baurechtliche Beratung", "Arbeitsschutz", "Zertifizierungsunterstützung"]
    },
    {
      id: "smart",
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Lab Integration",
      desc: "Zukunftsfähige Vernetzung Ihres Labors. Integration von IoT-Sensoren, Monitoring-Systemen und digitalen Workflows.",
      features: ["Raumklima-Monitoring", "Zugangskontrolle", "Digitale Dokumentation"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 text-slate-900">Unsere Leistungen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ihr Komplettanbieter für <strong>Laborcontainer</strong>. Von der Vision bis zur Inbetriebnahme bieten wir alles aus einer Hand.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-xl hover:border-primary transition-all hover:shadow-xl hover:shadow-gray-200 group"
              >
                <div className="mb-6 bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a className="w-full block text-center py-3 border border-gray-200 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all font-medium text-slate-700">
                    Jetzt anfragen
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-900 text-white">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
               <h2 className="text-3xl font-heading font-bold mb-2">Sonderlösung gesucht?</h2>
               <p className="text-slate-300">Wir entwickeln individuelle Labor-Module auch fernab vom Standard.</p>
            </div>
            <Link href="/contact">
               <a className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Individuelle Anfrage
               </a>
            </Link>
         </div>
      </section>
    </div>
  );
}
