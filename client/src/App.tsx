import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import AccessDenied from "./components/AccessDenied";
import AgeGate from "./components/AgeGate";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useAgeGate } from "./hooks/useAgeGate";
import Home from "./pages/Home";

import AreaDetail from "./pages/AreaDetail";
import ServiceDetail from "./pages/ServiceDetail";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/areas/:slug"} component={AreaDetail} />
      <Route path={"/services/:slug"} component={ServiceDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
