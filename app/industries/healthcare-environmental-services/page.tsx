import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { ShieldAlert, Stethoscope, CheckCircle, Clock, HeartPulse, UserCheck, AlertTriangle } from 'lucide-react';

export const metadata = {
    title: "Healthcare Environmental Services (EVS) Staffing in Georgia | FNSG OS",
    description: "EVS and Healthcare support staffing powered by Workforce Intelligence including terminal cleaning, isolation-room cleaning, PPE compliance, and audit-ready sanitation documentation for hospitals and medical facilities.",
    openGraph: {
        title: "Healthcare Environmental Services (EVS) Staffing",
        url: "https://firstnationalstaffing.com/industries/healthcare-environmental-services",
        type: "website"
    }
};

export default function HealthcareEVSPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Healthcare Environmental Services (EVS) Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "EVS and Healthcare support staffing powered by Workforce Intelligence including terminal cleaning, isolation-room cleaning, PPE compliance, and audit-ready sanitation documentation for hospitals and medical facilities.",
        "url": "https://firstnationalstaffing.com/industries/healthcare-environmental-services"
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="healthcare-evs-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Industries', href: '/industries' },
                            { label: 'Healthcare EVS', href: '/industries/healthcare-environmental-services' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Healthcare Environmental Services Staffing in Georgia — Powered by FNSG OS</h1>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    Hospital cleaning quality is not a &quot;janitorial&quot; role: it is a critical patient safety function.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    The performance of an EVS team directly affects: infection control, patient satisfaction scores (HCAHPS), hospital compliance, safety, operational risk, patient flow, and clinical outcomes.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600">FNSG OS provides highly reliable, trained, and audit-ready EVS teams.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in EVS & Healthcare Facilities</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <ShieldAlert className="w-5 h-5" /> Infection Control is Non-Negotiable
                                        </h3>
                                        <p className="text-red-800 text-sm">Micro-errors generate biological risk: MRSA, C. diff, viral spreads, and surface contamination.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <CheckCircle className="w-5 h-5" /> Strict Protocols & Training Requirements
                                        </h3>
                                        <p className="text-red-800 text-sm">Staff must follow 100%: EPA-approved disinfectants, terminal cleaning protocols, isolation procedures (contact, airborne, droplet), PPE usage, and biohazard waste handling.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> Healthcare Audits (Joint Commission / DNV / AHCA)
                                        </h3>
                                        <p className="text-red-800 text-sm">EVS failures can cause: citations, fines, and loss of accreditation.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Clock className="w-5 h-5" /> 24/7 Operations
                                        </h3>
                                        <p className="text-red-800 text-sm">Overnight shifts are extremely difficult to cover.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <HeartPulse className="w-5 h-5" /> Emotional & Psychological Load
                                        </h3>
                                        <p className="text-red-800 text-sm">Areas exposed to critical patients lead to high burnout.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <UserCheck className="w-5 h-5" /> Security + Patient Interaction Sensitivity
                                        </h3>
                                        <p className="text-red-800 text-sm">Staff must be trustworthy, professional, and trained.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Stethoscope className="w-5 h-5" /> Staffing Shortages
                                        </h3>
                                        <p className="text-red-800 text-sm">EVS is one of the HARDEST positions to recruit in hospitals.</p>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG OS Solves These Problems */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG OS Solves These Problems</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">EVS Certification Matching</h3>
                                            <p className="text-slate-600 mt-2">
                                                We assign staff with: EVS experience, prior training, knowledge of hospital protocols, and adequate emotional tolerance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Compliance & Infection Control OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Includes: training logs, PPE verification, chemical compliance, isolation-room documentation, EVS task validation, and audit-ready performance records.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                We predict absences by: shift, location, emotional stress, hospital demand, weather, and fatigue.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management for Hospitals</h3>
                                            <p className="text-slate-600 mt-2">
                                                Applies to: Hospitals, Ambulatory centers, Senior Living, Clinics, and Rehab centers. Direct supervision for: EVS checklists, digital signatures, room rotations, internal audits, and inspection support.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Staffing for Outbreak Response</h3>
                                            <p className="text-slate-600 mt-2">
                                                Rapid coverage for: internal outbreaks, census surges, weather emergencies, and infection season expansions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Healthcare EVS</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-900 text-white font-semibold">
                                            <tr>
                                                <th className="p-4 border-b border-slate-700">KPI</th>
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG OS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr><td className="p-4 font-medium text-slate-900">Attendance Reliability</td><td className="p-4 text-green-600 font-bold">+10–22%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Infection Control Compliance</td><td className="p-4 text-green-600 font-bold">+15–40%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Terminal-Clean Accuracy</td><td className="p-4 text-green-600 font-bold">+10–20%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Audit Readiness Score</td><td className="p-4 text-green-600 font-bold">+20–35%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Staff Retention</td><td className="p-4 text-green-600 font-bold">+12–25%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Roles We Staff */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in EVS & Healthcare Support</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">EVS Core</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• EVS Technicians</li>
                                            <li>• Terminal Cleaning Staff</li>
                                            <li>• Floor Technicians</li>
                                            <li>• Biohazard Response Assistants</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Healthcare Facility Support</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Laundry Technicians</li>
                                            <li>• Patient Transport</li>
                                            <li>• Housekeeping Supervisors</li>
                                            <li>• Disinfection Specialists</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Specialized Roles</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Isolation Room Cleaning Teams</li>
                                            <li>• OR (Operating Room) Turnover Assistants</li>
                                            <li>• Deep-Clean Crews</li>
                                            <li>• Joint Commission Prep Teams</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Compliance & Safety Layer */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">Compliance & Safety Layer</h2>
                                <p className="mb-6 text-slate-300">
                                    FNSG OS documents and supports compliance in:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>OSHA Healthcare</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Bloodborne Pathogens Standard (1910.1030)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>HazCom</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>PPE protocols</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>HACCP-like environmental protocols</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Joint Commission EVS standards</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>EPA disinfectant regulations</span>
                                    </div>
                                </div>
                                <p className="mt-6 text-slate-300 font-medium border-t border-slate-700 pt-4">
                                    Continuous training + pre-inspection audits.
                                </p>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do your EVS workers have experience in hospitals?", a: "Yes, we prioritize EVS background." },
                                        { q: "Can you support terminal cleaning?", a: "Yes, with validated training and digital checklists." },
                                        { q: "Do you assist during audits?", a: "Yes, with documentation and traceability." },
                                        { q: "Do you provide bilingual EVS teams?", a: "Yes, EN/ES." },
                                        { q: "Can you staff 24/7 operations?", a: "Yes, with Attendance OS and 3-shift models." },
                                        { q: "Do you supply EVS supervisors?", a: "Yes, with proven experience and hospital training." }
                                    ].map((faq, index) => (
                                        <details key={index} className="group border border-slate-200 rounded-lg p-4 open:bg-slate-50 transition-all">
                                            <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                                                {faq.q}
                                                <span className="transition group-open:rotate-180">▼</span>
                                            </summary>
                                            <p className="text-slate-600 mt-3 text-sm">{faq.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="py-8 border-t border-slate-200">
                                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="/contact?industry=healthcare-evs"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request an EVS Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/healthcare-evs-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download the 2025 Healthcare EVS Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
