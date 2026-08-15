import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BreadcrumbBar } from "@/components/sections/areas/breadcrumbs";
import { FEATURED_REVIEWS, ReviewCard } from "@/components/sections/reviews/review-card";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { breadcrumbJsonLd, JsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Avaliações | GS Vitaliza",
  description:
    "GS Vitaliza tem nota 5,0 com 49 avaliações no Google. Confira depoimentos reais de clientes e avalie você também o nosso atendimento.",
  path: "/avaliacoes",
});

export default function AvaliacoesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Avaliações", path: "/avaliacoes" },
        ])}
      />
      <JsonLd data={localBusinessJsonLd()} />

      <BreadcrumbBar items={[{ label: "Início", href: "/" }, { label: "Avaliações" }]} />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Avaliações de quem já confiou na GS Vitaliza
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg text-navy-muted">
              <span className="text-2xl font-semibold text-navy-foreground">
                {BUSINESS.rating.value.toFixed(1)}
              </span>{" "}
              de nota com{" "}
              <span className="font-semibold text-navy-foreground">
                {BUSINESS.rating.count} avaliações
              </span>{" "}
              no Google
            </p>
          </div>
          <div className="mt-8">
            <Button
              variant="cta-white"
              size="xl"
              render={
                <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              Ver todas as {BUSINESS.rating.count} avaliações no Google
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured reviews */}
      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Depoimentos em destaque
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Alguns dos comentários reais deixados por clientes no perfil do Google da GS Vitaliza.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-navy py-16 text-navy-foreground sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Já foi atendido pela GS Vitaliza?
            </h2>
            <p className="mt-3 max-w-xl text-navy-muted">
              Leia as demais avaliações no Google ou deixe você também o seu comentário sobre o
              nosso atendimento.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="cta-white"
              size="xl"
              render={
                <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              Avaliar no Google
            </Button>
            <Button
              variant="cta-outline"
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
          </div>
        </Container>
      </section>
    </>
  );
}
