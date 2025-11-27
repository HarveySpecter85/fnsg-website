'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function saveInitialCalculation(formData: FormData) {
  // 1. Inicializamos Supabase (ahora con await)
  const supabase = await createClient()

  // 2. Recogemos los datos
  const industry = formData.get('industry') as string
  const role = formData.get('role') as string
  const location = formData.get('location') as string
  const rate = formData.get('rate') as string

  console.log("📊 Guardando:", { industry, role })

  // 3. Insertamos en la BD
  const { data, error } = await supabase
    .from('workforce_audits')
    .insert([
      {
        target_industry: industry,
        target_role: role,
        target_location: location,
        target_pay_rate: rate ? parseFloat(rate) : 0,
        status: 'anonymous'
      }
    ])
    .select('id')
    .single()

  if (error) {
    console.error("❌ Error Supabase:", error)
    return { error: 'No se pudo guardar la auditoría', success: false }
  }

  // 4. Retornamos éxito para que el cliente redirija
  return { success: true, id: data.id }
}

export async function submitDiagnostic(formPayload: any) {
  const supabase = await createClient()

  // Extract top-level fields for easier querying if columns exist, 
  // otherwise everything goes into details/jsonb
  const { contact_info, industry, general, industry_specific } = formPayload

  const { data, error } = await supabase
    .from('workforce_audits')
    .insert([
      {
        // Map to existing columns where possible
        target_industry: industry,
        target_role: contact_info.contact_role,
        target_location: `${contact_info.city}, ${contact_info.county}`,
        status: 'diagnostic_submitted',

        // We assume these columns will be added by the user
        contact_name: contact_info.contact_name,
        contact_email: contact_info.email,
        contact_phone: contact_info.phone,
        company_name: contact_info.company_name,

        // Store everything else in a JSONB column
        details: {
          contact_info,
          general,
          industry_specific
        }
      }
    ])
    .select('id')
    .single()

  if (error) {
    console.error("❌ Error Supabase:", error)
    return { success: false, error: error.message }
  }

  return { success: true, id: data.id }
}