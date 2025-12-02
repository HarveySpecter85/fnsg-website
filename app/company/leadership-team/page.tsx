import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { LEADERSHIP_TEAM } from '@/lib/site-config'
import { Linkedin, ArrowRight } from 'lucide-react'
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs'

export const metadata: Metadata = {
    title: "Leadership Team | First National Staffing Group",
    description: "Meet the executives driving FNSG's vision of enterprise-grade staffing and client-first compliance.",
}

export default function LeadershipTeamPage() {
    return (
        <main className="bg-white">
            <div className="container mx-auto px-6 pt-8 max-w-7xl">
                <CompanyBreadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Company', href: '/company' },
                    { label: 'Leadership Team', href: '' }
                ]} />
            </div>

            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Our Leadership
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Strategic vision. Operational excellence. Unwavering commitment.
                        </TextReveal>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {LEADERSHIP_TEAM.map((leader, index) => (
                            <FadeIn key={leader.name} delay={index * 0.2} className="group">
                                <div className="relative aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                                    {/* Placeholder for Leader Image - In production, use next/image with leader.image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                                        {/* If we had real images, we'd use: <Image src={leader.image} alt={leader.name} fill className="object-cover" /> */}
                                        <span className="text-6xl font-bold opacity-20">{leader.name.charAt(0)}</span>
                                    </div>

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Linkedin Link */}
                                    <a
                                        href={leader.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 right-4 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-brand-primary transition-all duration-300"
                                        aria-label={`LinkedIn profile of ${leader.name}`}
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold text-brand-navy mb-1">{leader.name}</h3>
                                <p className="text-brand-primary font-medium mb-4">{leader.role}</p>
                                <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-brand-light/30 border-t border-slate-100">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">Join Our Team</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        We are always looking for talented individuals to join our internal corporate team. If you are passionate about workforce solutions, we want to hear from you.
                    </p>
                    <MagneticButton>
                        <Link href="/careers" className="inline-flex items-center gap-2 text-brand-primary font-bold text-lg hover:gap-4 transition-all">
                            View Internal Openings <ArrowRight className="w-5 h-5" />
                        </Link>
                    </MagneticButton>
                </div>
            </section>
        </main>
    )
}
