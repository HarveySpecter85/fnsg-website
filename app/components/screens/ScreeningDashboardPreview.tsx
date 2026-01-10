"use client";

import {
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer
} from "recharts";

const lineData = [
    { hour: "6 AM", completions: 34 },
    { hour: "9 AM", completions: 51 },
    { hour: "12 PM", completions: 62 },
    { hour: "3 PM", completions: 58 },
    { hour: "6 PM", completions: 49 },
    { hour: "9 PM", completions: 30 },
];

const pieData = [
    { name: "Pass", value: 92 },
    { name: "Review", value: 6 },
    { name: "Fail", value: 2 }
];

const COLORS = ["#00D991", "#F6C94C", "#E16763"];

export default function ScreeningDashboardPreview() {
    return (
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-4 text-white">
                Real-Time Screening Dashboard Preview
            </h3>

            {/* KPIs */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <KPI title="Clearance Throughput" value="148/hr" />
                <KPI title="Pass Rate" value="92%" />
                <KPI title="Exception Queue" value="14 pending" />
                <KPI title="Readiness Score" value="88/100" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-6">
                <div className="h-56 bg-neutral-900 rounded-lg border border-neutral-800 p-4">
                    <p className="text-sm text-neutral-400 mb-2">Clearances Per Hour (24h)</p>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={lineData}>
                            <XAxis dataKey="hour" stroke="#444" />
                            <YAxis stroke="#444" />
                            <Tooltip />
                            <Line type="monotone" dataKey="completions" stroke="#3B82F6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="h-56 bg-neutral-900 rounded-lg border border-neutral-800 p-4">
                    <p className="text-sm text-neutral-400 mb-2">Clearance Outcome Split</p>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={65}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <p className="text-neutral-300 text-sm mt-4 leading-relaxed">
                This dashboard previews how FNSG’s Screening OS monitors medical clearance,
                document validation, readiness scoring, and exception queues in real time —
                enabling employers to reduce screening delays, improve throughput, and accelerate hiring speed.
            </p>
        </div>
    );
}

function KPI({ title, value }: { title: string; value: string }) {
    return (
        <div className="bg-neutral-800/60 rounded-lg p-4 border border-neutral-700 shadow">
            <p className="text-neutral-400 text-sm">{title}</p>
            <p className="text-xl font-semibold text-white">{value}</p>
        </div>
    );
}
