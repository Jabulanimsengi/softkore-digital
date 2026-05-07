import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const domain = "https://www.softkoredigital.co.za";
const industries = JSON.parse(fs.readFileSync(path.join(root, "industries.json"), "utf8"));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function singularName(industry) {
  const overrides = {
    "beauty-salon-websites": "salon or beauty business",
    "medical-practice-websites": "medical practice",
    "dental-practice-websites": "dental practice",
    "law-firm-websites": "law firm",
    "accounting-firm-websites": "accounting or tax firm",
    "real-estate-websites": "real estate agency",
    "property-management-websites": "property management company",
    "ecommerce-development": "e-commerce business",
    "retail-store-websites": "retail store",
    "restaurant-websites": "restaurant or food business",
    "hotel-lodge-websites": "hotel, lodge or guest house",
    "tourism-business-websites": "tourism business",
    "construction-company-websites": "construction company",
    "plumber-websites": "plumbing business",
    "electrician-websites": "electrical business",
    "solar-installer-websites": "solar installation business",
    "security-company-websites": "security company",
    "logistics-company-websites": "logistics or transport company",
    "manufacturing-websites": "manufacturing company",
    "mining-supplier-websites": "mining supplier",
    "agriculture-business-websites": "agriculture business",
    "education-training-websites": "education or training provider",
    "fitness-studio-websites": "fitness studio or gym",
    "automotive-business-websites": "automotive business",
    "financial-advisor-websites": "financial advisory firm",
    "insurance-broker-websites": "insurance brokerage",
    "recruitment-agency-websites": "recruitment agency",
    "nonprofit-websites": "nonprofit or NGO",
    "church-ministry-websites": "church or ministry",
    "event-venue-websites": "event venue or event company",
    "photography-websites": "photographer or creative studio",
    "architect-websites": "architecture or design firm",
    "engineering-firm-websites": "engineering firm",
    "consulting-firm-websites": "consulting firm",
    "it-company-websites": "IT company or MSP",
    "cleaning-company-websites": "cleaning company",
    "hvac-company-websites": "HVAC company",
    "childcare-school-websites": "childcare centre or preschool",
    "pharmacy-websites": "pharmacy",
    "veterinary-practice-websites": "veterinary practice",
  };
  return overrides[industry.slug] || industry.name.toLowerCase();
}

function articleFor(value) {
  if (/^hvac/i.test(value)) return "An";
  return /^[aeiou]/i.test(value) ? "An" : "A";
}

function featureDescription(feature, industry) {
  const lower = feature.toLowerCase();
  const business = singularName(industry);
  if (lower.includes("menu")) {
    return `Show services, prices, options, and next steps clearly so customers do not have to ask basic questions before booking.`;
  }
  if (lower.includes("package")) {
    return `Make the offer easier to compare by showing what is included, who it is for, and how to get started.`;
  }
  if (lower.includes("service page") || lower.includes("service pages")) {
    return `Explain each service clearly so visitors can understand the value before they contact the business.`;
  }
  if (lower.includes("resource")) {
    return `Answer common questions upfront and give customers a reason to trust the business before the first conversation.`;
  }
  if (lower.includes("onboarding")) {
    return `Give new customers a smoother start with clear steps, forms, requirements, and follow-up communication.`;
  }
  if (lower.includes("whatsapp") || lower.includes("call button") || lower.includes("contact action")) {
    return `Give mobile visitors a quick way to ask a question while they are still interested.`;
  }
  if (lower.includes("booking") || lower.includes("appointment") || lower.includes("reservation")) {
    return `Make it easy for customers to choose a time, ask a question, or request a booking without waiting for a phone call.`;
  }
  if (lower.includes("profile") || lower.includes("team") || lower.includes("doctor") || lower.includes("advisor") || lower.includes("agent")) {
    return `Introduce the people behind the business so visitors can judge experience, fit, and trust before they make contact.`;
  }
  if (lower.includes("before-and-after")) {
    return `Show visible results in a way that builds trust before a customer books or asks for a quote.`;
  }
  if (lower.includes("gallery") || lower.includes("portfolio") || lower.includes("project")) {
    return `Show real work clearly. For a ${business}, visual proof often does more than a long paragraph ever could.`;
  }
  if (lower.includes("local") || lower.includes("area") || lower.includes("location")) {
    return `Help nearby customers find the right branch, service area, or local offer without landing on a generic national page.`;
  }
  if (lower.includes("quote") || lower.includes("enquiry") || lower.includes("consultation") || lower.includes("lead")) {
    return `Give serious prospects a clear path to explain what they need and start a useful conversation.`;
  }
  if (lower.includes("dashboard") || lower.includes("portal") || lower.includes("admin") || lower.includes("database")) {
    return `Give the team a better way to manage customers, requests, records, and daily work from one place.`;
  }
  if (lower.includes("payment") || lower.includes("checkout")) {
    return `Reduce friction at the point where a customer is ready to pay, order, subscribe, or confirm a service.`;
  }
  if (lower.includes("review") || lower.includes("testimonial") || lower.includes("trust")) {
    return `Bring trust closer to the buying decision with proof that feels relevant and easy to verify.`;
  }
  if (lower.includes("seo") || lower.includes("tracking") || lower.includes("analytics")) {
    return `Track what people are searching for, which pages bring enquiries, and where the site should improve next.`;
  }
  return `Make this part of the customer journey clearer, faster, and easier to act on for ${articleFor(business).toLowerCase()} ${business}.`;
}

