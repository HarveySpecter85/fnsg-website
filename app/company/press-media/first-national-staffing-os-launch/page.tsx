import { Metadata } from "next";

export const metadata: Metadata = {
    title: "First National Staffing Unveils 'Staffing OS™' | Press Release",
    description: "First National Staffing Group launches 'Staffing OS™', an AI-driven workforce intelligence platform for Georgia's industrial sector, slashing time-to-fill by 40%.",
    keywords: ["Staffing Agency Georgia", "Workforce Intelligence", "AI Recruitment", "Labor Shortage Solutions", "First National Staffing Group", "Staffing OS"],
    openGraph: {
        title: "First National Staffing Unveils 'Staffing OS™'",
        description: "A New AI-Driven Workforce Intelligence Platform for Georgia's Industrial Sector.",
        type: "article",
        publishedTime: "2025-11-27",
        authors: ["First National Staffing Group"],
    },
};

export default function PressReleasePage() {
    const currentDate = "November 27, 2025";

    return (
        <main className="min-h-screen bg-white text-slate-900 pt-24 pb-20">
            <article className="max-w-3xl mx-auto px-6 sm:px-8">
                {/* Header */}
                <header className="mb-10 border-b border-slate-200 pb-8">
                    <div className="text-sm font-bold tracking-wider text-blue-700 uppercase mb-4">
                        For Immediate Release
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                        First National Staffing Group Unveils 'Staffing OS™': A New AI-Driven Workforce Intelligence Platform for Georgia's Industrial Sector
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-slate-600 font-medium leading-normal">
                        Leading Georgia agency integrates eScreen technology and predictive analytics to slash time-to-fill by 40% for logistics and manufacturing hubs.
                    </h2>
                </header>

                {/* Dateline & Body */}
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="font-serif text-lg leading-relaxed mb-6">
                        <strong className="uppercase tracking-wide mr-2">ATLANTA, GA — {currentDate} —</strong>
                        First National Staffing Group (FNSG), a premier provider of high-volume industrial workforce solutions, today announced the launch of its proprietary digital platform, styled as a "Workforce Operating System." This launch marks a significant shift from traditional staffing models to a tech-enabled, data-first approach designed to combat the ongoing labor shortages in the Southeast.
                    </p>

                    <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-700 my-8 bg-slate-50 py-4 pr-4 rounded-r-lg">
                        "The old model of 'post and pray' is dead," said <strong>Harvey Rodelo</strong>, President of First National Staffing Group. "With our new digital infrastructure, we aren't just filling shifts; we are providing Georgia employers with a command center for labor operations. From 15-minute rapid drug screenings via our <strong>Labcorp/eScreen</strong> integration to real-time <strong>ROI forecasting</strong>, we are giving Plant Managers the data they need to protect their bottom line."
                    </blockquote>

                    <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Capabilities of the New Platform Include:</h3>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li>
                            <strong>The ROI Simulator:</strong> A proprietary tool allowing CFOs to calculate the hidden costs of vacancy and turnover in real-time.
                        </li>
                        <li>
                            <strong>Hyper-Local SEO Deployment:</strong> A programmatic approach to recruiting talent in specific micro-markets like Jefferson, Pooler, and Gainesville.
                        </li>
                        <li>
                            <strong>Compliance Shielding:</strong> Automated workflows ensuring 100% adherence to <strong>MSPA</strong> (agriculture), <strong>OSHA</strong>, and <strong>ACA</strong> mandates.
                        </li>
                    </ul>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 my-10">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">About First National Staffing Group</h3>
                        <p className="text-base leading-relaxed">
                            Headquartered in Atlanta with hubs in Gainesville and Savannah, FNSG specializes in rapid-deployment staffing for the Logistics, Manufacturing, and Food Production sectors. The firm is a certified Drug-Free Workplace partner and a member of the American Staffing Association.
                        </p>
                    </div>
                </div>

                {/* Media Contact */}
                <footer className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">Media Contact</h3>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div>
                            <p className="font-bold text-slate-900">Daniel Celis</p>
                            <p className="text-slate-600">Business Development Executive</p>
                        </div>
                        <div className="text-slate-600">
                            <p>
                                <a href="mailto:sales@firstnationalstaffing.com" className="hover:text-blue-700 transition-colors">
                                    sales@firstnationalstaffing.com
                                </a>
                            </p>
                            <p>+1 470-470-4243</p>
                        </div>
                    </div>
                </footer>
            </article>
        </main>
    );
}
