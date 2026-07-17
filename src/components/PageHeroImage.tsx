import { heroImages, type HeroImageKey } from "@/lib/hero-images";
import type { SiteImage } from "@/lib/site-images";

type PageHeroImageProps = ({ priority?: boolean } & (
  | { imageKey: HeroImageKey; image?: never }
  | { image: SiteImage; imageKey?: never }
));

export function PageHeroImage(props: PageHeroImageProps) {
  const image = "image" in props ? props.image : heroImages[props.imageKey];

  if (!image) {
    return null;
  }

  return (
    <figure className="page-hero-image">
      <img
        src={image.src}
        alt={image.alt}
        loading={props.priority ? "eager" : "lazy"}
        fetchPriority={props.priority ? "high" : "auto"}
      />
    </figure>
  );
}
