import Link from "next/link";
import { UiIcon } from "@/components/UiIcon";
import type { PageHeroImageEntry } from "@/lib/site-images";

type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
};

type PagePeopleHeroProps = {
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
  lead: string;
  image: PageHeroImageEntry;
  actions?: HeroAction[];
  highlights?: string[];
};

export function PagePeopleHero({
  breadcrumbs,
  title,
  lead,
  image,
  actions,
  highlights,
}: PagePeopleHeroProps) {
  return (
    <section className="page-people-hero">
      <div className="page-people-hero-bg">
        <img
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1288}
          loading="eager"
          fetchPriority="high"
        />
        <span className="page-people-hero-shade" aria-hidden="true" />
      </div>

      <div className="section page-people-hero-content">
        <div className="page-people-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="breadcrumb-item">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link prefetch={false} href={crumb.href}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1>{title}</h1>
          <p className="page-people-hero-lead">{lead}</p>

          {actions && actions.length > 0 ? (
            <div className="stitch-actions">
              {actions.map((action) => {
                const className =
                  action.variant === "primary"
                    ? "button button-primary"
                    : "button button-secondary";
                const isAnchorOrExternal =
                  action.external || action.href.startsWith("#");

                if (isAnchorOrExternal) {
                  return (
                    <a
                      key={action.label}
                      className={className}
                      href={action.href}
                      {...(action.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {action.label}
                      {action.variant === "primary" ? <UiIcon name="arrow" /> : null}
                    </a>
                  );
                }

                return (
                  <Link prefetch={false} key={action.label} className={className} href={action.href}>
                    {action.label}
                    {action.variant === "primary" ? <UiIcon name="arrow" /> : null}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      {highlights && highlights.length > 0 ? (
        <div className="page-people-hero-bar">
          <ul className="section page-people-hero-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
