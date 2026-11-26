/**
 * Editorial & SEO conventions for GuidePage entries:
 * - metaTitle: <= 60 characters; description: 140–160 characters; priority: ~0.72–0.78.
 * - updated (YYYY-MM-DD): drives sitemap.xml <lastmod>, so bump whenever an article changes.
 * - RichText inline formatting: **bold**, *italic*, `code`, and root-relative [anchor](/path/)
 *   links work in intro, takeaways, section prose/lists/tables/callouts, and faqs[].answer.
 * - Never put markdown links inside faqs[].question (renders inside <summary>).
 * - Do not put `= [` inside comments in guide-batch files (publish-next-guide.mjs scans for `= [`).
 */
export type GuideCategory =
  | "Website Design & Development"
  | "SEO Services"
  | "Website & Cyber Security"
  | "Industry Playbooks";

export type GuideStatus = "published" | "scheduled";

export type GuideCallout = {
  tone: "tip" | "warning" | "note";
  heading: string;
  text: string;
};

export type GuideTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type GuideSubsection = {
  heading: string;
  body: string[];
  bullets?: string[];
  numbered?: string[];
};

export type GuideSection = {
  id?: string;
  title: string;
  body: string[];
  bullets?: string[];
  numbered?: string[];
  subsections?: GuideSubsection[];
  table?: GuideTable;
  callout?: GuideCallout;
};

export type GuideMidCta = {
  heading: string;
  text: string;
  href: string;
  label: string;
};

export type GuidePage = {
  slug: string;
  category: GuideCategory;
  status: GuideStatus;
  scheduledFor?: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  summary: string[];
  takeaways?: string[];
  sections: GuideSection[];
  midCta?: GuideMidCta;
  related: Array<{ label: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  priority: number;
  published: string;
  updated: string;
};
