import { MessageCircle } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, "floating_button")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/50 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
