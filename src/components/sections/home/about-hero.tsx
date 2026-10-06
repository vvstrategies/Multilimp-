import { Container } from "@/components/layout/container";
import { BUSINESS } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="bg-navy py-16 text-navy-foreground sm:py-20">
      <Container>
        <h1 className="max-w-3xl">
          Especialistas em higienização de estofados, com atendimento a domicílio
        </h1>
        <p className="mt-5 max-w-2xl text-base text-navy-muted">
          A {BUSINESS.displayName} é especializada em higienização de sofás, colchões, bancos
          automotivos, tapetes, persianas, cadeiras e carpetes, além da impermeabilização de
          estofados. Há mais de três anos, atende residências e empresas em Americana e região.
        </p>
      </Container>
    </section>
  );
}
