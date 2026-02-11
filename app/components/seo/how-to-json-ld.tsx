/**
 * HowTo JSON-LD Schema Component
 *
 * Generates structured data for process/step content, enabling
 * Google's HowTo rich results (step-by-step cards in SERPs).
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/how-to
 */

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, e.g. "PT30M" for 30 minutes
}

export default function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: HowToJsonLdProps) {
  if (!steps || steps.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { totalTime }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.url && { url: step.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
