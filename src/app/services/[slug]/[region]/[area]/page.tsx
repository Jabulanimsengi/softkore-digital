import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAreaPage,
  localSeoPages,
  localUrl,
} from "@/data/local-seo";
import { LocalSeoTemplate } from "@/components/LocalSeoTemplate";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { getService } from "@/data/services";

type AreaRouteProps = {
  params: Promise<{ slug: string; region: string; area: string }>;
};

export function generateStaticParams() {
  return localSeoPages
    .filter((page) => page.areaSlug)
    .map((page) => ({
      slug: page.serviceSlug,
      region: page.regionSlug,
      area: page.areaSlug,
    }));
}

export async function generateMetadata({
  params,
}: AreaRouteProps): Promise<Metadata> {
  const { slug, region, area } = await params;
  const page = getAreaPage(slug, region, area);

  if (!page) {
    return {};
  }

  const url = localUrl(page);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/logo.png"],
    },
  };
}

export default async function AreaRoute({ params }: AreaRouteProps) {
  const { slug, region, area } = await params;
  const page = getAreaPage(slug, region, area);

  if (!page) {
    notFound();
  }

  const service = getService(page.serviceSlug);
  const url = absoluteUrl(localUrl(page));

  return (
    <>
      <JsonLd
        data={serviceSchema(
          `${service?.title || page.serviceSlug} in ${page.areaName}`,
          service?.serviceType || page.serviceSlug,
          url,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          {
            name: service?.eyebrow || "Service",
            url: absoluteUrl(`/services/${page.serviceSlug}/`),
          },
          {
            name: page.regionName,
            url: absoluteUrl(`/services/${page.serviceSlug}/${page.regionSlug}/`),
          },
          { name: page.areaName || page.regionName, url },
        ])}
      />
      <JsonLd data={faqSchema(page.faqs)} />
      <LocalSeoTemplate page={page} />
    </>
  );
}
