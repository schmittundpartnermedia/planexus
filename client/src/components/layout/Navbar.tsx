import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-border h-16"
          : "bg-transparent border-transparent h-20"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-heading font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-lg">P</span>
            </div>
            PLANEXUS
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location === link.href ? "text-primary" : "text-muted-foreground"
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
            className="flex items-center gap-2 text-sm font-bold text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+49 7435 7519 700</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
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
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium py-2 border-b border-border/50",
                      location === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-border">
                 <a href="tel:+4974357519700" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                    <Phone className="w-5 h-5" /> +49 7435 7519 700
                 </a>
                 <a href="mailto:info@planexus.de" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                    <Mail className="w-5 h-5" /> info@planexus.de
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
