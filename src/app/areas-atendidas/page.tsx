import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/areas/breadcrumbs";
import { LOCATIONS } from "@/data/locations";
import { DEFAULT_WHATSAPP_MESSAGE, SERVICE_AREA_NAMES, whatsappHref } from "@/lib/constants";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Áreas Atendidas | Multilimp Higienização",
  description:
    "Veja as cidades atendidas pela Multilimp Higienização: Americana, Santa Bárbara d’Oeste, Nova Odessa, Sumaré, Hortolândia, Limeira e Paulínia.",
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

      {/* Hero */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container>
          <Breadcrumbs
            variant="dark"
            items={[{ label: "Início", href: "/" }, { label: "Áreas Atendidas" }]}
          />
          <h1 className="mt-6 max-w-3xl">
            Cidades atendidas pela Multilimp Higienização
          </h1>
          <p className="mt-5 max-w-2xl text-base text-navy-muted">
            Higienização e impermeabilização de estofados, tapetes, persianas, carpetes e
            bancos automotivos, com atendimento em Americana e nas cidades da região.
          </p>
        </Container>
      </section>

      {/* Coverage framing */}
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-foreground">
            A Multilimp Higienização está localizada em Americana e informa atendimento em{" "}
            {SERVICE_AREA_NAMES.join(", ").replace(/, ([^,]*)$/, " e $1")}. O serviço é agendado
            conforme a disponibilidade da equipe. Entre em contato para confirmar a cobertura do
            seu endereço e consultar datas.
          </p>
        </Container>
      </section>

      {/* Cities grid */}
      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container>
          <h2 className="">
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
                <p className="text-base font-semibold">{location.city}</p>
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
            <h2 className="">
              Precisa de atendimento em outra cidade?
            </h2>
            <p className="mt-3 max-w-xl text-navy-muted">
              Fale com a Multilimp Higienização pelo WhatsApp para consultar a disponibilidade
              para o seu endereço.
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
