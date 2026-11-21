import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/logo.png",
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
