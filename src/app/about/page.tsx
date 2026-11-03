import type { Metadata } from "next";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: South African Web Design & Development Company",
  description: "SoftKore Digital is a South African web company building websites and web applications, with SEO and maintenance, for businesses across the country.",
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
          <p className="simple-label">About SoftKore Digital</p>
          <h1>A South African web company that keeps things practical.</h1>
          <p>We build websites and web applications, and we provide SEO and maintenance, for businesses across South Africa. We focus on what helps you win and serve customers, and we explain it in plain language.</p>
        </section>

        <section className="section simple-about-image">
          <img src="/images/site/about-studio.webp" alt="People collaborating on a website project in a bright studio." width={1536} height={1024} loading="lazy" />
        </section>

        <section className="section simple-about-statement">
          <p className="simple-label">What we do</p>
          <h2>We help businesses get found online, turn visitors into enquiries, and run daily work with less admin.</h2>
        </section>

        <section className="section simple-about-values">
          <article><span>01</span><h3>We tell you what you actually need</h3><p>Sometimes that is existing software, a smaller site or fixing what you already have. We would rather give you a straight answer than sell you a bigger project.</p></article>
          <article><span>02</span><h3>We build the simplest useful version</h3><p>Clear pages and focused systems are easier to use, cheaper to run and quicker to improve. You can always add more once you see what customers respond to.</p></article>
          <article><span>03</span><h3>We stay honest about results</h3><p>Nobody can guarantee Google rankings. We can promise clear work, accurate tracking and reporting you can check for yourself.</p></article>
        </section>

        <section className="section simple-about-values">
          <article><span>04</span><h3>We work across South Africa</h3><p>Projects run remotely over video calls, email and WhatsApp, so businesses in any of the nine provinces get the same process and the same attention.</p></article>
          <article><span>05</span><h3>We build for local conditions</h3><p>That means pages that stay light on mobile data, WhatsApp and call options within easy reach, South African payment providers, and forms that take POPIA into account.</p></article>
          <article><span>06</span><h3>We stay after launch</h3><p>Websites and systems need updates, backups and improvements. We can look after them once they are live, including sites we did not build.</p></article>
        </section>

        <Testimonials />

        <section className="section simple-final">
          <p className="simple-label">Work with SoftKore Digital</p>
          <h2>Tell us what your website or system needs to do.</h2>
          <Link prefetch={false} className="simple-button simple-button-light" href="/contact/">Start a Project <span>-&gt;</span></Link>
        </section>
      </main>
    </>
  );
}
