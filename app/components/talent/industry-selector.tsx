'use client'

import { useState } from 'react'
import { Factory, Warehouse, UtensilsCrossed, Heart, Recycle, Hammer } from 'lucide-react'

const industries = [
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'warehouse', label: 'Warehouse', icon: Warehouse },
    { id: 'hospitality', label: 'Hospitality', icon: UtensilsCrossed },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'recycling', label: 'Recycling', icon: Recycle },
    { id: 'construction', label: 'Construction', icon: Hammer },
]

interface IndustrySelectorProps {
    onSelect?: (industry: string) => void
}

export function IndustrySelector({ onSelect }: IndustrySelectorProps) {
    const [selected, setSelected] = useState<string | null>(null)

    const handleSelect = (id: string) => {
        setSelected(id)
        onSelect?.(id)
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-xs tracking-wider">01</span>
                <span className="text-slate-300 font-medium">SELECT YOUR MISSION</span>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {industries.map((industry) => {
                    const Icon = industry.icon
                    const isSelected = selected === industry.id

                    return (
                        <button
                            key={industry.id}
                            onClick={() => handleSelect(industry.id)}
                            className={`
                                group relative flex flex-col items-center gap-2 p-4 rounded-lg border transition-all duration-300
                                ${isSelected
                                    ? 'bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                                    : 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900'
                                }
                            `}
                        >
                            <Icon className={`w-6 h-6 transition-colors duration-300 ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400/70'
                                }`} />
                            <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                                }`}>
                                {industry.label}
                            </span>

                            {/* Selection Indicator */}
                            {isSelected && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
