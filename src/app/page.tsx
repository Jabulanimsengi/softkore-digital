import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { projectTypes } from "@/data/case-studies";
import { HomeMotion } from "@/components/HomeMotion";
import { FaqList } from "@/components/PageSections";
import { Testimonials } from "@/components/Testimonials";
import { faqSchema, JsonLd, organizationSchema } from "@/lib/schema";
import { getGuide } from "@/data/guides";
import { getGuideReadingStats } from "@/lib/guide-metrics";
import { guideImages, homeIndustryCards, homeProcessImages, homeServiceImages } from "@/lib/site-images";

const featuredGuideSlugs = [
  "website-prices-south-africa",
  "technical-seo-checklist",
  "website-security-checklist",
];

export const metadata: Metadata = pageMetadata(
  "Website Design, SEO & Cyber Security SA | SoftKore Digital",
  "South African web agency building fast business websites, fixing Google SEO & indexing issues, and protecting sites from hacks and malware nationwide.",
  "/",
);

const keywords = [
  "Website design",
  "Web development",
  "SEO services",
  "Cyber security",
  "Website security",
  "Technical SEO",
  "Malware protection",
  "Security audits",
  "South Africa",
];

const standards = [
  { metric: "100%", label: "Mobile-first & Core Web Vitals builds" },
  { metric: "301", label: "Clean single-hop indexing & redirect architecture" },
  { metric: "OWASP", label: "Hardened headers, WAF & POPIA-aware security" },
  { metric: "9 / 9", label: "Provinces served remotely across South Africa" },
];

const serviceRows: Array<{
  slug: string;
  title: string;
  text: string;
  href: string;
  icon: UiIconName;
  tags: string[];
}> = [
  {
    slug: "web-development",
    title: "Website design & development",
    text: "Fast, mobile-first business websites with clear service pages, built-in SEO and clean enquiry paths.",
    href: "/services/web-development/",
    icon: "globe",
    tags: ["Responsive UI", "SEO-ready", "Fast load"],
  },
  {
    slug: "seo-services",
    title: "SEO services",
    text: "Technical audits, Google indexing recovery and stronger service pages, with honest reporting.",
    href: "/services/seo-services/",
    icon: "search",
    tags: ["Technical audits", "Indexing fixes", "Search Console"],
  },
  {
    slug: "website-security",
    title: "Website & cyber security",
    text: "Security audits, website hardening, firewall protection, malware removal and ongoing monitoring.",
    href: "/services/website-security/",
    icon: "shield",
    tags: ["Security audits", "WAF & hardening", "Hack recovery"],
  },
];

const process = [
  ["01", "Discover", "We review your business goals, existing website, Google Search Console data and security posture."],
  ["02", "Plan", "We agree on the site structure, SEO priorities, security hardening scope and budget."],
  ["03", "Build & Secure", "We design, develop, optimise for search and lock down vulnerabilities on real screens."],
  ["04", "Monitor & Improve", "We verify the live site, confirm indexing and keep security checks and backups running."],
];

