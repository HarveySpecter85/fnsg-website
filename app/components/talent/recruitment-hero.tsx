'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'

export function RecruitmentHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const chevronRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Animate chevron bounce
        gsap.to(chevronRef.current, {
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-slate-950">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            >
                <source
                    src="https://videos.pexels.com/video-files/5532773/5532773-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-8">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-mono text-sm tracking-wider">
                        LIVE • ACTIVELY RECRUITING
                    </span>
                </div>

                {/* Main Title */}
                <div className="overflow-hidden mb-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        <span className="block">CAREER</span>
                        <span className="block text-cyan-400">OPPORTUNITIES</span>
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="text-slate-400 font-mono text-sm md:text-base tracking-wider mb-4">
                    FIRST NATIONAL STAFFING GROUP | ACTIVELY RECRUITING
                </p>

                {/* Tagline */}
                <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-12">
                    Deploy your career with Georgia's premier industrial staffing network
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 font-mono">150+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Open Positions</div>
                    </div>
                    <div className="w-px h-12 bg-slate-700" />
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 font-mono">24h</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Avg. Placement</div>
                    </div>
                    <div className="w-px h-12 bg-slate-700" />
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 font-mono">$18+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Starting Pay</div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div ref={chevronRef} className="absolute bottom-8 flex flex-col items-center gap-2">
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll to Apply</span>
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-500/30" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30" />
        </div>
    )
}
