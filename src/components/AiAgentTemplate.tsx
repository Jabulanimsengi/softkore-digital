import Link from "next/link";
import type { AiAgentIndustryPage } from "@/data/ai-agents";
import { CardGrid, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function AiAgentTemplate({ page }: { page: AiAgentIndustryPage }) {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/ai-agents/">AI Agents</Link>
              <span>/</span>
              <span>{page.name}</span>
            </nav>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                Plan an AI Agent
              </Link>
              <Link className="button button-secondary" href="/ai-agents/">
                View Industries
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>{page.category}</strong>
            <ul>
              {page.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section content-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>Where an agent can help first</h2>
            <p>{page.operatingReality}</p>
            <p>{page.adoptionFocus}</p>
          </div>
          <div className="content-panel">
            <CardGrid items={page.agentIdeas} />
          </div>
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="section-heading">
          <h2>Practical Workflows</h2>
          <p className="section-intro">
            We design agents around the small handoffs that happen every day:
            enquiries, reminders, document requests, summaries, and approvals.
          </p>
        </div>
        <div className="local-insight-grid">
          <CardGrid items={page.workflowExamples} />
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>How we introduce it carefully</h2>
            <p>
              The first version should be narrow, useful, and easy for your
              team to supervise. Once the workflow is trusted, it can be
              connected to more systems and more customer touchpoints.
            </p>
          </div>
          <ProofList items={page.adoptionSteps} />
        </div>
      </section>

      <section className="section content-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>Guardrails matter</h2>
            <p>
              AI agents should not guess, overpromise, expose private data, or
              replace professional judgement. We build the boundaries before we
              build the conversation.
            </p>
          </div>
          <div className="content-panel">
            <CardGrid items={page.safeguards} />
          </div>
        </div>
      </section>

      <section className="section areas-section">
        <h2>Related Planning</h2>
        <LinkList items={page.related} />
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <h2>Common Questions</h2>
        </div>
        <FaqList items={page.faqs} />
      </section>
    </main>
  );
}
