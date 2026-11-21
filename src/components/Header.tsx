"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UiIcon, type UiIconName } from "@/components/UiIcon";

const serviceNavItems: Array<{
  label: string;
  description: string;
  href: string;
  icon: UiIconName;
}> = [
  {
    label: "Website Design & Development",
    description: "Fast, mobile-first sites built to convert and rank.",
    href: "/services/web-development/",
    icon: "globe",
  },
  {
    label: "SEO Services",
    description: "Technical audits, indexing fixes & search growth.",
    href: "/services/seo-services/",
    icon: "search",
  },
  {
    label: "Website & Cyber Security",
    description: "Hardening, WAF protection, malware removal & monitoring.",
    href: "/services/website-security/",
    icon: "shield",
  },
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
              <svg className="nav-chevron" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m4 6 4 4 4-4" />
              </svg>
            </Link>
            <div className="service-menu" aria-label="Service pages">
              {serviceNavItems.map((item) => (
                <Link
                  prefetch={false}
                  key={item.href}
                  href={item.href}
                  className={`service-menu-card${isActive(item.href) ? " is-active" : ""}`}
                >
                  <span className="service-menu-icon"><UiIcon name={item.icon} /></span>
                  <span className="service-menu-copy">
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </span>
                </Link>
              ))}
              <Link
                prefetch={false}
                href="/contact/?service=free-seo-audit#contact-form"
                className="service-menu-card service-menu-card-featured"
              >
                <span className="service-menu-icon">
                  <UiIcon name="search" />
                </span>
                <span className="service-menu-copy">
                  <strong>Free SEO Audit</strong>
                  <span>Request a free review of your Google indexing, rankings &amp; technical SEO.</span>
                </span>
              </Link>
              <Link prefetch={false} href="/services/" className="service-menu-all">
                Explore all services <UiIcon name="arrow" />
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
                <Link
                  prefetch={false}
                  href="/contact/?service=free-seo-audit#contact-form"
                  className="mobile-menu-sublink mobile-menu-sublink-featured"
                  onClick={close}
                >
                  Free SEO Audit →
                </Link>
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
