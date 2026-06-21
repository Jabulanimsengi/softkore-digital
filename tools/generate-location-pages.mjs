import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const locations = JSON.parse(fs.readFileSync(path.join(root, "sa_locations.json"), "utf8"));
const industries = fs.existsSync(path.join(root, "industries.json"))
  ? JSON.parse(fs.readFileSync(path.join(root, "industries.json"), "utf8"))
  : [];
const domain = "https://www.softkoredigital.co.za";

const services = [
  {
    slug: "web-development",
    label: "Web Development",
    titleNoun: "web development",
    headlineNoun: "websites",
    cta: "Start Your Website",
    summary: [
      "Business website design",
      "Service page architecture",
      "Mobile-first development",
      "Technical SEO foundations",
      "Lead generation layouts",
    ],
    intent: "business owners comparing web development partners who can create a professional website that earns trust and turns visitors into enquiries",
    deliverables: [
      "Service-focused page structure",
      "Fast mobile layouts",
      "Clear contact paths",
      "SEO-ready metadata",
      "Performance-minded implementation",
      "Conversion-focused content blocks",
    ],
    examples: [
      "service pages that explain offers clearly",
      "quote forms that reduce friction",
      "project or results sections that build trust",
      "location pages that support local enquiries",
    ],
    proof: "recent work examples, service details, clear enquiry paths, and visible trust signals",
    priority: "fast mobile pages, clear service navigation, conversion-focused copy, and a structure that can grow as new services or locations are added",
  },
  {
    slug: "seo-services",
    label: "SEO Services",
    titleNoun: "SEO services",
    headlineNoun: "search visibility systems",
    cta: "Improve My SEO",
    summary: [
      "Technical SEO checks",
      "Search Console monitoring",
      "Metadata optimization",
      "Indexing reviews",
      "Local SEO page planning",
    ],
    intent: "businesses looking for practical SEO implementation, indexing support, local visibility, and ongoing search performance monitoring",
    deliverables: [
      "Technical SEO audits",
      "Search Console reviews",
      "Page optimization",
      "Internal linking plans",
      "Indexing issue checks",
      "Monthly performance reporting",
    ],
    examples: [
      "technical checks for indexation and crawl issues",
      "service page improvements for clearer customer answers",
      "local landing pages connected to core services",
      "monthly visibility reviews and action lists",
    ],
    proof: "Search Console evidence, fixed technical issues, improved page quality, and clear reporting",
    priority: "technical foundations, page clarity, local relevance, internal links, and steady monitoring after launch",
  },
  {
    slug: "custom-web-applications",
    label: "Custom Web Applications",
    titleNoun: "custom web application development",
    headlineNoun: "business web applications",
    cta: "Build My App",
    summary: [
      "Custom UI/UX",
      "Dashboards and portals",
      "Booking systems",
      "Admin tools",
      "Database-backed platforms",
    ],
    intent: "businesses that need a custom digital system, dashboard, portal, marketplace, or booking platform instead of a standard brochure website",
    deliverables: [
      "Workflow planning",
      "Frontend development",
      "Backend development",
      "Authentication",
      "Admin dashboards",
      "Payment or API integrations",
    ],
    examples: [
      "booking systems for service businesses",
      "client portals for repeat communication",
      "admin dashboards for daily operations",
      "marketplace or payment-enabled workflows",
    ],
    proof: "workflow examples, role-based screens, integration plans, and maintainable technical documentation",
    priority: "secure access, clear workflows, reliable data handling, admin visibility, and a user experience that supports repeat use",
  },
];

