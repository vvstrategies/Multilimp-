export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://palegoldenrod-peafowl-249350.hostingersite.com";
export const SITE_NAME = "Multilimp Higienização";

// Keep business identity and contact details in one place for consistent
// rendering and structured data.
export const BUSINESS = {
  legalName: "Multilimp Higienização",
  displayName: "Multilimp Higienização",
  tagline: "Higienização e Impermeabilização de Estofados",
  phoneDisplay: "(19) 98152-7537",
  phoneE164: "+5519981527537",
  whatsappNumber: "5519981527537",
  email: "multlimphigienizacaodesofa@gmail.com",
  address: {
    street: "R. Ataúlfo Alves, 451",
    neighborhood: "Residencial Jaguari",
    city: "Americana",
    state: "SP",
    stateFull: "São Paulo",
    postalCode: "13473-676",
    country: "BR",
  },
  geo: null as { latitude: number; longitude: number } | null,
  hours: [],
  rating: {
    value: 5.0,
    count: 19,
  },
  instagram: "https://www.instagram.com/multlimp.higienizacao_/",
  facebook:
    "https://www.facebook.com/people/MultLimp-Higieniza%C3%A7%C3%B5es-de-Estofados-e-Tapetes/61558442032455/",
  googleReviewsUrl: "https://share.google/6IWGomAce6JDjRsrv",
  googlePlaceId: "ChIJpZsuJCmbyJQRfhmij8eITxk",
} as const;

export const SERVICE_AREA_NAMES = [
  "Americana",
  "Santa Bárbara d’Oeste",
  "Nova Odessa",
  "Sumaré",
  "Hortolândia",
  "Limeira",
  "Paulínia",
];

export function whatsappHref(message: string, source?: string) {
  const params = new URLSearchParams({ text: message });
  if (source) params.set("utm_source", source);
  return `https://wa.me/${BUSINESS.whatsappNumber}?${params.toString()}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Multilimp Higienização e gostaria de solicitar um orçamento.";

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const SERVICES_NAV: { label: string; href: string; description: string }[] = [
  {
    label: "Sofás e Estofados",
    href: "/servicos/sofas-e-estofados",
    description: "Limpeza profunda de sofás, poltronas e cadeiras estofadas",
  },
  {
    label: "Colchões",
    href: "/servicos/colchoes",
    description: "Eliminação de ácaros, fungos e odores em colchões",
  },
  {
    label: "Bancos Automotivos",
    href: "/servicos/bancos-automotivos",
    description: "Higienização de bancos de tecido e couro do seu veículo",
  },
  {
    label: "Tapetes e Carpetes",
    href: "/servicos/tapetes-e-carpetes",
    description: "Lavagem profissional que remove sujeira encravada nas fibras",
  },
  {
    label: "Impermeabilização",
    href: "/servicos/impermeabilizacao-de-estofados",
    description: "Proteção contra líquidos, manchas e desgaste do dia a dia",
  },
];

export const AREAS_NAV: { label: string; href: string }[] = [
  { label: "Americana", href: "/areas-atendidas/americana" },
  { label: "Santa Bárbara d’Oeste", href: "/areas-atendidas/santa-barbara-doeste" },
  { label: "Nova Odessa", href: "/areas-atendidas/nova-odessa" },
  { label: "Sumaré", href: "/areas-atendidas/sumare" },
  { label: "Hortolândia", href: "/areas-atendidas/hortolandia" },
  { label: "Limeira", href: "/areas-atendidas/limeira" },
  { label: "Paulínia", href: "/areas-atendidas/paulinia" },
];

export const MAIN_NAV: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Serviços",
    href: "/servicos",
    children: SERVICES_NAV,
  },
  {
    label: "Áreas Atendidas",
    href: "/areas-atendidas",
    children: AREAS_NAV.map((a) => ({ label: a.label, href: a.href })),
  },
  { label: "Galeria de trabalhos", href: "/antes-e-depois" },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/perguntas-frequentes" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_COMPANY_LINKS = [
  { label: "Sobre a Multilimp", href: "/sobre" },
  { label: "Galeria de trabalhos", href: "/antes-e-depois" },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Blog", href: "/blog" },
  { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];
