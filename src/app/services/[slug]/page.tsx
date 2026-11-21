import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { pageHeroImages } from "@/lib/site-images";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const url = `/services/${service.slug}/`;
  const ogImage =
    pageHeroImages[service.slug as keyof typeof pageHeroImages]?.src ?? "/logo.png";

  return {
    title: { absolute: service.metaTitle },
    description: service.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.description,
      images: [ogImage],
    },
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const url = absoluteUrl(`/services/${service.slug}/`);

  return (
    <>
      <JsonLd data={serviceSchema(service.title, service.serviceType, url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services/") },
          { name: service.eyebrow, url },
        ])}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServiceTemplate service={service} />
    </>
  );
}
