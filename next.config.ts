import type { NextConfig } from "next";

export default async function createNextConfig(): Promise<NextConfig> {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    const { startContactApiServer } = await import("./tools/contact-api-server.mjs");
    startContactApiServer(3099);
  }

  return {
    distDir: isDev ? ".next-dev" : ".next",
    ...(isDev
      ? {
          async rewrites() {
            return [
              {
                source: "/api/contact",
                destination: "http://127.0.0.1:3099/api/contact",
              },
              {
                source: "/api/contact/",
                destination: "http://127.0.0.1:3099/api/contact",
              },
            ];
          },
        }
      : { output: "export" }),
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
}
