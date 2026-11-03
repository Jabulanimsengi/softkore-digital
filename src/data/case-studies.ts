export type ProjectType = {
  title: string;
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
    category: "Website & SEO",
    problem:
      "A business has outgrown its website, but it is worried that a rebuild will damage the rankings and enquiries it already has.",
    approach:
      "We record existing URLs and search performance, keep the pages that earn traffic, redirect the rest to the closest replacement, and check everything again on the live site.",
    deliverable:
      "A faster, mobile-first website with clear service pages, a tested redirect map and tracking in place from launch.",
    image: "/images/softkore-case-web.webp",
    imageAlt: "A responsive business website displayed on a laptop and phone.",
    href: "/services/web-development/",
  },
  {
    title: "SEO audits and indexing recovery",
    category: "Search",
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
    title: "Business systems that replace spreadsheets",
    category: "Web applications",
    problem:
      "Daily work runs on spreadsheets, inboxes and WhatsApp groups, so information gets lost and admin grows with the business.",
    approach:
      "We map the real workflow, users and permissions, then build a focused first version around the task that wastes the most time.",
    deliverable:
      "A secure web application with admin views, user roles, reports and integrations, plus support after launch.",
    image: "/images/softkore-case-systems.webp",
    imageAlt: "A booking and operations dashboard displayed across a laptop and phone.",
    href: "/services/custom-web-applications/",
  },
];
