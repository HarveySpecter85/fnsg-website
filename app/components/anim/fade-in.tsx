'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    stagger?: number
    y?: number
    className?: string
}

export function FadeIn({ children, delay = 0, stagger = 0.1, y = 30, className = '' }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const element = ref.current
        if (!element) return

        gsap.fromTo(
            element.children,
            {
                opacity: 0,
                y: y,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: stagger,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            }
        )
    }, { scope: ref })

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}
