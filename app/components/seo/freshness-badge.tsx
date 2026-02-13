/**
 * FreshnessBadge — GEO Freshness Signal
 * Renders a visible "Last Updated" indicator with structured data.
 * Generative AI models prioritize recently updated content.
 */

interface FreshnessBadgeProps {
    /** ISO date string, e.g. "2025-03-15" */
    dateModified: string;
    /** Human-readable label, e.g. "Q1 2025" or "March 2025" */
    label?: string;
    /** How often the data is refreshed */
    updateCadence?: string; // e.g. "Quarterly" or "Annually"
}

export default function FreshnessBadge({
    dateModified,
    label,
    updateCadence,
}: FreshnessBadgeProps) {
    const displayDate =
        label ??
        new Date(dateModified).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
        });

    return (
        <div className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-600 my-4">
            <svg
                className="h-3.5 w-3.5 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
            <time dateTime={dateModified} className="font-medium text-slate-700">
                Last updated: {displayDate}
            </time>
            {updateCadence && (
                <span className="text-slate-400">· {updateCadence} refresh</span>
            )}
        </div>
    );
}
