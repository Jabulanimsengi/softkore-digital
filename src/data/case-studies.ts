export type ProjectType = {
  title: string;
  problemHeadline: string;
  problemSummary: string;
  ctaLabel: string;
  category: string;
  problem: string;
  approach: string;
  deliverable: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const projectTypes: ProjectType[] = [
  {
    title: "Website rebuilds that protect search traffic",
    problemHeadline: "Outdated websites that lose enquiries",
    problemSummary:
      "Slow load times, broken mobile layouts, and unclear service pages cost you leads every day. We rebuild your site for speed and conversions while protecting your existing Google rankings with clean redirects.",
    ctaLabel: "Explore web development",
    category: "Website Development",
    problem:
      "A business has outgrown its website, but it is worried that a rebuild will damage the rankings and enquiries it already has.",
    approach:
      "We record existing URLs and search performance, keep the pages that earn traffic, redirect the rest to the closest replacement, and check everything again on the live site.",
    deliverable:
      "A faster, mobile-first website with clear service pages, a tested redirect map, security headers and tracking in place from launch.",
    image: "/images/softkore-case-web.webp",
    imageAlt: "A responsive business website displayed on a laptop and phone.",
    href: "/services/web-development/",
  },
  {
    title: "SEO audits and indexing recovery",
    problemHeadline: "Websites invisible on Google search",
    problemSummary:
      "Pages stuck out of Google's index, technical crawl errors, and weak service copy keep qualified buyers from finding you. We audit Search Console, fix indexing blockers, and strengthen the pages that drive enquiries.",
    ctaLabel: "Explore SEO services",
    category: "Search & SEO",
    problem:
      "A website gets little traffic from Google, or Search Console shows that many of its pages are not being indexed.",
    approach:
      "We crawl every page, review the Search Console data, and work out whether the problem is technical, content quality or authority before recommending any changes.",
    deliverable:
      "A prioritised fix list, improved or merged pages, a cleaner sitemap and monthly reporting in plain language.",
    image: "/images/softkore-case-growth.webp",
    imageAlt: "A search performance dashboard on a laptop.",
    href: "/services/seo-services/",
  },
  {
    title: "Website security hardening and hack recovery",
    problemHeadline: "Hacked, vulnerable, or unmonitored sites",
    problemSummary:
      "Malware, spam redirects, outdated plugins, and missing backups put client trust and uptime at risk. We clean compromised sites, harden servers and headers, configure WAF protection, and keep automated backups running.",
    ctaLabel: "Explore website security",
    category: "Cyber Security",
    problem:
      "A business website has been compromised by malware or spam redirects, or runs on outdated software with weak access controls and no tested recovery plan.",
    approach:
      "We audit the site and hosting environment, clean malicious code, patch vulnerabilities, enforce strong authentication and firewall rules, and set up off-site backups.",
    deliverable:
      "A cleaned, hardened website with SSL and security headers, firewall protection, verified backups and ongoing security monitoring.",
    image: "/images/softkore-case-systems.webp",
    imageAlt: "A website security monitoring and protection dashboard displayed on a laptop.",
    href: "/services/website-security/",
  },
];
