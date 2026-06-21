import Link from "next/link";

export function CardGrid({
  items,
}: {
  items: Array<{ title: string; text: string }>;
}) {
  return (
    <>
      {items.map((item) => (
        <article className="content-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </>
  );
}

export function ProofList({
  items,
}: {
  items: Array<{ title: string; text: string }>;
}) {
  return (
    <ul className="proof-list">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details className="faq-item" key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function LinkList({
  items,
}: {
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="area-list">
      {items.map((item) => (
        <Link prefetch={false} key={`${item.href}-${item.label}`} href={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function PageSignalPanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <aside className="page-summary page-signal-panel">
      <div className="signal-visual" aria-hidden="true">
        <span className="signal-node signal-node-main">SK</span>
        <span className="signal-node signal-node-a">UX</span>
        <span className="signal-node signal-node-b">AI</span>
        <span className="signal-line signal-line-a" />
        <span className="signal-line signal-line-b" />
        <span className="signal-pulse" />
      </div>
      <strong>{title}</strong>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function ConversionBand({
  title,
  text,
  primaryHref = "/contact/",
  primaryLabel = "Start a Project",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section conversion-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="conversion-actions">
        <Link prefetch={false} className="button button-primary" href={primaryHref}>
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link prefetch={false} className="button button-dark-secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

