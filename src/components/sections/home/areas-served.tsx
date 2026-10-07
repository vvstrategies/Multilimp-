import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Plus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { AREAS_NAV } from "@/lib/constants";

export function AreasServed() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-navy-foreground sm:py-20 lg:py-24">
      <Image
        src="/images/multilimp/regiao-americana.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,15,28,0.9)_0%,rgba(7,15,28,0.74)_48%,rgba(7,15,28,0.94)_100%)]"
      />

      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary-soft uppercase">
            Cobertura
          </p>
          <h2 className="mt-3">Atendemos Americana e a região</h2>
          <p className="mt-4 text-base text-navy-muted">
            Sete cidades no eixo Americana–Campinas, com deslocamento combinado antes do
            agendamento.
          </p>
        </Reveal>

        {/* Seven cities plus the "not listed" tile make eight, which fills one,
            two and four columns without leaving a tile alone on a row. */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS_NAV.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 backdrop-blur-[14px] backdrop-saturate-150 transition-colors hover:border-primary/60 hover:bg-primary/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary-soft">
                  <MapPin className="size-4.5" aria-hidden="true" />
                </span>
                <span className="font-medium text-white">{area.label}</span>
              </span>
              <ArrowRight
                className="size-4 shrink-0 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-soft"
                aria-hidden="true"
              />
            </Link>
          ))}
          <Link
            href="/contato"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-dashed border-white/25 bg-white/5 p-4 transition-colors hover:border-primary/60 hover:bg-primary/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary-soft">
                <Plus className="size-4.5" aria-hidden="true" />
              </span>
              <span className="font-medium text-white/85">Sua cidade não está aqui?</span>
            </span>
            <ArrowRight
              className="size-4 shrink-0 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-soft"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="cta-outline"
            size="lg"
            className="border border-white/18 bg-white/8 backdrop-blur-md hover:bg-white/14"
            render={<Link href="/areas-atendidas" />}
          >
            <span className="btn-cta-label">Ver todas as áreas atendidas</span>
            <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
