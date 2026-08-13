import { useState, useCallback } from "react";

const STORAGE_KEY = "ageGateAccepted";
const DECLINED_KEY = "ageGateDeclined";

export type AgeGateStatus = "pending" | "accepted" | "declined";

function isSearchEngineBot(): boolean {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent || "";
  return /Googlebot|bingbot|Baiduspider|DuckDuckBot|yandexbot|facebookexternalhit|twitterbot|Lighthouse|Storebot-Google|Google-PageSpeed/i.test(ua);
}

function getInitialStatus(): AgeGateStatus {
  if (isSearchEngineBot()) {
    return "accepted";
  }
  try {
    if (localStorage.getItem(STORAGE_KEY) === "true") return "accepted";
    if (localStorage.getItem(DECLINED_KEY) === "true") return "declined";
  } catch {
    // localStorage unavailable (e.g., private browsing in some browsers)
  }
  return "pending";
}

export function useAgeGate() {
  const [status, setStatus] = useState<AgeGateStatus>(getInitialStatus);

  const accept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
      localStorage.removeItem(DECLINED_KEY);
    } catch {
      /* noop */
    }
    setStatus("accepted");
  }, []);

  const decline = useCallback(() => {
    try {
      localStorage.setItem(DECLINED_KEY, "true");
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
    setStatus("declined");
  }, []);

  return { status, accept, decline };
}
