import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const footerGroups = [
  { title: "Services", links: [{ label: "Website design", href: "/services/web-development/" }, { label: "SEO services", href: "/services/seo-services/" }, { label: "Web applications", href: "/services/custom-web-applications/" }, { label: "Online booking systems", href: "/services/booking-customer-management/" }, { label: "Website maintenance", href: "/services/website-maintenance/" }] },
  { title: "Company", links: [{ label: "About us", href: "/about/" }, { label: "How we work", href: "/work/" }, { label: "Industries", href: "/industries/" }, { label: "Guides", href: "/guides/" }, { label: "All services", href: "/services/" }] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link prefetch={false} href="/" aria-label="SoftKore Digital home">
          <Image
            className="footer-logo"
            src="/images/logo/softkore-digital-logo-trimmed.png"
            alt="SoftKore Digital"
            width={362}
            height={136}
          />
        </Link>
        <p>
          Website design, web development, SEO and maintenance for businesses
          across South Africa.
        </p>
      </div>

      {footerGroups.map((group) => (
        <nav className="footer-links" aria-label={group.title} key={group.title}>
          <strong>{group.title}</strong>
          {group.links.map((item) => (
            <Link prefetch={false} href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
      ))}

      <div className="footer-contact">
        <strong>Connect</strong>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        <Link prefetch={false} href="/contact/">Start a Project →</Link>
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} SoftKore Digital. All rights reserved.</span>
        <span>Serving all nine provinces of South Africa</span>
      </div>
    </footer>
  );
}
