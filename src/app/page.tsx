import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { projectTypes } from "@/data/case-studies";
import { HomeMotion } from "@/components/HomeMotion";
import { FaqList } from "@/components/PageSections";
import { Testimonials } from "@/components/Testimonials";
import { faqSchema, JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import { getGuide } from "@/data/guides";
import { getGuideReadingStats } from "@/lib/guide-metrics";
import { guideImages, homeHeroImage, homeIndustryCards, homeProcessImages, homeServiceImages } from "@/lib/site-images";

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
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <main className="home">
        <section className="home-hero">
          <div className="home-hero-bg" data-parallax="0.12">
            <img
              src={homeHeroImageSrc}
              alt={homeHeroImage.alt}
              width={1920}
              height={1288}
              fetchPriority="high"
            />
            <span className="home-hero-shade" />
          </div>

          <div className="home-hero-content">
            <div className="section">
              <p className="home-kicker">Website design &amp; development · Free SEO audit · Website &amp; cyber security</p>
              <h1>Website development, SEO &amp; cyber security for <em>South African businesses.</em></h1>
              <p className="home-hero-lead">SoftKore Digital builds fast business websites, starts with a free SEO audit to get them properly indexed and ranking on Google, and protects them against hacks, malware and data leaks across all nine provinces.</p>
              <div className="home-actions">
                <Link prefetch={false} className="home-btn home-btn-audit" href="/contact/?service=free-seo-audit#contact-form">Free SEO Audit <UiIcon name="search" /></Link>
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
                <Link prefetch={false} href={card.href} className="home-industry-card" key={card.sector}>
                  <figure>
                    <img src={card.image.src} alt={card.image.alt} width={1536} height={1024} loading="lazy" />
                    <span>{card.sector}</span>
                  </figure>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                  <strong>Read industry playbook <UiIcon name="arrow" /></strong>
                </Link>
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
              <p>Request a free SEO audit or start a project chat — whether you need a new website, better Google visibility or stronger website security, we will give you a straight answer on the best next step.</p>
            </div>
            <div className="home-actions">
              <Link prefetch={false} className="home-btn home-btn-audit" href="/contact/?service=free-seo-audit#contact-form">Free SEO Audit <UiIcon name="search" /></Link>
              <Link prefetch={false} className="home-btn home-btn-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link>
            </div>
          </div>
        </section>

        <HomeMotion />
      </main>
    </>
  );
}
