/**
 * Core Service Pillar Pages (/services/web-development/, /services/seo-services/, /services/website-security/).
 *
 * Notes for future edits:
 * - Each service page carries 12 unique commercial-intent FAQs (zero overlap with /, /services/,
 *   other core hub pages, or guides).
 * - ServiceTemplate renders body, fit, southAfrica, cost, and faqs[].answer through RichText,
 *   so root-relative [anchor](/path/) links work directly in copy and answers (never in questions).
 * - `related` links include published Industry Playbooks; never link to status: "scheduled" guides.
 */
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
      "Fast business websites built for South African phones and customers. Clear service pages, set up for Google from day one, with POPIA-ready forms and security.",
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
      "Set up for Google from day one",
      "Built securely, with the padlock (HTTPS) and working forms",
      "Visitor tracking and checks before launch",
    ],
    bodyHeading: "A website has one job: help the right person choose you.",
    body: [
      "Most small business websites fail in predictable ways. The homepage talks about the company instead of the customer, services are squeezed onto one page, the phone number is hard to find on mobile, and nobody can tell what to do next. A new design does not fix any of that on its own.",
      "We start with the decisions your customer has to make: do you offer what they need, can they trust you, what will it roughly involve, and how do they get in touch? The page structure, copy and design are then built around those answers, so the site works as a sales tool and not only as an online brochure.",
      "Because the Google set-up and security are built in from the start, you avoid a common and expensive mistake: launching first, then paying later to fix the site for Google or close its security gaps.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits service businesses, professional firms, trades, clinics, manufacturers and B2B suppliers that need a website customers can act on. It is also a good fit if your current site looks dated, performs badly on phones, or brings in very few enquiries.",
      "Whether you need a simple company website, a full redesign or an online store, we build it light and secure, so it is quick to browse and easy for Google to read and list.",
    ],
    featureTitle: "What we build",
    featureIntro:
      "The scope depends on how you sell. These are the website types South African businesses most often need from us.",
    features: [
      {
        title: "Business and service websites",
        text: "A page for each service, answering what customers ask first.",
      },
      {
        title: "Website redesigns",
        text: "A fresh design that keeps your Google rankings and old links.",
      },
      {
        title: "Landing pages",
        text: "One offer, one clear action, no distractions.",
      },
      {
        title: "Ecommerce websites",
        text: "Online stores with local payments and delivery options.",
      },
      {
        title: "Rebuilds for slow sites",
        text: "Slow or overloaded sites rebuilt fast, without losing rankings.",
      },
      {
        title: "Launch and handover",
        text: "Everything checked on the live site before we finish.",
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
        text: "We clarify your services, customers, competitors and what a good enquiry looks like. If you have an existing site, we also check how it performs on Google and how secure it is.",
      },
      {
        title: "Structure and content",
        text: "We agree the pages, navigation and key messages, then write or refine the copy. Your real proof, such as projects and reviews, goes in here.",
      },
      {
        title: "Design and build",
        text: "You review the design on real pages, not just pictures, while we build pages that are fast, work on every screen size and are locked down against hackers.",
      },
      {
        title: "Launch and support",
        text: "We test forms, links, redirects, security settings and the phone experience, then launch, check the live site and submit it to Google Search Console (Google's free reporting tool).",
      },
    ],
    costHeading: "What affects the cost of a website",
    cost: [
      "The main cost drivers are the number of unique pages, who writes the content, how custom the design is, and whether the site needs features such as online payments or custom integrations. A redesign with many existing pages also needs planning so old links keep working.",
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
          "Yes. We work remotely with businesses across all nine provinces of South Africa. First meetings, reviews of a private preview of your new site and final sign-off all happen by video call, email and WhatsApp. Start a conversation through our [contact page](/contact/).",
      },
      {
        question: "What do I need to prepare before starting a website project?",
        answer:
          "Prepare a list of your core services, ideal customers, access to your current domain or hosting if you have them, examples of websites you like and real proof such as project photos or reviews. We guide you through the rest in our first meetings.",
      },
      {
        question: "Will my new website rank on Google automatically at launch?",
        answer:
          "No website ranks automatically. At launch we make sure your pages are fast, easy for Google to read and properly labelled, and we hand Google a list of your pages. After that, rankings depend on competition, how many people search and how helpful your pages are. Pair your build with our [SEO services](/services/seo-services/) or start with our [technical SEO checklist](/guides/technical-seo-checklist/).",
      },
      {
        question: "Can you redesign my site without losing existing Google rankings?",
        answer:
          "Yes. Before launch we list every page Google currently shows for your site, keep the strongest pages where possible and set up a redirect for every page that moves, so old links and rankings carry over to the new site. Follow our full [website redesign SEO checklist](/guides/website-redesign-seo-checklist/).",
      },
      {
        question: "Can I update the website content and pages myself after launch?",
        answer:
          "Yes, if editing the site yourself suits how you work. In our first meetings we decide whether you need an easy editing system you control, or a lighter custom-built site that we update for you through our [monthly maintenance plans](/guides/website-maintenance-cost-south-africa/).",
      },
      {
        question: "Do you write the website copy or refine existing drafts?",
        answer:
          "We do both. We interview your team to find real proof, exactly what you offer and the questions local customers ask, then write or tighten the wording so your pages turn visitors into enquiries. We follow our own [SEO copywriting best practices](/guides/seo-copywriting-guide-south-africa/).",
      },
      {
        question: "What is the typical timeline to build a South African business website?",
        answer:
          "Most company websites go live three to six weeks after the scope is agreed and your content is ready. Online stores and complex redesigns take six to ten weeks. See each stage, week by week, in our [website build timeline guide](/guides/how-long-to-build-a-website-south-africa/).",
      },
      {
        question: "Should we choose WordPress or a custom Next.js website?",
        answer:
          "Choose a custom-built site (we use Next.js) when speed, low upkeep and strong security matter most. Choose WordPress when your team wants to publish updates themselves every day, and keep its plugins to a minimum. Compare both in our [WordPress vs custom website guide](/guides/wordpress-vs-custom-website-south-africa/).",
      },
      {
        question: "Which South African payment gateways do you integrate for ecommerce?",
        answer:
          "We connect PayFast, Yoco or Ozow so local customers can pay by card, Capitec Pay or Instant EFT, and set up delivery options with couriers such as Bob Go or The Courier Guy. Compare fees in our [PayFast vs Yoco vs Ozow guide](/guides/payfast-vs-yoco-vs-ozow-south-africa/).",
      },
      {
        question: "What affects the final cost of a new website build in rand?",
        answer:
          "The price depends on how many pages need their own design, who writes the wording, whether the design is fully custom or built on a ready-made layout, any online payments or bookings, and how much content must move from an old site. See realistic prices in rand in our [website prices guide](/guides/website-prices-south-africa/) or [ecommerce cost guide](/guides/ecommerce-website-cost-south-africa/).",
      },
      {
        question: "Who owns the hosting account, code and domain name?",
        answer:
          "Your business owns the domain, the hosting account and the finished website code once the final invoice is paid, so you are never tied to us. Read our [guide to choosing a web design company](/guides/how-to-choose-web-design-company-south-africa/) to see what contracts should state.",
      },
      {
        question: "What happens with hosting, updates and backups after launch?",
        answer:
          "Before launch every site passes a final checklist: forms working, the padlock (HTTPS) on, security settings in place and the site submitted to Google. After that, a [website security and maintenance plan](/services/website-security/) can keep it updated, check it stays online and keep [backups stored away from your server](/guides/offsite-website-backups-south-africa/).",
      },
    ],
    serviceType: "Website Design and Development",
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    metaTitle: "SEO Services South Africa | Audits & Indexing | SoftKore",
    description:
      "South African SEO services: we find out why Google isn't showing your pages, fix 'Crawled - currently not indexed' errors, improve service pages and report honestly.",
    eyebrow: "SEO Services",
    h1: "SEO services for South African businesses.",
    intro:
      "Start with a free SEO audit: we find out why your website is not being found, fix what is holding it back, and improve the pages that can bring you paying customers, with plain reporting on what changed.",
    primaryCta: "Get a Free SEO Audit",
    secondaryCta: "Need a New Website?",
    secondaryHref: "/services/web-development/",
    summaryTitle: "SEO work can include",
    summary: [
      "Finding and fixing what stops Google showing your pages",
      "Service page and content improvements",
      "Research into what your customers actually search for",
      "Google Business Profile guidance",
      "Monthly reports from Google Search Console",
    ],
    bodyHeading: "Find the actual problem before you spend on the solution.",
    body: [
      "Low traffic can have very different causes. Google may not be able to reach your pages, or it may have looked at them and decided not to show them. Your pages may appear on Google but target searches nobody makes, or they may sit on page five because Google trusts your competitors' sites more. Each problem has a different fix, and a generic monthly SEO package rarely identifies which one applies to you.",
      "We start with your Google Search Console report (Google's free data on how your site appears in search) and a full scan of your website, so recommendations come from evidence. Then we prioritise the work most likely to bring enquiries, even if that means fixing or removing weak pages rather than publishing more.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits South African businesses with a real offer and a website that gets little search traffic, including sites that rank for the wrong terms, lost traffic after a redesign, or have many pages excluded from Google. It works best when you can share Search Console access and honest information about your customers.",
      "SEO is not the right first step for everyone. If your site needs rebuilding first, or if technical or security problems are stopping Google from listing it, we will tell you honestly where to start.",
    ],
    featureTitle: "What our SEO work covers",
    featureIntro:
      "SEO has to fix three things together: whether Google can read your site, how good your pages are, and how much Google trusts your site. Improving only one of them rarely moves results for long.",
    features: [
      {
        title: "Technical SEO audit",
        text: "A full check of what stops Google showing your pages.",
      },
      {
        title: "Getting pages back into Google",
        text: "Fixing pages Google has seen but won't show in search.",
      },
      {
        title: "Service page improvements",
        text: "Service pages rewritten to answer what buyers search for.",
      },
      {
        title: "Keyword research",
        text: "The searches real buyers use, one page for each.",
      },
      {
        title: "Local and national visibility",
        text: "Google Business Profile, listings and reviews, local or national.",
      },
      {
        title: "Reporting you can read",
        text: "A plain monthly report: what we did and what's next.",
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
        text: "We scan your whole site and review your Search Console report, your competitors and the pages that bring in business.",
      },
      {
        title: "Prioritise",
        text: "You receive a ranked list of what is blocking results, with the reason behind each item.",
      },
      {
        title: "Fix and improve",
        text: "We fix technical problems, improve or combine weak pages, and add links between your own pages so Google and visitors find the important ones.",
      },
      {
        title: "Measure and repeat",
        text: "We track how many of your pages Google shows, how often you appear in searches, where you rank and how many enquiries come in, then use that to choose the next piece of work.",
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
          "Fixes to technical problems and missing pages usually show results within two to six weeks. Ranking for competitive searches that bring paying customers usually takes four to nine months, because Google's trust in a site builds up over time. Read realistic milestones in our [SEO timeline guide](/guides/how-long-does-seo-take-south-africa/).",
      },
      {
        question: "Why should businesses avoid agencies that guarantee page-one Google rankings?",
        answer:
          "Nobody outside Google controls how it ranks websites, so a guarantee usually means ranking only for your own business name, or using risky shortcuts such as bought links. We back every recommendation with data from your own Google Search Console account that you can check yourself.",
      },
      {
        question: "Why are my website pages not being indexed by Google?",
        answer:
          "Google leaves pages out when something technical stops it reading them, when few of your other pages link to them, when they say too little, or when there are hundreds of near-identical pages. Our guides explain how to fix ['Crawled - currently not indexed'](/guides/fix-crawled-currently-not-indexed/) and ['Discovered - currently not indexed'](/guides/fix-discovered-currently-not-indexed/).",
      },
      {
        question: "How does local SEO differ from national SEO in South Africa?",
        answer:
          "Local SEO helps nearby customers find you, mainly through Google's map results and your Google Business Profile. National SEO builds strong service pages and helpful guides that can rank across all nine provinces. Compare both in our [local vs national SEO guide](/guides/local-seo-vs-national-seo-south-africa/).",
      },
      {
        question: "Do I need more blog posts to rank higher on Google?",
        answer:
          "Not automatically. Publishing lots of weak posts can make Google think less of your whole site. Strengthening your main service pages, linking your pages together and fixing the errors in Search Console usually brings enquiries faster. See our [why your website is not ranking guide](/guides/why-your-website-is-not-ranking/).",
      },
      {
        question: "What account access do you need to begin SEO work?",
        answer:
          "Google Search Console is where we start, followed by your website analytics and access to the system you edit your website with, or to its code. If Search Console isn't set up yet, our [Search Console guide](/guides/google-search-console-guide-business-owners/) walks you through it step by step.",
      },
      {
        question: "What does your free SEO audit check first?",
        answer:
          "We check how many of your pages Google lists, whether old links redirect properly, how fast your pages are on phones, whether each service page matches what people search for and how much local customers will trust what they see. You get a clear list of what to fix first. Request yours on the [Free SEO Audit form](/contact/?service=free-seo-audit#contact-form).",
      },
      {
        question: "Should a South African business invest in Google Ads or SEO?",
        answer:
          "Google Ads brings enquiries straight away, but only while you keep paying. SEO takes longer, but over time it brings customers through normal search and map results without paying for every click. Many businesses use both. Compare budgets in our [Google Ads vs SEO guide](/guides/google-ads-vs-seo-south-africa/).",
      },
      {
        question: "Can you optimise our Google Business Profile for Maps visibility?",
        answer:
          "Yes. We set the right business categories and the areas you serve, add a trackable link to your website, plan regular photos and set up a simple way to ask for reviews, while avoiding the mistakes that get profiles suspended. Read our [Google Business Profile guide](/guides/google-business-profile-south-africa/).",
      },
      {
        question: "How much do SEO services cost per month or once-off in South Africa?",
        answer:
          "A once-off audit and focused fixes suit smaller budgets. Ongoing SEO for small and medium businesses usually costs R4,500 to R15,000+ per month, depending on how competitive your market is and how much content we write. Check our [SEO prices guide](/guides/seo-prices-south-africa/).",
      },
      {
        question: "How do you build authority without risky backlinks or doorway pages?",
        answer:
          "We combine copied town pages into strong ones, write useful service pages and industry guides that other sites want to mention, and link your own pages together sensibly, as our [internal linking guide](/guides/internal-linking-guide-for-business-websites/) explains. See why [duplicate location pages hurt SEO](/guides/why-duplicate-location-pages-hurt-seo/).",
      },
      {
        question: "What do your monthly Google Search Console reports show?",
        answer:
          "Each month you see how many of your pages Google shows, how often people find you through searches that don't include your business name, clicks to the pages that bring in sales, the work we completed and what comes next. It is all in plain business language, with no numbers that only look good.",
      },
    ],
    serviceType: "Search Engine Optimisation",
  },
  {
    slug: "website-security",
    title: "Website & Cyber Security",
    metaTitle: "Website Security & Hack Recovery South Africa | SoftKore",
    description:
      "Protect or recover your South African business website: hack clean-ups, malware removal, firewalls, security checks, POPIA checks and monitoring.",
    eyebrow: "Website & Cyber Security",
    h1: "Website & cyber security for South African businesses.",
    intro:
      "We protect business websites from hacks, malware, defacement and data leaks, clean and restore compromised sites, and lock down weak points before attackers find them.",
    primaryCta: "Request a Security Review",
    secondaryCta: "See the Security Checklist",
    secondaryHref: "/guides/website-security-checklist/",
    summaryTitle: "Website security work can include",
    summary: [
      "Security checks to find weak spots",
      "Locking down your site and adding a firewall",
      "Malware removal and hacked site recovery",
      "The padlock (HTTPS), browser security settings and domain protection",
      "Backups, safe updates and security monitoring",
    ],
    bodyHeading: "Most website breaches start with a small gap that nobody was watching.",
    body: [
      "An out-of-date plugin, an old developer login that still works, a reused password or missing browser security settings rarely looks urgent until your website starts redirecting visitors to spam, Google flags your domain as unsafe, or customer enquiries are intercepted.",
      "A security breach does not just take a site offline. It can wipe out search rankings overnight, trigger browser warnings that turn buyers away, and expose personal information you are required to protect under POPIA.",
      "We help businesses lock down existing websites before an attack happens, and recover cleanly when a site has already been compromised.",
    ],
    fitHeading: "Who this is for",
    fit: [
      "This service suits South African businesses that depend on their website for leads, bookings or sales and want confidence that their site, hosting and customer data are properly protected. It also fits teams running WordPress or custom sites where nobody is currently checking updates, access permissions or backups.",
      "If your website has already been hacked, defaced, infected with spam links or flagged in Google Search Console, we step in to stop the damage, remove the harmful code and close the gap the hackers used.",
    ],
    featureTitle: "What our security work covers",
    featureIntro:
      "Good website security means preventing attacks, locking the site down, keeping watch and having a tested way to restore it, not relying on a single plugin.",
    features: [
      {
        title: "Security audits",
        text: "Your real security risks, listed in order of importance.",
      },
      {
        title: "Locking down your site and logins",
        text: "Unused accounts removed, strong logins and tighter settings.",
      },
      {
        title: "Firewall and attack protection",
        text: "A firewall that blocks hackers and bots before they arrive.",
      },
      {
        title: "Malware removal & hack recovery",
        text: "Hackers cut off, harmful code removed, Google warnings cleared.",
      },
      {
        title: "Safe software updates",
        text: "Updates tested and installed safely, before hackers strike.",
      },
      {
        title: "Backups and monitoring",
        text: "Tested backups and alerts if anything goes wrong.",
      },
    ],
    southAfricaHeading: "Practical cyber security for South African websites",
    southAfrica: [
      "Under POPIA, any South African business collecting names, email addresses, phone numbers or customer records through a website must take reasonable technical measures to secure that personal information against loss or unauthorised access. We secure your forms, the connection to your site and who can see customer data, as practical safeguards alongside your legal advice.",
      "We also look beyond the website itself: protecting your .co.za domain from being transferred without permission, setting up email security records (SPF, DKIM and DMARC) so scammers can't send fake emails in your name, and checking that your padlock certificate and redirects can't be misused.",
      "Whether your site runs on WordPress or is custom-built, we do security checks, lock-downs and emergency clean-ups remotely for businesses across all nine provinces.",
    ],
    processTitle: "How we secure a website",
    processBody: [
      "We follow a structured sequence so you know what was at risk, what was locked down, and how your site stays protected afterwards.",
    ],
    processItems: [
      {
        title: "Check for threats",
        text: "We inspect the live site, your hosting, user logins, domain settings and any Google warnings, after first taking a clean backup.",
      },
      {
        title: "Lock it down",
        text: "We close unnecessary openings, add browser security settings and firewall rules, restrict admin access and secure your domain and email settings.",
      },
      {
        title: "Clean or patch",
        text: "If we find harmful code or security gaps, we remove the harmful files, change passwords and access keys, and bring all your software up to date.",
      },
      {
        title: "Monitor & verify",
        text: "We put backups, alerts if the site goes down and regular security checks in place, then test forms and key pages to confirm everything works normally.",
      },
    ],
    costHeading: "What affects the cost of website security",
    cost: [
      "Cost depends on whether you need a once-off [security audit](/guides/website-security-audit-what-it-checks/) and lock-down, an urgent clean-up of a hacked site, or ongoing monthly updates, monitoring and backups. Site complexity, hosting access and the number of plugins or integrations also affect scope.",
      "Fixing a hacked site almost always costs more than preventing the hack. Starting with a focused security audit or [website maintenance review](/guides/website-maintenance-cost-south-africa/) is a practical way to see your real risks before deciding on ongoing cover.",
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
          "Yes. We find out how the hackers got in, remove the harmful code and hidden back doors, change passwords and access keys, close the gap they used and ask Google to review the cleaned site. Read our [hacked website recovery guide](/guides/hacked-website-recovery-south-africa/).",
      },
      {
        question: "Does having an SSL padlock mean my website is fully secure?",
        answer:
          "No. The padlock (HTTPS) only protects information travelling between your visitor and your site. Hackers still get in through out-of-date plugins, weak admin passwords, missing browser security settings ([HTTP security headers](/guides/http-security-headers-explained/)) and exposed hosting control panels, so the padlock is only one part of website security.",
      },
      {
        question: "Can you secure a WordPress website you did not originally build?",
        answer:
          "Yes. WordPress sites are often hacked through outdated themes, old developer logins that were never removed and loose file settings, and we fix all three. Read [why WordPress sites get hacked in South Africa](/guides/why-wordpress-websites-get-hacked-south-africa/) or request an audit via our [contact page](/contact/).",
      },
      {
        question: "How does website security support POPIA compliance in South Africa?",
        answer:
          "POPIA requires reasonable security for personal information collected through enquiry forms and customer portals. On a website that means encrypting the connection, controlling who can see the data, filtering spam and being ready to respond if there is a breach. See our [POPIA website checklist](/guides/popia-website-compliance-checklist/).",
      },
      {
        question: "Will a website hack or malware infection damage Google SEO rankings?",
        answer:
          "Yes. Hidden spam pages (often for pills or casinos), redirects to dodgy sites and browser warnings quickly push down your rankings and your customers' trust. Cleaning up fast, and telling Google the spam pages are gone for good, lets Google list your real pages again.",
      },
      {
        question: "Do you offer ongoing security monitoring after a site is hardened?",
        answer:
          "Yes. Once your site is locked down, monthly security cover keeps it that way: careful software updates, tested backups stored away from your server, padlock and downtime monitoring, firewall checks and regular test messages through your forms, so security gaps don't creep back in.",
      },
      {
        question: "How do you remove a Google 'Deceptive site ahead' warning?",
        answer:
          "First we remove every piece of harmful code, every bad redirect and every hacked admin account from your server. Then we ask Google to review the cleaned site through Google Search Console, which is how the warning is lifted. Follow our [Google deceptive warning guide](/guides/remove-google-deceptive-site-ahead-warning/).",
      },
      {
        question: "How does a Cloudflare WAF protect against bots and automated attacks?",
        answer:
          "A website firewall sits in front of your site and blocks hacking attempts, password-guessing bots and data scraping before they ever reach your server. Cloudflare is a popular way to set one up. Learn more in our [Cloudflare WAF guide](/guides/website-firewall-waf-cloudflare-south-africa/).",
      },
      {
        question: "Can you fix SPF, DKIM and DMARC records so scammers stop spoofing our domain?",
        answer:
          "Yes. SPF, DKIM and DMARC are email security records on your domain. We check them and set them up properly, so other mail servers block fake invoices and phishing emails sent in your business's name. Read our [SPF, DKIM and DMARC guide](/guides/spf-dkim-dmarc-guide-south-africa/).",
      },
      {
        question: "How should off-site website backups be structured for reliable recovery?",
        answer:
          "Use the 3-2-1 rule: keep three copies of your website, on two different types of storage, with one stored away from your hosting company in a separate account. Encrypt them and test restoring them regularly, so ransomware can't wipe your backups too. Check our [off-site backup guide](/guides/offsite-website-backups-south-africa/).",
      },
      {
        question: "How do we prevent .co.za domain hijacking and unauthorised registrar transfers?",
        answer:
          "Keep the domain registered in your company's own name, switch on the transfer lock, protect your domain and DNS logins with strong two-step verification, and limit who receives billing emails. These steps make it much harder for anyone to take your domain. See our [domain hijacking protection guide](/guides/protecting-domain-hijacking-co-za/).",
      },
      {
        question: "How quickly can you respond to an urgent site compromise or security audit?",
        answer:
          "We look at urgent hacked sites straight away and usually finish the clean-up, password changes and basic lock-down within 24 to 72 hours. A preventative [security audit](/guides/website-security-audit-what-it-checks/) gives you a ranked report within days, listing what to fix first and why each item matters.",
      },
    ],
    serviceType: "Website and Cyber Security",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
