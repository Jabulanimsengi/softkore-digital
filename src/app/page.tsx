import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { caseStudies } from "@/data/case-studies";
import { JsonLd, organizationSchema } from "@/lib/schema";

const services = [
  {
    title: "Website design",
    text: "Fast, modern websites that make the offer obvious, build trust, and turn visitors into enquiries.",
    href: "/services/web-development/",
    icon: "window",
  },
  {
    title: "SEO growth",
    text: "Search-led page systems for local services, niche industries, and useful content that keeps compounding.",
    href: "/services/seo-services/",
    icon: "growth",
  },
  {
    title: "App design",
    text: "Usable web applications, dashboards, portals, and workflows designed around real daily operations.",
    href: "/services/custom-web-applications/",
    icon: "phone",
  },
  {
    title: "Enterprise design",
    text: "Internal tools, data flows, integrations, and design systems that scale beyond one launch.",
    href: "/services/custom-web-applications/",
    icon: "building",
  },
  {
    title: "Cloud systems",
    text: "Practical deployment, monitoring, hosting, automation, and system care for digital products.",
    href: "/services/website-maintenance/",
    icon: "cloud",
  },
];

const steps = [
  {
    number: "01",
    title: "Clarify",
    text: "We define the offer, the audience, the conversion goal, and the operational work the system must support.",
  },
  {
    number: "02",
    title: "Map",
    text: "We shape page architecture, search intent, user journeys, content hierarchy, and the technical path before build.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop clean, fast interfaces with responsive layouts, practical admin thinking, and reliable release checks.",
  },
  {
    number: "04",
    title: "Improve",
    text: "We monitor, refine, and keep the parts that create business value moving after the first launch.",
  },
];

const trustSignals = [
  {
    label: "Built for",
    value: "service businesses, operators, and growing teams",
  },
  {
    label: "Focused on",
    value: "conversion paths, search structure, and workflow clarity",
  },
  {
    label: "Delivered as",
    value: "fast websites, useful apps, and maintainable systems",
  },
];

const proof = [
  {
    title: "Intent first",
    text: "No surface polish without knowing what the page, app, or system must do.",
  },
  {
    title: "Built to last",
    text: "Solid structure, maintainable code, and technical choices that can survive growth.",
  },
  {
    title: "Partner mindset",
    text: "Clear communication, practical decisions, and no hand-offs into confusion.",
  },
];

function ServiceIcon({ type }: { type: string }) {
  return (
    <svg className="sk-service-icon" viewBox="0 0 48 48" aria-hidden="true">
      {type === "window" ? (
        <>
          <path d="M7 12h34v26H7z" />
          <path d="M7 19h34M14 15h.1M19 15h.1" />
        </>
      ) : null}
      {type === "growth" ? (
        <>
          <path d="M8 36h6V25H8zM21 36h6V18h-6zM34 36h6V10h-6z" />
          <path d="M8 18l10-8 9 6 13-11" />
        </>
      ) : null}
      {type === "phone" ? (
        <>
          <path d="M17 6h14a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" />
          <path d="M22 36h4" />
        </>
      ) : null}
      {type === "building" ? (
        <>
          <path d="M9 40V16h12v24M21 40V8h18v32" />
          <path d="M14 22h2M14 29h2M27 15h3M27 23h3M27 31h3" />
        </>
      ) : null}
      {type === "cloud" ? (
        <>
          <path d="M16 36h20a8 8 0 0 0 1-15 12 12 0 0 0-23-3A9 9 0 0 0 16 36z" />
        </>
      ) : null}
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <main className="sk-home">
        <section className="sk-hero section" id="home">
          <div className="sk-hero-copy">
            <h1>Websites, SEO and software systems built with intent.</h1>
            <p className="sk-hero-lead">
              Build what your business can actually use.
            </p>
            <p className="sk-hero-text">
              Softkore Technologies designs and builds focused digital products
              for businesses that need clearer websites, better search
              visibility, usable apps, and reliable operating systems.
            </p>
            <div className="sk-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">
                Design the site <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link prefetch={false} className="button button-secondary" href="/services/">
                Plan the system <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
            <div className="sk-capabilities" aria-label="Softkore capabilities">
              <span>Software</span>
              <span>Web Applications</span>
              <span>Cloud</span>
              <span>Digital Solutions</span>
            </div>
          </div>
          <div className="sk-hero-mark" aria-hidden="true">
            <span />
            <span />
            <div className="sk-system-preview">
              <div className="sk-system-top">
                <strong>Softkore OS</strong>
                <small>Website to workflow</small>
              </div>
              <div className="sk-system-track">
                <i>Offer</i>
                <i>Search</i>
                <i>App</i>
                <i>Cloud</i>
              </div>
              <div className="sk-system-grid">
                <b>SEO map</b>
                <b>UX paths</b>
                <b>Admin flow</b>
                <b>Release check</b>
              </div>
            </div>
          </div>
        </section>

        <section className="sk-trust-strip section" aria-label="Softkore proof points">
          {trustSignals.map((signal) => (
            <article key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </article>
          ))}
        </section>

        <section className="sk-services section" id="services">
          <div className="sk-section-title">
            <h2>What we do</h2>
          </div>
          <div className="sk-service-list">
            {services.map((service) => (
              <Link prefetch={false} className="sk-service-row" href={service.href} key={service.title}>
                <ServiceIcon type={service.icon} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="sk-row-arrow" aria-hidden="true">-&gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="sk-process" id="process">
          <div className="section sk-process-inner">
            <div className="sk-section-title">
              <h2>The Softkore Digital Operating System</h2>
            </div>
            <div className="sk-steps">
              {steps.map((step) => (
                <article className="sk-step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <Link prefetch={false} className="sk-text-link" href="/work/">
              See selected work <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </section>

        <section className="sk-featured-work section">
          <div className="sk-section-title">
            <h2>Proof in the work, not the pitch.</h2>
          </div>
          <div className="sk-featured-case-grid">
            {caseStudies.map((study, index) => (
              <article className="sk-featured-case" key={study.title}>
                <span>{String(index + 1).padStart(2, "0")} / {study.category}</span>
                <h3>{study.title}</h3>
                <p>{study.outcome}</p>
                <ul>
                  {study.signals.slice(0, 3).map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link prefetch={false} className="sk-text-link" href="/work/">
            View case patterns <span aria-hidden="true">-&gt;</span>
          </Link>
        </section>

        <section className="sk-proof section">
          <div className="sk-section-title">
            <h2>Why work with Softkore</h2>
          </div>
          <div className="sk-proof-grid">
            {proof.map((item) => (
              <article className="sk-proof-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sk-focus section">
          <div>
            <h2>Minimal on the surface. Serious underneath.</h2>
            <p>
              The best digital work feels simple because the hard thinking has
              already happened: page architecture, conversion paths, search
              intent, performance, content structure, admin workflows, hosting,
              and long-term care.
            </p>
          </div>
          <div className="sk-focus-lines" aria-hidden="true">
            <span>Design</span>
            <span>SEO</span>
            <span>Apps</span>
            <span>Cloud</span>
          </div>
        </section>

        <section className="sk-contact section" id="contact">
          <div className="sk-contact-copy">
            <h2>Let&apos;s build something that moves your business.</h2>
            <p>
              Share the site, workflow, or product you want to improve. We will
              help you choose the next practical solution and design it with
              intent.
            </p>
            <a href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
