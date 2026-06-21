"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = document.querySelectorAll(
      [
        "main:not(.sk-home) > section",
        ".service-card",
        ".content-card",
        ".proof-list li",
        ".area-list a",
        ".case-card",
        ".faq-item",
        ".conversion-band",
      ].join(","),
    );

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
  }, []);

  return null;
}
