import { Link } from "wouter";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <a className="text-2xl font-heading font-bold tracking-tighter text-white flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-background font-bold text-lg">P</span>
                </div>
                PLANEXUS
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ihr Fachplaner für Containerlabore mit mehr als 10 Jahren Erfahrung.
              Intelligent, nachhaltig und modular.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="text-muted-foreground hover:text-primary transition-colors">Über uns</a></Link></li>
              <li><Link href="/services"><a className="text-muted-foreground hover:text-primary transition-colors">Leistungen</a></Link></li>
              <li><Link href="/team"><a className="text-muted-foreground hover:text-primary transition-colors">Team</a></Link></li>
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Am Steinbach 8<br />72459 Albstadt – Laufen</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+4974357519700">+49 7435 7519 700</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@planexus.de">info@planexus.de</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
             <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Social Media</h4>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-background transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Planexus GmbH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/impressum"><a className="hover:text-foreground">Impressum</a></Link>
            <Link href="/datenschutz"><a className="hover:text-foreground">Datenschutz</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
