import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  aiAgentIndustryPages,
  aiAgentIndustryUrl,
  getAiAgentIndustry,
} from "@/data/ai-agents";
import { AiAgentTemplate } from "@/components/AiAgentTemplate";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

type AiAgentRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aiAgentIndustryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: AiAgentRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAiAgentIndustry(slug);

  if (!page) {
    return {};
  }

  const url = aiAgentIndustryUrl(page);

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.description,
      images: ["/logo.png"],
    },
  };
}

function aiAgentSchema(page: NonNullable<ReturnType<typeof getAiAgentIndustry>>) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    url: absoluteUrl(aiAgentIndustryUrl(page)),
    about: page.name,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: `${site.domain}/`,
    },
  };
}

export default async function AiAgentIndustryRoute({ params }: AiAgentRouteProps) {
  const { slug } = await params;
  const page = getAiAgentIndustry(slug);

  if (!page) {
    notFound();
  }

  const url = absoluteUrl(aiAgentIndustryUrl(page));

  return (
    <>
      <JsonLd data={aiAgentSchema(page)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "AI Agents", url: absoluteUrl("/ai-agents/") },
          { name: page.name, url },
        ])}
      />
      <JsonLd data={faqSchema(page.faqs)} />
      <AiAgentTemplate page={page} />
    </>
  );
}
