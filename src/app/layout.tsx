import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "SoftKore Digital | Websites, Web Applications & SEO Growth Systems",
    template: "%s | SoftKore Digital",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "SoftKore Digital | Websites, Web Applications & SEO Growth Systems",
    description: site.description,
    url: site.domain,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftKore Digital | Websites, Web Applications & SEO Growth Systems",
    description: site.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
