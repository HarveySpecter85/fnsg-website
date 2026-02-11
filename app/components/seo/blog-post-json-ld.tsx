/**
 * BlogPosting JSON-LD Schema Component
 *
 * Generates structured data for blog articles, enabling
 * Google article rich results with author, date, and publisher info.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */

interface BlogPostJsonLdProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export default function BlogPostJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}: BlogPostJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName || "First National Staffing Group",
      "url": "https://firstnationalstaffing.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "First National Staffing Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://firstnationalstaffing.com/images/logo-icon.jpg",
      },
    },
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
