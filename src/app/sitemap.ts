import type { MetadataRoute } from "next";

const BASE_URL = "https://estuarywater.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/our-story`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/product`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${BASE_URL}/hospitality`,
      lastModified: new Date(),
      priority: 0.8,
    },
    { url: `${BASE_URL}/lifestyle`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.9 },
  ];
}
