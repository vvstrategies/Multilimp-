import type { Metadata } from "next";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/constants";

export function pageMetadata({
  title,
  description,
  path,
  images,
}: {
  title: string;
  description: string;
  path: string;
  images?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  // When no page-specific image is given, omit `images` so Next.js's
  // file-convention `opengraph-image.tsx` supplies the default OG image
  // automatically instead of pointing at a path that may not exist.
  const ogImages = images && images.length > 0 ? images : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImages ? { images: ogImages } : {}),
    },
  };
}

function addressJsonLd() {
  const { address } = BUSINESS;
  return {
    "@type": "PostalAddress",
    streetAddress: `${address.street} - ${address.neighborhood}`,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.postalCode,
    addressCountry: address.country,
  };
}

export function localBusinessJsonLd(areasServed: string[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.displayName,
    description:
      "Higienização profissional de sofás, colchões, bancos automotivos, tapetes e impermeabilização de estofados, com atendimento a domicílio em Taboão da Serra e região.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    priceRange: "$$",
    image: `${SITE_URL}/opengraph-image`,
    address: addressJsonLd(),
    ...(BUSINESS.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.geo.latitude,
            longitude: BUSINESS.geo.longitude,
          },
        }
      : {}),
    areaServed:
      areasServed.length > 0
        ? areasServed.map((name) => ({ "@type": "City", name }))
        : { "@type": "City", name: BUSINESS.address.city },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    },
    sameAs: [BUSINESS.instagram],
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  areasServed = [],
}: {
  name: string;
  description: string;
  path: string;
  areasServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.legalName,
      telephone: BUSINESS.phoneE164,
      address: addressJsonLd(),
    },
    areaServed:
      areasServed.length > 0
        ? areasServed.map((name) => ({ "@type": "City", name }))
        : { "@type": "City", name: BUSINESS.address.city },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
