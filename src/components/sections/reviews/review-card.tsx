import { Star } from "lucide-react";

export type Review = {
  name: string;
  rating: number;
  quote: string;
};

export const FEATURED_REVIEWS: Review[] = [
  {
    name: "Nikolas Miranda",
    rating: 5,
    quote: "Fez pacote completo aqui na minha casa, com sofá, colchão e cabeceira.",
  },
  {
    name: "Gedson Lopes da Luz",
    rating: 5,
    quote: "Serviço de boa qualidade, trabalho com equipamento de qualidade eficiente.",
  },
  {
    name: "Lenita Bittencourt",
    rating: 5,
    quote: "Houve persistência para retirar manchas e entregá-los dessa forma.",
  },
];

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-background p-6 ring-1 ring-border">
      <div className="flex" aria-hidden="true">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-base leading-relaxed text-foreground">&ldquo;{review.quote}&rdquo;</p>
      <p className="text-sm font-medium text-muted-foreground">{review.name}</p>
    </div>
  );
}
