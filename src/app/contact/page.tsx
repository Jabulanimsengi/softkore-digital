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
      "We reply to every enquiry within one South African business day, by email or WhatsApp, whichever you prefer. If your website has been hacked, tell us in your message or call us: urgent reports are looked at as soon as they arrive, so we can stop the damage quickly.",
  },
  {
    question: "What happens after I submit a Free SEO Audit request?",
    answer:
      "We look at your website, check how many of your pages Google is showing (using Google Search Console if you can give us access), test its speed on phones and its basic security settings, and read your main service pages. Then we send you a clear summary of what is stopping customers from finding you.",
  },
  {
    question: "Is there any cost or obligation attached to the Free SEO Audit?",
    answer:
      "No. The audit is free and there is no obligation. The fix list is yours to keep, whether you later ask us to do the work through our [SEO services](/services/seo-services/), hand it to your own team or simply use it to understand what is holding your website back.",
  },
  {
    question: "What details help you prepare an accurate website quote in rand?",
    answer:
      "Tell us your current website address (if you have one), your main services or products, where your customers are, anything the site must connect to (such as PayFast or a booking tool) and a rough budget in rand. Our [website prices guide](/guides/website-prices-south-africa/) can help you pick a budget range.",
  },
  {
    question: "Should I message on WhatsApp or use the email enquiry form?",
    answer:
      "Use the enquiry form when you want to give us your website address, budget and what you need in writing, so nothing gets lost. Message us on WhatsApp for quick questions, or if something is wrong with your website right now and you need a fast answer.",
  },
  {
    question: "Do we need an in-person meeting in Johannesburg to work together?",
    answer:
      "No. Although our office is at 111 Commissioner Street in Johannesburg, almost all client projects across Gauteng, the Western Cape, KwaZulu-Natal and other provinces run remotely, by video call and with a private online preview of your new site. Everything happens online, so nobody needs to travel.",
  },
  {
    question: "How is my enquiry data handled under POPIA?",
    answer:
      "We only collect the contact and project details we need to reply to you, and we never sell or share them as leads. Your message travels over a secure connection and only the people handling your enquiry can see it. Our [privacy policy](/privacy-policy/) explains exactly how we handle your information.",
  },
  {
    question: "How should I reach out if my website has been hacked right now?",
    answer:
      "Choose 'Hacked site recovery' in the form above, or call or WhatsApp us on 073 802 1196 straight away with your website address. The sooner we know, the sooner we can cut the hackers off and start the [emergency clean-up](/services/website-security/), before more damage is done.",
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

            <h2>Address &amp; contact details</h2>
            <ul className="contact-details-list">
              <li>
                <span className="stitch-icon"><UiIcon name="map" /></span>
                <div>
                  <strong>Office Address</strong>
                  <p>111 Commissioner Street, Johannesburg, 2000, South Africa</p>
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

              <h2>Send us a message</h2>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section page-faq-section" aria-label="Contact and onboarding questions">
          <div className="page-faq-head">

            <h2>What happens when you get in touch.</h2>
            <p>How fast we reply, what the free SEO audit covers, working with us from anywhere in South Africa and what to do if you've been hacked.</p>
          </div>
          <FaqList items={contactFaqs} />
        </section>

        <section className="section contact-bottom-map" aria-label="SoftKore Digital map">
          <div className="contact-map-wrapper">
            <div className="contact-map-bar">
              <div>
                <strong>111 Commissioner Street, Johannesburg, 2000, South Africa</strong>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=111+Commissioner+Street,+Johannesburg,+2000,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="SoftKore Digital address map"
                src="https://www.google.com/maps?q=111+Commissioner+Street,+Johannesburg,+2000,+South+Africa&output=embed"
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
