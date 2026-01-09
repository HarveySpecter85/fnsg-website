# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture Overview

This is a Next.js 16 App Router website for First National Staffing Group (FNSG), a B2B staffing platform focused on Georgia workforce intelligence. The core value proposition is "Deploy Talent at the Speed of Demand".

### Key Technologies
- **Framework**: Next.js 16 with React 19, TypeScript, Tailwind CSS v4
- **Database**: Supabase (with SSR support via `@supabase/ssr`)
- **AI/Data**: OpenAI API for labor market data
- **Animation**: GSAP + Lenis (smooth scrolling)
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts for data visualization

### Route Structure

```
/app
├── /insights          # Intelligence hub (primary content area)
│   ├── /city/{city}   # City workforce pages (14+ GA cities)
│   ├── /industry      # Industry deep dives
│   ├── /faq           # FAQs by category
│   ├── /pay-rates     # Wage benchmarking
│   └── /osha          # Safety compliance
├── /industries        # 8 industry verticals
├── /locations         # 13 Georgia service areas
├── /solutions         # Service offerings
├── /company           # About, leadership, metrics
├── /data-insights     # ROI calculator, data tools
└── /api/labor-data    # OpenAI API labor market endpoint
```

### City Pages Pattern

City pages follow a hierarchical structure for SEO and content organization:
- Main hub: `/insights/city/{city}/page.tsx`
- Nested topics: `/insights/city/{city}/{topic}/page.tsx` (e.g., osha, staffing-guide, local-pack)
- Components: `CityHero`, `CityStats`, `SeoSidebar`, `Breadcrumbs`
- Each city page includes JSON-LD LocalBusiness schema

### Component Organization (`/app/components/`)

- **anim/**: Animation components (fade-in, text-reveal, parallax, magnetic-button)
- **insights/**: City-specific components
- **reports/**: Data visualization (DataTable, Heatmap, IndexScore, PayRateTable)
- **forms/**: Request forms (request-quote-form, workforce-diagnostic-form)
- **navigation/**: Breadcrumbs components
- **intelligence-engine/**: FNSG OS™ widgets and pain-point-modal

### Data Layer

**Server Actions** (`/app/actions.ts`):
- `saveInitialCalculation()`: Saves workforce audits to `workforce_audits` table
- `submitDiagnostic()`: Submits diagnostic forms with JSONB storage

**Supabase Client** (`/utils/supabase/server.ts`): Server-side client with cookie management

**API Route** (`/api/labor-data/route.ts`): Uses OpenAI API for real-time labor market data

### Configuration

**Path Alias**: `@/*` maps to root (e.g., `@/lib/site-config`)

**Site Constants** (`/lib/site-config.ts`): Wages, metrics, leadership data, contact info

**Brand Colors** (Tailwind):
- `brand-primary`: #218fea
- `brand-secondary`: #1b5ca0
- `brand-navy`: #242e45
- `brand-teal`: #1ea1be
