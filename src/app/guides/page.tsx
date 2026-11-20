import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { guides, type GuideCategory } from "@/data/guides";
import { getGuideReadingStats } from "@/lib/guide-metrics";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { GuideVisualCover } from "@/components/GuideVisualCover";
import { guideImages, pageHeroImages } from "@/lib/site-images";
import { ConversionBand } from "@/components/PageSections";
import { RichText } from "@/components/RichText";
import { UiIcon } from "@/components/UiIcon";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "Website, SEO & Cyber Security Guides SA | SoftKore Digital",
  "39 practical South African guides on website & SEO prices, Google indexing fixes, hacked site recovery, POPIA compliance and safe redesigns.",
  "/guides/",
);

const pillarGroups: Array<{
  id: string;
  category: GuideCategory;
  eyebrow: string;
  heading: string;
  summary: string;
}> = [
  {
    id: "websites",
    category: "Website Design & Development",
    eyebrow: "Pillar 01",
    heading: "Website Design & Development",
    summary:
      "Pricing brackets, ecommerce platforms, payment gateways, domain choices, hosting and conversion-focused page structure.",
  },
  {
    id: "seo",
    category: "SEO Services",
    eyebrow: "Pillar 02",
    heading: "SEO Services & Google Visibility",
    summary:
      "Fixing indexing blockers, Search Console workflows, local vs national strategy, copywriting, speed and realistic SEO budgets.",
  },
  {
    id: "security",
    category: "Website & Cyber Security",
    eyebrow: "Pillar 03",
    heading: "Website & Cyber Security",
    summary:
      "Hacked site clean-ups, Safe Browsing recovery, SPF/DKIM/DMARC, SSL, firewalls, POPIA checks and domain protection.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Guides", url: absoluteUrl("/guides/") }])} />
      <main>
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
          kicker="South African guides"
          title="Website, SEO and security guides for South African businesses."
          lead="Plain-language answers on what websites cost, why sites do not rank on Google and how to protect your website against attacks."
          image={pageHeroImages.guides}
          actions={[
            { label: "Start a Project", href: "/contact/", variant: "primary" },
            { label: "View Services", href: "/services/", variant: "secondary" },
          ]}
          highlights={[
            "Website & SEO pricing ranges (ZAR)",
            "Google indexing & ranking fixes",
            "Hacked site recovery & security",
            "POPIA & redesign checklists",
          ]}
        />

        <section className="section" style={{ paddingTop: "clamp(36px, 4vw, 56px)" }} aria-label="Guide categories">
          <div className="area-list">
            {pillarGroups.map((group) => {
              const count = guides.filter((guide) => guide.category === group.category).length;
              return (
                <a href={`#${group.id}`} key={group.id}>
                  {group.heading} ({count} guides)
                </a>
              );
            })}
          </div>
        </section>

        {pillarGroups.map((group) => {
          const items = guides.filter((guide) => guide.category === group.category);
          return (
            <section
              key={group.id}
              id={group.id}
              className="section"
              style={{ paddingTop: "clamp(48px, 6vw, 84px)" }}
            >
              <div style={{ marginBottom: "28px" }}>
                <p className="stitch-kicker">{group.eyebrow}</p>
                <h2
                  style={{
                    margin: "0 0 8px",
                    color: "#08111F",
                    fontSize: "clamp(1.85rem, 3.2vw, 2.85rem)",
                    fontWeight: 560,
                    letterSpacing: "-0.045em",
                  }}
                >
                  {group.heading} ({items.length})
                </h2>
                <p style={{ margin: 0, color: "#3D4A5C", maxWidth: "680px", lineHeight: 1.65 }}>
                  {group.summary}
                </p>
              </div>
              <div className="guides-card-grid">
                {items.map((guide, index) => {
                  const stats = getGuideReadingStats(guide);
                  const image = guideImages[guide.slug];
                  const updatedLabel = new Date(guide.updated).toLocaleDateString("en-ZA", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  });

                  return (
                    <Link prefetch={false} href={`/guides/${guide.slug}/`} key={guide.slug} className="guides-card">
                      <div className="guides-card-media">
                        {image ? (
                          <img src={image.src} alt={image.alt} width={1536} height={1024} loading="lazy" />
                        ) : (
                          <GuideVisualCover slug={guide.slug} category={guide.category} title={guide.title} compact />
                        )}
                        <span className="guides-card-index">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="guides-card-body">
                        <div className="guide-card-meta">
                          <span className="guide-card-readtime">{stats.label}</span>
                          <span className="guide-card-date">Updated {updatedLabel}</span>
                        </div>
                        <h3>{guide.title}</h3>
                        <p>
                          <RichText text={guide.intro} />
                        </p>
                        <strong>
                          Read guide <UiIcon name="arrow" />
                        </strong>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        <ConversionBand title="Would you rather have someone handle this?" text="We can apply these SEO and security checks to your website and tell you what to fix first." primaryLabel="Start a Project" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
