import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesIndex() {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </nav>
            <h1>Services Built Around Growth, Operations and Search</h1>
            <p>
              Start with the core service pages. Location and industry pages
              will be rebuilt from typed content after the Next.js foundation is
              stable.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                Start a Project
              </Link>
              <Link className="button button-secondary" href="/services/web-development/">
                View Web Development
              </Link>
            </div>
          </div>
          <aside className="page-summary">
            <strong>Next.js route map</strong>
            <ul>
              <li>Core service hubs</li>
              <li>Shared metadata</li>
              <li>Typed page data</li>
              <li>Static export ready</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="section areas-section">
        <h2>Core Services</h2>
        <div className="area-list">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}/`}>
              {service.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
