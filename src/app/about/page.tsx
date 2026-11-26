import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { FaqList } from "@/components/PageSections";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { Testimonials } from "@/components/Testimonials";
import { UiIcon } from "@/components/UiIcon";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl, company, companyAddressLine } from "@/lib/site";
import { aboutGalleryImages, pageHeroImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "About SoftKore Digital | Web Development, SEO & Cyber Security",
  "SoftKore Digital is a South African web company focused on website design and development, SEO services, and website & cyber security for businesses across the country.",
  "/about/",
  pageHeroImages.about.src,
);

const aboutFaqs = [
  {
    question: "Who is SoftKore Digital and where are you based?",
    answer:
      "SoftKore Digital is the trading name of African Digital Tech Solutions (Pty) Ltd, a CIPC-registered company (2026/810960/07) with its registered office at 111 Commissioner Street, Johannesburg. We build, optimise and secure business websites nationwide. Reach us via the [contact page](/contact/).",
  },
  {
    question: "Why does SoftKore focus on web development, SEO and security instead of social media ads?",
    answer:
      "Because a business website only keeps bringing in customers when three things work together: it is fast, Google can find and show it, and it is safe from hackers. Focusing on just those three lets us do them properly, instead of spreading thin across every kind of marketing.",
  },
  {
    question: "How do you keep remote web projects predictable across all nine provinces?",
    answer:
      "Every stage ends with something you can see and check: a written plan, a private preview of your new site that you test on your own phone, and a final check of the live site. Businesses in Cape Town, Durban, Pretoria or a small town all get the same clear process.",
  },
  {
    question: "What technology does SoftKore prefer for South African business websites?",
    answer:
      "We usually build custom, lightweight websites (using Next.js) because they load fast and give hackers fewer ways in. If your team wants to edit pages themselves every day, we build a well-secured WordPress site instead. Compare both options in our [WordPress vs custom guide](/guides/wordpress-vs-custom-website-south-africa/).",
  },
  {
    question: "How do you keep SEO reporting transparent and verifiable?",
    answer:
      "Everything is measured in your own Google Search Console and Google Analytics accounts, which you can log into at any time. You can see for yourself how many pages Google shows, how many people click through from search and which fixes we made, instead of relying on our own made-up scores.",
  },
  {
    question: "Will you audit an existing website built by another agency or freelancer?",
    answer:
      "Yes. Taking over sites left behind by another agency or freelancer, often with slow, overloaded designs or missing logins, is a core part of our work. Start with a [free SEO audit](/contact/?service=free-seo-audit#contact-form) or a [website security audit](/services/website-security/) to see your real position first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "About", url: absoluteUrl("/about/") },
      ])} />
      <JsonLd data={faqSchema(aboutFaqs)} />
      <main className="simple-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
          title="Clear advice, solid websites, and no agency lock-in."
          lead="We specialise in three connected areas for South African businesses: website builds, Google SEO and cyber security — handled together so you never pay twice to fix agency gaps."
          image={pageHeroImages.about}
          actions={[
            { label: "Start a project", href: "/contact/", variant: "primary" },
            { label: "Explore services", href: "/services/", variant: "secondary" },
          ]}
        />

        <section className="section simple-about-statement">

          <h2>Most agencies split websites, SEO and security across separate teams. We build all three in properly from day one.</h2>
        </section>

        <section className="section simple-about-values">
          <article><span>01</span><h3>We tell you what you actually need</h3><p>Sometimes that means fixing the problems stopping Google from showing your current site, tightening security, or replacing a few weak pages rather than rebuilding everything. We give you an honest assessment first.</p></article>
          <article><span>02</span><h3>We build light, secure sites</h3><p>Well-built, uncluttered websites load faster, rank better on Google and leave hackers fewer ways in.</p></article>
          <article><span>03</span><h3>We stay honest about results</h3><p>We measure progress in your own Google accounts — never made-up agency scores. Nobody can honestly guarantee a #1 ranking or 100% immunity from hacks, so we show you the real numbers and the exact work completed.</p></article>
        </section>

        <section className="section simple-about-gallery" aria-label="How we work">
          {aboutGalleryImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} width={1536} height={1024} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </section>

        <section className="section simple-about-values">
          <article><span>04</span><h3>We work across South Africa</h3><p>Projects run remotely over video calls, email and WhatsApp, so businesses in any of the nine provinces get the same process and the same attention.</p></article>
          <article><span>05</span><h3>We build for local conditions</h3><p>That means pages that stay light on mobile data, WhatsApp and call options within easy reach, South African payment providers, and security that meets POPIA's requirements.</p></article>
          <article><span>06</span><h3>We stay after launch</h3><p>Websites need regular updates, backups, security checks and an eye on how they show up on Google. We look after sites once they are live, including sites we did not build.</p></article>
        </section>

        <section className="section about-company" aria-labelledby="about-company-title">
          <div className="about-company-head">

            <h2 id="about-company-title">A registered, Level 1 B-BBEE South African company.</h2>
            <p>
              {company.tradingName} is the trading name of {company.legalName}. Procurement teams can request copies of
              our CIPC registration and B-BBEE certificate through the <Link prefetch={false} href="/contact/">contact page</Link>.
            </p>
          </div>
          <dl className="about-company-facts">
            <div><dt>Registered name</dt><dd>{company.legalName}</dd></div>
            <div><dt>CIPC registration no.</dt><dd>{company.registrationNumber}</dd></div>
            <div><dt>Registered office</dt><dd>{companyAddressLine}</dd></div>
            <div>
              <dt>B-BBEE status</dt>
              <dd>
                {company.bbbee.level} contributor, {company.bbbee.type}, {company.bbbee.procurementRecognition} procurement
                recognition. Certificate valid until {company.bbbee.expiresDisplay}.
              </dd>
            </div>
            <div>
              <dt>Ownership</dt>
              <dd>{company.bbbee.blackOwnership} black-owned and {company.bbbee.youthOwnership} youth-owned.</dd>
            </div>
            <div>
              <dt>POPIA</dt>
              <dd>
                Information Officer registered with the Information Regulator (no.{" "}
                {company.informationOfficer.regulatorRegistration}). Read our{" "}
                <Link prefetch={false} href="/privacy-policy/">privacy policy</Link>.
              </dd>
            </div>
          </dl>
        </section>

        <Testimonials />

        <section className="section page-faq-section" aria-label="About SoftKore Digital questions">
          <div className="page-faq-head">

            <h2>Questions about how SoftKore Digital works.</h2>
            <p>How we think, the technology we use and how we work with businesses across South Africa.</p>
          </div>
          <FaqList items={aboutFaqs} />
        </section>

        <section className="section simple-final">

          <h2>Tell us what your website needs to do.</h2>
          <Link prefetch={false} className="simple-button simple-button-light" href="/contact/">Start a project <UiIcon name="arrow" /></Link>
        </section>
      </main>
    </>
  );
}
