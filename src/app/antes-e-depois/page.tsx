import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BreadcrumbBar } from "@/components/sections/areas/breadcrumbs";
import { GalleryPlaceholderGrid } from "@/components/sections/gallery/placeholder-grid";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Antes e Depois | GS Vitaliza",
  description:
    "Veja como a higienização profissional da GS Vitaliza transforma sofás, colchões, bancos automotivos e tapetes. Galeria em atualização com novos casos reais.",
  path: "/antes-e-depois",
});

export default function AntesEDepoisPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Antes e Depois", path: "/antes-e-depois" },
        ])}
      />

      <BreadcrumbBar items={[{ label: "Início", href: "/" }, { label: "Antes e Depois" }]} />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Antes e Depois
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-muted">
            Resultados reais da higienização profissional de sofás, colchões, bancos automotivos e
            tapetes feita pela GS Vitaliza.
          </p>
        </Container>
      </section>

      {/* Intro + honesty note */}
      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground">
            Estamos organizando nossa galeria de fotos reais de antes e depois. Enquanto reunimos
            esse material, veja abaixo os tipos de serviço que documentamos em cada atendimento.
          </p>
          <p className="mt-3 rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground ring-1 ring-border">
            Galeria em atualização com novos casos reais. Peça exemplos de trabalhos recentes
            diretamente pelo WhatsApp.
          </p>
        </Container>
      </section>

      {/* Placeholder grid */}
      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container>
          <GalleryPlaceholderGrid />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Quer ver exemplos de trabalhos recentes?
            </h2>
            <p className="mt-3 max-w-xl text-navy-muted">
              Fale com a nossa equipe pelo WhatsApp e peça fotos de casos reais para o seu tipo de
              estofado.
            </p>
          </div>
          <Button
            variant="cta-white"
            size="xl"
            render={
              <a
                href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "gallery_cta")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Pedir exemplos no WhatsApp
          </Button>
        </Container>
      </section>
    </>
  );
}
