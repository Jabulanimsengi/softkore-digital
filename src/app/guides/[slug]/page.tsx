import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideTemplate } from "@/components/GuideTemplate";
import { getGuide, guides, guideUrl } from "@/data/guides";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

type GuideRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuideRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) return {};

  const url = guideUrl(guide);

  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.description,
      images: ["/logo.png"],
    },
  };
}

function articleSchema(guide: NonNullable<ReturnType<typeof getGuide>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: absoluteUrl(guideUrl(guide)),
    author: {
      "@type": "Organization",
      name: site.name,
      url: `${site.domain}/`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: site.logo,
      },
    },
  };
}

export default async function GuideRoute({ params }: GuideRouteProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) notFound();

  const url = absoluteUrl(guideUrl(guide));

  return (
    <>
      <JsonLd data={articleSchema(guide)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Guides", url: absoluteUrl("/guides/") },
          { name: guide.title, url },
        ])}
      />
      <JsonLd data={faqSchema(guide.faqs)} />
      <GuideTemplate guide={guide} />
    </>
  );
}
