import React from 'react';

interface Column {
    header: string;
    accessor: string;
    className?: string;
}

interface DataTableProps {
    columns: Column[];
    data: any[];
    className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data, className = "" }) => {
    if (!data || data.length === 0) {
        return (
            <div className={`p-8 text-center border border-slate-200 rounded-xl bg-slate-50 text-slate-500 italic ${className}`}>
                No data available.
            </div>
        );
    }

    return (
        <div className={`overflow-x-auto border border-slate-200 rounded-xl shadow-sm ${className}`}>
            <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 text-slate-700 text-sm uppercase font-bold">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className={`p-4 border-b border-slate-200 ${col.className || ''}`}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-slate-600 divide-y divide-slate-100 bg-white">
                    {data.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                            {columns.map((col, colIdx) => (
                                <td key={colIdx} className={`p-4 ${col.className || ''}`}>
                                    {row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
