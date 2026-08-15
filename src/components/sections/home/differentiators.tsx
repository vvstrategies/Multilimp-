import { Building2, Droplets, Home, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BUSINESS } from "@/lib/constants";

const ITEMS = [
  {
    icon: Home,
    title: "Atendimento a domicílio",
    description:
      "Levamos toda a estrutura de limpeza até você, sem necessidade de transportar sofás, colchões ou bancos automotivos.",
  },
  {
    icon: Droplets,
    title: "Produtos profissionais",
    description:
      "Usamos produtos que fazem uma limpeza profunda sem danificar ou desgastar as fibras do tecido.",
  },
  {
    icon: ShieldCheck,
    title: "Eliminação completa",
    description:
      "Removemos ácaros, bactérias, fungos e odores encravados nas fibras, não apenas a sujeira visível.",
  },
  {
    icon: Sparkles,
    title: "Impermeabilização",
    description:
      "Proteção extra contra líquidos, manchas e desgaste do dia a dia para quem quer prolongar o resultado.",
  },
  {
    icon: Building2,
    title: "Residencial e empresarial",
    description:
      "Atendemos tanto residências quanto empresas que precisam manter estofados limpos e higienizados.",
  },
  {
    icon: Star,
    title: `Nota ${BUSINESS.rating.value.toFixed(1)} no Google`,
    description: `Avaliação de ${BUSINESS.rating.value.toFixed(1)} estrelas com ${BUSINESS.rating.count} avaliações de clientes reais.`,
  },
];

export function Differentiators() {
  return (
    <section className="bg-muted/40 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Por que escolher a GS Vitaliza</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Cuidado com o seu estofado do início ao fim, com foco em saúde e higiene.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card p-6 ring-1 ring-border">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5.5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
