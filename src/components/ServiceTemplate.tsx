import Link from "next/link";
import type { ServicePage } from "@/data/services";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { ConversionBand, FaqList, LinkList } from "@/components/PageSections";
import { pageHeroImages, serviceDetailImages } from "@/lib/site-images";

const featureIcons: UiIconName[] = ["workflow", "layers", "chart", "calendar", "code", "shield"];

export function ServiceTemplate({ service }: { service: ServicePage }) {
  const contactHref = `/contact/?service=${service.slug}`;
  const heroImage =
    pageHeroImages[service.slug as keyof typeof pageHeroImages] ?? pageHeroImages.services;
  const visuals = serviceDetailImages[service.slug];
  const ctaTopic = service.title
    .replace(/Website/g, "website")
    .replace(/Design/g, "design")
    .replace(/Development/g, "development")
    .replace(/Services/g, "services")
    .replace(/Cyber/g, "cyber")
    .replace(/Security/g, "security");

  return (
    <main className="stitch-page solution-detail-page">
      <PagePeopleHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: service.eyebrow },
        ]}
        kicker={service.eyebrow}
        title={service.h1}
        lead={service.intro}
        image={heroImage}
        actions={[
          { label: service.primaryCta, href: contactHref, variant: "primary" },
          { label: service.secondaryCta, href: service.secondaryHref, variant: "secondary" },
        ]}
      />

      <section className="section solution-summary-band" aria-label="Included capabilities">
        <div className="solution-summary-band-inner">
          <div className="solution-summary-band-head">
            <span className="stitch-icon"><UiIcon name="workflow" /></span>
            <div>
              <p className="stitch-kicker">Included capabilities</p>
              <h2>{service.summaryTitle}</h2>
            </div>
          </div>
          <ul>{service.summary.map((item) => <li key={item}><UiIcon name="arrow" /><span>{item}</span></li>)}</ul>
        </div>
      </section>

      <section className="section solution-intro">
        <div className="solution-intro-lead">
          <div className="stitch-section-heading"><p className="stitch-kicker">What this changes</p><h2>{service.bodyHeading}</h2></div>
          {visuals ? (
            <figure className="solution-visual-card">
              <img src={visuals.showcase.src} alt={visuals.showcase.alt} width={1536} height={1024} loading="lazy" />
            </figure>
          ) : null}
        </div>
        <div className="solution-intro-copy">{service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="section solution-callout-section">
        <div className="solution-callout-card">
          <div className="solution-callout-head">
            <span className="stitch-icon"><UiIcon name="layers" /></span>
            <div>
              <p className="stitch-kicker">Is this right for you?</p>
              <h2>{service.fitHeading}</h2>
            </div>
          </div>
          <div className="solution-intro-copy">{service.fit.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section solution-feature-section">
        <div className="stitch-section-heading stitch-section-heading-center"><p className="stitch-kicker">What we deliver</p><h2>{service.featureTitle}</h2><p>{service.featureIntro}</p></div>
        <div className="solution-feature-grid">
          {service.features.map((feature, index) => (
            <article className={`solution-feature-card solution-feature-card-${index + 1}`} key={feature.title}>
              <div className="solution-feature-head">
                <span className="stitch-icon"><UiIcon name={featureIcons[index] ?? "layers"} /></span>
                <span className="solution-feature-num">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solution-callout-section">
        <div className="solution-callout-card solution-callout-card-tinted">
          <div className="solution-callout-lead">
            <div className="solution-callout-head">
              <span className="stitch-icon"><UiIcon name="shield" /></span>
              <div>
                <p className="stitch-kicker">Across South Africa</p>
                <h2>{service.southAfricaHeading}</h2>
              </div>
            </div>
            {visuals ? (
              <figure className="solution-callout-media">
                <img src={visuals.southAfrica.src} alt={visuals.southAfrica.alt} width={1536} height={1024} loading="lazy" />
              </figure>
            ) : null}
          </div>
          <div className="solution-intro-copy">{service.southAfrica.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section solution-process">
        <div className="stitch-section-heading"><p className="stitch-kicker">Our approach</p><h2>{service.processTitle}</h2>{service.processBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <ol>{service.processItems.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
      </section>

      <section className="section solution-intro">
        <div className="stitch-section-heading"><p className="stitch-kicker">Budgeting</p><h2>{service.costHeading}</h2></div>
        <div className="solution-intro-copy">{service.cost.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="section solution-support-grid">
        <div><p className="stitch-kicker">Related pages</p><h2>Where to go next.</h2><LinkList items={service.related} /></div>
        <div><p className="stitch-kicker">Common questions</p><h2>Answers before you enquire.</h2><FaqList items={service.faqs} /></div>
      </section>

      <ConversionBand title={`Talk to us about ${ctaTopic}.`} text="Tell us what you need and where you are based. We work with businesses across South Africa and will give you a straight answer on the best next step." primaryHref={contactHref} primaryLabel={service.primaryCta} secondaryHref="/services/" secondaryLabel="All Services" />
    </main>
  );
}
