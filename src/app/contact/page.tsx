import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/PageSections";
import { UiIcon } from "@/components/UiIcon";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Contact SoftKore Digital | Website & SEO Enquiries",
  "Contact SoftKore Digital about a website, SEO, web application or website maintenance project. We work with businesses across South Africa.",
  "/contact/",
);

const faqs = [
  { question: "What happens after I send an enquiry?", answer: "We read through what you need and reply with the most useful next step. That may be a few questions, a short call or an honest suggestion that a different option suits you better." },
  { question: "Do you work with existing websites and systems?", answer: "Yes. We can improve, rebuild or take over an existing website or system when that makes more sense than starting again." },
  { question: "Do you work with businesses outside Gauteng?", answer: "Yes. We work remotely with businesses in all nine provinces, using video calls, email and WhatsApp." },
  { question: "Can you help if I am not sure what I need yet?", answer: "Yes. Tell us what you want to achieve and what is not working. Working out the right scope is often the first step." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }, { name: "Contact", url: absoluteUrl("/contact/") }])} />
      <main className="stitch-page contact-stitch-page">
        <section className="section contact-heading"><p className="stitch-kicker">Start a conversation</p><h1>Contact SoftKore Digital.</h1><p>Tell us about your website, SEO or system project. We work with businesses across South Africa and will give you a straight answer on the best next step.</p></section>
        <section className="section contact-layout">
          <div className="contact-form-card"><h2>Send us a message</h2><ContactForm /></div>
          <aside className="contact-sidebar">
            <div className="contact-info-card"><p className="stitch-kicker">Contact information</p><h2>How to reach us.</h2><ul><li><span className="stitch-icon"><UiIcon name="map" /></span><div><strong>Based in South Africa</strong><p>Working remotely with businesses in all nine provinces.</p></div></li><li><span className="stitch-icon"><UiIcon name="mail" /></span><div><strong>Email enquiries</strong><a href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a></div></li><li><span className="stitch-icon"><UiIcon name="workflow" /></span><div><strong>Phone and WhatsApp</strong><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div></li></ul></div>
            <div className="contact-map-card" aria-label="SoftKore Digital location at 111 Commissioner Street, Johannesburg">
              <iframe
                title="SoftKore Digital location"
                src="https://www.google.com/maps?q=111+Commissioner+Street,+Johannesburg,+2001,+South+Africa&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </section>
        <section className="section contact-lower"><div className="contact-faq"><p className="stitch-kicker">Frequently asked questions</p><h2>Before we get started.</h2><FaqList items={faqs} /></div><div className="contact-trust"><p className="stitch-kicker">What you can expect</p><h2>A clear and honest process.</h2><div><span><UiIcon name="shield" /> Honest scope</span><span><UiIcon name="workflow" /> Practical next steps</span><span><UiIcon name="chart" /> Reporting you can check</span></div></div></section>
      </main>
    </>
  );
}
