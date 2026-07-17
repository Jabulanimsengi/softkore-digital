export type SiteImage = {
  src: string;
  alt: string;
};

export const industryImages: Record<string, SiteImage> = {
  "salon-booking-software": {
    src: "/images/site/industry-salon.webp",
    alt: "A salon owner and receptionist reviewing the appointment schedule on a tablet.",
  },
  "ecommerce-development": {
    src: "/images/site/industry-ecommerce.webp",
    alt: "An ecommerce founder managing orders in a compact fulfilment studio.",
  },
  "medical-practice-websites": {
    src: "/images/site/industry-medical.webp",
    alt: "A doctor and practice administrator reviewing patient flow on a tablet.",
  },
  "real-estate-websites": {
    src: "/images/site/industry-real-estate.webp",
    alt: "A property agent reviewing a home presentation with prospective buyers.",
  },
  "legal-firm-seo-services": {
    src: "/images/site/industry-legal.webp",
    alt: "Two legal professionals reviewing a digital case plan together.",
  },
  "dental-practice-websites": {
    src: "/images/site/industry-dental.webp",
    alt: "A dentist and practice coordinator reviewing appointments in a modern clinic.",
  },
  "accounting-firm-websites": {
    src: "/images/site/industry-accounting.webp",
    alt: "An accountant explaining business performance to a client.",
  },
  "construction-company-websites": {
    src: "/images/site/industry-construction.webp",
    alt: "A project manager and site engineer reviewing digital construction plans.",
  },
  "plumber-websites": {
    src: "/images/site/industry-plumber.webp",
    alt: "A plumbing team reviewing the day's service jobs beside their vehicle.",
  },
  "logistics-company-websites": {
    src: "/images/site/industry-logistics.webp",
    alt: "A logistics coordinator and warehouse supervisor reviewing a dispatch plan.",
  },
};

export const guideImages: Record<string, SiteImage> = {
  "website-prices-south-africa": {
    src: "/images/site/guide-pricing.webp",
    alt: "A business owner comparing a website project plan and budget.",
  },
  "website-vs-web-application": {
    src: "/images/site/guide-web-vs-app.webp",
    alt: "A product strategist comparing website and web application interface plans.",
  },
  "technical-seo-checklist": {
    src: "/images/site/guide-technical-seo.webp",
    alt: "A search specialist reviewing a technical site map and performance data.",
  },
  "website-maintenance-checklist": {
    src: "/images/site/guide-maintenance.webp",
    alt: "A developer completing website quality checks across a laptop and tablet.",
  },
  "why-your-website-is-not-ranking": {
    src: "/images/site/guide-not-ranking.webp",
    alt: "A consultant and business owner diagnosing search visibility trends.",
  },
};

export const localSeoImages: Record<string, SiteImage> = {
  "web-development/gauteng": {
    src: "/images/site/local-gauteng.webp",
    alt: "A business owner and digital strategist meeting with Johannesburg in the background.",
  },
};

export function localSeoImageKey(serviceSlug: string, regionSlug: string, areaSlug?: string) {
  return [serviceSlug, regionSlug, areaSlug].filter(Boolean).join("/");
}
