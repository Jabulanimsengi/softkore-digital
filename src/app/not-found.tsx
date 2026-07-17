import Link from "next/link";

export default function NotFound() {
  return (
    <main className="simple-page">
      <section className="section simple-not-found">
        <p className="simple-label">404 / Page not found</p>
        <h1>Wrong turn.<br />Easy fix.</h1>
        <p>The page has moved or no longer exists. Start again from the work that matters.</p>
        <div className="simple-actions">
          <Link prefetch={false} className="simple-button simple-button-dark" href="/">Go home <span>→</span></Link>
          <Link prefetch={false} className="simple-link" href="/services/">Explore solutions <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
