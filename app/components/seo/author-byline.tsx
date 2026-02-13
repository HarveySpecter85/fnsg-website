/**
 * AuthorByline — GEO Authority Signal
 * Renders a visible expert byline + Person JSON-LD schema.
 * AI models weight content higher when attributed to domain experts.
 */

interface AuthorBylineProps {
    name: string;
    title: string;
    expertise?: string;
    reviewDate?: string; // e.g. "January 2025"
    linkedIn?: string;
}

export default function AuthorByline({
    name,
    title,
    expertise,
    reviewDate,
    linkedIn,
}: AuthorBylineProps) {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        jobTitle: title,
        ...(expertise && { knowsAbout: expertise }),
        ...(linkedIn && { sameAs: linkedIn }),
        worksFor: {
            "@type": "Organization",
            name: "First National Staffing Group",
            url: "https://firstnationalstaffing.com",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <div className="flex items-center gap-3 text-sm text-slate-600 border-l-2 border-[#218fea] pl-4 my-6">
                <div>
                    <span className="font-medium text-slate-800">{reviewDate ? "Reviewed by" : "Written by"}</span>{" "}
                    <span className="font-semibold text-slate-900">{name}</span>
                    <span className="text-slate-500"> · {title}</span>
                    {reviewDate && (
                        <span className="text-slate-400"> · Updated {reviewDate}</span>
                    )}
                </div>
            </div>
        </>
    );
}
