"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { GuideTocItem } from "@/lib/guide-metrics";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const target =
        document.querySelector<HTMLElement>("[data-article-body]") ??
        document.documentElement;
      const rect = target.getBoundingClientRect();
      const total = Math.max(1, target.offsetHeight - window.innerHeight * 0.55);
      const passed = window.innerHeight * 0.28 - rect.top;
      const next = Math.min(1, Math.max(0, passed / total));
      setProgress(next);
    };

    const scheduleUpdate = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className="article-progress" aria-hidden="true">
      <div
        className="article-progress-fill"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export function ArticleToc({
  items,
  readTimeLabel,
  variant,
}: {
  items: GuideTocItem[];
  readTimeLabel: string;
  variant: "desktop" | "mobile";
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -65% 0px",
        threshold: 0,
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  if (variant === "mobile") {
    return (
      <details ref={detailsRef} className="article-toc article-toc-mobile">
        <summary>
          <span>In this guide ({items.length} sections)</span>
          <small>{readTimeLabel}</small>
        </summary>
        <ol className="article-toc-list">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? "is-active" : undefined}
                onClick={() => {
                  setActiveId(item.id);
                  if (detailsRef.current) detailsRef.current.open = false;
                }}
              >
                <span className="article-toc-num">{item.number}</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </details>
    );
  }

  return (
    <nav className="article-toc article-toc-desktop" aria-label="On this page">
      <div className="article-toc-head">
        <strong>On this page</strong>
        <span>{readTimeLabel}</span>
      </div>
      <ol className="article-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? "is-active" : undefined}
              onClick={() => setActiveId(item.id)}
            >
              <span className="article-toc-num">{item.number}</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
      <div className="article-toc-cta">
        <p>Need help applying this to your website?</p>
        <Link prefetch={false} href="/contact/" className="article-toc-cta-link">
          Book a consultation
        </Link>
      </div>
    </nav>
  );
}
