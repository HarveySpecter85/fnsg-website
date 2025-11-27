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

        // Split text into words or characters if needed, but for simple reveal we can just animate the element itself 
        // or wrap lines. For this specific request "text moves up from y:100% to 0%", we need a wrapper with overflow hidden.
        // Since we can't easily split text without a library like SplitType in this environment without adding more deps,
        // I will assume the children is a single block or I will wrap the content in a span that moves.

        // Actually, to do "y:100% to 0%" effectively for text, usually we wrap the text in a div with overflow hidden.

        gsap.fromTo(
            element.querySelector('.text-content'),
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
