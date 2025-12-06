"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 45 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 48 },
    { month: "May", value: 52 }
];

export default function DemoLineChart({ data = sampleData }: { data?: any[] }) {
    return (
        <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="month" style={{ fontSize: '12px' }} />
                    <YAxis style={{ fontSize: '12px' }} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                        itemStyle={{ color: '#1e293b' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#0052ff" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
