import type { Metadata } from 'next'
import { SubmitResumeContent } from './submit-resume-content'

export const metadata: Metadata = {
    title: "Apply Now | Join Georgia's Top Industrial Workforce",
    description: "Apply to First National Staffing Group. Get matched with warehouse, manufacturing, and logistics jobs across Georgia. Weekly pay, full benefits, no fees.",
    openGraph: {
        title: "Apply Now | First National Staffing Group",
        description: "Your next job starts here. Apply in 2 minutes and get matched with top employers in Georgia.",
        url: "https://firstnationalstaffing.com/talent/submit-resume",
    }
}

export default function SubmitResumePage() {
    return <SubmitResumeContent />
}
