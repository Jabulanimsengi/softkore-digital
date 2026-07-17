import Link from "next/link";
import type { AiAgentIndustryPage } from "@/data/ai-agents";
import { CardGrid, ConversionBand, DeepDive, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function AiAgentTemplate({ page }: { page: AiAgentIndustryPage }) {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link><span>/</span>
              <Link prefetch={false} href="/ai-agents/">AI agents</Link><span>/</span>
              <span>{page.name}</span>
            </nav>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">Plan an AI agent</Link>
              <Link prefetch={false} className="button button-secondary" href="/ai-agents/">View workflows</Link>
            </div>
          </div>
          <aside className="page-summary page-summary-media">
            <div className="page-code-visual page-code-visual-ai" aria-hidden="true"><span /><span /><span /><i /></div>
            <strong>{page.category}</strong>
            <ul>{page.summary.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section simple-detail">
        <div>
          <p className="simple-label">Start with one useful workflow</p>
          <h2>Where an agent can help first.</h2>
          <p>{page.operatingReality}</p>
          <p>{page.adoptionFocus}</p>
        </div>
        <div className="simple-detail-cards"><CardGrid items={page.agentIdeas.slice(0, 3)} /></div>
      </section>

      <section className="section simple-feature-row">
        <div><p className="simple-label">Practical workflows</p><h2>Small handoffs, handled better.</h2></div>
        <div className="local-insight-grid"><CardGrid items={page.workflowExamples.slice(0, 3)} /></div>
      </section>

      <DeepDive label="How we introduce AI carefully" summary="Adoption, safeguards, related planning and common questions">
        <section className="deep-dive-section">
          <div className="content-grid">
            <div className="content-copy"><h2>Keep the team in control</h2><p>The first version should be narrow, useful and easy to supervise.</p></div>
            <ProofList items={page.adoptionSteps} />
          </div>
        </section>
        <section className="deep-dive-section"><h2>Guardrails</h2><div className="local-insight-grid"><CardGrid items={page.safeguards} /></div></section>
        <section className="deep-dive-section"><h2>Related planning</h2><LinkList items={page.related} /></section>
        <section className="deep-dive-section"><h2>Common questions</h2><FaqList items={page.faqs} /></section>
      </DeepDive>

      <ConversionBand
        title="Start with one workflow worth improving."
        text="We will map the handoff, define the guardrails and shape a focused agent your team can trust."
        primaryLabel="Plan an AI Agent"
        secondaryHref="/ai-agents/"
        secondaryLabel="Explore AI Workflows"
      />
    </main>
  );
}
