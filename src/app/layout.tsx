import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Marquee } from "@/components/Marquee";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Analytics } from "@/components/Analytics";
import { RouteLoadingSpinner } from "@/components/RouteLoadingSpinner";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";
import "./design-system.css";

const siteFont = localFont({
  src: "../../public/fonts/Manrope-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "SoftKore Digital | Digital Business Solutions Built for Growth",
    template: "%s | SoftKore Digital",
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
    title: "SoftKore Digital | Digital Business Solutions Built for Growth",
    description: site.description,
    url: site.domain,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftKore Digital | Digital Business Solutions Built for Growth",
    description: site.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={siteFont.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <RouteLoadingSpinner />
        <span id="main-content" tabIndex={-1} />
        {children}
        <Marquee />
        <Footer />
        <WhatsAppFloat />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
