import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { SquareButton, SquareButtonShape } from "@/components/SquareButton";
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
  "South African web agency building fast business websites, helping sites show up on Google, and protecting them from hacks and malware nationwide.",
  "/",
  homeHeroImageSrc,
);

// Plain-language promises: the headline says what the client gets, the line underneath
// says how, with any technical term explained rather than used as the headline.
const standards = [
  {
    metric: "Fast on phones",
    label: "Every site is designed for mobile first and checked against Google's own speed tests (Core Web Vitals).",
  },
  {
    metric: "Keeps your rankings",
    label: "When pages move or a site is rebuilt, old links are redirected properly so you don't lose Google traffic.",
  },
  {
    metric: "Built to resist hacks",
    label: "Forms, logins and servers are locked down against common attacks, with POPIA-aware handling of customer data.",
  },
  {
    metric: "Anywhere in SA",
    label: "Working remotely across all nine provinces over video, email and WhatsApp.",
  },
];

const serviceRows: Array<{
  slug: string;
  title: string;
  text: string;
  href: string;
  badge: string;
  linkLabel: string;
}> = [
  {
    slug: "web-development",
    title: "Website design & development",
    text: "Fast websites that turn visitors into enquiries.",
    href: "/services/web-development/",
    badge: "Built for phones first",
    linkLabel: "Explore web development",
  },
  {
    slug: "seo-services",
    title: "SEO services",
    text: "Find out why Google isn't showing you, and fix it.",
    href: "/services/seo-services/",
    badge: "Starts with a free audit",
    linkLabel: "Explore SEO services",
  },
  {
    slug: "website-security",
    title: "Website & cyber security",
    text: "Keep hackers out, and recover fast if they get in.",
    href: "/services/website-security/",
    badge: "Protected & monitored",
    linkLabel: "Explore website security",
  },
];

const process = [
  ["01", "Discover", "We look at your goals, your current website, how it shows up on Google and how secure it is."],
  ["02", "Plan", "We agree on the pages you need, what to fix for Google first, the security you need and the budget."],
  ["03", "Build & Secure", "We design and build the site, set it up for Google and close security gaps, testing on real phones and laptops."],
  ["04", "Monitor & Improve", "We check the live site, make sure Google is listing it, and keep security checks and backups running."],
];

const homeFaqs = [
  {
    question: "Do you work with businesses across all nine provinces of South Africa?",
    answer:
      "Yes. We work remotely with businesses in Gauteng, the Western Cape, KwaZulu-Natal and every other province. First meetings, design reviews and launch sign-off all happen by video call, email or WhatsApp, so where you are makes no difference. Get in touch through our [contact page](/contact/).",
  },
  {
    question: "How much does a business website cost in South Africa?",
    answer:
      "Most simple company websites cost R15,000 to R25,000 once-off. Websites built to bring in a steady flow of enquiries usually cost R25,000 to R75,000, and online stores start at around R35,000. Our [website prices guide](/guides/website-prices-south-africa/) shows what is included at each price, in rand.",
  },
  {
    question: "How long does it take to design and launch a new website?",
    answer:
      "A typical business website takes three to six weeks from our first meeting to going live. Online stores and bigger redesigns take six to ten weeks, because there is more to build and test. Read our [website timeline guide](/guides/how-long-to-build-a-website-south-africa/) or see our [website development service](/services/web-development/).",
  },
  {
    question: "Do you build mobile-first websites for PayFast, Yoco and Ozow payments?",
    answer:
      "Yes. Every site is designed for phones first and kept light so it loads quickly on South African mobile data. We add WhatsApp buttons for enquiries and, if you sell online, local payment options. Compare them in our [PayFast vs Yoco vs Ozow guide](/guides/payfast-vs-yoco-vs-ozow-south-africa/).",
  },
  {
    question: "What is included in your free SEO audit?",
    answer:
      "We check whether Google is listing your pages, whether anything is blocking Google from reading them, how fast your site is on phones, how clear your service pages are and how easily local customers can find you. You get a short fix list ranked by priority. Request yours on our [Free SEO Audit form](/contact/?service=free-seo-audit#contact-form).",
  },
  {
    question: "Can any agency guarantee a number-one Google ranking in South Africa?",
    answer:
      "No. Only Google decides rankings, and it changes how it ranks sites regularly. What we do promise is fixes based on real data, service pages that answer what your customers are actually searching for, and an honest monthly report as part of our [SEO services](/services/seo-services/).",
  },
  {
    question: "Why is my website showing 'Crawled - currently not indexed' in Search Console?",
    answer:
      "It means Google looked at those pages but decided not to show them in search results. Usually the pages say too little, repeat each other (for example, one page copied for many towns) or have too few links from your other pages. Our [step-by-step guide](/guides/fix-crawled-currently-not-indexed/) shows how to fix it.",
  },
  {
    question: "Which industries do you build and optimise websites for?",
    answer:
      "We work with medical clinics, construction and engineering firms, logistics fleets, real estate agencies, trades and solar installers, salons, law firms, accountants and South African retailers. Each industry has its own guide showing the pages its customers look for and the security it needs. Explore our dedicated [industry playbooks](/guides/#industries).",
  },
  {
    question: "Can you clean and restore a website that has already been hacked?",
    answer:
      "Yes. We cut the hacker off, remove the harmful code and spam pages, change every password that may have been exposed, close the gap they got in through and help remove Google's security warnings. Read our [hacked website recovery guide](/guides/hacked-website-recovery-south-africa/) or see our [website security services](/services/website-security/).",
  },
  {
    question: "Can you take over and secure a WordPress or custom website another agency built?",
    answer:
      "Yes. We start by checking your hosting, admin logins, plugins, your HTTPS security certificate, your domain settings and your firewall. Then we give you a clear, practical plan to fix what we find, in order of importance. This is part of our [website and cyber security service](/services/website-security/).",
  },
  {
    question: "What does website security cover under South Africa's POPIA requirements?",
    answer:
      "POPIA expects you to take reasonable steps to protect the personal information people send through your website. In practice that means a secure HTTPS connection, giving staff only the access they need, blocking spam and keeping tested backups. Check our [POPIA website compliance checklist](/guides/popia-website-compliance-checklist/).",
  },
  {
    question: "Do I own my .co.za domain, website code and Search Console data once built?",
    answer:
      "Yes. Your .co.za or .com domain stays registered in your company's name, and the website code and your Google Analytics and Search Console accounts all belong to you. Our [.co.za vs .com domain guide](/guides/co-za-vs-com-domain-south-africa/) explains how to keep control of your domain.",
  },
];

