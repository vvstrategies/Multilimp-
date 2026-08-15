import Link from "next/link";
import { ArrowRight, BedDouble, CarFront, Grid2x2, ShieldCheck, Sofa } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SERVICES } from "@/data/services";
import { SERVICES_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "/servicos/sofas-e-estofados": Sofa,
  "/servicos/colchoes": BedDouble,
  "/servicos/bancos-automotivos": CarFront,
  "/servicos/tapetes-e-carpetes": Grid2x2,
  "/servicos/impermeabilizacao-de-estofados": ShieldCheck,
};

// Sofás is the flagship service (it is what most Google reviews mention), so it
// takes the wide slot. Spanning two columns also makes five cards fill the grid
// exactly at both the 2 and 3 column breakpoints, with no empty cell left over.
const FEATURED_HREF = "/servicos/sofas-e-estofados";

const FEATURED_HIGHLIGHTS =
  SERVICES.find((service) => service.slug === "sofas-e-estofados")?.environments.slice(0, 5) ?? [];

export function ServicesGrid() {
  return (
    <section id="servicos" className="py-16 sm:py-20">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">Nossos serviços</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Higienização especializada para cada tipo de estofado, com atendimento
            residencial e empresarial.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_NAV.map((service, index) => {
            const Icon = SERVICE_ICONS[service.href] ?? Sofa;
            const isFeatured = service.href === FEATURED_HREF;

            return (
              <Reveal
                key={service.href}
                delay={index * 70}
                className={cn(isFeatured && "sm:col-span-2")}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl p-6 ring-1 transition-shadow hover:shadow-lg sm:p-7",
                    isFeatured
                      ? "bg-gradient-to-br from-primary/8 via-card to-card ring-primary/25"
                      : "bg-card ring-border"
                  )}
                >
                  <span
                    className={cn(
                      "flex items-center justify-center rounded-xl bg-primary/10 text-primary",
                      isFeatured ? "size-13" : "size-11"
                    )}
                  >
                    <Icon className={isFeatured ? "size-6.5" : "size-5.5"} aria-hidden="true" />
                  </span>

                  {isFeatured && (
                    <span className="mt-5 w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      Serviço mais procurado
                    </span>
                  )}

                  <h3 className={isFeatured ? "mt-3" : "mt-5"}>{service.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>

                  {isFeatured && FEATURED_HIGHLIGHTS.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {FEATURED_HIGHLIGHTS.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="mt-5 inline-flex flex-1 items-end gap-1.5 text-sm font-medium text-primary">
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
