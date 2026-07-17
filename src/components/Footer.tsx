import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  { title: "Company", links: [{ label: "About us", href: "/about/" }, { label: "Selected work", href: "/work/" }] },
  { title: "Explore", links: [{ label: "Services", href: "/services/" }, { label: "Industries", href: "/industries/" }, { label: "Insights", href: "/guides/" }] },
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
          Websites, business systems, SEO and digital growth solutions designed
          to help growing companies move forward.
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
        <span>Start with the next useful move.</span>
        <a href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a>
        <Link prefetch={false} href="/contact/">Start a Project →</Link>
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} SoftKore Digital. All rights reserved.</span>
        <span>South Africa</span>
      </div>
    </footer>
  );
}
