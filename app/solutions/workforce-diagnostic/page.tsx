import WorkforceDiagnosticForm from '../../components/workforce-diagnostic-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Workforce Diagnostic Tool | First National Staffing",
    description: "Assess your workforce stability and operational risks with our interactive diagnostic tool.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-diagnostic',
    },
    openGraph: {
        title: "Workforce Diagnostic Tool | First National Staffing",
        description: "Assess your workforce stability and operational risks with our interactive diagnostic tool.",
        url: 'https://firstnationalstaffing.com/solutions/workforce-diagnostic',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function WorkforceDiagnosticPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <WorkforceDiagnosticForm />
        </main>
    )
}
