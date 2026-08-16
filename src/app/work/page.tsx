import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { caseStudies } from "@/data/case-studies";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected SoftKore Digital work across customer journeys, search foundations, and business systems.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Work", url: absoluteUrl("/work/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Work</span></nav>
              <h1>Digital work that creates real business movement.</h1>
              <p>Clearer customer journeys, stronger search foundations and systems that make daily work easier.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Start a project</Link><Link prefetch={false} className="button button-secondary" href="/services/">Explore solutions</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="work" /><strong>What matters</strong><ul><li>A clearer offer</li><li>An easier next step</li><li>Less operational friction</li><li>Room to keep improving</li></ul></aside>
          </div>
        </section>

        <section className="work-showcase">
          <div className="section visual-work-list">
            {caseStudies.map((study, index) => (
              <article key={study.title}>
                <figure><img src={study.image} alt={study.imageAlt} width={1536} height={1024} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></figure>
                <div><p className="simple-label">{study.category}</p><h2>{study.title}</h2><dl><div><dt>The challenge</dt><dd>{study.challenge}</dd></div><div><dt>The move</dt><dd>{study.intervention}</dd></div><div><dt>The outcome</dt><dd>{study.outcome}</dd></div></dl></div>
              </article>
            ))}
          </div>
        </section>

        <ConversionBand title="What should move better in your business?" text="Bring us the customer journey, search challenge or internal workflow." primaryLabel="Start a Project" secondaryHref="/services/" secondaryLabel="Explore Solutions" />
      </main>
    </>
  );
}
