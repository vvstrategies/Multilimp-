import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GoogleReview } from "@/lib/google-reviews";

export function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function reviewDate(review: GoogleReview) {
  if (review.relativeTime) return review.relativeTime;
  if (!review.publishedAt) return null;

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(review.publishedAt));
}

export function ReviewCard({
  review,
  className,
  clamp = false,
}: {
  review: GoogleReview;
  className?: string;
  /** Marquee cards keep a fixed height, so long reviews are trimmed. */
  clamp?: boolean;
}) {
  const dateLabel = reviewDate(review);
  const authorContent = (
    <>
      {review.authorPhotoUri ? (
        <Image
          src={review.authorPhotoUri}
          alt=""
          width={44}
          height={44}
          sizes="44px"
          className="size-11 rounded-full bg-muted object-cover"
        />
      ) : (
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {review.authorName.slice(0, 1).toLocaleUpperCase("pt-BR")}
        </span>
      )}
      <span>
        <span className="block text-sm font-semibold text-foreground">{review.authorName}</span>
        {dateLabel && <span className="block text-xs text-muted-foreground">{dateLabel}</span>}
      </span>
    </>
  );

  return (
    <article
      className={cn(
        "flex h-full min-h-64 snap-start flex-col rounded-2xl bg-card p-5 ring-1 ring-border",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {review.authorUri ? (
          <a
            href={review.authorUri}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center gap-3"
          >
            {authorContent}
          </a>
        ) : (
          <div className="flex min-w-0 items-center gap-3">{authorContent}</div>
        )}
        <GoogleLogo className="size-6 shrink-0" />
      </div>

      <div className="mt-4 flex" aria-label={`${review.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 ${index < Math.round(review.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`}
            aria-hidden="true"
          />
        ))}
      </div>

      <p
        className={cn(
          "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
          clamp && "line-clamp-5"
        )}
      >
        {review.text || "Avaliação publicada no Google sem comentário em texto."}
      </p>

      {review.googleMapsUri && (
        <a
          href={review.googleMapsUri}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-xs font-medium text-primary hover:underline"
        >
          Ver avaliação no Google
        </a>
      )}
    </article>
  );
}
