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
      "Slow, outdated pages cost you enquiries every day.",
    ctaLabel: "Explore web development",
    category: "Website Development",
    problem:
      "A business has outgrown its website, but it is worried that a rebuild will damage the rankings and enquiries it already has.",
    approach:
      "We record existing URLs and search performance, keep the pages that earn traffic, redirect the rest to the closest replacement, and check everything again on the live site.",
    deliverable:
      "A faster website that works well on phones, with clear service pages, every old link still working, security switched on and visitor tracking ready from day one.",
    image: "/images/softkore-case-web.webp",
    imageAlt: "A responsive business website displayed on a laptop and phone.",
    href: "/services/web-development/",
  },
  {
    title: "SEO audits and indexing recovery",
    problemHeadline: "Websites invisible on Google search",
    problemSummary:
      "If Google can't show your pages, customers can't find you.",
    ctaLabel: "Explore SEO services",
    category: "Search & SEO",
    problem:
      "A website gets few visitors from Google, or Google's own report (Search Console) shows that many of its pages are not appearing in search.",
    approach:
      "We scan every page, read your Google Search Console report and work out whether the problem is technical, the wording on your pages, or how much Google trusts your site, before we recommend anything.",
    deliverable:
      "A fix list in order of importance, stronger or combined pages, a tidier page list for Google and a plain-language monthly report.",
    image: "/images/softkore-case-growth.webp",
    imageAlt: "A search performance dashboard on a laptop.",
    href: "/services/seo-services/",
  },
  {
    title: "Website security hardening and hack recovery",
    problemHeadline: "Hacked, vulnerable, or unmonitored sites",
    problemSummary:
      "Hacks, spam and missing backups put your business at risk.",
    ctaLabel: "Explore website security",
    category: "Cyber Security",
    problem:
      "A business website has been hacked, is sending visitors to spam sites, or runs on outdated software with weak passwords and no tested way to restore it.",
    approach:
      "We check the website and its hosting, remove harmful code, close security gaps, switch on strong logins and a firewall, and set up backups stored somewhere safe.",
    deliverable:
      "A clean, locked-down website with the padlock (HTTPS) on, a firewall, tested backups and ongoing security checks.",
    image: "/images/softkore-case-systems.webp",
    imageAlt: "A website security monitoring and protection dashboard displayed on a laptop.",
    href: "/services/website-security/",
  },
];
