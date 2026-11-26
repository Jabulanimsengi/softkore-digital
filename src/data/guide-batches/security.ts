/**
 * Website & Cyber Security Guides (10 published).
 *
 * FAQ status:
 * - All 10 guides currently carry 5 FAQs (expand highest-intent ones like
 *   spf-dkim-dmarc-guide-south-africa, remove-google-deceptive-site-ahead-warning,
 *   and why-wordpress-websites-get-hacked-south-africa to 12 FAQs when revising).
 *
 * Editorial notes: keep FAQ answers answer-first (40–75 words), put [anchor](/path/)
 * links in answers/prose only (never in questions), avoid cross-page duplicate
 * questions, and bump `updated` (YYYY-MM-DD) whenever revising a guide.
 */
import type { GuidePage } from "./types";

export const securityGuides: GuidePage[] = [
  {
    slug: "spf-dkim-dmarc-guide-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2026-12-10",
    title: "SPF, DKIM & DMARC Guide for .co.za Domains: Stop Email Spoofing & Spam Issues",
    metaTitle: "SPF, DKIM & DMARC Guide for .co.za Domains | SoftKore",
    description:
      "Stop scammers faking your .co.za email and keep website enquiry emails out of Gmail spam. Plain SPF, DKIM and DMARC setup guide for SA firms.",
    intro:
      "Scammers can send fake invoice emails that look like they came from your .co.za address, and real website enquiries can land straight in Gmail spam. Fixing three simple domain email settings (SPF, DKIM and DMARC) stops fake senders and helps your real emails reach the inbox.",
    summary: [
      "What SPF, DKIM and DMARC stop",
      "Checking your current domain settings",
      "Fixing website contact emails",
      "Turning on DMARC safely",
    ],
    takeaways: [
      "Without DMARC set to block fakes, anyone can pretend to email from your `.co.za` address in bank-change scams.",
      "Use only ONE combined `v=spf1` line per domain, because adding a second SPF line breaks both.",
      "Turn on 2048-bit DKIM signing for both your office email (Microsoft 365 or Google Workspace) and your website mail sender (such as Resend or Postmark).",
      "Roll out DMARC in stages: watch reports at `p=none`, fix missing senders, test `p=quarantine`, then lock in `p=reject`.",
      "Set `v=spf1 -all` and `p=reject` on unused spare domains too so scammers cannot fake emails from them.",
    ],
    sections: [
      {
        title: "How SPF, DKIM and DMARC protect your brand and website enquiries together",
        body: [
          "Many South African business owners treat email domain settings (called DNS) as an office IT job. They often miss how those same settings break website contact alerts and online store receipts. Gmail and Microsoft now send unverified website emails straight to spam unless SPF, DKIM and DMARC match up.",
          "Think of the three settings as one simple chain of proof: which servers may send for you (SPF), a digital stamp proving the email was not changed (DKIM), and a rule telling inboxes what to do with fakes (DMARC).",
        ],
        table: {
          caption: "How the three domain email settings work for South African sites",
          headers: ["Setting", "Where it sits", "What it checks", "Common business mistake"],
          rows: [
            [
              "SPF (Sender Policy Framework)",
              "`@` (main domain text line)",
              "Lists the exact mail servers and tools allowed to send from your domain",
              "Adding two separate `v=spf1` lines or going over the 10-lookup limit",
            ],
            [
              "DKIM (DomainKeys Identified Mail)",
              "`selector._domainkey`",
              "Adds a tamper-proof stamp so bank details cannot be changed on the way",
              "Turning on DKIM for office email while leaving website form emails unsigned",
            ],
            [
              "DMARC",
              "`_dmarc` (text line)",
              "Checks that the `From:` address matches SPF or DKIM and blocks fakes",
              "Switching straight to `p=reject` on day one before listing payroll and site senders",
            ],
          ],
        },
      },
      {
        title: "Configure SPF without tripping duplicate or lookup errors",
        body: [
          "An SPF record is a single text line inside your domain settings that lists every service allowed to send email for you. If you use Microsoft 365 plus a website mail tool and invoicing software, all of them must sit inside ONE combined line instead of separate rows.",
        ],
        subsections: [
          {
            heading: "Never publish two `v=spf1` lines on one domain",
            body: [
              "A common mistake happens when staff set up Xero, Sage or Mailchimp by adding a new SPF line without removing the old one. Mail servers treat two SPF lines as a broken rule (`PermError`), so your email check fails everywhere.",
            ],
          },
          {
            heading: "Stay under the 10-lookup limit",
            body: [
              "Every `include:`, `a` or `mx` entry inside your SPF line triggers a quick domain lookup. You only get 10 lookups in total before the check fails (`PermError`). Remove old marketing apps and retired hosting servers once a year to keep room spare.",
            ],
          },
        ],
        bullets: [
          "Keep all approved office and website senders in one `v=spf1` line ending in `~all` while testing, then `-all` once checked.",
          "Check your list once a year so cancelled email tools do not keep permission to send as you.",
        ],
      },
      {
        title: "Activate 2048-bit DKIM across office suites AND website transactional mail",
        body: [
          "SPF can sometimes break when a customer auto-forwards your email inside their company. DKIM avoids that problem by adding a hidden digital stamp to each message, which the inbox checks against a public key in your domain settings.",
        ],
        bullets: [
          "Office mailboxes: Turn on both DKIM keys inside Microsoft 365 Defender, or create a 2048-bit key inside Google Workspace Admin.",
          "Website and store alerts: Stop using your hosting server's basic PHP `mail()` tool. Send alerts through a trusted mail service (like Resend, Postmark or Amazon SES) on its own subdomain such as `mail.yourdomain.co.za`.",
          "Accounting and CRM tools: Add the vendor's DKIM records for Xero, Sage, HubSpot or your booking tool so invoices and quotes reach the main inbox.",
        ],
        callout: {
          tone: "warning",
          heading: "Cheap shared hosting mail often sends quotes to spam",
          text: "Budget shared hosting servers send mail for hundreds of websites from one shared address. When another site on that server sends spam, your own quote emails can be blocked too.",
        },
      },
      {
        title: "Roll out DMARC enforcement smoothly without dropping genuine invoices",
        body: [
          "Jumping straight to `p=reject` on day one can bounce real payslips, accounting reminders or website enquiries from tools you forgot about. Move through these four steps instead:",
        ],
        numbered: [
          "Start in watch mode (`v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.co.za;`) and check weekly reports for 2 to 4 weeks until every real sender shows up.",
          "Fix any missed tools so your website mail service, invoicing app and booking system send with matching DKIM or SPF.",
          "Move to `p=quarantine` (`pct=25`, then `pct=100`) so suspect emails go to junk while you watch for any missed sender.",
          "Lock in `v=DMARC1; p=reject; pct=100;` so Gmail, Microsoft 365 and local South African providers block fake emails outright.",
        ],
        callout: {
          tone: "tip",
          heading: "Lock unused spare domains too",
          text: "On spare `.com` or `.co.za` domains that send no email, publish `v=spf1 -all` and `v=DMARC1; p=reject;` so scammers cannot spoof those lookalike names either.",
        },
      },
      {
        title: "Test live email headers end-to-end before wrapping up",
        body: [
          "Once your domain settings update, send real test emails from your office inbox, your `/contact/` form and your invoicing tool to a personal Gmail and Outlook address. Open 'Show Original' in Gmail and confirm three green results (`SPF: PASS`, `DKIM: PASS`, `DMARC: PASS`) for every sender.",
        ],
      },
      {
        title: "Decoding real DMARC XML reports and avoiding silent forwarding traps",
        body: [
          "Moving from `p=none` to `p=quarantine` and `p=reject` feels much safer once you can read your weekly DMARC reports. Those reports list every server around the world sending mail as your domain, showing both forgotten office tools and real scam attempts.",
          "Fix any unverified tools before you turn on `p=reject` across the whole business:",
        ],
        subsections: [
          {
            heading: "Spot forgotten senders inside DMARC reports",
            body: [
              "Free DMARC report readers show quickly if an old client portal, office scanner, Xero link or WordPress mail plugin is failing its check. Either add that tool's own DKIM settings or send its emails through your verified website mail service.",
            ],
          },
          {
            heading: "Why DKIM still passes when clients forward email",
            body: [
              "Many directors and office staff forward work mail to a second inbox (for example `director@firm.co.za` forwarding to Gmail). Forwarding changes the sending server and often breaks SPF, while a valid 2048-bit DKIM stamp stays intact so DMARC still passes.",
            ],
          },
        ],
        bullets: [
          "Make sure long text entries inside your domain panel have no broken quote marks or extra spaces.",
          "Review your domain email settings twice a year whenever you add new accounting, payroll or booking software.",
        ],
      },
    ],
    midCta: {
      heading: "Quotes hitting Gmail spam, or worried about invoice fraud?",
      text: "We check your domain settings, replace unreliable hosting mailers with verified senders and move your .co.za domain safely to `p=reject`.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Protecting .co.za domain hijacking", href: "/guides/protecting-domain-hijacking-co-za/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
    ],
    faqs: [
      {
        question: "Will SPF, DKIM and DMARC stop criminals buying lookalike typo domains?",
        answer:
          "No, email settings protect only your exact domain name, such as `@yourcompany.co.za`. They cannot stop scammers from buying a lookalike domain with an extra hyphen or `.com` ending. To block fake bank-change scams completely, register common typo variants defensively and require a phone callback before staff change any supplier payment details.",
      },
      {
        question: "Why did website contact notifications break after setting DMARC to p=reject?",
        answer:
          "Your website probably sent contact alerts using basic hosting mail that claimed to be from `info@yourdomain.co.za` without permission. Once `p=reject` is active, Gmail and Microsoft block any server not listed in your SPF or DKIM settings. Routing website alerts through a verified mail service on a subdomain fixes this permanently.",
      },
      {
        question: "Does SoftKore Digital configure SPF, DKIM and DMARC for South African businesses?",
        answer:
          "Yes, setting up SPF, DKIM and DMARC is part of our [website security](/services/website-security/) service. We audit your current domain settings, combine duplicate SPF lines, connect verified website mail delivery for your enquiry forms and monitor reports before locking in DMARC protection so real invoices and quote replies never bounce.",
      },
      {
        question: "How long do SPF and DMARC DNS updates take to propagate across South Africa?",
        answer:
          "Most domain email updates take between 15 minutes and a few hours to show up across South Africa and overseas. The exact wait depends on your domain panel's refresh timer, called a TTL. We lower that timer before making edits, then test live headers on Gmail and Outlook once changes settle.",
      },
      {
        question: "Does DMARC help stop inbound spam coming INTO our own company inbox?",
        answer:
          "DMARC stops scammers from faking your own domain name when emailing your staff or your customers, such as fake messages pretending to come from your director. It does not block normal marketing spam from strangers. For general junk mail, pair DMARC with inbound filtering in Microsoft 365 or Google Workspace.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "remove-google-deceptive-site-ahead-warning",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2026-12-31",
    title: "How to Remove Google's 'Deceptive Site Ahead' & Safe Browsing Warning",
    metaTitle: "Remove Google 'Deceptive Site Ahead' Warning | SoftKore",
    description:
      "Chrome or Safari blocking visitors with 'Deceptive site ahead'? Remove hidden phishing pages, clear backdoors and pass Google's safety review fast.",
    intro:
      "A red 'Deceptive site ahead' screen in Chrome locks out almost every visitor overnight. Google shows this warning when it spots fake login pages or hidden malware on your domain, so you need to remove every trace and close the security gap before asking for a review.",
    summary: [
      "Why Chrome shows the red warning",
      "Finding hidden phishing pages",
      "Cleaning files and closing the gap",
      "Asking Google for a review",
    ],
    takeaways: [
      "`Deceptive site ahead` means Google Safe Browsing flagged phishing or malware on your site, not an expired HTTPS security certificate.",
      "Hackers often hide fake bank or courier login pages inside upload folders or old subdomains while your homepage still looks normal.",
      "Check Google Search Console (Google's free report on how your site shows up in search) under Security Issues to see the exact flagged links.",
      "Never click 'Request Review' after deleting only one folder, because leftover backdoors re-infect the site and delay clearance.",
      "Clear your website cache and check that removed spam links return a 404 or 410 'not found' status before requesting a review.",
    ],
    sections: [
      {
        title: "Confirm what 'Deceptive site ahead' means vs other browser alerts",
        body: [
          "Reading the exact warning on screen tells you right away whether hackers placed bad files on your site or whether an HTTPS security certificate simply expired.",
        ],
        table: {
          caption: "What urgent browser security warnings mean",
          headers: ["Browser warning", "What caused it", "What to check first"],
          rows: [
            [
              "Deceptive site ahead (red)",
              "Google spotted fake login pages, scams or sneaky redirects",
              "Google Search Console > Security Issues and server access logs",
            ],
            [
              "The site ahead contains malware (red)",
              "Your host is serving infected downloads or bad scripts",
              "Search Console > Security Issues and recent file changes",
            ],
            [
              "Your connection is not private (grey)",
              "Your HTTPS security certificate expired or misses `www`",
              "Hosting SSL panel or Cloudflare Full (Strict) settings",
            ],
          ],
        },
      },
      {
        title: "Locate every infected folder, subdomain and conditional redirect",
        body: [
          "Many business owners feel confused because their homepage opens normally on their office laptop. Hackers often hide fake Capitec, SARS, DHL or Microsoft 365 login pages inside writable folders, or show bad redirects only to visitors coming from Google.",
        ],
        subsections: [
          {
            heading: "Get the exact flagged links inside Google Search Console",
            body: [
              "Open Google Search Console (Google's free report on how your site shows up in search) and click Security & Manual Actions > Security Issues. Google usually lists example links, such as `/wp-content/uploads/2026/secure-verify/`. Check server file dates around the same hour to find any other bad files uploaded in the same attack.",
            ],
          },
          {
            heading: "Check old subdomains and forgotten folders",
            body: [
              "Check every folder in your hosting account and every subdomain, such as `test.`, `mail.` or `portal.`. Google can block your whole `.co.za` domain if even one forgotten, unpatched site sits on a private preview subdomain like `staging.yourdomain.co.za`.",
            ],
          },
        ],
        bullets: [
          "Run Google Search Console > URL Inspection > Test Live URL to spot hidden hacks that only show up for Chrome users or Google's scan of your site.",
          "Check scheduled server tasks (`crontab`) and database tables like `wp_options` for hidden redirect scripts.",
        ],
      },
      {
        title: "Clean the phishing payload AND eradicate hidden backdoors together",
        body: [
          "Deleting only the single folder Chrome found while ignoring how the hacker got in guarantees the site will be hacked again. Second warnings often take longer to clear.",
        ],
        numbered: [
          "Save a safe offline copy of the hacked files, database and the past 30 days of server logs in case you need proof later.",
          "Put up a temporary holding screen (HTTP 503) or block public access in Cloudflare while you clean the site.",
          "Replace your editing system core, themes and plugins with fresh official copies, delete unused themes and remove any `.php` files inside `/uploads/`.",
          "Delete unknown admin users and strip bad `<script>` or hidden encoded snippets out of database tables.",
          "Change every password (hosting, FTP, database, site admins, domain settings, mail and payment keys), update old software and turn on two-step login checks.",
        ],
        callout: {
          tone: "warning",
          heading: "Wait until every layer is clean before requesting a review",
          text: "If you click 'Request Review' while one hidden backdoor or cached page still holds the hack, Google rejects the request and makes you wait longer next time.",
        },
      },
      {
        title: "Verify dead spam URLs return HTTP 404/410 and purge all edge caches",
        body: [
          "After cleaning, test every flagged link listed in Google Search Console. Each removed scam link must return a clear `404` or `410 Gone` 'not found' response, and you must NEVER redirect scam pages to your homepage.",
          "Next, open Cloudflare or your hosting cache tool and run a full **Purge Everything** clear so visitors and Google do not see an old cached copy of the infected page.",
        ],
        bullets: [
          "Test your homepage with URL Inspection > Test Live URL in Google Search Console before you ask for a review.",
          "Check that your secure HTTPS connection and browser security settings (`HSTS`, `X-Frame-Options`, `nosniff`) are active on your live pages.",
        ],
        callout: {
          tone: "tip",
          heading: "Keep your Google review note short and factual",
          text: "Write two clear sentences saying what caused the break-in (such as an outdated form plugin), that you replaced core files, removed backdoors, changed all passwords and added a website firewall.",
        },
      },
      {
        title: "Monitor post-clearance recovery and lock out future compromises",
        body: [
          "Google Safe Browsing reviews usually clear within 24 to 72 hours once your site is clean, restoring normal Chrome and Safari access. Keep alerts for when your site goes down, daily off-site backups and two-step login checks turned on, or move simple brochure sites to a static build that has no PHP plugins to hack.",
        ],
      },
      {
        title: "Post-clearance checklist to prevent repeat Safe Browsing flags",
        body: [
          "Seeing Chrome clear the red block is a huge relief, yet rushed cleanups often get flagged again within months if the real entry point stayed open. Locking down basic access and software habits right after recovery stops repeat blocks.",
          "Work through these checks as soon as Google Search Console shows green:",
        ],
        subsections: [
          {
            heading: "Check Google search results for leftover spam pages",
            body: [
              "Search `site:yourdomain.co.za` on Google and check Google Search Console's `Indexing > Pages` report each week during the first month. Make sure deleted spam links return a proper 404 or 410 'not found' status so Google drops them from search results.",
            ],
          },
          {
            heading: "Audit logins, off-site backups and website firewall rules",
            body: [
              "Remove logins for former staff or freelancers, turn on app-based two-step verification on hosting, your editing system, your domain registrar and Cloudflare, block PHP files in upload folders, and keep encrypted off-server backups running.",
            ],
          },
        ],
        bullets: [
          "If your site rarely changes, consider moving off PHP plugins onto a static Next.js site with fewer ways in for hackers.",
          "Check POPIA Section 22 breach reporting rules with your legal advisor if customer enquiries or personal records were stored on the hacked server.",
        ],
      },
    ],
    midCta: {
      heading: "Visitors hitting Google's red 'Deceptive site ahead' warning today?",
      text: "We track down hidden phishing files, remove backdoors, reset leaked passwords and guide your Google Safe Browsing review.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Hacked website recovery guide SA", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "Why WordPress sites get hacked", href: "/guides/why-wordpress-websites-get-hacked-south-africa/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
    ],
    faqs: [
      {
        question: "How fast does Chrome remove the red screen once Google approves our review?",
        answer:
          "Once Google Search Console clears Security Issues to green, the red warning usually disappears from Chrome, Safari, Firefox and Edge within a few hours to 24 hours. Some mobile browsers hold a cached warning briefly, so clearing browser data or testing in a private window shows the live result.",
      },
      {
        question: "Why did Search Console flag our homepage when our office browsers show no hack?",
        answer:
          "Hackers often use hidden scripts that show scam pages only to phone visitors, Google's scanner or people outside your office network. Malicious code can also sit inside your site header or footer database tables where you do not notice it when logged in as an admin.",
      },
      {
        question: "Can a neglected subdomain like old.company.co.za trigger a warning on www?",
        answer:
          "Yes, Google Safe Browsing often spreads a warning across your entire domain name (`yourdomain.co.za`) if an old test, portal or private preview subdomain gets hacked. Removing unused subdomains and cleaning every site sharing the same hosting account stops one forgotten install from blocking your main website.",
      },
      {
        question: "Does a temporary Safe Browsing flag ruin organic SEO rankings permanently?",
        answer:
          "No, a short warning rarely causes lasting ranking damage if you fix the site within days. Once you remove bad files, make fake pages return a 404 or 410 status and pass your Google review, your normal search listings and click traffic usually recover steadily.",
      },
      {
        question: "Should we also assess POPIA Section 22 obligations after clearing the warning?",
        answer:
          "Yes, you should review preserved server logs with legal advice if customer details, enquiry forms or account logins were stored on the hacked host. Under POPIA Section 22, businesses must assess whether personal data was viewed or stolen and notify the Information Regulator and affected people when required.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "why-wordpress-websites-get-hacked-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-01-21",
    title: "Why WordPress Websites Get Hacked in South Africa (And How to Lock Them Down)",
    metaTitle: "Why WordPress Sites Get Hacked (SA Security) | SoftKore",
    description:
      "Why South African WordPress sites keep getting hacked: outdated plugins, cracked themes, shared admin logins, old preview folders and how to lock them down.",
    intro:
      "WordPress works reliably when maintained properly, yet it accounts for most emergency website cleanups in South Africa. Automated bots scan `.co.za` websites day and night looking for outdated plugins, pirated themes and weak passwords.",
    summary: [
      "How bots break into WordPress",
      "Why cracked themes cause trouble",
      "Locking down logins and folders",
      "Ongoing firewall and update habits",
    ],
    takeaways: [
      "Most WordPress hacks come through outdated plugins, pirated themes, stolen logins or old preview folders, rarely from WordPress itself.",
      "Clicking Deactivate on an old plugin leaves its PHP files sitting on your server where hackers can still run them.",
      "Turn on app-based two-step login checks for all admins, protect `/wp-login.php` with a website firewall and delete logins for former staff.",
      "Block PHP scripts from running inside `wp-content/uploads/` and delete old `/staging/` or `backup.sql` files.",
      "For simple company websites that rarely change, moving to a static Next.js build removes PHP plugin risks altogether.",
    ],
    sections: [
      {
        title: "Five open doors automated scanners use to hijack WordPress sites",
        body: [
          "Stopping repeat WordPress hacks starts with knowing what automated bots scan for every night across South African hosting servers.",
        ],
        table: {
          caption: "Common WordPress entry paths and how to block them",
          headers: ["Way in for hackers", "How bots exploit it", "How to block it"],
          rows: [
            [
              "Outdated plugins or builders",
              "Bots attack known flaws hours after they become public",
              "Test and run updates regularly, and delete unused plugins completely",
            ],
            [
              "Cracked ('nulled') themes",
              "Pirated pro plugins ship with hidden backdoors inside",
              "Use only official licensed plugins bought in your company's name",
            ],
            [
              "Weak or leaked logins (`admin`)",
              "Bots hammer `/wp-login.php` and `xmlrpc.php` with leaked passwords",
              "Use two-step login checks, password-vault logins, rate limits and block XML-RPC",
            ],
            [
              "Old preview or SQL files",
              "Leftover test folders and `backup.sql` files sit open on the server",
              "Delete old preview copies and raw database exports once live",
            ],
            [
              "Scripts in upload folders",
              "Hackers upload disguised `.php` files into media folders",
              "Block PHP files from running inside `wp-content/uploads/`",
            ],
          ],
        },
      },
      {
        title: "Outdated plugins, page builders and hidden backdoors in 'nulled' downloads",
        body: [
          "Open almost any neglected business WordPress site and you will find 25 or 30 plugins installed: old countdown bars, duplicate contact tools, unused sliders and page builders whose licence expired years ago.",
        ],
        subsections: [
          {
            heading: "Clicking Deactivate does not remove risky plugin code",
            body: [
              "Deactivating a plugin only stops WordPress from loading it inside your dashboard. Standalone `.php` files inside `/wp-content/plugins/` can still be opened directly by attack bots over the web. Always uninstall and delete plugins you no longer use.",
            ],
          },
          {
            heading: "Avoid 'free pro' cracked plugins on cheap builds",
            body: [
              "Bargain websites sometimes use cracked ('nulled') copies of paid tools like Elementor Pro, WPForms or Gravity Forms downloaded from shady sites. Those copies often contain sleeper malware that wakes up months after launch.",
            ],
          },
        ],
        callout: {
          tone: "warning",
          heading: "Watch expired agency licences blocking security updates",
          text: "If an old agency installed paid plugins under their own master licence key and you moved away, updates stop quietly until your business buys its own active licences.",
        },
      },
      {
        title: "Lock down wp-admin access, XML-RPC and upload permissions",
        body: [
          "Tightening basic WordPress logins and folder rules cuts automated attack success right away:",
        ],
        bullets: [
          "Delete shared generic accounts (`admin`, `webmaster`) and give each staff member their own login with only the access they need.",
          "Require an authenticator app for two-step verification on all Administrator and Shop Manager accounts.",
          "Turn off `/xmlrpc.php` unless a verified tool needs it, so bots cannot test hundreds of passwords in one request.",
          "Block PHP scripts from running inside `/wp-content/uploads/` and add `define('DISALLOW_FILE_EDIT', true);` inside `wp-config.php`.",
        ],
      },
      {
        title: "Remove stale staging subdomains and shared-hosting cross-risks",
        body: [
          "Developers often leave `/old-site/`, `/wp-beta/` or `staging.domain.co.za` sitting online with the same database and no updates, giving hackers an easy back door next to your live site.",
          "Putting five company websites inside one shared hosting account is just as risky. If one small side site catches a bad script, hackers can often jump across every website sharing that same hosting space.",
        ],
        callout: {
          tone: "tip",
          heading: "Skip PHP plugins if your company site rarely changes",
          text: "If your team only updates a few lines of text or adds an article now and then, moving onto a static Next.js site removes database hacks and WordPress plugin fires altogether.",
        },
      },
      {
        title: "Your practical 30-minute WordPress lockdown checklist today",
        body: [
          "Set aside 30 quiet minutes with your developer or IT lead to close these common gaps:",
        ],
        numbered: [
          "Save a full encrypted backup off the server before you delete plugins or change settings.",
          "Open Users, remove old staff and ex-agency accounts, and turn on unique vault passwords with two-step login checks.",
          "Update WordPress core, plugins and themes on a private preview first, then delete unused themes, disabled plugins and old `/staging/` folders.",
          "Protect `/wp-login.php` with a website firewall (WAF) rate limit, set `DISALLOW_FILE_EDIT` and block PHP scripts inside `uploads/`.",
          "Turn on alerts if your site goes down, certificate expiry checks and Google Search Console (Google's free report on how your site shows up in search) warnings.",
        ],
      },
      {
        title: "Deciding realistically: keep locked-down WordPress or switch platforms?",
        body: [
          "After cleaning a hacked WordPress site twice in two years, many business owners ask if paying for ongoing plugin updates makes sense or if moving off PHP is smarter. The right answer depends on how often your team updates pages and what features the site runs.",
          "Check how your team actually uses the website before spending more on repeat repairs:",
        ],
        subsections: [
          {
            heading: "When keeping and locking down WordPress makes sense",
            body: [
              "Keep WordPress when you run an active WooCommerce store with many products, gated client portals or weekly edits by non-technical staff. Cut active plugins down to under 12 trusted licensed tools, move to isolated South African hosting, add a Cloudflare website firewall with two-step logins and run monthly updates.",
            ],
          },
          {
            heading: "When switching to static Next.js saves money long term",
            body: [
              "Many company WordPress sites only change copy a few times a year. Moving brochure and lead-focused websites onto pre-built Next.js pages removes SQL databases, PHP upload gaps, cracked themes and `/wp-login.php` login attacks for good, giving you faster speeds and fewer surprises.",
            ],
          },
        ],
        bullets: [
          "Always delete old WordPress folders like `/old-wp/` after moving platforms so forgotten PHP files do not stay live.",
          "Keep old page links working with tested direct redirects whenever you change editing systems.",
        ],
      },
    ],
    midCta: {
      heading: "Tired of worrying about WordPress plugin hacks?",
      text: "We lock down WordPress with two-step logins, a website firewall and off-site backups, or move brochure sites onto fast Next.js builds.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Hacked website recovery guide SA", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "WordPress vs custom Next.js SA", href: "/guides/wordpress-vs-custom-website-south-africa/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "Website firewall & Cloudflare SA", href: "/guides/website-firewall-waf-cloudflare-south-africa/" },
    ],
    faqs: [
      {
        question: "Is WordPress too risky for South African company websites?",
        answer:
          "No, WordPress itself receives regular security updates from a dedicated open-source security team. Almost every WordPress hack in South Africa starts with abandoned plugins, cracked 'nulled' themes, weak shared logins, forgotten preview folders or crowded shared hosting, rather than a flaw inside the core WordPress software.",
      },
      {
        question: "Does adding a security plugin like Wordfence stop every hack?",
        answer:
          "A security plugin helps slow down noisy login guesses and alerts you to changed files, so it adds a useful warning layer. However, a plugin sitting inside WordPress cannot protect your site against weak hosting panel passwords, old preview folders, public database backups or outdated plugins left unpatched for months.",
      },
      {
        question: "What maximum plugin count should a WordPress SME site run?",
        answer:
          "Aim for fewer than 10 to 14 essential, actively updated plugins from reputable makers. Cutting out unused page sliders, duplicate form tools and decorative add-ons reduces both the ways hackers can break into your site and the heavy code that slows pages down on phones.",
      },
      {
        question: "Can SoftKore lock down and monitor an existing WordPress build safely?",
        answer:
          "Yes, our [website security](/services/website-security/) team inspects your files and admin users first, removes unused plugins and forgotten preview folders, turns on two-step login checks, puts a Cloudflare website firewall in front of the site and sets up daily off-site backups with ongoing monthly update care for your team.",
      },
      {
        question: "How quickly after disclosure do bots probe newly discovered plugin bugs?",
        answer:
          "Automated scanners often start testing `.co.za` sites within hours or a few days after a new plugin flaw is announced publicly. Attackers do not pick small companies by hand; automated bots scan huge lists of websites around the clock, which makes prompt updates and an active website firewall vital.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "fix-your-connection-is-not-private-ssl",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-02-11",
    title: "How to Fix 'Your Connection Is Not Private' & SSL Errors on Your Website",
    metaTitle: "Fix 'Your Connection Is Not Private' SSL | SoftKore",
    description:
      "Fix 'Your connection is not private', expired HTTPS security certificates, www mismatches, redirect loops and mixed content on South African sites.",
    intro:
      "Few errors kill enquiries faster than a visitor clicking your Google link and seeing Chrome warn 'Your connection is not private'. Almost every SSL panic comes from a failed 90-day certificate renewal, a `www` mismatch or clashing Cloudflare HTTPS settings.",
    summary: [
      "Reading Chrome's SSL error codes",
      "Why free certificates fail to renew",
      "Covering both www and bare domains",
      "Stopping future expiry surprises",
    ],
    takeaways: [
      "Click 'Advanced' in Chrome to read the `NET::ERR_...` code, which points straight to the broken setting.",
      "Make sure every HTTPS security certificate covers both your bare domain (`domain.co.za`) and `www` (`www.domain.co.za`) together.",
      "Set Cloudflare SSL to **Full (Strict)** with a real certificate on your hosting server, and never leave a live site on `Flexible`.",
      "Update old `http://` links in your theme and database to `https://` before turning on HSTS browser rules.",
      "Set up automatic alerts 21 days and 7 days before expiry so a quiet renewal failure never locks customers out.",
    ],
    sections: [
      {
        title: "Decode Chrome's exact SSL warning code inside 30 seconds",
        body: [
          "Checking Chrome's short `NET::ERR_...` code under 'Advanced' saves you from guessing inside domain settings and hosting panels.",
        ],
        table: {
          caption: "Common browser HTTPS errors and how to fix them",
          headers: ["Browser error", "What went wrong", "How to fix it"],
          rows: [
            [
              "`NET::ERR_CERT_DATE_EXPIRED`",
              "Your 90-day Let's Encrypt or AutoSSL certificate failed to renew",
              "Check if redirects block `/.well-known/`, renew the certificate and add expiry alerts",
            ],
            [
              "`ERR_CERT_COMMON_NAME_INVALID`",
              "The certificate misses `www` or the bare domain, or shows a default host cert",
              "Issue one certificate covering both names and check domain IP records",
            ],
            [
              "`ERR_TOO_MANY_REDIRECTS`",
              "Cloudflare `Flexible` HTTP mode loops against a server forcing HTTPS",
              "Install a hosting certificate and switch Cloudflare to `Full (Strict)`",
            ],
            [
              "Not Secure / Mixed Content warning",
              "An HTTPS page still loads old `http://` scripts, fonts or images",
              "Update old `http://` asset links in templates and the database to `https://`",
            ],
          ],
        },
      },
      {
        title: "Why automated 90-day Let's Encrypt renewals fail quietly",
        body: [
          "Free HTTPS security certificates usually renew automatically every 60 days by checking a hidden folder at `/.well-known/acme-challenge/`. New `.htaccess` redirects, country blocks or firewall rules added months after launch can block that check quietly, leaving you unaware until the warning screen appears weeks later.",
        ],
        subsections: [
          {
            heading: "Keep `/.well-known/` open for renewal checks",
            body: [
              "Check server redirects, hotlink rules and website firewall settings to make sure automated renewal checks can reach `/.well-known/` without logins or loops.",
            ],
          },
          {
            heading: "Switch off Cloudflare 'Flexible' SSL mode",
            body: [
              "`Flexible` mode tells Cloudflare to talk to your hosting server over unencrypted HTTP. That triggers `ERR_TOO_MANY_REDIRECTS` crashes whenever WordPress or Nginx expects HTTPS. Always put a real certificate (or free Cloudflare Origin Certificate) on your server and select **Full (Strict)**.",
            ],
          },
        ],
      },
      {
        title: "Cover apex AND www together before setting a direct redirect",
        body: [
          "A very common fault puts an HTTPS security certificate on `www.company.co.za` while leaving out the bare address `company.co.za`. Anyone typing the bare address hits 'Your connection is not private' because **the browser checks the certificate before any redirect runs**.",
        ],
        bullets: [
          "Check your certificate's Subject Alternative Names (SANs) to confirm both `yourdomain.co.za` and `www.yourdomain.co.za` appear.",
          "Once both names carry valid certificates, add a direct redirect from HTTP to your chosen HTTPS address.",
          "Remove double redirect jumps (`http -> https -> www`) so Google's scan of your site and mobile visitors land in one step.",
        ],
        callout: {
          tone: "warning",
          heading: "HTTPS checks run before any redirect starts",
          text: "Even if `yourdomain.co.za` only forwards visitors to `www.yourdomain.co.za`, both names must be listed on a valid certificate or Chrome blocks the visit first.",
        },
      },
      {
        title: "Clean up mixed-content URLs before enabling HSTS",
        body: [
          "Sometimes the certificate is valid, yet Chrome still flags the page as 'Not Secure' or breaks fonts and maps because old `http://` image or file links sit inside the database or templates. Update those `http://` links to `https://` across the site.",
          "Only after every page loads with a secure HTTPS connection should you turn up `Strict-Transport-Security` (HSTS), a browser rule forcing HTTPS.",
        ],
        callout: {
          tone: "tip",
          heading: "Skip R2,000 'Standard Domain SSL' upsells",
          text: "For normal South African company sites and online stores using hosted PayFast, Yoco or Ozow checkouts, free automated Let's Encrypt or Cloudflare certificates give the exact same encryption.",
        },
      },
      {
        title: "Verify every HTTPS check and automate early expiry alerts",
        body: [
          "Run through these four checks after fixing the error so an expired certificate never surprises your customers again:",
        ],
        numbered: [
          "Open both `https://yourdomain.co.za` and `https://www.yourdomain.co.za` in a private browser window to check the secure HTTPS connection and direct redirect.",
          "If you use Cloudflare, check that SSL mode is set to `Full (Strict)` with a valid server certificate underneath.",
          "Open Chrome DevTools Console on key service and checkout pages to confirm there are zero Mixed Content errors.",
          "Set external monitoring alerts to email your team 21 days and 7 days before any certificate expires.",
        ],
      },
      {
        title: "Preventing recurring Let's Encrypt failures and mixed-content loops",
        body: [
          "Fixing an expired certificate at 8 a.m. gets customers back online, yet finding why renewal failed stops the same screen returning sixty days later. Most silent failures sit inside server rewrite rules or proxy settings.",
          "Check these three hidden causes once your secure HTTPS connection is green again:",
        ],
        subsections: [
          {
            heading: "Check AutoSSL logs for `/.well-known` firewall blocks",
            body: [
              "Read your hosting AutoSSL or Certbot logs to confirm automatic checks passed without rewrite rules hijacking `/.well-known/acme-challenge/` or Cloudflare bot screens blocking Let's Encrypt.",
            ],
          },
          {
            heading: "Remove plugin redirect clashes behind proxies",
            body: [
              "Remove WordPress plugins like 'Really Simple SSL' when your Nginx server or hosting panel handles HTTPS alongside Cloudflare **Full (Strict)**. Mixing PHP-level SSL plugins behind a proxy causes `ERR_TOO_MANY_REDIRECTS` loops and slows pages down.",
            ],
          },
        ],
        bullets: [
          "Test your certificate on both mobile data and office Wi-Fi after edits so old browser caches do not fool you.",
          "Keep SSL expiry alerts alongside your `.co.za` domain renewal reminders in the company calendar.",
          "Test both `yourdomain.co.za` and `www.yourdomain.co.za` with `curl -vI` to confirm the full certificate chain works on older phones too.",
          "Check that external fonts, maps and widgets load over `https://` before turning on HSTS.",
        ],
      },
    ],
    midCta: {
      heading: "Seeing privacy warnings, redirect loops or mixed-content errors?",
      text: "We fix missing domain certificates, switch Cloudflare to Full (Strict) and set up automated expiry alerts before customers notice.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "HTTP security headers explained", href: "/guides/http-security-headers-explained/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "Website firewall & Cloudflare SA", href: "/guides/website-firewall-waf-cloudflare-south-africa/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
    ],
    faqs: [
      {
        question: "Why does the SSL warning show ONLY on www or ONLY on the bare address?",
        answer:
          "This happens when your server's HTTPS security certificate lists only one version of your domain name, either `domain.co.za` or `www.domain.co.za`. Because browsers verify the certificate before any redirect happens, visitors typing the unlisted version hit a warning. Re-issuing one certificate covering both names fixes it immediately.",
      },
      {
        question: "Can an expired SSL certificate hurt our Google Search rankings fast?",
        answer:
          "Yes, an expired HTTPS security certificate can hurt your website traffic and search rankings quickly if left unfixed. When Google's scan of your site hits a broken certificate, it cannot read your pages safely, while Chrome shows a warning screen that makes visitors leave right away.",
      },
      {
        question: "What causes 'Too Many Redirects' right after turning Cloudflare on?",
        answer:
          "Running Cloudflare in `Flexible` SSL mode causes this error when your hosting server expects HTTPS. Cloudflare connects to your server over plain HTTP, your server tells it to switch to HTTPS, and the two bounce endlessly. Adding a server certificate and choosing `Full (Strict)` stops the loop.",
      },
      {
        question: "How fast can an SSL or SAN certificate error get resolved?",
        answer:
          "Once we have hosting and domain panel logins, diagnosing a broken HTTPS security certificate and issuing a fresh one covering both `www` and the bare domain usually takes 30 minutes to 2 hours. Fixing messy mixed-content links inside an older database can take a little longer.",
      },
      {
        question: "Does having an HTTPS security certificate guarantee the website cannot get hacked?",
        answer:
          "No, an HTTPS security certificate only scrambles traffic travelling between a visitor's browser and your web server over Wi-Fi or mobile data. Hackers can still break into your site through outdated plugins, stolen passwords or unguarded forms, so you still need updates, two-step logins and a website firewall.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "website-firewall-waf-cloudflare-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-03-04",
    title: "Website Firewalls (WAF) & Cloudflare Setup: Protecting South African Business Sites",
    metaTitle: "Website Firewalls (WAF) & Cloudflare Guide | SoftKore",
    description:
      "How a website firewall (WAF) and Cloudflare protect South African business sites: login rate limits, hiding server IPs, local speed and safe payment webhooks.",
    intro:
      "A standard hosting server firewall leaves web ports 80 and 443 open, letting spam bots and password-guessing tools hit your site freely. Putting a website firewall (called a WAF) like Cloudflare in front of your site filters out bad traffic at local Johannesburg, Cape Town and Durban servers before it reaches your hosting.",
    summary: [
      "Server firewall vs website firewall",
      "How Cloudflare local servers help",
      "Rules for login and contact forms",
      "Avoiding blocks on real customers",
    ],
    takeaways: [
      "A website firewall (WAF) inspects incoming web requests and blocks hacking attempts, fake form spam and brute-force logins before they hit your server.",
      "Cloudflare has local nodes in Johannesburg, Cape Town and Durban that speed up files locally while absorbing attack traffic.",
      "Lock down your hosting server IP so bots cannot bypass Cloudflare by connecting straight to your host.",
      "Limit repeat attempts on login and contact pages (`/wp-login.php`, `/api/contact/`) while keeping payment notifications and Google's scanner unblocked.",
      "A website firewall protects your perimeter, but you still need software updates, two-step logins and off-site backups.",
    ],
    sections: [
      {
        title: "Network firewalls vs Web Application Firewalls (WAF) decoded",
        body: [
          "Counting on your hosting provider's basic Linux firewall to stop WordPress or checkout attacks leaves a wide gap. Real customers and automated attack bots both enter through the exact same HTTPS port 443.",
        ],
        table: {
          caption: "Security layers on South African business websites",
          headers: ["Security layer", "What it blocks", "What slips past it"],
          rows: [
            [
              "Hosting server firewall",
              "Unused network ports like SSH, FTP or remote database access",
              "Plugin exploits, code injection and spam arriving over normal HTTPS web traffic",
            ],
            [
              "Cloudflare website firewall (WAF)",
              "Vulnerability scanners, login floods, spam bots and traffic spikes",
              "Stolen admin passwords without two-step login, or direct attacks on an exposed host IP",
            ],
            [
              "Locked-down app and access rules",
              "Rogue admin changes, fake payment callbacks and risky uploads",
              "Large traffic floods that overload your server before the app can respond",
            ],
          ],
        },
      },
      {
        title: "Why Cloudflare fits South African websites remarkably well",
        body: [
          "Years ago, routing a South African site through overseas security proxies added noticeable lag to every page load. Today Cloudflare runs local servers inside Johannesburg, Cape Town and Durban, keeping domain lookups and cached files local while dropping attack noise before it reaches your host.",
        ],
        subsections: [
          {
            heading: "Fast local domain lookups and Full (Strict) HTTPS",
            body: [
              "Using Cloudflare for your domain settings (DNS) and traffic routing brings fast lookups, smaller compressed files and **Full (Strict)** HTTPS security alongside custom firewall rules.",
            ],
          },
          {
            heading: "Hide and lock down your real server IP address",
            body: [
              "If old domain history sites or email records reveal your real hosting server IP, bots can skip Cloudflare by talking straight to that IP. Restrict your hosting firewall to accept web traffic only from Cloudflare's network, and keep company email off your web server IP.",
            ],
          },
        ],
      },
      {
        title: "Essential Cloudflare WAF and rate-limiting rules to set right away",
        body: [
          "Beyond Cloudflare's default protections, adding a few simple custom rules stops the worst automated noise targeting `.co.za` sites:",
        ],
        bullets: [
          "Limit repeated form sends on login and contact addresses (`/wp-login.php`, `/xmlrpc.php`, `/api/contact/`) to stop password guessing and inbox spam.",
          "Add extra checks or office IP limits on admin paths (`/wp-admin/`, excluding `admin-ajax`) if staff log in from steady South African offices.",
          "Block automated bots poking at hidden files like `.env`, `.git`, `wp-config.php~` and `/backup.sql` at the edge.",
          "Use gentle bot checks like Cloudflare Turnstile so automated spam browsers get stopped without slowing real buyers.",
        ],
        callout: {
          tone: "warning",
          heading: "Do not accidentally block PayFast, Yoco, Ozow or Google",
          text: "Blanket country blocks or aggressive browser challenges can stop server-to-server payment notifications from PayFast, Yoco or Ozow, leaving paid orders stuck as Pending.",
        },
      },
      {
        title: "Audit firewall logs safely without blocking real clients or search bots",
        body: [
          "Turning on harsh firewall rules right before a busy sales weekend without testing can block mobile shoppers sharing carrier IP addresses or stop Google's scan of your site.",
        ],
        numbered: [
          "Check Cloudflare Security > Events for 48 hours after adding a rule to catch false blocks against local mobile networks or search crawlers.",
          "Run URL Inspection > Test Live URL in Google Search Console (Google's free report on how your site shows up in search) to confirm Google reads your pages normally.",
          "Submit a test `/contact/` enquiry and run a sandbox checkout payment callback to prove nothing is silently blocked.",
        ],
        callout: {
          tone: "tip",
          heading: "Static Next.js sites still gain from Cloudflare rules",
          text: "Even without a database, Cloudflare rate limits protect your `/api/contact/` form from spam bursts and keep your domain settings tidy.",
        },
      },
      {
        title: "Keep origin servers updated: a WAF is armour, not a magic cure",
        body: [
          "Think of a Cloudflare website firewall like strong security gates and glass on a warehouse. It stops drive-by break-ins and buys you calm time to patch new software flaws, yet you still need timely updates, two-step login checks, minimal admin users and verified off-site backups inside.",
        ],
      },
      {
        title: "Avoiding common Cloudflare proxy mistakes on South African sites",
        body: [
          "Cloudflare works smoothly for most sites, yet two setup mistakes often trip small businesses up: turning the orange proxy cloud on for email subdomains, or caching dynamic admin and checkout pages.",
          "Check these two points right after connecting any `.co.za` domain to Cloudflare:",
        ],
        subsections: [
          {
            heading: "Leave email domain records on 'DNS Only' (grey cloud)",
            body: [
              "Cloudflare only handles web traffic by default, so NEVER turn the orange proxy cloud on for `mail.`, `smtp.`, `imap.` or `MX` records. Proxying mail subdomains breaks Outlook and phone email sync and can leak your real server IP unless left on grey-cloud DNS Only (or handled separately by Microsoft 365 or Google Workspace).",
            ],
          },
          {
            heading: "Keep caching off admin bars, carts and dynamic checkouts",
            body: [
              "Set Cloudflare cache rules so images, stylesheets and scripts cache locally, while dynamic WordPress dashboards (`/wp-admin/`) and WooCommerce `/cart/` or `/checkout/` pages bypass caching. Pre-built static pages can cache safely across all edge servers.",
            ],
          },
        ],
        bullets: [
          "Keep Cloudflare **Full (Strict)** HTTPS mode turned on with a real certificate on your web host.",
          "Check Firewall Events once a month to make sure new rules drop bots without blocking normal local mobile networks.",
          "Block direct port-443 traffic from non-Cloudflare IPs on your hosting firewall so scanners cannot go around Cloudflare.",
          "Test new custom firewall rules in Log mode first before switching them to Block on live checkout pages.",
        ],
      },
    ],
    midCta: {
      heading: "Want Cloudflare set up without breaking forms or checkouts?",
      text: "We set up Full (Strict) HTTPS, hide your hosting IP, add safe rate limits and test Google and payment gateway callbacks end to end.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Why WordPress sites get hacked", href: "/guides/why-wordpress-websites-get-hacked-south-africa/" },
      { label: "Stop contact form spam & bots", href: "/guides/stop-contact-form-spam-and-bots/" },
      { label: "Fix SSL privacy errors", href: "/guides/fix-your-connection-is-not-private-ssl/" },
    ],
    faqs: [
      {
        question: "Will adding Cloudflare slow our South African website down?",
        answer:
          "No, a properly set up Cloudflare account usually makes your website faster on South African phones. Cloudflare runs local servers in Johannesburg, Cape Town and Durban, so visitors load images and pages from nearby nodes instead of waiting on a busy hosting server while bad traffic is filtered out.",
      },
      {
        question: "Is Cloudflare Free sufficient for an ordinary SME service website?",
        answer:
          "Yes, Cloudflare's free plan gives most service businesses fast local domain lookups, basic flood protection, Full (Strict) HTTPS and custom rate-limit rules for login and contact forms. Larger online stores or busy client portals can upgrade to Cloudflare Pro for deeper managed web attack rules and image tools.",
      },
      {
        question: "Why can attackers sometimes still bypass a WAF like Cloudflare?",
        answer:
          "Attackers usually bypass a website firewall in one of two ways. Either your raw hosting server IP remained open to the public so bots connected straight to the host instead of going through Cloudflare, or hackers used stolen admin passwords on accounts without two-step login protection.",
      },
      {
        question: "Can enabling Cloudflare break company emails when updating nameservers?",
        answer:
          "Yes, it can break email if someone forgets to copy existing `MX`, `SPF`, `DKIM` and `DMARC` lines before switching nameservers, or turns the orange proxy cloud onto `mail.` or `smtp.` entries. Checking every email record first and leaving mail on grey-cloud 'DNS Only' avoids email outages.",
      },
      {
        question: "Should we enable 'Under Attack Mode' permanently for extra safety?",
        answer:
          "No, never leave 'Under Attack Mode' turned on full time. It forces every human visitor to wait through a five-second browser check before seeing your site, which drives away mobile shoppers and can block payment callbacks or search crawlers. Save it only for active traffic floods and DDoS emergencies.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "offsite-website-backups-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-03-25",
    title: "Why Built-In Hosting Backups Aren't Enough (And How Off-Site Recovery Works)",
    metaTitle: "Off-Site Website Backups & Recovery SA | SoftKore",
    description:
      "Why same-server hosting backups fail during hacks or outages, and how encrypted off-site backups with regular test restores protect South African sites.",
    intro:
      "Relying on your hosting plan's nightly backup leaves many businesses stuck when a real outage or hack happens. If server-wide ransomware hits, a hosting account gets suspended, or hidden malware overwrites seven-day host snapshots, a backup sitting on the same server fails right when you need it.",
    summary: [
      "Where standard host backups fail",
      "Keeping copies off the main server",
      "What every full backup must save",
      "Why untested backups fail in crises",
    ],
    takeaways: [
      "Never keep your only backup inside the same hosting server, cPanel account or cloud login as your live website.",
      "Short 7-day hosting snapshots often contain malware when a quiet plugin hack goes unnoticed for weeks.",
      "Store encrypted off-site backups in write-only cloud storage so a hacked website cannot delete older clean copies.",
      "Back up your full site code, `uploads/` media, SQL database and a safe offline copy of `.env` settings and passwords.",
      "Test a full restore onto a private preview server every quarter, because an untested backup is only a guess.",
    ],
    sections: [
      {
        title: "Four ways default cPanel or plugin backups fail during real crises",
        body: [
          "Trusting a host's default backup tick-box or a free WordPress plugin that drops `.zip` archives inside `/wp-content/backups/` fails in four common ways:",
        ],
        table: {
          caption: "Same-server host snapshots vs independent off-site backups",
          headers: ["What goes wrong", "Risk with same-server backups", "How off-site backups survive"],
          rows: [
            [
              "Server lock or cPanel hack",
              "Hackers delete or lock your backup files alongside the live site",
              "Write-only cloud storage keys stop the live server erasing old snapshots",
            ],
            [
              "Host suspension or disk failure",
              "An account lock cuts off your live site and your backups together",
              "Restore the full site onto a fresh South African host in roughly 2 hours",
            ],
            [
              "Quiet hack lasting 3+ weeks",
              "Every snapshot in a 7-day rolling host window is already infected",
              "30 to 90 days of history keeps older clean restore points safe",
            ],
            [
              "Broken database export",
              "You only discover a cut-off database dump mid-emergency",
              "Quarterly private preview restore tests prove files and databases work",
            ],
          ],
        },
        callout: {
          tone: "warning",
          heading: "Delete local `.zip` backup files from public web folders",
          text: "Some WordPress backup plugins leave `site-backup-2026.zip` files in guessable public folders where bots can download your database and passwords over the web.",
        },
      },
      {
        title: "Set up tamper-proof off-site backups on a normal SME budget",
        body: [
          "Cloud storage makes off-site website backups cheap and reliable for South African businesses, as long as access keys and storage history follow two clear rules.",
        ],
        subsections: [
          {
            heading: "Give your live server write-only backup access",
            body: [
              "Set up your backup storage key so the live web server can only upload new copies, never delete or overwrite older ones. Even if someone breaks into your website server, they cannot wipe last week's or last month's clean backup.",
            ],
          },
          {
            heading: "Keep backup history past seven days",
            body: [
              "Save daily copies for 14 days, weekly copies for 8 weeks and monthly copies for 6 to 12 months. Deeper history stops a quiet month-old backdoor from ruining every restore point you have.",
            ],
          },
        ],
      },
      {
        title: "Confirm backups capture every part of your site, not half of it",
        body: [
          "Saving only your database or only your theme leaves you stranded when rebuilding after a crash. Check that every piece below is covered:",
        ],
        bullets: [
          "Full site source code stored in private Git version control (vital for Next.js and custom builds), plus all editing system core, plugin and theme files.",
          "Complete media `uploads/` folders, product photos and downloadable PDFs.",
          "Clean database exports taken safely without corrupting live online store orders.",
          "Offline copies of `.env` or `wp-config.php` settings, payment keys and exported domain settings stored safely in your company password vault.",
        ],
      },
      {
        title: "Test restores quarterly because untested backups are guesswork",
        body: [
          "Many business owners discover on the worst possible day that their database export stopped halfway through, images went missing or newer PHP versions broke the restored site.",
        ],
        numbered: [
          "Book a 45-minute restore test once every three months.",
          "Download your latest off-site files and database onto an isolated, password-locked private preview server.",
          "Open the restored preview site and test the homepage, images, admin logins, search and `/contact/` form submissions.",
          "Note how long the full restore took so your team knows what to expect in a real emergency.",
        ],
        callout: {
          tone: "tip",
          heading: "Static Next.js sites stored in Git restore in minutes",
          text: "Rebuilding a static Next.js site from a private Git repository onto fresh hosting takes minutes, leaving only form logs, media files and domain settings to back up.",
        },
      },
      {
        title: "POPIA data protection rules apply to stored backups too",
        body: [
          "Every backup holding enquiry logs, subscriber lists, job CVs or online store invoices holds personal information protected by POPIA Section 19. Encrypt backups while moving and while stored, limit access keys to trusted admins, pick Johannesburg or Cape Town cloud storage where practical and remove overly old copies you no longer need.",
        ],
      },
      {
        title: "Building a realistic disaster recovery runbook (RTO & verification)",
        body: [
          "Having encrypted backups stored safely in Johannesburg or Europe helps far less if nobody wrote down how to decrypt keys, connect domain settings and restore the database under pressure. A simple one-page recovery guide turns a scary outage into clear steps.",
          "Save these four details inside your company password vault before an incident ever happens:",
        ],
        subsections: [
          {
            heading: "Set clear recovery time and data-loss targets",
            body: [
              "An online store taking 40 orders a day cannot lose a week of order records, so it needs daily or hourly database backups plus off-site order emails. A simple brochure site tracked in private Git recovers in minutes from a fresh rebuild plus a weekly backup of form logs.",
            ],
          },
          {
            heading: "Keep backup keys and domain exports outside web hosting",
            body: [
              "Never leave backup bucket keys inside a text note in cPanel. Store cloud storage keys, `.env` passwords, domain registrar steps and exported domain settings inside a shared company password vault that directors and key staff can reach if hosting goes down.",
            ],
          },
        ],
        bullets: [
          "Make sure quarterly preview tests check mobile pages, live `/contact/` emails and the secure HTTPS connection, not just file downloads.",
          "Delete huge unencrypted `backup-*.zip` files from your web hosting disk once your off-site cloud backups are confirmed.",
        ],
      },
    ],
    midCta: {
      heading: "Never tested restoring your website backups from scratch?",
      text: "We check your current backups, replace risky same-server zip files with encrypted off-site storage and run a real preview restore test.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Hacked website recovery guide SA", href: "/guides/hacked-website-recovery-south-africa/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
    ],
    faqs: [
      {
        question: "How often should a South African business run off-site website backups?",
        answer:
          "Active online stores and sites edited daily need automated daily off-site backups of both files and the database, plus a manual copy before any major update. Stable brochure or static websites backed up in private Git work well with weekly snapshots and a checkpoint saved before every code change.",
      },
      {
        question: "How long does restoring an entire site take when backups are clean?",
        answer:
          "Once verified backup files, password-vault secrets and domain registrar logins are ready, restoring a complete website onto fresh hosting usually takes 30 minutes to 2 hours. Larger online stores with gigabytes of product photos or database records can take a little longer while files transfer.",
      },
      {
        question: "Should company email backups sit together inside website cPanel archives?",
        answer:
          "No, keep business email completely separate from your website hosting on Microsoft 365 or Google Workspace. Mixing gigabytes of staff mailboxes into web cPanel backups slows restores down and creates a single point of failure. Use dedicated cloud email archiving if your industry requires long mail retention.",
      },
      {
        question: "Do encrypted offshore cloud backup buckets comply with POPIA?",
        answer:
          "Yes, under POPIA Section 72, storing personal data on servers outside South Africa is allowed when you use strong encryption and confirm the provider offers proper privacy safeguards. Whenever possible, choosing Johannesburg or Cape Town cloud storage keeps your customer backups safely inside South Africa.",
      },
      {
        question: "Can SoftKore set up isolated off-site backups without changing our web host?",
        answer:
          "Yes, our [website security](/services/website-security/) team can connect automated, encrypted off-site backups alongside your existing hosting plan without moving your website or email. We store clean daily or weekly snapshots in write-only cloud storage, keep access keys off your server and run regular preview test restores.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "http-security-headers-explained",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-04-15",
    title: "HTTP Security Headers Explained: HSTS, CSP & Clickjacking Protection",
    metaTitle: "HTTP Security Headers Explained (HSTS, CSP) | SoftKore",
    description:
      "Plain guide to browser security settings (HTTP security headers) for SA sites: HSTS, Content-Security-Policy, clickjacking blocks and safe rollouts.",
    intro:
      "Most local business sites fail online safety checks because they miss five short browser settings, called HTTP security headers. Adding these rules tells Chrome and Safari to block fake plain-text links, hidden click traps and rogue scripts before a page loads.",
    summary: [
      "What browser settings do",
      "Four safe rules to add first",
      "Rolling out CSP without errors",
      "Where to place your header rules",
    ],
    takeaways: [
      "Browser security rules load before your web page. They stop common browser tricks without slowing your site down.",
      "Add four low-risk rules first: `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy`.",
      "Turn on `Strict-Transport-Security` (HSTS) only after you know your HTTPS cert renews well on both `www` and the bare domain.",
      "Test `Content-Security-Policy-Report-Only` in watch mode first so Google Maps, stats tools and PayFast popups do not break.",
      "Add rules in Nginx or Cloudflare, because static Next.js exports ignore server rules in `next.config`.",
    ],
    sections: [
      {
        title: "Essential HTTP security headers decoded in plain language",
        body: [
          "Before Chrome, Safari or Firefox draws your web page, your server sends a short set of hidden rules. These browser security settings tell the browser which scripts may run, who may frame your site and how to handle HTTPS.",
        ],
        table: {
          caption: "Recommended browser security settings for South African sites",
          headers: ["Header name", "Recommended setting", "What it protects against"],
          rows: [
            [
              "`Strict-Transport-Security` (HSTS)",
              "`max-age=31536000; includeSubDomains` (after HTTPS checks)",
              "Stops public Wi-Fi snoops forcing users onto an unencrypted `http://` link",
            ],
            [
              "`X-Content-Type-Options`",
              "`nosniff`",
              "Stops browsers guessing file types and running bad scripts hidden in images",
            ],
            [
              "`X-Frame-Options` / CSP",
              "`DENY` or `frame-ancestors 'none'`",
              "Stops scammers hiding your login or contact buttons in a hidden frame",
            ],
            [
              "`Referrer-Policy`",
              "`strict-origin-when-cross-origin`",
              "Stops full private page links leaking when someone clicks an outside link",
            ],
            [
              "`Permissions-Policy`",
              "`camera=(), microphone=(), geolocation=()`",
              "Blocks added widgets from asking for camera, mic or location access",
            ],
          ],
        },
      },
      {
        title: "Enable the four safe baseline headers right away",
        body: [
          "Many owners hold back on browser settings because they fear locking users out. Four basic rules (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy`) are safe on almost every site. They lift your safety score right away.",
        ],
        subsections: [
          {
            heading: "Check HTTPS renewals before setting HSTS to one year",
            body: [
              "HSTS tells Chrome never to drop back to plain HTTP. It also hides the bypass button if your cert expires. Test a short `max-age=3600` first once both `www` and your bare domain have valid HTTPS, then raise it to `31536000`.",
            ],
          },
          {
            heading: "Blocking external frames will not hide your Google Map",
            body: [
              "`X-Frame-Options: DENY` stops *other sites* from wrapping *your pages* inside a hidden frame for click traps. It does not stop you showing a Google Map on your own `/contact/` page.",
            ],
          },
        ],
        callout: {
          tone: "warning",
          heading: "Leave off `includeSubDomains` if any subdomain lacks HTTPS",
          text: "Turning on HSTS `includeSubDomains` when `mail.yourdomain.co.za` or an old `crm.` tool lacks a valid HTTPS cert will lock your staff out of those sites.",
        },
      },
      {
        title: "Deploy Content-Security-Policy (CSP) safely without breaking embeds",
        body: [
          "CSP blocks injected hack scripts and card-skimming code. It gives the browser an exact list of trusted domains allowed to load scripts, fonts, styles and frames on your site.",
          "Turning on a tight CSP list too fast can block Google Tag Manager, embedded maps or PayFast popups. Roll it out in three calm steps:",
        ],
        numbered: [
          "Start with `Content-Security-Policy-Report-Only`. List your own site (`'self'`) plus your stats, map and payment domains.",
          "Click through each page type, especially forms, FAQs, maps and store checkouts. Watch Chrome DevTools Console for any blocked items.",
          "Add any missed trusted tools to your list, then switch from `Report-Only` to live CSP.",
        ],
      },
      {
        title: "Where headers belong: Nginx / Cloudflare edge vs WordPress plugins",
        body: [
          "Skip heavy WordPress header plugins that slow down PHP requests and miss cached files or PDFs. Put these rules once inside your Nginx server config, Apache file or Cloudflare Transform Rules.",
        ],
        bullets: [
          "Nginx or Apache layer: sends the same rules on every HTML page, PDF and form call without extra work.",
          "Static Next.js tip: pure `output: 'export'` sites on Nginx ignore rules inside `next.config.ts`. Put them in your live Nginx or Cloudflare setup instead.",
          "Add short notes in your config explaining why each map, stats or payment domain is on your CSP list.",
        ],
        callout: {
          tone: "tip",
          heading: "Check live headers after every server change",
          text: "Run `curl -I https://www.yourdomain.co.za/` from a terminal after updates so you know your proxy did not drop or repeat a header line.",
        },
      },
      {
        title: "Keep the same headers on redirects, forms and 404 pages",
        body: [
          "Do not check only your home page. Spot-check your 404 'not found' page, `/contact/` form calls and `www` redirects so your browser settings match everywhere.",
        ],
      },
      {
        title: "Example Nginx and Cloudflare header setups that keep tools working",
        body: [
          "Seeing a working sample shows how short and light these rules really are. Six simple lines in your web server or Cloudflare setup protect every page without extra plugins.",
          "Here is how to keep maps, stats and payment scripts running safely alongside strong browser rules:",
        ],
        subsections: [
          {
            heading: "Practical Nginx and Cloudflare starter settings",
            body: [
              "Most business sites need `Strict-Transport-Security: max-age=31536000; includeSubDomains` (once HTTPS works), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin` and `Permissions-Policy: camera=(), microphone=(), geolocation=()`. Skip old flags like `X-XSS-Protection: 1; mode=block`, which modern browsers no longer use.",
            ],
          },
          {
            heading: "Allowing Google Analytics, Maps and PayFast inside CSP",
            body: [
              "In your CSP rule, name exact trusted tools instead of using wide `*` wildcards. Set `default-src 'self'`, allow `https://www.googletagmanager.com` for stats, allow `frame-src https://www.google.com` for your contact map, and keep `frame-ancestors 'none'` so outsiders cannot frame your pages.",
            ],
          },
        ],
        bullets: [
          "Check live rules after each deploy with `curl -sI https://www.yourdomain.co.za/ | grep -iE 'strict|content-security|x-frame|nosniff|referrer'`.",
          "In Nginx, adding `add_header` inside a static file `location` block wipes out parent headers unless you include the shared snippet there too.",
          "Never paste giant random CSP strings from the web, because `'unsafe-inline'` or wide wildcards weaken real script defence.",
          "Check Chrome DevTools Console when adding a chat widget, CRM form or payment popup so nothing gets blocked by mistake.",
        ],
        callout: {
          tone: "note",
          heading: "Watch Nginx child location blocks",
          text: "In Nginx files, adding `add_header Cache-Control` inside an image block hides top-level rules like `HSTS` and `nosniff` unless both sit in a shared include file.",
        },
      },
    ],
    midCta: {
      heading: "Failing website security header checks right now?",
      text: "We set up clean browser security settings in Nginx or Cloudflare, test CSP around your maps and analytics and check HSTS safely.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "Fix SSL privacy errors", href: "/guides/fix-your-connection-is-not-private-ssl/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Website security audit checks", href: "/guides/website-security-audit-what-it-checks/" },
    ],
    faqs: [
      {
        question: "Do missing HTTP security headers hurt Google organic rankings directly?",
        answer:
          "No, missing HTTP security headers do not trigger a direct penalty from Google. However, leaving browser guardrails off makes it easier for hackers to inject fake scripts or run clickjacking scams on your pages. If your site gets hacked or flagged by Safe Browsing, your search traffic can drop fast.",
      },
      {
        question: "Will adding CSP break Google Analytics, Tag Manager or WhatsApp links?",
        answer:
          "Not if you test Content-Security-Policy in `Report-Only` mode first. Watch mode shows every analytics script, Google Map, payment popup or chat tool your site loads before anything gets blocked. Once those trusted addresses sit on your allowlist, normal WhatsApp links and Google tracking tools keep working without errors.",
      },
      {
        question: "Do strict framing headers prevent Googlebot or social shares working?",
        answer:
          "No, blocking frames with `X-Frame-Options` or `frame-ancestors 'none'` does not stop Google's scanner or social previews from working. Search engines read your HTML text directly, and WhatsApp, LinkedIn and Facebook still pull your page title and preview image from normal meta tags without needing to frame your site.",
      },
      {
        question: "Should we keep BOTH X-Frame-Options AND CSP frame-ancestors?",
        answer:
          "Yes, keeping both is simple and safe. Modern browsers like Chrome, Safari and Edge follow CSP `frame-ancestors 'none'`, while older browsers and basic security scanners still look for `X-Frame-Options: DENY`. Adding both one-line rules takes seconds and makes sure every browser blocks hidden clickjacking frames consistently.",
      },
      {
        question: "Can SoftKore check and deploy security headers on an existing server?",
        answer:
          "Yes, through our [website security](/services/website-security/) service we check the headers your site sends today, test which analytics, maps and payment scripts your pages rely on, and add the right rules in Nginx, Apache or Cloudflare without taking your site offline or breaking live enquiry forms.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "stop-contact-form-spam-and-bots",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-05-06",
    title: "How to Stop Contact Form Spam and Bots Without Breaking Real Enquiries",
    metaTitle: "Stop Contact Form Spam & Bot Submissions | SoftKore",
    description:
      "Stop bots flooding your contact inbox using server checks, rate limits, hidden honeypots and Turnstile without driving away real South African enquiries.",
    intro:
      "Deleting thirty fake crypto pitches out of your inbox each morning wastes time and hides real customer leads. Adding awkward picture puzzles to your contact form is just as bad, because impatient buyers on phones give up and move on.",
    summary: [
      "Why browser-only checks fail",
      "Server checks and rate limits",
      "Invisible traps bots fall into",
      "Making sure real leads arrive",
    ],
    takeaways: [
      "HTML `required` fields and browser JavaScript checks stop zero spam, because bots send data straight to your form endpoint.",
      "Add strict server validation, text length limits and IP rate limits on both your server and your Cloudflare website firewall.",
      "Use an accessible hidden honeypot field so dumb bots drop silently while real buyers never notice a thing.",
      "If clever bots still get through, pick invisible Cloudflare Turnstile instead of annoying traffic-light picture quizzes.",
      "Send yourself a quick test enquiry every month so you know spam filters never swallow real customer messages.",
    ],
    sections: [
      {
        title: "Why browser validation never slows automated contact bots",
        body: [
          "Real visitors open your site, pick a service and tap Send. Automated bots skip the web page, read your form endpoint (`/api/contact/` or `/wp-admin/admin-ajax.php`), and send hundreds of raw requests straight to your server while ignoring browser rules completely.",
          "Real spam control lives on your website firewall and server form handler, never inside browser code alone.",
        ],
        table: {
          caption: "Contact form anti-spam options compared",
          headers: ["Protection step", "Stops spam bots?", "Impact on phone buyers", "Where it runs"],
          rows: [
            [
              "HTML `required` or browser checks only",
              "No, bots send requests directly",
              "None",
              "Visitor browser only (not real security)",
            ],
            [
              "Server checks and rate limits",
              "High, blocks floods and header tricks",
              "Zero friction for real buyers",
              "Form API, Nginx or Cloudflare firewall",
            ],
            [
              "Hidden honeypot and timing check",
              "High against common bulk bots",
              "Invisible to people and screen readers",
              "Hidden HTML field plus server drop rule",
            ],
            [
              "Cloudflare Turnstile vs picture puzzles",
              "Very high against smart browser bots",
              "Turnstile is smooth; picture grids lose leads",
              "Edge token checked on your server",
            ],
          ],
        },
      },
      {
        title: "Layer 1: Enforce server validation, clean inputs and rate limits",
        body: [
          "Treat every incoming form message as untrusted input. That stops spam floods and helps meet POPIA Section 19 rules for safe data handling.",
        ],
        bullets: [
          "Check every field on the server: set sensible text length limits, check email format and allow only valid dropdown options.",
          "Block newline characters (`\\r\\n`) inside name and subject fields so bots cannot hijack email headers.",
          "Set Cloudflare or Nginx rate limits so one IP address sending too many requests gets an `HTTP 429` pause.",
          "Reject messages stuffed with repeated spam links without blocking normal customers who mention their own website.",
        ],
        callout: {
          tone: "warning",
          heading: "Never put mail or CRM keys inside browser code",
          text: "Send form alerts through a server-side handler where Resend, Postmark or CRM secrets stay safely hidden in server environment settings.",
        },
      },
      {
        title: "Layer 2: Deploy invisible honeypots and low-friction verification",
        body: [
          "Quiet server traps block most automated spam before any human visitor notices extra steps.",
        ],
        subsections: [
          {
            heading: "How an accessible hidden honeypot works",
            body: [
              "Add an extra decoy field like `name='website_url'` and hide it off-screen with CSS, `tabIndex={-1}` and `aria-hidden='true'`. Real shoppers and screen readers skip right past it, while dumb bots fill in every box and get quietly dropped by your server.",
            ],
          },
          {
            heading: "Choose Cloudflare Turnstile over blurry picture grids",
            body: [
              "When smart browser bots beat a honeypot, use an invisible Cloudflare Turnstile check verified on your server instead of picture puzzles that often freeze inside WhatsApp or Instagram mobile browsers.",
            ],
          },
        ],
      },
      {
        title: "Protect enquiry rates while stopping bots",
        body: [
          "Overly harsh firewall blocks can accidentally trap South African shoppers sharing mobile data IP addresses or office VPNs without giving any warning. Log blocked sends privately for review, and keep plain backup options like a clickable phone number, email address and WhatsApp link right beside your form on `/contact/`.",
        ],
        callout: {
          tone: "tip",
          heading: "Test your contact form from your phone each month",
          text: "Take 30 seconds once a month to send a real test on `/contact/` over mobile data so you know leads clear spam filters and land in your inbox fast.",
        },
      },
      {
        title: "End-to-end contact pipeline hygiene in 4 steps",
        body: [
          "Pair form protection with verified domain email settings so real customer leads reach your inbox quickly instead of sitting in Gmail junk:",
        ],
        numbered: [
          "Add IP rate limits on your form URL at Nginx or your Cloudflare website firewall.",
          "Check every field on the server and include an invisible honeypot field.",
          "Send notification emails through a verified mail service matching your SPF, DKIM and DMARC domain settings.",
          "Show clear typo hints on the form and keep direct phone and WhatsApp buttons nearby.",
        ],
      },
      {
        title: "Checking why real leads go missing vs stopping spam",
        body: [
          "Blocking every spam bot means nothing if strict rules also swallow two real R80,000 quote requests. Telling real filter blocks apart from mail delivery bugs makes sure no buyer slips away unseen.",
          "Watch these common edge cases around your form and email alerts:",
        ],
        subsections: [
          {
            heading: "Watch edge cases that trip aggressive timers",
            body: [
              "Some overly strict filters block real buyers: directors sending brief notes on an office VPN, browser autofill completing fields in under two seconds, or buyers pasting a project link into the message box. Keep timing checks sensible (under about 800 ms) and log blocked attempts instead of deleting them blindly.",
            ],
          },
          {
            heading: "Watch server errors and email domain alignment",
            body: [
              "Owners often blame the form when the web server actually worked, and an unverified PHP email simply bounced into Microsoft 365 Quarantine. Watch your form API status codes and mail sender bounce logs so a broken mail key gets spotted within minutes.",
            ],
          },
        ],
        bullets: [
          "Keep clickable `tel:`, `mailto:` and WhatsApp links beside your form on `/contact/`.",
          "Update server dropdown allowlists whenever you add new services or budget options so real sends are never rejected.",
          "Set server alerts if `/api/contact/` returns `HTTP 500` errors so an expired mail API key does not lose weeks of leads.",
          "Review your spam logs every few months as automated bot scripts change tactics.",
        ],
      },
    ],
    midCta: {
      heading: "Drowning in form spam, or worried real enquiries are missing?",
      text: "We lock down contact forms with rate limits, invisible bot traps, verified domain email delivery and live mobile inbox tests.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "Website firewall & Cloudflare SA", href: "/guides/website-firewall-waf-cloudflare-south-africa/" },
      { label: "SPF, DKIM & DMARC guide SA", href: "/guides/spf-dkim-dmarc-guide-south-africa/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
    ],
    faqs: [
      {
        question: "Why does spam still arrive when every form field says required?",
        answer:
          "HTML `required` tags only guide human visitors inside a web browser. Spam bots do not tap buttons on your page; they read the form's destination web address and send raw automated requests straight to your server, completely bypassing browser rules unless you add server checks and rate limits.",
      },
      {
        question: "Do interactive image CAPTCHAs hurt lead conversion rates noticeably?",
        answer:
          "Yes, multi-screen picture puzzles frustrate buyers on small mobile screens and often fail to load properly inside WhatsApp or Instagram in-app browsers. Many busy South African prospects simply close the tab. Using server checks, an invisible honeypot field and Cloudflare Turnstile stops bots while keeping enquiries smooth.",
      },
      {
        question: "Is enquiry form abuse tied to POPIA and cyber security?",
        answer:
          "Yes, unguarded contact forms are both a security risk and a POPIA concern. Bots can abuse unprotected forms to send spam through your domain, inject harmful script code into staff dashboards, or flood your inbox until real customer POPIA access or deletion requests get missed.",
      },
      {
        question: "What response should bots see when triggering our honeypot?",
        answer:
          "Your server should return a normal generic success or validation reply while quietly skipping the email send and database save. Showing an angry error message tells bot writers their script was caught, whereas a quiet fake success wastes their time without alerting them to change their code.",
      },
      {
        question: "Can SoftKore fix form spam on older WordPress Contact Form 7 or WPForms setups?",
        answer:
          "Yes, our [website security](/services/website-security/) service cuts spam on Contact Form 7, WPForms and Gravity Forms without clumsy picture puzzles. We add Cloudflare firewall rate limits on your form endpoint, enable invisible Turnstile or honeypot checks, remove risky mail plugins and route notifications through a verified mail service.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "website-security-audit-what-it-checks",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-05-27",
    title: "What a Professional Website Security Audit Actually Checks (And What You Receive)",
    metaTitle: "What a Website Security Audit Checks (SA) | SoftKore",
    description:
      "Inside a South African website security audit: why free online scans miss real risks, what manual checks cover and what your plain-English fix plan includes.",
    intro:
      "A quick 5-minute web scan checks only public pages. It often misses old ex-developer logins, open database files and broken backups. A real security audit pairs scan tools with a hands-on check of your code, logins, hosting, domain settings and forms.",
    summary: [
      "Why free online scans miss risks",
      "Code, plugins and login checks",
      "Hosting, HTTPS, firewall and domain",
      "What your plain-English fix plan shows",
    ],
    takeaways: [
      "Free web scanners read public pages only. They cannot check your server logins, backup restores or leaked keys.",
      "A full audit checks four parts: code and plugins, hosting and backups, HTTPS and firewall rules, and POPIA form safety.",
      "Checking Google Search Console (Google's free report on how your site shows up in search) finds hidden spam links that office browsers miss.",
      "You get a short, ranked fix plan in plain words instead of 80 pages of raw scan noise.",
      "Closing gaps early costs far less than emergency hack cleanup and lost Google traffic.",
    ],
    sections: [
      {
        title: "Why automated 'PDF vulnerability scans' leave giant blind spots",
        body: [
          "Web scanners ping your public pages and look for basic clues like old headers or an expired cert. They cannot check if a past contractor still owns your domain or if your backups work.",
        ],
        table: {
          caption: "Online scans vs hands-on website security audits",
          headers: ["Area checked", "Free online scan alone", "Manual and online audit"],
          rows: [
            [
              "Code and plugins",
              "Guesses version numbers from public page links",
              "Checks exact plugins, custom code, upload folders and npm flaw lists",
            ],
            [
              "Hosting and logins",
              "Blind to anything behind your server login",
              "Checks hosting, SSH and admin users, two-step logins and old preview folders",
            ],
            [
              "Backups and recovery",
              "Cannot see backups or test a restore",
              "Checks off-site encryption, backup history and a preview restore test",
            ],
            [
              "Forms and checkouts",
              "Reads only public form HTML tags",
              "Tests server checks, rate limits, hidden keys and PayFast or Yoco callbacks",
            ],
            [
              "Email and domain control",
              "Runs a basic domain lookup only",
              "Checks `.co.za` owner records, transfer locks, old subdomains and DMARC",
            ],
          ],
        },
      },
      {
        title: "Codebase, plugins, hosting access and backup inspection scope",
        body: [
          "A real audit checks your site from the inside out across files, hosting logins and backup safety. It goes much deeper than skimming your home page.",
        ],
        subsections: [
          {
            heading: "Site files, plugins and form checks",
            body: [
              "We check WordPress core and plugin updates, signs of cracked plugins and npm warnings. We also look for `.php` files hiding in upload folders, leaked `.env` keys in browser code, and weak checks on contact or checkout routes.",
            ],
          },
          {
            heading: "Hosting logins, permissions and backup restore checks",
            body: [
              "We list every admin across your editing system, hosting panel, FTP, SSH, database and Google Search Console. That spots past staff, missing two-step logins, old `/dev/` or `/test/` preview folders and untested backups.",
            ],
          },
        ],
      },
      {
        title: "Perimeter SSL/TLS, security headers, WAF, DNS and POPIA exposure",
        body: [
          "From the outside, the audit checks what visitors, mail tools and Google's scan of your site see when they connect:",
        ],
        bullets: [
          "HTTPS security certs covering both your bare domain and `www`, Cloudflare **Full (Strict)** mode and direct HTTPS redirects.",
          "Missing browser security settings (HTTP headers such as `HSTS`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `CSP`).",
          "Cloudflare website firewall (WAF) rate limits on login and contact pages, plus whether your real hosting IP stays hidden.",
          "ZACR `.co.za` owner details, EPP transfer locks, old subdomain cleanup and matching `SPF`, `DKIM` and `DMARC` email rules.",
          "Google Search Console Security Issues plus basic POPIA Section 19 form checks, such as extra fields, dead trackers or exposed customer files.",
        ],
        callout: {
          tone: "note",
          heading: "Safe checks keep your live site online",
          text: "Hands-on file, login and domain checks run safely in read-only mode or on private preview copies. Your live store stays online during trade hours.",
        },
      },
      {
        title: "What your final report and ranked fix plan delivers",
        body: [
          "Forget scary 80-page PDF reports filled with raw codes nobody explains. Your fix plan groups tasks into three clear levels:",
        ],
        numbered: [
          "Urgent fixes (fix in 24 to 72 hours): signs of hacks, open backup files, unguarded payment callbacks or old staff logins without two-step checks.",
          "High-priority locks (fix in 2 to 4 weeks): browser security settings, firewall rate limits, off-site encrypted backups and DMARC email blocks.",
          "Ongoing care habits: regular updates, quarterly preview restore tests and live uptime and HTTPS alerts.",
        ],
        callout: {
          tone: "tip",
          heading: "Clear steps for your developer or our team",
          text: "Each line says where the gap sits, what risk it brings in plain words, and how to fix it. Your own developer or our team can act on it straight away.",
        },
      },
      {
        title: "When South African SMEs should book an audit before an emergency hits",
        body: [
          "Waiting until Google blocks your traffic turns a calm check into a costly rush job. Book an early audit at these key times:",
        ],
        bullets: [
          "Right after switching web agencies, freelancers or marketing staff.",
          "Before putting larger Google Ads budgets behind an older WordPress or WooCommerce site.",
          "Before launching online payments, client portals or sensitive POPIA intake forms.",
          "Once a year as basic care for legal, accounting, medical and B2B firms.",
        ],
      },
      {
        title: "Illustrative audit findings: common gaps manual reviews catch",
        body: [
          "Free web tools often miss the small human slip-ups behind real site break-ins. Looking at common gaps from manual checks shows why testing code, logins and domain settings pays back.",
          "As an illustrative example, a first review of an older firm's site often finds hidden risks behind a clean home page:",
        ],
        subsections: [
          {
            heading: "Old supplier logins and public server leftovers",
            body: [
              "A login check often finds active admin users from former interns or an old agency with no two-step login. Beside them, an open `website-old-2023.sql` file may sit in a `/backup/` folder where bots can download client rows over the web.",
            ],
          },
          {
            heading: "Unused subdomains and weak form or payment links",
            body: [
              "Domain checks often spot old campaign `CNAME` links pointing to closed tools that scammers can claim. Code checks also catch browser forms holding secret CRM keys or store links that skip checking the payment gateway's security signature.",
            ],
          },
        ],
        bullets: [
          "Make sure your written audit covers code, hosting logins, domain settings, email rules and Google Search Console together.",
          "Book a short check every 6 months or after developer changes so new tools do not open old doors.",
          "Keep signed records of fixed items and backup restore tests as proof of POPIA Section 19 care.",
        ],
      },
    ],
    midCta: {
      heading: "Want a clear view of where your website is exposed today?",
      text: "Book a hands-on website security audit. We inspect your code, logins, hosting, backups, domain settings and POPIA form safety and give you a ranked fix plan.",
      href: "/services/website-security/",
      label: "Request a security audit",
    },
    related: [
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Hacked website recovery guide SA", href: "/guides/hacked-website-recovery-south-africa/" },
    ],
    faqs: [
      {
        question: "Will running a full security audit take our live website offline?",
        answer:
          "No, a security audit will not take your live website or online store offline. We save safe backups first, inspect files and server settings in read-only mode, and test any risky changes on a private preview copy so your customers can keep browsing and submitting enquiries without interruption.",
      },
      {
        question: "What logins or access do we need to share for a real security audit?",
        answer:
          "First checks look at your public website, HTTPS security certificate and domain records without any logins. For the full hands-on audit, we ask for temporary access to your editing system or code repository, hosting panel, Cloudflare or domain settings and Google Search Console so nothing stays hidden.",
      },
      {
        question: "Does passing an audit guarantee zero future cyber attacks?",
        answer:
          "No honest provider can promise zero future attacks, because new software flaws and scams appear every week. An audit closes existing gaps and puts strong locks in place. Staying safe long term comes from regular software updates, two-step logins, encrypted off-site backups and ongoing uptime and security checks.",
      },
      {
        question: "Can SoftKore handle fixing every finding listed in our audit report?",
        answer:
          "Yes, you keep the plain-English fix plan outright and choose how to handle the work. Your internal developer can use our checklist directly, or our [website security](/services/website-security/) team can fix part or all of the list, from plugin updates and firewall rules to domain and email locks.",
      },
      {
        question: "How long does a typical South African SME website security audit take?",
        answer:
          "A focused website security audit usually takes 3 to 5 working days once temporary access to your code, hosting, domain settings and Google Search Console is confirmed. Larger online stores or websites recovering from an active hack can take a few extra days for deeper file and log checks.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
  {
    slug: "protecting-domain-hijacking-co-za",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-06-17",
    title: "How to Protect Your .co.za Domain and DNS From Hijacking and Expired Renewals",
    metaTitle: "Protect Your .co.za Domain From Hijacking | SoftKore",
    description:
      "Stop .co.za domain hijacking, unauthorised DNS edits and missed renewals using ZACR ownership checks, EPP transfer locks and two-factor login protection.",
    intro:
      "Every week, South African firms see their website and company email go dead together because of an expired domain bill, an ex-agency still holding `.co.za` ownership, or stolen domain logins. Locking down your domain and DNS settings takes about twenty minutes once you know which locks to turn on.",
    summary: [
      "Checking legal .co.za ownership",
      "Turn on EPP lock and 2FA",
      "Stopping missed renewal outages",
      "Quarterly domain setting checks",
    ],
    takeaways: [
      "Check WHOIS records right now to confirm your legal company owns your `.co.za` domain, not an outside freelancer.",
      "Turn on app-based two-factor login checks (2FA) on both your domain registrar and your external DNS account (such as Cloudflare).",
      "Keep your EPP transfer lock (`clientTransferProhibited`) turned on at all times for main and spare domains.",
      "Turn auto-renew on with a company card and list two backup email addresses outside your own `.co.za` domain.",
      "Clean out old `CNAME` subdomain records every quarter so scammers cannot hijack cancelled software links.",
    ],
    sections: [
      {
        title: "Verify legal .co.za registrant ownership under ZACR today",
        body: [
          "A nasty surprise hits many companies when changing suppliers or finance tools: they learn their `.co.za` domain sits inside a former freelancer's reseller account under *their* name and email.",
          "In South Africa, ZACR (the registry that manages `.co.za` domains) sends transfer approval requests straight to the listed domain owner email. Log into your registrar (the company where you pay for the domain) today and make sure your registered business is listed as the legal owner.",
        ],
        table: {
          caption: "Domain and DNS protection checklist for South African firms",
          headers: ["What to check", "Safe setup", "What happens if skipped"],
          rows: [
            [
              "Legal domain owner",
              "Your company name and a monitored company email",
              "A former supplier can delay transfers or hold your domain hostage",
            ],
            [
              "EPP transfer lock",
              "`clientTransferProhibited` kept on permanently",
              "Anyone with a leaked login can move your domain to another registrar",
            ],
            [
              "2FA on registrar and DNS",
              "Authenticator app or security key on every login",
              "Thieves swap IP and mail settings to steal logins and emails",
            ],
            [
              "Renewal and billing alerts",
              "Auto-renew on, company card and two outside backup emails",
              "One missed invoice switches off your site and all `@company` mail",
            ],
          ],
        },
        callout: {
          tone: "warning",
          heading: "Never keep billing alerts only on `@yourdomain.co.za`",
          text: "If an unpaid bill suspends `yourcompany.co.za`, warning emails sent only to `info@yourcompany.co.za` will bounce! Add an outside director backup email for billing notices.",
        },
      },
      {
        title: "Turn on EPP Transfer Lock and 2FA on both Registrar and DNS",
        body: [
          "Modern domain hijackers do not need to hack your web server. If they get into a weakly protected registrar or DNS account (domain settings), they can send your website visitors to a fake login page and redirect `MX` mail records to read your company emails and password resets.",
        ],
        subsections: [
          {
            heading: "Turn on app-based 2FA on both your registrar and Cloudflare",
            body: [
              "Many sites buy their `.co.za` domain at one registrar and manage their domain settings (DNS) in Cloudflare or Route 53. Locking only the registrar leaves your DNS panel wide open. Turn on unique password-vault passwords plus app-based two-factor authentication (2FA, avoiding SMS because of SIM-swap risk) on both accounts.",
            ],
          },
          {
            heading: "Keep EPP transfer lock turned on between moves",
            body: [
              "Your EPP lock (`clientTransferProhibited`) stops anyone moving your domain away, even if they steal your EPP transfer code. Leave it switched on permanently for your main and spare domains, and unlock it only during a planned domain move.",
            ],
          },
        ],
      },
      {
        title: "Eliminate accidental .co.za domain expiry and suspension",
        body: [
          "Renewing a `.co.za` domain costs very little each year, yet busy companies still lose their website and email overnight when a company card expires, finance staff leave or renewal invoices hit spam.",
        ],
        numbered: [
          "Write down the exact renewal date for every main and spare domain in a shared company list.",
          "Turn on auto-renew using a reliable company card rather than an employee's personal card.",
          "Add at least two monitored alert emails, including one backup email outside your company domain.",
          "Set external domain expiry alerts to remind your team 30 days and 14 days ahead of renewal.",
        ],
      },
      {
        title: "Scrub dangling CNAME subdomains every quarter (Subdomain Takeovers)",
        body: [
          "Suppose you created `events.company.co.za` using a `CNAME` record pointing to an outside tool like Shopify, Heroku or Unbounce, and later cancelled that tool without deleting the DNS record. That leftover pointer creates a Subdomain Takeover risk.",
          "Automated bots hunt for abandoned `CNAME` records every day, claim the deleted tool name, and publish fake scam pages straight onto your trusted `.co.za` web address.",
        ],
        bullets: [
          "Check your `A`, `AAAA`, `CNAME`, `MX` and `TXT` domain settings every three months and delete pointers to cancelled tools.",
          "Publish `v=spf1 -all` and `p=reject` email locks on unused spare `.com` and `.co.za` domains so scammers cannot spoof them.",
        ],
        callout: {
          tone: "tip",
          heading: "Use a shared role mailbox like `domains@`",
          text: "Do not tie main domain ownership to one staff member's personal email like `thabo@`. Use a shared company role address protected by 2FA and director backup access.",
        },
      },
      {
        title: "Deploy automated DNS change alerting for rapid detection",
        body: [
          "Pair your EPP transfer lock with uptime and domain monitoring that watches your `A`, `NS`, `MX` and `TXT` settings around the clock. If anyone changes your nameservers or website IP unexpectedly, your team gets an alert within minutes.",
        ],
      },
      {
        title: "Step-by-step domain lock and takeover checklist for SA directors",
        body: [
          "Checking who legally controls your `.co.za` domain takes ten minutes on a quiet morning and saves days of stressful forms during a crisis. Whether you are checking your own account or moving away from an old agency, follow these steps together:",
          "Review ownership, billing safety, EPP locks and DNS alerts across every domain your business holds:",
        ],
        subsections: [
          {
            heading: "Moving a .co.za domain away from an old agency",
            body: [
              "Run a quick `.co.za` WHOIS check right now to see which registrar holds your domain and which owner entity is listed. Ask the agency for a formal account push or EPP transfer code to move the domain into your company's own registrar account. Approve the ZACR email confirmation from your monitored company inbox and turn the EPP lock back on right away.",
            ],
          },
          {
            heading: "Securing external DNS accounts alongside your registrar",
            body: [
              "Splitting your registrar (such as a local SA registrar) from your DNS host (such as Cloudflare) adds safety only when both accounts use unique passwords, app-based 2FA and zero leftover logins from past freelancers or staff.",
            ],
          },
        ],
        bullets: [
          "Check that spare `.com` and typo domains have auto-renew on, EPP lock on and `v=spf1 -all` email locks set.",
          "Store registrar PINs, 2FA backup codes and EPP recovery notes safely inside a shared director password vault.",
        ],
      },
    ],
    midCta: {
      heading: "Unsure who legally controls your .co.za domain or DNS settings?",
      text: "We check ZACR ownership, remove risky old subdomain records, turn on EPP locks and 2FA and set up domain change alerts.",
      href: "/services/website-security/",
      label: "Explore website security",
    },
    related: [
      { label: "SPF, DKIM & DMARC guide SA", href: "/guides/spf-dkim-dmarc-guide-south-africa/" },
      { label: ".co.za vs .com domains in SA", href: "/guides/co-za-vs-com-domain-south-africa/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
      { label: "Website security checklist", href: "/guides/website-security-checklist/" },
    ],
    faqs: [
      {
        question: "What happens if thieves hijack DNS without touching our website host?",
        answer:
          "Hackers do not need access to your hosting server to cause harm if they control your DNS settings. They can point your website address to a fake clone to steal customer logins, and swap your `MX` mail records to catch incoming company emails and password reset links silently.",
      },
      {
        question: "How fast does an unpaid .co.za domain vanish offline?",
        answer:
          "The moment an unpaid `.co.za` domain enters registry suspension, your website stops loading and company emails bounce right away. Paying quickly inside ZACR's short grace period brings the site back, whereas leaving it overdue too long lets the domain drop back onto the public market for anyone to buy.",
      },
      {
        question: "Can a previous freelancer withhold our .co.za domain over a disagreement?",
        answer:
          "Yes, if a freelancer registered your `.co.za` domain under their own name or reseller profile, getting it back can require slow ZACR or dispute processes. Checking WHOIS records early and moving ownership into a registrar account under your company's legal name removes that risk completely.",
      },
      {
        question: "Should we enable DNSSEC on our .co.za domain too?",
        answer:
          "Yes, turn on DNSSEC when both your `.co.za` registrar and your DNS provider (like Cloudflare) support it easily. DNSSEC adds a digital check to domain lookups so attackers on shady public networks cannot trick browsers into visiting a fake server address instead of your real site.",
      },
      {
        question: "Why check DNS records quarterly even when nothing changed internally?",
        answer:
          "Teams often cancel old newsletter tools, landing-page builders or booking apps without telling their web support person. Those cancelled accounts leave behind old `CNAME` subdomains that hackers can take over, plus leftover SPF entries that clutter your email limits unless you tidy them up every few months.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-26",
  },
];
