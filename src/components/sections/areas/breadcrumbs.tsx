import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  variant = "light",
}: {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <nav
      aria-label="Breadcrumb"
      className={
        isDark
          ? "flex flex-wrap items-center gap-1.5 text-sm text-navy-muted"
          : "flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      }
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />}
            {item.href && !isLast ? (
              <Link href={item.href} className={isDark ? "hover:text-navy-foreground" : "hover:text-foreground"}>
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? isDark
                      ? "font-medium text-navy-foreground"
                      : "font-medium text-foreground"
                    : undefined
                }
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
