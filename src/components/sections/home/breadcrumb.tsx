import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/30 py-3">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-foreground">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
