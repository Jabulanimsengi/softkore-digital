import Image from "next/image";
import Link from "next/link";
import { UiIcon } from "@/components/UiIcon";
import { company, companyAddressLine, site } from "@/lib/site";
import "./footer.css";

const whatsappHref = `https://wa.me/${site.phone.replace(/\D/g, "")}?text=Hi%20SoftKore%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project.`;

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Website design & development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Free SEO audit", href: "/contact/?service=free-seo-audit#contact-form" },
      { label: "All services", href: "/services/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about/" },
      { label: "How we work", href: "/work/" },
      { label: "Guides", href: "/guides/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy policy", href: "/privacy-policy/" },
    ],
  },
  {
    title: "Popular guides",
    links: [
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
      { label: "SEO prices in South Africa", href: "/guides/seo-prices-south-africa/" },
      { label: "Fix pages Google won't show", href: "/guides/fix-crawled-currently-not-indexed/" },
      { label: "Hacked website recovery", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sf">
      <div className="sf-wrap sf-main">
        <div className="sf-brand">
          <Link prefetch={false} href="/" aria-label="SoftKore Digital home" className="sf-logo-link">
            <Image
              className="sf-logo"
              src="/images/logo/softkore-digital-logo-trimmed.png"
              alt="SoftKore Digital"
              width={362}
              height={136}
            />
          </Link>
          <p className="sf-about">
            Fast websites, SEO and cyber security for South African businesses. Remote-first from Johannesburg, serving
            all nine provinces.
          </p>
          <ul className="sf-contact">
            <li>
              <a href={`mailto:${site.email}`}><UiIcon name="mail" />{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone}`}><UiIcon name="phone" />{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><UiIcon name="phone" />WhatsApp us</a>
            </li>
            <li>
              <span><UiIcon name="map" />Registered office: {companyAddressLine}</span>
            </li>
          </ul>
        </div>

        {footerColumns.map((column) => (
          <nav className="sf-col" aria-label={column.title} key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link prefetch={false} href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="sf-bottom">
        <div className="sf-wrap sf-bottom-inner">
          <div className="sf-fineprint">
            <p>
              {company.legalName} T/A {company.tradingName} · Reg. No. {company.registrationNumber}
            </p>
            <p>© {year} {company.tradingName}. All rights reserved.</p>
          </div>
          <nav aria-label="Legal">
            <Link prefetch={false} href="/privacy-policy/">Privacy policy (POPIA)</Link>
            <Link prefetch={false} href="/contact/">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
