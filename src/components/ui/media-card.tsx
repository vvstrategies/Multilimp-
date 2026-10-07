import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Photo-backed card used across the site: services, differentiators, areas and
 * posts all share this shape so the pages read as one system. The photo fills
 * the card, a navy veil carries the text, and the whole tile is the link.
 */
export function MediaCard({
  href,
  image,
  imageAlt = "",
  eyebrow,
  title,
  description,
  tags,
  cta = "Saiba mais",
  featured = false,
  headingAs: Heading = "h3",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
}: {
  href: string;
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tags?: string[];
  cta?: string | null;
  featured?: boolean;
  /** Pick the level that keeps the host page's outline in order. */
  headingAs?: "h2" | "h3";
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "media-card group flex flex-col justify-end rounded-2xl focus-visible:outline-none",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="media-card-image object-cover"
      />
      <span aria-hidden="true" className="media-card-veil" />

      <div className={cn("relative z-1 flex flex-col p-5", featured && "p-6 sm:p-7")}>
        {eyebrow && (
          <span className="mb-3 w-fit rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-sm">
            {eyebrow}
          </span>
        )}

        <Heading
          className={cn(
            "media-card-title font-heading text-[17px] leading-[1.35] font-semibold tracking-tight text-white sm:text-[19px]",
            featured && "text-[20px] leading-tight sm:text-[26px]"
          )}
        >
          {title}
        </Heading>

        {description && (
          <p
            className={cn(
              "mt-1.5 text-sm leading-relaxed text-white/72",
              featured && "mt-2.5 max-w-md sm:text-base"
            )}
          >
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <ul className="mt-4 hidden flex-wrap gap-2 sm:flex">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/15 bg-white/8 px-2.5 py-1 text-xs text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {cta && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-soft">
            {cta}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </Link>
  );
}
