import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { ConversionBand, FaqList } from "@/components/PageSections";
import { UiIcon } from "@/components/UiIcon";
import { projectTypes } from "@/data/case-studies";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { pageHeroImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "How We Approach Website, SEO & Security Projects | SoftKore Digital",
  "The website development, SEO recovery and cyber security projects SoftKore Digital takes on, how we approach each one, and what you receive.",
  "/work/",
  pageHeroImages.work.src,
);

const workFaqs = [
  {
    question: "Can I see live website or SEO audit examples relevant to my industry?",
    answer:
      "Yes. Request relevant examples via our [contact page](/contact/) and browse our [industry playbooks](/guides/#industries) for exact page structures, ZAR cost ranges and security workflows by sector.",
  },
  {
    question: "What happens during project discovery before coding starts?",
    answer:
      "We map your commercial goals, customer objections, existing URLs and technical risks, delivering a plain-English scope before design or development begins.",
  },
  {
    question: "Do clients review real working pages before a website launches?",
    answer:
      "Yes. Instead of signing off static images alone, you review live staging pages on desktop and mobile phones so speed, readability and WhatsApp or enquiry paths feel right before launch.",
  },
  {
    question: "How do you protect existing Google traffic during a website rebuild?",
    answer:
      "We audit current indexed pages in Search Console, preserve strong URLs wherever sensible and test single-hop 301 redirects for every changed path using our [website redesign SEO checklist](/guides/website-redesign-seo-checklist/).",
  },
  {
    question: "What launch checks do you run before calling a project finished?",
    answer:
      "Every launch passes automated and manual checks for canonicals, XML sitemaps, 301 redirect chains, HTTPS/HSTS headers, live contact form email delivery and mobile Core Web Vitals.",
  },
  {
    question: "What deliverables do we receive when a project wraps up?",
    answer:
      "You receive full domain and code ownership, verified Google Search Console and Analytics access, documentation of technical changes and optional ongoing [website security monitoring](/services/website-security/).",
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Work", url: absoluteUrl("/work/") }])} />
      <JsonLd data={faqSchema(workFaqs)} />
      <main>
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
          kicker="Our delivery standard"
          title="How we approach website, SEO and security projects."
          lead="These are the types of project we take on, how we handle each one and what you receive at the end. Ask us for examples relevant to your business when you get in touch."
          image={pageHeroImages.work}
          actions={[
            { label: "Start a Project", href: "/contact/", variant: "primary" },
            { label: "View Services", href: "/services/", variant: "secondary" },
          ]}
          highlights={[
            "A clear scope before work starts",
            "Regular reviews on real screens",
            "Security and redirect checks on launch",
            "Plain-language reporting",
          ]}
        />

        <section className="work-showcase">
          <div className="section visual-work-list">
            {projectTypes.map((project, index) => (
              <article key={project.title}>
                <figure><img src={project.image} alt={project.imageAlt} width={1536} height={1024} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></figure>
                <div><p className="simple-label">{project.category}</p><h2>{project.title}</h2><dl><div><dt>The usual problem</dt><dd>{project.problem}</dd></div><div><dt>Our approach</dt><dd>{project.approach}</dd></div><div><dt>What you receive</dt><dd>{project.deliverable}</dd></div></dl><Link prefetch={false} className="simple-link" href={project.href}>See this service <UiIcon name="arrow" /></Link></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-faq-section" aria-label="Delivery process questions">
          <div className="page-faq-head">
            <p className="stitch-kicker">Project delivery</p>
            <h2>Questions about how projects run.</h2>
            <p>How we scope builds, review staging sites on mobile, protect rankings and verify launches.</p>
          </div>
          <FaqList items={workFaqs} />
        </section>

        <ConversionBand title="Does one of these sound like your business?" text="Start with a free SEO audit or tell us what is happening, and we will tell you honestly what we would do first." primaryLabel="Start a Project" secondaryHref="/contact/?service=free-seo-audit#contact-form" secondaryLabel="Get a Free SEO Audit" />
      </main>
    </>
  );
}
