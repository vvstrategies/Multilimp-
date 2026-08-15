"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Review } from "@/data/reviews";

const AVATAR_PALETTE = ["#1E6AFF", "#0F2340", "#3B7FFF", "#162B4D", "#0B1A2E"];

function avatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn("size-3.5", index < rating ? "fill-primary text-primary" : "fill-border text-border")}
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review, className }: { review: Review; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 160;

  return (
    <div className={cn("flex h-full flex-col gap-3 rounded-2xl bg-card p-6 ring-1 ring-border", className)}>
      <div className="flex items-center gap-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: avatarColor(review.name) }}
          aria-hidden="true"
        >
          {review.name.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{review.name}</p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <StarRow rating={review.rating} />
            <span className="text-xs text-muted-foreground">{review.relativeDate}</span>
          </div>
        </div>
      </div>

      <p className={cn("text-sm leading-relaxed text-foreground/85", !expanded && isLong && "line-clamp-4")}>
        {review.text}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="w-fit text-left text-sm font-medium text-primary hover:underline"
        >
          {expanded ? "Ver menos" : "Leia mais"}
        </button>
      )}
    </div>
  );
}

export function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}
