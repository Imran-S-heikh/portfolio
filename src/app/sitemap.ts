import { MetadataRoute } from "next";
import { FileIcon, infoData, skillsData } from "./about/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = ["", "about", "projects", "contact"];
  const url = process.env.NEXT_PUBLIC_FRONTEND_URL!;
  const aboutLinks = [
    infoData.map((item) => item.children).flat(),
    skillsData.map((item) => item.children).flat(),
  ]
    .flat()
    .map((item) => `about/${(item as FileIcon).path || item.name}`);

  return [...baseUrls, ...aboutLinks].map((path) => ({
    url: path ? `${url}/${path}` : url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
