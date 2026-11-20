import Image from "next/image";
import Link from "next/link";
import { guides } from "@/data/guides";
import { site } from "@/lib/site";

const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Website design & development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "All services", href: "/services/" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "All guides", href: "/guides/" },
      { label: "Website guides", href: "/guides/#websites" },
      { label: "SEO guides", href: "/guides/#seo" },
      { label: "Security guides", href: "/guides/#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about/" },
      { label: "How we work", href: "/work/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

const featuredArticles = [
  {
    topic: "Websites",
    title: "Website Prices in South Africa",
    href: "/guides/website-prices-south-africa/",
  },
  {
    topic: "Websites",
    title: "Ecommerce Website Cost in South Africa",
    href: "/guides/ecommerce-website-cost-south-africa/",
  },
  {
    topic: "SEO",
    title: "SEO Prices in South Africa",
    href: "/guides/seo-prices-south-africa/",
  },
  {
    topic: "SEO",
    title: "Fix 'Crawled - Currently Not Indexed'",
    href: "/guides/fix-crawled-currently-not-indexed/",
  },
  {
    topic: "Security",
    title: "Hacked Website Recovery Guide (SA)",
    href: "/guides/hacked-website-recovery-south-africa/",
  },
  {
    topic: "Security",
    title: "POPIA Website Compliance Checklist",
    href: "/guides/popia-website-compliance-checklist/",
  },
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
          Website design &amp; development, SEO services, and website &amp; cyber
          security for businesses across South Africa.
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

      <section className="footer-articles" aria-label="Featured articles">
        <div className="footer-articles-head">
          <strong>Articles</strong>
          <Link prefetch={false} className="footer-articles-all" href="/guides/">
            Browse all {guides.length} articles →
          </Link>
        </div>
        <div className="footer-articles-grid">
          {featuredArticles.map((article) => (
            <Link prefetch={false} className="footer-article-link" href={article.href} key={article.href}>
              <span>{article.topic}</span>
              <strong>{article.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} SoftKore Digital. All rights reserved.</span>
        <span>Serving all nine provinces of South Africa</span>
      </div>
    </footer>
  );
}
