import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry, industryUrl } from "@/data/industries";
import { IndustryTemplate } from "@/components/IndustryTemplate";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

type IndustryRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return {};
  }

  const url = industryUrl(industry);

  return {
    title: industry.metaTitle,
    description: industry.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.description,
      url,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.description,
      images: ["/logo.png"],
    },
  };
}

function industrySchema(industry: NonNullable<ReturnType<typeof getIndustry>>) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: industry.metaTitle,
    url: absoluteUrl(industryUrl(industry)),
    about: industry.name,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: `${site.domain}/`,
    },
  };
}

export default async function IndustryRoute({ params }: IndustryRouteProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const url = absoluteUrl(industryUrl(industry));

  return (
    <>
      <JsonLd data={industrySchema(industry)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Industries", url: absoluteUrl("/industries/") },
          { name: industry.name, url },
        ])}
      />
      <JsonLd data={faqSchema(industry.faqs)} />
      <IndustryTemplate industry={industry} />
    </>
  );
}
