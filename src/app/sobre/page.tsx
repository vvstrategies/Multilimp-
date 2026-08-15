import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/sections/home/breadcrumb";
import { AboutHero } from "@/components/sections/home/about-hero";
import { AboutStory } from "@/components/sections/home/about-story";
import { Differentiators } from "@/components/sections/home/differentiators";
import { StatsRow } from "@/components/sections/home/stats-row";
import { CtaBanner } from "@/components/sections/home/cta-banner";

export const metadata = pageMetadata({
  title: "Sobre a GS Vitaliza | Higienização de Estofados",
  description:
    "Conheça a GS Vitaliza: especialistas em higienização de sofás, colchões, bancos automotivos e tapetes, com atendimento a domicílio em Taboão da Serra e região e nota 5,0 no Google.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ])}
      />

      <Breadcrumb items={[{ name: "Início", path: "/" }, { name: "Sobre", path: "/sobre" }]} />
      <AboutHero />
      <AboutStory />
      <Differentiators />
      <StatsRow />
      <CtaBanner
        title="Vamos cuidar dos seus estofados?"
        description="Solicite um orçamento gratuito e agende o atendimento a domicílio com a GS Vitaliza."
        source="sobre_final_cta"
      />
    </>
  );
}
