'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
    children: React.ReactNode
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export function TextReveal({ children, className = '', as: Component = 'h1' }: TextRevealProps) {
    const ref = useRef<HTMLElement>(null)

    useGSAP(() => {
        const element = ref.current
        if (!element) return

        const textContent = element.querySelector('.text-content')
        if (!textContent) return

        /* ── WCAG: Skip animation when user prefers reduced motion ── */
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(textContent, { y: '0%' })
            return
        }

        gsap.fromTo(
            textContent,
            {
                y: '100%',
            },
            {
                y: '0%',
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                },
            }
        )
    }, { scope: ref })

    return (
        <Component ref={ref as any} className={`overflow-hidden ${className}`}>
            <span className="text-content block">
                {children}
            </span>
        </Component>
    )
}
