import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ReviewsHeader } from "@/components/sections/reviews/reviews-header";
import { ReviewCard } from "@/components/sections/reviews/review-card";
import { getGoogleReviews } from "@/lib/google-reviews";

export async function Testimonials() {
  const reviewData = await getGoogleReviews();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">Avaliações da Multilimp no Google</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Confira a nota e os comentários públicos mais recentes da empresa.
          </p>
        </Reveal>

        <ReviewsHeader
          data={reviewData}
          className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-5 ring-1 ring-border"
        />

        {reviewData.reviews.length > 0 && (
          <div className="mt-6 grid auto-cols-[min(85vw,22rem)] grid-flow-col gap-4 overflow-x-auto px-0.5 pb-3 snap-x snap-mandatory lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible">
            {reviewData.reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {reviewData.source === "fallback" && (
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted-foreground">
            Os comentários serão exibidos aqui após a conexão segura com a API do Google.
            A nota e a contagem acima permanecem disponíveis como referência.
          </p>
        )}

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
