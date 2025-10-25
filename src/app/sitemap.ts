import { MetadataRoute } from "next";

const routes = [
  "/", 
  "/precos", 
  "/sobre", 
  "/contactos"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexthutadev.vercel.app";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
