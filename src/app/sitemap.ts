import { MetadataRoute } from "next";
import { getNewsList } from "@/lib/microcms";
import config from "@/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsData = await getNewsList();
  const newsDataUrls = newsData.contents.map((content) => ({
    url: `https://${config.domainName}/news/${content.id}`,
    lastModified: content.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: `https://${config.domainName}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `https://${config.domainName}/news`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `https://${config.domainName}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `https://${config.domainName}/tos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...newsDataUrls,
  ];
}
