import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { ConversionBand } from "@/components/PageSections";
import { services } from "@/data/services";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { pageHeroImages, serviceCardImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "Web Development, SEO & Security Services SA | SoftKore",
  "Website design & development, technical SEO & indexing recovery, and website & cyber security for South African businesses across all nine provinces.",
  "/services/",
);

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
      <main className="stitch-page stitch-services-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          kicker="Serving businesses across South Africa"
          title="Website design & development, SEO and cyber security services."
          lead="We focus on three things that determine whether a business website works: building it cleanly, helping customers find it on Google, and keeping it secure against threats."
          image={pageHeroImages.services}
          actions={[
            { label: "Start a Project", href: "/contact/", variant: "primary" },
            { label: "How We Work", href: "/work/", variant: "secondary" },
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

        <ConversionBand title="Not sure which service you need?" text="Tell us what is not working. We will tell you honestly what we would do first, wherever you are in South Africa." primaryLabel="Start a Project" secondaryHref="/guides/" secondaryLabel="Read Our Guides" />
      </main>
    </>
  );
}
