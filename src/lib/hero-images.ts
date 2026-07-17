export type HeroImageKey =
  | "industries"
  | "aiAgents"
  | "guides"
  | "work";

export const heroImages: Record<HeroImageKey, { src: string; alt: string; credit: string }> = {
  industries: {
    src: "/images/site/overview-industries.webp",
    alt: "Business leaders mapping a shared customer and operations journey.",
    credit: "Softkore original image",
  },
  aiAgents: {
    src: "/images/site/overview-ai.webp",
    alt: "Operations specialists reviewing an automated workflow with human oversight.",
    credit: "Softkore original image",
  },
  guides: {
    src: "/images/site/overview-guides.webp",
    alt: "A strategy notebook and interface plans on a working desk.",
    credit: "Softkore original image",
  },
  work: {
    src: "/images/site/overview-work.webp",
    alt: "Creative technologists reviewing website and analytics concepts.",
    credit: "Softkore original image",
  },
};
