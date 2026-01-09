'use client'

import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Check, ChevronRight, AlertCircle } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { submitDiagnostic } from '@/app/actions'

// Utility for tailwind class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// --- Zod Schema Definitions ---

const contactInfoSchema = z.object({
    contact_name: z.string().min(1, 'Full Name is required'),
    company_name: z.string().min(1, 'Company Name is required'),
    contact_role: z.string().min(1, 'Role is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    county: z.string().min(1, 'County is required'),
    preferred_language: z.enum(['English', 'Spanish']).optional(),
})

const generalSchema = z.object({
    main_problem: z.string().min(1, 'Please describe your main problem'),
    positions_per_month: z.coerce.number().min(1, 'Must be at least 1'),
    urgency: z.enum([
        '1 - Just exploring',
        '2 - Mild urgency',
        '3 - Moderate urgency',
        '4 - High urgency',
        '5 - Urgent, need help now',
    ]),
    shifts: z.array(z.string()).optional(),
    requirements: z.array(z.string()).optional(),
})

// Industry Specific Schemas
const warehouseSchema = z.object({
    wh_problem_type: z.enum([
        'No-shows',
        'High turnover',
        'Inconsistent productivity',
        'Picking/Packing errors',
        'Safety incidents',
    ]).optional(),
    wh_roles_needed: z.array(z.string()).optional(),
    wh_kpis: z.array(z.string()).optional(),
})

const manufacturingSchema = z.object({
    mf_production_issue: z.enum([
        'Staff shortages',
        'Quality control issues',
        'Delays in production output',
        'Line stoppages',
        'Safety and compliance',
    ]).optional(),
    mf_shift_length: z.enum(['8-hour shifts', '10-hour shifts', '12-hour shifts']).optional(),
})

const recyclingSchema = z.object({
    rw_challenge: z.enum([
        'High turnover',
        'Heavy physical labor demands',
        'Safety incidents',
        'Low retention',
    ]).optional(),
    rw_site_type: z.enum(['MRF', 'Landfill', 'Transfer Station', 'Commercial Routes']).optional(),
})

const foodBeverageSchema = z.object({
    fb_challenge: z.enum([
        'Line interruptions',
        'Sanitation staffing',
        'Quality issues',
        'Peak demand coverage',
        'Turnover',
    ]).optional(),
    fb_environment: z.enum([
        'Cold Storage',
        'Dry Production',
        'Packaging Area',
        'Sanitation Area',
    ]).optional(),
})

const hospitalitySchema = z.object({
    ht_type: z.enum([
        'Hotel',
        'Event Center',
        'Banquet Facility',
        'Convention Center',
    ]).optional(),
    ht_problem: z.enum([
        'Housekeeping delays',
        'Event no-shows',
        'High occupancy staffing',
        'Turnover',
        'Guest service impact',
    ]).optional(),
})

const healthcareSchema = z.object({
    hc_challenge: z.enum([
        'Sanitation coverage',
        'High standards compliance',
        'Turnover',
        'Patient environment impact',
    ]).optional(),
    hc_facility_type: z.enum([
        'Hospital',
        'Clinic',
        'Long-Term Care',
        'Rehabilitation Center',
    ]).optional(),
})

const constructionSchema = z.object({
    cn_role_needed: z.array(z.string()).optional(),
    cn_challenge: z.enum([
        'Attendance',
        'Turnover',
        'Safety issues',
        'Productivity gaps',
    ]).optional(),
})

const cleaningSchema = z.object({
    cl_problem: z.enum([
        'Staff shortages',
        'Quality complaints',
        'High turnover',
        'Night shift coverage',
        'Urgent fill-ins',
    ]).optional(),
    cl_property_type: z.enum([
        'Office',
        'Warehouse',
        'Hotel',
        'School',
        'Medical Facility',
    ]).optional(),
})

const industrySpecificSchema = z.object({
    warehouse_logistics: warehouseSchema.optional(),
    manufacturing_production: manufacturingSchema.optional(),
    recycling_waste: recyclingSchema.optional(),
    food_beverage: foodBeverageSchema.optional(),
    hospitality_events: hospitalitySchema.optional(),
    healthcare_environmental_services: healthcareSchema.optional(),
    construction: constructionSchema.optional(),
    cleaning_janitorial: cleaningSchema.optional(),
})

const formSchema = z.object({
    contact_info: contactInfoSchema,
    industry: z.enum([
        'Warehouse & Logistics',
        'Manufacturing & Production',
        'Recycling & Waste Management',
        'Food & Beverage Production',
        'Hospitality & Events',
        'Healthcare Environmental Services',
        'Construction',
        'Cleaning & Janitorial',
    ]),
    general: generalSchema,
    industry_specific: industrySpecificSchema.optional(),
})

type FormData = z.infer<typeof formSchema>

// --- Components ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: { message?: string }
}

