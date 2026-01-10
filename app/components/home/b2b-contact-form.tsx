'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { FadeIn } from '@/app/components/anim/fade-in'
import { Terminal, Shield, CheckCircle, Clock, Users, Zap } from 'lucide-react'

const benefits = [
    { icon: Clock, label: '24h Response', description: 'Same-day workforce assessment' },
    { icon: Users, label: 'Pre-Vetted Talent', description: 'Background checked & drug tested' },
    { icon: Shield, label: 'Full Compliance', description: 'W-2 with $5M umbrella coverage' },
    { icon: Zap, label: 'Rapid Scale', description: 'Ramp up 50+ workers in 48hrs' },
]

export function B2BContactForm() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section id="request-workforce" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Request Your Workforce
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Tell us about your staffing needs. Our team will respond within 24 hours with a customized solution.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Benefits Column */}
                    <FadeIn delay={0.1}>
                        <div className="space-y-6">
                            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                                        <Terminal className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">FNSG OS Intelligence</h3>
                                        <p className="text-slate-500 text-sm">Workforce optimization platform</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {benefits.map((benefit, i) => {
                                        const Icon = benefit.icon
                                        return (
                                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                                <div className="p-2 bg-slate-800 rounded-lg">
                                                    <Icon className="w-5 h-5 text-cyan-400" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium">{benefit.label}</div>
                                                    <div className="text-slate-500 text-sm">{benefit.description}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                <span className="text-slate-400 text-sm">
                                    <span className="text-white font-medium">No obligation.</span> Free workforce consultation included.
                                </span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Form Column */}
                    <FadeIn delay={0.2}>
                        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <span className="text-slate-500 text-xs font-mono ml-2">
                                        FNSG OS™ | REQUEST FORM
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-400">
                                    <Shield className="w-4 h-4" />
                                    <span className="text-xs font-mono">SECURE</span>
                                </div>
                            </div>

                            {/* Form Container */}
                            <div className="relative min-h-[800px]">
                                {/* Loading State */}
                                {isLoading && (
                                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center z-10">
                                        <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4" />
                                        <span className="text-slate-400 font-mono text-sm">Initializing form...</span>
                                    </div>
                                )}

                                {/* GHL Iframe */}
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/U2DHOgSZ3bvTaycd1y9i"
                                    className="w-full border-none"
                                    style={{ minHeight: '973px' }}
                                    id="inline-U2DHOgSZ3bvTaycd1y9i"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Web FNSG CTO"
                                    data-height="973"
                                    data-layout-iframe-id="inline-U2DHOgSZ3bvTaycd1y9i"
                                    data-form-id="U2DHOgSZ3bvTaycd1y9i"
                                    title="Web FNSG CTO"
                                    onLoad={() => setIsLoading(false)}
                                />
                            </div>

                            {/* Footer */}
                            <div className="px-4 py-3 bg-slate-950/50 border-t border-slate-800 text-center">
                                <p className="text-xs text-slate-600 font-mono">
                                    Your data is encrypted and secure. | Powered by FNSG OS
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* GHL Script */}
            <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="lazyOnload"
            />
        </section>
    )
}
