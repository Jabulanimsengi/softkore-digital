const items = [
  "Website design",
  "Web development",
  "SEO services",
  "Web applications",
  "Online bookings",
  "Website maintenance",
  "Landing pages",
  "Tracking",
  "South Africa",
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
