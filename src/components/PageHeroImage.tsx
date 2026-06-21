import { heroImages, type HeroImageKey } from "@/lib/hero-images";

export function PageHeroImage({ imageKey }: { imageKey: HeroImageKey }) {
  const image = heroImages[imageKey];

  return (
    <figure className="page-hero-image">
      <img src={image.src} alt={image.alt} loading="lazy" />
    </figure>
  );
}
