import type { Metadata } from "next";
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
  title: {
    default: "First National Staffing OS – Workforce Intelligence Platform",
    template: "%s | First National Staffing",
  },
  description: "Workforce Operations Intelligence for Georgia Employers. Industrial staffing, compliance, insights and analytics connected in a single OS.",
  metadataBase: new URL('https://firstnationalstaffing.com'),
};

import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { SmoothScroller } from "./components/ui/smooth-scroller";
import KnowledgeGraph from "./components/json-ld-knowledge-graph";

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
        <SmoothScroller>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroller>
      </body>
    </html>
  );
}
