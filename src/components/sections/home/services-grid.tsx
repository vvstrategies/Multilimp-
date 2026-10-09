import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ServicesBento } from "@/components/sections/services/services-bento";

export function ServicesGrid() {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal
          as="div"
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              Serviços
            </p>
            <h2 className="mt-3">Cada peça pede uma técnica diferente</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Higienização especializada para estofados, colchões, tapetes e bancos
              automotivos, em residências e empresas.
            </p>
          </div>
          <Link
            href="/servicos"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary"
          >
            Ver todos os serviços
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <ServicesBento className="mt-10 lg:mt-12" />
      </Container>
    </section>
  );
}
