import Link from "next/link";
import type { Metadata } from "next";
import { aiAgentIndustryPages, aiAgentIndustryUrl } from "@/data/ai-agents";
import { LinkList } from "@/components/PageSections";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Agents for Business Workflows | SoftKore Digital",
  description:
    "AI agent planning for South African businesses that want safer automation across enquiries, admin, handovers, and customer support.",
  alternates: {
    canonical: "/ai-agents/",
  },
};

export default function AiAgentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "AI Agents", url: absoluteUrl("/ai-agents/") },
        ])}
      />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>AI Agents</span>
              </nav>
              <h1>AI Agents for the Work Your Team Repeats Every Day</h1>
              <p>
                We help businesses introduce AI agents into real workflows:
                enquiries, intake, reminders, document requests, customer
                updates, and staff handovers.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/#contact">
                  Plan an AI Agent
                </Link>
                <Link className="button button-secondary" href="/industries/">
                  View Industries
                </Link>
              </div>
            </div>
            <aside className="page-summary">
              <strong>Built for adoption</strong>
              <ul>
                <li>Start with one workflow</li>
                <li>Keep staff in control</li>
                <li>Use approved answers</li>
                <li>Connect systems carefully</li>
                <li>Improve from real usage</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section areas-section">
          <h2>Industry Starting Points</h2>
          <p className="section-intro">
            Each industry has different risks, customer questions, and internal
            handoffs. These pages show where an agent can help first.
          </p>
          <LinkList
            items={aiAgentIndustryPages.map((page) => ({
              label: page.name,
              href: aiAgentIndustryUrl(page),
            }))}
          />
        </section>

        <section className="section content-section">
          <div className="content-grid">
            <div className="content-copy">
              <h2>We do not start with a chatbot</h2>
              <p>
                We start by mapping the work: what customers ask, what staff
                need to check, what must be approved, and where the handoff
                currently slows down.
              </p>
              <p>
                From there we design a narrow first agent that can be tested,
                reviewed, and improved before it touches more of the business.
              </p>
            </div>
            <div className="content-panel">
              <article className="content-card">
                <h3>Controlled answers</h3>
                <p>
                  The agent uses approved business information instead of
                  guessing its way through customer questions.
                </p>
              </article>
              <article className="content-card">
                <h3>Human approval</h3>
                <p>
                  Sensitive decisions, commitments, and professional judgement
                  stay with your team.
                </p>
              </article>
              <article className="content-card">
                <h3>Useful integrations</h3>
                <p>
                  When the workflow is ready, the agent can connect to forms,
                  inboxes, CRMs, calendars, catalogues, or internal dashboards.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
