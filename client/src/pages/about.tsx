import { motion } from "framer-motion";
import { CheckCircle2, Award, History, Lightbulb } from "lucide-react";
import interiorBg from "@assets/generated_images/high-tech_lab_interior.png";

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">Unsere Geschichte & Vision</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vom belächelten „Spinner“ zum Branchenpionier – die Geschichte von Planexus ist eine Geschichte von Innovation gegen Widerstände.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <History className="text-primary" /> Der Anfang (2016)
                </h3>
                <p>
                  Als Sven Biewald 2016 mit seiner damaligen Firma MC Labor auf der Analytica in München den ersten vollfunktionsfähigen Laborcontainer präsentierte, war die Branche skeptisch. Viele belächelten ihn – zu unkonventionell, zu neu, zu visionär. Doch er glaubte an seine Idee.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border">
                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="text-primary" /> Der Durchbruch
                </h3>
                <p>
                  MC Labor setzte neue Maßstäbe im mobilen Laborbau – modular, flexibel und zuverlässig. Was einst als Spinnerei galt, wurde zum wegweisenden Modell für moderne Laborlösungen. Auch wenn MC Labor inzwischen liquidiert ist, bleibt der Geist der Innovation lebendig.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-xl border border-primary/20">
                 <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Lightbulb className="text-primary" /> Die neue Ära: Planexus
                </h3>
                <p className="text-white">
                  Denn Sven Biewald ist heute nicht weniger engagiert: <strong>Planexus</strong> ist der Name der neuen Ära. Mit Sven Biewald und Thomas Boss vereint sich in Planexus geballte Erfahrung, tiefes technisches Know-how und ein kompromissloser Innovationswille.
                </p>
              </div>
            </div>

            <div className="space-y-8">
               <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px]">
                  <img src={interiorBg} alt="Modern Lab" className="w-full h-full object-cover" />
               </div>
               
               <div>
                  <h3 className="text-2xl font-bold mb-6">Warum Planexus?</h3>
                  <ul className="space-y-4">
                    {[
                      "Intelligente modulare Konzepte",
                      "Nachhaltige Bauweise",
                      "Über 10 Jahre spezialisierte Erfahrung",
                      "Maßgeschneiderte Lösungen",
                      "Höchste Qualitätsstandards"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg">
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
