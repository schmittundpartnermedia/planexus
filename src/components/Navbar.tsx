import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState('/');

  useEffect(() => {
    setLocation(window.location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/projekte", label: "Projekte" },
    { href: "/partner", label: "Partner" },
    { href: "/magazin", label: "Magazin" },
    { href: "/kontakt", label: "Kontakt" },
  ];
  
  const aboutLinks = [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/team", label: "Team" },
  ];

  const serviceLinks = [
    { href: "/leistungen", label: "Leistungsübersicht" },
    { href: "/leistungen/planung", label: "Technische Fachplanung" },
    { href: "/leistungen/modulbau", label: "Modulbau & Fertigung" },
    { href: "/leistungen/logistik", label: "Logistik & Montage" },
    { href: "/leistungen/ausstattung", label: "Laborausstattung" },
    { href: "/leistungen/beratung", label: "Beratung & Genehmigung" },
    { href: "/leistungen/smart-lab", label: "Smart Lab Integration" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20",
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg" 
          : "bg-slate-900 border-b border-slate-800"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/images/planexus-logo.png" 
            alt="Planexus Logo" 
            className="h-8 lg:h-10 w-auto" 
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative uppercase tracking-wide",
              location === "/" ? "text-primary" : "text-white/80 hover:text-white"
            )}
          >
            Start
            {location === "/" && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
            )}
          </a>
          
          <div 
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 uppercase tracking-wide",
                (location === "/ueber-uns" || location === "/team") ? "text-primary" : "text-white/80 hover:text-white"
              )}
            >
              Über uns
              <ChevronDown className={cn("w-4 h-4 transition-transform", aboutOpen && "rotate-180")} />
            </button>
            {(location === "/ueber-uns" || location === "/team") && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
            )}
            
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[160px] z-50"
                >
                  {aboutLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                        location === link.href ? "text-primary bg-primary/5" : "text-slate-700"
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 uppercase tracking-wide",
                location.startsWith("/leistungen") ? "text-primary" : "text-white/80 hover:text-white"
              )}
            >
              Leistungen
              <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {location.startsWith("/leistungen") && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
            )}
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] z-50"
                >
                  {serviceLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                        location === link.href ? "text-primary bg-primary/5" : "text-slate-700",
                        index === 0 && "border-b border-gray-100 mb-1 pb-3"
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative uppercase tracking-wide",
                location === link.href ? "text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
              )}
            </a>
          ))}
          <a
            href="tel:+4974357519700"
            className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all border border-primary text-primary bg-transparent hover:bg-primary hover:text-slate-900"
          >
            <Phone className="w-4 h-4" />
            <span>+49 7435 7519 700</span>
          </a>
        </div>

        <button
          className="lg:hidden p-2 transition-colors text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <a href="/" className={cn("text-left text-lg font-medium py-3 border-b border-gray-50", location === "/" ? "text-primary" : "text-slate-700")}>
                Start
              </a>
              
              <div className="border-b border-gray-50">
                <p className="text-xs uppercase tracking-wider text-gray-400 pt-3 pb-1">Über uns</p>
                {aboutLinks.map((link) => (
                  <a key={link.href} href={link.href} className={cn("block text-left text-lg font-medium py-2 pl-4 w-full", location === link.href ? "text-primary" : "text-slate-700")}>
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="border-b border-gray-50">
                <p className="text-xs uppercase tracking-wider text-gray-400 pt-3 pb-1">Leistungen</p>
                {serviceLinks.map((link) => (
                  <a key={link.href} href={link.href} className={cn("block text-left text-lg font-medium py-2 pl-4 w-full", location === link.href ? "text-primary" : "text-slate-700")}>
                    {link.label}
                  </a>
                ))}
              </div>
              
              {links.map((link) => (
                <a key={link.href} href={link.href} className={cn("text-left text-lg font-medium py-3 border-b border-gray-50 w-full block", location === link.href ? "text-primary" : "text-slate-700")}>
                  {link.label}
                </a>
              ))}
              
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-100">
                 <a href="tel:+4974357519700" className="flex items-center gap-3 text-slate-600 hover:text-primary">
                    <Phone className="w-5 h-5 text-primary" /> +49 7435 7519 700
                 </a>
                 <a href="mailto:info@planexus.de" className="flex items-center gap-3 text-slate-600 hover:text-primary">
                    <Mail className="w-5 h-5 text-primary" /> info@planexus.de
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
