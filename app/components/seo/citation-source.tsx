/**
 * CitationSource — GEO Authority Citation
 * Renders a visible source attribution line with optional external link.
 * AI models use explicit citations to validate claims and establish trust.
 */

interface CitationSourceProps {
    /** Text describing the source, e.g. "U.S. Bureau of Labor Statistics" */
    source: string;
    /** Optional URL to the source data */
    href?: string;
    /** What data is being cited, e.g. "Occupational Employment and Wage Statistics, May 2024" */
    detail?: string;
    /** Compact mode for inline table footnotes */
    compact?: boolean;
}

export default function CitationSource({
    source,
    href,
    detail,
    compact = false,
}: CitationSourceProps) {
    if (compact) {
        return (
            <span className="text-[11px] text-slate-400 italic">
                Source:{" "}
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-600"
                    >
                        {source}
                    </a>
                ) : (
                    source
                )}
                {detail && <>, {detail}</>}
            </span>
        );
    }

    return (
        <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50/80 border border-slate-100 rounded px-3 py-2 my-3">
            <svg
                className="h-3.5 w-3.5 text-slate-400 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
            </svg>
            <div>
                <span className="font-medium text-slate-600">Source: </span>
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#218fea] underline hover:text-[#1b5ca0]"
                    >
                        {source}
                    </a>
                ) : (
                    <span>{source}</span>
                )}
                {detail && (
                    <span className="text-slate-400"> — {detail}</span>
                )}
            </div>
        </div>
    );
}
