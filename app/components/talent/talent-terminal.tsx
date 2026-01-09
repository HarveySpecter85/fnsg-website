'use client'

import { useEffect, useState } from 'react'

interface TalentTerminalProps {
    title: string
    children: React.ReactNode
    className?: string
}

export function TalentTerminal({ title, children, className = '' }: TalentTerminalProps) {
    const [timestamp, setTimestamp] = useState('')

    useEffect(() => {
        const updateTimestamp = () => {
            const now = new Date()
            setTimestamp(now.toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }))
        }
        updateTimestamp()
        const interval = setInterval(updateTimestamp, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={`bg-slate-950/80 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)] ${className}`}>
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/20 bg-slate-900/50">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-cyan-400 font-mono text-sm tracking-wider">
                        {title}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-slate-500 font-mono text-xs">
                        FNSG OS v2.0
                    </span>
                    <span className="text-slate-600 font-mono text-xs">
                        {timestamp}
                    </span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}
