import { JsonLd, faqJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";
import { SERVICE_AREA_NAMES } from "@/lib/constants";
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
  title: "Multilimp Higienização | Americana e região",
  description:
    "Higienização e impermeabilização de estofados, tapetes e carpetes em Americana, Santa Bárbara d’Oeste, Nova Odessa, Sumaré, Hortolândia, Limeira e Paulínia.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd(SERVICE_AREA_NAMES)} />
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
        description="Solicite um orçamento e consulte a disponibilidade para atendimento em Americana e nas cidades da região."
        source="home_final_cta"
      />
    </>
  );
}
