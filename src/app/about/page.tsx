import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { FaqList } from "@/components/PageSections";
import { PagePeopleHero } from "@/components/PagePeopleHero";
import { Testimonials } from "@/components/Testimonials";
import { UiIcon } from "@/components/UiIcon";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import { aboutGalleryImages, pageHeroImages } from "@/lib/site-images";

export const metadata: Metadata = pageMetadata(
  "About SoftKore Digital | Web Development, SEO & Cyber Security",
  "SoftKore Digital is a South African web company focused on website design and development, SEO services, and website & cyber security for businesses across the country.",
  "/about/",
  pageHeroImages.about.src,
);

const aboutFaqs = [
  {
    question: "Who is SoftKore Digital and where are you based?",
    answer:
      "SoftKore Digital is a South African engineering-led web studio based at 111 Commissioner Street in Johannesburg, building, optimising and securing business websites nationwide. Reach our team via the [contact page](/contact/).",
  },
  {
    question: "Why does SoftKore focus on web development, SEO and security instead of social media ads?",
    answer:
      "A business website only compounds revenue when code speed, technical Google indexing and cyber security reinforce each other. Focusing purely on those three engineering pillars avoids shallow generalist retainers.",
  },
  {
    question: "How do you keep remote web projects predictable across all nine provinces?",
    answer:
      "Every stage ends with a concrete deliverable—written scope, staging site links you test on your own phone and live launch checks—so businesses in Cape Town, Durban, Pretoria or regional towns get equal clarity.",
  },
  {
    question: "What technology stack does SoftKore prefer for South African business websites?",
    answer:
      "We prioritise lean static and modern React/Next.js builds for speed and minimal attack surface, and support hardened WordPress builds where editorial teams need familiar self-editing. Compare both in our [WordPress vs custom guide](/guides/wordpress-vs-custom-website-south-africa/).",
  },
  {
    question: "How do you keep SEO reporting transparent and verifiable?",
    answer:
      "All work is measured inside your own Google Search Console and Analytics accounts—showing indexed page counts, search clicks and technical fixes without hiding behind proprietary scorecards.",
  },
  {
    question: "Will you audit an existing website built by another agency or freelancer?",
    answer:
      "Yes. Many clients come to us after previous agencies disappeared or left bloated themes behind. Start with a [free SEO audit](/contact/?service=free-seo-audit#contact-form) or a [website security audit](/services/website-security/) to see your real position first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "About", url: absoluteUrl("/about/") },
      ])} />
      <JsonLd data={faqSchema(aboutFaqs)} />
      <main className="simple-page">
        <PagePeopleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
          kicker="About SoftKore Digital"
          title="A South African web company focused on build quality, SEO and security."
          lead="We specialise in three connected areas for businesses across South Africa: website design & development, search engine optimisation, and website & cyber security. We explain everything in plain language and focus on measurable improvements."
          image={pageHeroImages.about}
          actions={[
            { label: "Start a Project", href: "/contact/", variant: "primary" },
            { label: "Explore Services", href: "/services/", variant: "secondary" },
          ]}
        />

        <section className="section simple-about-statement">
          <p className="simple-label">What we do</p>
          <h2>We help businesses launch fast websites, get found on Google, and protect their sites from threats.</h2>
        </section>

        <section className="section simple-about-values">
          <article><span>01</span><h3>We tell you what you actually need</h3><p>Sometimes that is fixing indexing errors on your existing site, tightening security, or replacing bloated pages rather than rebuilding everything from scratch. We give you a straight answer first.</p></article>
          <article><span>02</span><h3>We build lean, secure sites</h3><p>Clean code and focused page structures load faster, rank better, and leave fewer weak points for attackers to exploit.</p></article>
          <article><span>03</span><h3>We stay honest about results</h3><p>Nobody can guarantee Google rankings or 100% immunity from attacks. We promise sound engineering, accurate Search Console tracking and reporting you can check yourself.</p></article>
        </section>

        <section className="section simple-about-gallery" aria-label="How we work">
          {aboutGalleryImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} width={1536} height={1024} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </section>

        <section className="section simple-about-values">
          <article><span>04</span><h3>We work across South Africa</h3><p>Projects run remotely over video calls, email and WhatsApp, so businesses in any of the nine provinces get the same process and the same attention.</p></article>
          <article><span>05</span><h3>We build for local conditions</h3><p>That means pages that stay light on mobile data, WhatsApp and call options within easy reach, South African payment providers, and security controls aligned with POPIA.</p></article>
          <article><span>06</span><h3>We stay after launch</h3><p>Websites need ongoing patching, backups, security monitoring and Search Console checks. We look after sites once they are live, including sites we did not build.</p></article>
        </section>

        <Testimonials />

        <section className="section page-faq-section" aria-label="About SoftKore Digital questions">
          <div className="page-faq-head">
            <p className="simple-label">About our studio</p>
            <h2>Questions about how SoftKore Digital works.</h2>
            <p>Our engineering philosophy, technology preferences and remote delivery standards across South Africa.</p>
          </div>
          <FaqList items={aboutFaqs} />
        </section>

        <section className="section simple-final">
          <p className="simple-label">Work with SoftKore Digital</p>
          <h2>Tell us what your website needs to do.</h2>
          <Link prefetch={false} className="simple-button simple-button-light" href="/contact/">Start a Project <UiIcon name="arrow" /></Link>
        </section>
      </main>
    </>
  );
}
