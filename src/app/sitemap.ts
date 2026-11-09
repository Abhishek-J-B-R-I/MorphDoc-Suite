import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";
import { FEATURES_DATA } from "@/content/featuresData";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/how-to-use`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/benefits`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/support`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Programmatic SEO Feature pages
  const featureRoutes: MetadataRoute.Sitemap = Object.keys(FEATURES_DATA).map((slug) => ({
    url: `${SITE_URL}/features/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...featureRoutes];
}
