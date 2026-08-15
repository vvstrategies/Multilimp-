import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ReviewsHeader } from "@/components/sections/reviews/reviews-header";
import { ReviewsCarousel } from "@/components/sections/reviews/reviews-carousel";
import { REVIEWS } from "@/data/reviews";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">O que dizem nossos clientes</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Avaliações reais deixadas por clientes no Google, sem seleção nem edição de conteúdo.
          </p>
        </Reveal>

        <ReviewsHeader className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-5 ring-1 ring-border" />

        <Reveal as="div" delay={100} className="mt-8">
          <ReviewsCarousel reviews={REVIEWS.slice(0, 14)} />
        </Reveal>

        <div className="mt-6 text-center">
          <Button variant="outline" size="lg" render={<Link href="/avaliacoes" />}>
            <span className="btn-cta-label">Ver todas as avaliações</span>
            <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
