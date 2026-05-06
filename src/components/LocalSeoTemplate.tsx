import Link from "next/link";
import type { LocalSeoPage } from "@/data/local-seo";
import { getService } from "@/data/services";
import { CardGrid, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function LocalSeoTemplate({ page }: { page: LocalSeoPage }) {
  const service = getService(page.serviceSlug);

  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={`/services/${page.serviceSlug}/`}>
                {service?.eyebrow || "Service"}
              </Link>
              <span>/</span>
              {page.areaSlug ? (
                <>
                  <Link href={`/services/${page.serviceSlug}/${page.regionSlug}/`}>
                    {page.regionName}
                  </Link>
                  <span>/</span>
                  <span>{page.areaName}</span>
                </>
              ) : (
                <span>{page.regionName}</span>
              )}
            </nav>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                Start a Project
              </Link>
              <Link className="button button-secondary" href={`/services/${page.serviceSlug}/`}>
                View Core Service
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>{page.areaName || page.regionName} focus</strong>
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
            <h2>
              A focused {service?.title.toLowerCase() || "digital"} approach for{" "}
              {page.areaName || page.regionName}.
            </h2>
            {page.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="content-panel">
            <CardGrid items={page.insights} />
          </div>
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>What We Prioritize</h2>
            <p>
              This page is part of a selective local SEO rollout. The goal is
              to build fewer, stronger pages that help customers choose, rather
              than many repeated location pages.
            </p>
          </div>
          <ProofList items={page.proof} />
        </div>
      </section>

      <section className="section areas-section">
        <h2>Related Pages</h2>
        <LinkList items={page.related} />
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <FaqList items={page.faqs} />
      </section>
    </main>
  );
}
