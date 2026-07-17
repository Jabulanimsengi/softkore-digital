import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical website, SEO, maintenance and web application guidance for businesses planning their next digital move.",
  alternates: { canonical: "/guides/" },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Insights", url: absoluteUrl("/guides/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Insights</span></nav>
              <h1>Clear guidance for the next digital decision.</h1>
              <p>Practical thinking for websites, search, platforms and the systems behind a growing business.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Ask a question</Link><Link prefetch={false} className="button button-secondary" href="/services/">Explore solutions</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="guides" /><strong>Useful, not inflated</strong><ul><li>Planning</li><li>Costs and choices</li><li>Technical foundations</li><li>Practical next steps</li></ul></aside>
          </div>
        </section>

        <section className="section editorial-directory">
          {guides.map((guide, index) => (
            <Link prefetch={false} href={'/guides/' + guide.slug + '/'} key={guide.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span><div><h2>{guide.title}</h2><p>{guide.intro}</p></div><strong>Read -&gt;</strong>
            </Link>
          ))}
        </section>

        <ConversionBand title="Turn the research into a useful next move." text="We can apply the right guidance to your website, search strategy or business system." primaryLabel="Start a Conversation" secondaryHref="/services/" secondaryLabel="Explore Solutions" />
      </main>
    </>
  );
}
