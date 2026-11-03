import type { Metadata } from "next";
import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { projectTypes } from "@/data/case-studies";
import { HomeMotion } from "@/components/HomeMotion";
import { FaqList } from "@/components/PageSections";
import { Testimonials } from "@/components/Testimonials";
import { faqSchema, JsonLd, organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const homeTitle = "Website Design, Web Development & SEO South Africa | SoftKore Digital";
const homeDescription = "South African web company building fast business websites, web applications and booking systems, with SEO and website maintenance. We work with businesses nationwide.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { title: homeTitle, description: homeDescription, url: "/", siteName: site.name, type: "website", images: ["/logo.png"] },
};

const keywords = [
  "Website design",
  "Web development",
  "SEO",
  "Web applications",
  "Online bookings",
  "Website maintenance",
  "Landing pages",
  "Tracking",
  "South Africa",
];

const serviceRows: Array<{ title: string; text: string; href: string; icon: UiIconName }> = [
  { title: "Website design & development", text: "Fast, mobile-first business websites with clear service pages and enquiry paths.", href: "/services/web-development/", icon: "globe" },
  { title: "Web applications & business systems", text: "Client portals, dashboards and internal tools that replace spreadsheets.", href: "/services/custom-web-applications/", icon: "workflow" },
  { title: "Online booking & customer management", text: "Scheduling, deposits, reminders and customer records in one place.", href: "/services/booking-customer-management/", icon: "calendar" },
  { title: "SEO services", text: "Technical audits, indexing fixes and better service pages, with honest reporting.", href: "/services/seo-services/", icon: "search" },
  { title: "Website maintenance", text: "Updates, backups, security checks and fixes, including sites we did not build.", href: "/services/website-maintenance/", icon: "shield" },
  { title: "Digital marketing & conversion", text: "Landing pages, campaign planning and tracking that show what brings enquiries.", href: "/services/digital-marketing-conversion/", icon: "chart" },
];

const stats = [
  { value: 9, suffix: "", label: "Provinces we can serve remotely" },
  { value: 6, suffix: "", label: "Connected services" },
  { value: 10, suffix: "", label: "Industry-specific guides" },
  { value: 100, suffix: "%", label: "Mobile-first builds" },
];

const process = [
  ["01", "Discover", "We learn your services, customers and goals, and review any existing site and search data."],
  ["02", "Plan", "We agree on the pages or system, the content, the technical approach and the budget."],
  ["03", "Build", "We design, develop and test on real screens, with regular reviews so you can see progress."],
  ["04", "Improve", "We launch, check everything on the live site, track enquiries and improve from real use."],
];

const homeFaqs = [
  { question: "Do you work with businesses across South Africa?", answer: "Yes. We work remotely with businesses in all nine provinces. Discovery, reviews and sign-off happen over video calls, email and WhatsApp." },
  { question: "How much does a website cost in South Africa?", answer: "It depends on the number of pages, who writes the content, how custom the design is and which features you need. Our website prices guide explains the main cost drivers, and you can share your budget on the contact form for an honest view of what it can achieve." },
  { question: "Can you guarantee a first-page ranking on Google?", answer: "No. Nobody can honestly guarantee that, because Google decides its own results. We fix what is holding your site back, improve the pages that matter and report clearly on what changes." },
  { question: "Can you take over a website another developer built?", answer: "Usually, yes. We review the site, hosting and access first and tell you about any risks before you commit to maintenance or further work." },
  { question: "Do I need a website or a web application?", answer: "A website explains your business and brings in enquiries. A web application lets people log in and do work, such as booking, tracking jobs or managing records. Many businesses start with a website and add a system later." },
];

const signals = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <main className="home">
        <section className="home-hero">
          <div className="home-hero-bg" data-parallax="0.12">
            <img
              src="/images/softkore-home-hero.webp"
              alt="A business team planning a new website together."
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <span className="home-hero-shade" />
          </div>

          <div className="home-hero-content">
            <div className="section">
              <p className="home-kicker">Website design · Web development · SEO</p>
              <h1>Website design, development &amp; SEO for <em>South African businesses.</em></h1>
              <p className="home-hero-lead">SoftKore Digital builds fast websites and web applications, and helps your customers find them on Google. We work with businesses in all nine provinces.</p>
              <div className="home-actions">
                <Link prefetch={false} className="home-btn home-btn-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link>
                <Link prefetch={false} className="home-btn home-btn-ghost" href="/services/">View our services</Link>
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
                <p className="home-eyebrow">What we help with</p>
                <h2>The problems businesses usually bring to us.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/work/">How we approach projects <UiIcon name="arrow" /></Link>
            </div>

            <div className="home-work-grid">
              {projectTypes.map((study) => (
                <article className="home-work-card" key={study.title}>
                  <figure>
                    <img src={study.image} alt={study.imageAlt} width={1536} height={1024} loading="lazy" />
                    <span>{study.category}</span>
                  </figure>
                  <h3>{study.title}</h3>
                  <p>{study.problem}</p>
                  <Link prefetch={false} href={study.href}>See this service <UiIcon name="arrow" /></Link>
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
                <h2>Our web design, development and SEO services.</h2>
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
                <h2>A clear process from first call to launch.</h2>
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
            <blockquote>Based in South Africa, working <mark>nationwide</mark>. Wherever you are, the process is the same.</blockquote>
            <div className="home-quote-signals">
              {signals.map((signal) => <span key={signal}>{signal}</span>)}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="home-services">
          <div className="section">
            <div className="home-section-head">
              <div>
                <p className="home-eyebrow">Common questions</p>
                <h2>What South African businesses ask us first.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/guides/">Read our guides <UiIcon name="arrow" /></Link>
            </div>
            <FaqList items={homeFaqs} />
          </div>
        </section>

        <section className="home-cta">
          <div className="section home-cta-inner">
            <div>
              <h2>Tell us what you need from your website.</h2>
              <p>Whether you need a new website, better Google visibility or a system to replace your spreadsheets, we will give you a straight answer on the best next step.</p>
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
