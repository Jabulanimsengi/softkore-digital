import Link from "next/link";
import { UiIcon, type UiIconName } from "@/components/UiIcon";
import { caseStudies } from "@/data/case-studies";
import { JsonLd, organizationSchema } from "@/lib/schema";

const solutions: Array<{ icon: UiIconName; title: string; text: string; href: string }> = [
  { icon: "globe", title: "Website design & development", text: "Fast, responsive websites structured for trust, search visibility and conversion.", href: "/services/web-development/" },
  { icon: "workflow", title: "Business systems & automation", text: "Practical portals, dashboards and workflows that replace operational friction.", href: "/services/custom-web-applications/" },
  { icon: "calendar", title: "Booking & customer management", text: "Connected journeys for appointments, enquiries, payments and follow-up.", href: "/services/booking-customer-management/" },
  { icon: "search", title: "SEO & online visibility", text: "Search-led improvements that help the right customers discover your business.", href: "/services/seo-services/" },
  { icon: "shield", title: "Maintenance & technical support", text: "Ongoing updates, monitoring and improvements that keep your digital assets useful.", href: "/services/website-maintenance/" },
  { icon: "chart", title: "Digital marketing & conversion", text: "Campaign and conversion systems that turn attention into measurable business action.", href: "/services/digital-marketing-conversion/" },
];

const process = [
  ["01", "Discover", "We clarify the business goal, users and friction before deciding what to build."],
  ["02", "Shape", "We map the experience, content, workflow and technical foundation."],
  ["03", "Build", "We design, develop and test the important customer and admin journeys."],
  ["04", "Improve", "We launch carefully, measure what matters and refine from real use."],
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <main className="stitch-page">
        <section className="section stitch-hero stitch-home-hero">
          <div className="stitch-hero-copy"><p className="stitch-kicker">Websites • Business Systems • SEO • Digital Growth</p><h1>Digital Business Solutions Built for <span>Growth.</span></h1><p className="stitch-lead">We develop websites, business systems and online growth solutions that help growing businesses operate more efficiently, reach more customers and scale with confidence.</p><div className="stitch-actions"><Link prefetch={false} className="button button-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link><Link prefetch={false} className="button button-secondary" href="/services/">Explore Our Services</Link></div></div>
          <figure className="stitch-hero-media"><img src="/images/softkore-home-hero.webp" alt="A South African business team collaborating on a practical digital growth plan." /></figure>
        </section>

        <section className="stitch-trust-band" aria-label="Softkore capability principles"><div className="section"><span>Strategy</span><i /><span>Technology</span><i /><span>Growth</span><i /><span>Partnership</span></div></section>

        <section className="stitch-services-surface"><div className="section stitch-services"><div className="stitch-section-heading stitch-section-heading-center"><p className="stitch-kicker">What we do</p><h2>Comprehensive digital services</h2><p>Start with the part of the customer journey or daily operation that should work better.</p></div><div className="stitch-service-grid">{solutions.map((solution) => <Link prefetch={false} href={solution.href} className="stitch-service-card" key={solution.title}><span className="stitch-icon"><UiIcon name={solution.icon} /></span><h3>{solution.title}</h3><p>{solution.text}</p><strong>Explore solution <UiIcon name="arrow" /></strong></Link>)}</div></div></section>

        <section className="section stitch-work"><div className="stitch-section-heading stitch-heading-row"><div><p className="stitch-kicker">How we create value</p><h2>Focused work. Practical outcomes.</h2></div><Link prefetch={false} className="stitch-text-link" href="/work/">See all work <UiIcon name="arrow" /></Link></div><div className="stitch-work-grid">{caseStudies.map((study, index) => <article className={`stitch-work-card stitch-work-card-${index + 1}`} key={study.title}><span>{String(index + 1).padStart(2, "0")} / {study.category}</span><h3>{study.title}</h3><p>{study.outcome}</p><ul>{study.signals.slice(0, 3).map((signal) => <li key={signal}>{signal}</li>)}</ul></article>)}</div></section>

        <section className="section stitch-process"><div className="stitch-section-heading"><p className="stitch-kicker">A clear process</p><h2>From business problem to useful solution.</h2></div><ol>{process.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

        <section className="section stitch-cta"><div><p className="stitch-kicker">Ready to make the next move?</p><h2>Let&apos;s build something useful together.</h2><p>Tell us what should work better. We will help identify the simplest valuable next step.</p></div><Link prefetch={false} className="button button-primary" href="/contact/">Start a Project <UiIcon name="arrow" /></Link></section>
      </main>
    </>
  );
}
