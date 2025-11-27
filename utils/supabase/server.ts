// utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()

    // PEGA TUS CLAVES AQUÍ DENTRO DE LAS COMILLAS
    // ⚠️ Cuidado: No borres las comillas.
    const supabaseUrl = "https://hshpnefplxbhjhvqkfiu.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaHBuZWZwbHhiaGpodnFrZml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNDg0NjAsImV4cCI6MjA3OTYyNDQ2MH0.MXDEpRleOpwPT4OneTylSbUDQe9l45PQKPGmBylLzM4"

    return createServerClient(
        supabaseUrl,
        supabaseKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // Ignoramos errores de escritura en Server Components
                    }
                },
            },
        }
    )
}