export default function ResultsPage({ searchParams }: { searchParams: { token: string } }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center p-10">
                <h1 className="text-3xl font-bold text-slate-900">¡Auditoría Recibida! 🚀</h1>
                <p className="text-slate-600 mt-2">Tu ID de sesión segura es: {searchParams.token}</p>
                <p className="text-sm text-slate-400 mt-4">(Aquí conectaremos Perplexity en el siguiente paso)</p>
            </div>
        </div>
    )
}