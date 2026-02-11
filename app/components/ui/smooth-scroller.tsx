'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * SmoothScrollerInit — Side-effect-only component.
 * Initialises Lenis smooth scrolling and syncs it with GSAP ScrollTrigger.
 * Does NOT wrap children; placed as a sibling in the layout tree so the
 * rest of the page remains fully server-renderable (no client boundary
 * wrapping the entire tree).
 */
export function SmoothScrollerInit() {
    useEffect(() => {
        /* ── WCAG: Respect prefers-reduced-motion ── */
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (motionQuery.matches) return          // Skip Lenis entirely

        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Sync GSAP ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update)

        const tickerCallback = (time: number) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(tickerCallback)
        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
            gsap.ticker.remove(tickerCallback)
        }
    }, [])

    return null   // Renders nothing — pure side-effect
}
