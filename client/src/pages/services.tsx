import { motion } from "framer-motion";
import { Hammer, Truck, PenTool, ClipboardCheck, ArrowRight, Zap, Microscope, LayoutTemplate } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "planning",
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "Technische Fachplanung",
      desc: "Detaillierte Planung Ihres Laborcontainers unter Berücksichtigung aller Sicherheits- und Effizienzanforderungen. Wir erstellen CAD-Zeichnungen, Layouts und Versorgungskonzepte.",
      features: ["3D-Visualisierung", "Workflow-Optimierung", "Sicherheitskonzepte"]
    },
    {
      id: "construction",
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Modulbau & Fertigung",
      desc: "Hochwertige Umsetzung in modularer Bauweise. Unsere Container sind robust, langlebig und erfüllen alle relevanten Normen für Laborumgebungen.",
      features: ["Robuste Stahlrahmenkonstruktion", "Hochwertige Isolierung", "Labor-gerechte Oberflächen"]
    },
    {
      id: "installation",
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Logistik & Montage",
      desc: "Sicherer Transport und fachgerechte Montage vor Ort. Wir kümmern uns um die Aufstellung und den Anschluss aller Medien.",
      features: ["Weltweiter Transport", "Schnelle Montage", "Plug & Play Lösungen"]
    },
    {
      id: "equipment",
      icon: <Microscope className="w-12 h-12 text-primary" />,
      title: "Laborausstattung",
      desc: "Integration modernster Labortechnik und Möbel. Wir beraten Sie bei der Auswahl und integrieren Ihre Geräte nahtlos.",
      features: ["Labormöbel nach Maß", "Abzugssysteme", "Sicherheitsausstattung"]
    },
    {
      id: "consulting",
      icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
      title: "Beratung & Genehmigung",
      desc: "Unterstützung bei Genehmigungsverfahren und Einhaltung gesetzlicher Vorschriften. Wir begleiten Sie durch den Dschungel der Bürokratie.",
      features: ["Baurechtliche Beratung", "Arbeitsschutz", "Zertifizierungsunterstützung"]
    },
    {
      id: "smart",
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Smart Lab Integration",
      desc: "Zukunftsfähige Vernetzung Ihres Labors. Integration von IoT-Sensoren, Monitoring-Systemen und digitalen Workflows.",
      features: ["Raumklima-Monitoring", "Zugangskontrolle", "Digitale Dokumentation"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ganzheitliche Kompetenz für Ihr Laborprojekt. Von der Vision bis zur Inbetriebnahme.
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
                className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="mb-6 bg-secondary/50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a className="w-full block text-center py-3 border border-white/10 rounded-lg hover:bg-primary hover:text-background hover:border-primary transition-all font-medium">
                    Anfragen
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary border-t border-border">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
               <h2 className="text-3xl font-heading font-bold mb-2">Haben Sie spezielle Anforderungen?</h2>
               <p className="text-muted-foreground">Wir entwickeln auch Sonderlösungen fernab vom Standard.</p>
            </div>
            <Link href="/contact">
               <a className="bg-primary text-background px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  Sonderlösung anfragen
               </a>
            </Link>
         </div>
      </section>
    </div>
  );
}
