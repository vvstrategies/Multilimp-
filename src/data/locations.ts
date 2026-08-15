import type { LocationDefinition } from "@/types/location";

// Only the geographic/contextual facts below are used: city-level framing,
// confirmed service areas from the Google Business Profile description
// (Taboão da Serra, Osasco, Santo Amaro), and areas confirmed directly by
// the client (Embu das Artes, Itapevi, Cotia). No street-level neighborhoods,
// distances or landmarks are invented — `neighborhoods` stays empty across
// the board because we are not confident about specific sub-neighborhoods.
export const LOCATIONS: LocationDefinition[] = [
  {
    slug: "taboao-da-serra",
    city: "Taboão da Serra",
    region: "Grande São Paulo",
    metaTitle: "Higienização de Estofados em Taboão da Serra | GS Vitaliza",
    metaDescription:
      "Higienização profissional de sofás, colchões, bancos automotivos e tapetes em Taboão da Serra, direto na sua casa. Peça um orçamento gratuito pelo WhatsApp.",
    heroHeadline: "Higienização de Estofados em Taboão da Serra",
    heroSubheadline:
      "Base da GS Vitaliza, no Parque Monte Alegre. Atendemos toda a cidade de Taboão da Serra com higienização profissional de sofás, colchões, bancos automotivos, tapetes e impermeabilização, direto no seu endereço.",
    intro:
      "A GS Vitaliza está sediada em Taboão da Serra, no Parque Monte Alegre, e atende toda a cidade com serviços de higienização e conservação de estofados. Como Taboão da Serra é a nossa base de operações, o agendamento por aqui costuma ser mais ágil, com equipamentos profissionais levados até a sua casa, empresa ou veículo.",
    neighborhoods: [],
    localContext:
      "Taboão da Serra é um município da Grande São Paulo, colado à zona oeste da capital, com forte presença residencial e comercial. É também onde fica a sede da GS Vitaliza, na R. Senegal, no Parque Monte Alegre. Por sermos daqui, conhecemos bem a rotina da cidade e atendemos moradores e empresas em toda a sua extensão.",
    distanceNote:
      "Como Taboão da Serra é a base da GS Vitaliza, não há deslocamento entre cidades para o atendimento aqui, o que facilita o agendamento em horários flexíveis.",
    confirmedSource: "gbp",
  },
  {
    slug: "osasco",
    city: "Osasco",
    region: "Grande São Paulo",
    metaTitle: "Higienização de Estofados em Osasco | GS Vitaliza",
    metaDescription:
      "Limpeza profissional de sofás, colchões, bancos automotivos e tapetes em Osasco, com atendimento a domicílio. Solicite um orçamento gratuito pelo WhatsApp.",
    heroHeadline: "Higienização de Estofados em Osasco",
    heroSubheadline:
      "A GS Vitaliza atende Osasco com higienização profissional de sofás, colchões, bancos automotivos, tapetes e impermeabilização de estofados, direto no seu endereço.",
    intro:
      "Osasco é uma das áreas de atendimento confirmadas da GS Vitaliza, vizinha a Taboão da Serra na Grande São Paulo. Levamos até Osasco a mesma estrutura de higienização usada na nossa base: equipamentos profissionais, técnicas de extração e produtos indicados para cada tipo de estofado.",
    neighborhoods: [],
    localContext:
      "Osasco é um município da Grande São Paulo que faz divisa com Taboão da Serra e com a zona oeste da capital paulista. É um dos maiores polos urbanos e comerciais da região metropolitana, com grande concentração de residências e empresas, que fazem parte da nossa rotina de atendimentos.",
    distanceNote:
      "Osasco faz parte da nossa área de cobertura confirmada, próxima à base em Taboão da Serra, o que permite agendamentos regulares na cidade.",
    confirmedSource: "gbp",
  },
  {
    slug: "santo-amaro",
    city: "Santo Amaro",
    region: "Zona Sul de São Paulo (Capital)",
    metaTitle: "Higienização de Estofados em Santo Amaro - SP | GS Vitaliza",
    metaDescription:
      "Higienização de sofás, colchões, bancos automotivos e tapetes em Santo Amaro, zona sul de São Paulo. Atendimento a domicílio. Peça seu orçamento gratuito.",
    heroHeadline: "Higienização de Estofados em Santo Amaro",
    heroSubheadline:
      "A GS Vitaliza atende o bairro de Santo Amaro, na zona sul de São Paulo, com higienização profissional de sofás, colchões, bancos automotivos e tapetes.",
    intro:
      "Santo Amaro é um dos bairros da capital paulista onde a GS Vitaliza confirma atendimento regular. Levamos até lá o mesmo padrão de higienização profissional aplicado em toda a nossa área de cobertura, com atendimento agendado direto no seu endereço.",
    neighborhoods: [],
    localContext:
      "Santo Amaro é um bairro tradicional da zona sul do município de São Paulo, com um histórico que remonta a um antigo núcleo colonial e que hoje reúne áreas residenciais, comerciais e corporativas. Por ser uma região consolidada e de fácil acesso, faz parte da nossa área de atendimento confirmada.",
    distanceNote:
      "Santo Amaro está entre as regiões de atendimento confirmadas da GS Vitaliza; consulte disponibilidade de horários para o seu endereço no bairro.",
    confirmedSource: "gbp",
  },
  {
    slug: "embu-das-artes",
    city: "Embu das Artes",
    region: "Região Oeste da Grande São Paulo",
    metaTitle: "Higienização de Estofados em Embu das Artes | GS Vitaliza",
    metaDescription:
      "Limpeza de sofás, colchões, bancos automotivos e tapetes em Embu das Artes. Atendimento a domicílio mediante disponibilidade. Solicite um orçamento.",
    heroHeadline: "Higienização de Estofados em Embu das Artes",
    heroSubheadline:
      "A GS Vitaliza também atende Embu das Artes, na região oeste da Grande São Paulo, com higienização profissional de estofados sob consulta de disponibilidade.",
    intro:
      "Embu das Artes é uma das cidades da região onde a GS Vitaliza atende conforme a disponibilidade da agenda. Se você está em Embu das Artes e precisa higienizar sofás, colchões, bancos automotivos ou tapetes, fale com a gente pelo WhatsApp para confirmarmos data e horário.",
    neighborhoods: [],
    localContext:
      "Embu das Artes é um município vizinho a Taboão da Serra, na região oeste da Grande São Paulo, conhecido por sua feira de artesanato e seu centro histórico. Por estar próxima da nossa base, incluímos a cidade entre as regiões que atendemos, com agendamento conforme a demanda.",
    distanceNote:
      "Por ficar um pouco mais distante da nossa base do que outras cidades atendidas, o agendamento em Embu das Artes é feito mediante consulta de disponibilidade.",
    confirmedSource: "client",
  },
  {
    slug: "itapevi",
    city: "Itapevi",
    region: "Região Oeste da Grande São Paulo",
    metaTitle: "Higienização de Estofados em Itapevi | GS Vitaliza",
    metaDescription:
      "Higienização profissional de sofás, colchões, bancos automotivos e tapetes em Itapevi. Atendimento sob consulta de disponibilidade. Peça um orçamento.",
    heroHeadline: "Higienização de Estofados em Itapevi",
    heroSubheadline:
      "A GS Vitaliza atende Itapevi, na região oeste da Grande São Paulo, com higienização profissional de sofás, colchões, bancos automotivos e tapetes.",
    intro:
      "Itapevi está entre as cidades da região oeste da Grande São Paulo atendidas pela GS Vitaliza. Levamos os mesmos equipamentos e técnicas profissionais usados na nossa base até moradores e empresas de Itapevi, com agendamento conforme a disponibilidade da nossa agenda.",
    neighborhoods: [],
    localContext:
      "Itapevi é um município da região oeste da Grande São Paulo, cortado pela linha de trem da CPTM, com crescimento residencial e industrial nas últimas décadas. É uma das cidades que passamos a atender para levar o serviço a mais famílias e empresas da região.",
    distanceNote:
      "Assim como outras cidades mais distantes da nossa base, o atendimento em Itapevi é feito mediante consulta prévia de disponibilidade de agenda.",
    confirmedSource: "client",
  },
  {
    slug: "cotia",
    city: "Cotia",
    region: "Região Oeste da Grande São Paulo",
    metaTitle: "Higienização de Estofados em Cotia | GS Vitaliza",
    metaDescription:
      "Limpeza profissional de sofás, colchões, bancos automotivos e tapetes em Cotia. Atendimento a domicílio sob consulta. Solicite um orçamento gratuito.",
    heroHeadline: "Higienização de Estofados em Cotia",
    heroSubheadline:
      "A GS Vitaliza atende Cotia, na região oeste da Grande São Paulo, com higienização profissional de sofás, colchões, bancos automotivos e tapetes.",
    intro:
      "Cotia é uma das cidades da região oeste da Grande São Paulo onde a GS Vitaliza atende conforme a disponibilidade da agenda. Se você mora ou tem uma empresa em Cotia, fale com a gente pelo WhatsApp para verificarmos data e horário de atendimento.",
    neighborhoods: [],
    localContext:
      "Cotia é o maior município em extensão territorial da região oeste da Grande São Paulo, reunindo desde condomínios residenciais até comércios e indústrias em áreas urbanas densas e trechos mais afastados. Por sua proximidade com Taboão da Serra, incluímos Cotia entre as cidades que atendemos.",
    distanceNote:
      "O atendimento em Cotia depende da disponibilidade da nossa agenda e da região específica da cidade; entre em contato para confirmarmos o agendamento.",
    confirmedSource: "client",
  },
];

export function getLocationBySlug(slug: string): LocationDefinition | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
