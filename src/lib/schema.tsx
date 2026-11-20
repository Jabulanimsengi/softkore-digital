import { stripInlineMarkdown } from "@/components/RichText";
import { site } from "@/lib/site";

type JsonLdProps = {
  data: unknown;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `${site.domain}/`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    logo: site.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: "111 Commissioner Street",
      addressLocality: "Johannesburg",
      postalCode: "2001",
      addressCountry: "ZA",
    },
    areaServed: { "@type": "Country", name: "South Africa" },
  };
}

export function serviceSchema(name: string, serviceType: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: `${site.domain}/`,
    },
    areaServed: { "@type": "Country", name: "South Africa" },
    serviceType,
    url,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: stripInlineMarkdown(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripInlineMarkdown(faq.answer),
      },
    })),
  };
}
