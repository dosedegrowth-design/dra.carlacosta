import type { MetadataRoute } from "next";
import { BLOG_POSTS, SERVICES, SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/parceria`, priority: 0.9 },
    { url: `${base}/blog`, priority: 0.7 },
  ];

  const services = SERVICES.map((s) => ({
    url: `${base}/servicos/${s.slug}`,
    priority: 0.7,
  }));

  const posts = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    priority: 0.6,
    lastModified: new Date(p.date),
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...services.map((p) => ({ ...p, lastModified: now })),
    ...posts,
  ];
}
