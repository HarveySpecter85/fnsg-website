import React from 'react';
import { TextReveal } from '@/app/components/anim/text-reveal';
import { FadeIn } from '@/app/components/anim/fade-in';
import { MagneticButton } from '@/app/components/anim/magnetic-button';
import Link from 'next/link';

interface IndustryHeroProps {
    title: string;
    subtitle: string;
    sector?: string;
    bgImage?: string;
}

export function IndustryHero({ title, subtitle, sector, bgImage }: IndustryHeroProps) {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
            {bgImage && (
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(${bgImage})` }} />
                </div>
            )}
            <div className="container relative z-10">
                <div className="max-w-4xl">
                    {sector && (
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            {sector}
                        </span>
                    )}
                    <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        {title}
                    </TextReveal>
                    <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-slate-600 mb-10 block">
                        {subtitle}
                    </TextReveal>
                    <FadeIn delay={0.5}>
                        <MagneticButton>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                Request Workforce
                            </Link>
                        </MagneticButton>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
