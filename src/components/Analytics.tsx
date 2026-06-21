"use client";

import Script from "next/script";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export function Analytics() {
  if (!GA4_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA4_ID}');`}
      </Script>
    </>
  );
}
