import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Gwinnett County Staffing Agency | First National Staffing",
    description: "Leading staffing and workforce solutions in Gwinnett County, GA. Serving Lawrenceville, Duluth, Norcross, and Suwanee industries.",
}

export default function GwinnettCountyPage() {
    return (
        <main className="container mx-auto py-24 px-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Gwinnett County Staffing Agency</h1>
            <p className="text-lg text-slate-600">
                This local market intelligence page is currently being updated with 2025 workforce data.
                Please check back soon for our latest analysis on Gwinnett County industrial trends.
            </p>
        </main>
    );
}
