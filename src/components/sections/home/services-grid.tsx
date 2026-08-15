import Link from "next/link";
import { ArrowRight, BedDouble, CarFront, Grid2x2, ShieldCheck, Sofa } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SERVICES_NAV } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "/servicos/sofas-e-estofados": Sofa,
  "/servicos/colchoes": BedDouble,
  "/servicos/bancos-automotivos": CarFront,
  "/servicos/tapetes-e-carpetes": Grid2x2,
  "/servicos/impermeabilizacao-de-estofados": ShieldCheck,
};

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-navy py-16 text-navy-foreground sm:py-20">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">Nossos serviços</h2>
          <p className="mt-4 text-base text-navy-muted">
            Higienização especializada para cada tipo de estofado, com atendimento
            residencial e empresarial.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_NAV.map((service, index) => {
            const Icon = SERVICE_ICONS[service.href] ?? Sofa;
            return (
              <Reveal key={service.href} delay={index * 70}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-card p-6 transition-colors hover:border-white/25 sm:p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-navy-foreground">{service.label}</h3>
                  <p className="mt-2 flex-1 text-sm text-navy-muted">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Saiba mais
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
