import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/constants";

export function CtaBanner({
  title,
  description,
  source,
}: {
  title: string;
  description: string;
  source: string;
}) {
  return (
    <section className="bg-navy py-16 text-navy-foreground sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-base text-navy-muted sm:text-lg">{description}</p>
        <Button
          variant="cta-white"
          size="xl"
          render={
            <a
              href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE, source)}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Falar no WhatsApp agora
        </Button>
      </Container>
    </section>
  );
}
