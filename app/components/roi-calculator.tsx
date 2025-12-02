'use client'

import { saveInitialCalculation } from '@/app/actions'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const INDUSTRIES = [
    { id: 'agriculture', label: 'Agriculture & Nursery', icon: '🌱', color: 'bg-green-100 text-green-800', killerQuestion: '¿Temporada / Cultivo?', placeholder: 'Ej. Cosecha Arándanos' },
    { id: 'logistics', label: 'Warehouse & Logistics', icon: '📦', color: 'bg-blue-100 text-blue-800', killerQuestion: '¿Volumen Peak Season?', placeholder: 'Ej. 50 staff extra' },
    { id: 'manufacturing', label: 'Manufacturing', icon: '🏭', color: 'bg-slate-100 text-slate-800', killerQuestion: '¿Turnos?', placeholder: 'Ej. 3er Turno Rotativo' },
    { id: 'recycling', label: 'Recycling / Waste', icon: '♻️', color: 'bg-orange-100 text-orange-800', killerQuestion: '¿Riesgo/Exposición?', placeholder: 'Ej. Sorting Line' },
    { id: 'healthcare', label: 'Healthcare EVS', icon: '🏥', color: 'bg-teal-100 text-teal-800', killerQuestion: '¿Certificaciones?', placeholder: 'Ej. Biohazard' },
    { id: 'hospitality', label: 'Hospitality', icon: '🥂', color: 'bg-purple-100 text-purple-800', killerQuestion: '¿Código Vestimenta?', placeholder: 'Ej. Black Tie' },
    { id: 'food', label: 'Food & Beverage', icon: '🍗', color: 'bg-red-100 text-red-800', killerQuestion: '¿Temperatura?', placeholder: 'Ej. Cuarto Frío (35°F)' }
]

export default function ROICalculator() {
    const [selectedIndustry, setSelectedIndustry] = useState<typeof INDUSTRIES[0] | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)
        const result = await saveInitialCalculation(formData)

        if (result.success && result.id) {
            const params = new URLSearchParams()
            params.set('token', result.id)
            if (selectedIndustry) params.set('industry', selectedIndustry.label)
            const rate = formData.get('rate') as string
            if (rate) params.set('wage', rate)

            router.push(`/data-insights/return-on-staffing-roi-model?${params.toString()}`)
        } else {
            alert(`Error: ${result.error || "No se pudo conectar"}`)
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-900"></div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Auditoría Laboral IA</h3>

                {!selectedIndustry ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p className="text-slate-500 mb-6 text-sm">Selecciona tu industria:</p>
                        <div className="grid grid-cols-2 gap-3">
                            {INDUSTRIES.map((ind) => (
                                <button key={ind.id} onClick={() => setSelectedIndustry(ind)} className={`p-3 rounded-lg border text-left hover:shadow-md flex items-center gap-2 ${ind.color} border-transparent`}>
                                    <span className="text-xl">{ind.icon}</span>
                                    <span className="text-xs font-bold">{ind.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-8 space-y-4">
                        <button type="button" onClick={() => setSelectedIndustry(null)} className="text-xs text-blue-600 hover:underline mb-2">← Cambiar Industria</button>
                        <input type="hidden" name="industry" value={selectedIndustry.id} />

                        <div className={`p-3 rounded-lg ${selectedIndustry.color} flex items-center gap-3`}>
                            <span className="text-2xl">{selectedIndustry.icon}</span>
                            <div><p className="font-bold">{selectedIndustry.label}</p></div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700">Ubicación</label>
                            <input name="location" required placeholder="Zip Code" className="w-full px-4 py-3 rounded-md border border-slate-300 outline-none focus:ring-2 focus:ring-slate-900" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700">{selectedIndustry.killerQuestion}</label>
                            <input name="role" required placeholder={selectedIndustry.placeholder} className="w-full px-4 py-3 rounded-md border border-slate-300 outline-none focus:ring-2 focus:ring-slate-900" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700">Tasa Estimada ($/hr)</label>
                            <input name="rate" type="number" step="0.50" required placeholder="16.50" className="w-full px-4 py-3 rounded-md border border-slate-300 outline-none focus:ring-2 focus:ring-slate-900" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 px-6 text-white font-bold text-lg rounded-lg shadow-md transition-all mt-4 ${isSubmitting ? 'bg-slate-400' : 'bg-slate-900 hover:bg-slate-800'}`}
                        >
                            {isSubmitting ? 'Conectando...' : 'Auditar mi Sector Ahora'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}