import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { TestTube, FlaskConical, CheckCircle2, AlertTriangle } from 'lucide-react'
import PremiumCTA from '@/app/components/PremiumCTA';

export const metadata: Metadata = {
    title: "Drug & Alcohol Screening Services | 5 to 12-Panel Testing",
    description: "Comprehensive drug testing services including 5, 10, and 12-panel screens. Rapid results via eCup/xCup technology for immediate hiring decisions and full DOT compliance.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-health-screening/drug-alcohol-testing',
    },
    openGraph: {
        title: "Drug & Alcohol Screening Services | 5 to 12-Panel Testing",
        description: "Comprehensive drug testing services including 5, 10, and 12-panel screens. Rapid results via eCup/xCup technology for immediate hiring decisions and full DOT compliance.",
        url: 'https://firstnationalstaffing.com/solutions/workforce-health-screening/drug-alcohol-testing',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function DrugTestingPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <TestTube className="w-4 h-4" />
                            <span>Rapid & Lab-Based Screening</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Drug & Alcohol Screening Services
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Precision & Speed
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact/general-inquiries" className="btn-primary text-lg px-8 py-4">
                                    Configure Your Panel
                                </Link>
                            </MagneticButton>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                We offer a full spectrum of screening options ranging from standard <strong className="text-brand-navy font-bold">5-Panel</strong> to comprehensive <strong className="text-brand-navy font-bold">12-Panel</strong> tests. Utilizing <strong className="text-brand-navy font-bold">xCup/eCup</strong> technology, we deliver instant negative results for non-DOT screens, while ensuring full chain-of-custody compliance for all samples.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Panel Configuration Table */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Panel Configurations</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200">
                                    <th className="p-5 font-bold text-brand-navy">Panel Type</th>
                                    <th className="p-5 font-bold text-brand-navy">Substances Covered</th>
                                    <th className="p-5 font-bold text-brand-navy">Turnaround</th>
                                    <th className="p-5 font-bold text-brand-navy">Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">10-Panel (Standard)</td>
                                    <td className="p-5 text-slate-600 text-sm">
                                        Amphetamines, Cocaine, Marijuana, Opiates, PCP, Barbiturates, Benzodiazepines, Methadone, Propoxyphene, Quaaludes
                                    </td>
                                    <td className="p-5 text-slate-600 font-medium">Instant (eCup)</td>
                                    <td className="p-5 text-slate-600">Warehouse / General Industrial</td>
                                </tr>
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">12-Panel (Expanded)</td>
                                    <td className="p-5 text-slate-600 text-sm">
                                        All 10-Panel + <strong>MDMA (Ecstasy)</strong> and <strong>Oxycodone</strong>
                                    </td>
                                    <td className="p-5 text-slate-600 font-medium">24-48 Hours</td>
                                    <td className="p-5 text-slate-600">Healthcare / High-Security</td>
                                </tr>
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">DOT 5-Panel</td>
                                    <td className="p-5 text-slate-600 text-sm">
                                        Federal NIDA Standards (THC, Cocaine, PCP, Opiates, Amphetamines)
                                    </td>
                                    <td className="p-5 text-slate-600 font-medium">Lab-Based (24-72 Hrs)</td>
                                    <td className="p-5 text-slate-600">CDL Drivers / Safety-Sensitive</td>
                                </tr>
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">Hair Follicle</td>
                                    <td className="p-5 text-slate-600 text-sm">
                                        5-Panel Standard (Extended Detection Window)
                                    </td>
                                    <td className="p-5 text-slate-600 font-medium">3-5 Days</td>
                                    <td className="p-5 text-slate-600">90-Day History / Executive</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Technology Integration */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <FlaskConical className="w-8 h-8 text-brand-primary" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-brand-navy mb-4">eScreen Integration</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Our integration with eScreen allows for a completely paperless workflow. From scheduling the test via email to receiving the result in our portal, the entire process is digital.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Real-time status tracking
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Automated MRO review
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Electronic Chain of Custody (eCCF)
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Integrated billing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-12">
                <PremiumCTA />
            </div>
        </main >
    )
}
