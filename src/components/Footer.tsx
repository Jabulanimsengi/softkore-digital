import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Guides", href: "/guides/" },
  { label: "Work", href: "/work/" },
  { label: "Contact", href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link prefetch={false} href="/" aria-label="Softkore Technologies home">
          <Image
            className="footer-logo"
            src="/logo.png"
            alt="Softkore Technologies"
            width={922}
            height={252}
          />
        </Link>
        <p>
          Websites, SEO, applications, cloud systems, and ongoing improvements
          for businesses that want clearer digital systems.
        </p>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((item) => (
          <Link prefetch={false} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-contact">
        <span>Start with a practical review.</span>
        <a href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a>
      </div>
    </footer>
  );
}
