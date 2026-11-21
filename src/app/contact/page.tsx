import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/PageSections";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { UiIcon } from "@/components/UiIcon";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";
import { contactConsultationImage, pageHeroImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "Contact SoftKore Digital | Website Design, SEO & Security",
  "Contact SoftKore Digital about website design & development, SEO services or website & cyber security. View our Johannesburg address, direct contact details and enquiry form.",
  "/contact/",
  pageHeroImages.contact.src,
);

const contactFaqs = [
  {
    question: "How quickly does SoftKore Digital reply to website or SEO enquiries?",
    answer:
      "We reply to every enquiry within one South African business day by email or WhatsApp, and urgent hacked-website reports are triaged as soon as they arrive.",
  },
  {
    question: "What happens after I submit a Free SEO Audit request?",
    answer:
      "We review your domain, Google Search Console indexing status (where accessible), mobile speed, security headers and main service pages, then send back a clear summary of what is blocking visibility.",
  },
  {
    question: "Is there any cost or obligation attached to the Free SEO Audit?",
    answer:
      "No. The initial review is free with zero obligation, whether you later ask SoftKore to implement the fixes under our [SEO services](/services/seo-services/) or hand the list to your own team.",
  },
  {
    question: "What details help you prepare an accurate website quote in rand?",
    answer:
      "Share your current website URL (if you have one), main services or products, target market across South Africa, any integrations such as PayFast or booking tools, and your indicative ZAR budget range on our [website prices guide](/guides/website-prices-south-africa/).",
  },
  {
    question: "Should I message on WhatsApp or use the email enquiry form?",
    answer:
      "Use the enquiry form when you want to share a website URL, budget range and service brief cleanly in writing, or message WhatsApp directly for quick questions and urgent site issues.",
  },
  {
    question: "Do we need an in-person meeting in Johannesburg to work together?",
    answer:
      "No. Although our office is at 111 Commissioner Street in Johannesburg, almost all client projects across Gauteng, Western Cape, KwaZulu-Natal and other provinces run remotely via video call and live staging links.",
  },
  {
    question: "How is my enquiry data handled under POPIA?",
    answer:
      "We only collect the contact and project details needed to respond to your enquiry, never sell or share leads, and apply strict technical transport and access controls outlined in our [POPIA website checklist](/guides/popia-website-compliance-checklist/).",
  },
  {
    question: "How should I reach out if my website has been hacked right now?",
    answer:
      "Select 'Hacked site recovery' in the form above or call/WhatsApp `073 802 1196` immediately with your domain name so we can begin [emergency cleanup and containment](/services/website-security/).",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Contact", url: absoluteUrl("/contact/") },
        ])}
      />
      <JsonLd data={faqSchema(contactFaqs)} />

      <main className="stitch-page contact-stitch-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          kicker="Contact SoftKore Digital"
          title="Get in touch."
          lead="Request a free SEO audit or send us a project enquiry using the form below, or reach us directly by email, phone or WhatsApp."
          image={pageHeroImages.contact}
          actions={[
            { label: "Send an Enquiry", href: "#contact-form", variant: "primary" },
            {
              label: "Chat on WhatsApp",
              href: "https://wa.me/27738021196?text=Hi%20SoftKore%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project.",
              variant: "secondary",
              external: true,
            },
          ]}
        />

        <section className="section contact-main-grid">
          <aside className="contact-details-card" aria-label="Address and contact details">
            <figure className="contact-details-media">
              <img
                src={contactConsultationImage.src}
                alt={contactConsultationImage.alt}
                width={1536}
                height={1024}
                loading="lazy"
              />
            </figure>
            <p className="stitch-kicker">Direct contact</p>
            <h2>Address &amp; contact details</h2>
            <ul className="contact-details-list">
              <li>
                <span className="stitch-icon"><UiIcon name="map" /></span>
                <div>
                  <strong>Office Address</strong>
                  <p>111 Commissioner Street, Johannesburg, 2001, South Africa</p>
                  <small>Serving businesses nationwide across all nine provinces</small>
                </div>
              </li>
              <li>
                <span className="stitch-icon"><UiIcon name="mail" /></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <span className="stitch-icon"><UiIcon name="phone" /></span>
                <div>
                  <strong>Phone &amp; WhatsApp</strong>
                  <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
                  <a
                    className="contact-whatsapp-link"
                    href="https://wa.me/27738021196?text=Hi%20SoftKore%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </li>
            </ul>
          </aside>

          <div className="contact-form-card" id="contact-form">
            <div className="contact-form-head">
              <p className="stitch-kicker">Enquiry form</p>
              <h2>Send us a message</h2>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section page-faq-section" aria-label="Contact and onboarding questions">
          <div className="page-faq-head">
            <p className="stitch-kicker">Before you message</p>
            <h2>What happens when you get in touch.</h2>
            <p>Response times, Free SEO Audit scope, remote onboarding across South Africa and urgent hack escalation.</p>
          </div>
          <FaqList items={contactFaqs} />
        </section>

        <section className="section contact-bottom-map" aria-label="SoftKore Digital map">
          <div className="contact-map-wrapper">
            <div className="contact-map-bar">
              <div>
                <strong>111 Commissioner Street, Johannesburg, 2001, South Africa</strong>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=111+Commissioner+Street,+Johannesburg,+2001,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="SoftKore Digital address map"
                src="https://www.google.com/maps?q=111+Commissioner+Street,+Johannesburg,+2001,+South+Africa&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
