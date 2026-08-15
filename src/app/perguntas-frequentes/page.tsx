import Link from "next/link";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { GENERAL_FAQS } from "@/data/faq";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Perguntas Frequentes",
  description:
    "Tire suas dúvidas sobre higienização de estofados, agendamento, produtos, segurança, pagamento e área de atendimento da GS Vitaliza.",
  path: "/perguntas-frequentes",
});

const CATEGORIES = Array.from(new Set(GENERAL_FAQS.map((faq) => faq.category)));

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={faqJsonLd(GENERAL_FAQS.map((f) => ({ question: f.question, answer: f.answer })))}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Perguntas Frequentes", path: "/perguntas-frequentes" },
        ])}
      />

      <section className="bg-navy text-navy-foreground">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">FAQ</p>
          <h1 className="mt-3 max-w-2xl">
            Perguntas frequentes sobre a higienização de estofados
          </h1>
          <p className="mt-4 max-w-2xl text-navy-muted">
            Reunimos as dúvidas mais comuns sobre o serviço, o agendamento, os produtos utilizados e
            a área de atendimento. Não encontrou o que procurava? Fale com a gente pelo WhatsApp.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {CATEGORIES.map((category) => (
              <div key={category}>
                <h2 className="text-foreground">{category}</h2>
                <Accordion className="mt-4">
                  {GENERAL_FAQS.filter((faq) => faq.category === category).map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-muted px-6 py-10 text-center ring-1 ring-border sm:px-10">
            <h2 className="">Ainda tem dúvidas?</h2>
            <p className="max-w-xl text-muted-foreground">
              Fale diretamente com a nossa equipe pelo WhatsApp e solicite um orçamento gratuito para
              o seu caso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="cta"
                size="xl"
                render={
                  <a
                    href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "faq_page_cta")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Falar no WhatsApp
              </Button>
              <Button variant="outline" size="xl" render={<Link href="/contato" />}>
                Ver outras formas de contato
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
