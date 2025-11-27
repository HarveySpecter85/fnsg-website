export default function LocationsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Common Hero/Header for Locations */}
            <div className="bg-slate-900 text-white py-12 px-6 text-center">
                <h2 className="text-2xl font-semibold">Local Staffing Solutions</h2>
                <p className="text-slate-300 mt-2">Connecting businesses with talent in your area.</p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-12 px-6">
                {children}
            </div>

            {/* Common Footer/Map Section */}
            <div className="bg-white border-t border-slate-200 py-12 px-6 mt-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Visit Our Local Offices</h3>
                    <p className="text-slate-600 mb-6">We have a strong presence across Georgia and beyond.</p>
                    {/* Placeholder for Map */}
                    <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500">
                        [Interactive Map Placeholder]
                    </div>
                    <div className="mt-8">
                        <p className="font-semibold">Contact Local Branch:</p>
                        <p className="text-blue-600 text-lg">1-800-STAFFING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
