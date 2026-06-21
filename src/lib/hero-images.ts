export type HeroImageKey =
  | "home"
  | "services"
  | "industries"
  | "aiAgents"
  | "guides"
  | "work"
  | "contact";

export const heroImages: Record<HeroImageKey, { src: string; alt: string; credit: string }> = {
  home: {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern workspace with laptops and a collaborative digital team setting.",
    credit: "Unsplash workspace image",
  },
  services: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Team planning a digital project on a glass board.",
    credit: "Unsplash planning image",
  },
  industries: {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    alt: "Business team discussing priorities around a table.",
    credit: "Unsplash business image",
  },
  aiAgents: {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Laptop showing digital workflow activity.",
    credit: "Unsplash workflow image",
  },
  guides: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    alt: "Desk with notes, documents, and planning materials.",
    credit: "Unsplash planning desk image",
  },
  work: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard on a laptop screen.",
    credit: "Unsplash analytics image",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    alt: "People reviewing a project brief together.",
    credit: "Unsplash consultation image",
  },
};
