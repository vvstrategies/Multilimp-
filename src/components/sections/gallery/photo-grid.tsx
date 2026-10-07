import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/constants";

const PHOTOS = [
  { src: "/images/multilimp/sofa.webp", label: "Sofá" },
  { src: "/images/multilimp/colchao.webp", label: "Colchão" },
  { src: "/images/multilimp/poltrona.webp", label: "Poltrona" },
  { src: "/images/multilimp/bancos-automotivos.webp", label: "Bancos automotivos" },
  { src: "/images/multilimp/cadeiras.webp", label: "Cadeiras estofadas" },
  { src: "/images/multilimp/sofa-couro.webp", label: "Sofá de couro" },
  { src: "/images/multilimp/sofa-modular.webp", label: "Sofá modular" },
];

export function PhotoGrid() {
  return (
    // Seven photos plus the Instagram tile make eight, so the gallery fills one,
    // two and four columns without leaving a tile alone on the last row.
    <div className="media-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {PHOTOS.map((photo) => (
        <figure
          key={photo.src}
          className="media-card relative flex aspect-[4/3] flex-col justify-end rounded-2xl"
        >
          <Image
            src={photo.src}
            alt={`${photo.label} em um atendimento da Multilimp Higienização`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="media-card-image object-cover"
          />
          <span aria-hidden="true" className="media-card-veil" />
          <figcaption className="relative z-1 p-4 text-sm font-medium text-white">
            {photo.label}
          </figcaption>
        </figure>
      ))}

      <a
        href={BUSINESS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex aspect-[4/3] flex-col justify-between rounded-2xl border border-dashed border-border p-5 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <InstagramIcon className="size-5" />
        </span>
        <span>
          <span className="block text-base font-semibold">Mais trabalhos no Instagram</span>
          <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary">
            @multlimp.higienizacao_
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </span>
      </a>
    </div>
  );
}
