"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const FALLBACK_TIMEOUT_MS = 12_000;

type CometDot = {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  opacity: number;
};

const OUTER_COMET_DOTS: readonly CometDot[] = [
  { cx: 49, cy: 28, r: 2.95, fill: "#059669", opacity: 1 },
  { cx: 47.4, cy: 19.96, r: 2.68, fill: "#059669", opacity: 0.89 },
  { cx: 42.85, cy: 13.15, r: 2.41, fill: "#059669", opacity: 0.78 },
  { cx: 36.04, cy: 8.6, r: 2.14, fill: "#10B981", opacity: 0.66 },
  { cx: 28, cy: 7, r: 1.88, fill: "#10B981", opacity: 0.55 },
  { cx: 19.96, cy: 8.6, r: 1.61, fill: "#10B981", opacity: 0.44 },
  { cx: 13.15, cy: 13.15, r: 1.34, fill: "#34D399", opacity: 0.33 },
  { cx: 8.6, cy: 19.96, r: 1.07, fill: "#34D399", opacity: 0.21 },
  { cx: 7, cy: 28, r: 0.8, fill: "#34D399", opacity: 0.1 },
];

const INNER_COMET_DOTS: readonly CometDot[] = [
  { cx: 41.5, cy: 28, r: 2.4, fill: "#08111F", opacity: 1 },
  { cx: 39.69, cy: 34.75, r: 2.13, fill: "#08111F", opacity: 0.85 },
  { cx: 34.75, cy: 39.69, r: 1.85, fill: "#08111F", opacity: 0.71 },
  { cx: 28, cy: 41.5, r: 1.58, fill: "#334155", opacity: 0.56 },
  { cx: 21.25, cy: 39.69, r: 1.3, fill: "#334155", opacity: 0.41 },
  { cx: 16.31, cy: 34.75, r: 1.03, fill: "#334155", opacity: 0.27 },
  { cx: 14.5, cy: 28, r: 0.75, fill: "#334155", opacity: 0.12 },
];

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
        <svg
          className="route-loading-spinner"
          viewBox="0 0 56 56"
          fill="none"
          aria-hidden="true"
        >
          <g className="route-loading-spinner-outer">
            {OUTER_COMET_DOTS.map((dot, index) => (
              <circle
                key={index}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill={dot.fill}
                opacity={dot.opacity}
              />
            ))}
          </g>
          <g className="route-loading-spinner-inner">
            {INNER_COMET_DOTS.map((dot, index) => (
              <circle
                key={index}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill={dot.fill}
                opacity={dot.opacity}
              />
            ))}
          </g>
        </svg>
        <span>Loading</span>
      </div>
    </div>
  );
}