function opportunityCards(industry) {
  const business = singularName(industry);
  const ops = industry.features.slice(0, 3).map((feature) => feature.toLowerCase());
  const opsText = ops.length > 1 ? `${ops.slice(0, -1).join(", ")} and ${ops.at(-1)}` : ops[0];
  return [
    {
      title: "First impression",
      text: `${articleFor(business)} ${business} website should answer the questions customers ask before they call, book, visit, or request a quote.`,
    },
    {
      title: "Daily operations",
      text: `If the business relies on ${opsText}, a custom system can remove a lot of manual admin.`,
    },
    {
      title: "Search demand",
      text: `${industry.name} can target service, problem, and location searches with pages that are useful first and optimized second.`,
    },
  ];
}

function marketPlanCards(industry) {
  const business = singularName(industry);
  return [
    {
      title: "Customer questions",
      text: `The page should answer what the ${business} does, who it helps, what makes it trustworthy, and what a customer should do next.`,
    },
    {
      title: "Commercial pages",
      text: `Core service, pricing, proof, FAQ, and contact sections should be close enough that visitors do not need to hunt for decision-making information.`,
    },
    {
      title: "Local visibility",
      text: `If the business serves specific areas, location pages should include useful local context, nearby areas, and links back to the relevant services.`,
    },
    {
      title: "Operational fit",
      text: `If admin work is slowing the team down, the website can grow into bookings, dashboards, client portals, quote workflows, payments, or reporting.`,
    },
  ];
}

function industryFaqs(industry) {
  const business = singularName(industry);
  const article = articleFor(business).toLowerCase();
  return [
    {
      question: `Do you build websites and digital systems for ${article} ${business}?`,
      answer: `Yes. SoftKore Digital helps ${industry.audience} plan, build, and improve websites, web applications, and SEO systems that support real customer enquiries.`,
    },
    {
      question: `What does a good ${business} website need?`,
      answer: `It should explain the offer clearly, show trust signals, make contact easy, load quickly on mobile, and include pages that answer the questions customers ask before choosing a provider.`,
    },
    {
      question: `Can SEO help ${article} ${business} in South Africa?`,
      answer: `Yes. SEO can help this industry capture service, location, and problem-based searches when the website has strong technical foundations, useful pages, and ongoing monitoring.`,
    },
    {
      question: `Can you build custom web applications for this industry?`,
      answer: `Yes. If the business needs bookings, dashboards, portals, payments, admin workflows, or customer accounts, we can plan and build a custom web application around those operations.`,
    },
    {
      question: `What should the business prepare before starting?`,
      answer: `Prepare the main services, ideal customers, current website or systems, common questions, locations served, examples you like, and any operational workflows that need to be improved.`,
    },
    {
      question: `Can the website support multiple South African locations?`,
      answer: `Yes. The site can include province, city, suburb, and service-area pages so customers can find the most relevant local version of the business.`,
    },
  ];
}

