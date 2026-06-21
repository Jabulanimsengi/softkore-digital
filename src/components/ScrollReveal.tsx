"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  ".sk-home .sk-section-title",
  ".sk-home .sk-service-row",
  ".sk-home .sk-step",
  ".sk-home .sk-proof-item",
  ".sk-home .sk-focus > div",
  ".sk-home .sk-contact-copy",
  ".sk-home .sk-contact .contact-form",
  ".sk-home .form-note",
  ".sk-trust-strip > *",
  ".sk-featured-case",
  ".page-hero .breadcrumb",
  ".page-hero h1",
  ".page-hero p",
  ".page-hero .hero-actions",
  ".page-summary",
  ".section-heading",
  ".content-copy > *",
  ".content-panel > *",
  ".service-grid > *",
  ".package-grid > *",
  ".seo-grid > *",
  ".work-grid > *",
  ".case-grid > *",
  ".timeline > *",
  ".local-insight-grid > *",
  ".proof-list > li",
  ".content-list > li",
  ".area-list > a",
  ".faq-list > *",
  ".conversion-band > *",
  ".maintenance-card > *",
  ".final-panel > *",
  ".case-study-card",
  ".premium-proof-panel > *",
  ".contact-assurance > *",
  ".form-success",
  ".image-story-card",
  ".traffic-card",
  ".dashboard-shell",
  ".floating-card",
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

    targets.forEach((target) => target.classList.add("scroll-reveal"));

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
