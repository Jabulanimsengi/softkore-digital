import Link from "next/link";
import type { GuidePage } from "@/data/guides";
import { FaqList, LinkList } from "@/components/PageSections";

export function GuideTemplate({ guide }: { guide: GuidePage }) {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/guides/">Guides</Link>
              <span>/</span>
              <span>{guide.title}</span>
            </nav>
            <h1>{guide.title}</h1>
            <p>{guide.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                Ask About This
              </Link>
              <Link className="button button-secondary" href="/services/seo-services/">
                View SEO Services
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>Guide covers</strong>
            <ul>
              {guide.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {guide.sections.map((section, index) => (
        <section className="section content-section" key={section.title}>
          <div className="content-grid">
            <div className="content-copy">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="content-panel">
              <article className="content-card">
                <h3>{String(index + 1).padStart(2, "0")}</h3>
                <p>
                  Use this section as a practical checkpoint before planning
                  the next page, redirect, or technical improvement.
                </p>
              </article>
            </div>
          </div>
        </section>
      ))}

      <section className="section areas-section">
        <h2>Related Reading and Services</h2>
        <LinkList items={guide.related} />
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <FaqList items={guide.faqs} />
      </section>
    </main>
  );
}
