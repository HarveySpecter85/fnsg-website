'use client'

import { useState } from 'react'
import { FadeIn } from '@/app/components/anim/fade-in'
import Link from 'next/link'
import { Warehouse, Factory, UtensilsCrossed, Recycle, Leaf, Heart, PartyPopper, ArrowRight } from 'lucide-react'
import clsx from 'clsx'

const industries = [
    {
        id: 'warehouse',
        label: 'Warehouse & Logistics',
        icon: Warehouse,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        roles: ['Forklift Operators', 'Pickers/Packers', 'Shipping Clerks'],
        href: '/industries/warehouse-logistics-staffing',
    },
    {
        id: 'manufacturing',
        label: 'Manufacturing',
        icon: Factory,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        roles: ['Assembly Technicians', 'Machine Operators', 'Quality Control'],
        href: '/industries/manufacturing-production-staffing',
    },
    {
        id: 'food',
        label: 'Food & Beverage',
        icon: UtensilsCrossed,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
        roles: ['Production Line', 'Sanitation', 'Packaging Specialists'],
        href: '/industries/food-beverage-production',
    },
    {
        id: 'recycling',
        label: 'Recycling & Waste',
        icon: Recycle,
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
        roles: ['Sorters', 'Equipment Operators', 'Route Assistants'],
        href: '/industries/recycling-waste-management-staffing',
    },
    {
        id: 'agriculture',
        label: 'Agriculture & Nursery',
        icon: Leaf,
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
        roles: ['Farmworkers', 'Greenhouse Staff', 'Harvest Crews'],
        href: '/industries/agriculture-nursery-staffing',
    },
    {
        id: 'healthcare',
        label: 'Healthcare Support',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
        roles: ['CNAs', 'Environmental Services', 'Dietary Aides'],
        href: '/industries/healthcare-support-staffing',
    },
    {
        id: 'hospitality',
        label: 'Hospitality & Events',
        icon: PartyPopper,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
        roles: ['Banquet Staff', 'Event Setup', 'Catering Support'],
        href: '/industries/hospitality-events-staffing',
    },
]

export function IndustrySelectorB2B() {
    const [activeIndustry, setActiveIndustry] = useState('warehouse')
    const active = industries.find(i => i.id === activeIndustry) || industries[0]

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            {/* Dynamic Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-20"
                style={{ backgroundImage: `url(${active.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                            Industry Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Specialized Workforce Solutions
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Deep expertise across Georgia's core industrial sectors.
                        </p>
                    </div>
                </FadeIn>

                {/* Industry Tabs - Grid for all 7 (semantic links for SEO) */}
                <FadeIn delay={0.1}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-12">
                        {industries.map((industry) => {
                            const Icon = industry.icon
                            const isActive = activeIndustry === industry.id

                            return (
                                <Link
                                    key={industry.id}
                                    href={industry.href}
                                    onMouseEnter={() => setActiveIndustry(industry.id)}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setActiveIndustry(industry.id)
                                    }}
                                    className={clsx(
                                        'flex flex-col items-center gap-2 px-4 py-4 rounded-xl font-medium transition-all duration-300',
                                        isActive
                                            ? 'bg-cyan-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.4)]'
                                            : 'bg-slate-900/60 text-slate-400 border border-slate-700 hover:border-cyan-500/50 hover:text-white'
                                    )}
                                    aria-label={`View ${industry.label} staffing solutions`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-xs text-center leading-tight">{industry.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </FadeIn>

                {/* Active Industry Card */}
                <FadeIn delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href={active.href}
                            className="block group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all cursor-pointer">
                                {/* Image */}
                                <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src={active.image}
                                        alt={active.label}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {active.label}
                                        </h3>
                                        <p className="text-slate-400">
                                            Pre-vetted, job-ready talent for your {active.label.toLowerCase()} operations.
                                        </p>
                                    </div>

                                    <div>
                                        <span className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3 block">
                                            Common Roles
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {active.roles.map((role, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full"
                                                >
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 font-medium transition-colors">
                                        View {active.label.split(' ')[0]} Solutions
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
