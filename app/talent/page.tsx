import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import Link from 'next/link';
import { User, Briefcase, FileText, LogIn, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "Talent Portal | First National Staffing",
    description: "Job board, employee benefits, and worker portal access for FNSG associates.",
};

export default function TalentPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'For Talent', href: '' }
                    ]} />
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Talent Portal Overview</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Resources for job seekers and current associates. Find your next opportunity or manage your employment.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Job Board */}
                    <Link href="/talent/job-board" className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Search Jobs</h2>
                        <p className="text-slate-600 mb-6">Browse open positions in manufacturing, logistics, and skilled trades across Georgia.</p>
                        <span className="text-blue-600 font-bold flex items-center gap-2">View Openings <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    {/* Worker Portal */}
                    <Link href="/talent/worker-portal-login" className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                        <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <LogIn className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">Worker Portal Login</h2>
                        <p className="text-slate-600 mb-6">Access pay stubs, W-2s, and manage your assignment details.</p>
                        <span className="text-green-600 font-bold flex items-center gap-2">Login Now <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    {/* Submit Resume */}
                    <Link href="/talent/submit-resume" className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600">Submit Resume</h3>
                            <p className="text-sm text-slate-500">General application for future roles.</p>
                        </div>
                    </Link>

                    {/* Benefits */}
                    <Link href="/talent/employee-benefits" className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600">Employee Benefits</h3>
                            <p className="text-sm text-slate-500">Health, dental, and vision coverage info.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
