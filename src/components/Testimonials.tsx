"use client";

import { useRef } from "react";
import { UiIcon } from "@/components/UiIcon";

const testimonials = [
  {
    quote:
      "Softkore rebuilt our website around a clear customer journey and the enquiries started coming through cleaner. It finally feels like the site works for the business.",
    name: "Business owner",
    role: "Professional services",
  },
  {
    quote:
      "They tightened our search foundations and restructured the service pages. We now show up for the searches that actually matter to us.",
    name: "Managing director",
    role: "Construction & trade",
  },
  {
    quote:
      "The booking and payment system took real admin off my team. It is simple, fast and it just keeps working without us babysitting it.",
    name: "Founder",
    role: "Health & wellness",
  },
];

export function Testimonials() {
  const gridRef = useRef<HTMLDivElement>(null);

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
