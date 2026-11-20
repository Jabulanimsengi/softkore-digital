import type { GuidePage } from "./types";

export const coreGuides: GuidePage[] = [
  {
    slug: "website-prices-south-africa",
    category: "Website Design & Development",
    status: "published",
    title: "Website Prices in South Africa: What Affects the Cost",
    metaTitle: "Website Prices in South Africa (2026 Guide) | SoftKore",
    description:
      "How much does a website cost in South Africa? Realistic ZAR price brackets from Under R25,000 to R150,000+, what drives quotes, and hidden running costs.",
    intro:
      "Most South African SME websites cost between R15,000 and R75,000 once-off, while custom ecommerce builds and web applications run from R75,000 to R150,000+. Two quotes can differ by five times because one agency prices a template brochure and the other scopes research, copywriting, technical SEO and launch security.",
    summary: [
      "What drives the price",
      "Typical ZAR price tiers",
      "Running & security costs",
      "Questions to ask",
    ],
    takeaways: [
      "Starter brochure sites sit under R25,000 when copy and photos are supplied upfront.",
      "Lead-generating service websites with custom copy, mobile speed and technical SEO typically cost R25,000 to R75,000.",
      "Custom ecommerce or integrated web portals run from R75,000 to R150,000+ depending on payment, courier and ERP scope.",
      "Always budget separately for .co.za domain renewals, hosting, SSL monitoring, email authentication and ongoing security patching.",
      "Compare every proposal line by line—omitted redirects, SEO metadata or form protection usually become expensive post-launch fixes.",
    ],
    sections: [
      {
        title: "Typical website price brackets in South Africa (ZAR)",
        body: [
          "The clearest way to benchmark quotes in South Africa is by commercial outcome rather than page count alone. A three-page template designed to confirm your address for word-of-mouth referrals requires very different engineering from a service site built to win enquiries from Google Johannesburg, Cape Town or Durban buyers.",
          "Use the indicative ZAR ranges below as a realistic market benchmark before comparing individual supplier proposals. Every figure assumes clean mobile performance and standard HTTPS encryption from launch day.",
        ],
        table: {
          caption: "Indicative once-off website build brackets in South Africa (ZAR)",
          headers: ["Build tier", "Typical budget (ZAR)", "Best suited for", "What is usually included"],
          rows: [
            [
              "Focused Starter / Brochure",
              "R12,000 – R25,000",
              "New practices, trades or referral-led firms needing credibility",
              "3–5 core pages, semi-custom layout, contact form, WhatsApp link, basic HTTPS and mobile responsiveness",
            ],
            [
              "Commercial Service Site",
              "R25,000 – R75,000",
              "Established SMEs relying on Google search and inbound enquiries",
              "Dedicated service pages, commercial copywriting, technical SEO, 301 redirect map, Search Console & security headers",
            ],
            [
              "Ecommerce Store",
              "R35,000 – R110,000",
              "Retailers shipping physical goods via PayFast, Yoco or Ozow",
              "Catalogue setup, courier rules (Bob Go / The Courier Guy), VAT invoicing, checkout hardening and transactional email",
            ],
            [
              "Custom Web Platform / Portal",
              "R75,000 – R150,000+",
              "Multi-branch businesses, B2B trade portals or bespoke quoting tools",
              "Custom React/Next.js frontend, ERP or CRM API integrations, role-based portals, SLA monitoring and strict WAF rules",
            ],
          ],
        },
        callout: {
          tone: "note",
          heading: "Fixed scope beats vague 'per page' estimating",
          text: "Be cautious when an agency quotes purely by multiplying pages. Ten duplicated town pages take less effort than a single high-converting flagship service page backed by competitor research, clean schema and custom graphics.",
        },
      },
      {
        title: "Six factors that actually drive website pricing",
        body: [
          "When clients ask why one web developer quotes R18,000 and another quotes R60,000 for seemingly identical briefs, the gap almost always hides inside six line items. Knowing which ones matter to your revenue prevents overpaying for bells and whistles or buying a cheap site that fails to convert.",
        ],
        subsections: [
          {
            heading: "Copywriting and commercial positioning",
            body: [
              "Placeholder text makes every mockup look polished, yet words are what persuade a wary buyer to pick up the phone. Professional conversion copywriting involves interviewing your team, translating technical jargon into plain client benefits and structuring clear calls to action.",
              "If your team writes the copy internally, factor in three to six weeks of calendar delay while busy directors draft and sign off text. Paying an experienced writer upfront often speeds up launch by a full month.",
            ],
          },
          {
            heading: "Custom architecture vs pre-built WordPress themes",
            body: [
              "Buying an existing WordPress theme keeps visual setup fast, though heavy page builders frequently ship bloated CSS, slow mobile load times and constant plugin update obligations. A bespoke frontend built cleanly in Next.js or lightweight custom code costs more upfront but runs faster, avoids third-party theme vulnerabilities and lasts years longer without visual rot.",
            ],
          },
          {
            heading: "Integrations, migrations and launch protection",
            body: [
              "Connecting HubSpot, Xero, PayFast, Ozow, booking calendars or custom quote calculators requires API engineering and edge-case testing. Similarly, replacing an older domain requires mapping every legacy URL through single-hop 301 redirects so you do not erase years of Google authority overnight.",
            ],
          },
        ],
        bullets: [
          "Number of distinct page layouts and interactive components required",
          "Original photography, custom diagrams or product catalogue preparation",
          "Technical SEO foundations: metadata, JSON-LD schema, canonical tags and sitemaps",
          "Security engineering: WAF configuration, HTTP headers, rate limiting and POPIA notices",
        ],
      },
      {
        title: "Comparing low-cost and mid-tier quotes fairly",
        body: [
          "A budget template build is not automatically a mistake. If almost 100% of your revenue comes from direct referrals and procurement panels who merely check whether your business looks legitimate before paying an invoice, a crisp R18,000 starter site does the job efficiently.",
          "Problems start when an established service business expects a cheap starter quote to deliver national Google rankings. Without structured service pages, fast Core Web Vitals on South African mobile networks and deliberate internal linking, you end up paying twice when a full rebuild is needed twelve months later.",
        ],
        callout: {
          tone: "tip",
          heading: "Demand an exclusion list alongside the quote",
          text: "Ask every supplier to list in writing what is NOT included: copywriting, logo refinement, domain transfer, redirect mapping, stock photography, monthly backups and post-launch bug support.",
        },
      },
      {
        title: "Ongoing running and security costs people forget",
        body: [
          "Launching the website is only year-one capital expenditure. Every business website carries ongoing operating costs to stay fast, reachable, legally compliant under POPIA and protected against automated bots.",
        ],
        bullets: [
          "Domain renewal: R100 to R350/year for a .co.za domain registered in your own company's name.",
          "Quality hosting or cloud deployment: R180 to R1,500+/month depending on traffic, South African edge caching and uptime guarantees.",
          "Business email & deliverability (Google Workspace / Microsoft 365 + SPF/DKIM/DMARC): R120 to R260/user/month.",
          "Security, backups & maintenance retainer: R950 to R3,500+/month covering off-site backups, patching, uptime checks and minor updates.",
          "Ongoing SEO or paid search growth: Separate monthly investment if you actively compete for organic clicks or Google Ads leads.",
        ],
      },
      {
        title: "How to get better value from your budget",
        body: [
          "Instead of spreading a tight R35,000 budget thinly across twenty generic pages, build a disciplined eight-to-ten-page core website where every flagship page is genuinely convincing. You can always add regional case studies and educational guides once revenue from the core site builds momentum.",
          "Preparation shrinks agency hours dramatically. Gather your high-resolution logo files, team headshots, completed project summaries, verified client testimonials and current DNS/registrar credentials before kick-off day.",
        ],
        numbered: [
          "Define one primary commercial goal per page (e.g. phone call, WhatsApp enquiry or quote request).",
          "Prepare real client proof—before/after numbers, named sectors served and honest turnaround promises.",
          "Avoid thin city-swap doorway pages; invest in authoritative national or provincial hub pages instead.",
          "Lock in analytics, Google Search Console and conversion event tracking before launch sign-off.",
        ],
      },
      {
        title: "Questions to ask a web designer before signing",
        body: [
          "Five direct questions reveal immediately whether a supplier operates professionally or will trap your domain inside an opaque retainer.",
        ],
        bullets: [
          "Will our .co.za domain, hosting billing and Google Search Console property stay registered in our company's own name?",
          "Who writes and approves the final page copy, and how many structured revision rounds are covered?",
          "How will you preserve our existing Google rankings and build a 301 redirect map before cutover?",
          "What HTTP security headers, anti-spam protection and automated off-site backups are enabled at launch?",
          "If we part ways later, do we receive full source files and database exports with zero release fees?",
        ],
        callout: {
          tone: "warning",
          heading: "Red flag: suppliers who register your domain under their own entity",
          text: "Never allow an agency or freelancer to list themselves as the administrative and billing registrant on ZACR for your .co.za domain. Losing access during a supplier dispute can take down your website and company email simultaneously.",
        },
      },
    ],
    midCta: {
      heading: "Want a transparent ZAR scope before you commit?",
      text: "Share what your business sells and what your current site lacks—we will reply with a realistic structure, budget range and launch timeline.",
      href: "/services/web-development/",
      label: "Explore Website Development",
    },
    related: [
      { label: "Website design & development", href: "/services/web-development/" },
      { label: "SEO prices in South Africa", href: "/guides/seo-prices-south-africa/" },
      { label: "Website redesign SEO checklist", href: "/guides/website-redesign-seo-checklist/" },
      { label: "How to choose a web design company", href: "/guides/how-to-choose-web-design-company-south-africa/" },
    ],
    faqs: [
      {
        question: "How much should a South African small business budget for a proper website?",
        answer:
          "Expect R15,000 to R25,000 for a clean starter brochure site and R25,000 to R75,000 for a commercial service website engineered with custom copy, speed optimisation and launch SEO. Ecommerce and custom integrations generally start around R35,000 to R75,000+.",
      },
      {
        question: "Is a R5,000 template website a bad idea?",
        answer:
          "It can work strictly as a temporary digital business card if all your clients come through referrals. It becomes costly when you expect Google leads, because poor copy, missing SEO hierarchy and insecure plugins force an early rebuild.",
      },
      {
        question: "Should technical SEO and security be included in the build price?",
        answer:
          "Baseline engineering should always be included: semantic HTML headings, clean URLs, self-referencing canonicals, XML sitemap, HTTPS with HSTS, form spam protection and fast mobile assets. Ongoing ranking campaigns sit separately.",
      },
      {
        question: "Do I own my website and domain outright after paying?",
        answer:
          "Yes—provided your contract confirms IP assignment on final payment and your .co.za domain stays registered in your company's name at the registrar.",
      },
      {
        question: "How much does website maintenance cost per month in South Africa?",
        answer:
          "WordPress sites needing active plugin patching, backups and security monitoring typically cost R950 to R2,500 per month. Static/Next.js builds with fewer server plugins often require lower ongoing upkeep.",
      },
    ],
    priority: 0.72,
    published: "2026-05-06",
    updated: "2026-11-20",
  },
  {
    slug: "technical-seo-checklist",
    category: "SEO Services",
    status: "published",
    title: "Technical SEO Checklist for South African Business Websites",
    metaTitle: "Technical SEO Checklist (South Africa) | SoftKore Digital",
    description:
      "A practical technical SEO checklist covering Google Search Console, indexing blockers, clean 301 redirects, thin content pruning, Core Web Vitals and internal links.",
    intro:
      "Technical SEO ensures Googlebot can discover, crawl, render and index your revenue-generating pages cleanly. Clean code will not carry weak offers to position one on its own, yet a single misconfigured canonical tag, multi-hop redirect chain or accidental noindex directive can keep your best pages completely invisible in South African search results.",
    summary: [
      "Search Console setup",
      "Indexing checks",
      "Redirects",
      "Thin and duplicate pages",
    ],
    takeaways: [
      "Verify a Domain property in Google Search Console via DNS TXT before trusting any third-party SEO audit score.",
      "Every commercial page must return direct HTTP 200, carry no accidental noindex header and use a matching self-referencing canonical URL.",
      "Prune or consolidate thin template pages ('Crawled - currently not indexed') using single-hop 301 redirects.",
      "Eliminate trailing-slash, www and HTTP redirect chains so Googlebot spends crawl effort on core pages.",
      "Test real Core Web Vitals on throttled 4G mobile devices—how most South Africans browse.",
    ],
    sections: [
      {
        title: "Verify Google Search Console and inspect live indexing",
        body: [
          "Third-party SEO crawlers only simulate search engines; Google Search Console shows Google's own live index directly. Verify a full Domain property via DNS TXT record so `http`, `https`, `www` and non-`www` traffic signals consolidate into one accurate property without blind spots.",
          "Submit your live `sitemap.xml` containing strictly indexable HTTP 200 URLs, then review Indexing > Pages weekly to track shifts between Indexed and Not indexed buckets before drawing conclusions about rankings.",
        ],
        numbered: [
          "Verify ownership of your root domain (`example.co.za`) via DNS TXT verification under your company Google account.",
          "Submit `https://www.yourdomain.co.za/sitemap.xml` matching your exact canonical protocol and hostname.",
          "Inspect your homepage and top 5 service pages in URL Inspection to confirm 'URL is on Google' alongside clean mobile rendering.",
          "Review Security & Manual Actions immediately to rule out lingering penalties, safe-browsing flags or injected spam paths.",
        ],
      },
      {
        title: "Audit crawlability, indexability and canonical consolidation",
        body: [
          "Most silent indexing losses stem from contradictory self-inflicted signals—for example, linking internally to `/services/seo` without a trailing slash while declaring the canonical URL as `/services/seo/`, or accidentally shipping staging `noindex` meta tags onto live servers.",
          "Run a structured crawl every quarter to verify status codes, canonical tags, `robots.txt` access and sitemap consistency across every commercial route simultaneously.",
        ],
        subsections: [
          {
            heading: "Enforce one canonical domain host and trailing-slash convention",
            body: [
              "Choose either `https://www.domain.co.za` or `https://domain.co.za` and commit consistently to trailing slashes or no trailing slashes site-wide. Configure hosting or Cloudflare bulk redirect rules so `http://`, bare apex, and non-trailing-slash variants resolve in one single HTTP 301 hop straight to the final canonical destination.",
            ],
          },
          {
            heading: "Verify robots.txt, meta robots and X-Robots-Tag HTTP headers",
            body: [
              "Inspect `/robots.txt` for outdated `Disallow` rules blocking `/_next/static/`, JavaScript bundles, stylesheets or image paths Google needs to evaluate mobile layout. Check live response headers via curl to ensure web servers never inject `X-Robots-Tag: noindex` unexpectedly on live pages.",
            ],
          },
        ],
        table: {
          caption: "Technical SEO baseline verification checks per key URL",
          headers: ["Signal", "Healthy state", "Common failure", "Fastest fix"],
          rows: [
            [
              "HTTP status code",
              "Direct 200 OK",
              "301 -> 301 chains or soft-404 thin pages returning 200",
              "Update internal links to final URL; prune or redirect thin stubs",
            ],
            [
              "Canonical tag",
              "Self-referencing exact URL",
              "All pages pointing canonically to homepage `/`",
              "Set per-route `alternates.canonical` in page metadata",
            ],
            [
              "Robots directive",
              "Indexable (no blocking tag)",
              "Leftover `noindex` meta tag from staging build",
              "Remove staging block via environment-aware config",
            ],
            [
              "XML sitemap",
              "Matches 100% of kept URLs",
              "Lists redirected URLs, 404s or filtered query strings",
              "Auto-generate sitemap strictly from kept canonical routes",
            ],
          ],
        },
      },
      {
        title: "Interpret Search Console 'Not indexed' reasons properly",
        body: [
          "Not every non-indexed URL represents a crisis—cleanly redirected legacy slugs belong inside 'Page with redirect', and privacy utility screens or thank-you pages do not need Google listings. Knowing which status demands intervention saves weeks of wasted tinkering.",
        ],
        bullets: [
          "`Crawled - currently not indexed`: Google fetched the HTML and judged it too thin, repetitive or redundant to index. Upgrade unique buyer value or merge overlaps cleanly.",
          "`Discovered - currently not indexed`: Known URL never crawled yet, often caused by oversized low-value sitemaps or sluggish shared hosting exhausting crawl budget.",
          "`Duplicate without user-selected canonical`: Multiple URL variations serve identical copy. Enforce single-hop 301s and clean self-canonicals.",
          "`Blocked by robots.txt` / `Excluded by noindex`: Acceptable on private utility routes; urgent fix when seen on revenue service pages.",
        ],
        callout: {
          tone: "warning",
          heading: "Never block retired URLs in robots.txt before redirecting",
          text: "If you disallow an old directory inside robots.txt, Googlebot stops fetching those URLs and never discovers your 301 redirects passing equity onward. Keep crawl open so search engines follow the redirect cleanly.",
        },
      },
      {
        title: "Prune thin doorway pages, duplicate blogs and broken redirect chains",
        body: [
          "Spinning up fifty near-identical WordPress pages changing only 'Johannesburg', 'Pretoria', 'Midrand' and 'Sandton' drags down domain-wide quality signals. Even if Google indexes twenty initially, subsequent quality sweeps routinely collapse entire directories while starving core service pages of crawl attention.",
          "Merge overlapping pages into strong national or provincial hubs and map retired slugs through one-to-one single-hop 301 redirects straight to the strongest semantic match—never dumping thirty unrelated URLs onto `/`.",
        ],
      },
      {
        title: "Fix internal linking hierarchy, orphan URLs and JSON-LD schema",
        body: [
          "Search engines weigh internal link graphs heavily to determine commercial hierarchy. Any key page reachable only inside `sitemap.xml` without real contextual links from navigation, home cards or related guides looks unimportant to Googlebot.",
        ],
        bullets: [
          "Keep every primary service within two clicks of `/` and every educational guide within three clicks via clean topic hubs.",
          "Use clear descriptive anchor phrases ('technical SEO checklist SA') rather than generic 'read more' or 'click here' buttons.",
          "Embed valid JSON-LD structured data (`Organization`, `Service`, `BreadcrumbList`, `Article`, `FAQPage`) matching visible on-page headings, Johannesburg/South African identity and FAQs identically.",
          "Eliminate all broken internal links returning 404 or bouncing through legacy redirect chains during pre-release checks.",
        ],
      },
      {
        title: "Tune mobile speed and Core Web Vitals on South African cellular connections",
        body: [
          "Google evaluates pages primarily through mobile-first rendering, and most South African prospects tap results over cellular 4G or variable suburban networks. Oversized 3 MB PNG hero banners, un-sized layout shifts and twenty bloated builder scripts drive frustrated visitors straight back to Google Search before reading your headline.",
          "Convert photography properly to compressed WebP files, declare explicit `width`/`height` dimensions to hold CLS under 0.1, defer non-critical third-party widgets so INP responds crisply under 200 ms, and review Mobile Core Web Vitals inside Search Console monthly.",
        ],
        callout: {
          tone: "tip",
          heading: "Benchmark on throttled mobile—not office fibre",
          text: "A page opening in 0.7 seconds on Sandton fibre can stall 5 seconds on mid-tier Android LTE. Validate Largest Contentful Paint under 2.5 seconds using mobile simulation in PageSpeed Insights and Chrome DevTools.",
        },
      },
    ],
    midCta: {
      heading: "Suspect hidden indexing bugs are costing you clicks?",
      text: "Our technical SEO audit isolates blocked pages, canonical mismatches, sitemap errors and wasted crawl budget into one actionable fix list.",
      href: "/services/seo-services/",
      label: "Explore SEO Services",
    },
    related: [
      { label: "Fix 'Crawled - currently not indexed'", href: "/guides/fix-crawled-currently-not-indexed/" },
      { label: "Website redesign SEO checklist", href: "/guides/website-redesign-seo-checklist/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Why your website is not ranking", href: "/guides/why-your-website-is-not-ranking/" },
    ],
    faqs: [
      {
        question: "What is technical SEO in plain language?",
        answer:
          "Technical SEO is the engineering work ensuring search engines can reach, crawl, render and cleanly index your site—covering status codes, sitemaps, canonical tags, internal links, mobile speed and structured schema.",
      },
      {
        question: "How often should a South African business run a technical SEO audit?",
        answer:
          "Check Search Console Indexing and Performance monthly as normal routine, and always run a thorough pre- and post-launch technical crawl during any redesign, URL restructure or hosting move.",
      },
      {
        question: "Why does Google index my homepage cleanly yet ignore core service pages?",
        answer:
          "Usually because service pages lack strong internal navigation/body links, carry thin generic copy overlapping other URLs, point canonical tags wrongly toward `/`, or run on slow unstable paths.",
      },
      {
        question: "Does passing every technical SEO check guarantee position one rankings?",
        answer:
          "No. Technical SEO clears structural friction so your site competes fairly, while final ranking order still depends on how deeply your content solves buyer intent, local trust proof and earned authority.",
      },
      {
        question: "Should my XML sitemap include category archives, PDFs or thank-you pages?",
        answer:
          "No—keep `sitemap.xml` limited strictly to clean, canonical, indexable HTML landing pages you genuinely want searchers finding on Google.",
      },
    ],
    priority: 0.7,
    published: "2026-05-06",
    updated: "2026-11-20",
  },
  {
    slug: "website-security-checklist",
    category: "Website & Cyber Security",
    status: "published",
    title: "Website Security Checklist for South African Businesses",
    metaTitle: "Website & Cyber Security Checklist | SoftKore Digital",
    description:
      "Complete website security and cyber security checklist for SA businesses: MFA access control, patching, off-site backups, SSL/headers, WAF, POPIA and monitoring.",
    intro:
      "Nearly all SME website compromises stem from predictable hygiene gaps—stolen staff logins without two-factor authentication, unpatched CMS plugins, public backups or unprotected enquiry forms. Working systematically through this security checklist closes the vast majority of automated attacks before your brand reputation or customer records pay the price.",
    summary: [
      "Access and MFA",
      "Patching and plugins",
      "Backups and SSL",
      "Monitoring and POPIA",
    ],
    takeaways: [
      "Enforce app/hardware MFA and remove ex-employee/ex-agency access across hosting, CMS and your `.co.za` registrar.",
      "Delete inactive plugins and old staging subdomains cleanly rather than merely deactivating them on disk.",
      "Store encrypted daily backups off-site and perform quarterly staging test restores to confirm they recover cleanly.",
      "Pair valid TLS certificates with strict HTTP security headers plus SPF, DKIM and DMARC records to stop domain spoofing.",
      "Minimise enquiry data under POPIA Section 19 and monitor Google Search Console Security Issues continuously.",
    ],
    sections: [
      {
        title: "Lock down admin logins, hosting panels and registrar access",
        body: [
          "Automated credential-stuffing bots hammer WordPress logins, cPanel endpoints and registrar dashboards around the clock testing breached passwords from unrelated online leaks. Locking down identity boundaries prevents intruders logging straight through your front door even if one contractor reuses a weak password elsewhere.",
          "Make access governance a shared quarterly review between management and whoever maintains your web infrastructure so stale admin accounts never linger silently for years.",
        ],
        subsections: [
          {
            heading: "Enforce least-privilege roles and instant contractor offboarding",
            body: [
              "List every user holding login rights across WordPress/CMS, cPanel/VPS hosting, FTP/SSH keys, Cloudflare DNS, ZACR registrar portals and Google Search Console. Revoke accounts immediately whenever staff depart or agency engagements finish, and keep day-to-day content writers on Editor privileges rather than unrestricted Administrator access.",
            ],
          },
          {
            heading: "Require app-based MFA and password-manager secrets everywhere",
            body: [
              "Activate TOTP authenticator app or hardware security-key multi-factor authentication on every admin, DNS and hosting login—avoiding SMS 2FA where stronger options exist because SIM-swap fraud remains an active South African attack path. Store unique 16+ character credentials inside an audited business password vault.",
            ],
          },
        ],
        bullets: [
          "Retire generic `admin` usernames and block `/xmlrpc.php` brute-force floods on WordPress sites.",
          "Restrict SSH/SFTP access strictly to fixed keys and verified team IPs rather than open password logins.",
          "Keep legal `.co.za` registrant ownership strictly under your company name and monitored admin mailbox.",
        ],
      },
      {
        title: "Patch CMS core, plugins, themes and third-party dependencies",
        body: [
          "Known vulnerabilities inside unmaintained form builders, sliders, popup suites and WooCommerce extensions give automated scanners remote execution capabilities within hours of disclosure. Waiting until a visible layout bug forces attention invites silent spam or backdoor injection.",
          "Establish a calm, tested update rhythm so critical fixes deploy inside 24–48 hours while routine bundles verify cleanly on staging before touching production.",
        ],
        numbered: [
          "Capture a verified off-site snapshot immediately prior to applying core or major plugin releases.",
          "Delete unused plugins, old themes and lingering `/staging/` folders completely from disk—deactivated files remain directly reachable via HTTP.",
          "Test interactive menus, contact forms and checkout callbacks visually straight after patching completes.",
          "Prohibit cracked ('nulled') themes or plugins; nearly all carry disguised PHP backdoors waiting to activate later.",
        ],
      },
      {
        title: "Keep verified, immutable off-site backups",
        body: [
          "Default cPanel backups resting inside the same hosting account vanish or get encrypted alongside your live website whenever ransomware or an account compromise occurs. True disaster readiness separates backup destinations completely from live hosting infrastructure.",
          "Maintain clear historical depth (14+ daily snapshots plus multi-month checkpoints) so silent malware lingering undetected for three weeks never contaminates every available backup file.",
        ],
        table: {
          caption: "Recommended website security and backup cadence",
          headers: ["Control", "Target standard", "Recommended frequency", "Why it matters"],
          rows: [
            [
              "Off-site backups",
              "Encrypted files + DB in isolated cloud bucket",
              "Daily automated + pre-deploy manual",
              "Survives server ransomware, disk corruption or sudden host suspension",
            ],
            [
              "Test restores",
              "Full restore verified inside isolated staging",
              "Quarterly",
              "Catches broken SQL exports or missing assets before real emergencies strike",
            ],
            [
              "Software patching",
              "Core, plugins & npm lockfiles kept current",
              "Weekly (urgent security CVEs within 24h)",
              "Closes public vulnerabilities hunted continuously by exploit scanners",
            ],
            [
              "Access & log review",
              "Admin list & login anomaly audit",
              "Monthly + same-day on staff offboarding",
              "Prevents dormant contractor accounts or unexpected admin users staying live",
            ],
          ],
        },
      },
      {
        title: "Enforce SSL, HTTP security headers and email/DNS protection",
        body: [
          "Basic HTTPS encryption protects packets passing across coffee-shop Wi-Fi, yet leaves browsers vulnerable to clickjacking, MIME type confusion and brand-impersonation emails unless paired with HTTP response headers and authenticated DNS policies.",
        ],
        bullets: [
          "Verify auto-renewing SAN TLS certificates cover BOTH bare domain and `www` cleanly, forcing HTTPS in one hop.",
          "Deploy `Strict-Transport-Security` (HSTS), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options` and disciplined CSP rules.",
          "Enable Registrar Transfer Lock (`clientTransferProhibited`) across every `.co.za` and `.com` asset to block hijacking.",
          "Publish aligned `SPF`, `DKIM` and `DMARC` (`p=reject`) TXT records so criminals cannot forge banking-change invoices pretending to come from your domain.",
        ],
        callout: {
          tone: "note",
          heading: "HTTPS alone does NOT secure a website against hacking",
          text: "Countless compromised websites still display a green browser padlock cleanly while silently serving injected casino spam or stealing leads via outdated plugins and weak passwords.",
        },
      },
      {
        title: "Harden enquiry forms, personal records and POPIA safeguards",
        body: [
          "Public contact, booking and checkout endpoints accept untrusted external input directly into your systems. Under POPIA Section 19, South African companies must enforce reasonable technical safeguards protecting captured personal records from loss or unauthorised exposure.",
          "Enforce strict backend input validation, clean payload limits, IP rate limiting and anti-bot controls (honeypots or Turnstile) so spam floods cannot bury customer privacy requests or abuse server mailers. Strip out unnecessary ID numbers from initial lead forms and purge stale `leads.csv` or `backup.sql` files out of web roots.",
        ],
      },
      {
        title: "Monitor uptime, file integrity and Google Security Issues continuously",
        body: [
          "Early detection turns potential multi-week disasters into twenty-minute cleanups. Waiting until a prospect calls reporting Chrome warnings means search snippets and brand credibility have already taken avoidable hits.",
        ],
        bullets: [
          "Watch Google Search Console > Security & Manual Actions alerts alongside Indexing spikes for sudden unknown spam URL surges.",
          "Run continuous external uptime, TLS expiry and DNS record monitoring polling every 1–5 minutes with instant alert routing.",
          "Front dynamic sites with Cloudflare WAF rate limits and origin IP allowlists to drop scanner floods before hosting feels load.",
        ],
        callout: {
          tone: "tip",
          heading: "Minimal static builds slash vulnerability upkeep dramatically",
          text: "Moving brochure and commercial service websites off plugin-heavy PHP stacks onto pre-rendered Next.js builds eliminates database injections and automated WordPress malware campaigns altogether.",
        },
      },
      {
        title: "Assign security ownership internally so checks actually happen",
        body: [
          "Security checklists fail most often not from complex technical mysteries, but because management assumes hosting support checks logins while hosting assumes the former freelance designer handles backups. Document one named internal owner responsible for verifying monthly uptime, SSL renewals, off-site backup test outcomes and staff offboarding.",
          "Keep an emergency recovery sheet offline in your company password manager listing registrar logins, DNS provider links, hosting support numbers and your technical recovery partner's direct WhatsApp—so locking out of company email during an outage never leaves the business stranded.",
        ],
      },
    ],
    midCta: {
      heading: "Not sure where your site has blind spots?",
      text: "Book a focused website security audit—we inspect headers, TLS, DNS auth, backup resilience, admin access and server exposure cleanly.",
      href: "/services/website-security/",
      label: "Explore Website Security",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Hacked website recovery guide", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "HTTP security headers explained", href: "/guides/http-security-headers-explained/" },
    ],
    faqs: [
      {
        question: "How often should website security checks run on a business domain?",
        answer:
          "Uptime, SSL validity, DNS integrity and WAF filtering must run automatically 24/7, while patching, user-access audits and backup verification belong on a monthly rhythm—or weekly on active WordPress/WooCommerce builds.",
      },
      {
        question: "Does putting Cloudflare in front make server-level security unnecessary?",
        answer:
          "No. A WAF shields against noisy bots and common injection floods at the edge, yet stolen admin credentials, exposed direct server IPs or dormant internal backdoors still breach sites behind CDNs unless server access and patching remain strict.",
      },
      {
        question: "What single security habit causes the most emergency cleanups in South Africa?",
        answer:
          "Leaving outdated WordPress plugins and ex-contractor admin logins active with no MFA or verified off-site backups.",
      },
      {
        question: "Can weak website security damage Google Search visibility directly?",
        answer:
          "Yes. Injected foreign spam URLs, conditional mobile redirects, Safe Browsing red warnings and extended hosting crashes cause sudden de-indexing and loss of trust until cleaned and verified.",
      },
      {
        question: "Why run test restores when automated backup tools report 'Success' weekly?",
        answer:
          "Automated jobs frequently log green ticks while excluding huge upload directories, skipping truncated database tables or hitting permission errors only visible when actually spinning up a staging restore.",
      },
    ],
    priority: 0.7,
    published: "2026-05-06",
    updated: "2026-11-20",
  },
  {
    slug: "why-your-website-is-not-ranking",
    category: "SEO Services",
    status: "published",
    title: "Why Your Website Is Not Ranking on Google",
    metaTitle: "Why Your Website Is Not Ranking on Google | SoftKore Digital",
    description:
      "Seven common reasons a South African business website gets zero clicks on Google, how to check each bottleneck in Search Console, and what to fix in order.",
    intro:
      "A sleek website can still generate zero organic leads if Google either declines to index its pages, misses what buyers actually search for, or ranks ten-year-old competitors miles higher. Diagnosing why traffic stays flat in strict engineering sequence stops you burning months rewriting headlines or buying links when an indexing blocker holds everything back.",
    summary: [
      "Are pages indexed?",
      "Thin content",
      "Search intent",
      "Authority and links",
    ],
    takeaways: [
      "Check Google Search Console indexing first: an unindexed URL cannot earn a single search click regardless of copy quality.",
      "High Search Console impressions with zero clicks usually expose average positions past 20–50—invisible below page one.",
      "Template city-swap or industry-swap doorway pages quietly drag down quality scores across your entire domain.",
      "Align page format (pricing breakdown vs service page vs step-by-step fix guide) strictly with live page-one buyer intent.",
      "Fix bottlenecks in order: Indexability -> Content & Intent -> Internal Links & Speed -> Authentic Local Trust & Citations.",
    ],
    sections: [
      {
        title: "Diagnose zero Google clicks in order before spending another rand",
        body: [
          "Blaming 'the Google algorithm' blindly leads businesses to buy unhelpful backlink packages or fire writers prematurely. Search Console breaks organic visibility cleanly into four measurable bottlenecks: indexing access, keyword intent match, competitive ranking depth and snippet appeal. Running down this matrix identifies your primary failure inside fifteen minutes.",
        ],
        table: {
          caption: "Diagnostic matrix: Search Console symptom vs likely root cause",
          headers: ["What you see in Search Console", "Likely bottleneck", "First diagnostic test", "Correct next action"],
          rows: [
            [
              "Pages listed as 'Not indexed'",
              "Noindex directive, thin duplication or unlinked orphan URL",
              "Inspect URL in Search Console for status & canonical",
              "Remove blocks, consolidate thin stubs, strengthen internal links",
            ],
            [
              "Indexed, near-zero impressions",
              "Copy uses abstract slogans nobody types, or brand-new site",
              "Compare page H1/titles against real buyer queries",
              "Rewrite headings around plain commercial SA search phrasing",
            ],
            [
              "High impressions, minimal clicks",
              "Parked at positions 20–80 or bland un-clickable title tags",
              "Filter Performance report by Average Position & CTR",
              "Deepen unique usefulness, FAQs & local authority signals",
            ],
            [
              "Sudden cliff drop post-launch",
              "Broken 301 redirects, staging robots.txt or hack spam",
              "Match drop date against deploy log & Security alerts",
              "Restore missing 301 map cleanly & clear any security flags",
            ],
          ],
        },
      },
      {
        title: "Google may not be indexing your commercial pages at all",
        body: [
          "Open Search Console under Indexing > Pages immediately. If core service or guide addresses sit under `Crawled - currently not indexed`, `Discovered - currently not indexed` or `Excluded by noindex tag`, rewriting body copy adjectives will not bring visitors yet because Google has excluded the URL itself.",
          "Inspect live URLs via the top search bar (`URL Inspection > Test Live URL`) to confirm HTTP 200 status, unobstructed rendering, matching self-canonicals and clean `sitemap.xml` inclusion before chasing rankings.",
        ],
      },
      {
        title: "Thin, overlapping or template doorway pages dilute whole-site quality",
        body: [
          "Spinning up 60 cloned WordPress pages swapping solely 'Sandton', 'Pretoria', 'Centurion' and 'Midrand'—or repeating identical sales pitches across 20 industry names—is one of the fastest ways to crash site-wide indexing on modern Google.",
          "Google evaluates helpfulness across your entire website footprint. Merging weak repetitive clones via direct single-hop 301 redirects straight into stronger core service hubs frequently boosts crawl activity and rankings across the surviving URLs.",
        ],
        callout: {
          tone: "warning",
          heading: "Publishing shallow weekly AI posts rarely saves an unranked domain",
          text: "Flooding a low-authority website with 500-word generic blog posts simply expands 'Crawled - currently not indexed' noise. Strengthen core revenue pages deeply first.",
        },
      },
      {
        title: "You are ranking too low on page four—or missing real search intent",
        body: [
          "Checking Google only for your company name misleads owners into thinking the site ranks fine. Filter Search Console Performance to exclude your brand name and inspect Average Position: sitting at position 38 collects plenty of empty bot impressions without producing a single WhatsApp enquiry, because almost every buyer stops inside the top five listings.",
        ],
        subsections: [
          {
            heading: "Check live Google.co.za top results to match page format",
            body: [
              "Search your primary commercial phrase privately in South Africa. If every top result offers candid ZAR pricing tables and comprehensive comparison matrices while your URL reads like a vague three-paragraph sales flyer refusing to share budget ranges, Google knows searchers bounce right back.",
            ],
          },
          {
            heading: "Trade clever agency slogans for literal commercial clarity",
            body: [
              "Poetic H1s such as 'Architects of Tomorrow's Digital Potential' earn zero search matches. Lead cleanly in `<title>`, `<h1>` and opening copy with clear words South African buyers actually type when looking to hire or solve problems.",
            ],
          },
        ],
      },
      {
        title: "Weak authority, broken trust cues or hidden internal link gaps",
        body: [
          "Inside established South African categories—legal, accounting, trades, healthcare, logistics and web agencies—clean code alone rarely topples ten-year incumbents immediately without steady authority and genuine trust proof.",
        ],
        bullets: [
          "Strengthen internal hubs: ensure primary commercial services connect within two clicks of `/` and receive descriptive contextual links from supporting guides.",
          "Eliminate internal cannibalisation: if two pages compete over the exact same keyword, merge them cleanly into one stronger definitive URL.",
          "Surface unmistakable SA trust proof: physical street identity, verifiable `+27` phone details, authentic project specifics, clean HTTPS and crisp mobile speed.",
          "Build real-world mentions: verified Google Business Profile reviews, reputable local industry directories and genuine supplier/partner links—avoiding cheap backlink farms.",
        ],
        callout: {
          tone: "tip",
          heading: "Stay clean on backlinks—bad links cost far more than zero links",
          text: "Skip Fiverr or bulk R1,500 '500 high-DA link' deals. Automated spam profiles routinely depress rankings for years and create toxic cleanup headaches.",
        },
      },
      {
        title: "Practical 90-day fix sequence for stalled South African sites",
        body: [
          "Execute fixes cleanly in dependent order rather than polishing minor tweaks atop broken architecture. Tackling authority outreach while pages still suffer canonical mismatches or missing internal links wastes budget fast:",
        ],
        numbered: [
          "Weeks 1–2: Audit Search Console Indexing, robots/canonicals, 301 redirect leaks and security hygiene.",
          "Weeks 2–4: Prune thin doorway templates via single-hop 301s and tighten `sitemap.xml` exclusively to kept URLs.",
          "Weeks 3–6: Rewrite core commercial service pages around real South African buyer intent, scannable tables, H2/H3 structure and transparent FAQs.",
          "Weeks 4–8: Resolve Mobile Core Web Vitals bottlenecks and rewire clean hub-and-spoke internal anchor links.",
          "Months 2–6+: Publish thorough unique guides answering real client questions while gathering authentic Google reviews and partner mentions steadily.",
        ],
        bullets: [
          "Example worked recovery: consolidating 120 cloned South African city pages into three comprehensive commercial service hubs paired with real pricing tables routinely moves trapped impressions off page five toward top-ten commercial searches within two crawl cycles.",
        ],
      },
    ],
    midCta: {
      heading: "Tired of guessing why Google ignores your website?",
      text: "Let us audit your Search Console indexing history, redirect cleanliness and top competitors so you see an exact ranked fix plan.",
      href: "/services/seo-services/",
      label: "Book an SEO Audit",
    },
    related: [
      { label: "Fix 'Crawled - currently not indexed'", href: "/guides/fix-crawled-currently-not-indexed/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "SEO prices in South Africa", href: "/guides/seo-prices-south-africa/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
    ],
    faqs: [
      {
        question: "How long does it normally take a South African business site to climb on Google?",
        answer:
          "Removing technical indexing blocks often registers within 2 to 6 weeks, while pushing competitive commercial phrases onto page one typically runs 4 to 9+ months depending on domain age, competition and content quality.",
      },
      {
        question: "Can a brand-new .co.za site beat older established brands?",
        answer:
          "Yes—start smartly by winning specific mid-tail commercial questions, pricing transparency and local niche topics cleanly before fighting entrenched mega-directories head-on on single broad nouns.",
      },
      {
        question: "Should we publish five articles every week if nothing ranks right now?",
        answer:
          "No. Fix underlying indexing barriers and elevate existing service pages first; then ship fewer, genuinely comprehensive 1,200+ word guides worth bookmarking.",
      },
      {
        question: "Why did our Google clicks vanish suddenly after an agency launch?",
        answer:
          "Inspect Search Console > Pages and Security alerts straight away against your launch date—missing 301 redirects, accidental staging `noindex` tags or SSL/server outages explain almost every sudden cliff.",
      },
      {
        question: "How often should we check Search Console rankings?",
        answer:
          "Review Performance and Indexing trends once monthly rather than panicking over daily rank fluctuations, using South Africa country filters with branded queries separated.",
      },
    ],
    priority: 0.72,
    published: "2026-05-06",
    updated: "2026-11-20",
  },
  {
    slug: "hacked-website-recovery-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    title: "My Website Was Hacked: Step-by-Step Recovery Guide (South Africa)",
    metaTitle: "Hacked Website Recovery South Africa: What To Do | SoftKore",
    description:
      "Website hacked, redirecting to spam, or flagged unsafe by Google? Follow this forensic containment, malware removal, Search Console review and POPIA checklist.",
    intro:
      "Discovering your company website redirects prospects to gambling spam or shows Google's red 'Deceptive site ahead' block calls for structured incident response—not panicked file deletion. Preserving forensic evidence first, purging hidden backdoors cleanly, rotating exposed keys and filing a complete Search Console review safeguards customers, SEO rankings and POPIA duties together.",
    summary: [
      "Signs of a compromise",
      "Forensic backup & isolation",
      "Clean backdoors & credentials",
      "Search Console & POPIA checks",
    ],
    takeaways: [
      "Capture a compressed forensic backup (files, database and server logs) BEFORE wiping malware or resetting servers.",
      "Never treat yesterday's backup as a standalone fix—subtle infections regularly inject backdoors weeks ahead of visible spam.",
      "Rotate every secret that touched the compromised host: cPanel, DB, FTP/SSH, admin accounts, SMTP and payment API tokens.",
      "Serve genuine HTTP 404 or 410 responses across injected spam paths so Google removes polluted links from its index smoothly.",
      "Assess Section 22 POPIA breach notification duties immediately if customer lead forms, orders or databases sat on that host.",
    ],
    sections: [
      {
        title: "Confirm every symptom of a live website compromise",
        body: [
          "Modern website infections rarely deface your homepage loudly, because attackers make far more money when administrators never notice. Cloaked PHP malware commonly hides quietly from logged-in admins while showing counterfeit product spam or phishing redirects exclusively to Googlebot and smartphone searchers.",
          "Spot early warnings across both public search snippets and internal hosting dashboards before waiting for customer screenshots.",
        ],
        bullets: [
          "Running `site:yourdomain.co.za` on Google surfaces unfamiliar pharmaceutical, casino or foreign-character URLs.",
          "Clicking your site straight from Google Mobile redirects abruptly to sketchy sweepstakes or phishing screens.",
          "Google Search Console alerts under Security Issues or Chrome blocks visitors behind 'Deceptive site ahead'.",
          "Hosting alerts flag saturated CPU processes, outbound spam mail relays or rogue administrator accounts in WordPress.",
        ],
      },
      {
        title: "Contain the incident and capture forensic evidence (First 60 minutes)",
        body: [
          "Deleting compromised files impulsively destroys server access logs and timestamps needed to identify which outdated plugin or stolen password opened the breach—and hides whether customer personal records were downloaded.",
        ],
        numbered: [
          "Archive an encrypted offline snapshot of the live web folder, full database SQL dump and past 30 days of web/FTP/auth server logs.",
          "Switch on a temporary maintenance block or Cloudflare Under Attack rule if phishing clones or malicious downloads are active.",
          "Force logout active CMS/cPanel sessions globally and lock FTP/SSH access temporarily to your recovery engineer's IP address.",
          "Verify with hosting support whether neighbouring domains under the same shared cPanel/VPS were impacted concurrently.",
        ],
        callout: {
          tone: "warning",
          heading: "Why restoring last week's backup alone fails repeatedly",
          text: "Automated attacks normally inject persistent backdoors months before triggering spam redirects. Restoring a recent snapshot simply reloads the vulnerable plugin and attacker webshell straight back online.",
        },
      },
      {
        title: "Eliminate malware, hidden webshells and database injections completely",
        body: [
          "Cleaning only the obvious tampered `index.php` file guarantees re-infection within hours because automated droppers plant redundant backdoors inside upload folders, inactive themes, scheduled cron tasks and database option rows.",
          "Reconstruct core application logic exclusively from verified upstream vendor downloads or clean private Git history—never trusting executable PHP scripts sitting inside the infected host.",
        ],
        subsections: [
          {
            heading: "Rebuild executable core, theme and plugin folders from trusted sources",
            body: [
              "Compare every core system file directly against fresh official checksums (`wp core verify-checksums`), purge unused inactive themes/plugins completely, wipe suspicious `.php` files dropped inside `/wp-content/uploads/` and replace legitimate plugins with clean fresh repository downloads.",
            ],
          },
          {
            heading: "Scrub database injections, rogue admin accounts and cron triggers",
            body: [
              "Audit admin user tables (`wp_users`), inspect `wp_options` and theme scripts for obfuscated `base64` or external JavaScript redirects, remove injected spam posts cleanly and confirm server cron queues hold zero persistent payload re-fetchers.",
            ],
          },
        ],
        table: {
          caption: "Compromise cleanup verification matrix across system layers",
          headers: ["Layer", "What attackers plant", "Proper remediation"],
          rows: [
            [
              "Core / Theme / Plugins",
              "Altered `index.php`, `wp-config.php`, dormant shells inside unused themes",
              "Overwrite core & plugins from vendor originals; delete dead themes completely",
            ],
            [
              "Uploads folder",
              "Disguised `.php` webshells tucked inside `/uploads/2026/...`",
              "Purge all unexpected scripts; block PHP execution cleanly inside `uploads/`",
            ],
            [
              "Database",
              "Fake admins, header/footer `<script>` redirects, injected spam entries",
              "Delete rogue users & spam rows; scrub scripts; rotate database password",
            ],
            [
              "Server Cron & Mail",
              "Scheduled tasks regenerating backdoors; rogue outbound SMTP queues",
              "Audit `crontab` & cPanel cron hooks; flush spam queues; tighten SPF/DMARC",
            ],
          ],
        },
      },
      {
        title: "Rotate all credentials and seal the original entry point",
        body: [
          "The moment attacker code executes inside your hosting environment, treat every password, database login and `.env` or `wp-config` API token sitting on disk as copied.",
        ],
        bullets: [
          "Change hosting control panel, SFTP, SSH keys, database user passwords and WordPress security salts/keys simultaneously.",
          "Require immediate password resets + app-based MFA across every human admin and mail user (zero shared logins).",
          "Rotate third-party API secrets: transactional email keys, PayFast/Yoco/Ozow tokens, CRM webhooks and analytics secrets.",
          "Patch CMS core/plugins cleanly, delete leftover `/staging/` or `/backup.sql` files, and deploy Cloudflare WAF rules ahead of origin.",
        ],
      },
      {
        title: "Handle polluted Google spam URLs and submit your Search Console review",
        body: [
          "Leaving 5,000 injected spam pages returning errors improperly—or worse, redirecting every fake pharmaceutical address lazily to `/`—confuses search quality filters and slows recovery. Configure all genuinely fake non-existent spam URLs cleanly to return `404 Not Found` or `410 Gone`, purge Cloudflare caches completely, then inspect one or two sample spam URLs via Search Console URL Inspection.",
          "Once clean HTTP 404/410 responses confirm and live homepage HTML renders spotlessly, open Security & Manual Actions > Security Issues and submit a clear two-sentence review explaining the resolved cause, credential rotation and active hardening controls.",
        ],
        callout: {
          tone: "tip",
          heading: "Consider static/Next.js migration if repeat WordPress hacks hurt operations",
          text: "For brochure and B2B service sites tired of recurring PHP plugin fires, cleaning copy over onto a static Next.js build permanently closes database and plugin attack vectors cleanly.",
        },
      },
      {
        title: "Evaluate POPIA Section 22 notification duties and add 24/7 monitoring",
        body: [
          "In South Africa, Section 22 of POPIA sets explicit reporting expectations where there are reasonable grounds to believe personal information held by a responsible party was accessed or acquired without authorisation. Use your captured forensic log snapshot with legal counsel promptly if customer lead tables, accounts or CVs lived inside that server.",
          "Going forward, combine external 24/7 uptime/TLS monitoring, file integrity alerts, automated immutable off-site backups and monthly patching discipline so small cracks never escalate silently again.",
        ],
        bullets: [
          "Check billing email accounts and registrar portals too—attackers occasionally register secondary reseller users or hidden forwarding rules silently after breaching main admin accounts.",
          "Inspect shared hosting neighbour sites cleanly or upgrade onto isolated VPS/cloud containers so cross-account compromises cannot recur.",
        ],
      },
    ],
    midCta: {
      heading: "Need urgent malware cleanup and Search Console review help?",
      text: "We isolate compromised South African sites safely, strip hidden backdoors, rotate access keys, harden hosting and clear Safe Browsing flags.",
      href: "/services/website-security/",
      label: "Get Security Recovery Help",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Remove 'Deceptive site ahead' warning", href: "/guides/remove-google-deceptive-site-ahead-warning/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
    ],
    faqs: [
      {
        question: "How long does cleaning a hacked website and clearing Google blocks usually take?",
        answer:
          "Technical cleanup, key rotation and hardening generally finish inside 24 to 72 hours depending on site scale. Google Safe Browsing reviews typically resolve inside 1 to 4 days, while poisoned search results drop out across 2 to 6 weeks.",
      },
      {
        question: "Is it better to wipe everything and rebuild fresh cleanly?",
        answer:
          "If backups are compromised, custom code lacks Git history and cross-infection hit multiple folders, migrating clean text/media onto a fresh isolated host or Next.js build is frequently faster and far safer.",
      },
      {
        question: "Will our website stay clean permanently once repaired?",
        answer:
          "Yes—provided dormant backdoors are completely stripped, secrets rotated, ex-staff access revoked, software patched consistently and a WAF + monitoring sit live.",
      },
      {
        question: "Does getting hacked ruin Google organic rankings forever?",
        answer:
          "Not when handled systematically. Returning clean 404/410s on fake spam paths and verifying clean architecture lets Google restore trust cleanly in authentic pages.",
      },
      {
        question: "Do small businesses really face POPIA obligations after a site breach?",
        answer:
          "Yes—Section 22 applies regardless of SME size if stored customer/enquiry personal information may reasonably have been accessed without authorisation; verify quickly with legal counsel using preserved forensic logs.",
      },
    ],
    priority: 0.74,
    published: "2026-11-19",
    updated: "2026-11-20",
  },
  {
    slug: "fix-crawled-currently-not-indexed",
    category: "SEO Services",
    status: "published",
    title: "How to Fix 'Crawled - Currently Not Indexed' in Google Search Console",
    metaTitle: "Fix 'Crawled - Currently Not Indexed' in Google | SoftKore",
    description:
      "Pages stuck in 'Crawled - currently not indexed' in Google Search Console? Understand why Google skipped them, what NOT to do, and how to fix indexing cleanly.",
    intro:
      "Opening Google Search Console to see valuable pages parked under 'Crawled - currently not indexed' means Googlebot already visited those URLs, parsed the HTML and declined to add them to its search index yet. Fixing it takes structural pruning, stronger page uniqueness and real internal link priority—never repeatedly clicking Request Indexing on thin unchanged text.",
    summary: [
      "What this status actually means",
      "Why 'Request Indexing' fails",
      "Pruning thin & template URLs",
      "Fixing links & resubmitting sitemap",
    ],
    takeaways: [
      "`Crawled - currently not indexed` confirms Google reached the page cleanly—blocking `robots.txt` is rarely the issue.",
      "Clicking Request Indexing again on shallow pages triggers the exact same rejection unless value or domain structure improves.",
      "Retiring repetitive suburb/industry template clones via single-hop 301 redirects lifts crawl equity across kept pages.",
      "Every surviving URL requires distinct search intent, thorough original usefulness and real internal HTML links from hub pages.",
      "Allow 3 to 8 weeks after sitemap cleanup and structural consolidation for Search Console totals to shift meaningfully.",
    ],
    sections: [
      {
        title: "Decode 'Crawled - currently not indexed' vs related exclusions",
        body: [
          "Unlike crawl blocks, `Crawled - currently not indexed` tells you Googlebot downloaded your page cleanly with HTTP 200 and read its copy. After evaluating how closely it overlaps existing pages—both on your own site and across South African search results—Google's indexing selector decided storing another copy added too little fresh value right now.",
          "Separating this diagnosis carefully from sibling Search Console buckets ensures you fix content and architecture rather than fiddling needlessly with server firewalls.",
        ],
        table: {
          caption: "Comparing Google Search Console non-indexed statuses cleanly",
          headers: ["Search Console status", "Did Googlebot crawl it?", "Root cause in most SA SME sites", "Primary engineering fix"],
          rows: [
            [
              "`Crawled - currently not indexed`",
              "Yes (fetched & evaluated)",
              "Thin stubs, town/service clones or weak internal links",
              "Prune bloat via 301s; elevate uniqueness & value on kept URLs",
            ],
            [
              "`Discovered - currently not indexed`",
              "No (queued, skipped)",
              "Crawl priority exhausted by bloated sitemaps or slow origin TTFB",
              "Strip utility/junk URLs from sitemap; link hubs; speed up host",
            ],
            [
              "`Duplicate without user-selected canonical`",
              "Yes",
              "Trailing-slash, `www`, `http` or parameter duplicates serving identical text",
              "Enforce self-referencing canonicals & single-hop 301 consolidation",
            ],
            [
              "`Soft 404`",
              "Yes",
              "Empty archive or 'no items found' returning HTTP 200",
              "Serve real HTTP 404/410 or add substantive unique page value",
            ],
          ],
        },
      },
      {
        title: "Why hammering 'Request Indexing' repeatedly solves nothing",
        body: [
          "URL Inspection's Request Indexing trigger works nicely after shipping genuine rewrites on an essential individual page. Resubmitting thirty unchanged thin pages—or feeding 300 bloated doorway URLs through `sitemap.xml` simultaneously—merely runs identical HTML back through the identical quality filter while reinforcing low-value domain noise.",
          "Fix the underlying architectural waste across the domain before asking Googlebot to take a fresh look.",
        ],
        callout: {
          tone: "warning",
          heading: "Keeping 200 thin URLs inside sitemap.xml damages strong service pages",
          text: "Listing parameterised archives, empty drafts and cloned town pages side by side inside `sitemap.xml` signals that most of your domain holds low priority, slowing recrawl across real money URLs.",
        },
      },
      {
        title: "Diagnose the real content and link culprits in your export",
        body: [
          "Export affected sample URLs from Search Console > Indexing > Pages and group them by URL pattern side by side. Nearly every South African SME website hits one of four repeatable issues:",
        ],
        subsections: [
          {
            heading: "Template location or industry doorway clones",
            body: [
              "Launching `/accountants-sandton/`, `/accountants-pretoria/`, `/accountants-durban/` with 85% identical copied boilerplate and swapped heading nouns almost guarantees mass exclusion once automated quality sweeps run.",
            ],
          },
          {
            heading: "Thin sub-350-word service stubs or orphan unlinked posts",
            body: [
              "Shallow blurbs failing to share real ZAR ranges, deliverables, proof or FAQs look indistinguishable from generic placeholders—especially when excluded from navigation and buried solely in the XML sitemap.",
            ],
          },
        ],
        bullets: [
          "Auto-generated CMS `/tag/`, `/author/`, pagination or attachment pages left indexable accidentally.",
          "Query-parameter combinations (`?sort=`, `?filter=`, `?replytocom=`) creating infinite near-identical copies.",
          "Self-competing articles covering identical questions across slightly altered titles (cannibalisation).",
        ],
      },
      {
        title: "Prune and consolidate weak URLs via clean single-hop 301 redirects",
        body: [
          "Cutting a messy 250-URL website down cleanly into 30–50 crisp, high-substance kept URLs regularly unlocks faster indexing and stronger organic clicks across the board.",
        ],
        numbered: [
          "Classify every URL in your export as **Keep & Deepen**, **Merge into Stronger Parent URL**, or **Retire cleanly (`404`/`410`)**.",
          "Configure permanent single-hop HTTP 301 rules pointing every merged legacy URL straight to its nearest semantic service or guide replacement—never dump unrelated URLs lazily onto `/`.",
          "Remove every redirected legacy link from navigation menus, footers and `sitemap.xml` simultaneously.",
          "Leave `robots.txt` open across redirected slugs so Googlebot fetches the old URLs and discovers your 301 redirects fast.",
        ],
      },
      {
        title: "Upgrade every kept page so it unquestionably earns indexation",
        body: [
          "For core service pages and high-value guides you keep, pair deep domain-specific utility with unambiguous structural clarity:",
        ],
        bullets: [
          "Open with direct commercial takeaways rather than empty introductory padding—respecting scanners immediately.",
          "Enrich explanations with realistic South African specifics: ZAR expectations, local gateway/compliance reality, concrete tables, checklists and 4–5 buyer FAQs.",
          "Confirm every kept page earns 2+ genuine descriptive internal links from navigation, home sections or peer hub articles.",
          "Double-check canonical tags, HTTP 200 status and zero internal redirect hops across all kept links.",
        ],
        callout: {
          tone: "tip",
          heading: "Internal links prove importance stronger than sitemap lines",
          text: "Adding descriptive contextual anchor links from your highest-traffic indexed pages directly into a newly strengthened guide frequently triggers re-crawling and indexation within days.",
        },
      },
      {
        title: "Resubmit a spotless XML sitemap and monitor 4-to-8 week shifts",
        body: [
          "Ensure `sitemap.xml` includes 100% live canonical kept HTTP 200 URLs and zero redirects or non-canonical duplicates. Deploy updated code and 301 redirect rules together, resubmit `sitemap.xml` once inside Search Console (plus IndexNow where applicable), then track Indexing > Pages weekly over 4 to 8 weeks as retired junk moves cleanly into 'Page with redirect' and upgraded pages shift into Indexed.",
          "If specific high-priority commercial pages still sit unindexed eight weeks after pruning bloat and adding internal hub links, test whether two surviving URLs overlap excessively in Search Console or inspect live rendered HTML text directly—occasionally client-side JavaScript rendering delays or overly thin template sections mask main copy until tightened server-side.",
        ],
        numbered: [
          "Audit updated `sitemap.xml` via URL Inspection showing green `Success` with exact kept URL tally.",
          "Confirm retired legacy slugs resolve via `301 Moved Permanently` straight to chosen parent destinations cleanly.",
          "Inspect kept URLs in `Indexing > Pages` weekly—watch `Crawled - currently not indexed` shrink steadily rather than chasing instant daily updates.",
        ],
      },
    ],
    midCta: {
      heading: "Dozens of pages stuck in 'Crawled - currently not indexed'?",
      text: "We audit non-indexed clusters cleanly, map single-hop 301 consolidation for thin bloat and upgrade core pages so Google indexes what wins enquiries.",
      href: "/services/seo-services/",
      label: "Fix Indexing Issues",
    },
    related: [
      { label: "Fix 'Discovered - currently not indexed'", href: "/guides/fix-discovered-currently-not-indexed/" },
      { label: "Why duplicate location pages hurt SEO", href: "/guides/why-duplicate-location-pages-hurt-seo/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "SEO services", href: "/services/seo-services/" },
    ],
    faqs: [
      {
        question: "How long does recovery from 'Crawled - currently not indexed' normally take?",
        answer:
          "Expect 2 to 8 weeks after pruning weak template bloat via clean 301s, updating `sitemap.xml` and deepening kept content. Compact well-linked sites update fastest; large messy CMS builds clear gradually across subsequent crawls.",
      },
      {
        question: "Is 'Crawled - currently not indexed' a manual Google penalty?",
        answer:
          "No—verify Security & Manual Actions in Search Console for peace of mind, then treat it strictly as an automated content-uniqueness, duplication or internal-link priority filter.",
      },
      {
        question: "Should I block unwanted non-indexed URLs in robots.txt instead of redirecting?",
        answer:
          "Never block pages carrying 301 redirects or `noindex` tags inside `robots.txt`—Googlebot needs crawl permission to read redirects and drop old entries properly.",
      },
      {
        question: "Can shrinking total site pages actually increase monthly organic leads?",
        answer:
          "Frequently yes—eliminating hundreds of repetitive shallow pages concentrates crawl frequency, site quality assessment and link authority cleanly onto core commercial offers.",
      },
      {
        question: "What minimum depth makes a guide page pass Google's quality bar today?",
        answer:
          "Focus on unique value over arbitrary counts: real original advice tailored cleanly to South African buyers—often 1,200+ clear scannable words with concrete tables, steps and FAQs rather than padded 400-word AI rehashes.",
      },
    ],
    priority: 0.74,
    published: "2026-11-19",
    updated: "2026-11-20",
  },
  {
    slug: "seo-prices-south-africa",
    category: "SEO Services",
    status: "published",
    title: "SEO Prices in South Africa: Monthly Costs, Audits & What to Expect",
    metaTitle: "SEO Prices in South Africa (2026 Cost Guide) | SoftKore",
    description:
      "How much do SEO services cost in South Africa? Realistic ZAR ranges for once-off technical audits vs monthly retainers, pricing drivers, red flags and ROI math.",
    intro:
      "Legitimate SEO retainers in South Africa typically sit between R6,500 and R18,000 per month for local or niche SMEs, and R18,000 to R40,000+ monthly for contested national categories—while fixed-scope once-off technical audits run R5,500 to R18,000. Extreme price discrepancies exist because bargain packages automate software PDFs while true campaigns fund developer hours, expert copywriting and authority growth.",
    summary: [
      "Indicative SA ZAR cost ranges",
      "What drives SEO pricing",
      "Once-off audit vs monthly work",
      "Red flags & real reporting",
    ],
    takeaways: [
      "Real SEO funds skilled developer troubleshooting, search-intent copywriting and earned local authority—impossible at R1,500/month.",
      "Choose a once-off audit + fix sprint first if your main drag is broken 301s, indexing errors or sluggish templates.",
      "Ongoing monthly retainers suit markets where competitors actively invest in buyer guides, GBP reviews and digital PR.",
      "Maintain direct primary ownership of Search Console, analytics and all published site content from day one.",
      "Measure ROI against qualified customer margin over 4 to 6 months rather than vanity position reports on unsearched slogans.",
    ],
    sections: [
      {
        title: "Realistic SEO price ranges in South Africa (ZAR)",
        body: [
          "Unlike standard web hosting subscriptions, SEO is skilled engineering, editorial strategy and ongoing market competition rolled together. Honest rand pricing mirrors your site's technical condition, service breadth and how fiercely national competitors invest.",
          "Use these indicative market tiers when benchmarking proposals across South African suppliers:",
        ],
        table: {
          caption: "Indicative South African SEO pricing tiers (ZAR)",
          headers: ["Engagement model", "Indicative ZAR range", "Typical deliverables", "Best suited for"],
          rows: [
            [
              "Technical SEO & Search Console Audit",
              "R5,500 – R18,000 (once-off)",
              "Indexing & crawl triage, 301 cleanup plan, canonical/sitemap fixes, keyword map & roadmap",
              "Teams with internal devs or owners wanting exact blockers diagnosed before retaining",
            ],
            [
              "Focused SME / Local Retainer",
              "R6,500 – R18,000 / month",
              "Technical care, commercial page upgrades, 2–4 deep guides/mo, GBP optimisation & Search Console reporting",
              "Regional service firms, trades & niche B2B companies targeting steady inbound leads",
            ],
            [
              "Competitive National / Ecommerce",
              "R18,000 – R40,000+ / month",
              "Complex taxonomy cleanup, large topic hubs, digital PR / earned mentions & conversion testing",
              "Legal, accounting, finance, healthcare and multi-category ecommerce fighting nationally",
            ],
          ],
        },
        callout: {
          tone: "note",
          heading: "Slow or broken websites slash SEO ROI in half",
          text: "Investing R12,000/month into SEO atop a sluggish, confusing WordPress site wastes budget fighting UX friction. Fix site speed, navigation clarity and mobile enquiries upfront so every click converts.",
        },
      },
      {
        title: "Four practical factors pushing an SEO quote higher or lower",
        body: [
          "Comparing two proposals fairly requires looking beyond the headline rand fee to inspect exact skilled hours allocated every month across engineering, copy and outreach.",
        ],
        subsections: [
          {
            heading: "Technical health and legacy site debt",
            body: [
              "Clean Next.js or tightly structured CMS sites let budgets go rapidly into high-intent pages and guides. Older domains choked with 500 cloned suburb pages, malware remnants, mixed redirects and failing Core Web Vitals demand upfront engineering cleanup first.",
            ],
          },
          {
            heading: "Market competition and commercial ticket size",
            body: [
              "Earning page-one visibility for specialist engineering calibration in Ekurhuleni requires vastly fewer editorial and PR hours than outranking established national comparison giants on 'medical aid South Africa' or 'corporate tax attorney Sandton'.",
            ],
          },
        ],
        bullets: [
          "Editorial depth & publishing pace: thorough researched South African guides written and formatted cleanly versus thin summaries.",
          "Service & SKU breadth: tightening four focused B2B service pages vs managing 2,000-product ecommerce facets.",
          "Authority starting line: established domains carrying client citations and reviews vs brand-new zero-link registrations.",
        ],
      },
      {
        title: "Once-off audit sprint vs ongoing monthly SEO retainer",
        body: [
          "Not every South African business benefits from an endless monthly contract immediately. If you operate inside a calmer niche and your primary issue is post-redesign redirect gaps, orphaned pages or weak page titles, commissioning a crisp once-off audit plus fixed implementation sprint solves 80% of immediate drags quickly.",
          "Ongoing monthly work pays back strongly inside contested sectors where consistent new buying guides, quarterly content updates, review workflows and reputable external mentions continuously expand organic capture.",
        ],
      },
      {
        title: "Pricing traps and cheap 'guaranteed ranking' red flags",
        body: [
          "Automated 'R1,500/month full SEO' offers survive strictly on volume churn—spending twenty minutes blasting domains through directory bots and sending automated PDF scorecards while destroying long-term Google trust.",
        ],
        bullets: [
          "Guarantees of '#1 on Google inside 30 days': Nobody outside Google controls live SERPs; agencies game this by reporting meaningless zero-search brand phrases.",
          "'500 high-DA backlinks included': Automated paid blog networks routinely trigger indexing collapses rather than lasting authority.",
          "Lock-in 12-to-24 month contracts with zero exit accountability and withheld Search Console access.",
          "Automated 100-city doorway template packages generating mass 'Crawled - currently not indexed' exclusions.",
        ],
        callout: {
          tone: "warning",
          heading: "Keep direct admin control of Search Console and domain assets",
          text: "Verify Search Console under your company's primary Google account first and grant agency teams delegated access—ensuring complete transparency if you ever part ways.",
        },
      },
      {
        title: "What transparent monthly SEO reporting should show clearly",
        body: [
          "Good agencies replace vague technical vanity metrics with four direct monthly accountability answers:",
        ],
        numbered: [
          "Exact technical repairs, schema upgrades, 301 fixes and newly published or rewritten pages shipped that month.",
          "Non-branded South African clicks, impressions and position progression across core target service pages in Search Console.",
          "Indexing > Pages health and Mobile Core Web Vitals status—verifying zero silent crawl degradation.",
          "Verified inbound organic conversions (form leads, phone taps and WhatsApp handoffs) mapped honestly against spend.",
        ],
      },
      {
        title: "Working out sensible ROI payback math for your business",
        body: [
          "Price your SEO investment cleanly against lifetime client margin rather than comparing fees passively against web hosting. For a practice or B2B consultancy where a single client retains R35,000+ in gross contribution over a year, landing just two extra organic clients every quarter turns an R10,000/month campaign sharply profitable while decreasing dependence on rising Google Ads auctions.",
          "Commit realistically to a 4-to-6 month evaluation runway before grading full commercial return, especially on newer domains. Divide cumulative six-month fee outlay by average client contribution margin upfront so directors know exactly how many organic bookings put the engagement into net profit.",
        ],
        bullets: [
          "Track non-branded organic clicks alongside verified enquiry origin tags inside your CRM so renewal decisions rest on signed deal values rather than guesses.",
          "Factor compounding equity too: unlike paid search clicks that stop the hour ad spend ends, stronger guides keep earning enquiries into year two and three.",
        ],
        callout: {
          tone: "tip",
          heading: "Bridge Months 1–3 cash flow with narrow Google Search Ads",
          text: "If immediate leads are urgent right now, fund tight high-margin Google Search Ads on proven service terms while technical SEO and guides build compounding unpaid organic equity behind them.",
        },
      },
    ],
    midCta: {
      heading: "Want an honest SEO quote scoped around real business return?",
      text: "Share your domain and commercial goals—we inspect indexing health first and advise plainly whether a fixed sprint or monthly plan fits best.",
      href: "/services/seo-services/",
      label: "View SEO Services",
    },
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Google Ads vs SEO in SA", href: "/guides/google-ads-vs-seo-south-africa/" },
      { label: "How long does SEO take?", href: "/guides/how-long-does-seo-take-south-africa/" },
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      {
        question: "Why do some firms quote R1,500–R2,500 per month for SEO in South Africa?",
        answer:
          "At R1,500/month no agency can fund genuine developer fixes, market research or custom South African writing. Budget packages rely on automated software printouts and risky bulk directory/link spam.",
      },
      {
        question: "Do I have to sign a rigid 12-month SEO lock-in contract?",
        answer:
          "Plan budget internally across 4 to 6+ months so improvements compound cleanly, yet work with transparent partners proving monthly value rather than trapping clients inside rigid annual penalties.",
      },
      {
        question: "Can we buy a once-off technical audit and handle fixes internally?",
        answer:
          "Yes—fixed audits give internal developers or management a concrete, ranked engineering checklist covering every technical and content barrier first.",
      },
      {
        question: "What happens if we pause monthly SEO work after six months?",
        answer:
          "Every clean redirect rule, technical improvement, rewritten service page and published guide remains yours permanently—continuing to draw organic traffic while competitors keep evolving.",
      },
      {
        question: "Should website maintenance and SEO sit in the same line item?",
        answer:
          "Keep them clearly itemized even under one partner: infrastructure hosting/security patching preserves uptime, while SEO actively expands search capture and buyer leads.",
      },
    ],
    priority: 0.74,
    published: "2026-11-19",
    updated: "2026-11-20",
  },
  {
    slug: "popia-website-compliance-checklist",
    category: "Website & Cyber Security",
    status: "published",
    title: "POPIA Website Compliance Checklist for South African Businesses",
    metaTitle: "POPIA Website Compliance Checklist (SA Guide) | SoftKore",
    description:
      "Practical POPIA website compliance checklist for SA businesses: privacy notices, minimal form collection, marketing opt-ins, third-party cookies and Section 19 security.",
    intro:
      "Any South African business website capturing names, phone numbers, emails, CVs or delivery addresses processes personal information regulated by POPIA. While formal legal wording belongs with your attorney or registered Information Officer, day-to-day compliance breaks most often inside messy enquiry forms, un-audited tracking tags and weak Section 19 server security.",
    summary: [
      "Privacy notice & transparency",
      "Forms & data minimisation",
      "Cookies & tracking scripts",
      "Section 19 technical security",
    ],
    takeaways: [
      "POPIA covers sole proprietors and SMEs alike—an ordinary 'Contact Us' enquiry form triggers lawful processing obligations.",
      "Collect only essential enquiry fields upfront; omit sensitive ID numbers, birth dates or residential details on initial quote forms.",
      "Separate lead enquiries strictly from newsletter marketing using unticked explicit opt-ins rather than automatic list additions.",
      "Inspect actual loaded analytics pixels and third-party scripts so website behaviour matches your Privacy Notice honestly.",
      "Deliver Section 19 safeguard obligations with forced HTTPS + HSTS, MFA, validated APIs, DNS email authentication and controlled retention.",
    ],
    sections: [
      {
        title: "How POPIA applies technically to ordinary business websites",
        body: [
          "The Protection of Personal Information Act (POPIA) expects every business ('responsible party') to treat personal client data respectfully—telling people upfront why details are captured, taking no more than needed, keeping marketing consent distinct and protecting stored records under Section 19 security controls.",
          "Think of legal compliance and web security engineering as inseparable halves: textbook legal policies fail immediately if contact scripts expose secrets in JavaScript or archive CSV exports inside public folders.",
        ],
        table: {
          caption: "Technical POPIA website implementation summary across site layers",
          headers: ["Website area", "POPIA principle", "Practical engineering & UX check"],
          rows: [
            [
              "Footer & Form Links",
              "Openness & Notification (S18)",
              "Plain-language Privacy Notice linked clearly in footer & beside form submit triggers",
            ],
            [
              "Enquiry / Quote Forms",
              "Minimality & Purpose (S10, S13)",
              "Request contact & scope only; zero silent newsletter subscriptions",
            ],
            [
              "Analytics & Pixels",
              "Transparency & Consent Alignment",
              "Strip dead ad scripts; ensure cookie notices match real script behaviour",
            ],
            [
              "Server, Admin & Mail",
              "Security Safeguards (S19)",
              "HTTPS + HSTS, MFA logins, server validation & SPF/DKIM/DMARC domain auth",
            ],
            [
              "Old CSVs & Logs",
              "Retention Restriction (S14)",
              "Delete outdated staging copies, public `.sql` exports & redundant lead logs",
            ],
          ],
        },
      },
      {
        title: "Publish a grounded South African privacy notice (Not foreign templates)",
        body: [
          "Copying US or European template generators blindly leaves contradictory GDPR boilerplate referencing supervisory authorities abroad while misrepresenting tools running on your domain.",
        ],
        subsections: [
          {
            heading: "Core details an honest SA website privacy notice covers",
            body: [
              "State your company's registered South African name, real contact route (including your registered Information Officer mailbox where applicable), exact categories of information collected via forms or cookies, specific processing purpose (responding to enquiries or fulfilling ecommerce dispatches), operator/processor categories (hosting, mail APIs, PayFast/Yoco gateways) and instructions for data access or deletion requests.",
            ],
          },
          {
            heading: "Put the notice link right where personal details enter",
            body: [
              "Keep a permanent Privacy link in your global site footer AND place a brief concise reassurance note straight beneath enquiry, booking and newsletter buttons linking directly to the notice before submission.",
            ],
          },
        ],
        callout: {
          tone: "note",
          heading: "Remember Information Officer registration duties separately",
          text: "Under POPIA, South African organisations register their Information Officer via the Information Regulator portal—make reaching that contact email effortless straight from your website footer and privacy screen.",
        },
      },
      {
        title: "Apply strict data minimisation across forms and marketing opt-ins",
        body: [
          "Trimming unneeded questions improves privacy compliance while lifting mobile enquiry completions at the same time.",
        ],
        bullets: [
          "Drop sensitive asks like South African ID numbers, physical home addresses or dates of birth on general quote forms unless legally needed offline post-onboarding.",
          "Keep direct enquiry fulfillment strictly separated from promotional newsletters: never dump sales leads automatically into Mailchimp lists without an explicit unticked opt-in checkbox and crisp unsubscribe mechanism.",
          "Avoid collecting sensitive uploaded PDFs (bank statements, tax clearances, copies of IDs) inside casual unencrypted web forms; gather sensitive onboarding docs securely later.",
        ],
      },
      {
        title: "Audit cookies, analytics pixels and external embedded scripts",
        body: [
          "Installing a generic cookie banner plugin does zero good if dead agency pixels, invasive heat-mapping tools or broken social embeds load third-party tracking scripts anyway before visitors choose.",
        ],
        numbered: [
          "Inspect Chrome DevTools Network & Application tabs across key pages to list every third-party domain setting cookies or harvesting browser metadata.",
          "Delete unused historical Facebook/LinkedIn/TikTok marketing tags left behind from old campaigns completely.",
          "Configure non-essential advertising scripts behind aligned consent logic while explaining minimal functional/measurement tools plainly in your policy.",
        ],
      },
      {
        title: "Satisfy Section 19 technical security safeguards properly",
        body: [
          "POPIA Section 19 mandates reasonable technical and organisational safeguards preventing loss, damage or unauthorised access to captured personal information—precisely where solid website security overlaps compliance cleanly.",
        ],
        bullets: [
          "Enforce valid HTTPS globally alongside `Strict-Transport-Security` (HSTS) and clean HTTP security headers (`nosniff`, `X-Frame-Options`).",
          "Validate all form payloads server-side, rate-limit API routes and keep CRM/email tokens strictly inside private backend env vars.",
          "Require app-based MFA across hosting, CMS admin dashboards, domain registrars and company mail accounts with zero shared ex-staff logins.",
          "Configure SPF, DKIM and DMARC DNS authentication so phishing scammers cannot impersonate your domain when emailing prospects.",
        ],
        callout: {
          tone: "warning",
          heading: "Never leave enquiry CSV exports or staging `.sql` backups in public folders",
          text: "Automated scanners crawl continuously for `/leads.csv`, `/backup.sql` and `/staging/`—leaking customer phone numbers and emails publicly inside seconds.",
        },
      },
      {
        title: "Plan data retention, deletion workflows and Section 22 breach readiness",
        body: [
          "Establish simple internal hygiene for how long enquiry notifications sit inside CMS tables or shared boxes before safe archiving or deletion, avoid storing redundant local form copies when inbox/CRM tracking already captures the lead, and confirm how your team locates and deletes a client record if requested.",
          "Pair clean server logging with encrypted off-site backups so if an unauthorised access risk ever happens, Section 22 breach scoping alongside your legal adviser rests on hard logs rather than guesswork. Document which cloud regions hold contact logs cleanly inside an internal register updated yearly whenever tools change.",
        ],
        numbered: [
          "Route contact submissions directly into access-controlled email/CRM destinations rather than keeping open SQL tables inside WordPress forever.",
          "Define a simple annual retention sweep clearing outdated CV uploads, stale quote spreadsheets and un-converted lead histories cleanly.",
          "Verify your Information Officer contact email actually reaches a monitored inbox tested quarterly alongside contact form tests.",
        ],
        callout: {
          tone: "tip",
          heading: "Treat POPIA cleanliness as a buyer trust advantage",
          text: "Corporate South African procurement teams check vendor privacy notices, SSL hygiene and form professionalism carefully before completing vendor onboarding—clean compliance signals reliability immediately.",
        },
      },
    ],
    midCta: {
      heading: "Want a technical POPIA & website security sweep?",
      text: "We audit enquiry forms, third-party tracking scripts, HTTPS/headers, backup exposure and server hygiene—leaving formal legal drafting to your attorney.",
      href: "/services/website-security/",
      label: "Book a Security Review",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "Hacked website recovery guide", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "HTTP security headers explained", href: "/guides/http-security-headers-explained/" },
    ],
    faqs: [
      {
        question: "Do small South African SMEs running a 5-page website still fall under POPIA?",
        answer:
          "Yes. POPIA applies to every business and sole proprietor processing personal information inside South Africa—even basic names, phone numbers and emails sent via a simple enquiry form.",
      },
      {
        question: "Does popping up a cookie consent banner make our website POPIA compliant?",
        answer:
          "No. A banner tackles only cookie/tracking disclosure; real readiness requires minimal data fields, honest privacy policies, separated marketing consent, clean HTTPS/headers and locked-down server security.",
      },
      {
        question: "Are website enquiry emails affected by POPIA security rules?",
        answer:
          "Yes—forms should submit encrypted over HTTPS, verify inputs safely server-side, avoid dumping plaintext records into exposed web directories and authenticate delivery via SPF/DKIM/DMARC.",
      },
      {
        question: "Can SoftKore Digital give us official legal POPIA sign-off?",
        answer:
          "We handle the technical web engineering and Section 19 safeguards—form validation, script stripping, headers, MFA and DNS protection—while formal legal clauses and regulatory filings belong with your South African legal adviser.",
      },
      {
        question: "Does hosting a website in Europe or the US violate POPIA?",
        answer:
          "Not automatically, provided Section 72 cross-border safeguards (adequate security/data agreements and transparent disclosure) apply—though storing sensitive South African customer databases on local Cape Town/Johannesburg regions simplifies compliance discussions cleanly.",
      },
    ],
    priority: 0.72,
    published: "2026-11-19",
    updated: "2026-11-20",
  },
  {
    slug: "website-redesign-seo-checklist",
    category: "Website Design & Development",
    status: "published",
    title: "How to Redesign Your Website Without Losing Google Rankings",
    metaTitle: "Website Redesign SEO Checklist: Keep Rankings | SoftKore",
    description:
      "Planning a website redesign in South Africa? Follow this URL audit, single-hop 301 redirect map, metadata preservation and launch-day checklist to protect rankings.",
    intro:
      "Roughly half of rushed business website redesigns watch organic clicks and phone calls crash within two weeks of cutover—almost never because Google disliked modern layouts, but because developers changed URL slugs without single-hop 301 redirects, deleted high-performing service copy or accidentally pushed staging `noindex` blocks straight to live DNS.",
    summary: [
      "Audit URLs before redesigning",
      "Single-hop 301 redirect map",
      "Preserve titles, copy & schema",
      "Launch-day indexing checks",
    ],
    takeaways: [
      "Export 12+ months of Google Search Console top URLs, queries and backlinks BEFORE redesigning navigation or slugs.",
      "Keep strong existing URL slugs untouched wherever clean; engineer direct single-hop 301 rules for every URL that moves or merges.",
      "Never bulk-redirect dozens of retired subpages lazily onto `/`—point each directly to its closest equivalent service page.",
      "Preserve buyer keyword focus across title tags, H1s, service explanations, internal links and JSON-LD schema alongside cleaner visuals.",
      "Strip staging `robots.txt` / `noindex` controls verified by live crawl checks within minutes of DNS switch.",
    ],
    sections: [
      {
        title: "Why website redesigns erase years of Google visibility overnight",
        body: [
          "Search engines evaluate and store rankings against specific URL paths, headings and topical context—not vague company logos. When an agency swaps platforms cleanly visually while changing `/services/corporate-tax/` to `/offerings/`, compressing 900 words of informative buyer context down into four design slogans and forgetting redirect rules, Google treats the launch as breaking half the website overnight.",
        ],
        table: {
          caption: "Common redesign errors vs zero-loss migration practices",
          headers: ["Redesign mistake", "Immediate impact", "Safest engineering standard"],
          rows: [
            [
              "Changing URL slugs without 301s",
              "Ranked links & customer bookmarks drop straight to 404",
              "Leave winning slugs identical or deploy verified 1-to-1 single-hop 301 map",
            ],
            [
              "Bulk-redirecting old pages to `/`",
              "Google treats lazy homepage redirects as Soft 404s",
              "Route every retired URL straight to its closest living service or guide",
            ],
            [
              "Staging `Disallow: /` left live",
              "Entire website disappears from Search results inside days",
              "Guard staging via auth/access rules; run live crawl verification post-DNS switch",
            ],
            [
              "Guttng proven copy & FAQs",
              "Pages lose topical depth matching real search queries",
              "Elevate visual scannability while retaining clear buyer answers & keywords",
            ],
          ],
        },
      },
      {
        title: "Phase 1: Benchmark existing URLs, Search Console traffic and links first",
        body: [
          "Do not plan new navigation looking solely at the old visible top bar. Hidden case studies, old guides or regional landing URLs frequently drive meaningful organic enquiries quietly.",
        ],
        numbered: [
          "Export 12–16 months of Search Console Performance landing pages, queries, clicks and impressions filtered cleanly.",
          "Crawl the entire existing site before redesigning to log every HTTP 200 URL, `<title>`, meta description, canonical and `<h1>`.",
          "Export external backlinks inside Search Console > Links so trusted partner citations pointing to interior paths never break into 404 errors.",
          "Inspect old `sitemap.xml` plus active Google Ads destination URLs so paid campaigns never point at retired links on Monday morning.",
        ],
      },
      {
        title: "Phase 2: Engineer and script-test a single-hop 301 redirect map",
        body: [
          "Any URL whose slug shifts—for example consolidating messy `/industries/...` paths cleanly into core services or replacing legacy `.php`/`.html` suffixes—requires an explicit permanent HTTP 301 rule mapped cleanly beforehand.",
        ],
        subsections: [
          {
            heading: "Eliminate multi-hop redirect chains and protocol loops",
            body: [
              "Ensure `http://domain.co.za/old-page` lands straight at `https://www.domain.co.za/new-page/` in ONE single 301 hop—avoiding chains bouncing `http -> https -> www -> non-slash -> destination`. Single hops transfer equity cleanly and load noticeably faster on mobile data.",
            ],
          },
          {
            heading: "Consolidate thin legacy directories cleanly",
            body: [
              "When merging bloated legacy suburb or category archives during a redesign, map every retired address explicitly straight to its closest surviving service hub rather than dumping every path lazily onto `/`.",
            ],
          },
        ],
        callout: {
          tone: "tip",
          heading: "Run automated redirect checks against staging prior to launch",
          text: "Execute an automated HTTP check looping over all 100% of legacy URLs against your staging or Nginx preview config before switching DNS—catching missing rules, typos or temporary `302` headers beforehand.",
        },
      },
      {
        title: "Phase 3: Preserve core metadata, copy depth and structured schema",
        body: [
          "Modernising design onto Next.js or cleaner layouts should improve readability, mobile UX and conversion speed—never scrub away core search positioning.",
        ],
        bullets: [
          "Maintain clear primary service terminology inside `<title>`, meta description, `<h1>` and opening intro copy.",
          "Preserve helpful customer specifics—pricing factors, South African operational nuance, proof metrics and FAQs—formatted cleanly into scannable H2/H3 structures.",
          "Carry equivalent JSON-LD schemas (`Organization`, `Service`, `BreadcrumbList`, `FAQPage`, `Article`) accurately onto matching pages.",
          "Keep descriptive image alt text while converting heavy old photography smoothly into crisp WebP assets.",
        ],
      },
      {
        title: "Phase 4: Lock staging properly—then unlock production cleanly on cutover",
        body: [
          "Agencies regularly trigger index chaos by launching `dev.company.co.za` open publicly without password locks, letting Google index unfinished dummy pages alongside real brand links—or worse, forgetting to delete `Disallow: /` or staging `noindex` meta flags when cloning staging onto live DNS.",
          "Protect staging servers behind HTTP Basic Auth or Cloudflare Access instead of relying purely on robots.txt, and maintain an explicit signed go-live checklist confirming production allows clean crawling across every kept page.",
        ],
        callout: {
          tone: "warning",
          heading: "Never change domain names at the exact same moment unless strictly required",
          text: "Swapping design, URL architecture AND domain extension (`old.com` -> `new.co.za`) together stacks three major migration variables simultaneously. Separate domain changes cleanly if possible, or execute full 1-to-1 cross-domain 301s plus Search Console Change of Address.",
        },
      },
      {
        title: "Phase 5: Launch-day QA crawl and 30-day post-launch monitoring",
        body: [
          "DNS cutover starts final QA rather than ending it. Run these explicit checks within two hours of launch, then watch Search Console closely across the first month so any missed legacy redirect gets patched before equity fades:",
        ],
        numbered: [
          "Crawl live routes right away to verify HTTP 200 status across kept pages, exact self-canonicals and zero 404 internal links.",
          "Spot-check your legacy URL redirect spreadsheet live across both trailing-slash and bare variants to verify clean single-hop 301s.",
          "Submit live contact forms, test WhatsApp links, inspect SSL SAN coverage and confirm security headers.",
          "Submit fresh clean `sitemap.xml` inside Search Console and notify IndexNow where used.",
          "Monitor Indexing > Pages, Not Found (404) lists and top landing clicks weekly for 30 days—minor 2-to-4-week position jitters while Google recrawls updated templates are normal.",
        ],
        bullets: [
          "Worked example: when restructuring a sprawling 400-URL service site down into 48 crisp pillar and guide routes, pre-validating 100% of legacy redirects against Nginx staging prevents 404 drops completely while consolidating historic backlinks smoothly.",
          "Compare pre-launch vs post-launch top 20 query positions calmly at Day 30 and Day 60 rather than panicking over Day 3 indexing bounces.",
        ],
      },
    ],
    midCta: {
      heading: "Planning a website redesign without risking your Google rankings?",
      text: "Every redesign SoftKore delivers ships with full pre-launch Search Console auditing, single-hop 301 testing and live launch verification.",
      href: "/services/web-development/",
      label: "Plan a Safe Redesign",
    },
    related: [
      { label: "Website design & development", href: "/services/web-development/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Why duplicate location pages hurt SEO", href: "/guides/why-duplicate-location-pages-hurt-seo/" },
    ],
    faqs: [
      {
        question: "Is slight ranking movement normal straight after launching a redesigned site?",
        answer:
          "Yes. Even flawless migrations often see modest position movement over 2 to 4 weeks as Googlebot re-renders updated HTML, confirms 301 paths and refreshes index signals before settling cleanly.",
      },
      {
        question: "Should deleted old news or blog posts redirect straight to our homepage?",
        answer:
          "Generally no—bulk redirecting unrelated specific posts onto `/` looks like Soft 404 behaviour and passes minimal relevance. Point retired links to the closest live service or topic page, or serve clean 404/410 if truly unrelated.",
      },
      {
        question: "How long must 301 redirect rules stay live after launching a redesign?",
        answer:
          "Leave permanent 301 maps running indefinitely—at minimum 12 to 24+ months—so old external partner links, citations and Google memory never rot into broken 404s.",
      },
      {
        question: "Can SoftKore audit and build our 301 redirect map even before coding begins?",
        answer:
          "Yes—exporting legacy Search Console traffic and locking URL + redirect architecture sits in Week 1 of our build workflow.",
      },
      {
        question: "What happens if a client already launched a redesign and traffic just crashed?",
        answer:
          "Immediate triage inspects archived sitemaps, Search Console legacy URLs and missing redirects right away so single-hop 301 patches restore lost equity fast.",
      },
    ],
    priority: 0.72,
    published: "2026-11-19",
    updated: "2026-11-20",
  },
];
