'use client'

import React, { useState, useEffect } from 'react'
import { X, ArrowRight, Lock, AlertTriangle, Loader2 } from 'lucide-react'
import { submitMarketScan } from '@/app/actions/intelligence'

interface PainPointModalProps {
    industry: string
    isOpen?: boolean
    onClose?: () => void
}

export function PainPointModal({ industry, isOpen: initialIsOpen = false, onClose }: PainPointModalProps) {
    const [isOpen, setIsOpen] = useState(initialIsOpen)
    const [painPoint, setPainPoint] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [step, setStep] = useState<'input' | 'success'>('input')

    // Auto-open effect (optional, can be controlled by parent)
    useEffect(() => {
        if (initialIsOpen) {
            setIsOpen(true)
        } else {
            // Delay open for dramatic effect if not explicitly controlled
            const timer = setTimeout(() => setIsOpen(true), 3000)
            return () => clearTimeout(timer)
        }
    }, [initialIsOpen])

    const handleClose = () => {
        setIsOpen(false)
        if (onClose) onClose()
    }

    const handleSubmit = async () => {
        if (!painPoint.trim()) return

        setIsSubmitting(true)
        try {
            // We use the existing action but repurpose fields for this specific flow
            await submitMarketScan({
                industry: industry,
                location: 'Detected via IP', // Or pass as prop
                pain_point_analysis: painPoint, // The core "venting" data
                source: 'Dark Psychology Modal'
            })
            setStep('success')
        } catch (error) {
            console.error('Failed to submit:', error)
            alert('System Error. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-slate-900 border border-red-500/30 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.2)] overflow-hidden animate-in fade-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="bg-red-950/30 p-4 border-b border-red-500/20 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-red-400">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase tracking-wider">Confidential Strategy Session</span>
                    </div>
                    <button onClick={handleClose} className="text-slate-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8">
                    {step === 'input' ? (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Critical Analysis Required
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    What is the <span className="text-red-500">single biggest threat</span> to your operations right now?
                                </h2>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Is it internal process failure? External market pressure? Or a specific workforce bottleneck?
                                    <br /><br />
                                    <span className="text-slate-300 italic">Be brutally honest. The AI needs the truth to build your defense strategy.</span>
                                </p>
                            </div>

                            <textarea
                                value={painPoint}
                                onChange={(e) => setPainPoint(e.target.value)}
                                placeholder="e.g., High turnover in the night shift is causing 20% production loss and safety incidents..."
                                className="w-full h-32 bg-slate-950 border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all resize-none font-mono text-sm"
                            />

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting || !painPoint.trim()}
                                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        GENERATE COUNTER-STRATEGY
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    ) : (
                        <div className="text-center space-y-6 py-8">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                                <Lock className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Analysis Initiated</h3>
                                <p className="text-slate-400 max-w-xs mx-auto">
                                    Our Intelligence Engine is processing your input. A comprehensive strategy deck is being generated and will be sent to your inbox shortly.
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-slate-500 hover:text-white text-sm font-mono underline underline-offset-4"
                            >
                                Close Terminal
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Decoration */}
                <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-500 to-red-900 opacity-50" />
            </div>
        </div>
    )
}
