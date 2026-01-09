import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Team from "@/pages/team";
import Magazine from "@/pages/magazine";
import Article1 from "@/pages/magazine/article1";
import Article2 from "@/pages/magazine/article2";
import Article3 from "@/pages/magazine/article3";
import PlanningService from "@/pages/services/planning";
import ConstructionService from "@/pages/services/construction";
import LogisticsService from "@/pages/services/logistics";
import EquipmentService from "@/pages/services/equipment";
import ConsultingService from "@/pages/services/consulting";
import SmartLabService from "@/pages/services/smart-lab";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/planning" component={PlanningService} />
      <Route path="/services/construction" component={ConstructionService} />
      <Route path="/services/logistics" component={LogisticsService} />
      <Route path="/services/equipment" component={EquipmentService} />
      <Route path="/services/consulting" component={ConsultingService} />
      <Route path="/services/smart-lab" component={SmartLabService} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/magazine" component={Magazine} />
      <Route path="/magazine/1" component={Article1} />
      <Route path="/magazine/2" component={Article2} />
      <Route path="/magazine/3" component={Article3} />
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
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
