import type { Metadata } from "next";
import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { ConversionBand } from "@/components/PageSections";
import { services } from "@/data/services";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website, SEO and Software Development Services South Africa",
  description: "SoftKore Digital's services for South African businesses: website design and development, web applications, online booking systems, SEO, maintenance and digital marketing.",
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
          <p className="stitch-kicker">Serving businesses across South Africa</p>
          <h1>Website, SEO and software development services.</h1>
          <p className="stitch-lead">Whether you need a new website, better visibility on Google or a system to replace your spreadsheets, we can help. Start with one service or combine them as your business grows.</p>
          <div className="stitch-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link><Link prefetch={false} className="button button-secondary" href="/work/">How we work</Link></div>
        </div>
        <figure className="stitch-hero-media"><img src="/images/softkore-services-hero.webp" alt="A connected business operations dashboard displayed on a laptop." width={1536} height={1024} /><figcaption><span>Delivered remotely</span><strong>The same process in all nine provinces.</strong></figcaption></figure>
      </section>

      <section className="section services-bento" aria-label="SoftKore Digital services">
        {services.map((service, index) => (
          <Link prefetch={false} key={service.slug} href={`/services/${service.slug}/`} className={`service-bento-card service-bento-card-${index + 1}`}>
            <span className="stitch-icon"><UiIcon name={serviceIcons[index] ?? "layers"} /></span>
            <p className="stitch-kicker">{service.eyebrow}</p>
            <h2>{service.title}</h2>
            <p>{service.intro}</p>
            <ul className="service-benefits">{service.summary.slice(0, 3).map((item) => <li key={item}><UiIcon name="arrow" />{item}</li>)}</ul>
            <div className="service-tags">{serviceTags[index]?.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <strong>View service <UiIcon name="arrow" /></strong>
          </Link>
        ))}
      </section>

      <section className="section stitch-process stitch-services-process">
        <div className="stitch-section-heading"><p className="stitch-kicker">How the services connect</p><h2>Get found, win the enquiry, run the work.</h2><p>Your website, Google visibility, enquiry process and internal systems work best when they support one another. You do not need all of them at once, so we usually start with whichever is holding you back most.</p></div>
        <div className="services-connection"><div><UiIcon name="globe" /><strong>Get found</strong><span>Websites and SEO</span></div><i /><div><UiIcon name="calendar" /><strong>Win the enquiry</strong><span>Landing pages and bookings</span></div><i /><div><UiIcon name="workflow" /><strong>Run the work</strong><span>Web applications and maintenance</span></div></div>
      </section>

      <ConversionBand title="Not sure which service you need?" text="Tell us what is not working. We will tell you honestly what we would do first, wherever you are in South Africa." primaryLabel="Start a Project" secondaryHref="/guides/" secondaryLabel="Read Our Guides" />
      </main>
    </>
  );
}
