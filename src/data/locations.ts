import type { LocationDefinition } from "@/types/location";

const LOCATION_CITIES = [
  { slug: "americana", city: "Americana" },
  { slug: "santa-barbara-doeste", city: "Santa Bárbara d’Oeste" },
  { slug: "nova-odessa", city: "Nova Odessa" },
  { slug: "sumare", city: "Sumaré" },
  { slug: "hortolandia", city: "Hortolândia" },
  { slug: "limeira", city: "Limeira" },
  { slug: "paulinia", city: "Paulínia" },
] as const;

export const LOCATIONS: LocationDefinition[] = LOCATION_CITIES.map(({ slug, city }) => ({
  slug,
  city,
  region: "Região de atendimento da Multilimp",
  metaTitle: `Higienização de Estofados em ${city}`,
  metaDescription: `Higienização e impermeabilização de estofados em ${city}. Atendimento residencial e empresarial sob agendamento. Consulte a Multilimp pelo WhatsApp.`,
  heroHeadline: `Higienização de Estofados em ${city}`,
  heroSubheadline: `A Multilimp Higienização atende ${city} com serviços para sofás, colchões, tapetes, carpetes, persianas, cadeiras e estofados automotivos.`,
  intro: `A Multilimp Higienização realiza atendimentos em ${city} como parte da sua área de cobertura. Há mais de três anos no mercado, a empresa trabalha com higienização e impermeabilização de estofados para residências e empresas. Consulte pelo WhatsApp a disponibilidade de agenda para o seu endereço.`,
  neighborhoods: [],
  localContext: `Em ${city}, o atendimento é agendado conforme a disponibilidade da equipe. A Multilimp avalia o tipo de peça e o material para orientar sobre o serviço mais adequado antes de confirmar o agendamento.`,
  distanceNote: `Confirme pelo WhatsApp a disponibilidade de data e os detalhes do atendimento em ${city}.`,
  confirmedSource: "client",
}));

export function getLocationBySlug(slug: string): LocationDefinition | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
