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

### AI/ML Integration Stack

The project integrates THREE AI providers for workforce intelligence and analytics:

1. **OpenAI API**
   - Purpose: Real-time labor market data
   - Implementation: `/api/labor-data/route.ts`
   - Used for dynamic labor market insights and analysis

2. **Google Vertex AI**
   - Package: `@google-cloud/vertexai`
   - Purpose: Advanced analytics and predictions
   - Integrated for enterprise-grade ML capabilities

3. **Google Gemini API**
   - Package: `@google/generative-ai`
   - Client location: `/lib/gemini/client.ts`
   - Components: Intelligence engine widgets in `/app/components/intelligence-engine/`

### Environment Variables

Required environment variables for full functionality:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL for database connectivity
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key for client-side operations
- `OPENAI_API_KEY` - OpenAI API key for labor market data endpoints
- `GOOGLE_AI_API_KEY` - Google Gemini API key for generative AI features
- `GOOGLE_CLOUD_PROJECT` - Google Cloud project ID for Vertex AI integration
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` - Microsoft Clarity tracking ID (production tracking)
- `GHL_*` - GoHighLevel credentials for CRM lead form integration

### Fonts & Typography

**Primary Fonts** (loaded via next/font):
- **Geist Sans**: CSS variable `--font-geist-sans` for body and headings
- **Geist Mono**: CSS variable `--font-geist-mono` for code blocks

**Typography Plugin**:
- `@tailwindcss/typography` for prose styling in MDX content
- Enables consistent typography across blog posts and content

### SEO & Structured Data Strategy

**Search Engine Configuration**:
- `robots.ts` - Search engine crawler directives
- `sitemap.ts` - Dynamic XML sitemap generation

**Structured Data**:
- JSON-LD KnowledgeGraph component: `/app/components/json-ld-knowledge-graph.tsx`
- Per-section OpenGraph images (generated for: homepage, company, solutions, talent, contact, insights, data-insights)
- Twitter card support with `summary_large_image` format

**Metadata Template**: `"%s | First National Staffing Group"`

**Canonical Base URL**: `https://firstnationalstaffing.com`

### Analytics & Tracking

**Vercel Analytics**:
- Package: `@vercel/analytics/next`
- Integration: Embedded in root layout
- Purpose: Real-time performance monitoring and user insights

**Microsoft Clarity**:
- Conditional integration in production
- Enabled via `NEXT_PUBLIC_CLARITY_PROJECT_ID` environment variable
- Provides session replay and heatmap analytics

### MDX Blog System

**Blog Architecture**:
- Blog posts stored as `.mdx` files in `/app/company/blog/`
- Frontmatter parsing using `gray-matter` library
- Post fetching utility: `/lib/get-posts.ts`
- Category system: `/lib/get-categories.ts`
- MDX component mapping: `/mdx-components.tsx`
- Blog type definition: `/types/blog.d.ts` (BlogPost interface)

**Category-Based Routing**:
- Category pages: `/company/blog/category/[category]/page.tsx`
- Allows browsing posts by topic

### Redirects Strategy

**Next.js Redirects** (`next.config.ts`):
- `www` subdomain → non-www (permanent, 308)
- `/locations/:slug*` → `/insights/city/:slug*` (content migration)
- Legacy solution page suffixes: 7 pages with `-os` suffix → clean URLs
- `/company/leadership` → `/company/leadership-team`

### PDF Generation

**PDF Engine**:
- Library: `pdfkit@0.17.2` for server-side generation
- Report component suite in `/app/components/reports/`:
  - `DataTable` - Tabular data rendering
  - `Heatmap` - Workforce distribution visualization
  - `IndexScore` - KPI card component
  - `PayRateTable` - Wage benchmark display
  - `MetricCard` - Single metric display
  - `ShiftAttendanceTable` - Attendance tracking
  - `RiskList` - Risk assessment display
  - `RecommendationCard` - Action items

### GoHighLevel Integration

**Lead Management**:
- Component: `GHLLeadForm` for lead capture
- Integration: Connects with FNSG's CRM pipeline
- Purpose: Automated lead routing and nurturing

### Deployment & Infrastructure

**Hosting Platform**: Vercel

**Domain**: `firstnationalstaffing.com`

**Configuration**:
- `vercel.json` for Vercel-specific settings
- Vercel Analytics auto-configured for performance monitoring
- ISR (Incremental Static Regeneration): 24-hour revalidation for content freshness

### Performance & Animation Patterns

**Animation Library**: GSAP (GreenSock Animation Platform)
- Complex animations: fade-in, text-reveal, parallax effects, magnetic button interactions
- React integration via `@gsap/react`
- Animation components location: `/app/components/anim/`

**Smooth Scrolling**: Lenis
- Implementation: `SmoothScroller` wrapper component
- Enhances scroll experience across the site

### Code Conventions & Guidelines

**Naming Conventions**:
- Routes: `kebab-case` (e.g., `/city-pages`, `/data-insights`)
- Components: `PascalCase` (e.g., `CityHero`, `GHLLeadForm`)
- Utilities/lib functions: `camelCase` (e.g., `getPosts`, `calculateMetrics`)

**Imports & Aliases**:
- Use `@/*` alias for absolute imports from project root
- Example: `import { site } from '@/lib/site-config'`

**Server vs Client Components**:
- Default to Server Components for better performance
- Add `"use client"` directive only when interactivity is required

**Utility Classes**:
- Use `clsx` + `tailwind-merge` for safe className merging
- Prevents Tailwind conflicts when combining conditional classes

**Form Patterns**:
- Use React Hook Form for form state management
- Pair with Zod for schema validation
- Implement as Server Actions for direct database mutations
- Example: `submitDiagnostic()` in `/app/actions.ts`

**New City Pages**:
- Follow pattern: `/insights/city/{city}/page.tsx`
- Core components: `CityHero`, `CityStats`, `SeoSidebar`, `Breadcrumbs`
- Include JSON-LD LocalBusiness schema for SEO
- Reference similar city page for structure and data requirements

**New Industry Pages**:
- Follow pattern: `/industries/{industry-slug}/page.tsx`
- Use consistent layout with industry-specific data and case studies

### Gallery Photo Intake Protocol

When the user shares event photos (uploads, pastes, or provides paths), **ALWAYS ask these 4 questions before processing**:

1. **¿De qué evento son?** — e.g., "Holiday Party 2025", "Safety Training enero", "Food Drive con el equipo"
2. **¿Fecha aproximada?** — e.g., "diciembre 2025", "la semana pasada"
3. **¿Dónde fue?** — e.g., "en la oficina de Atlanta", "en el warehouse"
4. **¿Alguna favorita?** — If any should be marked as `featured` for homepage display

After receiving answers, execute the full `gallery-image-manager` skill pipeline (SKILL.md #12): classify → SEO alt-text → Cloudinary upload via MCP → gallery-data.ts registration → validate.

**Cloudinary config**: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dr7fov4v4` | Folder: `fnsg-gallery/{event-slug}/`
