import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { CONTACT_INFO } from '@/lib/site-config'
import { Briefcase, UserPlus, FileText, MapPin, Phone, Facebook, Linkedin, Instagram, Star, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: "Contact First National Staffing | Locations & Directory",
    description: "Contact FNSG for staffing solutions, job opportunities, or payroll inquiries. Visit our branches in Atlanta, Gainesville, and Savannah.",
    alternates: {
        canonical: '/contact/general-inquiries',
    },
    openGraph: {
        title: "Contact First National Staffing | Locations & Directory",
        description: "Contact FNSG for staffing solutions, job opportunities, or payroll inquiries.",
        url: 'https://firstnationalstaffing.com/contact/general-inquiries',
        images: ['/contact/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
}

export default function GeneralInquiriesPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Contact Us: <span className="text-brand-primary">Directory & Locations</span>
                        </TextReveal>
                        <FadeIn delay={0.2}>
                            <div className="bg-white border-l-8 border-brand-primary p-6 md:p-8 rounded-r-xl shadow-sm text-left max-w-3xl mx-auto ring-1 ring-slate-200">
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Need assistance? <strong className="text-brand-navy font-bold">First National Staffing Group</strong> operates multiple branches across Georgia. For <strong className="text-brand-navy font-bold">Sales & Client Services</strong>, select &quot;Employer Support&quot;. For <strong className="text-brand-navy font-bold">Paystubs, W-2s, or Employment Verification</strong>, please contact the <strong className="text-brand-navy font-bold">Payroll Department</strong> directly to ensure fast resolution.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Department Routing */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Employers */}
                        <FadeIn delay={0.1} className="card-hover group">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full text-center">
                                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-2">Employers</h3>
                                <p className="text-slate-600 mb-6">Request workforce, rate cards, or account support.</p>
                                <MagneticButton>
                                    <Link href="/contact/request-workforce" className="btn-primary w-full justify-center">
                                        Request Workforce
                                    </Link>
                                </MagneticButton>
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-center gap-2 text-brand-secondary font-semibold hover:text-brand-primary">
                                        <Phone className="w-4 h-4" /> {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Candidates */}
                        <FadeIn delay={0.2} className="card-hover group">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full text-center">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform">
                                    <UserPlus className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-2">Candidates</h3>
                                <p className="text-slate-600 mb-6">Search jobs, apply online, or check application status.</p>
                                <MagneticButton>
                                    <Link href="/talent" className="btn-secondary w-full justify-center bg-white border border-slate-200 hover:bg-slate-50 text-brand-navy">
                                        Browse Open Jobs
                                    </Link>
                                </MagneticButton>
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-green-600 font-semibold hover:text-green-700">
                                        <MessageCircle className="w-4 h-4" /> Chat with Recruiting
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Employees */}
                        <FadeIn delay={0.3} className="card-hover group">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-2">Payroll & HR</h3>
                                <p className="text-slate-600 mb-6">W-2s, paystubs, and employment verification.</p>
                                <MagneticButton>
                                    <Link href="/contact" className="btn-secondary w-full justify-center bg-white border border-slate-200 hover:bg-slate-50 text-brand-navy">
                                        Contact Payroll
                                    </Link>
                                </MagneticButton>
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                    <span className="text-sm text-slate-500">Mon-Fri: 9am - 5pm EST</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Locations</h2>
                        <p className="text-slate-600">Serving Georgia with local expertise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Atlanta */}
                        <FadeIn delay={0.1} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                            <div className="h-48 bg-slate-200 relative">
                                {/* Placeholder for Map */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    Google Map: Atlanta
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Atlanta (HQ)</h3>
                                <p className="text-slate-600 mb-4 flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                                    {CONTACT_INFO.addresses.atlanta}
                                </p>
                                <Link href="/insights/city/atlanta-staffing-agency" className="text-brand-primary font-semibold hover:underline">
                                    View Branch Details &rarr;
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Gainesville */}
                        <FadeIn delay={0.2} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                            <div className="h-48 bg-slate-200 relative">
                                {/* Placeholder for Map */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    Google Map: Gainesville
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Gainesville</h3>
                                <p className="text-slate-600 mb-4 flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                                    {CONTACT_INFO.addresses.gainesville}
                                </p>
                                <Link href="/insights/city/gwinnett-county-staffing-agency" className="text-brand-primary font-semibold hover:underline">
                                    View Branch Details &rarr;
                                </Link>
                            </div>
                        </FadeIn>

                        {/* Savannah */}
                        <FadeIn delay={0.3} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                            <div className="h-48 bg-slate-200 relative">
                                {/* Placeholder for Map */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    Google Map: Savannah
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Savannah</h3>
                                <p className="text-slate-600 mb-4 flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                                    {CONTACT_INFO.addresses.savannah}
                                </p>
                                <Link href="/insights/city/savannah-logistics-staffing" className="text-brand-primary font-semibold hover:underline">
                                    View Branch Details &rarr;
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Social & Reviews */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Social Hub */}
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">Connect With Us</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-light/20 transition-all group">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Facebook className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-brand-navy">Facebook</span>
                                </a>
                                <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-light/20 transition-all group">
                                    <div className="p-2 bg-pink-100 text-pink-600 rounded-lg group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-brand-navy">Instagram</span>
                                </a>
                                <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-brand-light/20 transition-all group">
                                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg group-hover:bg-blue-700 group-hover:text-white transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-brand-navy">LinkedIn</span>
                                </a>
                                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-green-200 bg-green-50 hover:bg-green-100 transition-all group">
                                    <div className="p-2 bg-green-200 text-green-700 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-brand-navy">WhatsApp</span>
                                </a>
                            </div>
                        </FadeIn>

                        {/* Reviews */}
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-bold text-brand-navy mb-8">What People Say</h2>
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <div className="flex gap-1 text-yellow-400 mb-2">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <p className="text-slate-700 italic mb-4">&quot;Best staffing agency in Atlanta. They found me a job within 24 hours and the pay is great.&quot;</p>
                                    <p className="text-sm font-bold text-brand-navy">- Sarah J., Warehouse Associate</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <div className="flex gap-1 text-yellow-400 mb-2">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <p className="text-slate-700 italic mb-4">&quot;FNSG helped us ramp up for peak season with zero headaches. Their on-site team is fantastic.&quot;</p>
                                    <p className="text-sm font-bold text-brand-navy">- Mike T., Logistics Manager</p>
                                </div>
                                <span className="inline-block text-brand-primary/50 font-semibold cursor-not-allowed">
                                    Read more on Google Business (Coming Soon)
                                </span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    )
}
