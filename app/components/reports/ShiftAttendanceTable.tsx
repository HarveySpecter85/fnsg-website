import React from 'react';

interface AttendanceRow {
    shift: string;
    headcount: number;
    attendanceRate: number; // percentage
    turnoverRate: number; // percentage
}

interface ShiftAttendanceTableProps {
    data: AttendanceRow[];
    className?: string;
}

export const ShiftAttendanceTable: React.FC<ShiftAttendanceTableProps> = ({ data, className = "" }) => {
    return (
        <div className={`overflow-x-auto border border-slate-200 rounded-xl shadow-sm ${className}`}>
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 text-slate-700 text-sm uppercase font-bold">
                    <tr>
                        <th className="p-4 border-b border-slate-200">Shift</th>
                        <th className="p-4 border-b border-slate-200">Headcount</th>
                        <th className="p-4 border-b border-slate-200">Attendance Rate</th>
                        <th className="p-4 border-b border-slate-200">Turnover Rate</th>
                    </tr>
                </thead>
                <tbody className="text-slate-600 divide-y divide-slate-100 bg-white">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-bold text-slate-900">{row.shift}</td>
                            <td className="p-4">{row.headcount}</td>
                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${row.attendanceRate >= 95 ? 'bg-emerald-500' : row.attendanceRate >= 90 ? 'bg-amber-500' : 'bg-red-500'}`}
                                            style={{ width: `${Math.min(row.attendanceRate, 100)}%` }}
                                        ></div>
                                    </div>
                                    <span className="font-mono text-sm">{row.attendanceRate}%</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className={`font-mono font-bold ${row.turnoverRate > 20 ? 'text-red-600' : 'text-emerald-600'}`}>
                                    {row.turnoverRate}%
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
