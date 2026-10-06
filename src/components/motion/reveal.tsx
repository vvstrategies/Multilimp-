import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <Tag className={cn("reveal", className)} data-delay={delay || undefined} style={style}>
      {children}
    </Tag>
  );
}
