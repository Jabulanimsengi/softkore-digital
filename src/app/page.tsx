import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { caseStudies } from "@/data/case-studies";
import { HomeMotion } from "@/components/HomeMotion";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd, organizationSchema } from "@/lib/schema";

const keywords = [
  "Websites",
  "SEO",
  "Business systems",
  "Bookings",
  "Payments",
  "Conversion",
  "Growth",
  "Maintenance",
  "Automation",
];

const serviceRows: Array<{ title: string; text: string; href: string; icon: UiIconName }> = [
  { title: "Website design & development", text: "Fast, credible websites structured to convert.", href: "/services/web-development/", icon: "globe" },
  { title: "Business systems & automation", text: "Portals, dashboards and workflows that remove friction.", href: "/services/custom-web-applications/", icon: "workflow" },
  { title: "Booking & customer management", text: "Bookings, payments and follow-up that run themselves.", href: "/services/booking-customer-management/", icon: "calendar" },
  { title: "SEO & online visibility", text: "Search-led growth so the right customers find you.", href: "/services/seo-services/", icon: "search" },
  { title: "Maintenance & technical support", text: "Ongoing updates, monitoring and performance care.", href: "/services/website-maintenance/", icon: "shield" },
  { title: "Digital marketing & conversion", text: "Campaigns and conversion systems that turn attention into action.", href: "/services/digital-marketing-conversion/", icon: "chart" },
];

const stats = [
  { value: 6, suffix: "", label: "Core services" },
  { value: 10, suffix: "", label: "Industries served" },
  { value: 5, suffix: "", label: "Practical guides" },
  { value: 100, suffix: "%", label: "Mobile-first builds" },
];

const process = [
  ["01", "Discover", "We clarify the business goal, customers and friction before deciding what to build."],
  ["02", "Shape", "We map the journey, content and technical foundation."],
  ["03", "Build", "We design, develop and test the journeys that matter most."],
  ["04", "Improve", "We launch carefully, measure what matters and refine from real use."],
];

const signals = [
  "Search architecture",
  "Website UX",
  "Apps & systems",
  "Mobile-first",
  "Performance",
  "Conversion",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <main className="home">
        <section className="home-hero">
          <div className="home-hero-bg" data-parallax="0.12">
            <img
              src="/images/softkore-home-hero.webp"
              alt="A South African business team collaborating on a practical digital growth plan."
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <span className="home-hero-shade" />
          </div>

          <div className="home-hero-content">
            <div className="section">
              <p className="home-kicker">Website design · SEO · Growth systems</p>
              <h1>Websites &amp; SEO that <em>grow your business.</em></h1>
              <p className="home-hero-lead">SoftKore Digital designs fast, search-ready websites and the systems behind them — so growing businesses get found, get trusted and get more done.</p>
              <div className="home-actions">
                <Link prefetch={false} className="home-btn home-btn-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link>
                <Link prefetch={false} className="home-btn home-btn-ghost" href="/work/">See our work</Link>
              </div>
            </div>
          </div>

          <div className="home-marquee" aria-hidden="true">
            <div className="home-marquee-track">
              <ul>{keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}</ul>
              <ul>{keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="home-work" id="work">
          <div className="section">
            <div className="home-section-head">
              <div>
                <p className="home-eyebrow">Selected work</p>
                <h2>Digital work that creates real business movement.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/work/">See all work <UiIcon name="arrow" /></Link>
            </div>

            <div className="home-work-grid">
              {caseStudies.slice(0, 3).map((study) => (
                <article className="home-work-card" key={study.title}>
                  <figure>
                    <img src={study.image} alt={study.imageAlt} width={1536} height={1024} loading="lazy" />
                    <span>{study.category}</span>
                  </figure>
                  <h3>{study.title}</h3>
                  <p>{study.outcome}</p>
                  <Link prefetch={false} href="/work/">View case <UiIcon name="arrow" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-stats">
          <div className="section">
            <div className="home-stats-grid">
              {stats.map((stat) => (
                <div className="home-stat" key={stat.label}>
                  <strong data-count={String(stat.value)} data-suffix={stat.suffix}>{stat.value}{stat.suffix}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-services">
          <div className="section">
            <div className="home-section-head">
              <div>
                <p className="home-eyebrow">What we do</p>
                <h2>One partner for the whole digital journey.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/services/">Explore services <UiIcon name="arrow" /></Link>
            </div>

            <div className="home-services-list">
              {serviceRows.map((service, index) => (
                <Link prefetch={false} href={service.href} className="home-service-row" key={service.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="home-service-arrow"><UiIcon name="arrow" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-process">
          <div className="section">
            <div className="home-section-head">
              <div>
                <p className="home-eyebrow">How we work</p>
                <h2>A clear process, from problem to useful solution.</h2>
              </div>
            </div>
            <div className="home-process-grid">
              {process.map(([number, title, text]) => (
                <div className="home-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-quote">
          <div className="section">
            <blockquote>We care less about clever technology and more about the <mark>business result</mark> it creates.</blockquote>
            <div className="home-quote-signals">
              {signals.map((signal) => <span key={signal}>{signal}</span>)}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="home-cta">
          <div className="section home-cta-inner">
            <div>
              <h2>What should work better in your business?</h2>
              <p>Bring us the customer journey, search challenge or internal workflow. We&apos;ll help identify the simplest valuable next move.</p>
            </div>
            <div className="home-actions">
              <Link prefetch={false} className="home-btn home-btn-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link>
            </div>
          </div>
        </section>

        <HomeMotion />
      </main>
    </>
  );
}
