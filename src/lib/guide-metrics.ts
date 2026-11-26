import { stripInlineMarkdown } from "@/components/RichText";
import type {
  GuideCategory,
  GuideMidCta,
  GuidePage,
} from "@/data/guide-batches/types";

export type GuideReadingStats = {
  words: number;
  minutes: number;
  label: string;
  isoDuration: string;
};

export type GuideTocItem = {
  id: string;
  number: string;
  title: string;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function wordCountOf(value: string | undefined): number {
  if (!value) return 0;
  const trimmed = stripInlineMarkdown(value).trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function listWordCount(items: string[] | undefined): number {
  if (!items || items.length === 0) return 0;
  return items.reduce((sum, item) => sum + wordCountOf(item), 0);
}

export function countGuideWords(guide: GuidePage): number {
  let words = 0;

  words += wordCountOf(guide.title);
  words += wordCountOf(guide.intro);
  words += listWordCount(
    guide.takeaways && guide.takeaways.length > 0
      ? guide.takeaways
      : guide.summary,
  );

  for (const section of guide.sections) {
    words += wordCountOf(section.title);
    words += listWordCount(section.body);
    words += listWordCount(section.bullets);
    words += listWordCount(section.numbered);

    if (section.subsections) {
      for (const sub of section.subsections) {
        words += wordCountOf(sub.heading);
        words += listWordCount(sub.body);
        words += listWordCount(sub.bullets);
        words += listWordCount(sub.numbered);
      }
    }

    if (section.table) {
      words += wordCountOf(section.table.caption);
      words += listWordCount(section.table.headers);
      for (const row of section.table.rows) {
        words += listWordCount(row);
      }
    }

    if (section.callout) {
      words += wordCountOf(section.callout.heading);
      words += wordCountOf(section.callout.text);
    }
  }

  for (const faq of guide.faqs) {
    words += wordCountOf(faq.question);
    words += wordCountOf(faq.answer);
  }

  return words;
}

export function getGuideReadingStats(guide: GuidePage): GuideReadingStats {
  const words = countGuideWords(guide);
  const minutes = Math.max(2, Math.ceil(words / 220));
  return {
    words,
    minutes,
    label: `${minutes} min read`,
    isoDuration: `PT${minutes}M`,
  };
}

export function getGuideTocItems(guide: GuidePage): GuideTocItem[] {
  const usedIds = new Map<string, number>();
  const items: GuideTocItem[] = guide.sections.map((section, index) => {
    const baseId = section.id
      ? slugifyHeading(section.id)
      : slugifyHeading(section.title) || `section-${index + 1}`;
    const seen = usedIds.get(baseId) ?? 0;
    usedIds.set(baseId, seen + 1);
    const id = seen === 0 ? baseId : `${baseId}-${seen + 1}`;

    return {
      id,
      number: String(index + 1).padStart(2, "0"),
      title: section.title,
    };
  });

  if (guide.faqs.length > 0) {
    items.push({
      id: "faq",
      number: String(guide.sections.length + 1).padStart(2, "0"),
      title: "Frequently asked questions",
    });
  }

  return items;
}

export function getGuideCategoryAnchor(category: GuideCategory): string {
  switch (category) {
    case "Website Design & Development":
      return "/guides/#websites";
    case "SEO Services":
      return "/guides/#seo";
    case "Website & Cyber Security":
      return "/guides/#security";
    case "Industry Playbooks":
      return "/guides/#industries";
  }
}

export function getDefaultMidCta(category: GuideCategory): GuideMidCta {
  switch (category) {
    case "Website Design & Development":
      return {
        heading: "Planning a website or online store build?",
        text: "Get a clear written scope in rand covering your pages, mobile speed, Google set-up and security before you commit to a supplier.",
        href: "/services/web-development/",
        label: "Explore web development",
      };
    case "SEO Services":
      return {
        heading: "Want a free SEO audit of your website?",
        text: "We check Google Search Console, what is stopping your pages from showing up, and how local buyers search, then send a clear fix list for free.",
        href: "/contact/?service=free-seo-audit#contact-form",
        label: "Get my free SEO audit",
      };
    case "Website & Cyber Security":
      return {
        heading: "Need a hands-on website security review?",
        text: "We check your site's logins, HTTPS certificate, backups, email security records and POPIA risks and list what to fix first.",
        href: "/services/website-security/",
        label: "Explore website security",
      };
    case "Industry Playbooks":
      return {
        heading: "Want a website and SEO audit tailored to your industry?",
        text: "Send us your website address and we'll check how you show up on Google, how clear your service pages are and any obvious security gaps, for free.",
        href: "/contact/?service=free-seo-audit#contact-form",
        label: "Get my free SEO audit",
      };
  }
}
