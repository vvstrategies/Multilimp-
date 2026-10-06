import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ReviewsHeader } from "@/components/sections/reviews/reviews-header";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">Avaliações da Multilimp no Google</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Confira a nota e leia os comentários diretamente no perfil público da empresa.
          </p>
        </Reveal>

        <ReviewsHeader className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-5 ring-1 ring-border" />

        <div className="mt-6 text-center">
          <Button variant="outline" size="lg" render={<Link href="/avaliacoes" />}>
            <span className="btn-cta-label">Saiba mais sobre as avaliações</span>
            <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
