import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige Email-Adresse"),
  subject: z.string().min(5, "Betreff muss mindestens 5 Zeichen lang sein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Nachricht gesendet",
      description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
    });
    form.reset();
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Kontakt - Laborcontainer Anfrage"
        description="Kontaktieren Sie Planexus für Ihr Laborcontainer-Projekt. Beratung, Angebote und Projektstart. Wir freuen uns auf Ihre Anfrage."
        canonical="/kontakt"
      />
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Kontaktieren Sie uns</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Starten Sie Ihr Laborprojekt mit einem starken Partner.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Unsere Kontaktdaten</h3>
                <p className="text-gray-600 mb-8">
                  Wir stehen Ihnen jederzeit für Fragen zu <strong>Laborcontainern</strong> und Planungsleistungen zur Verfügung.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <MapPin className="text-primary w-6 h-6 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-900">Adresse</h4>
                      <p className="text-gray-600">Am Steinbach 8<br />72459 Albstadt – Laufen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Phone className="text-primary w-6 h-6 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-900">Telefon</h4>
                      <a href="tel:+4974357519700" className="text-gray-600 hover:text-primary transition-colors block">
                        +49 7435 7519 700
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="text-primary w-6 h-6 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-900">Email</h4>
                      <a href="mailto:info@planexus.de" className="text-gray-600 hover:text-primary transition-colors block">
                        info@planexus.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-slate-100 rounded-xl overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.935%2C48.195%2C8.965%2C48.215&layer=mapnik&marker=48.205%2C8.950"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Planexus Standort Albstadt"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg shadow-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Schreiben Sie uns</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Ihr Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max Mustermann" {...field} className="bg-white border-gray-200 focus:border-primary focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Email Adresse *</FormLabel>
                          <FormControl>
                            <Input placeholder="max@beispiel.de" {...field} className="bg-white border-gray-200 focus:border-primary focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Betreff *</FormLabel>
                        <FormControl>
                          <Input placeholder="Anfrage Laborcontainer..." {...field} className="bg-white border-gray-200 focus:border-primary focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ihre Nachricht an uns..." className="min-h-[150px] bg-white border-gray-200 focus:border-primary focus:ring-primary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary text-slate-900 font-bold hover:bg-primary/90 h-12 text-lg shadow-md shadow-primary/20">
                    <Send className="w-5 h-5 mr-2" /> Nachricht senden
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
