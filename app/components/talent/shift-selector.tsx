'use client'

import { useState } from 'react'
import { Sun, Sunset, Moon, RefreshCw, MapPin } from 'lucide-react'

const shifts = [
    { id: '1st', label: '1st Shift', time: '6am - 2pm', icon: Sun },
    { id: '2nd', label: '2nd Shift', time: '2pm - 10pm', icon: Sunset },
    { id: '3rd', label: '3rd Shift', time: '10pm - 6am', icon: Moon },
    { id: 'flex', label: 'Flexible', time: 'Any shift', icon: RefreshCw },
]

const locations = [
    'Atlanta Metro',
    'Gainesville',
    'Duluth',
    'Norcross',
    'South Fulton',
    'Savannah',
    'All Georgia',
]

interface ShiftLocationSelectorProps {
    onShiftSelect?: (shift: string) => void
    onLocationSelect?: (location: string) => void
}

export function ShiftLocationSelector({ onShiftSelect, onLocationSelect }: ShiftLocationSelectorProps) {
    const [selectedShift, setSelectedShift] = useState<string | null>(null)
    const [selectedLocation, setSelectedLocation] = useState('')

    const handleShiftSelect = (id: string) => {
        setSelectedShift(id)
        onShiftSelect?.(id)
    }

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(e.target.value)
        onLocationSelect?.(e.target.value)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shift Selector */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-xs tracking-wider">02</span>
                    <span className="text-slate-300 font-medium">SELECT SHIFT PREFERENCE</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {shifts.map((shift) => {
                        const Icon = shift.icon
                        const isSelected = selectedShift === shift.id

                        return (
                            <button
                                key={shift.id}
                                onClick={() => handleShiftSelect(shift.id)}
                                className={`
                                    group flex items-center gap-3 p-3 rounded-lg border transition-all duration-300
                                    ${isSelected
                                        ? 'bg-cyan-500/10 border-cyan-500'
                                        : 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50'
                                    }
                                `}
                            >
                                <div className={`
                                    w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                                    ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800 group-hover:bg-slate-700'}
                                `}>
                                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                                </div>
                                <div className="text-left">
                                    <div className={`text-sm font-medium ${isSelected ? 'text-cyan-400' : 'text-slate-300'}`}>
                                        {shift.label}
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">
                                        {shift.time}
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Location Selector */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-xs tracking-wider">03</span>
                    <span className="text-slate-300 font-medium">SELECT LOCATION</span>
                </div>

                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="w-full appearance-none bg-slate-900/50 border border-slate-700 rounded-lg pl-12 pr-4 py-4 text-slate-300 font-mono focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all cursor-pointer hover:border-cyan-500/50"
                    >
                        <option value="" className="bg-slate-900">Choose your area...</option>
                        {locations.map((location) => (
                            <option key={location} value={location} className="bg-slate-900">
                                {location}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-4 mt-4 p-3 bg-slate-900/30 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-slate-500 font-mono">15+ positions in {selectedLocation || 'Georgia'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
