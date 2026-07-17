import Link from "next/link";
import type { Metadata } from "next";
import { aiAgentIndustryPages, aiAgentIndustryUrl } from "@/data/ai-agents";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Agents for Business Workflows",
  description: "Focused AI agents for repetitive business workflows, with clear guardrails and staff in control.",
  alternates: { canonical: "/ai-agents/" },
};

export default function AiAgentsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "AI Agents", url: absoluteUrl("/ai-agents/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>AI agents</span></nav>
              <h1>Less repeated admin. More useful human attention.</h1>
              <p>We introduce focused AI agents into real workflows, carefully, clearly and with your team in control.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Plan an AI agent</Link><Link prefetch={false} className="button button-secondary" href="/work/">See our work</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="aiAgents" /><strong>Start narrow</strong><ul><li>One useful workflow</li><li>Approved information</li><li>Human oversight</li><li>Measured improvement</li></ul></aside>
          </div>
        </section>

        <section className="section simple-about-statement">
          <p className="simple-label">Our approach</p>
          <h2>We do not start with a chatbot. We start with the work your team repeats every day.</h2>
        </section>

        <section className="section compact-directory">
          {aiAgentIndustryPages.map((page, index) => (
            <Link prefetch={false} href={aiAgentIndustryUrl(page)} key={page.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span><div><p>{page.category}</p><h2>{page.name}</h2></div><strong>-&gt;</strong>
            </Link>
          ))}
        </section>

        <ConversionBand title="Choose one workflow and make it work better." text="We will map the handoff, define the boundaries and shape a focused first agent." primaryLabel="Plan an AI Agent" secondaryHref="/industries/" secondaryLabel="Explore Industries" />
      </main>
    </>
  );
}
