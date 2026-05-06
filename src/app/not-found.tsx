import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Not found</span>
            </nav>
            <h1>Page Not Found</h1>
            <p>
              This page is not part of the new Next.js route map yet. Start from
              the homepage or the core service pages.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/">
                Go Home
              </Link>
              <Link className="button button-secondary" href="/services/web-development/">
                View Services
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>Current route focus</strong>
            <ul>
              <li>Homepage</li>
              <li>Core service pages</li>
              <li>Typed content model</li>
              <li>Static export foundation</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