const homeFaqs = [
  { question: "Do you work with businesses across South Africa?", answer: "Yes. We work remotely with businesses in all nine provinces. Discovery, reviews and sign-off happen over video calls, email and WhatsApp." },
  { question: "How much does a website cost in South Africa?", answer: "It depends on the number of pages, who writes the content, how custom the design is and which features you need. Our website prices guide explains the main cost drivers, and you can share your budget on the contact form for an honest view of what it can achieve." },
  { question: "Can you guarantee a first-page ranking on Google?", answer: "No. Nobody can honestly guarantee that, because Google decides its own results. We fix what is holding your site back, improve the pages that matter and report clearly on what changes." },
  { question: "Can you take over and secure a website another developer built?", answer: "Usually, yes. We review the site, hosting, access and security gaps first and tell you about any risks before you commit to ongoing security or development work." },
  { question: "Can you help if my website has been hacked or dropped out of Google?", answer: "Yes. We clean compromised websites, close the security vulnerabilities that allowed the breach, set up firewalls and off-site backups, and resolve indexing or Search Console security warnings." },
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
              alt="A business team planning a fast, secure website together."
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <span className="home-hero-shade" />
          </div>

          <div className="home-hero-content">
            <div className="section">
              <p className="home-kicker">Website design &amp; development · SEO services · Website &amp; cyber security</p>
              <h1>Website development, SEO &amp; cyber security for <em>South African businesses.</em></h1>
              <p className="home-hero-lead">SoftKore Digital builds fast business websites, gets them properly indexed and ranking on Google, and protects them against hacks, malware and data leaks across all nine provinces.</p>
              <div className="home-actions">
                <Link prefetch={false} className="home-btn home-btn-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link>
                <Link prefetch={false} className="home-btn home-btn-ghost" href="/services/">View Services</Link>
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
                <p className="home-eyebrow">Common challenges</p>
                <h2>The problems we solve.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/work/">See how we work <UiIcon name="arrow" /></Link>
            </div>

            <div className="home-work-grid">
              {projectTypes.map((study) => (
                <article className="home-work-card" key={study.title}>
                  <figure>
                    <img src={study.image} alt={study.imageAlt} width={1536} height={1024} loading="lazy" />
                    <span>{study.category}</span>
                  </figure>
                  <h3>{study.problemHeadline}</h3>
                  <p>{study.problemSummary}</p>
                  <Link prefetch={false} href={study.href}>{study.ctaLabel} <UiIcon name="arrow" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-stats" aria-label="Standards we build and audit to">
          <div className="section">
            <div className="home-stats-grid">
              {standards.map((item) => (
                <div className="home-stat" key={item.metric}>
                  <strong>{item.metric}</strong>
                  <span>{item.label}</span>
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
                <h2>Website design &amp; development, SEO and cyber security services.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/services/">Explore services <UiIcon name="arrow" /></Link>
            </div>

            <div className="home-services-list">
              {serviceRows.map((service, index) => {
                const thumb = homeServiceImages[service.slug];
                return (
                <Link prefetch={false} href={service.href} className="home-service-row" key={service.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {thumb ? (
                    <figure className="home-service-thumb">
                      <img src={thumb.src} alt={thumb.alt} width={1536} height={1024} loading="lazy" />
                    </figure>
                  ) : null}
                  <div className="home-service-title-wrap">
                    <div className="home-service-heading">
                      <span className="home-service-row-icon"><UiIcon name={service.icon} /></span>
                      <h3>{service.title}</h3>
                    </div>
                    <ul className="home-service-tags" aria-label={`${service.title} focus areas`}>
                      {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  <p>{service.text}</p>
                  <span className="home-service-arrow"><UiIcon name="arrow" /></span>
                </Link>
                );
              })}
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
              {process.map(([number, title, text], index) => {
                const media = homeProcessImages[index];
                return (
                  <div className="home-step" key={number}>
                    {media ? (
                      <figure className="home-step-media">
                        <img src={media.src} alt={media.alt} width={1536} height={1024} loading="lazy" />
                        <span>{number}</span>
                      </figure>
                    ) : null}
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="home-industries">
          <div className="section">
            <div className="home-section-head">
              <div>
                <p className="home-eyebrow">Who we work with</p>
                <h2>Websites built for how your customers buy.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/contact/">Talk about your industry <UiIcon name="arrow" /></Link>
            </div>
            <div className="home-industries-grid">
              {homeIndustryCards.map((card) => (
                <article className="home-industry-card" key={card.sector}>
                  <figure>
                    <img src={card.image.src} alt={card.image.alt} width={1536} height={1024} loading="lazy" />
                    <span>{card.sector}</span>
                  </figure>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                </article>
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

        <section className="home-guides">
          <div className="section">
            <div className="home-section-head">
              <div>
                <p className="home-eyebrow">Practical guides</p>
                <h2>Straight answers before you spend a rand.</h2>
              </div>
              <Link prefetch={false} className="home-text-link" href="/guides/">All guides <UiIcon name="arrow" /></Link>
            </div>
            <div className="home-guides-grid">
              {featuredGuideSlugs.map((slug) => {
                const guide = getGuide(slug);
                const image = guideImages[slug];
                if (!guide || !image) return null;
                const stats = getGuideReadingStats(guide);
                return (
                  <Link prefetch={false} href={`/guides/${guide.slug}/`} className="home-guide-card" key={slug}>
                    <figure>
                      <img src={image.src} alt={image.alt} width={1536} height={1024} loading="lazy" />
                    </figure>
                    <div>
                      <span className="home-guide-meta">{guide.category} · {stats.label}</span>
                      <h3>{guide.title}</h3>
                      <strong>Read guide <UiIcon name="arrow" /></strong>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

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
              <p>Whether you need a new website, better Google visibility or stronger website security, we will give you a straight answer on the best next step.</p>
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
