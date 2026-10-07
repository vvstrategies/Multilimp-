import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/sections/home/about-hero";
import { AboutStory } from "@/components/sections/home/about-story";
import { Differentiators } from "@/components/sections/home/differentiators";
import { StatsRow } from "@/components/sections/home/stats-row";
import { CtaBanner } from "@/components/sections/home/cta-banner";

export const metadata = pageMetadata({
  title: "Sobre a Multilimp Higienização",
  description:
    "Conheça a Multilimp Higienização, empresa há mais de três anos no mercado e especializada em higienização e impermeabilização de estofados em Americana e região.",
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

      <AboutHero />
      <AboutStory />
      <Differentiators />
      <StatsRow />
      <CtaBanner
        title="Vamos cuidar dos seus estofados?"
        description="Solicite um orçamento e consulte a disponibilidade de atendimento com a Multilimp Higienização."
        source="sobre_final_cta"
      />
    </>
  );
}
