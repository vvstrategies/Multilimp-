import type { GoogleReview } from "@/lib/google-reviews";

/**
 * Public Google reviews of the Multilimp Higienização profile, copied from the
 * listing on 2026-10-06. They are the fallback shown while GOOGLE_PLACES_API_KEY
 * is not configured; once it is, the live API response replaces them. The
 * `relativeTime` labels are the ones Google itself displayed on that date.
 */
export const CURATED_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "curated-wagner-lucas",
    authorName: "Wagner Lucas",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Excelente profissional, pontual, serviço de alta qualidade, já fez esses serviços pra mim diversas vezes, recomendo a todos dessa comunidade!",
  },
  {
    id: "curated-anderson-silva",
    authorName: "Anderson Silva",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Excelente profissional! Trabalho de primeira qualidade, fez limpeza dos bancos do meu carro e do meu sofá, ficaram novos novamente!",
  },
  {
    id: "curated-saulo-raquel",
    authorName: "Saulo Raquel",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Atingiu nossas expectativas!! Um excelente profissional que efetuou o serviço, com excelências técnicas, onde nós indicamos, ou recomendamos a empresa.",
  },
  {
    id: "curated-joseane-raquel",
    authorName: "Joseane Raquel",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Olha, gostei do serviço que fizeram no meu sofá, ficou maravilhoso, incrível, está empresa Multilimp, são ótimos, estão de parabéns.",
  },
  {
    id: "curated-rozimeire-felix",
    authorName: "Rozimeire Félix da Silva",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Amei... serviço de primeira... muito caprichoso e profissional.",
  },
  {
    id: "curated-isabel-fogagnoli",
    authorName: "Isabel Fogagnoli",
    rating: 5,
    relativeTime: "há 3 meses",
    text: "Excelente profissional e um excelente serviço, serviço prestado ficou incrível.",
  },
  {
    id: "curated-rozeli-felix",
    authorName: "Rozeli Felix",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Foi muito agradável, rápido, gostei muito, recomendo. Meu sofá ficou limpinho, ainda mais que tenho netos.",
  },
  {
    id: "curated-felipe-raquel",
    authorName: "Felipe da Silva Raquel",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Gostei muito do atendimento, fez uma ótima limpeza no meu sofá, recomendo.",
  },
  {
    id: "curated-genivan-souza",
    authorName: "Genivan Souza",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Eu indico. Super apoio, pontual, justo e organizado.",
  },
  {
    id: "curated-pedro-nagamutsu",
    authorName: "Pedro Nagamutsu",
    rating: 5,
    relativeTime: "há 5 meses",
    text: "Muito bom, serviço de excelência e qualidade, recomendo com toda certeza.",
  },
];
