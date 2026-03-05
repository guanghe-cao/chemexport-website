import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Canonical from "./components/Canonical";
import WhatsAppButton from "./components/WhatsAppButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Quality, Export, Applications, Resources } from "./pages/PlaceholderPages";
import Tio2CoatingsGuide from "./pages/applications/Tio2CoatingsGuide";
import IronOxideConcrete from "./pages/applications/IronOxideConcrete";
import ConcreteAdmixturesReadyMix from "./pages/applications/ConcreteAdmixturesReadyMix";
import TileAdhesiveAdditives from "./pages/applications/TileAdhesiveAdditives";
import WaterTreatmentChemicals from "./pages/applications/WaterTreatmentChemicals";
import ColdWeatherConcreting from "./pages/applications/ColdWeatherConcreting";
import PpFiberConcrete from "./pages/applications/PpFiberConcrete";
import DryMixMortarAdditives from "./pages/applications/DryMixMortarAdditives";
import PaintCoatingFillers from "./pages/applications/PaintCoatingFillers";
import ZincOxideRubber from "./pages/applications/ZincOxideRubber";
import LightweightConcreteBlocks from "./pages/applications/LightweightConcreteBlocks";
import PhosphateFreeDetergents from "./pages/applications/PhosphateFreeDetergents";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:categorySlug" component={ProductCategory} />
      <Route path="/products/:categorySlug/:productSlug" component={ProductDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/quality" component={Quality} />
      <Route path="/export" component={Export} />
      <Route path="/applications" component={Applications} />
      <Route path="/applications/tio2-coatings-guide" component={Tio2CoatingsGuide} />
      <Route path="/applications/iron-oxide-concrete" component={IronOxideConcrete} />
      <Route path="/applications/5-key-concrete-admixtures-ready-mix-performance" component={ConcreteAdmixturesReadyMix} />
      <Route path="/applications/high-performance-tile-adhesive-additives" component={TileAdhesiveAdditives} />
      <Route path="/applications/water-treatment-chemicals-sourcing-guide" component={WaterTreatmentChemicals} />
      <Route path="/applications/cold-weather-concreting-admixtures" component={ColdWeatherConcreting} />
      <Route path="/applications/pp-fiber-concrete-plastic-shrinkage-cracking" component={PpFiberConcrete} />
      <Route path="/applications/dry-mix-mortar-additives-guide" component={DryMixMortarAdditives} />
      <Route path="/applications/paint-coating-fillers-guide" component={PaintCoatingFillers} />
      <Route path="/applications/zinc-oxide-rubber-vulcanization-guide" component={ZincOxideRubber} />
      <Route path="/applications/lightweight-concrete-blocks-foaming-agent-guide" component={LightweightConcreteBlocks} />
      <Route path="/applications/phosphate-free-detergents-stpp-alternatives-shmp" component={PhosphateFreeDetergents} />
      <Route path="/resources" component={Resources} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Canonical />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
