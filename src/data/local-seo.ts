import { getService } from "@/data/services";

export type LocalSeoPage = {
  serviceSlug: string;
  regionSlug: string;
  regionName: string;
  areaSlug?: string;
  areaName?: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  summary: string[];
  context: string[];
  insights: Array<{ title: string; text: string }>;
  proof: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
  priority: number;
};

export const localSeoPages: LocalSeoPage[] = [
  {
    serviceSlug: "web-development",
    regionSlug: "gauteng",
    regionName: "Gauteng",
    title: "Web Development Gauteng | SoftKore Digital",
    description:
      "Web development in Gauteng for businesses that need fast, credible, SEO-ready websites with clear service pages and enquiry paths.",
    h1: "Web Development in Gauteng",
    intro:
      "Gauteng businesses compete in dense search results, busy referral markets, and fast comparison journeys. SoftKore Digital builds websites that make the offer clear and the next step easy.",
    summary: [
      "Business websites",
      "Service page structure",
      "Mobile-first layouts",
      "Technical SEO foundations",
      "Lead enquiry paths",
    ],
    context: [
      "Gauteng buyers often compare several providers before making contact. A useful website should quickly explain what the business does, who it serves, and why the visitor can trust it.",
      "The first SEO goal is not to create a page for every suburb. It is to build strong regional and city pages that connect clearly to the core web development offer.",
    ],
    insights: [
      {
        title: "Commercial density",
        text: "Johannesburg, Pretoria, Sandton, and surrounding business hubs create competitive searches where weak service pages disappear quickly.",
      },
      {
        title: "Mobile-first decisions",
        text: "Many first visits happen on mobile. The site needs clear contact actions, fast loading, and service summaries that make sense at a glance.",
      },
      {
        title: "Room to expand",
        text: "A Gauteng hub can support deeper pages for Johannesburg, Pretoria, Sandton, and selected high-value areas once each page has a reason to exist.",
      },
    ],
    proof: [
      {
        title: "Clear service architecture",
        text: "Core services, supporting pages, and contact paths are structured before design details take over.",
      },
      {
        title: "Search-ready structure",
        text: "Titles, descriptions, canonical URLs, schema, and sitemap inclusion are planned consistently from the start.",
      },
      {
        title: "Conversion focus",
        text: "Pages are written to help visitors choose and enquire, not only to contain a location keyword.",
      },
      {
        title: "Scalable foundation",
        text: "The page model can grow into selected city, industry, and guide pages without mass-generating thin content.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for Gauteng businesses?",
        answer:
          "Yes. SoftKore Digital supports Gauteng businesses with website planning, design, development, technical SEO foundations, and ongoing improvements.",
      },
      {
        question: "Should a Gauteng business target every city and suburb?",
        answer:
          "No. It is better to start with strong regional and priority city pages, then expand only where the page can answer a specific customer need.",
      },
      {
        question: "Can the website support SEO from launch?",
        answer:
          "Yes. The site can launch with clean routes, metadata, schema, sitemap entries, and internal links planned from the start.",
      },
    ],
    related: [
      { label: "Johannesburg web development", href: "/services/web-development/gauteng/johannesburg/" },
      { label: "Pretoria web development", href: "/services/web-development/gauteng/pretoria/" },
      { label: "Web development services", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
    ],
    priority: 0.82,
  },
  {
    serviceSlug: "web-development",
    regionSlug: "gauteng",
    regionName: "Gauteng",
    areaSlug: "johannesburg",
    areaName: "Johannesburg",
    title: "Web Development Johannesburg | SoftKore Digital",
    description:
      "Web development in Johannesburg for businesses that need credible websites, clear service pages, fast mobile performance, and stronger enquiry paths.",
    h1: "Web Development in Johannesburg",
    intro:
      "Johannesburg buyers move quickly from search to comparison. A strong website needs to explain the offer, show trust, and make contact simple.",
    summary: ["Business websites", "Service pages", "Lead forms", "Local SEO structure", "Performance checks"],
    context: [
      "Johannesburg has high competition across professional services, trades, healthcare, property, retail, and B2B suppliers. Generic websites usually do not give buyers enough confidence to enquire.",
      "For Johannesburg web development, the useful work is clear positioning, strong service pages, visible proof, fast mobile layouts, and a route structure that can support selected local SEO pages later.",
    ],
    insights: [
      {
        title: "B2B comparison searches",
        text: "Many Johannesburg visitors compare providers before booking a call. The website should help them understand fit without needing a long sales conversation first.",
      },
      {
        title: "Service-led structure",
        text: "The site should point people to the service they need, then support that decision with relevant proof and clear next steps.",
      },
      {
        title: "Selective local growth",
        text: "Pages for Sandton, Midrand, Rosebank, and nearby business areas should be added only when the content is genuinely useful.",
      },
    ],
    proof: [
      {
        title: "Customer clarity",
        text: "The first screen and service sections explain who the business helps and what the next action should be.",
      },
      {
        title: "Technical setup",
        text: "Metadata, schema, canonical URLs, and sitemap entries are generated in code instead of hand-maintained across static files.",
      },
      {
        title: "Mobile performance",
        text: "Layouts are kept responsive and lean so mobile visitors can scan, trust, and enquire quickly.",
      },
      {
        title: "SEO expansion",
        text: "The Johannesburg page can become the parent for selected high-value local pages instead of a broad doorway network.",
      },
    ],
    faqs: [
      {
        question: "What should a Johannesburg business website include?",
        answer:
          "It should include clear service pages, trust signals, fast mobile layouts, enquiry forms, strong calls to action, and SEO-ready metadata.",
      },
      {
        question: "Can you redesign an existing Johannesburg website?",
        answer:
          "Yes. We can review the current website, keep what is useful, improve structure and content, and rebuild it as a cleaner, faster site.",
      },
      {
        question: "Can Johannesburg pages link to suburb pages later?",
        answer:
          "Yes, but suburb pages should be added selectively with useful content for real customers, not only because the location keyword exists.",
      },
    ],
    related: [
      { label: "Gauteng web development", href: "/services/web-development/gauteng/" },
      { label: "Pretoria web development", href: "/services/web-development/gauteng/pretoria/" },
      { label: "Sandton SEO services", href: "/services/seo-services/gauteng/sandton/" },
      { label: "Web development services", href: "/services/web-development/" },
    ],
    priority: 0.8,
  },
  {
    serviceSlug: "web-development",
    regionSlug: "gauteng",
    regionName: "Gauteng",
    areaSlug: "pretoria",
    areaName: "Pretoria",
    title: "Web Development Pretoria | SoftKore Digital",
    description:
      "Web development in Pretoria for service businesses, practices, consultants, and B2B companies that need clear, SEO-ready websites.",
    h1: "Web Development in Pretoria",
    intro:
      "Pretoria businesses need websites that explain services clearly, build trust quickly, and support enquiries from customers comparing providers online.",
    summary: ["Service websites", "Practice websites", "Consulting pages", "Mobile layouts", "SEO foundations"],
    context: [
      "Pretoria search intent often spans professional practices, education, consulting, public-sector adjacent services, and local providers. The website needs to feel practical, credible, and easy to navigate.",
      "A focused Pretoria page is stronger than many thin neighbourhood pages. It can later support Menlyn, Centurion, Hatfield, or Brooklyn pages if those pages earn their place.",
    ],
    insights: [
      {
        title: "Trust-heavy decisions",
        text: "Pretoria buyers often need to see experience, service detail, and contact clarity before they make an enquiry.",
      },
      {
        title: "Professional service fit",
        text: "The page structure should support practices, advisors, consultants, training providers, and service businesses with clear proof and FAQs.",
      },
      {
        title: "Practical SEO growth",
        text: "Search growth should begin with a strong core service page and Pretoria page before expanding into more specific locations.",
      },
    ],
    proof: [
      {
        title: "Structured content",
        text: "Services, proof, process, FAQs, and contact paths are organized around how customers decide.",
      },
      {
        title: "Consistent metadata",
        text: "Page titles, descriptions, sharing data, canonical URLs, and schema are managed consistently.",
      },
      {
        title: "Clear calls to action",
        text: "Visitors can request a quote, book a consultation, or ask a question without hunting through the site.",
      },
      {
        title: "Future expansion",
        text: "The Pretoria page can support selected area and industry routes without creating duplicated page networks.",
      },
    ],
    faqs: [
      {
        question: "Do you build websites for Pretoria businesses?",
        answer:
          "Yes. SoftKore Digital builds websites for Pretoria businesses that need clear service pages, mobile-friendly layouts, and SEO-ready foundations.",
      },
      {
        question: "Can the site target Pretoria and nearby areas?",
        answer:
          "Yes. The site can start with Pretoria and later expand into selected areas where the content can be specific and useful.",
      },
      {
        question: "Can a Pretoria service-business website support SEO properly?",
        answer:
          "Yes. The strongest approach is fast pages, carefully handled metadata, useful content, and a structure that avoids mass-produced location pages.",
      },
    ],
    related: [
      { label: "Gauteng web development", href: "/services/web-development/gauteng/" },
      { label: "Johannesburg web development", href: "/services/web-development/gauteng/johannesburg/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Web development services", href: "/services/web-development/" },
    ],
    priority: 0.78,
  },
  {
    serviceSlug: "seo-services",
    regionSlug: "gauteng",
    regionName: "Gauteng",
    areaSlug: "sandton",
    areaName: "Sandton",
    title: "SEO Services Sandton | SoftKore Digital",
    description:
      "SEO services in Sandton for businesses that need technical SEO, page optimization, local search planning, and Search Console monitoring.",
    h1: "SEO Services in Sandton",
    intro:
      "Sandton is a competitive commercial search market. SEO needs to be practical: fix technical issues, improve the right pages, and monitor what Google is doing.",
    summary: ["Technical SEO", "Search Console checks", "Service page SEO", "Local search planning", "Monthly monitoring"],
    context: [
      "Sandton businesses often compete for high-value searches across professional services, finance, property, healthcare, consulting, and B2B suppliers.",
      "The SEO strategy should focus on commercially useful pages first. Thin location pages are less useful than strong service pages, internal links, and technical health.",
    ],
    insights: [
      {
        title: "High-value competition",
        text: "Sandton searches are often competitive, so technical hygiene and page quality matter before scaling content.",
      },
      {
        title: "Search Console evidence",
        text: "Real query and indexing data should guide what to improve instead of guessing which pages Google values.",
      },
      {
        title: "Local relevance",
        text: "Sandton content should explain service fit and buyer intent rather than repeating the area name across generic copy.",
      },
    ],
    proof: [
      {
        title: "Technical review",
        text: "Check crawlability, indexation, metadata, canonical URLs, redirects, sitemap visibility, and internal links.",
      },
      {
        title: "Page improvement",
        text: "Strengthen service pages so they answer customer questions and connect to relevant supporting pages.",
      },
      {
        title: "Monitoring",
        text: "Use Search Console and live checks to see which pages are discovered, indexed, and shown for real queries.",
      },
      {
        title: "Careful local SEO",
        text: "Build only useful location pages with clear intent, related links, and a real reason to exist.",
      },
    ],
    faqs: [
      {
        question: "What SEO work comes first for a Sandton business?",
        answer:
          "Start with technical health, Search Console review, important service pages, internal links, metadata, and sitemap checks.",
      },
      {
        question: "Do you create local SEO pages for Sandton?",
        answer:
          "Yes, but they need useful local context, service fit, FAQs, and internal links. We avoid thin pages that only swap location names.",
      },
      {
        question: "How long does SEO take in a competitive area like Sandton?",
        answer:
          "Technical fixes can happen quickly, but ranking improvement is usually measured over months because competition, page quality, authority, and consistency all matter.",
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Johannesburg web development", href: "/services/web-development/gauteng/johannesburg/" },
      { label: "Gauteng web development", href: "/services/web-development/gauteng/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    priority: 0.78,
  },
  {
    serviceSlug: "seo-services",
    regionSlug: "western-cape",
    regionName: "Western Cape",
    areaSlug: "cape-town",
    areaName: "Cape Town",
    title: "SEO Services Cape Town | SoftKore Digital",
    description:
      "SEO services in Cape Town for businesses that need technical SEO, page improvement, local search planning, and search monitoring.",
    h1: "SEO Services in Cape Town",
    intro:
      "Cape Town search is competitive across tourism, retail, professional services, creative businesses, and technology companies. SEO needs useful pages and steady technical care.",
    summary: ["Technical SEO", "Page optimization", "Local SEO planning", "Indexing checks", "Reporting"],
    context: [
      "Cape Town businesses often serve both local customers and wider South African markets. The site structure should make that distinction clear.",
      "The first SEO priority is to improve core service pages, technical foundations, internal links, and selected local pages before expanding wider.",
    ],
    insights: [
      {
        title: "Mixed search intent",
        text: "Cape Town searches can be local, destination-led, industry-specific, or national. Page targeting should match the intent instead of forcing one template.",
      },
      {
        title: "Content quality",
        text: "Useful service pages, FAQs, guides, and proof sections are stronger than broad location coverage with repeated text.",
      },
      {
        title: "Technical consistency",
        text: "A consistent technical foundation keeps metadata, schema, performance, and sitemap entries predictable across priority pages.",
      },
    ],
    proof: [
      {
        title: "Search health checks",
        text: "Review indexability, sitemap visibility, metadata, redirects, canonicals, internal links, and page performance.",
      },
      {
        title: "Intent-led pages",
        text: "Improve the pages most likely to bring qualified enquiries instead of chasing every possible keyword.",
      },
      {
        title: "Local structure",
        text: "Plan Cape Town and selected area pages carefully so each page has clear customer value.",
      },
      {
        title: "Ongoing reporting",
        text: "Track what changed, what Google is seeing, and which pages need deeper improvement next.",
      },
    ],
    faqs: [
      {
        question: "Can SEO help a Cape Town service business?",
        answer:
          "Yes. SEO can help when the website has strong technical foundations, useful service pages, clean internal links, and consistent monitoring.",
      },
      {
        question: "Should Cape Town pages target every suburb?",
        answer:
          "No. Start with the highest-value services and selected areas where unique, useful content can be written.",
      },
      {
        question: "Can you monitor SEO after launch?",
        answer:
          "Yes. Ongoing support can include Search Console checks, indexing reviews, page improvements, internal links, and reporting.",
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Web development services", href: "/services/web-development/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Industries", href: "/industries/" },
    ],
    priority: 0.76,
  },
  {
    serviceSlug: "custom-web-applications",
    regionSlug: "kwazulu-natal",
    regionName: "KwaZulu-Natal",
    areaSlug: "durban",
    areaName: "Durban",
    title: "Custom Web Applications Durban | SoftKore Digital",
    description:
      "Custom web application development in Durban for booking systems, portals, dashboards, workflows, and business platforms.",
    h1: "Custom Web Applications in Durban",
    intro:
      "Durban businesses often need more than a brochure website. A custom web application can help manage bookings, client communication, payments, workflows, and internal operations.",
    summary: ["Booking systems", "Client portals", "Admin dashboards", "Workflow tools", "Integrations"],
    context: [
      "Durban has strong demand across logistics, hospitality, healthcare, retail, trades, and service businesses. Many of these businesses depend on repeat workflows that standard websites do not handle well.",
      "The best application starts with the workflow: users, roles, data, approvals, payments, notifications, and admin needs.",
    ],
    insights: [
      {
        title: "Operational workflows",
        text: "Booking, quoting, stock, customer updates, payments, and reporting can often be simplified with a focused web app.",
      },
      {
        title: "Customer convenience",
        text: "Portals and dashboards can give customers a clearer way to submit information, track progress, and complete repeat actions.",
      },
      {
        title: "Scalable build path",
        text: "A Durban platform can start with one core workflow and expand into additional roles, branches, integrations, or reports later.",
      },
    ],
    proof: [
      {
        title: "Workflow mapping",
        text: "Define users, actions, data, rules, and approvals before designing screens.",
      },
      {
        title: "Frontend and backend",
        text: "Build the customer interface, admin tools, database structure, authentication, and integrations together.",
      },
      {
        title: "Admin visibility",
        text: "Give staff a practical way to manage records, requests, users, payments, and reporting.",
      },
      {
        title: "Iterative launch",
        text: "Start with the most important workflow, then improve from real usage and business feedback.",
      },
    ],
    faqs: [
      {
        question: "What can a Durban business build as a custom web app?",
        answer:
          "Common options include booking systems, client portals, admin dashboards, marketplaces, payment-enabled workflows, reporting tools, and internal systems.",
      },
      {
        question: "Can the application start small?",
        answer:
          "Yes. A focused first version is usually best. It can launch around the most important workflow and expand after real usage proves what is needed next.",
      },
      {
        question: "Can the app include logins and admin dashboards?",
        answer:
          "Yes. We can plan authentication, user roles, permissions, admin screens, database structure, notifications, and reporting.",
      },
    ],
    related: [
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development services", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    priority: 0.74,
  },
];

export function localUrl(page: LocalSeoPage) {
  const areaPart = page.areaSlug ? `/${page.areaSlug}` : "";
  return `/services/${page.serviceSlug}/${page.regionSlug}${areaPart}/`;
}

export function getRegionPage(serviceSlug: string, regionSlug: string) {
  return localSeoPages.find(
    (page) =>
      page.serviceSlug === serviceSlug &&
      page.regionSlug === regionSlug &&
      !page.areaSlug,
  );
}

export function getAreaPage(
  serviceSlug: string,
  regionSlug: string,
  areaSlug: string,
) {
  return localSeoPages.find(
    (page) =>
      page.serviceSlug === serviceSlug &&
      page.regionSlug === regionSlug &&
      page.areaSlug === areaSlug,
  );
}

export function localPageLabel(page: LocalSeoPage) {
  const service = getService(page.serviceSlug);
  return `${service?.eyebrow || page.serviceSlug} in ${page.areaName || page.regionName}`;
}
