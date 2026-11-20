import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { ConversionBand } from "@/components/PageSections";
import { UiIcon } from "@/components/UiIcon";
import { projectTypes } from "@/data/case-studies";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { pageHeroImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "How We Approach Website, SEO & Security Projects | SoftKore Digital",
  "The website development, SEO recovery and cyber security projects SoftKore Digital takes on, how we approach each one, and what you receive.",
  "/work/",
);

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Work", url: absoluteUrl("/work/") }])} />
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

        <ConversionBand title="Does one of these sound like your business?" text="Tell us what is happening, and we will tell you honestly what we would do first." primaryLabel="Start a Project" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
