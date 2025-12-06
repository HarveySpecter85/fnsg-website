'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const navigation = {
    solutions: {
        outcomeBased: [
            { title: 'Workforce Health Screening', href: '/solutions/workforce-health-screening-os', description: 'Drug testing, physicals, and immunizations.' },
            { title: 'On-Site Management', href: '/solutions/on-site-workforce-management-os', description: 'Embedded performance teams.' },
            { title: 'Payroll & Compliance', href: '/solutions/payroll-compliance-administration-os', description: 'EOR services and tax handling.' },
            { title: 'Direct Hire', href: '/solutions/direct-hire-recruitment', description: 'Executive and technical search.' },
            { title: 'Farm Labor Contracting', href: '/solutions/farm-labor-contracting', description: 'Licensed agricultural staffing.' },
        ],
        engagementModels: [
            { title: 'High-Volume Ramp Ups', href: '/solutions/deployment-strategies/high-volume-ramp-ups', description: 'Rapid deployment for new launches.' },
            { title: 'Peak Season Deployment', href: '/solutions/deployment-strategies/peak-season-deployment', description: 'Scalable Q4 workforce solutions.' },
        ]
    },
    industries: [
        { title: 'Agriculture & Nursery', href: '/industries/agriculture-nursery-staffing' },
        { title: 'Food & Beverage Production', href: '/industries/food-beverage-production' },
        { title: 'Manufacturing & Production', href: '/industries/manufacturing-production-staffing' },
        { title: 'Recycling & Waste Management', href: '/industries/recycling-waste-management-staffing' },
        { title: 'Warehouse & Logistics', href: '/industries/warehouse-logistics-staffing' },
        { title: 'Hospitality & Events', href: '/industries/hospitality-events-staffing' },
        { title: 'Healthcare Support & EVS', href: '/industries/healthcare-support-staffing' },
    ],
    riskCompliance: [
        { title: '1099 vs W-2 Risk Playbook', href: '/risk-compliance/1099-vs-w2-risk-playbook' },
        { title: 'Drug-Free Workplace Policy', href: '/risk-compliance/drug-free-workplace-policy' },
        { title: 'MSPA Agricultural Compliance', href: '/risk-compliance/mspa-agricultural-compliance' },
        { title: 'Liability Insurance Coverage', href: '/risk-compliance/liability-insurance-coverage' },
        { title: 'ACA Benefits Management', href: '/risk-compliance/aca-benefits-management' },
        { title: 'Safety Training Protocols', href: '/risk-compliance/safety-training-protocols' },
    ],
    dataInsights: [
        { title: 'Workforce Economics', href: '/insights/kpis' },
        { title: 'ROI Model – Return on Staffing', href: '/data-insights/return-on-staffing-roi-model' },
        { title: 'Labor Market Intelligence', href: '/insights/labor-market' },

        { title: 'GA Industrial Workforce 2025', href: '/insights/reports/georgia-industrial-workforce-2025' },
        { title: 'Warehouse Forecast 2025', href: '/insights/reports/warehouse-logistics-forecast-2025' },
        { title: 'Manufacturing Turnover 2025', href: '/insights/reports/manufacturing-turnover-2025' },
        { title: 'Healthcare & EVS 2025', href: '/insights/reports/healthcare-evs-2025' },
        { title: 'Workforce Intelligence Hub', href: '/insights/reports/' },
        { title: 'Regional Intelligence', href: '/insights/city/' },
        { title: 'Sector Analytics', href: '/insights/industry/' },
    ],
    company: [
        { title: 'Performance Metrics', href: '/company/performance-metrics' },
        { title: 'Leadership Team', href: '/company/leadership-team' },
        { title: 'Our Story', href: '/company/our-story' },
        { title: 'Press & Media', href: '/company/press-media' },
        { title: 'Blog', href: '/company/blog' },
    ],
    locations: [
        { title: 'Atlanta Staffing Agency', href: '/insights/city/atlanta' },
        { title: 'Fulton County Employment', href: '/insights/city/fulton-county-employment-services' },

        { title: 'DeKalb County Staffing', href: '/insights/city/dekalb-county-staffing' },
        { title: 'Clayton County Staffing', href: '/insights/city/clayton-county-staffing' },
        { title: 'Cobb County Workforce', href: '/insights/city/cobb-county-workforce-solutions' },
        { title: 'Hall County Recruitment', href: '/insights/city/hall-county-recruitment' },
        { title: 'Barrow County Staffing', href: '/insights/city/barrow-county-staffing' },
        { title: 'Jackson County Logistics', href: '/insights/city/jackson-county-logistics-staffing' },
        { title: 'Forsyth County Staffing', href: '/insights/city/forsyth-county-staffing' },
        { title: 'Savannah Logistics Staffing', href: '/insights/city/savannah-logistics-staffing' },
    ],
    partners: [
        { title: 'Labcorp & eScreen Network', href: '/partners/labcorp-escreen-network' },
        { title: 'VMS Integrations', href: '/partners/vms-integrations' },
        { title: 'Technology Stack', href: '/partners/technology-stack' },
        { title: 'Safety Certifications', href: '/partners/safety-certifications' },
    ]
}

