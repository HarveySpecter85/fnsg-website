'use server'

export async function submitMarketScan(data: any) {
    try {
        const webhookUrl = process.env.N8N_WEBHOOK_URL!
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error(`Webhook failed: ${response.statusText}`)
        }

        return { success: true }
    } catch (error) {
        console.error('Error submitting market scan:', error)
        return { success: false, error: 'Failed to submit scan' }
    }
}
