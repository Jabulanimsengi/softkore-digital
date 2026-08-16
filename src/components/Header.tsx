"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const serviceNavItems = [
  { label: "Website Design & Development", href: "/services/web-development/" },
  { label: "Business Systems & Automation", href: "/services/custom-web-applications/" },
  { label: "Booking & Customer Management", href: "/services/booking-customer-management/" },
  { label: "SEO & Online Visibility", href: "/services/seo-services/" },
  { label: "Maintenance & Technical Support", href: "/services/website-maintenance/" },
  { label: "Digital Marketing & Conversion", href: "/services/digital-marketing-conversion/" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href);
  }

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    setServicesOpen(false);
  }

  return (
    <>
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

        <nav className="site-nav" data-nav>
          <Link
            prefetch={false}
            href="/"
            className={isActive("/") ? "is-active" : undefined}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>

          <Link
            prefetch={false}
            href="/about/"
            className={isActive("/about/") ? "is-active" : undefined}
            aria-current={isActive("/about/") ? "page" : undefined}
          >
            About
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

          <Link
            prefetch={false}
            href="/contact/"
            className={isActive("/contact/") ? "is-active" : undefined}
            aria-current={isActive("/contact/") ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>

        <Link prefetch={false} className="nav-cta" href="/contact/">
          Start a Project
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`} id="mobile-menu" role="dialog" aria-modal="true" aria-hidden={!isOpen} inert={!isOpen}>
        <div className="mobile-menu-panel">
          <nav className="mobile-menu-nav" aria-label="Mobile">
            <Link
              prefetch={false}
              href="/"
              className={`mobile-menu-link ${isActive("/") ? "is-active" : ""}`}
              onClick={close}
            >
              Home
            </Link>

            <Link
              prefetch={false}
              href="/about/"
              className={`mobile-menu-link ${isActive("/about/") ? "is-active" : ""}`}
              onClick={close}
            >
              About
            </Link>

            <button
              className={`mobile-menu-services-toggle ${servicesOpen ? "is-open" : ""}`}
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((current) => !current)}
            >
              Services
              <span className="mobile-menu-services-icon" aria-hidden="true" />
            </button>

            <div className={`mobile-menu-services-list ${servicesOpen ? "is-open" : ""}`} inert={!servicesOpen}>
              <div className="mobile-menu-services-list-inner">
                {serviceNavItems.map((item) => (
                  <Link prefetch={false} key={item.href} href={item.href} className="mobile-menu-sublink" onClick={close}>
                    {item.label}
                  </Link>
                ))}
                <Link prefetch={false} href="/services/" className="mobile-menu-sublink mobile-menu-sublink-all" onClick={close}>
                  Explore all services →
                </Link>
              </div>
            </div>

            <Link
              prefetch={false}
              href="/contact/"
              className={`mobile-menu-link ${isActive("/contact/") ? "is-active" : ""}`}
              onClick={close}
            >
              Contact
            </Link>
          </nav>

          <div className="mobile-menu-footer">
            <Link prefetch={false} className="mobile-menu-cta" href="/contact/" onClick={close}>
              Start a Project →
            </Link>
            <a className="mobile-menu-email" href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a>
          </div>
        </div>
      </div>
    </>
  );
}
