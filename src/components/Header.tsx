"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/web-development/" },
  { label: "Industries", href: "/industries/" },
  { label: "AI Agents", href: "/ai-agents/" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "SEO", href: "/services/seo-services/" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`site-header ${isOpen ? "is-open" : ""}`} data-header>
      <Link className="brand" href="/" aria-label="SoftKore Digital home">
        <Image
          className="brand-logo"
          src="/logo.png"
          alt="SoftKore Digital"
          width={922}
          height={252}
          priority
        />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav className="site-nav" data-nav onClick={() => setIsOpen(false)}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="nav-cta" href="/#contact">
        Start a Project
      </Link>
    </header>
  );
}
