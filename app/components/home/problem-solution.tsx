'use client'

import { FadeIn } from '@/app/components/anim/fade-in'
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle, Users, Clock, ShieldCheck } from 'lucide-react'

const comparisons = [
    {
        problem: {
            icon: AlertTriangle,
            label: 'High Turnover',
            stat: '67%',
            description: 'Average industry turnover drains resources',
        },
        solution: {
            icon: Users,
            label: 'Talent Retention',
            stat: '23%',
            description: 'Our retention rate with pre-vetted talent pool',
        },
        color: 'from-red-500 to-orange-500',
        solutionColor: 'from-emerald-500 to-teal-500',
    },
    {
        problem: {
            icon: Clock,
            label: 'Slow Hiring',
            stat: '3-4 weeks',
            description: 'Traditional hiring timeline per position',
        },
        solution: {
            icon: TrendingUp,
            label: 'Rapid Deployment',
            stat: '24 hours',
            description: 'Average time to fill with FNSG',
        },
        color: 'from-amber-500 to-yellow-500',
        solutionColor: 'from-cyan-500 to-blue-500',
    },
    {
        problem: {
            icon: TrendingDown,
            label: 'Compliance Risk',
            stat: '$15K+',
            description: 'Average cost per misclassification violation',
        },
        solution: {
            icon: ShieldCheck,
            label: 'Full Protection',
            stat: '100%',
            description: 'W-2 compliant with $5M umbrella coverage',
        },
        color: 'from-rose-500 to-pink-500',
        solutionColor: 'from-purple-500 to-indigo-500',
    },
]

export function ProblemSolution() {
    return (
        <section className="relative py-20 lg:py-28 bg-slate-950">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                            The Workforce Gap
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            From Problem to <span className="text-cyan-400">Solution</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            See how Georgia's leading employers are transforming their workforce operations.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {comparisons.map((item, index) => {
                        const ProblemIcon = item.problem.icon
                        const SolutionIcon = item.solution.icon

                        return (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group">
                                    {/* Problem Side */}
                                    <div className="mb-6 pb-6 border-b border-slate-800">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20`}>
                                                <ProblemIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">
                                                {item.problem.label}
                                            </span>
                                        </div>
                                        <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                                            {item.problem.stat}
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            {item.problem.description}
                                        </p>
                                    </div>

                                    {/* Arrow Indicator */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-3 bg-slate-950 px-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                            <TrendingUp className="w-4 h-4 text-cyan-400" />
                                        </div>
                                    </div>

                                    {/* Solution Side */}
                                    <div className="pt-2">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${item.solutionColor} bg-opacity-20`}>
                                                <SolutionIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
                                                {item.solution.label}
                                            </span>
                                        </div>
                                        <div className={`text-3xl font-bold bg-gradient-to-r ${item.solutionColor} bg-clip-text text-transparent mb-2`}>
                                            {item.solution.stat}
                                        </div>
                                        <p className="text-sm text-slate-400">
                                            {item.solution.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
