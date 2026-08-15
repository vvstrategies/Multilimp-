import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Nikolas Miranda",
    quote: "Fez pacote completo aqui na minha casa, com sofá, colchão e cabeceira.",
  },
  {
    name: "Gedson Lopes da Luz",
    quote: "Serviço de boa qualidade, trabalho com equipamento de qualidade eficiente.",
  },
  {
    name: "Lenita Bittencourt",
    quote: "Houve persistência para retirar manchas e entregá-los dessa forma.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-primary text-primary" aria-hidden="true" />
            ))}
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {BUSINESS.rating.value.toFixed(1)} estrelas no Google
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Mais de {BUSINESS.rating.count} avaliações de clientes satisfeitos em Taboão da
            Serra e região.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-border">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" render={<Link href="/avaliacoes" />}>
            Ver todas as avaliações
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
