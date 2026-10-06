import type { HTMLAttributes, ReactNode } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props} />;
}

function AccordionItem({
  className,
  value,
  ...props
}: HTMLAttributes<HTMLDetailsElement> & { value?: string }) {
  return (
    <details
      data-slot="accordion-item"
      data-value={value}
      className={cn("group not-last:border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { children?: ReactNode }) {
  return (
    <summary
      data-slot="accordion-trigger"
      className={cn(
        "relative flex cursor-pointer list-none items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
    </summary>
  );
}

function AccordionContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="accordion-content"
      className={cn(
        "pb-2.5 text-sm [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
