import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BreadcrumbBar } from "@/components/sections/areas/breadcrumbs";
import { LOCATIONS } from "@/data/locations";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Áreas Atendidas | GS Vitaliza",
  description:
    "A GS Vitaliza atende Taboão da Serra e cidades da região oeste da Grande São Paulo. Veja as cidades atendidas e consulte disponibilidade para a sua região.",
  path: "/areas-atendidas",
});

export default function AreasAtendidasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Áreas Atendidas", path: "/areas-atendidas" },
        ])}
      />

      <BreadcrumbBar
        items={[{ label: "Início", href: "/" }, { label: "Áreas Atendidas" }]}
      />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Áreas Atendidas pela GS Vitaliza
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-muted">
            Higienização profissional de sofás, colchões, bancos automotivos, tapetes e
            impermeabilização de estofados, com atendimento a domicílio em Taboão da Serra e
            cidades da região.
          </p>
        </Container>
      </section>

      {/* Coverage framing */}
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground">
            A GS Vitaliza é baseada em Taboão da Serra e atende, com cobertura confirmada, Osasco
            e o bairro de Santo Amaro, na zona sul de São Paulo. Também atendemos Embu das Artes,
            Itapevi e Cotia, cidades da região oeste da Grande São Paulo, conforme a
            disponibilidade da nossa agenda. Consulte disponibilidade para a sua região pelo
            WhatsApp.
          </p>
        </Container>
      </section>

      {/* Cities grid */}
      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Cidades atendidas
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/areas-atendidas/${location.slug}`}
                className="group flex flex-col gap-3 rounded-2xl bg-background p-6 ring-1 ring-border transition-colors hover:bg-muted/60"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {location.region}
                </div>
                <p className="text-lg font-semibold">{location.city}</p>
                <p className="text-sm text-muted-foreground">{location.intro}</p>
                <span className="mt-1 flex items-center gap-1 text-sm font-medium text-primary">
                  Ver detalhes
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

      {/* Final CTA */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Não encontrou a sua cidade?
            </h2>
            <p className="mt-3 max-w-xl text-navy-muted">
              Fale com a GS Vitaliza pelo WhatsApp e consulte disponibilidade de atendimento para
              a sua região.
            </p>
          </div>
          <Button
            variant="cta-white"
            size="xl"
            render={
              <a
                href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "areas_hub_footer")}
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
