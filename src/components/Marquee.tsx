const items = [
  "Website design",
  "Web development",
  "SEO services",
  "Cyber security",
  "Website security",
  "Technical SEO",
  "Malware protection",
  "Security audits",
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
