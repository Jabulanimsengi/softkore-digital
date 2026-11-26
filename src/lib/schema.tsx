import { stripInlineMarkdown } from "@/components/RichText";
import { company, site } from "@/lib/site";

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
    "@type": ["Organization", "ProfessionalService"],
    name: site.name,
    legalName: company.legalName,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CIPC company registration number",
      value: company.registrationNumber,
    },
    foundingDate: company.registrationDate,
    url: `${site.domain}/`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    logo: site.logo,
    priceRange: "ZAR",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    areaServed: { "@type": "Country", name: "South Africa" },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.domain}/`,
    inLanguage: "en-ZA",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: `${site.domain}/`,
    },
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
