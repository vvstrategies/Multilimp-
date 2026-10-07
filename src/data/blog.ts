export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  body: { heading?: string; paragraphs: string[] }[];
  relatedServiceSlugs: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-eliminar-acaros-do-colchao",
    title: "Como eliminar ácaros do colchão e prevenir alergias",
    metaTitle: "Como Eliminar Ácaros do Colchão e Prevenir Alergias",
    metaDescription:
      "Entenda por que o colchão acumula ácaros, quais sinais indicam a hora de agir e como a higienização profissional ajuda a reduzir alergias em casa.",
    excerpt:
      "O colchão é um dos maiores acumuladores de ácaros da casa. Veja por que isso acontece, como identificar o problema e o que fazer para dormir em um ambiente mais limpo.",
    coverImage: "/images/multilimp/blog/como-eliminar-acaros-do-colchao.webp",
    publishedAt: "2026-07-20",
    readingTime: "6 min de leitura",
    body: [
      {
        heading: "Por que o colchão acumula tantos ácaros",
        paragraphs: [
          "Passamos em média um terço do dia deitados, e é justamente esse contato prolongado que transforma o colchão em um dos pontos da casa mais propícios ao acúmulo de ácaros. Suor, células de pele descamada, calor corporal e umidade natural do ambiente de dormir criam as condições ideais para que esses microorganismos se multipliquem dentro do estofado.",
          "Diferente de uma superfície lisa, o colchão tem camadas internas de espuma, fibras e tecido que dificultam a limpeza superficial. Passar um pano ou aspirar por cima resolve apenas a poeira visível, mas não alcança o que se acumula nas camadas mais profundas ao longo de meses de uso.",
          "Isso não significa que o colchão esteja sujo aos olhos. Boa parte do acúmulo de ácaros e de seus resíduos é completamente invisível, o que faz muita gente adiar a limpeza simplesmente por não perceber sinais óbvios de sujeira.",
        ],
      },
      {
        heading: "Sinais de que o colchão precisa de atenção",
        paragraphs: [
          "Alguns sinais costumam aparecer antes de qualquer mancha visível. Espirros ao deitar, coceira na pele, nariz entupido ao acordar ou piora de crises alérgicas e de asma durante a noite são indícios comuns de que o colchão está com excesso de ácaros e de partículas alergênicas.",
          "Vale prestar atenção também ao cheiro. Um odor de mofo ou de umidade persistente, mesmo depois de arejar o quarto, costuma indicar que a espuma interna reteve umidade e favoreceu a proliferação de fungos junto com os ácaros.",
          "Famílias com crianças pequenas, idosos ou pessoas com rinite, sinusite ou asma tendem a perceber esses sintomas com mais intensidade, já que são grupos mais sensíveis à presença de alérgenos no ambiente de sono.",
        ],
      },
      {
        heading: "Cuidados que ajudam no dia a dia",
        paragraphs: [
          "Alguns hábitos simples ajudam a reduzir o acúmulo entre uma higienização e outra. Arejar o quarto todas as manhãs, evitar fazer a cama imediatamente ao acordar (o calor e a umidade ainda presentes favorecem os ácaros) e expor o colchão à luz do sol sempre que possível são atitudes que fazem diferença.",
          "Usar capas protetoras impermeáveis e laváveis também ajuda a criar uma barreira entre o corpo e o interior do colchão, reduzindo a penetração de suor e células de pele nas camadas internas.",
          "Aspirar o colchão semanalmente, incluindo as laterais e as costuras, remove parte da poeira acumulada na superfície. Ainda assim, esse cuidado caseiro tem limite: ele não substitui uma higienização que trabalhe as camadas internas do estofado.",
        ],
      },
      {
        heading: "O papel da higienização profissional",
        paragraphs: [
          "A higienização profissional de colchões trabalha justamente onde a limpeza caseira não alcança. Com equipamentos e produtos adequados ao tipo de tecido e espuma, é possível extrair sujidade, resíduos orgânicos e ácaros de dentro das camadas do colchão, não apenas da superfície.",
          "Além de contribuir para a redução de sintomas alérgicos, esse processo também prolonga a vida útil do colchão e ajuda a manter o ambiente do quarto mais saudável, especialmente em casas com crianças, pets ou pessoas com sensibilidade respiratória.",
          "Se você notou algum dos sinais descritos acima ou simplesmente não lembra a última vez que o colchão passou por uma limpeza profunda, vale considerar uma avaliação. A Multilimp Higienização atende a domicílio em Americana e região e usa orientação adequada para cada tipo de material do colchão. Solicite um orçamento pelo WhatsApp para tirar suas dúvidas.",
        ],
      },
    ],
    relatedServiceSlugs: ["colchoes", "impermeabilizacao-de-estofados"],
  },
  {
    slug: "sinais-sofa-precisa-higienizacao-profissional",
    title: "Sinais de que seu sofá precisa de higienização profissional",
    metaTitle: "Sinais de que Seu Sofá Precisa de Higienização Profissional",
    metaDescription:
      "Odor persistente, manchas antigas e alergias podem indicar que o sofá precisa de uma limpeza profunda. Veja os principais sinais de alerta.",
    excerpt:
      "Nem sempre a sujeira do sofá é visível a olho nu. Conheça os sinais mais comuns de que chegou a hora de higienizar profissionalmente o estofado.",
    coverImage: "/images/multilimp/blog/sinais-sofa-precisa-higienizacao-profissional.webp",
    publishedAt: "2026-08-01",
    readingTime: "5 min de leitura",
    body: [
      {
        heading: "O sofá é um dos móveis mais usados da casa",
        paragraphs: [
          "É no sofá que a família assiste TV, recebe visitas, faz refeições rápidas e, muitas vezes, os pets também passam boa parte do dia. Esse uso intenso faz com que o estofado acumule sujidade, gordura, poeira e resíduos orgânicos de forma muito mais rápida do que se imagina.",
          "O problema é que grande parte dessa sujeira fica retida dentro do tecido e do enchimento, e não apenas na superfície visível. Por isso, um sofá pode parecer limpo à primeira vista e ainda assim estar acumulando sujidade há meses.",
        ],
      },
      {
        heading: "Odor persistente mesmo depois de arejar",
        paragraphs: [
          "Se o sofá exala um cheiro característico mesmo com o ambiente ventilado, isso costuma indicar que odores foram absorvidos pelas fibras do tecido ao longo do tempo, seja de suor, comida, umidade ou pets. Perfumadores de ambiente disfarçam o problema, mas não o resolvem, porque a origem do odor continua dentro do estofado.",
        ],
      },
      {
        heading: "Manchas antigas que não saem com limpeza caseira",
        paragraphs: [
          "Manchas de café, suco, caneta ou gordura que já passaram por várias tentativas de limpeza com pano e produtos caseiros tendem a se fixar ainda mais nas fibras do tecido quando o método usado não é o adequado para aquele tipo de estofado. Nesses casos, a limpeza profissional consegue tratar a mancha com produtos e técnicas específicas para cada tipo de tecido, sem danificar a fibra.",
        ],
      },
      {
        heading: "Piora de alergias perto do sofá",
        paragraphs: [
          "Assim como o colchão, o sofá também acumula ácaros, poeira e pelos de animais em grande quantidade, principalmente nas costuras, frestas dos almofadões e na parte de baixo do móvel. Se alguém da casa costuma espirrar, sentir coceira nos olhos ou ter o nariz entupido justamente ao se sentar no sofá, esse é um sinal de que o estofado está pedindo uma higienização mais profunda.",
        ],
      },
      {
        heading: "Tecido opaco, áspero ou com aspecto de sujo",
        paragraphs: [
          "Com o tempo, o acúmulo de poeira e gordura na superfície deixa o tecido com aparência opaca e textura mais áspera ao toque, mesmo em sofás de cores claras que disfarçam menos a sujeira. Se o estofado perdeu o aspecto de novo mesmo sem manchas evidentes, provavelmente é hora de uma limpeza profunda.",
        ],
      },
      {
        heading: "Quando vale a pena chamar um profissional",
        paragraphs: [
          "Manter o sofá aspirado e livre de sujeira visível ajuda, mas não substitui uma higienização periódica que trabalhe as camadas internas do estofado. A frequência ideal varia de acordo com o uso, a presença de pets e crianças e o tipo de tecido, então vale conversar com um profissional para entender o que faz sentido para o seu caso.",
          "A Multilimp Higienização faz higienização de sofás e estofados a domicílio em Americana, Santa Bárbara d’Oeste, Nova Odessa, Sumaré, Hortolândia, Limeira e Paulínia, com orientação adequada para cada tipo de material. Fale pelo WhatsApp e solicite um orçamento.",
        ],
      },
    ],
    relatedServiceSlugs: ["sofas-e-estofados", "impermeabilizacao-de-estofados"],
  },
  {
    slug: "vale-a-pena-impermeabilizar-estofado-do-carro",
    title: "Vale a pena impermeabilizar o estofado do carro?",
    metaTitle: "Vale a Pena Impermeabilizar o Estofado do Carro?",
    metaDescription:
      "Entenda como funciona a impermeabilização de bancos automotivos, quando ela faz sentido e como combiná-la com a higienização do veículo.",
    excerpt:
      "Bancos de tecido sujam e mancham com facilidade. Entenda o que é a impermeabilização automotiva, como funciona e quando vale a pena investir nela.",
    coverImage: "/images/multilimp/blog/vale-a-pena-impermeabilizar-estofado-do-carro.webp",
    publishedAt: "2026-08-10",
    readingTime: "5 min de leitura",
    body: [
      {
        heading: "O desafio dos bancos de tecido",
        paragraphs: [
          "Bancos automotivos de tecido enfrentam um desgaste bem diferente do de um sofá em casa. Poeira da rua, suor, restos de comida, água da chuva em dias de embarque apressado e o atrito constante de entrar e sair do carro fazem o estofado sujar e manchar rapidamente, mesmo em veículos usados com cuidado.",
          "Diferente do banco de couro ou courvin, que permite passar um pano úmido com facilidade, o tecido absorve líquidos e sujidade para dentro das fibras, o que torna a limpeza caseira mais limitada e as manchas mais difíceis de remover depois que já secaram.",
        ],
      },
      {
        heading: "O que é a impermeabilização de estofados",
        paragraphs: [
          "A impermeabilização é a aplicação de um produto profissional que cria uma camada protetora sobre as fibras do tecido, dificultando a penetração de líquidos e sujidade. Na prática, isso significa que um respingo de água, suco ou café tende a escorrer pela superfície em vez de ser absorvido imediatamente, dando mais tempo para limpar antes que vire mancha.",
          "É importante ter uma expectativa realista sobre o processo: a impermeabilização reduz a absorção e facilita a limpeza do dia a dia, mas não torna o tecido à prova de qualquer mancha permanentemente, nem dispensa manutenção ao longo do tempo.",
        ],
      },
      {
        heading: "Quando costuma valer a pena",
        paragraphs: [
          "Famílias com crianças pequenas, quem transporta pets no banco de trás, motoristas de aplicativo e qualquer pessoa que use o carro com bastante frequência tendem a sentir mais o benefício da impermeabilização, já que o estofado fica exposto a mais situações de risco de mancha no dia a dia.",
          "Também é um cuidado interessante para quem acabou de higienizar profissionalmente os bancos e quer prolongar o resultado da limpeza, evitando que a sujeira volte a se fixar nas fibras com a mesma rapidez de antes.",
        ],
      },
      {
        heading: "Higienização antes da impermeabilização",
        paragraphs: [
          "A impermeabilização funciona melhor quando aplicada sobre um tecido já limpo. Se o produto for aplicado sobre um banco com sujidade acumulada, a camada protetora pode selar a sujeira que já está nas fibras em vez de proteger um tecido limpo.",
          "Por isso, o processo mais indicado é primeiro fazer a higienização profissional dos bancos, removendo manchas, odores e sujidade acumulada, e só então aplicar a impermeabilização como uma camada extra de proteção.",
        ],
      },
      {
        heading: "Como manter o resultado por mais tempo",
        paragraphs: [
          "Depois da impermeabilização, pequenos cuidados ajudam a manter o efeito por mais tempo: limpar respingos assim que acontecem, evitar produtos de limpeza muito agressivos sobre o tecido e passar um aspirador com regularidade para remover poeira antes que ela se acumule.",
          "A frequência ideal para reaplicar a impermeabilização varia conforme o uso do veículo, por isso o recomendado é avaliar o estado do estofado periodicamente com um profissional.",
          "A Multilimp Higienização faz higienização e impermeabilização de bancos automotivos a domicílio em Americana e região, com orientação adequada para cada tipo de material. Solicite um orçamento pelo WhatsApp e tire suas dúvidas sobre o processo.",
        ],
      },
    ],
    relatedServiceSlugs: ["bancos-automotivos", "impermeabilizacao-de-estofados"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
