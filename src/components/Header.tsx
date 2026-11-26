"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import "./header.css";

/*
 * Site navbar — "Navy over hero" (option B).
 * - On pages that open with a photo hero it sits transparently over the photo.
 * - Once you scroll past the hero it turns solid navy.
 * - Scrolling down hides it; scrolling up brings it straight back.
 * - Services opens a navy dropdown (hover, click or keyboard); phones get a slide-in panel.
 */

const serviceNavItems = [
  { label: "Website design & development", description: "Fast websites that bring enquiries", href: "/services/web-development/" },
  { label: "SEO services", description: "Get found on Google", href: "/services/seo-services/" },
  { label: "Website & cyber security", description: "Protection and hack clean-ups", href: "/services/website-security/" },
  { label: "Free SEO audit", description: "No cost, reply in one business day", href: "/contact/?service=free-seo-audit#contact-form" },
];

const HERO_SELECTOR = ".hx-hero, .page-people-hero, .article-hero";

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Publish the header's height so heroes and full-screen sections can account for it.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () =>
      document.documentElement.style.setProperty("--site-header-h", `${Math.round(header.getBoundingClientRect().height)}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Decide per page whether the bar sits over a photo hero, then track scrolling.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setHidden(false);

    const main = document.querySelector("body > main");
    // First block in normal flow (skips floating bits such as the guide reading-progress bar).
    const first =
      Array.from(main?.children ?? []).find((el) => {
        const position = window.getComputedStyle(el).position;
        return position !== "fixed" && position !== "absolute" && (el as HTMLElement).offsetHeight > 0;
      }) ?? null;
    const hero = first && first.matches(HERO_SELECTOR) ? (first as HTMLElement) : null;
    const hasOverlay = Boolean(hero);
    setOverlay(hasOverlay);
    document.documentElement.classList.toggle("has-overlay-hero", hasOverlay);

    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      ticking = false;
      const y = window.scrollY;
      const headerH = headerRef.current?.offsetHeight ?? 80;
      // Transparent only at the very top; solid as soon as the visitor starts scrolling, so hero
      // content never shows through the bar.
      const isSolid = !hero || y > 40;
      setSolid(isSolid);

      const hideFrom = hero ? hero.offsetHeight : headerH * 3;
      const delta = y - lastY;
      if (Math.abs(delta) > 4) {
        // Only hide once the visitor is past the hero and scrolling down.
        setHidden(delta > 0 && y > hideFrom);
        lastY = y;
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Lock page scrolling while the phone menu is open; Escape closes menus.
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }
    function onPointer(event: PointerEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setServicesOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  }

  function closeAll() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  const stateClasses = [
    "nb",
    overlay && !solid ? "is-transparent" : "is-solid",
    hidden && !menuOpen && !servicesOpen ? "is-hidden" : "",
    menuOpen ? "is-open" : "",
  ].filter(Boolean).join(" ");

  return (
    <header ref={headerRef} className={stateClasses}>
      <div className="nb-bar">
        <Link prefetch={false} className="nb-logo" href="/" aria-label="SoftKore Digital home" onClick={closeAll}>
          <Image
            src="/images/logo/softkore-digital-logo-trimmed.png"
            alt="SoftKore Digital"
            width={362}
            height={136}
            priority
          />
        </Link>

        <nav className="nb-nav" aria-label="Main">
          <ul>
            <li>
              <Link prefetch={false} href="/" className={isActive("/") ? "is-active" : undefined} aria-current={isActive("/") ? "page" : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/about/" className={isActive("/about/") ? "is-active" : undefined} aria-current={isActive("/about/") ? "page" : undefined}>
                About
              </Link>
            </li>
            <li
              ref={servicesRef}
              className={`nb-has-menu${servicesOpen ? " is-open" : ""}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={isActive("/services/") ? "is-active" : undefined}
                aria-expanded={servicesOpen}
                aria-controls="nb-services"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
              </button>
              <div className="nb-drop" id="nb-services">
                {serviceNavItems.map((item) => (
                  <Link prefetch={false} key={item.href} href={item.href} onClick={closeAll}>
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>
                    <i aria-hidden="true">→</i>
                  </Link>
                ))}
                <Link prefetch={false} href="/services/" className="nb-drop-all" onClick={closeAll}>
                  <span><strong>All services</strong></span>
                  <i aria-hidden="true">→</i>
                </Link>
              </div>
            </li>
            <li>
              <Link prefetch={false} href="/contact/" className={isActive("/contact/") ? "is-active" : undefined} aria-current={isActive("/contact/") ? "page" : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link prefetch={false} className="nb-cta" href="/contact/">
          Start a project
        </Link>

        <button
          className="nb-burger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nb-panel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
        </button>
      </div>

      <div className="nb-backdrop" aria-hidden="true" onClick={closeAll} />

      <nav className="nb-panel" id="nb-panel" aria-label="Mobile" aria-hidden={!menuOpen} inert={!menuOpen}>
        <Link prefetch={false} href="/" className={isActive("/") ? "is-active" : undefined} onClick={closeAll}>Home</Link>
        <Link prefetch={false} href="/about/" className={isActive("/about/") ? "is-active" : undefined} onClick={closeAll}>About</Link>
        <Link prefetch={false} href="/services/" className={pathname === "/services/" ? "is-active" : undefined} onClick={closeAll}>Services</Link>
        <div className="nb-panel-sub">
          {serviceNavItems.slice(0, 3).map((item) => (
            <Link prefetch={false} key={item.href} href={item.href} className={isActive(item.href) ? "is-active" : undefined} onClick={closeAll}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link prefetch={false} href="/contact/" className={isActive("/contact/") ? "is-active" : undefined} onClick={closeAll}>Contact</Link>
        <Link prefetch={false} href="/contact/?service=free-seo-audit#contact-form" className="nb-panel-cta" onClick={closeAll}>
          Get my free SEO audit
        </Link>
        <a className="nb-panel-email" href={`mailto:${site.email}`}>{site.email}</a>
      </nav>
    </header>
  );
}