const Input = ({ label, error, ...props }: InputProps) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        <input
            className={cn(
                "w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
                error && "border-red-500 focus:ring-red-200"
            )}
            {...props}
        />
        {error && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {error.message}</p>}
    </div>
)

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: string[]
    error?: { message?: string }
}

const Select = ({ label, options, error, ...props }: SelectProps) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        <select
            className={cn(
                "w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white",
                error && "border-red-500 focus:ring-red-200"
            )}
            {...props}
        >
            <option value="">Select an option</option>
            {options.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        {error && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {error.message}</p>}
    </div>
)

interface CheckboxGroupProps {
    label: string
    options: string[]
    register: ReturnType<typeof useForm<FormData>>['register']
    name: Parameters<ReturnType<typeof useForm<FormData>>['register']>[0]
}

const CheckboxGroup = ({ label, options, register, name }: CheckboxGroupProps) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {options.map((opt: string) => (
                <label key={opt} className="flex items-center space-x-2 p-2 rounded-md hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all">
                    <input
                        type="checkbox"
                        value={opt}
                        {...register(name)}
                        className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600">{opt}</span>
                </label>
            ))}
        </div>
    </div>
)

const Section = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
    <div className={cn("bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-6", className)}>
        <h3 className="text-xl font-semibold text-slate-800 border-b border-slate-100 pb-2">{title}</h3>
        {children}
    </div>
)

