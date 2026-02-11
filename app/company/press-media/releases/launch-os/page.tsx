import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { Mail, Calendar, Share2, Printer } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "First National Staffing OS Announces Industrial Workforce Intelligence Platform Launch",
    description: "First National Staffing OS launches a new AI-driven workforce intelligence platform to revolutionize industrial staffing in Georgia.",
    openGraph: {
        title: "FNSG OS Launches Workforce Intelligence Platform",
        description: "Revolutionizing industrial staffing with real-time data and AI insights.",
        url: "https://firstnationalstaffing.com/company/press-media/releases/launch-os",
        images: [
            {
                url: '/assets/og/press-launch-os-nano-banana.png',
                width: 1200,
                height: 630,
                alt: 'FNSG OS Launch',
            },
        ],
    },
};

export default function LaunchOSReleasePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "First National Staffing OS Announces Industrial Workforce Intelligence Platform Launch",
        "datePublished": "2025-01-15T08:00:00-05:00",
        "dateModified": "2025-01-15T08:00:00-05:00",
        "author": {
            "@type": "Organization",
            "name": "First National Staffing OS"
        },
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing OS",
            "logo": {
                "@type": "ImageObject",
                "url": "https://firstnationalstaffing.com/assets/logo-fnsg-os.png"
            }
        },
        "url": "https://firstnationalstaffing.com/company/press-media/releases/launch-os",
        "description": "First National Staffing OS launches a new AI-driven workforce intelligence platform to revolutionize industrial staffing in Georgia.",
        "articleBody": "First National Staffing OS today announced the launch of its new Industrial Workforce Intelligence Platform, designed to bring real-time data transparency and AI-driven insights to the industrial staffing sector in Georgia."
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "First National Staffing OS",
        "url": "https://firstnationalstaffing.com",
        "logo": "https://firstnationalstaffing.com/assets/logo-fnsg-os.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "press@fnstaffing.com",
            "contactType": "media",
            "areaServed": "US"
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />

            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl py-12">
                    <CompanyBreadcrumbs items={[
                        { label: 'Press & Media', href: '/company/press-media' },
                        { label: 'Releases', href: '#' },
                        { label: 'Launch OS', href: '#' }
                    ]} />

                    <div className="mt-8">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 15, 2025</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-bold text-xs uppercase">Corporate News</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            First National Staffing OS Announces Industrial Workforce Intelligence Platform Launch
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            New platform brings real-time transparency, safety analytics, and predictive retention modeling to Georgia's manufacturing and logistics employers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container mx-auto px-6 max-w-4xl py-16">
                <article className="prose prose-lg prose-slate max-w-none">
                    <p className="lead font-semibold text-slate-900">
                        <strong>ATLANTA, GA</strong> — First National Staffing OS, a leader in specialized industrial workforce solutions, today announced the launch of its proprietary Workforce Intelligence Platform. This new "Operating System" for staffing aims to eliminate the opacity of traditional agency models by providing clients with direct access to real-time fill rates, safety incident data, and retention analytics.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Overview</h2>
                    <p>
                        The industrial sector has long struggled with "black box" staffing agencies that provide little visibility into worker quality or deployment speed. FNSG OS changes this dynamic by integrating directly with client operations, treating contingent labor not as a commodity, but as a data-driven asset class.
                    </p>
                    <p>
                        "We built FNSG OS because the old model of 'fill and bill' is broken," said the CEO of First National Staffing. "Modern manufacturers need intelligence, not just bodies. Our platform gives them the control tower they've been missing."
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Capabilities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Real-Time Fill Tracking:</strong> View order status and candidate pipelines instantly.</li>
                        <li><strong>Safety Intelligence:</strong> Predictive analytics to identify high-risk roles and prevent incidents before they occur.</li>
                        <li><strong>Retention Modeling:</strong> AI-driven insights to forecast turnover and optimize wage rates for stability.</li>
                        <li><strong>Compliance Vault:</strong> Instant access to OSHA certifications, background checks, and drug screen results for every worker.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why It Matters for Georgia Employers</h2>
                    <p>
                        With Georgia's industrial sector experiencing rapid growth, the competition for skilled labor is fierce. FNSG OS provides a competitive advantage by reducing time-to-fill and improving workforce quality through data. By digitizing the entire staffing lifecycle, employers can reduce administrative burden and focus on production targets.
                    </p>

                    <div className="my-12 p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl italic text-slate-700">
                        "This isn't just a portal; it's a complete reimagining of the agency-client relationship. Transparency is the new standard."
                    </div>

                    <p>
                        The platform is now live for all existing enterprise clients and will be rolled out to mid-market partners in Q2 2025.
                    </p>

                    <hr className="my-12 border-slate-200" />

                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 not-prose">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">About First National Staffing OS</h3>
                        <p className="text-slate-600 mb-6">
                            First National Staffing OS is a technology-first workforce solutions provider based in Atlanta, GA. Specializing in manufacturing, logistics, and waste management, FNSG combines deep industry expertise with cutting-edge technology to deliver superior staffing outcomes.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 pt-6 border-t border-slate-200">
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm uppercase mb-2">Media Contact</h4>
                                <a href="mailto:press@fnstaffing.com" className="text-blue-600 hover:underline flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> press@fnstaffing.com
                                </a>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm uppercase mb-2">Website</h4>
                                <Link href="/" className="text-blue-600 hover:underline">
                                    www.firstnationalstaffing.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
