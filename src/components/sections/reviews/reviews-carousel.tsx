"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard } from "@/components/sections/reviews/review-card";
import type { Review } from "@/data/reviews";

const AUTO_SCROLL_PX_PER_FRAME = 0.45;

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  // Sub-pixel accumulator: assigning a fractional value to scrollLeft truncates,
  // so an increment smaller than 1px would never advance on its own.
  const offsetRef = useRef(0);
  const [paused, setPaused] = useState(false);

  // Duplicate the list so the marquee can wrap seamlessly at the halfway point.
  const loopReviews = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = requestAnimationFrame(function step() {
      frame = requestAnimationFrame(step);
      if (paused) return;
      const half = track.scrollWidth / 2;
      if (half <= 0) return;
      let next = offsetRef.current + AUTO_SCROLL_PX_PER_FRAME;
      if (next >= half) next -= half;
      offsetRef.current = next;
      track.scrollLeft = next;
    });

    return () => cancelAnimationFrame(frame);
  }, [paused]);

  function nudge(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-review-card]");
    const step = (card?.offsetWidth ?? 320) + 16;
    const half = track.scrollWidth / 2;
    let next = offsetRef.current + step * direction;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    offsetRef.current = next;
    track.scrollTo({ left: next, behavior: "smooth" });
  }

  return (
    <div className="relative">
      {/* Soft edge masks so cards fade out instead of being hard-cropped. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-24"
      />

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onScroll={() => {
          // Keep the accumulator in step with drag/wheel scrolling so the
          // marquee resumes from where the visitor left it.
          if (paused && trackRef.current) offsetRef.current = trackRef.current.scrollLeft;
        }}
        className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopReviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            data-review-card
            aria-hidden={index >= reviews.length}
            className="w-[80vw] shrink-0 sm:w-[340px]"
          >
            <ReviewCard review={review} className="h-full" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Ver avaliações anteriores"
          className="flex size-10 items-center justify-center rounded-full ring-1 ring-border transition-colors hover:bg-muted"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Ver próximas avaliações"
          className="flex size-10 items-center justify-center rounded-full ring-1 ring-border transition-colors hover:bg-muted"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
