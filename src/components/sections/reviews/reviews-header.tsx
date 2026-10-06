import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleLogo } from "@/components/sections/reviews/review-card";
import { BUSINESS } from "@/lib/constants";

export function ReviewsHeader({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GoogleLogo className="size-7" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{BUSINESS.rating.value.toFixed(1)}</span>
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{BUSINESS.rating.count} avaliações</span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" render={<a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" />}>
          Ver perfil no Google
        </Button>
      </div>
    </div>
  );
}
