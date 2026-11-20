import { pageHeroImages } from "@/lib/site-images";

export type HeroImageKey = "guides" | "work";

export const heroImages: Record<HeroImageKey, { src: string; alt: string; credit: string }> = {
  guides: {
    src: pageHeroImages.guides.src,
    alt: pageHeroImages.guides.alt,
    credit: "SoftKore original image",
  },
  work: {
    src: pageHeroImages.work.src,
    alt: pageHeroImages.work.alt,
    credit: "SoftKore original image",
  },
};
