'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  Cpu,
  Factory,
  FileText,
  Globe,
  Layers,
  LayoutDashboard,
  MapPin,
  Network,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Briefcase,
  Building2,
  HardHat,
  Search,
  Settings,
  Activity
} from 'lucide-react';
import { FadeIn } from '@/app/components/anim/fade-in';

gsap.registerPlugin(ScrollTrigger);

export default function HomePageClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeHub, setActiveHub] = useState<string | null>(null);

  useGSAP(() => {
    // Hero Parallax Effect
    gsap.to('.hero-circuit-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Floating Hubs Animation
    gsap.to('.hub-dot', {
      scale: 1.2,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: 'power1.inOut'
    });

    // Floating KPI Card Animation
    gsap.to('.kpi-card', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  // Extended list of 13 cities for the map
  const cities = [
    { id: 'gainesville', name: 'Gainesville', top: '15%', left: '65%', type: 'hub' },
    { id: 'hall-county', name: 'Hall County', top: '18%', left: '68%', type: 'node' },
    { id: 'jackson-county', name: 'Jackson County', top: '22%', left: '72%', type: 'node' },
    { id: 'forsyth-county', name: 'Forsyth County', top: '20%', left: '55%', type: 'node' },
    { id: 'norcross', name: 'Norcross', top: '30%', left: '50%', type: 'hub' },
    { id: 'duluth', name: 'Duluth', top: '28%', left: '55%', type: 'hub' },
    { id: 'barrow-county', name: 'Barrow County', top: '25%', left: '60%', type: 'node' },
    { id: 'cobb-county', name: 'Cobb County', top: '35%', left: '40%', type: 'node' },
    { id: 'dekalb-county', name: 'Dekalb County', top: '38%', left: '52%', type: 'node' },
    { id: 'atlanta', name: 'Atlanta', top: '40%', left: '45%', type: 'hub' },
    { id: 'south-fulton', name: 'South Fulton', top: '45%', left: '42%', type: 'hub' },
    { id: 'clayton-county', name: 'Clayton County', top: '48%', left: '48%', type: 'node' },
    { id: 'savannah', name: 'Savannah', top: '80%', left: '85%', type: 'hub' }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* 🟩 SECTION 1 — HERO: “Workforce Operations Intelligence” */}
      {/* Added mt-20 lg:mt-28 to fix header spacing */}
      <section ref={heroRef} className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[#0f172a] z-0"></div>

        {/* OG Asset Background */}
        <div className="hero-circuit-bg absolute inset-0 opacity-40 z-0 pointer-events-none mix-blend-screen">
          <Image
            src="/og/homepage-bg.svg"
            alt="Circuit Background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Node Overlay */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none z-0">
          <Image
            src="/og/homepage-nodes.svg"
            alt="Nodes Overlay"
            width={800}
            height={800}
            className="absolute top-10 right-10 animate-pulse"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/60 to-[#0f172a] z-0"></div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left Content */}
          <FadeIn className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              FNSG OS v2.0 Live
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] drop-shadow-2xl">
              Workforce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Operations Intelligence
              </span>
              <br />
              for Georgia Employers
            </h1>
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              Stop guessing. Start engineering your workforce. The first operating system designed to stabilize industrial staffing through data, compliance, and local intelligence.
            </p>
            {/* Increased spacing below CTAs to avoid overlap */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 pb-12">
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 z-20">
                Request Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/insights/city" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-300 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 backdrop-blur-sm z-20">
                Explore Insights
              </Link>
            </div>
          </FadeIn>

          {/* Right Content: Georgia Map Visualization - Blueprint Style */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg mx-auto transform scale-110">
              {/* Blueprint Map */}
              <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                {/* Grid Pattern */}
                <defs>
                  <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                  </pattern>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Abstract GA Shape */}
                <path
                  d="M 80,40 L 280,20 L 320,150 L 380,250 L 350,450 L 50,450 L 20,200 Z"
                  fill="rgba(15, 23, 42, 0.8)"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="2"
                  className="backdrop-blur-md"
                  filter="url(#glow)"
                />
                <path
                  d="M 80,40 L 280,20 L 320,150 L 380,250 L 350,450 L 50,450 L 20,200 Z"
                  fill="url(#blueprint-grid)"
                  className="opacity-50"
                />

                {/* Connecting Lines */}
                <path d="M 200 150 L 180 200 L 220 220" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none" />
                <path d="M 260 75 L 200 150" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none" />
              </svg>

              {/* Cities */}
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="absolute group cursor-pointer"
                  style={{ top: city.top, left: city.left }}
                  onMouseEnter={() => setActiveHub(city.id)}
                  onMouseLeave={() => setActiveHub(null)}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Node/Hub Marker */}
                    <div className={`rounded-full border-2 transition-all duration-300 ${city.type === 'hub' ? 'w-4 h-4 bg-blue-500 border-white shadow-[0_0_15px_#3b82f6]' : 'w-2 h-2 bg-slate-400 border-slate-600 group-hover:bg-blue-400 group-hover:border-white'}`}></div>

                    {/* Pulse Effect for Hubs */}
                    {city.type === 'hub' && (
                      <div className="absolute -inset-4 bg-blue-500/30 rounded-full animate-ping"></div>
                    )}

                    {/* City Label (Visible on Hover or always for major hubs if desired, keeping clean for now) */}
                    <div className={`absolute left-6 top-1/2 -translate-y-1/2 bg-slate-900/90 px-2 py-1 rounded border border-slate-700 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30`}>
                      {city.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* Active Hub Info Card (Dynamic) */}
              {activeHub && (
                <div className="absolute bottom-10 right-0 w-64 bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 p-4 rounded-xl shadow-2xl z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="flex items-center gap-2 mb-2 border-b border-slate-700 pb-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="font-bold text-white">{cities.find(c => c.id === activeHub)?.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-slate-400">Fill Rate</div>
                    <div className="text-green-400 font-mono text-right">98.5%</div>
                    <div className="text-slate-400">Active Workers</div>
                    <div className="text-blue-400 font-mono text-right">1,240</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 2 — “The Industrial Workforce Stack” */}
      {/* Added margin top to separate from Hero and prevent overlap */}
      <section className="relative z-20 -mt-20 pb-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Industrial Service Delivery",
                desc: "On-site management and scalable staffing aligned with production cycles."
              },
              {
                icon: ShieldCheck,
                title: "Embedded Compliance",
                desc: "Automated E-Verify, OSHA training, and risk mitigation protocols."
              },
              {
                icon: Activity,
                title: "Operational Intelligence",
                desc: "Real-time dashboards for fill rates, turnover, and labor costs."
              }
            ].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl shadow-2xl hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="mb-6 p-4 bg-slate-800/50 rounded-xl w-fit group-hover:bg-blue-500/20 transition-colors ring-1 ring-white/5">
                  <card.icon size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 3 — Georgia Workforce Intelligence Map */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50 skew-y-3 transform origin-top-left z-0"></div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Georgia Workforce<br />Intelligence Map</h2>
              <p className="text-slate-600 max-w-xl text-lg">
                We track labor trends, wage benchmarks, and candidate availability across key industrial hubs in Georgia.
              </p>
            </div>
            <Link href="/insights/city" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 mt-6 md:mt-0 text-lg group">
              Explore All Hubs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Map Area - Increased Size */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 h-[700px] relative overflow-hidden flex items-center justify-center p-12 shadow-2xl">
              {/* Light Mode Map */}
              <svg viewBox="0 0 400 500" className="w-full h-full max-w-lg drop-shadow-xl">
                <path
                  d="M 80,40 L 280,20 L 320,150 L 380,250 L 350,450 L 50,450 L 20,200 Z"
                  fill="#f8fafc"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                />
                {cities.map((city) => (
                  <g key={city.id} className="group cursor-pointer">
                    <circle cx={parseFloat(city.left) * 4} cy={parseFloat(city.top) * 5} r={city.type === 'hub' ? 8 : 4} fill={city.type === 'hub' ? '#3b82f6' : '#94a3b8'} className="group-hover:scale-150 transition-transform duration-300" />
                    {city.type === 'hub' && <circle cx={parseFloat(city.left) * 4} cy={parseFloat(city.top) * 5} r="16" fill="rgba(59,130,246,0.1)" className="animate-pulse" />}
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-5 rounded-xl border border-slate-200 shadow-lg text-sm text-slate-600">
                <div className="flex items-center gap-3 mb-2"><span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span> Active Hub</div>
                <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-slate-400"></span> Monitoring Node</div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-slate-900 flex items-center gap-3 text-xl">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  Norcross Hub
                </h3>
                <span className="text-xs font-bold font-mono bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200">LIVE</span>
              </div>

              <div className="space-y-8 flex-1">
                <div>
                  <div className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wide">Avg. Industrial Wage</div>
                  <div className="text-4xl font-bold text-slate-900 tracking-tight">$18.50<span className="text-lg font-normal text-slate-400 ml-1">/hr</span></div>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                    <div className="bg-blue-500 h-full w-[75%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wide">Candidate Availability</div>
                  <div className="text-3xl font-bold text-slate-900">High</div>
                  <div className="text-sm text-green-600 flex items-center gap-1 mt-2 font-semibold">
                    <TrendingUp className="w-4 h-4" /> +12% vs last month
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wide">Top Industry</div>
                  <div className="flex items-center gap-3 mt-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <Factory className="w-5 h-5 text-slate-500" />
                    <span className="font-bold text-slate-700">Electronics Mfg</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <Link href="/insights/city/norcross" className="block w-full py-4 text-center bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                  View Full Market Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 4 — Industry Systems */}
      <section className="py-32 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Industry Systems</h2>
            <p className="text-slate-600 text-lg">Specialized workforce stacks designed for the unique compliance and operational demands of your sector.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Warehouse & Logistics", icon: Network, slug: "logistics-distribution-staffing", color: "from-blue-500 to-cyan-400" },
              { title: "Manufacturing", icon: Factory, slug: "manufacturing-staffing", color: "from-purple-500 to-pink-400" },
              { title: "Food Production", icon: Zap, slug: "food-beverage-production", color: "from-orange-500 to-yellow-400" },
              { title: "Recycling & Waste", icon: Layers, slug: "recycling-waste-management-staffing", color: "from-green-500 to-emerald-400" }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${industry.color}`}></div>

                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm border border-slate-100">
                  <industry.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.title}</h3>
                <p className="text-slate-500 mb-8 text-lg leading-relaxed">Specialized staffing, safety protocols, and productivity tracking tailored for {industry.title.toLowerCase()}.</p>
                <div className="flex gap-6 text-sm font-bold items-center">
                  <Link href={`/industries/${industry.slug}`} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link">
                    View Service Model <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-slate-300">|</span>
                  <Link href={`/insights/industry/${industry.slug}`} className="text-slate-500 hover:text-slate-900 transition-colors">
                    Deep Dive
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 5 — Boardroom-Ready Intelligence */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="container">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Boardroom-Ready Intelligence</h2>
            <Link href="/insights/reports" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg">
              View Library <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Georgia Industrial Workforce Benchmark Q4",
              "Warehouse & Logistics 2025 Forecast",
              "OSHA Risk Heatmap: Metro Atlanta"
            ].map((report, idx) => (
              <div key={idx} className="group cursor-pointer perspective-1000">
                <div className="aspect-[3/4] bg-slate-50 rounded-xl border border-slate-200 mb-6 relative overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 transform-style-3d">
                  {/* Report Cover Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
                  <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6">
                      <FileText className="w-10 h-10 text-blue-600" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-slate-800 mb-2">{report}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-4">Confidential Report</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-2">PDF DOWNLOAD</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/insights/reports" className="text-blue-600 font-bold text-lg">View Library</Link>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 6 — Why FNSG OS */}
      <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/og/homepage-grid.svg')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why FNSG OS?</h2>
            <p className="text-slate-400 text-lg">Traditional staffing is reactive. We built an operating system that is predictive, compliant, and deeply integrated.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: MapPin, title: "Hyper-Local Intelligence", desc: "We know every bus route, wage shift, and competitor in your zip code." },
              { icon: ShieldCheck, title: "Compliance as Code", desc: "Risk mitigation is baked into our hiring and onboarding workflows." },
              { icon: LayoutDashboard, title: "Data Layered Staffing", desc: "Don't just get people. Get insights on retention and performance." },
              { icon: Globe, title: "Bilingual Operations", desc: "Bridging the communication gap with a fully bilingual management layer." }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-slate-800/50 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-slate-700 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                  <item.icon size={32} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 7 — Case Study + Wire */}
      <section className="py-32 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {/* Case Study */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-slate-400"></span>
                Featured Case Study
              </h3>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col md:flex-row flex-1 hover:shadow-2xl transition-shadow duration-300 group h-full">
                <div className="bg-slate-900 md:w-2/5 p-10 flex flex-col justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-blue-400 mb-2 tracking-tighter">28%</div>
                    <div className="text-xl font-medium leading-tight text-blue-100">Reduction in 3rd Shift Turnover</div>
                  </div>
                </div>
                <div className="p-10 md:w-3/5 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Gainesville Food Production Facility</h4>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">How we used wage benchmarking and shift-realignment to stabilize a critical production line.</p>
                  <Link href="/insights/case-studies" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Insights Wire */}
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-slate-400"></span>
                Intelligence Wire
              </h3>
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  {[
                    { type: "PRESS", title: "FNSG Launches New OS Dashboard", date: "2 days ago" },
                    { type: "INSIGHT", title: "Q1 2025 Wage Inflation Alert", date: "1 week ago" },
                    { type: "REPORT", title: "Savannah Port Logistics Impact", date: "2 weeks ago" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 items-start group cursor-pointer border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                      <div className="text-[10px] font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase mt-1 tracking-wide group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">{item.type}</div>
                      <div>
                        <h5 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-lg leading-snug">{item.title}</h5>
                        <div className="text-xs text-slate-400 mt-2 font-medium">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <Link href="/insights" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">View All Updates</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 8 — Select Your Path */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Select Your Path</h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">Tailored resources for every stakeholder in the workforce ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Employers & Ops Leaders", icon: Briefcase, btn: "Optimize Workforce", href: "/contact" },
              { title: "HR & Compliance Heads", icon: ShieldCheck, btn: "View Risk Solutions", href: "/risk-compliance" },
              { title: "Talent & Job Seekers", icon: HardHat, btn: "Find a Job", href: "https://jobs.firstnationalstaffing.com" }
            ].map((card, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 shadow-xl group">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <card.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-8">{card.title}</h3>
                <Link href={card.href} className="inline-block w-full py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  {card.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}