import type { Metadata } from "next";
import Link from "next/link";
import {
  BedDouble,
  CarFront,
  ChevronRight,
  Rows3,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
} from "lucide-react";
import type { ComponentType } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/data/services";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const SERVICE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "sofas-e-estofados": Sofa,
  colchoes: BedDouble,
  "bancos-automotivos": CarFront,
  "tapetes-e-carpetes": Rows3,
  "impermeabilizacao-de-estofados": ShieldCheck,
};

export const metadata: Metadata = pageMetadata({
  title: "Serviços de Higienização de Estofados em Taboão da Serra",
  description:
    "Higienização de sofás, colchões, bancos automotivos, tapetes e carpetes, além de impermeabilização de estofados. Atendimento a domicílio em Taboão da Serra, Osasco, Santo Amaro e região.",
  path: "/servicos",
});

const CHOICE_TIPS = [
  {
    title: "Sujeira, manchas ou odor no estofado?",
    description:
      "A higienização profunda (sofás, colchões, bancos automotivos ou tapetes) é o ponto de partida para remover sujeira encravada, manchas e odores.",
  },
  {
    title: "Quer proteger o estofado depois de limpo?",
    description:
      "A impermeabilização é indicada para quem já higienizou o estofado e quer dificultar que líquidos e sujeira do dia a dia voltem a penetrar no tecido.",
  },
  {
    title: "Não sabe qual serviço faz mais sentido?",
    description:
      "Envie uma mensagem pelo WhatsApp contando a situação do seu sofá, colchão, carro ou tapete. Ajudamos a definir o serviço mais adequado antes de fechar o orçamento.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/servicos" },
        ])}
      />

      {/* Breadcrumb */}
      <Container>
        <nav aria-label="Breadcrumb" className="pt-6 pb-2 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-foreground">
                Início
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              Serviços
            </li>
          </ol>
        </nav>
      </Container>

      {/* Hero */}
      <section className="pt-6 pb-16 sm:pt-8 sm:pb-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1.5">
                <Sparkles className="size-3" aria-hidden="true" />
                Atendimento a domicílio
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <Star className="size-3 fill-primary text-primary" aria-hidden="true" />
                {BUSINESS.rating.value.toFixed(1)} ({BUSINESS.rating.count} avaliações)
              </Badge>
            </div>
            <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Serviços de Higienização de Estofados
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A GS Vitaliza higieniza sofás, colchões, bancos automotivos, tapetes e carpetes, e
              também aplica impermeabilização de estofados. Todo o atendimento é feito a
              domicílio, em residências e empresas, com produtos profissionais que não danificam
              o tecido, em Taboão da Serra, Osasco, Santo Amaro e região.
            </p>
            <div className="mt-8">
              <Button
                variant="cta"
                size="xl"
                render={
                  <a
                    href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "services_hub_hero_cta")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Solicitar orçamento gratuito
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.slug] ?? Sparkles;
              return (
                <Link key={service.slug} href={`/servicos/${service.slug}`} className="group">
                  <Card className="h-full p-6 transition-shadow group-hover:shadow-lg">
                    <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 font-heading text-xl font-semibold">
                      {service.shortName}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.heroSubheadline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Saiba mais
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How to choose */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Como escolher o serviço certo
            </h2>
            <p className="mt-3 text-muted-foreground">
              Se você não tem certeza de qual serviço precisa, esse guia rápido ajuda a decidir
              por onde começar.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {CHOICE_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-2xl bg-background p-6 ring-1 ring-border">
                <h3 className="font-heading text-base font-semibold">{tip.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 text-navy-foreground sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Vamos cuidar do seu estofado?
          </h2>
          <p className="max-w-xl text-navy-muted">
            Fale com a gente pelo WhatsApp, conte o que precisa e receba um orçamento gratuito
            para o serviço mais adequado.
          </p>
          <Button
            variant="cta-white"
            size="xl"
            render={
              <a
                href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "services_hub_final_cta")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Falar no WhatsApp agora
          </Button>
        </Container>
      </section>
    </>
  );
}
