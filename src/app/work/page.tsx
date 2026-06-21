import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work and Results",
  description:
    "Recent SoftKore Digital improvements across SEO recovery, local service page systems, static deployment, and conversion-focused website UX.",
  alternates: {
    canonical: "/work/",
  },
};

const workItems = [
  {
    title: "SEO recovery foundation",
    text: "Cleaned URL structures, rebuilt sitemap coverage, protected old URLs with redirects, and submitted refreshed URLs for faster discovery.",
  },
  {
    title: "Local service page system",
    text: "Structured service and location templates so priority pages can scale without becoming repeated, low-value SEO content.",
  },
  {
    title: "Static deployment workflow",
    text: "Built a repeatable export, validation, redirect, Nginx reload, and IndexNow submission flow for safer production releases.",
  },
  {
    title: "Conversion-focused UI refresh",
    text: "Balanced dark blue authority, white readability, and orange action states so key CTAs and summaries are clearer.",
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Work", url: absoluteUrl("/work/") },
        ])}
      />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link prefetch={false} href="/">Home</Link>
                <span>/</span>
                <span>Work</span>
              </nav>
              <h1>Practical Website, SEO and UX Improvements</h1>
              <p>
                Our work focuses on the pieces that make a site easier to trust,
                easier to use, easier to maintain, and easier for search engines
                to understand.
              </p>
              <div className="hero-actions">
                <Link prefetch={false} className="button button-primary" href="/contact/">
                  Request a Review
                </Link>
                <Link prefetch={false} className="button button-secondary" href="/services/">
                  View Services
                </Link>
              </div>
            </div>
            <aside className="page-summary page-summary-media">
              <PageHeroImage imageKey="work" />
              <strong>Recent focus</strong>
              <ul>
                <li>Cleaner URLs</li>
                <li>Better page coverage</li>
                <li>Stronger conversion paths</li>
                <li>Safer deployment checks</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section work-section">
          <div className="section-heading">
            <h2>What We Improve</h2>
            <p>
              These are the kinds of improvements we can repeat for businesses
              that need a stronger digital foundation.
            </p>
          </div>
          <div className="case-grid">
            {workItems.map((item) => (
              <article className="case-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
