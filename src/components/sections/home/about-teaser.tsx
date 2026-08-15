import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center ring-1 ring-border sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Sobre a {BUSINESS.displayName}</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Somos especialistas em higienização de estofados com atendimento a domicílio,
            baseados em Taboão da Serra. Nosso foco é a saúde da sua casa ou empresa: remover
            ácaros, bactérias, fungos e odores usando produtos profissionais que preservam o
            tecido, com nota {BUSINESS.rating.value.toFixed(1)} no Google.
          </p>
          <Button variant="outline" size="lg" className="mt-6" render={<Link href="/sobre" />}>
            Conheça a nossa história
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