function jsonLd(industry, faqs) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Websites, Web Apps and SEO for ${industry.name}`,
      url: `${domain}/industries/${industry.slug}/`,
      about: industry.name,
      provider: {
        "@type": "Organization",
        name: "SoftKore Digital",
        url: `${domain}/`,
      },
    },
    {
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
    },
  ];
}

function shell({ depth, title, description, canonical, body, schema }) {
  const prefix = "../".repeat(depth);
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
        <a href="${prefix}index.html#work">Work</a>
        <a href="${prefix}index.html#process">Process</a>
        <a href="${prefix}services/seo-services/">SEO</a>
        <a href="${prefix}index.html#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="${prefix}index.html#contact">Start a Project</a>
    </header>
${body}
    <script src="${prefix}script.js"></script>
  </body>
</html>
`;
}

function makeHub() {
  const grouped = Map.groupBy ? Map.groupBy(industries, (industry) => industry.category) : industries.reduce((map, industry) => {
    if (!map.has(industry.category)) map.set(industry.category, []);
    map.get(industry.category).push(industry);
    return map;
  }, new Map());
  const groupHtml = Array.from(grouped.entries())
    .map(([category, items]) => `<section class="industry-group"><h2>${escapeHtml(category)}</h2><div class="area-list">${items.map((industry) => `<a href="${industry.slug}/">${escapeHtml(industry.name)}</a>`).join("\n")}</div></section>`)
    .join("\n");
  const body = `    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a><span>/</span><span>Industries</span></nav>
            <h1>Websites, Web Applications and SEO for South African Industries</h1>
            <p>Different industries win customers in different ways. These pages show how a website, web app, or SEO plan can match the way people choose providers in each market.</p>
            <div class="hero-actions"><a class="button button-primary" href="../index.html#contact">Start a Project</a><a class="button button-secondary" href="../services/web-development/">View Services</a></div>
          </div>
          <aside class="page-summary"><strong>Industry coverage</strong><ul><li>${industries.length} industry pages</li><li>Website ideas by market</li><li>Application opportunities</li><li>SEO starting points</li></ul></aside>
        </div>
      </section>
      <section class="section areas-section">
        <h2>Industries We Support</h2>
        <p class="section-intro">Choose an industry to see practical website, application, and SEO ideas shaped around that market.</p>
        ${groupHtml}
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>Why industry pages matter</h2>
            <p>A law firm, medical practice, restaurant, logistics company, and salon do not win customers in the same way. Each market has different trust signals, service questions, booking paths, proof requirements, and search behaviour.</p>
            <p>These industry pages help business owners see what their website or web application should actually do. Some businesses need clear service pages and stronger local SEO. Others need bookings, customer portals, quote workflows, dashboards, payments, or better enquiry tracking online.</p>
          </div>
          <div class="content-panel">
            <article class="content-card"><h3>Sharper positioning</h3><p>Industry-specific pages make it easier to explain what customers need to know before they call, book, visit, or request a quote.</p></article>
            <article class="content-card"><h3>Better feature planning</h3><p>The right website features depend on the business model, customer journey, admin workload, and trust signals for that market.</p></article>
            <article class="content-card"><h3>Stronger search structure</h3><p>Industry pages can connect service, location, and problem-based searches without forcing every visitor through one generic homepage.</p></article>
          </div>
        </div>
      </section>
    </main>
`;
  writeFile(path.join(root, "industries", "index.html"), shell({
    depth: 1,
    title: "Industries We Support South Africa | SoftKore Digital",
    description: "Explore websites, web applications, and SEO systems for South African industries including healthcare, legal, property, retail, trades, hospitality, logistics, and more.",
    canonical: `${domain}/industries/`,
    body,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Industries We Support",
      url: `${domain}/industries/`,
    },
  }));
}

