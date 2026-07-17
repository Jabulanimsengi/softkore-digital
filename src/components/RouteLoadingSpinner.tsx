"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const FALLBACK_TIMEOUT_MS = 12_000;

export function RouteLoadingSpinner() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsLoading(false);
    document.body.removeAttribute("aria-busy");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (destination.origin !== current.origin) return;
      if (destination.pathname === current.pathname && destination.search === current.search) return;

      document.body.setAttribute("aria-busy", "true");
      flushSync(() => setIsLoading(true));

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        document.body.removeAttribute("aria-busy");
      }, FALLBACK_TIMEOUT_MS);
    }

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.removeAttribute("aria-busy");
    };
  }, []);

  return (
    <div
      className={`route-loading-overlay ${isLoading ? "is-visible" : ""}`}
      aria-hidden={!isLoading}
      aria-live="polite"
    >
      <div className="route-loading-indicator" role={isLoading ? "status" : undefined}>
        <span className="route-loading-spinner" aria-hidden="true" />
        <span>Loading</span>
      </div>
    </div>
  );
}
