import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@assets/Planexus_Home-e1738171155684_1767361842201.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Start" },
    { href: "/about", label: "Über uns" },
    { href: "/services", label: "Leistungen" },
    { href: "/magazine", label: "Magazin" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Kontakt" },
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
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Planexus Logo" 
              className="h-10 w-auto" 
            />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group uppercase tracking-wide",
                  location === link.href ? "text-primary" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </a>
            </Link>
          ))}
          <a
            href="tel:+4974357519700"
            className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all border border-primary text-primary bg-transparent hover:bg-primary hover:text-white"
          >
            <Phone className="w-4 h-4" />
            <span>+49 7435 7519 700</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium py-3 border-b border-gray-50",
                      location === link.href ? "text-primary" : "text-slate-700"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
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
