import Image from "next/image";

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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PHOTOS.map((photo) => (
        <figure
          key={photo.src}
          className="overflow-hidden rounded-2xl bg-card ring-1 ring-border"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={photo.src}
              alt={`${photo.label} em um atendimento da Multilimp Higienização`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-4 text-sm font-medium">{photo.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
