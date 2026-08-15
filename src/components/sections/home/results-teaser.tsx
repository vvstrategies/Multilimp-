import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function ResultsTeaser() {
  return (
    <section className="bg-muted/40 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="">Resultados que você pode ver</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Manchas antigas, sujeira encravada e odores desaparecem com a nossa
              higienização profissional. Confira exemplos reais de antes e depois.
            </p>
            <Button variant="cta" size="lg" className="mt-6" render={<Link href="/antes-e-depois" />}>
              Ver antes e depois
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-muted to-primary/5 ring-1 ring-border"
              >
                <Sparkles className="size-6 text-primary/60" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
