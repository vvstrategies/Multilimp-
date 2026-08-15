import { Container } from "@/components/layout/container";
import { BUSINESS } from "@/lib/constants";

const STATS = [
  { value: BUSINESS.rating.value.toFixed(1), label: "Estrelas no Google" },
  { value: `${BUSINESS.rating.count}`, label: "Avaliações no Google" },
  { value: "+1.800", label: "Seguidores no Instagram" },
];

export function StatsRow() {
  return (
    <section className="bg-muted/40 py-14">
      <Container className="grid gap-8 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-4xl font-semibold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
