import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { ConversionBand, FaqList } from "@/components/PageSections";
import { services } from "@/data/services";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { pageHeroImages, serviceCardImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "Web Development, SEO & Security Services SA | SoftKore",
  "Website design & development, technical SEO & indexing recovery, and website & cyber security for South African businesses across all nine provinces.",
  "/services/",
  pageHeroImages.services.src,
);

const servicesFaqs = [
  {
    question: "How do I choose between website development, SEO and security first?",
    answer:
      "Start with the biggest commercial bottleneck: fix malware or downtime first via [website security](/services/website-security/), request a [free SEO audit](/contact/?service=free-seo-audit#contact-form) if your site exists but brings low traffic, or rebuild with [website development](/services/web-development/) if pages are slow or outdated.",
  },
  {
    question: "Can you bundle website development, SEO and security into one project?",
    answer:
      "Yes. Most clients combine all three in one scope so page hierarchy, technical SEO, redirect rules, SSL headers and spam protection launch cleanly together instead of paying twice to retrofit fixes later.",
  },
  {
    question: "Why start with a free SEO audit before choosing a monthly package?",
    answer:
      "An audit separates technical indexing faults from content or authority gaps before you commit budget. We inspect Search Console and crawl health first so any [SEO retainer](/services/seo-services/) targets real revenue blockers.",
  },
  {
    question: "Do we have to rebuild our website from scratch to work with you?",
    answer:
      "No. If your underlying build is stable, we often fix Search Console indexing errors, rewrite weak service copy and harden plugins or Cloudflare WAF rules directly on your existing site.",
  },
  {
    question: "Do you offer fixed-scope projects as well as monthly retainers?",
    answer:
      "Yes. New websites, redesigns, once-off technical SEO audits and emergency hack recoveries run on clear fixed scopes in rand, while ongoing SEO growth and monthly security monitoring run without rigid 12-month lock-ins.",
  },
  {
    question: "How does remote delivery work for companies outside Johannesburg?",
    answer:
      "Discovery calls, staging walkthroughs, Search Console reviews and sign-offs run over video calls, email and WhatsApp across all nine provinces. See how our [delivery process](/work/) keeps timelines clear.",
  },
  {
    question: "Which South African industries do your services cover best?",
    answer:
      "We work heavily with medical clinics, construction and engineering firms, logistics companies, estate agencies, trades and solar installers, salons, law firms, accountants and local retailers. Browse our [industry playbooks](/guides/#industries).",
  },
  {
    question: "Does SoftKore provide post-launch support for sites built elsewhere?",
    answer:
      "Yes. We regularly step in to patch WordPress builds, set up encrypted [off-site backups](/guides/offsite-website-backups-south-africa/), repair DNS email authentication and monitor uptime on sites created by previous suppliers.",
  },
];

const serviceIcons: UiIconName[] = ["globe", "search", "shield"];
const serviceTags = [
  ["Responsive", "SEO-ready", "Fast"],
  ["Technical SEO", "Indexing", "Rankings"],
  ["Audits", "Hardening", "Protection"],
];

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Services", url: absoluteUrl("/services/") }])} />
      <JsonLd data={faqSchema(servicesFaqs)} />
      <main className="stitch-page stitch-services-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          kicker="Serving businesses across South Africa"
          title="Website design & development, SEO and cyber security services."
          lead="We focus on three things that determine whether a business website works: building it cleanly, helping customers find it on Google — starting with a free SEO audit — and keeping it secure against threats."
          image={pageHeroImages.services}
          actions={[
            { label: "Get a Free SEO Audit", href: "/contact/?service=free-seo-audit#contact-form", variant: "primary" },
            { label: "Start a Project", href: "/contact/", variant: "secondary" },
          ]}
        />

        <section className="section services-bento" aria-label="SoftKore Digital services">
          {services.map((service, index) => {
            const media = serviceCardImages[service.slug];
            return (
            <Link prefetch={false} key={service.slug} href={`/services/${service.slug}/`} className={`service-bento-card service-bento-card-${index + 1}`}>
              {media ? (
                <figure className="service-bento-media">
                  <img src={media.src} alt={media.alt} width={1536} height={1024} loading="lazy" />
                </figure>
              ) : null}
              <span className="stitch-icon"><UiIcon name={serviceIcons[index] ?? "layers"} /></span>
              <p className="stitch-kicker">{service.eyebrow}</p>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <ul className="service-benefits">{service.summary.slice(0, 3).map((item) => <li key={item}><UiIcon name="arrow" />{item}</li>)}</ul>
              <div className="service-tags">{serviceTags[index]?.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <strong>View service <UiIcon name="arrow" /></strong>
            </Link>
            );
          })}
        </section>

        <section className="section stitch-process stitch-services-process">
          <div className="stitch-section-heading"><p className="stitch-kicker">How the services connect</p><h2>Build it right, get found, stay protected.</h2><p>A fast website fails if nobody finds it on Google. Strong search traffic fails if a security breach takes the site offline or injects spam. Start with whichever pillar needs attention most.</p></div>
          <div className="services-connection"><div><UiIcon name="globe" /><strong>Build it right</strong><span>Website design &amp; development</span></div><i /><div><UiIcon name="search" /><strong>Get found</strong><span>Technical &amp; on-page SEO</span></div><i /><div><UiIcon name="shield" /><strong>Stay protected</strong><span>Website &amp; cyber security</span></div></div>
        </section>

        <section className="section page-faq-section" aria-label="Services frequently asked questions">
          <div className="page-faq-head">
            <p className="stitch-kicker">Common questions</p>
            <h2>Questions about how our services fit together.</h2>
            <p>Practical answers on combining website builds, SEO recovery and cyber security for your business.</p>
          </div>
          <FaqList items={servicesFaqs} />
        </section>

        <ConversionBand title="Not sure which service you need?" text="Start with a free SEO audit or tell us what is not working. We will tell you honestly what we would do first, wherever you are in South Africa." primaryHref="/contact/?service=free-seo-audit#contact-form" primaryLabel="Get a Free SEO Audit" secondaryHref="/guides/" secondaryLabel="Read Our Guides" />
      </main>
    </>
  );
}
