"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/utils";
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
  "rounded-full px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/12 hover:text-white focus-visible:bg-white/12 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

/**
 * Hover/focus dropdown. The panel keeps a padded wrapper above it so the
 * pointer can travel from the trigger into the list without crossing a gap.
 */
function DesktopDropdown({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="group relative">
      <button type="button" className={`${desktopLinkClass} flex items-center gap-1`}>
        {label}
        <ChevronDown
          className="size-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </button>
      <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 max-lg:hidden [&:has(:focus-visible)]:visible [&:has(:focus-visible)]:opacity-100">
        <div className="min-w-68 rounded-2xl border border-[var(--glass-border)] bg-[rgba(7,15,28,0.86)] p-2 text-white shadow-[var(--glass-shadow)] backdrop-blur-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sync = () => setStuck(window.scrollY > 12);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <div
        className={cn(
          "mx-auto flex w-full items-center gap-3 rounded-full border border-transparent py-2.5 pr-2.5 pl-5 transition-[max-width,padding,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out sm:pr-3 sm:pl-6 lg:gap-4",
          stuck
            ? "max-w-[1060px] border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] backdrop-blur-[14px] backdrop-saturate-150"
            : "max-w-[1180px]"
        )}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label={`${BUSINESS.displayName} — página inicial`}
        >
          <Image
            src="/images/multilimp/logo-multilimp-branca-compacta.png"
            alt={BUSINESS.displayName}
            width={545}
            height={406}
            priority
            sizes="64px"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav
          className="mx-auto hidden lg:flex lg:items-center lg:gap-0.5"
          aria-label="Navegação principal"
        >
          <Link href="/" className={desktopLinkClass}>
            Início
          </Link>
          <Link href="/sobre" className={desktopLinkClass}>
            Sobre
          </Link>
          <DesktopDropdown label="Serviços">
            <Link
              href="/servicos"
              className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Todos os serviços
            </Link>
            {SERVICES_NAV.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                <span className="block text-sm font-medium">{service.label}</span>
                <span className="block text-xs text-white/60">{service.description}</span>
              </Link>
            ))}
          </DesktopDropdown>
          <DesktopDropdown label="Áreas Atendidas">
            <Link
              href="/areas-atendidas"
              className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Ver todas as áreas
            </Link>
            {AREAS_NAV.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="block rounded-xl px-3 py-2 text-sm hover:bg-white/10"
              >
                {area.label}
              </Link>
            ))}
          </DesktopDropdown>
          <Link href="/antes-e-depois" className={desktopLinkClass}>
            Antes e Depois
          </Link>
          <Link href="/avaliacoes" className={desktopLinkClass}>
            Avaliações
          </Link>
          <Link href="/blog" className={desktopLinkClass}>
            Blog
          </Link>
          <Link href="/contato" className={desktopLinkClass}>
            Contato
          </Link>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button
            variant="cta"
            size="lg"
            className="h-11 px-5"
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
                className="rounded-xl px-3 py-2.5 text-base font-medium hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-white/50 uppercase">
              Serviços
            </p>
            {SERVICES_NAV.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-xl px-3 py-2 text-sm hover:bg-white/10"
              >
                {service.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-white/50 uppercase">
              Áreas atendidas
            </p>
            {AREAS_NAV.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-xl px-3 py-2 text-sm hover:bg-white/10"
              >
                {area.label}
              </Link>
            ))}
            <Link
              href="/perguntas-frequentes"
              className="mt-3 rounded-xl px-3 py-2.5 text-base font-medium hover:bg-white/10"
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
