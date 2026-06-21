import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const domain = "https://www.softkoredigital.co.za";
const industries = JSON.parse(fs.readFileSync(path.join(root, "industries.json"), "utf8"));

const pageTypes = [
  {
    slug: "website-design",
    label: "Website Design",
    titleSuffix: "Website Design",
    serviceUrl: "/services/web-development/",
    serviceLabel: "Web Development",
    summary: ["Service pages", "Mobile-first layouts", "Trust signals", "Lead forms", "Local SEO foundations"],
    schemaService: "Website Design",
    angle: (industry) => `A good ${singularName(industry)} website should make the offer easy to understand, show why the business can be trusted, and give visitors a clear path to enquire.`,
    deliverables: [
      ["Page structure", "Plan homepage, service pages, supporting sections, calls to action, and internal links around the customer journey."],
      ["Conversion content", "Write or refine copy so visitors understand the service, trust the provider, and know what to do next."],
      ["Mobile experience", "Build pages that work clearly on phones, where many local and service searches begin."],
      ["Technical foundation", "Include metadata, canonical URLs, schema, performance-minded assets, and clean crawl paths from the start."],
    ],
    faqs: (industry) => [
      [`What should a ${singularName(industry)} website include?`, `It should include clear services, trust signals, contact options, useful FAQs, strong mobile layouts, and pages that answer the questions customers ask before making contact.`],
      [`Can you redesign an existing ${singularName(industry)} website?`, `Yes. We can review the existing site, keep what is useful, improve the content and page structure, and rebuild it with stronger SEO and conversion foundations.`],
      ["Can the website support local SEO later?", "Yes. The structure can expand into service-area pages, city pages, suburb pages, industry pages, and supporting guides when the business is ready."],
      ["What should we prepare before starting?", "Prepare your services, ideal customers, current website, locations served, contact details, examples you like, proof of work, and common customer questions."],
    ],
  },
  {
    slug: "seo-services",
    label: "SEO Services",
    titleSuffix: "SEO Services",
    serviceUrl: "/services/seo-services/",
    serviceLabel: "SEO Services",
    summary: ["Technical SEO", "Search Console checks", "Page optimization", "Internal links", "Content planning"],
    schemaService: "Search Engine Optimization",
    angle: (industry) => `${industry.name} can earn better search visibility when pages target real services, customer questions, locations, and buying intent instead of generic keyword stuffing.`,
    deliverables: [
      ["Technical review", "Check crawlability, indexing, metadata, canonical URLs, sitemap visibility, redirects, page speed, and internal links."],
      ["Page improvement", "Strengthen the most important service and industry pages so they answer search intent more completely."],
      ["Local relevance", "Plan location and service-area content carefully so pages are useful for customers, not only search engines."],
      ["Monitoring", "Use Search Console and live checks to see what Google is discovering, indexing, and showing for real queries."],
    ],
    faqs: (industry) => [
      [`Can SEO help ${articleFor(singularName(industry)).toLowerCase()} ${singularName(industry)}?`, `Yes. SEO can help capture service, location, and problem-based searches when the website has useful pages, clear structure, and sound technical foundations.`],
      ["How long does SEO take?", "Technical fixes can happen quickly, but ranking improvement is usually measured over months. Competition, page quality, links, authority, and consistency all matter."],
      ["Do you create location pages?", "Yes, but they need useful local context, service fit, related areas, FAQs, and internal links. Thin pages that only swap city names are risky."],
      ["What SEO work comes first?", "Start with technical health, Search Console review, key page improvements, internal linking, sitemap checks, and clear priorities for the next pages to improve."],
    ],
  },
  {
    slug: "custom-web-applications",
    label: "Custom Web Applications",
    titleSuffix: "Custom Web Applications",
    serviceUrl: "/services/custom-web-applications/",
    serviceLabel: "Custom Web Applications",
    summary: ["Booking flows", "Client portals", "Admin dashboards", "Data workflows", "Integrations"],
    schemaService: "Custom Web Applications",
    angle: (industry) => `A custom web application can help ${industry.name.toLowerCase()} manage repeat work, customer requests, bookings, documents, payments, reporting, or admin workflows from one reliable system.`,
    deliverables: [
      ["Workflow mapping", "Define users, roles, data, actions, approvals, notifications, and business rules before building."],
      ["Customer flows", "Create booking, enquiry, account, upload, payment, or portal experiences that make customer action easier."],
      ["Admin tools", "Build dashboards and management screens so staff can operate the system without fragile spreadsheets."],
      ["Integrations", "Connect payment providers, email, analytics, third-party APIs, or internal tools where the workflow needs them."],
    ],
    faqs: (industry) => [
      [`When does ${articleFor(singularName(industry)).toLowerCase()} ${singularName(industry)} need a custom web application?`, `A custom application makes sense when the business needs logins, dashboards, bookings, payments, portals, structured records, workflow automation, or reporting that a normal website cannot manage well.`],
      ["Can the application start small?", "Yes. A focused first version is usually best. It can launch around the most important workflow and expand once real users prove what is needed next."],
      ["Can the app include admin dashboards?", "Yes. Admin dashboards can manage customers, bookings, enquiries, documents, content, payments, reports, users, and workflow stages."],
      ["Do you plan the workflow before development?", "Yes. Scoping the workflow is essential. It avoids building screens that look good but fail to support the real operational process."],
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function singularName(industry) {
  return industry.name
    .replace(/^(.+?) and .+$/i, "$1")
    .replace(/Businesses$/i, "business")
    .replace(/Companies$/i, "company")
    .replace(/Practices$/i, "practice")
    .replace(/Providers$/i, "provider")
    .replace(/Agencies$/i, "agency")
    .replace(/Firms$/i, "firm")
    .replace(/Stores$/i, "store")
    .replace(/Shops$/i, "shop")
    .replace(/Centres$/i, "centre")
    .replace(/Services$/i, "service")
    .replace(/s$/i, "")
    .toLowerCase();
}

function articleFor(value) {
  return /^[aeiou]/i.test(value) ? "An" : "A";
}

function featureDescription(feature, industry, pageType) {
  const lower = feature.toLowerCase();
  const business = singularName(industry);
  if (lower.includes("booking") || lower.includes("appointment") || lower.includes("reservation")) {
    return `${pageType.label} should make the booking path visible, simple, and measurable so interested customers do not disappear before taking action.`;
  }
  if (lower.includes("profile") || lower.includes("team") || lower.includes("doctor") || lower.includes("advisor") || lower.includes("agent")) {
    return `People pages help ${industry.name.toLowerCase()} show credibility, specialisms, qualifications, and fit before a prospect makes contact.`;
  }
  if (lower.includes("local") || lower.includes("area") || lower.includes("location")) {
    return `Location content should connect real service areas, nearby places, and customer questions instead of only swapping city names.`;
  }
  if (lower.includes("quote") || lower.includes("enquiry") || lower.includes("consultation") || lower.includes("lead")) {
    return `The page needs a low-friction enquiry path with enough context for the business to respond usefully.`;
  }
  if (lower.includes("dashboard") || lower.includes("portal") || lower.includes("admin") || lower.includes("database")) {
    return `Operational tools should reduce repeated admin and give staff a clearer view of customers, requests, records, or next actions.`;
  }
  if (lower.includes("payment") || lower.includes("checkout")) {
    return `Payment or checkout flows should feel trustworthy, fast, and connected to the records the team needs after payment.`;
  }
  if (lower.includes("seo") || lower.includes("analytics") || lower.includes("tracking")) {
    return `SEO and tracking should show which searches, pages, and calls to action are creating useful demand for this market.`;
  }
  if (lower.includes("gallery") || lower.includes("portfolio") || lower.includes("project")) {
    return `Proof of work helps ${articleFor(business).toLowerCase()} ${business} show quality before a visitor has to ask for examples.`;
  }
  return `${feature} should be tied to a real customer decision, staff workflow, or search opportunity for ${industry.name.toLowerCase()}.`;
}

function intentCards(industry, pageType) {
  const business = singularName(industry);
  const measurement = pageType.slug === "seo-services"
    ? "indexed pages, search queries, local visibility, internal links, and enquiries from organic traffic"
    : pageType.slug === "custom-web-applications"
      ? "completed workflows, admin time saved, customer actions, support requests, and repeat usage"
      : "contact clicks, form enquiries, service page engagement, calls, WhatsApp taps, and quote requests";
  return [
    {
      title: "Search intent",
      text: `${industry.name} prospects are usually comparing trust, price signals, service fit, location, proof, and how easy the next step feels.`,
    },
    {
      title: "Useful page depth",
      text: `${pageType.label} content should answer the questions a ${business} customer asks before contacting the business, not just repeat an industry keyword.`,
    },
    {
      title: "Conversion path",
      text: `Every page should point to the next useful action: a quote, booking, consultation, contact form, phone call, or workflow demo.`,
    },
    {
      title: "Measurement",
      text: `Performance should be judged through ${measurement}, then improved from real behaviour rather than assumptions.`,
    },
  ];
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function schemaFor(industry, pageType, url, faqs) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${pageType.titleSuffix} for ${industry.name}`,
      serviceType: pageType.schemaService,
      url,
      provider: { "@type": "Organization", name: "SoftKore Digital", url: `${domain}/` },
      areaServed: "South Africa",
      audience: { "@type": "Audience", audienceType: industry.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];
}

function pageHtml(industry, pageType) {
  const urlPath = `industries/${industry.slug}/${pageType.slug}/`;
  const canonical = `${domain}/${urlPath}`;
  const title = `${pageType.titleSuffix} for ${industry.name} | SoftKore Digital`;
  const description = `${pageType.label} for ${industry.name.toLowerCase()} in South Africa. Plan stronger pages, clearer customer journeys, better SEO foundations, and practical digital systems.`;
  const faqs = pageType.faqs(industry);
  const schema = schemaFor(industry, pageType, canonical, faqs);
  const summaryItems = pageType.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
  const deliverables = pageType.deliverables.map(([title, text]) => `<article class="content-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("\n");
  const intentHtml = intentCards(industry, pageType).map((card) => `<article class="content-card"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.text)}</p></article>`).join("\n");
  const faqHtml = faqs.map(([question, answer]) => `<details class="faq-item"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("\n");
  const featureItems = industry.features.slice(0, 6).map((feature) => `<li><strong>${escapeHtml(feature)}</strong><span>${escapeHtml(featureDescription(feature, industry, pageType))}</span></li>`).join("\n");

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
    <link rel="stylesheet" href="../../../styles.css" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
    <header class="site-header" data-header>
      <a class="brand" href="../../../" aria-label="SoftKore Digital home"><img class="brand-logo" src="../../../logo.png" alt="SoftKore Digital" /></a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
      <nav class="site-nav" data-nav>
        <a href="../../../">Home</a>
        <a href="../../../services/web-development/">Services</a>
        <a href="../../../industries/">Industries</a>
        <a href="../../../work/">Work</a>
        <a href="../../../services/">Process</a>
        <a href="../../../services/seo-services/">SEO</a>
        <a href="../../../contact/">Contact</a>
      </nav>
      <a class="nav-cta" href="../../../contact/">Start a Project</a>
    </header>
    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../../../">Home</a><span>/</span><a href="../../">Industries</a><span>/</span><a href="../">${escapeHtml(industry.name)}</a><span>/</span><span>${escapeHtml(pageType.label)}</span></nav>
            <h1>${escapeHtml(pageType.titleSuffix)} for ${escapeHtml(industry.name)}</h1>
            <p>${escapeHtml(pageType.angle(industry))}</p>
            <div class="hero-actions"><a class="button button-primary" href="../../../contact/">Start a Project</a><a class="button button-secondary" href="../../../${pageType.serviceUrl.replace(/^\//, "")}">View ${escapeHtml(pageType.serviceLabel)}</a></div>
          </div>
          <aside class="page-summary"><strong>${escapeHtml(pageType.label)} focus</strong><ul>${summaryItems}</ul></aside>
        </div>
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>Built around how ${escapeHtml(industry.name.toLowerCase())} win customers</h2>
            <p>${escapeHtml(industry.challenge)}. The page, platform, or SEO plan needs to respect that buying journey instead of treating every business like the same generic service provider.</p>
            <p>${escapeHtml(industry.solution)}. For ${escapeHtml(pageType.label.toLowerCase())}, the goal is to turn that into a focused digital experience that supports real enquiries and easier decisions.</p>
          </div>
          <div class="content-panel">${deliverables}</div>
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="section-heading"><h2>Search Intent and Page Plan</h2></div>
        <div class="local-insight-grid">${intentHtml}</div>
      </section>
      <section class="section local-proof-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>Useful opportunities for this market</h2>
            <p>The best page structure depends on the business model, customer questions, proof requirements, and operational workload in this industry.</p>
          </div>
          <ul class="proof-list">${featureItems}</ul>
        </div>
      </section>
      <section class="section areas-section">
        <h2>Related ${escapeHtml(industry.name)} Services</h2>
        <div class="area-list">
          <a href="../">Industry Overview</a>
          <a href="../website-design/">Website Design</a>
          <a href="../seo-services/">SEO Services</a>
          <a href="../custom-web-applications/">Custom Web Applications</a>
          <a href="../../../services/website-maintenance/">Website Maintenance</a>
        </div>
      </section>
      <section class="section faq-section">
        <div class="section-heading"><h2>Frequently Asked Questions</h2></div>
        <div class="faq-list">${faqHtml}</div>
      </section>
    </main>
    <script src="../../../script.js"></script>
  </body>
</html>
`;
}

function updateSitemap(urls) {
  const sitemapPath = path.join(root, "sitemap.xml");
  const existing = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
  const locs = new Set([...existing.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
  for (const url of urls) locs.add(url);
  const sorted = [...locs].sort((a, b) => {
    if (a === `${domain}/`) return -1;
    if (b === `${domain}/`) return 1;
    return a.localeCompare(b);
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sorted.map((loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${loc.includes("/industries/") ? "0.72" : "0.75"}</priority>
  </url>`).join("\n")}
</urlset>
`;
  fs.writeFileSync(sitemapPath, sitemap, "utf8");
}

const urls = [];
let count = 0;
for (const industry of industries) {
  for (const pageType of pageTypes) {
    const urlPath = `industries/${industry.slug}/${pageType.slug}/`;
    writeFile(path.join(root, urlPath, "index.html"), pageHtml(industry, pageType));
    urls.push(`${domain}/${urlPath}`);
    count += 1;
  }
}

updateSitemap(urls);
console.log(`Generated ${count} industry service pages.`);
