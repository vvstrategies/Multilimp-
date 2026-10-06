import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function ResultsTeaser() {
  return (
    <section className="bg-muted/40 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="">Conheça alguns trabalhos</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Veja exemplos de sofás e estofados atendidos pela Multilimp Higienização.
            </p>
            <Button variant="cta" size="lg" className="mt-6" render={<Link href="/antes-e-depois" />}>
              Ver galeria de trabalhos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ["sofa.webp", "Sofá atendido pela Multilimp"],
              ["colchao.webp", "Colchão atendido pela Multilimp"],
              ["bancos-automotivos.webp", "Bancos automotivos atendidos pela Multilimp"],
            ].map(([file, alt]) => (
              <div key={file} className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-border">
                <Image
                  src={`/images/multilimp/${file}`}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
