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

---

## Design System & UX Standards (Post-Audit Feb 2026)

> These rules were established after a comprehensive design/UX audit of 150+ pages and 80+ components.
> Full report: `FNSG-Design-UX-Audit-Report.docx` in project root.

### Visual Identity: Light Theme (Mandatory)

**The FNSG website uses a LIGHT professional theme. Do NOT introduce dark backgrounds (slate-900, slate-950, gray-900, #0f172a, etc.) as primary section backgrounds.**

**Approved background palette:**
- `bg-white` — Primary page background
- `bg-brand-light` (`#F8FAFC` / `slate-50`) — Alternating section backgrounds
- `bg-slate-50` / `bg-slate-100` — Subtle section differentiation
- `bg-brand-navy` (`#242e45`) — ONLY for footer and very specific accent bars (never full sections)
- `bg-brand-primary/5` or `bg-brand-teal/5` — Subtle tinted backgrounds for feature highlights

**Prohibited background patterns:**
- ❌ `bg-slate-900`, `bg-slate-950`, `bg-gray-900`, `bg-black` as section backgrounds
- ❌ `bg-[#0f172a]` or any hardcoded dark hex as section fills
- ❌ Dark backgrounds with light text as the dominant page layout
- ❌ `bg-gradient-to-*` with dark endpoints for content sections

### Color Token Usage (MANDATORY)

**NEVER hardcode hex values in components.** Always use Tailwind brand tokens or standard Tailwind palette:

| Purpose | Use This | NOT This |
|---------|----------|----------|
| Primary buttons/CTAs | `bg-brand-primary` | `bg-[#218fea]`, `bg-blue-500` |
| Hover states | `hover:bg-brand-secondary` | `hover:bg-[#1b5ca0]` |
| Headings | `text-brand-navy` | `text-[#242e45]`, `text-slate-900` |
| Body text | `text-slate-600` | `text-[#94a3b8]`, `text-gray-500` |
| Secondary text | `text-brand-gray` | `text-[#878898]` |
| Accent icons | `text-brand-teal` | `text-[#1ea1be]`, `text-cyan-500` |
| Light backgrounds | `bg-brand-light` | `bg-[#F8FAFC]` |
| Borders | `border-slate-100` or `border-slate-200` | `border-[#e2e8f0]` |

**When Tailwind slate-* is acceptable:** Standard Tailwind colors (slate-50 through slate-600) are fine for text, borders, and backgrounds. The rule prohibits *hardcoded hex values* — use the Tailwind class names.

### Button & Component Classes (MANDATORY)

**Always use the predefined utility classes from globals.css:**

```
.btn-primary    → All primary action buttons (blue, filled)
.btn-outline    → All secondary action buttons (navy border, outlined)
.card-standard  → All content cards (white, border, shadow-sm, hover shadow-md)
.icon-wrapper   → All circular icon containers (teal/10 background)
```

**Never recreate button styles inline.** If you need a variant, extend in globals.css:
```css
.btn-primary-lg { @apply btn-primary text-lg px-8 py-4; }
.btn-primary-sm { @apply btn-primary text-xs px-4 py-2; }
```

### CTA Text Standardization

Use ONLY these 4 CTA text patterns across the entire site:

| CTA Text | Usage Context |
|----------|---------------|
| **Get Started** | Primary conversion (employer intake, consultation) |
| **Learn More** | Secondary info links (solutions, features, industries) |
| **Apply Now** | Talent-facing actions (job application, resume submit) |
| **Schedule a Call** | Direct contact/consultation booking |

Avoid: "Contact Us", "Request a Quote", "Start Your Journey", "Explore Solutions", "View Details", "Submit", "Discover", or any other variant.

### Typography Scale (Standard)

Headings are defined in `globals.css @layer base`. Do NOT override with inline Tailwind:

| Element | Mobile | Desktop | Weight | Color |
|---------|--------|---------|--------|-------|
| h1 | `text-4xl` | `md:text-5xl` | `font-bold` | `text-brand-navy` |
| h2 | `text-3xl` | `md:text-4xl` | `font-bold` | `text-brand-navy` |
| h3 | `text-2xl` | — | `font-semibold` | `text-brand-navy` |
| Body | `text-base` | — | normal | `text-slate-600` |
| Small/muted | `text-sm` | — | normal | `text-brand-gray` |

**Do NOT use** `font-extrabold` or `font-black` on headings. Do NOT use `text-5xl`, `text-6xl`, or `text-7xl` outside of the hero section.

### Section Spacing Rhythm

Use these 3 standard vertical paddings consistently:

| Section Type | Padding | Example |
|-------------|---------|---------|
| Hero / major section | `py-20 md:py-28` | Homepage hero, industry heroes |
| Standard content section | `py-16 md:py-20` | Features, testimonials, team |
| Compact section | `py-10 md:py-14` | CTAs, banners, dividers |

**Do NOT mix** py-8, py-12, py-24, py-32 randomly. Pick from the 3 tiers above.

### Shadow & Transition Tokens

**Shadows (pick one per context):**
- Cards at rest: `shadow-sm`
- Cards on hover: `shadow-md`
- Modals / overlays: `shadow-xl`
- Hero elements / elevated CTAs: `shadow-lg`

**Transitions (standard durations):**
- Interactive hover: `duration-200`
- Panel open/close: `duration-300`
- Page-level animations (GSAP): `0.6s` to `0.8s`

Do NOT use `duration-150`, `duration-500`, `duration-700`, or custom millisecond values.

---

## Accessibility Standards (WCAG 2.1 AA — MANDATORY)

### Motion & Animation Safety

**EVERY animation must respect `prefers-reduced-motion`.** This is non-negotiable.

For GSAP animations:
```tsx
useEffect(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // Skip animation entirely
  gsap.from(ref.current, { opacity: 0, y: 30, duration: 0.6 });
}, []);
```

For CSS transitions, always include:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

For Lenis smooth scrolling — disable when reduced motion is preferred:
```tsx
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) { /* initialize Lenis */ }
```

### Skip Navigation

The site MUST include a skip-to-content link as the first focusable element in `app/layout.tsx`:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
  Skip to main content
</a>
```
And the main content area must have `id="main-content"`.

### ARIA Requirements

- All `<iframe>` elements MUST have a descriptive `title` attribute
- All icon-only buttons MUST have `aria-label`
- All SVG interactive elements MUST have `role` and `aria-label`
- All modal/dialog components MUST have `aria-modal="true"` and `role="dialog"`
- Gallery images MUST show metadata on focus (not hover-only) for keyboard/touch accessibility

### Color Contrast

- Body text (`text-slate-600` on `bg-white`): ✅ passes 4.5:1
- Muted text (`text-brand-gray` on `bg-white`): verify passes 4.5:1 for small text
- **Never use** `text-slate-400` for meaningful content (fails contrast on white)
- Brand-primary (`#218fea`) on white: passes for large text only; use `text-brand-secondary` for small text links

---

## Performance Rules (MANDATORY)

### Server Components First

**Default to Server Components.** Only add `"use client"` when the component genuinely needs:
- `useState`, `useEffect`, `useRef` with DOM interaction
- Event handlers (`onClick`, `onChange`, `onSubmit`)
- Browser APIs (`window`, `document`, `localStorage`)

**Extract client interactivity into thin wrappers:**
```tsx
// ✅ GOOD: Server component with small client island
// card.tsx (server)
export function Card({ data }) {
  return <div className="card-standard"><CardActions id={data.id} /><p>{data.text}</p></div>
}
// card-actions.tsx (client)
"use client"
export function CardActions({ id }) { /* onClick handlers */ }

// ❌ BAD: Entire component is client just for one click handler
"use client"
export function Card({ data }) { /* everything */ }
```

### Lazy Loading with next/dynamic

**Heavy components MUST use `next/dynamic`:**
```tsx
import dynamic from 'next/dynamic';

const ROICalculator = dynamic(() => import('@/app/components/data-insights/roi-calculator'), {
  loading: () => <div className="h-96 animate-pulse bg-slate-100 rounded-xl" />,
  ssr: false
});

const GalleryGrid = dynamic(() => import('@/app/components/gallery/GalleryGrid'), {
  loading: () => <div className="h-64 animate-pulse bg-slate-100 rounded-xl" />
});
```

**Components that MUST be lazy-loaded:**
- ROI Calculator (Recharts ~200KB)
- Gallery Grid + Lightbox
- Data Dashboard / KPI widgets
- Any GSAP-heavy animation sections
- Workforce Diagnostic Form (multi-step)

### SmoothScroller Architecture

The Lenis `SmoothScroller` MUST NOT wrap the entire app tree as a client component. Instead, initialize Lenis via a thin client hook or component that doesn't force the whole layout client-side:
```tsx
// ✅ GOOD: Thin client wrapper, children stay server-renderable
"use client"
export function LenisProvider({ children }) {
  useEffect(() => { /* init Lenis */ return () => { /* cleanup */ } }, []);
  return <>{children}</>;
}
```

### Bundle Size Awareness

| Library | Size | Strategy |
|---------|------|----------|
| GSAP + @gsap/react | ~200KB | Lazy-load animation components |
| Recharts | ~200KB | Lazy-load dashboard/charts |
| Lenis | ~50KB | Conditional load (check reduced-motion) |
| pdfkit | ~300KB | Server-side only, never in client bundle |

---

## Navigation & Sitemap Rules

### Header Mega-Menu Completeness

All industry verticals with dedicated pages MUST appear in the header mega-menu under Solutions. Currently missing (fix required):
- Healthcare
- Environmental Services

### XML Sitemap (`sitemap.ts`)

**Every public page MUST be in the sitemap.** When adding new pages, always add the corresponding entry to `app/sitemap.ts`. Currently missing 45+ pages including:
- All blog posts (`/company/blog/*`)
- FAQ pages (`/insights/faq/*`)
- OSHA resources (`/insights/osha/*`)
- Pay rates pages (`/insights/pay-rates/*`)
- Talent pages (`/talent/*`)
- Partner pages (`/company/partners/*`)
- Gallery page (`/company/gallery`)

### Breadcrumbs

Use a single breadcrumb component (`/app/components/navigation/breadcrumbs.tsx`) across ALL inner pages. Do NOT create page-specific breadcrumb implementations.

### Footer Expansion

The footer SHOULD include these navigation sections:
- **Solutions** (current) — service offerings
- **Industries** (missing) — all 8 industry vertical links
- **Insights** (missing) — city pages, pay rates, OSHA, FAQs
- **Company** (current) — about, leadership, gallery, blog
- **Legal** (current) — privacy, terms

### URL Pattern (Single Strategy)

Use FLAT URLs for solutions: `/solutions/{solution-slug}`
Do NOT create nested duplicates: `/solutions/industries/{slug}`

---

## UX Flow Guidelines

### Employer Conversion Path

The employer journey SHOULD funnel through a single intake flow:
1. **Entry**: CTA → General inquiry form (lightweight, 3-5 fields)
2. **Qualification**: Based on company size and needs, route to:
   - Small business → automated response + scheduled call
   - Enterprise → Workforce Diagnostic form (progressive disclosure)
3. **ROI proof**: Calculator results should gate behind email capture

Do NOT create additional standalone contact forms. Consolidate to one entry point with smart routing.

### Talent Conversion Path

The talent journey is well-structured. Preserve this flow:
1. Landing → Browse Jobs → Apply Now
2. Submit Resume → GHL form with Video Pitch option
3. Confirmation → next steps

### Form UX Requirements

- Multi-section forms (3+ sections) MUST include a progress indicator (step X of Y)
- GHL iframes MUST use responsive height (not fixed pixel values). Use `postMessage` resize or `min-h-[600px] max-h-screen` approach
- Every content page MUST end with a CTA (no dead-end pages)
- The Employee Benefits page MUST include a conversion CTA

### GHL Iframe Responsive Pattern

```tsx
// ✅ GOOD: Responsive iframe container
<div className="w-full min-h-[600px] md:min-h-[800px]">
  <iframe
    src="..."
    className="w-full h-full min-h-[600px]"
    style={{ height: 'auto', minHeight: '600px' }}
    title="Descriptive Form Title"
    allow="camera; microphone"
  />
</div>

// ❌ BAD: Fixed pixel height
<iframe style={{ height: '1822px' }} />
```

---

## New Component Checklist

When creating ANY new component, verify:

- [ ] Uses `brand-*` tokens from Tailwind config (no hardcoded hex)
- [ ] Uses `.btn-primary` / `.btn-outline` / `.card-standard` where applicable
- [ ] Server Component by default (`"use client"` only if needed)
- [ ] Heavy dependencies lazy-loaded with `next/dynamic`
- [ ] All animations wrapped in `prefers-reduced-motion` check
- [ ] All interactive elements have `aria-label` or visible label
- [ ] Touch targets are minimum 44x44px
- [ ] Responsive: works at 375px, 768px, 1024px, 1440px
- [ ] CTA text follows the 4 approved patterns
- [ ] Section padding uses one of the 3 standard tiers
- [ ] Page added to `sitemap.ts` if it's a public route
