import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import type { GuidePage } from "@/data/guides";
import { guideImages } from "@/lib/site-images";
import { ConversionBand, DeepDive, FaqList, LinkList } from "@/components/PageSections";

export function GuideTemplate({ guide }: { guide: GuidePage }) {
  const image = guideImages[guide.slug];
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link><span>/</span>
              <Link prefetch={false} href="/guides/">Insights</Link><span>/</span>
              <span>{guide.title}</span>
            </nav>
            <h1>{guide.title}</h1>
            <p>{guide.intro}</p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">Ask about this</Link>
              <Link prefetch={false} className="button button-secondary" href="/guides/">All insights</Link>
            </div>
          </div>
          <aside className="page-summary page-summary-media">
            <PageHeroImage image={image} />
            <strong>In this guide</strong>
            <ul>{guide.summary.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <article className="section simple-guide">
        {guide.sections.map((section, index) => (
          <section key={section.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>
        ))}
      </article>

      <DeepDive label="Related reading and questions" summary="Useful links and quick answers">
        <section className="deep-dive-section"><h2>Related reading</h2><LinkList items={guide.related} /></section>
        <section className="deep-dive-section"><h2>Common questions</h2><FaqList items={guide.faqs} /></section>
      </DeepDive>

      <ConversionBand
        title="Turn the guidance into a useful next move."
        text="We can apply this thinking to your website, search strategy, customer journey or internal workflow."
        primaryLabel="Discuss Your Project"
        secondaryHref="/services/"
        secondaryLabel="Explore Solutions"
      />
    </main>
  );
}
