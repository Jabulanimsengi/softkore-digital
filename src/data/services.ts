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
    metaTitle: "Website Design & Development South Africa | SoftKore Digital",
    description:
      "Fast, mobile-first business websites built for South Africa. Clear service pages, built-in technical SEO, POPIA-ready forms & security from day one.",
    eyebrow: "Website Design & Development",
    h1: "Website design & development for South African businesses.",
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
      "Secure build practices, HTTPS and clean forms",
      "Analytics and launch checks",
    ],
    bodyHeading: "A website has one job: help the right person choose you.",
    body: [
      "Most small business websites fail in predictable ways. The homepage talks about the company instead of the customer, services are squeezed onto one page, the phone number is hard to find on mobile, and nobody can tell what to do next. A new design does not fix any of that on its own.",
      "We start with the decisions your customer has to make: do you offer what they need, can they trust you, what will it roughly involve, and how do they get in touch? The page structure, copy and design are then built around those answers, so the site works as a sales tool and not only as an online brochure.",
      "Because search and security are built into the structure from the start, you avoid the common and expensive pattern of launching a site first and paying to repair it for Google or lock down vulnerabilities later.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits service businesses, professional firms, trades, clinics, manufacturers and B2B suppliers that need a website customers can act on. It is also a good fit if your current site looks dated, performs badly on phones, or brings in very few enquiries.",
      "Whether you need a focused company website, a full service-led redesign or an online store, we build on lean, secure foundations so your site is fast to browse and straightforward for Google to crawl and index.",
    ],
    featureTitle: "What we build",
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
        text: "Focused pages with one offer and one clear action, built to convert visitors into enquiries without distractions.",
      },
      {
        title: "Ecommerce websites",
        text: "Product catalogues, delivery information and checkout flows connected to a South African payment provider.",
      },
      {
        title: "Performance rebuilds",
        text: "For sites that are too slow, bloated or hard to keep secure, we rebuild on a lean, modern stack without losing your search history.",
      },
      {
        title: "Launch and handover",
        text: "Metadata, sitemap, redirects, security headers, forms and mobile journeys are all checked on the live site before we call it finished.",
      },
    ],
    southAfricaHeading: "Built for how South Africans actually browse",
    southAfrica: [
      "Most of your visitors will arrive on a phone, often on mobile data, and many would rather send a WhatsApp message than fill in a long form. We keep pages light, put contact options within easy reach, and test the journeys that matter on real mobile screen sizes.",
      "Practical local requirements are part of the build: a contact form and privacy notice that respect POPIA, a .co.za domain where it suits your brand, pricing shown in rand, and payment options your customers recognise, such as PayFast, Yoco or Ozow.",
      "We work remotely with businesses in all nine provinces. Briefings, reviews and sign-off happen over video calls, email and WhatsApp, so your location does not limit the project.",
    ],
    processTitle: "How a website project runs",
    processBody: [
      "Good websites come from clear decisions made early. Each stage below ends with something you can review, so nothing important is left to a big reveal at the end.",
    ],
    processItems: [
      {
        title: "Discovery",
        text: "We clarify your services, customers, competitors and what a good enquiry looks like. If you have an existing site, we also review its search and security posture.",
      },
      {
        title: "Structure and content",
        text: "We agree the pages, navigation and key messages, then write or refine the copy. Your real proof, such as projects and reviews, goes in here.",
      },
      {
        title: "Design and build",
        text: "You review the design on real pages, not just static mockups, while we build responsive, fast, hardened pages with clean code.",
      },
      {
        title: "Launch and support",
        text: "We test forms, links, redirects, security headers and mobile journeys, then launch, verify the live site and submit it to Google Search Console.",
      },
    ],
    costHeading: "What affects the cost of a website",
    cost: [
      "The main cost drivers are the number of unique pages, who writes the content, how custom the design is, and whether the site needs features such as online payments or custom integrations. A redesign with many existing pages also needs redirect planning.",
      "A sensible approach is to launch a strong core site first and add to it once you can see what customers respond to. Share your rough budget on the [contact form](/contact/) and we will tell you honestly what it can achieve. Our [website prices guide](/guides/website-prices-south-africa/) covers this in more detail.",
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
      { label: "Website redesign SEO checklist", href: "/guides/website-redesign-seo-checklist/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Medical practice websites & SEO", href: "/guides/medical-practice-website-seo-south-africa/" },
      { label: "Construction firm websites & SEO", href: "/guides/construction-company-website-seo-south-africa/" },
      { label: "Salon booking websites & SEO", href: "/guides/salon-aesthetics-booking-website-seo-south-africa/" },
    ],
    faqs: [
      {
        question: "Do you build websites for businesses outside Johannesburg?",
        answer:
          "Yes. We work remotely with businesses across all nine provinces of South Africa. Discovery meetings, live staging reviews and sign-off happen over video calls, email and WhatsApp through our [contact page](/contact/).",
      },
      {
        question: "What do I need to prepare before starting a website project?",
        answer:
          "Prepare a list of your core services, ideal customers, access to your current domain or hosting if you have them, examples of websites you like and real proof such as project photos or reviews. We guide the rest during discovery.",
      },
      {
        question: "Will my new website rank on Google automatically at launch?",
        answer:
          "Launch engineering gives Google fast crawlable pages, metadata, sitemaps and schema, while ongoing visibility depends on competition, search demand and content depth. Pair your build with our [SEO services](/services/seo-services/) or start with our [technical SEO checklist](/guides/technical-seo-checklist/).",
      },
      {
        question: "Can you redesign my site without losing existing Google rankings?",
        answer:
          "Yes. We export your current Search Console URLs, keep high-performing pages where possible and map single-hop 301 redirects for every moved URL before launch. Follow our full [website redesign SEO checklist](/guides/website-redesign-seo-checklist/).",
      },
      {
        question: "Can I update the website content and pages myself after launch?",
        answer:
          "Yes, when a self-managed editor makes sense for your workflow. During discovery we decide between a clean CMS setup you control directly or a leaner custom codebase supported through our [monthly maintenance plans](/guides/website-maintenance-cost-south-africa/).",
      },
      {
        question: "Do you write the website copy or refine existing drafts?",
        answer:
          "We do both. We interview your team to extract real proof, service scope and local buyer answers, then write or tighten the commercial copy so pages convert cleanly and match [SEO copywriting best practices](/guides/seo-copywriting-guide-south-africa/).",
      },
      {
        question: "What is the typical timeline to build a South African business website?",
        answer:
          "Most focused company websites launch in three to six weeks once scope and content inputs are ready, while ecommerce stores and complex redesigns take six to ten weeks. See week-by-week stages in our [website build timeline guide](/guides/how-long-to-build-a-website-south-africa/).",
      },
      {
        question: "Should we choose WordPress or a custom Next.js website?",
        answer:
          "Choose a lean custom Next.js build when speed, low maintenance overhead and tight security matter most, or WordPress when your team needs familiar daily publishing without plugins getting out of hand. Compare both stacks in our [WordPress vs custom website guide](/guides/wordpress-vs-custom-website-south-africa/).",
      },
      {
        question: "Which South African payment gateways do you integrate for ecommerce?",
        answer:
          "We integrate PayFast, Yoco and Ozow so local buyers can pay via Visa/Mastercard, Capitec Pay or Instant EFT alongside courier rules for Bob Go or The Courier Guy. Compare fees in our [PayFast vs Yoco vs Ozow guide](/guides/payfast-vs-yoco-vs-ozow-south-africa/).",
      },
      {
        question: "What affects the final cost of a new website build in rand?",
        answer:
          "Pricing depends on custom page count, copywriting scope, bespoke design vs starter structure, ecommerce or booking integrations and migration complexity. Read realistic ZAR brackets in our [website prices guide](/guides/website-prices-south-africa/) or [ecommerce cost guide](/guides/ecommerce-website-cost-south-africa/).",
      },
      {
        question: "Who owns the hosting account, code and domain name?",
        answer:
          "Your business owns the domain, hosting account and completed codebase outright upon final settlement, with zero agency lock-in. Read our [guide to choosing a web design company](/guides/how-to-choose-web-design-company-south-africa/) to see what contracts should state.",
      },
      {
        question: "What happens with hosting, updates and backups after launch?",
        answer:
          "Every build passes a live QA checklist covering forms, HTTPS, security headers and Search Console submission, and can continue on a proactive [website security and maintenance plan](/services/website-security/) covering patching, uptime checks and [off-site backups](/guides/offsite-website-backups-south-africa/).",
      },
    ],
    serviceType: "Website Design and Development",
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    metaTitle: "SEO Services South Africa | Audits & Indexing | SoftKore",
    description:
      "South African SEO services: technical audits, fixing 'Crawled - currently not indexed' pages, service page optimisation & honest Search Console reports.",
    eyebrow: "SEO Services",
    h1: "SEO services for South African businesses.",
    intro:
      "Start with a free SEO audit: we find out why your website is not being found, fix what is holding it back, and improve the pages that can bring you paying customers, with plain reporting on what changed.",
    primaryCta: "Get a Free SEO Audit",
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
      "We start with your Google Search Console data and a full crawl of your website, so recommendations come from evidence. Then we prioritise the work most likely to bring enquiries, even if that means fixing or removing weak pages rather than publishing more.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits South African businesses with a real offer and a website that gets little search traffic, including sites that rank for the wrong terms, lost traffic after a redesign, or have many pages excluded from Google. It works best when you can share Search Console access and honest information about your customers.",
      "SEO is not the right first step for everyone. If your site needs a structural rebuild first, or if indexing is blocked by technical or security faults, we will tell you honestly where to start.",
    ],
    featureTitle: "What our SEO work covers",
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
    processTitle: "How we improve search visibility",
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
      "Cost depends on the size and condition of your site, how competitive your market is, and whether we are writing content and implementing changes or advising your existing team. See realistic monthly and audit ranges in our [SEO prices guide](/guides/seo-prices-south-africa/), or start with a [free SEO audit](/contact/?service=free-seo-audit#contact-form) before committing to monthly work.",
      "Be careful with very cheap packages that promise fixed rankings or large numbers of links. Bought links and mass-produced content can leave you with a problem that costs more to fix than the service did.",
    ],
    related: [
      { label: "Fix 'Crawled - currently not indexed'", href: "/guides/fix-crawled-currently-not-indexed/" },
      { label: "SEO prices in South Africa", href: "/guides/seo-prices-south-africa/" },
      { label: "Why your website is not ranking", href: "/guides/why-your-website-is-not-ranking/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Website design & development", href: "/services/web-development/" },
      { label: "Real estate SEO & listings", href: "/guides/real-estate-website-seo-south-africa/" },
      { label: "Trades, plumbing & solar SEO", href: "/guides/trades-plumber-solar-website-seo-south-africa/" },
      { label: "Logistics & freight SEO", href: "/guides/logistics-company-website-seo-south-africa/" },
    ],
    faqs: [
      {
        question: "How long does SEO take to show measurable results in South Africa?",
        answer:
          "Technical and indexing repairs typically show inside two to six weeks, while competitive commercial keywords generally take four to nine months to compound. Read realistic milestones in our [SEO timeline guide](/guides/how-long-does-seo-take-south-africa/).",
      },
      {
        question: "Why should businesses avoid agencies that guarantee page-one Google rankings?",
        answer:
          "No third party can control Google's ranking algorithm, so guarantees usually hide low-value brand terms or risky automated links. We back every recommendation with live Search Console evidence you can verify yourself.",
      },
      {
        question: "Why are my website pages not being indexed by Google?",
        answer:
          "Pages stay out of Google's index due to technical crawl blocks, weak internal links, thin content or hundreds of duplicate doorway URLs. Check our guides for fixing ['Crawled - currently not indexed'](/guides/fix-crawled-currently-not-indexed/) and ['Discovered - currently not indexed'](/guides/fix-discovered-currently-not-indexed/).",
      },
      {
        question: "How does local SEO differ from national SEO in South Africa?",
        answer:
          "Local SEO targets metro Map Pack packs and verified branches via Google Business Profile, while national SEO builds authoritative service hubs and buyer guides across all nine provinces. Compare both in our [local vs national SEO guide](/guides/local-seo-vs-national-seo-south-africa/).",
      },
      {
        question: "Do I need more blog posts to rank higher on Google?",
        answer:
          "Not automatically. Publishing more weak posts can drag site quality down; strengthening core service pages, internal links and Search Console errors first usually drives faster leads. See our [why your website is not ranking guide](/guides/why-your-website-is-not-ranking/).",
      },
      {
        question: "What account access do you need to begin SEO work?",
        answer:
          "Google Search Console is the primary starting point, followed by analytics and read or developer access to your CMS or codebase. If Search Console is not configured yet, our [Search Console guide](/guides/google-search-console-guide-business-owners/) walks through setup.",
      },
      {
        question: "What does your free SEO audit check first?",
        answer:
          "We review indexing coverage, canonical and redirect chains, mobile Core Web Vitals, service page search intent and local trust signals, delivering an actionable priority list. Request yours on the [Free SEO Audit form](/contact/?service=free-seo-audit#contact-form).",
      },
      {
        question: "Should a South African business invest in Google Ads or SEO?",
        answer:
          "Google Ads delivers immediate enquiries while campaigns stay funded, whereas SEO lowers long-term acquisition cost across organic and Map Pack searches. Compare budgets in our [Google Ads vs SEO guide](/guides/google-ads-vs-seo-south-africa/).",
      },
      {
        question: "Can you optimise our Google Business Profile for Maps visibility?",
        answer:
          "Yes. We align primary categories, service-area settings, clean UTM website links, photo cadence and review workflows while avoiding suspension triggers. Read our [Google Business Profile guide](/guides/google-business-profile-south-africa/).",
      },
      {
        question: "How much do SEO services cost per month or once-off in South Africa?",
        answer:
          "Once-off technical audits and focused fixes suit lean teams, while ongoing SME SEO campaigns typically range from R4,500 to R15,000+ per month depending on market competition and content scope. Check our [SEO prices guide](/guides/seo-prices-south-africa/).",
      },
      {
        question: "How do you build authority without risky backlinks or doorway pages?",
        answer:
          "We consolidate duplicate town templates, craft high-intent service pages and industry playbooks that earn genuine citations, and reinforce [internal link architecture](/guides/internal-linking-guide-for-business-websites/). See why [duplicate location pages hurt SEO](/guides/why-duplicate-location-pages-hurt-seo/).",
      },
      {
        question: "What do your monthly Google Search Console reports show?",
        answer:
          "Monthly reports track indexed page counts, non-branded query impressions, clicks to money pages, completed technical tasks and the next month's priorities in plain business language—never vanity metrics.",
      },
    ],
    serviceType: "Search Engine Optimisation",
  },
  {
    slug: "website-security",
    title: "Website & Cyber Security",
    metaTitle: "Website Security & Hack Recovery South Africa | SoftKore",
    description:
      "Protect or recover your South African business website. Malware removal, hacked site recovery, WAF firewalls, hardening, POPIA checks & monitoring.",
    eyebrow: "Website & Cyber Security",
    h1: "Website & cyber security for South African businesses.",
    intro:
      "We protect business websites from hacks, malware, defacement and data leaks, clean and restore compromised sites, and lock down weak points before attackers find them.",
    primaryCta: "Request a Security Review",
    secondaryCta: "See the Security Checklist",
    secondaryHref: "/guides/website-security-checklist/",
    summaryTitle: "Website security work can include",
    summary: [
      "Security audits and vulnerability checks",
      "Website hardening and firewall (WAF) setup",
      "Malware removal and hacked site recovery",
      "SSL/TLS, HTTP security headers and DNS protection",
      "Off-site backups, patching and security monitoring",
    ],
    bodyHeading: "Most website breaches start with a small gap that nobody was watching.",
    body: [
      "An unpatched plugin, an old developer account with admin access, a reused password, or missing HTTP security headers rarely looks urgent until your website starts redirecting visitors to spam, Google flags your domain as unsafe, or customer enquiries are intercepted.",
      "A security breach does not just take a site offline. It can wipe out search rankings overnight, trigger browser warnings that turn buyers away, and expose personal information you are required to protect under POPIA.",
      "We help businesses lock down existing websites before an attack happens, and recover cleanly when a site has already been compromised.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits South African businesses that depend on their website for leads, bookings or sales and want confidence that their site, hosting and customer data are properly protected. It also fits teams running WordPress or custom sites where nobody is currently checking updates, access permissions or backups.",
      "If your website has already been hacked, defaced, infected with spam links or flagged in Google Search Console, we also step in to contain the issue, remove the malicious code and close the entry point.",
    ],
    featureTitle: "What our security work covers",
    featureIntro:
      "Effective website security combines prevention, hardening, monitoring and a tested recovery plan rather than relying on a single plugin.",
    features: [
      {
        title: "Security audits & vulnerability assessments",
        text: "We review your codebase, CMS, plugins, user accounts, server configuration, SSL setup and HTTP headers to surface real risks in priority order.",
      },
      {
        title: "Website hardening & access control",
        text: "We remove unused accounts and plugins, enforce least-privilege roles and multi-factor authentication, tighten file permissions and add security headers.",
      },
      {
        title: "Firewall (WAF) & DDoS protection",
        text: "We configure a web application firewall, rate limiting and bot filtering to block common injection, brute-force and automated scraping attacks.",
      },
      {
        title: "Malware removal & hack recovery",
        text: "We isolate compromised sites, strip injected backdoors and spam pages, rotate exposed credentials and help request Google Search Console security reviews.",
      },
      {
        title: "Software patching & dependency security",
        text: "We test and apply core, plugin, theme and package updates safely, watching for vulnerable dependencies before attackers exploit them.",
      },
      {
        title: "Off-site backups & continuous monitoring",
        text: "We set up encrypted off-site backups with verified restores alongside uptime, file-integrity and SSL/domain expiry monitoring.",
      },
    ],
    southAfricaHeading: "Practical cyber security for South African websites",
    southAfrica: [
      "Under POPIA, any South African business collecting names, email addresses, phone numbers or customer records through a website must take reasonable technical measures to secure that personal information against loss or unauthorised access. We tighten form handling, transport security and access logs as practical engineering safeguards alongside your legal advice.",
      "We also look beyond the HTML itself: protecting your .co.za domain against unauthorised transfers, configuring SPF, DKIM and DMARC records so scammers cannot spoof your domain in phishing emails, and checking that your SSL certificates and redirects cannot be abused.",
      "Whether your site runs on WordPress, Next.js or another web stack, we deliver audits, hardening and emergency clean-ups remotely for businesses across all nine provinces.",
    ],
    processTitle: "How we secure a website",
    processBody: [
      "We follow a structured sequence so you know what was at risk, what was locked down, and how your site stays protected afterwards.",
    ],
    processItems: [
      {
        title: "Audit & threat check",
        text: "We inspect the live site, hosting environment, user logins, DNS records and Search Console warnings, taking a clean baseline backup first.",
      },
      {
        title: "Harden & lock down",
        text: "We remove unnecessary exposure, apply security headers and firewall rules, lock down admin access and secure DNS/email authentication.",
      },
      {
        title: "Clean or patch",
        text: "If malware or vulnerabilities exist, we remove malicious files, rotate passwords and API keys, and bring software and dependencies up to date.",
      },
      {
        title: "Monitor & verify",
        text: "We put off-site backups, uptime alerts and regular security checks in place, then test forms and key pages to confirm everything works normally.",
      },
    ],
    costHeading: "What affects the cost of website security",
    cost: [
      "Cost depends on whether you need a once-off [security audit](/guides/website-security-audit-what-it-checks/) and hardening, urgent malware clean-up on a hacked site, or ongoing monthly patching, monitoring and backups. Site complexity, hosting access and the number of plugins or integrations also affect scope.",
      "Emergency hack recovery almost always costs more than preventative hardening. Starting with a focused security audit or [website maintenance review](/guides/website-maintenance-cost-south-africa/) is a practical way to see your real exposure before deciding on ongoing cover.",
    ],
    related: [
      { label: "Hacked website recovery guide", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Website design & development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Medical practice POPIA & security", href: "/guides/medical-practice-website-seo-south-africa/" },
      { label: "Construction invoice-fraud protection", href: "/guides/construction-company-website-seo-south-africa/" },
      { label: "Real estate trust-account security", href: "/guides/real-estate-website-seo-south-africa/" },
    ],
    faqs: [
      {
        question: "My website has been hacked or shows spam in Google. Can you fix it?",
        answer:
          "Yes. We trace how attackers breached the site, strip malware and hidden backdoors, rotate passwords and keys, close entry points and submit clean Search Console reviews. Read our [hacked website recovery guide](/guides/hacked-website-recovery-south-africa/).",
      },
      {
        question: "Does having an SSL padlock mean my website is fully secure?",
        answer:
          "No. HTTPS only encrypts traffic in transit between browser and server; attackers still exploit unpatched plugins, weak admin passwords, missing [HTTP security headers](/guides/http-security-headers-explained/) and exposed hosting panels.",
      },
      {
        question: "Can you secure a WordPress website you did not originally build?",
        answer:
          "Yes. WordPress sites are targeted frequently via outdated themes, abandoned developer logins and file permissions. Read [why WordPress sites get hacked in South Africa](/guides/why-wordpress-websites-get-hacked-south-africa/) or request an audit via our [contact page](/contact/).",
      },
      {
        question: "How does website security support POPIA compliance in South Africa?",
        answer:
          "POPIA requires reasonable technical safeguards for personal information collected through enquiry forms and customer portals, including encryption, access control, spam filtering and breach readiness. See our [POPIA website checklist](/guides/popia-website-compliance-checklist/).",
      },
      {
        question: "Will a website hack or malware infection damage Google SEO rankings?",
        answer:
          "Yes. Injected pharma or casino spam pages, malicious redirects and browser warnings quickly drop rankings and customer trust. Fast clean-up and clean HTTP 410 handling let Google re-index legitimate pages safely.",
      },
      {
        question: "Do you offer ongoing security monitoring after a site is hardened?",
        answer:
          "Yes. Monthly security cover includes controlled patching, verified off-site backups, SSL and uptime monitoring, WAF checks and live form delivery tests so security gaps do not creep back in.",
      },
      {
        question: "How do you remove a Google 'Deceptive site ahead' warning?",
        answer:
          "First we eradicate all malicious payloads, redirects and compromised admin accounts across your server, then submit a verified cleanup review in Google Search Console. Follow our [Google deceptive warning guide](/guides/remove-google-deceptive-site-ahead-warning/).",
      },
      {
        question: "How does a Cloudflare WAF protect against bots and automated attacks?",
        answer:
          "An edge Web Application Firewall filters SQL injection, XSS probes, credential-stuffing bots and abusive scraping before requests touch your origin server. Learn more in our [Cloudflare WAF guide](/guides/website-firewall-waf-cloudflare-south-africa/).",
      },
      {
        question: "Can you fix SPF, DKIM and DMARC records so scammers stop spoofing our domain?",
        answer:
          "Yes. We audit and configure DNS SPF, DKIM and enforced DMARC policies so mail servers block spoofed invoices and phishing sent in your brand's name. Read our [SPF, DKIM and DMARC guide](/guides/spf-dkim-dmarc-guide-south-africa/).",
      },
      {
        question: "How should off-site website backups be structured for reliable recovery?",
        answer:
          "Follow a 3-2-1 approach: encrypted snapshots stored off your main hosting server in separate accounts with regular restore tests so ransomware cannot wipe backups too. Check our [off-site backup guide](/guides/offsite-website-backups-south-africa/).",
      },
      {
        question: "How do we prevent .co.za domain hijacking and unauthorised registrar transfers?",
        answer:
          "Keep domain registration in your company's own name, lock transfer settings, enable phishing-resistant 2FA on registrar and DNS dashboards and restrict billing contacts. See our [domain hijacking protection guide](/guides/protecting-domain-hijacking-co-za/).",
      },
      {
        question: "How quickly can you respond to an urgent site compromise or security audit?",
        answer:
          "We triage urgent hacked sites immediately and typically complete cleanup, credential rotation and baseline hardening within 24 to 72 hours, while preventative [security audits](/guides/website-security-audit-what-it-checks/) deliver a ranked report within days.",
      },
    ],
    serviceType: "Website and Cyber Security",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
