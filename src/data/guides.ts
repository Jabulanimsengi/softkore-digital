/**
 * Guide Registry — four content pillars served under /guides/<slug>/:
 * 1. Website Design & Development (core.ts, websites.ts)
 * 2. SEO Services (core.ts, seo.ts)
 * 3. Website & Cyber Security (core.ts, security.ts)
 * 4. Industry Playbooks (industries.ts — 6 live + 4 scheduled weekly)
 *
 * Rules when editing or adding guides:
 * - Only status: "published" routes build into out/ and sitemap.xml, and every live
 *   guide route must also exist in deploy/page-plan.json (`keep`).
 * - Never link from any published page/guide/service to a status: "scheduled" guide
 *   (`npm run validate:export` fails on unkept internal links).
 * - Use `npm run guides:schedule` to inspect the queue and `npm run publish:guide`
 *   to promote due scheduled guides safely into deploy/page-plan.json.
 */
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
