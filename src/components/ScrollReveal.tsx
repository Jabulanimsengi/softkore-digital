"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  ".page-hero .breadcrumb",
  ".page-hero h1",
  ".page-hero p",
  ".page-hero .hero-actions",
  ".page-summary",
  ".content-copy > *",
  ".local-insight-grid > *",
  ".proof-list > li",
  ".area-list > a",
  ".faq-list > *",
  ".conversion-band > *",
  ".form-success",
  ".stitch-hero-copy > *",
  ".stitch-hero-media",
  ".stitch-trust-band span",
  ".stitch-section-heading > *",
  ".stitch-service-grid > *",
  ".stitch-work-grid > *",
  ".stitch-process ol > *",
  ".stitch-cta > *",
  ".services-bento > *",
  ".services-connection > *",
  ".solution-summary-card > *",
  ".solution-intro > *",
  ".solution-feature-grid > *",
  ".solution-process > *",
  ".solution-support-grid > *",
  ".contact-heading > *",
  ".contact-layout > *",
  ".contact-lower > *",
  ".home-hero-content > .section > *",
  ".home-section-head",
  ".home-work-card",
  ".home-stat",
  ".home-service-row",
  ".home-step",
  ".home-quote blockquote",
  ".home-quote-signals",
  ".home-cta-inner",
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll(revealSelectors));

    if (reduceMotion.matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const siblingIndexes = new WeakMap<Node, number>();

    targets.forEach((target) => {
      target.classList.add("scroll-reveal");

      const parent = target.parentNode;
      if (!parent) return;

      const index = siblingIndexes.get(parent) ?? 0;
      siblingIndexes.set(parent, index + 1);
      (target as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
