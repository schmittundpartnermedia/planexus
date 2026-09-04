import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { t } from "../i18n/ui";
import { localizeHref, type Locale } from "../i18n/routes";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface NavbarProps {
  locale?: Locale;
  alternateHref?: string;
}

export default function Navbar({ locale = 'de', alternateHref }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState('/');
  const copy = t(locale);
  const href = (path: string) => localizeHref(path, locale);
  const homeHref = locale === 'en' ? '/en' : '/';
  const switchHref = alternateHref ?? (locale === 'en' ? '/' : '/en');

  useEffect(() => {
    setLocation(window.location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: href("/projekte"), label: copy.nav.projects },
    { href: href("/partner"), label: copy.nav.partners },
    { href: href("/magazin"), label: copy.nav.magazine },
    { href: href("/kontakt"), label: copy.nav.contact },
  ];

  const aboutLinks = [
    { href: href("/ueber-uns"), label: copy.nav.aboutCompany },
    { href: href("/team"), label: copy.nav.team },
    { href: href("/ueber-uns/auszeichnungen"), label: copy.nav.awards },
  ];

  const serviceLinks = [
    { href: href("/leistungen"), label: copy.nav.servicesOverview },
    { href: href("/laborcontainer"), label: copy.nav.labContainers },
    { href: href("/laborcontainer-mieten"), label: copy.nav.rent },
    { href: href("/laborcontainer-kaufen"), label: copy.nav.buy },
    { href: href("/leistungen/planung"), label: copy.nav.planning },
    { href: href("/leistungen/modulbau"), label: copy.nav.modular },
    { href: href("/leistungen/logistik"), label: copy.nav.logistics },
    { href: href("/leistungen/ausstattung"), label: copy.nav.equipment },
    { href: href("/leistungen/beratung"), label: copy.nav.consulting },
    { href: href("/leistungen/smart-lab"), label: copy.nav.smartLab },
  ];

  const aboutActive =
    location === href("/ueber-uns") ||
    location === href("/team") ||
    location.startsWith(href("/ueber-uns") + "/") ||
    location.startsWith(href("/team") + "/");

  const servicesActive = location.startsWith(href("/leistungen"));

  const labtogoHref = href("/laborcontainer/labtogo");

  const LanguageSwitch = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-1 text-xs font-bold uppercase tracking-wide", className)}>
      {locale === 'de' ? (
        <span className="text-primary px-1.5 py-1" aria-current="true">{copy.nav.languageDe}</span>
      ) : (
        <a href={switchHref} className="text-white/70 hover:text-primary px-1.5 py-1" lang="de" hrefLang="de">
          {copy.nav.languageDe}
        </a>
      )}
      <span className="text-white/30" aria-hidden="true">|</span>
      {locale === 'en' ? (
        <span className="text-primary px-1.5 py-1" aria-current="true">{copy.nav.languageEn}</span>
      ) : (
        <a href={switchHref} className="text-white/70 hover:text-primary px-1.5 py-1" lang="en" hrefLang="en">
          {copy.nav.languageEn}
        </a>
      )}
    </div>
  );

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
        <a href={homeHref} className="flex items-center gap-2">
          <img src="/images/planexus-logo.png"
            alt="Planexus Logo"
            className="h-8 lg:h-10 w-auto" width={800} height={169} />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <a
            href={homeHref}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative uppercase tracking-wide",
              location === homeHref ? "text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {copy.nav.home}
            {location === homeHref && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
            )}
          </a>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            onFocus={() => setAboutOpen(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setAboutOpen(false); }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen(v => !v)}
              onKeyDown={(e) => { if (e.key === 'Escape') setAboutOpen(false); }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 uppercase tracking-wide",
                aboutActive ? "text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {copy.nav.about}
              <ChevronDown className={cn("w-4 h-4 transition-transform", aboutOpen && "rotate-180")} />
            </button>
            {aboutActive && (
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
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false); }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(v => !v)}
              onKeyDown={(e) => { if (e.key === 'Escape') setServicesOpen(false); }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 uppercase tracking-wide",
                servicesActive ? "text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {copy.nav.services}
              <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesActive && (
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

          <a
            href={labtogoHref}
            className={cn(
              "text-sm font-bold transition-colors relative uppercase tracking-wide",
              location === labtogoHref ? "text-primary" : "text-primary/90 hover:text-primary"
            )}
          >
            LABtoGO
            {location === labtogoHref && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
            )}
          </a>

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
          <LanguageSwitch className="text-white" />
          <a
            href="tel:+4974357519700"
            className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all border border-primary text-primary bg-transparent hover:bg-primary hover:text-slate-900"
          >
            <Phone className="w-4 h-4" />
            <span>+49 7435 7519 700</span>
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitch />
          <button
            className="p-2 transition-colors text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-y-auto shadow-xl"
            style={{ maxHeight: 'calc(100vh - 5rem)' }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <a href={homeHref} className={cn("text-left text-lg font-medium py-3 border-b border-gray-50", location === homeHref ? "text-primary" : "text-slate-700")}>
                {copy.nav.home}
              </a>

              <div className="border-b border-gray-50">
                <p className="text-xs uppercase tracking-wider text-gray-400 pt-3 pb-1">{copy.nav.about}</p>
                {aboutLinks.map((link) => (
                  <a key={link.href} href={link.href} className={cn("block text-left text-lg font-medium py-2 pl-4 w-full", location === link.href ? "text-primary" : "text-slate-700")}>
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="border-b border-gray-50">
                <p className="text-xs uppercase tracking-wider text-gray-400 pt-3 pb-1">{copy.nav.services}</p>
                {serviceLinks.map((link) => (
                  <a key={link.href} href={link.href} className={cn("block text-left text-lg font-medium py-2 pl-4 w-full", location === link.href ? "text-primary" : "text-slate-700")}>
                    {link.label}
                  </a>
                ))}
              </div>

              <a href={labtogoHref} className={cn("text-left text-lg font-bold py-3 border-b border-gray-50 w-full block", location === labtogoHref ? "text-primary" : "text-primary/80")}>
                LABtoGO
              </a>

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
