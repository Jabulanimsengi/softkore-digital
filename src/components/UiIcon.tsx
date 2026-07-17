export type UiIconName =
  | "arrow"
  | "calendar"
  | "chart"
  | "code"
  | "globe"
  | "layers"
  | "mail"
  | "map"
  | "phone"
  | "search"
  | "shield"
  | "workflow";

export function UiIcon({ name, className = "" }: { name: UiIconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  return (
    <svg className={`ui-icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...common}>
      {name === "globe" ? <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></> : null}
      {name === "search" ? <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5M7.5 10.5h6M10.5 7.5v6" /></> : null}
      {name === "calendar" ? <><rect x="4" y="5.5" width="16" height="14" rx="2" /><path d="M8 3v5M16 3v5M4 10h16m-11 4 2 2 4-4" /></> : null}
      {name === "code" ? <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="m10 9-3 3 3 3m4-6 3 3-3 3" /></> : null}
      {name === "chart" ? <><path d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6" /><path d="M16 7h3v3" /></> : null}
      {name === "workflow" ? <><rect x="3" y="4" width="6" height="5" rx="1" /><rect x="15" y="15" width="6" height="5" rx="1" /><path d="M9 6.5h4a4 4 0 0 1 4 4V15M15 17.5h-4a4 4 0 0 1-4-4V9" /></> : null}
      {name === "layers" ? <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></> : null}
      {name === "shield" ? <><path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></> : null}
      {name === "map" ? <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></> : null}
      {name === "phone" ? <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-1-1.2 3a16 16 0 0 1-9.8-9.8L8 8 7 3Z" /> : null}
      {name === "mail" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></> : null}
      {name === "arrow" ? <><path d="M5 12h14m-5-5 5 5-5 5" /></> : null}
    </svg>
  );
}
