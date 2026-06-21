"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Guides", href: "/guides/" },
  { label: "Work", href: "/work/" },
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
      <Link prefetch={false} className="brand" href="/" aria-label="Softkore Technologies home">
        <Image
          className="brand-logo"
          src="/logo.png"
          alt="Softkore Technologies"
          width={922}
          height={252}
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
        {navItems.map((item) => (
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
        Start a project
      </Link>
    </header>
  );
}

