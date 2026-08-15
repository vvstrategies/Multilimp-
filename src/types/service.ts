export type ServiceFaq = { question: string; answer: string };

export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  primaryKeyword: string;
  intro: string;
  problems: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  environments: string[];
  differentiators: string[];
  faqs: ServiceFaq[];
  relatedServiceSlugs: string[];
};
