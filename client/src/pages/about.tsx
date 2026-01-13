import { motion } from "framer-motion";
import { CheckCircle2, Award, History, Lightbulb, UserCheck } from "lucide-react";
import interiorBg from "@assets/generated_images/high-tech_lab_interior.png";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Über Planexus - Ihre Laborcontainer Experten"
        description="Lernen Sie Planexus kennen: Pioniere im modularen Laborbau seit 2016. Erfahrung, Innovation und Qualität für Ihre Laborprojekte."
        canonical="/ueber-uns"
      />
      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-heading font-bold mb-6 text-slate-900">Über Planexus</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ihr Partner für <strong>mobile Labore</strong> und modulare Raumlösungen. Wir verbinden langjährige Erfahrung mit visionärer Technik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg"><History className="text-primary w-5 h-5" /></div> 
                    Die Historie: Laborcontainer Pionier
                </h2>
                <p>
                  Als Sven Biewald 2016 mit seiner damaligen Firma MC Labor auf der Analytica in München den ersten vollfunktionsfähigen <strong>Laborcontainer</strong> präsentierte, war die Branche skeptisch. Viele belächelten ihn – zu unkonventionell, zu neu, zu visionär. Doch er glaubte an seine Idee und behielt recht.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                 <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg"><Award className="text-primary w-5 h-5" /></div> 
                    Innovation im Modulbau
                </h2>
                <p>
                  Es wurden neue Maßstäbe im mobilen Laborbau gesetzt – modular, flexibel und zuverlässig. Was einst als Nische galt, wurde zum wegweisenden Modell für moderne Laborlösungen. Diese Erfahrung fließt heute zu 100% in Planexus ein.
                </p>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 text-white">
                 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg"><Lightbulb className="text-white w-5 h-5" /></div> 
                    Die Zukunft: Planexus GmbH
                </h2>
                <p className="text-slate-300">
                  Mit Sven Biewald und Thomas Boss vereint sich in Planexus geballte Kompetenz. Gemeinsam entwickeln wir <strong>Laborcontainer-Konzepte</strong>, die nicht nur den heutigen Anforderungen gerecht werden, sondern die Zukunft des Laborbaus aktiv mitgestalten.
                </p>
              </div>
            </div>

            <div className="space-y-8">
               <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] relative">
                  <img src={interiorBg} alt="High-Tech Labor Interior" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Modernste Ausstattung</p>
                    <p className="text-sm opacity-80">Funktionalität trifft Design</p>
                  </div>
               </div>
               
               <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Warum Planexus wählen?</h3>
                  <ul className="space-y-4">
                    {[
                      "Intelligente modulare Laborkonzepte",
                      "Nachhaltige & energieeffiziente Bauweise",
                      "Über 10 Jahre spezialisierte Expertise",
                      "Maßgeschneiderte Laborplanung",
                      "Qualität 'Made in Germany'"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-slate-700">
                        <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
