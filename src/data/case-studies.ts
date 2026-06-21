export type CaseStudy = {
  title: string;
  category: string;
  challenge: string;
  intervention: string;
  outcome: string;
  signals: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "SEO recovery foundation",
    category: "Search architecture",
    challenge:
      "A site can look modern and still leak search value through weak URL structure, missing redirects, thin location coverage, and unclear page intent.",
    intervention:
      "We rebuild the technical foundation: sitemap coverage, redirect rules, service-page structure, page metadata, and safer release checks.",
    outcome:
      "The business gets a cleaner search footprint, fewer dead paths, and a site structure that can grow without becoming messy.",
    signals: ["Redirect map", "Sitemap coverage", "Search intent", "Release checks"],
  },
  {
    title: "Conversion path refresh",
    category: "Website UX",
    challenge:
      "Visitors often understand the service only after too much scrolling, while calls to action compete with vague copy and generic sections.",
    intervention:
      "We clarify the offer, tighten the first viewport, restructure service pages, and make contact paths feel deliberate on mobile and desktop.",
    outcome:
      "The site becomes easier to trust, easier to scan, and easier to act on from the first meaningful screen.",
    signals: ["Hero clarity", "Mobile CTAs", "Trust proof", "Form flow"],
  },
  {
    title: "Operations-ready product layer",
    category: "Apps and systems",
    challenge:
      "Internal workflows often begin as spreadsheets, inboxes, and repeated manual checks that slow teams down as the business grows.",
    intervention:
      "We design practical portals, dashboards, admin views, workflow states, deployment paths, and care plans around daily operations.",
    outcome:
      "The result is a digital system that supports the work after launch instead of becoming another thing the team has to manage.",
    signals: ["Dashboards", "Admin tools", "Cloud care", "Workflow states"],
  },
];
