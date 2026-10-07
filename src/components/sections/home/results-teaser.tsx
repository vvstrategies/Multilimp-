import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const PHOTOS = [
  ["sofa.webp", "Sofá atendido pela Multilimp"],
  ["colchao.webp", "Colchão atendido pela Multilimp"],
  ["bancos-automotivos.webp", "Bancos automotivos atendidos pela Multilimp"],
  ["poltrona.webp", "Poltrona atendida pela Multilimp"],
] as const;

export function ResultsTeaser() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <Reveal as="div">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              <Camera className="size-3.5" aria-hidden="true" />
              Fotos reais
            </span>
            <h2 className="mt-4">Peças que já passaram pelas nossas mãos</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Registros feitos durante atendimentos da Multilimp em Americana e região — sofás,
              colchões, poltronas e bancos automotivos de clientes reais.
            </p>
            <Button
              variant="cta"
              size="lg"
              className="mt-6"
              render={<Link href="/antes-e-depois" />}
            >
              <span className="btn-cta-label">Ver galeria de trabalhos</span>
              <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
            </Button>
          </Reveal>

          <Reveal as="div" delay={120} className="grid grid-cols-2 gap-3 sm:gap-4">
            {PHOTOS.map(([file, alt], index) => (
              <div
                key={file}
                className={`relative overflow-hidden rounded-2xl ring-1 ring-border ${
                  index % 2 === 0 ? "aspect-[4/5] sm:translate-y-4" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={`/images/multilimp/${file}`}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 260px"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
