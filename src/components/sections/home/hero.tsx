import Image from "next/image";
import Link from "next/link";
import { ArrowRight, House, MapPin, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";

const PROOF = [
  {
    icon: House,
    title: "Atendimento a domicílio",
    description: "Levamos a estrutura até você, sem transportar a peça.",
  },
  {
    icon: ShieldCheck,
    title: "Avaliação antes de tudo",
    description: "Técnica e produto definidos pelo tipo de tecido.",
  },
  {
    icon: MapPin,
    title: "Americana e região",
    description: "Sete cidades atendidas no eixo Americana–Campinas.",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-14 text-navy-foreground sm:pb-18 lg:pb-24">
      <Image
        src="/images/multilimp/hero-estofado-2.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Two veils: a vertical one that carries the mobile layout and a
          left-weighted one on wide screens, so the copy keeps its contrast
          while the sofa stays readable on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,15,28,0.9)_0%,rgba(7,15,28,0.8)_42%,rgba(7,15,28,0.96)_100%)] lg:bg-[linear-gradient(100deg,rgba(7,15,28,0.97)_0%,rgba(7,15,28,0.9)_34%,rgba(7,15,28,0.5)_68%,rgba(7,15,28,0.72)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-24 -z-10 size-[520px] rounded-full bg-primary/22 blur-[120px]"
      />

      <Container>
        <div className="max-w-2xl">
          <span className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md">
            <Star className="size-3.5 fill-primary-soft text-primary-soft" aria-hidden="true" />
            {BUSINESS.rating.value.toFixed(1)} no Google · {BUSINESS.rating.count} avaliações
          </span>

          <h1 className="hero-rise mt-5 text-balance sm:text-[40px] sm:leading-[1.1] lg:text-[46px]" style={{ "--hero-delay": "80ms" } as React.CSSProperties}>
            Seu estofado como novo,{" "}
            <span className="text-primary-soft">sem sair de casa</span>
          </h1>

          <p
            className="hero-rise mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ "--hero-delay": "160ms" } as React.CSSProperties}
          >
            Higienização e impermeabilização de sofás, colchões, tapetes, persianas, carpetes e
            bancos automotivos em Americana e região. Mais de três anos cuidando de cada peça.
          </p>

          <div
            className="hero-rise mt-8 flex flex-wrap items-center gap-3"
            style={{ "--hero-delay": "240ms" } as React.CSSProperties}
          >
            <Button
              variant="cta"
              size="xl"
              render={
                <a
                  href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "home_hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <span className="btn-cta-label">Solicitar orçamento</span>
              <ArrowRight className="btn-cta-arrow size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="cta-outline"
              size="xl"
              className="border border-white/18 bg-white/8 backdrop-blur-md hover:bg-white/14"
              render={<Link href="/servicos" />}
            >
              Ver serviços
            </Button>
          </div>
        </div>

        <ul
          className="hero-rise mt-12 grid gap-3 sm:mt-14 sm:grid-cols-3 lg:mt-20"
          style={{ "--hero-delay": "320ms" } as React.CSSProperties}
        >
          {PROOF.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 shadow-[var(--glass-shadow)] backdrop-blur-[14px] backdrop-saturate-150"
            >
              <item.icon className="mt-0.5 size-5 shrink-0 text-primary-soft" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/65">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
