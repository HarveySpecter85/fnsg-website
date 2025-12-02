'use client'

import React, { useState, useEffect } from 'react'
import {
    BarChart3,
    TrendingUp,
    AlertTriangle,
    MapPin,
    Calendar,
    Filter,
    ChevronDown,
    Search,
    Activity,
    Users,
    DollarSign,
    Clock,
    Briefcase,
    Factory,
    Truck,
    Utensils,
    Leaf,
    Recycle,
    RefreshCw,
    Zap,
    ShieldAlert,
    Download,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react'
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    Cell
} from 'recharts'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// --- Types ---

type TimeRange = 'Today' | 'Last 7 Days' | 'Last 30 Days' | 'YTD' | 'Custom'
type KPICategory = 'Workforce' | 'Financial' | 'Performance' | 'Risk'
type Industry = 'Warehouse' | 'Recycling' | 'Manufacturing' | 'Hospitality' | 'Food' | 'Agriculture'
type Location = 'Atlanta' | 'Norcross' | 'Gainesville' | 'Buford' | 'Macon' | 'Savannah' | 'Augusta' | 'Columbus' | 'Athens' | 'Albany' | 'Marietta' | 'Newnan' | 'Locust Grove' | 'Griffin'

// --- Mock Data ---

const MOCK_DATA = {
    highlights: [
        { label: 'Fill Rate', value: '92%', change: '3.2%', trend: 'up' },
        { label: 'Attendance', value: '89%', change: '1.5%', trend: 'down' },
        { label: 'OT Hours', value: '412', change: '18%', trend: 'up', warning: true },
        { label: 'Turnover Rate', value: '22%', change: '4%', trend: 'down', good: true },
    ],
    lineChart: Array.from({ length: 30 }, (_, i) => ({
        day: `Day ${i + 1}`,
        fillRate: 85 + Math.random() * 10,
        attendance: 80 + Math.random() * 15,
        productivity: 70 + Math.random() * 20,
    })),
    barChart: [
        { name: 'Warehouse', value: 95 },
        { name: 'Manufacturing', value: 88 },
        { name: 'Recycling', value: 82 },
        { name: 'Hospitality', value: 91 },
        { name: 'Food & Bev', value: 85 },
    ],
    riskMatrix: [
        { location: 'Atlanta', risk: 'Low', score: 95 },
        { location: 'Norcross', risk: 'Medium', score: 78 },
        { location: 'Savannah', risk: 'High', score: 62 },
        { location: 'Macon', risk: 'Low', score: 88 },
    ]
}

// --- Components ---

