export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  summaryTitle: string;
  summary: string[];
  bodyHeading: string;
  body: string[];
  bullets: string[];
  cards: Array<{ title: string; text: string }>;
  featureTitle: string;
  featureIntro: string;
  features: Array<{ title: string; text: string }>;
  processTitle: string;
  processBody: string[];
  processItems: Array<{ title: string; text: string }>;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  serviceType: string;
};

export const services: ServicePage[] = [
  {
    slug: "web-development",
    title: "Web Development Services",
    metaTitle: "Web Development Services South Africa | SoftKore Digital",
    description:
      "SoftKore Digital provides modern web development services in South Africa for businesses that need fast, scalable, SEO-ready websites.",
    eyebrow: "Web Development",
    h1: "Web Development Services for Growing South African Businesses",
    intro:
      "SoftKore Digital builds fast, mobile-friendly websites for businesses that need to look credible and make it easy for customers to enquire.",
    primaryCta: "Start Your Website",
    secondaryCta: "Explore SEO Services",
    secondaryHref: "/services/seo-services/",
    summaryTitle: "Web development includes",
    summary: [
      "Business websites and landing pages",
      "Service page architecture",
      "Mobile-first responsive design",
      "Technical SEO foundations",
      "Performance optimization",
    ],
    bodyHeading: "A website should make the next step obvious.",
    body: [
      "A business website should explain what you do, why clients should trust you, and how to take the next step. We structure each website around customer needs, service clarity, fast loading, clean code, and future content expansion.",
      "Search visibility is easier when the site is built properly from the start. That means clear pages, fast loading, useful internal links, and room to add more services or locations later.",
    ],
    bullets: [
      "Company websites",
      "Service landing pages",
      "Lead generation pages",
      "Local SEO page structures",
      "Contact forms",
      "Analytics-ready deployment",
    ],
    cards: [
      {
        title: "Easy to grow",
        text: "The site can start small and expand into more services, industries, or locations when the business is ready.",
      },
      {
        title: "Easy to understand",
        text: "Services, locations, and contact options are organized so customers find what they need quickly.",
      },
      {
        title: "Fast on mobile",
        text: "Pages stay lean, responsive, and simple to use on the devices your customers already have.",
      },
    ],
    featureTitle: "What We Build",
    featureIntro:
      "Most business websites need more than a good-looking homepage. They need a structure that helps visitors understand the offer, trust the business, and take action.",
    features: [
      {
        title: "Service websites",
        text: "Clear pages for each major service, built around the questions customers ask before they enquire.",
      },
      {
        title: "Lead generation pages",
        text: "Focused landing pages with sharp copy, strong calls to action, enquiry forms, and conversion tracking.",
      },
      {
        title: "Local SEO structures",
        text: "Province, city, suburb, and industry pages planned carefully so each page has a useful reason to exist.",
      },
      {
        title: "Website redesigns",
        text: "Existing websites can be rebuilt with clearer navigation, better mobile layouts, stronger content, and improved technical foundations.",
      },
      {
        title: "Performance-focused builds",
        text: "Pages are kept lean, responsive, and easy to crawl so the site is not fighting itself before SEO work begins.",
      },
      {
        title: "Launch support",
        text: "Deployment includes metadata checks, sitemap review, contact path checks, analytics readiness, and basic live-site validation.",
      },
    ],
    processTitle: "Our Website Development Process",
    processBody: [
      "The process starts with the business goal, not the layout. We clarify who the website must persuade, what they need to know, and what action should happen next.",
      "From there we plan the page structure, write or refine the content, design the core sections, build the responsive pages, and check the site before launch.",
    ],
    processItems: [
      {
        title: "Discovery",
        text: "Services, audience, competitors, locations, trust signals, and enquiry paths are mapped before design starts.",
      },
      {
        title: "Structure",
        text: "Navigation, service pages, calls to action, and internal links are planned around how customers decide.",
      },
      {
        title: "Build",
        text: "The site is coded as a fast, responsive, SEO-ready experience with clean markup and reusable components.",
      },
      {
        title: "Launch",
        text: "We check pages, metadata, forms, links, sitemap visibility, and live performance after deployment.",
      },
    ],
    related: [
      { label: "Custom Web Applications", href: "/services/custom-web-applications/" },
      { label: "SEO Services", href: "/services/seo-services/" },
      { label: "Website Maintenance", href: "/services/website-maintenance/" },
      { label: "Industry Website Solutions", href: "/industries/" },
    ],
    faqs: [
      {
        question: "What should a business prepare before starting a website project?",
        answer:
          "Prepare your main services, target customers, current website details, examples you like, service areas, contact preferences, and any proof that helps customers trust the business.",
      },
      {
        question: "Can the website support SEO from the start?",
        answer:
          "Yes. The structure can include clean URLs, unique titles and descriptions, canonical URLs, schema, internal links, fast pages, and room for future service, location, industry, and guide content.",
      },
      {
        question: "Do you only build new websites?",
        answer:
          "No. We can also review and rebuild an existing website, keeping what works while improving the layout, content, technical setup, mobile experience, and conversion paths.",
      },
      {
        question: "Can a small website grow later?",
        answer:
          "Yes. A focused site can start with a homepage and core service pages, then expand into locations, industries, guides, case studies, and maintenance or SEO support over time.",
      },
    ],
    serviceType: "Web Development",
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Application Development",
    metaTitle: "Custom Web Application Development | SoftKore Digital",
    description:
      "Custom web application development services for dashboards, portals, booking systems, marketplaces, admin tools, and business platforms.",
    eyebrow: "Custom Web Applications",
    h1: "Custom Web Applications for Work That Has Outgrown Spreadsheets",
    intro:
      "SoftKore Digital builds dashboards, booking systems, portals, admin tools, and business platforms that help teams manage real work in one place.",
    primaryCta: "Build My App",
    secondaryCta: "Need a Website?",
    secondaryHref: "/services/web-development/",
    summaryTitle: "Application builds include",
    summary: [
      "Custom UI/UX",
      "Frontend and backend development",
      "Database setup",
      "Authentication",
      "Admin dashboards and integrations",
    ],
    bodyHeading: "The workflow comes first.",
    body: [
      "A useful app starts with the way people actually work. Before designing screens, we map the users, permissions, data, payments, notifications, and admin tasks the system needs.",
      "Whether it is a customer portal, booking platform, marketplace, dashboard, or claims system, the goal is to make daily work easier to manage.",
    ],
    bullets: [
      "Booking systems",
      "Client portals",
      "Marketplaces",
      "Admin dashboards",
      "Payment integrations",
      "API integrations",
    ],
    cards: [
      {
        title: "Workflow design",
        text: "We map the user roles, business rules, and operational steps before building screens.",
      },
      {
        title: "Scalable architecture",
        text: "We structure data, permissions, and application logic so the platform can grow with the business.",
      },
      {
        title: "Admin-first control",
        text: "We include the management tools teams need to update, monitor, and operate the platform.",
      },
    ],
    featureTitle: "Types of Web Applications We Can Build",
    featureIntro:
      "A custom application is useful when a normal website cannot manage the workflow, data, roles, or repeat actions the business depends on.",
    features: [
      {
        title: "Booking systems",
        text: "Let customers request or reserve appointments while admins manage availability, confirmations, and follow-ups.",
      },
      {
        title: "Client portals",
        text: "Give customers a secure place to view updates, submit information, download documents, or track progress.",
      },
      {
        title: "Admin dashboards",
        text: "Help teams manage enquiries, users, records, content, orders, payments, or workflow stages from one place.",
      },
      {
        title: "Marketplaces",
        text: "Connect customers, providers, listings, payments, notifications, and admin moderation in a structured platform.",
      },
      {
        title: "Internal tools",
        text: "Replace fragile spreadsheets with a purpose-built system for approvals, reporting, task tracking, or data management.",
      },
      {
        title: "Integrations",
        text: "Connect payment providers, email, analytics, third-party APIs, and operational tools when the workflow needs them.",
      },
    ],
    processTitle: "How We Scope an Application",
    processBody: [
      "The most important work happens before writing code. We map the users, permissions, screens, data, notifications, integrations, and admin actions so the build solves the right problem.",
      "Once the workflow is clear, we can design the screens, build the frontend and backend, test the main journeys, and prepare the platform for launch and future maintenance.",
    ],
    processItems: [
      {
        title: "Workflow mapping",
        text: "Define who uses the system, what they need to do, what data is required, and where decisions happen.",
      },
      {
        title: "Technical plan",
        text: "Choose the data model, authentication approach, integrations, admin tools, and deployment path.",
      },
      {
        title: "Build and test",
        text: "Create the screens and application logic, then test the important customer and admin journeys.",
      },
      {
        title: "Launch and improve",
        text: "Deploy the application, monitor early use, fix issues, and plan future iterations from real feedback.",
      },
    ],
    related: [
      { label: "Web Development", href: "/services/web-development/" },
      { label: "SEO Services", href: "/services/seo-services/" },
      { label: "Website Maintenance", href: "/services/website-maintenance/" },
      { label: "Industry Application Solutions", href: "/industries/" },
    ],
    faqs: [
      {
        question: "When does a business need a custom web application?",
        answer:
          "A custom application makes sense when the business needs logins, dashboards, bookings, workflows, payments, reporting, integrations, or structured data that a normal website cannot manage well.",
      },
      {
        question: "Can you build both the frontend and backend?",
        answer:
          "Yes. The work can include interface design, frontend development, backend logic, database structure, authentication, admin dashboards, and integrations.",
      },
      {
        question: "Can the platform start small?",
        answer:
          "Yes. Many applications should start with a focused first version, then add extra roles, reports, automations, integrations, or workflows after the core system proves useful.",
      },
      {
        question: "Do you maintain applications after launch?",
        answer:
          "Yes. Ongoing support can include bug fixes, feature improvements, security updates, monitoring, backups, and performance checks.",
      },
    ],
    serviceType: "Custom Web Applications",
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    metaTitle: "SEO Services South Africa | SoftKore Digital",
    description:
      "SEO services in South Africa from SoftKore Digital, including technical SEO, page optimization, indexing checks, Search Console monitoring, and reporting.",
    eyebrow: "SEO Services",
    h1: "SEO Services for Businesses That Want to Be Found",
    intro:
      "SoftKore Digital fixes the technical basics, improves important pages, and monitors search performance so your website has a better chance of bringing in the right traffic.",
    primaryCta: "Improve My SEO",
    secondaryCta: "View Web Development",
    secondaryHref: "/services/web-development/",
    summaryTitle: "SEO services include",
    summary: [
      "Technical SEO audits",
      "Metadata and page optimization",
      "Sitemap and indexing checks",
      "Google Search Console monitoring",
      "Local SEO page planning",
    ],
    bodyHeading: "Good SEO starts with a healthy website.",
    body: [
      "A website can look good and still struggle to get found. The technical setup, page quality, internal links, and search data all matter.",
      "Our work is practical. We check what Google can access, improve the pages that matter, and use Search Console to see what needs attention next.",
    ],
    bullets: [
      "Technical SEO setup",
      "Search Console checks",
      "Crawled but not indexed review",
      "Internal linking plans",
      "Local service pages",
      "Monthly reporting",
    ],
    cards: [
      {
        title: "Technical health",
        text: "Important pages should be easy for Google to find, understand, and load.",
      },
      {
        title: "Better service pages",
        text: "Service pages should answer real customer questions and make the next step clear.",
      },
      {
        title: "Monitoring",
        text: "Search Console data helps show what is working, what is stuck, and what should be improved next.",
      },
    ],
    featureTitle: "What SEO Work Covers",
    featureIntro:
      "SEO is not one task. It is a mix of technical health, page quality, internal linking, search intent, and ongoing monitoring.",
    features: [
      {
        title: "Technical checks",
        text: "Review indexability, redirects, sitemap visibility, crawl paths, canonical URLs, metadata, page speed, and broken links.",
      },
      {
        title: "Search Console reviews",
        text: "Use real search data to find pages that are discovered but not performing, queries with opportunity, and indexing issues that need attention.",
      },
      {
        title: "Service page improvement",
        text: "Strengthen important commercial pages so they answer buyer questions and connect to relevant locations, industries, and supporting content.",
      },
      {
        title: "Local SEO planning",
        text: "Build location structures carefully, with useful local context and internal links instead of thin pages that only swap city names.",
      },
      {
        title: "Content direction",
        text: "Identify guide and FAQ topics that support actual services, not random blog posts that never move a customer toward enquiry.",
      },
      {
        title: "Reporting",
        text: "Track what changed, what Google is seeing, which pages need work, and what should be improved next.",
      },
    ],
    processTitle: "How We Improve Search Visibility",
    processBody: [
      "The first step is finding what is blocking the site. Sometimes the issue is technical. Sometimes the pages are too thin. Sometimes the site has no clear internal linking model.",
      "After the audit, we prioritize fixes that can improve crawlability, page quality, and conversion. The goal is more qualified visitors landing on pages that make it easy to take the next step.",
    ],
    processItems: [
      {
        title: "Audit",
        text: "Review indexation, metadata, crawl paths, internal links, technical health, and the pages that matter commercially.",
      },
      {
        title: "Improve",
        text: "Update page structure, headings, copy, links, schema, and technical details where they are limiting visibility.",
      },
      {
        title: "Monitor",
        text: "Use Search Console and live checks to watch what Google discovers, indexes, and shows.",
      },
      {
        title: "Expand",
        text: "Plan the next useful service, location, industry, or guide pages after the core pages are strong.",
      },
    ],
    related: [
      { label: "Web Development", href: "/services/web-development/" },
      { label: "Custom Web Applications", href: "/services/custom-web-applications/" },
      { label: "Website Maintenance", href: "/services/website-maintenance/" },
      { label: "SEO Guides", href: "/guides/" },
    ],
    faqs: [
      {
        question: "What SEO work should happen first?",
        answer:
          "Start with technical health, Search Console review, key page improvements, internal linking, sitemap checks, and clear priorities for the next pages to improve.",
      },
      {
        question: "How long does SEO take?",
        answer:
          "Technical fixes can happen quickly, but ranking improvement is usually measured over months. Competition, page quality, links, authority, and consistency all matter.",
      },
      {
        question: "Do you create location pages?",
        answer:
          "Yes, but they need useful local context, service fit, related areas, FAQs, and internal links. Thin pages that only swap city names are risky.",
      },
      {
        question: "Can SEO support an existing website?",
        answer:
          "Yes. We can review the existing site, fix technical issues, improve important pages, and plan future content around search demand.",
      },
    ],
    serviceType: "Search Engine Optimization",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance Services",
    metaTitle: "Website Maintenance Services | SoftKore Digital",
    description:
      "Monthly website maintenance services for updates, bug fixes, security checks, SEO monitoring, Search Console checks, performance checks, and reporting.",
    eyebrow: "Website Maintenance",
    h1: "Monthly Website Maintenance and Support",
    intro:
      "After launch, your website still needs care. SoftKore Digital helps with updates, fixes, SEO checks, and performance monitoring so the site stays useful.",
    primaryCta: "Ask About Maintenance",
    secondaryCta: "Add SEO Monitoring",
    secondaryHref: "/services/seo-services/",
    summaryTitle: "Maintenance includes",
    summary: [
      "Website updates",
      "Security checks",
      "Bug fixes",
      "Content changes",
      "SEO and performance monitoring",
    ],
    bodyHeading: "A healthy website needs ongoing attention.",
    body: [
      "Websites can break, slow down, or become outdated as your business changes. Maintenance keeps those small problems from becoming expensive distractions.",
      "This support is for businesses that want their site to stay stable, current, and easy to improve.",
    ],
    bullets: [
      "Content changes",
      "Bug fixes",
      "Search Console checks",
      "Page speed checks",
      "SEO issue monitoring",
      "Monthly reporting",
    ],
    cards: [
      {
        title: "Keep pages current",
        text: "We help update service pages, contact details, images, copy, and calls to action as the business changes.",
      },
      {
        title: "Catch technical issues",
        text: "Regular checks help spot broken pages, slow loading, form problems, and search warnings early.",
      },
      {
        title: "Support ongoing SEO",
        text: "Maintenance can include search checks and page improvements after launch.",
      },
    ],
    featureTitle: "What Maintenance Can Include",
    featureIntro:
      "A website is a working business asset. Maintenance keeps it accurate, stable, secure, and easier to improve after launch.",
    features: [
      {
        title: "Content updates",
        text: "Update services, team details, images, pricing notes, calls to action, contact details, and location information.",
      },
      {
        title: "Bug fixes",
        text: "Fix broken layouts, form issues, mobile problems, missing assets, link errors, and small problems before they grow.",
      },
      {
        title: "Security checks",
        text: "Review access, dependencies, server behaviour, suspicious activity, and basic hardening needs where relevant.",
      },
      {
        title: "SEO monitoring",
        text: "Check Search Console, sitemap visibility, indexing changes, metadata issues, and pages that need improvement.",
      },
      {
        title: "Performance checks",
        text: "Watch page weight, image loading, caching, mobile usability, and avoidable layout or loading issues.",
      },
      {
        title: "Reporting",
        text: "Keep a simple record of completed work, issues found, recommendations, and next actions for the site.",
      },
    ],
    processTitle: "Why Maintenance Matters",
    processBody: [
      "Most websites slowly drift out of date. Services change, links break, staff details move, forms stop being tested, and Search Console starts showing warnings nobody is watching.",
      "Maintenance gives the site a rhythm. Small fixes, content improvements, and monitoring happen before they become urgent.",
    ],
    processItems: [
      {
        title: "Stability",
        text: "Regular checks help keep forms, pages, links, scripts, and key customer journeys working.",
      },
      {
        title: "Accuracy",
        text: "Service information, contact details, offers, and calls to action can stay aligned with the business.",
      },
      {
        title: "Visibility",
        text: "SEO and indexing checks help catch technical problems that can quietly reduce search performance.",
      },
      {
        title: "Momentum",
        text: "Maintenance creates space for small improvements instead of waiting for a full redesign.",
      },
    ],
    related: [
      { label: "Web Development", href: "/services/web-development/" },
      { label: "SEO Services", href: "/services/seo-services/" },
      { label: "Custom Web Applications", href: "/services/custom-web-applications/" },
    ],
    faqs: [
      {
        question: "How often should a website be maintained?",
        answer:
          "Most business websites should be checked at least monthly. Sites with frequent content changes, forms, SEO work, or application features may need more regular support.",
      },
      {
        question: "Can maintenance include SEO?",
        answer:
          "Yes. Maintenance can include Search Console checks, sitemap review, metadata improvements, internal link updates, performance checks, and recommendations for pages that need stronger content.",
      },
      {
        question: "Can you maintain a site you did not build?",
        answer:
          "Usually yes. We first review the site structure, access, hosting, codebase, and risk level so we understand what can be safely supported.",
      },
      {
        question: "Does maintenance replace a redesign?",
        answer:
          "No. Maintenance keeps a good site healthy and improving. If the structure, design, or content is fundamentally weak, a redesign may still be the better long-term fix.",
      },
    ],
    serviceType: "Website Maintenance",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
