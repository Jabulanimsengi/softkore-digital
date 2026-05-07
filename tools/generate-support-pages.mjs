import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const domain = "https://www.softkoredigital.co.za";

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

function shell({ depth, title, description, canonical, body, schema }) {
  const prefix = "../".repeat(depth);
  const schemaHtml = Array.isArray(schema)
    ? schema.map((item) => `    <script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n")
    : `    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
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
${schemaHtml}
  </head>
  <body>
    <header class="site-header" data-header>
      <a class="brand" href="${prefix}" aria-label="SoftKore Digital home"><img class="brand-logo" src="${prefix}logo.png" alt="SoftKore Digital" /></a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
      <nav class="site-nav" data-nav>
        <a href="${prefix}">Home</a>
        <a href="${prefix}services/web-development/">Services</a>
        <a href="${prefix}industries/">Industries</a>
        <a href="${prefix}guides/">Guides</a>
        <a href="${prefix}sitemap/">Pages</a>
        <a href="${prefix}contact/">Contact</a>
      </nav>
      <a class="nav-cta" href="${prefix}contact/">Start a Project</a>
    </header>
${body}
    <script src="${prefix}script.js"></script>
  </body>
</html>
`;
}

function breadcrumb(items) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${items.map((item, index) => {
    const label = escapeHtml(item.label);
    const node = item.href ? `<a href="${item.href}">${label}</a>` : `<span>${label}</span>`;
    return `${node}${index < items.length - 1 ? "<span>/</span>" : ""}`;
  }).join("")}</nav>`;
}

function makeContactPage() {
  const body = `    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            ${breadcrumb([{ href: "../", label: "Home" }, { label: "Start a Project" }])}
            <h1>Start a Project With SoftKore Digital</h1>
            <p>Tell us what you want to improve. We will help you choose the right starting point, whether that is a website, a business system, a page improvement plan, or ongoing support.</p>
            <div class="hero-actions"><a class="button button-primary" href="mailto:info@softkoredigital.co.za">Email Us</a><a class="button button-secondary" href="../services/web-development/">View Services</a></div>
          </div>
          <aside class="page-summary"><strong>Useful details to include</strong><ul><li>Your business name</li><li>Your website if you have one</li><li>The service you need</li><li>Your main goal</li><li>Any deadline or budget range</li></ul></aside>
        </div>
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>What happens next</h2>
            <p>We read your message, look at the current situation, and reply with the most sensible next step. If the project needs a deeper discussion, we can set up a short call and map the priorities before anything is built.</p>
            <p>You do not need a perfect brief. A plain explanation of the problem is enough to start today.</p>
            <p>Helpful starting points include what the business does, who it serves, what is not working today, and what a good outcome would look like. If you already have a website, include the address so we can look at the current structure before replying.</p>
            <p>If the project involves a business system, describe the daily work that feels slow or messy. The process, roles, documents, payments, bookings, or follow-ups often matter more than the first screen idea.</p>
            <p>For a website project, it also helps to know which services matter most, which areas you serve, what customers usually ask, and which examples feel close to the style you want. For improvement work, tell us what currently feels weak: too few enquiries, confusing pages, slow updates, poor mobile experience, or a site that no longer reflects the business.</p>
            <p>We can start small if that is the right move. A focused first phase often gives the business something useful quickly, then leaves room for stronger pages, better workflows, and deeper support once the direction is proven.</p>
          </div>
          <div class="content-panel">
            <article class="content-card"><h3>New website</h3><p>For businesses that need a clearer, faster, more professional online presence.</p></article>
            <article class="content-card"><h3>Business system</h3><p>For teams that need bookings, dashboards, portals, payments, or internal tools.</p></article>
            <article class="content-card"><h3>Ongoing care</h3><p>For websites that need updates, fixes, performance checks, and regular improvements.</p></article>
          </div>
        </div>
      </section>
      <section class="section final-cta">
        <div class="final-panel reveal">
          <div><h2>Send the first message</h2><p>Use email for now and include the details you already have. We will help shape the rest.</p><a class="contact-line" href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a></div>
          <div class="final-actions"><a class="button button-primary" href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a></div>
        </div>
      </section>
      <section class="section areas-section">
        <h2>Common project starting points</h2>
        <div class="area-list">
          <a href="../services/web-development/">A better business website</a>
          <a href="../services/custom-web-applications/">A custom business system</a>
          <a href="../services/website-maintenance/">Help improving an existing website</a>
          <a href="../industries/">Industry-specific pages</a>
          <a href="../guides/">Planning guides</a>
        </div>
      </section>
    </main>
`;
  writeFile(path.join(root, "contact", "index.html"), shell({
    depth: 1,
    title: "Start a Project | SoftKore Digital",
    description: "Start a website, web application, page improvement, or support project with SoftKore Digital.",
    canonical: `${domain}/contact/`,
    body,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Start a Project",
      url: `${domain}/contact/`,
      provider: { "@type": "Organization", name: "SoftKore Digital", url: `${domain}/` },
    },
  }));
}

