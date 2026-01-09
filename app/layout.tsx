import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <SmoothScroller>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroller>
      </body>
    </html>
  );
}
