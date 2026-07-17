import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroImage } from "@/components/PageHeroImage";
import { ConversionBand } from "@/components/PageSections";
import { industries, industryUrl } from "@/data/industries";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { industryImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Industries",
  description: "Digital customer journeys and business systems shaped around how different industries attract and serve customers.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Industries", url: absoluteUrl("/industries/") }])} />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><span>Industries</span></nav>
              <h1>Built around how your market actually works.</h1>
              <p>Different businesses earn trust, complete transactions and deliver value in different ways.</p>
              <div className="hero-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Discuss your business</Link><Link prefetch={false} className="button button-secondary" href="/services/">View solutions</Link></div>
            </div>
            <aside className="page-summary page-summary-media"><PageHeroImage imageKey="industries" /><strong>One connected view</strong><ul><li>Customer expectations</li><li>Trust and conversion</li><li>Daily workflows</li><li>Search opportunity</li></ul></aside>
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

        <ConversionBand title="Build around the way your business really wins and delivers." text="We will connect the right customer journey, transaction and operational tools." primaryLabel="Discuss Your Business" secondaryHref="/services/" secondaryLabel="Explore Solutions" />
      </main>
    </>
  );
}
