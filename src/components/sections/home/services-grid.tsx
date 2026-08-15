import Link from "next/link";
import { ArrowRight, BedDouble, CarFront, Grid2x2, ShieldCheck, Sofa } from "lucide-react";
import { Container } from "@/components/layout/container";
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
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Nossos serviços</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Higienização especializada para cada tipo de estofado, com atendimento
            residencial e empresarial.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_NAV.map((service) => {
            const Icon = SERVICE_ICONS[service.href] ?? Sofa;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-2xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-lg sm:p-8"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.label}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Saiba mais
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
