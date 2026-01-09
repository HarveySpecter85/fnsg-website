'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { submitQuoteRequest } from '@/app/actions'

const formSchema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    contactName: z.string().min(2, "Contact name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    industry: z.string().min(1, "Please select an industry"),
    volume: z.string().min(1, "Please select volume needed"),
    shift: z.string().min(1, "Please select shift preference"),
    urgency: z.enum(["Standard (24-72h)", "Urgent (<24h)", "Future Planning"]),
    details: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function RequestQuoteForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: "",
            contactName: "",
            email: "",
            phone: "",
            industry: "",
            volume: "",
            shift: "",
            urgency: "Standard (24-72h)",
            details: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        setError(null)

        try {
            const result = await submitQuoteRequest(data)
            if (result.success) {
                setIsSuccess(true)
            } else {
                setError(result.error || "Something went wrong. Please try again.")
            }
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-6">
                    Our account team has been notified. We will review your requirements and contact you within <strong>2 business hours</strong> with a preliminary rate card.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-primary font-semibold hover:underline"
                >
                    Submit another request
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-semibold text-brand-navy">Company Name</label>
                    <input
                        {...form.register("companyName")}
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                        placeholder="Acme Logistics Inc."
                    />
                    {form.formState.errors.companyName && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.companyName.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="contactName" className="text-sm font-semibold text-brand-navy">Contact Person</label>
                    <input
                        {...form.register("contactName")}
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                    />
                    {form.formState.errors.contactName && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.contactName.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Work Email</label>
                    <input
                        {...form.register("email")}
                        type="email"
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Direct Phone</label>
                    <input
                        {...form.register("phone")}
                        type="tel"
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                        placeholder="(404) 555-0123"
                    />
                    {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-semibold text-brand-navy">Industry Vertical</label>
                    <select
                        {...form.register("industry")}
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="">Select Industry...</option>
                        <option value="Warehouse & Logistics">Warehouse & Logistics</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Food Production">Food Production</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Construction">Construction</option>
                        <option value="Other">Other</option>
                    </select>
                    {form.formState.errors.industry && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.industry.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="volume" className="text-sm font-semibold text-brand-navy">Volume Needed</label>
                    <select
                        {...form.register("volume")}
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="">Select Volume...</option>
                        <option value="1-5 Workers">1-5 Workers</option>
                        <option value="6-20 Workers">6-20 Workers</option>
                        <option value="21-50 Workers">21-50 Workers</option>
                        <option value="50+ Workers">50+ Workers</option>
                    </select>
                    {form.formState.errors.volume && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.volume.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="shift" className="text-sm font-semibold text-brand-navy">Shift Preference</label>
                    <select
                        {...form.register("shift")}
                        className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="">Select Shift...</option>
                        <option value="1st Shift">1st Shift (Day)</option>
                        <option value="2nd Shift">2nd Shift (Evening)</option>
                        <option value="3rd Shift">3rd Shift (Night)</option>
                        <option value="Rotating/Mixed">Rotating/Mixed</option>
                    </select>
                    {form.formState.errors.shift && (
                        <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {form.formState.errors.shift.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy block mb-2">Urgency Level</label>
                <div className="flex flex-wrap gap-4">
                    {["Standard (24-72h)", "Urgent (<24h)", "Future Planning"].map((level) => (
                        <label key={level} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                value={level}
                                {...form.register("urgency")}
                                className="w-4 h-4 text-brand-primary focus:ring-brand-primary border-gray-300"
                            />
                            <span className="text-slate-700">{level}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-semibold text-brand-navy">Additional Details (Optional)</label>
                <textarea
                    {...form.register("details")}
                    className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all min-h-[100px]"
                    placeholder="Specific certifications needed (e.g., Forklift), PPE requirements, etc."
                />
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white font-bold text-lg py-4 rounded-lg hover:bg-brand-secondary transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                    </>
                ) : (
                    "Get Quote Now"
                )}
            </button>

            <p className="text-xs text-center text-slate-500 mt-4">
                By submitting this form, you agree to our privacy policy. Your information is secure and will only be used for workforce planning.
            </p>
        </form>
    )
}
