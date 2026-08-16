"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const format = (value: number, suffix: string, decimals: number) =>
      `${value.toFixed(decimals)}${suffix}`;

    const setCount = (el: HTMLElement, value: number) => {
      const suffix = el.dataset.suffix ?? "";
      const decimals = Number(el.dataset.decimals ?? 0);
      el.textContent = format(value, suffix, decimals);
    };

    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    if (reduceMotion) {
      counters.forEach((el) => setCount(el, Number(el.dataset.count ?? 0)));
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            counterObserver.unobserve(entry.target);
            const el = entry.target as HTMLElement;
            const target = Number(el.dataset.count ?? 0);
            const duration = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(el, target * eased);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => counterObserver.observe(el));
    }

    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    let onScroll: (() => void) | null = null;

    if (!reduceMotion && parallaxEls.length) {
      onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const y = window.scrollY;
          parallaxEls.forEach((el) => {
            const speed = Number(el.dataset.parallax ?? 0.2);
            el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
          });
        });
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      if (onScroll) window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
