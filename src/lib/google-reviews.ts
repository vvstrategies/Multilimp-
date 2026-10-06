import "server-only";
import { BUSINESS } from "@/lib/constants";

const GOOGLE_REVIEWS_REVALIDATE_SECONDS = 60 * 60 * 6;

type LocalizedText = {
  text?: string;
  languageCode?: string;
};

type AuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type PlacesReview = {
  name?: string;
  rating?: number;
  text?: LocalizedText;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: AuthorAttribution;
};

type PlacesResponse = {
  id?: string;
  displayName?: LocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

export type GoogleReview = {
  id: string;
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  publishedAt?: string;
  googleMapsUri?: string;
};

export type GoogleReviewsData = {
  source: "places" | "fallback";
  placeId: string;
  businessName: string;
  rating: number;
  totalReviews: number;
  googleMapsUri: string;
  reviews: GoogleReview[];
};

function fallbackReviews(): GoogleReviewsData {
  return {
    source: "fallback",
    placeId: BUSINESS.googlePlaceId,
    businessName: BUSINESS.displayName,
    rating: BUSINESS.rating.value,
    totalReviews: BUSINESS.rating.count,
    googleMapsUri: BUSINESS.googleReviewsUrl,
    reviews: [],
  };
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim() || BUSINESS.googlePlaceId;

  if (!apiKey) {
    return fallbackReviews();
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pt-BR`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        cache: "force-cache",
        next: { revalidate: GOOGLE_REVIEWS_REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      console.error(
        `Google Places API returned ${response.status} while loading Multilimp reviews.`
      );
      return fallbackReviews();
    }

    const place = (await response.json()) as PlacesResponse;
    const reviews = (place.reviews ?? []).map((review, index): GoogleReview => {
      const authorName = review.authorAttribution?.displayName?.trim() || "Cliente Google";
      const publishedAt = review.publishTime;

      return {
        id: review.name ?? `${authorName}-${publishedAt ?? index}`,
        authorName,
        authorUri: review.authorAttribution?.uri,
        authorPhotoUri: review.authorAttribution?.photoUri,
        rating: Math.max(0, Math.min(5, review.rating ?? 0)),
        text: review.text?.text?.trim() ?? "",
        relativeTime: review.relativePublishTimeDescription,
        publishedAt,
        googleMapsUri: review.googleMapsUri,
      };
    });

    return {
      source: "places",
      placeId: place.id ?? placeId,
      businessName: place.displayName?.text?.trim() || BUSINESS.displayName,
      rating: place.rating ?? BUSINESS.rating.value,
      totalReviews: place.userRatingCount ?? BUSINESS.rating.count,
      googleMapsUri: place.googleMapsUri ?? BUSINESS.googleReviewsUrl,
      reviews,
    };
  } catch (error) {
    console.error("Unable to load Multilimp reviews from Google Places.", error);
    return fallbackReviews();
  }
}
