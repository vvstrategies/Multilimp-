import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BUSINESS, SERVICE_AREA_NAMES } from "@/lib/constants";

const STATS = [
  { value: BUSINESS.rating.value.toFixed(1).replace(".", ","), label: "Nota no Google" },
  { value: `${BUSINESS.rating.count}`, label: "Avaliações de clientes" },
  { value: "3+", label: "Anos no mercado" },
  { value: `${SERVICE_AREA_NAMES.length}`, label: "Cidades atendidas" },
];

export function StatsRow() {
  return (
    <section className="bg-muted/40 py-14 sm:py-16">
      <Container>
        <Reveal as="dl" className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-heading block text-4xl font-semibold tracking-tight text-primary tabular-nums sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground" aria-hidden="true">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
