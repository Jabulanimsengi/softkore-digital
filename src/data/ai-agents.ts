import { industries } from "@/data/industries";

export type AiAgentIndustryPage = {
  slug: string;
  industrySlug: string;
  name: string;
  category: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  operatingReality: string;
  adoptionFocus: string;
  summary: string[];
  agentIdeas: Array<{ title: string; text: string }>;
  workflowExamples: Array<{ title: string; text: string }>;
  adoptionSteps: Array<{ title: string; text: string }>;
  safeguards: Array<{ title: string; text: string }>;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  priority: number;
};

const industryBySlug = new Map(industries.map((industry) => [industry.slug, industry]));

function industryName(slug: string) {
  return industryBySlug.get(slug)?.name ?? slug;
}

export const aiAgentIndustryPages: AiAgentIndustryPage[] = [
  {
    slug: "salon-booking-software",
    industrySlug: "salon-booking-software",
    name: "AI Agents for Salons and Beauty Teams",
    category: "Health, Beauty and Wellness",
    metaTitle: "AI Agents for Salons and Beauty Teams | SoftKore Digital",
    description:
      "Practical AI agent planning for salons, spas, barbers, and beauty clinics that want smoother bookings, follow-ups, and client communication.",
    h1: "AI Agents for Salons and Beauty Teams",
    intro:
      "Beauty teams can use AI agents to reduce missed bookings, answer routine questions, prepare client notes, and keep follow-ups moving without making the service feel cold.",
    operatingReality:
      "Clients ask about treatments, price ranges, availability, preparation, aftercare, and booking changes across WhatsApp, forms, social inboxes, and calls.",
    adoptionFocus:
      "Start with the repetitive conversations around bookings and treatment guidance, then connect the agent to staff review before anything affects the diary.",
    summary: ["Booking support", "Treatment questions", "Client follow-ups", "Staff handover", "Review prompts"],
    agentIdeas: [
      { title: "Booking assistant", text: "Collect service, preferred time, stylist, client details, and notes before the team confirms the appointment." },
      { title: "Treatment guide", text: "Answer common treatment questions using approved salon information and route sensitive questions to staff." },
      { title: "Follow-up helper", text: "Prepare aftercare reminders, rebooking prompts, and polite check-ins for staff to approve." },
    ],
    workflowExamples: [
      { title: "Missed enquiry recovery", text: "When a message arrives after hours, the agent can collect the basics and prepare the booking request for the morning." },
      { title: "Before-visit preparation", text: "Clients can receive approved preparation notes based on the treatment they selected." },
      { title: "No-show reduction", text: "The agent can prepare reminders and confirmation messages around the salon's booking policy." },
    ],
    adoptionSteps: [
      { title: "Map enquiry types", text: "List the questions staff answer every week and separate simple answers from decisions staff must handle." },
      { title: "Create approved replies", text: "Turn treatment, pricing, timing, and aftercare information into a controlled answer library." },
      { title: "Add staff review", text: "Keep appointment confirmation and sensitive treatment advice under human approval." },
    ],
    safeguards: [
      { title: "No medical claims", text: "The agent should avoid diagnosis or promises and refer clinical concerns to qualified staff." },
      { title: "Diary protection", text: "The agent can request appointments, but final booking rules should remain controlled by the salon." },
      { title: "Tone control", text: "Replies should sound like the salon: warm, brief, and useful." },
    ],
    related: [
      { label: industryName("salon-booking-software"), href: "/industries/salon-booking-software/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "Can an AI agent make bookings automatically?", answer: "It can collect booking details and prepare the request. Full automatic confirmation depends on your diary rules, cancellation policy, and staff availability." },
      { question: "Will clients know they are speaking to an agent?", answer: "We recommend being clear when automation is involved and making it easy to reach a person." },
      { question: "Can it work with WhatsApp?", answer: "Yes, depending on the approved WhatsApp setup and how the salon wants conversations reviewed." },
    ],
    priority: 0.78,
  },
  {
    slug: "ecommerce-development",
    industrySlug: "ecommerce-development",
    name: "AI Agents for Ecommerce Teams",
    category: "Retail and Commerce",
    metaTitle: "AI Agents for Ecommerce Teams | SoftKore Digital",
    description:
      "Practical AI agent planning for ecommerce teams that want better product support, order help, and internal catalogue workflows.",
    h1: "AI Agents for Ecommerce Teams",
    intro:
      "Online stores can use AI agents to help customers compare products, answer delivery questions, prepare support replies, and keep product information easier to manage.",
    operatingReality:
      "Customers need quick answers about fit, availability, delivery, returns, payment, product differences, and order status before they buy or contact support.",
    adoptionFocus:
      "Start with controlled product and policy answers, then add order workflows only when the data and approval rules are reliable.",
    summary: ["Product guidance", "Order support", "Returns help", "Catalogue tasks", "Support drafts"],
    agentIdeas: [
      { title: "Product advisor", text: "Help visitors narrow options using product attributes, usage needs, budget signals, and approved store guidance." },
      { title: "Support draft assistant", text: "Prepare replies for delivery, return, sizing, stock, and warranty questions so the team can respond faster." },
      { title: "Catalogue assistant", text: "Flag missing descriptions, inconsistent attributes, and product data gaps for the team to fix." },
    ],
    workflowExamples: [
      { title: "Pre-purchase comparison", text: "The agent can explain differences between similar products using the store's product data." },
      { title: "Return request intake", text: "Customers can share order details, reason, photos, and preferred outcome before staff review." },
      { title: "Product content cleanup", text: "The agent can prepare consistent drafts for product specs and frequently asked questions." },
    ],
    adoptionSteps: [
      { title: "Clean product data", text: "Product names, variants, categories, specs, and policies need structure before the agent can be useful." },
      { title: "Define answer boundaries", text: "Decide what the agent can answer directly and what needs staff approval." },
      { title: "Connect tracking carefully", text: "Order status workflows should use secure data access and clear customer verification." },
    ],
    safeguards: [
      { title: "No invented stock", text: "The agent should only mention availability when it comes from a trusted source." },
      { title: "Policy consistency", text: "Returns, refunds, and warranties must follow approved store policy." },
      { title: "Secure order access", text: "Order help should verify the customer before showing private information." },
    ],
    related: [
      { label: industryName("ecommerce-development"), href: "/industries/ecommerce-development/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development", href: "/services/web-development/" },
    ],
    faqs: [
      { question: "Can an AI agent recommend products?", answer: "Yes, if the product data is structured and the recommendations stay within the store's approved information." },
      { question: "Can it handle returns?", answer: "It can collect return details and prepare the case. Final approval should follow your policy and staff review." },
      { question: "Can it update product pages?", answer: "It can draft updates and flag gaps, but publishing should remain controlled." },
    ],
    priority: 0.78,
  },
  {
    slug: "medical-practice-websites",
    industrySlug: "medical-practice-websites",
    name: "AI Agents for Medical Practices",
    category: "Healthcare",
    metaTitle: "AI Agents for Medical Practices | SoftKore Digital",
    description:
      "Practical AI agent planning for medical practices that need safer patient intake, appointment support, and admin assistance.",
    h1: "AI Agents for Medical Practices",
    intro:
      "Medical practices can use AI agents to guide routine admin, collect appointment details, prepare patient handovers, and reduce repetitive front-desk pressure while keeping clinical judgement with qualified people.",
    operatingReality:
      "Patients ask about appointments, documents, location, payment, referrals, preparation, and what to expect before a visit.",
    adoptionFocus:
      "Start with non-clinical admin journeys and clear escalation rules before considering any deeper patient workflow.",
    summary: ["Appointment intake", "Document reminders", "Patient handover", "Practice information", "Front-desk support"],
    agentIdeas: [
      { title: "Appointment intake assistant", text: "Collect contact details, preferred times, visit reason, referral status, and admin notes for staff review." },
      { title: "Preparation guide", text: "Share approved preparation and location information for common appointment types." },
      { title: "Admin handover assistant", text: "Summarize non-clinical patient requests so the practice can respond with context." },
    ],
    workflowExamples: [
      { title: "New patient enquiry", text: "The agent can collect basic information and explain the next admin step without offering medical advice." },
      { title: "Document checklist", text: "Patients can be reminded to bring referral letters, IDs, medical aid details, or previous results where relevant." },
      { title: "After-hours support", text: "The agent can take a message, share emergency guidance wording approved by the practice, and route urgent matters appropriately." },
    ],
    adoptionSteps: [
      { title: "Separate admin from care", text: "Define which questions are administrative and which must be handled by clinical staff." },
      { title: "Write escalation rules", text: "Urgent symptoms, medication questions, diagnosis, and treatment advice should route away from automation." },
      { title: "Protect patient data", text: "Use secure forms, limited access, and careful data retention rules." },
    ],
    safeguards: [
      { title: "No diagnosis", text: "The agent should never diagnose, prescribe, or replace clinical judgement." },
      { title: "Privacy first", text: "Patient information should be collected only when needed and handled through secure systems." },
      { title: "Clear emergency routing", text: "Urgent situations need approved instructions and immediate escalation paths." },
    ],
    related: [
      { label: industryName("medical-practice-websites"), href: "/industries/medical-practice-websites/" },
      { label: industryName("dental-practice-websites"), href: "/ai-agents/dental-practice-websites/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "Can an AI agent answer medical questions?", answer: "We recommend limiting it to approved practice information and routing medical questions to qualified staff." },
      { question: "Can it help with appointments?", answer: "Yes. It can collect appointment details, explain admin steps, and prepare requests for staff review." },
      { question: "How do you handle patient privacy?", answer: "We plan data collection, access, storage, and retention before building the workflow." },
    ],
    priority: 0.77,
  },
  {
    slug: "real-estate-websites",
    industrySlug: "real-estate-websites",
    name: "AI Agents for Real Estate Teams",
    category: "Property",
    metaTitle: "AI Agents for Real Estate Teams | SoftKore Digital",
    description:
      "Practical AI agent planning for property teams that want better buyer, tenant, seller, and landlord intake.",
    h1: "AI Agents for Real Estate Teams",
    intro:
      "Property teams can use AI agents to qualify enquiries, prepare viewing requests, collect seller or landlord details, and help agents respond with better context.",
    operatingReality:
      "Buyers, tenants, sellers, and landlords often ask similar questions, but each enquiry needs enough context before an agent can act.",
    adoptionFocus:
      "Start by improving enquiry intake and handover quality before connecting property feeds, CRM updates, or valuation workflows.",
    summary: ["Lead qualification", "Viewing requests", "Seller intake", "Rental enquiries", "Agent handover"],
    agentIdeas: [
      { title: "Property enquiry assistant", text: "Collect budget, location, timing, property type, financing status, and contact preferences." },
      { title: "Viewing coordinator", text: "Prepare viewing requests with preferred times, property reference, and visitor details." },
      { title: "Seller intake assistant", text: "Collect property details, reason for selling, area, condition, and preferred next step." },
    ],
    workflowExamples: [
      { title: "Buyer qualification", text: "The agent can help separate casual browsing from serious purchase intent." },
      { title: "Rental intake", text: "Tenant enquiries can include move-in date, budget, household needs, and document readiness." },
      { title: "Agent briefing", text: "Agents can receive a short summary before calling back." },
    ],
    adoptionSteps: [
      { title: "Define lead stages", text: "Agree what makes an enquiry ready for a viewing, valuation, or follow-up." },
      { title: "Connect property context", text: "Use controlled listing data so the agent does not invent availability or property details." },
      { title: "Plan CRM handoff", text: "Decide what gets saved, who owns the lead, and when staff review is required." },
    ],
    safeguards: [
      { title: "No false availability", text: "The agent should not promise viewings or availability without trusted listing data." },
      { title: "Fair handling", text: "Tenant and buyer workflows should avoid discriminatory questions and routing." },
      { title: "Agent approval", text: "Valuation and negotiation advice should remain with qualified property professionals." },
    ],
    related: [
      { label: industryName("real-estate-websites"), href: "/industries/real-estate-websites/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development", href: "/services/web-development/" },
    ],
    faqs: [
      { question: "Can an AI agent qualify property leads?", answer: "Yes. It can collect useful context and prepare a handover so agents spend more time with suitable prospects." },
      { question: "Can it book viewings?", answer: "It can request or coordinate viewings. Confirmation should depend on agent availability and property status." },
      { question: "Can it connect to a CRM?", answer: "Yes, once the lead fields, ownership rules, and review points are clear." },
    ],
    priority: 0.76,
  },
  {
    slug: "legal-firm-seo-services",
    industrySlug: "legal-firm-seo-services",
    name: "AI Agents for Legal Practices",
    category: "Professional Services",
    metaTitle: "AI Agents for Legal Practices | SoftKore Digital",
    description:
      "Practical AI agent planning for legal practices that need intake support, document checklists, and careful enquiry routing.",
    h1: "AI Agents for Legal Practices",
    intro:
      "Legal practices can use AI agents to collect enquiry context, prepare document checklists, route matters to the right team, and reduce repetitive admin without giving legal advice.",
    operatingReality:
      "Prospects often arrive with urgent questions, incomplete documents, and uncertainty about which practice area applies.",
    adoptionFocus:
      "Start with intake and routing, then add document preparation support only with strict review and approval.",
    summary: ["Matter intake", "Document checklists", "Practice-area routing", "Client handover", "Admin drafts"],
    agentIdeas: [
      { title: "Matter intake assistant", text: "Collect names, contact details, broad matter type, urgency, location, and document status for staff review." },
      { title: "Checklist assistant", text: "Share approved document lists for common enquiry types before consultation." },
      { title: "Routing assistant", text: "Prepare the enquiry for the right attorney or department without assessing the legal position." },
    ],
    workflowExamples: [
      { title: "New enquiry triage", text: "The agent can collect the basics and flag conflicts or urgent review needs." },
      { title: "Consultation preparation", text: "Prospects can receive a controlled checklist of what to bring." },
      { title: "Follow-up drafts", text: "The agent can draft administrative follow-ups for review after an enquiry." },
    ],
    adoptionSteps: [
      { title: "Set advice boundaries", text: "Define clearly what the agent may say and what must go to a legal professional." },
      { title: "Create approved checklists", text: "Build document lists and intake questions per practice area." },
      { title: "Review every handover", text: "Keep legal interpretation, advice, and client acceptance under professional control." },
    ],
    safeguards: [
      { title: "No legal advice", text: "The agent should collect information and route enquiries, not advise on rights, outcomes, or strategy." },
      { title: "Confidentiality", text: "Sensitive information needs secure collection and careful access controls." },
      { title: "Conflict awareness", text: "Intake should support conflict checks before detailed conversations continue." },
    ],
    related: [
      { label: "Legal practice websites", href: "/industries/legal-firm-seo-services/" },
      { label: industryName("accounting-firm-websites"), href: "/ai-agents/accounting-firm-websites/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
    ],
    faqs: [
      { question: "Can an AI agent give legal advice?", answer: "No. We would design it to collect information, share approved admin guidance, and route the matter to qualified professionals." },
      { question: "Can it help with document checklists?", answer: "Yes, using approved checklists that the practice controls." },
      { question: "Can it handle confidential enquiries?", answer: "Only with secure collection, access controls, and clear internal handling rules." },
    ],
    priority: 0.76,
  },
  {
    slug: "dental-practice-websites",
    industrySlug: "dental-practice-websites",
    name: "AI Agents for Dental Practices",
    category: "Healthcare",
    metaTitle: "AI Agents for Dental Practices | SoftKore Digital",
    description:
      "Practical AI agent planning for dental practices that need appointment intake, treatment questions, and patient preparation support.",
    h1: "AI Agents for Dental Practices",
    intro:
      "Dental practices can use AI agents to collect appointment requests, answer approved treatment questions, prepare patient checklists, and route urgent concerns to the team.",
    operatingReality:
      "Patients ask about pain, emergencies, treatments, cost ranges, preparation, recovery, and appointment availability.",
    adoptionFocus:
      "Start with admin support and approved treatment information, with urgent or clinical questions routed to the practice.",
    summary: ["Appointment intake", "Treatment information", "Emergency routing", "Patient preparation", "Follow-up reminders"],
    agentIdeas: [
      { title: "Appointment request assistant", text: "Collect patient details, preferred time, treatment interest, urgency, and first notes for staff review." },
      { title: "Treatment information assistant", text: "Share approved explanations for common treatments and route clinical concerns to the dental team." },
      { title: "Reminder assistant", text: "Prepare checkups, aftercare, and follow-up reminders for approval." },
    ],
    workflowExamples: [
      { title: "Emergency intake", text: "The agent can collect symptoms and route the enquiry urgently without diagnosing." },
      { title: "Treatment preparation", text: "Patients can receive approved notes on what to bring and what to expect." },
      { title: "Recall support", text: "The agent can prepare friendly reminders for routine checkups." },
    ],
    adoptionSteps: [
      { title: "List patient questions", text: "Group questions into admin, treatment information, and clinical escalation." },
      { title: "Approve wording", text: "Prepare careful answers for treatments, costs, timing, and aftercare." },
      { title: "Protect records", text: "Keep patient data secure and limit what the agent can access." },
    ],
    safeguards: [
      { title: "No diagnosis", text: "The agent should not diagnose dental conditions or promise outcomes." },
      { title: "Urgent escalation", text: "Pain, swelling, trauma, and infection concerns need clear routing to the practice." },
      { title: "Careful cost language", text: "Costs should be framed as ranges or consultation-dependent where appropriate." },
    ],
    related: [
      { label: industryName("dental-practice-websites"), href: "/industries/dental-practice-websites/" },
      { label: industryName("medical-practice-websites"), href: "/ai-agents/medical-practice-websites/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "Can an AI agent answer dental treatment questions?", answer: "It can share approved general information, but clinical advice should go to the dental team." },
      { question: "Can it handle emergency enquiries?", answer: "It can collect details and route urgent concerns quickly using practice-approved instructions." },
      { question: "Can it send reminders?", answer: "Yes, with consent and the right communication setup." },
    ],
    priority: 0.74,
  },
  {
    slug: "accounting-firm-websites",
    industrySlug: "accounting-firm-websites",
    name: "AI Agents for Accounting Firms",
    category: "Professional Services",
    metaTitle: "AI Agents for Accounting Firms | SoftKore Digital",
    description:
      "Practical AI agent planning for accounting firms that need client intake, document collection, and admin support.",
    h1: "AI Agents for Accounting Firms",
    intro:
      "Accounting firms can use AI agents to collect client details, prepare document requests, route service enquiries, and reduce repetitive admin around onboarding and monthly support.",
    operatingReality:
      "Clients ask about tax, bookkeeping, payroll, compliance dates, documents, packages, and what the firm needs before work can start.",
    adoptionFocus:
      "Start with intake, document collection, and service routing before adding deeper system integrations.",
    summary: ["Client intake", "Document requests", "Service routing", "Deadline reminders", "Admin drafts"],
    agentIdeas: [
      { title: "Client intake assistant", text: "Collect business type, size, current systems, service needs, urgency, and contact details." },
      { title: "Document collection assistant", text: "Prepare checklists for payroll, bookkeeping, tax, and advisory workflows." },
      { title: "Support draft assistant", text: "Draft routine admin replies using approved firm information." },
    ],
    workflowExamples: [
      { title: "New client onboarding", text: "The agent can collect key business details and prepare the first document request." },
      { title: "Monthly reminders", text: "Clients can receive controlled reminders about documents or deadlines." },
      { title: "Service matching", text: "Enquiries can be routed to bookkeeping, tax, payroll, or advisory teams." },
    ],
    adoptionSteps: [
      { title: "Define service paths", text: "Map common client needs to the right intake questions." },
      { title: "Standardize checklists", text: "Create approved document lists for each service." },
      { title: "Add secure uploads", text: "Plan how clients share files and who can access them." },
    ],
    safeguards: [
      { title: "No financial advice", text: "The agent should not give tax or financial advice without professional review." },
      { title: "Secure documents", text: "Financial records need secure upload and access handling." },
      { title: "Approved deadlines", text: "Dates and compliance reminders should come from verified firm processes." },
    ],
    related: [
      { label: industryName("accounting-firm-websites"), href: "/industries/accounting-firm-websites/" },
      { label: "AI agents for legal practices", href: "/ai-agents/legal-firm-seo-services/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
    ],
    faqs: [
      { question: "Can an AI agent collect accounting documents?", answer: "Yes, if the upload process is secure and document checklists are approved by the firm." },
      { question: "Can it answer tax questions?", answer: "It should only share approved general information and route advice requests to qualified staff." },
      { question: "Can it help onboard clients?", answer: "Yes. It can collect business details, prepare checklists, and route the client to the right service path." },
    ],
    priority: 0.73,
  },
  {
    slug: "construction-company-websites",
    industrySlug: "construction-company-websites",
    name: "AI Agents for Construction Companies",
    category: "Construction and Trades",
    metaTitle: "AI Agents for Construction Companies | SoftKore Digital",
    description:
      "Practical AI agent planning for construction companies that need better quote intake, project enquiries, and supplier communication.",
    h1: "AI Agents for Construction Companies",
    intro:
      "Construction companies can use AI agents to collect project scope, prepare quote requests, organize supplier enquiries, and help teams respond with better context.",
    operatingReality:
      "Prospects often enquire with incomplete project details, unclear budgets, rough timelines, and missing site information.",
    adoptionFocus:
      "Start with structured quote intake and project handovers before linking project systems or supplier workflows.",
    summary: ["Quote intake", "Project scope", "Supplier enquiries", "Site details", "Team handover"],
    agentIdeas: [
      { title: "Quote intake assistant", text: "Collect project type, location, timeline, budget signals, photos, plans, and decision-maker details." },
      { title: "Supplier enquiry assistant", text: "Gather material type, quantity, delivery location, timing, and contact details." },
      { title: "Project handover assistant", text: "Summarize enquiry details for estimators or project managers." },
    ],
    workflowExamples: [
      { title: "Renovation enquiry", text: "The agent can ask for room type, scope, photos, timing, and access notes." },
      { title: "Commercial project lead", text: "The agent can capture project stage, tender needs, and procurement contacts." },
      { title: "Supplier request", text: "The agent can prepare clean material or availability requests for staff review." },
    ],
    adoptionSteps: [
      { title: "Define project categories", text: "Separate residential, commercial, civil, renovation, and supplier enquiries." },
      { title: "Build intake forms", text: "Create short question paths that collect useful scope without overwhelming prospects." },
      { title: "Route by capability", text: "Send enquiries to the right person based on project type and location." },
    ],
    safeguards: [
      { title: "No firm estimates", text: "The agent should not promise cost or timelines without staff review." },
      { title: "Safety routing", text: "Hazard, compliance, and access issues should be flagged for qualified review." },
      { title: "Document control", text: "Plans and project files need organized, secure handling." },
    ],
    related: [
      { label: industryName("construction-company-websites"), href: "/industries/construction-company-websites/" },
      { label: industryName("plumber-websites"), href: "/ai-agents/plumber-websites/" },
      { label: "Web development", href: "/services/web-development/" },
    ],
    faqs: [
      { question: "Can an AI agent prepare construction quotes?", answer: "It can collect scope and prepare the request. Pricing and commitments should come from the team." },
      { question: "Can prospects upload photos or plans?", answer: "Yes, if the upload workflow is planned securely and routed to the right person." },
      { question: "Can it help with supplier enquiries?", answer: "Yes. It can collect quantity, material, delivery, and timing details before staff respond." },
    ],
    priority: 0.73,
  },
  {
    slug: "plumber-websites",
    industrySlug: "plumber-websites",
    name: "AI Agents for Plumbing Businesses",
    category: "Construction and Trades",
    metaTitle: "AI Agents for Plumbing Businesses | SoftKore Digital",
    description:
      "Practical AI agent planning for plumbing businesses that need urgent enquiry intake, job details, and customer follow-up.",
    h1: "AI Agents for Plumbing Businesses",
    intro:
      "Plumbing businesses can use AI agents to collect urgent job details, request photos, route work by area, and prepare customer follow-ups without slowing down the team.",
    operatingReality:
      "Customers often need help quickly and may not know how to describe the problem clearly.",
    adoptionFocus:
      "Start with emergency intake and job detail collection, then add scheduling support once routing rules are clear.",
    summary: ["Emergency intake", "Photo requests", "Area routing", "Job notes", "Follow-up messages"],
    agentIdeas: [
      { title: "Emergency intake assistant", text: "Collect issue type, area, urgency, property access, photos, and contact details." },
      { title: "Job detail assistant", text: "Ask practical questions for leaks, geysers, drains, installations, and maintenance." },
      { title: "Follow-up assistant", text: "Prepare visit reminders, arrival notes, and after-service check-ins." },
    ],
    workflowExamples: [
      { title: "Burst pipe enquiry", text: "The agent can collect urgent details and route the lead to the correct response path." },
      { title: "Geyser issue", text: "The agent can ask for model details, photos, symptoms, and property access notes." },
      { title: "Maintenance request", text: "The agent can prepare a non-urgent job summary for scheduling." },
    ],
    adoptionSteps: [
      { title: "Define urgency rules", text: "Decide what counts as emergency, same-day, scheduled, or quote-only." },
      { title: "Collect the right details", text: "Use short question paths for the most common job types." },
      { title: "Route by area and availability", text: "Connect requests to staff or teams based on service coverage." },
    ],
    safeguards: [
      { title: "No unsafe advice", text: "The agent should avoid instructions that could put customers or property at risk." },
      { title: "Clear response limits", text: "Do not promise arrival times unless the team has confirmed availability." },
      { title: "Photo consent", text: "Customers should understand when and why photos are requested." },
    ],
    related: [
      { label: industryName("plumber-websites"), href: "/industries/plumber-websites/" },
      { label: industryName("construction-company-websites"), href: "/ai-agents/construction-company-websites/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
    ],
    faqs: [
      { question: "Can an AI agent handle emergency plumbing enquiries?", answer: "It can collect details and route urgent requests quickly, but response commitments should come from the team." },
      { question: "Can it ask customers for photos?", answer: "Yes. Photos can help the team understand the issue before calling back." },
      { question: "Can it schedule jobs?", answer: "It can request preferred times. Confirmed scheduling depends on team availability and routing rules." },
    ],
    priority: 0.72,
  },
  {
    slug: "logistics-company-websites",
    industrySlug: "logistics-company-websites",
    name: "AI Agents for Logistics Companies",
    category: "Logistics and Industrial",
    metaTitle: "AI Agents for Logistics Companies | SoftKore Digital",
    description:
      "Practical AI agent planning for logistics companies that need quote intake, customer updates, and operations support.",
    h1: "AI Agents for Logistics Companies",
    intro:
      "Logistics companies can use AI agents to collect shipment details, prepare quote requests, answer approved service questions, and support customer update workflows.",
    operatingReality:
      "Customers need clarity on routes, timing, shipment details, documents, tracking, pricing factors, and who to contact when something changes.",
    adoptionFocus:
      "Start with quote intake and customer update preparation before connecting deeper operational systems.",
    summary: ["Quote intake", "Shipment details", "Customer updates", "Document requests", "Operations handover"],
    agentIdeas: [
      { title: "Freight quote assistant", text: "Collect origin, destination, cargo type, dimensions, weight, timing, and service requirements." },
      { title: "Customer update assistant", text: "Prepare approved status updates and collect customer questions for the operations team." },
      { title: "Document assistant", text: "Request missing waybills, invoices, delivery notes, or customs documents where relevant." },
    ],
    workflowExamples: [
      { title: "New shipment request", text: "The agent can gather the information needed before a quote is prepared." },
      { title: "Repeat customer request", text: "The agent can recognize familiar account details if connected securely." },
      { title: "Exception handling", text: "The agent can capture issue details and prepare a clean handover for operations." },
    ],
    adoptionSteps: [
      { title: "Map service types", text: "Separate courier, freight, warehousing, distribution, and specialist requests." },
      { title: "Define required fields", text: "List the details needed before a quote or update can be handled." },
      { title: "Connect systems carefully", text: "Tracking and customer data should be connected only with the right security controls." },
    ],
    safeguards: [
      { title: "No unsupported tracking", text: "The agent should not invent shipment status without trusted data." },
      { title: "Customer verification", text: "Private shipment details should require appropriate verification." },
      { title: "Clear escalation", text: "Delays, claims, and exceptions need operations review." },
    ],
    related: [
      { label: industryName("logistics-company-websites"), href: "/industries/logistics-company-websites/" },
      { label: "Custom web applications", href: "/services/custom-web-applications/" },
      { label: "Web development", href: "/services/web-development/" },
    ],
    faqs: [
      { question: "Can an AI agent prepare logistics quotes?", answer: "It can collect shipment details and prepare the request. Pricing should remain controlled by the logistics team." },
      { question: "Can it answer tracking questions?", answer: "Yes, if connected to trusted tracking data with customer verification." },
      { question: "Can it help operations teams?", answer: "Yes. It can collect cleaner information and prepare summaries for dispatch, support, or account teams." },
    ],
    priority: 0.72,
  },
];

export function getAiAgentIndustry(slug: string) {
  return aiAgentIndustryPages.find((page) => page.slug === slug);
}

export function aiAgentIndustryUrl(page: AiAgentIndustryPage) {
  return `/ai-agents/${page.slug}/`;
}
