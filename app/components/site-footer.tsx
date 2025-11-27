import Link from 'next/link'
import { AnimatedLogo } from '@/app/components/anim/animated-logo'

const navigation = {
    solutions: [
        { name: 'Workforce Health Screening', href: '/solutions/workforce-health-screening' },
        { name: 'On-Site Management', href: '/solutions/on-site-workforce-management' },
        { name: 'Payroll & Compliance', href: '/solutions/payroll-compliance-administration' },
        { name: 'Direct Hire', href: '/solutions/direct-hire-recruitment' },
    ],
    company: [
        { name: 'About Us', href: '/company/about-us' },
        { name: 'Leadership', href: '/company/leadership' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact', href: '/contact/general-inquiries' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/legal/privacy-policy' },
        { name: 'Terms of Service', href: '/legal/terms-of-service' },
        { name: 'Accessibility', href: '/legal/accessibility-statement' },
        { name: 'SMS Terms (TCPA)', href: '/legal/tcpa-compliance-policy' },
        { name: 'Marketing Policy', href: '/legal/marketing-communications-policy' },
    ],
}

export function SiteFooter() {
    return (
        <footer className="bg-white border-t border-slate-200" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">First National Staffing</span>
                            <AnimatedLogo />
                        </Link>
                        <p className="text-sm leading-6 text-slate-600 max-w-xs">
                            Empowering businesses with reliable workforce solutions and connecting talent with meaningful opportunities since 2005.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social links could go here */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-slate-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-slate-500">
                        &copy; {new Date().getFullYear()} First National Staffing Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
