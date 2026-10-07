import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, SERVICE_AREA_NAMES, whatsappHref } from "@/lib/constants";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contato",
  description:
    "Entre em contato com a Multilimp Higienização pelo WhatsApp, telefone ou e-mail e consulte disponibilidade para atendimento.",
  path: "/contato",
});

const mapsQuery = encodeURIComponent(
  `${BUSINESS.legalName}, ${BUSINESS.address.street} - ${BUSINESS.address.neighborhood}, ${BUSINESS.address.city} - ${BUSINESS.address.state}, ${BUSINESS.address.postalCode}`
);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />

      <section className="bg-navy text-navy-foreground">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Contato</p>
          <h1 className="mt-3 max-w-2xl">
            Vamos conversar sobre a higienização do seu estofado
          </h1>
          <p className="mt-4 max-w-2xl text-navy-muted">
            Responda algumas informações rápidas ou fale direto com a nossa equipe pelo WhatsApp.
            Atendemos {SERVICE_AREA_NAMES.join(", ").replace(/, ([^,]*)$/, " e $1")}.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-card p-6 ring-1 ring-border sm:p-8">
                <h2 className="">Solicite um orçamento</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Preencha o formulário abaixo. Vamos abrir o WhatsApp com sua mensagem pronta para
                  você confirmar o envio.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl bg-card p-6 ring-1 ring-border sm:p-8">
                <h2 className="">Informações de contato</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MessageCircle className="size-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">WhatsApp</span>
                      <a
                        href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "contact_page_info")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        {BUSINESS.phoneDisplay}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="size-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">E-mail</span>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="break-all text-muted-foreground hover:text-primary"
                      >
                        {BUSINESS.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="size-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">Telefone</span>
                      <a
                        href={`tel:${BUSINESS.phoneE164}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {BUSINESS.phoneDisplay}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="size-4.5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">Endereço</span>
                      <span className="text-muted-foreground">
                        {BUSINESS.address.street} - {BUSINESS.address.neighborhood}
                        <br />
                        {BUSINESS.address.city} - {BUSINESS.address.state}, {BUSINESS.address.postalCode}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl ring-1 ring-border transition-shadow hover:shadow-glow"
              >
                <div className="flex h-48 flex-col items-center justify-center gap-2 bg-[radial-gradient(120%_120%_at_50%_0%,_rgba(8,119,201,0.28)_0%,_var(--navy-card)_62%,_var(--navy)_100%)] px-6 text-center">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-primary-soft ring-1 ring-white/15">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-1 text-sm font-medium text-white">
                    {BUSINESS.address.street} - {BUSINESS.address.neighborhood}
                  </p>
                  <p className="text-xs text-white/60">
                    {BUSINESS.address.city} - {BUSINESS.address.state}
                  </p>
                  <span className="mt-1 text-xs font-semibold text-primary-soft group-hover:underline">
                    Abrir no Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
