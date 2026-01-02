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
    <div className="pt-20 min-h-screen">
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Kontaktieren Sie uns</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Starten Sie Ihr nächstes Projekt mit einem starken Partner.
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
                <p className="text-muted-foreground mb-8">
                  Wir stehen Ihnen jederzeit für Fragen und Beratungen zur Verfügung.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Adresse</h4>
                      <p className="text-muted-foreground">Am Steinbach 8<br />72459 Albstadt – Laufen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Telefon</h4>
                      <a href="tel:+4974357519700" className="text-muted-foreground hover:text-white transition-colors">
                        +49 7435 7519 700
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <a href="mailto:info@planexus.de" className="text-muted-foreground hover:text-white transition-colors">
                        info@planexus.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-secondary rounded-xl overflow-hidden border border-border">
                 {/* Placeholder for Map - Since we can't embed GMaps easily without API key, use a visual placeholder */}
                 <div className="w-full h-full flex items-center justify-center bg-card/50">
                    <span className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-5 h-5" /> Karte wird geladen...
                    </span>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8">Schreiben Sie uns</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ihr Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max Mustermann" {...field} className="bg-background border-border" />
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
                          <FormLabel>Email Adresse *</FormLabel>
                          <FormControl>
                            <Input placeholder="max@beispiel.de" {...field} className="bg-background border-border" />
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
                        <FormLabel>Betreff *</FormLabel>
                        <FormControl>
                          <Input placeholder="Anfrage zu..." {...field} className="bg-background border-border" />
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
                        <FormLabel>Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ihre Nachricht an uns..." className="min-h-[150px] bg-background border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary text-background font-bold hover:bg-primary/90 h-12 text-lg">
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
