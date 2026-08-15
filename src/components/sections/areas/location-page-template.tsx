import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/areas/breadcrumbs";
import { BUSINESS, SERVICES_NAV, whatsappHref } from "@/lib/constants";
import type { LocationDefinition } from "@/types/location";

export function LocationPageTemplate({
  location,
  allLocations,
}: {
  location: LocationDefinition;
  allLocations: LocationDefinition[];
}) {
  const otherLocations = allLocations.filter((item) => item.slug !== location.slug);
  const whatsappMessage = `Olá! Vim pelo site da GS Vitaliza e gostaria de solicitar um orçamento para atendimento em ${location.city}.`;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container>
          <Breadcrumbs
            variant="dark"
            items={[
              { label: "Início", href: "/" },
              { label: "Áreas Atendidas", href: "/areas-atendidas" },
              { label: location.city },
            ]}
          />
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-navy-muted">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {location.region}
          </div>
          <h1 className="mt-3 max-w-3xl">
            {location.heroHeadline}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-navy-muted">{location.heroSubheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="cta-white"
              size="xl"
              render={
                <a
                  href={whatsappHref(whatsappMessage, `location_${location.slug}_hero`)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Solicitar orçamento gratuito
            </Button>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-foreground">{location.intro}</p>
        </Container>
      </section>

      {/* Local context */}
      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="">
            Atendimento em {location.city}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{location.localContext}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{location.distanceNote}</p>
        </Container>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="">
            Serviços disponíveis em {location.city}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Levamos até {location.city} a linha completa de higienização profissional de
            estofados da GS Vitaliza.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_NAV.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col gap-2 rounded-2xl p-6 ring-1 ring-border transition-colors hover:bg-muted/60"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-medium">{service.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <span className="mt-1 flex items-center gap-1 text-sm font-medium text-primary">
                  Saiba mais
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust / social proof */}
      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {BUSINESS.rating.value.toFixed(1)}
              </span>{" "}
              de avaliação com{" "}
              <span className="font-semibold text-foreground">{BUSINESS.rating.count}</span>{" "}
              avaliações no Google
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="lg" render={<Link href="/avaliacoes" />}>
              Ver avaliações
            </Button>
            <Button
              variant="ghost"
              size="lg"
              render={
                <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              Ver no Google
            </Button>
          </div>
        </Container>
      </section>

      {/* Other areas */}
      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="">
            Outras áreas atendidas
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A GS Vitaliza também atende outras cidades da região. Confira a disponibilidade para a
            sua.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocations.map((item) => (
              <Link
                key={item.slug}
                href={`/areas-atendidas/${item.slug}`}
                className="group flex items-center justify-between gap-2 rounded-2xl p-5 ring-1 ring-border transition-colors hover:bg-muted/60"
              >
                <div>
                  <p className="font-medium">{item.city}</p>
                  <p className="text-sm text-muted-foreground">{item.region}</p>
                </div>
                <ArrowRight
                  className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="">
              Pronto para higienizar seus estofados em {location.city}?
            </h2>
            <p className="mt-3 max-w-xl text-navy-muted">
              Fale agora com a GS Vitaliza e solicite um orçamento gratuito, sem compromisso.
            </p>
          </div>
          <Button
            variant="cta-white"
            size="xl"
            render={
              <a
                href={whatsappHref(whatsappMessage, `location_${location.slug}_footer`)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Falar no WhatsApp
          </Button>
        </Container>
      </section>
    </>
  );
}