const guides = [
  {
    slug: "website-prices-south-africa",
    title: "Website Prices in South Africa",
    description: "A plain-English guide to what affects website prices in South Africa and how to choose the right starting point.",
    h1: "Website Prices in South Africa",
    intro: "Website prices vary because businesses do not all need the same thing. A small service website, a booking platform, and a large content system are very different projects.",
    sections: [
      ["What affects the price", "The biggest factors are the number of pages, content preparation, design depth, custom features, forms, integrations, and whether the site needs ongoing care after launch."],
      ["How to choose a starting point", "Start with the pages that help customers understand the business and take action. Extra locations, industries, guides, and systems can be added after the foundation is working."],
      ["What to prepare", "Prepare your services, locations, current website, examples you like, contact details, photos or proof, and the questions customers ask before they choose you."],
      ["Where costs can grow", "Costs usually grow when the project needs custom writing, many page variations, booking flows, payment steps, customer accounts, dashboards, or content that must be shaped for several audiences."],
      ["A sensible first phase", "For many businesses, the best first phase is a strong homepage, core service pages, clear contact paths, and a plan for what should be added next."],
    ],
  },
  {
    slug: "website-vs-web-application",
    title: "Website or Web Application",
    description: "A practical guide to choosing between a business website and a custom web application.",
    h1: "Do You Need a Website or a Web Application?",
    intro: "A website explains the business and helps customers make contact. A web application helps people log in, manage tasks, submit information, book, pay, or work with data.",
    sections: [
      ["Choose a website when", "You need to explain services, build trust, show work, answer common questions, and help people call, email, book, or request a quote."],
      ["Choose an application when", "You need accounts, dashboards, admin tools, booking flows, payments, document uploads, workflow steps, reports, or repeated customer interactions."],
      ["A sensible path", "Many businesses should start with a strong website, then add a focused application once the workflow is clear enough to build properly."],
      ["Common mistake", "The common mistake is building a large system before the daily process is clear. A smaller first version often teaches the business what the larger system should become."],
      ["What to map first", "List the people who will use the system, the actions each person needs to take, the information they need, and the decisions that happen along the way."],
    ],
  },
  {
    slug: "improve-website-enquiries",
    title: "How to Get More Website Enquiries",
    description: "Practical ways to make a business website clearer, more useful, and easier for customers to act on.",
    h1: "How to Get More Website Enquiries",
    intro: "More enquiries usually come from making the decision easier. Visitors need to understand the service, trust the business, and see the next step without effort.",
    sections: [
      ["Make the offer clear", "Each important service should have its own section or page. Explain who it is for, what is included, and what the customer should do next."],
      ["Put trust close to action", "Use examples, reviews, team details, credentials, guarantees, process notes, or practical proof near contact buttons and forms."],
      ["Reduce friction", "Make phone, email, WhatsApp, and quote options easy to find. Keep forms short enough for a first conversation."],
      ["Answer the doubts", "Most visitors hesitate because something is unclear. Add details about timing, process, location, requirements, pricing signals, or what happens after they enquire."],
      ["Review the full path", "Look at the path from landing on a page to making contact. Every step should feel obvious, especially on a phone."],
    ],
  },
  {
    slug: "website-maintenance-checklist",
    title: "Website Maintenance Checklist",
    description: "A simple checklist for keeping a business website accurate, healthy, and useful after launch.",
    h1: "Website Maintenance Checklist",
    intro: "A website is not finished forever after launch. It needs small, regular checks so it stays accurate, fast, and useful.",
    sections: [
      ["Monthly checks", "Review contact forms, important links, page loading, contact details, service information, and any recent customer-facing changes."],
      ["Content checks", "Update outdated services, old offers, staff details, pricing notes, photos, location information, and common customer questions."],
      ["Business checks", "Look at which pages people use, which enquiries come through, and what customers still ask after reading the site."],
      ["Trust checks", "Make sure reviews, examples, credentials, team details, and contact information still reflect the current business."],
      ["Improvement checks", "Maintenance is also a chance to improve one useful thing at a time: a clearer button, a better service explanation, a stronger answer, or a smoother contact path."],
    ],
  },
  {
    slug: "planning-service-pages",
    title: "How to Plan Service Pages",
    description: "A guide to planning service pages that help customers understand, compare, and contact your business.",
    h1: "How to Plan Service Pages",
    intro: "Service pages work best when they are written for real customer decisions, not for internal company structure.",
    sections: [
      ["Answer the buying questions", "Explain the service, who it helps, what is included, what problems it solves, how the process works, and how to get started."],
      ["Connect related pages", "Link related services, relevant industries, locations served, and useful guides so visitors can move to the page that fits them best."],
      ["Give each page a purpose", "A page should exist because it helps a customer understand something specific. If it only repeats another page, it should be improved or merged."],
      ["Show the next step", "A good service page should not end in uncertainty. Add a clear quote, call, email, booking, or consultation path near the places where visitors make decisions."],
      ["Use natural proof", "Examples, short process notes, customer questions, industry context, and practical details make a service page feel more useful and more believable."],
    ],
  },
  {
    slug: "choosing-a-website-partner",
    title: "How to Choose a Website Partner",
    description: "A practical guide to choosing the right website or web application partner for a growing business.",
    h1: "How to Choose a Website Partner",
    intro: "The right partner should understand the business goal, explain tradeoffs clearly, and build something that can keep improving after launch.",
    sections: [
      ["Look for practical thinking", "A good partner asks about customers, services, operations, content, contact paths, and how the site will be maintained."],
      ["Ask what happens after launch", "The launch is only the start. Ask how changes, fixes, reports, hosting, backups, and future improvements will be handled."],
      ["Choose clarity over flash", "A polished design matters, but the site also needs clear content, fast pages, useful structure, and simple ways for customers to act."],
      ["Check communication style", "You should understand what is being built, why it matters, what tradeoffs exist, and what will happen next. Clear communication is part of good delivery."],
      ["Think beyond the first version", "The first launch should create a foundation. Choose a partner who can help the site or system grow without needing to start over every time."],
    ],
  },
];

