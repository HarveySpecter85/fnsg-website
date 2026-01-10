'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import CountUp from 'react-countup'
import { Calculator, Download, TrendingUp, DollarSign, Clock, Settings2 } from 'lucide-react'
import { FadeIn } from '@/app/components/anim/fade-in'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'

// --- Industry Benchmarks ---
const INDUSTRY_DATA = {
    "Warehouse & Logistics": {
        avgWage: 19.50,
        turnoverRate: 0.46,
        costPerHire: 2500,
        efficiencyLoss: 0.20
    },
    "Manufacturing & Production": {
        avgWage: 18.25,
        turnoverRate: 0.38,
        costPerHire: 3200,
        efficiencyLoss: 0.25
    },
    "Hospitality & Events": {
        avgWage: 17.25,
        turnoverRate: 0.73,
        costPerHire: 1500,
        efficiencyLoss: 0.15
    },
    "Food & Beverage Production": {
        avgWage: 18.50,
        turnoverRate: 0.55,
        costPerHire: 2800,
        efficiencyLoss: 0.22
    },
    "Agriculture & Nursery": {
        avgWage: 14.68,
        turnoverRate: 0.60,
        costPerHire: 1200,
        efficiencyLoss: 0.18
    },
    "Healthcare Support & EVS": {
        avgWage: 17.00,
        turnoverRate: 0.30,
        costPerHire: 2200,
        efficiencyLoss: 0.15
    },
    "Recycling & Waste Mgmt": {
        avgWage: 16.50,
        turnoverRate: 0.65,
        costPerHire: 1800,
        efficiencyLoss: 0.25
    }
}

type IndustryKey = keyof typeof INDUSTRY_DATA

