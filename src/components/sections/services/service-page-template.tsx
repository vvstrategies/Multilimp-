import Link from "next/link";
import {
  BedDouble,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Droplets,
  ImageOff,
  ListChecks,
  MapPin,
  Rows3,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
} from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { BUSINESS, whatsappHref } from "@/lib/constants";
import type { ServiceDefinition } from "@/types/service";

const SERVICE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "sofas-e-estofados": Sofa,
  colchoes: BedDouble,
  "bancos-automotivos": CarFront,
  "tapetes-e-carpetes": Rows3,
  "impermeabilizacao-de-estofados": ShieldCheck,
};

function getServiceIcon(slug: string) {
  return SERVICE_ICONS[slug] ?? Sparkles;
}

function HeroImagePlaceholder({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <div
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-navy-card via-navy to-primary/20 ring-1 ring-white/10"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="relative flex flex-col items-center gap-3 text-navy-muted">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/10 text-primary ring-1 ring-white/20 backdrop-blur-sm">
          <Icon className="size-8" />
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase">
          <ImageOff className="size-3.5" />
          Foto em breve
        </span>
      </div>
    </div>
  );
}

function Breadcrumb({ shortName }: { shortName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-6 pb-2 text-sm text-navy-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-navy-foreground">
            Início
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </li>
        <li className="flex items-center gap-1.5">
          <Link href="/servicos" className="hover:text-navy-foreground">
            Serviços
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </li>
        <li aria-current="page" className="font-medium text-navy-foreground">
          {shortName}
        </li>
      </ol>
    </nav>
  );
}

export function ServicePageTemplate({
  service,
  allServices,
}: {
  service: ServiceDefinition;
  allServices: ServiceDefinition[];
}) {
  const Icon = getServiceIcon(service.slug);
  const introParagraphs = service.intro.split("\n\n").filter(Boolean);
  const relatedServices = service.relatedServiceSlugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is ServiceDefinition => Boolean(s));
  const heroMessage = `Olá! Vim pelo site da GS Vitaliza e gostaria de solicitar um orçamento para ${service.name.toLowerCase()}.`;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-navy-foreground pb-16 sm:pb-20">
        <Container>
          <Breadcrumb shortName={service.shortName} />
        </Container>
        <Container className="mt-4 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="gap-1.5 border-white/15 bg-navy-card text-navy-muted">
                <MapPin className="size-3" aria-hidden="true" />
                Atendimento a domicílio
              </Badge>
              <Badge className="gap-1.5 border-white/15 bg-navy-card text-navy-muted">
                <Star className="size-3 fill-primary text-primary" aria-hidden="true" />
                {BUSINESS.rating.value.toFixed(1)} ({BUSINESS.rating.count} avaliações)
              </Badge>
            </div>

            <h1 className="mt-4">
              {service.heroHeadline}
            </h1>
            <p className="mt-5 max-w-xl text-base text-navy-muted">{service.heroSubheadline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="cta-white"
                size="xl"
                render={
                  <a
                    href={whatsappHref(heroMessage, "service_hero_cta")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Solicitar orçamento gratuito
              </Button>
              <Button variant="cta-outline" size="xl" render={<Link href="/servicos" />}>
                Ver todos os serviços
              </Button>
            </div>
          </div>

          <div>
            {service.heroImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.heroImage}
                alt={service.heroHeadline}
                className="aspect-[4/3] w-full rounded-3xl object-cover ring-1 ring-white/10"
              />
            ) : (
              <HeroImagePlaceholder icon={Icon} />
            )}
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="">
              Problemas que resolvemos
            </h2>
            <p className="mt-3 text-muted-foreground">
              Sinais comuns de que o {service.shortName.toLowerCase()} precisa de uma higienização
              profissional.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.problems.map((problem) => (
              <Card key={problem.title} className="p-6">
                <h3 className="font-heading">{problem.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{problem.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="">
              Benefícios do serviço
            </h2>
            <p className="mt-3 text-muted-foreground">
              O que você pode esperar de uma higienização profissional feita pela GS Vitaliza.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-3 rounded-2xl bg-background p-6 ring-1 ring-border">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-heading">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="">Como funciona</h2>
            <p className="mt-3 text-muted-foreground">
              Do primeiro contato até a peça pronta para uso, veja como é o atendimento.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <li key={step.step} className="relative rounded-2xl p-6 ring-1 ring-border">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-glow">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Environments */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="">
                Onde atuamos
              </h2>
              <p className="mt-3 text-muted-foreground">
                Superfícies e itens cobertos por este serviço.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
              {service.environments.map((environment) => (
                <li
                  key={environment}
                  className="flex items-center gap-2.5 rounded-xl bg-background px-4 py-3 text-sm ring-1 ring-border"
                >
                  <ListChecks className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {environment}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="">
              Por que escolher a GS Vitaliza
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm text-foreground sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center">
              Perguntas frequentes
            </h2>
            <Accordion className="mt-8 divide-y divide-border rounded-2xl bg-background px-6 ring-1 ring-border">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="py-4 text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="">
              Serviços relacionados
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = getServiceIcon(related.slug);
                return (
                  <Link key={related.slug} href={`/servicos/${related.slug}`} className="group">
                    <Card className="h-full p-6 transition-shadow group-hover:shadow-lg">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <RelatedIcon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-heading">
                        {related.shortName}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {related.heroSubheadline}
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
      )}

      {/* Areas served */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-muted/50 p-8 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Droplets className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm text-foreground sm:text-base">
                Atendemos {service.shortName.toLowerCase()} em Taboão da Serra, Osasco, Santo
                Amaro, Embu das Artes, Itapevi e Cotia.
              </p>
            </div>
            <Button variant="outline" size="lg" render={<Link href="/areas-atendidas" />}>
              Ver áreas atendidas
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 text-navy-foreground sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl">
            Pronto para renovar {service.shortName === "Colchões" ? "seu colchão" : "o seu estofado"}?
          </h2>
          <p className="max-w-xl text-navy-muted">
            Solicite um orçamento gratuito pelo WhatsApp e agende o atendimento no dia e horário
            que forem melhores para você.
          </p>
          <Button
            variant="cta-white"
            size="xl"
            render={
              <a
                href={whatsappHref(heroMessage, "service_final_cta")}
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