function makeGuideHub() {
  const cards = guides.map((guide) => `<article class="content-card"><h3>${escapeHtml(guide.title)}</h3><p>${escapeHtml(guide.description)}</p><a href="${guide.slug}/">Read guide</a></article>`).join("\n");
  const body = `    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            ${breadcrumb([{ href: "../", label: "Home" }, { label: "Guides" }])}
            <h1>Helpful Guides for Better Websites and Systems</h1>
            <p>Plain-English resources for business owners planning a website, improving enquiries, or deciding when a custom system makes sense.</p>
          </div>
          <aside class="page-summary"><strong>Guide topics</strong><ul><li>Website planning</li><li>Project costs</li><li>Customer enquiries</li><li>Ongoing care</li><li>Business systems</li></ul></aside>
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="local-insight-grid">${cards}</div>
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>How to use these guides</h2>
            <p>Each guide is written to help you make a clearer business decision before you spend money on design, development, content, or ongoing support.</p>
            <p>Start with the question closest to your current problem. If you are unsure what to build, compare a website with a custom application. If the site exists but does not bring enough enquiries, start with the enquiry guide. If you are planning a new project, read the pricing and partner guides first.</p>
            <p>The goal is to help you arrive at a better first conversation. You should know what outcome matters, what information needs to be prepared, and which parts of the project should happen first. A clear first step usually saves time, avoids unnecessary features, and makes the finished work easier for customers to use.</p>
            <p>These guides are also useful after launch. They can help you decide what to improve next, which pages deserve attention, and whether the business needs a clearer website, a custom workflow, or steady monthly support.</p>
          </div>
          <div class="content-panel">
            <article class="content-card"><h3>Planning</h3><p>Use the guides to clarify pages, features, project scope, and the first version of the work.</p></article>
            <article class="content-card"><h3>Improving</h3><p>Use them to spot where an existing website could be clearer, easier to use, or more helpful.</p></article>
            <article class="content-card"><h3>Choosing</h3><p>Use them to compare options before deciding what to build next.</p></article>
          </div>
        </div>
      </section>
    </main>
`;
  writeFile(path.join(root, "guides", "index.html"), shell({
    depth: 1,
    title: "Website and Business System Guides | SoftKore Digital",
    description: "Plain-English guides for planning websites, business systems, enquiries, and ongoing website care.",
    canonical: `${domain}/guides/`,
    body,
    schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Guides", url: `${domain}/guides/` },
  }));
}