function ROISimulatorContent() {
    const searchParams = useSearchParams()

    // --- State ---
    // Initialize from URL params if available, otherwise default
    const [industry, setIndustry] = useState<IndustryKey>(() => {
        const paramIndustry = searchParams.get('industry')
        if (paramIndustry) {
            // 1. Try exact match
            if (Object.keys(INDUSTRY_DATA).includes(paramIndustry)) {
                return paramIndustry as IndustryKey
            }
            // 2. Try partial match (e.g. "Manufacturing" -> "Manufacturing & Production")
            const partialMatch = Object.keys(INDUSTRY_DATA).find(key =>
                key.toLowerCase().includes(paramIndustry.toLowerCase()) ||
                paramIndustry.toLowerCase().includes(key.toLowerCase())
            )
            if (partialMatch) return partialMatch as IndustryKey
        }
        return 'Warehouse & Logistics'
    })

    const [headcount, setHeadcount] = useState(50)

    const [wage, setWage] = useState(() => {
        const paramWage = searchParams.get('wage')
        return paramWage ? parseFloat(paramWage) : 19.50
    })

    // Update wage when industry changes ONLY if not manually set via URL initially?
    // Actually, the original logic was:
    // React.useEffect(() => { setWage(INDUSTRY_DATA[industry].avgWage) }, [industry])
    // This overrides the URL param immediately if we are not careful.
    // Let's modify the effect to only update if industry changes AFTER mount.

    // We'll use a ref to track if it's the initial mount
    const isFirstMount = React.useRef(true)

    React.useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false
            return
        }
        setWage(INDUSTRY_DATA[industry].avgWage)
    }, [industry])

    // --- Calculations ---
    const metrics = useMemo(() => {
        const data = INDUSTRY_DATA[industry]

        // Current State (Client managing internally)
        const annualPayroll = headcount * wage * 2080 // 2080 hours/year
        const turnoverCost = headcount * data.turnoverRate * data.costPerHire
        const productivityLoss = annualPayroll * data.efficiencyLoss * data.turnoverRate // Loss due to churn
        const totalBurn = annualPayroll + turnoverCost + productivityLoss

        // Optimized State (FNSG Partnership)
        // We reduce turnover by 40% and eliminate internal hiring costs
        const optimizedTurnoverRate = data.turnoverRate * 0.60
        const optimizedTurnoverCost = 0 // We absorb this
        const optimizedProductivityLoss = annualPayroll * data.efficiencyLoss * optimizedTurnoverRate
        // Staffing markup covers admin, but we save on the hidden costs
        // For simplicity in this model, we compare total cost of ownership
        const totalOptimized = annualPayroll + optimizedProductivityLoss + (turnoverCost * 0.1) // Small friction remains

        const savings = totalBurn - totalOptimized
        const efficiencyGainHours = (productivityLoss - optimizedProductivityLoss) / wage

        return {
            totalBurn,
            totalOptimized,
            savings,
            efficiencyGainHours
        }
    }, [industry, headcount, wage])

    const chartData = [
        { name: 'Current Model', value: metrics.totalBurn, color: '#334155' }, // Slate-700
        { name: 'FNSG Optimized', value: metrics.totalOptimized, color: '#2563eb' } // Blue-600
    ]

    // --- Formatters ---
    const formatCurrency = (value: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

    return (
        <main className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-900">
            {/* Technical Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.4 }}>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">

                {/* Header */}
                <header className="mb-12 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-bold mb-6 tracking-wider uppercase">
                        <Calculator className="w-3 h-3" />
                        Financial Modeling v2.5
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Workforce ROI Simulator
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Real-time financial modeling based on Georgia labor market benchmarks.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Panel: Simulation Controls */}
                    <div className="lg:col-span-4 space-y-6">
                        <FadeIn delay={0.1}>
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold border-b border-slate-100 pb-4">
                                    <Settings2 className="w-5 h-5 text-blue-600" />
                                    <span>Simulation Parameters</span>
                                </div>

                                {/* Industry Selector */}
                                <div className="mb-8">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Industry Sector</label>
                                    <div className="flex flex-col gap-2">
                                        {(Object.keys(INDUSTRY_DATA) as IndustryKey[]).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => setIndustry(key)}
                                                className={clsx(
                                                    "px-4 py-3 rounded-lg text-sm font-medium text-left transition-all border",
                                                    industry === key
                                                        ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
                                                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                                                )}
                                            >
                                                {key}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Sliders */}
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-sm font-medium text-slate-700">Workforce Headcount</label>
                                            <span className="font-mono text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded text-sm">{headcount} Workers</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="10"
                                            max="500"
                                            step="5"
                                            value={headcount}
                                            onChange={(e) => setHeadcount(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-sm font-medium text-slate-700">Average Hourly Wage</label>
                                            <span className="font-mono text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded text-sm">${wage.toFixed(2)}/hr</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="12"
                                            max="45"
                                            step="0.50"
                                            value={wage}
                                            onChange={(e) => setWage(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Benchmark Info */}
                        <FadeIn delay={0.2}>
                            <div className="bg-slate-100/50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 font-mono">
                                <p className="mb-2 uppercase tracking-wider font-bold text-slate-400">Active Benchmarks</p>
                                <div className="flex justify-between py-1 border-b border-slate-200/50">
                                    <span>Turnover Rate:</span>
                                    <span>{(INDUSTRY_DATA[industry].turnoverRate * 100).toFixed(0)}%</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span>Cost Per Hire:</span>
                                    <span>${INDUSTRY_DATA[industry].costPerHire}</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Panel: Dashboard */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FadeIn delay={0.2}>
                                <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <TrendingUp className="w-12 h-12 text-red-600" />
                                    </div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Annual Burn Rate</p>
                                    <div className="text-2xl lg:text-3xl font-mono font-bold text-red-600">
                                        <CountUp
                                            end={metrics.totalBurn}
                                            prefix="$"
                                            separator=","
                                            duration={1}
                                            preserveValue={true}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">Total Cost of Ownership</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="bg-white/80 backdrop-blur-md border-l-4 border-emerald-500 rounded-xl p-6 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <DollarSign className="w-12 h-12 text-emerald-600" />
                                    </div>
                                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Projected Savings</p>
                                    <div className="text-2xl lg:text-3xl font-mono font-bold text-emerald-600">
                                        <CountUp
                                            end={metrics.savings}
                                            prefix="$"
                                            separator=","
                                            duration={1}
                                            preserveValue={true}
                                        />
                                    </div>
                                    <p className="text-xs text-emerald-600/60 mt-2">Optimized with FNSG</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Clock className="w-12 h-12 text-slate-600" />
                                    </div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Efficiency Gain</p>
                                    <div className="text-2xl lg:text-3xl font-mono font-bold text-slate-700">
                                        <CountUp
                                            end={metrics.efficiencyGainHours}
                                            suffix=" hrs"
                                            separator=","
                                            duration={1}
                                            preserveValue={true}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">Productivity Recaptured</p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Chart Area */}
                        <FadeIn delay={0.5}>
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-8 shadow-sm h-[400px] flex flex-col">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Cost Comparison Analysis</h3>
                                <div className="flex-grow w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                                                dy={10}
                                            />
                                            <YAxis
                                                hide={true}
                                            />
                                            <Tooltip
                                                cursor={{ fill: 'transparent' }}
                                                content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        return (
                                                            <div className="bg-slate-900 text-white text-xs p-3 rounded shadow-xl font-mono">
                                                                <p className="mb-1 text-slate-400">{payload[0].payload.name}</p>
                                                                <p className="text-lg font-bold">{formatCurrency(payload[0].value as number)}</p>
                                                            </div>
                                                        )
                                                    }
                                                    return null
                                                }}
                                            />
                                            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={80}>
                                                {chartData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <Download className="w-4 h-4" />
                        Export Analysis (PDF)
                    </button>
                    <p className="mt-4 text-xs text-slate-400">
                        *Estimates based on average Georgia labor market data. Actual results may vary.
                    </p>
                </div>

            </div>
        </main>
    )
}

export default function ROISimulatorPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="animate-pulse text-slate-400">Loading Simulator...</div></div>}>
            <ROISimulatorContent />
        </React.Suspense>
    )
}
