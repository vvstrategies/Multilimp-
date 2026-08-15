export const SITE_URL = "https://gsvitaliza.com.br";
export const SITE_NAME = "GS Vitaliza";

// NAP (Name / Address / Phone) — sourced from the GS Vitaliza Google Business
// Profile. Keep this file as the single source of truth so every page and
// schema block stays consistent.
export const BUSINESS = {
  legalName: "GS Vitaliza Estofados",
  displayName: "GS Vitaliza",
  tagline: "Higienização e Conservação de Estofados",
  phoneDisplay: "(11) 97575-1247",
  phoneE164: "+5511975751247",
  whatsappNumber: "5511975751247",
  email: null as string | null,
  address: {
    street: "R. Senegal, 29a",
    neighborhood: "Parque Monte Alegre",
    city: "Taboão da Serra",
    state: "SP",
    stateFull: "São Paulo",
    postalCode: "06756-420",
    country: "BR",
  },
  // Exact GeoCoordinates not confirmed yet — omitted from schema rather
  // than guessed. Add once the client confirms via Google Business Profile.
  geo: null as { latitude: number; longitude: number } | null,
  hours: [
    { day: "Segunda", open: "09:00", close: "18:00" },
    { day: "Terça", open: "09:00", close: "18:00" },
    { day: "Quarta", open: "09:00", close: "18:00" },
    { day: "Quinta", open: "09:00", close: "18:00" },
    { day: "Sexta", open: "09:00", close: "18:00" },
    { day: "Sábado", open: "09:00", close: "13:00" },
  ],
  hoursNote:
    "Horário confirmado com a Google Business Profile apenas para segunda-feira (abre às 9h). Demais dias exibidos são provisórios até confirmação do cliente.",
  rating: {
    value: 5.0,
    count: 49,
  },
  instagram: "https://www.instagram.com/gsvitaliza",
  googleReviewsUrl:
    "https://www.google.com/maps/place/GS+Vitaliza+Estofados/data=!4m2!3m1!1s0x0:0xbeb3132eccd2abbb",
} as const;

export function whatsappHref(message: string, source?: string) {
  const params = new URLSearchParams({ text: message });
  if (source) params.set("utm_source", source);
  return `https://wa.me/${BUSINESS.whatsappNumber}?${params.toString()}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da GS Vitaliza e gostaria de solicitar um orçamento.";

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
  { label: "Taboão da Serra", href: "/areas-atendidas/taboao-da-serra" },
  { label: "Osasco", href: "/areas-atendidas/osasco" },
  { label: "Santo Amaro", href: "/areas-atendidas/santo-amaro" },
  { label: "Embu das Artes", href: "/areas-atendidas/embu-das-artes" },
  { label: "Itapevi", href: "/areas-atendidas/itapevi" },
  { label: "Cotia", href: "/areas-atendidas/cotia" },
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
  { label: "Antes e Depois", href: "/antes-e-depois" },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/perguntas-frequentes" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_COMPANY_LINKS = [
  { label: "Sobre a GS Vitaliza", href: "/sobre" },
  { label: "Antes e Depois", href: "/antes-e-depois" },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Blog", href: "/blog" },
  { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
  { label: "Contato", href: "/contato" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];
