'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, MapPin, Phone, Shield, BarChart3, Building2, Users } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { AnimatedLogo } from '@/app/components/anim/animated-logo'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Navigation data - preserving all existing URLs
const navigation = {
    solutions: {
        outcomeBased: [
            { title: 'Workforce Health Screening', href: '/solutions/workforce-health-screening', description: 'Drug testing, physicals, and immunizations.' },
            { title: 'On-Site Management', href: '/solutions/on-site-workforce-management', description: 'Embedded performance teams.' },
            { title: 'Payroll & Compliance', href: '/solutions/payroll-compliance-administration', description: 'EOR services and tax handling.' },
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
    // NEW: Resources mega-menu (merge of Risk & Compliance + Data Insights)
    resources: {
        compliance: [
            { title: '1099 vs W-2 Risk Playbook', href: '/risk-compliance/1099-vs-w2-risk-playbook' },
            { title: 'Drug-Free Workplace Policy', href: '/risk-compliance/drug-free-workplace-policy' },
            { title: 'MSPA Agricultural Compliance', href: '/risk-compliance/mspa-agricultural-compliance' },
            { title: 'Liability Insurance Coverage', href: '/risk-compliance/liability-insurance-coverage' },
            { title: 'ACA Benefits Management', href: '/risk-compliance/aca-benefits-management' },
            { title: 'Safety Training Protocols', href: '/risk-compliance/safety-training-protocols' },
        ],
        dataInsights: [
            { title: 'Workforce Economics', href: '/insights/kpis' },
            { title: 'ROI Model', href: '/data-insights/return-on-staffing-roi-model' },
            { title: 'Labor Market Intelligence', href: '/insights/labor-market' },
        ],
        reports: [
            { title: 'GA Industrial Workforce 2025', href: '/insights/reports/georgia-industrial-workforce-2025' },
            { title: 'Warehouse Forecast 2025', href: '/insights/reports/warehouse-logistics-forecast-2025' },
            { title: 'Manufacturing Turnover 2025', href: '/insights/reports/manufacturing-turnover-2025' },
            { title: 'Healthcare & EVS 2025', href: '/insights/reports/healthcare-evs-2025' },
        ],
        intelligence: [
            { title: 'Workforce Intelligence Hub', href: '/insights/reports/' },
            { title: 'Regional Intelligence', href: '/insights/city/' },
            { title: 'Sector Analytics', href: '/insights/industry/' },
        ]
    },
    // NEW: Company mega-menu (merge of Company + Partners + Contact)
    company: {
        about: [
            { title: 'Our Story', href: '/company/our-story' },
            { title: 'Leadership Team', href: '/company/leadership-team' },
            { title: 'Performance Metrics', href: '/company/performance-metrics' },
            { title: 'Press & Media', href: '/company/press-media' },
            { title: 'Blog', href: '/company/blog' },
        ],
        partners: [
            { title: 'Labcorp & eScreen Network', href: '/partners/labcorp-escreen-network' },
            { title: 'VMS Integrations', href: '/partners/vms-integrations' },
            { title: 'Technology Stack', href: '/partners/technology-stack' },
            { title: 'Safety Certifications', href: '/partners/safety-certifications' },
        ]
    },
    locations: [
        { title: 'Atlanta Staffing Agency', href: '/insights/city/atlanta' },
        { title: 'Fulton County Employment', href: '/insights/city/fulton-county-employment-services' },
        { title: 'DeKalb County Staffing', href: '/insights/city/dekalb-county-staffing' },
        { title: 'Clayton County Staffing', href: '/insights/city/clayton-county-staffing' },
        { title: 'Cobb County Workforce', href: '/insights/city/cobb-county-workforce-solutions' },
        { title: 'Gwinnett County Staffing', href: '/insights/city/gwinnett-county-staffing-agency' },
        { title: 'Hall County Recruitment', href: '/insights/city/hall-county-recruitment' },
        { title: 'Barrow County Staffing', href: '/insights/city/barrow-county-staffing' },
        { title: 'Jackson County Logistics', href: '/insights/city/jackson-county-logistics-staffing' },
        { title: 'Forsyth County Staffing', href: '/insights/city/forsyth-county-staffing' },
        { title: 'Savannah Logistics Staffing', href: '/insights/city/savannah-logistics-staffing' },
    ],
}

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [locationsOpen, setLocationsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50">
            {/* ====== TOPBAR ====== */}
            <div className="bg-slate-900 text-slate-400 text-[13px] hidden lg:block">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center justify-between h-10">
                        {/* Left: Locations Dropdown */}
                        <div className="flex items-center gap-6">
                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                                    onMouseEnter={() => setLocationsOpen(true)}
                                    onMouseLeave={() => setLocationsOpen(false)}
                                    aria-label="Georgia Locations"
                                >
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>Georgia Locations</span>
                                    <ChevronDown className="w-3 h-3" />
                                </button>
                                {/* Locations Dropdown */}
                                <div
                                    className={cn(
                                        "absolute left-0 top-full pt-2 z-50 transition-all duration-200",
                                        locationsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                    )}
                                    onMouseEnter={() => setLocationsOpen(true)}
                                    onMouseLeave={() => setLocationsOpen(false)}
                                >
                                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-slate-900/10 p-3 w-72">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 pb-2 border-b border-slate-100 mb-2">
                                            Service Areas
                                        </div>
                                        <div className="grid grid-cols-1 gap-0.5 max-h-80 overflow-y-auto">
                                            {navigation.locations.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="border-t border-slate-100 mt-2 pt-2">
                                            <Link
                                                href="/insights/city"
                                                className="block px-2 py-1.5 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                                            >
                                                View All Locations →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office highlights */}
                            <span className="text-slate-500 hidden xl:inline">
                                Atlanta HQ • Gainesville • Savannah
                            </span>
                        </div>

                        {/* Right: Phone + Trust Badges */}
                        <div className="flex items-center gap-6">
                            <a
                                href="tel:470-470-4243"
                                className="flex items-center gap-1.5 text-white font-medium hover:text-cyan-400 transition-colors"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                <span>470-470-4243</span>
                            </a>
                            <div className="hidden xl:flex items-center gap-1 text-slate-500">
                                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                                <span>MSPA • E-Verify • ACA Compliant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== MAIN NAVBAR ====== */}
            <nav className="bg-white border-b border-slate-200" aria-label="Global">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="block">
                                <span className="sr-only">First National Staffing</span>
                                <AnimatedLogo />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
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

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
                            {/* Solutions Mega Menu */}
                            <div className="group relative">
                                <button className="flex items-center gap-x-1 px-4 py-2 text-[15px] font-medium text-slate-800 hover:text-cyan-600 transition-colors">
                                    Solutions
                                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 top-full pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-slate-900/10 p-6 w-[500px]">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    Outcome-Based Services
                                                </div>
                                                <div className="space-y-1">
                                                    {navigation.solutions.outcomeBased.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                                                        >
                                                            <div className="text-sm font-medium text-slate-900">{item.title}</div>
                                                            <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    Engagement Models
                                                </div>
                                                <div className="space-y-1">
                                                    {navigation.solutions.engagementModels.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                                                        >
                                                            <div className="text-sm font-medium text-slate-900">{item.title}</div>
                                                            <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Industries Dropdown */}
                            <div className="group relative">
                                <button className="flex items-center gap-x-1 px-4 py-2 text-[15px] font-medium text-slate-800 hover:text-cyan-600 transition-colors">
                                    Industries
                                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 top-full pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-slate-900/10 p-4 w-72">
                                        <div className="space-y-0.5">
                                            {navigation.industries.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded-lg transition-colors"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Resources Mega Menu (NEW - merged Risk & Data) */}
                            <div className="group relative">
                                <button className="flex items-center gap-x-1 px-4 py-2 text-[15px] font-medium text-slate-800 hover:text-cyan-600 transition-colors">
                                    Resources
                                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-slate-900/10 p-6 w-[700px]">
                                        <div className="grid grid-cols-3 gap-6">
                                            {/* Column 1: Compliance */}
                                            <div>
                                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    <Shield className="w-4 h-4" />
                                                    Compliance
                                                </div>
                                                <div className="space-y-0.5">
                                                    {navigation.resources.compliance.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Column 2: Data & Insights */}
                                            <div>
                                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    <BarChart3 className="w-4 h-4" />
                                                    Data & Insights
                                                </div>
                                                <div className="space-y-0.5">
                                                    {navigation.resources.dataInsights.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="border-t border-slate-100 mt-3 pt-3">
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                                        Intelligence
                                                    </div>
                                                    {navigation.resources.intelligence.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Column 3: Industry Reports */}
                                            <div>
                                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    📊 Industry Reports
                                                </div>
                                                <div className="space-y-0.5">
                                                    {navigation.resources.reports.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Company Mega Menu (NEW - merged Company + Partners) */}
                            <div className="group relative">
                                <button className="flex items-center gap-x-1 px-4 py-2 text-[15px] font-medium text-slate-800 hover:text-cyan-600 transition-colors">
                                    Company
                                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute right-0 top-full pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-slate-900/10 p-6 w-[450px]">
                                        <div className="grid grid-cols-2 gap-6">
                                            {/* Column 1: About */}
                                            <div>
                                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    <Building2 className="w-4 h-4" />
                                                    About
                                                </div>
                                                <div className="space-y-0.5">
                                                    {navigation.company.about.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Column 2: Partners & Trust */}
                                            <div>
                                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                                                    <Users className="w-4 h-4" />
                                                    Partners & Trust
                                                </div>
                                                <div className="space-y-0.5">
                                                    {navigation.company.partners.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="block px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600 rounded transition-colors"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Contact CTA */}
                                        <div className="border-t border-slate-100 mt-4 pt-4">
                                            <Link
                                                href="/contact/general-inquiries"
                                                className="flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                                            >
                                                <span className="text-sm font-medium text-slate-900">Contact Us</span>
                                                <span className="text-xs text-slate-500">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTAs - Always Visible */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                href="/contact/request-workforce"
                                className="px-4 py-2 text-sm font-semibold text-cyan-600 border border-cyan-500 rounded-lg hover:bg-cyan-50 transition-colors"
                            >
                                Clients
                            </Link>
                            <Link
                                href="/talent/submit-resume"
                                className="px-4 py-2 text-sm font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors shadow-sm"
                            >
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ====== MOBILE MENU ====== */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
                    <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                            <AnimatedLogo />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-slate-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Phone CTA */}
                    <div className="bg-slate-900 px-6 py-4">
                        <a
                            href="tel:470-470-4243"
                            className="flex items-center justify-center gap-2 text-white font-semibold"
                        >
                            <Phone className="w-5 h-5" />
                            Call 470-470-4243
                        </a>
                    </div>

                    <div className="px-6 py-6 space-y-6">
                        {/* Mobile Solutions */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Solutions</h3>
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
                            <h3 className="font-bold text-slate-900 mb-3">Industries</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.industries.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Resources */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Resources</h3>
                            <div className="pl-4 space-y-4 border-l-2 border-slate-100">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Compliance</h4>
                                    <div className="space-y-2">
                                        {navigation.resources.compliance.map(item => (
                                            <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Data & Insights</h4>
                                    <div className="space-y-2">
                                        {navigation.resources.dataInsights.map(item => (
                                            <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Reports</h4>
                                    <div className="space-y-2">
                                        {navigation.resources.reports.map(item => (
                                            <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Locations */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Georgia Locations</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.locations.slice(0, 6).map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                                <Link href="/insights/city" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-cyan-600 font-medium">
                                    View All Locations →
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Company */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Company</h3>
                            <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                                {navigation.company.about.map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-slate-700">
                                        {item.title}
                                    </Link>
                                ))}
                                <Link href="/contact/general-inquiries" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-cyan-600 font-medium">
                                    Contact Us →
                                </Link>
                            </div>
                        </div>

                        {/* Mobile CTAs */}
                        <div className="pt-6 border-t border-slate-100 space-y-3">
                            <Link
                                href="/contact/request-workforce"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full py-3 text-center text-base font-semibold text-cyan-600 border-2 border-cyan-500 rounded-lg"
                            >
                                Request Workforce
                            </Link>
                            <Link
                                href="/talent/submit-resume"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full py-3 text-center text-base font-semibold text-white bg-cyan-600 rounded-lg"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
