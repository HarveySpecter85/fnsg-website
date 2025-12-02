import React from 'react';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import Link from 'next/link';
import { ArrowRight, Search, MapPin, TrendingUp, DollarSign, Clock } from 'lucide-react';

export const metadata = {
    title: "Georgia Workforce Intelligence Map – First National Staffing",
    description: "Interactive map of Georgia's industrial labor market. Real-time insights on fill rates, pay benchmarks, and workforce availability by region.",
    openGraph: {
        title: "Georgia Workforce Intelligence Map",
        url: "https://firstnationalstaffing.com/insights",
        type: "website",
        images: ["/og/insights-georgia-map.png"]
    }
};

// Region Data Structure
const REGIONS = [
    {
        name: "North Georgia",
        cities: [
            { name: "Gainesville", slug: "gainesville", kpis: { demand: "High", payRank: "#2", reliability: "94%" } },
            { name: "Hall County", slug: "hall-county-recruitment", kpis: { demand: "V. High", payRank: "#3", reliability: "92%" } },
            { name: "Jackson County", slug: "jackson-county-logistics-staffing", kpis: { demand: "Med", payRank: "#5", reliability: "89%" } },
            { name: "Barrow County", slug: "barrow-county-staffing", kpis: { demand: "Med", payRank: "#6", reliability: "88%" } },
        ]
    },
    {
        name: "Metro Atlanta",
        cities: [
            { name: "Atlanta", slug: "atlanta-staffing-agency", kpis: { demand: "V. High", payRank: "#1", reliability: "91%" } },
            { name: "Cobb County", slug: "cobb-county-workforce-solutions", kpis: { demand: "High", payRank: "#4", reliability: "93%" } },
            { name: "Dekalb County", slug: "dekalb-county-staffing", kpis: { demand: "High", payRank: "#4", reliability: "90%" } },
            { name: "Clayton County", slug: "clayton-county-staffing", kpis: { demand: "High", payRank: "#7", reliability: "87%" } },
            { name: "South Fulton", slug: "south-fulton", kpis: { demand: "V. High", payRank: "#3", reliability: "89%" } },
        ]
    },
    {
        name: "Northeast Corridor",
        cities: [
            { name: "Duluth", slug: "duluth", kpis: { demand: "Med", payRank: "#2", reliability: "95%" } },
            { name: "Norcross", slug: "norcross", kpis: { demand: "High", payRank: "#3", reliability: "94%" } },
            { name: "Forsyth County", slug: "forsyth-county-staffing", kpis: { demand: "Med", payRank: "#1", reliability: "96%" } },
        ]
    },
    {
        name: "Coastal Region",
        cities: [
            { name: "Savannah", slug: "savannah-logistics-staffing", kpis: { demand: "V. High", payRank: "#2", reliability: "91%" } },
        ]
    }
];

export default function InsightsPage() {
    return (
        <main className="py-12 lg:py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Column */}
                    <SeoSidebar />

                    {/* Main Content Column */}
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '#' }
                        ]} />

                        <div className="mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Georgia Workforce Intelligence Map
                            </h1>
                            <p className="text-lg text-slate-600">
                                Select a region to view real-time labor market data, pay rate benchmarks, and candidate availability.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative mb-12">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search city workforce insights..."
                                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400"
                            />
                        </div>

                        {/* Regional Sections */}
                        <div className="space-y-16">
                            {REGIONS.map((region) => (
                                <section key={region.name}>
                                    <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                                            {region.name}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {region.cities.map((city) => (
                                            <Link
                                                key={city.slug}
                                                href={`/insights/city/${city.slug}`}
                                                className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />

                                                <div className="relative z-10">
                                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                                                        {city.name}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-6">
                                                        Local Workforce Snapshot
                                                    </p>

                                                    <div className="space-y-3 mb-6">
                                                        <div className="flex justify-between items-center text-sm">
                                                            <span className="text-slate-500 flex items-center gap-2">
                                                                <TrendingUp className="w-3 h-3" /> Demand
                                                            </span>
                                                            <span className={`font-bold ${city.kpis.demand.includes('High') ? 'text-green-600' : 'text-blue-600'
                                                                }`}>{city.kpis.demand}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center text-sm">
                                                            <span className="text-slate-500 flex items-center gap-2">
                                                                <DollarSign className="w-3 h-3" /> Pay Rank
                                                            </span>
                                                            <span className="font-mono font-bold text-slate-700">{city.kpis.payRank}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center text-sm">
                                                            <span className="text-slate-500 flex items-center gap-2">
                                                                <Clock className="w-3 h-3" /> Reliability
                                                            </span>
                                                            <span className="font-mono font-bold text-slate-700">{city.kpis.reliability}</span>
                                                        </div>
                                                    </div>

                                                    <div className="w-full py-2 bg-slate-50 border border-slate-100 rounded-lg text-center text-sm font-semibold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                                                        View Insight <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Specialized Insights Navigation */}
                        <div className="mb-16">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Additional Intelligence Categories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Link href="/insights/osha" className="group p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">OSHA & Safety</h3>
                                    <p className="text-sm text-slate-500">Compliance guides and safety protocols for industrial sites.</p>
                                </Link>
                                <Link href="/insights/pay-rates" className="group p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Pay Rate Benchmarking</h3>
                                    <p className="text-sm text-slate-500">Real-time wage data for Georgia's key industrial roles.</p>
                                </Link>
                                <Link href="/insights/faq" className="group p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Workforce FAQ</h3>
                                    <p className="text-sm text-slate-500">Common questions about staffing, compliance, and operations.</p>
                                </Link>
                            </div>
                        </div>

                        {/* Strategic Tools */}
                        <div className="mb-16">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Interactive Tools</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Link href="/data-insights/return-on-staffing-roi-model" className="group p-6 border border-blue-100 bg-blue-50 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h3 className="font-bold text-blue-900 mb-2 group-hover:text-blue-600 flex items-center gap-2">
                                        ROI Calculator <TrendingUp className="w-4 h-4" />
                                    </h3>
                                    <p className="text-sm text-blue-700">Calculate the financial impact of optimized staffing.</p>
                                </Link>
                                <Link href="/solutions/workforce-diagnostic" className="group p-6 border border-blue-100 bg-blue-50 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h3 className="font-bold text-blue-900 mb-2 group-hover:text-blue-600 flex items-center gap-2">
                                        Workforce Diagnostic <Search className="w-4 h-4" />
                                    </h3>
                                    <p className="text-sm text-blue-700">Analyze your current staffing efficiency gaps.</p>
                                </Link>
                            </div>
                        </div>

                        {/* Latest Articles (Placeholder) */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">Latest Analysis</h2>

                            {/* Empty State for now */}
                            {/* <EmptyState message="Latest articles syncing from N8N..." /> */}
                            <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200">
                                <p className="text-slate-500 italic">Latest articles syncing from N8N...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
