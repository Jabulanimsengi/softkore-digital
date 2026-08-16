import type { Metadata } from "next";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "SoftKore Digital connects websites, customer journeys, payments, bookings, and business systems so companies can grow and operate more clearly.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "About", url: absoluteUrl("/about/") },
      ])} />
      <main className="simple-page">
        <section className="section simple-about-hero">
          <p className="simple-label">About Softkore</p>
          <h1>We make complicated digital work feel simple.</h1>
          <p>Softkore connects the customer-facing and operational parts of a business into one clear system.</p>
        </section>

        <section className="section simple-about-image">
          <img src="/images/site/about-studio.webp" alt="The Softkore team collaborating in a bright digital studio." width={1536} height={1024} loading="lazy" />
        </section>

        <section className="section simple-about-statement">
          <p className="simple-label">Our mission</p>
          <h2>Help businesses attract customers, complete transactions and run daily work with less friction.</h2>
        </section>

        <section className="section simple-about-values">
          <article><span>01</span><h3>Start with the business</h3><p>Technology only matters when it improves a real customer or operational outcome.</p></article>
          <article><span>02</span><h3>Build the simplest useful thing</h3><p>Clear journeys and focused systems beat unnecessary complexity.</p></article>
          <article><span>03</span><h3>Keep moving after launch</h3><p>The best digital systems improve as the business learns and grows.</p></article>
        </section>

        <Testimonials />

        <section className="section simple-final">
          <p className="simple-label">Work with Softkore</p>
          <h2>Bring us the part of your business that should work better.</h2>
          <Link prefetch={false} className="simple-button simple-button-light" href="/contact/">Start a Project <span>-&gt;</span></Link>
        </section>
      </main>
    </>
  );
}
