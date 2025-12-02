import { NextResponse } from 'next/server';
import { VertexAI } from '@google-cloud/vertexai';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { industry, state, position, kpi } = body;

        if (!industry || !state) {
            return NextResponse.json(
                { error: 'Industry and State are required' },
                { status: 400 }
            );
        }

        const projectId = process.env.GOOGLE_PROJECT_ID;
        const location = process.env.GOOGLE_LOCATION || 'us-central1';

        if (!projectId) {
            console.error('GOOGLE_PROJECT_ID is not set');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const googleJsonKey = process.env.GOOGLE_JSON_KEY;

        if (!googleJsonKey) {
            console.error('GOOGLE_JSON_KEY is not set');
            return NextResponse.json(
                { error: 'Server configuration error: Missing Credentials' },
                { status: 500 }
            );
        }

        const vertexAI = new VertexAI({
            project: projectId,
            location: location,
            googleAuthOptions: {
                credentials: JSON.parse(googleJsonKey)
            }
        });

        const systemInstruction = `You are a Labor Market Data Intelligence Agent. Your goal is to DISCOVER critical KPIs for a specific Industry and Location.
CRITICAL: You must ONLY use data verified from these official sources via Google Search:
- U.S. Department of Labor (DOL)
- Georgia Labor Market Explorer (GDOL)
- O*NET OnLine
- US Census Bureau
- LinkedIn Economic Graph
- EMSI / Lightcast
If a specific KPI is not requested, analyze the top 5 most relevant trends (Wages, Risk, Demographics, Unemployment, Growth).`;

        let userMessage = `Investigación de mercado para la industria '${industry}' en '${state}'.`;
        if (position) {
            userMessage += ` Enfócate en el rol de '${position}'.`;
        }
        if (kpi) {
            userMessage += ` Busca datos sobre '${kpi}'.`;
        }
        userMessage += ` Usa la fecha actual para filtrar datos recientes.`;

        const model = vertexAI.getGenerativeModel({
            model: 'gemini-1.5-pro-001',
            systemInstruction: {
                role: 'system',
                parts: [{ text: systemInstruction }]
            },
            tools: [{ googleSearchRetrieval: {} }],
        });

        const response = await model.generateContent(userMessage);
        const candidate = response.response.candidates?.[0];
        const text = candidate?.content?.parts?.[0]?.text;
        const groundingMetadata = candidate?.groundingMetadata;

        return NextResponse.json({ result: text, groundingMetadata });

    } catch (error: any) {
        console.error('Error generating labor data:', error);
        return NextResponse.json(
            { error: `Failed to generate labor data: ${error.message || error}` },
            { status: 500 }
        );
    }
}
