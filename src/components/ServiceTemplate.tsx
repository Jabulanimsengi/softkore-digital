import Link from "next/link";
import type { ServicePage } from "@/data/services";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { ConversionBand, FaqList, LinkList } from "@/components/PageSections";

const featureIcons: UiIconName[] = ["workflow", "layers", "chart", "calendar", "code", "shield"];

export function ServiceTemplate({ service }: { service: ServicePage }) {
  return (
    <main className="stitch-page solution-detail-page">
      <section className="section stitch-hero solution-detail-hero">
        <div className="stitch-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><Link prefetch={false} href="/services/">Services</Link><span>/</span><span>{service.eyebrow}</span></nav>
          <p className="stitch-kicker">{service.eyebrow}</p>
          <h1>{service.h1}</h1>
          <p className="stitch-lead">{service.intro}</p>
          <div className="stitch-actions"><Link prefetch={false} className="button button-primary" href="/contact/">{service.primaryCta} <UiIcon name="arrow" /></Link><Link prefetch={false} className="button button-secondary" href={service.secondaryHref}>{service.secondaryCta}</Link></div>
        </div>
        <aside className="solution-summary-card">
          <span className="stitch-icon"><UiIcon name="workflow" /></span>
          <p className="stitch-kicker">Included capabilities</p>
          <h2>{service.summaryTitle}</h2>
          <ul>{service.summary.map((item) => <li key={item}><UiIcon name="arrow" />{item}</li>)}</ul>
        </aside>
      </section>

      <section className="section solution-intro">
        <div className="stitch-section-heading"><p className="stitch-kicker">What this changes</p><h2>{service.bodyHeading}</h2></div>
        <div className="solution-intro-copy">{service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="section solution-feature-section">
        <div className="stitch-section-heading stitch-section-heading-center"><p className="stitch-kicker">What we can build</p><h2>{service.featureTitle}</h2><p>{service.featureIntro}</p></div>
        <div className="solution-feature-grid">
          {service.features.map((feature, index) => <article className={`solution-feature-card solution-feature-card-${index + 1}`} key={feature.title}><span className="stitch-icon"><UiIcon name={featureIcons[index] ?? "layers"} /></span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
        </div>
      </section>

      <section className="section solution-process">
        <div className="stitch-section-heading"><p className="stitch-kicker">Our approach</p><h2>{service.processTitle}</h2>{service.processBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <ol>{service.processItems.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
      </section>

      <section className="section solution-support-grid">
        <div><p className="stitch-kicker">Related solutions</p><h2>Connect the next part of the journey.</h2><LinkList items={service.related} /></div>
        <div><p className="stitch-kicker">Common questions</p><h2>Useful answers before we start.</h2><FaqList items={service.faqs} /></div>
      </section>

      <ConversionBand title="Build the simplest system that moves the business forward." text="Tell us what should work better. We will help shape the right next move." primaryLabel={service.primaryCta} secondaryHref="/work/" secondaryLabel="See Our Work" />
    </main>
  );
}
