'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown, Terminal, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function VideoHeroB2B() {
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

        // Stagger fade in for hero content
        gsap.fromTo(
            '.hero-animate',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.3, ease: 'power3.out' }
        )
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-slate-950">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            >
                <source
                    src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Status Badge */}
                <div className="hero-animate flex items-center gap-2 mb-8">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-mono text-sm tracking-wider">
                        SYSTEM OPERATIONAL • v2025.1
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="hero-animate text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                    <span className="block">Deploy Talent at the</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Speed of Demand.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="hero-animate text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                    Georgia's first Workforce Operations Intelligence Platform.
                    Optimize headcount, mitigate risk, and scale instantly with W-2 compliant labor.
                </p>

                {/* Stats Row */}
                <div className="hero-animate flex items-center gap-6 md:gap-12 mb-10">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">150+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Georgia Clients</div>
                    </div>
                    <div className="w-px h-10 bg-slate-700" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">24h</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Avg. Deployment</div>
                    </div>
                    <div className="w-px h-10 bg-slate-700" />
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">98%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Fill Rate</div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="hero-animate flex flex-wrap justify-center gap-4">
                    <Link
                        href="#request-workforce"
                        className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] flex items-center gap-2 group"
                    >
                        <Terminal className="w-5 h-5" />
                        Request Workforce
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/data-insights/return-on-staffing-roi-model"
                        className="px-8 py-4 bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 text-white font-medium rounded-lg transition-all flex items-center gap-2"
                    >
                        Calculate Your ROI
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div ref={chevronRef} className="absolute bottom-8 flex flex-col items-center gap-2">
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Explore</span>
                    <ChevronDown className="w-6 h-6 text-cyan-400" />
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-500/20" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-500/20" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-500/20" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/20" />
        </div>
    )
}
