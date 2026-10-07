import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import {
  AREAS_NAV,
  BUSINESS,
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  SERVICES_NAV,
} from "@/lib/constants";

export function Footer() {
  return (
    // The mobile contact dock is fixed over the page, so the footer keeps its
    // own bottom padding clear of it.
    <footer className="bg-navy pb-20 text-navy-foreground lg:pb-0">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="inline-flex items-center" aria-label={BUSINESS.displayName}>
            <Image
              src="/images/multilimp/logo-multilimp-branca-compacta.png"
              alt={BUSINESS.displayName}
              width={545}
              height={406}
              sizes="80px"
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-navy-muted">
            Higienização e impermeabilização de sofás, tapetes, persianas, cadeiras, carpetes,
            poltronas e bancos automotivos em Americana e cidades da região.
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-navy-muted">
            <Star className="size-4 fill-primary text-primary" aria-hidden="true" />
            <span className="font-medium text-navy-foreground">{BUSINESS.rating.value.toFixed(1)}</span>
            <span>({BUSINESS.rating.count} avaliações no Google)</span>
          </div>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-navy-muted hover:text-navy-foreground"
          >
            <InstagramIcon className="size-4 shrink-0" />
            @multlimp.higienizacao_
          </a>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-navy-muted hover:text-navy-foreground"
          >
            <FacebookIcon className="size-4 shrink-0" />
            Facebook
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm text-navy-muted hover:text-navy-foreground"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {BUSINESS.email}
          </a>
        </div>

        <div>
          <h3 className="text-sm text-navy-foreground">Serviços</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-muted">
            {SERVICES_NAV.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-navy-foreground">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-navy-foreground">Áreas Atendidas</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-muted">
            {AREAS_NAV.map((area) => (
              <li key={area.href}>
                <Link href={area.href} className="hover:text-navy-foreground">
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-navy-foreground">Empresa</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-muted">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-navy-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="grid gap-6 border-t border-white/10 py-8 sm:grid-cols-2">
        <div className="space-y-2 text-sm text-navy-muted">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {BUSINESS.address.street} - {BUSINESS.address.neighborhood}, {BUSINESS.address.city} -{" "}
            {BUSINESS.address.state}, {BUSINESS.address.postalCode}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-navy-foreground">
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm text-navy-muted sm:items-end">
          <p>© {new Date().getFullYear()} {BUSINESS.legalName}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-navy-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
