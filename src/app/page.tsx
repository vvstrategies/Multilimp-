import { JsonLd, faqJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/hero";
import { ServicesGrid } from "@/components/sections/home/services-grid";
import { Differentiators } from "@/components/sections/home/differentiators";
import { ProcessSteps } from "@/components/sections/home/process-steps";
import { ResultsTeaser } from "@/components/sections/home/results-teaser";
import { Testimonials } from "@/components/sections/home/testimonials";
import { AreasServed } from "@/components/sections/home/areas-served";
import { AboutTeaser } from "@/components/sections/home/about-teaser";
import { FaqPreview, FAQ_PREVIEW_ITEMS } from "@/components/sections/home/faq-preview";
import { CtaBanner } from "@/components/sections/home/cta-banner";
import { SectionDivider } from "@/components/layout/section-divider";

export const metadata = pageMetadata({
  title: "GS Vitaliza | Higienização de Estofados em Taboão da Serra",
  description:
    "Higienização profissional de sofás, colchões, bancos automotivos, tapetes e impermeabilização de estofados, com atendimento a domicílio em Taboão da Serra, Osasco, Santo Amaro e região. Nota 5,0 no Google.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={localBusinessJsonLd([
          "Taboão da Serra",
          "Osasco",
          "Santo Amaro",
          "Embu das Artes",
          "Itapevi",
          "Cotia",
        ])}
      />
      <JsonLd data={faqJsonLd(FAQ_PREVIEW_ITEMS)} />

      <Hero />
      <SectionDivider href="#servicos" label="Ver os serviços" />
      <ServicesGrid />
      <Differentiators />
      <ProcessSteps />
      <ResultsTeaser />
      <Testimonials />
      <AreasServed />
      <AboutTeaser />
      <FaqPreview />
      <CtaBanner
        title="Pronto para renovar seus estofados?"
        description="Solicite um orçamento gratuito e agende o atendimento a domicílio em Taboão da Serra e região."
        source="home_final_cta"
      />
    </>
  );
}
