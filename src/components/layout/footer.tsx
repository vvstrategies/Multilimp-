import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import {
  AREAS_NAV,
  BUSINESS,
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  SERVICES_NAV,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="inline-flex rounded-xl bg-white px-3 py-2" aria-label={BUSINESS.displayName}>
            <Image
              src="/images/logo-gs.png"
              alt={BUSINESS.displayName}
              width={806}
              height={309}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-navy-muted">
            Higienização profissional de sofás, colchões, bancos automotivos, tapetes e
            impermeabilização de estofados, com atendimento a domicílio em Taboão da Serra,
            Osasco, Santo Amaro e região.
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
            <svg
              viewBox="0 0 24 24"
              className="size-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @gsvitaliza
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
