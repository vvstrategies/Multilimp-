import { ChevronDown } from "lucide-react";

/**
 * Hairline rule with a centered chevron button, used to separate consecutive
 * dark sections without breaking the continuous navy surface.
 */
export function SectionDivider({ href, label }: { href: string; label: string }) {
  return (
    <div className="bg-navy">
      <div className="relative mx-auto w-full max-w-[1140px] px-6 sm:px-8">
        <div
          className="h-px w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 12%, rgba(255,255,255,0.14) 88%, transparent 100%)",
          }}
        />
        <a
          href={href}
          aria-label={label}
          className="absolute top-1/2 left-1/2 flex size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform duration-200 hover:translate-y-[-40%] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <ChevronDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
