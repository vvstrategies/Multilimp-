import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { BUSINESS, DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";

/**
 * Two shapes for the same job: a dock at the bottom of the phone, where both
 * ways of getting in touch stay in reach, and a single floating button on
 * desktop, where a full-width bar would only be in the way.
 */
export function WhatsAppFloatButton() {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[var(--glass-border)] bg-[rgba(7,15,28,0.82)] px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] backdrop-blur-[14px] backdrop-saturate-150 lg:hidden"
        aria-label="Ações rápidas de contato"
      >
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 text-sm font-semibold text-white"
        >
          <Phone className="size-4" aria-hidden="true" />
          Ligar
        </a>
        <a
          href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "mobile_dock")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-glow"
        >
          <WhatsAppIcon className="size-5" />
          Solicitar orçamento
        </a>
      </div>

      <a
        href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "floating_button")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="group fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/50 lg:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
