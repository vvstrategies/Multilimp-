import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { BUSINESS } from "@/lib/constants";

export function AboutStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <Reveal as="div">
            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              Como trabalhamos
            </p>
            <h2 className="mt-3">A estrutura vai até a sua casa</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos uma empresa de higienização e conservação de estofados baseada em{" "}
                {BUSINESS.address.city}, com atendimento a domicílio. Isso significa que levamos
                toda a estrutura necessária até a sua casa ou empresa, sem que você precise
                transportar sofás, colchões ou bancos automotivos até nós.
              </p>
              <p>
                O atendimento começa pela avaliação do tipo de peça e do material. A Multilimp
                oferece higienização e impermeabilização de estofados, além de serviços para
                tapetes, persianas e carpetes.
              </p>
              <p>
                Atendemos tanto residências quanto empresas, e também oferecemos impermeabilização
                de estofados para quem quer uma camada extra de proteção contra líquidos, manchas e
                o desgaste do dia a dia.
              </p>
              <p>
                Esse cuidado é reconhecido pelos nossos clientes: temos nota{" "}
                {BUSINESS.rating.value.toFixed(1)} no Google, com {BUSINESS.rating.count}{" "}
                avaliações, e acompanhamos de perto cada atendimento para manter esse padrão.
              </p>
            </div>
          </Reveal>

          {/* The image is not wrapped in Reveal: a scroll-driven view timeline
              on a sticky box feeds its own layout and locks the renderer. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-border lg:sticky lg:top-28">
            <Image
              src="/images/multilimp/sobre-estrutura.webp"
              alt="Equipamento de higienização carregado na van de atendimento da Multilimp"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
