/**
 * FAQPage JSON-LD Schema Component
 *
 * Generates structured data for Google's FAQ rich results and
 * People Also Ask eligibility. Accepts both { question, answer }
 * and { q, a } formats used across the codebase.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */

interface FaqItemLong {
  question: string;
  answer: string;
}

interface FaqItemShort {
  q: string;
  a: string;
}

type FaqItem = FaqItemLong | FaqItemShort;

function getQuestion(item: FaqItem): string {
  return 'question' in item ? item.question : item.q;
}

function getAnswer(item: FaqItem): string {
  return 'answer' in item ? item.answer : item.a;
}

export default function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": getQuestion(faq),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": getAnswer(faq),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
