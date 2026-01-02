import { Link } from "wouter";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <a className="text-2xl font-heading font-bold tracking-tighter text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white">
                  <span className="font-bold text-lg">P</span>
                </div>
                PLANEXUS
              </a>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ihr Fachplaner für <strong className="text-white">Containerlabore</strong> mit mehr als 10 Jahren Erfahrung.
              Intelligent, nachhaltig und modular.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="text-slate-400 hover:text-primary transition-colors">Über uns</a></Link></li>
              <li><Link href="/services"><a className="text-slate-400 hover:text-primary transition-colors">Leistungen</a></Link></li>
              <li><Link href="/team"><a className="text-slate-400 hover:text-primary transition-colors">Team</a></Link></li>
              <li><Link href="/contact"><a className="text-slate-400 hover:text-primary transition-colors">Kontakt</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Am Steinbach 8<br />72459 Albstadt – Laufen</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+4974357519700">+49 7435 7519 700</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@planexus.de">info@planexus.de</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
             <h4 className="font-heading font-bold text-lg mb-6 text-white">Folgen Sie uns</h4>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Planexus GmbH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/impressum"><a className="hover:text-white">Impressum</a></Link>
            <Link href="/datenschutz"><a className="hover:text-white">Datenschutz</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
