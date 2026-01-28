import { motion } from "framer-motion";
import { Linkedin, Quote, Facebook } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Team() {
  const team = [
    {
      name: "Sven Biewald",
      role: "Gesellschafter / Visionär",
      initials: "SB",
      image: "/team/sven-biewald.jpg",
      linkedin: "https://www.linkedin.com/in/sven-biewald-893a85a3/",
      facebook: "https://www.facebook.com/sven.biewald.90",
      desc: "Der Pionier der modernen Laborcontainer. Mit über einem Jahrzehnt Erfahrung und einem unbändigen Willen zur Innovation treibt er die Vision von Planexus voran."
    },
    {
      name: "Thomas Boss",
      role: "Gesellschafter / Technik",
      initials: "TB",
      image: "/team/thomas-boss.jpg",
      linkedin: "https://www.linkedin.com/in/thomas-boss-690091352",
      facebook: "https://www.facebook.com/thomas.boss.9",
      desc: "Der technische Kopf hinter den Kulissen. Seine Expertise garantiert, dass visionäre Ideen in funktionale, robuste Realität umgesetzt werden."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Martina Weber",
      role: "Laborleiterin",
      text: "Die Zusammenarbeit bei der Planung unseres neuen Labors war hervorragend. Von der ersten Konzeptidee bis zur finalen Umsetzung wurden all unsere Anforderungen berücksichtigt."
    },
    {
      name: "Prof. Dr. Thomas Keller",
      role: "Forschungsleiter",
      text: "Planexus hat für unser Forschungszentrum ein innovatives technisches Konzept entwickelt, das sowohl effizient als auch zukunftssicher ist."
    },
    {
      name: "Susanne Lehmann",
      role: "Vertriebsleiterin",
      text: "Dank der kompetenten Vertriebsbegleitung durch Planexus konnten wir unsere technischen Produkte gezielt am Markt platzieren."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Team - Experten für Laborcontainer"
        description="Das Planexus Team: Sven Biewald und Thomas Boss - Experten für Laborcontainer und Modulbau mit über 10 Jahren Erfahrung."
        canonical="/team"
      />
       <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Das Planexus Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Erfahrung trifft Innovation. Wir sind Ihre Experten für Laborbau.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl relative overflow-hidden group shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
                
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover object-top mb-6 shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-md">
                    {member.initials}
                  </div>
                )}
                
                <h3 className="text-3xl font-heading font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-primary font-bold mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {member.desc}
                </p>
                
                <div className="flex gap-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-slate-900 transition-colors text-slate-600">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-primary hover:text-slate-900 transition-colors text-slate-600">
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-16 text-slate-900">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative hover:shadow-md transition-shadow">
                <div className="absolute top-6 right-6 text-primary/20">
                    <Quote className="w-10 h-10" />
                </div>
                <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">"{t.text}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
