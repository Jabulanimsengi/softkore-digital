import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Analytics } from "@/components/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Softkore Technologies | Websites, SEO & Software Systems",
    template: "%s | Softkore Technologies",
  },
  description: site.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Softkore Technologies | Websites, SEO & Software Systems",
    description: site.description,
    url: site.domain,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softkore Technologies | Websites, SEO & Software Systems",
    description: site.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <span id="main-content" tabIndex={-1} />
        {children}
        <Footer />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
