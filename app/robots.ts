import type { MetadataRoute } from "next";
import { site } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/checkout"] // chặn trang checkout khỏi index
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}
