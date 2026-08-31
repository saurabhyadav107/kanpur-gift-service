import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import AccessDenied from "./components/AccessDenied";
import AgeGate from "./components/AgeGate";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAgeGate } from "./hooks/useAgeGate";

import Home from "./pages/Home";
import KanpurHub from "./pages/KanpurHub";
import LucknowHub from "./pages/LucknowHub";
import Profiles from "./pages/Profiles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ReviewsPage from "./pages/ReviewsPage";
import AreaDetail from "./pages/AreaDetail";
import ServiceDetail from "./pages/ServiceDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/kanpur" component={KanpurHub} />
      <Route path="/lucknow" component={LucknowHub} />
      {/* Canonical redirects — eliminate duplicate-URL collisions */}
      <Route path="/kanpur-escorts">
        <Redirect to="/kanpur" />
      </Route>
      <Route path="/lucknow-escorts">
        <Redirect to="/lucknow" />
      </Route>
      <Route path="/areas/:slug" component={({ params }: { params: { slug: string } }) => <Redirect to={`/kanpur/${params.slug}`} />} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/kanpur/:slug" component={AreaDetail} />
      <Route path="/lucknow/:slug" component={AreaDetail} />
      <Route path="/areas/:slug" component={AreaDetail} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AgeGatedApp() {
  const { status, accept, decline } = useAgeGate();

  if (status === "declined") {
    return (
      <AccessDenied
        onReset={() => {
          try {
            localStorage.removeItem("ageGateAccepted");
            localStorage.removeItem("ageGateDeclined");
          } catch {
            /* noop */
          }
          window.location.reload();
        }}
      />
    );
  }

  return (
    <TooltipProvider>
      <Toaster />
      <Router />
      {status === "pending" && (
        <div className="fixed inset-0 z-50">
          <AgeGate onAccept={accept} onDecline={decline} />
        </div>
      )}
    </TooltipProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AgeGatedApp />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
