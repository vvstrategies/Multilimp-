import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/sections/services/service-page-template";
import { SERVICES } from "@/data/services";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

const AREAS_SERVED = [
  "Taboão da Serra",
  "Osasco",
  "Santo Amaro",
  "Embu das Artes",
  "Itapevi",
  "Cotia",
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.metaDescription,
          path: `/servicos/${service.slug}`,
          areasServed: AREAS_SERVED,
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
          { name: service.shortName, path: `/servicos/${service.slug}` },
        ])}
      />
      <ServicePageTemplate service={service} allServices={SERVICES} />
    </>
  );
}
