import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/areas/breadcrumbs";
import { ReviewsHeader } from "@/components/sections/reviews/reviews-header";
import { ReviewCard } from "@/components/sections/reviews/review-card";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { getGoogleReviews } from "@/lib/google-reviews";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Avaliações no Google | Multilimp Higienização",
  description:
    "Confira a nota e leia as avaliações atuais da Multilimp Higienização diretamente no perfil público do Google.",
  path: "/avaliacoes",
});

export default async function AvaliacoesPage() {
  const reviewData = await getGoogleReviews();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Avaliações", path: "/avaliacoes" },
        ])}
      />

      <section className="bg-navy py-16 text-navy-foreground sm:py-20">
        <Container>
          <Breadcrumbs
            variant="dark"
            items={[{ label: "Início", href: "/" }, { label: "Avaliações" }]}
          />
          <h1 className="mt-6 max-w-3xl">Avaliações da Multilimp Higienização</h1>
          <p className="mt-5 max-w-2xl text-base text-navy-muted">
            A Multilimp tem nota {reviewData.rating.toFixed(1)} no Google, com{" "}
            {reviewData.totalReviews} avaliações. Consulte os comentários diretamente no perfil
            público para ver as informações mais recentes.
          </p>
          <div className="mt-8">
            <Button
              variant="cta-white"
              size="xl"
              render={
                <a
                  href={reviewData.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Ver avaliações no Google
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2>Avaliações públicas</h2>
          <p className="mt-3 text-muted-foreground">
              As avaliações abaixo são carregadas pelo Google e atualizadas periodicamente.
          </p>
            <ReviewsHeader
              data={reviewData}
              className="mt-8 rounded-2xl bg-card p-5 ring-1 ring-border"
            />
          </div>

          {reviewData.reviews.length > 0 ? (
            <div className="mt-8 grid auto-cols-[min(85vw,23rem)] grid-flow-col gap-5 overflow-x-auto px-0.5 pb-3 snap-x snap-mandatory lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible">
              {reviewData.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-muted/50 p-5 text-sm text-muted-foreground ring-1 ring-border">
              Os comentários não estão disponíveis no momento. A página continua funcionando e
              você pode consultar todas as avaliações pelo botão do Google acima.
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="">Quer falar com a Multilimp?</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Entre em contato pelo WhatsApp para consultar serviços e disponibilidade de
              atendimento.
            </p>
          </div>
          <Button
            variant="cta"
            size="xl"
            render={
              <a
                href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "reviews_cta")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Falar no WhatsApp
          </Button>
        </Container>
      </section>
    </>
  );
}
