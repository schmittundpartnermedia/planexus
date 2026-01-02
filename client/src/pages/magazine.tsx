import { Link } from "wouter";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

export default function Magazine() {
  const posts = [
    {
      id: 1,
      title: "Innovation im Modulbau: Die Zukunft des mobilen Labors",
      excerpt: "Wie modulare Bauweisen die Flexibilität in der Forschung erhöhen und warum Containerlabore eine echte Alternative zum Massivbau sind.",
      date: "12. Januar 2026",
      author: "Sven Biewald",
      category: "Technologie",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Nachhaltigkeit im Laborbau: Energieeffizienz trifft High-Tech",
      excerpt: "Moderne Laborcontainer setzen neue Maßstäbe in Sachen Energieeffizienz. Wir zeigen, wie nachhaltige Materialien und smarte Klimatechnik den CO2-Fußabdruck senken.",
      date: "05. Januar 2026",
      author: "Thomas Boss",
      category: "Nachhaltigkeit",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "BSL-2 und BSL-3 im Container: Geht das?",
      excerpt: "Sicherheitsstufen im Containerbau sind kein Problem mehr. Erfahren Sie, wie wir höchste Sicherheitsanforderungen in mobilen Einheiten realisieren.",
      date: "20. Dezember 2025",
      author: "Redaktion Planexus",
      category: "Sicherheit",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Magazin - Fachwissen Laborcontainer & Modulbau"
        description="Das Planexus Magazin: Aktuelle Artikel, Fachwissen und Trends zu Laborcontainern, Modulbau, BSL-Laboren und nachhaltiger Laborplanung."
        canonical="/magazine"
      />
      <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 text-slate-900">Planexus Magazin</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aktuelle Einblicke, Trends und Fachwissen rund um Laborcontainer und Modulbau.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                    <Tag className="w-3 h-3" /> {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/magazine/${post.id}`}>
                    <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-auto">
                      Artikel lesen <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="py-20 bg-primary text-white">
         <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-4">Keine Neuigkeiten verpassen</h2>
            <p className="text-white/80 mb-8">
               Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig Updates zu neuen Projekten und Innovationen im Laborbau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
               <input 
                  type="email" 
                  placeholder="Ihre Email Adresse" 
                  className="flex-grow px-6 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
               />
               <button className="bg-slate-900 text-white font-bold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                  Anmelden
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