function IntelCard({ label, value, change, trend, warning, good }: { label: string, value: string, change: string, trend: 'up' | 'down', warning?: boolean, good?: boolean }) {
    const isPositive = (trend === 'up' && !warning) || (trend === 'down' && good);
    const trendColor = isPositive ? 'text-emerald-500' : 'text-rose-500';
    const trendBg = isPositive ? 'bg-emerald-50' : 'bg-rose-50';

    return (
        <div className="dashboard-card bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">{label}</span>
                <div className={clsx("flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold", trendColor, trendBg)}>
                    {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {change}
                </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 tracking-tight mb-2">{value}</div>
            <div className="text-xs text-slate-400 font-medium">
                vs last period
            </div>
        </div>
    )
}

export function KPIDashboard() {
    const [timeRange, setTimeRange] = useState<TimeRange>('Last 30 Days')
    const [activeCategory, setActiveCategory] = useState<KPICategory>('Workforce')
    const [selectedLocation, setSelectedLocation] = useState<Location | 'All'>('All')
    const [selectedIndustry, setSelectedIndustry] = useState<Industry | 'All'>('All')
    const [marketIntel, setMarketIntel] = useState<string | null>(null)
    const [sources, setSources] = useState<any[] | null>(null)
    const [loadingIntel, setLoadingIntel] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Animation Refs
    const containerRef = React.useRef(null)

    useGSAP(() => {
        gsap.from(".dashboard-card", {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
        })
    }, { scope: containerRef })

    // Function to fetch Market Intelligence
    const fetchMarketIntel = async () => {
        setLoadingIntel(true)
        setError(null)
        try {
            const res = await fetch('/api/labor-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    industry: selectedIndustry === 'All' ? 'General Staffing' : selectedIndustry,
                    state: 'Georgia',
                    kpi: activeCategory
                })
            })

            if (!res.ok) {
                throw new Error(`Server Error: ${res.status}`)
            }

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            if (data.result) {
                setMarketIntel(data.result)
                if (data.groundingMetadata?.groundingChunks) {
                    setSources(data.groundingMetadata.groundingChunks)
                } else {
                    setSources(null)
                }
            }
        } catch (e: any) {
            console.error(e)
            setError(e.message || 'Failed to generate intelligence. Please check your connection and API keys.')
        } finally {
            setLoadingIntel(false)
        }
    }

    const handleApplyFilters = () => {
        setLoadingIntel(true)
        setTimeout(() => {
            setLoadingIntel(false)
        }, 800)
    }

    return (
        <section ref={containerRef} className="py-16 bg-[#F5F5F7] text-slate-900 min-h-screen font-sans">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Operations Intelligence</h1>
                        <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Updated {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="relative group">
                            <select
                                className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer hover:border-slate-300"
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value as TimeRange)}
                            >
                                {['Today', 'Last 7 Days', 'Last 30 Days', 'YTD', 'Custom'].map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-slate-600 transition-colors" />
                        </div>

                        <button
                            onClick={handleApplyFilters}
                            className="bg-[#007AFF] hover:bg-[#0062CC] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2 active:scale-95"
                        >
                            <RefreshCw className={clsx("w-4 h-4", loadingIntel && "animate-spin")} />
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* Error Alert */}
                {error && (
                    <div className="mb-8 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-700 animate-in fade-in slide-in-from-top-2">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">{error}</p>
                        <button onClick={() => setError(null)} className="ml-auto text-rose-500 hover:text-rose-700">Dismiss</button>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Filter Panel */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* KPI Category */}
                        <div className="dashboard-card bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-6">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Filter className="w-3 h-3" /> Category
                            </h3>
                            <div className="space-y-1">
                                {(['Workforce', 'Financial', 'Performance', 'Risk'] as KPICategory[]).map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={clsx(
                                            "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between group",
                                            activeCategory === cat
                                                ? "bg-white text-slate-900 shadow-sm"
                                                : "text-slate-500 hover:bg-white/50 hover:text-slate-700"
                                        )}
                                    >
                                        {cat}
                                        {activeCategory === cat && <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="dashboard-card bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-6 space-y-6">
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Location</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none appearance-none shadow-sm"
                                        value={selectedLocation}
                                        onChange={(e) => setSelectedLocation(e.target.value as any)}
                                    >
                                        <option value="All">All Locations</option>
                                        {['Atlanta', 'Norcross', 'Gainesville', 'Buford', 'Macon', 'Savannah', 'Augusta', 'Columbus', 'Athens', 'Albany', 'Marietta', 'Newnan', 'Locust Grove', 'Griffin'].map(l => (
                                            <option key={l} value={l}>{l}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Industry</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none appearance-none shadow-sm"
                                        value={selectedIndustry}
                                        onChange={(e) => setSelectedIndustry(e.target.value as any)}
                                    >
                                        <option value="All">All Industries</option>
                                        {['Warehouse', 'Recycling', 'Manufacturing', 'Hospitality', 'Food', 'Agriculture'].map(i => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Shift</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['1st', '2nd', '3rd', 'Wknd'].map(s => (
                                        <button key={s} className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm">
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Market Intel Trigger */}
                        <div className="dashboard-card">
                            <button
                                onClick={fetchMarketIntel}
                                disabled={loadingIntel}
                                className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-2xl text-left group transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Zap className={clsx("w-5 h-5 text-white", loadingIntel && "animate-spin")} />
                                    <span className="font-bold text-lg">AI Market Scanner</span>
                                </div>
                                <p className="text-xs text-indigo-100 font-medium">
                                    Generate real-time labor insights for {selectedIndustry === 'All' ? 'current selection' : selectedIndustry}.
                                </p>
                            </button>
                        </div>

                    </div>

                    {/* Main Visualization Area */}
                    <div className="lg:col-span-9 space-y-6">

                        {/* KPI Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {MOCK_DATA.highlights.map((kpi, i) => (
                                <div key={i} className="dashboard-card">
                                    <IntelCard {...kpi} trend={kpi.trend as 'up' | 'down'} />
                                </div>
                            ))}
                        </div>

                        {/* Interactive Line Chart */}
                        <div className="dashboard-card bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-8 relative overflow-hidden">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-lg font-bold text-slate-900">Performance Trends</h3>
                                <div className="flex gap-4">
                                    <span className="flex items-center gap-2 text-xs font-semibold text-slate-600"><div className="w-2.5 h-2.5 bg-[#007AFF] rounded-full" /> Fill Rate</span>
                                    <span className="flex items-center gap-2 text-xs font-semibold text-slate-600"><div className="w-2.5 h-2.5 bg-purple-500 rounded-full" /> Attendance</span>
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={MOCK_DATA.lineChart}>
                                        <defs>
                                            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#007AFF" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#007AFF" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorAtt" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#A855F7" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                                        <XAxis dataKey="day" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                                        <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#FFFFFF', border: 'none', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                                            itemStyle={{ color: '#1E293B', fontWeight: 600 }}
                                            cursor={{ stroke: '#CBD5E1', strokeWidth: 1 }}
                                        />
                                        <Area type="monotone" dataKey="fillRate" stroke="#007AFF" strokeWidth={3} fillOpacity={1} fill="url(#colorFill)" />
                                        <Area type="monotone" dataKey="attendance" stroke="#A855F7" strokeWidth={3} fillOpacity={1} fill="url(#colorAtt)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Bottom Row: Heatmap & Risk Matrix */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Regional Heatmap Placeholder */}
                            <div className="dashboard-card bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-slate-400" /> Regional Intensity
                                </h3>
                                <div className="aspect-video bg-slate-100 rounded-xl relative overflow-hidden group border border-slate-200/50">
                                    {/* Abstract Map Visualization */}
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-pulse" />
                                        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-700" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-slate-400 font-medium text-sm">Interactive Map Module</span>
                                    </div>
                                    {/* Pins */}
                                    {['Atlanta', 'Savannah', 'Macon'].map((city, i) => (
                                        <div key={city} className="absolute p-2 hover:scale-110 transition-transform cursor-pointer" style={{ top: `${30 + i * 20}%`, left: `${40 + i * 15}%` }}>
                                            <div className="w-3 h-3 bg-[#007AFF] rounded-full shadow-lg shadow-blue-500/30 ring-4 ring-white" />
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {city}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Risk Matrix */}
                            <div className="dashboard-card bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-slate-400" /> Risk & Alert Matrix
                                </h3>
                                <div className="space-y-3">
                                    {MOCK_DATA.riskMatrix.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className={clsx("w-2.5 h-2.5 rounded-full",
                                                    item.risk === 'High' ? 'bg-rose-500 animate-pulse' :
                                                        item.risk === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'
                                                )} />
                                                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{item.location}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-xs font-medium text-slate-400">Score: {item.score}</div>
                                                <div className={clsx("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide",
                                                    item.risk === 'High' ? 'bg-rose-50 text-rose-600' :
                                                        item.risk === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                                                )}>
                                                    {item.risk} Risk
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* AI Market Intel Result Panel */}
                        {marketIntel && (
                            <div className="dashboard-card bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-purple-500/5 rounded-2xl p-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="absolute top-0 right-0 p-6 opacity-5">
                                    <Zap className="w-32 h-32 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 relative z-10">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <Zap className="w-5 h-5 text-purple-600" />
                                    </div>
                                    Market Intelligence Report
                                </h3>
                                <div className="prose prose-slate prose-sm max-w-none relative z-10 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                                    <pre className="whitespace-pre-wrap font-sans text-slate-600 leading-relaxed">{marketIntel}</pre>
                                </div>

                                {/* Sources Footer */}
                                {sources && (
                                    <div className="mt-6 pt-6 border-t border-slate-100 relative z-10">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Verified Sources</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {sources.map((source: any, i: number) => (
                                                source.web?.uri ? (
                                                    <a
                                                        key={i}
                                                        href={source.web.uri}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[11px] font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors truncate max-w-[250px] flex items-center gap-1"
                                                    >
                                                        {source.web.title || source.web.uri}
                                                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                                                    </a>
                                                ) : null
                                            ))}
                                            {!sources.some((s: any) => s.web?.uri) && (
                                                <span className="text-[11px] text-slate-400 italic">
                                                    Data synthesized from: U.S. DOL, GDOL, O*NET, Census Bureau.
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}
