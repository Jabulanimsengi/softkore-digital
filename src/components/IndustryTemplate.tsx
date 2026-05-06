import Link from "next/link";
import { getAiAgentIndustry, aiAgentIndustryUrl } from "@/data/ai-agents";
import type { IndustryPage } from "@/data/industries";
import { CardGrid, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function IndustryTemplate({ industry }: { industry: IndustryPage }) {
  const aiAgentPage = getAiAgentIndustry(industry.slug);

  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/industries/">Industries</Link>
              <span>/</span>
              <span>{industry.name}</span>
            </nav>
            <h1>{industry.h1}</h1>
            <p>{industry.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                Discuss This Project
              </Link>
              <Link className="button button-secondary" href="/services/web-development/">
                View Services
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>{industry.category}</strong>
            <ul>
              {industry.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section content-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>Built around how this market wins customers.</h2>
            <p>
              SoftKore Digital supports {industry.audience}. In this market,{" "}
              {industry.challenge}.
            </p>
            <p>We recommend {industry.solution}.</p>
          </div>
          <div className="content-panel">
            <CardGrid items={industry.opportunities} />
          </div>
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="section-heading">
          <h2>Useful Features for {industry.name}</h2>
          <p className="section-intro">
            The strongest industry pages connect the business model, customer
            journey, operational workflow, and SEO opportunity.
          </p>
        </div>
        <div className="local-insight-grid">
          <CardGrid items={industry.features} />
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>Where We Focus First</h2>
            <p>
              We start with the pages, workflows, and trust signals most likely
              to turn serious visitors into enquiries. After that, the site can
              grow into selected locations, guides, integrations, or dashboards.
            </p>
          </div>
          <ProofList items={industry.proof} />
        </div>
      </section>

      <section className="section areas-section">
        <h2>Related Services</h2>
        <LinkList
          items={[
            ...(aiAgentPage
              ? [{ label: aiAgentPage.name, href: aiAgentIndustryUrl(aiAgentPage) }]
              : []),
            ...industry.related,
          ]}
        />
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <FaqList items={industry.faqs} />
      </section>
    </main>
  );
}
