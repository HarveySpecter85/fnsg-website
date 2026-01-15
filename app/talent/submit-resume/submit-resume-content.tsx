'use client'

import { useState } from 'react'
import Script from 'next/script'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import {
    Rocket,
    Users,
    CheckCircle2,
    FileText,
    UserCheck,
    MessageSquare,
    Briefcase,
    ChevronRight,
    Zap,
    Shield,
    Factory,
    Warehouse,
    Utensils,
    Recycle,
    Leaf,
    Heart,
    Globe
} from 'lucide-react'

// Content in both languages
const content = {
    en: {
        badge: "Actively Hiring Across Georgia",
        headline: "Your Next Job",
        headlineAccent: "Starts Here",
        subheadline: "Apply in 2 minutes. Get matched with top employers. Start earning fast.",
        applyNow: "Apply Now",
        stats: [
            { value: "500+", label: "Workers Placed Monthly" },
            { value: "24hr", label: "Average Response Time" },
            { value: "7+", label: "Industries Served" },
            { value: "150+", label: "Partner Employers" }
        ],
        jobsTitle: "Jobs We're Hiring For",
        jobsSubtitle: "Find opportunities in Georgia's top industries",
        industries: [
            { icon: Warehouse, title: "Warehouse & Logistics", roles: "Pickers, Packers, Forklift Operators, Shipping/Receiving" },
            { icon: Factory, title: "Manufacturing & Production", roles: "Machine Operators, Assemblers, Quality Control" },
            { icon: Utensils, title: "Food & Beverage", roles: "Production Line, Packaging, Sanitation, Quality Assurance" },
            { icon: Recycle, title: "Recycling & Waste", roles: "Sorters, Equipment Operators, General Labor" },
            { icon: Leaf, title: "Agriculture & Nursery", roles: "Farm Workers, Nursery Assistants, Seasonal Labor" },
            { icon: Heart, title: "Healthcare Support", roles: "EVS, Housekeeping, Dietary Aides, Patient Transport" }
        ],
        processLabel: "How It Works",
        processTitle: "From Application to Paycheck",
        steps: [
            { icon: FileText, title: "Apply", description: "Complete the form below in just 2 minutes", time: "2 min" },
            { icon: UserCheck, title: "We Review", description: "Our team reviews your profile same day", time: "Same day" },
            { icon: MessageSquare, title: "Quick Call", description: "Brief phone screen to match you with the right job", time: "15 min" },
            { icon: Briefcase, title: "Start Work", description: "Get placed and start earning", time: "24-48 hrs" }
        ],
        formBadge: "Join 500+ Workers Placed Monthly",
        formTitle: "Ready to Get Started?",
        formSubtitle: "Complete the form below—it only takes 2 minutes.",
        formHeader: "Job Application Form",
        secure: "Secure",
        trustSignals: ["E-Verify Employer", "MSPA Certified", "Georgia-Based", "No Application Fees"],
        faqTitle: "Common Questions",
        faqSubtitle: "Everything you need to know before applying.",
        faqs: [
            { question: "Is there any fee to apply?", answer: "Never. Applying is 100% free. Employers pay our fees, not you." },
            { question: "How fast will I hear back?", answer: "Our recruiters typically respond within 24 hours, often same-day for urgent roles." },
            { question: "What types of jobs do you have?", answer: "Warehouse, manufacturing, food production, logistics, hospitality, and more across Georgia." },
            { question: "Do I need experience?", answer: "Not always! We have entry-level positions and many employers provide training. Certifications like forklift are a plus." },
            { question: "Can I work part-time or flexible shifts?", answer: "Yes! We have 1st, 2nd, 3rd shifts and weekend-only options available." }
        ],
        ctaTitle: "Ready to Start Earning?",
        ctaSubtitle: "Don't wait—positions fill fast. Apply now and our team will reach out within 24 hours."
    },
    es: {
        badge: "Contratando Activamente en Georgia",
        headline: "Tu Próximo Trabajo",
        headlineAccent: "Empieza Aquí",
        subheadline: "Aplica en 2 minutos. Conéctate con los mejores empleadores. Empieza a ganar rápido.",
        applyNow: "Aplicar Ahora",
        stats: [
            { value: "500+", label: "Trabajadores Colocados al Mes" },
            { value: "24hr", label: "Tiempo de Respuesta Promedio" },
            { value: "7+", label: "Industrias Servidas" },
            { value: "150+", label: "Empleadores Socios" }
        ],
        jobsTitle: "Trabajos Disponibles",
        jobsSubtitle: "Encuentra oportunidades en las mejores industrias de Georgia",
        industries: [
            { icon: Warehouse, title: "Almacén y Logística", roles: "Recolectores, Empacadores, Operadores de Montacargas" },
            { icon: Factory, title: "Manufactura y Producción", roles: "Operadores de Máquinas, Ensambladores, Control de Calidad" },
            { icon: Utensils, title: "Alimentos y Bebidas", roles: "Línea de Producción, Empaque, Sanitización" },
            { icon: Recycle, title: "Reciclaje y Residuos", roles: "Clasificadores, Operadores de Equipo, Trabajo General" },
            { icon: Leaf, title: "Agricultura y Viveros", roles: "Trabajadores Agrícolas, Asistentes de Vivero" },
            { icon: Heart, title: "Apoyo de Salud", roles: "EVS, Limpieza, Ayudantes Dietéticos, Transporte de Pacientes" }
        ],
        processLabel: "Cómo Funciona",
        processTitle: "De la Aplicación al Cheque",
        steps: [
            { icon: FileText, title: "Aplica", description: "Completa el formulario en solo 2 minutos", time: "2 min" },
            { icon: UserCheck, title: "Revisamos", description: "Nuestro equipo revisa tu perfil el mismo día", time: "Mismo día" },
            { icon: MessageSquare, title: "Llamada Rápida", description: "Breve llamada para encontrar el trabajo correcto", time: "15 min" },
            { icon: Briefcase, title: "A Trabajar", description: "Te colocamos y empiezas a ganar", time: "24-48 hrs" }
        ],
        formBadge: "Únete a 500+ Trabajadores Colocados al Mes",
        formTitle: "¿Listo para Empezar?",
        formSubtitle: "Completa el formulario—solo toma 2 minutos.",
        formHeader: "Formulario de Aplicación",
        secure: "Seguro",
        trustSignals: ["Empleador E-Verify", "Certificado MSPA", "Basado en Georgia", "Sin Cargos"],
        faqTitle: "Preguntas Frecuentes",
        faqSubtitle: "Todo lo que necesitas saber antes de aplicar.",
        faqs: [
            { question: "¿Hay algún cargo por aplicar?", answer: "Nunca. Aplicar es 100% gratis. Los empleadores pagan nuestras tarifas, no tú." },
            { question: "¿Qué tan rápido me responderán?", answer: "Nuestros reclutadores típicamente responden dentro de 24 horas, a menudo el mismo día." },
            { question: "¿Qué tipos de trabajos tienen?", answer: "Almacén, manufactura, producción de alimentos, logística, hospitalidad y más en Georgia." },
            { question: "¿Necesito experiencia?", answer: "¡No siempre! Tenemos posiciones de nivel de entrada y muchos empleadores dan entrenamiento." },
            { question: "¿Puedo trabajar medio tiempo o turnos flexibles?", answer: "¡Sí! Tenemos turnos de 1ra, 2da, 3ra y opciones de solo fines de semana." }
        ],
        ctaTitle: "¿Listo para Empezar a Ganar?",
        ctaSubtitle: "No esperes—las posiciones se llenan rápido. Aplica ahora y te contactamos en 24 horas."
    }
}

