import { CheckCircle2, MessageCircle, Sparkles, Truck } from "lucide-react";
import { Container } from "@/components/layout/container";

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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Como funciona</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Um processo simples, do primeiro contato ao resultado final.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-semibold text-muted-foreground">
                  Passo {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
