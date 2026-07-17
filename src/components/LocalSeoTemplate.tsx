import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import type { LocalSeoPage } from "@/data/local-seo";
import { getService } from "@/data/services";
import { localSeoImages, localSeoImageKey } from "@/lib/site-images";
import { CardGrid, ConversionBand, DeepDive, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function LocalSeoTemplate({ page }: { page: LocalSeoPage }) {
  const service = getService(page.serviceSlug);
  const place = page.areaName || page.regionName;
  const image = localSeoImages[localSeoImageKey(page.serviceSlug, page.regionSlug, page.areaSlug)];

  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link><span>/</span>
              <Link prefetch={false} href={'/services/' + page.serviceSlug + '/'}>{service?.eyebrow || "Solution"}</Link><span>/</span>
              <span>{place}</span>
            </nav>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">Start a project</Link>
              <Link prefetch={false} className="button button-secondary" href={'/services/' + page.serviceSlug + '/'}>View core solution</Link>
            </div>
          </div>
          <aside className="page-summary page-summary-media">
            {image ? <PageHeroImage image={image} /> : <div className="page-code-visual page-code-visual-local" aria-hidden="true"><span /><span /><span /><i /></div>}
            <strong>{place} focus</strong>
            <ul>{page.summary.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section simple-detail">
        <div>
          <p className="simple-label">Local relevance, clearly handled</p>
          <h2>A focused {service?.title.toLowerCase() || "digital"} approach for {place}.</h2>
          {page.context.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="simple-detail-cards"><CardGrid items={page.insights.slice(0, 3)} /></div>
      </section>

      <DeepDive label="More local detail" summary="Priorities, related pages and common questions">
        <section className="deep-dive-section">
          <div className="content-grid">
            <div className="content-copy"><h2>What we prioritize</h2><p>Fewer, stronger pages that help customers choose and connect naturally to the right solution.</p></div>
            <ProofList items={page.proof} />
          </div>
        </section>
        <section className="deep-dive-section"><h2>Related pages</h2><LinkList items={page.related} /></section>
        <section className="deep-dive-section"><h2>Common questions</h2><FaqList items={page.faqs} /></section>
      </DeepDive>

      <ConversionBand
        title={'Make the ' + place + ' opportunity easier to act on.'}
        text="We can tighten the offer, improve the trust signals and connect this page to the right customer journey."
        primaryLabel="Request a Page Review"
        secondaryHref={'/services/' + page.serviceSlug + '/'}
        secondaryLabel="View Core Solution"
      />
    </main>
  );
}
