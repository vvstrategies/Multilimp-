import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleLogo } from "@/components/sections/reviews/review-card";
import type { GoogleReviewsData } from "@/lib/google-reviews";

export function ReviewsHeader({
  data,
  className,
}: {
  data: GoogleReviewsData;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GoogleLogo className="size-7" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-semibold">{data.rating.toFixed(1)}</span>
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`size-4 ${index < Math.round(data.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {data.totalReviews} avaliações
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          render={
            <a href={data.googleMapsUri} target="_blank" rel="noopener noreferrer" />
          }
        >
          Ver perfil no Google
        </Button>
      </div>
    </div>
  );
}