import { AnimatedLogo } from '@/app/components/anim/animated-logo'

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">First National Staffing</span>
                        <AnimatedLogo />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">

                    {/* Solutions Mega Menu */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Solutions
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Outcome-Based Services</div>
                                    {navigation.solutions.outcomeBased.map((item) => (
                                        <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-slate-900">
                                                    {item.title}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-slate-600 text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 border-t border-slate-100 pt-4 grid grid-cols-1 gap-2">
                                    <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Engagement Models</div>
                                    {navigation.solutions.engagementModels.map((item) => (
                                        <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-slate-900">
                                                    {item.title}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-slate-600 text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Industries
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute -left-8 top-full z-10 mt-3 w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                {navigation.industries.map((item) => (
                                    <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                        <Link href={item.href} className="block text-sm font-semibold leading-6 text-slate-900">
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Risk & Compliance Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Risk & Compliance
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute -left-8 top-full z-10 mt-3 w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                {navigation.riskCompliance.map((item) => (
                                    <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                        <Link href={item.href} className="block text-sm font-semibold leading-6 text-slate-900">
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Data Insights Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Data Insights
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute -left-8 top-full z-10 mt-3 w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                {navigation.dataInsights.map((item) => (
                                    <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                        <Link href={item.href} className="block text-sm font-semibold leading-6 text-slate-900">
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Company Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Company
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute -left-8 top-full z-10 mt-3 w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                {navigation.company.map((item) => (
                                    <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                        <Link href={item.href} className="block text-sm font-semibold leading-6 text-slate-900">
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Partners Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Partners
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute -left-8 top-full z-10 mt-3 w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                {navigation.partners.map((item) => (
                                    <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                        <Link href={item.href} className="block text-sm font-semibold leading-6 text-slate-900">
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Locations Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        Locations
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute right-0 top-full z-10 mt-3 w-80 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                {navigation.locations.map((item) => (
                                    <div key={item.title} className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                        <Link href={item.href} className="block text-sm font-semibold leading-6 text-slate-900">
                                            {item.title}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/contact/general-inquiries" className="text-sm font-semibold leading-6 text-slate-900 py-2">
                        Contact
                    </Link>

                    {/* Talent Dropdown */}
                    <div className="group relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 cursor-pointer py-2">
                        For Talent
                        <ChevronDown className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:rotate-180" aria-hidden="true" />
                        <div className="absolute right-0 top-full z-10 mt-3 w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                            <div className="p-4">
                                <div className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                    <Link href="/talent/job-board" className="block text-sm font-semibold leading-6 text-slate-900">
                                        Job Board
                                        <span className="absolute inset-0" />
                                    </Link>
                                </div>
                                <div className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                    <Link href="/talent/employee-benefits" className="block text-sm font-semibold leading-6 text-slate-900">
                                        Employee Benefits
                                        <span className="absolute inset-0" />
                                    </Link>
                                </div>
                                <div className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                    <Link href="/talent/submit-resume" className="block text-sm font-semibold leading-6 text-slate-900">
                                        Submit Resume
                                        <span className="absolute inset-0" />
                                    </Link>
                                </div>
                                <div className="group/item relative flex gap-x-6 rounded-lg p-2 hover:bg-slate-50">
                                    <Link href="/talent/worker-portal-login" className="block text-sm font-semibold leading-6 text-slate-900">
                                        Worker Portal Login
                                        <span className="absolute inset-0" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/os-demo" className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        OS Demo Dashboard
                    </Link>
                    <Link href="/contact/request-workforce" className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Request Workforce
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">First National Staffing</span>
                            <AnimatedLogo />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-slate-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="space-y-6">
                        {/* Mobile Solutions */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Solutions</h3>
                            <div className="pl-4 space-y-4 border-l-2 border-slate-100">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Outcome-Based</h4>
                                    <div className="space-y-2">
                                        {navigation.solutions.outcomeBased.map(item => (
                                            <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Engagement Models</h4>
                                    <div className="space-y-2">
                                        {navigation.solutions.engagementModels.map(item => (
                                            <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Industries */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Industries</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.industries.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Data Insights */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Data Insights</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.dataInsights.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Locations */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Locations</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.locations.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Company */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Company</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.company.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Partners */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Partners</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.partners.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Talent */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">For Talent</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                <Link href="/talent/job-board" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                    Job Board
                                </Link>
                                <Link href="/talent/employee-benefits" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                    Employee Benefits
                                </Link>
                                <Link href="/talent/submit-resume" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                    Submit Resume
                                </Link>
                                <Link href="/talent/worker-portal-login" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                    Worker Portal Login
                                </Link>
                            </div>
                        </div>

                        <Link href="/contact/general-inquiries" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold leading-7 text-slate-900">
                            Contact
                        </Link>

                        <div className="pt-6 border-t border-slate-100">
                            <Link href="/contact/request-workforce" onClick={() => setMobileMenuOpen(false)} className="block mt-4 py-3 text-center text-base font-semibold leading-7 text-white bg-blue-600 rounded-lg">
                                Request Workforce
                            </Link>
                            <Link href="/os-demo" onClick={() => setMobileMenuOpen(false)} className="block mt-4 py-3 text-center text-base font-semibold leading-7 text-white bg-blue-600 rounded-lg">
                                OS Demo Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
