import type { MetadataRoute } from "next";

// To tell search engine crawlers which URLs they can access on VirtuoGen.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "//",
    },
    sitemap: "https://virtuogen.in/sitemap.xml",
  };
}

// Output:

// User-Agent: *
// Allow: /
// Disallow: //
// Sitemap:
