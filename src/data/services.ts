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
  fitHeading: string;
  fit: string[];
  featureTitle: string;
  featureIntro: string;
  features: Array<{ title: string; text: string }>;
  southAfricaHeading: string;
  southAfrica: string[];
  processTitle: string;
  processBody: string[];
  processItems: Array<{ title: string; text: string }>;
  costHeading: string;
  cost: string[];
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  serviceType: string;
};

export const services: ServicePage[] = [
  {
    slug: "web-development",
    title: "Website Design & Development",
    metaTitle: "Website Design & Development Company South Africa | SoftKore Digital",
    description:
      "Website design and development for South African businesses. Fast, mobile-first websites with clear service pages, built-in SEO and enquiry paths that work.",
    eyebrow: "Website Design & Development",
    h1: "Website Design and Development for South African Businesses",
    intro:
      "We design and build business websites that load quickly on a phone, explain what you do in plain language, and make it easy for the right customers to contact you, wherever they are in the country.",
    primaryCta: "Start a Website Project",
    secondaryCta: "See SEO Services",
    secondaryHref: "/services/seo-services/",
    summaryTitle: "Every website build includes",
    summary: [
      "Page structure planned around your services",
      "Mobile-first design and development",
      "Technical SEO set up from day one",
      "Contact forms, call and WhatsApp links",
      "Analytics and launch checks",
    ],
    bodyHeading: "A website has one job: help the right person choose you.",
    body: [
      "Most small business websites fail in predictable ways. The homepage talks about the company instead of the customer, services are squeezed onto one page, the phone number is hard to find on mobile, and nobody can tell what to do next. A new design does not fix any of that on its own.",
      "We start with the decisions your customer has to make: do you offer what they need, can they trust you, what will it roughly involve, and how do they get in touch? The page structure, copy and design are then built around those answers, so the site works as a sales tool and not only as an online brochure.",
      "Because search is built into the structure from the start, you avoid the common and expensive pattern of launching a site first and paying to repair it for Google later.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits service businesses, professional firms, trades, clinics, manufacturers and B2B suppliers that need a website customers can act on. It is also a good fit if your current site looks dated, performs badly on phones, or brings in very few enquiries.",
      "If your business mainly needs logins, dashboards or internal workflows, a web application may be the better starting point. Our guide on websites versus web applications explains how to tell the difference.",
    ],
    featureTitle: "What We Build",
    featureIntro:
      "The scope depends on how you sell. These are the website types South African businesses most often need from us.",
    features: [
      {
        title: "Business and service websites",
        text: "A homepage plus a dedicated page for each main service, written around the questions customers ask before they enquire.",
      },
      {
        title: "Website redesigns",
        text: "We keep what already works, including URLs that rank, and rebuild the layout, content and technical setup around it, with redirects mapped before launch.",
      },
      {
        title: "Landing pages",
        text: "Focused campaign pages with one offer and one action, so your advertising spend goes to a page built to convert.",
      },
      {
        title: "Ecommerce websites",
        text: "Product catalogues, delivery information and checkout flows connected to a South African payment provider.",
      },
      {
        title: "Performance rebuilds",
        text: "For sites that are too slow or too heavy to maintain, we rebuild on a lean, modern stack without losing your search history.",
      },
      {
        title: "Launch and handover",
        text: "Metadata, sitemap, redirects, forms, tracking and mobile journeys are all checked on the live site before we call it finished.",
      },
    ],
    southAfricaHeading: "Built for how South Africans actually browse",
    southAfrica: [
      "Most of your visitors will arrive on a phone, often on mobile data, and many would rather send a WhatsApp message than fill in a long form. We keep pages light, put contact options within easy reach, and test the journeys that matter on real mobile screen sizes.",
      "Practical local requirements are part of the build: a contact form and privacy notice that respect POPIA, a .co.za domain where it suits your brand, pricing shown in rand, and payment options your customers recognise, such as PayFast, Yoco or Ozow.",
      "We work remotely with businesses in all nine provinces. Briefings, reviews and sign-off happen over video calls, email and WhatsApp, so your location does not limit the project.",
    ],
    processTitle: "How a Website Project Runs",
    processBody: [
      "Good websites come from clear decisions made early. Each stage below ends with something you can review, so nothing important is left to a big reveal at the end.",
    ],
    processItems: [
      {
        title: "Discovery",
        text: "We clarify your services, customers, competitors and what a good enquiry looks like. If you have an existing site, we also review its search data.",
      },
      {
        title: "Structure and content",
        text: "We agree the pages, navigation and key messages, then write or refine the copy. Your real proof, such as projects and reviews, goes in here.",
      },
      {
        title: "Design and build",
        text: "You review the design on real pages, not just static mockups, while we build responsive, fast pages with clean code.",
      },
      {
        title: "Launch and support",
        text: "We test forms, links, redirects, tracking and mobile journeys, then launch, verify the live site and submit it to Google Search Console.",
      },
    ],
    costHeading: "What affects the cost of a website",
    cost: [
      "The main cost drivers are the number of unique pages, who writes the content, how custom the design is, and whether the site needs features such as booking, payments or integrations. A redesign with many existing pages also needs redirect planning.",
      "A sensible approach is to launch a strong core site first and add to it once you can see what customers respond to. Share your rough budget on the contact form and we will tell you honestly what it can achieve. Our website prices guide covers this in more detail.",
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Web applications and business systems", href: "/services/custom-web-applications/" },
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
      { label: "Website vs web application", href: "/guides/website-vs-web-application/" },
      { label: "Websites by industry", href: "/industries/" },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses outside Johannesburg?",
        answer:
          "Yes. We work remotely with businesses across South Africa. Meetings, reviews and sign-off happen over video calls, email and WhatsApp, so the process is the same wherever you are based.",
      },
      {
        question: "What do I need to prepare before starting?",
        answer:
          "A list of your main services, who your best customers are, access to your current website and domain if you have them, examples of sites you like, and any proof such as project photos or reviews.",
      },
      {
        question: "Will my new website rank on Google?",
        answer:
          "We build the technical and content foundations search engines need, but no honest provider can guarantee rankings. Results also depend on competition, your content and your reputation online. Ongoing SEO work can be added after launch.",
      },
      {
        question: "Can you redesign my site without losing my Google rankings?",
        answer:
          "That is the goal of every redesign we do. We record your existing URLs and search performance, keep the pages that earn traffic where possible, and redirect the rest to the closest replacement. Some short-term movement is still normal after any rebuild.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "It depends on the build, and we will agree this during discovery. Some clients want a content editor, while others prefer to send changes through a maintenance plan.",
      },
      {
        question: "Do you write the website content?",
        answer:
          "We can write it or refine what you already have. Either way, we need your input on your services, experience and customers, because accurate detail is what makes a website convincing.",
      },
    ],
    serviceType: "Website Design and Development",
  },
  {
    slug: "custom-web-applications",
    title: "Web Applications & Business Systems",
    metaTitle: "Custom Web Application Development South Africa | SoftKore Digital",
    description:
      "Custom web application development for South African businesses: client portals, dashboards, internal tools and workflow automation that replace spreadsheets.",
    eyebrow: "Web Applications & Business Systems",
    h1: "Custom Web Application Development in South Africa",
    intro:
      "When spreadsheets, email threads and WhatsApp groups can no longer keep up, we build secure web applications that put your data, approvals and daily work in one place.",
    primaryCta: "Start a Systems Project",
    secondaryCta: "Need a Website Instead?",
    secondaryHref: "/services/web-development/",
    summaryTitle: "Application builds can include",
    summary: [
      "Workflow mapping and interface design",
      "Frontend and backend development",
      "Database design and user permissions",
      "Admin dashboards and reporting",
      "Payment and third-party integrations",
    ],
    bodyHeading: "Software should fit the way your business really works.",
    body: [
      "Off-the-shelf software is often the right first choice, and we will say so when it is. Custom development makes sense when your process is what sets you apart, when you are paying for many tools that do not talk to each other, or when staff spend hours each week moving the same information from one place to another.",
      "A useful application starts with the work, not the screens. Before any design begins, we map who uses the system, what each person is allowed to see and change, what data has to be stored, and where the decisions and bottlenecks are. Skipping this step is the most common reason custom software projects run over budget.",
    ],
    fitHeading: "Signs you may need a custom system",
    fit: [
      "Key information lives in spreadsheets that only one person fully understands. Staff retype the same details into several tools. Customers keep phoning to ask for updates they could check themselves. Monthly reports take days to compile, or mistakes keep appearing because nobody can see the latest version of a record.",
      "If two or more of these sound familiar, a focused system will probably pay for itself in saved time. If not, a well-chosen existing product may be enough for now, and that is a perfectly good outcome.",
    ],
    featureTitle: "Systems We Build",
    featureIntro:
      "Most projects combine a few of these. We usually recommend starting with the part that removes the most manual work.",
    features: [
      {
        title: "Client portals",
        text: "A secure login where customers can check progress, upload documents, download invoices and send requests.",
      },
      {
        title: "Admin dashboards",
        text: "One view of enquiries, jobs, orders, staff and payments, with reports that no longer need to be built by hand.",
      },
      {
        title: "Internal tools",
        text: "Purpose-built systems for approvals, quoting, stock, job cards or compliance records that replace fragile spreadsheets.",
      },
      {
        title: "Invoicing and quoting tools",
        text: "Create, send and track quotes and invoices in your own format, with a clear history for every customer.",
      },
      {
        title: "Marketplaces and platforms",
        text: "Listings, user accounts, payments, notifications and moderation tools for platform-style business models.",
      },
      {
        title: "Integrations and automation",
        text: "Connect accounting software, payment gateways, email and other APIs, so information only has to be captured once.",
      },
    ],
    southAfricaHeading: "South African requirements, considered from the start",
    southAfrica: [
      "Systems that hold customer information must meet POPIA obligations, so we plan access controls, audit history and sensible data retention during design rather than adding them afterwards. Your organisation stays responsible for its own compliance, and your legal adviser should confirm what applies to you.",
      "We also plan for local realities: rand-based pricing and VAT on quotes and invoices, South African payment gateways, screens that work well on a phone, and interfaces that recover cleanly when a connection drops or the power goes out mid-task.",
      "Everything is delivered remotely, so teams in any province, or spread across several branches, can use and test the system as it is being built.",
    ],
    processTitle: "How We Scope and Build a System",
    processBody: [
      "We prefer to release a focused first version, get it into real use and improve it from there. This lowers your risk and means later features are based on evidence.",
    ],
    processItems: [
      {
        title: "Workflow mapping",
        text: "We sit with the people doing the work and document the users, permissions, data, approvals and exceptions.",
      },
      {
        title: "First-version scope",
        text: "We agree on what must be in version one and what can wait, along with the data model, integrations and hosting plan.",
      },
      {
        title: "Build and test",
        text: "You see working software regularly, not just at the end. We test the key customer and admin journeys with real scenarios.",
      },
      {
        title: "Launch and improve",
        text: "We migrate data, train your team, monitor early use, then fix issues and plan the next improvements from real feedback.",
      },
    ],
    costHeading: "What affects the cost of a custom application",
    cost: [
      "Cost depends on the number of user roles, how complex the business rules are, how many integrations are needed, and whether existing data must be migrated. Reporting and mobile requirements also add to the scope.",
      "Remember to budget for what happens after launch too: hosting, backups, security updates and ongoing improvements. We give you a clear picture of these running costs before you commit, because a system you cannot afford to maintain is not a good investment.",
    ],
    related: [
      { label: "Online booking systems", href: "/services/booking-customer-management/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Website and system maintenance", href: "/services/website-maintenance/" },
      { label: "Website vs web application", href: "/guides/website-vs-web-application/" },
      { label: "AI agents for business workflows", href: "/ai-agents/" },
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer:
          "A website mainly informs and persuades visitors. A web application lets people log in and do work, such as managing bookings, tracking jobs or approving documents. Many businesses eventually need both.",
      },
      {
        question: "Should I buy existing software or build my own?",
        answer:
          "Buy if an existing product covers most of your needs at a fair price. Consider building when your process is a real advantage, or when you are working around several tools every day. We will give you a straight answer during scoping.",
      },
      {
        question: "Can you connect the system to our accounting software?",
        answer:
          "Usually, yes, as long as the software offers an API or a reliable export. We confirm what is possible for your specific tools during scoping, before you commit to the build.",
      },
      {
        question: "Can we start small?",
        answer:
          "Yes, and we usually recommend it. A focused first version often solves the most expensive problem, and it gives you real feedback before you spend money on further features.",
      },
      {
        question: "Who owns the system once it is built?",
        answer:
          "Ownership, source code access and hosting are agreed in writing before the project starts, so you know exactly what you are getting.",
      },
      {
        question: "Do you support applications after launch?",
        answer:
          "Yes. Support can cover bug fixes, security updates, backups, monitoring and new features, so the system keeps working as your business changes.",
      },
    ],
    serviceType: "Custom Web Application Development",
  },
  {
    slug: "booking-customer-management",
    title: "Online Booking & Customer Management",
    metaTitle: "Online Booking Systems South Africa | SoftKore Digital",
    description:
      "Online booking and customer management systems for South African service businesses: scheduling, deposits, reminders, customer records and reporting.",
    eyebrow: "Online Booking & Customer Management",
    h1: "Online Booking Systems for South African Service Businesses",
    intro:
      "We build booking journeys that let customers choose a service and time without the back-and-forth, and give your team one place to manage appointments, deposits and customer history.",
    primaryCta: "Start a Booking Project",
    secondaryCta: "Explore Custom Systems",
    secondaryHref: "/services/custom-web-applications/",
    summaryTitle: "Booking systems can include",
    summary: [
      "Service and time selection on mobile",
      "Staff, branch and availability rules",
      "Deposits and online payments",
      "Confirmations and reminders",
      "Customer records and reporting",
    ],
    bodyHeading: "Every missed reply can be a missed booking.",
    body: [
      "If booking depends on someone answering the phone or a WhatsApp message, you lose customers after hours, during busy periods and whenever a competitor replies first. A manual diary also means double bookings, no-shows and time spent confirming details that a system could capture on its own.",
      "A good booking system does more than show a calendar. It reflects how your business really runs: how long each service takes, which staff can perform it, when you need buffer time, and when a deposit is required. Your customer sees a simple journey while the system applies those rules behind the scenes.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits salons, spas, clinics, therapists, consultants, driving schools, repair services and any business that sells time or appointments. It is especially useful if you have several staff members or branches, each with their own availability.",
      "If you have one calendar and simple needs, an existing booking app may be all you need, and we will tell you so. Custom work makes sense when your rules, deposits or customer records go beyond what those tools handle well, or when you want booking built properly into your own website.",
    ],
    featureTitle: "What a Connected Booking System Can Do",
    featureIntro:
      "The right setup depends on your services, staff, branches and payment rules. These are the parts we most often connect.",
    features: [
      {
        title: "Online scheduling",
        text: "Customers choose a service, staff member and time on their phone, and only see slots that are actually available.",
      },
      {
        title: "Availability rules",
        text: "Manage durations, buffers, operating hours, leave, capacity and different rules for each branch or staff member.",
      },
      {
        title: "Deposits and payments",
        text: "Take deposits or full payment through a South African payment provider, with clear cancellation and refund rules.",
      },
      {
        title: "Reminders",
        text: "Send automatic confirmations and reminders to reduce no-shows and repeat admin.",
      },
      {
        title: "Customer records",
        text: "Keep contact details, booking history, notes and preferences together, with access limited to the right staff.",
      },
      {
        title: "Reporting",
        text: "See booking volumes, cancellations, popular services and staff workload without compiling it by hand.",
      },
    ],
    southAfricaHeading: "Made for how South African customers book",
    southAfrica: [
      "Most customers will book from a phone, so the journey must be quick on a small screen and on mobile data. Where it suits your business, WhatsApp can remain part of the process, with the booking link doing the scheduling work once a conversation has started.",
      "Deposits can run through local payment gateways such as PayFast, Yoco or Ozow, subject to each provider's features and fees. Customer details and appointment notes are personal information under POPIA, and medical or wellness notes need extra care, so we plan who can see what from the start.",
      "We set up, train and support your team remotely, wherever in South Africa your business operates.",
    ],
    processTitle: "How We Design the Booking Journey",
    processBody: [
      "We map the real customer journey and the admin behind it first, because that is where the expensive edge cases hide.",
    ],
    processItems: [
      {
        title: "Map the journey",
        text: "We follow each step from discovering a service through booking, the appointment itself and follow-up.",
      },
      {
        title: "Set the rules",
        text: "We agree on availability, staff, branches, deposits, cancellations, notifications and permissions.",
      },
      {
        title: "Build and connect",
        text: "We build the customer journey and admin tools, then connect payments and messaging.",
      },
      {
        title: "Launch and refine",
        text: "We test real scenarios, import existing bookings if needed, train your team and adjust based on early use.",
      },
    ],
    costHeading: "What affects the cost of a booking system",
    cost: [
      "The biggest factors are the number of services, staff and branches, how complex your availability and deposit rules are, and how much customer history needs to be imported. SMS and payment providers also charge their own usage fees.",
      "We will compare a custom build against existing booking software during scoping, including monthly subscription costs over time, so you can choose with the full picture.",
    ],
    related: [
      { label: "Web applications and business systems", href: "/services/custom-web-applications/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Salon booking software", href: "/industries/salon-booking-software/" },
      { label: "Medical practice websites", href: "/industries/medical-practice-websites/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      {
        question: "Can customers pay a deposit when they book?",
        answer:
          "Yes. Deposits or full payments can run through a South African payment provider, along with the cancellation rules you choose. Refund options depend on what the provider supports.",
      },
      {
        question: "Will it work with several staff members and branches?",
        answer:
          "Yes. Each staff member or branch can have its own services, hours and availability, and customers only see the slots that genuinely apply.",
      },
      {
        question: "Can the system send WhatsApp reminders?",
        answer:
          "Email reminders are the simplest option. SMS and WhatsApp are possible through approved messaging providers, which charge their own fees and have their own rules. We confirm the best option during scoping.",
      },
      {
        question: "Can you add booking to my existing website?",
        answer:
          "Usually, yes. We review your site first and either connect the booking system to it or recommend a rebuild if the current setup would get in the way.",
      },
      {
        question: "Can existing customer records be moved across?",
        answer:
          "Yes, if your current system or spreadsheet can export the data. We check the quality of the data first and agree on what is worth bringing over.",
      },
    ],
    serviceType: "Online Booking System Development",
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    metaTitle: "SEO Services South Africa | Technical SEO & Content | SoftKore Digital",
    description:
      "SEO services for South African businesses: technical audits, indexing fixes, service page improvements and Search Console reporting, with no ranking guarantees.",
    eyebrow: "SEO Services",
    h1: "SEO Services for South African Businesses",
    intro:
      "We find out why your website is not being found, fix what is holding it back, and improve the pages that can bring you paying customers, with plain reporting on what changed.",
    primaryCta: "Request an SEO Review",
    secondaryCta: "Need a New Website?",
    secondaryHref: "/services/web-development/",
    summaryTitle: "SEO work can include",
    summary: [
      "Technical audits and indexing fixes",
      "Service page and content improvements",
      "Keyword and search intent research",
      "Google Business Profile guidance",
      "Monthly Search Console reporting",
    ],
    bodyHeading: "Find the actual problem before you spend on the solution.",
    body: [
      "Low traffic can have very different causes. Google may be unable to access your pages, or it may have crawled them and decided they are not worth indexing. Your pages may be indexed but target searches nobody makes, or they may rank on page five because stronger competitors have more authority. Each problem has a different fix, and a generic monthly SEO package rarely identifies which one applies to you.",
      "We start with your Google Search Console data and a full crawl of your website, so recommendations come from evidence. Then we prioritise the work most likely to bring enquiries, even if that means fixing or removing pages rather than publishing more.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits South African businesses with a real offer and a website that gets little search traffic, including sites that rank for the wrong terms, lost traffic after a redesign, or have many pages excluded from Google. It works best when you can share Search Console access and honest information about your customers.",
      "SEO is not the right first step for everyone. If your site needs rebuilding, or you need enquiries this month, a rebuild or paid campaign may be a better place to start, and we will tell you if that is the case.",
    ],
    featureTitle: "What Our SEO Work Covers",
    featureIntro:
      "SEO has to address technical health, content quality and authority together. Improving only one of them rarely moves results for long.",
    features: [
      {
        title: "Technical SEO audit",
        text: "We check indexing, crawl paths, redirects, canonicals, sitemaps, speed and mobile usability across your whole site, not just a sample.",
      },
      {
        title: "Indexing recovery",
        text: "We investigate pages marked \"Crawled - currently not indexed\" or \"Discovered - currently not indexed\", and decide what to improve, merge or remove.",
      },
      {
        title: "Service page improvements",
        text: "We rewrite your commercial pages so they answer buyer questions and match what people are actually searching for.",
      },
      {
        title: "Keyword and intent research",
        text: "We identify searches that indicate a real buyer in your market, then map each one to a single page to avoid pages competing with each other.",
      },
      {
        title: "Local and national visibility",
        text: "We advise on your Google Business Profile, directory listings and reviews, whether you serve one town or the whole country.",
      },
      {
        title: "Reporting you can read",
        text: "Each month you see what was done, what changed in Search Console, and what comes next, without jargon or vanity metrics.",
      },
    ],
    southAfricaHeading: "What SEO looks like in South Africa",
    southAfrica: [
      "South African search results have their own competitors and their own habits. National searches are often dominated by directories, large agencies and established brands, so a realistic plan looks at what you can win now as well as what will take longer to build.",
      "Search behaviour also varies. People may search for \"Joburg\" rather than \"Johannesburg\", or include \"near me\" or a province name, and many searches happen on phones. We use your own search data to see how your customers actually phrase things.",
      "We also take a firm line on location pages. Publishing hundreds of near-identical pages with only the town name changed is a well-known way to get pages dropped from Google. We would rather build a few strong pages than many weak ones, and we only add location content where there is something genuinely useful to say.",
    ],
    processTitle: "How We Improve Search Visibility",
    processBody: [
      "SEO is ongoing work, but it should never be vague. Every stage has a clear output that you can check for yourself in Search Console.",
    ],
    processItems: [
      {
        title: "Audit",
        text: "We crawl your full site and review Search Console, your competitors and the pages that matter commercially.",
      },
      {
        title: "Prioritise",
        text: "You receive a ranked list of what is blocking results, with the reason behind each item.",
      },
      {
        title: "Fix and improve",
        text: "We fix technical issues, improve or merge weak pages, and strengthen internal links and content.",
      },
      {
        title: "Measure and repeat",
        text: "We track indexing, impressions, positions and enquiries, then use that evidence to choose the next piece of work.",
      },
    ],
    costHeading: "What affects the cost of SEO",
    cost: [
      "Cost depends on the size and condition of your site, how competitive your market is, and whether we are writing content and implementing changes or advising your existing team. A once-off audit is a low-risk way to start before you commit to anything monthly.",
      "Be careful with very cheap packages that promise fixed rankings or large numbers of links. Bought links and mass-produced content can leave you with a problem that costs more to fix than the service did.",
    ],
    related: [
      { label: "Why your website is not ranking", href: "/guides/why-your-website-is-not-ranking/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Digital marketing and conversion", href: "/services/digital-marketing-conversion/" },
    ],
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer:
          "Technical fixes can be picked up within weeks, but meaningful ranking improvements usually take several months, and longer in competitive markets. Anyone promising a fixed timeline is guessing.",
      },
      {
        question: "Can you guarantee first-page rankings on Google?",
        answer:
          "No, and you should be wary of anyone who does. Google controls its results. We can guarantee clear work, honest reporting and decisions based on your data.",
      },
      {
        question: "Why are my pages not being indexed by Google?",
        answer:
          "Common causes include technical blocks, thin or duplicated content, weak internal linking and low site authority. Search Console shows the reason Google gives for each page, which is where we start.",
      },
      {
        question: "Can you do SEO for a business anywhere in South Africa?",
        answer:
          "Yes. We work remotely, whether you serve one town or the whole country. The strategy differs, since a national business and a local one compete for very different searches.",
      },
      {
        question: "Do I need more pages or blog posts to rank?",
        answer:
          "Not automatically. Adding pages can make things worse if the existing ones are weak. We often improve or merge what you already have first, and only add content that answers a distinct search need.",
      },
      {
        question: "What access do you need to get started?",
        answer:
          "Google Search Console is the most useful. Analytics and access to your website or developer help too. If Search Console is not set up yet, we can guide you through it.",
      },
    ],
    serviceType: "Search Engine Optimisation",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    metaTitle: "Website Maintenance Services South Africa | SoftKore Digital",
    description:
      "Website maintenance services for South African businesses: updates, backups, security checks, bug fixes, form testing and monthly reporting. Sites we did not build included.",
    eyebrow: "Website Maintenance",
    h1: "Website Maintenance Services for South African Businesses",
    intro:
      "We keep your website secure, working and up to date, so you are not the one who discovers that your contact form stopped working three weeks ago.",
    primaryCta: "Start a Support Plan",
    secondaryCta: "See the Monthly Checklist",
    secondaryHref: "/guides/website-maintenance-checklist/",
    summaryTitle: "Maintenance can include",
    summary: [
      "Software and security updates",
      "Backups and restore checks",
      "Bug fixes and content changes",
      "Contact form and link testing",
      "SEO and performance monitoring",
    ],
    bodyHeading: "Websites rarely break all at once. They drift.",
    body: [
      "A plugin update breaks a page layout. An email change means enquiries stop arriving. Old prices stay online, a staff member who left is still listed, and a security update gets missed for months. None of it looks urgent until a customer complains, you get hacked, or you notice the enquiries have dried up.",
      "Maintenance gives your website a regular routine. Updates happen on schedule, problems are caught early, and small improvements get done instead of piling up until a full rebuild feels like the only option.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits businesses that rely on their website for enquiries, bookings or sales but have no one looking after it. That includes owners whose original developer is no longer available and teams who keep putting off small changes because nobody has the time or access.",
      "We can usually take on websites we did not build, including WordPress sites. We review the site, hosting and access first and tell you about any risks before you sign up.",
    ],
    featureTitle: "What Maintenance Covers",
    featureIntro:
      "We agree on the scope up front according to how your site is built and how much it matters to your business.",
    features: [
      {
        title: "Updates",
        text: "We keep your CMS, plugins, themes and dependencies current, and check that nothing broke afterwards.",
      },
      {
        title: "Backups",
        text: "Regular backups are stored separately from your site. We also check that they can actually be restored.",
      },
      {
        title: "Security checks",
        text: "We review user access, software vulnerabilities, SSL certificates and suspicious activity, and tighten what needs attention.",
      },
      {
        title: "Fixes and content changes",
        text: "We fix broken layouts and errors, and update your services, prices, team details and images when you send them through.",
      },
      {
        title: "Form and journey testing",
        text: "We test your contact forms, WhatsApp and call links, bookings and checkout, because a broken form quietly costs you business.",
      },
      {
        title: "SEO and performance monitoring",
        text: "We watch Search Console for indexing problems, broken pages and speed issues, then report on what we find and fix.",
      },
    ],
    southAfricaHeading: "Support that suits South African businesses",
    southAfrica: [
      "You deal with people in your own time zone, in rand, and all support is remote, so it makes no difference which province you are in. Send change requests by email or WhatsApp and you will have a clear record of what was asked for and what was done.",
      "Keeping sites light matters here, since many visitors browse on mobile data. Maintenance includes watching page weight, because images and plugins tend to slow a site down gradually over time.",
      "We also check that your privacy notice and forms still reflect how you collect personal information under POPIA. That is a practical check, not legal advice.",
    ],
    processTitle: "How Maintenance Works",
    processBody: [
      "Before anything else, we need to know what we are looking after. After that, the work settles into a predictable monthly routine.",
    ],
    processItems: [
      {
        title: "Website review",
        text: "We check your site, hosting, access, backups and any existing problems, then agree on the scope.",
      },
      {
        title: "Secure handover",
        text: "We set up our own access, take a full backup and record how your site is set up.",
      },
      {
        title: "Monthly care",
        text: "We run updates, backups, security checks and journey tests, and work through your change requests.",
      },
      {
        title: "Plain reporting",
        text: "You get a short summary of completed work, issues found and what we recommend next.",
      },
    ],
    costHeading: "What affects the cost of website maintenance",
    cost: [
      "The main factors are how your site is built, how many plugins or integrations it uses, whether it handles bookings or payments, and how many content changes you need each month. An online store naturally needs more attention than a small brochure website.",
      "Also check what a cheaper plan leaves out. A plan without tested backups or journey checks can look like good value until the day you actually need help.",
    ],
    related: [
      { label: "Monthly website maintenance checklist", href: "/guides/website-maintenance-checklist/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Web applications and business systems", href: "/services/custom-web-applications/" },
      { label: "Why your website is not ranking", href: "/guides/why-your-website-is-not-ranking/" },
    ],
    faqs: [
      {
        question: "How often should a website be maintained?",
        answer:
          "Most business websites should be checked at least monthly. Online stores, booking sites and sites with many plugins often need more frequent attention.",
      },
      {
        question: "Can you maintain a website you did not build?",
        answer:
          "Usually, yes. We review the site, hosting and access first, and explain any risks before you commit. Occasionally a rebuild is the more sensible option, and we will tell you if so.",
      },
      {
        question: "Do you maintain WordPress websites?",
        answer:
          "Yes. Many business websites run on WordPress, and it needs regular updates because outdated plugins are a common security risk.",
      },
      {
        question: "My website has been hacked. Can you help?",
        answer:
          "Contact us and we will assess the damage, clean or restore the site where possible, and close the security gaps. Recent backups make this much easier, which is one reason they are part of maintenance.",
      },
      {
        question: "Does maintenance include SEO?",
        answer:
          "It includes monitoring for technical problems such as indexing drops and broken pages. Work to improve rankings, such as rewriting content, is a separate SEO service, although the two work well together.",
      },
      {
        question: "Is maintenance a replacement for a redesign?",
        answer:
          "No. Maintenance keeps a sound website healthy. If the structure or content is fundamentally weak, updates alone will not solve that, and we will recommend a rebuild.",
      },
    ],
    serviceType: "Website Maintenance",
  },
  {
    slug: "digital-marketing-conversion",
    title: "Digital Marketing & Conversion",
    metaTitle: "Digital Marketing & Conversion Services South Africa | SoftKore Digital",
    description:
      "Digital marketing and conversion services for South African businesses: landing pages, campaign planning, tracking and conversion reviews that turn visits into enquiries.",
    eyebrow: "Digital Marketing & Conversion",
    h1: "Digital Marketing and Conversion Services in South Africa",
    intro:
      "We connect your campaigns, landing pages and tracking so you can see which marketing brings in enquiries and fix the places where interested people drop off.",
    primaryCta: "Start a Growth Project",
    secondaryCta: "See SEO Services",
    secondaryHref: "/services/seo-services/",
    summaryTitle: "Growth work can include",
    summary: [
      "Campaign and landing page strategy",
      "Conversion reviews of your site",
      "Analytics and event tracking",
      "Enquiry and follow-up journeys",
      "Reporting and ongoing improvement",
    ],
    bodyHeading: "More traffic will not fix a page that does not convert.",
    body: [
      "Many businesses pay for clicks that land on a homepage with no clear offer, a long form and no way to tell whether the advertising worked. Sending more traffic to that setup simply makes the waste bigger.",
      "We look at the whole journey: the audience and offer, the ad or search result, the landing page, the form or WhatsApp click, and what happens once the enquiry arrives. Fixing the weakest link often does more than raising the budget.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits businesses that are advertising without clear results, getting website traffic but few enquiries, or planning a campaign and wanting tracking in place before spending money.",
      "If you have no clear offer yet or your website is not ready, we will suggest fixing that first. A campaign cannot make up for a weak offer.",
    ],
    featureTitle: "How We Support Growth",
    featureIntro:
      "This can be a single focused campaign or ongoing work, depending on your market, budget and internal capacity.",
    features: [
      {
        title: "Campaign planning",
        text: "We define the audience, offer, channels, budget and what success looks like before any money is spent.",
      },
      {
        title: "Landing pages",
        text: "We build pages that match the promise in your ad and focus on one clear action.",
      },
      {
        title: "Conversion reviews",
        text: "We find what is stopping people on your site, whether that is confusing copy, long forms, slow pages or weak proof.",
      },
      {
        title: "Tracking setup",
        text: "We set up tracking for form submissions, calls, WhatsApp clicks, bookings and purchases, and verify that it works.",
      },
      {
        title: "Enquiry follow-up",
        text: "We help route enquiries to the right person quickly, with confirmation and follow-up steps, because response time affects sales.",
      },
      {
        title: "Ongoing improvement",
        text: "We review the data regularly and adjust messages, pages and budgets based on what is actually working.",
      },
    ],
    southAfricaHeading: "Marketing in the South African context",
    southAfrica: [
      "Budgets are often tight, so we focus on measuring cost per enquiry rather than reach. Google Ads, Meta and LinkedIn each suit different goals, and the right mix depends on whether your customers are already searching for what you offer.",
      "Mobile behaviour matters too. Many South African customers want to act immediately through a WhatsApp or call button, so we track those clicks as properly as we track forms. If you market to existing contacts, POPIA's direct marketing rules apply, so we plan your consent and opt-out handling from the start.",
      "We run this work remotely for businesses anywhere in the country, including those targeting specific provinces or national audiences.",
    ],
    processTitle: "How We Build a Growth Programme",
    processBody: [
      "We begin with the business result you want and work backwards. Tracking goes in first, so the results can be trusted.",
    ],
    processItems: [
      {
        title: "Define the outcome",
        text: "We agree on the audience, offer, action, budget and the numbers that will show whether it is working.",
      },
      {
        title: "Build the journey",
        text: "We shape the campaign message, landing page, form or WhatsApp action, and follow-up path.",
      },
      {
        title: "Launch and measure",
        text: "We launch with tracking in place and verify that key actions are recorded correctly.",
      },
      {
        title: "Learn and improve",
        text: "We review the evidence, remove what is not working and put more effort behind what is.",
      },
    ],
    costHeading: "What affects the cost of digital marketing",
    cost: [
      "There are two separate costs: the media budget you pay to platforms such as Google or Meta, and the fee for planning, building and managing the work. Always ask which of these a quote includes.",
      "Your total will depend on how competitive your market is, how many campaigns and landing pages you need, and how much reporting and ongoing management you want. Starting with a small tracked test is often the most sensible way to learn before spending more.",
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Online booking systems", href: "/services/booking-customer-management/" },
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      {
        question: "Do you guarantee marketing results?",
        answer:
          "No. Results depend on your offer, audience, competition, budget and channel. We commit to sound planning, accurate tracking and honest reporting, and we make decisions from the evidence.",
      },
      {
        question: "Should I use SEO or paid ads?",
        answer:
          "Paid ads can bring traffic quickly but stop when the budget stops. SEO takes longer but can keep bringing visitors. Many businesses use ads to learn and generate early enquiries while building SEO over time.",
      },
      {
        question: "Can you improve my existing landing page?",
        answer:
          "Yes. We review its message, structure, calls to action, forms, speed, mobile experience and tracking, and then prioritise the changes most likely to help.",
      },
      {
        question: "Can you track WhatsApp clicks and calls?",
        answer:
          "Yes. Clicks on WhatsApp and call buttons can be tracked as events. Knowing what happened after the click depends on your follow-up process, so we help set up simple ways to record that too.",
      },
      {
        question: "What budget do I need to start advertising?",
        answer:
          "It varies by market, because competitive keywords cost much more per click. We look at your market first and suggest a test budget big enough to learn something useful.",
      },
    ],
    serviceType: "Digital Marketing and Conversion",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
