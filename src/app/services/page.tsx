import type { Metadata } from "next";
import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { ConversionBand } from "@/components/PageSections";
import { services } from "@/data/services";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Services",
  description: "Website development, business systems, booking platforms, SEO, maintenance and digital growth services for growing businesses.",
  alternates: { canonical: "/services/" },
};

const serviceIcons: UiIconName[] = ["globe", "workflow", "calendar", "search", "shield", "chart"];
const serviceTags = [["Responsive", "SEO-ready", "Maintainable"], ["Portals", "Dashboards", "Automation"], ["Bookings", "CRM", "Payments"], ["Search strategy", "Content", "Analytics"], ["Monitoring", "Updates", "Support"], ["Campaigns", "Conversion", "Reporting"]];

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Services", url: absoluteUrl("/services/") }])} />
      <main className="stitch-page stitch-services-page">
      <section className="section stitch-hero stitch-services-hero">
        <div className="stitch-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Services</span></nav>
          <p className="stitch-kicker">Built around your next useful move</p>
          <h1>Digital services that connect growth and operations.</h1>
          <p className="stitch-lead">From a high-performing website to the systems behind the business, we build practical digital foundations that can grow with you.</p>
          <div className="stitch-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link><Link prefetch={false} className="button button-secondary" href="/work/">See our work</Link></div>
        </div>
        <figure className="stitch-hero-media"><img src="/images/softkore-services-hero.webp" alt="A connected business operations dashboard displayed on a laptop." width={1536} height={1024} /><figcaption><span>Connected capability</span><strong>Clear customer journeys backed by useful systems.</strong></figcaption></figure>
      </section>

      <section className="section services-bento" aria-label="Softkore solutions">
        {services.map((service, index) => (
          <Link prefetch={false} key={service.slug} href={`/services/${service.slug}/`} className={`service-bento-card service-bento-card-${index + 1}`}>
            <span className="stitch-icon"><UiIcon name={serviceIcons[index] ?? "layers"} /></span>
            <p className="stitch-kicker">{service.eyebrow}</p>
            <h2>{service.title}</h2>
            <p>{service.intro}</p>
            <ul className="service-benefits">{service.summary.slice(0, 3).map((item) => <li key={item}><UiIcon name="arrow" />{item}</li>)}</ul>
            <div className="service-tags">{serviceTags[index]?.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <strong>Explore solution <UiIcon name="arrow" /></strong>
          </Link>
        ))}
      </section>

      <section className="section stitch-process stitch-services-process">
        <div className="stitch-section-heading"><p className="stitch-kicker">How the pieces connect</p><h2>Built as one digital foundation.</h2><p>Your website, search visibility, customer actions and internal workflow should reinforce one another.</p></div>
        <div className="services-connection"><div><UiIcon name="globe" /><strong>Attract</strong><span>Websites and search</span></div><i /><div><UiIcon name="calendar" /><strong>Convert</strong><span>Enquiries and bookings</span></div><i /><div><UiIcon name="workflow" /><strong>Operate</strong><span>Systems and automation</span></div></div>
      </section>

      <ConversionBand title="Build the digital foundation your next stage needs." text="We will help identify and build the simplest useful next move." primaryLabel="Start a Project" secondaryHref="/work/" secondaryLabel="See Our Work" />
      </main>
    </>
  );
}