function makeGuide(guide) {
  const sections = guide.sections.map(([heading, copy]) => `<article class="content-card"><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(copy)}</p></article>`).join("\n");
  const articleBody = guide.sections.map(([heading, copy]) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(copy)}</p></section>`).join("");
  const body = `    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            ${breadcrumb([{ href: "../../", label: "Home" }, { href: "../", label: "Guides" }, { label: guide.title }])}
            <h1>${escapeHtml(guide.h1)}</h1>
            <p>${escapeHtml(guide.intro)}</p>
            <div class="hero-actions"><a class="button button-primary" href="../../contact/">Start a Project</a><a class="button button-secondary" href="../">View Guides</a></div>
          </div>
          <aside class="page-summary"><strong>In this guide</strong><ul>${guide.sections.map(([heading]) => `<li>${escapeHtml(heading)}</li>`).join("\n")}</ul></aside>
        </div>
      </section>
      <section class="section local-proof-section">
        <div class="local-insight-grid">${sections}</div>
      </section>
      <section class="section content-section">
        <div class="content-grid">
          <div class="content-copy">
            <h2>Before you make a decision</h2>
            <p>Write down the outcome you want, the customer action you care about most, and the parts of the current process that feel unclear or slow. That gives the project a practical centre.</p>
            <p>A good next step is usually smaller than a full wish list. Start with the pages, features, or improvements that help customers act with more confidence.</p>
            <p>It also helps to separate what must be ready for launch from what can wait. The first version should solve the clearest problem well. Later improvements can add more pages, extra features, better reporting, new customer journeys, or support for more locations and industries.</p>
            <p>Think about what would make the project easier to judge three months after launch. That might be more enquiries, fewer manual follow-ups, clearer customer questions, faster updates, or a team that finally has one reliable place to manage the work.</p>
            <p>Bring examples, but do not let examples replace the business goal. The best result should fit your customers, your team, your services, and the way people actually choose or work with you.</p>
          </div>
          <div class="content-panel">
            <article class="content-card"><h3>Customer clarity</h3><p>Can a visitor quickly understand what you offer, who it is for, and what to do next?</p></article>
            <article class="content-card"><h3>Business fit</h3><p>Does the website or system support how your team actually works day to day?</p></article>
            <article class="content-card"><h3>Room to grow</h3><p>Can the first version expand later without forcing a full rebuild?</p></article>
          </div>
        </div>
      </section>
      <section class="section final-cta">
        <div class="final-panel reveal">
          <div><h2>Want help applying this?</h2><p>SoftKore Digital can help turn the plan into a clear, useful website or system.</p><a class="contact-line" href="mailto:info@softkoredigital.co.za">info@softkoredigital.co.za</a></div>
          <div class="final-actions"><a class="button button-primary" href="../../contact/">Start a Project</a></div>
        </div>
      </section>
    </main>
`;
  writeFile(path.join(root, "guides", guide.slug, "index.html"), shell({
    depth: 2,
    title: `${guide.title} | SoftKore Digital`,
    description: guide.description,
    canonical: `${domain}/guides/${guide.slug}/`,
    body,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      mainEntityOfPage: `${domain}/guides/${guide.slug}/`,
      articleBody: `${guide.intro} ${articleBody.replace(/<[^>]+>/g, " ")}`,
      publisher: { "@type": "Organization", name: "SoftKore Digital", url: `${domain}/` },
    },
  }));
}

function makeHtmlSitemap() {
  const sitemapXml = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const groups = {
    Services: urls.filter((url) => url.includes("/services/") && !url.includes("/industries/")),
    Industries: urls.filter((url) => url.includes("/industries/")),
    Guides: urls.filter((url) => url.includes("/guides/")),
    Other: urls.filter((url) => !url.includes("/services/") && !url.includes("/industries/") && !url.includes("/guides/")),
  };
  const groupHtml = Object.entries(groups).map(([name, items]) => `<section class="industry-group"><h2>${escapeHtml(name)} (${items.length})</h2><div class="area-list">${items.map((url) => {
    const label = url.replace(`${domain}/`, "/").replace(/\/$/, "") || "Home";
    return `<a href="${url.replace(domain, "..")}">${escapeHtml(label)}</a>`;
  }).join("\n")}</div></section>`).join("\n");
  const body = `    <main>
      <section class="section page-hero">
        <div class="page-hero-inner">
          <div>
            ${breadcrumb([{ href: "../", label: "Home" }, { label: "Pages" }])}
            <h1>Page Directory</h1>
            <p>A simple directory of SoftKore Digital service, industry, location, and guide pages.</p>
          </div>
          <aside class="page-summary"><strong>Directory</strong><ul><li>${urls.length} pages</li><li>Services</li><li>Industries</li><li>Guides</li><li>Locations</li></ul></aside>
        </div>
      </section>
      <section class="section areas-section">${groupHtml}</section>
    </main>
`;
  writeFile(path.join(root, "sitemap", "index.html"), shell({
    depth: 1,
    title: "Page Directory | SoftKore Digital",
    description: "A page directory for SoftKore Digital services, industries, locations, and guides.",
    canonical: `${domain}/sitemap/`,
    body,
    schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Page Directory", url: `${domain}/sitemap/` },
  }));
}

function updateSitemap(extraPaths) {
  const sitemapPath = path.join(root, "sitemap.xml");
  const existing = fs.readFileSync(sitemapPath, "utf8");
  const locs = new Set([...existing.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
  for (const extraPath of extraPaths) locs.add(`${domain}${extraPath}`);
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
    <priority>${loc.includes("/guides/") ? "0.7" : loc.includes("/contact/") ? "0.8" : "0.72"}</priority>
  </url>`).join("\n")}
</urlset>
`;
  fs.writeFileSync(sitemapPath, sitemap, "utf8");
}

makeContactPage();
makeGuideHub();
for (const guide of guides) makeGuide(guide);
updateSitemap(["/contact/", "/guides/", ...guides.map((guide) => `/guides/${guide.slug}/`), "/sitemap/"]);
makeHtmlSitemap();
updateSitemap(["/contact/", "/guides/", ...guides.map((guide) => `/guides/${guide.slug}/`), "/sitemap/"]);

console.log(`Generated contact page, page directory, and ${guides.length} guides.`);
