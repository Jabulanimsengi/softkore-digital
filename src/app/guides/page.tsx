import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMetadata(
  "Website & SEO Guides South Africa | SoftKore Digital",
  "Practical guides for South African business owners on website prices, technical SEO, why sites do not rank, website maintenance and web applications.",
  "/guides/",
);

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Insights", url: absoluteUrl("/guides/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Insights</span></nav>
              <h1>Website and SEO guides for South African businesses.</h1>
              <p>Plain-language answers on what websites cost, why sites do not rank on Google and how to keep your website working.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Ask a question</Link><Link prefetch={false} className="button button-secondary" href="/services/">View services</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="guides" /><strong>What you will find</strong><ul><li>Website costs and choices</li><li>SEO and indexing checks</li><li>Maintenance checklists</li><li>Practical next steps</li></ul></aside>
          </div>
        </section>

        <section className="section editorial-directory">
          {guides.map((guide, index) => (
            <Link prefetch={false} href={'/guides/' + guide.slug + '/'} key={guide.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span><div><h2>{guide.title}</h2><p>{guide.intro}</p></div><strong>Read -&gt;</strong>
            </Link>
          ))}
        </section>

        <ConversionBand title="Would you rather have someone handle this?" text="We can apply these checks to your website and tell you what to fix first." primaryLabel="Start a Conversation" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
