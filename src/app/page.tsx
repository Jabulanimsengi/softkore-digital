import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { UiIcon } from "@/components/UiIcon";
import { projectTypes } from "@/data/case-studies";
import { HomeMotion } from "@/components/HomeMotion";
import { FaqList } from "@/components/PageSections";
import { Testimonials } from "@/components/Testimonials";
import { faqSchema, JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import { getGuide } from "@/data/guides";
import { getGuideReadingStats } from "@/lib/guide-metrics";
import { homeHeroImage, homeIndustryCards, homeProcessImages, homeServiceImages, homeTeamImage } from "@/lib/site-images";
import "./home.css";

const homeHeroImageSrc = homeHeroImage.src;

const featuredGuideSlugs = [
  "website-prices-south-africa",
  "technical-seo-checklist",
  "website-security-checklist",
];

export const metadata: Metadata = pageMetadata(
  "Website Design, SEO & Cyber Security SA | SoftKore Digital",
  "South African web agency building fast business websites, fixing Google SEO & indexing issues, and protecting sites from hacks and malware nationwide.",
  "/",
  homeHeroImageSrc,
);

const keywords = [
  "Website design",
  "Web development",
  "SEO services",
  "Free SEO audit",
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
  badge: string;
  linkLabel: string;
  tags: string[];
}> = [
  {
    slug: "web-development",
    title: "Website design & development",
    text: "Fast, mobile-first business websites with clear service pages, built-in SEO and clean enquiry paths.",
    href: "/services/web-development/",
    badge: "Mobile-first builds",
    linkLabel: "Explore web development",
    tags: ["Responsive UI", "SEO-ready", "Fast load"],
  },
  {
    slug: "seo-services",
    title: "SEO services",
    text: "Technical audits, Google indexing recovery and stronger service pages, with honest reporting.",
    href: "/services/seo-services/",
    badge: "Starts with a free audit",
    linkLabel: "Explore SEO services",
    tags: ["Technical audits", "Indexing fixes", "Search Console"],
  },
  {
    slug: "website-security",
    title: "Website & cyber security",
    text: "Security audits, website hardening, firewall protection, malware removal and ongoing monitoring.",
    href: "/services/website-security/",
    badge: "Hardened & monitored",
    linkLabel: "Explore website security",
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
  {
    question: "Do you work with businesses across all nine provinces of South Africa?",
    answer:
      "Yes. We work remotely with businesses across Gauteng, Western Cape, KwaZulu-Natal and every other province. Discovery, screen reviews and launch sign-off run via video calls, email and WhatsApp through our [contact page](/contact/).",
  },
  {
    question: "How much does a business website cost in South Africa?",
    answer:
      "Most focused brochure sites cost R15,000 to R25,000 once-off, while lead-generating service sites typically sit between R25,000 and R75,000 and ecommerce builds start around R35,000. See our [website prices guide](/guides/website-prices-south-africa/) for full ZAR scope breakdowns.",
  },
  {
    question: "How long does it take to design and launch a new website?",
    answer:
      "A focused business website normally takes three to six weeks from discovery to launch, while ecommerce stores and larger redesigns take six to ten weeks. Read our [website timeline guide](/guides/how-long-to-build-a-website-south-africa/) or view our [website development service](/services/web-development/).",
  },
  {
    question: "Do you build mobile-first websites for PayFast, Yoco and Ozow payments?",
    answer:
      "Yes. Every site is engineered mobile-first to load cleanly on South African cellular networks, with WhatsApp lead capture and local payment integrations when selling online. Compare options in our [PayFast vs Yoco vs Ozow guide](/guides/payfast-vs-yoco-vs-ozow-south-africa/).",
  },
  {
    question: "What is included in your free SEO audit?",
    answer:
      "Our free audit inspects your Google Search Console indexing coverage, crawl blockers, Core Web Vitals, service page structure and local visibility signals, returning a prioritised fix list. Request yours on our [Free SEO Audit form](/contact/?service=free-seo-audit#contact-form).",
  },
  {
    question: "Can any agency guarantee a number-one Google ranking in South Africa?",
    answer:
      "No, because Google controls search rankings and algorithm updates. We guarantee evidence-based technical fixes, clearer service pages matched to buyer search intent and honest monthly tracking inside our [SEO services](/services/seo-services/).",
  },
  {
    question: "Why is my website showing 'Crawled - currently not indexed' in Search Console?",
    answer:
      "Googlebot visited those URLs but chose not to index them because of thin copy, duplicated town templates or weak internal linking. Follow our step-by-step [indexing recovery guide](/guides/fix-crawled-currently-not-indexed/) to consolidate and fix affected pages.",
  },
  {
    question: "Which industries do you build and optimise websites for?",
    answer:
      "We work with medical clinics, construction and engineering firms, logistics fleets, real estate agencies, trades and solar installers, salons, law firms, accountants and South African retailers. Explore our dedicated [industry playbooks](/guides/#industries).",
  },
  {
    question: "Can you clean and restore a website that has already been hacked?",
    answer:
      "Yes. We isolate compromised hosting, strip injected malware and spam pages, rotate exposed credentials, patch vulnerabilities and help clear Google Safe Browsing warnings. Read our [hacked website recovery guide](/guides/hacked-website-recovery-south-africa/) or view [website security services](/services/website-security/).",
  },
  {
    question: "Can you take over and harden a WordPress or custom website another agency built?",
    answer:
      "Yes. We start with an audit of your hosting, admin accounts, plugins, SSL setup, DNS and firewall rules, then provide a practical remediation plan through our [website and cyber security team](/services/website-security/).",
  },
  {
    question: "What does website security cover under South Africa's POPIA requirements?",
    answer:
      "POPIA requires reasonable technical safeguards for personal information submitted via forms and portals, including HTTPS/HSTS encryption, least-privilege access, spam filtering and tested backups. Check our [POPIA website compliance checklist](/guides/popia-website-compliance-checklist/).",
  },
  {
    question: "Do I own my .co.za domain, website code and Search Console data once built?",
    answer:
      "Yes. Your `.co.za` or `.com` domain stays registered in your company's name and full site code, Analytics and Search Console ownership remain yours. See our [.co.za vs .com domain guide](/guides/co-za-vs-com-domain-south-africa/) for registrar governance tips.",
  },
];

const auditChecks = ["Google indexing", "Crawl blockers", "Mobile speed", "Local visibility"];

const aboutPoints = [
  "Remote projects over video, email and WhatsApp, with the same process in every province.",
  "Built for local conditions: light on mobile data, South African payments and POPIA-aligned security.",
  "We stay after launch, including for websites we did not build.",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export default function HomePage() {
  const closingImage = homeProcessImages[0];

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <main className="hx">
        <section className="hx-hero">
          <div className="hx-hero-bg" data-parallax="0.1">
            <img
              src={homeHeroImageSrc}
              alt={homeHeroImage.alt}
              width={1920}
              height={1288}
              fetchPriority="high"
            />
            <span className="hx-hero-shade" aria-hidden="true" />
          </div>

          <div className="hx-wrap hx-hero-content">
            <p className="hx-kicker">Web development · SEO · Cyber security</p>
            <h1 className="hx-hero-title">
              <span className="hx-hero-title-lead">Website development, SEO &amp; cyber security for South African businesses.</span>
              <span className="hx-hero-title-main">Built to be found. <em>Built to be trusted.</em></span>
            </h1>
            <p className="hx-hero-lead">SoftKore Digital builds fast business websites, starts with a free SEO audit to get them properly indexed and ranking on Google, and protects them against hacks, malware and data leaks across all nine provinces.</p>
            <div className="hx-actions">
              <Link prefetch={false} className="hx-btn hx-btn-primary" href="/contact/?service=free-seo-audit#contact-form">Get my free SEO audit <UiIcon name="arrow" /></Link>
              <Link prefetch={false} className="hx-btn hx-btn-outline-light" href="/services/">View services</Link>
            </div>
            <ul className="hx-hero-checks" aria-label="What the free SEO audit checks">
              <li className="hx-hero-checks-label">Free audit checks</li>
              {auditChecks.map((item) => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
            </ul>
          </div>

          <div className="hx-strip" aria-hidden="true">
            <ul className="hx-wrap">
              {keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
            </ul>
          </div>
        </section>

        <section className="hx-section hx-statement">
          <div className="hx-wrap">
            <div className="hx-statement-row">
              <p className="hx-eyebrow">Why SoftKore</p>
              <h2>A website can look fine and still lose customers: <mark>invisible on Google</mark>, <mark>slow on mobile</mark>, or <mark>one outdated plugin away from a hack</mark>. We fix all three, in plain language.</h2>
            </div>
            <dl className="hx-standards" aria-label="Standards we build and audit to">
              {standards.map((item) => (
                <div key={item.metric}>
                  <dt>{item.label}</dt>
                  <dd>{item.metric}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="hx-section hx-problems" id="work">
          <div className="hx-wrap">
            <div className="hx-head">
              <div>
                <p className="hx-eyebrow">Common challenges</p>
                <h2>The problems we solve.</h2>
              </div>
              <Link prefetch={false} className="hx-link" href="/work/">See how we work <UiIcon name="arrow" /></Link>
            </div>
            <div className="hx-problem-grid">
              {projectTypes.map((study) => (
                <article className="hx-problem-card" key={study.title}>
                  <figure>
                    <img src={study.image} alt={study.imageAlt} width={1536} height={1024} loading="lazy" />
                  </figure>
                  <div>
                    <p className="hx-card-label">{study.category}</p>
                    <h3>{study.problemHeadline}</h3>
                    <p>{study.problemSummary}</p>
                    <Link prefetch={false} className="hx-link" href={study.href}>{study.ctaLabel} <UiIcon name="arrow" /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hx-section hx-services">
          <div className="hx-wrap">
            <div className="hx-head">
              <div>
                <p className="hx-eyebrow">What we do</p>
                <h2>Three services. One goal: more of the right customers.</h2>
              </div>
              <Link prefetch={false} className="hx-link" href="/services/">Explore services <UiIcon name="arrow" /></Link>
            </div>
            <div className="hx-service-list">
              {serviceRows.map((service, index) => {
                const image = homeServiceImages[service.slug];
                return (
                  <article className="hx-service" key={service.href}>
                    {image ? (
                      <figure className="hx-service-media">
                        <img src={image.src} alt={image.alt} width={1536} height={1024} loading="lazy" />
                        <figcaption>{service.badge}</figcaption>
                      </figure>
                    ) : null}
                    <div className="hx-service-body">
                      <span className="hx-service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <ul className="hx-tags" aria-label={`${service.title} focus areas`}>
                        {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                      <Link prefetch={false} className="hx-underline-link" href={service.href}>{service.linkLabel}</Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="hx-section hx-process">
          <div className="hx-wrap">
            <div className="hx-head">
              <div>
                <p className="hx-eyebrow">How we work</p>
                <h2>A clear process from first call to launch.</h2>
              </div>
              <p className="hx-head-note">A focused business website normally takes three to six weeks; ecommerce stores and larger redesigns take six to ten.</p>
            </div>
            <ol className="hx-steps">
              {process.map(([number, title, text]) => (
                <li key={number}>
                  <span aria-hidden="true">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="hx-section hx-industries">
          <div className="hx-wrap">
            <div className="hx-head">
              <div>
                <p className="hx-eyebrow">Who we work with</p>
                <h2>Websites built for how your customers buy.</h2>
              </div>
              <Link prefetch={false} className="hx-link" href="/contact/">Talk about your industry <UiIcon name="arrow" /></Link>
            </div>
            <div className="hx-industry-grid">
              {homeIndustryCards.map((card) => (
                <Link prefetch={false} href={card.href} className="hx-industry" key={card.sector}>
                  <figure>
                    <img src={card.image.src} alt={card.image.alt} width={1536} height={1024} loading="lazy" />
                  </figure>
                  <span className="hx-card-label">{card.sector}</span>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                  <span className="hx-link">Read industry playbook <UiIcon name="arrow" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="hx-team">
          <img src={homeTeamImage.src} alt={homeTeamImage.alt} width={1536} height={1024} loading="lazy" />
          <span className="hx-team-shade" aria-hidden="true" />
          <div className="hx-wrap hx-team-content">
            <p className="hx-eyebrow">A South African studio</p>
            <h2>Plain-language engineering. All nine provinces.</h2>
            <ul>
              {aboutPoints.map((point) => (
                <li key={point}><CheckIcon />{point}</li>
              ))}
            </ul>
            <Link prefetch={false} className="hx-btn hx-btn-light" href="/about/">About SoftKore</Link>
          </div>
        </section>

        <Testimonials />

        <section className="hx-section hx-guides">
          <div className="hx-wrap">
            <div className="hx-head">
              <div>
                <p className="hx-eyebrow">Practical guides</p>
                <h2>Straight answers before you spend a rand.</h2>
              </div>
              <Link prefetch={false} className="hx-link" href="/guides/">All guides <UiIcon name="arrow" /></Link>
            </div>
            <div className="hx-guide-list">
              {featuredGuideSlugs.map((slug) => {
                const guide = getGuide(slug);
                if (!guide) return null;
                const stats = getGuideReadingStats(guide);
                return (
                  <Link prefetch={false} href={`/guides/${guide.slug}/`} className="hx-guide" key={slug}>
                    <span className="hx-card-label">{guide.category}</span>
                    <strong>{guide.title}</strong>
                    <span className="hx-guide-meta">{stats.label}</span>
                    <span className="hx-guide-arrow" aria-hidden="true"><UiIcon name="arrow" /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="hx-section hx-faq">
          <div className="hx-wrap hx-faq-layout">
            <div className="hx-faq-head">
              <p className="hx-eyebrow">Common questions</p>
              <h2>What South African businesses ask us first.</h2>
              <Link prefetch={false} className="hx-link" href="/guides/">Read our guides <UiIcon name="arrow" /></Link>
            </div>
            <FaqList items={homeFaqs} />
          </div>
        </section>

        <section className="hx-section hx-closing">
          <div className="hx-wrap hx-closing-layout">
            {closingImage ? (
              <img src={closingImage.src} alt={closingImage.alt} width={1536} height={1024} loading="lazy" />
            ) : null}
            <div>
              <h2>Start with a free SEO audit. <em>Decide after.</em></h2>
              <p>Tell us what you need from your website. Whether it is a new site, better Google visibility or stronger security, we will give you a straight answer on the best next step, by email, phone or WhatsApp.</p>
              <div className="hx-actions">
                <Link prefetch={false} className="hx-btn hx-btn-primary" href="/contact/?service=free-seo-audit#contact-form">Request my free audit <UiIcon name="search" /></Link>
                <Link prefetch={false} className="hx-btn hx-btn-outline-light" href="/contact/">Start a project <UiIcon name="arrow" /></Link>
              </div>
            </div>
          </div>
        </section>

        <HomeMotion />
      </main>
    </>
  );
}
