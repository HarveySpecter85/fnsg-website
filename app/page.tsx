import { VideoHeroB2B } from '@/app/components/home/video-hero-b2b'
import { SocialProofBar } from '@/app/components/home/social-proof-bar'
import { ProblemSolution } from '@/app/components/home/problem-solution'
import { IndustrySelectorB2B } from '@/app/components/home/industry-selector-b2b'
import { TestimonialCarousel } from '@/app/components/home/testimonial-carousel'
import { GeorgiaMap } from '@/app/components/home/georgia-map'
import { B2BContactForm } from '@/app/components/home/b2b-contact-form'

export default function HomePage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
            {/* 1. Video Hero - Full viewport */}
            <VideoHeroB2B />

            {/* 2. Social Proof Bar */}
            <SocialProofBar />

            {/* 3. Problem → Solution Comparison */}
            <ProblemSolution />

            {/* 4. Industry Selector */}
            <IndustrySelectorB2B />

            {/* 5. Testimonial Carousel */}
            <TestimonialCarousel />

            {/* 6. Georgia Map + Locations */}
            <GeorgiaMap />

            {/* 7. B2B Contact Form with GHL */}
            <B2BContactForm />
        </main>
    )
}
