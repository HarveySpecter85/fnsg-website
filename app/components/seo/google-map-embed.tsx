/**
 * GoogleMapEmbed — Local SEO Map Signal
 * Renders a Google Maps iframe embed for office location visibility.
 * Critical for local search trust and user experience.
 */

interface GoogleMapEmbedProps {
    /** The search query for Google Maps, e.g. "2430 Herodian Way, Smyrna, GA 30080" */
    query: string;
    /** Accessible title for the iframe */
    title?: string;
    /** Height in pixels */
    height?: number;
}

export default function GoogleMapEmbed({
    query,
    title = "FNSG Office Location",
    height = 300,
}: GoogleMapEmbedProps) {
    const encodedQuery = encodeURIComponent(query);

    return (
        <div className="my-8 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <iframe
                src={`https://www.google.com/maps?q=${encodedQuery}&output=embed`}
                width="100%"
                height={height}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
            />
            <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#218fea]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                </svg>
                <span>{query}</span>
            </div>
        </div>
    );
}
