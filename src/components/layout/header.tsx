"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Container } from "@/components/layout/container";
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

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
            <Sparkles className="size-4.5" aria-hidden="true" />
          </span>
          <span className="leading-none">
            {BUSINESS.displayName}
            <span className="block text-[0.65rem] font-normal tracking-wide text-muted-foreground uppercase">
              Higienização de Estofados
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navegação principal">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />}>Início</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/sobre" />}>Sobre</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Áreas Atendidas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-56 gap-1 p-2">
                    <li>
                      <NavigationMenuLink render={<Link href="/areas-atendidas" />} className="font-medium">
                        Ver todas as áreas
                      </NavigationMenuLink>
                    </li>
                    {AREAS_NAV.map((area) => (
                      <li key={area.href}>
                        <NavigationMenuLink render={<Link href={area.href} />}>
                          {area.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/antes-e-depois" />}>Antes e Depois</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/avaliacoes" />}>Avaliações</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/blog" />}>Blog</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/perguntas-frequentes" />}>FAQ</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/contato" />}>Contato</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menu"
              />
            }
          >
            <Menu className="size-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full max-w-xs flex-col gap-0 sm:max-w-sm">
            <SheetHeader className="border-b">
              <SheetTitle>{BUSINESS.displayName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Navegação mobile">
              {SIMPLE_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-muted"
                >
                  {link.label}
                </SheetClose>
              ))}

              <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Serviços
              </p>
              {SERVICES_NAV.map((service) => (
                <SheetClose
                  key={service.href}
                  render={<Link href={service.href} />}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  {service.label}
                </SheetClose>
              ))}

              <p className="mt-3 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Áreas atendidas
              </p>
              {AREAS_NAV.map((area) => (
                <SheetClose
                  key={area.href}
                  render={<Link href={area.href} />}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  {area.label}
                </SheetClose>
              ))}

              <SheetClose
                render={<Link href="/perguntas-frequentes" />}
                className="mt-3 rounded-lg px-3 py-2.5 text-base font-medium hover:bg-muted"
              >
                Perguntas Frequentes
              </SheetClose>
            </nav>
            <div className="border-t p-4">
              <Button
                variant="cta"
                size="xl"
                className="w-full"
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
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