export default function WorkforceDiagnosticForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            contact_info: {
                preferred_language: 'English',
            },
        },
    })

    const selectedIndustry = watch('industry')

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)

        try {
            const result = await submitDiagnostic(data)
            if (result.success) {
                setSubmitted(true)
            } else {
                alert(`Error: ${result.error}`)
            }
        } catch (e) {
            console.error(e)
            alert('An unexpected error occurred.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto p-8 text-center bg-white rounded-2xl shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Diagnostic Received!</h2>
                <p className="text-slate-600 mb-8">
                    Thank you for providing your workforce details. Our team is analyzing your specific challenges in the <span className="font-semibold text-slate-800">{selectedIndustry}</span> sector and will prepare a custom proposal shortly.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                    Submit Another
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Workforce Diagnostic</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Tell us about your workforce challenges so we can design a custom staffing proposal tailored to your industry.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* Contact Information */}
                <Section title="Contact Information">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Full Name" {...register('contact_info.contact_name')} error={errors.contact_info?.contact_name} />
                        <Input label="Company Name" {...register('contact_info.company_name')} error={errors.contact_info?.company_name} />
                        <Input label="Your Role" {...register('contact_info.contact_role')} error={errors.contact_info?.contact_role} />
                        <Input label="Work Email" type="email" {...register('contact_info.email')} error={errors.contact_info?.email} />
                        <Input label="Phone Number" {...register('contact_info.phone')} error={errors.contact_info?.phone} />
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="City" {...register('contact_info.city')} error={errors.contact_info?.city} />
                            <Input label="County" {...register('contact_info.county')} error={errors.contact_info?.county} />
                        </div>
                        <Select
                            label="Preferred Language"
                            options={['English', 'Spanish']}
                            {...register('contact_info.preferred_language')}
                            error={errors.contact_info?.preferred_language}
                        />
                    </div>
                </Section>

                {/* Industry Selection */}
                <Section title="Industry Selection">
                    <Select
                        label="Select Your Industry"
                        options={[
                            "Warehouse & Logistics",
                            "Manufacturing & Production",
                            "Recycling & Waste Management",
                            "Food & Beverage Production",
                            "Hospitality & Events",
                            "Healthcare Environmental Services",
                            "Construction",
                            "Cleaning & Janitorial"
                        ]}
                        {...register('industry')}
                        error={errors.industry}
                    />
                </Section>

                {/* General Information */}
                <Section title="General Workforce Information">
                    <div className="space-y-6">
                        <Input
                            label="What is the biggest workforce challenge you're dealing with?"
                            {...register('general.main_problem')}
                            error={errors.general?.main_problem}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                type="number"
                                label="How many positions do you need per month?"
                                {...register('general.positions_per_month')}
                                error={errors.general?.positions_per_month}
                            />
                            <Select
                                label="How urgent is your need?"
                                options={[
                                    "1 - Just exploring",
                                    "2 - Mild urgency",
                                    "3 - Moderate urgency",
                                    "4 - High urgency",
                                    "5 - Urgent, need help now"
                                ]}
                                {...register('general.urgency')}
                                error={errors.general?.urgency}
                            />
                        </div>

                        <CheckboxGroup
                            label="What shifts do you need coverage for?"
                            options={[
                                "Day shift",
                                "Night shift",
                                "Weekend shift",
                                "Rotating shifts",
                                "Mixed schedules"
                            ]}
                            register={register}
                            name="general.shifts"
                        />

                        <CheckboxGroup
                            label="Required worker qualifications"
                            options={[
                                "Background Check",
                                "Drug Test",
                                "Bilingual English/Spanish",
                                "Prior Experience",
                                "Certifications (OSHA, forklift, etc.)"
                            ]}
                            register={register}
                            name="general.requirements"
                        />
                    </div>
                </Section>

                {/* Dynamic Industry Sections */}
                {selectedIndustry === "Warehouse & Logistics" && (
                    <Section title="Warehouse & Logistics Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-6">
                            <Select
                                label="Main issue affecting your warehouse"
                                options={[
                                    "No-shows",
                                    "High turnover",
                                    "Inconsistent productivity",
                                    "Picking/Packing errors",
                                    "Safety incidents"
                                ]}
                                {...register('industry_specific.warehouse_logistics.wh_problem_type')}
                            />
                            <CheckboxGroup
                                label="Roles needed"
                                options={[
                                    "General Labor",
                                    "Forklift Operators",
                                    "Shipping/Receiving",
                                    "Warehouse Leads",
                                    "Inventory Clerks"
                                ]}
                                register={register}
                                name="industry_specific.warehouse_logistics.wh_roles_needed"
                            />
                            <CheckboxGroup
                                label="Key KPIs"
                                options={[
                                    "Fill rate",
                                    "On-time order completion",
                                    "Reduced overtime cost",
                                    "Lower turnover",
                                    "Safety compliance"
                                ]}
                                register={register}
                                name="industry_specific.warehouse_logistics.wh_kpis"
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Manufacturing & Production" && (
                    <Section title="Manufacturing Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Biggest issue on your production line"
                                options={[
                                    "Staff shortages",
                                    "Quality control issues",
                                    "Delays in production output",
                                    "Line stoppages",
                                    "Safety and compliance"
                                ]}
                                {...register('industry_specific.manufacturing_production.mf_production_issue')}
                            />
                            <Select
                                label="Shift length"
                                options={["8-hour shifts", "10-hour shifts", "12-hour shifts"]}
                                {...register('industry_specific.manufacturing_production.mf_shift_length')}
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Recycling & Waste Management" && (
                    <Section title="Recycling & Waste Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Main operational challenge"
                                options={[
                                    "High turnover",
                                    "Heavy physical labor demands",
                                    "Safety incidents",
                                    "Low retention"
                                ]}
                                {...register('industry_specific.recycling_waste.rw_challenge')}
                            />
                            <Select
                                label="Type of operation"
                                options={["MRF", "Landfill", "Transfer Station", "Commercial Routes"]}
                                {...register('industry_specific.recycling_waste.rw_site_type')}
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Food & Beverage Production" && (
                    <Section title="Food & Beverage Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Biggest challenge in production"
                                options={[
                                    "Line interruptions",
                                    "Sanitation staffing",
                                    "Quality issues",
                                    "Peak demand coverage",
                                    "Turnover"
                                ]}
                                {...register('industry_specific.food_beverage.fb_challenge')}
                            />
                            <Select
                                label="Work environment type"
                                options={[
                                    "Cold Storage",
                                    "Dry Production",
                                    "Packaging Area",
                                    "Sanitation Area"
                                ]}
                                {...register('industry_specific.food_beverage.fb_environment')}
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Hospitality & Events" && (
                    <Section title="Hospitality Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Type of property or event"
                                options={[
                                    "Hotel",
                                    "Event Center",
                                    "Banquet Facility",
                                    "Convention Center"
                                ]}
                                {...register('industry_specific.hospitality_events.ht_type')}
                            />
                            <Select
                                label="Main staffing issue"
                                options={[
                                    "Housekeeping delays",
                                    "Event no-shows",
                                    "High occupancy staffing",
                                    "Turnover",
                                    "Guest service impact"
                                ]}
                                {...register('industry_specific.hospitality_events.ht_problem')}
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Healthcare Environmental Services" && (
                    <Section title="Healthcare EVS Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Main operational challenge"
                                options={[
                                    "Sanitation coverage",
                                    "High standards compliance",
                                    "Turnover",
                                    "Patient environment impact"
                                ]}
                                {...register('industry_specific.healthcare_environmental_services.hc_challenge')}
                            />
                            <Select
                                label="Facility type"
                                options={[
                                    "Hospital",
                                    "Clinic",
                                    "Long-Term Care",
                                    "Rehabilitation Center"
                                ]}
                                {...register('industry_specific.healthcare_environmental_services.hc_facility_type')}
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Construction" && (
                    <Section title="Construction Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-6">
                            <CheckboxGroup
                                label="Roles needed"
                                options={[
                                    "General Labor",
                                    "Skilled Trades",
                                    "Site Clean-up",
                                    "Flaggers",
                                    "Operators"
                                ]}
                                register={register}
                                name="industry_specific.construction.cn_role_needed"
                            />
                            <Select
                                label="Main challenge"
                                options={[
                                    "Attendance",
                                    "Turnover",
                                    "Safety issues",
                                    "Productivity gaps"
                                ]}
                                {...register('industry_specific.construction.cn_challenge')}
                            />
                        </div>
                    </Section>
                )}

                {selectedIndustry === "Cleaning & Janitorial" && (
                    <Section title="Cleaning & Janitorial Specifics" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select
                                label="Main janitorial challenge"
                                options={[
                                    "Staff shortages",
                                    "Quality complaints",
                                    "High turnover",
                                    "Night shift coverage",
                                    "Urgent fill-ins"
                                ]}
                                {...register('industry_specific.cleaning_janitorial.cl_problem')}
                            />
                            <Select
                                label="Type of building"
                                options={[
                                    "Office",
                                    "Warehouse",
                                    "Hotel",
                                    "School",
                                    "Medical Facility"
                                ]}
                                {...register('industry_specific.cleaning_janitorial.cl_property_type')}
                            />
                        </div>
                    </Section>
                )}

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "w-full py-4 px-6 text-white font-bold text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",
                            isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
                        )}
                    >
                        {isSubmitting ? 'Analyzing...' : (
                            <>
                                Get My Custom Proposal <ChevronRight />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
