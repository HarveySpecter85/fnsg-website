import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Search, MapPin, Flame, CheckCircle, HardHat, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
    title: "Job Board | Industrial & Hospitality Careers",
    description: "Browse current job openings in Warehouse, Manufacturing, Agriculture, and Hospitality. Weekly pay, W-2 employment, and immediate placement.",
}

export default function JobBoardPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <HardHat className="w-4 h-4" />
                            <span>Immediate Openings Available</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Current Job Openings: <span className="text-blue-600">Industrial & Hospitality Careers</span>
                        </TextReveal>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                            Find your next great opportunity. We hire for stability, safety, and growth.
                        </p>
                    </div>

                    {/* Job Search Interface (Simulated) */}
                    <FadeIn delay={0.2} className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-slate-200 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-5 relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Job Title or Keyword"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </div>
                            <div className="md:col-span-4 relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white text-slate-600">
                                    <option>All Locations</option>
                                    <option>Atlanta, GA</option>
                                    <option>Savannah, GA</option>
                                    <option>Gwinnett County, GA</option>
                                    <option>Fulton County, GA</option>
                                </select>
                            </div>
                            <div className="md:col-span-3">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Search Jobs
                                </button>
                            </div>
                        </div>

                        {/* Hot Jobs Ticker */}
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 overflow-hidden">
                            <div className="flex items-center gap-1 text-orange-500 font-bold whitespace-nowrap">
                                <Flame className="w-4 h-4" />
                                <span>HOT JOBS:</span>
                            </div>
                            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap text-sm text-slate-600">
                                <span className="flex items-center gap-1"><span className="font-semibold text-slate-900">Forklift Operator</span> - $19/hr (Start Tomorrow)</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="flex items-center gap-1"><span className="font-semibold text-slate-900">Event Server</span> - $18/hr (Weekend Gigs)</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="flex items-center gap-1"><span className="font-semibold text-slate-900">Production Line</span> - $16.50/hr (Weekly Pay)</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="flex items-center gap-1"><span className="font-semibold text-slate-900">CDL Driver</span> - Competitive Rates</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> offers immediate placement for <strong className="text-brand-navy font-bold">Warehouse</strong>, <strong className="text-brand-navy font-bold">Manufacturing</strong>, <strong className="text-brand-navy font-bold">Agriculture</strong>, and <strong className="text-brand-navy font-bold">Hospitality</strong> roles. Unlike 1099 platforms, all our positions are <strong className="text-brand-navy font-bold">W-2 employment</strong> featuring <strong className="text-brand-navy font-bold">weekly pay</strong>, taxes withheld, and access to benefits.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                                <DollarSign className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">No Fees Ever</h3>
                                <p className="text-sm text-slate-600">We never charge candidates for placement. Our services are 100% free for job seekers.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">W-2 Employment</h3>
                                <p className="text-sm text-slate-600">We handle your taxes and provide legal employment status, not risky 1099 gigs.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                                <HardHat className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Safety First</h3>
                                <p className="text-sm text-slate-600">All worksites are OSHA vetted. We prioritize your physical safety above all else.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-brand-navy rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">Don't see the perfect job?</h2>
                            <p className="text-blue-100 mb-8 text-lg">
                                Join our general talent pool. We fill many "Hidden Market" positions before they are even advertised.
                            </p>
                            <MagneticButton>
                                <Link href="/talent/submit-resume" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-white rounded-lg hover:bg-blue-50 transition-colors">
                                    Join Talent Network
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
