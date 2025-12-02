import { generateImage } from '../lib/gemini/client';
import path from 'path';

async function main() {
    // Configuration for the missing South Fulton image
    const prompt = `OG 1200x630 with airport logistics imagery (cargo plane silhouette), warehouse icons and South Fulton outline. Title: “South Fulton Workforce Insights 2025”. Subtitle: “Airport + Logistics Corridor Intelligence”. Dark tech aesthetic, teal highlights.`;

    const outputPath = path.join(process.cwd(), 'public', 'assets', 'og', 'south-fulton-workforce-insights-2025.jpg');

    console.log("🚀 Starting External Image Generation...");

    const success = await generateImage(prompt, outputPath);

    if (success) {
        console.log("✨ Process completed successfully.");
        process.exit(0);
    } else {
        console.error("💀 Process failed.");
        process.exit(1);
    }
}

main();
