import { MediaCard } from "@/components/ui/media-card";
import { SERVICES } from "@/data/services";
import { SERVICES_NAV } from "@/lib/constants";

// Sofás is the flagship service — it is what most Google reviews mention — so
// it takes a 2x2 tile. The remaining services fill the responsive grid.
const FEATURED_HREF = "/servicos/sofas-e-estofados";

const SPANS: Record<string, string> = {
  "/servicos/sofas-e-estofados":
    "aspect-[4/3] sm:col-span-2 sm:aspect-[2/1] lg:col-span-2 lg:row-span-2 lg:aspect-auto",
};

const DEFAULT_SPAN = "aspect-[4/3] sm:aspect-square";

const FEATURED_TAGS =
  SERVICES.find((service) => service.slug === "sofas-e-estofados")?.environments.slice(0, 4) ?? [];

// Explicit paths rather than a slug-derived one: the artwork carries a
// revision suffix, bumped whenever a photo is replaced. Browsers cache the
// optimizer output under the source URL and will not revalidate it for an
// <img>, so a replaced photo only reaches them under a new file name.
const SERVICE_IMAGES: Record<string, string> = {
  "/servicos/sofas-e-estofados": "/images/multilimp/servicos/sofas-e-estofados-2.webp",
  "/servicos/colchoes": "/images/multilimp/servicos/colchoes-2.webp",
  "/servicos/bancos-automotivos": "/images/multilimp/servicos/bancos-automotivos-2.webp",
  "/servicos/tapetes-e-carpetes": "/images/multilimp/servicos/tapetes-e-carpetes-2.webp",
  "/servicos/impermeabilizacao-de-estofados":
    "/images/multilimp/servicos/impermeabilizacao-de-estofados.webp",
};

export function ServicesBento({
  headingAs = "h3",
  className,
}: {
  headingAs?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={`media-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}
    >
      {SERVICES_NAV.map((service, index) => {
        const isFeatured = service.href === FEATURED_HREF;

        return (
          <MediaCard
            key={service.href}
            href={service.href}
            image={SERVICE_IMAGES[service.href]}
            title={service.label}
            description={service.description}
            eyebrow={isFeatured ? "Serviço mais procurado" : undefined}
            tags={isFeatured ? FEATURED_TAGS : undefined}
            featured={isFeatured}
            headingAs={headingAs}
            priority={index === 0}
            sizes={
              isFeatured
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 760px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            }
            className={SPANS[service.href] ?? DEFAULT_SPAN}
          />
        );
      })}
    </div>
  );
}
