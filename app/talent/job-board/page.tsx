import type { Metadata } from 'next'
import { RecruitmentHero } from '@/app/components/talent/recruitment-hero'
import { TalentTerminal } from '@/app/components/talent/talent-terminal'
import { IndustrySelector } from '@/app/components/talent/industry-selector'
import { ShiftLocationSelector } from '@/app/components/talent/shift-selector'
import { GHLApplicationForm } from '@/app/components/talent/ghl-application-form'
import { FadeIn } from '@/app/components/anim/fade-in'

export const metadata: Metadata = {
    title: "Career Opportunities | Apply Now | First National Staffing",
    description: "Join Georgia's premier industrial workforce. Immediate placement for Warehouse, Manufacturing, Hospitality, and Healthcare roles. W-2 employment, weekly pay, full benefits.",
    openGraph: {
        title: "Career Opportunities | First National Staffing Group",
        description: "Deploy your career with Georgia's premier industrial staffing network. 150+ open positions, 24h average placement.",
        type: "website",
    }
}

export default function JobBoardPage() {
    return (
        <main className="bg-slate-950 min-h-screen">
            {/* Immersive Hero */}
            <RecruitmentHero />

            {/* Mission Selection Terminal */}
            <section className="relative py-16 lg:py-24">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />

                <div className="container relative z-10">
                    <FadeIn>
                        <TalentTerminal title="MISSION CONTROL" className="max-w-5xl mx-auto">
                            <div className="space-y-10">
                                {/* Industry Selector */}
                                <IndustrySelector />

                                {/* Divider */}
                                <div className="border-t border-slate-800" />

                                {/* Shift & Location */}
                                <ShiftLocationSelector />
                            </div>
                        </TalentTerminal>
                    </FadeIn>
                </div>
            </section>

            {/* Application Form Terminal */}
            <section className="relative py-16 lg:py-24 bg-slate-900/50">
                <div className="container">
                    <FadeIn delay={0.2}>
                        <TalentTerminal title="APPLICANT DATA COLLECTION" className="max-w-4xl mx-auto">
                            <GHLApplicationForm />
                        </TalentTerminal>
                    </FadeIn>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 border-t border-slate-800">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-slate-500 font-mono text-sm mb-4">
                            FIRST NATIONAL STAFFING GROUP
                        </p>
                        <p className="text-slate-400 text-sm">
                            Your information is encrypted and transmitted securely. We are committed to protecting your privacy and ensuring a safe job search experience.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
