import { MapPin, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-card px-3 py-1 text-xs font-medium text-navy-muted ring-1 ring-white/10">
            <Star className="size-3.5 fill-primary text-primary" aria-hidden="true" />
            {BUSINESS.rating.value.toFixed(1)} no Google ({BUSINESS.rating.count} avaliações)
          </span>

          <h1 className="mt-5 text-4xl leading-tight font-semibold sm:text-5xl lg:text-[3.25rem]">
            Higienização profissional de estofados, direto na sua casa em{" "}
            <span className="text-primary">Taboão da Serra</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-navy-muted sm:text-lg">
            Removemos sujeira encravada, ácaros, bactérias, fungos e odores de sofás,
            colchões, bancos automotivos e tapetes, com produtos profissionais que
            preservam o tecido. Levamos toda a estrutura até você.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="cta-white"
              size="xl"
              render={
                <a
                  href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "home_hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Solicitar orçamento gratuito
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-muted">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              Atendimento a domicílio
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Taboão da Serra e região
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-navy-card via-navy to-primary/20 ring-1 ring-white/10">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgb(30 106 255 / 0.5), transparent 45%), radial-gradient(circle at 80% 70%, rgb(30 106 255 / 0.35), transparent 50%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-24 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                <Sparkles className="size-10 text-primary" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
