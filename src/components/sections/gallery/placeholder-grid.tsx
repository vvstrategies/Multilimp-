import { ImageOff } from "lucide-react";

const PLACEHOLDER_ITEMS = [
  { label: "Sofás e Estofados", gradient: "from-primary/25 via-primary/10 to-transparent" },
  { label: "Colchões", gradient: "from-navy/40 via-primary/10 to-transparent" },
  { label: "Bancos Automotivos", gradient: "from-primary/20 via-navy/10 to-transparent" },
  { label: "Tapetes e Carpetes", gradient: "from-navy/30 via-primary/15 to-transparent" },
  { label: "Impermeabilização", gradient: "from-primary/25 via-navy/15 to-transparent" },
  { label: "Poltronas e Cadeiras", gradient: "from-navy/25 via-primary/20 to-transparent" },
];

export function GalleryPlaceholderGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PLACEHOLDER_ITEMS.map((item) => (
        <div
          key={item.label}
          className={`relative flex aspect-4/3 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-br ${item.gradient} ring-1 ring-border`}
        >
          <ImageOff className="size-8 text-muted-foreground/60" aria-hidden="true" />
          <p className="relative px-4 text-center text-sm font-medium text-foreground">
            Antes e depois: {item.label}
          </p>
          <span className="relative rounded-full bg-background/80 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border">
            Em breve
          </span>
        </div>
      ))}
    </div>
  );
}
