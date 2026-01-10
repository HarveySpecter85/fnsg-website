'use client'

import { FadeIn } from '@/app/components/anim/fade-in'
import { MapPin, Phone, Building2 } from 'lucide-react'
import Link from 'next/link'

const locations = [
    {
        name: 'Atlanta HQ',
        address: '730 Peachtree St NE, Suite 570',
        city: 'Atlanta, GA 30308',
        isHQ: true,
    },
    {
        name: 'Gainesville',
        address: '100 Main St SW',
        city: 'Gainesville, GA 30501',
        isHQ: false,
    },
]

const serviceAreas = [
    'Atlanta Metro',
    'Gainesville',
    'Duluth',
    'Norcross',
    'South Fulton',
    'Savannah',
    'Lawrenceville',
    'Marietta',
    'Alpharetta',
    'Kennesaw',
]

export function GeorgiaMap() {
    return (
        <section className="relative py-20 lg:py-28 bg-slate-950">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                            Coverage Area
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Serving All of Georgia
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Two strategic locations. Statewide workforce deployment capabilities.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map Visual */}
                    <FadeIn delay={0.1}>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Georgia Outline SVG */}
                            <svg
                                viewBox="0 0 400 500"
                                className="w-full h-full"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Simplified Georgia state outline */}
                                <path
                                    d="M50 50 L350 50 L380 100 L350 480 L280 490 L200 450 L100 470 L50 400 L30 200 Z"
                                    fill="url(#georgiaGradient)"
                                    stroke="rgba(6, 182, 212, 0.3)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient id="georgiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
                                        <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                                    </linearGradient>
                                </defs>

                                {/* Atlanta Marker */}
                                <circle cx="200" cy="150" r="8" className="fill-cyan-500 animate-pulse" />
                                <circle cx="200" cy="150" r="20" className="fill-cyan-500/20" />
                                <text x="220" y="155" className="fill-white text-sm font-medium">Atlanta HQ</text>

                                {/* Gainesville Marker */}
                                <circle cx="230" cy="100" r="6" className="fill-emerald-500" />
                                <circle cx="230" cy="100" r="15" className="fill-emerald-500/20" />
                                <text x="250" y="105" className="fill-slate-400 text-xs">Gainesville</text>

                                {/* Service Area Dots */}
                                <circle cx="150" cy="180" r="3" className="fill-slate-500" />
                                <circle cx="250" cy="160" r="3" className="fill-slate-500" />
                                <circle cx="180" cy="200" r="3" className="fill-slate-500" />
                                <circle cx="220" cy="190" r="3" className="fill-slate-500" />
                                <circle cx="280" cy="250" r="3" className="fill-slate-500" />
                                <circle cx="100" cy="300" r="3" className="fill-slate-500" />
                            </svg>

                            {/* Glow Effect */}
                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                        </div>
                    </FadeIn>

                    {/* Location Cards */}
                    <FadeIn delay={0.2}>
                        <div className="space-y-6">
                            {/* Office Locations */}
                            {locations.map((loc, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg ${loc.isHQ ? 'bg-cyan-500/10' : 'bg-slate-800'}`}>
                                            <Building2 className={`w-6 h-6 ${loc.isHQ ? 'text-cyan-400' : 'text-slate-400'}`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white font-medium">{loc.name}</h3>
                                                {loc.isHQ && (
                                                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-mono rounded">
                                                        HQ
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-slate-400 text-sm">{loc.address}</p>
                                            <p className="text-slate-500 text-sm">{loc.city}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Phone */}
                            <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <Phone className="w-5 h-5 text-cyan-400" />
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Call Us</div>
                                    <a href="tel:470-470-4243" className="text-white font-mono hover:text-cyan-400 transition-colors">
                                        470-470-4243
                                    </a>
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Service Areas
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {serviceAreas.map((area, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-slate-800/50 text-slate-400 text-sm rounded-full border border-slate-700"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
