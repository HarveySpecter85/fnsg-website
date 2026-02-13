/**
 * LocalReviews — Local SEO Social Proof + AggregateRating Schema
 * Renders visible testimonial cards with Review + AggregateRating JSON-LD.
 * Critical for Local Pack rankings and click-through rate.
 */

interface ReviewItem {
    author: string;
    role: string;
    company: string;
    rating: number; // 1-5
    text: string;
}

interface LocalReviewsProps {
    locationName: string;
    reviews: ReviewItem[];
}

export default function LocalReviews({ locationName, reviews }: LocalReviewsProps) {
    if (!reviews || reviews.length === 0) return null;

    const avgRating =
        Math.round(
            (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10
        ) / 10;

    const aggregateSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `First National Staffing – ${locationName}`,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating.toString(),
            bestRating: "5",
            worstRating: "1",
            ratingCount: reviews.length.toString(),
            reviewCount: reviews.length.toString(),
        },
        review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating.toString(),
                bestRating: "5",
            },
            reviewBody: r.text,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }}
            />
            <section className="my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    What Our Clients Say in {locationName}
                </h2>
                <div className="flex items-center gap-2 mb-6">
                    <div className="flex" aria-label={`${avgRating} out of 5 stars`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={`h-5 w-5 ${star <= Math.round(avgRating) ? "text-amber-400" : "text-slate-200"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                        {avgRating} / 5
                    </span>
                    <span className="text-sm text-slate-500">
                        ({reviews.length} verified client reviews)
                    </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <div className="flex mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className={`h-4 w-4 ${star <= review.rating ? "text-amber-400" : "text-slate-200"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-slate-600 italic mb-3">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div className="text-xs text-slate-500">
                                <span className="font-medium text-slate-700">{review.author}</span>
                                {" · "}
                                {review.role}, {review.company}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
