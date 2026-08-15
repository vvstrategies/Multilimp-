export type LocationDefinition = {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string;
  neighborhoods: string[];
  localContext: string;
  distanceNote: string;
  confirmedSource: "gbp" | "client";
};
