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
  "The website, SEO and cyber security projects SoftKore Digital takes on, how we handle each one, and what you get at the end.",
  "/work/",
  pageHeroImages.work.src,
);

const workFaqs = [
  {
    question: "Can I see live website or SEO audit examples relevant to my industry?",
    answer:
      "Get in touch through our [contact page](/contact/) and we will walk you through a sample audit or live preview relevant to your industry. In the meantime, our [industry playbooks](/guides/#industries) set out the page structure, rand budgets and security steps we recommend for South African businesses.",
  },
  {
    question: "What happens during project discovery before coding starts?",
    answer:
      "We find out what you want the website to achieve, what makes customers hesitate, which of your existing pages already bring visitors and any technical or security risks. You then get a written plan in plain English, agreed before any design or building starts, so there are no surprises later.",
  },
  {
    question: "Do clients review real working pages before a website launches?",
    answer:
      "Yes. Instead of approving pictures of a design, you test real working pages on a private preview of your new site, on your own laptop and phone. That way you can check the speed, how easy it is to read and how customers contact you by WhatsApp or form before anything goes live.",
  },
  {
    question: "How do you protect existing Google traffic during a website rebuild?",
    answer:
      "We list every page Google currently shows for your site, keep the strongest page addresses wherever sensible, and set up and test a redirect for every page that moves, so old links go straight to the new page. We follow our [website redesign SEO checklist](/guides/website-redesign-seo-checklist/) every time.",
  },
  {
    question: "What launch checks do you run before calling a project finished?",
    answer:
      "Before launch we check, by hand and with tools, that every old link still works, Google can find every page and knows which version is the main one, a secure HTTPS connection and browser security settings are on, your forms actually send email, and the site passes Google's speed tests on phones.",
  },
  {
    question: "What deliverables do we receive when a project wraps up?",
    answer:
      "You get full ownership of your domain and website code, your own access to Google Search Console and Google Analytics, and a written record of the technical changes we made. If you want ongoing peace of mind, you can add [website security monitoring](/services/website-security/) afterwards.",
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
          title="How we approach website, SEO and security projects."
          lead="These are the projects we take on, how we run each stage, and what you receive at handover. Get in touch to request a sample audit or live preview relevant to your industry."
          image={pageHeroImages.work}
          actions={[
            { label: "Start a project", href: "/contact/", variant: "primary" },
            { label: "View services", href: "/services/", variant: "secondary" },
          ]}
          highlights={[
            "A clear scope before work starts",
            "Regular reviews on real screens",
            "Security and broken-link checks at launch",
            "Clear monthly reporting",
          ]}
        />

        <section className="work-showcase">
          <div className="section visual-work-list">
            {projectTypes.map((project, index) => (
              <article key={project.title}>
                <figure><img src={project.image} alt={project.imageAlt} width={1536} height={1024} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></figure>
                <div><h2>{project.title}</h2><dl><div><dt>The usual problem</dt><dd>{project.problem}</dd></div><div><dt>Our approach</dt><dd>{project.approach}</dd></div><div><dt>What you receive</dt><dd>{project.deliverable}</dd></div></dl><Link prefetch={false} className="simple-link" href={project.href}>See this service <UiIcon name="arrow" /></Link></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-faq-section" aria-label="Delivery process questions">
          <div className="page-faq-head">

            <h2>Questions about how projects run.</h2>
            <p>How we plan projects, let you preview the site on your phone, protect your Google rankings and check everything at launch.</p>
          </div>
          <FaqList items={workFaqs} />
        </section>

        <ConversionBand title="Does one of these sound like your business?" text="Start with a free SEO audit or tell us what is happening, and we'll reply with what we would fix first." primaryLabel="Start a project" secondaryHref="/contact/?service=free-seo-audit#contact-form" secondaryLabel="Get my free SEO audit" />
      </main>
    </>
  );
}
