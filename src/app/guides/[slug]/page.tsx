import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideTemplate } from "@/components/GuideTemplate";
import { getGuide, guides, guideUrl } from "@/data/guides";
import { getGuideReadingStats } from "@/lib/guide-metrics";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import { getGuideHeroImage } from "@/lib/site-images";

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
  const ogImage = getGuideHeroImage(guide.slug, guide.category).src;

  return {
    title: { absolute: guide.metaTitle },
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.description,
      images: [ogImage],
    },
  };
}

function articleSchema(guide: NonNullable<ReturnType<typeof getGuide>>) {
  const stats = getGuideReadingStats(guide);
  const ogImage = getGuideHeroImage(guide.slug, guide.category).src;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: absoluteUrl(ogImage),
    articleSection: guide.category,
    wordCount: stats.words,
    timeRequired: stats.isoDuration,
    inLanguage: "en-ZA",
    url: absoluteUrl(guideUrl(guide)),
    datePublished: guide.published,
    dateModified: guide.updated,
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
