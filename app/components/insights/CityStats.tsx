import React from 'react';
import { Users, TrendingUp, Building2, DollarSign } from 'lucide-react';

interface CityStatsProps {
    population?: string;
    workforce?: string;
    unemployment?: string;
    avgWage?: string;
}

export function CityStats({
    population = "N/A",
    workforce = "N/A",
    unemployment = "N/A",
    avgWage = "N/A"
}: CityStatsProps) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2 text-slate-500">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Population</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{population}</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2 text-slate-500">
                    <BriefcaseIcon className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Workforce</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{workforce}</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2 text-slate-500">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Unemployment</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{unemployment}</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2 text-slate-500">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Avg. Wage</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{avgWage}</div>
            </div>
        </div>
    );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}
