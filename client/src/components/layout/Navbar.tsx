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

  const isHome = location === "/";
  const isTransparent = isHome && !scrolled;

  const links = [
    { href: "/", label: "Start" },
    { href: "/about", label: "Über uns" },
    { href: "/services", label: "Leistungen" },
    { href: "/magazine", label: "Magazin" }, // Added Magazine Link
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent 
          ? "bg-transparent border-transparent h-24" 
          : "bg-white/95 backdrop-blur-md border-b border-gray-100 h-20 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Planexus Logo" 
              className={cn(
                "h-12 w-auto transition-all",
                // If on transparent home, maybe we need a white version? 
                // Assuming the logo provided is colored/suitable for white bg. 
                // If it's dark text on dark bg, we might need a filter invert or brightness boost.
                // The image shows white text logo. If the provided logo is the one with white text "PLANEXUS", 
                // it will work great on dark home hero.
                // But on scrolled (white) navbar, we need a dark version or invert it.
                // Let's assume the logo provided has white text (based on the image name "Planexus_Home...").
                // If so, we need to invert it when navbar is white.
                !isTransparent && "invert contrast-150 brightness-0" // Hack to make white logo black
              )} 
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
                  isTransparent 
                    ? (location === link.href ? "text-primary" : "text-white/80 hover:text-white") 
                    : (location === link.href ? "text-primary" : "text-slate-600 hover:text-primary")
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
            className={cn(
              "flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all border",
              isTransparent
                ? "border-primary text-primary bg-white hover:bg-white/90"
                : "bg-primary text-white border-primary hover:bg-primary/90"
            )}
          >
            <Phone className="w-4 h-4" />
            <span>+49 7435 7519 700</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            isTransparent ? "text-white" : "text-slate-900"
          )}
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
