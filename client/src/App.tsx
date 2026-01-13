import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/home";

const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const Contact = lazy(() => import("@/pages/contact"));
const Team = lazy(() => import("@/pages/team"));
const Magazine = lazy(() => import("@/pages/magazine"));
const Article1 = lazy(() => import("@/pages/magazine/article1"));
const Article2 = lazy(() => import("@/pages/magazine/article2"));
const Article3 = lazy(() => import("@/pages/magazine/article3"));
const PlanningService = lazy(() => import("@/pages/services/planning"));
const ConstructionService = lazy(() => import("@/pages/services/construction"));
const LogisticsService = lazy(() => import("@/pages/services/logistics"));
const EquipmentService = lazy(() => import("@/pages/services/equipment"));
const ConsultingService = lazy(() => import("@/pages/services/consulting"));
const SmartLabService = lazy(() => import("@/pages/services/smart-lab"));
const Impressum = lazy(() => import("@/pages/impressum"));
const Datenschutz = lazy(() => import("@/pages/datenschutz"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ueber-uns" component={About} />
      <Route path="/leistungen" component={Services} />
      <Route path="/leistungen/planung" component={PlanningService} />
      <Route path="/leistungen/modulbau" component={ConstructionService} />
      <Route path="/leistungen/logistik" component={LogisticsService} />
      <Route path="/leistungen/ausstattung" component={EquipmentService} />
      <Route path="/leistungen/beratung" component={ConsultingService} />
      <Route path="/leistungen/smart-lab" component={SmartLabService} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/magazin" component={Magazine} />
      <Route path="/magazin/1" component={Article1} />
      <Route path="/magazin/2" component={Article2} />
      <Route path="/magazin/3" component={Article3} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const ssrContent = document.getElementById('ssr-content');
    if (ssrContent) {
      ssrContent.remove();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
              <Router />
            </Suspense>
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
