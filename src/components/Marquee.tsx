const items = [
  "Website design",
  "SEO",
  "Business systems",
  "Booking platforms",
  "Payments",
  "Automation",
  "Maintenance",
  "Conversion",
  "Local SEO",
];

export function Marquee() {
  return (
    <div className="site-marquee" aria-hidden="true">
      <div className="site-marquee-track">
        <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
        <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>
  );
}
