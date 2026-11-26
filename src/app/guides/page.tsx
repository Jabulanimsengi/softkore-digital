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
  "Practical South African guides on website and SEO prices, getting your pages onto Google, recovering a hacked site, POPIA and what works in your industry.",
  "/guides/",
  pageHeroImages.guides.src,
);

const pillarGroups: Array<{
  id: string;
  category: GuideCategory;
  heading: string;
  summary: string;
}> = [
  {
    id: "websites",
    category: "Website Design & Development",
    heading: "Website Design & Development",
    summary:
      "What websites cost, online store options, payment providers, choosing a domain and hosting, and pages that turn visitors into enquiries.",
  },
  {
    id: "seo",
    category: "SEO Services",
    heading: "SEO Services & Google Visibility",
    summary:
      "Getting your pages onto Google, using Google Search Console, local vs national SEO, writing pages that rank, speed and realistic SEO budgets.",
  },
  {
    id: "security",
    category: "Website & Cyber Security",
    heading: "Website & Cyber Security",
    summary:
      "Cleaning up a hacked site, removing Google's security warnings, stopping fake emails in your name, the padlock, firewalls, POPIA and protecting your domain.",
  },
  {
    id: "industries",
    category: "Industry Playbooks",
    heading: "Industry Playbooks",
    summary:
      "The pages your customers look for, local and national SEO, budgets in rand and the security each South African industry needs.",
  },
];

const guidesFaqs = [
  {
    question: "Who are SoftKore Digital's website, SEO and industry guides written for?",
    answer:
      "They are written for South African business owners, practice managers and marketing teams. That includes anyone comparing website quotes in rand, trying to work out why their pages have dropped out of Google, or making sure their website protects customer information under POPIA.",
  },
  {
    question: "How realistic are the ZAR website and SEO price ranges in these guides?",
    answer:
      "They are typical South African price ranges for simple company websites, service websites, online stores and monthly maintenance, based on how projects like these are usually scoped. Your own quote depends on your needs. See our [website prices guide](/guides/website-prices-south-africa/) and [SEO prices guide](/guides/seo-prices-south-africa/).",
  },
  {
    question: "Can our internal developer or agency follow your technical checklists?",
    answer:
      "Yes. Every checklist, from [technical SEO](/guides/technical-seo-checklist/) and [browser security settings (HTTP security headers)](/guides/http-security-headers-explained/) to our industry playbooks, is written step by step, so your own developer or current agency can check each item and put it in place without needing us.",
  },
  {
    question: "When should we request a Free SEO Audit instead of fixing issues ourselves?",
    answer:
      "Request a [free SEO audit](/contact/?service=free-seo-audit#contact-form) if Google Search Console shows more and more of your pages left out of Google, your traffic dropped suddenly after a redesign, or you suspect a security problem. The audit finds the real cause first, so you don't spend money fixing the wrong thing.",
  },
  {
    question: "How often are SoftKore guides and industry playbooks updated?",
    answer:
      "We update our guides whenever something important changes, such as South African payment providers, how Google decides which pages to show, POPIA guidance or the way hackers are attacking websites. Each guide shows the date it was last updated, and we add new industry playbooks regularly.",
  },
  {
    question: "Can you write a guide or audit plan for a specific South African industry?",
    answer:
      "Yes. Send us your industry and website address through our [contact form](/contact/) and we will prepare recommendations for your type of business: which pages turn visitors into enquiries, what your customers actually search for, and the security your site needs.",
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
          title="Website, SEO and security guides for South African businesses."
          lead="Plain-language answers on what websites cost, why sites do not rank on Google and how to protect your website against attacks."
          image={pageHeroImages.guides}
          actions={[
            { label: "Get a Free SEO Audit", href: "/contact/?service=free-seo-audit#contact-form", variant: "primary" },
            { label: "Start a Project", href: "/contact/", variant: "secondary" },
          ]}
          highlights={[
            "Website & SEO pricing ranges (ZAR)",
            "Getting found on Google",
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

            <h2>Questions about using our South African playbooks.</h2>
            <p>How to use these checklists, price guides and industry playbooks on your own business website.</p>
          </div>
          <FaqList items={guidesFaqs} />
        </section>

        <ConversionBand title="Would you rather have someone handle this?" text="Request a free SEO audit and we can apply these SEO and security checks to your website and tell you what to fix first." primaryHref="/contact/?service=free-seo-audit#contact-form" primaryLabel="Get a Free SEO Audit" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
