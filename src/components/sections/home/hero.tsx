import { House, MapPin, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {/* Hero uses a tighter 1140px rail with an asymmetric text/media split,
          matching the agreed reference proportions rather than the wider
          site-wide Container. */}
      <div className="mx-auto grid w-full max-w-[1140px] items-center justify-between gap-8 px-6 py-8 text-center sm:px-8 sm:py-10 lg:grid-cols-[418px_500px] lg:gap-12 lg:py-12 lg:text-left">
        <div className="order-2 flex flex-col items-center lg:order-1 lg:items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-card px-3 py-1 text-xs font-medium text-navy-muted ring-1 ring-white/10">
            <Star className="size-3.5 fill-primary text-primary" aria-hidden="true" />
            {BUSINESS.rating.value.toFixed(1)} no Google ({BUSINESS.rating.count} avaliações)
          </span>

          <h1 className="mt-4">
            Higienização profissional de estofados, direto na sua casa em{" "}
            <span className="hero-underline text-primary">Taboão da Serra</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-muted">
            Removemos sujeira encravada, ácaros, bactérias, fungos e odores de sofás,
            colchões, bancos automotivos e tapetes, com produtos profissionais que
            preservam o tecido. Levamos toda a estrutura até você.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-navy-muted lg:justify-start">
            <span className="flex items-center gap-1.5">
              <House className="size-4 text-primary" aria-hidden="true" />
              Atendimento a domicílio
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Taboão da Serra e região
            </span>
          </div>
        </div>

        <div className="order-1 relative lg:order-2">
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
              <span className="flex size-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                <Sparkles className="size-9 text-primary" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
