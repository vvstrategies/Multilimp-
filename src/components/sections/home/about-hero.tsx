import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/sections/areas/breadcrumbs";
import { BUSINESS } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-navy-foreground sm:py-20">
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 -z-10 size-[520px] rounded-full bg-primary/18 blur-[130px]"
      />
      <Container>
        <Breadcrumbs
          variant="dark"
          items={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
        />
        <h1 className="mt-6 max-w-3xl">
          Especialistas em higienização de estofados, com atendimento a domicílio
        </h1>
        <p className="mt-5 max-w-2xl text-base text-navy-muted">
          A {BUSINESS.displayName} é especializada em higienização de sofás, colchões, bancos
          automotivos, tapetes, cadeiras e carpetes, além da impermeabilização de
          estofados. Há mais de três anos, atende residências e empresas em Americana e região.
        </p>
      </Container>
    </section>
  );
}
