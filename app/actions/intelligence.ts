'use server'

export async function submitMarketScan(data: any) {
    try {
        const response = await fetch('https://specterharvey.app.n8n.cloud/webhook/market/scan', {
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
