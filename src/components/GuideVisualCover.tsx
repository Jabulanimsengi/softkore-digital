import type { GuideCategory } from "@/data/guides";

type ArtworkMotif =
  | "checkout"
  | "compare"
  | "timeline"
  | "maintenance"
  | "domain"
  | "mobile"
  | "conversion"
  | "cloud"
  | "indexing"
  | "geomap"
  | "vitals"
  | "email-auth"
  | "shield"
  | "audit"
  | "ssl";

type ArtworkMeta = {
  motif: ArtworkMotif;
  badge: string;
  stat: string;
  caption: string;
};

const guideArtworkMeta: Record<string, ArtworkMeta> = {
  "payfast-vs-yoco-vs-ozow-south-africa": {
    motif: "checkout",
    badge: "ZAR CHECKOUT",
    stat: "EFT · Card · Instant",
    caption: "Comparing settlement fees, Instant EFT and mobile checkout UX.",
  },
  "wordpress-vs-custom-website-south-africa": {
    motif: "compare",
    badge: "CMS VS CUSTOM",
    stat: "Speed · Risk · Cost",
    caption: "Evaluating maintenance overhead vs clean custom architecture.",
  },
  "how-long-to-build-a-website-south-africa": {
    motif: "timeline",
    badge: "LAUNCH ROADMAP",
    stat: "3–8 Weeks",
    caption: "Discovery, wireframes, copy, development and QA milestones.",
  },
  "website-maintenance-cost-south-africa": {
    motif: "maintenance",
    badge: "MONTHLY CARE",
    stat: "99.9% Uptime",
    caption: "Patching, verified backups, SSL renewal and uptime checks.",
  },
  "co-za-vs-com-domain-south-africa": {
    motif: "domain",
    badge: ".CO.ZA VS .COM",
    stat: "DNS · Ownership",
    caption: "Local buyer trust, DNS configuration and domain protection.",
  },
  "mobile-first-website-design-south-africa": {
    motif: "mobile",
    badge: "MOBILE-FIRST",
    stat: "75%+ Mobile SA",
    caption: "Thumb-friendly enquiry actions, light assets and crisp typography.",
  },
  "what-makes-a-service-page-convert": {
    motif: "conversion",
    badge: "CONVERSION UX",
    stat: "Proof + CTA",
    caption: "Structuring service clarity, local trust and direct contact paths.",
  },
  "website-hosting-guide-south-africa": {
    motif: "cloud",
    badge: "SA HOSTING",
    stat: "Low Latency · CDN",
    caption: "Choosing local or edge-cached infrastructure that scales reliably.",
  },
  "fix-discovered-currently-not-indexed": {
    motif: "indexing",
    badge: "CRAWL QUEUE",
    stat: "Search Console",
    caption: "Unblocking internal links, sitemaps and thin-page signals.",
  },
  "google-ads-vs-seo-south-africa": {
    motif: "compare",
    badge: "PAID VS ORGANIC",
    stat: "Short vs Compound",
    caption: "Balancing immediate campaign leads with lasting search equity.",
  },
  "local-seo-vs-national-seo-south-africa": {
    motif: "geomap",
    badge: "LOCAL VS NATIONAL",
    stat: "9 Provinces",
    caption: "Matching site hierarchy to city services or nationwide demand.",
  },
  "why-duplicate-location-pages-hurt-seo": {
    motif: "geomap",
    badge: "CLEAN URLS",
    stat: "Zero Doorways",
    caption: "Consolidating thin suburb clones into strong authoritative pages.",
  },
  "how-long-does-seo-take-south-africa": {
    motif: "timeline",
    badge: "GROWTH CURVE",
    stat: "Month 1 → Month 6",
    caption: "Realistic checkpoints from technical cleanup to steady leads.",
  },
  "core-web-vitals-guide-south-africa": {
    motif: "vitals",
    badge: "LCP · INP · CLS",
    stat: "Green Thresholds",
    caption: "Trimming render-blocking scripts and stabilising mobile paint times.",
  },
  "internal-linking-guide-for-business-websites": {
    motif: "indexing",
    badge: "LINK ARCHITECTURE",
    stat: "Hub → Service",
    caption: "Directing crawl budget and authority toward commercial pages.",
  },
  "google-search-console-guide-business-owners": {
    motif: "vitals",
    badge: "SEARCH CONSOLE",
    stat: "Clicks · Coverage",
    caption: "Tracking real search demand, indexing drops and page issues.",
  },
  "seo-copywriting-guide-south-africa": {
    motif: "conversion",
    badge: "SEO COPYWRITING",
    stat: "Clear + Searchable",
    caption: "Writing plain-language service copy that answers real queries.",
  },
  "spf-dkim-dmarc-guide-south-africa": {
    motif: "email-auth",
    badge: "SPF · DKIM · DMARC",
    stat: "Verified Sender",
    caption: "Stopping spoofing and keeping quotes out of spam folders.",
  },
  "remove-google-deceptive-site-ahead-warning": {
    motif: "shield",
    badge: "SAFE BROWSING",
    stat: "Clean + Reviewed",
    caption: "Purging malicious payloads and passing Google review checks.",
  },
  "why-wordpress-websites-get-hacked-south-africa": {
    motif: "audit",
    badge: "CMS HARDENING",
    stat: "Plugins · Access",
    caption: "Closing vulnerable extensions, weak logins and file permissions.",
  },
  "fix-your-connection-is-not-private-ssl": {
    motif: "ssl",
    badge: "HTTPS / TLS",
    stat: "Valid Cert Chain",
    caption: "Repairing expired SSL renewals, intermediate certs and HSTS.",
  },
  "website-firewall-waf-cloudflare-south-africa": {
    motif: "shield",
    badge: "EDGE WAF",
    stat: "Filter · Throttle",
    caption: "Blocking bad bots and SQL/XSS probes before they hit origin.",
  },
  "offsite-website-backups-south-africa": {
    motif: "cloud",
    badge: "3-2-1 BACKUPS",
    stat: "Tested Restore",
    caption: "Encrypted off-site snapshots that survive hosting compromises.",
  },
  "http-security-headers-explained": {
    motif: "audit",
    badge: "HTTP HEADERS",
    stat: "CSP · HSTS · XFO",
    caption: "Enforcing browser-side defenses against XSS and clickjacking.",
  },
  "stop-contact-form-spam-and-bots": {
    motif: "ssl",
    badge: "BOT PROTECTION",
    stat: "Clean Inbox",
    caption: "Filtering automated spam without frustrating genuine buyers.",
  },
  "website-security-audit-what-it-checks": {
    motif: "audit",
    badge: "SECURITY AUDIT",
    stat: "OWASP Checklist",
    caption: "Inspecting headers, DNS, access controls, dependencies and backups.",
  },
  "protecting-domain-hijacking-co-za": {
    motif: "domain",
    badge: "DOMAIN LOCK & 2FA",
    stat: "Registrar Lock",
    caption: "Securing ownership credentials, transfer locks and DNS changes.",
  },
};

