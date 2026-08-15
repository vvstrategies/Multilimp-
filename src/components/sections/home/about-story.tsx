import { Container } from "@/components/layout/container";
import { BUSINESS } from "@/lib/constants";

export function AboutStory() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Como trabalhamos</h2>
        <div className="mt-6 space-y-5 text-base text-muted-foreground sm:text-lg">
          <p>
            Somos uma empresa de higienização e conservação de estofados baseada em{" "}
            {BUSINESS.address.city}, com atendimento a domicílio. Isso significa que levamos
            toda a estrutura necessária até a sua casa ou empresa, sem que você precise
            transportar sofás, colchões ou bancos automotivos até nós.
          </p>
          <p>
            O nosso trabalho vai além da limpeza visível: o foco é a saúde do ambiente. Usamos
            produtos profissionais que fazem uma limpeza profunda das fibras do tecido,
            eliminando ácaros, bactérias, fungos e odores, sem danificar ou desgastar o
            material.
          </p>
          <p>
            Atendemos tanto residências quanto empresas, e também oferecemos
            impermeabilização de estofados para quem quer uma camada extra de proteção
            contra líquidos, manchas e o desgaste do dia a dia.
          </p>
          <p>
            Esse cuidado é reconhecido pelos nossos clientes: temos nota{" "}
            {BUSINESS.rating.value.toFixed(1)} no Google, com {BUSINESS.rating.count}{" "}
            avaliações, e acompanhamos de perto cada atendimento para manter esse padrão.
          </p>
        </div>
      </Container>
    </section>
  );
}
