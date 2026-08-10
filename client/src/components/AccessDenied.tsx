import { ShieldOff } from "lucide-react";

interface AccessDeniedProps {
  onReset?: () => void;
}

export default function AccessDenied({ onReset }: AccessDeniedProps) {
  return (
    <div className="age-gate-overlay" role="main" aria-labelledby="denied-title">
      {/* Background blobs */}
      <div className="age-gate-blob age-gate-blob-1" style={{ opacity: 0.3 }} aria-hidden="true" />
      <div className="age-gate-blob age-gate-blob-2" style={{ opacity: 0.2 }} aria-hidden="true" />

      <div className="age-gate-card" style={{ maxWidth: "420px" }}>
        {/* Icon */}
        <div className="age-gate-shield-wrap" aria-hidden="true">
          <div
            className="age-gate-shield-ring"
            style={{ borderColor: "rgba(239,68,68,0.4)", background: "rgba(239,68,68,0.1)" }}
          >
            <ShieldOff
              className="age-gate-shield-icon"
              style={{ color: "#ef4444" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          id="denied-title"
          className="age-gate-title"
          style={{ fontSize: "clamp(1.4rem, 5vw, 2rem)", color: "#ef4444" }}
        >
          Access Denied
        </h1>

        <div className="age-gate-divider" aria-hidden="true" />

        <p className="age-gate-desc" style={{ marginBottom: "1.25rem" }}>
          You must be <strong>18 years or older</strong> to access this website.
          This site contains adult content not suitable for minors.
        </p>

        {/* Re-verify option */}
        {onReset && (
          <button
            className="age-gate-btn age-gate-btn-decline"
            onClick={onReset}
            style={{ marginTop: "0.5rem", borderColor: "rgba(239,68,68,0.35)" }}
            type="button"
            aria-label="Go back and verify your age"
          >
            ← Go Back
          </button>
        )}
      </div>
    </div>
  );
}
