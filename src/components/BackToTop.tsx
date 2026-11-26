"use client";

import { useEffect, useState } from "react";
import "./back-to-top.css";

/**
 * Square "back to top" arrow. It appears once the visitor reaches the bottom of the page
 * (the site footer scrolls into view) and hides again when they scroll back up.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer.sf");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    // Move keyboard focus back to the start of the page content as well.
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