const provinceNotes = {
  gauteng: "a dense, competitive commercial market where buyers often compare several providers before making contact",
  "western-cape": "a market with strong tourism, professional services, retail, technology, and lifestyle-led businesses",
  "kwazulu-natal": "a province with coastal commerce, logistics, hospitality, retail, and service businesses that need clear digital visibility",
  "eastern-cape": "a province with regional service businesses, professional practices, logistics, education, and industrial activity",
  "free-state": "a province where trust, clear service communication, and practical local discovery matter for growing businesses",
  mpumalanga: "a region with tourism, agriculture, mining, logistics, and local service companies that need reliable online visibility",
  limpopo: "a province where local search, clear business information, and mobile-friendly service pages help customers choose faster",
  "north-west": "a province with mining, agriculture, education, hospitality, and service-led businesses that benefit from stronger digital systems",
  "northern-cape": "a geographically broad province where clear online information helps customers evaluate providers before reaching out",
};

const metroNotes = {
  johannesburg: "high-competition commercial searches, B2B comparison, professional services, and fast decision-making",
  pretoria: "professional practices, public-sector adjacent businesses, education, consulting, and service providers",
  ekurhuleni: "industrial, logistics, manufacturing, aviation-adjacent, and local service businesses",
  "cape-town": "competitive local search across tourism, retail, professional services, creative companies, and technology businesses",
  "cape-winelands": "hospitality, tourism, agriculture, professional services, and location-led discovery",
  "garden-route": "tourism, hospitality, property, local services, and destination-led customer searches",
  ethekwini: "coastal commerce, logistics, hospitality, professional services, and retail visibility",
  msunduzi: "local service providers, education, professional practices, and regional business visibility",
  "king-cetshwayo": "industrial, port-adjacent, local service, and regional business searches",
  "nelson-mandela-bay": "automotive, logistics, education, professional services, and local commerce",
  "buffalo-city": "regional service businesses, professional practices, and local search discovery",
  mangaung: "professional services, education, government-adjacent businesses, and local providers",
  lejweleputswa: "mining, local services, and practical business discovery",
  ehlanzeni: "tourism, agriculture, hospitality, retail, and service-area businesses",
  nkangala: "industrial, mining, logistics, and local business services",
  capricorn: "local service businesses, retail, professional practices, and mobile-first discovery",
  mopani: "tourism, agriculture, local services, and regional search visibility",
  "bojanala-platinum": "mining, hospitality, local services, and supplier discovery",
  "dr-kenneth-kaunda": "education, local services, professional practices, and regional businesses",
  "frances-baard": "regional commerce, professional services, mining-adjacent suppliers, and local search",
  "zf-mgcawu": "regional service businesses, agriculture, logistics, and local discovery",
};

const displayNames = {
  johannesburg: "Johannesburg",
  pretoria: "Pretoria",
  ethekwini: "Durban and eThekwini",
  "cape-town": "Cape Town",
  "nelson-mandela-bay": "Nelson Mandela Bay",
};

