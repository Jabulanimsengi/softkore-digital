import type { MetadataRoute } from "next";
import { aiAgentIndustryPages, aiAgentIndustryUrl } from "@/data/ai-agents";
import { guides, guideUrl } from "@/data/guides";
import { industries, industryUrl } from "@/data/industries";
import { localSeoPages, localUrl } from "@/data/local-seo";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.domain}/`,
      priority: 1,
    },
    {
      url: `${site.domain}/industries/`,
      priority: 0.82,
    },
    {
      url: `${site.domain}/ai-agents/`,
      priority: 0.82,
    },
    {
      url: `${site.domain}/guides/`,
      priority: 0.74,
    },
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}/`,
      priority: 0.9,
    })),
    ...localSeoPages.map((page) => ({
      url: `${site.domain}${localUrl(page)}`,
      priority: page.priority,
    })),
    ...industries.map((industry) => ({
      url: `${site.domain}${industryUrl(industry)}`,
      priority: industry.priority,
    })),
    ...aiAgentIndustryPages.map((page) => ({
      url: `${site.domain}${aiAgentIndustryUrl(page)}`,
      priority: page.priority,
    })),
    ...guides.map((guide) => ({
      url: `${site.domain}${guideUrl(guide)}`,
      priority: guide.priority,
    })),
  ];
}