function makeIndustryPage(industry) {
  const faqs = industryFaqs(industry);
  const business = singularName(industry);
  const opportunities = opportunityCards(industry);
  const marketPlan = marketPlanCards(industry);
  const featureCards = industry.features
    .map((feature) => `<article class="content-card"><h3>${escapeHtml(feature)}</h3><p>${escapeHtml(featureDescription(feature, industry))}</p></article>`)
    .join("\n");
  const faqHtml = faqs.map((faq) => `<details class="faq-item"><summary>${escapeHtml(faq.question)}</summary><p>${escapeHtml(faq.answer)}</p></details>`).join("\n");
  const body = `    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../../index.html">Home</a><span>/</span><a href="../">Industries</a><span>/</span><span>${escapeHtml(industry.name)}</span></nav>
            <h1>Websites, Web Apps and SEO for ${escapeHtml(industry.name)}</h1>
            <p>SoftKore Digital helps ${escapeHtml(industry.audience)} build websites, tools, and search visibility that make it easier for customers to choose them.</p>
            <div class="hero-actions"><a class="button button-primary" href="../../index.html#contact">Start a Project</a><a class="button button-secondary" href="../../services/web-development/">View Services</a></div>
          </div>
          <aside class="page-summary"><strong>${escapeHtml(industry.category)}</strong><ul>${industry.features.slice(0, 5).map((feature) => `<li>${escapeHtml(feature)}</li>`).join("\n")}</ul></aside>
        </div>
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>Built for how a ${escapeHtml(business)} wins customers.</h2>
            <p>In South Africa, ${escapeHtml(industry.challenge)}. A generic website usually does not answer those questions well enough.</p>
            <p>For this industry, we recommend ${escapeHtml(industry.solution)}.</p>
          </div>
          <div class="content-panel">
            ${opportunities.map((card) => `<article class="content-card"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.text)}</p></article>`).join("\n")}
          </div>
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="section-heading"><h2>Useful Features for ${escapeHtml(industry.name)}</h2></div>
        <div class="local-insight-grid">${featureCards}</div>
      </section>
      <section class="section local-proof-section">
        <div class="section-heading"><h2>Search and Conversion Plan</h2></div>
        <div class="local-insight-grid">
          ${marketPlan.map((card) => `<article class="content-card"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.text)}</p></article>`).join("\n")}
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>Where to Start</h2>
            <p>${escapeHtml(articleFor(business))} ${escapeHtml(business)} should start with the pages and workflows that remove doubt for customers. After that, the site can grow into stronger SEO, location pages, and operational tools.</p>
          </div>
          <ul class="proof-list">
            <li><strong>First impression</strong><span>Explain the offer, show why the business can be trusted, and make the next step easy.</span></li>
            <li><strong>Customer action</strong><span>Add the enquiry, booking, quote, payment, or consultation flow that best fits this industry.</span></li>
            <li><strong>Search visibility</strong><span>Build useful service and location pages around the searches customers already make.</span></li>
            <li><strong>Ongoing care</strong><span>Keep the site current, monitor performance, and improve pages when customer behaviour changes.</span></li>
          </ul>
        </div>
      </section>
      <section class="section areas-section">
        <h2>Related Services</h2>
        <div class="area-list">
          <a href="../../services/web-development/">Website Development</a>
          <a href="../../services/custom-web-applications/">Custom Web Applications</a>
          <a href="../../services/seo-services/">SEO Services</a>
          <a href="../../services/website-maintenance/">Website Maintenance</a>
        </div>
      </section>
      <section class="section faq-section">
        <div class="section-heading"><h2>Frequently Asked Questions</h2></div>
        <div class="faq-list">${faqHtml}</div>
      </section>
    </main>
`;
  writeFile(path.join(root, "industries", industry.slug, "index.html"), shell({
    depth: 2,
    title: `Websites, Web Apps and SEO for ${industry.name} | SoftKore Digital`,
    description: `Websites, web applications, and SEO for ${industry.name.toLowerCase()} in South Africa. Build clearer pages, stronger systems, and better digital visibility.`,
    canonical: `${domain}/industries/${industry.slug}/`,
    body,
    schema: jsonLd(industry, faqs),
  }));
}

makeHub();
for (const industry of industries) {
  makeIndustryPage(industry);
}

console.log(`Generated ${industries.length} industry pages plus the industries hub.`);
