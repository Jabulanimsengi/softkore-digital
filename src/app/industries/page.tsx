import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { industries, industryUrl } from "@/data/industries";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { industryImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "Websites by Industry South Africa | SoftKore Digital",
  "What a good website or system needs in different industries, from salons and medical practices to law firms, property, construction and logistics.",
  "/industries/",
);

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Industries", url: absoluteUrl("/industries/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Industries</span></nav>
              <h1>Websites and systems for South African industries.</h1>
              <p>A patient choosing a dentist and a buyer comparing logistics suppliers need very different things from a website. These pages explain what matters most in each industry.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Discuss your business</Link><Link prefetch={false} className="button button-secondary" href="/services/">View services</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="industries" /><strong>What each page covers</strong><ul><li>How customers choose</li><li>What builds trust</li><li>Useful features</li><li>Common questions</li></ul></aside>
          </div>
        </section>

        <section className="section visual-directory">
          {industries.map((industry, index) => {
            const image = industryImages[industry.slug];

            return (
              <Link prefetch={false} key={industry.slug} href={industryUrl(industry)}>
                <figure className={image ? undefined : `directory-art directory-art-${index + 1}`}>
                  {image ? (
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                  ) : (
                    <><i aria-hidden="true" /><b aria-hidden="true" /><em aria-hidden="true" /></>
                  )}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </figure>
                <div><p className="simple-label">{industry.category}</p><h2>{industry.name}</h2><p>{industry.intro}</p><strong>Explore industry -&gt;</strong></div>
              </Link>
            );
          })}
        </section>

        <ConversionBand title="Don't see your industry here?" text="We work with other types of business too. Tell us how your customers choose you and we will explain what we would build." primaryLabel="Discuss Your Business" secondaryHref="/services/" secondaryLabel="View Services" />
      </main>
    </>
  );
}
