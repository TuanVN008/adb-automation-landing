import type { MetadataRoute } from "next";
import { site } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }
    // Có thêm trang nào (blog, policy) thì push thêm ở đây
  ];
}
