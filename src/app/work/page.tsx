import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work and Results",
  description:
    "Recent SoftKore Digital improvements across SEO recovery, local service page systems, static deployment, and conversion-focused website UX.",
  alternates: {
    canonical: "/work/",
  },
};

function CaseStudyDiagram({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <div className="case-study-diagram" aria-hidden="true">
      <div className="case-diagram-top">
        <span>SK-{String(index + 1).padStart(2, "0")}</span>
        <strong>{study.category}</strong>
      </div>
      <div className="case-diagram-canvas">
        <i className="case-node case-node-main">SK</i>
        <i className="case-node case-node-a">{study.signals[0]}</i>
        <i className="case-node case-node-b">{study.signals[1]}</i>
        <i className="case-node case-node-c">{study.signals[2]}</i>
        <span className="case-line case-line-a" />
        <span className="case-line case-line-b" />
        <span className="case-line case-line-c" />
      </div>
      <div className="case-diagram-footer">
        {study.signals.map((signal) => (
          <span key={signal}>{signal}</span>
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Work", url: absoluteUrl("/work/") },
        ])}
      />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link prefetch={false} href="/">Home</Link>
                <span>/</span>
                <span>Work</span>
              </nav>
              <h1>Practical Website, SEO and UX Improvements</h1>
              <p>
                Premium digital work is not just a nicer screen. It is the
                structure behind the screen: clearer offers, stronger search
                paths, safer releases, and workflows that keep working after
                launch.
              </p>
              <div className="hero-actions">
                <Link prefetch={false} className="button button-primary" href="/contact/">
                  Request a Review
                </Link>
                <Link prefetch={false} className="button button-secondary" href="/services/">
                  View Services
                </Link>
              </div>
            </div>
            <aside className="page-summary page-summary-media">
              <PageHeroImage imageKey="work" />
              <strong>What the work has to prove</strong>
              <ul>
                <li>Clearer business offer</li>
                <li>Better page architecture</li>
                <li>Stronger enquiry paths</li>
                <li>Safer deployment checks</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section work-section premium-work-section">
          <div className="section-heading">
            <h2>Selected case patterns</h2>
            <p>
              These are representative patterns we can repeat for businesses
              that need a stronger digital foundation without a bloated rebuild.
            </p>
          </div>
          <div className="case-study-list">
            {caseStudies.map((study, index) => (
              <article className="case-study-card" key={study.title}>
                <div className="case-study-copy">
                  <span className="case-study-kicker">{study.category}</span>
                  <h3>{study.title}</h3>
                  <dl>
                    <div>
                      <dt>Problem</dt>
                      <dd>{study.challenge}</dd>
                    </div>
                    <div>
                      <dt>Softkore move</dt>
                      <dd>{study.intervention}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{study.outcome}</dd>
                    </div>
                  </dl>
                </div>
                <CaseStudyDiagram study={study} index={index} />
              </article>
            ))}
          </div>
        </section>

        <section className="section premium-proof-panel">
          <div>
            <h2>What makes the work feel premium?</h2>
            <p>
              It is the discipline: sharp first-screen messaging, fewer generic
              sections, real proof modules, structured search pages, and a site
              that can be improved without starting again.
            </p>
          </div>
          <ul>
            <li>Evidence before decoration</li>
            <li>Mobile-first conversion paths</li>
            <li>Search architecture built into the page system</li>
            <li>Deployment and care treated as part of the product</li>
          </ul>
        </section>
      </main>
    </>
  );
}
