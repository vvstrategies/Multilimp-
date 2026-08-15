"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LiquidGlass } from "@/components/layout/liquid-glass";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = cn(
    "transition-colors duration-200",
    scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-[86px] lg:pt-8">
      <LiquidGlass
        className={cn(
          "mx-auto w-full max-w-[1156px] rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_0_rgba(0,0,0,0.12)] transition-colors duration-300",
          scrolled ? "bg-white/55" : "bg-navy/30"
        )}
        contentClassName="flex w-full items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-3.5"
        overlayClassName={scrolled ? "bg-white/40" : "bg-black/22"}
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label={BUSINESS.displayName}>
          <Image
            src="/images/logo-gs.png"
            alt={BUSINESS.displayName}
            width={806}
            height={309}
            priority
            className="h-8 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />} className={cn(linkClass, "hover:bg-transparent focus:bg-transparent")}>
                  Início
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/sobre" />} className={cn(linkClass, "hover:bg-transparent focus:bg-transparent")}>
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(linkClass, "bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent")}>
                  Serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-72 gap-1 p-2">
                    <li>
                      <NavigationMenuLink render={<Link href="/servicos" />} className="font-medium">
                        Todos os serviços
                      </NavigationMenuLink>
                    </li>
                    {SERVICES_NAV.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink render={<Link href={service.href} />} className="flex-col items-start gap-0.5">
                          <span className="text-sm font-medium">{service.label}</span>
                          <span className="text-xs text-muted-foreground">{service.description}</span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(linkClass, "bg-transparent hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent")}>
                  Áreas Atendidas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-56 gap-1 p-2">
                    <li>
                      <NavigationMenuLink render={<Link href="/areas-atendidas" />} className="font-medium">
                        Ver todas as áreas
                      </NavigationMenuLink>
                    </li>
                    {AREAS_NAV.map((area) => (
                      <li key={area.href}>
                        <NavigationMenuLink render={<Link href={area.href} />}>{area.label}</NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/avaliacoes" />} className={cn(linkClass, "hover:bg-transparent focus:bg-transparent")}>
                  Avaliações
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/blog" />} className={cn(linkClass, "hover:bg-transparent focus:bg-transparent")}>
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/contato" />} className={cn(linkClass, "hover:bg-transparent focus:bg-transparent")}>
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button
            variant="cta"
            size="lg"
            render={
              <a href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "header_cta")} target="_blank" rel="noopener noreferrer" />
            }
          >
            Solicitar orçamento
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Abrir menu"
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden",
                  scrolled ? "text-foreground hover:bg-foreground/10" : "text-white hover:bg-white/10"
                )}
              />
            }
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full max-w-xs flex-col gap-0 border-white/10 bg-navy/95 text-navy-foreground backdrop-blur-2xl sm:max-w-sm"
          >
            <SheetHeader className="border-b border-white/10">
              <SheetTitle className="text-navy-foreground">{BUSINESS.displayName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Navegação mobile">
              {SIMPLE_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-navy-foreground hover:bg-white/10"
                >
                  {link.label}
                </SheetClose>
              ))}

              <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-navy-muted uppercase">Serviços</p>
              {SERVICES_NAV.map((service) => (
                <SheetClose
                  key={service.href}
                  render={<Link href={service.href} />}
                  className="rounded-lg px-3 py-2 text-sm text-navy-foreground hover:bg-white/10"
                >
                  {service.label}
                </SheetClose>
              ))}

              <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-navy-muted uppercase">Áreas atendidas</p>
              {AREAS_NAV.map((area) => (
                <SheetClose
                  key={area.href}
                  render={<Link href={area.href} />}
                  className="rounded-lg px-3 py-2 text-sm text-navy-foreground hover:bg-white/10"
                >
                  {area.label}
                </SheetClose>
              ))}

              <SheetClose
                render={<Link href="/perguntas-frequentes" />}
                className="mt-3 rounded-lg px-3 py-2.5 text-base font-medium text-navy-foreground hover:bg-white/10"
              >
                Perguntas Frequentes
              </SheetClose>
            </nav>
            <div className="border-t border-white/10 p-4">
              <Button
                variant="cta"
                size="xl"
                className="w-full"
                render={
                  <a href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "mobile_menu_cta")} target="_blank" rel="noopener noreferrer" />
                }
              >
                Falar no WhatsApp
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </LiquidGlass>
    </header>
  );
}