const aboutPoints = [
  "You own 100% of your .co.za domain, website code and Google accounts from day one.",
  "Fixed prices on builds and month-to-month support, with no 12-month lock-in contracts.",
  "CIPC-registered, Level 1 B-BBEE (135% recognition) with a registered POPIA Information Officer.",
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
        {/* Hero */}
        <section className="hx-hero" aria-labelledby="hx-hero-title">
          <img
            className="hx-hero-bg"
            src={homeHeroImageSrc}
            alt={homeHeroImage.alt}
            width={1920}
            height={1288}
            fetchPriority="high"
          />
          <div className="hx-wrap hx-hero-content">
            <p className="hx-hero-title-main">Built to be found. <em>Built to be trusted.</em></p>
            <h1 className="hx-hero-h1" id="hx-hero-title">
              Website development, SEO &amp; cyber security for South African businesses. <span>Start with a free SEO audit — get a clear fix list within one business day.</span>
            </h1>
            <div className="hx-actions">
              <SquareButton variant="white" href="/contact/?service=free-seo-audit#contact-form">Get my free SEO audit</SquareButton>
              <SquareButton variant="ghost" href="/services/">View services</SquareButton>
            </div>
          </div>
        </section>

        {/* Why SoftKore */}
        <section className="hx-section hx-statement">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 className="hx-statement-text">A website can look fine and still lose customers: <mark>invisible on Google</mark>, <mark>slow on mobile</mark>, or <mark>one outdated plugin away from a hack</mark>. We fix all three, and explain every step without the jargon.</h2>
            </div>
            <dl className="hx-standards" aria-label="Included in every SoftKore website">
              {standards.map((item) => (
                <div key={item.metric}>
                  <dt>{item.label}</dt>
                  <dd>{item.metric}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Services */}
        <section className="hx-section hx-paper" aria-labelledby="hx-services-title">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 id="hx-services-title">Three services. One goal: more of the right customers.</h2>
            </div>
            <div className="hx-tiles">
              {serviceRows.map((service, index) => {
                const image = homeServiceImages[service.slug];
                return (
                  <Link prefetch={false} href={service.href} className="hx-tile" key={service.href}>
                    {image ? <img src={image.src} alt={image.alt} width={1536} height={1024} loading="lazy" /> : null}
                    <div className="hx-tile-body">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <SquareButtonShape variant="white" size="sm">{service.linkLabel}</SquareButtonShape>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="hx-center">
              <SquareButton variant="line" href="/services/">Explore all services</SquareButton>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="hx-section" id="work" aria-labelledby="hx-problems-title">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 id="hx-problems-title">The problems we solve.</h2>
            </div>
            <div className="hx-problems">
              {projectTypes.map((study) => (
                <article className="hx-problem" key={study.title}>
                  <figure>
                    <img src={study.image} alt={study.imageAlt} width={1536} height={1024} loading="lazy" />
                  </figure>
                  <div className="hx-problem-body">
                    <h3>{study.problemHeadline}</h3>
                    <p>{study.problemSummary}</p>
                    <SquareButton variant="navy" size="sm" href={study.href}>{study.ctaLabel}</SquareButton>
                  </div>
                </article>
              ))}
            </div>
            <div className="hx-center">
              <SquareButton variant="line" href="/work/">See how we work</SquareButton>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="hx-section hx-paper" aria-labelledby="hx-process-title">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 id="hx-process-title">A clear process from first call to launch.</h2>
              <p>A focused business website normally takes three to six weeks; online stores and larger redesigns take six to ten.</p>
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

        {/* Industries */}
        <section className="hx-section" aria-labelledby="hx-industries-title">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 id="hx-industries-title">Websites built for how your customers buy.</h2>
            </div>
            <div className="hx-tiles hx-tiles-small">
              {homeIndustryCards.map((card) => (
                <Link prefetch={false} href={card.href} className="hx-tile" key={card.sector}>
                  <img src={card.image.src} alt={card.image.alt} width={1536} height={1024} loading="lazy" />
                  <div className="hx-tile-body">
                    <h3>{card.sector}</h3>
                    <p>{card.title}</p>
                    <SquareButtonShape variant="white" size="sm">Read playbook</SquareButtonShape>
                  </div>
                </Link>
              ))}
            </div>
            <div className="hx-center">
              <SquareButton variant="line" href="/contact/">Talk about your industry</SquareButton>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="hx-team" aria-labelledby="hx-team-title">
          <figure className="hx-team-media">
            <img src={homeTeamImage.src} alt={homeTeamImage.alt} width={1536} height={1024} loading="lazy" />
          </figure>
          <div className="hx-team-copy">
            <h2 id="hx-team-title">Built for South African businesses. No agency lock-in.</h2>
            <ul>
              {aboutPoints.map((point) => (
                <li key={point}><CheckIcon />{point}</li>
              ))}
            </ul>
            <SquareButton variant="white" href="/about/">About SoftKore</SquareButton>
          </div>
        </section>

        <Testimonials />

        {/* Guides */}
        <section className="hx-section" aria-labelledby="hx-guides-title">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 id="hx-guides-title">Straight answers before you spend a rand.</h2>
            </div>
            <div className="hx-guides">
              {featuredGuideSlugs.map((slug) => {
                const guide = getGuide(slug);
                if (!guide) return null;
                const stats = getGuideReadingStats(guide);
                return (
                  <Link prefetch={false} href={`/guides/${guide.slug}/`} className="hx-guide" key={slug}>
                    <strong>{guide.title}</strong>
                    <span className="hx-guide-meta">{stats.label}</span>
                    <SquareButtonShape variant="navy" size="sm">Read</SquareButtonShape>
                  </Link>
                );
              })}
            </div>
            <div className="hx-center">
              <SquareButton variant="line" href="/guides/">All guides</SquareButton>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="hx-section hx-paper hx-faq" aria-labelledby="hx-faq-title">
          <div className="hx-wrap">
            <div className="hx-title">
              <h2 id="hx-faq-title">What South African businesses ask us first.</h2>
            </div>
            <FaqList items={homeFaqs} />
            <div className="hx-center">
              <SquareButton variant="line" href="/guides/">Read our guides</SquareButton>
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="hx-closing" aria-labelledby="hx-closing-title">
          {closingImage ? (
            <img className="hx-closing-bg" src={closingImage.src} alt={closingImage.alt} width={1536} height={1024} loading="lazy" />
          ) : null}
          <div className="hx-wrap hx-closing-copy">
            <h2 id="hx-closing-title">Start with a free SEO audit. <em>Decide after.</em></h2>
            <p>Tell us what you need from your website — a new build, better Google visibility or stronger security — and we will reply with an honest next step within one business day.</p>
            <div className="hx-actions">
              <SquareButton variant="emerald" href="/contact/?service=free-seo-audit#contact-form">Get my free SEO audit</SquareButton>
              <SquareButton variant="ghost" href="/contact/">Start a project</SquareButton>
            </div>
          </div>
        </section>

        <HomeMotion />
      </main>
    </>
  );
}