export function SubmitResumeContent() {
    const [lang, setLang] = useState<'en' | 'es'>('en')
    const t = content[lang]

    return (
        <main className="bg-slate-950">
            {/* Language Toggle - Fixed */}
            <div className="fixed top-28 right-4 z-40 lg:top-32">
                <button
                    onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full text-sm font-medium text-white transition-all shadow-lg"
                    aria-label="Toggle language"
                >
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>{lang === 'en' ? 'ES' : 'EN'}</span>
                </button>
            </div>

            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl" />

                {/* Animated Orbs */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
                                <Zap className="w-4 h-4" />
                                <span>{t.badge}</span>
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            </div>
                        </FadeIn>

                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            {t.headline}<br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                {t.headlineAccent}
                            </span>
                        </TextReveal>

                        <FadeIn delay={0.2}>
                            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                                {t.subheadline}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <a
                                href="#apply-form"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 group"
                            >
                                <Rocket className="w-5 h-5" />
                                {t.applyNow}
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </FadeIn>
                    </div>

                    {/* Stats Bar */}
                    <FadeIn delay={0.4}>
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {t.stats.map((stat, index) => (
                                <div key={index} className="text-center md:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ========== JOBS/INDUSTRIES SECTION ========== */}
            <section className="py-20 bg-slate-900/50 border-y border-slate-800">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {t.jobsTitle}
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                {t.jobsSubtitle}
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.industries.map((industry, index) => {
                            const Icon = industry.icon
                            return (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 mb-4">
                                            <Icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {industry.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                            {industry.roles}
                                        </p>
                                    </div>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ========== PROCESS TIMELINE ========== */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4 block">
                                {t.processLabel}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                {t.processTitle}
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

                        {t.steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <FadeIn key={index} delay={index * 0.15}>
                                    <div className="relative text-center">
                                        {/* Step Number Circle */}
                                        <div className="relative inline-flex mb-6">
                                            <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center relative z-10">
                                                <Icon className="w-10 h-10 text-cyan-400" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-3">
                                            {step.description}
                                        </p>
                                        <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-medium">
                                            {step.time}
                                        </span>
                                    </div>
                                </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ========== APPLICATION FORM ========== */}
            <section id="apply-form" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                                <Users className="w-4 h-4" />
                                <span>{t.formBadge}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {t.formTitle}
                            </h2>
                            <p className="text-slate-400">
                                {t.formSubtitle}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-slate-400 text-sm font-mono">
                                        {t.formHeader}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                                    <Shield className="w-4 h-4" />
                                    <span>{t.secure}</span>
                                </div>
                            </div>

                            {/* GHL Form Iframe */}
                            <div className="bg-slate-50 p-4 md:p-6">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/ln9MZIydyVxYQ3czpUgY"
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '5px' }}
                                    id="inline-ln9MZIydyVxYQ3czpUgY"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Job Seeker Lead Generator"
                                    data-height="1822"
                                    data-layout-iframe-id="inline-ln9MZIydyVxYQ3czpUgY"
                                    data-form-id="ln9MZIydyVxYQ3czpUgY"
                                    title="Job Seeker Lead Generator"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Trust Signals Below Form */}
                    <FadeIn delay={0.2}>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
                            {t.trustSignals.map((signal, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>{signal}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="py-20 border-t border-slate-800">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {t.faqTitle}
                            </h2>
                            <p className="text-slate-400">
                                {t.faqSubtitle}
                            </p>
                        </div>
                    </FadeIn>

                    <div className="space-y-4">
                        {t.faqs.map((faq, index) => (
                            <FadeIn key={index} delay={index * 0.05}>
                                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                                    <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                                        <span className="text-cyan-500">Q:</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-400 pl-7">
                                        {faq.answer}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t.ctaTitle}
                        </h2>
                        <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
                            {t.ctaSubtitle}
                        </p>
                        <a
                            href="#apply-form"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold text-lg rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                        >
                            <Rocket className="w-5 h-5" />
                            {t.applyNow}
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* GHL Form Script */}
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </main>
    )
}
