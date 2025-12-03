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
  Zap
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

  }, { scope: containerRef });

  const hubs = [
    { id: 'gainesville', name: 'Gainesville', top: '20%', left: '60%', fillRate: '98.5%', attendance: '96%', risk: 'Low' },
    { id: 'norcross', name: 'Norcross', top: '35%', left: '45%', fillRate: '97.2%', attendance: '94%', risk: 'Med' },
    { id: 'duluth', name: 'Duluth', top: '32%', left: '50%', fillRate: '99.1%', attendance: '98%', risk: 'Low' },
    { id: 'south-fulton', name: 'South Fulton', top: '55%', left: '40%', fillRate: '96.8%', attendance: '93%', risk: 'Low' }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-slate-50 overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* 🟩 SECTION 1 — HERO: “Workforce Operations Intelligence” */}
      <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white pt-20">
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[#0f172a] z-0"></div>

        {/* OG Asset Background */}
        <div className="hero-circuit-bg absolute inset-0 opacity-30 z-0 pointer-events-none">
          <Image
            src="/og/homepage-bg.svg"
            alt="Circuit Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Node Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none z-0">
          <Image
            src="/og/homepage-nodes.svg"
            alt="Nodes Overlay"
            width={600}
            height={600}
            className="absolute top-20 right-20 animate-pulse"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#0f172a] z-0"></div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-12">
          {/* Left Content */}
          <FadeIn className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              FNSG OS v2.0 Live
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Workforce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Operations Intelligence
              </span>
              <br />
              for Georgia Employers
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Stop guessing. Start engineering your workforce. The first operating system designed to stabilize industrial staffing through data, compliance, and local intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                Request Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/insights/city" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700">
                Explore Insights
              </Link>
            </div>
          </FadeIn>

          {/* Right Content: Georgia Map Visualization */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              {/* Abstract Georgia Map Shape (CSS/SVG) */}
              <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <path
                  d="M 80,40 L 280,20 L 320,150 L 380,250 L 350,450 L 50,450 L 20,200 Z" // Simplified abstract GA shape
                  fill="rgba(30, 41, 59, 0.5)"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="2"
                  className="backdrop-blur-sm"
                />
                {/* Grid Lines on Map */}
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
                </pattern>
                <path
                  d="M 80,40 L 280,20 L 320,150 L 380,250 L 350,450 L 50,450 L 20,200 Z"
                  fill="url(#grid)"
                />
              </svg>

              {/* Hubs */}
              {hubs.map((hub) => (
                <div
                  key={hub.id}
                  className="absolute group cursor-pointer"
                  style={{ top: hub.top, left: hub.left }}
                  onMouseEnter={() => setActiveHub(hub.id)}
                  onMouseLeave={() => setActiveHub(null)}
                >
                  <div className="relative">
                    <div className="hub-dot w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full animate-ping"></div>
                  </div>

                  {/* Hover Card */}
                  <div className={`absolute left-6 top-0 w-64 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-lg shadow-xl transition-all duration-300 z-20 ${activeHub === hub.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      {hub.name} Hub
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-slate-300">
                        <span>Fill Rate</span>
                        <span className="text-green-400 font-mono">{hub.fillRate}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Attendance</span>
                        <span className="text-blue-400 font-mono">{hub.attendance}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Safety Risk</span>
                        <span className="text-yellow-400 font-mono">{hub.risk}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 2 — “The Industrial Workforce Stack” */}
      <section className="relative z-20 -mt-20 pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-400" />,
                title: "Industrial Service Delivery",
                desc: "On-site management and scalable staffing aligned with production cycles."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
                title: "Embedded Compliance",
                desc: "Automated E-Verify, OSHA training, and risk mitigation protocols."
              },
              {
                icon: <Cpu className="w-8 h-8 text-purple-400" />,
                title: "Operational Intelligence",
                desc: "Real-time dashboards for fill rates, turnover, and labor costs."
              }
            ].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl hover:border-blue-500/50 transition-colors group">
                <div className="mb-6 p-3 bg-slate-800/50 rounded-lg w-fit group-hover:bg-blue-500/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 3 — Georgia Workforce Intelligence Map */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Georgia Workforce<br />Intelligence Map</h2>
              <p className="text-slate-600 max-w-xl">
                We track labor trends, wage benchmarks, and candidate availability across key industrial hubs in Georgia.
              </p>
            </div>
            <Link href="/insights/city" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 mt-4 md:mt-0">
              Explore All Hubs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Map Area */}
            <div className="lg:col-span-2 bg-slate-50 rounded-2xl border border-slate-200 h-[500px] relative overflow-hidden flex items-center justify-center p-8">
              {/* Light Mode Map */}
              <svg viewBox="0 0 400 500" className="w-full h-full max-w-md drop-shadow-lg">
                <path
                  d="M 80,40 L 280,20 L 320,150 L 380,250 L 350,450 L 50,450 L 20,200 Z"
                  fill="#e2e8f0"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />
                {hubs.map((hub) => (
                  <circle key={hub.id} cx={parseFloat(hub.left) * 4} cy={parseFloat(hub.top) * 5} r="6" fill="#3b82f6" className="animate-pulse" />
                ))}
              </svg>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg border border-slate-200 shadow-sm text-xs text-slate-500">
                <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Active Hub</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-300"></span> Emerging Market</div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Norcross Hub
                </h3>
                <span className="text-xs font-mono bg-green-100 text-green-700 px-2 py-1 rounded">LIVE</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Avg. Industrial Wage</div>
                  <div className="text-2xl font-bold text-slate-900">$18.50<span className="text-sm font-normal text-slate-400">/hr</span></div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-500 h-full w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Candidate Availability</div>
                  <div className="text-2xl font-bold text-slate-900">High</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +12% vs last month
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Top Industry</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Factory className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-slate-700">Electronics Mfg</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link href="/insights/city/norcross" className="block w-full py-3 text-center bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                  View Full Market Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 4 — Industry Systems */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industry Systems</h2>
            <p className="text-slate-600">Specialized workforce stacks designed for the unique compliance and operational demands of your sector.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Warehouse & Logistics", icon: <Network />, slug: "logistics-distribution-staffing" },
              { title: "Manufacturing", icon: <Factory />, slug: "manufacturing-staffing" },
              { title: "Food Production", icon: <Zap />, slug: "food-beverage-production" },
              { title: "Recycling & Waste", icon: <Layers />, slug: "recycling-waste-management-staffing" }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                <p className="text-slate-500 mb-6">Specialized staffing, safety protocols, and productivity tracking.</p>
                <div className="flex gap-4 text-sm font-bold">
                  <Link href={`/industries/${industry.slug}`} className="text-blue-600 hover:text-blue-700">View Service Model</Link>
                  <span className="text-slate-300">|</span>
                  <Link href={`/insights/industry/${industry.slug}`} className="text-slate-600 hover:text-slate-900">Deep Dive</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 5 — Boardroom-Ready Intelligence */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Boardroom-Ready Intelligence</h2>
            <Link href="/insights/reports" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline">
              View Library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Georgia Industrial Workforce Benchmark Q4",
              "Warehouse & Logistics 2025 Forecast",
              "OSHA Risk Heatmap: Metro Atlanta"
            ].map((report, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-slate-100 rounded-lg border border-slate-200 mb-4 relative overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-blue-600 mb-1">PDF REPORT</div>
                    <div className="text-sm font-bold text-slate-900 line-clamp-2">{report}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/insights/reports" className="text-blue-600 font-bold">View Library</Link>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 6 — Why FNSG OS */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why FNSG OS?</h2>
            <p className="text-slate-400">Traditional staffing is reactive. We built an operating system that is predictive, compliant, and deeply integrated.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <MapPin />, title: "Hyper-Local Intelligence", desc: "We know every bus route, wage shift, and competitor in your zip code." },
              { icon: <ShieldCheck />, title: "Compliance as Code", desc: "Risk mitigation is baked into our hiring and onboarding workflows." },
              { icon: <LayoutDashboard />, title: "Data Layered Staffing", desc: "Don't just get people. Get insights on retention and performance." },
              { icon: <Globe />, title: "Bilingual Operations", desc: "Bridging the communication gap with a fully bilingual management layer." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-blue-400 mb-6 border border-slate-700">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 7 — Case Study + Wire */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Case Study */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Featured Case Study</h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row">
                <div className="bg-slate-900 md:w-1/3 p-8 flex flex-col justify-center text-white">
                  <div className="text-5xl font-bold text-blue-400 mb-2">28%</div>
                  <div className="text-lg font-medium leading-tight">Reduction in 3rd Shift Turnover</div>
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Gainesville Food Production Facility</h4>
                  <p className="text-slate-600 mb-6">How we used wage benchmarking and shift-realignment to stabilize a critical production line.</p>
                  <Link href="/insights/case-studies" className="text-blue-600 font-bold hover:underline">Read Case Study</Link>
                </div>
              </div>
            </div>

            {/* Insights Wire */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Intelligence Wire</h3>
              <div className="space-y-6">
                {[
                  { type: "PRESS", title: "FNSG Launches New OS Dashboard", date: "2 days ago" },
                  { type: "INSIGHT", title: "Q1 2025 Wage Inflation Alert", date: "1 week ago" },
                  { type: "REPORT", title: "Savannah Port Logistics Impact", date: "2 weeks ago" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group cursor-pointer">
                    <div className="text-[10px] font-bold px-2 py-1 bg-slate-200 text-slate-600 rounded uppercase mt-1">{item.type}</div>
                    <div>
                      <h5 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                      <div className="text-xs text-slate-400 mt-1">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟩 SECTION 8 — Select Your Path */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Select Your Path</h2>
            <p className="text-blue-100">Tailored resources for every stakeholder in the workforce ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Employers & Ops Leaders", btn: "Optimize Workforce", href: "/contact" },
              { title: "HR & Compliance Heads", btn: "View Risk Solutions", href: "/risk-compliance" },
              { title: "Talent & Job Seekers", btn: "Find a Job", href: "https://jobs.firstnationalstaffing.com" }
            ].map((card, idx) => (
              <div key={idx} className="bg-blue-700/50 border border-blue-500 p-8 rounded-xl text-center hover:bg-blue-700 transition-colors">
                <h3 className="text-xl font-bold mb-6">{card.title}</h3>
                <Link href={card.href} className="inline-block w-full py-3 bg-white text-blue-600 font-bold rounded hover:bg-blue-50 transition-colors">
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