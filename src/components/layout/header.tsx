import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import {
  AREAS_NAV,
  BUSINESS,
  DEFAULT_WHATSAPP_MESSAGE,
  SERVICES_NAV,
  whatsappHref,
} from "@/lib/constants";

const SIMPLE_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Antes e Depois", href: "/antes-e-depois" },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const desktopLinkClass =
  "rounded-lg px-2.5 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

function DesktopDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group relative">
      <summary
        className={`${desktopLinkClass} flex cursor-pointer list-none items-center gap-1 [&::-webkit-details-marker]:hidden`}
      >
        {label}
        <ChevronDown
          className="size-3 transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="absolute top-full left-0 mt-2 min-w-64 rounded-xl bg-white p-2 text-foreground shadow-xl ring-1 ring-black/10">
        {children}
      </div>
    </details>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-5">
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-4 rounded-2xl bg-navy/95 px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.22)] ring-1 ring-white/15 backdrop-blur-xl md:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={BUSINESS.displayName}
        >
          <span className="flex h-12 w-[60px] shrink-0 items-center justify-center rounded-lg bg-white p-1 sm:h-14 sm:w-[70px]">
            <Image
              src="/images/multilimp/logo-multilimp.webp"
              alt=""
              width={579}
              height={465}
              sizes="(max-width: 640px) 60px, 70px"
              className="h-auto w-full object-contain"
            />
          </span>
          <span className="hidden max-w-28 text-left text-xs leading-tight font-semibold text-white sm:block lg:hidden xl:block xl:max-w-none xl:text-sm">
            Multilimp Higienização
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Navegação principal">
          <Link href="/" className={desktopLinkClass}>Início</Link>
          <Link href="/sobre" className={desktopLinkClass}>Sobre</Link>
          <DesktopDropdown label="Serviços">
            <Link href="/servicos" className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted">
              Todos os serviços
            </Link>
            {SERVICES_NAV.map((service) => (
              <Link key={service.href} href={service.href} className="block rounded-lg px-3 py-2 hover:bg-muted">
                <span className="block text-sm font-medium">{service.label}</span>
                <span className="block text-xs text-muted-foreground">{service.description}</span>
              </Link>
            ))}
          </DesktopDropdown>
          <DesktopDropdown label="Áreas Atendidas">
            <Link href="/areas-atendidas" className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted">
              Ver todas as áreas
            </Link>
            {AREAS_NAV.map((area) => (
              <Link key={area.href} href={area.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">
                {area.label}
              </Link>
            ))}
          </DesktopDropdown>
          <Link href="/avaliacoes" className={desktopLinkClass}>Avaliações</Link>
          <Link href="/blog" className={desktopLinkClass}>Blog</Link>
          <Link href="/contato" className={desktopLinkClass}>Contato</Link>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button
            variant="cta"
            size="lg"
            render={
              <a
                href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "header_cta")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Solicitar orçamento
          </Button>
        </div>

        <MobileMenu>
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {SIMPLE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-navy-muted uppercase">
              Serviços
            </p>
            {SERVICES_NAV.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              >
                {service.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-navy-muted uppercase">
              Áreas atendidas
            </p>
            {AREAS_NAV.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              >
                {area.label}
              </Link>
            ))}
            <Link
              href="/perguntas-frequentes"
              className="mt-3 rounded-lg px-3 py-2.5 text-base font-medium hover:bg-white/10"
            >
              Perguntas Frequentes
            </Link>
          </nav>
          <Button
            variant="cta"
            size="xl"
            className="mt-4 w-full"
            render={
              <a
                href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "mobile_menu_cta")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Falar no WhatsApp
          </Button>
        </MobileMenu>
      </div>
    </header>
  );
}
