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
        <Link key={`${item.href}-${item.label}`} href={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
