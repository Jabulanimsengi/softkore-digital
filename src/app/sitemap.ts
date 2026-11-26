import type { MetadataRoute } from "next";
import { guides, guideUrl } from "@/data/guides";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-11-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.domain}/`,
      lastModified,
      priority: 1,
    },
    {
      url: `${site.domain}/services/`,
      lastModified,
      priority: 0.92,
    },
    {
      url: `${site.domain}/work/`,
      lastModified,
      priority: 0.86,
    },
    {
      url: `${site.domain}/about/`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${site.domain}/contact/`,
      lastModified,
      priority: 0.82,
    },
    {
      url: `${site.domain}/privacy-policy/`,
      lastModified: new Date("2026-11-26"),
      priority: 0.3,
    },
    {
      url: `${site.domain}/guides/`,
      lastModified,
      priority: 0.74,
    },
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}/`,
      lastModified,
      priority: 0.9,
    })),
    ...guides.map((guide) => ({
      url: `${site.domain}${guideUrl(guide)}`,
      lastModified: new Date(guide.updated),
      priority: guide.priority,
    })),
  ];
}
