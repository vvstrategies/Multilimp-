import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GoogleLogo } from "@/components/sections/reviews/review-card";
import { ReviewsMarquee } from "@/components/sections/reviews/reviews-marquee";
import { getGoogleReviews } from "@/lib/google-reviews";

export async function Testimonials() {
  const reviewData = await getGoogleReviews();
  const rating = reviewData.rating.toFixed(1).replace(".", ",");

  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            <GoogleLogo className="size-3.5" />
            Avaliações
          </span>
          <h2 className="mt-4">
            Nota {rating} no Google, com{" "}
            <span className="text-primary">{reviewData.totalReviews} avaliações</span> de clientes
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Comentários publicados no perfil da Multilimp Higienização no Google.
          </p>
        </Reveal>
      </Container>

      <Reveal as="div" className="mt-12">
        <ReviewsMarquee reviews={reviewData.reviews} />
      </Reveal>

      <Container className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" size="lg" render={<Link href="/avaliacoes" />}>
          <span className="btn-cta-label">Ver todas as avaliações</span>
          <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="lg"
          render={
            <a href={reviewData.googleMapsUri} target="_blank" rel="noopener noreferrer" />
          }
        >
          Ver perfil no Google
        </Button>
      </Container>
    </section>
  );
}
