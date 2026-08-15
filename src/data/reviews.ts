export type Review = {
  name: string;
  rating: number;
  relativeDate: string;
  text: string;
};

// Real reviews pulled directly from the GS Vitaliza Google Business Profile
// (47 of the 49 total captured with full text). Do not fabricate additional
// entries here — if the client wants the remaining 2, re-scrape the GBP
// reviews panel and append them in the same shape.
export const REVIEWS: Review[] = [
  { name: "Beatriz Penha", rating: 5, relativeDate: "3 meses atrás", text: "Excelente profissional, atendimento nota mil, preço justo, e trabalho impecável, meu sofá ficou outro, meu cachorro havia feito xixi e eu achava que não tinha mais jeito, ele fez milagre rs, indico de olhos fechados." },
  { name: "Juliana Soares", rating: 5, relativeDate: "5 meses atrás", text: "Excelente atendimento! Produtos de alta qualidade, sem contar no cheirinho que dura um tempão, meus estofados ficaram novos. O profissional é muito bem educado, prestativo e me deu um super desconto. Recomendo muito!" },
  { name: "Amanda Lopes de Oliveira", rating: 5, relativeDate: "um mês atrás", text: "Trabalho impecável, atende todos os quesitos, deixou meu colchão super limpo com o aspecto de novo, super recomendo o trabalho, pode contratar sem dúvidas não vai se arrepender." },
  { name: "Larissa Lima", rating: 5, relativeDate: "3 meses atrás", text: "Que trabalho impecável! Profissional incrível, atencioso, muito caprichoso e atento aos detalhes. Meu sofá ficou outro 🙏🏻❤️" },
  { name: "Fabiana Basso Pereira", rating: 5, relativeDate: "3 meses atrás", text: "Excelente serviço! Fiz a lavagem das cadeiras com impermeabilização e fiquei muito satisfeita com o resultado. Atendimento impecável e cuidadoso em todos os detalhes. As cadeiras e poltronas ficaram super limpas, com aparência de novas! Recomendo muito pelo profissionalismo e qualidade." },
  { name: "André Kitagawa", rating: 5, relativeDate: "3 meses atrás", text: "Serviço profissional bem executado, atendimento com qualidade e objetivo. Solicitei uma impermeabilização de sofá. Recomendo 👍" },
  { name: "Lenita Bittencourt", rating: 5, relativeDate: "3 meses atrás", text: "Excelente experiência. Meu sofá e poltronas ficaram super limpos. Houve persistência para retirar manchas e entregá-los dessa forma. Recomendo o trabalho e farei novamente." },
  { name: "Beatriz BWA", rating: 5, relativeDate: "4 meses atrás", text: "Trabalho fenomenal. Desde a contratação do serviço, o atendimento foi de primeira e a surpresa foi ao final com sofá e tapete higienizados, melhor impossível. Parabéns!" },
  { name: "Aline Godoi", rating: 5, relativeDate: "5 meses atrás", text: "Serviço impecável! Profissional extremamente atencioso e detalhista, cuidando de cada etapa com muito capricho. Meu sofá ficou como novo, superando todas as expectativas. Recomendo de olhos fechados!" },
  { name: "Valeria Brandao", rating: 5, relativeDate: "4 meses atrás", text: "O atendimento foi incrível, meu tapete foi retirado em casa e devolvido limpinho e ficou cheiroso por dias. Super recomendo." },
  { name: "Thayna Godoi", rating: 5, relativeDate: "4 meses atrás", text: "Trabalho excelente, eu achava que meu colchão não tinha mais jeito. Como ele mesmo diz, não jogue fora, higienize. Ótimo atendimento, trabalho impecável, parabéns." },
  { name: "Laine", rating: 5, relativeDate: "4 meses atrás", text: "Trabalho de qualidade. Atendimento extremamente profissional e diferenciado. Recomendo também pela sua educação e cuidado." },
  { name: "Cristiano Jesus", rating: 5, relativeDate: "4 meses atrás", text: "Serviço perfeito. Deixou minha cama como se fosse nova. Trabalho organizado, sem bagunça alguma. Super recomendo." },
  { name: "Viviane Garcia", rating: 5, relativeDate: "um mês atrás", text: "Excelente trabalho realizado pela GS Vitaliza! Foi feita a higienização e impermeabilização de poltronas, o resultado foi excelente! Certamente recomendo pelo alto nível de qualidade do trabalho, preço justo e profissionalismo." },
  { name: "Rodrigues Caetano", rating: 5, relativeDate: "3 meses atrás", text: "Atendimento super confiável, trabalho ficou muito bom, já fiz a segunda vez em 6 meses." },
  { name: "Jeniffer Maria", rating: 5, relativeDate: "3 meses atrás", text: "Indico de olhos fechados, muito prestativo e cuidadoso, meu sofá ficou novo em folha, limpo e cheiroso." },
  { name: "Sandro Oliveira", rating: 5, relativeDate: "3 meses atrás", text: "Quero deixar aqui meu reconhecimento à GS Vitaliza Estofados! O trabalho deles é simplesmente impecável, do atendimento até o acabamento final, tudo feito com muito capricho, profissionalismo e atenção aos detalhes." },
  { name: "Kauê Gomes Soares", rating: 5, relativeDate: "3 meses atrás", text: "Trabalho top demais, super recomendo, o meu colchão ficou impecável, parabéns pelo excelente trabalho." },
  { name: "Wilker Torres", rating: 5, relativeDate: "4 meses atrás", text: "Muito atencioso e prestativo, meu sofá ficou show de bola, recomendo muito!" },
  { name: "Isabel Dourado", rating: 5, relativeDate: "2 meses atrás", text: "Foi muito bom o trabalho, executado com sucesso. Vale a pena contratar a GS Vitaliza Estofados." },
  { name: "Fabiana Godoi", rating: 5, relativeDate: "3 meses atrás", text: "Quero deixar aqui minha experiência com a higienização da GS Vitaliza Estofados, simplesmente impecável!" },
  { name: "Andreia Carmo dos Santos", rating: 5, relativeDate: "5 meses atrás", text: "Obrigada pelo ótimo atendimento! Meu sofá ficou limpo e cheiroso, e olha que tenho 3 cachorros. Atendimento de qualidade e preço justo, super recomendo." },
  { name: "Paulo Sergio", rating: 5, relativeDate: "3 meses atrás", text: "Trabalho excelente, custo-benefício melhor ainda, e trabalho impecável, super recomendo, excelente trabalho profissional!" },
  { name: "Kauan Godoi Soares", rating: 5, relativeDate: "4 meses atrás", text: "Hoje fiz os bancos do meu carro, profissional muito educado e gente boa. Super indico, os bancos do meu carro ficaram novos." },
  { name: "Marcela", rating: 5, relativeDate: "4 meses atrás", text: "Recebi um trabalho impecável na minha clínica! As poltronas estavam precisando de uma limpeza e o resultado simplesmente superou minhas expectativas. Ficaram limpas, cheirosas e com aparência de novas." },
  { name: "Ana Vitorino", rating: 5, relativeDate: "4 meses atrás", text: "Fez um trabalho impecável. Meu sofá ficou perfeito, igual a quando comprei!" },
  { name: "Gedson Lopes da Luz", rating: 5, relativeDate: "3 meses atrás", text: "Serviço de boa qualidade, trabalho com equipamento de qualidade eficiente." },
  { name: "SIDNEI FREIRE", rating: 5, relativeDate: "4 meses atrás", text: "Muito satisfeito com o serviço, do atendimento ao serviço. Recomendo." },
  { name: "Clara Meira", rating: 5, relativeDate: "3 meses atrás", text: "Ótimo trabalho e grandes resultados. Indico!" },
  { name: "Bruno Fiori", rating: 5, relativeDate: "5 meses atrás", text: "Serviço de qualidade e atendimento personalizado." },
  { name: "Eduardo Teixeira Coelho", rating: 5, relativeDate: "5 meses atrás", text: "Serviço excelente, rápido e com preço justo! Recomendo." },
  { name: "ROBERTO ADM", rating: 5, relativeDate: "4 meses atrás", text: "Excelente trabalho prestado, atencioso e muito educado." },
  { name: "GABRIEL SALDANHA", rating: 5, relativeDate: "uma semana atrás", text: "Excelente trabalho, super rápido, muito detalhista." },
  { name: "Cantinho da Imaginação", rating: 5, relativeDate: "4 meses atrás", text: "Trabalho sensacional, super indico." },
  { name: "Michael Nogueira", rating: 5, relativeDate: "4 meses atrás", text: "Serviço excelente, recomendo!" },
  { name: "Vicente Ribeiro Lima", rating: 5, relativeDate: "2 meses atrás", text: "100% qualidade e confiança." },
  { name: "Victória Gomes", rating: 5, relativeDate: "2 semanas atrás", text: "Excelente! Fez a lavagem e impermeabilização do nosso sofá. Foi muito atencioso na explicação de todo o processo e também na execução, e o resultado ficou maravilhoso. Vamos contratar futuramente para novos serviços." },
  { name: "Renata Ferreira", rating: 5, relativeDate: "3 semanas atrás", text: "Trabalho top demais, fez milagre na limpeza do colchão com mais de 10 anos de uso! Produtos de qualidade e o perfume que fica no final é excelente 👏🏼" },
  { name: "Vanessa Evelin Alves de Araújo", rating: 5, relativeDate: "3 semanas atrás", text: "Excelente trabalho, todos os estofados da minha casa são higienizados com todo capricho, literalmente salvou meus estofados." },
  { name: "Sabrina Gubel", rating: 5, relativeDate: "um mês atrás", text: "Trabalho perfeito, meu sofá ficou excelente, praticamente novo. Gentil e respeitoso!" },
  { name: "Nikolas Miranda", rating: 5, relativeDate: "um mês atrás", text: "Muito atencioso e profissional. Fez pacote completo aqui na minha casa, com sofá, colchão e cabeceira. Serviço impecável e preço excelente." },
  { name: "Douglas Santos", rating: 5, relativeDate: "um mês atrás", text: "Profissional, ótimo atendimento." },
  { name: "Servero Alves", rating: 5, relativeDate: "2 meses atrás", text: "Atendimento excelente e um ótimo profissional! Meu sofá ficou muito limpo, cheiroso e higienizado! Obrigado pelo serviço!" },
  { name: "Marcel Coelho", rating: 5, relativeDate: "2 meses atrás", text: "Meu sofá ficou em estado de novo mais uma vez. Gostei muito do atendimento, serviço feito sem pressa, prezando a qualidade do estofado." },
  { name: "Mauro Cesar", rating: 5, relativeDate: "3 meses atrás", text: "Atendimento excelente e um ótimo profissional! Meu sofá ficou muito limpo, cheiroso e higienizado! Obrigado pelo serviço!" },
  { name: "Leila Massulo", rating: 5, relativeDate: "4 meses atrás", text: "Profissionais altamente qualificados que entregam mais do que prometem, com total empatia, educação e respeito." },
  { name: "Danilo", rating: 5, relativeDate: "4 meses atrás", text: "Muito top." },
];
