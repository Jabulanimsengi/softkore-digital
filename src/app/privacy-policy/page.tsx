import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl, company, companyAddressLine, site } from "@/lib/site";
import "./privacy.css";

const lastUpdated = "26 November 2026";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy (POPIA) | SoftKore Digital",
  "How SoftKore Digital, a trading name of African Digital Tech Solutions (Pty) Ltd, collects, uses and protects personal information under POPIA, and how to reach our Information Officer.",
  "/privacy-policy/",
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "Privacy policy", url: absoluteUrl("/privacy-policy/") },
      ])} />
      <main className="simple-page privacy-page">
        <header className="privacy-head">
          <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link> / <span>Privacy policy</span>
          </nav>
          <h1>Privacy policy</h1>
          <p>
            This notice explains how {company.tradingName} handles personal information when you use this website or
            contact us, as required by the Protection of Personal Information Act 4 of 2013 (POPIA).
          </p>
          <p className="privacy-updated">Last updated: {lastUpdated}</p>
        </header>

        <div className="privacy-body">
          <section>
            <h2>1. Who we are</h2>
            <p>
              {company.tradingName} is a trading name of <strong>{company.legalName}</strong>, a private company
              registered in South Africa with the Companies and Intellectual Property Commission (CIPC) under
              registration number <strong>{company.registrationNumber}</strong>. We are the responsible party for the
              personal information described in this notice.
            </p>
            <dl className="privacy-facts">
              <div><dt>Registered office</dt><dd>{companyAddressLine}</dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>Phone</dt><dd><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></dd></div>
            </dl>
          </section>

          <section>
            <h2>2. Information Officer</h2>
            <p>
              Our Information Officer is <strong>{company.informationOfficer.name}</strong>, registered with the
              Information Regulator (South Africa) under registration number{" "}
              <strong>{company.informationOfficer.regulatorRegistration}</strong>. Send any privacy request or
              complaint to{" "}
              <a href={`mailto:${company.informationOfficer.email}?subject=POPIA%20request`}>
                {company.informationOfficer.email}
              </a>{" "}
              with “POPIA request” in the subject line.
            </p>
          </section>

          <section>
            <h2>3. What we collect</h2>
            <ul>
              <li>
                <strong>Contact and audit forms:</strong> your name, email address, business name or website, the
                service you are interested in, your budget range and the message you write.
              </li>
              <li>
                <strong>Direct contact:</strong> whatever you choose to send us by email, phone or WhatsApp.
              </li>
              <li>
                <strong>Client projects:</strong> the account access, website data and business details you give us
                so we can build, audit, optimise or secure your website.
              </li>
              <li>
                <strong>Website usage:</strong> where website analytics is switched on, Google Analytics records
                pages viewed, approximate location, device and browser type using cookies. We do not use it to identify
                you personally.
              </li>
            </ul>
            <p>We do not ask for special personal information (such as health, religious or biometric data) or ID numbers through this website.</p>
          </section>

          <section>
            <h2>4. Why we use it</h2>
            <ul>
              <li>To reply to your enquiry, prepare a free SEO audit or a quotation, and follow up on it.</li>
              <li>To deliver, support and invoice the work you ask us to do.</li>
              <li>To keep this website secure and understand which pages are useful.</li>
              <li>To meet our legal, tax and accounting obligations.</li>
            </ul>
            <p>
              We process your information because you asked us to (to respond to you or to conclude and perform a
              contract), because the law requires it, or for our legitimate interest in running and protecting our
              business. We do not sell personal information, and we only send marketing if you have asked for it.
            </p>
          </section>

          <section>
            <h2>5. Who we share it with</h2>
            <p>We share personal information only with service providers that help us run this website and our business, and only what they need:</p>
            <ul>
              <li>our website hosting provider;</li>
              <li>Resend, the email delivery service that sends contact-form messages to our inbox;</li>
              <li>our email and messaging providers, including WhatsApp if you contact us there;</li>
              <li>Google, if website analytics is switched on;</li>
              <li>our accountants, and authorities such as SARS, where the law requires it.</li>
            </ul>
            <p>
              Some of these providers store or process data outside South Africa, for example in the United States. We
              only use providers that are bound by data-protection terms giving protection comparable to POPIA, as
              section 72 of POPIA requires.
            </p>
          </section>

          <section>
            <h2>6. How long we keep it</h2>
            <p>
              We keep enquiries only as long as we need them to respond and follow up. If an enquiry does not lead to a
              project, we delete it within 12 months. Client and invoicing records are kept for as long as tax and
              company law requires, which is normally five years.
            </p>
          </section>

          <section>
            <h2>7. How we protect it</h2>
            <p>
              This website runs over HTTPS. Access to enquiries and client data is limited to the people who need it,
              protected by strong passwords and multi-factor authentication where the service supports it. If we
              become aware of a security compromise affecting your personal information, we will notify you and the
              Information Regulator as POPIA requires.
            </p>
          </section>

          <section>
            <h2>8. Your rights</h2>
            <p>Under POPIA you may:</p>
            <ul>
              <li>ask whether we hold personal information about you and request a copy of it;</li>
              <li>ask us to correct, update or delete it;</li>
              <li>object to us processing it, including for direct marketing;</li>
              <li>withdraw consent you have given us at any time.</li>
            </ul>
            <p>
              Contact our Information Officer at{" "}
              <a href={`mailto:${company.informationOfficer.email}?subject=POPIA%20request`}>
                {company.informationOfficer.email}
              </a>
              . We may need to confirm your identity before acting on a request. If you are not satisfied with our
              response, you may lodge a complaint with the{" "}
              <a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">Information Regulator (South Africa)</a>.
            </p>
          </section>

          <section>
            <h2>9. Cookies</h2>
            <p>
              This website does not use advertising cookies. If website analytics is switched on, Google Analytics sets
              cookies to measure visits. You can block or delete cookies in your browser settings at any time; the
              website will still work.
            </p>
          </section>

          <section>
            <h2>10. Changes to this notice</h2>
            <p>
              We will update this page if the way we handle personal information changes, and change the “last updated”
              date above. Questions? <Link prefetch={false} href="/contact/">Contact us</Link>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
