import { CheckCircle2, MessageCircle, Sparkles, Truck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Solicitação via WhatsApp",
    description: "Você entra em contato e conta o que precisa higienizar.",
  },
  {
    icon: CheckCircle2,
    title: "Agendamento",
    description: "Combinamos o melhor dia e horário para o atendimento.",
  },
  {
    icon: Truck,
    title: "Atendimento a domicílio",
    description: "Levamos a estrutura completa até a sua casa ou empresa.",
  },
  {
    icon: Sparkles,
    title: "Resultado",
    description: "Estofado limpo, higienizado e livre de ácaros, bactérias e odores.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="">Como funciona</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Um processo simples, do primeiro contato ao resultado final.
          </p>
        </Reveal>

        <Reveal as="div" delay={150} className="relative mt-16">
          <div className="timeline-line-wrap hidden sm:block">
            <div className="timeline-line-draw" />
          </div>

          <div className="timeline-steps grid gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <div key={step.title} className="timeline-step flex flex-col items-center text-center transition-[opacity,filter] duration-300">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
                  <step.icon className="size-6" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="relative z-[1] mt-5 size-2.5 rounded-full bg-primary ring-4 ring-background"
                />
                <span className="mt-2 text-sm font-medium text-muted-foreground">Passo {index + 1}</span>
                <h3 className="mt-4">{step.title}</h3>
                <p className="mt-2 max-w-[26ch] text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
