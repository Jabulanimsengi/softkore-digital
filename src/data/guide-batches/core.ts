/**
 * Core Pillar Guides (9 published).
 *
 * FAQ status:
 * - 12 search-intent FAQs (upgraded 2026-11-21):
 *   website-prices-south-africa, why-your-website-is-not-ranking,
 *   hacked-website-recovery-south-africa, fix-crawled-currently-not-indexed,
 *   seo-prices-south-africa
 * - 5 FAQs (candidates for future 12-FAQ expansion):
 *   technical-seo-checklist, website-security-checklist,
 *   popia-website-compliance-checklist, website-redesign-seo-checklist
 *
 * Editorial notes: open FAQ answers directly (40–75 words), keep [anchor](/path/)
 * links in answers/prose only (never in questions), avoid duplicating questions across
 * pages, and bump `updated` (YYYY-MM-DD) when editing a guide.
 */
import type { GuidePage } from "./types";

export const coreGuides: GuidePage[] = [
  {
    slug: "website-prices-south-africa",
    category: "Website Design & Development",
    status: "published",
    title: "Website Prices in South Africa: What Affects the Cost",
    metaTitle: "Website Prices in South Africa (2026 Guide) | SoftKore",
    description:
      "How much does a website cost in South Africa? Realistic ZAR price brackets from R12,000 to R150,000+, what drives quotes, and ongoing running costs.",
    intro:
      "Most small business websites in South Africa cost between R15,000 and R75,000 once-off, while custom online stores and client portals cost R75,000 to R150,000+. Two quotes can differ by five times because one covers a simple template, while the other includes sales writing, Google setup and strong security.",
    summary: [
      "What drives the price",
      "Typical ZAR price tiers",
      "Running & security costs",
      "Questions to ask",
    ],
    takeaways: [
      "Starter brochure sites sit between R12,000 and R25,000 when you supply the text and photos upfront.",
      "Service websites built to win enquiries on Google, with custom writing and fast phone speed, usually cost R25,000 to R75,000.",
      "Online stores and custom portals run from R35,000 to R150,000+ depending on payments, couriers and software links.",
      "Budget separately for your .co.za domain renewal, hosting, business email and monthly security care.",
      "Compare every quote line by line. Missing old-link redirects, Google setup or spam protection often turn into costly fixes later.",
    ],
    sections: [
      {
        title: "Typical website price brackets in South Africa (ZAR)",
        body: [
          "The clearest way to compare quotes in South Africa is by what the website must do for your business, not just page count. A small site that confirms your address for word-of-mouth referrals takes far less work than a service site built to win enquiries from Google buyers across Johannesburg, Cape Town or Durban.",
          "Use the ZAR ranges below as a realistic benchmark before comparing supplier quotes. Every bracket assumes fast loading on phones and a secure HTTPS connection from day one.",
        ],
        table: {
          caption: "Indicative once-off website build brackets in South Africa (ZAR)",
          headers: ["Build tier", "Typical budget (ZAR)", "Best suited for", "What is usually included"],
          rows: [
            [
              "Starter Brochure Site",
              "R12,000–R25,000",
              "New practices, trades or referral firms needing trust",
              "3 to 5 pages, simple layout, contact form, WhatsApp link, phone fit and a secure HTTPS connection",
            ],
            [
              "Business Service Site",
              "R25,000–R75,000",
              "Established SMEs wanting leads and calls from Google search",
              "Service pages, clear sales writing, Google setup, old-link redirects, Google Search Console (Google's free search report) and browser security settings",
            ],
            [
              "Online Store (Ecommerce)",
              "R35,000–R110,000",
              "Shops shipping physical goods via PayFast, Yoco or Ozow",
              "Product setup, courier rules (Bob Go or The Courier Guy), VAT invoices, safe checkout and order emails",
            ],
            [
              "Custom Web Platform / Portal",
              "R75,000–R150,000+",
              "Multi-branch firms, B2B trade portals or bespoke quote tools",
              "Custom fast code, links to your CRM or accounting software, staff logins, uptime cover and a website firewall",
            ],
          ],
        },
        callout: {
          tone: "note",
          heading: "Clear scope beats vague 'per page' quotes",
          text: "Be careful when an agency prices purely by multiplying pages. Ten copied town pages take less effort than one strong service page backed by real competitor research, clear graphics and honest pricing details.",
        },
      },
      {
        title: "Six factors that actually drive website pricing",
        body: [
          "When business owners ask why one developer quotes R18,000 and another quotes R60,000 for the same brief, the gap almost always hides in six items. Knowing which ones matter to your sales stops you paying for extras you do not need or buying a cheap site that fails to bring enquiries.",
        ],
        subsections: [
          {
            heading: "Sales writing and clear messaging",
            body: [
              "Dummy placeholder text makes any design look neat, yet clear words are what persuade a wary buyer to call you. Good website writing starts with interviewing your team, turning technical jargon into plain customer benefits and placing clear next steps on every page.",
              "If your own team writes the text, allow three to six weeks for busy directors to draft and approve it. Paying a skilled writer upfront often gets your site live a full month sooner.",
            ],
          },
          {
            heading: "Custom builds vs pre-built WordPress themes",
            body: [
              "Using a ready-made WordPress theme keeps visual setup fast, though heavy drag-and-drop page builders often make sites slow and overloaded on mobile phones and bring constant plugin update work. A custom site costs more upfront, yet loads faster, avoids plugin security bugs and stays reliable for years.",
            ],
          },
          {
            heading: "Integrations, migrations and launch protection",
            body: [
              "Linking your site to HubSpot, Xero, PayFast, Ozow, booking calendars or custom quote calculators takes extra build and testing time. If you are replacing an older site, we also map every old web address straight to its matching new page with permanent redirects so you do not lose your place on Google overnight.",
            ],
          },
        ],
        bullets: [
          "How many different page layouts and interactive tools your site needs",
          "Original photography, clear diagrams or product catalogue preparation",
          "Google setup: clear page titles, structured labels for Google, main-page tags and site maps",
          "Security setup: a firewall that blocks attacks (WAF), browser security settings, spam limits and POPIA notices",
        ],
      },
      {
        title: "Comparing low-cost and mid-tier quotes fairly",
        body: [
          "A budget template site is not always a mistake. If nearly all your work comes from direct referrals and buyers only check your website to confirm you are a real business before paying an invoice, a neat R18,000 starter site works well.",
          "Trouble starts when an established firm expects a cheap starter site to win national Google rankings. Without clear service pages, fast mobile loading on South African cellular networks and smart internal links, you often pay twice when you have to rebuild a year later.",
        ],
        callout: {
          tone: "tip",
          heading: "Ask for a written list of exclusions",
          text: "Ask every supplier to list in writing what is NOT included: writing, logo tidy-ups, domain transfers, old-link redirects, stock photos, monthly backups and post-launch bug fixes.",
        },
      },
      {
        title: "Ongoing running and security costs people forget",
        body: [
          "Launching the site is only your year-one build cost. Every business website has ongoing running costs to stay online, stay fast, follow POPIA privacy rules and block automated attacks.",
        ],
        bullets: [
          "Domain renewal: R100 to R350/year for a .co.za domain registered in your own company name.",
          "Reliable hosting: R180 to R1,500+/month depending on visitor numbers, local speed caching and uptime promises.",
          "Business email and anti-spoof setup (Google Workspace or Microsoft 365 plus SPF, DKIM and DMARC email checks): R120 to R260 per user/month.",
          "Security, backups and maintenance cover: R950 to R3,500+/month for off-site backups, updates, downtime alerts and small edits.",
          "Ongoing Google growth (SEO or Google Ads): a separate monthly budget if you actively compete for search clicks and leads.",
        ],
      },
      {
        title: "How to get better value from your budget",
        body: [
          "Instead of stretching a tight R35,000 budget thinly across twenty weak pages, build a strong eight-to-ten-page site where every main page is truly persuasive. You can add guides and project examples later once the main site starts earning.",
          "Being prepared also cuts agency hours fast. Gather your high-resolution logo, team photos, project details, real client reviews and current domain settings and registrar logins before kick-off day.",
        ],
        numbered: [
          "Pick one clear goal per page, such as a phone call, WhatsApp message or quote request.",
          "Prepare real proof of your work: honest numbers, sectors you serve and clear turnaround times.",
          "Skip thin copied town pages; invest in strong national or regional service pages instead.",
          "Set up analytics, Google Search Console and tracking for calls, WhatsApp taps and form enquiries before launch day.",
        ],
      },
      {
        title: "Questions to ask a web designer before signing",
        body: [
          "Five direct questions quickly show whether a supplier works honestly or will lock your domain inside an unclear contract.",
        ],
        bullets: [
          "Will our .co.za domain, hosting billing and Google Search Console account stay in our company's own name?",
          "Who writes and approves the page text, and how many rounds of changes are included?",
          "How will you keep our current Google rankings safe and map redirects for every old web address before launch?",
          "What browser security settings, anti-spam protection and off-site backups come turned on at launch?",
          "If we move away later, do we get full website files and database exports with zero release fees?",
        ],
        callout: {
          tone: "warning",
          heading: "Red flag: agencies that register your domain in their own name",
          text: "Never let an agency or freelancer list themselves as the owner on ZACR (South Africa's domain registry) for your .co.za domain. A dispute with your supplier can take down both your website and company email at the same time.",
        },
      },
    ],
    midCta: {
      heading: "Want a clear rand quote before you commit?",
      text: "Tell us what your business sells and what your current site lacks. We will reply with a realistic page plan, budget range and launch timeline.",
      href: "/services/web-development/",
      label: "Explore website development",
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
          "Expect R12,000 to R25,000 for a neat starter brochure site, and R25,000 to R75,000 for a business service site with custom writing, fast mobile speed and Google setup. Online stores typically run R35,000 to R110,000, while custom portals start at R75,000 to R150,000+ depending on payment and software links.",
      },
      {
        question: "Is a R5,000 template website a bad idea?",
        answer:
          "A R5,000 site can work as a short-term digital business card if every client already knows you through referrals. It becomes expensive when you want leads from Google, because weak copy, messy page structure, missing security settings and slow plugins usually force a full rebuild within a year.",
      },
      {
        question: "Should technical SEO and security be included in the build price?",
        answer:
          "Yes, baseline setup should always be included in your build price. Every new site should launch with clear headings, simple web addresses, a sitemap, a secure HTTPS connection, browser security settings, form spam blocks and fast mobile loading. Monthly ranking work and ongoing updates sit separately.",
      },
      {
        question: "Do I own my website and domain outright after paying?",
        answer:
          "You should own both completely once your final invoice is paid. Before signing, check that your contract transfers full website rights to your company on settlement and confirms your .co.za domain stays registered in your own business name with direct access to your registrar account.",
      },
      {
        question: "How much does website maintenance cost per month in South Africa?",
        answer:
          "WordPress sites needing regular plugin updates, security checks, uptime alerts and daily off-site backups usually cost R950 to R2,500 per month. Custom static websites have no plugins to patch and often need much lighter ongoing care. Read our [website maintenance cost guide](/guides/website-maintenance-cost-south-africa/) for a full monthly breakdown.",
      },
      {
        question: "Do website design prices in South Africa usually include VAT and copywriting?",
        answer:
          "Many small business quotes leave out VAT and sales writing unless both are listed clearly. Writing good page text takes real interviewing and editing time, so always confirm whether VAT, commercial writing and paid stock photos are included before comparing two web quotes side by side.",
      },
      {
        question: "Why do custom Next.js websites cost more upfront than basic WordPress templates?",
        answer:
          "Custom Next.js sites take more upfront coding for tailored layouts, fast phone loading and fewer ways in for hackers, with no heavy plugin layers. WordPress templates look cheaper early on, then add plugin licence fees and ongoing patch costs. Compare both in our [WordPress vs custom guide](/guides/wordpress-vs-custom-website-south-africa/).",
      },
      {
        question: "Can a small business pay for a South African website build in milestone stages?",
        answer:
          "Yes. Most reliable studios split builds into two or three clear stages tied to real progress: a deposit to start planning and writing, a mid-project payment when you review the private preview site, and the final payment once launch checks pass and your site goes live.",
      },
      {
        question: "What hidden post-launch website costs catch South African SMEs off guard?",
        answer:
          "Common surprises include yearly .co.za domain renewals, Google Workspace or Microsoft 365 email fees, paid WordPress plugin licences, setting up permanent redirects for old links and [locking down your website](/services/website-security/) after bots hit unsecured contact forms. Always ask for a full year-one running cost breakdown before signing.",
      },
      {
        question: "Is it cheaper to fix a slow existing website or rebuild from scratch?",
        answer:
          "If your domain trust and layout are already solid, speeding up images and rewriting weak service pages costs less than starting over. When slow page builders or messy hacked code hold everything back, a clean rebuild through [website development](/services/web-development/) usually saves money over twelve months.",
      },
      {
        question: "How much extra does bilingual or multi-currency functionality add to a website budget?",
        answer:
          "Adding extra languages or multiple currencies typically adds 20% to 40% to your design, testing and translation budget. Every extra language needs clean web addresses, translated forms and full mobile checks, so it often pays to prove your main rand sales flow first before expanding.",
      },
      {
        question: "Should startups launch a landing page first and expand into a full site later?",
        answer:
          "Yes, especially if your starting budget sits under R20,000. Launching one fast page with a clear offer, local proof, pricing hints and WhatsApp or form capture helps you win early sales right away. Once revenue grows, you can invest in deeper [SEO service pages](/services/seo-services/) and helpful buyer guides.",
      },
    ],
    priority: 0.72,
    published: "2026-05-06",
    updated: "2026-11-26",
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
      "Technical SEO makes sure Google can find, read and list your main business pages in search results. Good setup alone cannot put weak offers at number one, yet one wrong tag, broken redirect or hidden block can keep your best pages unseen by South African buyers.",
    summary: [
      "Search Console setup",
      "Indexing checks",
      "Redirects",
      "Thin and duplicate pages",
    ],
    takeaways: [
      "Verify your whole domain in Google Search Console (Google's free search report) using a domain setting before trusting third-party SEO tools.",
      "Every sales page must load with a live 200 status, carry no 'do not list' block and point to itself as the main page.",
      "Remove or merge thin copied pages ('Crawled - currently not indexed') using direct permanent redirects.",
      "Fix slash, www and HTTP redirect loops so Google's scan focuses on the pages that bring enquiries.",
      "Test real speed and layout checks on slower 4G phones, which is how most South Africans browse.",
    ],
    sections: [
      {
        title: "Verify Google Search Console and inspect live indexing",
        body: [
          "Third-party SEO tools only guess how Google sees your site. Google Search Console (Google's free report on how your site shows up in search) shows real data straight from Google. Verify a full Domain property inside your domain settings (DNS) so http, https, www and non-www data all sit in one place.",
          "Submit a live sitemap (`sitemap.xml`) that lists only live pages you want shown on Google, then check Indexing > Pages every week to spot sudden drops early.",
        ],
        numbered: [
          "Verify ownership of your root domain (`example.co.za`) via a domain TXT record inside your company Google account.",
          "Submit `https://www.yourdomain.co.za/sitemap.xml` using your exact main domain format.",
          "Check your homepage and top five service pages in URL Inspection to confirm each page is on Google and displays well on phones.",
          "Open Security & Manual Actions right away to rule out penalties, warning screens or hacked spam links.",
        ],
      },
      {
        title: "Audit crawlability, indexability and canonical consolidation",
        body: [
          "Most silent drops in Google listings happen because a site sends mixed signals. For example, menus may link to `/services/seo` without a slash at the end while the page tells Google the main version has a slash, or a developer leaves a 'do not list' tag (`noindex`) on after launch.",
          "Check your live site every quarter to make sure page codes, main-page tags (called canonical tags), scan rules (`robots.txt`) and your sitemap all agree with each other.",
        ],
        subsections: [
          {
            heading: "Enforce one canonical domain host and trailing-slash convention",
            body: [
              "Pick one standard web address format, such as `https://www.domain.co.za` or `https://domain.co.za`, and keep end slashes consistent across every link. Set up hosting or Cloudflare rules so old `http://`, bare domain and missing-slash links send visitors straight to the main version in one direct redirect (a 301 rule).",
            ],
          },
          {
            heading: "Verify robots.txt, meta robots and X-Robots-Tag HTTP headers",
            body: [
              "Check your site's instructions file (`/robots.txt`) so old rules do not block image, style or script folders that Google needs to view your mobile layout. Also check server response headers so live pages never carry a hidden `noindex` block by mistake.",
            ],
          },
        ],
        table: {
          caption: "Technical SEO baseline verification checks per key URL",
          headers: ["Signal", "Healthy state", "Common failure", "Fastest fix"],
          rows: [
            [
              "Page status code",
              "Direct 200 OK",
              "Multi-step redirect chains or empty thin pages returning 200",
              "Point menus straight to final links; merge or redirect weak stubs",
            ],
            [
              "Main-page tag (canonical)",
              "Points to its own exact web address",
              "Every page pointing back to the homepage `/`",
              "Set the exact page address in each page's metadata",
            ],
            [
              "Listing rule (robots tag)",
              "Open to list (no block)",
              "Leftover `noindex` tag from a private preview build",
              "Turn off preview blocks when going live",
            ],
            [
              "XML sitemap",
              "Lists 100% of live pages you want ranked",
              "Includes old redirects, broken 404 pages or search filter links",
              "Build the sitemap only from live main pages",
            ],
          ],
        },
      },
      {
        title: "Interpret Search Console 'Not indexed' reasons properly",
        body: [
          "Not every excluded address is an emergency. Old links that redirect properly belong under 'Page with redirect', and thank-you pages or privacy notices do not need to appear in Google search. Knowing which alerts need fixing saves weeks of wasted work.",
        ],
        bullets: [
          "`Crawled - currently not indexed`: Google read the page and felt it was too short, repetitive or weak to show. Improve the useful detail or merge overlapping pages.",
          "`Discovered - currently not indexed`: Google knows the page exists but has not scanned it yet, often due to oversized sitemaps or slow shared hosting.",
          "`Duplicate without user-selected canonical`: Two or more addresses show the same text. Use direct redirects and clear main-page tags.",
          "`Blocked by robots.txt` or `Excluded by noindex`: Fine for private utility screens; fix fast if shown on sales pages.",
        ],
        callout: {
          tone: "warning",
          heading: "Do not block old pages in robots.txt before redirecting",
          text: "If you block an old folder inside `robots.txt`, Google stops visiting those old addresses and never sees your permanent redirects passing trust to the new pages. Keep scanning open so Google follows the redirect.",
        },
      },
      {
        title: "Prune thin doorway pages, duplicate blogs and broken redirect chains",
        body: [
          "Creating fifty near-identical WordPress pages that only swap city names like 'Johannesburg', 'Pretoria', 'Midrand' and 'Sandton' pulls down quality across your whole site. Even if Google lists a few at first, quality updates often drop entire folders while ignoring your core service pages.",
          "Combine overlapping pages into strong national or regional guides, and point every retired web address with a direct 301 redirect straight to the best matching live page. Never dump thirty unrelated links onto `/`.",
        ],
      },
      {
        title: "Fix internal linking hierarchy, orphan URLs and JSON-LD schema",
        body: [
          "Google uses links inside your site to see which pages matter most. Any important service page listed only in `sitemap.xml`, with no clear links from menus, home cards or related guides, looks minor to search engines.",
        ],
        bullets: [
          "Keep every main service page within two clicks of the homepage and every guide within three clicks via clear topic links.",
          "Write clear link words (such as 'technical SEO checklist SA') instead of vague buttons like 'read more' or 'click here'.",
          "Add structured labels in your code (`Organization`, `Service`, `BreadcrumbList`, `Article`, `FAQPage` JSON-LD schema) that match your visible headings and FAQs word for word.",
          "Fix all broken internal links returning 404 errors or bouncing through old redirects before launch.",
        ],
      },
      {
        title: "Tune mobile speed and Core Web Vitals on South African cellular connections",
        body: [
          "Google judges your site on its mobile version first, and most South African buyers browse over 4G or patchy suburban data. Huge 3 MB PNG hero images, jumping buttons and dozens of heavy builder scripts push impatient visitors straight back to Google before they read your headline.",
          "Save photos as light WebP files, set clear width and height values so the layout stays steady while loading (CLS under 0.1), delay non-urgent chat or ad widgets so taps feel instant (INP under 200 ms), and check Mobile Core Web Vitals (Google's speed and stability tests) in Search Console monthly.",
        ],
        callout: {
          tone: "tip",
          heading: "Test on slow mobile data, not office fibre",
          text: "A site opening in 0.7 seconds on Sandton fibre can stall for 5 seconds on a mid-range Android phone on LTE. Aim for main content to show in under 2.5 seconds using mobile tests in PageSpeed Insights.",
        },
      },
    ],
    midCta: {
      heading: "Think hidden Google issues are costing you clicks?",
      text: "Our technical SEO check spots blocked pages, mixed main-page tags, sitemap errors and wasted scans, then hands you a clear fix list.",
      href: "/services/seo-services/",
      label: "Explore SEO services",
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
          "Technical SEO is the behind-the-scenes setup that helps Google find, read and show your website properly in search results. It covers fast mobile loading, clean web addresses, working sitemaps, main-page tags, redirects, clear internal links and structured labels so search engines understand every service you offer.",
      },
      {
        question: "How often should a South African business run a technical SEO audit?",
        answer:
          "Check Google Search Console once a month to catch blocked pages, broken links or speed drops early. Beyond monthly checks, always run a full technical check before and right after any website redesign, hosting change, domain move or major menu update so search traffic stays safe.",
      },
      {
        question: "Why does Google index my homepage yet ignore core service pages?",
        answer:
          "This usually happens when service pages have very few links pointing to them from menus or articles, repeat thin text from other pages, point their main-page tag wrongly back to the homepage, or load too slowly on phones. Adding helpful detail and clear links usually fixes it.",
      },
      {
        question: "Does passing every technical SEO check guarantee position one rankings?",
        answer:
          "No. Technical SEO clears away roadblocks so Google can list your pages and let them compete fairly. Reaching the top spots still depends on writing clear answers that match what buyers search for, showing real local trust proof and earning genuine mentions from reputable websites.",
      },
      {
        question: "Should my XML sitemap include category archives, PDFs or thank-you pages?",
        answer:
          "No. Keep your XML sitemap limited to live, useful pages you genuinely want new customers finding in Google search results. Adding empty category archives, internal filter links, uploaded PDFs or form thank-you pages wastes Google's scan time and weakens how search engines judge the quality of your main site.",
      },
    ],
    priority: 0.7,
    published: "2026-05-06",
    updated: "2026-11-26",
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
      "Most small business website hacks happen because of simple gaps: staff logins without two-step login, outdated plugins or backups saved on the same server. Working through this checklist blocks most common attacks before your reputation or client records are put at risk.",
    summary: [
      "Access and MFA",
      "Patching and plugins",
      "Backups and SSL",
      "Monitoring and POPIA",
    ],
    takeaways: [
      "Turn on app or hardware two-step login (MFA) and remove ex-staff logins across hosting, editing tools and your .co.za registrar.",
      "Delete unused plugins and old preview folders from your server instead of leaving them turned off.",
      "Save locked daily backups in a separate cloud place and test restoring a copy every three months.",
      "Pair an HTTPS security certificate with browser security settings and domain email checks (SPF, DKIM and DMARC) to stop fake emails.",
      "Ask for less data on contact forms under POPIA Section 19, and watch Google Search Console for security warnings.",
    ],
    sections: [
      {
        title: "Lock down admin logins, hosting panels and registrar access",
        body: [
          "Bot scripts test leaked passwords on WordPress login screens, hosting panels and domain accounts all day and night. Strong login rules stop intruders walking straight in through the front door, even if a past helper used a weak password on another site.",
          "Review who still has access every three months with your team and web partner, so old contractor logins never stay active by mistake.",
        ],
        subsections: [
          {
            heading: "Enforce least-privilege roles and instant contractor offboarding",
            body: [
              "Write down everyone who can sign into your site editing tool (CMS), hosting account, file access, domain settings (DNS), ZACR registrar and Google Search Console (Google's free search report). Remove old staff and agencies the day they leave, and give writers normal Editor rights instead of full Admin control.",
            ],
          },
          {
            heading: "Require app-based MFA and password-manager secrets everywhere",
            body: [
              "Turn on two-step login (MFA) using an authenticator app or USB security key on every admin, domain and hosting account. Skip SMS codes where you can, because SIM-swap fraud is still a real risk in South Africa. Keep unique 16-character passwords inside a shared company password manager.",
            ],
          },
        ],
        bullets: [
          "Remove generic `admin` usernames and block `/xmlrpc.php` login floods on WordPress sites.",
          "Limit direct server file logins (SSH and SFTP) to trusted keys and known office addresses instead of open passwords.",
          "Keep your .co.za domain registered under your own company name and a checked company email address.",
        ],
      },
      {
        title: "Patch CMS core, plugins, themes and third-party dependencies",
        body: [
          "Public flaws inside outdated contact form plugins, sliders, popups and online store add-ons give attack scripts an open door within hours of being shared online. Waiting until a page looks broken gives hackers time to slip in spam links or hidden backdoors.",
          "Set a calm weekly update routine. Urgent security fixes should go live within 24 to 48 hours, while normal updates are tested on a private preview site first.",
        ],
        numbered: [
          "Save a fresh off-site backup right before you run major site or plugin updates.",
          "Delete unused plugins, old themes and leftover `/staging/` preview folders off your server. Files that are only switched off can still be reached and abused.",
          "Check your menus, contact forms and checkout pages right after updating to make sure everything still works.",
          "Never install cracked or free 'nulled' paid themes or plugins. Nearly all of them hide secret backdoor code inside.",
        ],
      },
      {
        title: "Keep verified, immutable off-site backups",
        body: [
          "Standard hosting backups stored on the same server can get wiped or locked right alongside your live website during a hack or ransomware attack. Real safety means keeping copies in a separate cloud store that your web server cannot erase.",
          "Keep at least 14 days of daily copies plus monthly saves. That way, if silent bad code hides on your site for three weeks, you still have older clean copies to restore from.",
        ],
        table: {
          caption: "Recommended website security and backup cadence",
          headers: ["Control", "Target standard", "Recommended frequency", "Why it matters"],
          rows: [
            [
              "Off-site backups",
              "Locked copy of files and data in a separate cloud store",
              "Daily plus manual save before updates",
              "Protects you if the server is hacked, breaks down or gets suspended",
            ],
            [
              "Test restores",
              "Full restore tested on a private preview site",
              "Every 3 months",
              "Finds missing files or broken data backups before a real crisis hits",
            ],
            [
              "Software patching",
              "Site core, plugins and code libraries kept up to date",
              "Weekly (urgent fixes within 24 hours)",
              "Closes known security holes that bots scan for every hour",
            ],
            [
              "Access & log review",
              "Check admin users and recent sign-in logs",
              "Monthly plus same day when staff leave",
              "Stops forgotten contractor accounts or fake admins staying open",
            ],
          ],
        },
      },
      {
        title: "Enforce SSL, HTTP security headers and email/DNS protection",
        body: [
          "A standard HTTPS security certificate hides data passing over public Wi-Fi, yet browsers still need extra rules to block fake click overlays, tricky file downloads and scam emails pretending to come from your business.",
        ],
        bullets: [
          "Make sure auto-renewing HTTPS security certificates cover both the bare domain and `www`, and send HTTP visitors straight to HTTPS.",
          "Turn on browser security settings: `HSTS` (forces HTTPS), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options` and clear script rules (`CSP`).",
          "Lock domain transfers (`clientTransferProhibited`) on every `.co.za` and `.com` domain so hijackers cannot move your domain away.",
          "Set up `SPF`, `DKIM` and `DMARC` (`p=reject`) rules in your domain settings so scammers cannot send fake invoice emails using your domain name.",
        ],
        callout: {
          tone: "note",
          heading: "HTTPS alone does NOT stop website hacks",
          text: "Many hacked websites still show a valid HTTPS security certificate while quietly sending visitors to spam links or stealing leads through outdated plugins and weak passwords.",
        },
      },
      {
        title: "Lock down enquiry forms, personal records and POPIA safeguards",
        body: [
          "Contact, booking and checkout forms take outside input straight into your email or database. Under POPIA Section 19, South African businesses must take sensible steps to keep customer details safe from leaks, loss or misuse.",
          "Check every form entry on your server, cap how much text a bot can send, limit repeat tries from one address and add anti-spam checks like Cloudflare Turnstile. Do not ask for ID numbers on first enquiry forms, and never leave old `leads.csv` or `backup.sql` files inside public folders.",
        ],
      },
      {
        title: "Monitor uptime, file integrity and Google Security Issues continuously",
        body: [
          "Spotting trouble early turns a week-long mess into a twenty-minute fix. Waiting until a customer calls about a red browser warning hurts trust and costs you enquiries.",
        ],
        bullets: [
          "Check Google Search Console > Security & Manual Actions often, and watch for sudden spikes of strange new pages.",
          "Run alerts if your site goes down, if an HTTPS certificate is close to expiry, or if your domain settings change without warning.",
          "Put a website firewall that blocks attacks before they reach your site (such as Cloudflare WAF) in front of WordPress or custom server sites.",
        ],
        callout: {
          tone: "tip",
          heading: "Simple static websites cut security work down fast",
          text: "Moving brochure and business service sites off plugin-heavy PHP software onto pre-built static Next.js sites removes database attacks and common WordPress plugin hacks completely.",
        },
      },
      {
        title: "Assign security ownership internally so checks actually happen",
        body: [
          "Security lists usually fail for one simple reason: owners think the hosting company checks logins, while the hosting team thinks your old designer handles backups. Name one person inside your firm who checks monthly uptime, HTTPS renewals, backup tests and staff leavers.",
          "Save an emergency sheet inside your company password manager with registrar logins, domain hosts, hosting support numbers and your recovery partner's direct details. That way, losing access to work email never locks you out during an outage.",
        ],
      },
    ],
    midCta: {
      heading: "Not sure where your site has security gaps?",
      text: "Book a clear website security review. We check your HTTPS setup, browser security settings, domain email rules, backup safety and admin access.",
      href: "/services/website-security/",
      label: "Explore website security",
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
          "Downtime alerts, HTTPS checks, domain locks and website firewall filtering should stay active around the clock every day. User access audits, software updates and backup test restores should happen monthly on quiet custom sites, or weekly on busy WordPress and online store setups that rely on plugins.",
      },
      {
        question: "Does putting Cloudflare in front make server-level security unnecessary?",
        answer:
          "No. A Cloudflare website firewall blocks noisy bots and common web attacks before they reach your site, which helps a lot. However, hackers can still break in through stolen admin passwords, old unpatched plugins, exposed server addresses or hidden backdoors unless you lock down your server too.",
      },
      {
        question: "What single security habit causes the most emergency cleanups in South Africa?",
        answer:
          "Leaving outdated WordPress plugins and old ex-contractor admin logins active with no two-step login or off-site backups causes most sudden site hacks. Bots scan the web nonstop for those exact gaps, then slip in spam links or lock owners out until everything is rebuilt from scratch.",
      },
      {
        question: "Can weak website security damage Google Search visibility directly?",
        answer:
          "Yes. Hacked sites often inject hidden foreign spam pages, send mobile visitors to scam offers, trigger red Chrome warnings or go offline completely. Google quickly removes warned sites from search results, costing you enquiries until the site is cleaned, checked and approved again in Search Console.",
      },
      {
        question: "Why run test restores when automated backup tools report 'Success' weekly?",
        answer:
          "Backup plugins often show a green tick even when large image folders were skipped, database tables cut off halfway or file permissions fail during recovery. Testing a full restore onto a private preview copy every few months proves your backups really work before an emergency strikes.",
      },
    ],
    priority: 0.7,
    published: "2026-05-06",
    updated: "2026-11-26",
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
      "A neat website can still bring zero Google leads if Google is not showing your pages, your wording misses what buyers search for, or older rivals sit above you. Checking these problems in the right order stops you wasting months rewriting pages when a simple block is holding everything back.",
    summary: [
      "Are pages indexed?",
      "Thin content",
      "Search intent",
      "Authority and links",
    ],
    takeaways: [
      "Check Google Search Console (Google's free search report) first. If a page is not listed on Google, it cannot earn a single click.",
      "High impressions with zero clicks usually mean your pages sit at positions 20 to 50, where almost no buyer looks.",
      "Copied town or industry pages quietly pull down Google trust across your whole website.",
      "Match the layout buyers expect on page one, such as a price table, a clear service page or a step-by-step fix guide.",
      "Fix issues in order: Listing access, Clear buyer content, Internal links and speed, then Local trust and real reviews.",
    ],
    sections: [
      {
        title: "Diagnose zero Google clicks in order before spending another rand",
        body: [
          "Blaming the Google algorithm pushes many business owners into buying cheap backlink deals or firing writers too soon. Google Search Console breaks search problems into four clear areas: whether Google lists your pages, whether your words match what buyers type, how strong your rivals are, and whether people click your link. Checking this table finds the real issue in fifteen minutes.",
        ],
        table: {
          caption: "Diagnostic matrix: Search Console symptom vs likely root cause",
          headers: ["What you see in Search Console", "Likely bottleneck", "First diagnostic test", "Correct next action"],
          rows: [
            [
              "Pages listed as 'Not indexed'",
              "Hidden block, copied text or no menu links to the page",
              "Check the address in URL Inspection for status and main-page tag",
              "Remove blocks, merge thin copies and add clear internal links",
            ],
            [
              "Listed, near-zero views",
              "Headings use vague slogans nobody searches, or a brand-new site",
              "Compare page titles against real buyer search phrases",
              "Rewrite headings around plain South African search terms",
            ],
            [
              "Many views, almost no clicks",
              "Stuck at positions 20 to 80, or dull page titles",
              "Sort Performance report by Average Position and Click Rate",
              "Add stronger details, clear pricing, FAQs and local proof",
            ],
            [
              "Sudden drop after launch",
              "Missing old-link redirects, leftover preview block or hack spam",
              "Match drop date against launch changes and Security alerts",
              "Add direct redirects for old links and clear security flags",
            ],
          ],
        },
      },
      {
        title: "Google may not be indexing your commercial pages at all",
        body: [
          "Open Google Search Console under Indexing > Pages first. If your main service pages or guides sit under `Crawled - currently not indexed`, `Discovered - currently not indexed` or `Excluded by noindex tag`, tweaking words on the page will not help yet because Google is not showing those addresses at all.",
          "Check your main links with URL Inspection (`Test Live URL`) to make sure each page loads live (HTTP 200), displays fine on phones, points to itself as the main version and appears inside your `sitemap.xml` file.",
        ],
      },
      {
        title: "Thin, overlapping or template doorway pages dilute whole-site quality",
        body: [
          "Making sixty cloned WordPress pages that only swap 'Sandton', 'Pretoria', 'Centurion' and 'Midrand', or repeating the exact same pitch across twenty industry names, is one of the fastest ways to stop your site showing on Google.",
          "Google judges usefulness across your whole website. Merging weak copied pages into strong main service hubs using direct permanent redirects (301 rules) often helps the kept pages get scanned faster and rank higher.",
        ],
        callout: {
          tone: "warning",
          heading: "Publishing short weekly posts rarely saves an unranked site",
          text: "Flooding a weak site with short 500-word generic blog posts simply adds more pages to 'Crawled - currently not indexed'. Make your main sales pages genuinely useful first.",
        },
      },
      {
        title: "You are ranking too low on page four, or missing real search intent",
        body: [
          "Searching only for your own company name fools many owners into thinking their site ranks well. Filter Google Search Console to hide your brand name and check Average Position: sitting at position 38 brings empty views without a single WhatsApp enquiry, because nearly every buyer clicks the top five results.",
        ],
        subsections: [
          {
            heading: "Check live Google.co.za top results to match page format",
            body: [
              "Search your main service phrase in a private browser window in South Africa. If every page-one result gives clear rand price brackets and real comparison tables while your page is a vague three-paragraph sales flyer, visitors bounce straight back to Google.",
            ],
          },
          {
            heading: "Trade clever agency slogans for literal commercial clarity",
            body: [
              "Fancy lines like 'Architects of Tomorrow's Digital Potential' match nothing buyers actually type. Put plain South African search words straight into your page title, main heading and opening lines.",
            ],
          },
        ],
      },
      {
        title: "Weak authority, broken trust cues or hidden internal link gaps",
        body: [
          "In busy South African fields like law, accounting, trades, healthcare, logistics and web design, neat code alone rarely beats ten-year-old rivals overnight without steady trust and proof.",
        ],
        bullets: [
          "Build clear page hubs: make sure every main service page sits within two clicks of the homepage and gets descriptive links from related guides.",
          "Stop pages competing against each other: if two pages chase the same search phrase, merge them with a permanent redirect into one stronger page.",
          "Show clear South African proof: real street details, a working `+27` phone line, honest project details, a secure HTTPS connection and fast phone loading.",
          "Earn real local mentions: genuine Google Business Profile reviews, trusted local industry listings and real supplier or partner links, avoiding cheap spam link deals.",
        ],
        callout: {
          tone: "tip",
          heading: "Keep links honest: bad links hurt far more than zero links",
          text: "Skip Fiverr or bulk R1,500 '500 high-DA link' deals. Cheap spam links can hold down your Google trust for years and take painful work to clean up later.",
        },
      },
      {
        title: "Practical 90-day fix sequence for stalled South African sites",
        body: [
          "Work through fixes in order instead of chasing small tweaks on top of broken pages. Building links while your pages still suffer missing redirects or weak internal links wastes time and budget:",
        ],
        numbered: [
          "Weeks 1 to 2: Check Google Search Console pages, scan blocks, main-page tags, broken redirects and basic site security.",
          "Weeks 2 to 4: Merge thin copied pages using direct redirects and keep your sitemap focused only on strong live pages.",
          "Weeks 3 to 6: Rewrite main service pages around what buyers really want to know, using plain tables, clear headings and honest FAQs.",
          "Weeks 4 to 8: Fix mobile speed issues and link your guides straight back into your main service pages.",
          "Months 2 to 6+: Publish genuinely helpful guides that answer real client questions while gathering steady Google reviews and real local mentions.",
        ],
        bullets: [
          "Illustrative example: merging 120 copied South African town pages into three thorough service hubs with clear rand price tables helps move stalled pages from page five toward the top results over the following Google updates.",
        ],
      },
    ],
    midCta: {
      heading: "Tired of guessing why Google ignores your website?",
      text: "We review your Google Search Console data, check old-link redirects and compare top local rivals so you get one clear ranked fix plan.",
      href: "/services/seo-services/",
      label: "Book an SEO audit",
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
          "Fixing technical blocks that stop Google showing your pages often registers within 2 to 6 weeks. Pushing competitive service phrases onto page one typically takes 4 to 9 months or longer, depending on how old your domain is, how strong local rivals are, and how helpful your pages are.",
      },
      {
        question: "Can a brand-new .co.za site beat older established brands?",
        answer:
          "Yes, if you pick the right starting topics. Focus first on specific buyer questions, clear South African rand pricing guides and local niche problems where big brands only write vague text. Once those focused pages build real trust and links, you can steadily compete on broader national service terms.",
      },
      {
        question: "Should we publish five articles every week if nothing ranks right now?",
        answer:
          "No. Publishing frequent short posts on a broken site structure just gives Google more thin pages to ignore. Fix your listing blocks first, merge any duplicate pages and upgrade your main service pages with clear answers. Once that base is solid, publish fewer, deeper guides worth reading.",
      },
      {
        question: "Why did our Google clicks vanish suddenly after an agency launch?",
        answer:
          "Open Google Search Console right away and compare the exact traffic drop date against your website launch date. Nearly every sudden drop happens because old web addresses changed without permanent redirects, a preview 'do not list' tag stayed turned on after launch, or hosting and HTTPS settings broke.",
      },
      {
        question: "How often should we check Search Console rankings?",
        answer:
          "Review your Performance and Indexing reports once a month instead of stressing over daily ups and downs. Always filter your report numbers to South Africa and separate searches for your own company name from non-branded service searches so you can track real new customer growth.",
      },
      {
        question: "Why does my site rank well for our company name but not our services?",
        answer:
          "Almost nobody competes against your exact company name, so ranking for your brand is easy. Winning non-branded service searches takes dedicated service pages that answer what buyers want, clear links from inside your site and stronger local proof. Explore our [SEO services](/services/seo-services/) to close these gaps.",
      },
      {
        question: "Can a sluggish hosting server in Europe hurt our South African Google rankings?",
        answer:
          "Slow server reply times and poor mobile [Core Web Vitals](/guides/core-web-vitals-guide-south-africa/) frustrate visitors on South African mobile networks and cause potential buyers to hit the back button fast. Hosting lightweight pages behind a fast global delivery network with local caching keeps your response times snappy across Johannesburg, Cape Town and Durban.",
      },
      {
        question: "Why do national directories rank above local business websites in South Africa?",
        answer:
          "Big national directory sites carry years of age and thousands of outside links across every trade. Specialist businesses can still outrank them by publishing genuine local proof, transparent rand pricing tables and focused [service pages built to convert](/guides/what-makes-a-service-page-convert/) that thin directory listings simply cannot match.",
      },
      {
        question: "Can two similar pages on our own website prevent either one from ranking?",
        answer:
          "Yes. When two pages on your site target the exact same search phrase, Google splits ranking signals between both web addresses and often ranks neither page well. Merging the weaker copy into the stronger page with a direct permanent redirect gathers all authority onto one clear page.",
      },
      {
        question: "How do I tell whether technical SEO or backlinks are holding our site back?",
        answer:
          "Check Google Search Console first. If good service pages are excluded, blocked or very slow on phones, technical issues come first. If pages are listed and sit on page two, deeper copy and outside trust matter most. Request a [free SEO audit](/contact/?service=free-seo-audit#contact-form) to find out.",
      },
      {
        question: "Does switching from HTTP to HTTPS or changing domains temporarily affect rankings?",
        answer:
          "Yes, moving carelessly between protocols or domains can drop search traffic overnight. Search engines treat new web addresses as untested until they see matching main-page tags and direct permanent redirects from every old page. Always follow our [website redesign SEO checklist](/guides/website-redesign-seo-checklist/) before changing your domain or protocol.",
      },
      {
        question: "Can weak WordPress security or hidden spam links cause rankings to collapse?",
        answer:
          "Yes. Hidden casino or pharmacy spam pages, sneak mobile redirects and browser security warnings break Google's trust quickly and can get your entire site pulled from search results. Follow our [hacked website recovery guide](/guides/hacked-website-recovery-south-africa/) straight away if strange links or sudden traffic drops appear on your domain.",
      },
    ],
    priority: 0.72,
    published: "2026-05-06",
    updated: "2026-11-26",
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
      "Finding out your company website sends visitors to spam pages or shows Google's red 'Deceptive site ahead' block calls for calm step-by-step cleanup, not panicked file deletion. Saving evidence first, removing hidden backdoors, changing every login and asking Google to recheck your site protects your customers, rankings and POPIA duties.",
    summary: [
      "Signs of a compromise",
      "Forensic backup & isolation",
      "Clean backdoors & credentials",
      "Search Console & POPIA checks",
    ],
    takeaways: [
      "Save a full locked copy of your files, database and server logs BEFORE wiping bad code or resetting your hosting.",
      "Do not rely on yesterday's backup alone. Hacks often plant hidden backdoors weeks before any spam shows up.",
      "Change every login that touched the server: hosting panel, database, FTP/SSH, admin accounts, email and payment keys.",
      "Return real 404 or 410 'page gone' codes on fake spam links so Google clears them out of search results smoothly.",
      "Check your POPIA Section 22 breach duties right away if customer enquiry forms, orders or databases sat on that host.",
    ],
    sections: [
      {
        title: "Confirm every symptom of a live website compromise",
        body: [
          "Most website hacks never deface your homepage, because hackers make more money when owners do not notice. Hidden PHP scripts often act normal while you are signed in, yet send Google's scanner and mobile visitors straight to fake shops or scam pages.",
          "Look for early warning signs across both Google search results and your hosting account before waiting for a customer to call.",
        ],
        bullets: [
          "Searching `site:yourdomain.co.za` on Google shows strange medicine, casino or foreign-language pages.",
          "Tapping your site from Google on a mobile phone sends you straight to scam prize or login pages.",
          "Google Search Console (Google's free search report) shows a Security Issue alert, or Chrome shows a red 'Deceptive site ahead' screen.",
          "Your hosting company warns you about overloaded CPU usage, bulk spam emails or unknown admin users inside WordPress.",
        ],
      },
      {
        title: "Contain the incident and capture forensic evidence (First 60 minutes)",
        body: [
          "Deleting hacked files in a rush wipes out the server logs and timestamps you need to see which weak password or outdated plugin let the hacker in. Those logs also show whether client details were downloaded.",
        ],
        numbered: [
          "Save an offline locked copy of your website folder, full database export and the last 30 days of web, file and login logs.",
          "Turn on a temporary maintenance page or Cloudflare Under Attack mode if visitors are seeing scam pages or fake downloads.",
          "Sign out all active WordPress and hosting sessions, and lock file access (FTP and SSH) to your recovery helper's IP address only.",
          "Ask hosting support whether any other sites sharing the same hosting server were hacked at the same time.",
        ],
        callout: {
          tone: "warning",
          heading: "Why restoring last week's backup alone often fails",
          text: "Hackers usually hide secret backdoor scripts weeks or months before turning on spam redirects. Restoring a recent backup often puts the same broken plugin and secret backdoor right back online.",
        },
      },
      {
        title: "Eliminate malware, hidden webshells and database injections completely",
        body: [
          "Deleting only one tampered `index.php` file means your site gets hacked again within hours. Attackers drop spare backdoors inside image upload folders, unused themes, scheduled server tasks and database settings.",
          "Rebuild core website code only from fresh official downloads or a trusted Git code history. Never trust old script files sitting inside a hacked hosting folder.",
        ],
        subsections: [
          {
            heading: "Rebuild executable core, theme and plugin folders from trusted sources",
            body: [
              "Check core files against official files (`wp core verify-checksums`), delete unused plugins and old themes completely, remove any `.php` script files hiding inside `/wp-content/uploads/`, and replace real plugins with fresh downloads straight from the maker.",
            ],
          },
          {
            heading: "Scrub database injections, rogue admin accounts and cron triggers",
            body: [
              "Check your admin user list (`wp_users`), look inside `wp_options` and theme headers for scrambled `base64` code or outside script links, delete fake spam posts and clear scheduled server tasks (`cron`) that pull bad code back down.",
            ],
          },
        ],
        table: {
          caption: "Compromise cleanup verification matrix across system layers",
          headers: ["Layer", "What attackers plant", "Proper remediation"],
          rows: [
            [
              "Core / Theme / Plugins",
              "Edited `index.php`, `wp-config.php`, hidden scripts in unused themes",
              "Replace core and plugins from official files; delete dead themes completely",
            ],
            [
              "Uploads folder",
              "Fake `.php` backdoors tucked inside `/uploads/2026/...`",
              "Remove all stray scripts; block PHP scripts from running inside `uploads/`",
            ],
            [
              "Database",
              "Fake admin users, hidden `<script>` redirects, injected spam posts",
              "Delete fake users and spam rows; clean scripts; change database password",
            ],
            [
              "Server Cron & Mail",
              "Scheduled jobs reloading backdoors; bulk spam email queues",
              "Check server `cron` tasks; clear spam queues; set SPF and DMARC domain rules",
            ],
          ],
        },
      },
      {
        title: "Rotate all credentials and seal the original entry point",
        body: [
          "Once hacker code runs on your hosting account, assume every password, database login and payment or email token saved in config files has been copied.",
        ],
        bullets: [
          "Change your hosting panel login, SFTP and SSH keys, database password and WordPress security keys all at once.",
          "Force new passwords and app-based two-step login (MFA) for every admin and email user, with no shared logins.",
          "Replace all outside API keys: email senders, PayFast, Yoco or Ozow keys, CRM links and webhook secrets.",
          "Update core software and plugins, delete leftover `/staging/` or `/backup.sql` files, and place a website firewall (such as Cloudflare WAF) in front of your site.",
        ],
      },
      {
        title: "Handle polluted Google spam URLs and submit your Search Console review",
        body: [
          "Leaving 5,000 fake spam links showing broken errors, or pointing every fake pharmacy page back to your homepage, confuses Google and slows recovery. Make every fake spam link return a clear `404 Not Found` or `410 Gone` message, clear Cloudflare caches, and test one or two spam links in Google Search Console URL Inspection.",
          "Once those spam links show 404 or 410 and your live homepage looks clean, open Security & Manual Actions > Security Issues in Search Console and send a short two-sentence review explaining what caused the hack, that logins were changed, and what locks are now active.",
        ],
        callout: {
          tone: "tip",
          heading: "Consider a static Next.js build if repeat WordPress hacks hurt operations",
          text: "For brochure and service sites tired of endless WordPress plugin updates and fires, moving your pages onto a static Next.js site closes database and plugin holes for good.",
        },
      },
      {
        title: "Evaluate POPIA Section 22 notification duties and add 24/7 monitoring",
        body: [
          "In South Africa, Section 22 of POPIA sets clear rules if there are good reasons to think customer details held by your business were seen or taken without permission. Share your saved log copy with your legal adviser right away if client lead tables, accounts or CVs were kept on that server.",
          "Going forward, combine 24/7 downtime and HTTPS alerts, file change checks, separate cloud off-site backups and monthly update habits so small problems never grow unseen again.",
        ],
        bullets: [
          "Check billing email accounts and your `.co.za` domain registrar too, because hackers sometimes add hidden forwarding rules or extra users after breaking into main accounts.",
          "Check shared hosting accounts carefully or move onto isolated cloud hosting so a hack on a neighbour's site cannot cross into yours.",
        ],
      },
    ],
    midCta: {
      heading: "Need urgent malware cleanup and Search Console review help?",
      text: "We lock down hacked South African sites, clear hidden backdoors, change every password, tighten server rules and apply to lift Google warnings.",
      href: "/services/website-security/",
      label: "Get security recovery help",
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
          "Cleaning files, removing hidden backdoors, changing passwords and locking down your hosting usually takes 24 to 72 hours depending on site size. Google Safe Browsing checks often clear red browser warnings in 1 to 4 days, while fake spam links drop out of search over 2 to 6 weeks.",
      },
      {
        question: "Is it better to wipe everything and rebuild from scratch?",
        answer:
          "Often yes. When backups are also infected, custom files have no saved version history, or bad code spread across several folders, moving your clean words and photos onto a fresh hosting account or static Next.js build is frequently faster, safer and cheaper than hunting hidden scripts for days.",
      },
      {
        question: "Will our website stay clean permanently once repaired?",
        answer:
          "Your site stays safe when every backdoor is removed, all hosting and admin passwords are changed, old contractor accounts are deleted and two-step login is turned on. Pairing weekly software updates with a website firewall and off-site backups keeps common bot attacks from breaking back in.",
      },
      {
        question: "Does getting hacked ruin Google organic rankings forever?",
        answer:
          "No, not if you fix the break properly. Once your site is clean, returning real 404 or 410 'page gone' answers on fake spam links and clearing Google Search Console warnings lets Google drop the bad links and rebuild trust in your real pages over the following weeks.",
      },
      {
        question: "Do small businesses really face POPIA obligations after a site breach?",
        answer:
          "Yes. Section 22 of POPIA applies to every South African business, large or small, whenever stored customer or enquiry details may have been exposed without permission. Keep your server logs intact and speak with your legal adviser quickly to check whether you need to notify affected people and the Information Regulator.",
      },
      {
        question: "What is the very first thing to do after discovering a website has been hacked?",
        answer:
          "Save a full copy of your files, database and server logs before deleting anything, then change hosting, file, database and admin passwords right away. Turn off any outdated plugin and avoid wiping logs you may need under POPIA. Contact our [website security team](/services/website-security/) for urgent help.",
      },
      {
        question: "Why does a hacked WordPress site often get re-infected within days?",
        answer:
          "Deleting only the obvious spam files leaves behind secret PHP backdoors, hidden scheduled server tasks, fake admin accounts or the exact same outdated plugin that let hackers in. Proper recovery checks every layer of your site, removes all persistence hooks and puts a [Cloudflare edge WAF](/guides/website-firewall-waf-cloudflare-south-africa/) in front to block repeat attacks.",
      },
      {
        question: "How do I check if Google has already indexed Japanese or pharma spam on our domain?",
        answer:
          "Search `site:yourdomain.co.za` on Google to see every page Google has listed for your domain, looking out for strange medicines, casino titles or foreign characters. Also open Security & Manual Actions and the Pages report in Google Search Console to catch hidden spam links or mobile redirects early.",
      },
      {
        question: "How much does emergency hacked website recovery typically cost in South Africa?",
        answer:
          "Emergency cleanup costs depend on your editing platform, hosting access and whether clean off-site backups already exist. Fixing an active compromise, changing every access key, testing files and clearing Google flags almost always costs several times more than ongoing [website security monitoring](/services/website-security/), timely updates and daily cloud backups.",
      },
      {
        question: "Can attackers steal domain ownership during a hosting breach?",
        answer:
          "Yes, especially if your hosting account, work email and `.co.za` domain registrar share reused passwords with no two-step login. Attackers can use stolen email access to reset registrar passwords and move your domain away. Lock your domain transfers right away using our [domain hijacking guide](/guides/protecting-domain-hijacking-co-za/).",
      },
      {
        question: "Should we trust automated hosting malware scanners alone after an attack?",
        answer:
          "No. Automated hosting scanners often miss scrambled scripts hidden inside database tables, `.htaccess` redirects aimed only at mobile visitors, and unknown server login keys. A proper cleanup always compares core files against clean official downloads and checks database admin users, scheduled server tasks and logs by hand.",
      },
      {
        question: "How do off-site backups cut downtime during ransomware or server hacks?",
        answer:
          "Locked daily copies saved away from your main hosting server cannot be wiped or held hostage if hackers break into your account. You can restore known clean files and data onto a fresh, locked-down server quickly instead of starting over. Read our [off-site website backups guide](/guides/offsite-website-backups-south-africa/).",
      },
    ],
    priority: 0.74,
    published: "2026-11-19",
    updated: "2026-11-26",
  },
  {
    slug: "fix-crawled-currently-not-indexed",
    category: "SEO Services",
    status: "published",
    title: "How to Fix 'Crawled - Currently Not Indexed' in Google Search Console",
    metaTitle: "Fix 'Crawled - Currently Not Indexed' in Google | SoftKore",
    description:
      "Pages stuck in 'Crawled - currently not indexed' in Google Search Console? See why Google skipped them, what not to do, and how to get them listed.",
    intro:
      "Seeing important pages under 'Crawled - currently not indexed' in Google Search Console means Google visited those pages, read them, and chose not to list them yet. Fixing it takes removing weak duplicate pages, adding real useful detail and linking to your kept pages properly, instead of clicking Request Indexing again.",
    summary: [
      "What this status actually means",
      "Why 'Request Indexing' fails",
      "Pruning thin & template URLs",
      "Fixing links & resubmitting sitemap",
    ],
    takeaways: [
      "`Crawled - currently not indexed` shows Google already reached your page. Blocking rules in `robots.txt` are rarely the problem.",
      "Clicking Request Indexing again on weak pages triggers the same rejection unless page usefulness or site structure improves.",
      "Merging copied town or industry pages with direct permanent redirects boosts how often Google checks the pages you keep.",
      "Every page you keep needs a clear search focus, genuine helpful detail and real menu or article links pointing to it.",
      "Allow 3 to 8 weeks after tidying your sitemap and merging weak pages for Search Console numbers to shift clearly.",
    ],
    sections: [
      {
        title: "Decode 'Crawled - currently not indexed' vs related exclusions",
        body: [
          "Unlike blocked pages, `Crawled - currently not indexed` means Google's scanner downloaded your page with a live 200 status and read the text. After checking how close it looks to other pages on your site or across South African results, Google decided storing another copy added too little fresh value right now.",
          "Separating this message from similar Google Search Console (Google's free report on how your site shows up in search) statuses stops you wasting time changing server settings when the real issue is thin or repeated copy.",
        ],
        table: {
          caption: "Comparing Google Search Console non-indexed statuses",
          headers: ["Search Console status", "Did Google scan it?", "Common cause on SA SME sites", "Primary fix"],
          rows: [
            [
              "`Crawled - currently not indexed`",
              "Yes (read and checked)",
              "Short stub pages, copied town pages or weak internal links",
              "Merge weak copies with permanent redirects; deepen kept pages",
            ],
            [
              "`Discovered - currently not indexed`",
              "No (queued, skipped)",
              "Too many junk links in the sitemap or slow hosting replies",
              "Cut junk links from sitemap; link main hubs; speed up server",
            ],
            [
              "`Duplicate without user-selected canonical`",
              "Yes",
              "Slash, `www`, `http` or tracking copies showing the exact same text",
              "Set exact main-page tags (canonical) and direct 301 redirects",
            ],
            [
              "`Soft 404`",
              "Yes",
              "Empty category or 'no items found' page returning a normal 200 code",
              "Return a real 404/410 'page gone' code or add useful content",
            ],
          ],
        },
      },
      {
        title: "Why hammering 'Request Indexing' repeatedly solves nothing",
        body: [
          "The Request Indexing button in URL Inspection works well right after you improve one key page. Resubmitting thirty unchanged thin pages, or sending 300 copied town pages through `sitemap.xml`, just pushes the exact same weak text back through the same quality filter.",
          "Fix the weak structure across your domain first before asking Google to take another look.",
        ],
        callout: {
          tone: "warning",
          heading: "Keeping 200 weak pages in sitemap.xml slows down good service pages",
          text: "Listing search filter links, empty drafts and cloned town pages inside `sitemap.xml` tells Google much of your site has low value, which slows down checks on your real money pages.",
        },
      },
      {
        title: "Diagnose the real content and link culprits in your export",
        body: [
          "Export your list of excluded links from Search Console > Indexing > Pages and group them by pattern. Almost every South African business site falls into one of four repeatable traps:",
        ],
        subsections: [
          {
            heading: "Template location or industry doorway clones",
            body: [
              "Publishing `/accountants-sandton/`, `/accountants-pretoria/` and `/accountants-durban/` with nearly identical copied text and swapped city names almost always ends in bulk exclusion when Google's quality checks run.",
            ],
          },
          {
            heading: "Thin sub-350-word service stubs or orphan unlinked posts",
            body: [
              "Short blurbs without real rand price hints, process steps, proof or FAQs look like generic filler, especially when left out of menus and buried only inside your XML sitemap.",
            ],
          },
        ],
        bullets: [
          "Extra editing-system pages such as `/tag/`, `/author/`, date archives or image pages left open to Google by mistake.",
          "Tracking or sort parameters (`?sort=`, `?filter=`, `?replytocom=`) creating endless copies of the same page.",
          "Self-competing articles covering the exact same question with slightly changed titles.",
        ],
      },
      {
        title: "Prune and consolidate weak URLs via direct 301 redirects",
        body: [
          "Trimming a messy 250-page site down to 30 to 50 clear, genuinely helpful pages often makes Google list the remaining pages faster and brings stronger search clicks.",
        ],
        numbered: [
          "Sort every link in your export into **Keep & Improve**, **Merge into a Stronger Page**, or **Remove (`404` or `410`)**.",
          "Point every merged old address straight to its nearest matching service or guide with one direct permanent redirect (a 301 rule). Never dump unrelated old links onto your homepage `/`.",
          "Remove every redirected old link from menus, footers and `sitemap.xml` at the same time.",
          "Leave your site's crawl instructions file (`robots.txt`) open for old addresses so Google can fetch them and see your new redirects.",
        ],
      },
      {
        title: "Upgrade every kept page so it unquestionably earns indexation",
        body: [
          "For main service pages and guides you decide to keep, give visitors clear practical depth alongside tidy page structure:",
        ],
        bullets: [
          "Open with a plain direct answer right away instead of long fluffy introductions.",
          "Add real South African specifics: rand budget ranges, local compliance or payment rules, clear tables, checklists and 4 to 5 buyer FAQs.",
          "Make sure every kept page has two or more real links pointing to it from menus, home sections or related guides.",
          "Check main-page tags (canonical tags), live 200 status and zero redirect loops across every kept link.",
        ],
        callout: {
          tone: "tip",
          heading: "Links inside your own site carry more weight than sitemap lines",
          text: "Adding clear descriptive links from your busiest Google-listed pages straight into a freshly improved guide often brings Google back to scan and list it within days.",
        },
      },
      {
        title: "Resubmit a spotless XML sitemap and monitor 4-to-8 week shifts",
        body: [
          "Make sure `sitemap.xml` lists only live main pages returning HTTP 200, with no redirects or duplicate copies. Upload your updated pages and 301 redirect rules together, resubmit `sitemap.xml` once inside Google Search Console, and watch Indexing > Pages weekly over 4 to 8 weeks as merged junk moves to 'Page with redirect' and stronger pages move into Indexed.",
          "If important sales pages still sit unlisted eight weeks after cleaning up clutter and adding internal links, inspect the live HTML view inside URL Inspection. Sometimes pages wait on slow browser scripts before showing text, so pre-built server or static HTML makes your main words visible to Google immediately.",
        ],
        numbered: [
          "Check your updated `sitemap.xml` in Search Console to confirm green `Success` and the exact count of kept pages.",
          "Test retired links to confirm each sends visitors straight to its chosen living page in one `301` redirect step.",
          "Review `Indexing > Pages` once a week and watch the `Crawled - currently not indexed` bar drop steadily over time.",
        ],
      },
    ],
    midCta: {
      heading: "Dozens of pages stuck in 'Crawled - currently not indexed'?",
      text: "We review your excluded pages, map direct permanent redirects for weak duplicates and strengthen your main pages so Google shows what brings enquiries.",
      href: "/services/seo-services/",
      label: "Fix Google indexing issues",
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
          "Expect 2 to 8 weeks after merging weak template pages with permanent 301 redirects, cleaning up `sitemap.xml` and adding deeper helpful detail to the pages you keep. Compact, well-linked websites update fastest, while larger messy editing setups refresh gradually across several Google scans over two months.",
      },
      {
        question: "Is 'Crawled - currently not indexed' a manual Google penalty?",
        answer:
          "No, it is not a manual penalty or punishment on your domain. You can double-check Security & Manual Actions inside Google Search Console for peace of mind, then treat this message as an automated quality check flagging thin copy, duplicate pages or weak internal site links.",
      },
      {
        question: "Should I block unwanted non-indexed URLs in robots.txt instead of redirecting?",
        answer:
          "Never block pages that carry 301 redirects or `noindex` tags inside your site's `robots.txt` rules file. Google must be allowed to visit the old web address first so it can read your redirect or removal instruction and drop the old page right out of search results.",
      },
      {
        question: "Can shrinking total site pages actually increase monthly organic leads?",
        answer:
          "Yes, very often. Cutting or merging hundreds of thin repetitive town or tag pages lets Google focus its scan time and domain trust onto your core commercial offers. That tighter structure commonly lifts search rankings and brings more real enquiries to your main service pages.",
      },
      {
        question: "What minimum depth makes a guide page pass Google's quality bar today?",
        answer:
          "Real usefulness beats any fixed word count target. Aim for honest practical advice written specifically for South African business buyers, often around 1,200 clear, easy-to-scan words featuring helpful comparison tables, local examples and buyer FAQs, instead of padded 400-word filler articles that add nothing truly new.",
      },
      {
        question: "What is the difference between 'Crawled - currently not indexed' and 'Discovered - currently not indexed'?",
        answer:
          "`Crawled - currently not indexed` means Google visited the page, read it and judged it below its quality bar to list. `Discovered - currently not indexed` means Google knows the link exists yet skipped scanning it to protect weak or slow servers. See our [Discovered not indexed guide](/guides/fix-discovered-currently-not-indexed/).",
      },
      {
        question: "Should I submit individual unindexed URLs repeatedly in Search Console?",
        answer:
          "No. Clicking 'Request Indexing' repeatedly on an unchanged page simply pushes the exact same weak HTML back through Google's filter and gets rejected again. First improve the page's unique usefulness, merge copied town stubs with 301 redirects and add real links from your main pages.",
      },
      {
        question: "Can JavaScript-heavy client rendering cause pages to stay 'Crawled - currently not indexed'?",
        answer:
          "Yes. If your main page words and menu links wait for slow browser scripts or database calls before appearing on screen, Google's scan may see a mostly empty shell and skip listing the page. Building pages as pre-rendered HTML via [website development](/services/web-development/) ensures instant readability.",
      },
      {
        question: "Should I 301 redirect thin pages or use HTTP 410 / noindex?",
        answer:
          "Use a permanent 301 redirect when an old service or town page has a close matching live page that searchers would still find very helpful. Use an HTTP 410 'gone' code or a `noindex` tag only for empty archive or system pages with zero value.",
      },
      {
        question: "How do internal links fix pages stuck in 'Crawled - currently not indexed'?",
        answer:
          "Pages listed only inside `sitemap.xml` with zero links from main menus or related articles look unimportant to Google. Adding clear, descriptive anchor links straight from your homepage, service hubs and top guides shows priority fast. Follow our [internal linking guide](/guides/internal-linking-guide-for-business-websites/) to connect key pages properly.",
      },
      {
        question: "Do query parameters like ?utm_source or ?replytocom pollute indexing reports?",
        answer:
          "Yes. Tracking campaign tags, comment reply links and online shop filter strings can create thousands of extra web address copies that clutter Google Search Console reports. Setting exact main-page tags (canonical tags) and keeping internal menu links tidy keeps Google focused on your real pages.",
      },
      {
        question: "Can a free SEO audit pinpoint why specific pages are excluded?",
        answer:
          "Yes. Request a [free SEO audit](/contact/?service=free-seo-audit#contact-form) and we will carefully inspect your Google Search Console page statuses, URL inspection results, broken redirect loops, main-page tags and copied page clusters to show exactly why your key service pages are missing and which urgent fixes to tackle first.",
      },
    ],
    priority: 0.74,
    published: "2026-11-19",
    updated: "2026-11-26",
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
      "Legitimate SEO retainers in South Africa usually cost R6,500 to R18,000 a month for local businesses and R18,000 to R40,000+ a month for tough national markets, while a once-off technical audit costs R5,500 to R18,000. Prices vary widely because cheap plans send automated reports, while real work pays for developer fixes, clear writing and lasting trust.",
    summary: [
      "Indicative SA ZAR cost ranges",
      "What drives SEO pricing",
      "Once-off audit vs monthly work",
      "Red flags & real reporting",
    ],
    takeaways: [
      "Real SEO pays for skilled developer troubleshooting, buyer-focused writing and earned local authority, which is impossible at R1,500/month.",
      "Pick a once-off audit and fix sprint first if your main drag is broken redirects, Google listing errors or slow templates.",
      "Monthly retainers make sense when rivals actively publish buyer guides, gather Google reviews and earn press mentions.",
      "Keep primary ownership of Google Search Console (Google's free search report), analytics and all site pages from day one.",
      "Judge return on spend against real client profit over 4 to 6 months, not vanity rankings for phrases nobody searches.",
    ],
    sections: [
      {
        title: "Realistic SEO price ranges in South Africa (ZAR)",
        body: [
          "Unlike simple website hosting, SEO combines skilled technical fixes, clear sales writing and steady local competition work. Honest rand pricing depends on how healthy your current site is, how many services you offer, and how hard national competitors work.",
          "Use these market price bands when comparing quotes across South African suppliers:",
        ],
        table: {
          caption: "Indicative South African SEO pricing tiers (ZAR)",
          headers: ["Engagement model", "Indicative ZAR range", "Typical deliverables", "Best suited for"],
          rows: [
            [
              "Technical SEO & Search Console Audit",
              "R5,500 – R18,000 (once-off)",
              "Google listing checks, old-link redirect plan, main-page tags, sitemap fixes and priority action list",
              "Teams with internal staff or owners wanting exact blockers fixed before hiring monthly",
            ],
            [
              "Focused SME / Local Retainer",
              "R6,500 – R18,000 / month",
              "Technical upkeep, service page rewrites, 2 to 4 useful guides/mo, Google Business Profile work and Search Console reports",
              "Local service firms, trades and niche B2B companies wanting steady enquiries",
            ],
            [
              "Competitive National / Online Stores",
              "R18,000 – R40,000+ / month",
              "Category structure cleanup, large guide hubs, online press mentions and testing what improves enquiries",
              "Legal, accounting, finance, healthcare and multi-category online stores competing nationwide",
            ],
          ],
        },
        callout: {
          tone: "note",
          heading: "Slow or broken websites cut SEO results in half",
          text: "Spending R12,000/month on SEO on top of a slow, confusing WordPress site wastes budget fighting poor design. Fix site speed, menu clarity and mobile enquiry forms upfront so every new visitor has a smooth path to contact you.",
        },
      },
      {
        title: "Four practical factors pushing an SEO quote higher or lower",
        body: [
          "Comparing two proposals fairly means looking past the monthly rand price to check how many real hours go into technical fixes, writing and authority work each month.",
        ],
        subsections: [
          {
            heading: "Technical health and legacy site debt",
            body: [
              "Fast Next.js sites or tidy editing setups let your budget go straight into pages and buyer guides. Older domains clogged with 500 copied town pages, leftover malware, broken redirects and failing mobile speed checks need upfront developer cleanup first.",
            ],
          },
          {
            heading: "Market competition and commercial ticket size",
            body: [
              "Reaching page one for a specialist calibration lab in Ekurhuleni takes far fewer writing and outreach hours than trying to outrank big national sites for 'medical aid South Africa' or 'corporate tax attorney Sandton'.",
            ],
          },
        ],
        bullets: [
          "Writing depth and pace: thorough South African buyer guides formatted for easy reading versus thin short posts.",
          "Service and product count: improving four focused B2B service pages versus managing 2,000 online store product filters.",
          "Starting authority: older domains with existing client citations and reviews versus brand-new domains with zero outside links.",
        ],
      },
      {
        title: "Once-off audit sprint vs ongoing monthly SEO retainer",
        body: [
          "Not every South African business needs an endless monthly retainer straight away. If you work in a quieter niche and your main problem is missing redirects after a redesign, unlinked pages or weak page titles, a once-off audit and fix sprint often clears 80% of the drag quickly.",
          "Monthly SEO pays off best in busy sectors where rivals keep adding helpful buying guides, updating pages quarterly, gathering Google reviews and earning outside mentions.",
        ],
      },
      {
        title: "Pricing traps and cheap 'guaranteed ranking' red flags",
        body: [
          "Automated 'R1,500/month full SEO' packages only work through high-volume churn. Providers spend twenty minutes blasting your site through cheap directory bots and emailing automated PDF scorecards that can hurt your Google trust long term.",
        ],
        bullets: [
          "Promises of '#1 on Google in 30 days': nobody outside Google controls live search results. Agencies fake this by tracking strange phrases nobody types.",
          "'500 high-DA backlinks included': paid link networks often trigger Google trust drops instead of steady growth.",
          "12-to-24-month lock-in contracts with no exit terms and hidden Google Search Console access.",
          "Automated 100-city copied page packs that flood Google Search Console with 'Crawled - currently not indexed' warnings.",
        ],
        callout: {
          tone: "warning",
          heading: "Keep direct owner access to Google Search Console and your domain",
          text: "Set up Google Search Console under your company's own Google account first and invite agencies as users. That keeps full history and control in your hands if you change suppliers.",
        },
      },
      {
        title: "What transparent monthly SEO reporting should show clearly",
        body: [
          "Good agencies replace confusing vanity numbers with four simple monthly answers:",
        ],
        numbered: [
          "Exact technical fixes, structured labels, redirect repairs and new or updated pages shipped that month.",
          "Non-branded South African clicks, views and average positions for your target service pages in Google Search Console.",
          "Indexing > Pages health and mobile speed checks, confirming no hidden crawl blocks appeared.",
          "Real organic enquiries (contact forms, phone taps and WhatsApp messages) compared honestly against your monthly fee.",
        ],
      },
      {
        title: "Working out sensible ROI payback math for your business",
        body: [
          "Compare your SEO budget against what one average customer is worth to your business, not against cheap web hosting bills. If a typical client brings R35,000+ in gross profit over a year, winning just two extra clients per quarter from Google makes a R10,000/month plan pay back clearly while cutting your spend on Google Ads.",
          "Give a fair 4-to-6-month run before judging full commercial return, especially on newer sites. Divide six months of fees by your average client profit upfront so directors know exactly how many bookings cover the cost.",
        ],
        bullets: [
          "Track non-branded Google clicks alongside enquiry sources inside your CRM so renewal choices rest on signed sales rather than guesses.",
          "Remember compounding value too: unlike Google Ads that stop the day you pause spending, strong guides keep bringing enquiries in year two and year three.",
        ],
        callout: {
          tone: "tip",
          heading: "Bridge Months 1 to 3 with targeted Google Search Ads",
          text: "If you need leads this week for cash flow, run narrow Google Search Ads on your highest-margin services while technical fixes and helpful guides build steady unpaid Google traffic alongside them.",
        },
      },
    ],
    midCta: {
      heading: "Want an honest SEO quote scoped around real business return?",
      text: "Send us your website address and goals. We inspect how Google sees your site first and advise plainly whether a fixed sprint or monthly plan fits best.",
      href: "/services/seo-services/",
      label: "View SEO services",
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
          "At R1,500 to R2,500 a month, no genuine agency can pay for real developer troubleshooting, South African market research or careful sales writing. Cheap packages rely on automated PDF checklists, mass directory submissions and low-grade links that rarely bring real leads and often harm Google trust.",
      },
      {
        question: "Do I have to sign a rigid 12-month SEO lock-in contract?",
        answer:
          "No, you should avoid long penalty lock-ins. It is wise to plan your own budget for 4 to 6 months so fixes and content have time to show results, yet you should still work with transparent partners who earn renewals through clear monthly progress rather than rigid exit fees.",
      },
      {
        question: "Can we buy a once-off technical audit and handle fixes internally?",
        answer:
          "Yes, that works well when you already have developers or a capable web team. A once-off audit maps out broken redirects, Google listing errors, slow pages and copy gaps in clear priority order so your own team can ship every repair without paying for ongoing retainer management.",
      },
      {
        question: "What happens if we pause monthly SEO work after six months?",
        answer:
          "Everything built and published on your website stays yours permanently once invoices are settled. Clean redirects, faster pages, rewritten service copy and detailed buyer guides continue earning unpaid Google clicks for months or years afterward, though rankings can gradually slip if active rivals keep publishing fresh updates.",
      },
      {
        question: "Should website maintenance and SEO sit in the same line item?",
        answer:
          "Even when one partner handles both services, keep website maintenance and SEO listed separately on your quotes and monthly invoices. Website care covers daily backups, software updates and keeping your site online, while SEO funds technical search repairs, stronger service pages and content built to win new leads.",
      },
      {
        question: "What is a realistic monthly SEO budget for a competitive South African SME?",
        answer:
          "Most South African service firms investing steadily in technical fixes, stronger service pages, helpful buyer guides and Google Search Console reporting budget between R4,500 and R12,000 per month. Tough national sectors like law, insurance or major retail often budget R15,000+ monthly to compete against big established brands.",
      },
      {
        question: "How much does a once-off technical SEO audit cost compared to a monthly retainer?",
        answer:
          "A thorough once-off technical audit typically costs R4,500 to R12,000 depending on how many pages and systems your site runs, giving you a concrete repair plan upfront before committing to monthly fees. You can also request our [free SEO audit](/contact/?service=free-seo-audit#contact-form) first to surface urgent search blockers.",
      },
      {
        question: "Are ecommerce SEO retainers more expensive than brochure-site SEO?",
        answer:
          "Usually yes. Online stores involve hundreds of product pages, detailed category structures, shop filter links that can confuse Google, structured product schema checks and shopping feeds. A focused 10-page B2B service website takes far fewer technical hours each month than a busy South African online store.",
      },
      {
        question: "Does paying more for SEO speed up how fast Google ranks my website?",
        answer:
          "Higher budgets let an agency fix technical issues, rewrite weak service pages and ship buyer guides faster instead of stretching work over a full year. Even so, Google still controls when pages are scanned and moved up over several months. Read our [SEO timeline guide](/guides/how-long-does-seo-take-south-africa/) for realistic milestones.",
      },
      {
        question: "What deliverables should a monthly South African SEO retainer always include?",
        answer:
          "Expect a clear monthly log showing technical fixes shipped, service pages or guides added or improved, internal link updates, Google Business Profile upkeep and plain Google Search Console reports. Reports should track non-branded South African clicks alongside real phone, contact form and WhatsApp enquiries every single month.",
      },
      {
        question: "Should a startup split early marketing spend between Google Ads and SEO?",
        answer:
          "Yes, especially when early cash flow depends on phone calls right away. Putting part of your budget into tightly scoped Google Search Ads brings fast leads this week, while steady investment in technical foundations and [SEO services](/services/seo-services/) lowers your cost per lead over the coming year.",
      },
      {
        question: "How do I know if our current SEO agency is delivering fair value for money?",
        answer:
          "Log straight into your own Google Search Console account instead of relying only on agency PDF reports. Check whether non-branded South African clicks, listed service pages and real enquiries are trending upward over 3 to 6 months, and ask to see exact pages shipped each month.",
      },
    ],
    priority: 0.74,
    published: "2026-11-19",
    updated: "2026-11-26",
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
      "Any South African business website that collects names, phone numbers, emails or street addresses must follow POPIA. Your attorney writes your legal terms, while your web setup must keep forms simple, respect opt-in choices, track cookies honestly and lock down stored customer details.",
    summary: [
      "Privacy notice & transparency",
      "Forms & data minimisation",
      "Cookies & tracking scripts",
      "Section 19 technical security",
    ],
    takeaways: [
      "POPIA covers sole traders and small firms too. Even a simple 'Contact Us' form brings clear legal duties.",
      "Ask only for what you need upfront. Leave off ID numbers, birth dates and home addresses on first quote forms.",
      "Keep sales enquiries separate from marketing emails, using unticked opt-in boxes rather than auto-adding leads.",
      "Check which tracking code and ad tools load on your site so your site matches your Privacy Notice.",
      "Meet Section 19 security rules with a secure HTTPS connection, two-step login, server checks and domain email rules.",
    ],
    sections: [
      {
        title: "How POPIA applies technically to ordinary business websites",
        body: [
          "The Protection of Personal Information Act (POPIA) asks every business to treat client details with care. You must tell visitors why you ask for their details, take only what you need, ask before adding them to mailing lists and lock down stored records under Section 19.",
          "Legal notices and safe web setup work hand in hand. Even a well-written privacy policy fails if your site leaks form entries, leaves public backup files open or runs hidden ad scripts.",
        ],
        table: {
          caption: "Technical POPIA website checklist across your site",
          headers: ["Website area", "POPIA rule", "Simple check for your site"],
          rows: [
            [
              "Footer and form links",
              "Being open and clear (S18)",
              "Link a plain South African Privacy Notice in your footer and right next to every form button",
            ],
            [
              "Quote and contact forms",
              "Take only what you need (S10, S13)",
              "Ask for name, contact and scope only. Never add people to newsletters silently",
            ],
            [
              "Ad tags and stats tools",
              "Honest cookie use",
              "Remove dead ad code and make sure cookie banners match real scripts on your pages",
            ],
            [
              "Hosting, admin and email",
              "Security steps (S19)",
              "Turn on HTTPS, two-step login, server form checks and SPF, DKIM and DMARC email rules",
            ],
            [
              "Old CSV and backup files",
              "Do not keep data too long (S14)",
              "Delete old test sites, public `.sql` backups and old lead lists off your server",
            ],
          ],
        },
      },
      {
        title: "Publish a grounded South African privacy notice (Not foreign templates)",
        body: [
          "Pasting a free US or European template onto your site creates problems. It often names overseas laws and lists tracking tools you do not even use in South Africa.",
        ],
        subsections: [
          {
            heading: "Core details an honest SA website privacy notice covers",
            body: [
              "List your registered South African business name and a working email for your Information Officer (the person in charge of data care at your firm). Explain what details your forms and cookies collect, why you need them (such as replying to quotes or shipping online store orders), what outside tools handle them (hosts, mail senders or PayFast and Yoco), and how someone can ask to see or delete their details.",
            ],
          },
          {
            heading: "Put the notice link right where personal details enter",
            body: [
              "Keep a clear Privacy Policy link in your footer on every page. Also add one short line under every contact, booking and newsletter button linking straight to that notice before people click Send.",
            ],
          },
        ],
        callout: {
          tone: "note",
          heading: "Remember to register your Information Officer",
          text: "Under POPIA, South African businesses must register their Information Officer on the Information Regulator portal. Make sure visitors can reach that email easily from your footer and privacy page.",
        },
      },
      {
        title: "Apply strict data minimisation across forms and marketing opt-ins",
        body: [
          "Shorter forms keep you safer under POPIA and bring more mobile enquiries too, because busy buyers hate filling in ten fields on a phone.",
        ],
        bullets: [
          "Skip ID numbers, home street addresses and birth dates on early quote forms unless your work truly needs them later.",
          "Keep quote replies separate from promotional newsletters. Never send new sales leads straight into Mailchimp without an unticked opt-in tick box and a clear unsubscribe link.",
          "Do not collect bank statements, tax files or ID copies through open web forms. Ask for sensitive onboarding documents through secure channels once a client signs on.",
        ],
      },
      {
        title: "Audit cookies, analytics pixels and external embedded scripts",
        body: [
          "Adding a pop-up cookie banner means little if old agency ad code, screen recorders or social embeds still drop tracking cookies before visitors even choose.",
        ],
        numbered: [
          "Open Chrome DevTools on your main pages and check the Network tab to list every outside domain loading scripts or setting cookies.",
          "Delete old Facebook, LinkedIn or TikTok ad pixels left behind from past campaigns you no longer run.",
          "Hold back non-essential ad scripts until a visitor agrees, and describe your simple site stats tools clearly in your Privacy Notice.",
        ],
      },
      {
        title: "Satisfy Section 19 technical security safeguards properly",
        body: [
          "Section 19 of POPIA requires sensible steps to stop stored client details from being lost, damaged or seen without permission. Good website security and POPIA meet right here.",
        ],
        bullets: [
          "Run a secure HTTPS connection across every page, with browser security settings (`HSTS`, `nosniff` and `X-Frame-Options`) that stop fake overlays and unsafe scripts.",
          "Check form inputs on your server, stop bot spam floods and keep secret mail or CRM keys hidden off public browser code.",
          "Require app-based two-step login (MFA) for hosting, site editing logins, domain settings and company email, with no shared ex-staff logins.",
          "Set up `SPF`, `DKIM` and `DMARC` email domain rules so scammers cannot send fake emails pretending to be your company.",
        ],
        callout: {
          tone: "warning",
          heading: "Never leave lead spreadsheets or database backups in public folders",
          text: "Bots scan websites every day looking for `/leads.csv`, `/backup.sql` and `/staging/` folders. One forgotten file can leak client names, emails and phone numbers in seconds.",
        },
      },
      {
        title: "Plan data retention, deletion workflows and Section 22 breach readiness",
        body: [
          "Set a clear rule for how long old enquiry emails and form logs sit inside your website database before you archive or erase them. If enquiries already go straight to your company inbox or CRM, avoid saving an extra copy inside WordPress tables forever.",
          "Pair clear server logs with locked off-site backups. If someone ever breaks into your site, those logs help your legal adviser check whether Section 22 breach rules apply. Also write down a quick yearly list of which cloud tools and countries hold your client records.",
        ],
        numbered: [
          "Send form messages straight into access-controlled work email or your CRM rather than leaving open tables in WordPress.",
          "Run a simple yearly sweep to delete old job CVs, outdated quote sheets and dead enquiry logs you no longer need.",
          "Test your Information Officer email every three months alongside your contact forms to be sure messages reach a real inbox.",
        ],
        callout: {
          tone: "tip",
          heading: "Clear privacy hygiene builds instant buyer trust",
          text: "Big South African corporate buyers check supplier privacy notices, HTTPS security and form care before approving new vendors. Tidy setup shows you take client care seriously.",
        },
      },
    ],
    midCta: {
      heading: "Want a technical POPIA and website security sweep?",
      text: "We check your enquiry forms, ad tracking code, HTTPS setup, browser security settings and backup safety, while your attorney handles legal wording.",
      href: "/services/website-security/",
      label: "Book a security review",
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
          "Yes. POPIA applies to every business and sole trader in South Africa that handles personal details, no matter how small the company or website is. Even a basic five-page site with a simple Contact Us form asking for names, phone numbers and email addresses must follow clear notice, consent and security rules.",
      },
      {
        question: "Does popping up a cookie consent banner make our website POPIA compliant?",
        answer:
          "No. A cookie pop-up covers only one small piece about tracking code. Real care also needs a clear South African Privacy Notice, shorter enquiry forms that skip unneeded details, unticked marketing opt-ins, a secure HTTPS connection, and locked-down hosting and email accounts so client details stay safe.",
      },
      {
        question: "Are website enquiry emails affected by POPIA security rules?",
        answer:
          "Yes. Under Section 19, details sent through website forms must be kept safe from loss or snooping. Always run forms over a secure HTTPS connection, check entries safely on your server, avoid leaving lead files in open website folders, and set SPF, DKIM and DMARC rules so scammers cannot fake your email domain.",
      },
      {
        question: "Can SoftKore Digital give us official legal POPIA sign-off?",
        answer:
          "No, legal sign-off must come from a qualified South African attorney or privacy specialist. We handle the practical web setup and Section 19 safety steps, such as tidy forms, removing dead ad scripts, locking down hosting logins, setting browser security settings and protecting domain email, while your attorney checks legal wording.",
      },
      {
        question: "Does hosting a website in Europe or the US violate POPIA?",
        answer:
          "Not automatically. Under Section 72 of POPIA, storing details outside South Africa is allowed when strong security rules and proper data agreements are in place and disclosed in your Privacy Notice. Still, keeping South African customer records on local Cape Town or Johannesburg servers makes compliance talks much simpler.",
      },
    ],
    priority: 0.72,
    published: "2026-11-19",
    updated: "2026-11-26",
  },
  {
    slug: "website-redesign-seo-checklist",
    category: "Website Design & Development",
    status: "published",
    title: "How to Redesign Your Website Without Losing Google Rankings",
    metaTitle: "Website Redesign SEO Checklist: Keep Rankings | SoftKore",
    description:
      "Planning a website redesign in South Africa? Follow this link check, direct redirect plan, copy checklist and launch steps to protect your Google rankings.",
    intro:
      "About half of rushed website redesigns lose Google clicks and phone enquiries right after launch, not because Google disliked the new look, but because web addresses changed without redirects, helpful text was deleted, or a preview block stayed on. Checking your links, copy and redirects before launch keeps your search traffic safe.",
    summary: [
      "Audit URLs before redesigning",
      "Direct 301 redirect map",
      "Preserve titles, copy & schema",
      "Launch-day indexing checks",
    ],
    takeaways: [
      "Save 12+ months of Google Search Console (Google's free search report) top pages, search phrases and links BEFORE changing menus or web addresses.",
      "Keep strong existing page addresses untouched where possible, and set up direct permanent redirects for every address that moves or merges.",
      "Never dump dozens of retired subpages lazily onto your homepage `/`. Send each old link straight to its closest living service page.",
      "Keep clear buyer search terms in your page titles, headings, explanations, internal links and structured labels alongside the fresh design.",
      "Remove private preview blocks (`robots.txt` or `noindex`) and check live pages within minutes of switching your domain settings.",
    ],
    sections: [
      {
        title: "Why website redesigns erase years of Google visibility overnight",
        body: [
          "Google stores rankings against exact page addresses, headings and useful text, not your company logo. When a designer builds a nicer site while changing `/services/corporate-tax/` to `/offerings/`, cutting 900 words of helpful answers down to four short slogans and skipping redirect rules, Google treats half your website as broken overnight.",
        ],
        table: {
          caption: "Common redesign errors vs zero-loss migration practices",
          headers: ["Redesign mistake", "Immediate impact", "Safest launch practice"],
          rows: [
            [
              "Changing page addresses without 301 redirects",
              "Ranked Google links and saved customer bookmarks hit 404 errors",
              "Keep winning addresses the same or set up a tested 1-to-1 permanent redirect list",
            ],
            [
              "Pointing all old pages to `/`",
              "Google treats lazy homepage redirects like broken Soft 404 pages",
              "Send every retired link straight to its closest living service page or guide",
            ],
            [
              "Preview `Disallow: /` left turned on",
              "Your whole website disappears from Google search within days",
              "Lock private previews behind a login; check live pages right after launch",
            ],
            [
              "Cutting proven copy and FAQs",
              "Pages lose helpful detail that matches real buyer searches",
              "Make layout easier to scan while keeping clear answers and buyer keywords",
            ],
          ],
        },
      },
      {
        title: "Phase 1: Benchmark existing URLs, Search Console traffic and links first",
        body: [
          "Do not plan your new menu just by looking at the old top navigation bar. Older guides, case studies or local pages often bring steady enquiries quietly from Google.",
        ],
        numbered: [
          "Export 12 to 16 months of Google Search Console landing pages, search phrases, clicks and views.",
          "Scan the entire old website before starting design so you have a list of every live page, page title, description, main-page tag and heading.",
          "Export outside links inside Google Search Console > Links so trusted partner links pointing to inner pages never break into 404 errors.",
          "Check your old `sitemap.xml` and active Google Ads links so paid campaigns never send clicks to dead pages on Monday morning.",
        ],
      },
      {
        title: "Phase 2: Build and test a direct 301 redirect map",
        body: [
          "Every page whose web address changes, such as merging messy `/industries/...` paths into main service pages or dropping old `.php` or `.html` endings, needs an exact permanent redirect (a 301 rule) prepared ahead of time.",
        ],
        subsections: [
          {
            heading: "Eliminate multi-hop redirect chains and protocol loops",
            body: [
              "Make sure `http://domain.co.za/old-page` lands straight on `https://www.domain.co.za/new-page/` in one single 301 step. Avoid chains that bounce from `http` to `https`, then to `www`, then to a slash, then to the new page. One direct step passes trust better and opens faster on mobile data.",
            ],
          },
          {
            heading: "Consolidate thin legacy directories",
            body: [
              "When trimming old town or category folders during a redesign, point each retired link straight to the closest living service page instead of sending everything lazily to `/`.",
            ],
          },
        ],
        callout: {
          tone: "tip",
          heading: "Test every redirect on your private preview before launch",
          text: "Run an automated link check across 100% of your old web addresses against your private preview server before updating domain settings. That catches typos, missing rules or temporary `302` headers early.",
        },
      },
      {
        title: "Phase 3: Preserve core metadata, copy depth and structured schema",
        body: [
          "Moving to a faster Next.js or custom layout should improve reading speed, mobile use and enquiries, never wipe out the clear words that earn Google clicks.",
        ],
        bullets: [
          "Keep main service terms clearly inside your page title, meta description, main `<h1>` heading and opening summary.",
          "Keep useful buyer facts such as price drivers, South African rules, proof and FAQs, laid out under clear H2 and H3 subheadings.",
          "Move matching structured labels (`Organization`, `Service`, `BreadcrumbList`, `FAQPage`, `Article` schema) accurately onto each new page.",
          "Keep clear image descriptions (`alt` text) while turning large old images into fast WebP files.",
        ],
      },
      {
        title: "Phase 4: Lock staging properly, then unlock production on cutover",
        body: [
          "Teams often hurt Google listings by leaving a preview site like `dev.company.co.za` open without a password, letting Google list unfinished test pages, or by copying a preview `noindex` block straight onto the live website.",
          "Lock every private preview behind a login password or access gate instead of trusting `robots.txt` alone, and follow a signed launch checklist confirming the live site lets Google scan every kept page.",
        ],
        callout: {
          tone: "warning",
          heading: "Do not change your domain name at the exact same moment unless required",
          text: "Changing your design, page addresses AND domain name (such as `old.com` to `new.co.za`) all at once stacks three big shifts on top of each other. Change one thing at a time if possible, or run full 1-to-1 redirects and use Search Console's Change of Address tool.",
        },
      },
      {
        title: "Phase 5: Launch-day QA crawl and 30-day post-launch monitoring",
        body: [
          "Switching your domain settings starts final checks rather than ending them. Run these steps within two hours of launch, then watch Google Search Console weekly for the first month so any missed old link gets redirected before traffic drops:",
        ],
        numbered: [
          "Scan live pages right after launch to confirm live 200 status on kept pages, exact main-page tags and zero broken 404 internal links.",
          "Spot-check your old-link redirect spreadsheet live across both slash and non-slash versions to confirm one-step 301 redirects.",
          "Test live contact forms, check WhatsApp links, confirm HTTPS security certificate coverage and verify browser security settings.",
          "Submit your fresh `sitemap.xml` inside Google Search Console and notify IndexNow if supported.",
          "Watch Indexing > Pages, Not Found (404) lists and top landing clicks weekly for 30 days. Small 2-to-4-week position shifts while Google updates its records are normal.",
        ],
        bullets: [
          "Illustrative example: when tidying a large 400-page service site down to 48 clear service and guide pages, testing 100% of old addresses against the redirect list before launch stops 404 drops while carrying past trust onto the new pages.",
          "Compare pre-launch and post-launch top 20 search positions calmly at Day 30 and Day 60 instead of reacting to normal Day 3 bumps.",
        ],
      },
    ],
    midCta: {
      heading: "Planning a website redesign without risking your Google rankings?",
      text: "Every redesign SoftKore delivers ships with pre-launch Google Search Console checks, full 301 redirect testing and live launch-day checks.",
      href: "/services/web-development/",
      label: "Plan a safe redesign",
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
          "Yes, small ups and downs are normal right after launch. Even when every redirect and page tag is set up properly, Google still needs 2 to 4 weeks to scan your fresh HTML, follow every 301 rule and update its search records before rankings settle again.",
      },
      {
        question: "Should deleted old news or blog posts redirect straight to our homepage?",
        answer:
          "Usually no. Sending dozens of unrelated old blog links straight to `/` looks like a broken Soft 404 page to Google and passes very little relevance. Point retired links to the closest living service page or guide, or return a clear 404 or 410 'gone' code if nothing matches.",
      },
      {
        question: "How long must 301 redirect rules stay live after launching a redesign?",
        answer:
          "Keep permanent 301 redirects turned on for as long as possible, and for at least 12 to 24 months after launch. Outside partner sites, directory listings and saved customer bookmarks keep pointing to old links for years, so turning redirects off early creates broken 404 errors.",
      },
      {
        question: "Can SoftKore audit and build our 301 redirect map even before coding begins?",
        answer:
          "Yes. Exporting your past Google Search Console pages, saving outside backlink targets, checking old ad links and locking down your new page map and 301 redirect rules happens in the very first week of our workflow, well before visual design or code moves onto a preview server.",
      },
      {
        question: "What happens if a client already launched a redesign and traffic just crashed?",
        answer:
          "We run an urgent check right away using archived sitemaps, Google Search Console history and Not Found error logs to spot every missing web address, broken redirect or leftover preview block. Adding direct 301 redirect patches and clean main-page tags quickly starts recovering lost search visibility.",
      },
    ],
    priority: 0.72,
    published: "2026-11-19",
    updated: "2026-11-26",
  },
];
