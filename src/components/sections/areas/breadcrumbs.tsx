import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? "font-medium text-foreground" : undefined}
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

export function BreadcrumbBar({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-border bg-background py-3">
      <Container>
        <Breadcrumbs items={items} />
      </Container>
    </div>
  );
}
