export type IndustryPage = {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  audience: string;
  challenge: string;
  solution: string;
  summary: string[];
  opportunities: Array<{ title: string; text: string }>;
  features: Array<{ title: string; text: string }>;
  proof: Array<{ title: string; text: string }>;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  priority: number;
};

const baseIndustries: IndustryPage[] = [
  {
    slug: "salon-booking-software",
    name: "Salon Booking Software",
    category: "Health, Beauty and Wellness",
    metaTitle: "Salon Booking Software Developers South Africa | SoftKore Digital",
    description:
      "Salon booking software and beauty business websites for South African salons, spas, nail bars, clinics, and mobile beauty professionals.",
    h1: "Salon Booking Software and Beauty Business Websites",
    intro:
      "SoftKore Digital helps salons and beauty businesses turn treatment menus, bookings, enquiries, galleries, and client communication into a clearer digital experience.",
    audience:
      "salons, spas, nail bars, barbers, aesthetic clinics, mobile beauty professionals, and beauty service teams",
    challenge:
      "clients compare treatments, prices, location, trust, availability, and booking convenience before making contact",
    solution:
      "a polished website or booking platform with treatment menus, online booking requests, staff profiles, galleries, local SEO, and fast mobile contact paths",
    summary: [
      "Treatment menus",
      "Online booking",
      "WhatsApp enquiries",
      "Before-and-after galleries",
      "Local SEO foundations",
    ],
    opportunities: [
      {
        title: "Booking flow",
        text: "Let clients request appointments, choose services, send details, and move from interest to enquiry without waiting for a back-and-forth conversation.",
      },
      {
        title: "Service clarity",
        text: "Treatment pages can explain duration, preparation, aftercare, pricing signals, and who each service is best for.",
      },
      {
        title: "Local visibility",
        text: "Beauty businesses can target high-intent local searches with useful service and area pages instead of thin suburb pages.",
      },
    ],
    features: [
      {
        title: "Treatment menu pages",
        text: "Organize treatments into clear pages with descriptions, common questions, pricing signals, and booking prompts.",
      },
      {
        title: "Online booking requests",
        text: "Create a booking journey that captures service, preferred time, client details, and follow-up requirements.",
      },
      {
        title: "Stylist or therapist profiles",
        text: "Introduce staff, specialties, credentials, and experience so clients can choose with more confidence.",
      },
      {
        title: "Before-and-after galleries",
        text: "Show real results in a structured, fast-loading format that builds trust before a client books.",
      },
      {
        title: "WhatsApp and mobile contact",
        text: "Make it easy for mobile visitors to ask quick questions while they are still ready to act.",
      },
      {
        title: "Local SEO structure",
        text: "Connect service, location, and treatment-intent pages carefully so the site can grow without becoming duplicated.",
      },
    ],
    proof: [
      {
        title: "Client-first UX",
        text: "The page flow is shaped around how beauty clients compare treatments and decide whether to book.",
      },
      {
        title: "Admin awareness",
        text: "Booking requests, follow-ups, and treatment information can be planned around the team’s daily workflow.",
      },
      {
        title: "Search-ready content",
        text: "Treatment pages and local pages are planned around useful search intent, not repeated location keywords.",
      },
      {
        title: "Room to expand",
        text: "A salon site can start with core pages and grow into booking tools, memberships, products, or local SEO pages.",
      },
    ],
    related: [
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Sandton SEO services", href: "/services/seo-services/gauteng/sandton/" },
    ],
    faqs: [
      {
        question: "Can you build custom salon booking software?",
        answer:
          "Yes. We can plan booking requests, admin dashboards, staff roles, client details, notifications, and follow-up workflows around the way the salon operates.",
      },
      {
        question: "Does a salon still need a website if it uses WhatsApp?",
        answer:
          "Yes. WhatsApp is useful for quick contact, but a website gives clients treatment details, trust signals, local search visibility, and a clearer path before they message.",
      },
      {
        question: "Can salon pages support local SEO?",
        answer:
          "Yes. Treatment pages, area pages, FAQs, and internal links can be planned carefully so the content helps real clients and search engines.",
      },
    ],
    priority: 0.82,
  },
  {
    slug: "ecommerce-development",
    name: "Ecommerce Development",
    category: "Retail and Commerce",
    metaTitle: "Ecommerce Website Development South Africa | SoftKore Digital",
    description:
      "Ecommerce website development in South Africa for product brands, online stores, B2B sellers, and retailers that need fast checkout and product SEO.",
    h1: "Ecommerce Website Development for South African Businesses",
    intro:
      "SoftKore Digital builds ecommerce websites and product platforms that help customers find products, trust the store, checkout easily, and return with confidence.",
    audience:
      "online stores, product brands, wholesalers, B2B sellers, niche retailers, and growing ecommerce teams",
    challenge:
      "customers need fast product discovery, trust, clear delivery information, easy checkout, and post-purchase confidence",
    solution:
      "an ecommerce platform with product pages, payment integration, inventory structure, analytics, technical SEO, and performance-focused implementation",
    summary: ["Product catalogues", "Checkout flows", "Payment integration", "Product SEO", "Analytics"],
    opportunities: [
      {
        title: "Product discovery",
        text: "Categories, filters, product pages, and search behaviour should help customers find the right item quickly.",
      },
      {
        title: "Checkout confidence",
        text: "Delivery information, payment options, trust signals, returns content, and clear checkout steps reduce friction.",
      },
      {
        title: "Product SEO",
        text: "Product and category pages need clean metadata, structured content, internal links, and performance-minded assets.",
      },
    ],
    features: [
      {
        title: "Product catalogue structure",
        text: "Plan categories, filters, product detail pages, variant handling, and internal links before the build grows.",
      },
      {
        title: "Payment integration",
        text: "Connect suitable payment flows and make the transaction step clear for customers.",
      },
      {
        title: "Checkout optimization",
        text: "Reduce friction with clear cart steps, delivery notes, trust content, and mobile-friendly forms.",
      },
      {
        title: "Inventory and order workflows",
        text: "Plan the operational side so products, stock, orders, and notifications can be managed reliably.",
      },
      {
        title: "Analytics and conversion tracking",
        text: "Track product views, checkout movement, enquiries, and sales signals to guide future improvements.",
      },
      {
        title: "Technical SEO foundations",
        text: "Use clean URLs, metadata, structured data, fast pages, and sensible index rules for catalogue growth.",
      },
    ],
    proof: [
      {
        title: "Conversion focus",
        text: "The store is planned around product decisions, checkout trust, and repeat customer behaviour.",
      },
      {
        title: "Operational fit",
        text: "Catalogue, order, payment, and admin needs are considered together rather than bolted on later.",
      },
      {
        title: "SEO-aware structure",
        text: "Category and product pages can be expanded without creating crawl waste or duplicated content.",
      },
      {
        title: "Scalable routes",
        text: "Next.js gives the store a clean foundation for static pages, metadata, and performance-minded growth.",
      },
    ],
    related: [
      { label: "Web development", href: "/services/web-development/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Cape Town SEO services", href: "/services/seo-services/western-cape/cape-town/" },
    ],
    faqs: [
      {
        question: "Can you build ecommerce websites in South Africa?",
        answer:
          "Yes. We can build ecommerce websites for product brands, retailers, wholesalers, and B2B sellers with product pages, checkout flows, analytics, and SEO foundations.",
      },
      {
        question: "Can ecommerce SEO be built into the site?",
        answer:
          "Yes. Category structure, product metadata, internal links, structured data, and performance are best planned from the start.",
      },
      {
        question: "Can an ecommerce platform start small?",
        answer:
          "Yes. A focused catalogue and checkout flow can launch first, then grow into more categories, integrations, automations, and reporting.",
      },
    ],
    priority: 0.82,
  },
  {
    slug: "medical-practice-websites",
    name: "Medical Practice Websites",
    category: "Healthcare",
    metaTitle: "Medical Practice Website Design South Africa | SoftKore Digital",
    description:
      "Medical practice website design for doctors, clinics, specialists, and healthcare groups that need service pages, appointment paths, and patient trust.",
    h1: "Medical Practice Website Design",
    intro:
      "SoftKore Digital builds medical practice websites that help patients understand services, trust the practice, find location details, and request appointments.",
    audience:
      "doctors, clinics, specialists, private practices, healthcare groups, and allied health providers",
    challenge:
      "patients need trustworthy information, clear services, location details, appointment paths, and confidence before booking",
    solution:
      "a professional medical website with service pages, practitioner profiles, patient FAQs, appointment requests, and strong technical foundations",
    summary: ["Doctor profiles", "Service pages", "Appointment requests", "Patient FAQs", "Technical SEO"],
    opportunities: [
      {
        title: "Patient trust",
        text: "Practitioner profiles, service explanations, qualifications, and clear contact details help patients feel safer before booking.",
      },
      {
        title: "Service clarity",
        text: "Treatment and service pages can answer common patient questions before the first call.",
      },
      {
        title: "Local healthcare search",
        text: "Patients often search by condition, treatment, provider type, and area. The page structure should support those journeys carefully.",
      },
    ],
    features: [
      {
        title: "Practitioner profiles",
        text: "Show doctors or clinicians, specialties, credentials, consultation details, and relevant trust signals.",
      },
      {
        title: "Service and condition pages",
        text: "Explain what the practice treats, when patients should enquire, and what they can expect next.",
      },
      {
        title: "Appointment requests",
        text: "Give patients a clear, low-friction way to request appointments or ask first questions.",
      },
      {
        title: "Patient FAQs",
        text: "Answer preparation, payment, referral, location, and appointment questions before they become phone calls.",
      },
      {
        title: "Location information",
        text: "Make address details, opening hours, parking notes, and contact options easy to find.",
      },
      {
        title: "Technical SEO",
        text: "Use clean metadata, schema, fast pages, and careful index rules for healthcare content.",
      },
    ],
    proof: [
      {
        title: "Careful content",
        text: "Healthcare pages should be clear and responsible, with patient support ahead of aggressive sales copy.",
      },
      {
        title: "Trust signals",
        text: "Profiles, FAQs, location details, and service explanations reduce uncertainty before booking.",
      },
      {
        title: "Mobile readiness",
        text: "Patients need quick access to call, directions, appointment requests, and essential service information.",
      },
      {
        title: "SEO discipline",
        text: "Medical SEO pages should be useful and accurate, not broad templated pages chasing every location.",
      },
    ],
    related: [
      { label: "Web development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Pretoria web development", href: "/services/web-development/gauteng/pretoria/" },
    ],
    faqs: [
      {
        question: "What should a medical practice website include?",
        answer:
          "It should include practitioner profiles, service pages, appointment paths, patient FAQs, location details, contact options, and strong technical SEO foundations.",
      },
      {
        question: "Can a medical website include appointment requests?",
        answer:
          "Yes. The site can include forms or flows that collect patient details, preferred times, and first questions while keeping the process clear.",
      },
      {
        question: "Can SEO help a medical practice?",
        answer:
          "Yes. SEO can help patients find relevant services when the site has useful pages, clean technical foundations, and responsible content.",
      },
    ],
    priority: 0.8,
  },
  {
    slug: "real-estate-websites",
    name: "Real Estate Websites",
    category: "Property",
    metaTitle: "Real Estate Website Developers South Africa | SoftKore Digital",
    description:
      "Real estate website development for agencies, brokers, and property teams that need listings, agent profiles, valuation forms, and lead capture.",
    h1: "Real Estate Website Development",
    intro:
      "SoftKore Digital builds real estate websites that help buyers, sellers, landlords, and tenants find property information and take the next step.",
    audience:
      "estate agencies, property brokers, rental agencies, letting agents, and property consultants",
    challenge:
      "buyers, sellers, landlords, and tenants need fast property discovery, trust, location relevance, and lead capture",
    solution:
      "a property website with listings, agent profiles, valuation forms, area content, lead capture, and performance-focused SEO",
    summary: ["Property listings", "Agent profiles", "Valuation forms", "Area pages", "Lead capture"],
    opportunities: [
      {
        title: "Lead capture",
        text: "Sellers and landlords need clear valuation, rental estimate, and contact paths that feel trustworthy.",
      },
      {
        title: "Property discovery",
        text: "Listings, filters, area information, and agent details should help visitors move quickly from browsing to enquiry.",
      },
      {
        title: "Area authority",
        text: "Useful area pages can support local property searches when they include real context and strong internal links.",
      },
    ],
    features: [
      {
        title: "Property listings",
        text: "Display properties with clean cards, useful filters, strong images, and clear enquiry actions.",
      },
      {
        title: "Agent profiles",
        text: "Show agent experience, areas served, contact details, and property focus.",
      },
      {
        title: "Valuation forms",
        text: "Capture seller and landlord leads with forms that ask useful questions without creating friction.",
      },
      {
        title: "Area pages",
        text: "Create location content that helps buyers and sellers understand neighbourhoods, not thin keyword pages.",
      },
      {
        title: "CRM integration planning",
        text: "Plan how enquiries, listings, and customer details can connect to the tools the agency already uses.",
      },
      {
        title: "Property SEO",
        text: "Build metadata, internal links, structured content, and fast pages around property search behaviour.",
      },
    ],
    proof: [
      {
        title: "Buyer journey",
        text: "The site helps visitors move from browsing to enquiry with clear property information and next actions.",
      },
      {
        title: "Seller intent",
        text: "Valuation and consultation paths can support high-value seller and landlord leads.",
      },
      {
        title: "Local relevance",
        text: "Area content is planned for usefulness and trust, not broad duplicated coverage.",
      },
      {
        title: "Operational fit",
        text: "Listings, enquiries, agents, and integrations are considered as part of the same system.",
      },
    ],
    related: [
      { label: "Web development", href: "/services/web-development/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Johannesburg web development", href: "/services/web-development/gauteng/johannesburg/" },
    ],
    faqs: [
      {
        question: "Can you build real estate websites with listings?",
        answer:
          "Yes. We can plan listings, filters, agent profiles, enquiry flows, valuation forms, and integrations based on the agency workflow.",
      },
      {
        question: "Can real estate websites support local SEO?",
        answer:
          "Yes. Area pages, property-type pages, and service pages can support search visibility when the content is useful and specific.",
      },
      {
        question: "Can the site connect to a CRM?",
        answer:
          "Yes. CRM integration can be scoped around listings, leads, agents, and the tools the agency already uses.",
      },
    ],
    priority: 0.78,
  },
  {
    slug: "legal-firm-seo-services",
    name: "Legal Firm SEO Services",
    category: "Professional Services",
    metaTitle: "Law Firm SEO Services South Africa | SoftKore Digital",
    description:
      "Law firm SEO services and legal website planning for South African attorneys, conveyancers, and specialist legal practices.",
    h1: "Law Firm SEO Services and Legal Website Planning",
    intro:
      "SoftKore Digital helps legal practices build clearer practice-area pages, stronger technical SEO, and confidential enquiry paths for serious clients.",
    audience:
      "attorneys, legal practices, conveyancers, labour law firms, family law firms, and specialist legal advisors",
    challenge:
      "clients need clarity, credibility, practice-area detail, location relevance, and a confidential path to contact the firm",
    solution:
      "a serious legal website and SEO structure with practice-area pages, attorney profiles, local relevance, enquiry forms, and helpful legal FAQs",
    summary: ["Practice-area pages", "Attorney profiles", "Confidential enquiries", "Local SEO", "Content planning"],
    opportunities: [
      {
        title: "Practice-area intent",
        text: "Legal search often starts with a specific matter. Practice-area pages should explain fit, process, urgency, and next steps clearly.",
      },
      {
        title: "Trust and confidentiality",
        text: "Attorney profiles, clear contact paths, and careful wording help clients feel safer before sending sensitive details.",
      },
      {
        title: "Local legal SEO",
        text: "Location pages can help, but only when they add real context around legal service fit and client needs.",
      },
    ],
    features: [
      {
        title: "Practice-area pages",
        text: "Explain services such as conveyancing, labour law, commercial law, family law, or litigation in client-friendly language.",
      },
      {
        title: "Attorney profiles",
        text: "Show experience, focus areas, qualifications, and contact paths for the people behind the firm.",
      },
      {
        title: "Confidential enquiry forms",
        text: "Give prospects a careful way to submit first details without overcomplicating the contact process.",
      },
      {
        title: "Legal FAQs",
        text: "Answer common process, document, timing, and consultation questions without pretending to provide case-specific advice.",
      },
      {
        title: "Technical SEO",
        text: "Review metadata, canonicals, indexing, internal links, sitemap visibility, and page quality.",
      },
      {
        title: "Content planning",
        text: "Plan useful guides and service pages around real client questions, not random legal blog topics.",
      },
    ],
    proof: [
      {
        title: "Serious tone",
        text: "Legal pages need clarity and credibility rather than over-designed marketing fluff.",
      },
      {
        title: "Search intent alignment",
        text: "Practice-area pages are mapped to the way clients search and evaluate firms.",
      },
      {
        title: "Safe schema use",
        text: "Structured data describes real page content and avoids unsupported review or rating claims.",
      },
      {
        title: "Measured expansion",
        text: "Legal SEO should scale from strong service pages into selected locations and guides only when each page is useful.",
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Sandton SEO services", href: "/services/seo-services/gauteng/sandton/" },
    ],
    faqs: [
      {
        question: "Can SEO help a South African law firm?",
        answer:
          "Yes. SEO can help when the firm has useful practice-area pages, strong technical foundations, clear internal links, and careful location targeting.",
      },
      {
        question: "What should a legal website include?",
        answer:
          "It should include practice-area pages, attorney profiles, contact paths, confidentiality cues, useful FAQs, location information, and clear next steps.",
      },
      {
        question: "Do legal pages need special content care?",
        answer:
          "Yes. Legal content should be accurate, careful, and helpful without making unsupported claims or pretending to offer case-specific advice.",
      },
    ],
    priority: 0.8,
  },
];

const additionalIndustries: IndustryPage[] = [
  {
    slug: "dental-practice-websites",
    name: "Dental Practice Websites",
    category: "Healthcare",
    metaTitle: "Dental Practice Website Design South Africa | SoftKore Digital",
    description:
      "Dental practice website design for dentists, orthodontists, and cosmetic dental clinics that need treatment pages, booking paths, and local SEO.",
    h1: "Dental Practice Website Design",
    intro:
      "SoftKore Digital builds dental websites that explain treatments, build patient trust, and make appointment enquiries easier.",
    audience:
      "dentists, orthodontists, cosmetic dental clinics, oral hygienists, and dental practices",
    challenge:
      "patients compare treatments, pricing signals, emergency availability, reviews, location, and trust before booking",
    solution:
      "a dental website with treatment pages, emergency dental content, appointment forms, patient FAQs, reviews, and local SEO foundations",
    summary: ["Treatment pages", "Emergency dental pages", "Appointment forms", "Patient FAQs", "Local SEO"],
    opportunities: [
      { title: "Treatment clarity", text: "Explain procedures, suitability, preparation, recovery, and next steps in patient-friendly language." },
      { title: "Emergency search", text: "Urgent dental searches need fast contact options, location clarity, and clear service availability." },
      { title: "Patient trust", text: "Profiles, FAQs, reviews, and treatment information reduce anxiety before the first appointment." },
    ],
    features: [
      { title: "Treatment pages", text: "Create clear pages for cosmetic, restorative, orthodontic, hygiene, and emergency dental services." },
      { title: "Appointment requests", text: "Let patients request bookings and share first details without a complicated flow." },
      { title: "Dentist profiles", text: "Show qualifications, areas of focus, experience, and approachable trust signals." },
      { title: "Emergency dental content", text: "Help urgent visitors understand when to contact the practice and what to do next." },
      { title: "Patient FAQs", text: "Answer common questions around cost signals, timing, preparation, and follow-up care." },
      { title: "Local SEO structure", text: "Plan service and area pages carefully so nearby patients can find useful information." },
    ],
    proof: [
      { title: "Patient-first content", text: "Dental pages need to reduce uncertainty and make the next step feel simple." },
      { title: "Mobile contact", text: "Call, WhatsApp, map, and appointment paths should be easy to use on mobile." },
      { title: "Treatment SEO", text: "Search visibility can grow from useful treatment pages instead of broad duplicated location pages." },
      { title: "Maintenance ready", text: "Treatment details, team info, and practice details can be kept current over time." },
    ],
    related: [
      { label: "Medical practice websites", href: "/industries/medical-practice-websites/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "What should a dental website include?", answer: "It should include treatment pages, dentist profiles, appointment paths, emergency information, patient FAQs, reviews, and clear location details." },
      { question: "Can dental websites target local searches?", answer: "Yes. Treatment and area pages can support local SEO when they answer real patient questions and avoid duplicated copy." },
      { question: "Can appointment enquiries be added?", answer: "Yes. The site can include appointment request forms, call links, WhatsApp links, and tracking for enquiry sources." },
    ],
    priority: 0.76,
  },
  {
    slug: "accounting-firm-websites",
    name: "Accounting Firm Websites",
    category: "Professional Services",
    metaTitle: "Accounting Firm Website Design South Africa | SoftKore Digital",
    description:
      "Accounting firm website design for accountants, tax consultants, bookkeepers, payroll providers, and advisory firms.",
    h1: "Accounting Firm Website Design",
    intro:
      "SoftKore Digital builds service-led websites for accounting and tax firms that need clearer packages, stronger trust, and better enquiry paths.",
    audience:
      "accountants, tax consultants, payroll providers, bookkeepers, and advisory firms",
    challenge:
      "business clients compare trust, compliance knowledge, service scope, pricing signals, and ongoing support before making contact",
    solution:
      "a professional accounting website with service packages, tax pages, lead forms, resources, local relevance, and SEO monitoring",
    summary: ["Service packages", "Tax pages", "Lead forms", "Resource pages", "SEO monitoring"],
    opportunities: [
      { title: "Package clarity", text: "Show services and package fit so business owners can understand what they need before enquiring." },
      { title: "Compliance trust", text: "Trust signals, FAQs, and resource content help clients feel confident about tax and accounting support." },
      { title: "Qualified leads", text: "Enquiry forms can capture business type, needs, urgency, and current accounting setup." },
    ],
    features: [
      { title: "Service package pages", text: "Explain monthly accounting, tax, payroll, advisory, and bookkeeping services clearly." },
      { title: "Lead forms", text: "Capture the details needed to qualify enquiries and route them to the right service." },
      { title: "Resource pages", text: "Answer recurring compliance and business questions that support SEO and trust." },
      { title: "Client onboarding", text: "Guide new clients through documents, expectations, timelines, and next steps." },
      { title: "Local SEO", text: "Support selected local searches with useful location-aware content." },
      { title: "Reporting and tracking", text: "Monitor enquiries and search performance so the website keeps improving." },
    ],
    proof: [
      { title: "Service-led structure", text: "Pages are organized around accounting services and client questions." },
      { title: "Trust-first copy", text: "Professional services need credibility and clarity more than flashy claims." },
      { title: "Search support", text: "Tax and accounting guides can connect to service pages and enquiry paths." },
      { title: "Conversion paths", text: "Calls to action help business owners take the next step without friction." },
    ],
    related: [
      { label: "Legal firm SEO services", href: "/industries/legal-firm-seo-services/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website prices", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      { question: "What should an accounting firm website include?", answer: "It should include service pages, package information, trust signals, enquiry forms, resources, FAQs, and clear contact paths." },
      { question: "Can SEO help accounting firms?", answer: "Yes. Service pages, local content, and practical resources can capture searches from business owners comparing support." },
      { question: "Can the website help qualify leads?", answer: "Yes. Forms can ask about business size, service needs, current systems, and urgency." },
    ],
    priority: 0.74,
  },
  {
    slug: "construction-company-websites",
    name: "Construction Company Websites",
    category: "Construction and Trades",
    metaTitle: "Construction Company Website Design South Africa | SoftKore Digital",
    description:
      "Construction company website design for builders, contractors, renovation companies, civil contractors, and construction suppliers.",
    h1: "Construction Company Website Design",
    intro:
      "SoftKore Digital builds construction websites that show capability, project proof, service scope, and a clear quote path.",
    audience:
      "builders, contractors, renovation companies, civil contractors, construction suppliers, and trade teams",
    challenge:
      "clients need proof of capability, project examples, service scope, safety signals, and a clear quote path",
    solution:
      "a construction website with project portfolios, service pages, quote forms, supplier information, credentials, and local SEO foundations",
    summary: ["Project portfolios", "Service pages", "Quote requests", "Safety credentials", "Local SEO"],
    opportunities: [
      { title: "Project proof", text: "Completed work, project types, sectors, and capabilities can build trust quickly." },
      { title: "Quote intent", text: "Serious prospects need a clear way to describe scope, location, budget signals, and timing." },
      { title: "Service-area SEO", text: "Construction searches often combine service, area, and project type, but pages must remain useful." },
    ],
    features: [
      { title: "Project portfolios", text: "Show projects with sector, service type, location, and outcome-focused notes." },
      { title: "Service pages", text: "Explain construction, renovation, commercial, civil, or specialist services clearly." },
      { title: "Quote forms", text: "Capture scope, location, timeline, and contact details for better first conversations." },
      { title: "Credentials and safety", text: "Show compliance, safety, supplier, and capability signals where relevant." },
      { title: "Supplier pages", text: "Help B2B buyers understand materials, capacity, and project fit." },
      { title: "Local SEO", text: "Plan area pages around real service coverage and proof." },
    ],
    proof: [
      { title: "Capability clarity", text: "Visitors should quickly understand what kinds of projects the company handles." },
      { title: "Proof before contact", text: "Project examples and service details help clients decide whether to enquire." },
      { title: "Better quote requests", text: "Structured forms improve enquiry quality and reduce repeated admin." },
      { title: "SEO discipline", text: "Service and area pages should be useful before they are optimized." },
    ],
    related: [
      { label: "Web development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Gauteng web development", href: "/services/web-development/gauteng/" },
    ],
    faqs: [
      { question: "What should a construction website include?", answer: "It should include service pages, project portfolios, credentials, quote forms, service areas, and strong contact paths." },
      { question: "Can construction websites generate better leads?", answer: "Yes. Clear project proof and structured quote forms can improve enquiry quality." },
      { question: "Can local SEO help contractors?", answer: "Yes, when service-area pages include useful project and service context instead of repeated location copy." },
    ],
    priority: 0.76,
  },
  {
    slug: "plumber-websites",
    name: "Plumber Websites",
    category: "Construction and Trades",
    metaTitle: "Plumber Website Design and SEO South Africa | SoftKore Digital",
    description:
      "Plumber website design and SEO for plumbing companies, emergency plumbers, maintenance teams, and leak detection specialists.",
    h1: "Plumber Website Design and SEO",
    intro:
      "SoftKore Digital builds plumbing websites that support urgent searches, local service pages, fast contact, and practical quote requests.",
    audience:
      "plumbing companies, emergency plumbers, maintenance teams, leak detection specialists, and trade service businesses",
    challenge:
      "customers search urgently and need location relevance, trust, service clarity, and fast contact options",
    solution:
      "a plumber website with emergency pages, service-area content, call buttons, WhatsApp contact, reviews, quote forms, and local SEO",
    summary: ["Emergency pages", "Service-area content", "Call buttons", "WhatsApp enquiries", "Local SEO"],
    opportunities: [
      { title: "Urgent contact", text: "Emergency plumbing visitors need fast call, WhatsApp, and location reassurance." },
      { title: "Service pages", text: "Leak detection, geysers, drains, maintenance, and installations should have clear pages." },
      { title: "Local search", text: "Plumbing SEO depends heavily on area relevance and trust, but duplicated suburb pages are risky." },
    ],
    features: [
      { title: "Emergency plumbing pages", text: "Help urgent visitors understand services, response expectations, and contact options." },
      { title: "Service-area pages", text: "Build selected local pages with useful context and clear service fit." },
      { title: "Call and WhatsApp actions", text: "Make mobile contact immediate and obvious." },
      { title: "Quote forms", text: "Capture issue type, area, urgency, photos, and contact details." },
      { title: "Trust signals", text: "Show reviews, guarantees, qualifications, and service clarity where available." },
      { title: "SEO monitoring", text: "Track important pages and local search movement over time." },
    ],
    proof: [
      { title: "Fast decisions", text: "Plumbing visitors often decide quickly, so the page must answer and route fast." },
      { title: "Service clarity", text: "Specific service pages help avoid vague trade websites." },
      { title: "Local discipline", text: "Only useful local pages should be created and indexed." },
      { title: "Mobile-first build", text: "Most urgent visitors will be on phones." },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "Can SEO help plumbing businesses?", answer: "Yes. Plumbing SEO can capture urgent and local searches when service pages, local relevance, and contact paths are strong." },
      { question: "Should plumbers create pages for every suburb?", answer: "No. Start with priority areas and create pages only where useful local content can be written." },
      { question: "What contact options should plumber websites include?", answer: "Call links, WhatsApp, quote forms, photos, service-area details, and emergency contact prompts are useful." },
    ],
    priority: 0.74,
  },
  {
    slug: "logistics-company-websites",
    name: "Logistics Company Websites",
    category: "Logistics and Industrial",
    metaTitle: "Logistics Company Website Design South Africa | SoftKore Digital",
    description:
      "Logistics company website design for transport, courier, freight, warehouse, and supply chain businesses that need B2B credibility and quote workflows.",
    h1: "Logistics Company Website Design",
    intro:
      "SoftKore Digital builds logistics websites and portals that explain capabilities, capture quote requests, and support B2B trust.",
    audience:
      "logistics companies, transport operators, courier teams, freight businesses, warehouses, and supply chain providers",
    challenge:
      "B2B clients compare service coverage, reliability, fleet or capacity, quote speed, systems, and operational trust before enquiring",
    solution:
      "a logistics website or portal with service pages, quote workflows, customer portals, tracking integration planning, and technical SEO",
    summary: ["Service pages", "Quote workflows", "Customer portals", "Tracking integrations", "B2B SEO"],
    opportunities: [
      { title: "B2B capability", text: "Service pages should explain routes, capacity, industries served, fleet signals, and operational fit." },
      { title: "Quote workflow", text: "Structured quote forms can capture shipment type, route, volume, timing, and contact details." },
      { title: "Portal potential", text: "Repeat customers may need dashboards, document uploads, status updates, or reporting." },
    ],
    features: [
      { title: "Service pages", text: "Explain courier, freight, warehousing, distribution, or specialist logistics services." },
      { title: "Quote request flows", text: "Capture route, cargo, urgency, volume, and service requirements." },
      { title: "Client portals", text: "Plan secure areas for documents, updates, requests, or reporting." },
      { title: "Admin dashboards", text: "Support internal management of enquiries, customers, and operational records." },
      { title: "Integration planning", text: "Plan around tracking, CRM, accounting, email, or third-party logistics systems." },
      { title: "Technical SEO", text: "Build clean service and industry pages without bloating the crawl footprint." },
    ],
    proof: [
      { title: "B2B trust", text: "Logistics buyers need confidence in reliability, coverage, and operational capability." },
      { title: "Workflow-first thinking", text: "Quote and portal features are planned around real operational steps." },
      { title: "Clear services", text: "The site should explain exactly what kinds of logistics work the company handles." },
      { title: "Scalable systems", text: "The website can grow into customer portals or dashboards when needed." },
    ],
    related: [
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development", href: "/services/web-development/" },
      { label: "Durban custom web applications", href: "/services/custom-web-applications/kwazulu-natal/durban/" },
      { label: "SEO services", href: "/services/seo-services/" },
    ],
    faqs: [
      { question: "What should a logistics website include?", answer: "It should include service pages, quote forms, coverage details, trust signals, contact paths, and possibly customer portal planning." },
      { question: "Can logistics websites include portals?", answer: "Yes. Portals can support customer requests, documents, status updates, reporting, and repeat workflows." },
      { question: "Can SEO help logistics companies?", answer: "Yes. B2B logistics SEO works best with clear service pages, industry pages, technical health, and useful content." },
    ],
    priority: 0.74,
  },
];

export const industries: IndustryPage[] = [...baseIndustries, ...additionalIndustries];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function industryUrl(industry: IndustryPage) {
  return `/industries/${industry.slug}/`;
}
