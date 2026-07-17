"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const serviceNavItems = [
  { label: "Website Design & Development", href: "/services/web-development/" },
  { label: "Business Systems & Automation", href: "/services/custom-web-applications/" },
  { label: "Booking & Customer Management", href: "/services/booking-customer-management/" },
  { label: "SEO & Online Visibility", href: "/services/seo-services/" },
  { label: "Maintenance & Technical Support", href: "/services/website-maintenance/" },
  { label: "Digital Marketing & Conversion", href: "/services/digital-marketing-conversion/" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href);
  }

  return (
    <header className={`site-header ${isOpen ? "is-open" : ""}`} data-header>
      <Link prefetch={false} className="brand" href="/" aria-label="SoftKore Digital home">
        <Image
          className="brand-logo"
          src="/images/logo/softkore-digital-logo-trimmed.png"
          alt="SoftKore Digital"
          width={362}
          height={136}
          priority
        />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav className="site-nav" data-nav onClick={() => setIsOpen(false)}>
        <Link
          prefetch={false}
          href="/"
          className={isActive("/") ? "is-active" : undefined}
          aria-current={isActive("/") ? "page" : undefined}
        >
          Home
        </Link>

        <div className="nav-item nav-item-services">
          <Link
            prefetch={false}
            href="/services/"
            className={isActive("/services/") ? "is-active" : undefined}
            aria-current={pathname === "/services/" ? "page" : undefined}
          >
            Services
          </Link>
          <div className="service-menu" aria-label="Service pages">
            {serviceNavItems.map((item) => (
              <Link
                prefetch={false}
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link prefetch={false} href="/services/" className="service-menu-all">
              Explore all services →
            </Link>
          </div>
        </div>

        {navItems.slice(1).map((item) => (
          <Link
            prefetch={false}
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "is-active" : undefined}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link prefetch={false} className="nav-cta" href="/contact/">
        Start a Project
      </Link>
    </header>
  );
}
