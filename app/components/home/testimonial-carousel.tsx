'use client'

import { useState } from 'react'
import { FadeIn } from '@/app/components/anim/fade-in'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import clsx from 'clsx'

const testimonials = [
    {
        quote: "FNSG transformed our seasonal ramp-up. What used to take us 3 weeks now happens in 48 hours. The quality of workers has been consistently excellent.",
        author: "Operations Director",
        company: "Major Distribution Center, Atlanta",
        industry: "Warehouse",
        rating: 5,
    },
    {
        quote: "The compliance peace of mind alone is worth it. Knowing we're fully W-2 compliant with proper insurance coverage lets us focus on production, not paperwork.",
        author: "Plant Manager",
        company: "Food Processing Facility, Gainesville",
        industry: "Food Processing",
        rating: 5,
    },
    {
        quote: "We've tried other staffing agencies. FNSG is the only one that actually understands manufacturing. Their pre-vetted candidates hit the ground running.",
        author: "HR Manager",
        company: "Manufacturing Plant, Norcross",
        industry: "Manufacturing",
        rating: 5,
    },
    {
        quote: "Our fill rate went from 75% to 98% after switching to FNSG. The difference in workforce reliability has directly impacted our bottom line.",
        author: "VP of Operations",
        company: "Logistics Company, South Fulton",
        industry: "Logistics",
        rating: 5,
    },
]

export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prev = () => {
        setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
    }

    const next = () => {
        setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
    }

    const current = testimonials[currentIndex]

    return (
        <section className="relative py-20 lg:py-28 bg-slate-900/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(6, 182, 212) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                            Client Success
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Trusted by Georgia's Leaders
                        </h2>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-slate-950/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8 md:p-12">
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 left-6 w-12 h-12 text-cyan-500/20" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(current.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                                    "{current.quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-white font-medium">{current.author}</div>
                                        <div className="text-slate-400 text-sm">{current.company}</div>
                                    </div>
                                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono rounded-full">
                                        {current.industry}
                                    </span>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-slate-800">
                                <button
                                    onClick={prev}
                                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={clsx(
                                                'w-2 h-2 rounded-full transition-all',
                                                i === currentIndex
                                                    ? 'bg-cyan-500 w-6'
                                                    : 'bg-slate-600 hover:bg-slate-500'
                                            )}
                                            aria-label={`Go to testimonial ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={next}
                                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
