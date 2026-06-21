import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHeroImage } from "@/components/PageHeroImage";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SoftKore Digital to review your website, build a web application, plan an AI agent, or improve your digital conversion path.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Contact", url: absoluteUrl("/contact/") },
        ])}
      />
      <main>
        <section className="section page-hero">
          <div className="page-hero-inner">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link prefetch={false} href="/">Home</Link>
                <span>/</span>
                <span>Contact</span>
              </nav>
              <h1>Tell Us What You Want the Site to Do Better</h1>
              <p>
                Share the current website, the pages that matter most, and the
                outcome you want: more enquiries, clearer content, an AI agent,
                or a custom workflow.
              </p>
            </div>
            <aside className="page-summary page-summary-media">
              <PageHeroImage imageKey="contact" />
              <strong>Useful starting details</strong>
              <ul>
                <li>Current website URL</li>
                <li>Project type</li>
                <li>Priority pages</li>
                <li>Timeline or launch target</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section final-cta contact-page-panel">
          <div className="final-panel">
            <div>
              <h2>Start with a practical review.</h2>
              <p>
                We will look at the structure, conversion path, AI agent fit,
                and any obvious UI issues before recommending the next step.
              </p>
              <a className="contact-line" href="mailto:info@softkoredigital.co.za">
                info@softkoredigital.co.za
              </a>
              <div className="contact-assurance" aria-label="What happens next">
                <span>1. We review the current path</span>
                <span>2. We identify the highest-value move</span>
                <span>3. You get a practical next-step recommendation</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
