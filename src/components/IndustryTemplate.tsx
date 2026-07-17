import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { getAiAgentIndustry, aiAgentIndustryUrl } from "@/data/ai-agents";
import type { IndustryPage } from "@/data/industries";
import { industryImages } from "@/lib/site-images";
import { CardGrid, ConversionBand, DeepDive, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function IndustryTemplate({ industry }: { industry: IndustryPage }) {
  const aiAgentPage = getAiAgentIndustry(industry.slug);
  const image = industryImages[industry.slug];
  const related = [
    ...(aiAgentPage ? [{ label: aiAgentPage.name, href: aiAgentIndustryUrl(aiAgentPage) }] : []),
    ...industry.related,
  ];

  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link><span>/</span>
              <Link prefetch={false} href="/industries/">Industries</Link><span>/</span>
              <span>{industry.name}</span>
            </nav>
            <h1>{industry.h1}</h1>
            <p>{industry.intro}</p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">Discuss this project</Link>
              <Link prefetch={false} className="button button-secondary" href="/services/">View solutions</Link>
            </div>
          </div>
          <aside className="page-summary page-summary-media">
            <PageHeroImage image={image} priority />
            <strong>{industry.category}</strong>
            <ul>{industry.summary.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section simple-detail">
        <div>
          <p className="simple-label">Built around the business</p>
          <h2>How {industry.name.toLowerCase()} win customers.</h2>
          <p>We support {industry.audience}. {industry.challenge}.</p>
          <p>Our recommendation: {industry.solution}.</p>
        </div>
        <div className="simple-detail-cards"><CardGrid items={industry.opportunities.slice(0, 3)} /></div>
      </section>

      <section className="section simple-feature-row">
        <div><p className="simple-label">Useful starting points</p><h2>What the system can include.</h2></div>
        <div className="local-insight-grid"><CardGrid items={industry.features.slice(0, 3)} /></div>
      </section>

      <DeepDive label="More industry detail" summary="Priorities, related planning and common questions">
        <section className="deep-dive-section">
          <div className="content-grid">
            <div className="content-copy"><h2>Where we focus first</h2><p>We start with the pages, workflows and trust signals most likely to create useful business movement.</p></div>
            <ProofList items={industry.proof} />
          </div>
        </section>
        <section className="deep-dive-section"><h2>Related planning</h2><LinkList items={related} /></section>
        <section className="deep-dive-section"><h2>Common questions</h2><FaqList items={industry.faqs} /></section>
      </DeepDive>

      <ConversionBand
        title="Build around the way your business actually works."
        text="We will connect the customer journey, transaction and daily operation into one practical plan."
        primaryLabel="Discuss Your Business"
        secondaryHref="/services/"
        secondaryLabel="Explore Solutions"
      />
    </main>
  );
}
