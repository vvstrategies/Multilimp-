import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

const ITEMS: { image: string; title: string; description: string }[] = [
  {
    image: "/images/multilimp/diferenciais/atendimento-domicilio.webp",
    title: "Atendimento a domicílio",
    description:
      "Levamos toda a estrutura de limpeza até você, sem necessidade de transportar sofás, colchões ou bancos automotivos.",
  },
  {
    image: "/images/multilimp/diferenciais/produtos-profissionais.webp",
    title: "Produtos profissionais",
    description:
      "A técnica e os produtos são definidos de acordo com o tipo de peça e o material, após avaliação.",
  },
  {
    image: "/images/multilimp/diferenciais/cuidado-com-cada-peca.webp",
    title: "Cuidado com cada peça",
    description:
      "Cada atendimento começa com a identificação do item e das necessidades relatadas pelo cliente.",
  },
  {
    image: "/images/multilimp/diferenciais/impermeabilizacao-2.webp",
    title: "Impermeabilização",
    description:
      "Proteção extra contra líquidos, manchas e desgaste do dia a dia para quem quer prolongar o resultado.",
  },
  {
    image: "/images/multilimp/diferenciais/residencial-empresarial.webp",
    title: "Residencial e empresarial",
    description:
      "Atendemos tanto residências quanto empresas que precisam manter estofados limpos e higienizados.",
  },
  {
    image: "/images/multilimp/diferenciais/experiencia.webp",
    title: "Mais de 3 anos no mercado",
    description:
      "Experiência em higienização e impermeabilização de diferentes tipos de estofados.",
  },
];

export function Differentiators() {
  return (
    <section id="diferenciais" className="bg-navy py-16 text-navy-foreground sm:py-20 lg:py-24">
      <Container>
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary-soft uppercase">
            Diferenciais
          </p>
          <h2 className="mt-3">Por que escolher a Multilimp Higienização</h2>
          <p className="mt-4 text-base text-navy-muted">
            Atendimento na região, avaliação de cada peça e serviços especializados em estofados.
          </p>
        </Reveal>

        <div className="media-grid -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="media-card flex w-[78vw] shrink-0 snap-start flex-col justify-end rounded-2xl sm:aspect-[4/3] sm:w-auto"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 380px"
                className="media-card-image object-cover"
              />
              <span aria-hidden="true" className="media-card-veil" />
              <div className="relative z-1 p-5 max-sm:pt-40 sm:p-6">
                <h3 className="media-card-title text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
