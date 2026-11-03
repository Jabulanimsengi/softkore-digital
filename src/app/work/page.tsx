import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { projectTypes } from "@/data/case-studies";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Approach Website, SEO and Software Projects",
  description: "The website, SEO and web application projects SoftKore Digital takes on, how we approach each one, and what you receive at the end.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Work", url: absoluteUrl("/work/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Work</span></nav>
              <h1>How we approach website, SEO and software projects.</h1>
              <p>These are the types of project we take on, how we handle each one and what you receive at the end. Ask us for examples relevant to your business when you get in touch.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Start a project</Link><Link prefetch={false} className="button button-secondary" href="/services/">View services</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="work" /><strong>On every project</strong><ul><li>A clear scope before work starts</li><li>Regular reviews on real screens</li><li>Testing on the live site</li><li>Plain-language reporting</li></ul></aside>
          </div>
        </section>

        <section className="work-showcase">
          <div className="section visual-work-list">
            {projectTypes.map((project, index) => (
              <article key={project.title}>
                <figure><img src={project.image} alt={project.imageAlt} width={1536} height={1024} loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></figure>
                <div><p className="simple-label">{project.category}</p><h2>{project.title}</h2><dl><div><dt>The usual problem</dt><dd>{project.problem}</dd></div><div><dt>Our approach</dt><dd>{project.approach}</dd></div><div><dt>What you receive</dt><dd>{project.deliverable}</dd></div></dl><Link prefetch={false} className="simple-link" href={project.href}>See this service <span>-&gt;</span></Link></div>
              </article>
            ))}
          </div>
        </section>

        <ConversionBand title="Does one of these sound like your business?" text="Tell us what is happening, and we will tell you honestly what we would do first." primaryLabel="Start a Project" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
