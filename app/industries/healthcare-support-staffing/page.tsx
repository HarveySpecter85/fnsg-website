import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { HEALTH_TURNOVER_MARKET, HEALTH_TURNOVER_FNSG, HEALTH_FILL_TIME, HEALTH_COMPLIANCE_SCORE, CURRENT_YEAR } from '@/lib/site-config'
import { Shield, Clock, CheckCircle, Activity, FileCheck, Stethoscope, Syringe, UserCheck, Building2 } from 'lucide-react'
import { IntelligenceWidget } from '@/app/components/intelligence-engine/widget'

export const metadata: Metadata = {
    title: "Healthcare Support & EVS Staffing Georgia | JCAHO Ready & HIPAA Compliant",
    description: "Staffing for Hospital EVS, Patient Transport, and Intake across Atlanta. 100% Immunization & Background Verified (Labcorp/eScreen). Reduce HCAHPS risks today.",
}

export default function HealthcareSupportStaffingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Healthcare Support Staffing",
        "name": "JCAHO Compliant EVS & Non-Clinical Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "knowsAbout": [
                "JCAHO Standards",
                "HIPAA Compliance",
                "Infection Control",
                "OIG Exclusion List"
            ]
        },
        "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "AdministrativeArea", "name": "Fulton County" },
            { "@type": "AdministrativeArea", "name": "Gwinnett County" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Non-Clinical Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Environmental Services (EVS)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Patient Transporters" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Intake Coordinators" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Hospital Administrators"
        }
    }

    return (
        <main className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-white border-b border-slate-100">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Healthcare Support & EVS Staffing Solutions
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            JCAHO-Ready Non-Clinical Workforce | HIPAA Compliant
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Staffing Proposal
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> delivers credentialed non-clinical support staff to Georgia&apos;s healthcare systems. We specialize in <strong className="text-brand-navy font-bold">Environmental Services (EVS)</strong>, <strong className="text-brand-navy font-bold">Patient Transport</strong>, and <strong className="text-brand-navy font-bold">Administrative Intake</strong>, ensuring 100% alignment with <strong className="text-brand-navy font-bold">Joint Commission (JCAHO)</strong> standards. All personnel undergo 10-Panel drug screening and immunization verification prior to deployment.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Market Intelligence Widget */}
            <section className="py-20 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Diagnose Your Staffing Health
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Run a diagnostic on your non-clinical workforce. Our system identifies compliance risks and proposes JCAHO-ready staffing solutions.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Compliance Risk Scan
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Turnover Impact Analysis
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Patient Satisfaction Correlation
                                </li>
                            </ul>
                        </div>
                        <div>
                            <IntelligenceWidget industry="Healthcare" defaultLocation="Atlanta, GA" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid (Market Pulse) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Healthcare Labor Market Pulse ({CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Benchmarking performance against industry standards.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard bg-white border border-slate-100 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Turnover</span>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">
                                Market {HEALTH_TURNOVER_MARKET} vs <span className="text-green-600">Us {HEALTH_TURNOVER_FNSG}</span>
                            </h3>
                            <p className="text-sm font-medium text-brand-secondary">EVS Turnover Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Significantly higher retention through better vetting.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-100 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Speed</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{HEALTH_FILL_TIME}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Time-to-Fill</p>
                            <p className="text-sm text-brand-gray mt-2">Rapid deployment for non-clinical roles.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-100 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <FileCheck className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Audit-Ready</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{HEALTH_COMPLIANCE_SCORE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Compliance Score</p>
                            <p className="text-sm text-brand-gray mt-2">Immunizations + OIG fully verified.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} Healthcare Support Wage Guide <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Infection Control Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Infection Control & Compliance</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We understand that EVS is not just &quot;cleaning&quot;—it is Infection Prevention. Our staff training aligns with your infection control protocols to protect your <strong className="text-brand-navy">HCAHPS scores</strong>.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Terminal Cleaning Protocols</h4>
                                        <p className="text-slate-600">Staff trained on isolation room standards and chemical dwell times.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <FileCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">HIPAA & Privacy</h4>
                                        <p className="text-slate-600">100% signed confidentiality agreements for patient privacy.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <UserCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">OIG/GSA Exclusion Checks</h4>
                                        <p className="text-slate-600">Monthly monitoring of all placed staff to ensure federal compliance.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual */}
                            <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 opacity-50"></div>
                                <div className="text-center relative z-10">
                                    <Stethoscope className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Clinical Grade Support</p>
                                    <p className="text-sm text-slate-500">JCAHO Aligned</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Occupational Health Integration */}
            <section className="py-20 bg-brand-light border-y border-brand-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-brand-primary">
                            <Syringe className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Powered by Labcorp & eScreen Network</h2>
                        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                            Stop waiting days for clearance. We utilize our integrated <Link href="/solutions/workforce-health-screening" className="text-brand-primary font-semibold hover:underline">Occupational Health & Screening</Link> network to provide:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle className="w-6 h-6 text-brand-teal mb-3" />
                                <h4 className="font-bold text-brand-navy mb-1">Rapid 10-Panel</h4>
                                <p className="text-sm text-slate-500">Drug Tests (Results in 1-2 hours)</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle className="w-6 h-6 text-brand-teal mb-3" />
                                <h4 className="font-bold text-brand-navy mb-1">TB Skin Tests</h4>
                                <p className="text-sm text-slate-500">& T-Spot Verification</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle className="w-6 h-6 text-brand-teal mb-3" />
                                <h4 className="font-bold text-brand-navy mb-1">Immunizations</h4>
                                <p className="text-sm text-slate-500">MMR/Varicella/Hep B Titers</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle className="w-6 h-6 text-brand-teal mb-3" />
                                <h4 className="font-bold text-brand-navy mb-1">Vaccinations</h4>
                                <p className="text-sm text-slate-500">Flu & COVID-19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles Table */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Specialized non-clinical talent ready for deployment.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Compliance Level</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Shift Availability</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Screening Standard</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">EVS / Sanitation</td>
                                    <td className="p-4 text-slate-600">Terminal Clean / Biohazard</td>
                                    <td className="p-4 text-slate-600">24/7 Rotations</td>
                                    <td className="p-4 text-slate-600">10-Panel + TB</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Availability</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">Patient Transport</td>
                                    <td className="p-4 text-slate-600">CPR / BLS / HIPAA</td>
                                    <td className="p-4 text-slate-600">1st / 2nd / 3rd</td>
                                    <td className="p-4 text-slate-600">10-Panel + Flu</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Availability</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">Front Desk / Intake</td>
                                    <td className="p-4 text-slate-600">EPIC / Cerner Exp</td>
                                    <td className="p-4 text-slate-600">Business Hours</td>
                                    <td className="p-4 text-slate-600">Background + OIG</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Availability</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">Supply Chain</td>
                                    <td className="p-4 text-slate-600">Inventory Control</td>
                                    <td className="p-4 text-slate-600">Overnight / Early</td>
                                    <td className="p-4 text-slate-600">10-Panel</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Availability</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl mx-auto">
                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-navy shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Building2 className="w-32 h-32 text-brand-navy" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-6">Case Study: Regional Hospital System</h3>
                        <div className="space-y-4 relative z-10">
                            <p className="text-lg text-slate-700"><strong className="text-brand-primary">Challenge:</strong> High turnover in EVS leading to delayed bed turnover times in ER.</p>
                            <p className="text-lg text-slate-700"><strong className="text-brand-primary">Solution:</strong> Deployed 15-person &quot;Rapid Response&quot; EVS team with on-site supervisor.</p>
                            <p className="text-xl font-bold text-brand-navy bg-brand-light/50 p-4 rounded-lg border border-brand-primary/20">
                                Result: Bed turnover time reduced by 18 minutes; 100% compliance on JCAHO mock audit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Are your EVS staff trained on terminal cleaning protocols?</h3>
                            <p className="text-slate-600">Yes. We recruit candidates with prior hospital environmental services experience and verify knowledge of infection control procedures.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">How do you handle immunization requirements (TB, Flu, Hep B)?</h3>
                            <p className="text-slate-600">We utilize our internal Labcorp/eScreen network to verify or administer Titers, TB tests, and vaccinations before the candidate steps on your campus.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you perform OIG and GSA exclusion checks?</h3>
                            <p className="text-slate-600">Yes. We run Level 3 background checks including OIG/GSA exclusion lists to ensure federal compliance for Medicare/Medicaid facilities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Supporting hospital systems in <strong className="text-white">Atlanta Medical Center</strong>, <strong className="text-white">Emory/Fulton Corridor</strong>, <strong className="text-white">Northside/Gwinnett</strong>, and <strong className="text-white">Northeast Georgia (Hall County)</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
