'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image, { ImageProps } from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps extends Omit<ImageProps, 'className'> {
    containerClassName?: string
    imageClassName?: string
    speed?: number // 1 is normal scroll, 0.5 is slower, etc.
}

export function ParallaxImage({ containerClassName = '', imageClassName = '', speed = 0.5, ...props }: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        const container = containerRef.current
        const image = imageRef.current
        if (!container || !image) return

        /* ── WCAG: Skip parallax when user prefers reduced motion ── */
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(image, { y: '0%' })
            return
        }

        gsap.fromTo(
            image,
            {
                y: '-10%', // Start slightly shifted up
            },
            {
                y: '10%', // Move down as we scroll
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        )
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={`overflow-hidden relative ${containerClassName}`}>
            <div ref={imageRef as any} className="h-[120%] w-full -mt-[10%]"> {/* Make image taller than container */}
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                    className={`object-cover w-full h-full ${imageClassName}`}
                    {...props}
                />
            </div>
        </div>
    )
}
