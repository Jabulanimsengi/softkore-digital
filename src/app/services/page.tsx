import Link from "next/link";
import { services } from "@/data/services";
import { PageHeroImage } from "@/components/PageHeroImage";

export default function ServicesIndex() {
  return (
    <main>
      <section className="section page-hero">
        <div className="page-hero-inner">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </nav>
            <h1>Services Built Around Growth, Operations and Search</h1>
            <p>
              Choose the service path that matches what needs to improve first:
              a clearer website, better search visibility, a custom workflow
              system, or ongoing maintenance.
            </p>
            <div className="hero-actions">
              <Link prefetch={false} className="button button-primary" href="/contact/">
                Start a Project
              </Link>
              <Link prefetch={false} className="button button-secondary" href="/services/web-development/">
                View Web Development
              </Link>
            </div>
          </div>
          <aside className="page-summary page-summary-media">
            <PageHeroImage imageKey="services" />
            <strong>Best starting points</strong>
            <ul>
              <li>Website rebuilds</li>
              <li>Local SEO recovery</li>
              <li>Custom business systems</li>
              <li>Maintenance and monitoring</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="section areas-section">
        <h2>Core Services</h2>
        <div className="area-list">
          {services.map((service) => (
            <Link prefetch={false} key={service.slug} href={`/services/${service.slug}/`}>
              {service.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

