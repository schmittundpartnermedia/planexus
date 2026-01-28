import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Wifi, Thermometer, Lock, BarChart3, Cloud, Phone, ChevronRight, Lightbulb } from "lucide-react";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/SEO";

export default function SmartLabService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Smart Lab Integration"
        description="Intelligente Laborvernetzung mit IoT-Sensoren, Raumklima-Monitoring, Zugangskontrolle und Cloud-Anbindung. Digitale Workflows für maximale Effizienz."
        canonical="/leistungen/smart-lab"
      />
      <ServiceSchema 
        name="Smart Lab Integration"
        description="Intelligente Laborvernetzung mit IoT-Sensoren und Cloud-Anbindung für digitale Workflows"
        url="/leistungen/smart-lab"
      />
      <BreadcrumbSchema items={[
        { name: "Start", url: "/" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "Smart Lab Integration", url: "/leistungen/smart-lab" }
      ]} />
      {/* Hero Bereich */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>Leistungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Smart Lab <span className="text-primary">Integration</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Die Zukunft des Labors ist digital. Wir vernetzen Ihren Laborcontainer intelligent und schaffen eine Umgebung, die mitdenkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  Smart Lab planen <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+4974357519700" className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" /> Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brotkrümel-Navigation */}
      <div className="bg-slate-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/leistungen" className="hover:text-primary">Leistungen</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Smart Lab Integration</span>
          </div>
        </div>
      </div>

      {/* Hauptinhalt */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Hauptspalte */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-slate-900">
                  Das vernetzte Labor der Zukunft
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Die Digitalisierung macht auch vor dem Labor nicht halt. Intelligente Sensoren, vernetzte Geräte und automatisierte Prozesse verändern die Art, wie wir forschen und arbeiten. Bei Planexus integrieren wir modernste Smart-Lab-Technologien in Ihre Laborcontainer und schaffen so eine Arbeitsumgebung, die effizienter, sicherer und komfortabler ist als je zuvor.
                  </p>
                  <p>
                    Ein Smart Lab ist mehr als nur ein Labor mit Sensoren. Es ist ein intelligentes System, das Daten sammelt, analysiert und daraus Erkenntnisse gewinnt. Es überwacht automatisch kritische Parameter, warnt bei Abweichungen und dokumentiert alle relevanten Vorgänge lückenlos. So haben Sie jederzeit die volle Kontrolle über Ihr Labor – auch wenn Sie nicht vor Ort sind.
                  </p>
                  <p>
                    Unsere Smart-Lab-Lösungen sind modular aufgebaut und können exakt auf Ihre Bedürfnisse zugeschnitten werden. Ob Sie nur einzelne Parameter überwachen möchten oder ein vollständig automatisiertes Labor anstreben – wir finden die richtige Lösung für Sie.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Unsere Smart-Lab-Komponenten
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a 
                    href="https://www.loxone.com/dede/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:shadow-xl hover:border-primary/50 transition-all group block"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                      <Thermometer className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">Umgebungsmonitoring</h4>
                    <p className="text-slate-400 text-sm mb-4">Kontinuierliche Überwachung von Temperatur, Luftfeuchtigkeit, Druck und Luftqualität.</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Powered by Loxone</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                  {[
                    { icon: <Lock className="w-6 h-6" />, title: "Zugangskontrolle", desc: "Elektronische Schließsysteme mit Protokollierung aller Zutritte und Berechtigungsverwaltung." },
                    { icon: <BarChart3 className="w-6 h-6" />, title: "Datenanalyse", desc: "Automatische Auswertung und Visualisierung aller erfassten Daten in Echtzeit." },
                    { icon: <Cloud className="w-6 h-6" />, title: "Cloud-Anbindung", desc: "Sichere Datenspeicherung und Fernzugriff über verschlüsselte Verbindungen." },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Raumklima-Monitoring und Steuerung
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Das Raumklima ist in vielen Laboren ein kritischer Faktor. Temperatur und Luftfeuchtigkeit beeinflussen nicht nur das Wohlbefinden der Mitarbeiter, sondern auch die Qualität von Proben und Messungen. Unser intelligentes Klimamonitoring sorgt dafür, dass die Bedingungen immer optimal sind.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Sensornetzwerk</h4>
                  <p>
                    Hochpräzise Sensoren erfassen kontinuierlich Temperatur, relative Luftfeuchtigkeit, Luftdruck und CO2-Konzentration. Die Messwerte werden in Echtzeit an die zentrale Steuerung übermittelt und mit den Sollwerten verglichen. Bei Abweichungen wird automatisch gegengesteuert oder ein Alarm ausgelöst.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Automatische Regelung</h4>
                  <p>
                    Die intelligente Steuerung regelt Heizung, Kühlung und Lüftung automatisch so, dass die gewünschten Bedingungen eingehalten werden. Dabei berücksichtigt das System auch externe Faktoren wie Außentemperatur, Sonneneinstrahlung oder die Anzahl der anwesenden Personen.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mt-8">Historische Daten</h4>
                  <p>
                    Alle Messwerte werden gespeichert und können später ausgewertet werden. Dies ist nicht nur für die Qualitätssicherung wichtig, sondern auch für die Optimierung des Energieverbrauchs. Durch die Analyse historischer Daten lassen sich Einsparpotenziale identifizieren und die Regelung weiter verbessern.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Zugangskontrolle und Sicherheit
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Der Zugang zu Laborräumen muss kontrolliert werden – aus Sicherheitsgründen, aber auch um den Überblick zu behalten, wer wann im Labor gearbeitet hat. Unsere elektronischen Zugangskontrollsysteme bieten maximale Sicherheit bei einfacher Handhabung.
                  </p>
                  <p>
                    <strong>Elektronische Schließsysteme:</strong> Zugang per RFID-Karte, Transponder oder Smartphone. Keine Schlüssel, die verloren gehen können, und einfache Verwaltung der Zutrittsberechtigungen.
                  </p>
                  <p>
                    <strong>Biometrische Systeme:</strong> Für höchste Sicherheitsanforderungen bieten wir biometrische Zugangskontrollen per Fingerabdruck oder Gesichtserkennung. Diese Systeme sind nahezu fälschungssicher und erfordern keine Karten oder Codes.
                  </p>
                  <p>
                    <strong>Protokollierung:</strong> Jeder Zutritt wird automatisch protokolliert – mit Datum, Uhrzeit und Identität der Person. Die Protokolle können für Audits oder zur Nachverfolgung von Vorfällen verwendet werden.
                  </p>
                  <p>
                    <strong>Alarmierung:</strong> Bei unbefugten Zutrittsversuchen oder geöffneten Türen wird automatisch ein Alarm ausgelöst und die verantwortlichen Personen werden benachrichtigt.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Geräteüberwachung und Predictive Maintenance
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Laborgeräte sind teuer und kritisch für den Betrieb. Ein Ausfall zur falschen Zeit kann Experimente ruinieren und erhebliche Kosten verursachen. Mit unserer Geräteüberwachung behalten Sie den Zustand Ihrer Geräte im Blick und können Probleme erkennen, bevor sie zum Ausfall führen.
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "Echtzeitüberwachung von Betriebsparametern (Temperatur, Druck, Stromaufnahme)",
                      "Automatische Alarmierung bei Abweichungen von Normalwerten",
                      "Analyse von Trends zur Früherkennung von Verschleiß",
                      "Integration in bestehende LIMS und Wartungsmanagementsysteme",
                      "Automatische Dokumentation für Qualitätsmanagement und Audits",
                      "Fernzugriff auf Gerätestatus über Web-Dashboard oder App"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Energiemanagement
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Labore verbrauchen viel Energie – für Klimatisierung, Beleuchtung und den Betrieb zahlreicher Geräte. Mit intelligentem Energiemanagement lassen sich erhebliche Einsparungen erzielen, ohne die Funktionalität einzuschränken.
                  </p>
                  <p>
                    Unser Energiemanagementsystem erfasst den Verbrauch aller Geräte und Systeme und identifiziert Einsparpotenziale. Automatische Abschaltung ungenutzter Geräte, bedarfsgerechte Regelung der Klimatisierung und intelligente Beleuchtungssteuerung reduzieren den Energieverbrauch spürbar.
                  </p>
                  <p>
                    Durch die kontinuierliche Überwachung erkennen Sie auch ungewöhnliche Verbräuche, die auf defekte Geräte oder Leckagen hindeuten können. So sparen Sie nicht nur Energie, sondern beugen auch Schäden vor.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Digitale Dokumentation und Compliance
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    In vielen Branchen ist eine lückenlose Dokumentation aller Laboraktivitäten vorgeschrieben. Unser Smart-Lab-System übernimmt diese Aufgabe automatisch und erstellt prüffähige Protokolle, die alle Anforderungen an GLP, GMP oder ISO erfüllen.
                  </p>
                  <p>
                    <strong>Automatische Protokollierung:</strong> Alle relevanten Ereignisse – vom Betreten des Labors über die Nutzung von Geräten bis hin zu Umgebungsbedingungen – werden automatisch erfasst und gespeichert.
                  </p>
                  <p>
                    <strong>Elektronische Unterschriften:</strong> Für Vorgänge, die eine Unterschrift erfordern, bieten wir elektronische Signaturen nach FDA 21 CFR Part 11 oder EU Annex 11.
                  </p>
                  <p>
                    <strong>Audit-Trail:</strong> Alle Änderungen an Daten oder Einstellungen werden nachvollziehbar protokolliert. So können Sie jederzeit nachweisen, wer wann was getan hat.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">
                  Integration und Schnittstellen
                </h3>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p>
                    Ein Smart Lab ist kein isoliertes System, sondern Teil einer vernetzten Infrastruktur. Unsere Lösungen bieten offene Schnittstellen für die Integration in bestehende Systeme:
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "LIMS (Laboratory Information Management System)",
                      "ELN (Electronic Laboratory Notebook)",
                      "Gebäudeleittechnik und BMS",
                      "ERP-Systeme für Materialwirtschaft",
                      "CMMS für Wartungsmanagement",
                      "Cloud-Dienste und Fernzugriff"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Standardprotokolle wie OPC-UA, MQTT oder REST-APIs ermöglichen die nahtlose Integration. Auf Wunsch entwickeln wir auch kundenspezifische Schnittstellen. Für die Gebäudeautomation setzen wir unter anderem auf bewährte Systeme wie <a href="https://www.loxone.com/dede/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Loxone</a>, die eine intuitive Steuerung und Visualisierung aller Smart-Lab-Funktionen ermöglichen.
                  </p>
                </div>
              </div>
            </div>

            {/* Seitenleiste */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Karte */}
                <div className="bg-primary text-slate-900 p-8 rounded-2xl">
                  <Lightbulb className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Digitalisierung starten</h3>
                  <p className="text-slate-700 mb-6 text-sm">
                    Machen Sie Ihr Labor zukunftsfähig. Wir beraten Sie zu den Möglichkeiten der Smart-Lab-Integration.
                  </p>
                  <Link href="/kontakt" className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-slate-100 transition-colors">
                      Beratung anfordern
                  </Link>
                </div>

                {/* Schnellübersicht */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Smart-Lab-Vorteile</h3>
                  <ul className="space-y-4">
                    {[
                      "Echtzeitüberwachung",
                      "Automatische Dokumentation",
                      "Erhöhte Sicherheit",
                      "Energieeinsparung",
                      "Fernzugriff",
                      "Compliance-Unterstützung"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weitere Leistungen */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-6 text-slate-900">Weitere Leistungen</h3>
                  <ul className="space-y-3">
                    <li><Link href="/leistungen/planung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Technische Fachplanung</Link></li>
                    <li><Link href="/leistungen/modulbau" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Modulbau & Fertigung</Link></li>
                    <li><Link href="/leistungen/logistik" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Logistik & Montage</Link></li>
                    <li><Link href="/leistungen/ausstattung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Laborausstattung</Link></li>
                    <li><Link href="/leistungen/beratung" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Beratung & Genehmigung</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bereich */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Bereit für das Labor der Zukunft?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Lassen Sie uns gemeinsam Ihr Labor digitalisieren. Wir beraten Sie zu den Möglichkeiten und entwickeln eine Lösung, die zu Ihnen passt.
          </p>
          <Link href="/kontakt" className="bg-primary text-white font-bold px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Jetzt Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
