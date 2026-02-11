'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { Lock, Shield, CheckCircle } from 'lucide-react'

export function GHLApplicationForm() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate iframe load time
        const timer = setTimeout(() => setIsLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="space-y-6">
            {/* Form Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-xs tracking-wider">04</span>
                    <span className="text-slate-300 font-medium">SUBMIT YOUR APPLICATION</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs font-mono">SECURE</span>
                </div>
            </div>

            {/* Form Container */}
            <div className="relative bg-slate-900/30 rounded-xl border border-slate-700 overflow-hidden min-h-[800px]">
                {/* Loading State */}
                {isLoading && (
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center z-10">
                        <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4" />
                        <span className="text-slate-400 font-mono text-sm">Initializing secure form...</span>
                    </div>
                )}

                {/* GHL Iframe */}
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/ln9MZIydyVxYQ3czpUgY"
                    className="w-full border-none"
                    style={{ minHeight: '1600px' }}
                    id="inline-ln9MZIydyVxYQ3czpUgY"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Job Seeker Lead Generator"
                    data-height="1592"
                    data-layout-iframe-id="inline-ln9MZIydyVxYQ3czpUgY"
                    data-form-id="ln9MZIydyVxYQ3czpUgY"
                    title="Job Application Form — First National Staffing Group"
                    allow="camera; microphone"
                    onLoad={() => setIsLoading(false)}
                />
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: CheckCircle, label: 'W-2 Employment', color: 'text-emerald-400' },
                    { icon: Shield, label: 'Weekly Pay', color: 'text-blue-400' },
                    { icon: CheckCircle, label: 'No Fees Ever', color: 'text-emerald-400' },
                    { icon: Shield, label: 'Full Benefits', color: 'text-blue-400' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-slate-900/30 rounded-lg border border-slate-800">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="text-xs text-slate-400 font-mono">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-600 font-mono">
                    Your data is encrypted and secure
                </p>
            </div>

            {/* GHL Script */}
            <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="lazyOnload"
            />
        </div>
    )
}
