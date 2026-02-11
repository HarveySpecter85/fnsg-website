'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function AnimatedLogo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        /* ── WCAG: Show logo instantly when user prefers reduced motion ── */
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(iconRef.current, { autoAlpha: 1, clipPath: 'none', rotation: 0, scale: 1 })
            gsap.set(textRef.current, { autoAlpha: 1, clipPath: 'none' })
            return
        }

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

        // Initial set
        gsap.set(iconRef.current, {
            clipPath: 'circle(0% at 50% 50%)',
            rotation: -15,
            scale: 0.8,
            autoAlpha: 1
        })
        gsap.set(textRef.current, {
            clipPath: 'inset(0 100% 0 0)',
            autoAlpha: 1
        })

        // Animation Sequence
        tl.to(iconRef.current, {
            clipPath: 'circle(100% at 50% 50%)',
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: 'back.out(1.2)'
        })
            .to(textRef.current, {
                clipPath: 'inset(0 0% 0 0)',
                duration: 1,
                ease: 'power3.out'
            }, '-=0.8') // Overlap with icon animation

    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            className="flex items-center gap-3 cursor-pointer group"
        >
            {/* Icon Wrapper */}
            <div
                ref={iconRef}
                className="relative w-10 h-10 md:w-12 md:h-12 invisible transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
            >
                <Image
                    src="/brand/fnsg-icon.png"
                    alt="FNSG Icon"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Text Wrapper */}
            <div
                ref={textRef}
                className="relative h-8 w-32 md:h-10 md:w-40 invisible transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
            >
                <Image
                    src="/images/logo-text.png"
                    alt="First National Staffing"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </div>
    )
}
