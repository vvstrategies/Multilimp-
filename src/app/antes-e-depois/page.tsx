import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/areas/breadcrumbs";
import { PhotoGrid } from "@/components/sections/gallery/photo-grid";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Galeria de Trabalhos | Multilimp Higienização",
  description:
    "Veja fotos de peças atendidas pela Multilimp Higienização: sofás, colchões, poltronas, cadeiras e bancos automotivos.",
  path: "/antes-e-depois",
});

export default function AntesEDepoisPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Galeria de trabalhos", path: "/antes-e-depois" },
        ])}
      />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container>
          <Breadcrumbs variant="dark" items={[{ label: "Início", href: "/" }, { label: "Galeria de trabalhos" }]} />
          <h1 className="mt-6 max-w-3xl">
            Galeria de trabalhos
          </h1>
          <p className="mt-5 max-w-2xl text-base text-navy-muted">
            Fotos de sofás, colchões, poltronas, cadeiras e bancos automotivos atendidos pela
            Multilimp Higienização.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-foreground">
            Conheça alguns dos tipos de peças atendidos pela equipe. As imagens mostram exemplos de
            trabalhos compartilhados pela empresa; não são comparativos de antes e depois.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40 py-14 sm:py-16">
        <Container>
          <PhotoGrid />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy text-navy-foreground py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="">
              Quer consultar um serviço para a sua peça?
            </h2>
            <p className="mt-3 max-w-xl text-navy-muted">
              Fale com a equipe pelo WhatsApp para informar o tipo de peça e confirmar a
              disponibilidade do atendimento.
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
            Falar com a equipe
          </Button>
        </Container>
      </section>
    </>
  );
}
