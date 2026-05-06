import Link from "next/link";
import { CardGrid, LinkList } from "@/components/PageSections";
import { JsonLd, organizationSchema } from "@/lib/schema";

const services = [
  {
    title: "Premium Business Websites",
    text: "A good business website should explain what you do, make you look credible, and help people contact you without friction.",
    href: "/services/web-development/",
    cta: "Build My Website",
    items: ["Company websites", "Landing pages", "Service pages", "Mobile-first design"],
  },
  {
    title: "Custom Web Applications",
    text: "When spreadsheets and manual follow-ups start slowing you down, a custom web app can give your team one place to manage the work.",
    href: "/services/custom-web-applications/",
    cta: "Build My App",
    items: ["Client dashboards", "Admin panels", "Booking systems", "Payment integration"],
    featured: true,
  },
  {
    title: "SEO Growth Systems",
    text: "SEO works best when the site is technically healthy, the pages are useful, and progress is checked regularly.",
    href: "/services/seo-services/",
    cta: "Improve My SEO",
    items: ["Technical SEO setup", "Search Console monitoring", "Indexing checks", "Page optimization"],
  },
];

const whyItems = [
  {
    title: "Premium Design",
    text: "Clean, modern interfaces that make your business look professional and trustworthy.",
  },
  {
    title: "Strong Engineering",
    text: "Websites and applications built with clean code, scalable structure, and future growth in mind.",
  },
  {
    title: "SEO From the Foundation",
    text: "Search-friendly structure, fast pages, and clear content are planned from the start.",
  },
  {
    title: "Ongoing Monitoring",
    text: "We help you track performance, fix issues, improve pages, and keep your online presence healthy.",
  },
];

const areas = [
  { label: "Gauteng web development", href: "/services/web-development/gauteng/" },
  { label: "Johannesburg web development", href: "/services/web-development/gauteng/johannesburg/" },
  { label: "Pretoria web development", href: "/services/web-development/gauteng/pretoria/" },
  { label: "Sandton SEO services", href: "/services/seo-services/gauteng/sandton/" },
  { label: "Cape Town SEO services", href: "/services/seo-services/western-cape/cape-town/" },
  { label: "Durban custom web applications", href: "/services/custom-web-applications/kwazulu-natal/durban/" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <h1>We Build Digital Systems That Help Businesses Grow</h1>
            <p>
              SoftKore Digital builds websites, web apps, and SEO foundations
              that make it easier for customers to find you, understand what you
              offer, and get in touch.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#contact">
                Start Your Project
              </Link>
              <Link className="button button-secondary" href="/services/web-development/">
                View Our Services
              </Link>
            </div>
            <div className="trust-line">
              Websites | Web Applications | SEO Implementation | Monitoring
            </div>
          </div>

          <div className="hero-visual" aria-label="SoftKore Digital dashboard mockup">
            <div className="dashboard-shell">
              <div className="dashboard-top">
                <div className="mini-brand">
                  <span className="mini-mark" />
                  <span>SoftKore Digital Dashboard</span>
                </div>
                <span className="status-dot">Live</span>
              </div>
              <div className="dashboard-grid">
                <article className="metric-card large">
                  <span>Website Health</span>
                  <strong>96%</strong>
                  <small>Excellent</small>
                  <div className="ring" aria-hidden="true" />
                </article>
                <article className="metric-card">
                  <span>SEO Visibility</span>
                  <strong>Growing</strong>
                  <small>+28% vs last 30 days</small>
                </article>
                <article className="metric-card">
                  <span>Pages Optimized</span>
                  <strong>128</strong>
                  <small>+18 this month</small>
                </article>
                <article className="metric-card wide">
                  <span>Speed Score</span>
                  <strong>
                    91<em>/100</em>
                  </strong>
                  <small>Great performance</small>
                  <div className="progress">
                    <span style={{ width: "91%" }} />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section strip" aria-label="Main services">
          <span>Websites</span>
          <span>Applications</span>
          <span>SEO</span>
          <span>Monitoring</span>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <h2>What We Build</h2>
            <p>
              Start with a professional website, add the systems your team
              needs, and keep improving what brings in real enquiries.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article
                className={`service-card ${service.featured ? "featured" : ""}`}
                key={service.title}
              >
                <div className="icon-box" aria-hidden="true">
                  {service.featured ? "</>" : "[]"}
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={service.href}>{service.cta}</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section why-section">
          <div className="why-title">
            <h2>Clean Design. Solid Code. Built to Be Found.</h2>
          </div>
          <div className="why-grid">
            {whyItems.map((item, index) => (
              <article className="why-item" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section seo-section" id="seo">
          <div className="seo-panel">
            <div>
              <h2>SEO Works Better When Someone Keeps an Eye on It.</h2>
              <p>
                Many businesses launch a website and hope traffic will arrive.
                A stronger approach is to fix the technical basics, improve the
                right pages, and watch what Google is actually doing with the site.
              </p>
            </div>
            <div className="traffic-card">
              <span>Organic Traffic</span>
              <strong>+28%</strong>
              <small>vs last 30 days</small>
            </div>
          </div>
        </section>

        <section className="section areas-section">
          <h2>Priority Areas We Serve</h2>
          <p className="section-intro">
            These are the first local routes to rebuild properly in Next.js, with
            stronger content before wider rollout.
          </p>
          <LinkList items={areas} />
        </section>

        <section className="section why-section" id="process">
          <div className="why-title">
            <h2>A Practical Build Process</h2>
          </div>
          <div className="why-grid">
            <CardGrid
              items={[
                {
                  title: "Plan the route map",
                  text: "Define the pages that deserve to exist before generating anything at scale.",
                },
                {
                  title: "Build typed content",
                  text: "Move page content into TypeScript data so metadata, schema, and routes stay consistent.",
                },
                {
                  title: "Ship static pages",
                  text: "Use Next.js static export for fast pages, clean routing, and easier deployment.",
                },
                {
                  title: "Improve with evidence",
                  text: "Use Search Console and live checks to decide which pages need deeper content next.",
                },
              ]}
            />
          </div>
        </section>

        <section className="section final-cta" id="contact">
          <div className="final-panel">
            <div>
              <h2>Want a website that can grow with your business?</h2>
              <p>
                SoftKore Digital can help you plan, design, build, and optimize
                a professional web presence.
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
    </>
  );
}
