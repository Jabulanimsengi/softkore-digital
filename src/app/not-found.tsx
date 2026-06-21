import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span>/</span>
              <span>Not found</span>
            </nav>
            <h1>Page Not Found</h1>
            <p>
              This page is not available right now. Start from the homepage or
              the core service pages.
            </p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/">
                Go Home
              </Link>
              <Link prefetch={false} className="button button-secondary" href="/services/web-development/">
                View Services
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>Helpful starting points</strong>
            <ul>
              <li>Homepage</li>
              <li>Core service pages</li>
              <li>Industry pages</li>
              <li>Project review</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}

