import Link from "next/link";
import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { LinkList } from "@/components/PageSections";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Industry-specific websites, web applications, and SEO pages for South African healthcare, beauty, ecommerce, property, and legal businesses.",
  alternates: {
    canonical: "/industries/",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Industries", url: absoluteUrl("/industries/") },
        ])}
      />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Industries</span>
              </nav>
              <h1>Websites, Web Applications and SEO for Priority Industries</h1>
              <p>
                Different industries win customers in different ways. These
                pages focus on markets where a better website, application, or
                SEO plan can directly support enquiries and operations.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/#contact">
                  Discuss an Industry Page
                </Link>
                <Link className="button button-secondary" href="/services/web-development/">
                  View Services
                </Link>
              </div>
            </div>
            <aside className="page-summary">
              <strong>Current priority set</strong>
              <ul>
                {industries.map((industry) => (
                  <li key={industry.slug}>{industry.name}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section areas-section">
          <h2>Priority Industry Pages</h2>
          <p className="section-intro">
            We are starting with a small set of high-intent industry pages so
            each one can be useful, specific, and properly connected.
          </p>
          <LinkList
            items={industries.map((industry) => ({
              label: industry.name,
              href: `/industries/${industry.slug}/`,
            }))}
          />
        </section>

        <section className="section content-section">
          <div className="content-grid">
            <div className="content-copy">
              <h2>Why industry pages matter</h2>
              <p>
                A medical practice, salon, ecommerce store, law firm, and real
                estate agency do not persuade customers in the same way. Each
                market has different trust signals, workflows, search intent,
                and conversion paths.
              </p>
              <p>
                The goal is not to generate hundreds of pages. The goal is to
                build selected pages that explain the customer journey and point
                visitors toward the right service.
              </p>
            </div>
            <div className="content-panel">
              <article className="content-card">
                <h3>Sharper positioning</h3>
                <p>
                  Industry-specific pages make it easier for serious buyers to
                  see how the website or app fits their business model.
                </p>
              </article>
              <article className="content-card">
                <h3>Better internal links</h3>
                <p>
                  Industry pages connect naturally to web development, SEO,
                  custom applications, and priority local pages.
                </p>
              </article>
              <article className="content-card">
                <h3>Cleaner SEO rollout</h3>
                <p>
                  A small typed page set is easier to improve, measure, and
                  expand than a large duplicated static footprint.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