const categoryFallbackMeta: Record<GuideCategory, ArtworkMeta> = {
  "Website Design & Development": {
    motif: "mobile",
    badge: "WEB ARCHITECTURE",
    stat: "Fast · Clear UX",
    caption: "Mobile-first structure designed to convert enquiries reliably.",
  },
  "SEO Services": {
    motif: "indexing",
    badge: "TECHNICAL SEO",
    stat: "Crawl · Rank",
    caption: "Technical structure and Search Console signals built for visibility.",
  },
  "Website & Cyber Security": {
    motif: "shield",
    badge: "CYBER SECURITY",
    stat: "Hardened · Monitored",
    caption: "Layered protection across DNS, TLS, headers and clean backups.",
  },
  "Industry Playbooks": {
    motif: "conversion",
    badge: "INDUSTRY PLAYBOOK",
    stat: "Search Intent",
    caption: "Sector-specific web architecture, local SEO and POPIA safeguards.",
  },
};

function DiagramSvg({ motif }: { motif: ArtworkMotif }) {
  switch (motif) {
    case "checkout":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="24" y="20" width="136" height="110" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
          <rect x="40" y="38" width="66" height="10" rx="5" fill="#A7F3D0" opacity="0.85" />
          <rect x="40" y="58" width="104" height="8" rx="4" fill="rgba(255,255,255,0.22)" />
          <rect x="40" y="74" width="84" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
          <rect x="40" y="96" width="96" height="20" rx="10" fill="#059669" />
          <path d="M168 75h26" stroke="#34D399" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="202" y="26" width="134" height="98" rx="12" fill="rgba(5,150,105,0.14)" stroke="#34D399" strokeOpacity="0.48" />
          <circle cx="234" cy="60" r="14" fill="#059669" />
          <path d="M228 60l4 4 9-9" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="258" y="50" width="60" height="8" rx="4" fill="#FFFFFF" opacity="0.9" />
          <rect x="258" y="64" width="44" height="6" rx="3" fill="#A7F3D0" opacity="0.7" />
          <rect x="220" y="90" width="98" height="16" rx="8" fill="rgba(255,255,255,0.12)" />
        </svg>
      );
    case "compare":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="26" y="22" width="142" height="106" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.16)" />
          <rect x="42" y="40" width="52" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
          <rect x="42" y="64" width="108" height="12" rx="6" fill="rgba(255,255,255,0.14)" />
          <rect x="42" y="64" width="64" height="12" rx="6" fill="#64748B" />
          <rect x="42" y="88" width="108" height="12" rx="6" fill="rgba(255,255,255,0.14)" />
          <rect x="42" y="88" width="48" height="12" rx="6" fill="#64748B" />
          <rect x="192" y="22" width="142" height="106" rx="12" fill="rgba(5,150,105,0.16)" stroke="#34D399" strokeOpacity="0.55" />
          <rect x="208" y="40" width="64" height="8" rx="4" fill="#A7F3D0" />
          <rect x="208" y="64" width="108" height="12" rx="6" fill="rgba(255,255,255,0.14)" />
          <rect x="208" y="64" width="98" height="12" rx="6" fill="#059669" />
          <rect x="208" y="88" width="108" height="12" rx="6" fill="rgba(255,255,255,0.14)" />
          <rect x="208" y="88" width="90" height="12" rx="6" fill="#34D399" />
        </svg>
      );
    case "timeline":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <path d="M40 112 C96 108, 134 86, 184 74 C236 62, 274 36, 324 28" stroke="#34D399" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M40 112 C96 108, 134 86, 184 74 C236 62, 274 36, 324 28 L324 128 L40 128 Z" fill="rgba(5,150,105,0.16)" />
          <line x1="40" y1="128" x2="324" y2="128" stroke="rgba(255,255,255,0.22)" />
          <circle cx="72" cy="108" r="6" fill="#08111F" stroke="#34D399" strokeWidth="3" />
          <circle cx="152" cy="82" r="6" fill="#08111F" stroke="#34D399" strokeWidth="3" />
          <circle cx="236" cy="54" r="6" fill="#08111F" stroke="#34D399" strokeWidth="3" />
          <circle cx="316" cy="29" r="7.5" fill="#059669" stroke="#A7F3D0" strokeWidth="2.5" />
          <rect x="52" y="28" width="72" height="24" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)" />
          <rect x="64" y="37" width="48" height="6" rx="3" fill="#A7F3D0" opacity="0.85" />
        </svg>
      );
    case "maintenance":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <circle cx="110" cy="75" r="44" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
          <path d="M110 31 A44 44 0 1 1 70 93" stroke="#059669" strokeWidth="10" strokeLinecap="round" />
          <circle cx="110" cy="75" r="24" stroke="#34D399" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="110" cy="75" r="7" fill="#A7F3D0" />
          <rect x="184" y="28" width="150" height="24" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" />
          <circle cx="202" cy="40" r="5" fill="#34D399" />
          <rect x="216" y="36" width="96" height="8" rx="4" fill="rgba(255,255,255,0.7)" />
          <rect x="184" y="63" width="150" height="24" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" />
          <circle cx="202" cy="75" r="5" fill="#34D399" />
          <rect x="216" y="71" width="84" height="8" rx="4" fill="rgba(255,255,255,0.55)" />
          <rect x="184" y="98" width="150" height="24" rx="8" fill="rgba(5,150,105,0.16)" stroke="#34D399" strokeOpacity="0.45" />
          <circle cx="202" cy="110" r="5" fill="#A7F3D0" />
          <rect x="216" y="106" width="102" height="8" rx="4" fill="#A7F3D0" />
        </svg>
      );
    case "domain":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="32" y="26" width="296" height="42" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" />
          <circle cx="58" cy="47" r="10" fill="#059669" />
          <path d="M54 47l3 3 6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="80" y="42" width="144" height="10" rx="5" fill="#FFFFFF" opacity="0.88" />
          <rect x="242" y="38" width="70" height="18" rx="9" fill="rgba(52,211,153,0.22)" stroke="#34D399" strokeOpacity="0.5" />
          <rect x="44" y="88" width="128" height="36" rx="10" fill="rgba(5,150,105,0.18)" stroke="#34D399" strokeOpacity="0.45" />
          <rect x="60" y="102" width="74" height="8" rx="4" fill="#A7F3D0" />
          <rect x="188" y="88" width="128" height="36" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.16)" />
          <rect x="204" y="102" width="84" height="8" rx="4" fill="rgba(255,255,255,0.55)" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="44" y="20" width="176" height="110" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          <rect x="60" y="36" width="96" height="10" rx="5" fill="#FFFFFF" opacity="0.85" />
          <rect x="60" y="56" width="144" height="28" rx="8" fill="rgba(5,150,105,0.22)" />
          <rect x="60" y="96" width="66" height="18" rx="9" fill="#059669" />
          <rect x="136" y="96" width="68" height="18" rx="9" fill="rgba(255,255,255,0.1)" />
          <rect x="242" y="16" width="74" height="122" rx="14" fill="#08111F" stroke="#34D399" strokeWidth="2.2" />
          <rect x="266" y="24" width="26" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="254" y="38" width="50" height="8" rx="4" fill="#A7F3D0" />
          <rect x="254" y="54" width="50" height="34" rx="6" fill="rgba(5,150,105,0.28)" />
          <rect x="254" y="98" width="50" height="16" rx="8" fill="#059669" />
        </svg>
      );
    case "conversion":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="46" y="18" width="268" height="26" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <rect x="64" y="27" width="118" height="8" rx="4" fill="#FFFFFF" opacity="0.85" />
          <rect x="62" y="58" width="236" height="26" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
          <rect x="80" y="67" width="96" height="8" rx="4" fill="#A7F3D0" opacity="0.9" />
          <rect x="84" y="98" width="192" height="32" rx="16" fill="#059669" />
          <rect x="122" y="110" width="96" height="8" rx="4" fill="#FFFFFF" />
          <path d="M234 114h16m-5-5 5 5-5 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="34" y="22" width="112" height="30" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" />
          <circle cx="52" cy="37" r="4.5" fill="#34D399" />
          <rect x="66" y="33" width="64" height="8" rx="4" fill="rgba(255,255,255,0.65)" />
          <rect x="34" y="60" width="112" height="30" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" />
          <circle cx="52" cy="75" r="4.5" fill="#34D399" />
          <rect x="66" y="71" width="56" height="8" rx="4" fill="rgba(255,255,255,0.65)" />
          <rect x="34" y="98" width="112" height="30" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" />
          <circle cx="52" cy="113" r="4.5" fill="#A7F3D0" />
          <rect x="66" y="109" width="60" height="8" rx="4" fill="rgba(255,255,255,0.65)" />
          <path d="M156 75h56" stroke="#34D399" strokeWidth="2.5" strokeDasharray="5 5" />
          <circle cx="272" cy="75" r="42" fill="rgba(5,150,105,0.18)" stroke="#34D399" strokeOpacity="0.6" strokeWidth="2" />
          <path d="M256 76l10 10 22-22" stroke="#A7F3D0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "indexing":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <path d="M72 75 L156 38 M72 75 L156 75 M72 75 L156 112 M156 38 L256 54 M156 75 L256 54 M156 75 L256 102 M156 112 L256 102" stroke="rgba(167,243,208,0.42)" strokeWidth="2" />
          <circle cx="72" cy="75" r="22" fill="#059669" />
          <circle cx="72" cy="75" r="8" fill="#FFFFFF" />
          <circle cx="156" cy="38" r="14" fill="rgba(255,255,255,0.12)" stroke="#34D399" strokeWidth="2" />
          <circle cx="156" cy="75" r="14" fill="rgba(255,255,255,0.12)" stroke="#34D399" strokeWidth="2" />
          <circle cx="156" cy="112" r="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <rect x="242" y="34" width="84" height="36" rx="10" fill="rgba(5,150,105,0.22)" stroke="#34D399" strokeWidth="1.8" />
          <rect x="256" y="48" width="56" height="8" rx="4" fill="#A7F3D0" />
          <rect x="242" y="84" width="84" height="36" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
          <rect x="256" y="98" width="48" height="8" rx="4" fill="rgba(255,255,255,0.65)" />
        </svg>
      );
    case "geomap":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <circle cx="120" cy="75" r="52" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="120" cy="75" r="34" stroke="rgba(52,211,153,0.34)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="120" cy="75" r="16" fill="rgba(5,150,105,0.28)" />
          <circle cx="120" cy="75" r="7" fill="#34D399" />
          <circle cx="96" cy="48" r="5" fill="#A7F3D0" />
          <circle cx="154" cy="56" r="5" fill="#A7F3D0" />
          <circle cx="144" cy="108" r="5" fill="#A7F3D0" />
          <rect x="202" y="28" width="128" height="28" rx="8" fill="rgba(5,150,105,0.2)" stroke="#34D399" strokeOpacity="0.45" />
          <rect x="218" y="38" width="82" height="8" rx="4" fill="#FFFFFF" opacity="0.9" />
          <rect x="202" y="64" width="128" height="24" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
          <rect x="218" y="72" width="70" height="8" rx="4" fill="#A7F3D0" opacity="0.8" />
          <rect x="202" y="96" width="128" height="24" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
          <rect x="218" y="104" width="60" height="8" rx="4" fill="rgba(255,255,255,0.6)" />
        </svg>
      );
    case "vitals":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <circle cx="76" cy="75" r="34" stroke="rgba(255,255,255,0.14)" strokeWidth="8" />
          <path d="M76 41 A34 34 0 1 1 46 92" stroke="#059669" strokeWidth="8" strokeLinecap="round" />
          <rect x="60" y="71" width="32" height="8" rx="4" fill="#FFFFFF" opacity="0.88" />
          <circle cx="180" cy="75" r="34" stroke="rgba(255,255,255,0.14)" strokeWidth="8" />
          <path d="M180 41 A34 34 0 1 1 147 84" stroke="#34D399" strokeWidth="8" strokeLinecap="round" />
          <rect x="164" y="71" width="32" height="8" rx="4" fill="#A7F3D0" />
          <circle cx="284" cy="75" r="34" stroke="rgba(255,255,255,0.14)" strokeWidth="8" />
          <path d="M284 41 A34 34 0 1 1 255 94" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
          <rect x="268" y="71" width="32" height="8" rx="4" fill="#FFFFFF" opacity="0.88" />
        </svg>
      );
    case "email-auth":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="34" y="26" width="150" height="98" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
          <path d="M44 40 L109 84 L174 40" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="168" cy="108" r="18" fill="#059669" />
          <path d="M161 108l5 5 10-10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="206" y="28" width="120" height="26" rx="8" fill="rgba(5,150,105,0.22)" stroke="#34D399" strokeOpacity="0.5" />
          <rect x="220" y="37" width="66" height="8" rx="4" fill="#A7F3D0" />
          <rect x="206" y="62" width="120" height="26" rx="8" fill="rgba(5,150,105,0.22)" stroke="#34D399" strokeOpacity="0.5" />
          <rect x="220" y="71" width="76" height="8" rx="4" fill="#A7F3D0" />
          <rect x="206" y="96" width="120" height="26" rx="8" fill="rgba(5,150,105,0.22)" stroke="#34D399" strokeOpacity="0.5" />
          <rect x="220" y="105" width="84" height="8" rx="4" fill="#A7F3D0" />
        </svg>
      );
    case "audit":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="36" y="20" width="288" height="110" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
          <rect x="56" y="38" width="16" height="16" rx="4" fill="#059669" />
          <path d="M60 46l3 3 6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="84" y="42" width="152" height="8" rx="4" fill="#FFFFFF" opacity="0.88" />
          <rect x="252" y="39" width="50" height="14" rx="7" fill="rgba(52,211,153,0.25)" />
          <rect x="56" y="67" width="16" height="16" rx="4" fill="#059669" />
          <path d="M60 75l3 3 6-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="84" y="71" width="132" height="8" rx="4" fill="#A7F3D0" opacity="0.85" />
          <rect x="252" y="68" width="50" height="14" rx="7" fill="rgba(52,211,153,0.25)" />
          <rect x="56" y="96" width="16" height="16" rx="4" fill="#34D399" />
          <path d="M60 104l3 3 6-6" stroke="#08111F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="84" y="100" width="164" height="8" rx="4" fill="rgba(255,255,255,0.72)" />
          <rect x="252" y="97" width="50" height="14" rx="7" fill="rgba(52,211,153,0.25)" />
        </svg>
      );
    case "ssl":
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <rect x="30" y="36" width="300" height="78" rx="14" fill="rgba(255,255,255,0.06)" stroke="#34D399" strokeOpacity="0.42" />
          <rect x="58" y="68" width="32" height="24" rx="6" fill="#059669" />
          <path d="M64 68v-7a10 10 0 0 1 20 0v7" stroke="#A7F3D0" strokeWidth="3" strokeLinecap="round" />
          <rect x="110" y="62" width="150" height="10" rx="5" fill="#FFFFFF" opacity="0.9" />
          <rect x="110" y="80" width="106" height="8" rx="4" fill="#A7F3D0" opacity="0.72" />
          <circle cx="296" cy="75" r="14" fill="rgba(5,150,105,0.25)" stroke="#34D399" strokeWidth="2" />
          <path d="M290 75l4 4 8-8" stroke="#A7F3D0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
    default:
      return (
        <svg viewBox="0 0 360 150" fill="none" aria-hidden="true">
          <circle cx="110" cy="75" r="46" stroke="rgba(52,211,153,0.28)" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M110 34 L144 48 V76 C144 98 128 114 110 122 C92 114 76 98 76 76 V48 L110 34 Z" fill="rgba(5,150,105,0.26)" stroke="#34D399" strokeWidth="2.5" />
          <path d="M98 76l8 8 16-16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="184" y="34" width="142" height="22" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" />
          <rect x="198" y="41" width="84" height="8" rx="4" fill="#A7F3D0" />
          <rect x="184" y="64" width="142" height="22" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" />
          <rect x="198" y="71" width="96" height="8" rx="4" fill="rgba(255,255,255,0.72)" />
          <rect x="184" y="94" width="142" height="22" rx="8" fill="rgba(5,150,105,0.2)" stroke="#34D399" strokeOpacity="0.45" />
          <rect x="198" y="101" width="76" height="8" rx="4" fill="#FFFFFF" opacity="0.9" />
        </svg>
      );
  }
}

export function GuideVisualCover({
  slug,
  category,
  title,
  compact = false,
}: {
  slug: string;
  category: GuideCategory;
  title: string;
  compact?: boolean;
}) {
  const meta = guideArtworkMeta[slug] ?? categoryFallbackMeta[category];

  return (
    <div
      className={`guide-visual-cover${compact ? " is-compact" : ""}`}
      role="img"
      aria-label={`${title} — ${meta.caption}`}
    >
      <div className="guide-visual-top">
        <span className="guide-visual-badge">{meta.badge}</span>
        <span className="guide-visual-stat">{meta.stat}</span>
      </div>
      <div className="guide-visual-diagram">
        <DiagramSvg motif={meta.motif} />
      </div>
      {!compact ? <p className="guide-visual-caption">{meta.caption}</p> : null}
    </div>
  );
}
