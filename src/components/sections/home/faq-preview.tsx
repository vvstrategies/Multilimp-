import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ_PREVIEW_ITEMS = [
  {
    question: "O que é a higienização de estofados?",
    answer:
      "É uma limpeza profunda que remove sujeira encravada nas fibras do tecido, além de eliminar ácaros, bactérias, fungos e odores, usando produtos profissionais e equipamento apropriado para cada tipo de estofado.",
  },
  {
    question: "A higienização é segura para o tecido do meu sofá ou colchão?",
    answer:
      "Sim. Utilizamos produtos profissionais desenvolvidos para limpar sem danificar ou desgastar as fibras do tecido.",
  },
  {
    question: "Quanto tempo leva para secar depois da limpeza?",
    answer:
      "O tempo de secagem varia conforme o tipo de tecido, a umidade do ambiente e a ventilação do local no dia do atendimento.",
  },
  {
    question: "A limpeza realmente elimina ácaros e bactérias?",
    answer:
      "Sim, o processo de higienização é focado justamente na eliminação de ácaros, bactérias, fungos e odores que ficam encravados nas fibras dos estofados.",
  },
  {
    question: "Vocês atendem empresas, além de residências?",
    answer:
      "Sim, atendemos residências e empresas que precisam manter sofás, cadeiras, colchões e outros estofados limpos e higienizados.",
  },
];

export function FaqPreview() {
  return (
    <section className="bg-muted/40 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Perguntas frequentes</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tire as principais dúvidas sobre a nossa higienização de estofados.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card px-6 ring-1 ring-border sm:px-8">
          <Accordion>
            {FAQ_PREVIEW_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" render={<Link href="/perguntas-frequentes" />}>
            Ver todas as perguntas
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
