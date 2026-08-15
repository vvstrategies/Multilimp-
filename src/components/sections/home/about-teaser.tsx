import Link from "next/link";
import { ArrowRight, Droplets, Home as HomeIcon, Star, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { BUSINESS } from "@/lib/constants";

const HIGHLIGHTS = [
  { icon: HomeIcon, label: "Atendimento a domicílio em Taboão da Serra e região" },
  { icon: Droplets, label: "Produtos profissionais que preservam as fibras do tecido" },
  { icon: Star, label: `Nota ${BUSINESS.rating.value.toFixed(1)} no Google, com ${BUSINESS.rating.count} avaliações` },
];

export function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal
          as="div"
          className="mx-auto grid overflow-hidden rounded-[32px] bg-card ring-1 ring-border sm:rounded-[40px] lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <h2 className="">Sobre a {BUSINESS.displayName}</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Somos especialistas em higienização de estofados com atendimento a domicílio,
              baseados em Taboão da Serra. Nosso foco é a saúde da sua casa ou empresa.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-border px-5 py-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="mt-8 w-fit" render={<Link href="/sobre" />}>
              <span className="btn-cta-label">Conheça a nossa história</span>
              <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
            </Button>
          </div>

          <div
            className="relative min-h-[280px] lg:min-h-full"
            style={{ background: "linear-gradient(160deg, var(--navy-surface) 0%, var(--navy) 100%)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles className="size-24 text-white/15" strokeWidth={1} aria-hidden="true" />
            </div>
            <span className="absolute top-6 right-6 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow ring-4 ring-white/10">
              <HomeIcon className="size-5" aria-hidden="true" />
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
