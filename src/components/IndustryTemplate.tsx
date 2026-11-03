import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { getAiAgentIndustry, aiAgentIndustryUrl } from "@/data/ai-agents";
import type { IndustryPage } from "@/data/industries";
import { industryImages } from "@/lib/site-images";
import { CardGrid, ConversionBand, FaqList, LinkList, ProofList } from "@/components/PageSections";

function sentence(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

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
              <Link prefetch={false} className="button button-secondary" href="/services/">View services</Link>
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
          <p className="simple-label">How customers choose</p>
          <h2>What matters most in this industry.</h2>
          <p>{sentence(industry.challenge)}. A generic website rarely answers those questions well enough.</p>
          <p>We work with {industry.audience} across South Africa. For most businesses in this field, we recommend {industry.solution}.</p>
        </div>
        <div className="simple-detail-cards"><CardGrid items={industry.opportunities} /></div>
      </section>

      <section className="section simple-feature-row">
        <div><p className="simple-label">Useful features</p><h2>What your website or system can include.</h2></div>
        <div className="local-insight-grid"><CardGrid items={industry.features} /></div>
      </section>

      <section className="section">
        <div className="content-grid">
          <div className="content-copy"><h2>Where we focus first</h2><p>We start with the pages, workflows and trust signals your customers need before they contact you.</p></div>
          <ProofList items={industry.proof} />
        </div>
      </section>

      <section className="section solution-support-grid">
        <div><p className="stitch-kicker">Related pages</p><h2>Where to go next.</h2><LinkList items={related} /></div>
        <div><p className="stitch-kicker">Common questions</p><h2>Quick answers.</h2><FaqList items={industry.faqs} /></div>
      </section>

      <ConversionBand
        title="Tell us about your business."
        text="We work with businesses across South Africa and will give you a straight answer on what would help most."
        primaryLabel="Discuss Your Business"
        secondaryHref="/services/"
        secondaryLabel="View Services"
      />
    </main>
  );
}
