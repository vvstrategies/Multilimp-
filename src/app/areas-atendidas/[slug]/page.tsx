import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/sections/areas/location-page-template";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { breadcrumbJsonLd, JsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return pageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/areas-atendidas/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Áreas Atendidas", path: "/areas-atendidas" },
          { name: location.city, path: `/areas-atendidas/${location.slug}` },
        ])}
      />
      <JsonLd data={localBusinessJsonLd([location.city])} />
      <LocationPageTemplate location={location} allLocations={LOCATIONS} />
    </>
  );
}
