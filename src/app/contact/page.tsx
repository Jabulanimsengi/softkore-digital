import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/PageSections";
import { UiIcon } from "@/components/UiIcon";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Tell Softkore what should move better in your business and get a practical digital next step.", alternates: { canonical: "/contact/" } };

const faqs = [
  { question: "What happens after I send an enquiry?", answer: "We review the business goal, current friction and likely project fit, then respond with the most useful next step or a short discovery conversation." },
  { question: "Do you work with existing websites and systems?", answer: "Yes. We can improve, rebuild or extend an existing digital product when that is more valuable than starting over." },
  { question: "Can you help if the scope is not clear yet?", answer: "Yes. A clear scope is often the first deliverable. Share the outcome you need and we will help shape the practical path." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Contact", url: absoluteUrl("/contact/") }])} />
      <main className="stitch-page contact-stitch-page">
        <section className="section contact-heading"><p className="stitch-kicker">Start a conversation</p><h1>Let&apos;s build something useful together.</h1><p>Tell us what should move better. We will help identify the right digital next step for your business.</p></section>
        <section className="section contact-layout">
          <div className="contact-form-card"><h2>Send us a message</h2><ContactForm /></div>
          <aside className="contact-sidebar">
            <div className="contact-info-card"><p className="stitch-kicker">Contact information</p><h2>A practical conversation starts here.</h2><ul><li><span className="stitch-icon"><UiIcon name="map" /></span><div><strong>Based in South Africa</strong><p>Working with growing teams across South Africa and beyond.</p></div></li><li><span className="stitch-icon"><UiIcon name="mail" /></span><div><strong>Email enquiries</strong><a href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a></div></li><li><span className="stitch-icon"><UiIcon name="workflow" /></span><div><strong>Project fit</strong><p>Websites, SEO, custom applications and digital operations.</p></div></li></ul></div>
            <div className="contact-map-card" aria-label="Softkore Digital location at 111 Commissioner Street, Johannesburg">
              <iframe
                title="Softkore Digital location"
                src="https://www.google.com/maps?q=111+Commissioner+Street,+Johannesburg,+2001,+South+Africa&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </section>
        <section className="section contact-lower"><div className="contact-faq"><p className="stitch-kicker">Frequently asked questions</p><h2>Before we get started.</h2><FaqList items={faqs} /></div><div className="contact-trust"><p className="stitch-kicker">What you can expect</p><h2>A clear, business-first process.</h2><div><span><UiIcon name="shield" /> Honest scope</span><span><UiIcon name="workflow" /> Practical next steps</span><span><UiIcon name="chart" /> Built for measurable value</span></div></div></section>
      </main>
    </>
  );
}
