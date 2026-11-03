import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import type { GuidePage } from "@/data/guides";
import { guideImages } from "@/lib/site-images";
import { ConversionBand, FaqList, LinkList } from "@/components/PageSections";

export function GuideTemplate({ guide }: { guide: GuidePage }) {
  const image = guideImages[guide.slug];
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link><span>/</span>
              <Link prefetch={false} href="/guides/">Guides</Link><span>/</span>
              <span>{guide.title}</span>
            </nav>
            <h1>{guide.title}</h1>
            <p>{guide.intro}</p>
            <p className="simple-label">Last updated <time dateTime={guide.updated}>{new Date(guide.updated).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">Ask about this</Link>
              <Link prefetch={false} className="button button-secondary" href="/guides/">All guides</Link>
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

      <section className="section solution-support-grid">
        <div><p className="stitch-kicker">Related pages</p><h2>Where to go next.</h2><LinkList items={guide.related} /></div>
        <div><p className="stitch-kicker">Common questions</p><h2>Quick answers.</h2><FaqList items={guide.faqs} /></div>
      </section>

      <ConversionBand
        title="Would you like help with this?"
        text="We work with businesses across South Africa and can apply this to your website, search visibility or business system."
        primaryLabel="Discuss Your Project"
        secondaryHref="/services/"
        secondaryLabel="View Services"
      />
    </main>
  );
}
