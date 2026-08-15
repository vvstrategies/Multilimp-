"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES_NAV, whatsappHref } from "@/lib/constants";

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setError("Preencha nome, telefone e mensagem para enviar pelo WhatsApp.");
      return;
    }

    setError(null);

    const serviceLabel =
      SERVICES_NAV.find((item) => item.href === service)?.label ?? "Não especificado";

    const whatsappMessage = [
      "Olá! Vim pelo formulário de contato do site da GS Vitaliza.",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Serviço de interesse: ${serviceLabel}`,
      `Mensagem: ${message}`,
    ].join("\n");

    window.open(whatsappHref(whatsappMessage, "contact_form"), "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="name">Nome *</Label>
        <Input id="name" name="name" required placeholder="Seu nome completo" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Telefone / WhatsApp *</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="(11) 90000-0000" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="service">Serviço de interesse</Label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
        >
          <option value="">Selecione um serviço (opcional)</option>
          {SERVICES_NAV.map((service) => (
            <option key={service.href} value={service.href}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Conte um pouco sobre o que você precisa: tipo de estofado, quantidade de peças, cidade..."
          className="min-h-28"
        />
      </div>

      {error && (
        <p className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <Button type="submit" variant="cta" size="xl" className="w-full">
        Enviar pelo WhatsApp
      </Button>

      <p className="text-xs text-muted-foreground">
        Ao enviar, abriremos o WhatsApp com sua mensagem já preenchida para você confirmar o envio.
      </p>
    </form>
  );
}
