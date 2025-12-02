import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

const INDUSTRY_CONFIG = {
    "Manufacturing": {
        label: "Manufacturing",
        painPoints: ["Skill Gaps / Training", "Line Stoppages", "Shift Coverage (2nd/3rd)", "Safety / OSHA Fines"]
    }
};

interface IntelligenceWidgetProps {
    industry?: string;
    defaultLocation?: string;
}

export function IntelligenceWidget({ industry, defaultLocation }: IntelligenceWidgetProps = {}) {
    // Static data matching the provided image
    const currentIndustryConfig = INDUSTRY_CONFIG["Manufacturing"];
    const formData = {
        pain_point: "Safety / OSHA Fines",
        headcount: 50
    };

    return (
        <div className="w-full max-w-md mx-auto bg-slate-900 border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10 font-mono relative">
            {/* Header / Status Bar */}
            <div className="bg-slate-950/50 p-3 border-b border-cyan-500/20 flex justify-between items-center text-xs text-cyan-400">
                <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>SYSTEM STATUS: ONLINE</span>
                </div>
                <span>V.2.0.4</span>
            </div>

            <div className="p-6 relative min-h-[400px]">
                {/* Phase 2: The Architect (Static View) */}
                <div className="space-y-6">
                    <div className="text-center space-y-1">
                        <h3 className="text-lg font-bold text-white">Market Data Identified</h3>
                        <p className="text-cyan-400 text-sm font-semibold">Unlock Strategy Deck</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs text-slate-400 uppercase tracking-wider">Primary Challenge</label>
                            <div className="grid grid-cols-1 gap-2">
                                {currentIndustryConfig.painPoints.map((point) => (
                                    <div
                                        key={point}
                                        className={`flex items-center p-3 rounded-lg border transition-all pointer-events-none ${formData.pain_point === point
                                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                                            : 'bg-slate-800 border-slate-700 text-slate-300'
                                            }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${formData.pain_point === point ? 'border-cyan-500' : 'border-slate-500'
                                            }`}>
                                            {formData.pain_point === point && <div className="w-2 h-2 rounded-full bg-cyan-500" />}
                                        </div>
                                        <span className="text-sm">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                                <label className="text-slate-400 uppercase tracking-wider">Target Headcount</label>
                                <span className="text-cyan-400 font-mono">{formData.headcount} Employees</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="500"
                                step="10"
                                value={formData.headcount}
                                readOnly
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-default accent-cyan-500 pointer-events-none"
                            />
                            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                                <span>10</span>
                                <span>500+</span>
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-default pointer-events-none"
                    >
                        GENERATE CUSTOM PROPOSAL
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
