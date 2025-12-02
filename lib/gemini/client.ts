import fs from 'fs';
import path from 'path';

// Helper to read env var if not loaded (for standalone scripts)
function getApiKey() {
    if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf-8');
            const match = envContent.match(/GEMINI_API_KEY=(.*)/);
            if (match && match[1]) {
                return match[1].trim();
            }
        }
    } catch (e) {
        console.error("Error reading .env.local", e);
    }
    return null;
}

export async function generateImage(prompt: string, outputPath: string): Promise<boolean> {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.error("❌ No GEMINI_API_KEY found in environment or .env.local");
        return false;
    }

    console.log(`🎨 Generating image for: "${prompt.substring(0, 50)}..."`);
    console.log(`📍 Output path: ${outputPath}`);

    // Endpoint for Imagen 4 on Gemini API
    const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-preview-06-06:predict?key=${apiKey}`;

    const payload = {
        instances: [
            { prompt: prompt }
        ],
        parameters: {
            sampleCount: 1,
            aspectRatio: "16:9" // Standard for OG images
        }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`❌ API Error (${response.status}):`, errorText);
            return false;
        }

        const data = await response.json();

        if (data.predictions && data.predictions.length > 0) {
            const base64Image = data.predictions[0].bytesBase64Encoded;
            const buffer = Buffer.from(base64Image, 'base64');

            // Ensure directory exists
            const dir = path.dirname(outputPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(outputPath, buffer);
            console.log(`✅ Image saved successfully to ${outputPath}`);
            return true;
        } else {
            console.error("❌ No predictions returned from API");
            console.log("Response:", JSON.stringify(data, null, 2));
            return false;
        }

    } catch (error) {
        console.error("❌ Generation failed:", error);
        return false;
    }
}
