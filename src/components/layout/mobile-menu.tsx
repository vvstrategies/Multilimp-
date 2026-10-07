"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function MobileMenu({ children }: { children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeAfterLinkClick(event: MouseEvent<HTMLDetailsElement>) {
    if (event.target instanceof Element && event.target.closest("a")) {
      detailsRef.current?.removeAttribute("open");
    }
  }

  return (
    <details
      ref={detailsRef}
      onClick={closeAfterLinkClick}
      className="group relative ml-auto lg:hidden"
    >
      <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Abrir menu</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          className="size-5"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute top-full right-0 mt-3 flex max-h-[calc(100vh-6rem)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-y-auto rounded-2xl border border-[var(--glass-border)] bg-[rgba(7,15,28,0.9)] p-4 text-navy-foreground shadow-2xl shadow-[var(--glass-shadow)] backdrop-blur-xl">
        {children}
      </div>
    </details>
  );
}
