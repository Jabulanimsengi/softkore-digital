import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { PageHeroImage } from "@/components/PageHeroImage";
import { LinkList } from "@/components/PageSections";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical website, SEO, maintenance, and web application guides for South African businesses planning better digital systems.",
  alternates: {
    canonical: "/guides/",
  },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Guides", url: absoluteUrl("/guides/") },
        ])}
      />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link prefetch={false} href="/">Home</Link>
                <span>/</span>
                <span>Guides</span>
              </nav>
              <h1>Website, SEO and Web Application Guides</h1>
              <p>
                Practical guides for South African businesses planning a
                website, improving search visibility, comparing platforms, or
                maintaining a healthier digital presence.
              </p>
              <div className="hero-actions">
                <Link prefetch={false} className="button button-primary" href="/contact/">
                  Start a Project
                </Link>
                <Link prefetch={false} className="button button-secondary" href="/services/seo-services/">
                  View SEO Services
                </Link>
              </div>
            </div>
            <aside className="page-summary page-summary-media">
              <PageHeroImage imageKey="guides" />
              <strong>Current guide library</strong>
              <ul>
                {guides.map((guide) => (
                  <li key={guide.slug}>{guide.title}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section areas-section">
          <h2>Latest Guides</h2>
          <p className="section-intro">
            Start with the guides that match the decision you are making now.
          </p>
          <LinkList
            items={guides.map((guide) => ({
              label: guide.title,
              href: `/guides/${guide.slug}/`,
            }))}
          />
        </section>
      </main>
    </>
  );
}

