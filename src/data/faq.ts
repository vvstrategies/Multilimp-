import { BUSINESS, SERVICE_AREA_NAMES } from "@/lib/constants";

export type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export const GENERAL_FAQS: FaqItem[] = [
  // Sobre o serviço
  {
    category: "Sobre o serviço",
    question: "O que é a higienização de estofados e por que ela é necessária?",
    answer:
      "É um serviço de limpeza de peças estofadas realizado com técnicas escolhidas conforme o tipo de material e as condições da peça. A equipe avalia o item e orienta sobre o serviço indicado para o caso.",
  },
  {
    category: "Sobre o serviço",
    question: "Quais tipos de estofado a Multilimp Higienização atende?",
    answer:
      "A Multilimp trabalha com higienização e impermeabilização de sofás, tapetes, cadeiras estofadas, carpetes, poltronas e bancos automotivos. Consulte a equipe sobre o seu item.",
  },
  {
    category: "Sobre o serviço",
    question: "A higienização remove todas as manchas do estofado?",
    answer:
      "Não é possível garantir a remoção completa de todas as manchas. O resultado depende do tipo de mancha, do material e do estado da peça. Envie fotos pelo WhatsApp para a equipe avaliar e explicar o que esperar antes de agendar.",
  },
  {
    category: "Sobre o serviço",
    question: "Quanto tempo leva o serviço e quanto tempo até poder usar o estofado de novo?",
    answer:
      "O tempo varia conforme o tamanho e o tipo do estofado (um sofá de dois lugares, por exemplo, leva menos tempo que um sofá modulado grande ou vários colchões). O tempo de secagem também depende do tecido, da quantidade de produto aplicada e das condições do ambiente no dia do atendimento. Nossa equipe informa uma estimativa de prazo específica para o seu caso durante a visita, então prefira confirmar esse detalhe diretamente pelo WhatsApp.",
  },
  // Agendamento e atendimento
  {
    category: "Agendamento e atendimento",
    question: "Como faço para agendar um atendimento?",
    answer:
      `A forma mais rápida é chamar no WhatsApp pelo número ${BUSINESS.phoneDisplay}. Conte o tipo de peça e a quantidade; se possível, envie fotos para ajudar a equipe a preparar o orçamento.`,
  },
  {
    category: "Agendamento e atendimento",
    question: "O atendimento é feito na minha casa ou empresa?",
    answer:
      "A Multilimp atende residências e empresas. Confirme com a equipe se o serviço solicitado pode ser realizado no endereço combinado.",
  },
  {
    category: "Agendamento e atendimento",
    question: "Quais dias e horários vocês atendem?",
    answer:
      "O atendimento é feito mediante agendamento. Fale com a equipe pelo WhatsApp para consultar dias e horários disponíveis.",
  },
  {
    category: "Agendamento e atendimento",
    question: "Preciso preparar o ambiente antes da chegada da equipe?",
    answer:
      "Não é obrigatório, mas ajuda bastante se o estofado a ser higienizado estiver acessível, sem objetos em cima e, se possível, próximo a uma tomada. Qualquer orientação específica para o seu caso é passada no momento do agendamento.",
  },
  // Produtos e segurança
  {
    category: "Produtos e segurança",
    question: "Os produtos usados danificam o tecido?",
    answer:
      "O serviço indicado depende do tipo e das condições do material. A equipe deve avaliar a peça e orientar sobre os cuidados antes de iniciar o atendimento.",
  },
  {
    category: "Produtos e segurança",
    question: "Os produtos são seguros para crianças e pets?",
    answer:
      "Como os produtos e o tempo de secagem variam conforme o material e o serviço, peça à equipe as orientações específicas para crianças e animais antes de voltar a usar o estofado.",
  },
  {
    category: "Produtos e segurança",
    question: "O estofado precisa ficar quanto tempo sem uso após a limpeza?",
    answer:
      "O tempo de secagem varia de acordo com o tecido, a quantidade de produto aplicada e as condições do ambiente (ventilação, umidade, temperatura). A equipe informa uma estimativa realista para o seu caso específico durante o atendimento.",
  },
  {
    category: "Produtos e segurança",
    question: "Vocês também fazem impermeabilização?",
    answer:
      "Sim. Além da higienização, oferecemos o serviço de impermeabilização de estofados, que cria uma camada protetora contra líquidos, manchas e desgaste do dia a dia. O ideal é aplicar a impermeabilização logo após a higienização, sobre o tecido já limpo.",
  },
  // Pagamento e área de cobertura
  {
    category: "Pagamento e área de cobertura",
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "As formas de pagamento disponíveis podem variar. Consulte as opções atuais diretamente pelo WhatsApp no momento do orçamento.",
  },
  {
    category: "Pagamento e área de cobertura",
    question: "Quanto custa a higienização?",
    answer:
      "O valor depende do tipo de peça, da quantidade, do tamanho e das condições do material. Solicite um orçamento pelo WhatsApp informando o que precisa higienizar.",
  },
  {
    category: "Pagamento e área de cobertura",
    question: "Quais cidades vocês atendem?",
    answer: `A Multilimp está localizada em Americana e informa atendimento em ${SERVICE_AREA_NAMES.join(", ").replace(/, ([^,]*)$/, " e $1")}. Consulte a equipe para confirmar a disponibilidade de agenda no seu endereço.`,
  },
  {
    category: "Pagamento e área de cobertura",
    question: "Vocês atendem empresas, ou só residências?",
    answer:
      "Atendemos os dois casos. Fazemos higienização em residências (sofás, colchões, tapetes) e também em empresas, como escritórios, clínicas e estabelecimentos com estofados, cadeiras e carpetes que precisam de limpeza profissional.",
  },
];