function displayName(area) {
  if (!area) return "";
  return displayNames[area.slug] || area.name || area.province;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function relPrefix(depth) {
  return "../".repeat(depth);
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function layout({ depth, title, description, canonical, h1, intro, breadcrumb, summaryTitle, summary, bodyHeading, body, cards, links, schema, insightTitle, insights, decisionTitle, decisionItems, proofTitle, proofItems, planTitle, planItems, faqs }) {
  const prefix = relPrefix(depth);
  const summaryItems = summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
  const cardHtml = cards
    .map((card) => `<article class="content-card"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.text)}</p></article>`)
    .join("\n");
  const linkHtml = links.map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join("\n");
  const insightHtml = insights.map((item) => `<article class="content-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("\n");
  const decisionHtml = decisionItems.map((item) => `<article class="content-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("\n");
  const proofHtml = proofItems.map((item) => `<li><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.text)}</span></li>`).join("\n");
  const planHtml = planItems.map((item) => `<article class="content-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("\n");
  const faqHtml = faqs.map((faq) => `<details class="faq-item"><summary>${escapeHtml(faq.question)}</summary><p>${escapeHtml(faq.answer)}</p></details>`).join("\n");
  const breadcrumbHtml = breadcrumb
    .map((item, index) => (item.href ? `<a href="${item.href}">${escapeHtml(item.label)}</a>` : `<span>${escapeHtml(item.label)}</span>`) + (index < breadcrumb.length - 1 ? "<span>/</span>" : ""))
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <title>${escapeHtml(title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="${prefix}styles.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <header class="site-header" data-header>
      <a class="brand" href="${prefix}index.html" aria-label="SoftKore Digital home"><img class="brand-logo" src="${prefix}logo.png" alt="SoftKore Digital" /></a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
      <nav class="site-nav" data-nav>
        <a href="${prefix}index.html">Home</a>
        <a href="${prefix}services/web-development/">Services</a>
        <a href="${prefix}industries/">Industries</a>
        <a href="${prefix}work/">Work</a>
        <a href="${prefix}services/">Process</a>
        <a href="${prefix}services/seo-services/">SEO</a>
        <a href="${prefix}contact/">Contact</a>
      </nav>
      <a class="nav-cta" href="${prefix}contact/">Start a Project</a>
    </header>
    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">${breadcrumbHtml}</nav>
            <h1>${escapeHtml(h1)}</h1>
            <p>${escapeHtml(intro)}</p>
            <div class="hero-actions"><a class="button button-primary" href="${prefix}contact/">Start a Project</a><a class="button button-secondary" href="${prefix}services/${breadcrumb[1]?.serviceSlug || "web-development"}/">View Core Service</a></div>
          </div>
          <aside class="page-summary"><strong>${escapeHtml(summaryTitle)}</strong><ul>${summaryItems}</ul></aside>
        </div>
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>${escapeHtml(bodyHeading)}</h2>
            ${body.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n")}
          </div>
          <div class="content-panel">${cardHtml}</div>
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="section-heading">
          <h2>${escapeHtml(insightTitle)}</h2>
        </div>
        <div class="local-insight-grid">${insightHtml}</div>
      </section>
      <section class="section local-proof-section">
        <div class="section-heading">
          <h2>${escapeHtml(decisionTitle)}</h2>
        </div>
        <div class="local-insight-grid">${decisionHtml}</div>
      </section>
      <section class="section local-proof-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>${escapeHtml(proofTitle)}</h2>
            <p>You should know what will be included before you start. Here is the practical work that usually matters most for this service.</p>
          </div>
          <ul class="proof-list">${proofHtml}</ul>
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="section-heading">
          <h2>${escapeHtml(planTitle)}</h2>
        </div>
        <div class="local-insight-grid">${planHtml}</div>
      </section>
      <section class="section faq-section">
        <div class="section-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">${faqHtml}</div>
      </section>
      <section class="section areas-section"><h2>Related Locations</h2><div class="area-list">${linkHtml}</div></section>
    </main>
    <script src="${prefix}script.js"></script>
  </body>
</html>
`;
}

function serviceSchema(service, areaName, areaType, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.label} in ${areaName}`,
    provider: { "@type": "Organization", name: "SoftKore Digital", url: `${domain}/` },
    areaServed: { "@type": areaType, name: areaName },
    serviceType: service.label,
    url,
  };
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function areaProfile({ province, metro, suburb }) {
  const areaName = suburb?.name || displayName(metro) || province.province;
  const level = suburb ? "suburb" : metro ? "metro" : "province";
  const provinceNote = provinceNotes[province.slug] || "a regional market where clear digital positioning and local discovery matter";
  const metroNote = metro ? metroNotes[metro.slug] || "local services, practical comparison, and customer discovery" : provinceNote;
  const customerPattern = suburb
    ? `${suburb.name} buyers usually want fast clarity, visible credibility, and an easy way to make contact without digging through a generic national page`
    : metro
      ? `${areaName} buyers often compare providers by credibility, service fit, speed of response, and evidence that the provider understands the local market`
      : `${province.province} buyers often move between province-level research and more specific city or suburb pages before making contact`;
  const businessContext = suburb
    ? `${suburb.name} sits within ${displayName(metro)}, where customer decisions are influenced by ${metroNote}`
    : metro
      ? `${areaName} is shaped by ${metroNote}`
      : `${province.province} is ${provinceNote}`;
  return { areaName, level, provinceNote, metroNote, customerPattern, businessContext };
}

function serviceAngle(service, areaName) {
  if (service.slug === "web-development") {
    return {
      fit: `Businesses in ${areaName} need websites that explain services quickly, look credible on mobile, and make it easy for a visitor to request a quote or consultation.`,
      plan: [
        { title: "Clarify the offer", text: "Show the main services, who they are for, and what action the visitor should take next." },
        { title: "Build conversion paths", text: "Use focused contact sections, quote forms, call links, and trust content to turn visits into enquiries." },
        { title: "Prepare for expansion", text: "Create a page structure that can support new services, areas, landing pages, and content over time." },
      ],
    };
  }
  if (service.slug === "seo-services") {
    return {
      fit: `Businesses in ${areaName} need SEO work that improves technical health, page quality, local relevance, and monitoring after the website is live.`,
      plan: [
        { title: "Fix the foundation", text: "Review metadata, indexation, internal links, page speed, and technical issues that can hold visibility back." },
        { title: "Improve service pages", text: "Strengthen pages so they answer customer questions clearly and connect related services and locations." },
        { title: "Monitor progress", text: "Use Search Console checks and reporting to catch issues, track movement, and decide what to improve next." },
      ],
    };
  }
  return {
    fit: `Businesses in ${areaName} need web applications that simplify workflows, manage data clearly, and give staff or customers a reliable digital system.`,
    plan: [
      { title: "Map the workflow", text: "Define users, roles, data, approvals, notifications, and the tasks the system must support." },
      { title: "Build usable screens", text: "Design dashboards, portals, booking flows, and admin tools around the way people will actually work." },
      { title: "Plan for operations", text: "Include authentication, database structure, integrations, reporting, and maintainable technical foundations." },
    ],
  };
}

function buildInsights(service, profile, province, metro, suburb) {
  const area = profile.areaName;
  const nearby = suburb && metro.suburbs.length > 1
    ? metro.suburbs.filter((item) => item.slug !== suburb.slug).slice(0, 3).map((item) => item.name).join(", ")
    : metro
      ? metro.suburbs.slice(0, 4).map((item) => item.name).join(", ")
      : province.metros.slice(0, 3).map((item) => displayName(item)).join(", ");
  return [
    { title: `What matters in ${area}`, text: `${profile.businessContext}. Your website or platform needs to make the next step obvious for people who are already comparing options.` },
    { title: "How customers decide", text: `${profile.customerPattern}. Clear pages, quick contact options, and honest service details make that decision easier.` },
    { title: "Nearby areas", text: `Many businesses also serve nearby areas such as ${nearby}. The site can be planned so those customers find the right service without confusion.` },
  ];
}

function buildDecisionItems(service, profile, province, metro, suburb) {
  const area = profile.areaName;
  const locationScope = suburb
    ? `${suburb.name}, ${displayName(metro)}, and nearby suburbs`
    : metro
      ? `${area} and its surrounding suburbs`
      : `${province.province} and its priority cities`;
  const measurement = service.slug === "seo-services"
    ? "Search Console coverage, query movement, indexed pages, internal links, and priority page improvements"
    : service.slug === "custom-web-applications"
      ? "completed workflows, user adoption, admin time saved, form submissions, and support requests reduced"
      : "qualified enquiries, contact clicks, form submissions, page engagement, and local service page performance";
  const pageStructure = service.slug === "seo-services"
    ? "technical fixes, service page rewrites, local page improvements, internal links, and measurement notes"
    : service.slug === "custom-web-applications"
      ? "workflow scope, user roles, core screens, admin controls, notifications, integrations, and launch priorities"
      : "homepage sections, service pages, proof blocks, quote paths, FAQs, location links, and technical SEO basics";

  return [
    {
      title: "Buyer intent",
      text: `${area} visitors are usually deciding whether the provider is credible, available, relevant to their problem, and easy to contact.`,
    },
    {
      title: "Page structure",
      text: `The recommended structure covers ${pageStructure}, so the page supports a real decision instead of only repeating a keyword.`,
    },
    {
      title: "Local coverage",
      text: `Internal links should connect ${locationScope} so people and crawlers can move through the service area naturally.`,
    },
    {
      title: "Measurement",
      text: `Progress should be reviewed through ${measurement}, then used to decide which pages or flows to improve next.`,
    },
  ];
}

function buildProofItems(service, profile) {
  const area = profile.areaName;
  return [
    { title: "Clear examples", text: `${area} visitors need to see what the business offers and how to take the next step without guessing.` },
    { title: "Trust on the page", text: `Strong service details, visible contact options, and helpful supporting content make the business easier to choose.` },
    { title: "Practical service fit", text: serviceAngle(service, area).fit },
    { title: "Easy contact", text: `Customers should be able to request a quote, book a consultation, or ask a first question without searching for the right button.` },
  ];
}

function buildFaqs(service, profile, province, metro, suburb) {
  const area = profile.areaName;
  const parentArea = suburb ? displayName(metro) : metro ? province.province : "South Africa";
  const nearbyAreas = suburb && metro.suburbs.length > 1
    ? metro.suburbs.filter((item) => item.slug !== suburb.slug).slice(0, 3).map((item) => item.name).join(", ")
      : metro
        ? metro.suburbs.slice(0, 3).map((item) => item.name).join(", ")
      : province.metros.slice(0, 3).map((item) => displayName(item)).join(", ");
  const serviceLower = service.label.toLowerCase();
  const clientPhrase = service.slug === "seo-services"
    ? "SEO clients"
    : service.slug === "custom-web-applications"
      ? "web application clients"
      : `${serviceLower} clients`;
  const supportPhrase = service.slug === "seo-services" ? "SEO services" : serviceLower;
  const sharedFaqs = [
    {
      question: `Do you work with ${clientPhrase} in ${area}?`,
      answer: `Yes. SoftKore Digital can support ${area} businesses with ${supportPhrase}, planning, implementation, and ongoing improvements. The work can be handled remotely with clear communication and scheduled check-ins.`,
    },
    {
      question: `How do you approach ${serviceLower} for ${area} businesses?`,
      answer: `The work starts with the services, customers, locations, and enquiry paths that matter most to the business. From there, the page or system is shaped around clear information and easy contact.`,
    },
    {
      question: `What should a ${area} business prepare before starting?`,
      answer: `Prepare your main services, target customers, current website or system details, examples you like, and any business goals such as more enquiries, better visibility, faster operations, or easier customer management.`,
    },
    {
      question: "Can you help us expand into other areas later?",
      answer: `Yes. The website can grow into nearby areas such as ${nearbyAreas || parentArea}, new services, industry pages, and supporting content without rebuilding everything from scratch.`,
    },
  ];

  const webDevelopmentFaqs = [
    {
      question: `What type of website works best for a ${area} business?`,
      answer: `Most ${area} businesses need a fast, mobile-friendly website with clear service pages, visible trust signals, strong calls to action, and a structure that can support future location or industry pages.`,
    },
    {
      question: `Can you redesign an existing website for a ${area} company?`,
      answer: `Yes. We can review the current website, keep what is useful, improve the structure and visual design, and rebuild pages so the business looks more credible and easier to contact.`,
    },
    {
      question: `Will the website include contact forms and enquiry tracking?`,
      answer: `Yes. We can include contact forms, call links, WhatsApp links, analytics setup, and conversion paths that help the business understand where enquiries are coming from.`,
    },
    {
      question: `How do you make the website useful for nearby areas like ${nearbyAreas || parentArea}?`,
      answer: `Nearby area pages should answer local questions and point people to the right service quickly. That gives customers useful information instead of a repeated location name.`,
    },
  ];

  const seoFaqs = [
    {
      question: `What SEO work is most important for a ${area} business?`,
      answer: `The priority is usually technical health, clear service pages, local relevance, internal links, metadata, indexing checks, and ongoing Search Console monitoring after changes go live.`,
    },
    {
      question: `Can you help a ${area} business with Google Search Console issues?`,
      answer: `Yes. We can review indexing status, crawl issues, page experience signals, sitemap visibility, redirects, and pages that are discovered but not performing as expected.`,
    },
    {
      question: `Do you create local SEO pages for areas near ${area}?`,
      answer: `Yes. We can build a structured set of service and location pages that connect ${area} with nearby areas such as ${nearbyAreas || parentArea}, while keeping the visible content useful for real visitors.`,
    },
    {
      question: `How long does SEO take for a ${area} business?`,
      answer: `SEO is usually measured over months, not days. Technical fixes can be completed quickly, but stronger visibility depends on page quality, competition, indexing, content depth, and consistent monitoring.`,
    },
  ];

  const applicationFaqs = [
    {
      question: `What kind of custom web application can a ${area} business build?`,
      answer: `Common options include booking systems, client portals, dashboards, admin systems, marketplaces, claims workflows, payment-enabled platforms, and internal tools for managing daily operations.`,
    },
    {
      question: `Can the application include logins, roles, and admin dashboards?`,
      answer: `Yes. We can plan authentication, user roles, permissions, admin screens, database structure, notifications, and reporting based on how the business operates.`,
    },
    {
      question: `How do you scope a web application for a ${area} company?`,
      answer: `We start by mapping users, workflows, data, business rules, integrations, and the actions each person needs to complete. That gives the build a practical structure before design and development begin.`,
    },
    {
      question: `Can the app support customers or teams beyond ${area}?`,
      answer: `Yes. A custom web application can be built for local operations first and then expanded to support more branches, regions, user roles, integrations, and reporting needs over time.`,
    },
  ];

  const serviceFaqs = service.slug === "web-development"
    ? webDevelopmentFaqs
    : service.slug === "seo-services"
      ? seoFaqs
      : applicationFaqs;

  return [
    ...sharedFaqs,
    ...serviceFaqs,
  ];
}

function makeProvincePage(service, province) {
  const provinceNote = provinceNotes[province.slug] || "a regional market where clear digital positioning and local discovery matter";
  const profile = areaProfile({ province });
  const faqs = buildFaqs(service, profile, province);
  const angle = serviceAngle(service, province.province);
  const urlPath = `services/${service.slug}/${province.slug}/`;
  const filePath = path.join(root, urlPath, "index.html");
  const links = province.metros.map((metro) => ({ href: `${metro.slug}/`, label: `${service.label} in ${displayName(metro)}` }));
  writeFile(filePath, layout({
    depth: 3,
    title: `${service.label} ${province.province} | SoftKore Digital`,
    description: `${service.label} in ${province.province} for businesses that need ${service.headlineNoun}, strong digital foundations, and clearer online visibility.`,
    canonical: `${domain}/${urlPath}`,
    h1: `${service.label} in ${province.province}`,
    intro: `${province.province} businesses need clear websites, useful service pages, and simple enquiry paths. SoftKore Digital helps turn that online presence into something customers can understand and act on.`,
    breadcrumb: [{ href: "../../../index.html", label: "Home" }, { href: "../", label: service.label, serviceSlug: service.slug }, { label: province.province }],
    summaryTitle: `${province.province} focus`,
    summary: service.summary,
    bodyHeading: `A ${service.titleNoun} strategy for ${province.province}.`,
    body: [
      `Customers in ${province.province} often compare a few providers before making contact. Clear service information, a fast mobile experience, and visible trust signals help them choose with more confidence.`,
      `The work can start with one focused service page and grow into nearby areas, industry pages, and ongoing improvements as the business grows.`,
    ],
    cards: [
      { title: "Regional context", text: `We shape the page around how buyers in ${province.province} compare providers and decide who to contact.` },
      { title: "Service clarity", text: `The content explains the actual ${service.label.toLowerCase()} outcomes customers can expect in this area.` },
      { title: "Connected locations", text: "Province, metro, and suburb pages link together so visitors can move to the most relevant local page." },
    ],
    insightTitle: `Why ${province.province} Businesses Choose Us`,
    insights: buildInsights(service, profile, province),
    decisionTitle: `Search and Conversion Priorities`,
    decisionItems: buildDecisionItems(service, profile, province),
    proofTitle: "What You Can Expect",
    proofItems: buildProofItems(service, profile),
    planTitle: `Our Approach in ${province.province}`,
    planItems: angle.plan,
    faqs,
    links,
    schema: [serviceSchema(service, province.province, "AdministrativeArea", `${domain}/${urlPath}`), faqSchema(faqs)],
  }));
}

function makeMetroPage(service, province, metro) {
  const metroNote = metroNotes[metro.slug] || "local business searches, practical comparison, and service-area discovery";
  const profile = areaProfile({ province, metro });
  const faqs = buildFaqs(service, profile, province, metro);
  const area = displayName(metro);
  const angle = serviceAngle(service, area);
  const urlPath = `services/${service.slug}/${province.slug}/${metro.slug}/`;
  const filePath = path.join(root, urlPath, "index.html");
  const links = metro.suburbs.map((suburb) => ({ href: `${suburb.slug}/`, label: `${service.label} in ${suburb.name}` }));
  links.push({ href: "../", label: `${service.label} in ${province.province}` });
  writeFile(filePath, layout({
    depth: 4,
    title: `${service.label} ${area} | SoftKore Digital`,
    description: `${service.label} in ${area}, ${province.province}, with local page planning, clear enquiry paths, technical foundations, and practical growth support.`,
    canonical: `${domain}/${urlPath}`,
    h1: `${service.label} in ${area}`,
    intro: `${area} is busy, competitive, and full of customers comparing options before they make contact. SoftKore Digital helps businesses present their services clearly and make enquiries easier.`,
    breadcrumb: [{ href: "../../../../index.html", label: "Home" }, { href: "../../", label: service.label, serviceSlug: service.slug }, { href: "../", label: province.province }, { label: area }],
    summaryTitle: `${area} priorities`,
    summary: service.summary,
    bodyHeading: `Built for customer decisions in ${area}.`,
    body: [
      `Customers in ${area} usually want to understand the offer quickly, compare credibility, and know how to take the next step.`,
      `For ${service.label.toLowerCase()}, we focus on practical outcomes: clearer positioning, better customer journeys, and a stronger path from first visit to enquiry.`,
    ],
    cards: [
      { title: "Local business context", text: `${area} businesses need pages that feel specific, useful, and easy to act on.` },
      { title: "Decision support", text: `The content supports visitors who are comparing options and deciding whether ${service.label.toLowerCase()} is the right next step.` },
      { title: "Suburb coverage", text: "Customers can move from a broad area to the suburb or service that matches what they need." },
    ],
    insightTitle: `Why ${area} Businesses Choose Us`,
    insights: buildInsights(service, profile, province, metro),
    decisionTitle: `Search and Conversion Priorities`,
    decisionItems: buildDecisionItems(service, profile, province, metro),
    proofTitle: "What You Can Expect",
    proofItems: buildProofItems(service, profile),
    planTitle: `Our Approach in ${area}`,
    planItems: angle.plan,
    faqs,
    links,
    schema: [serviceSchema(service, metro.name, "AdministrativeArea", `${domain}/${urlPath}`), faqSchema(faqs)],
  }));
}

function makeSuburbPage(service, province, metro, suburb) {
  const metroNote = metroNotes[metro.slug] || "local business searches and practical service comparison";
  const profile = areaProfile({ province, metro, suburb });
  const faqs = buildFaqs(service, profile, province, metro, suburb);
  const metroArea = displayName(metro);
  const angle = serviceAngle(service, suburb.name);
  const urlPath = `services/${service.slug}/${province.slug}/${metro.slug}/${suburb.slug}/`;
  const filePath = path.join(root, urlPath, "index.html");
  const peerLinks = metro.suburbs
    .filter((item) => item.slug !== suburb.slug)
    .slice(0, 5)
    .map((item) => ({ href: `../${item.slug}/`, label: `${service.label} in ${item.name}` }));
  peerLinks.push({ href: "../", label: `${service.label} in ${metroArea}` });
  writeFile(filePath, layout({
    depth: 5,
    title: `${service.label} ${suburb.name} | SoftKore Digital`,
    description: `${service.label} in ${suburb.name}, ${province.province}, with clear service pages, useful local context, stronger enquiry paths, and technical SEO basics.`,
    canonical: `${domain}/${urlPath}`,
    h1: `${service.label} in ${suburb.name}`,
    intro: `${suburb.name} customers usually want quick answers before they enquire. SoftKore Digital helps businesses present their services clearly, build trust, and make the next step easy.`,
    breadcrumb: [{ href: "../../../../../index.html", label: "Home" }, { href: "../../../", label: service.label, serviceSlug: service.slug }, { href: "../../", label: province.province }, { href: "../", label: metroArea }, { label: suburb.name }],
    summaryTitle: `${suburb.name} service fit`,
    summary: service.deliverables,
    bodyHeading: `A local ${service.titleNoun} approach for ${suburb.name}.`,
    body: [
      `${suburb.name} sits within ${metroArea}, where customer decisions are influenced by ${metroNote}. The goal is to make the service easy to understand and the business easy to contact.`,
      `For this location, the page focuses on the real business outcome behind ${service.label.toLowerCase()}: stronger presentation, clearer information, better enquiry paths, and a digital foundation that can keep improving.`,
    ],
    cards: [
      { title: "Local relevance", text: `${suburb.name} businesses get service information shaped around practical local needs and customer expectations.` },
      { title: "Clear next step", text: `Visitors can move from research into a quote, consultation, or first conversation without extra friction.` },
      { title: "Room to grow", text: "The same foundation can support more services, nearby areas, and industry-specific pages later." },
    ],
    insightTitle: `Why ${suburb.name} Businesses Choose Us`,
    insights: buildInsights(service, profile, province, metro, suburb),
    decisionTitle: `Search and Conversion Priorities`,
    decisionItems: buildDecisionItems(service, profile, province, metro, suburb),
    proofTitle: "What You Can Expect",
    proofItems: buildProofItems(service, profile),
    planTitle: `Our Approach in ${suburb.name}`,
    planItems: angle.plan,
    faqs,
    links: peerLinks,
    schema: [serviceSchema(service, suburb.name, "City", `${domain}/${urlPath}`), faqSchema(faqs)],
  }));
}

const sitemapUrls = [
  { loc: `${domain}/`, priority: "1.0" },
  { loc: `${domain}/services/web-development/`, priority: "0.9" },
  { loc: `${domain}/services/custom-web-applications/`, priority: "0.9" },
  { loc: `${domain}/services/seo-services/`, priority: "0.9" },
  { loc: `${domain}/services/website-maintenance/`, priority: "0.8" },
  { loc: `${domain}/industries/`, priority: "0.85" },
];

for (const service of services) {
  for (const province of locations) {
    makeProvincePage(service, province);
    sitemapUrls.push({ loc: `${domain}/services/${service.slug}/${province.slug}/`, priority: "0.8" });
    for (const metro of province.metros) {
      makeMetroPage(service, province, metro);
      sitemapUrls.push({ loc: `${domain}/services/${service.slug}/${province.slug}/${metro.slug}/`, priority: "0.75" });
      for (const suburb of metro.suburbs) {
        makeSuburbPage(service, province, metro, suburb);
        sitemapUrls.push({ loc: `${domain}/services/${service.slug}/${province.slug}/${metro.slug}/${suburb.slug}/`, priority: "0.7" });
      }
    }
  }
}

for (const industry of industries) {
  sitemapUrls.push({ loc: `${domain}/industries/${industry.slug}/`, priority: "0.75" });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map((url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url.priority}</priority>
  </url>`)
  .join("\n")}
</urlset>
`;

writeFile(path.join(root, "sitemap.xml"), sitemap);
console.log(`Generated ${sitemapUrls.length} sitemap URLs across ${services.length} services.`);
