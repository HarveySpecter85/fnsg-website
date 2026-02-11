import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://firstnationalstaffing.com'),
  title: {
    default: "First National Staffing Group | Deploy Talent at the Speed of Demand",
    template: "%s | First National Staffing Group",
  },
  description: "Georgia's premier workforce solutions provider. Light industrial staffing, warehouse, manufacturing, and logistics talent deployment with 98.4% fill rate and 24-48 hour placement.",
  keywords: ["staffing agency Georgia", "warehouse staffing", "manufacturing staffing", "light industrial staffing", "temp agency Atlanta", "workforce solutions"],
  authors: [{ name: "First National Staffing Group" }],
  openGraph: {
    title: "First National Staffing Group",
    description: "Deploy Talent at the Speed of Demand. Georgia's premier workforce solutions provider.",
    url: "https://firstnationalstaffing.com",
    siteName: "First National Staffing Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "First National Staffing Group",
    description: "Deploy Talent at the Speed of Demand. Georgia's premier workforce solutions provider.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import dynamic from "next/dynamic";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import KnowledgeGraph from "./components/json-ld-knowledge-graph";

/* Lazy-load Lenis+GSAP only on client — no SSR needed for scroll effects */
const SmoothScrollerInit = dynamic(
  () => import("./components/ui/smooth-scroller").then((m) => m.SmoothScrollerInit),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip Navigation — WCAG 2.4.1 */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <KnowledgeGraph />
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
            </Script>
          )}
        <SmoothScrollerInit />
        <SiteHeader />
        <main id="main-content">
          {children}
        </main>
        <Analytics />
        <SiteFooter />
      </body>
    </html>
  );
}
