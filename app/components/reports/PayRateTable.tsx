import React from 'react';

interface PayRateRow {
    role: string;
    low: string;
    median: string;
    high: string;
    change?: string;
}

interface PayRateTableProps {
    data: PayRateRow[];
    className?: string;
}

export const PayRateTable: React.FC<PayRateTableProps> = ({ data, className = "" }) => {
    return (
        <div className={`overflow-x-auto border border-slate-200 rounded-xl shadow-sm ${className}`}>
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900 text-white text-sm uppercase font-bold">
                    <tr>
                        <th className="p-4 border-b border-slate-800">Role</th>
                        <th className="p-4 border-b border-slate-800">Low (10%)</th>
                        <th className="p-4 border-b border-slate-800 bg-slate-800">Median</th>
                        <th className="p-4 border-b border-slate-800">High (90%)</th>
                        <th className="p-4 border-b border-slate-800">YoY Change</th>
                    </tr>
                </thead>
                <tbody className="text-slate-600 divide-y divide-slate-100 bg-white">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-medium text-slate-900">{row.role}</td>
                            <td className="p-4 font-mono text-slate-500">{row.low}</td>
                            <td className="p-4 font-mono font-bold text-blue-600 bg-blue-50/50">{row.median}</td>
                            <td className="p-4 font-mono text-slate-500">{row.high}</td>
                            <td className={`p-4 font-bold ${row.change?.includes('+') ? 'text-emerald-600' : 'text-slate-500'}`}>
                                {row.change || '-'}
                            </td>
                        </tr>
                    ))}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-400 italic">
                                No pay rate data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
