import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";

interface AgeGateProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function AgeGate({ onAccept, onDecline }: AgeGateProps) {
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while gate is shown
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Focus the accept button on mount for keyboard accessibility
  useEffect(() => {
    acceptBtnRef.current?.focus();
  }, []);

  // Trap focus inside the gate (basic two-button scenario)
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      // Decline on Escape – same as clicking "I Am Under 18"
      onDecline();
    }
  }

  return (
    <>
      {/* ─── Animated particle background ─── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        aria-describedby="age-gate-desc"
        className="age-gate-overlay"
        onKeyDown={handleKeyDown}
      >
        {/* Radial glow blobs */}
        <div className="age-gate-blob age-gate-blob-1" aria-hidden="true" />
        <div className="age-gate-blob age-gate-blob-2" aria-hidden="true" />

        {/* ─── Card ─── */}
        <div className="age-gate-card" role="document">
          {/* Shield badge */}
          <div className="age-gate-shield-wrap" aria-hidden="true">
            <div className="age-gate-shield-ring">
              <Shield className="age-gate-shield-icon" aria-hidden="true" />
            </div>
          </div>

          {/* 18+ large number */}
          <div className="age-gate-number" aria-hidden="true">
            18<span className="age-gate-plus">+</span>
          </div>

          {/* Headline */}
          <h1 id="age-gate-title" className="age-gate-title">
            Adults Only
          </h1>

          {/* Divider */}
          <div className="age-gate-divider" aria-hidden="true" />

          {/* Warning text */}
          <p id="age-gate-desc" className="age-gate-desc">
            This website contains adult content intended for individuals aged{" "}
            <strong>18 years and older</strong>. You must verify your age before
            continuing.
          </p>

          {/* Terms note */}
          <p className="age-gate-terms-note">
            By entering, I confirm I am 18+ and accept the{" "}
            <a
              href="#terms"
              className="age-gate-terms-link"
              onClick={(e) => {
                e.preventDefault();
                onAccept();
                // Scroll to terms section after acceptance
                setTimeout(() => {
                  const el = document.getElementById("terms");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Terms&nbsp;&amp;&nbsp;Conditions
            </a>
            .
          </p>

          {/* ─── Buttons ─── */}
          <div className="age-gate-buttons">
            <button
              ref={acceptBtnRef}
              id="age-gate-accept"
              className="age-gate-btn age-gate-btn-accept"
              onClick={onAccept}
              aria-label="I am 18 or older – enter the website"
              type="button"
            >
              <span className="age-gate-btn-glow" aria-hidden="true" />I Am
              Over&nbsp;18
            </button>

            <button
              id="age-gate-decline"
              className="age-gate-btn age-gate-btn-decline"
              onClick={onDecline}
              aria-label="I am under 18 – leave this website"
              type="button"
            >
              I Am Under&nbsp;18
            </button>
          </div>

          {/* Footer note */}
          <p className="age-gate-footer-note" aria-hidden="true">
            🔒 &nbsp;Your choice is stored locally and respected on future
            visits.
          </p>
        </div>
      </div>
    </>
  );
}
