import Link from "next/link";

export default function ScreeningOSFinalCTA() {
    return (
        <div className="mt-16 rounded-2xl bg-neutral-900/70 border border-neutral-800 p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">
                Ready to Accelerate Your Hiring?
            </h2>
            <p className="text-neutral-300 mb-8">
                Stop letting screening delays stall your production momentum. Get the data-driven speed you need.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
                {/* Strategy Session Button */}
                <Link
                    href="/contact/general-inquiries?subject=Health Screening OS Strategy Session"
                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition"
                >
                    Request a Health Screening OS Strategy Session
                </Link>

                {/* Download Brief Button */}
                <a
                    href="/briefs/screening-efficiency-brief.pdf"
                    download
                    className="px-6 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-white font-medium shadow-md transition"
                >
                    Download the Screening Pipeline Efficiency Brief
                </a>
            </div>
        </div>
    );
}
