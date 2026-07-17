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
    title: "Website Design & Development",
    metaTitle: "Website Design & Development South Africa | SoftKore Digital",
    description:
      "SoftKore Digital designs and develops fast, scalable, SEO-ready websites for growing businesses in South Africa.",
    eyebrow: "Website Design & Development",
    h1: "Website Design & Development for Growing South African Businesses",
    intro:
      "SoftKore Digital builds fast, mobile-friendly websites for businesses that need to look credible and make it easy for customers to enquire.",
    primaryCta: "Start a Website Project",
    secondaryCta: "Explore SEO & Online Visibility",
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
      { label: "Business Systems & Automation", href: "/services/custom-web-applications/" },
      { label: "SEO & Online Visibility", href: "/services/seo-services/" },
      { label: "Maintenance & Technical Support", href: "/services/website-maintenance/" },
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
    serviceType: "Website Design and Development",
  },
  {
    slug: "custom-web-applications",
    title: "Business Systems & Automation",
    metaTitle: "Business Systems & Automation South Africa | SoftKore Digital",
    description:
      "Custom business systems, portals, dashboards and workflow automation designed around the way your team works.",
    eyebrow: "Business Systems & Automation",
    h1: "Business Systems for Work That Has Outgrown Spreadsheets",
    intro:
      "SoftKore Digital builds dashboards, portals, admin tools and automated workflows that help teams manage real work in one connected system.",
    primaryCta: "Start a Systems Project",
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
      { label: "Website Design & Development", href: "/services/web-development/" },
      { label: "SEO & Online Visibility", href: "/services/seo-services/" },
      { label: "Maintenance & Technical Support", href: "/services/website-maintenance/" },
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
    serviceType: "Business Systems and Automation",
  },

  {
    slug: "booking-customer-management",
    title: "Booking & Customer Management",
    metaTitle: "Booking & Customer Management Systems | SoftKore Digital",
    description: "Connected booking and customer management systems for appointments, enquiries, payments, reminders, and follow-up.",
    eyebrow: "Booking & Customer Management",
    h1: "Booking and Customer Management That Keeps Work Moving",
    intro: "SoftKore Digital creates connected booking journeys and customer management tools that make it easier to serve clients from first enquiry through follow-up.",
    primaryCta: "Start a Booking Project",
    secondaryCta: "Explore Business Systems",
    secondaryHref: "/services/custom-web-applications/",
    summaryTitle: "Booking solutions can include",
    summary: ["Online appointment requests and scheduling", "Customer records and service history", "Availability, reminders, and notifications", "Payments and deposit workflows", "Admin dashboards and reporting"],
    bodyHeading: "Make every customer step easier to manage.",
    body: ["Booking is more than a calendar. Customers need a clear way to choose a service, find a suitable time, provide the right information, pay when required, and know what happens next.", "We connect that customer journey to practical management tools so your team can control availability, records, confirmations, follow-up, and reporting without unnecessary manual work."],
    bullets: ["Appointment scheduling", "Customer profiles", "Service and staff management", "Deposits and payments", "Email and message notifications", "Operational reporting"],
    cards: [
      { title: "Clear customer journeys", text: "Guide customers from service selection to confirmation with fewer confusing steps." },
      { title: "Better daily control", text: "Give teams one place to manage availability, bookings, customer details, and changes." },
      { title: "Useful automation", text: "Reduce repetitive work with confirmations, reminders, status changes, and follow-up triggers." },
    ],
    featureTitle: "What a Connected Booking System Can Do",
    featureIntro: "The right setup depends on your services, staff, locations, payment rules, and the information your team needs before each booking.",
    features: [
      { title: "Online scheduling", text: "Let customers request or reserve suitable services and times from a mobile-friendly journey." },
      { title: "Customer management", text: "Keep contact details, booking history, notes, preferences, and important records together." },
      { title: "Availability control", text: "Manage staff, service duration, operating hours, buffers, capacity, and schedule changes." },
      { title: "Payments and deposits", text: "Connect suitable payment steps to reduce friction and support clearer booking policies." },
      { title: "Notifications", text: "Send confirmations, reminders, updates, and follow-up messages at the right points." },
      { title: "Management reporting", text: "Track booking activity, cancellations, service demand, customer patterns, and team workload." },
    ],
    processTitle: "How We Design the Booking Journey",
    processBody: ["We start by mapping the real customer journey and the work your team completes behind it.", "The system is then shaped around service rules, availability, customer data, payments, communications, and the admin controls required to operate confidently."],
    processItems: [
      { title: "Map the journey", text: "Define each customer and team step from service discovery through booking and follow-up." },
      { title: "Set the rules", text: "Clarify availability, staff, locations, deposits, cancellations, notifications, and permissions." },
      { title: "Build and connect", text: "Create the customer experience, management tools, data structure, and required integrations." },
      { title: "Launch and refine", text: "Test real scenarios, launch carefully, and improve the workflow using team and customer feedback." },
    ],
    related: [
      { label: "Business Systems & Automation", href: "/services/custom-web-applications/" },
      { label: "Website Design & Development", href: "/services/web-development/" },
      { label: "Maintenance & Technical Support", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "Can you connect bookings to payments?", answer: "Yes. The project can include deposits, full payments, payment status, refunds or cancellation rules where the selected payment provider supports them." },
      { question: "Can staff manage availability and bookings?", answer: "Yes. Admin tools can support staff schedules, services, locations, customer records, booking changes, notes, and reporting." },
      { question: "Can the system send reminders?", answer: "Yes. Email or messaging integrations can send confirmations, reminders, updates, and follow-up messages when the required provider APIs are available." },
      { question: "Can an existing booking workflow be improved?", answer: "Yes. We can assess the current customer journey and management process, then improve or replace the parts creating the most friction." },
    ],
    serviceType: "Booking and Customer Management",
  },
  {
    slug: "seo-services",
    title: "SEO & Online Visibility",
    metaTitle: "SEO & Online Visibility South Africa | SoftKore Digital",
    description:
      "SEO and online visibility services for South African businesses, including technical SEO, page improvement, indexing checks, local visibility and reporting.",
    eyebrow: "SEO & Online Visibility",
    h1: "SEO & Online Visibility for Businesses That Want to Be Found",
    intro:
      "SoftKore Digital fixes the technical basics, improves important pages, and monitors search performance so your website has a better chance of bringing in the right traffic.",
    primaryCta: "Improve Online Visibility",
    secondaryCta: "View Website Design",
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
      { label: "Website Design & Development", href: "/services/web-development/" },
      { label: "Business Systems & Automation", href: "/services/custom-web-applications/" },
      { label: "Maintenance & Technical Support", href: "/services/website-maintenance/" },
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
    serviceType: "SEO and Online Visibility",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Technical Support",
    metaTitle: "Website Maintenance & Technical Support | SoftKore Digital",
    description:
      "Monthly website maintenance services for updates, bug fixes, security checks, SEO monitoring, Search Console checks, performance checks, and reporting.",
    eyebrow: "Maintenance & Technical Support",
    h1: "Ongoing Website Maintenance and Technical Support",
    intro:
      "After launch, your website still needs care. SoftKore Digital helps with updates, fixes, SEO checks, and performance monitoring so the site stays useful.",
    primaryCta: "Start a Support Plan",
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
      { label: "Website Design & Development", href: "/services/web-development/" },
      { label: "SEO & Online Visibility", href: "/services/seo-services/" },
      { label: "Business Systems & Automation", href: "/services/custom-web-applications/" },
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
    serviceType: "Website Maintenance and Technical Support",
  },
  {
    slug: "digital-marketing-conversion",
    title: "Digital Marketing & Conversion",
    metaTitle: "Digital Marketing & Conversion Services | SoftKore Digital",
    description: "Practical digital marketing and conversion services that connect campaigns, landing pages, analytics, and customer action.",
    eyebrow: "Digital Marketing & Conversion",
    h1: "Digital Marketing Built Around Measurable Customer Action",
    intro: "SoftKore Digital connects campaigns, landing pages, conversion journeys, and reporting so marketing activity has a clear business purpose.",
    primaryCta: "Start a Growth Project",
    secondaryCta: "Explore SEO & Online Visibility",
    secondaryHref: "/services/seo-services/",
    summaryTitle: "Growth work can include",
    summary: ["Campaign and landing-page strategy", "Conversion-focused page improvements", "Analytics and event tracking", "Lead and enquiry journeys", "Reporting and ongoing optimization"],
    bodyHeading: "Turn attention into a useful next step.",
    body: ["Digital marketing works better when the campaign, message, landing page, form, follow-up, and measurement plan are designed as one journey.", "We focus on practical improvements that help the right audience understand the offer, trust the business, and take a measurable next action."],
    bullets: ["Landing pages", "Campaign planning", "Conversion reviews", "Lead generation journeys", "Analytics setup", "Performance reporting"],
    cards: [
      { title: "Clear campaign purpose", text: "Every campaign starts with a defined audience, offer, action, and way to measure progress." },
      { title: "Stronger conversion paths", text: "Pages, forms, calls to action, and follow-up steps work together instead of creating friction." },
      { title: "Evidence-led improvement", text: "Analytics and customer behaviour help decide what should change next." },
    ],
    featureTitle: "How We Support Digital Growth",
    featureIntro: "The work can support a focused campaign or an ongoing growth programme, depending on your audience, offer, and internal capacity.",
    features: [
      { title: "Campaign planning", text: "Clarify the audience, offer, channel, message, budget, customer action, and measurement plan." },
      { title: "Landing pages", text: "Build focused pages that connect campaign intent to a clear and credible next step." },
      { title: "Conversion reviews", text: "Identify friction in navigation, copy, forms, calls to action, checkout, or booking journeys." },
      { title: "Lead journeys", text: "Connect enquiries to useful confirmation, qualification, routing, and follow-up processes." },
      { title: "Analytics", text: "Set up meaningful events and reporting around the actions that matter to the business." },
      { title: "Optimization", text: "Use performance evidence to improve messages, pages, audiences, and conversion steps over time." },
    ],
    processTitle: "How We Build a Growth Programme",
    processBody: ["We begin with the business outcome and work backwards through the audience, offer, channel, customer journey, and measurement plan.", "This keeps campaign activity connected to the website and operational process required to turn attention into business value."],
    processItems: [
      { title: "Define the outcome", text: "Agree on the audience, offer, desired customer action, constraints, and meaningful success signals." },
      { title: "Build the journey", text: "Shape the campaign message, landing experience, form or transaction, and follow-up path." },
      { title: "Launch and measure", text: "Release the campaign with appropriate tracking and verify that important customer actions are recorded." },
      { title: "Learn and improve", text: "Review evidence, identify friction, and refine the highest-value parts of the journey." },
    ],
    related: [
      { label: "SEO & Online Visibility", href: "/services/seo-services/" },
      { label: "Website Design & Development", href: "/services/web-development/" },
      { label: "Booking & Customer Management", href: "/services/booking-customer-management/" },
    ],
    faqs: [
      { question: "Do you guarantee marketing results?", answer: "No. Results depend on the offer, audience, competition, budget, channel, and customer journey. We focus on clear strategy, sound implementation, useful measurement, and evidence-led improvement." },
      { question: "Can you improve an existing landing page?", answer: "Yes. We can review its message, structure, calls to action, forms, speed, mobile experience, tracking, and connection to follow-up." },
      { question: "Can marketing connect to a booking or sales system?", answer: "Yes. Campaign journeys can connect to enquiry routing, booking, payment, customer management, or reporting tools where suitable integrations are available." },
      { question: "Can you set up analytics and conversion tracking?", answer: "Yes. Tracking can be configured around meaningful actions such as form submissions, calls, bookings, purchases, and important journey steps." },
    ],
    serviceType: "Digital Marketing and Conversion",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
