"use client";

import { useRef } from "react";
import { UiIcon } from "@/components/UiIcon";

// Add only real client testimonials, used with the client's permission. The section stays hidden while this is empty.
const testimonials: Array<{ quote: string; name: string; role: string }> = [];

export function Testimonials() {
  const gridRef = useRef<HTMLDivElement>(null);

  if (testimonials.length === 0) return null;

  const scrollNext = () => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.querySelector<HTMLElement>(".tm-card");
    const amount = card ? card.offsetWidth + 14 : grid.clientWidth;
    grid.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="tm-section">
      <div className="section">
        <div className="tm-head">
          <div>
            <p className="tm-eyebrow">Client feedback</p>
            <h2>Trusted to move businesses forward.</h2>
          </div>
        </div>
        <div className="tm-scroll">
          <div className="tm-grid" ref={gridRef}>
            {testimonials.map((item) => (
              <figure className="tm-card" key={item.quote}>
                <div className="tm-stars" aria-hidden="true">★★★★★</div>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </figure>
            ))}
          </div>
          <button type="button" className="tm-scroll-arrow" onClick={scrollNext} aria-label="Show more reviews">
            <UiIcon name="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
