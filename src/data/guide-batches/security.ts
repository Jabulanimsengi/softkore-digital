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
      "Stop scammers spoofing your .co.za email domain and prevent contact-form emails hitting Gmail spam. Clear SPF, DKIM and DMARC DNS setup guide for SA businesses.",
    intro:
      "If fraudsters can send bogus banking-change invoices pretending to come from `@yourcompany.co.za`—or if legitimate quotes and website contact alerts vanish silently into clients' Gmail and Outlook junk folders—the fix lives inside three DNS TXT records: SPF, DKIM and DMARC.",
    summary: [
      "What SPF, DKIM and DMARC stop",
      "Checking existing DNS records",
      "Authorising website enquiry mail",
      "Enforcing DMARC safely",
    ],
    takeaways: [
      "Without DMARC enforcement, anyone online can spoof your `.co.za` From address in convincing invoice phishing scams.",
      "Publish strictly ONE consolidated `v=spf1` record per domain—publishing two separate SPF lines invalidates both permanently.",
      "Pair 2048-bit DKIM signatures across BOTH office email (M365/Workspace) and website transactional mail (Resend/Postmark).",
      "Roll DMARC calmly in stages: monitor at `p=none` (`rua=`), fix sender gaps, test `p=quarantine`, then lock `p=reject`.",
      "Publish `v=spf1 -all` and `p=reject` even on unused or parked defensive `.co.za`/`.com` domains so attackers cannot spoof them.",
    ],
    sections: [
      {
        title: "How SPF, DKIM and DMARC protect your brand and website enquiries together",
        body: [
          "Many South African directors treat email DNS authentication as an isolated office IT detail—ignoring how it breaks website contact notifications and WooCommerce receipts simultaneously. Strict bulk-sender rules enforced by Gmail and Microsoft now quarantine or drop unauthenticated form alerts straight into junk folders unless SPF, DKIM and DMARC align.",
          "Think of all three records working cleanly as one verification chain: authorised infrastructure (SPF), cryptographic integrity (DKIM) and domain enforcement (DMARC).",
        ],
        table: {
          caption: "Email DNS authentication roles for South African domains",
          headers: ["DNS Record", "Record Name", "What it verifies", "Common SME mistake"],
          rows: [
            [
              "SPF (Sender Policy Framework)",
              "`@` (root TXT)",
              "Lists exact servers & API IPs allowed to send email for the domain",
              "Publishing two `v=spf1` strings or crossing the hard 10 DNS-lookup limit",
            ],
            [
              "DKIM (DomainKeys Identified Mail)",
              "`selector._domainkey`",
              "Cryptographically signs headers/body so bank details cannot alter in transit",
              "Enabling DKIM for M365/Gmail while website form mail sends unsigned",
            ],
            [
              "DMARC",
              "`_dmarc` (TXT)",
              "Ties visible `From:` domain to SPF/DKIM alignment & blocks spoofed mail",
              "Flipping straight to `p=reject` day one before checking payroll/site senders",
            ],
          ],
        },
      },
      {
        title: "Configure SPF cleanly without tripping duplicate or lookup errors",
        body: [
          "An SPF record is a single TXT string on your root zone declaring every mail provider authorised to originate messages on your domain's behalf. Combining Microsoft 365 with an API website mailer and accounting notifications belongs cleanly inside ONE combined entry rather than adding stacked TXT rows.",
        ],
        subsections: [
          {
            heading: "Never publish duplicate `v=spf1` TXT records",
            body: [
              "One frequent South African DNS blunder happens when staff configure Xero, Sage or Mailchimp by clicking 'Add TXT Record' without deleting the previous SPF line. RFC standards treat multiple SPF strings as an instant `PermError`, causing authentication checks to fail globally.",
            ],
          },
          {
            heading: "Stay strictly beneath the 10-lookup DNS ceiling",
            body: [
              "Every `include:`, `a`, `mx` or nested sub-include counts against a strict hard cap of 10 DNS lookups per check. Exceeding ten causes `PermError` silently across large marketing clouds—strip dead tools and ancient hosting IPs yearly to preserve crisp slack.",
            ],
          },
        ],
        bullets: [
          "Consolidate legitimate office and API relays inside one single `v=spf1` TXT record ending cleanly with `~all` during rollout or `-all` post-verification.",
          "Inspect old marketing services annually so long-cancelled email apps no longer retain domain sending permission.",
        ],
      },
      {
        title: "Activate 2048-bit DKIM across office suites AND website transactional mail",
        body: [
          "Unlike SPF—which occasionally fails when customers auto-forward messages internally—DKIM stamps a tamper-proof cryptographic signature directly onto email headers checked cleanly against your DNS public key.",
        ],
        bullets: [
          "Office mailboxes: Activate both DKIM selectors inside Microsoft 365 Defender or generate 2048-bit keys inside Google Workspace Admin before clicking Enable.",
          "Website & WooCommerce alerts: Ditch unauthenticated shared cPanel PHP `mail()` calls altogether; send notifications via dedicated transactional APIs (Resend, Postmark or SES) verified via isolated subdomains such as `mail.yourdomain.co.za`.",
          "Accounting & CRM mailers: Authenticate Xero, Sage, HubSpot and ticketing platforms cleanly using vendor DKIM CNAMEs so PDF statements reach client primary inboxes cleanly.",
        ],
        callout: {
          tone: "warning",
          heading: "Shared cPanel PHP mail relays wreck customer inbox placement",
          text: "Cheap shared hosting servers broadcast thousands of messages across one pooled IP shared with strangers—getting genuine quote replies flagged as junk whenever another site sends spam.",
        },
      },
      {
        title: "Roll out DMARC enforcement smoothly without dropping genuine invoices",
        body: [
          "Jumping recklessly to `p=reject` afternoon one often bounces real payslips, accounting reminders or website enquiries originating from forgotten software tools. Step systematically through these four checkpoints:",
        ],
        numbered: [
          "Publish monitoring baseline (`v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.co.za;`) and inspect aggregate XML summaries over 2–4 weeks until 100% of legitimate senders surface clearly.",
          "Fix unaligned services: configure website APIs, invoicing software and booking systems so their visible `From:` aligns cleanly with authenticated DKIM or SPF.",
          "Move cleanly to `p=quarantine` (`pct=25` then `pct=100`) directing suspicious unaligned emails straight into junk folders while scanning alerts closely.",
          "Lock final enforcement at `v=DMARC1; p=reject; pct=100;` so Gmail, M365 and local South African ISPs drop forged spoofing attempts outright.",
        ],
        callout: {
          tone: "tip",
          heading: "Remember to publish zero-send locks on parked brand domains too",
          text: "On secondary `.com` or defensive `.co.za` redirects carrying no email accounts, set explicit `v=spf1 -all` and `v=DMARC1; p=reject;` DNS policies blocking attackers from forging parked extensions.",
        },
      },
      {
        title: "Test live email headers end-to-end before wrapping up",
        body: [
          "After DNS propagation completes, trigger genuine live test messages from every channel—office Outlook/Gmail, your `/contact/` form, and any checkout/invoicing system—to external consumer Gmail and Outlook test accounts. Open 'Show Original' headers directly inside Gmail and verify three matching green lines (`SPF: PASS`, `DKIM: PASS`, `DMARC: PASS`) across every sending source.",
        ],
      },
      {
        title: "Decoding real DMARC XML reports and avoiding silent forwarding traps",
        body: [
          "Moving safely past `p=none` onto `p=quarantine` and `p=reject` stops getting scary once you know how to read aggregate DMARC feedback cleanly. Weekly aggregate reports list every mail IP worldwide claiming your `@yourcompany.co.za` domain—exposing legitimate forgotten software tools right alongside genuine spoofing attempts.",
          "Resolve misaligned cloud apps methodically before locking strict `p=reject` across live company correspondence:",
        ],
        subsections: [
          {
            heading: "Inspect forgotten automated senders inside DMARC `rua` summaries",
            body: [
              "Even without building custom XML parsers, free DMARC report viewers highlight quickly when an old client portal, Xerox scanner emailing PDFs, Xero invoice link or WordPress SMTP plugin fails DKIM alignment. Either configure custom domain DKIM on that vendor platform cleanly or route notifications via your verified domain transactional API.",
            ],
          },
          {
            heading: "Understand why DKIM survives corporate mail forwarding safely",
            body: [
              "Many South African legal and engineering clients forward incoming domain emails straight to secondary mailboxes (`director@firm.co.za` forwarding to private Gmail). Forwarding frequently alters the transmitting server IP—breaking SPF checks! Valid 2048-bit DKIM signatures stay intact across forwards so aligned DMARC continues passing reliably.",
            ],
          },
        ],
        bullets: [
          "Keep DNS TXT length cleanly formatted without broken quote splits across vendor control panels.",
          "Review DNS TXT mail entries twice yearly whenever adopting new accounting, payroll or booking software.",
        ],
      },
    ],
    midCta: {
      heading: "Tired of quote replies hitting Gmail spam—or worried about invoice fraud?",
      text: "We audit DNS zones, replace risky shared web mailers with verified APIs and guide your .co.za domain cleanly onto `p=reject`.",
      href: "/services/website-security/",
      label: "Secure Email & DNS",
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
          "Email authentication protects strictly your exact registered domain (`@yourcompany.co.za`). Registering obvious typo variants defensively (`-sa.co.za`, `.com`) alongside staff/finance callback verification stops lookalike bank-change fraud completely.",
      },
      {
        question: "Why did website contact notifications break after setting DMARC to p=reject?",
        answer:
          "Almost certainly because your website server sent alerts pretending `From: info@yourdomain.co.za` via unsigned hosting PHP mail failing both SPF IP lists and DKIM signatures. Routing alerts cleanly through verified transactional mail APIs fixes this permanently.",
      },
      {
        question: "Does SoftKore Digital configure SPF, DKIM and DMARC for South African businesses?",
        answer:
          "Yes—resolving DNS mail auth conflicts and wiring clean API contact delivery sit directly inside our website security hardening work.",
      },
      {
        question: "How long do SPF and DMARC DNS updates take to propagate across South Africa?",
        answer:
          "Most DNS TXT records refresh globally inside 15 minutes to a few hours depending on existing TTL windows.",
      },
      {
        question: "Does DMARC help stop inbound spam coming INTO our own company inbox?",
        answer:
          "It stops fraudsters spoofing YOUR brand toward clients and internal staff (`ceo@yourcompany.co.za`)—pair it cleanly with M365/Workspace inbound anti-phishing policies too.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "remove-google-deceptive-site-ahead-warning",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2026-12-31",
    title: "How to Remove Google's 'Deceptive Site Ahead' & Safe Browsing Warning",
    metaTitle: "Remove Google 'Deceptive Site Ahead' Warning | SoftKore",
    description:
      "Chrome or Safari blocking visitors with 'Deceptive site ahead'? Step-by-step phishing kit removal, backdoor cleanup, cache purge and Safe Browsing review guide.",
    intro:
      "Seeing Chrome's full-screen red 'Deceptive site ahead' warning locks out nearly 100% of website visitors overnight. Google Safe Browsing triggers that block when scanners detect fake phishing sign-in kits, social-engineering redirects or injected malware sitting anywhere on your domain or forgotten subdomains—demanding thorough backdoor removal before submitting Search Console review.",
    summary: [
      "Why Chrome triggers red warnings",
      "Locating hidden phishing scripts",
      "Cleaning & closing the entry point",
      "Clearing Search Console safely",
    ],
    takeaways: [
      "`Deceptive site ahead` is an active Safe Browsing malware/phishing flag—completely separate from an ordinary expired SSL certificate.",
      "Intruders routinely plant disguised bank/courier phishing pages deep inside `/wp-content/uploads/` or stale subdomains while your homepage looks fine.",
      "Inspect Google Search Console > Security Issues first for exact flagged paths, and capture forensic snapshots before editing files.",
      "Never click 'Request Review' after deleting only the flagged folder—lingering backdoors re-infect sites and lengthen re-review penalties.",
      "Purge Cloudflare/CDN caches and verify flagged URLs return clean HTTP 404/410 BEFORE requesting Google review.",
    ],
    sections: [
      {
        title: "Confirm what 'Deceptive site ahead' means vs other browser alerts",
        body: [
          "Reading the exact Chrome warning string immediately separates domain infection responses from simple TLS renewal hiccups.",
        ],
        table: {
          caption: "Decoding urgent browser security warnings accurately",
          headers: ["Browser alert", "Actual underlying cause", "Immediate first inspection"],
          rows: [
            [
              "Deceptive site ahead (red)",
              "Safe Browsing detected phishing logins, spoofing kits or sneaky redirects",
              "Google Search Console > Security Issues + Hosting access log audit",
            ],
            [
              "The site ahead contains malware (red)",
              "Host serves infected executables or malicious third-party scripts",
              "Search Console > Security Issues + Core/plugin file diffing",
            ],
            [
              "Your connection is not private (grey)",
              "Expired/mismatched SSL certificate or broken SAN coverage",
              "Hosting SSL panel / Cloudflare Full Strict check",
            ],
          ],
        },
      },
      {
        title: "Locate every infected folder, subdomain and conditional redirect",
        body: [
          "Owners feel bewildered when opening their own homepage on office laptops looks spotless. Automated attackers hide deceptive phishing clones inside writable subfolders mimicking Capitec, SARS, DHL or Microsoft 365 login pages strictly for external phishing victims—while hiding from site owners.",
        ],
        subsections: [
          {
            heading: "Extract exact clues inside Search Console > Security Issues",
            body: [
              "Navigate straight to Security & Manual Actions > Security Issues inside Search Console. Google routinely prints sample paths (for example `/wp-content/uploads/2026/secure-verify/`) alongside breach categories. Search server modification timestamps around the exact creation hour of those flagged folders to uncover sibling payloads dropped during the exact same intrusion.",
            ],
          },
          {
            heading: "Sweep legacy subdomains and orphaned DNS pointers",
            body: [
              "Check every directory sharing your cPanel root plus DNS subdomains (`test.`, `mail.`, `portal.`). Safe Browsing frequently escalates penalties across your entire root `.co.za` brand whenever one forgotten, unpatched WordPress install sits exposed under `staging.yourdomain.co.za`.",
            ],
          },
        ],
        bullets: [
          "Inspect live rendered HTML via Google Search Console > URL Inspection > Test Live URL to catch cloaked malware triggered purely for Chrome or Googlebot user agents.",
          "Scan server cron jobs (`crontab`) and WordPress `wp_options` rows for encoded JavaScript redirect injections.",
        ],
      },
      {
        title: "Clean the phishing payload AND eradicate hidden backdoors together",
        body: [
          "Removing ONLY the specific phishing subfolder Chrome noticed while skipping root-cause investigation guarantees rapid repeat infection—and second flags trigger stricter manual delays.",
        ],
        numbered: [
          "Download an encrypted offline forensic copy of compromised files, database SQL dumps and past 30 days of access logs first.",
          "Pause public site exposure via maintenance HTTP 503 screen or strict Cloudflare rule while cleaning.",
          "Rebuild CMS core, themes and plugins cleanly directly from verified upstream vendor downloads; strip inactive themes and verify zero executable `.php` files hide inside `/uploads/`.",
          "Remove unrecognised WordPress admin accounts and clean any rogue inline `<script>` or obfuscated `base64` snippets inside DB tables.",
          "Rotate ALL credentials (hosting cPanel, FTP/SSH, SQL user, CMS admins, Cloudflare DNS, SMTP/payment API secrets), patch vulnerabilities and enforce MFA.",
        ],
        callout: {
          tone: "warning",
          heading: "Wait until every layer is clean before submitting Request Review!",
          text: "Clicking 'Request Review' hastily while one dormant PHP dropper or cached Cloudflare edge copy remains infected triggers instant rejection and extends automated waiting delays.",
        },
      },
      {
        title: "Verify dead spam URLs return HTTP 404/410 and purge all edge caches",
        body: [
          "Test every single sample phishing/spam URL cited by Search Console via uncached headers (`curl -I`) after cleaning. Confirm every deleted malicious address outputs clean `HTTP/2 404` or `HTTP/2 410 Gone`—NEVER redirect phishing folders onto `/`!",
          "Next, open Cloudflare or server Varnish/LiteSpeed caches and execute a full **Purge Everything** flush immediately so edge servers never hand stale infected HTML to Google's review scanner.",
        ],
        bullets: [
          "Check Googlebot response cleanly via URL Inspection > Test Live URL on your homepage before submitting review.",
          "Confirm valid HTTPS and HTTP security headers (`HSTS`, `X-Frame-Options`, `nosniff`) stand solid across kept pages.",
        ],
        callout: {
          tone: "tip",
          heading: "Keep your Search Console review explanation concise and factual",
          text: "Write two clear sentences confirming what entry gap existed (e.g. outdated form plugin), that clean core/plugin files were rebuilt, backdoors deleted, all passwords rotated and WAF rules activated.",
        },
      },
      {
        title: "Monitor post-clearance recovery and lock out future compromises",
        body: [
          "Safe Browsing reviews typically resolve inside 24 to 72 hours after clean verification, restoring normal Chrome and Safari access across desktop and phones smoothly. Keep external uptime monitoring, daily off-site backups and strict MFA active permanently—or migrate brochure websites cleanly onto static Next.js builds free of vulnerable PHP surfaces.",
        ],
      },
      {
        title: "Post-clearance checklist to prevent repeat Safe Browsing flags",
        body: [
          "Seeing Chrome restore clean green access feels relieving—yet nearly a third of hastily cleaned small business sites suffer a second Safe Browsing block within four months because root intrusion habits stayed broken. Locking clean operational baselines right after recovery saves painful multi-week repeat penalties.",
          "Complete every step below immediately following Search Console Security clearance:",
        ],
        subsections: [
          {
            heading: "Re-scan Search Console indexing for lingering fake spam pages",
            body: [
              "Run quick `site:yourdomain.co.za` searches and review Indexing > Pages weekly across month one post-recovery. Verify any leftover compromised URLs output hard HTTP 404/410 codes cleanly without bouncing through weird soft-404 wrappers, so Google wipes spam snippets smoothly off public results.",
            ],
          },
          {
            heading: "Audit admin access, off-site backups and origin firewall rules together",
            body: [
              "Confirm former freelancers no longer retain hosting/WordPress logins, enforce authenticator MFA on cPanel, WordPress, ZACR registrar and Cloudflare DNS simultaneously, restrict PHP execution inside uploads, and verify independent encrypted off-site backups run cleanly off-server.",
            ],
          },
        ],
        bullets: [
          "Consider migrating lean static marketing domains permanently off fragile PHP plugin setups onto static Next.js edge builds.",
          "Verify POPIA Section 22 assessment completion with legal guidance wherever stored enquiry or customer records existed on breached servers.",
        ],
      },
    ],
    midCta: {
      heading: "Customers hitting Google's red 'Deceptive site ahead' block today?",
      text: "We hunt down hidden phishing kits urgently, remove backdoors safely, rotate compromised keys and guide Safe Browsing clearance fast.",
      href: "/services/website-security/",
      label: "Clear Safe Browsing Block",
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
          "Once Search Console clears Security Issues cleanly to green, Safe Browsing updates roll out across Chrome, Safari, Firefox and Edge clients inside roughly a few hours up to 24 hours.",
      },
      {
        question: "Why did Search Console flag our homepage when our office browsers show no hack?",
        answer:
          "Either malicious JavaScript got injected into header/footer database tables selectively targeting mobile/search referrers, OR conditional cloaking serves phishing content strictly outside office IP ranges.",
      },
      {
        question: "Can a neglected subdomain like old.company.co.za trigger a warning on www?",
        answer:
          "Yes—Safe Browsing protections commonly escalate warnings root-wide across `yourdomain.co.za` whenever unpatched test or legacy subdomains drop phishing kits.",
      },
      {
        question: "Does a temporary Safe Browsing flag ruin organic SEO rankings permanently?",
        answer:
          "Not when remediated cleanly within days—dropping fake URLs cleanly into 404/410 and passing Security Review allows Search snippets to recover steadily.",
      },
      {
        question: "Should we also assess POPIA Section 22 obligations after clearing the warning?",
        answer:
          "Yes—always evaluate preserved server logs with legal guidance if client enquiry records, customer databases or user accounts lived on the breached host.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "why-wordpress-websites-get-hacked-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-01-21",
    title: "Why WordPress Websites Get Hacked in South Africa (And How to Lock Them Down)",
    metaTitle: "Why WordPress Sites Get Hacked (SA Security) | SoftKore",
    description:
      "Why South African WordPress sites keep suffering hacks: outdated plugins, nulled themes, shared admin access, forgotten staging folders—and exact lockdown steps.",
    intro:
      "WordPress runs thousands of South African company websites smoothly when disciplined engineering maintains it—yet accounts for the vast majority of emergency malware cleanups. Cybercriminals rarely pick local SMEs out personally; automated botnets sweep `.co.za` ranges nonstop exploiting neglected plugins, pirated themes and weak passwords.",
    summary: [
      "Top WordPress attack vectors",
      "Why 'nulled' themes invite trouble",
      "Admin logins, MFA & file permissions",
      "Ongoing WAF & patching habits",
    ],
    takeaways: [
      "Practically all WordPress hacks enter via outdated third-party plugins, nulled themes, stolen logins or leftover staging folders—rarely core bugs.",
      "Deactivating a risky plugin without clicking Delete leaves vulnerable PHP scripts sitting live and directly callable on disk.",
      "Require app-based MFA across 100% of admin users, lock `/wp-login.php` with Cloudflare WAF rules and purge ex-staff profiles.",
      "Block PHP script execution inside `wp-content/uploads/` and delete forgotten `/staging/` or `backup.sql` files.",
      "For corporate brochure sites barely needing weekly CMS editing, static Next.js removes PHP plugin vulnerabilities altogether.",
    ],
    sections: [
      {
        title: "Five open doors automated scanners use to hijack WordPress sites",
        body: [
          "Stopping recurring WordPress compromises requires understanding what bots actually scan for every single night across South African hosting servers.",
        ],
        table: {
          caption: "Common WordPress entry paths vs practical lockdown defences",
          headers: ["Entry vector", "How bots exploit it", "Practical lockdown defence"],
          rows: [
            [
              "Outdated plugins / builders",
              "Automated bots hit known CVE flaws hours after disclosure",
              "Predictable staged patching + delete inactive plugins completely",
            ],
            [
              "Cracked ('nulled') themes",
              "Hidden backdoor shells ship inside pirated pro plugin zips",
              "Run strictly verified official plugins & licensed keys in your name",
            ],
            [
              "Credential stuffing / `admin`",
              "Bots slam `/wp-login.php` & `xmlrpc.php` with leaked password dumps",
              "Authenticator MFA + unique vault passwords + WAF rate limits + no XML-RPC",
            ],
            [
              "Forgotten `/staging/` / SQL files",
              "Leftover test directories & `backup.sql` exposed in web root",
              "Delete old staging clones & plaintext exports permanently post-launch",
            ],
            [
              "Executable `uploads/` bugs",
              "Disguised `.php` payloads dropped inside media upload paths",
              "Deny PHP script execution cleanly inside `wp-content/uploads/`",
            ],
          ],
        },
      },
      {
        title: "Outdated plugins, page builders and hidden backdoors in 'nulled' downloads",
        body: [
          "Audit almost any neglected WordPress SME build and you uncover thirty installed add-ons: dead countdown banners, duplicate contact packs, sliders unused since 2021 and builders whose developer licence vanished years ago.",
        ],
        subsections: [
          {
            heading: "Clicking Deactivate does NOT neutralize dangerous PHP code",
            body: [
              "Turning a plugin off inside WordPress merely tells the CMS not to load admin hooks—standalone `.php` handlers inside `/wp-content/plugins/` can still execute directly over HTTP whenever external exploit bots target them! Uninstall and delete unneeded code completely.",
            ],
          },
          {
            heading: "Never trust 'free pro' cracked plugins from cheap freelancer builds",
            body: [
              "Bargain website builds occasionally slip cracked ('nulled') copies of Elementor Pro, WPForms or Gravity Forms downloaded from shady forums onto client hosting—embedding sleeper malware scripts that phone home months after final payment clears.",
            ],
          },
        ],
        callout: {
          tone: "warning",
          heading: "Watch expired agency umbrella licences silently blocking updates",
          text: "If an older agency installed paid plugins under their studio master key and you parted ways, security patches silently halt until your company purchases valid independent licences.",
        },
      },
      {
        title: "Lock down wp-admin access, XML-RPC and upload permissions",
        body: [
          "Tightening basic WordPress authentication and server execution rules knocks automated scanner success rates down dramatically:",
        ],
        bullets: [
          "Retire shared generic logins (`admin`, `webmaster`); give each active person a named user with minimal Editor vs Administrator capability.",
          "Enforce TOTP authenticator app MFA across all Administrator and WooCommerce Shop Manager logins.",
          "Disable `/xmlrpc.php` unless genuinely needed for verified integrations, eliminating rapid multi-password brute-force attacks.",
          "Configure Nginx or `.htaccess` cleanly to deny PHP script execution inside `/wp-content/uploads/`, and set `define('DISALLOW_FILE_EDIT', true);` inside `wp-config.php`.",
        ],
      },
      {
        title: "Remove stale staging subdomains and shared-hosting cross-risks",
        body: [
          "Developers routinely launch `/old-site/`, `/wp-beta/` or `staging.domain.co.za` sharing identical SQL tables and zero maintenance—creating invisible back entries right beside locked-down production.",
          "Equally risky: putting five independent company websites under a single shared cPanel hosting user. When one small neglected side project catches a PHP shell, attackers pivot cleanly across every website sharing that disk partition.",
        ],
        callout: {
          tone: "tip",
          heading: "Or leave PHP plugins behind when brochure sites rarely edit templates",
          text: "If your marketing staff mainly checks leads and adds occasional articles or annual updates, converting onto clean pre-rendered Next.js pages deletes database injections and WordPress security emergencies permanently.",
        },
      },
      {
        title: "Your practical 30-minute WordPress hardening checklist today",
        body: [
          "Schedule thirty calm minutes with your developer or IT administrator to close every baseline hole below:",
        ],
        numbered: [
          "Create an encrypted off-site snapshot BEFORE deleting plugins or altering server configs.",
          "Inspect Users cleanly -> purge ex-staff & old agency admins -> turn on unique vault passwords & MFA.",
          "Run staging-checked core, plugin and theme updates—then Delete every unused theme, disabled plugin and ancient `/staging/` folder.",
          "Wrap `/wp-login.php` inside Cloudflare WAF rate-limiting, enforce `DISALLOW_FILE_EDIT` and block PHP execution in `uploads/`.",
          "Wire 24/7 external uptime/SSL monitoring and Google Search Console Security alerts so surprises show within minutes.",
        ],
      },
      {
        title: "Deciding realistically: keep hard-locked WordPress or migrate cleanly?",
        body: [
          "After rescuing a compromised WordPress site twice inside two years, South African directors reasonably ask whether patching plugins forever beats rebuilding simpler pages cleanly off PHP entirely. Making that call honestly weighs editing habits directly against risk tolerance and support budgets.",
          "Evaluate your exact internal site usage before throwing good money after repetitive cleanups:",
        ],
        subsections: [
          {
            heading: "When hardening existing WordPress makes stronger commercial sense",
            body: [
              "Keep and harden WordPress when running active multi-hundred-SKU WooCommerce checkouts, complex gated member libraries or weekly internal page edits by non-technical marketing coordinators. Trim active plugins strictly under 12 reputable licensed vendors, isolate hosting onto managed SA VPS tiers, activate Cloudflare WAF + MFA and fund disciplined monthly patch checks.",
            ],
          },
          {
            heading: "When migrating cleanly onto static Next.js saves money permanently",
            body: [
              "Notice how many corporate WordPress sites change text strictly four times per year! Moving brochure, B2B lead and guide-heavy sites cleanly onto static pre-rendered Next.js outputs eliminates SQL databases, PHP uploads, nulled themes and `/wp-login.php` scanning bots permanently—delivering sharper speed alongside calmer ownership.",
            ],
          },
        ],
        bullets: [
          "Never leave dead legacy WordPress folders lying inside `/old-wp/` on new hosting after switching platforms—delete stale PHP directories completely.",
          "Keep all existing URL slugs mapped via tested single-hop 301 redirects cleanly whenever changing CMS architecture.",
        ],
      },
    ],
    midCta: {
      heading: "Managing WordPress without wanting endless midnight plugin fires?",
      text: "We lock down active WordPress builds cleanly with MFA, WAF and off-site backups—or migrate brochure sites effortlessly onto fast static Next.js.",
      href: "/services/website-security/",
      label: "Lock Down WordPress",
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
          "No—WordPress core follows strict open-source patching. Compromises trace almost exclusively to abandoned plugins, cracked 'nulled' code, weak shared logins and careless shared hosting.",
      },
      {
        question: "Does adding a security plugin like Wordfence stop every hack?",
        answer:
          "Security plugins help throttle noisy logins and warn on file diffs, yet cannot protect weak cPanel access, dormant staging copies or unpatched vulnerabilities ignored for months.",
      },
      {
        question: "What maximum plugin count should a clean WordPress SME site run?",
        answer:
          "Target under 10–14 essential vetted plugins cleanly—pruning bloated decorative add-ons lowers both attack exposure and mobile load drag simultaneously.",
      },
      {
        question: "Can SoftKore harden and monitor an existing WordPress build safely?",
        answer:
          "Yes—we verify clean files and access accounts first, clear unused bloat, enable WAF + off-site backups and put reliable monthly care in place.",
      },
      {
        question: "How quickly after disclosure do bots probe newly discovered plugin bugs?",
        answer:
          "Automated scanners routinely sweep `.co.za` ranges within hours to days of major plugin CVEs going public—making prompt patching and edge WAF filtering vital.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "fix-your-connection-is-not-private-ssl",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-02-11",
    title: "How to Fix 'Your Connection Is Not Private' & SSL Errors on Your Website",
    metaTitle: "Fix 'Your Connection Is Not Private' SSL | SoftKore",
    description:
      "Diagnose and fix 'Your connection is not private', expired SSL/TLS certificates, www mismatches, redirect loops and mixed content on South African websites.",
    intro:
      "Few errors kill enquiries faster than a visitor clicking your Google snippet only to see Chrome's warning screen declaring 'Your connection is not private'. Almost every SSL panic traces cleanly to failed 90-day Let's Encrypt renewals, mismatched `www` vs root SAN hostnames or conflicting Cloudflare SSL proxy modes.",
    summary: [
      "Common SSL error codes decoded",
      "Renewing AutoSSL / Let's Encrypt cleanly",
      "Fixing www vs non-www mismatches",
      "Preventing silent expiry surprises",
    ],
    takeaways: [
      "Check Chrome's `NET::ERR_...` code under 'Advanced' immediately—each code names the exact broken layer.",
      "Ensure every SSL certificate covers BOTH bare apex (`domain.co.za`) and `www` (`www.domain.co.za`) hostnames together.",
      "Configure Cloudflare strictly to **Full (Strict)** paired with a real origin certificate—never run production on `Flexible`.",
      "Replace hardcoded `http://` theme/image embeds cleanly so the padlock loads consistently before turning HSTS on.",
      "Run external uptime + SSL expiry monitors pinging 21 and 7 days early so quiet auto-renewal hiccups never catch customers off guard.",
    ],
    sections: [
      {
        title: "Decode Chrome's exact SSL warning code inside 30 seconds",
        body: [
          "Clicking 'Advanced' or reading Chrome's short `NET::ERR_...` identifier avoids guessing blindly inside DNS and cPanel screens.",
        ],
        table: {
          caption: "Browser TLS error codes and exact remediation steps",
          headers: ["Chrome / Browser error", "Exact technical cause", "Immediate fix"],
          rows: [
            [
              "`NET::ERR_CERT_DATE_EXPIRED`",
              "90-day Let's Encrypt / AutoSSL failed renewal or legacy cert expired",
              "Check firewall/`acme-challenge` path block, renew cert & wire expiry monitoring",
            ],
            [
              "`ERR_CERT_COMMON_NAME_INVALID`",
              "Certificate lacks `www` or bare apex, or points to default host cert",
              "Issue clean SAN cert bundling apex + `www`; confirm matching DNS A records",
            ],
            [
              "`ERR_TOO_MANY_REDIRECTS`",
              "Cloudflare `Flexible` HTTP loop hitting origin forcing HTTPS redirects",
              "Install origin SSL cert & switch Cloudflare SSL strictly onto `Full (Strict)`",
            ],
            [
              "Not Secure / Mixed Content flag",
              "HTTPS page still embeds raw `http://` scripts, fonts or image URLs",
              "Upgrade hardcoded asset URLs across DB/templates cleanly to `https://`",
            ],
          ],
        },
      },
      {
        title: "Why automated 90-day Let's Encrypt renewals fail quietly",
        body: [
          "Standard free TLS certificates renew automatically every 60 days by checking domain reachability over `/.well-known/acme-challenge/`. Editing `.htaccess` redirects, rolling out strict firewall country rules or enabling broken proxy modes months after launch frequently interrupts that hidden check silently—while business owners only notice when expiry triggers warnings weeks later.",
        ],
        subsections: [
          {
            heading: "Verify `/.well-known/` verification paths stay unblocked",
            body: [
              "Inspect server redirects, hotlink blockers and WAF firewall rules to guarantee automated ACME challenge probes pass cleanly without forced authentication prompts or weird rewrite loops.",
            ],
          },
          {
            heading: "Switch off insecure Cloudflare 'Flexible' SSL mode forever",
            body: [
              "`Flexible` SSL tells Cloudflare to speak plaintext unencrypted HTTP back to your hosting server—tripping instant `ERR_TOO_MANY_REDIRECTS` crashes whenever WordPress or Nginx expects HTTPS! Always provision real origin TLS (or free Cloudflare Origin Certs) and select **Full (Strict)**.",
            ],
          },
        ],
      },
      {
        title: "Cover apex AND www together before redirecting cleanly in one hop",
        body: [
          "A remarkably frequent bug puts valid SSL strictly on `www.company.co.za` while skipping the bare root `company.co.za`—leaving anyone typing the bare address straight in Chrome trapped on 'Your connection is not private' because **TLS encryption completes BEFORE HTTP 301 redirects ever execute**!",
        ],
        bullets: [
          "Inspect live Subject Alternative Names (SANs) inside certificate details and guarantee BOTH `yourdomain.co.za` AND `www.yourdomain.co.za` appear explicitly.",
          "Configure single-hop HTTP -> canonical HTTPS 301 rules cleanly after both names verify TLS cleanly.",
          "Eliminate multi-hop bounces (`http -> https -> www`) so Googlebot and cellular users land immediately.",
        ],
        callout: {
          tone: "warning",
          heading: "TLS shakes hands BEFORE any HTTP redirect can run",
          text: "Even if `yourdomain.co.za` merely exists to forward users onto `www.yourdomain.co.za`, it MUST hold valid matching SSL coverage or HTTPS visits will throw scary privacy blocks first.",
        },
      },
      {
        title: "Clean up mixed-content URLs before enabling HSTS",
        body: [
          "Sometimes certificates validate fine, yet Chrome shows 'Not Secure' padlocks or silently breaks fonts/maps because older database attachments (`http://yourdomain.co.za/wp-content/uploads/...`) stayed unencrypted after an earlier SSL install. Clean hardcoded HTTP pointers systematically across templates and database rows.",
          "Only AFTER every page and variant returns clean green padlocks cleanly should you step `Strict-Transport-Security` (HSTS) up safely.",
        ],
        callout: {
          tone: "tip",
          heading: "Skip overpriced 'Standard Domain SSL' R2,000 annual upsells",
          text: "For normal South African business sites and online stores using hosted PayFast/Yoco/Ozow checkout, properly automated Let's Encrypt or managed Cloudflare TLS delivers identical encryption strength cleanly for free.",
        },
      },
      {
        title: "Verify every TLS check and automate early expiry alerts",
        body: [
          "Follow this five-step checklist once fixed so expired SSL never catches your business flat-footed again:",
        ],
        numbered: [
          "Inspect both `https://yourdomain.co.za` and `https://www.yourdomain.co.za` in an incognito browser to confirm clean padlocks and clean single-hop canonical redirect.",
          "Verify Cloudflare (where used) holds `Full (Strict)` active with valid trusted Origin certs underneath.",
          "Scan key service and checkout pages via Chrome DevTools Console confirming zero yellow/red Mixed Content errors.",
          "Verify external monitoring alerts ping your team automatically 21 days and 7 days ahead of any certificate renewal hiccup.",
        ],
      },
      {
        title: "Preventing recurring Let's Encrypt failures and mixed-content loops",
        body: [
          "Fixing an expired certificate at 8 a.m. gets visitors back inside—yet discovering *why* automatic renewal choked two weeks ago stops your site flashing warning screens identically sixty days later. Automated TLS fails most reliably inside hidden `.htaccess`/Nginx rewrites or proxy configuration mismatches.",
          "Verify all three hidden maintenance traps once your browser padlock returns cleanly green:",
        ],
        subsections: [
          {
            heading: "Check AutoSSL validation logs for `.well-known` firewall interference",
            body: [
              "Inspect hosting AutoSSL logs or Certbot cron outputs cleanly to verify automated domain validation passed cleanly without custom rewrite rules capturing `/.well-known/acme-challenge/` redirects or forcing Cloudflare interactive JS challenges against Let's Encrypt IP checks.",
            ],
          },
          {
            heading: "Eliminate redirect conflicts between CMS force-SSL plugins and proxies",
            body: [
              "Deactivate flaky 'Really Simple SSL' WordPress override layers when configuring native clean Nginx/hosting HTTPS alongside Cloudflare **Full (Strict)** TLS. Mixing PHP-level SSL detection hacks behind reverse proxies causes repeated redirect loops (`ERR_TOO_MANY_REDIRECTS`) and slows initial page redirects unnecessarily.",
            ],
          },
        ],
        bullets: [
          "Always verify SSL certificates across BOTH mobile networks and office Wi-Fi after changes to avoid stale local browser HSTS or router caches fooling tests.",
          "Pair SSL expiry ping alerts cleanly with `.co.za` domain renewal reminders inside business operations calendars.",
          "Test `curl -vI https://yourdomain.co.za` AND `https://www.yourdomain.co.za` via command line post-deploy to verify intermediate certificate chains render complete on older Android phones too.",
          "Inspect any external third-party embedded fonts, scripts or widgets ensuring HTTPS compatibility ahead of enforcing HSTS rules.",
        ],
      },
    ],
    midCta: {
      heading: "Seeing privacy warnings, 'Too Many Redirects' or mixed-content glitches?",
      text: "We diagnose broken SAN certificates cleanly, lock Cloudflare onto Full Strict TLS and configure automated 24/7 expiry alerts.",
      href: "/services/website-security/",
      label: "Fix SSL & HTTPS Cleanly",
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
          "Because your installed server certificate listed only one hostname inside its SAN extension (`domain.co.za` OR `www.domain.co.za`). Re-issuing a single SAN cert bundling both solves it immediately.",
      },
      {
        question: "Can an expired SSL certificate hurt our Google Search rankings fast?",
        answer:
          "Yes—Googlebot drops unreadable HTTPS endpoints rapidly on crawl failure while Chrome actively deters search visitors from clicking.",
      },
      {
        question: "What causes 'Too Many Redirects' right after turning Cloudflare on?",
        answer:
          "Running Cloudflare SSL in `Flexible` mode while your origin Nginx/Apache or WordPress setup tries forcing HTTPS back again cleanly triggers endless loops. Switch strictly onto `Full (Strict)` with valid server SSL.",
      },
      {
        question: "How fast can an SSL or SAN certificate error get resolved?",
        answer:
          "Clean diagnosis and certificate re-issuance typically finishes inside 30 minutes to 2 hours once DNS and hosting logins confirm cleanly.",
      },
      {
        question: "Does having an SSL padlock guarantee the website cannot get hacked?",
        answer:
          "No—TLS solely encrypts packets in transit over Wi-Fi/cellular networks; patching plugins, enforcing MFA and configuring WAF rules remain essential.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "website-firewall-waf-cloudflare-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-03-04",
    title: "Website Firewalls (WAF) & Cloudflare Setup: Protecting South African Business Sites",
    metaTitle: "Website Firewalls (WAF) & Cloudflare Guide | SoftKore",
    description:
      "How Web Application Firewalls (WAF) and Cloudflare shield South African business websites: login rate limits, origin IP masking, SA edge speed and safe webhook rules.",
    intro:
      "Basic server network firewalls merely shut unused ports while leaving web ports 80 and 443 wide open—letting automated vulnerability probes, password-stuffers and spam scrapers slam websites unhindered. Placing a Web Application Firewall (WAF) like Cloudflare ahead of hosting intercepts hostile HTTP traffic cleanly at Johannesburg, Cape Town and Durban edge nodes.",
    summary: [
      "Network firewall vs Web App Firewall",
      "How Cloudflare edge protection helps",
      "Rules that protect login & enquiry forms",
      "Avoiding false blocks on real visitors",
    ],
    takeaways: [
      "A WAF evaluates HTTP web payloads actively—filtering SQL injection, XSS, `.env`/`.sql` scanner probes and brute-force bots off-server.",
      "Cloudflare PoPs inside Johannesburg, Cape Town and Durban cache static files locally while shielding origin servers.",
      "Always pair Cloudflare with origin IP restriction rules; bots bypassing DNS directly to raw IP addresses evade WAF protections.",
      "Rate-limit sensitive login and enquiry routes (`/wp-login.php`, `/api/contact/`) while explicitly exempting payment webhooks & Googlebot.",
      "Edge firewalls provide vital perimeter armour—never skipping CMS patching, MFA logins or encrypted off-site backups.",
    ],
    sections: [
      {
        title: "Network firewalls vs Web Application Firewalls (WAF) decoded",
        body: [
          "Assuming your hosting provider's baseline Linux network firewall protects your WordPress checkout against web attacks leaves a massive blind spot—because all legitimate AND hostile web requests flow down the exact same port 443 pipe.",
        ],
        table: {
          caption: "Perimeter security layers on South African business websites",
          headers: ["Security layer", "What it blocks cleanly", "What slips right past it"],
          rows: [
            [
              "Hosting Network Firewall",
              "Unused TCP/UDP ports (SSH, FTP, SQL from unknown external IPs)",
              "Exploits, SQLi & form spam arriving legitimately over HTTPS port 443",
            ],
            [
              "Edge Web App Firewall (Cloudflare)",
              "Scanner floods, SQLi/XSS attacks, login brute-force & DDoS bursts",
              "Valid stolen admin passwords without MFA, or exposed raw origin IP bypasses",
            ],
            [
              "App Hardening + Least Privilege",
              "Rogue admin edits, unsigned webhooks & dangerous PHP uploads",
              "Large network floods overwhelming hosting pipes if no edge WAF blocks first",
            ],
          ],
        },
      },
      {
        title: "Why Cloudflare fits South African websites remarkably well",
        body: [
          "In the early 2010s, proxying South African web servers through European security nodes injected sluggish 200ms round-trips onto every local page load. Today Cloudflare maintains high-capacity local PoPs directly inside Johannesburg, Cape Town and Durban—keeping DNS resolution, HTTP/3 TLS handshakes and static caching strictly local while absorbing automated global attack noise offshore.",
        ],
        subsections: [
          {
            heading: "DNS, Full Strict SSL and HTTP/3 performance wins together",
            body: [
              "Running authoritative DNS alongside proxied Cloudflare routing brings snappy anycast DNS resolution, Brotli asset compression and clean `Full (Strict)` TLS ahead of custom WAF rules.",
            ],
          },
          {
            heading: "Hide and firewall your raw origin hosting IP!",
            body: [
              "If legacy DNS history sites (`SecurityTrails`) or mail MX records expose your underlying hosting server's raw IP address, clever bots skip Cloudflare entirely by connecting directly to that raw IP. Lock hosting firewalls to accept HTTPS strictly from Cloudflare IP ranges—and keep outbound company email off web server IPs.",
            ],
          },
        ],
      },
      {
        title: "Essential Cloudflare WAF and rate-limiting rules to set right away",
        body: [
          "Beyond default edge filtering, adding targeted custom WAF policies clamps down on the noisest abuse targeting `.co.za` SMEs:",
        ],
        bullets: [
          "Rate-limit repeated POST attempts on login and contact endpoints (`/wp-login.php`, `/xmlrpc.php`, `/api/contact/`) to block password guessing and email floods.",
          "Challenge or IP-restrict CMS admin routes (`/wp-admin/` outside admin-ajax) when staff log in strictly from predictable South African offices.",
          "Drop noisy scanner probes hitting `.env`, `.git`, `wp-config.php~`, `/backup.sql` and vulnerable readme files silently at edge.",
          "Configure Turnstile / Bot filtering cautiously so automated headless browser spam gets blocked before hammering PHP workers.",
        ],
        callout: {
          tone: "warning",
          heading: "Protect PayFast, Yoco, Ozow & Googlebot from aggressive challenges!",
          text: "Overbroad interactive JS challenges or heavy country-wide blocking rules occasionally trip payment gateway server-to-server ITN webhooks—leaving paid client orders frozen Pending.",
        },
      },
      {
        title: "Audit firewall logs safely without blocking real clients or search bots",
        body: [
          "Tightening firewall protections recklessly right before payday sales without verification risks alienating mobile buyers riding CGNAT South African cellular IPs or breaking Googlebot index updates.",
        ],
        numbered: [
          "Review Cloudflare Security > Events analytics across 48 hours following rule rollout looking specifically for false-positive hits against mobile networks or legitimate crawlers.",
          "Validate clean Googlebot HTML fetching via Google Search Console > URL Inspection > Test Live URL.",
          "Test `/contact/` submissions AND payment gateway sandbox webhook deliveries completely end-to-end confirming zero silent drops.",
        ],
        callout: {
          tone: "tip",
          heading: "Even static Next.js builds benefit from Cloudflare DNS & WAF rules",
          text: "Even without a CMS database, edge rate-limiting shields serverless `/api/contact/` email routes cleanly from spam bursts while locking down DNS and dangling CNAME hygiene.",
        },
      },
      {
        title: "Keep origin servers patched—a WAF is armour, not magic cure",
        body: [
          "Think of Cloudflare WAF like perimeter access gates plus strong security glass on a commercial warehouse: it breaks automated drive-by crime dramatically and buys calm patching windows when new zero-day flaws emerge. Yet you still lock the office safes inside via timely software updates, non-SMS MFA, minimal admin accounts and verified off-site backups.",
        ],
      },
      {
        title: "Avoiding common Cloudflare proxy mistakes on South African sites",
        body: [
          "Cloudflare secures hundreds of thousands of sites cleanly yet catches small businesses out through two common misconfigurations: proxying mail hostnames wrongly or triggering accidental caching over dynamic login and checkout routes.",
          "Verify these quick edge sanity rules immediately after onboarding any `.co.za` domain onto Cloudflare:",
        ],
        subsections: [
          {
            heading: "Keep mail DNS pointers cleanly 'DNS Only' (grey cloud)",
            body: [
              "Cloudflare proxies strictly HTTP/HTTPS web traffic by default—NEVER toggle orange-cloud proxying onto `mail.`, `smtp.`, `imap.` or `MX` targets! Proxying mail subdomains breaks Outlook/IMAP sync cleanly and leaks origin web IP clues inside DNS warnings unless left cleanly grey-clouded (or running separate external Microsoft 365/Workspace MX records).",
            ],
          },
          {
            heading: "Prevent aggressive HTML caching from leaking admin bars or stale forms",
            body: [
              "Verify Cloudflare Cache Rules cache static assets (`/images/`, `/_next/static/`, CSS/JS) cleanly while bypassing caching on dynamic WordPress dashboards (`/wp-admin/`), WooCommerce shopping carts (`/cart/`, `/checkout/`) and CSRF/nonces inside interactive dynamic forms—whereas pre-built static pages cache globally safely.",
            ],
          },
        ],
        bullets: [
          "Keep Cloudflare **Full (Strict)** TLS mode mandatory alongside real Origin/Let's Encrypt server certificates.",
          "Review Firewall Event sampling monthly so new security rules drop bots sharply without frustrating legitimate local mobile carriers.",
          "Configure origin IP firewall rules on your VPS or Nginx server dropping direct port-443 traffic from non-Cloudflare networks so scanners cannot bypass WAF inspection altogether.",
          "Log rule triggers safely during Monitor/Log mode first before switching strict custom blocks active over live checkouts.",
        ],
      },
    ],
    midCta: {
      heading: "Setting up Cloudflare WAF cleanly without breaking forms or checkouts?",
      text: "We deploy Full Strict TLS, isolate raw origin IPs, tune rate-limiting rules cleanly and confirm Googlebot + payment webhooks work smoothly.",
      href: "/services/website-security/",
      label: "Configure Cloudflare WAF",
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
          "Properly configured proxied routing handles DNS and static caching right inside Johannesburg, Cape Town and Durban edge nodes—often making mobile speeds noticeably faster.",
      },
      {
        question: "Is Cloudflare Free sufficient for an ordinary SME service website?",
        answer:
          "Cloudflare Free already grants resilient anycast DNS, basic DDoS absorption, Full Strict SSL and essential custom WAF/rate-limiting rules. Larger WooCommerce or high-value portals gain deeper Managed OWASP rulesets on Cloudflare Pro.",
      },
      {
        question: "Why can attackers sometimes still bypass a WAF like Cloudflare?",
        answer:
          "Almost always because raw hosting server IPs remained directly reachable on port 443 without firewall origin IP lockouts—or valid stolen admin logins bypassed security controls directly.",
      },
      {
        question: "Can enabling Cloudflare break company emails when updating nameservers?",
        answer:
          "Only if `MX`, `SPF`, `DKIM` and `DMARC` DNS records get skipped—or if mail subdomains (`mail.`, `smtp.`) accidentally get orange-cloud proxied instead of remaining grey-cloud DNS-Only.",
      },
      {
        question: "Should we enable 'Under Attack Mode' permanently for extra safety?",
        answer:
          "Never permanently—it forces a five-second interstitial challenge on every human shopper, damaging user patience and potentially confusing automated crawlers or API callbacks. Save it strictly for live DDoS emergencies.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "offsite-website-backups-south-africa",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-03-25",
    title: "Why Built-In Hosting Backups Aren't Enough (And How Off-Site Recovery Works)",
    metaTitle: "Off-Site Website Backups & Recovery SA | SoftKore",
    description:
      "Why same-server cPanel backups fail during hacks or hosting outages—and how automated, immutable off-site backups paired with test restores actually save SA businesses.",
    intro:
      "Assuming 'my hosting plan runs nightly backups' leaves countless businesses stunned the afternoon real emergencies hit. When server-level ransomware locks an entire hosting node, an unpaid account gets suspended, or stealth malware hides cleanly across three weeks overwriting seven-day rolling snapshots, same-server backups collapse precisely when recovery is needed most.",
    summary: [
      "Where default hosting backups fail",
      "The 3-2-1 backup mindset",
      "What a complete backup must include",
      "Why untested backups aren't real",
    ],
    takeaways: [
      "Never store your sole backup inside the exact same hosting server, cPanel account or cloud console as production.",
      "Short 7-day rolling host snapshots regularly spoil completely when subtle plugin hacks stay unnoticed for weeks.",
      "Follow clean 3-2-1 resilience: encrypted off-site cloud buckets configured with write-only permissions so breaches cannot purge history.",
      "Guarantee archives cover complete codebase, media `uploads/`, SQL databases AND offline vaulted `.env` secrets.",
      "Schedule quarterly isolated test restores—an unverified backup archive is only optimistic theory until tested cleanly.",
    ],
    sections: [
      {
        title: "Four ways default cPanel or plugin backups fail during real crises",
        body: [
          "Relying blindly on basic host backup checkboxes or free WordPress plugins dumping giant `.zip` archives straight inside `/wp-content/backups/` breaks repeatedly across four common failure patterns:",
        ],
        table: {
          caption: "Hosting-local snapshots vs resilient off-site recovery strategy",
          headers: ["Failure scenario", "Same-server host backup risk", "How proper off-site backups survive"],
          rows: [
            [
              "Ransomware / cPanel breach",
              "Attackers encrypt or delete backup archives alongside live site code",
              "Append/write-only cloud bucket keys stop compromised server erasing history",
            ],
            [
              "Hosting suspension / disk failure",
              "Vendor portal lockout freezes live files AND host backups together",
              "Spin clean full recovery straight onto replacement SA host inside ~2 hours",
            ],
            [
              "Slow stealth hack (3+ weeks)",
              "Every single snapshot inside a 7-day rolling host window holds malware",
              "30–90+ day staggered retention keeps clean historical restore points intact",
            ],
            [
              "Corrupted / truncated SQL",
              "Silent export failures discovered solely mid-crisis restore attempt",
              "Quarterly staging restore drills verify complete files + SQL end-to-end",
            ],
          ],
        },
        callout: {
          tone: "warning",
          heading: "Delete local `.zip` backup files sitting inside public web directories!",
          text: "Cheap WordPress backup plugins frequently drop readable `site-backup-2026.zip` downloads inside guessable web folders—handing external bots your whole customer SQL dump and config secrets freely.",
        },
      },
      {
        title: "Configure immutable off-site retention without bloated bills",
        body: [
          "Modern cloud object storage makes off-site protection simple and affordable for South African SMEs—provided storage keys and retention history follow disciplined isolation rules.",
        ],
        subsections: [
          {
            heading: "Lock write permissions cleanly (append-only / object lock)",
            body: [
              "Provision external storage tokens giving your live website host strictly Put/Write upload privilege—NEVER delete or overwrite authority over earlier backup snapshots. Even full root compromise of the live website server cannot touch last Tuesday's or last month's clean points.",
            ],
          },
          {
            heading: "Keep staggered depth past seven rolling days",
            body: [
              "Maintain automated daily snapshots for 14 days, weekly checkpoints across 8 weeks and monthly archives cleanly tagged across 6–12 months—preventing subtle backdoors sitting weeks before detection from poisoning every recovery option.",
            ],
          },
        ],
      },
      {
        title: "Confirm backups capture every dependency—not half a site",
        body: [
          "Saving only a database or only theme styles leaves rebuilds crippled mid-crisis. Audit full scope upfront:",
        ],
        bullets: [
          "Clean source version control inside private Git repositories (essential for Next.js / custom stacks) alongside full CMS core/plugins/themes.",
          "Complete media `uploads/` folders, product imagery and uploaded PDFs/documents.",
          "Consistent transactional SQL database exports taken safely without corrupting active WooCommerce order rows.",
          "Secure encrypted copies of `.env` / `wp-config.php` secrets, payment webhook secrets and full DNS zone exports saved safely inside team password vaults.",
        ],
      },
      {
        title: "Test restores quarterly—because untested backups are guesswork",
        body: [
          "Too many directors discover only on launch-breaking crisis days that WordPress SQL imports cut off mid-table, media uploads stayed unlinked or PHP version updates broke restored themes.",
        ],
        numbered: [
          "Schedule a recurring 45-minute restore check once per quarter cleanly.",
          "Fetch fresh off-site files and SQL backups onto an isolated, password-locked staging sandbox.",
          "Re-hydrate the entire application and verify homepage paint, images, admin logins, search and `/contact/` form submissions.",
          "Measure actual end-to-end Recovery Time Objective (RTO) so emergency responses move calmly rather than scrambling.",
        ],
        callout: {
          tone: "tip",
          heading: "Static Next.js codebases in Git turn codebase recovery into minutes",
          text: "Rebuilding static Next.js builds straight from private Git repositories onto replacement cloud edge accounts takes minutes cleanly—limiting backup complexity strictly to form logs, media and DNS templates.",
        },
      },
      {
        title: "POPIA data protection rules apply strictly to stored backups too",
        body: [
          "Every backup archiving customer enquiry logs, subscriber lists, client CVs or ecommerce invoices holds protected personal information governed under POPIA Section 19. Encrypt archives in transit and at rest, restrict storage keys tightly to verified administrators, favour South African cloud regions (Cape Town/Johannesburg) where practical, and trim overly ancient retention clutter responsibly.",
        ],
      },
      {
        title: "Building a realistic disaster recovery runbook (RTO & verification)",
        body: [
          "Having encrypted cloud files sitting safely in Johannesburg or European storage accomplishes far less when nobody documented the sequence to reattach DNS, decrypt config keys and restore databases calmly under pressure. A concise one-page recovery runbook turns frightening outages into straightforward checklists.",
          "Document four practical recovery details securely inside your company password vault before an incident ever demands midnight troubleshooting:",
        ],
        subsections: [
          {
            heading: "Define honest Recovery Time (RTO) and Recovery Point (RPO) targets",
            body: [
              "An active WooCommerce retailer processing 40 daily orders cannot tolerate losing 7 days of order records (high RPO pain)—mandating daily or hourly SQL captures plus instant off-site transactional mail receipts. Conversely, an informational B2B brochure tracked cleanly in private Git recovers completely in minutes via clean re-builds plus modest weekly log archives.",
            ],
          },
          {
            heading: "Store recovery keys, registrar links and DNS exports outside web hosting",
            body: [
              "Avoid burying backup bucket keys solely inside a `.txt` note inside cPanel! Keep external cloud object keys, `.env` environment variables, registrar recovery steps and raw exported DNS zone files securely inside multi-person encrypted password vaults accessible cleanly to directors and lead engineers.",
            ],
          },
        ],
        bullets: [
          "Check quarterly restore drills verify not merely file downloads, but working mobile browsing, live `/contact/` submissions and SSL padlocks on staging.",
          "Prune obsolete multi-gigabyte unencrypted `backup-*.zip` files off local hosting partitions straight after verifying off-site cloud storage.",
        ],
      },
    ],
    midCta: {
      heading: "Never actually tested restoring your website backups from scratch?",
      text: "We inspect existing backup jobs cleanly, replace risky same-server zips with encrypted off-site cloud storage and prove restore readiness safely.",
      href: "/services/website-security/",
      label: "Verify Backup Resilience",
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
          "Active ecommerce stores and daily publishing CMS sites need automated daily off-site SQL + media snapshots (plus manual pre-patch captures). Stable brochure/static sites backed in Git work cleanly with automated weekly snapshots plus pre-release checkpoints.",
      },
      {
        question: "How long does restoring an entire site take when backups are clean?",
        answer:
          "When verified archives, vault secrets and registrar DNS access sit organised upfront, clean restoration onto fresh hosting typically runs 30 minutes to 2 hours.",
      },
      {
        question: "Should company email backups sit together inside website cPanel archives?",
        answer:
          "No—decouple business email completely onto Microsoft 365 or Google Workspace away from web hosts, and evaluate independent cloud M365/Workspace backup solutions where compliance calls for mail archiving.",
      },
      {
        question: "Do encrypted offshore cloud backup buckets comply with POPIA?",
        answer:
          "Under POPIA Section 72, document international storage transfers honestly under adequate encryption and vendor safeguards—or select local Johannesburg/Cape Town cloud object buckets to keep data inside South Africa directly.",
      },
      {
        question: "Can SoftKore set up isolated off-site backups without changing our web host?",
        answer:
          "Yes—encrypted off-site cloud backup pipelines run independently alongside existing hosting plans while isolating historical recovery keys safely off-server.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "http-security-headers-explained",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-04-15",
    title: "HTTP Security Headers Explained: HSTS, CSP & Clickjacking Protection",
    metaTitle: "HTTP Security Headers Explained (HSTS, CSP) | SoftKore",
    description:
      "Plain guide to HTTP security headers for South African business websites: Strict-Transport-Security (HSTS), Content-Security-Policy, X-Content-Type-Options and safe rollouts.",
    intro:
      "Run nearly any ordinary South African SME domain through a security header audit and it draws a bright red F grade—even on modern sites with zero WordPress plugins! Adding five concise HTTP response headers instructs modern browsers automatically to reject HTTPS downgrade snooping, invisible clickjacking frames and rogue injected scripts.",
    summary: [
      "What HTTP security headers do",
      "The 4 must-have baseline headers",
      "Understanding Content Security Policy",
      "Checking headers without breaking embeds",
    ],
    takeaways: [
      "Security headers ride unobtrusively ahead of HTML pages—blocking common browser-side attacks at essentially zero latency cost.",
      "Deploy four baseline low-risk headers first: `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy`.",
      "Turn on `Strict-Transport-Security` (HSTS) ONLY after confirming reliable SAN SSL auto-renewal across root and `www`.",
      "Test `Content-Security-Policy-Report-Only` cleanly before enforcement so Google Maps, analytics or PayFast widgets never break silently.",
      "Set headers centrally inside Nginx server configs or Cloudflare rules—remember static Next.js exports skip runtime `next.config` headers.",
    ],
    sections: [
      {
        title: "Essential HTTP security headers decoded in plain language",
        body: [
          "Before Chrome, Safari or Firefox displays a single pixel of your website, your web server or CDN transmits hidden HTTP header directives specifying security boundaries around cookies, frames, scripts and encryption upgrades.",
        ],
        table: {
          caption: "Recommended baseline HTTP security headers for SA business sites",
          headers: ["Header name", "Recommended value", "Browser exploit prevented"],
          rows: [
            [
              "`Strict-Transport-Security`",
              "`max-age=31536000; includeSubDomains` (post-SSL check)",
              "Eliminates HTTP downgrade sniffing across public hotel/coffee Wi-Fi",
            ],
            [
              "`X-Content-Type-Options`",
              "`nosniff`",
              "Stops browsers MIME-guessing disguised dangerous scripts from images",
            ],
            [
              "`X-Frame-Options` / CSP",
              "`DENY` or `frame-ancestors 'none'`",
              "Blocks attackers trapping your contact/login buttons inside invisible iframes",
            ],
            [
              "`Referrer-Policy`",
              "`strict-origin-when-cross-origin`",
              "Stops leaking private path/query parameters to third-party outbound sites",
            ],
            [
              "`Permissions-Policy`",
              "`camera=(), microphone=(), geolocation=()`",
              "Restricts unrequested embedded scripts probing hardware device APIs",
            ],
          ],
        },
      },
      {
        title: "Enable the four safe baseline headers right away",
        body: [
          "Owners often hold off implementing security headers fearing accidental homepage lockouts. Four foundational directives (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy`) carry near-zero risk across corporate websites while instantly lifting browser hygiene scores cleanly.",
        ],
        subsections: [
          {
            heading: "Verify reliable SSL renewals BEFORE raising HSTS to one year",
            body: [
              "`Strict-Transport-Security` instructs Chrome strictly never to fall back onto plain HTTP—and removes the user bypass button if certificates expire! Test initially at short `max-age=3600` alongside valid SAN SSL coverage across apex and `www` before stepping cleanly to `31536000`.",
            ],
          },
          {
            heading: "Never confuse anti-framing rules with Maps embeds",
            body: [
              "`X-Frame-Options: DENY` blocks *other external domains* from embedding *your pages* inside invisible frames; it does NOT stop you displaying Google Maps cleanly on your own `/contact/` page!",
            ],
          },
        ],
        callout: {
          tone: "warning",
          heading: "Skip HSTS `includeSubDomains` until every subdomain holds valid HTTPS",
          text: "Setting `includeSubDomains` globally when `mail.yourdomain.co.za` or an internal `crm.` portal lacks matching SSL certs locks team browsers completely out of those subdomains.",
        },
      },
      {
        title: "Deploy Content-Security-Policy (CSP) safely without breaking embeds",
        body: [
          "Content-Security-Policy delivers powerful defence-in-depth against injected JavaScript, skimmer tags and cross-site scripting (XSS) by listing strictly which trusted origins may execute scripts, styles, fonts or frames.",
          "Because premature aggressive rules inadvertently stop Google Tag Manager, embedded Maps or PayFast scripts running cleanly, deploy safely across staged phases:",
        ],
        numbered: [
          "Launch `Content-Security-Policy-Report-Only` first declaring known trusted origins (`'self'`, verified analytics, maps and gateway domains).",
          "Browse every page template—especially dropdown forms, FAQs, maps and ecommerce checkouts—scanning Chrome DevTools Console cleanly for blocked-resource alerts.",
          "Refine trusted whitelists neatly, then switch cleanly from `Report-Only` into live enforcing `Content-Security-Policy`.",
        ],
      },
      {
        title: "Where headers belong: Nginx / Cloudflare edge vs WordPress plugins",
        body: [
          "Skip installing bulky WordPress header plugins that inject latency on PHP paths while missing cached static downloads altogether. Configure headers cleanly once inside Nginx server blocks (`/etc/nginx/`), Apache config or Cloudflare Transform Rules.",
        ],
        bullets: [
          "Nginx / Apache server layer: ships consistent headers globally across HTML pages, downloads and API responses effortlessly.",
          "Static Next.js warning: remember that pure `output: 'export'` static files served straight off Nginx ignore `next.config.ts` runtime `headers()`—declare headers inside your live Nginx/CDN config!",
          "Keep clean comments documenting why external embeds or analytics domains sit whitelisted inside CSP rules.",
        ],
        callout: {
          tone: "tip",
          heading: "Verify live response headers after every reverse-proxy edit",
          text: "Run `curl -I https://www.yourdomain.co.za/` straight from a terminal after server deployments to make sure proxy layers did not drop or duplicate header lines silently.",
        },
      },
      {
        title: "Maintain header parity across redirects, API routes and error pages",
        body: [
          "Check not only `/` cleanly—spot-check 404 pages, `/contact/` endpoints and `www`/apex redirects so security guardrails hold uniform across every browser interaction without conflicting duplicate headers.",
        ],
      },
      {
        title: "Worked Nginx & Cloudflare configuration patterns without locking out tools",
        body: [
          "Seeing header syntax examples clarifies how clean and lightweight proper hardening looks in real production servers. Rather than piling on brittle CMS plugins, adding six clean lines inside your live reverse proxy or CDN edge layer locks every page consistently without touching application layout logic.",
          "Review how careful header separation keeps embedded maps, analytics and payment scripts working cleanly alongside strong defensive guardrails:",
        ],
        subsections: [
          {
            heading: "Practical Nginx / Edge header snippet overview",
            body: [
              "At baseline across corporate South African domains, enforce `Strict-Transport-Security: max-age=31536000; includeSubDomains` (once SAN SSL confirms solid), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy: camera=(), microphone=(), geolocation=()`. Keep directives clean and avoid legacy deprecated flags like `X-XSS-Protection: 1; mode=block` that confuse modern auditors.",
            ],
          },
          {
            heading: "Whitelisting Google Analytics, Maps and PayFast cleanly inside CSP",
            body: [
              "When layering strict `Content-Security-Policy`, list exact trusted script/connect origins rather than sloppy wildcard `*` permissions: e.g. `default-src 'self'`, permitting explicit trusted analytics (`https://www.googletagmanager.com`), embedded map frames via `frame-src https://www.google.com` while holding `frame-ancestors 'none'` tight so third parties still cannot frame YOUR pages silently.",
            ],
          },
        ],
        bullets: [
          "Verify live headers straight via terminal (`curl -sI https://www.yourdomain.co.za/ | grep -iE 'strict|content-security|x-frame|nosniff|referrer'`) post-deploy cleanly.",
          "Ensure `404` and static asset locations inherit identical security headers cleanly inside server configs—Nginx `add_header` inside child `location` blocks overrides parent headers unless repeated or defined consistently.",
          "Avoid copying giant random third-party CSP strings blindly from GitHub gists—every `'unsafe-inline'` or wide wildcard domain left unchecked weakens real cross-site script defence dramatically.",
          "Re-verify Chrome DevTools Console and Network response headers cleanly whenever connecting new payment modals, CRM trackers or Google Maps embeds so legitimate scripts keep running smoothly.",
        ],
        callout: {
          tone: "note",
          heading: "Double-check child Nginx location blocks when adding headers",
          text: "In Nginx configuration files, placing a caching `add_header Cache-Control` rule inside a static asset `location` block quietly erases parent server-level `HSTS` and `nosniff` directives unless placed inside an included shared security snippet.",
        },
      },
    ],
    midCta: {
      heading: "Scoring poorly on website security header checks right now?",
      text: "We configure clean Nginx/Cloudflare headers, validate CSP safely around maps/analytics and verify HSTS without locking out subdomains.",
      href: "/services/website-security/",
      label: "Harden Site Headers",
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
          "Missing headers carry zero direct Google ranking penalty—yet weak browser guardrails leave domains exposed to script injection and clickjacking abuse that rapidly destroy trust and rankings when compromised.",
      },
      {
        question: "Will adding CSP break Google Analytics, Tag Manager or WhatsApp links?",
        answer:
          "Not when staged properly with `Report-Only` verification so verified script/connect hosts appear cleanly in your allowlist beforehand.",
      },
      {
        question: "Do strict framing headers prevent Googlebot or social shares working?",
        answer:
          "Zero interference—Googlebot crawls HTML normally and OpenGraph/Twitter image tags read cleanly regardless of `X-Frame-Options`.",
      },
      {
        question: "Should we keep BOTH X-Frame-Options AND CSP frame-ancestors?",
        answer:
          "Yes—`frame-ancestors 'none'` serves modern browsers cleanly while keeping `X-Frame-Options: DENY` protects older legacy clients smoothly.",
      },
      {
        question: "Can SoftKore check and deploy security headers on an existing server?",
        answer:
          "Yes—we inspect current Nginx, hosting or Cloudflare headers, confirm clean embed allowlists and deploy verified rules without interrupting visitor traffic.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "stop-contact-form-spam-and-bots",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-05-06",
    title: "How to Stop Contact Form Spam and Bots Without Breaking Real Enquiries",
    metaTitle: "Stop Contact Form Spam & Bot Submissions | SoftKore",
    description:
      "Stop automated spam bots flooding your contact inbox cleanly using server-side validation, IP rate limits, honeypots and Turnstile without frustrating real SA buyers.",
    intro:
      "Clearing thirty automated crypto pitches and spam links out of `info@` every morning wastes real staff focus and hides genuine leads underneath clutter. Equally bad: slapping frustrating multi-screen CAPTCHA traffic-light quizzes onto forms drives impatient South African smartphone buyers straight onto competitor sites.",
    summary: [
      "Server-side rate limiting & checks",
      "Why client-only validation fails",
      "Friction-free anti-bot techniques",
      "Never miss real leads silently",
    ],
    takeaways: [
      "Browser `required` fields and client JavaScript checks block zero bots—scripts POST raw data straight to backend API routes.",
      "Enforce strict backend validation, payload length ceilings and HTTP 429 IP rate limiting on server and Cloudflare WAF layers.",
      "Combine accessible hidden honeypots + timing heuristics to drop dumb bots silently without touching genuine visitor UX.",
      "Where persistent interactive bots attack, pick privacy-friendly Cloudflare Turnstile over blurry 5-grid image puzzles.",
      "Submit monthly live enquiry tests so overly strict spam filters never block legitimate customer emails silently.",
    ],
    sections: [
      {
        title: "Why browser validation never slows automated contact bots",
        body: [
          "Humans load CSS stylesheets, scan dropdown options and tap Submit. Automated spam bots scrape endpoint targets (`/api/contact/`, `/wp-admin/admin-ajax.php`) directly and spray thousands of HTTP POST payloads concurrently across domains completely ignoring client HTML/JavaScript validation.",
          "Meaningful bot defence happens strictly at edge WAF rate rules and server-side API validation—never inside browser code alone.",
        ],
        table: {
          caption: "Comparing anti-spam defences across effectiveness & mobile UX friction",
          headers: ["Defence layer", "Stops real automated bots?", "Human mobile UX impact", "Implementation point"],
          rows: [
            [
              "HTML `required` / JS check only",
              "No — trivially bypassed by direct HTTP POST",
              "Zero friction",
              "Client browser only (not security)",
            ],
            [
              "Backend validation + Rate limits",
              "High (cuts flood volume & header abuse)",
              "Zero friction for real enquiries",
              "API handler + Nginx / Cloudflare edge rules",
            ],
            [
              "Accessible honeypot + timing check",
              "High against automated generic scrapers",
              "100% invisible to normal buyers & screen readers",
              "HTML field + server drop check",
            ],
            [
              "Turnstile (invisible/managed) vs puzzles",
              "Very High against headless browser spam",
              "Turnstile smooth; traffic-light quizzes hurt leads",
              "Edge token verified server-side cleanly",
            ],
          ],
        },
      },
      {
        title: "Layer 1: Enforce strict backend validation, sanitisation and rate limits",
        body: [
          "Treat every external form submission strictly as untrusted data—protecting inboxes from spam floods while fulfilling POPIA Section 19 input sanitisation safeguards.",
        ],
        bullets: [
          "Validate JSON schemas strictly server-side: sane field length limits, valid RFC email syntax and strict allowed service/budget options.",
          "Reject carriage-return (`\\r\\n`) header injection payloads cleanly across name and subject strings.",
          "Configure Cloudflare/Nginx rate limiting (e.g. restricting burst POST counts per IP triggering `HTTP 429 Too Many Requests`).",
          "Block repeated malicious link spam bursts across short message text areas carefully without penalising normal domain mentions.",
        ],
        callout: {
          tone: "warning",
          heading: "Never leak backend CRM or mail API tokens inside client browser JS",
          text: "Route form submissions purely through server-side handlers storing Resend, Postmark or CRM secrets safely in server environment variables.",
        },
      },
      {
        title: "Layer 2: Deploy invisible honeypots and low-friction verification",
        body: [
          "Silent technical traps strip 85%+ of ordinary automated nuisance floods cleanly before human buyers ever notice security exists.",
        ],
        subsections: [
          {
            heading: "Properly built accessible honeypot fields",
            body: [
              "Embed an extra innocuous field (`name='website_url'`, masked cleanly off-screen via CSS positioning with `tabIndex={-1}` and `aria-hidden='true'`). Real shoppers and assistive screen readers skip it seamlessly; automated form-filler bots populate every input mechanically, letting your backend discard outbound mail notifications quietly.",
            ],
          },
          {
            heading: "Cloudflare Turnstile over blurry motorcycle grids",
            body: [
              "When dedicated click-farm bots break past simple honeypots, prefer passive non-interactive verification tokens verified server-side cleanly rather than image quizzes that lock up inside WhatsApp or Instagram in-app mobile browsers.",
            ],
          },
        ],
      },
      {
        title: "Protect conversion clarity alongside anti-spam engineering",
        body: [
          "Excessively paranoid firewall rules occasionally trip South African mobile carrier NAT ranges or shared corporate VPNs silently—costing real deals with zero visible clue! Log filtered rejections cleanly in private server logs while preserving plain alternative enquiry channels (`tel:`, clickable email and WhatsApp) clearly on `/contact/`.",
        ],
        callout: {
          tone: "tip",
          heading: "Run a real monthly live test enquiry on your own site",
          text: "Spend 30 seconds each month submitting a genuine `/contact/` test from mobile data ensuring leads still clear spam filters and reach the right staff inbox inside ten seconds.",
        },
      },
      {
        title: "End-to-end contact pipeline hygiene cleanly in 4 steps",
        body: [
          "Pair clean form security seamlessly with email authentication so valid human leads receive fast replies that never slip into Gmail spam:",
        ],
        numbered: [
          "Apply IP rate-limiting on form POST routes at Nginx / Cloudflare WAF edge.",
          "Validate inputs strictly server-side + verify an accessible invisible honeypot cleanly.",
          "Transmit alerts strictly via authenticated domain mail APIs matching aligned SPF/DKIM/DMARC records.",
          "Keep clear inline user validation feedback on typos plus direct phone/WhatsApp fallback buttons visible.",
        ],
      },
      {
        title: "Diagnosing hidden delivery drops vs genuine anti-spam victories",
        body: [
          "Blocking 100% of bot junk feels pointless if tight thresholds simultaneously swallow two urgent R80,000 commercial enquiries quietly! Separating honest technical rejections clearly from mail delivery troubleshooting ensures every real buyer reaches your sales team reliably.",
          "Apply disciplined verification monitoring around form endpoints alongside clean anti-spam filtering:",
        ],
        subsections: [
          {
            heading: "Test valid edge cases that aggressive filters accidentally reject",
            body: [
              "Manual form blockers occasionally flag genuine leads awkwardly: executives writing brief valid enquiries using corporate VPN exit IPs, Gmail/Outlook auto-complete populating fields slightly fast (breaking overly aggressive sub-2-second timing rules!), or buyers copying clean tracking links inside message boxes. Keep server validation sane cleanly—avoid sub-second timers below ~800 ms and log filtered hits safely without silent blind blackholing.",
            ],
          },
          {
            heading: "Keep server logs and SPF/DKIM alignment healthy behind every form",
            body: [
              "Often business owners blame missing leads on 'form failure' when the web API actually succeeded—only for unaligned PHP mail to bounce straight into Microsoft 365 Quarantine! Monitor API HTTP status codes alongside dedicated mail-sender bounce alerts so genuine failures surface within minutes.",
            ],
          },
        ],
        bullets: [
          "Include clean human alternative channels (`tel:`, `mailto:` and direct WhatsApp links) directly beside forms on `/contact/`.",
          "Audit contact dropdown validations whenever adding new services or budget bands so mismatched front/back allowlists never reject real form sends.",
          "Configure private server alert pings whenever `/api/contact/` returns repeated HTTP 500 mailer timeouts, so expired transactional email API keys get caught within minutes rather than losing weeks of leads.",
          "Rotate anti-spam filter patterns calmly quarterly as automated bot kits adjust payload shapes over time.",
        ],
      },
    ],
    midCta: {
      heading: "Inbox drowning in form spam—or worried genuine leads drop silently?",
      text: "We audit contact APIs cleanly, deploy rate limits + invisible bot filtering, verify transactional mail alignment and test live inbox arrival.",
      href: "/services/website-security/",
      label: "Fix Contact Form Security",
    },
    related: [
      { label: "Website firewall & Cloudflare SA", href: "/guides/website-firewall-waf-cloudflare-south-africa/" },
      { label: "SPF, DKIM & DMARC guide SA", href: "/guides/spf-dkim-dmarc-guide-south-africa/" },
      { label: "POPIA website checklist", href: "/guides/popia-website-compliance-checklist/" },
      { label: "Website & cyber security", href: "/services/website-security/" },
    ],
    faqs: [
      {
        question: "Why does spam still arrive when every form field says `required`?",
        answer:
          "Browser `required` flags enforce only human clicks inside browsers; bots read your target POST URL cleanly and dispatch raw scripted requests bypassing HTML rules completely.",
      },
      {
        question: "Do interactive image CAPTCHAs hurt lead conversion rates noticeably?",
        answer:
          "Yes—annoying multi-screen puzzles frustrate mobile shoppers on cellular data and routinely malfunction inside social media in-app browsers. Server limits paired with invisible honeypots or Turnstile convert smoothly.",
      },
      {
        question: "Is enquiry form abuse tied to POPIA and cyber security?",
        answer:
          "Yes—unvalidated forms expose mail-relay spam abuse, cross-site injection inside backend admin screens and inbox floods burying real POPIA deletion requests.",
      },
      {
        question: "What response should bots see when triggering our honeypot?",
        answer:
          "Return a calm normal completion or generic validation status quietly while preventing outbound notification mail or CRM database writes on the server.",
      },
      {
        question: "Can SoftKore fix form spam on older WordPress Contact Form 7 / WPForms setups?",
        answer:
          "Yes—we combine Cloudflare WAF rate limiting on form endpoints, invisible anti-bot verification, stripped vulnerable PHP mailer plugins and SMTP/API delivery alignment.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "website-security-audit-what-it-checks",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-05-27",
    title: "What a Professional Website Security Audit Actually Checks (And What You Receive)",
    metaTitle: "What a Website Security Audit Checks (SA) | SoftKore",
    description:
      "Inside a real South African website security audit: why free automated PDF scans miss genuine threats, manual inspection steps and your prioritised remediation plan.",
    intro:
      "Paying for an automated 5-minute online URL vulnerability scan creates a dangerous false sense of safety—printing neat charts about minor cookie flags while completely missing stale ex-developer hosting logins, publicly exposed `.sql` database exports, unsigned payment webhooks or hidden PHP backdoors. A real website security audit pairs technical tooling with deep hands-on inspection.",
    summary: [
      "Why automated PDF scans miss real risks",
      "Codebase, plugins & dependency checks",
      "Hosting, logins, SSL & DNS scope",
      "What your prioritised fix report looks like",
    ],
    takeaways: [
      "External black-box scanners inspect public HTML only—never seeing server logins, backup restores or leaked secrets.",
      "Manual audits span four layers cleanly: Code & Dependencies, Hosting & Backups, Perimeter TLS/WAF/DNS, and POPIA Form Hygiene.",
      "Reviewing Google Search Console Security Issues catches cloaked search spam completely invisible on office browsers.",
      "Expect a concise risk-ranked remediation plan in plain English—never 90 padded pages of generic raw scanner noise.",
      "Proactive preventative audits cost far less than emergency hack recovery, de-indexing shocks and brand embarrassment.",
    ],
    sections: [
      {
        title: "Why automated 'PDF vulnerability scans' leave giant blind spots",
        body: [
          "Public black-box scanners merely ping public pages quickly guessing common paths. While handy for flagging outdated header strings or expired certificates, automated scanners cannot check whether former contractors still hold registrar access or whether encrypted backups actually restore without errors.",
        ],
        table: {
          caption: "Automated URL scans vs hands-on engineering security audits",
          headers: ["Audit layer", "Automated scanner PDF alone", "Professional manual + automated audit"],
          rows: [
            [
              "Code & CMS Plugins",
              "Guesses version strings loosely from CSS links",
              "Inspects exact installed plugins, custom snippets, `uploads/` & npm advisories",
            ],
            [
              "Hosting & Accounts",
              "Totally blind behind server firewall",
              "Audits cPanel/SSH/WP users, MFA gaps, permissions & stale `/staging/` directories",
            ],
            [
              "Backups & Recovery",
              "Zero visibility or restore verification",
              "Verifies off-site encryption, retention depth & isolated staging restore proof",
            ],
            [
              "Forms & Checkout APIs",
              "Checks visible input markup lightly",
              "Inspects server validation, rate limits, secret exposure & PayFast/Yoco webhooks",
            ],
            [
              "Email & Domain Control",
              "Basic DNS record lookup only",
              "Audits `.co.za` legal registrant, Registrar Lock, dangling CNAMEs & full DMARC",
            ],
          ],
        },
      },
      {
        title: "Codebase, plugins, hosting access and backup inspection scope",
        body: [
          "Methodical engineering audits work inside-out thoroughly across code files, hosting access accounts and recovery resilience rather than skimming superficial homepages.",
        ],
        subsections: [
          {
            heading: "Application codebase, CMS plugins & endpoint security",
            body: [
              "Review WordPress core/plugin patch hygiene, signs of 'nulled' extensions, `npm audit` vulnerability trails, executable PHP dropped inside upload folders, leaked `.env` tokens inside browser bundles, and server validation across enquiry/checkout/webhook endpoints.",
            ],
          },
          {
            heading: "Hosting control panel logins, SSH permissions & restore proof",
            body: [
              "Inventory every active administrator across WordPress, hosting control panels, FTP/SFTP, SSH keys, database users and Search Console—catching departed staff/ex-agencies, absent MFA, abandoned `/dev/` or `/test/` staging copies and verifying whether off-site backups truly restore cleanly.",
            ],
          },
        ],
      },
      {
        title: "Perimeter SSL/TLS, security headers, WAF, DNS and POPIA exposure",
        body: [
          "At the public network edge, auditors check whether visitors, email clients and Googlebot see hard trustworthy infrastructure:",
        ],
        bullets: [
          "TLS/SSL SAN coverage across bare root + `www`, Cloudflare `Full (Strict)` state and clean canonical HTTPS redirects.",
          "Missing HTTP security headers (`HSTS`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, scoped `CSP`).",
          "Cloudflare WAF rate-limiting coverage on login/contact URLs and whether raw origin hosting IPs stay hidden cleanly.",
          "ZACR/`.co.za` legal registrant verification, Registrar Transfer Lock, dangling subdomain CNAME cleanup and aligned `SPF`, `DKIM` and `DMARC` mail rules.",
          "Google Search Console Security Issues + POPIA Section 19 practical exposure checks (unneeded form fields, dead trackers, exposed CSV dumps).",
        ],
        callout: {
          tone: "note",
          heading: "Non-destructive audits keep live revenue sites completely online",
          text: "Professional codebase, access and DNS audits execute safely via read-only inspections and staging clones—never running destructive stress floods over trading hours.",
        },
      },
      {
        title: "What your final report and ranked remediation roadmap delivers",
        body: [
          "Forget intimidating 80-page automated PDFs filled with theoretical CVSS severity filler nobody translates into business risk. Your report breaks clear findings directly into practical execution tiers:",
        ],
        numbered: [
          "Urgent / Critical (Resolve inside 24–72 hours): Active malware indicators, public backup dumps, unauthenticated webhooks or ex-staff admin logins lacking MFA.",
          "High-Priority Hardening (Complete within 2–4 weeks): HTTP security headers, WAF rate limiting, off-site encrypted backup isolation and DMARC enforcement.",
          "Ongoing Preventative Routine: Predictable patch cycle, quarterly staging restore drills and continuous Search Console/SSL monitoring alerts.",
        ],
        callout: {
          tone: "tip",
          heading: "Clear action lists serve either internal devs or external implementation cleanly",
          text: "Every vulnerability entry states clearly where the exposure sits, why it matters commercially in plain English and exact steps for resolution—usable immediately by your developer or our team.",
        },
      },
      {
        title: "When South African SMEs should book an audit before an emergency hits",
        body: [
          "Waiting until Google drops traffic behind red security alerts flips a calm afternoon review into an expensive crisis. Schedule preventative audits deliberately around key inflection points:",
        ],
        bullets: [
          "Directly after changing web agencies, freelancers or internal marketing coordinators.",
          "Before ramping Google Search Ads budgets onto older WordPress or WooCommerce websites.",
          "Ahead of launching payment gateway checkouts, customer portals or sensitive POPIA intake workflows.",
          "Annually as prudent corporate governance for legal, accounting, medical and B2B operations.",
        ],
      },
      {
        title: "Worked audit discoveries: what real manual reviews uncover weekly",
        body: [
          "Scanning thousands of South African SME setups proves automated external tools miss the precise human mistakes responsible for real breaches. Seeing typical findings from actual manual security audits shows instantly why deep code, login and DNS checks pay back immediately.",
          "Nearly every initial audit uncovers at least two hidden urgent exposures beneath ordinary clean homepages:",
        ],
        subsections: [
          {
            heading: "Forgotten ex-supplier privileges and public server leftovers",
            body: [
              "Manual login inventories routinely spot four active Administrator accounts belonging to long-departed interns or former marketing agencies lacking MFA—frequently alongside full uncompressed `website-old-2023.sql` exports left sitting openly at web root `/backup/` where bots download client tables straight over HTTP.",
            ],
          },
          {
            heading: "Dangling vendor CNAMEs and weak payment/form API practices",
            body: [
              "DNS reviews regularly discover expired campaign `CNAME` subdomains primed for phishing takeovers alongside frontend contact forms calling CRM endpoints with exposed hardcoded secret tokens or ecommerce webhooks trusting client redirect strings without verifying HMAC signatures cleanly.",
            ],
          },
        ],
        bullets: [
          "Verify written scope beforehand so audits check application, hosting, DNS, mail alignment AND Search Console together holistically.",
          "Schedule concise 6-month re-audits (or post-developer change checks) cleanly so new team tools or staging edits do not re-open fixed doors.",
          "Keep signed clean evidence of resolved audit findings alongside off-site backup restore logs—proving proactive POPIA Section 19 care to corporate clients and compliance teams.",
        ],
      },
    ],
    midCta: {
      heading: "Want crisp clarity on where your website sits exposed right now?",
      text: "Book a hands-on website security audit—we inspect code, logins, hosting, backups, DNS and POPIA hygiene and deliver a clear priority fix list.",
      href: "/services/website-security/",
      label: "Request a Security Audit",
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
          "No—inspections proceed non-destructively while taking clean snapshots upfront so customer browsing and orders never pause.",
      },
      {
        question: "What logins or access do engineers need for a real audit?",
        answer:
          "External checks inspect public URLs and headers first; deep audits use delegated read/admin access to codebase/CMS, hosting panel, Cloudflare/DNS and Google Search Console.",
      },
      {
        question: "Does passing an audit guarantee zero future cyber attacks?",
        answer:
          "Security works continuously—audits close known architectural openings cleanly, which then remain resilient via ongoing patching, MFA hygiene, backups and 24/7 monitoring.",
      },
      {
        question: "Can SoftKore handle fixing every finding listed in our audit report?",
        answer:
          "Yes—you keep the prioritised engineering roadmap outright and can assign part or all of the remediation sprint straight to our team.",
      },
      {
        question: "How long does a typical South African SME website security audit take?",
        answer:
          "Focused audits typically complete inside 3 to 5 working days once temporary repository, hosting and Search Console access confirm.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
  {
    slug: "protecting-domain-hijacking-co-za",
    category: "Website & Cyber Security",
    status: "published",
    scheduledFor: "2027-06-17",
    title: "How to Protect Your .co.za Domain and DNS From Hijacking and Expired Renewals",
    metaTitle: "Protect Your .co.za Domain From Hijacking | SoftKore",
    description:
      "Stop .co.za domain hijacking, unauthorised DNS edits, subdomain takeovers and accidental renewal drops with verified ZACR ownership, Registrar Lock and MFA.",
    intro:
      "Every week across South Africa, legitimate companies watch their website, Google rankings and company email go dark simultaneously—not from compromised hosting, but from an expired `.co.za` invoice bouncing into an ex-staffer's mailbox, a former agency retaining registrar registrant control, or phished DNS credentials rerouting mail. Locking down domain control takes twenty minutes once cleanly.",
    summary: [
      "Fixing .co.za registrant ownership",
      "Registrar lock & transfer MFA",
      "Dedicated billing & alert emails",
      "Auditing DNS records quarterly",
    ],
    takeaways: [
      "Check WHOIS / ZACR records right now to ensure YOUR registered company owns the `.co.za` legally—not an outside freelancer.",
      "Enable app/hardware MFA across BOTH your domain registrar AND external authoritative DNS account (avoiding SIM-swap SMS gaps).",
      "Keep Registrar Transfer Lock (`clientTransferProhibited`) enabled permanently across live and defensive domains.",
      "Prevent single-point renewal outages: turn auto-renew ON with a corporate card plus dual independent non-domain alert emails.",
      "Audit DNS zones quarterly deleting abandoned `CNAME` subdomains pointing at dead SaaS tools (subdomain-takeover prevention).",
    ],
    sections: [
      {
        title: "Verify legal .co.za registrant ownership under ZACR today",
        body: [
          "The nastiest surprise hits SMEs when parting ways with a contractor or renewing finance systems—only to discover your `.co.za` domain sits inside a former freelancer's consolidated reseller account listed under *their* details.",
          "Under South African ZACR registry processes, transfer confirmations authenticate straight to the recorded administrative/registrant email address. Verify inside your registrar portal today that your registered business entity holds direct primary registrant control.",
        ],
        table: {
          caption: "Domain & DNS control hygiene checklist for South African companies",
          headers: ["Security check", "Healthy state", "Business damage if neglected"],
          rows: [
            [
              "Legal Registrant Owner",
              "Your legal company entity & audited company domain mailbox",
              "Ex-supplier disagreements can block transfers or freeze DNS hostage",
            ],
            [
              "Registrar Transfer Lock",
              "`clientTransferProhibited` kept active permanently",
              "Phished registrar logins let thieves transfer domains away silently",
            ],
            [
              "Registrar & DNS MFA",
              "Authenticator app / hardware key on every portal login",
              "Stolen passwords allow instant `A` phishing & `MX` email interception",
            ],
            [
              "Renewal & Alert Path",
              "Auto-renew ON + corporate card + dual non-domain alert addresses",
              "Missed renewal suspends domain overnight—killing site & all `@company` mail",
            ],
          ],
        },
        callout: {
          tone: "warning",
          heading: "Never keep renewal alerts strictly at `@yourdomain.co.za`!",
          text: "If an overdue invoice ever triggers brief suspension on `yourcompany.co.za`, final urgent notices emailed ONLY to `info@yourcompany.co.za` bounce back unreachable! Keep a resilient external director notification address on billing alerts.",
        },
      },
      {
        title: "Lock down Registrar Transfer Lock and both DNS/Registrar MFA",
        body: [
          "Modern domain hijackers ignore web servers completely—they target poorly protected registrar or CDN DNS panels, redirect your website `A` record onto a convincing phishing clone and quietly swap `MX` mail paths to intercept incoming banking links and password resets.",
        ],
        subsections: [
          {
            heading: "Enforce authenticator MFA on Registrar AND external DNS (Cloudflare)",
            body: [
              "When authoritative nameservers delegate onto Cloudflare, Route 53 or separate DNS platforms, protecting only the `.co.za` registrar leaves attackers free to rewrite IP and mail records inside DNS! Mandate unique password-vault credentials plus non-SMS TOTP app or hardware MFA on both portals.",
            ],
          },
          {
            heading: "Lock Registrar Transfer Lock permanently between intentional moves",
            body: [
              "Confirm `clientTransferProhibited` Transfer Lock sits active on every production and secondary defensive domain—unlocking momentarily ONLY during pre-authorised registrar migrations.",
            ],
          },
        ],
      },
      {
        title: "Eliminate accidental .co.za domain expiry and suspension",
        body: [
          "`.co.za` annual renewals cost pennies compared with enterprise IT tools, yet active trading companies still go offline routinely when corporate credit cards expire, finance staff rotate or old invoices land inside Spam.",
        ],
        numbered: [
          "Log exact renewal dates for EVERY active and parked defensive domain inside a shared company asset ledger.",
          "Switch auto-renew ON tied cleanly to a corporate virtual or reliable business card—not a departing employee's card.",
          "List at least two monitored notification emails (including a resilient non-domain backup alert address).",
          "Connect external uptime & domain-expiry monitoring pinging alerts 30 days and 14 days ahead of expiry dates.",
        ],
      },
      {
        title: "Scrub dangling CNAME subdomains every quarter (Subdomain Takeovers)",
        body: [
          "Running temporary campaign pages (`events.company.co.za`) via `CNAME` pointing at SaaS providers like Shopify, Heroku or Unbounce—then closing that SaaS subscription later without removing the DNS record—leaves a severe **Subdomain Takeover** opening.",
          "Automated bots sweep DNS zones daily hunting dangling abandoned CNAME targets, claim that deleted external service name cleanly, and instantly host phishing logins live straight on your authentic `.co.za` subdomain!",
        ],
        bullets: [
          "Audit every `A`, `AAAA`, `CNAME`, `MX` and `TXT` record quarterly and purge decommissioned vendor pointers immediately.",
          "Ensure unused defensive `.com` or `.co.za` aliases keep strict `v=spf1 -all` and `p=reject` DMARC records published.",
        ],
        callout: {
          tone: "tip",
          heading: "Anchor accounts cleanly on monitored role mailboxes (`domains@`)",
          text: "Avoid anchoring crucial registrar master ownership onto individual employee emails like `thabo@`—anchor controls safely under role-monitored mailboxes with strict MFA and multi-director recovery access.",
        },
      },
      {
        title: "Deploy automated DNS change alerting for rapid detection",
        body: [
          "Pair Registrar Lock cleanly with external DNS & uptime monitoring pinging authoritative `A`, `NS`, `MX` and `TXT` signatures continuously—triggering instant SMS/email alarms within minutes if an unexpected nameserver change or IP redirect ever occurs.",
        ],
      },
      {
        title: "Clean step-by-step recovery & domain lock checklist for SA directors",
        body: [
          "Checking who actually controls your `.co.za` domain takes ten quiet minutes on a Tuesday morning—and avoids chaotic days scrambling across registry escalation forms mid-crisis. Whether verifying clean corporate ownership or untangling old reseller accounts, walk calmly through this operational hygiene pass:",
          "Confirm legal authority, payment resilience and DNS audit alerts together across every primary and defensive domain:",
        ],
        subsections: [
          {
            heading: "Transferring domain ownership cleanly away from an ex-agency",
            body: [
              "Run a quick `.co.za` WHOIS check right now to verify exact registrar name and listed registrant entity. Request a polite formal account push or EPP/transfer ticket moving domains directly into your company-controlled registrar dashboard—ensuring the ZACR administrative vote confirms cleanly straight via your monitored domain mailbox with Registrar Lock re-enabled immediately upon landing.",
            ],
          },
          {
            heading: "Securing external DNS providers beside registrar controls",
            body: [
              "Remember splitting registrar control (e.g. local SA registrar) from authoritative DNS (e.g. Cloudflare) doubles safety ONLY when BOTH portals enforce unique password-vault logins, hardware/TOTP MFA and zero stale team users. Never leave old freelance technical admins holding unrestricted Super Administrator privileges indefinitely.",
            ],
          },
        ],
        bullets: [
          "Confirm secondary defensive `.com` / typo domains carry auto-renew ON, Registrar Lock ON and `v=spf1 -all` mail lock.",
          "Record registrar PINs, backup MFA codes and EPP recovery documents cleanly inside company director vaults.",
        ],
      },
    ],
    midCta: {
      heading: "Unsure who legally controls your .co.za domain or DNS records?",
      text: "We verify ZACR registrant ownership, strip dangerous dangling CNAMEs, lock Registrar + Cloudflare MFA and wire continuous DNS change alerts.",
      href: "/services/website-security/",
      label: "Audit Domain & DNS Control",
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
          "They instantly steer browser visitors onto phishing clones and capture incoming company email by swapping `MX` mail targets—all while your own hosting files show zero intrusion signs.",
      },
      {
        question: "How fast does an unpaid .co.za domain vanish offline?",
        answer:
          "The moment expiry transitions into registry suspension, your website drops dead and incoming email bounces immediately. Timely recovery inside ZACR grace windows avoids domains dropping publicly onto open auctions.",
      },
      {
        question: "Can a previous freelancer withhold our .co.za domain over a disagreement?",
        answer:
          "Recovering `.co.za` registrations listed under an ex-agency's entity triggers slow formal registry/ADR disputes—getting proper company registrant ownership locked down early avoids leverage traps completely.",
      },
      {
        question: "Should we enable DNSSEC on our .co.za domain too?",
        answer:
          "Yes where both registrar and DNS host (like Cloudflare) integrate smoothly—DNSSEC cryptographically signs DNS lookups preventing cache-poisoning spoofs between resolvers.",
      },
      {
        question: "Why check DNS records quarterly even when nothing changed internally?",
        answer:
          "Old vendor subscriptions get cancelled quietly without notifying web teams—leaving stale CNAME subdomains and unused SPF `include:` entries exposed unless reviewed cleanly quarterly.",
      },
    ],
    priority: 0.72,
    published: "2026-11-20",
    updated: "2026-11-20",
  },
];
