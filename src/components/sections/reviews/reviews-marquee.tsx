import { ReviewCard } from "@/components/sections/reviews/review-card";
import type { GoogleReview } from "@/lib/google-reviews";

/**
 * Two rows of review cards sliding in opposite directions, with both ends faded
 * out. Each track holds the same group twice and travels exactly -50%, so the
 * loop closes without a visible seam. Hovering a row pauses it so a review can
 * actually be read.
 */
function MarqueeRow({
  reviews,
  direction,
  duration,
}: {
  reviews: GoogleReview[];
  direction: "forward" | "reverse";
  duration: string;
}) {
  return (
    <div
      className="marquee-row"
      data-direction={direction}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 gap-4 pr-4"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {reviews.map((review) => (
              <ReviewCard
                key={`${copy}-${review.id}`}
                review={review}
                clamp
                className="w-[290px] min-h-56 shrink-0 sm:w-[340px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewsMarquee({ reviews }: { reviews: GoogleReview[] }) {
  if (reviews.length === 0) return null;

  // With a single row of content there is nothing to counter-rotate, so the
  // same list runs in both directions instead of splitting it.
  const split = reviews.length >= 4;
  const half = Math.ceil(reviews.length / 2);
  const topRow = split ? reviews.slice(0, half) : reviews;
  const bottomRow = split ? reviews.slice(half) : reviews;

  return (
    <div className="flex flex-col gap-4">
      <MarqueeRow reviews={topRow} direction="forward" duration="68s" />
      <MarqueeRow reviews={bottomRow} direction="reverse" duration="76s" />
    </div>
  );
}
