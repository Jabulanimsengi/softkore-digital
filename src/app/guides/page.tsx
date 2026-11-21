import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { guides, type GuideCategory } from "@/data/guides";
import { getGuideReadingStats } from "@/lib/guide-metrics";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { GuideVisualCover } from "@/components/GuideVisualCover";
import { guideImages, pageHeroImages } from "@/lib/site-images";
import { ConversionBand, FaqList } from "@/components/PageSections";
import { RichText } from "@/components/RichText";
import { UiIcon } from "@/components/UiIcon";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "Website, SEO & Cyber Security Guides SA | SoftKore Digital",
  "Practical South African guides and industry playbooks on website & SEO prices, Google indexing fixes, hacked site recovery, POPIA compliance and vertical SEO.",
  "/guides/",
  pageHeroImages.guides.src,
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
  {
    id: "industries",
    category: "Industry Playbooks",
    eyebrow: "Pillar 04",
    heading: "Industry Playbooks",
    summary:
      "Search-intent website architecture, local & national SEO strategies, ZAR budgets and security safeguards tailored to South African sectors.",
  },
];

const guidesFaqs = [
  {
    question: "Who are SoftKore Digital's website, SEO and industry guides written for?",
    answer:
      "They are written for South African business owners, practice managers and marketing teams comparing quotes in rand, diagnosing Google indexing drops or securing websites under POPIA.",
  },
  {
    question: "How realistic are the ZAR website and SEO price ranges in these guides?",
    answer:
      "Every budget table reflects active South African supplier scoping across brochure builds, service websites, ecommerce stores and monthly maintenance—see our [website prices guide](/guides/website-prices-south-africa/) and [SEO prices guide](/guides/seo-prices-south-africa/).",
  },
  {
    question: "Can our internal developer or agency follow your technical checklists?",
    answer:
      "Yes. All checklists—from [technical SEO](/guides/technical-seo-checklist/) and [HTTP security headers](/guides/http-security-headers-explained/) to industry playbooks—are written so internal developers or existing agencies can verify and ship every step.",
  },
  {
    question: "When should we request a Free SEO Audit instead of fixing issues ourselves?",
    answer:
      "Request a [free SEO audit](/contact/?service=free-seo-audit#contact-form) if Search Console shows rising unindexed URLs, sudden post-redesign traffic drops or suspect site security so you pinpoint the real root cause first.",
  },
  {
    question: "How often are SoftKore guides and industry playbooks updated?",
    answer:
      "We update existing guides whenever South African payment gateways, Google indexing policies, POPIA guidance or security threat patterns change, and expand our industry playbook library regularly.",
  },
  {
    question: "Can you write a guide or audit plan for a specific South African industry?",
    answer:
      "Yes. Share your industry and website URL on our [contact form](/contact/) and we will prepare sector-specific recommendations covering conversion structure, search intent keywords and security.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Guides", url: absoluteUrl("/guides/") }])} />
      <JsonLd data={faqSchema(guidesFaqs)} />
      <main>
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
          kicker="South African guides"
          title="Website, SEO and security guides for South African businesses."
          lead="Plain-language answers on what websites cost, why sites do not rank on Google and how to protect your website against attacks."
          image={pageHeroImages.guides}
          actions={[
            { label: "Get a Free SEO Audit", href: "/contact/?service=free-seo-audit#contact-form", variant: "primary" },
            { label: "Start a Project", href: "/contact/", variant: "secondary" },
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

        <section className="section page-faq-section" aria-label="Guides frequently asked questions">
          <div className="page-faq-head">
            <p className="stitch-kicker">About these guides</p>
            <h2>Questions about using our South African playbooks.</h2>
            <p>How to apply these checklists, pricing guides and sector strategies to your own business website.</p>
          </div>
          <FaqList items={guidesFaqs} />
        </section>

        <ConversionBand title="Would you rather have someone handle this?" text="Request a free SEO audit and we can apply these SEO and security checks to your website and tell you what to fix first." primaryHref="/contact/?service=free-seo-audit#contact-form" primaryLabel="Get a Free SEO Audit" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
