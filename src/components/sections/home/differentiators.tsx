import { Building2, Droplets, Home, ShieldCheck, Sparkles, Star, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BUSINESS } from "@/lib/constants";

const ITEMS: { icon: LucideIcon; title: string; description: string }[] = [
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
    <section id="diferenciais" className="bg-navy py-16 text-navy-foreground sm:py-20">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">Por que escolher a GS Vitaliza</h2>
          <p className="mt-4 text-base text-navy-muted">
            Cuidado com o seu estofado do início ao fim, com foco em saúde e higiene.
          </p>
        </Reveal>

        <div
          className="diff-grid -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5"
        >
          {ITEMS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="diff-card relative flex min-h-[300px] w-[82vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-7 sm:w-auto sm:min-h-[280px]"
              style={{
                background: "linear-gradient(160deg, var(--navy-surface) 0%, var(--navy) 75%)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-8 left-1/2 size-40 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
              />
              <item.icon
                aria-hidden="true"
                strokeWidth={1.25}
                className="pointer-events-none relative mb-6 size-16 self-center text-white/25 sm:size-20"
              />
              <h3 className="relative text-white">{item.title}</h3>
              <p className="relative mt-3 max-w-[30ch] text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
