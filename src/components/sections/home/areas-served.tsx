import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AREAS_NAV } from "@/lib/constants";

export function AreasServed() {
  return (
    <section className="bg-muted/40 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Áreas atendidas</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Atendimento a domicílio em Taboão da Serra e cidades da região.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS_NAV.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-card p-5 ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-4.5" aria-hidden="true" />
                </span>
                <span className="font-medium">{area.label}</span>
              </span>
              <ArrowRight
                className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" render={<Link href="/areas-atendidas" />}>
            Ver todas as áreas atendidas
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
