import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { UiIcon } from "@/components/UiIcon";
import { ConversionBand, FaqList } from "@/components/PageSections";
import { services } from "@/data/services";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { pageHeroImages, serviceCardImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "Web Development, SEO & Security Services SA | SoftKore",
  "Website design & development, SEO that gets you found on Google, and website & cyber security for South African businesses in all nine provinces.",
  "/services/",
  pageHeroImages.services.src,
);

const servicesFaqs = [
  {
    question: "How do I choose between website development, SEO and security first?",
    answer:
      "Start with whatever is costing you the most business. If your site is hacked or keeps going offline, start with [website security](/services/website-security/). If it works but few people find it, request a [free SEO audit](/contact/?service=free-seo-audit#contact-form). If it is slow or outdated, start with [website development](/services/web-development/).",
  },
  {
    question: "Can you bundle website development, SEO and security into one project?",
    answer:
      "Yes, and most clients do. Doing all three in one project means the page structure, the Google set-up, the security settings and the spam protection are done once, properly, from launch. You avoid paying twice to fix them after the site is already live.",
  },
  {
    question: "Why start with a free SEO audit before choosing a monthly package?",
    answer:
      "Because it shows what is really holding your site back before you spend money. The audit tells us whether Google can't read your pages, whether the pages are too weak, or whether Google doesn't trust the site yet. That way any [monthly SEO work](/services/seo-services/) goes straight to what's costing you enquiries.",
  },
  {
    question: "Do we have to rebuild our website from scratch to work with you?",
    answer:
      "No. If your current website is sound underneath, we usually improve it as it is. We fix the problems stopping Google from showing your pages, rewrite weak service pages, update or remove risky plugins and set up a firewall, all on your existing site.",
  },
  {
    question: "Do you offer fixed-scope projects as well as monthly retainers?",
    answer:
      "Yes. New websites, redesigns, once-off SEO audits and emergency hack clean-ups are quoted as fixed projects with a clear price in rand. Ongoing SEO work and monthly security monitoring are month-to-month, without locking you into a 12-month contract. You always know the price before any work starts.",
  },
  {
    question: "How does remote delivery work for companies outside Johannesburg?",
    answer:
      "Everything happens by video call, email and WhatsApp, wherever you are in South Africa. That includes the first meeting, walking you through a private preview of your new site, reviewing your Google reports and signing off each stage. See how our [delivery process](/work/) keeps timelines clear.",
  },
  {
    question: "Which South African industries do your services cover best?",
    answer:
      "We work a lot with medical clinics, construction and engineering firms, logistics companies, estate agencies, trades and solar installers, salons, law firms, accountants and local shops. Each has its own guide to what its customers look for online. Browse our [industry playbooks](/guides/#industries).",
  },
  {
    question: "Does SoftKore provide post-launch support for sites built elsewhere?",
    answer:
      "Yes. We often look after sites that someone else built. We update and secure WordPress sites, set up [backups stored safely off your server](/guides/offsite-website-backups-south-africa/), fix email settings so your messages don't land in spam, and alert you if your site goes down.",
  },
];

// One short line per card; the full detail lives on each service page.
const serviceCardLines = [
  "Fast, mobile-first websites that turn visitors into enquiries.",
  "Show up on Google when South African buyers search for what you do.",
  "Block attacks before they happen, and clean up fast if you've been hit.",
];

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Services", url: absoluteUrl("/services/") }])} />
      <JsonLd data={faqSchema(servicesFaqs)} />
      <main className="stitch-page stitch-services-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          title="Website design & development, SEO and cyber security services."
          lead="We focus on the three things that decide whether a business website works: building it properly, helping customers find it on Google (starting with a free SEO audit) and keeping it safe from hackers."
          image={pageHeroImages.services}
          actions={[
            { label: "Get my free SEO audit", href: "/contact/?service=free-seo-audit#contact-form", variant: "primary" },
            { label: "Start a project", href: "/contact/", variant: "secondary" },
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
              <h2>{service.title}</h2>
              <p>{serviceCardLines[index]}</p>
              <strong>View service <UiIcon name="arrow" /></strong>
            </Link>
            );
          })}
        </section>

        <section className="section stitch-process stitch-services-process">
          <div className="stitch-section-heading"><h2>Build it right, get found, stay protected.</h2><p>A fast website is wasted if nobody finds it on Google. Good Google traffic is wasted if a hack takes the site offline or fills it with spam. Start with whichever one needs attention most.</p></div>
          <div className="services-connection"><div><UiIcon name="globe" /><strong>Build it right</strong><span>Website design &amp; development</span></div><i /><div><UiIcon name="search" /><strong>Get found</strong><span>SEO services</span></div><i /><div><UiIcon name="shield" /><strong>Stay protected</strong><span>Website &amp; cyber security</span></div></div>
        </section>

        <section className="section page-faq-section" aria-label="Services frequently asked questions">
          <div className="page-faq-head">

            <h2>Questions about how our services fit together.</h2>
            <p>How combining a new website, SEO and security saves money and avoids rework.</p>
          </div>
          <FaqList items={servicesFaqs} />
        </section>

        <ConversionBand title="Not sure which service you need?" text="Start with a free SEO audit or tell us what is not working. We'll tell you honestly what we would do first, wherever you are in South Africa." primaryHref="/contact/?service=free-seo-audit#contact-form" primaryLabel="Get my free SEO audit" secondaryHref="/guides/" secondaryLabel="Read our guides" />
      </main>
    </>
  );
}
