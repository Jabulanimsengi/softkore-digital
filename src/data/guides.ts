export type GuidePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  summary: string[];
  sections: Array<{ title: string; body: string[] }>;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  priority: number;
};

export const guides: GuidePage[] = [
  {
    slug: "website-prices-south-africa",
    title: "Website Prices in South Africa",
    metaTitle: "Website Prices South Africa | What Businesses Should Budget",
    description:
      "A practical guide to website prices in South Africa, what affects cost, and how to budget for design, development, SEO, and maintenance.",
    intro:
      "Website pricing depends on the business goal, number of pages, content depth, integrations, SEO requirements, and how much custom design or functionality is needed.",
    summary: ["Pricing factors", "Budget ranges", "Hidden costs", "SEO impact", "Maintenance planning"],
    sections: [
      {
        title: "What affects website cost?",
        body: [
          "The biggest cost drivers are page count, design complexity, content writing, custom components, forms, integrations, SEO setup, and launch support.",
          "A five-page brochure website is very different from a service-led website with location pages, industry pages, conversion tracking, and a maintainable content model.",
        ],
      },
      {
        title: "Cheap websites usually skip structure",
        body: [
          "Low-cost builds often focus on getting something online quickly. That can work for a first presence, but it usually leaves gaps in messaging, metadata, internal links, speed, and conversion paths.",
          "A stronger website is planned around how customers decide: what they need to know, what proof they need, and what action they should take next.",
        ],
      },
      {
        title: "Budget for launch and improvement",
        body: [
          "The launch is not the end of the work. Businesses should budget for content updates, Search Console checks, bug fixes, performance reviews, and ongoing page improvements.",
          "The best budget is usually phased: build a strong core site first, then add guides, industry pages, selected local pages, and application features when there is a clear reason.",
        ],
      },
    ],
    related: [
      { label: "Web development", href: "/services/web-development/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Website vs web application", href: "/guides/website-vs-web-application/" },
      { label: "Ecommerce development", href: "/industries/ecommerce-development/" },
    ],
    faqs: [
      {
        question: "How much should a South African business budget for a website?",
        answer:
          "It depends on scope. A small brochure site costs far less than a conversion-focused website with SEO planning, service pages, integrations, and ongoing support.",
      },
      {
        question: "Why do website prices vary so much?",
        answer:
          "Prices vary because some projects include strategy, copy, design, development, SEO, testing, and launch support, while others only include a basic template setup.",
      },
      {
        question: "Should SEO be included from the start?",
        answer:
          "Yes. Metadata, URL structure, headings, internal links, schema, and page speed are easier to handle correctly during the build than after launch.",
      },
    ],
    priority: 0.72,
  },
  {
    slug: "website-vs-web-application",
    title: "Website vs Web Application",
    metaTitle: "Website vs Web Application | Which Does Your Business Need?",
    description:
      "A practical comparison of websites and web applications for South African businesses planning a digital project.",
    intro:
      "A website explains, persuades, and captures enquiries. A web application lets users complete workflows, manage data, log in, book, pay, or operate a business process.",
    summary: ["Website use cases", "App use cases", "Workflow planning", "Cost impact", "Phased builds"],
    sections: [
      {
        title: "When a website is enough",
        body: [
          "A website is the right starting point when the business mainly needs credibility, service pages, contact forms, SEO foundations, and a clear explanation of what it offers.",
          "Most service businesses should get the website structure right before building custom application features.",
        ],
      },
      {
        title: "When a web application makes sense",
        body: [
          "A web application makes sense when people need accounts, dashboards, bookings, payments, document uploads, workflow stages, reporting, or admin tools.",
          "If the business is running daily operations through spreadsheets and manual follow-ups, a custom app may remove meaningful friction.",
        ],
      },
      {
        title: "A phased build is often best",
        body: [
          "Many businesses should start with a strong website, prove the enquiry path, and then build the application workflow that creates the most operational value.",
          "This reduces risk and gives the application build clearer requirements from real business behaviour.",
        ],
      },
    ],
    related: [
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "Durban custom web applications", href: "/services/custom-web-applications/kwazulu-natal/durban/" },
      { label: "Website prices", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      {
        question: "Is an ecommerce store a website or a web application?",
        answer:
          "It can be both. The marketing and product pages behave like a website, while cart, checkout, payments, accounts, and admin tools behave like an application.",
      },
      {
        question: "Can a website become a web application later?",
        answer:
          "Yes. A well-structured website can later add portals, dashboards, booking systems, payments, and admin workflows.",
      },
      {
        question: "Which costs more?",
        answer:
          "A web application usually costs more because it involves workflows, data models, user roles, backend logic, testing, and ongoing maintenance.",
      },
    ],
    priority: 0.72,
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist",
    metaTitle: "Technical SEO Checklist for South African Business Websites",
    description:
      "A practical technical SEO checklist covering indexability, metadata, sitemap health, redirects, internal links, performance, and Search Console.",
    intro:
      "Technical SEO makes sure search engines can discover, crawl, understand, and index the right pages without wasting attention on broken, duplicated, or low-value URLs.",
    summary: ["Indexability", "Sitemaps", "Redirects", "Metadata", "Internal links"],
    sections: [
      {
        title: "Start with indexability",
        body: [
          "Check that important pages return 200 status codes, are not blocked by robots.txt, do not carry accidental noindex tags, and have canonical URLs pointing to themselves.",
          "Pages that are placeholders, duplicated, or not ready should be kept out of the sitemap and marked noindex if they must remain accessible.",
        ],
      },
      {
        title: "Clean up redirects and old URLs",
        body: [
          "Old generated pages should redirect to the strongest relevant replacement, not to another thin URL. This helps consolidate signals and avoids keeping low-value pages alive.",
          "Redirect maps should be generated from data and tested for self-redirects, old destination slugs, and missing priority mappings.",
        ],
      },
      {
        title: "Use Search Console after launch",
        body: [
          "After deployment, inspect priority URLs, submit the sitemap, and monitor redirect, 404, crawled-not-indexed, and duplicate-canonical reports.",
          "Technical SEO is not a one-time checklist. It becomes a monitoring rhythm after the site is live.",
        ],
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Sandton SEO services", href: "/services/seo-services/gauteng/sandton/" },
      { label: "Cape Town SEO services", href: "/services/seo-services/western-cape/cape-town/" },
      { label: "Why your website is not ranking", href: "/guides/why-your-website-is-not-ranking/" },
    ],
    faqs: [
      {
        question: "What is technical SEO?",
        answer:
          "Technical SEO is the work that helps search engines crawl, render, understand, and index a website correctly.",
      },
      {
        question: "How often should technical SEO be checked?",
        answer:
          "Important sites should be reviewed at least monthly, and always after migrations, redesigns, URL changes, or major content changes.",
      },
      {
        question: "Does technical SEO guarantee rankings?",
        answer:
          "No. It removes barriers and improves foundations, but rankings also depend on content quality, intent match, authority, competition, and consistency.",
      },
    ],
    priority: 0.7,
  },
  {
    slug: "website-maintenance-checklist",
    title: "Website Maintenance Checklist",
    metaTitle: "Website Maintenance Checklist | Monthly Website Care Tasks",
    description:
      "A monthly website maintenance checklist for business websites covering content, forms, links, security, performance, SEO, and reporting.",
    intro:
      "A website is a working business asset. Maintenance keeps it accurate, stable, secure, and easier to improve after launch.",
    summary: ["Content checks", "Form testing", "Broken links", "SEO monitoring", "Performance"],
    sections: [
      {
        title: "Check customer-facing details",
        body: [
          "Review services, contact details, calls to action, opening hours, team details, pricing notes, images, and any claims that could become outdated.",
          "Customers lose trust quickly when a website feels neglected or gives them old information.",
        ],
      },
      {
        title: "Test the enquiry path",
        body: [
          "Submit contact forms, test mail delivery, check WhatsApp and call links, review thank-you messages, and make sure analytics or conversion tracking still works.",
          "A broken form can quietly waste weeks of traffic.",
        ],
      },
      {
        title: "Review SEO and performance",
        body: [
          "Check Search Console, sitemap visibility, important page indexing, redirects, page speed, broken links, and metadata issues.",
          "Small monthly improvements usually beat waiting for a large redesign when the site has already started drifting.",
        ],
      },
    ],
    related: [
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Website prices", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      {
        question: "How often should a website be maintained?",
        answer:
          "Most business websites should be checked monthly. Sites with frequent content changes or application features may need more regular support.",
      },
      {
        question: "Does maintenance include SEO?",
        answer:
          "It can. Maintenance can include Search Console checks, sitemap review, metadata updates, internal links, page speed checks, and content improvements.",
      },
      {
        question: "Can maintenance fix a weak website?",
        answer:
          "Maintenance can improve a good foundation. If the structure, design, or content is fundamentally weak, a rebuild may be the better long-term fix.",
      },
    ],
    priority: 0.7,
  },
  {
    slug: "why-your-website-is-not-ranking",
    title: "Why Your Website Is Not Ranking on Google",
    metaTitle: "Why Is My Website Not Ranking on Google? Practical SEO Checks",
    description:
      "Common reasons a business website is not ranking on Google, including indexing issues, thin content, weak structure, poor intent match, and technical problems.",
    intro:
      "A website can look good and still struggle to rank. Ranking problems usually come from a mix of technical barriers, weak content, poor intent match, and limited authority.",
    summary: ["Indexing issues", "Thin content", "Intent mismatch", "Internal links", "Competition"],
    sections: [
      {
        title: "Google may not be indexing the right pages",
        body: [
          "If important pages are missing from the sitemap, blocked, redirected poorly, canonicalized incorrectly, or marked noindex, they may not have a real chance to rank.",
          "Start with Search Console and inspect the pages that matter commercially.",
        ],
      },
      {
        title: "The page may not answer the search intent",
        body: [
          "Many pages target a keyword but do not answer the buyer’s real question. A service page should explain the offer, who it is for, proof, process, FAQs, and next steps.",
          "Location and industry pages need useful context, not only swapped names.",
        ],
      },
      {
        title: "The site may not have enough internal support",
        body: [
          "Important pages need links from the homepage, service pages, industry pages, local pages, and relevant guides.",
          "A clear internal linking model helps both users and search engines understand which pages matter most.",
        ],
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "Cape Town SEO services", href: "/services/seo-services/western-cape/cape-town/" },
    ],
    faqs: [
      {
        question: "How long does it take to rank on Google?",
        answer:
          "It depends on competition, page quality, technical health, authority, and consistency. Technical fixes can be quick, but ranking improvement is usually measured over months.",
      },
      {
        question: "Can a new website rank?",
        answer:
          "Yes, but it needs strong foundations, useful pages, clear internal links, and time to build trust and visibility.",
      },
      {
        question: "Should I create more pages if I am not ranking?",
        answer:
          "Not automatically. First improve technical health and existing important pages. Add new pages only when they answer a distinct useful search intent.",
      },
    ],
    priority: 0.72,
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function guideUrl(guide: GuidePage) {
  return `/guides/${guide.slug}/`;
}
