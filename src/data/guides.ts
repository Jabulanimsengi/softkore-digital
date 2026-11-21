import { coreGuides } from "./guide-batches/core";
import { industryGuides } from "./guide-batches/industries";
import { seoGuides } from "./guide-batches/seo";
import { securityGuides } from "./guide-batches/security";
import type { GuidePage } from "./guide-batches/types";
import { websiteGuides } from "./guide-batches/websites";

export type {
  GuideCallout,
  GuideCategory,
  GuideMidCta,
  GuidePage,
  GuideSection,
  GuideStatus,
  GuideSubsection,
  GuideTable,
} from "./guide-batches/types";

export const allGuides: GuidePage[] = [
  ...coreGuides,
  ...websiteGuides,
  ...seoGuides,
  ...securityGuides,
  ...industryGuides,
];

export const guides: GuidePage[] = allGuides.filter((guide) => guide.status === "published");

export const scheduledGuides: GuidePage[] = allGuides
  .filter((guide) => guide.status === "scheduled")
  .sort((a, b) => (a.scheduledFor ?? "").localeCompare(b.scheduledFor ?? ""));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function guideUrl(guide: GuidePage) {
  return `/guides/${guide.slug}/`;
}
