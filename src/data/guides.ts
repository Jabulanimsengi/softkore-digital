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
    title: "Website Prices in South Africa: What Affects the Cost",
    metaTitle: "Website Prices South Africa: What Affects the Cost | SoftKore Digital",
    description:
      "What affects website prices in South Africa, why quotes vary so much, what to check in a quote, and the running costs businesses often forget to budget for.",
    intro:
      "Two quotes for \"a website\" can differ enormously because they often describe very different projects. This guide explains what actually drives the price, how to compare quotes fairly, and which costs people tend to forget.",
    summary: ["What drives the price", "Why quotes differ", "Running costs", "Questions to ask"],
    sections: [
      {
        title: "What drives the price of a website",
        body: [
          "Six things account for most of the difference: the number of unique pages, who writes the content, how custom the design is, the features required, whether an existing site must be migrated, and how much search work is included.",
          "Content is the one people underestimate most. A designer can make placeholder text look great, but the words are what convince your customers. Someone has to write them, and if that is you, allow for the time it takes.",
          "Features add cost quickly. A contact form is simple. Online payments, bookings, customer logins, stock management or a connection to your accounting system all need extra building and testing.",
        ],
      },
      {
        title: "Why quotes vary so much",
        body: [
          "A low quote usually means a template with your logo and text added. That can be perfectly reasonable if you need a basic online presence quickly. A higher quote may include research, copywriting, custom design, technical SEO, testing and launch support.",
          "Neither is automatically better. The right question is whether the scope matches what you need the website to do. A brochure site for a business that gets all its work through referrals has a very different job from one that must bring in leads from Google.",
          "Compare what is included line by line. If one quote does not mention content, SEO setup, redirects or mobile testing, assume those are not included until you are told otherwise.",
        ],
      },
      {
        title: "Running costs people forget",
        body: [
          "The build is only part of the cost. Plan for domain renewal, hosting, email, SSL where it is not included in your hosting, plugin or software licences, and any fees charged by payment or booking providers.",
          "Maintenance is the other big one. Software needs updating, backups need checking, and forms need testing. If nobody is responsible for this, problems tend to stay hidden until they cost you enquiries.",
          "If you want search traffic, also allow for ongoing content and SEO work after launch. A new website rarely reaches its potential without it.",
        ],
      },
      {
        title: "How to get more from your budget",
        body: [
          "Start with a strong core site: a clear homepage, one good page for each main service, an about page with real information, and a contact page that works. Add further pages once you can see what customers respond to.",
          "Prepare your material before the project begins. Having your service list, photos, past work and customer reviews ready reduces revision time, which is often where budgets start to slip.",
          "Avoid paying for lots of near-identical pages for different towns or industries. Google often ignores these pages, so that money is usually better spent on making your main pages excellent.",
        ],
      },
      {
        title: "Questions to ask before you sign",
        body: [
          "Who owns the domain, the website files and the content, and can you take them elsewhere? Who writes the content? How many rounds of changes are included? What is the monthly cost after launch, and what does it cover?",
          "If you already have a website, ask how your existing Google rankings will be protected. If the supplier has no answer about redirects, treat that as a warning sign.",
          "Finally, ask to see live websites they have built, and try them on your phone. How they work in real use tells you more than any portfolio image.",
        ],
      },
    ],
    related: [
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Website vs web application", href: "/guides/website-vs-web-application/" },
      { label: "Ecommerce development", href: "/industries/ecommerce-development/" },
    ],
    faqs: [
      {
        question: "How much should a South African business budget for a website?",
        answer:
          "It depends on the scope, so it is best to get quotes against a clear brief. Use the factors in this guide to compare them, and include running costs as well as the build. You can also share your budget with us for an honest view of what it can achieve.",
      },
      {
        question: "Is a cheap website a bad idea?",
        answer:
          "Not always. A simple template can suit a business that only needs a basic online presence. It becomes a poor deal when you need the site to bring in leads but the price leaves out content, structure and SEO.",
      },
      {
        question: "Should SEO be included from the start?",
        answer:
          "The technical basics should be. Page structure, metadata, speed and mobile usability are far easier to get right during the build than to repair afterwards. Ongoing SEO work can be added later.",
      },
      {
        question: "Do I own my website after it is built?",
        answer:
          "That depends on your agreement, so ask before signing. Make sure the domain is registered in your business's name and that you understand what happens to the website if you ever change suppliers.",
      },
    ],
    priority: 0.72,
  },
  {
    slug: "website-vs-web-application",
    title: "Website vs Web Application: Which Does Your Business Need?",
    metaTitle: "Website vs Web Application: Which Does Your Business Need?",
    description:
      "The practical difference between a website and a web application, with examples, warning signs and a sensible way for South African businesses to decide.",
    intro:
      "A website explains your business and persuades people to contact you. A web application lets people log in and get something done. Choosing the wrong one can waste a lot of money, so here is how to tell which you need.",
    summary: ["The difference", "When a website is enough", "When you need an application", "Building in phases"],
    sections: [
      {
        title: "The simple difference",
        body: [
          "Think about what a visitor comes to do. On a website they read, compare and make contact: a plumber's service pages or an attorney's practice areas are typical examples. Most visitors never need an account.",
          "On a web application they complete a task, and the system remembers it. They might log in to check an order, approve a document, book an appointment or update a job card. Different users see different information, based on their role.",
          "The line can blur. An online store has website-style product pages and an application behind the cart, checkout and order management.",
        ],
      },
      {
        title: "When a website is enough",
        body: [
          "A website is the right choice when your main goal is to be found, build trust and receive enquiries, and when the actual work happens elsewhere. That covers most service businesses, professional firms and trades.",
          "A website can also do more than people expect. Contact forms, WhatsApp links, quote requests and a third-party booking widget can all be added without building custom software.",
        ],
      },
      {
        title: "When you need a web application",
        body: [
          "Consider an application when people need accounts and permissions, when customers keep asking for updates they could check themselves, or when your team retypes the same information into several places.",
          "Spreadsheets are the classic warning sign. If an important part of your business depends on one complicated spreadsheet that only one person fully understands, that is a risk as well as an inefficiency.",
          "Before building anything, check existing software. Accounting, CRM and booking products already cover common needs. Custom development is best kept for the parts of your work that are unusual, or that give you an advantage.",
        ],
      },
      {
        title: "How the costs compare",
        body: [
          "Applications generally cost more than websites because they involve data structures, user roles, business rules, security and much more testing. They also need ongoing support, since updates and bug fixes never fully stop.",
          "Weigh that cost against what the current process really costs you: staff hours each week, mistakes, slow responses and customers who give up. Sometimes the numbers clearly favour building. Sometimes they do not, and that is useful to know before you spend anything.",
        ],
      },
      {
        title: "Build in phases",
        body: [
          "For many businesses the sensible order is a strong website first, followed by a focused system once you understand exactly where the time is going.",
          "When you do build, start with the one workflow that wastes the most time. A small first version in real use will teach you more than a long specification ever could, and it keeps your risk low.",
        ],
      },
    ],
    related: [
      { label: "Web applications and business systems", href: "/services/custom-web-applications/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Online booking systems", href: "/services/booking-customer-management/" },
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      {
        question: "Is an ecommerce store a website or a web application?",
        answer:
          "It is both. Product and category pages behave like a website, while the cart, checkout, customer accounts and order management behave like an application.",
      },
      {
        question: "Can a website become a web application later?",
        answer:
          "Yes. A well-built website can later add a client portal, booking system or dashboard. These may sit alongside the website rather than inside it, depending on what makes the most technical sense.",
      },
      {
        question: "Is a web application the same as a mobile app?",
        answer:
          "No. A web application runs in a browser and works on phones and computers without being installed. A mobile app is downloaded from an app store. For many business systems, a web application is enough and costs less to run.",
      },
      {
        question: "Which costs more?",
        answer:
          "A web application usually costs more to build and maintain, because it involves data, user roles, business rules and more testing. It can still be the better investment if it saves significant staff time.",
      },
    ],
    priority: 0.72,
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist for South African Business Websites",
    metaTitle: "Technical SEO Checklist for South African Websites | SoftKore Digital",
    description:
      "A practical technical SEO checklist covering indexing, sitemaps, redirects, duplicate content, internal links, mobile speed and Google Search Console.",
    intro:
      "Technical SEO makes sure Google can find, read and index the right pages on your website. It will not win rankings by itself, but technical problems can quietly stop good pages from ever competing. Work through these checks in order.",
    summary: ["Search Console setup", "Indexing checks", "Redirects", "Thin and duplicate pages"],
    sections: [
      {
        title: "Start with Google Search Console",
        body: [
          "Search Console is free and shows how Google actually sees your site. Verify your domain, then submit your XML sitemap. If you do only one thing from this list, do this.",
          "Open the Pages report under Indexing. It shows how many of your pages are indexed and gives a reason for those that are not. This tells you where to look next.",
        ],
      },
      {
        title: "Check that your important pages can be indexed",
        body: [
          "Each important page should return a 200 status, should not be blocked in robots.txt, and should not carry a noindex tag. Its canonical tag should point to itself. Use the URL Inspection tool on your most important pages to confirm this.",
          "Check that one version of your domain is the main one. The http, https, www and non-www versions should all end up at the same address, using a single 301 redirect.",
        ],
      },
      {
        title: "Understand what the not-indexed reasons mean",
        body: [
          "\"Crawled - currently not indexed\" means Google looked at the page and chose not to include it. This usually points to quality or duplication rather than a technical fault, so requesting indexing again is unlikely to help on its own.",
          "\"Discovered - currently not indexed\" means Google knows about the page but has not fetched it yet. This is common on large or low-authority sites. Pages blocked by robots.txt or marked noindex usually come down to a setting, which makes them quicker to fix.",
        ],
      },
      {
        title: "Remove thin and near-duplicate pages",
        body: [
          "This is one of the most damaging patterns we see: hundreds of pages generated from a template, with only the town or industry name changed. Google may index them at first and then drop most of them.",
          "Compare a few of your pages side by side. If the wording is largely the same, merge them into one strong page and use 301 redirects from the old URLs. A smaller site with useful pages is better than a large one Google does not want.",
        ],
      },
      {
        title: "Clean up redirects and broken links",
        body: [
          "Every redirect should go directly to its final page, in one step, and the destination should be a relevant replacement. Chains of redirects and links to pages that no longer exist waste crawling and frustrate visitors.",
          "Plan redirects before any redesign or URL change. Your sitemap should list only live, indexable pages, without redirects or errors.",
        ],
      },
      {
        title: "Plan your pages and internal links",
        body: [
          "Each page should have one clear purpose and target one main search need. If two pages chase the same search, they will compete with each other, so choose one and strengthen it.",
          "Every important page should be reachable through normal links from your homepage and related pages. A page that is only listed in the sitemap has no links supporting it, which tells Google it does not matter much.",
        ],
      },
      {
        title: "Test on a phone, on a mobile connection",
        body: [
          "Google primarily looks at the mobile version of your site, and many South African visitors browse on mobile data. Compress images, remove unused scripts and plugins, and check that your content does not jump around while loading.",
          "Check real performance in the Core Web Vitals report in Search Console. PageSpeed Insights is useful for finding specific issues on individual pages.",
        ],
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Why your website is not ranking", href: "/guides/why-your-website-is-not-ranking/" },
      { label: "Website maintenance", href: "/services/website-maintenance/" },
      { label: "Monthly website maintenance checklist", href: "/guides/website-maintenance-checklist/" },
    ],
    faqs: [
      {
        question: "What is technical SEO?",
        answer:
          "It is the work that helps search engines find, read and index your website correctly. It covers things like crawl access, redirects, sitemaps, canonical tags, speed and mobile usability.",
      },
      {
        question: "How often should technical SEO be checked?",
        answer:
          "A monthly look at Search Console suits most business websites. Always do a full check after a redesign, a URL change or a server move, because that is when things most often go wrong.",
      },
      {
        question: "Why is Google not indexing my pages?",
        answer:
          "Check the reason shown in the Pages report in Search Console. Common causes are thin or duplicated content, weak internal links, low site authority or an accidental noindex tag.",
      },
      {
        question: "Does technical SEO guarantee rankings?",
        answer:
          "No. It removes barriers, but rankings also depend on content quality, how well a page matches the search, your authority and your competition.",
      },
    ],
    priority: 0.7,
  },
  {
    slug: "website-maintenance-checklist",
    title: "Monthly Website Maintenance Checklist",
    metaTitle: "Monthly Website Maintenance Checklist | SoftKore Digital",
    description:
      "A monthly website maintenance checklist for South African business owners: updates, backups, form tests, broken links, security, SEO checks and page speed.",
    intro:
      "Websites rarely fail dramatically. They slowly drift out of date, and small faults go unnoticed until they cost you business. You can complete this checklist in about an hour a month, or hand it to whoever looks after your site.",
    summary: ["Test the enquiry path", "Updates and backups", "Security", "SEO and speed"],
    sections: [
      {
        title: "Test how customers reach you",
        body: [
          "Start here, because this is what costs you money when it fails. Submit your contact form and confirm that the email arrives, and check it has not gone to spam. Tap your phone and WhatsApp links on a real phone.",
          "If you use bookings or a checkout, run through a test transaction. A form that stopped working can quietly waste weeks of paid or organic traffic before anyone notices.",
        ],
      },
      {
        title: "Run updates and check backups",
        body: [
          "Update your CMS, plugins and themes, taking a backup first. Then check your main pages, because updates are a common cause of broken layouts. Delete plugins you no longer use, since each one is a possible security weakness.",
          "Confirm that recent backups exist and are stored away from your website's hosting. A backup is only useful if it can be restored, so test a restore at least a few times a year.",
        ],
      },
      {
        title: "Review your security basics",
        body: [
          "Remove logins for staff or suppliers who no longer need access, and make sure admin accounts use strong passwords and two-factor authentication where available. Check your SSL certificate is valid and that your domain is not close to expiring.",
          "Look for anything you do not recognise, such as new admin users, unknown pages or redirects. Search Console's security report will also flag problems Google has detected.",
        ],
      },
      {
        title: "Check that your information is still correct",
        body: [
          "Read through your key pages as if you were a customer. Check your services, prices, team members, trading hours, addresses and contact details, and any special offers or claims that may be out of date.",
          "Check that your privacy notice still matches what you collect and how you use it, especially if you have added new forms or tools. POPIA applies to personal information you collect through your website.",
        ],
      },
      {
        title: "Look at your search data",
        body: [
          "Open Google Search Console. In the Pages report, look for sudden changes in the number of indexed pages. In the Performance report, compare clicks and impressions with the previous period, and look for pages that have dropped.",
          "Check for new 404 errors. If a page with links or traffic has disappeared, redirect it to the closest replacement.",
        ],
      },
      {
        title: "Check speed on a phone",
        body: [
          "Open your site on a phone using mobile data rather than office Wi-Fi. If it feels slow to you, it feels slow to your customers. Oversized images are the most common cause, so compress anything new that was added this month.",
          "Finally, keep a simple record of what you checked and changed. When something breaks, that record makes it much easier to find the cause.",
        ],
      },
    ],
    related: [
      { label: "Website maintenance services", href: "/services/website-maintenance/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Website prices in South Africa", href: "/guides/website-prices-south-africa/" },
    ],
    faqs: [
      {
        question: "How often should a website be maintained?",
        answer:
          "Most business websites should be checked monthly. Online stores, booking sites and sites with many plugins may need weekly updates and backups.",
      },
      {
        question: "What happens if I do not maintain my website?",
        answer:
          "Outdated software becomes a security risk, forms and integrations can stop working without warning, the site can slow down, and old information can put customers off.",
      },
      {
        question: "Can I do website maintenance myself?",
        answer:
          "You can handle much of this checklist yourself if you have access and the time. Many owners outsource the updates and backups, because a bad update can take the site offline.",
      },
      {
        question: "Does maintenance help with SEO?",
        answer:
          "Indirectly, yes. It catches broken pages, speed problems and indexing drops early. It does not replace SEO work such as improving content and earning links.",
      },
    ],
    priority: 0.7,
  },
  {
    slug: "why-your-website-is-not-ranking",
    title: "Why Your Website Is Not Ranking on Google",
    metaTitle: "Why Is My Website Not Ranking on Google? 7 Causes to Check",
    description:
      "Seven common reasons a business website does not rank on Google, how to check each one in Search Console, and what to fix first.",
    intro:
      "A website can look great and still get almost no traffic from Google. The cause is usually one of a handful of issues, and the fix depends entirely on which one applies. Here is how to work out what is really going on, in the order we would check it.",
    summary: ["Are pages indexed?", "Thin content", "Search intent", "Authority and links"],
    sections: [
      {
        title: "1. Google may not be indexing your pages",
        body: [
          "Open the Pages report in Google Search Console. If most of your pages are listed as not indexed, then nothing else on this list matters yet, because those pages cannot appear in search results at all.",
          "If you see \"Crawled - currently not indexed\" on many pages, Google has read those pages and decided not to keep them. Look first at the quality and uniqueness of the content rather than at technical settings.",
        ],
      },
      {
        title: "2. Your pages may be too similar to each other",
        body: [
          "Sites that generate hundreds of pages from a template, changing only a town or industry name, are especially at risk. These pages may get indexed for a while, then drop out in large numbers.",
          "If this sounds like your site, publishing more pages will only make it worse. Merge them into fewer strong pages and redirect the old addresses to them.",
        ],
      },
      {
        title: "3. You may be ranking, but too low to be seen",
        body: [
          "Check the average position in Search Console's Performance report. A site can collect thousands of impressions at position 80 and get no clicks, because almost nobody looks that far down the results.",
          "Impressions can look encouraging, so always read them alongside position. For most searches, visitors only really begin to arrive once a page is close to the first page of results.",
        ],
      },
      {
        title: "4. The page may not match what people want",
        body: [
          "Search the keyword yourself and look at the top results. If they are all comparison lists and you have a sales page, or they are service pages and you have a blog post, Google is telling you what searchers want to see.",
          "Check your wording as well. Abstract headlines like \"solutions that drive growth\" say nothing about what you do. Use the plain words your customers would use to describe the service.",
        ],
      },
      {
        title: "5. Your site may not have enough authority",
        body: [
          "For competitive searches, you are up against established agencies, directories and brands that have spent years earning links and reviews. A good page on a new website may not outrank them for a long time, however well written it is.",
          "Build real signals: a complete Google Business Profile if you qualify, listings on reputable directories, genuine customer reviews, and links from suppliers, clients and associations. Avoid buying links, which can harm you.",
        ],
      },
      {
        title: "6. Visitors may have little reason to trust you",
        body: [
          "Search engines try to surface businesses people can trust, and your customers look for the same signals. Unnamed testimonials, no address, no named people and vague case studies all make a business look less credible.",
          "Show what you can honestly prove: real projects, named reviews, qualifications, your contact details and the people behind the business.",
        ],
      },
      {
        title: "7. Important pages may not be linked properly",
        body: [
          "If an important page is only listed in your sitemap and not linked from your menu or related pages, you are signalling that it does not matter. Link your main services from your homepage, and connect related pages using descriptive wording.",
          "Also check whether several pages target the same search. Choose the best one, strengthen it, and merge or link the others to it.",
        ],
      },
      {
        title: "What to do first",
        body: [
          "Work in order: make sure pages can be indexed, remove weak and duplicate content, make your main pages clearly better, then work on authority. Doing this in the wrong order, such as buying links for a site Google will not index, wastes money.",
          "Allow several months to see results. Check Search Console monthly rather than daily, because rankings move around from day to day and are hard to read in the short term.",
        ],
      },
    ],
    related: [
      { label: "SEO services", href: "/services/seo-services/" },
      { label: "Technical SEO checklist", href: "/guides/technical-seo-checklist/" },
      { label: "Website design and development", href: "/services/web-development/" },
      { label: "Digital marketing and conversion", href: "/services/digital-marketing-conversion/" },
    ],
    faqs: [
      {
        question: "How long does it take to rank on Google?",
        answer:
          "It depends on your competition, content and authority. Technical fixes can be picked up within weeks, but ranking improvements usually take months, and competitive national searches can take much longer.",
      },
      {
        question: "Can a new website rank?",
        answer:
          "Yes, but expect it to take time. New sites usually do better by starting with specific, less competitive searches while building reviews, links and useful content.",
      },
      {
        question: "Should I create more pages if I am not ranking?",
        answer:
          "Not automatically. If your existing pages are thin or not indexed, more pages can make the problem worse. Improve what you have first, and only add pages that answer a distinct search need.",
      },
      {
        question: "Why did my traffic suddenly drop?",
        answer:
          "Compare the date of the drop against your own changes, such as a redesign or new URLs, then check the Pages report for indexing changes. Google's own updates can also cause drops, so check for both.",
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
