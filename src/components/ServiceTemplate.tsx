import Link from "next/link";
import type { ServicePage } from "@/data/services";
import { CardGrid, FaqList, LinkList, ProofList } from "@/components/PageSections";

export function ServiceTemplate({ service }: { service: ServicePage }) {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>{service.eyebrow}</span>
            </nav>
            <h1>{service.h1}</h1>
            <p>{service.intro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                {service.primaryCta}
              </Link>
              <Link className="button button-secondary" href={service.secondaryHref}>
                {service.secondaryCta}
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>{service.summaryTitle}</strong>
            <ul>
              {service.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section content-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>{service.bodyHeading}</h2>
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="content-list">
              {service.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="content-panel">
            <CardGrid items={service.cards} />
          </div>
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="section-heading">
          <h2>{service.featureTitle}</h2>
          <p className="section-intro">{service.featureIntro}</p>
        </div>
        <div className="local-insight-grid">
          <CardGrid items={service.features} />
        </div>
      </section>

      <section className="section local-proof-section">
        <div className="content-grid">
          <div className="content-copy">
            <h2>{service.processTitle}</h2>
            {service.processBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ProofList items={service.processItems} />
        </div>
      </section>

      <section className="section areas-section">
        <h2>Related Services</h2>
        <LinkList items={service.related} />
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <h2>{service.title} FAQs</h2>
        </div>
        <FaqList items={service.faqs} />
      </section>

      <section className="section final-cta" id="contact">
        <div className="final-panel">
          <div>
            <h2>Ready to plan the next version?</h2>
            <p>
              SoftKore Digital can help you turn the current website into a
              cleaner, faster, and easier-to-grow digital foundation.
            </p>
            <a className="contact-line" href="mailto:info@softkoredigital.co.za">
              info@softkoredigital.co.za
            </a>
          </div>
          <div className="final-actions">
            <a className="button button-primary" href="mailto:info@softkoredigital.co.za">
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
