'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Zap, Activity, MapPin, Terminal, Cpu, BarChart3, Users, Clock, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/app/components/anim/fade-in'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import clsx from 'clsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IntelligenceWidget } from '@/app/components/intelligence-engine/widget'
import { KPIDashboard } from '@/app/components/kpi-dashboard'

// --- Components ---



function IntelligenceEngine() {
  const chartData = [
    { name: 'W1', value: 20 },
    { name: 'W2', value: 45 },
    { name: 'W3', value: 75 },
    { name: 'W4', value: 98 },
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Powered by FNSG OS™</h2>
            <p className="text-slate-400 max-w-xl">The Intelligence Engine driving workforce optimization.</p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs font-mono text-cyan-500">SYSTEM_STATUS: OPTIMAL</div>
            <div className="text-xs font-mono text-slate-500">UPTIME: 99.99%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-2 h-auto md:h-[600px]">
          {/* Compliance Card (Large) */}
          <div className="md:col-span-1 md:row-span-2 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Risk Shield Active</h3>
            <p className="text-slate-400 text-sm mb-8 flex-grow">
              Comprehensive liability protection. Our W-2 model absorbs 100% of employer risk, backed by a $5M umbrella policy.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>MSPA Certified</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>ACA Compliant</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>E-Verify Integrated</span>
              </div>
            </div>
          </div>

          {/* Tech Card (Tall/Wide depending on layout, here Top Right) */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Cpu className="w-24 h-24 text-blue-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">eScreen Integration</h3>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-mono font-bold text-white mb-1">15<span className="text-lg text-slate-500 ml-1">min</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Rapid Test Result</div>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div>
                  <div className="text-4xl font-mono font-bold text-white mb-1">100<span className="text-lg text-slate-500 ml-1">%</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Digital Chain of Custody</div>
                </div>
              </div>
              {/* Progress Bar Visual */}
              <div className="mt-8 w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full w-[85%] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
            </div>
          </div>

          {/* Scale Card (Bottom Right) */}
          <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Deployment Velocity</h3>
                </div>
                <p className="text-sm text-slate-400">Ramp-up speed for high-volume orders.</p>
              </div>
            </div>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={3} dot={{ r: 4, fill: '#a855f7' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff', fontFamily: 'monospace' }}
                    labelStyle={{ display: 'none' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionSelector() {
  const [activeTab, setActiveTab] = useState('warehouse')

  const industries = {
    warehouse: {
      label: 'Warehouse',
      bg: 'bg-[url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80")]',
      metrics: [
        { label: 'Forklift Certs', value: 'Verified' },
        { label: 'Safety Gear', value: 'Provided' },
        { label: 'Shift Fill', value: '98%' }
      ]
    },
    manufacturing: {
      label: 'Manufacturing',
      bg: 'bg-[url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")]',
      metrics: [
        { label: 'GMP Training', value: 'Standard' },
        { label: 'Shift Flexibility', value: '24/7' },
        { label: 'Output Boost', value: '+15%' }
      ]
    },
    hospitality: {
      label: 'Hospitality',
      bg: 'bg-[url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80")]',
      metrics: [
        { label: 'Appearance', value: 'Pro' },
        { label: 'Background', value: 'Clear' },
        { label: 'Event Ready', value: '100%' }
      ]
    },
    healthcare: {
      label: 'Healthcare',
      bg: 'bg-[url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80")]',
      metrics: [
        { label: 'Credentialing', value: 'Auto' },
        { label: 'Vaccinations', value: 'Tracked' },
        { label: 'Compliance', value: 'Strict' }
      ]
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-20 ${industries[activeTab as keyof typeof industries].bg}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono font-bold text-cyan-500 tracking-widest uppercase mb-4">Select Mission Sector</h2>
          <div className="inline-flex p-1 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full">
            {Object.entries(industries).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === key
                    ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {data.label}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries[activeTab as keyof typeof industries].metrics.map((metric, i) => (
            <div key={i} className="bg-slate-900/60 backdrop-blur-md border border-white/5 p-6 rounded-xl text-center transform transition-all duration-500 hover:scale-105 hover:border-cyan-500/30">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">{metric.label}</div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UnlockStrategyCTA() {
  return (
    <Link
      href="/industries/manufacturing-production-staffing"
      className="block w-full bg-gradient-to-r from-red-900/80 via-red-600/20 to-red-900/80 border-y border-red-500/30 py-6 relative z-20 group hover:bg-red-900/90 transition-all cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 relative z-10">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="font-mono text-red-200 font-bold tracking-widest uppercase text-sm md:text-base group-hover:text-white transition-colors">
          System Alert: Market Data Unlocked
        </span>
        <span className="hidden md:inline-block text-red-400/50">|</span>
        <span className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
          Click to Reveal Competitor Strategy <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </span>
      </div>
      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
    </Link>
  )
}

// --- Main Page ---

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 selection:bg-cyan-500/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Copy */}
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  SYSTEM OPERATIONAL • v2025.1
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                  Deploy Talent at the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Speed of Demand.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  The first Workforce Operations Intelligence Platform built for Georgia's high-volume employers.
                  Optimize headcount, mitigate risk, and scale instantly.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/data-insights/return-on-staffing-roi-model"
                    className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] flex items-center gap-2 group"
                  >
                    <Terminal className="w-5 h-5" />
                    Initialize Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-8 py-4 bg-slate-900 border border-white/10 hover:border-white/20 text-white font-bold rounded-lg transition-all flex items-center gap-2">
                    <Activity className="w-5 h-5 text-slate-400" />
                    Watch System Demo
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Widget */}
            <FadeIn delay={0.5} className="w-full">
              <IntelligenceWidget />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      {/* Social Proof Ticker / CTA */}
      <UnlockStrategyCTA />

      {/* Bento Grid */}
      <IntelligenceEngine />

      {/* Industry Selector */}
      <MissionSelector />

      {/* KPI Dashboard */}
      <KPIDashboard />

    </main>
  )
}