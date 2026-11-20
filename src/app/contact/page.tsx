import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ContactForm";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { UiIcon } from "@/components/UiIcon";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";
import { contactConsultationImage, pageHeroImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "Contact SoftKore Digital | Website Design, SEO & Security",
  "Contact SoftKore Digital about website design & development, SEO services or website & cyber security. View our Johannesburg address, direct contact details and enquiry form.",
  "/contact/",
);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Contact", url: absoluteUrl("/contact/") },
        ])}
      />

      <main className="stitch-page contact-stitch-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          kicker="Contact SoftKore Digital"
          title="Get in touch."
          lead="Send us an enquiry using the form below or reach us directly by email, phone or WhatsApp."
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
