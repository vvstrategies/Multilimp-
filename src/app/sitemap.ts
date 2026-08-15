import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre",
    "/servicos",
    "/areas-atendidas",
    "/antes-e-depois",
    "/avaliacoes",
    "/blog",
    "/perguntas-frequentes",
    "/contato",
    "/politica-de-privacidade",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_URL}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoutes = LOCATIONS.map((location) => ({
    url: `${SITE_URL}/areas-atendidas/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
