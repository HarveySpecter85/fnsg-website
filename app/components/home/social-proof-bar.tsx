'use client'

import { FadeIn } from '@/app/components/anim/fade-in'
import { Shield, Award, CheckCircle } from 'lucide-react'

const certifications = [
    { label: 'MSPA Certified', icon: Shield },
    { label: 'E-Verify Partner', icon: CheckCircle },
    { label: 'ACA Compliant', icon: Award },
]

export function SocialProofBar() {
    return (
        <section className="relative py-6 bg-slate-900/80 border-y border-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Trust Statement */}
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-slate-400 text-sm font-mono">
                            Trusted by <span className="text-white font-bold">150+</span> Georgia employers
                        </span>
                    </div>

                    {/* Center: Certifications */}
                    <div className="flex items-center gap-6">
                        {certifications.map((cert, i) => {
                            const Icon = cert.icon
                            return (
                                <div key={i} className="flex items-center gap-2 text-slate-500">
                                    <Icon className="w-4 h-4" />
                                    <span className="text-xs font-mono uppercase tracking-wider">{cert.label}</span>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right: Industries */}
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                        <span>WAREHOUSE</span>
                        <span className="text-slate-700">•</span>
                        <span>MANUFACTURING</span>
                        <span className="text-slate-700">•</span>
                        <span>FOOD PROCESSING</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
