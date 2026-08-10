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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

/**
 * AgeGatedApp — resolves age-gate state before rendering any app content.
 * The main Router is never rendered until the user explicitly accepts.
 */
function AgeGatedApp() {
  const { status, accept, decline } = useAgeGate();

  // ── Not yet decided: show blocking age gate ──
  if (status === "pending") {
    return <AgeGate onAccept={accept} onDecline={decline} />;
  }

  // ── Explicitly declined: show access denied screen ──
  if (status === "declined") {
    return (
      <AccessDenied
        onReset={() => {
          // Clear stored decision and reload so they can re-verify
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

  // ── Accepted: render the full application ──
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
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
