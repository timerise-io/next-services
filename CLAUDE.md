# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 marketplace application for browsing and booking services via the Timerise.io API. The app supports whitelabel configurations where different domains can display organization-specific marketplaces.

**Tech Stack**:
- Next.js 16.0.10 (React 19, TypeScript 5)
- Tailwind CSS 4.1.18 with PostCSS 8
- Headless UI 2.2.9
- i18next 25.7.2 + react-i18next 16.5.0
- SWR 2.3.7 (data fetching)
- Zod 4.1.13 (schema validation)
- @t3-oss/env-nextjs 0.13.8 (environment variables)
- Lodash 4.17.21, React Markdown 10.1.0, React Responsive 10.0.1

## Project Structure

```
src/
├── app/              # 11 TypeScript files (Next.js App Router)
│   ├── api/          # 8 API routes (GraphQL proxies to Timerise API)
│   ├── [projectId]/  # Project-specific marketplace pages
│   └── page.tsx      # Organization marketplace (root)
├── components/       # 19 TypeScript components
│   ├── Organization/ # 5 organization-level components
│   ├── Project/      # 3 project-level components
│   └── [shared]      # 11 shared/reusable components
├── context/          # 1 TypeScript file (Whitelabel context)
├── hooks/            # 11 TypeScript files
│   └── SWR/          # 11 SWR data fetching hooks
├── models/           # 3 TypeScript files (API fetch functions)
└── utlis/            # 6 TypeScript files (utilities, types, i18n, env)
```

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build & Deploy
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Environment Setup

Environment variables are managed using **@t3-oss/env-nextjs** with Zod validation (see `src/utlis/Env.ts`).

**Required Variables**:
```bash
NEXT_PUBLIC_TIMERISE_API_ENDPOINT=https://api.timerise.io/graphql  # GraphQL endpoint (client-side)
```

**Optional Variables**:
```bash
TIMERISE_API_KEY=your_api_key_here  # Optional API key for authenticated requests (server-side)
```

Create `.env.local` for sensitive values. The `.env` file contains templates and should not include real credentials.

## Architecture

### Whitelabel System

The app uses domain-based whitelabel configuration:

- **Domain Mapping**: `src/utlis/Whitelabel.ts` maps domains to organization IDs
  - Current configuration: `bookings.bloomyhealth.pl` → `XFV6dCD8YZM3IeOiOz3z`
  - Localhost mapping commented out for development
- **Context**: `src/context/Whitelabel.ts` provides theme/branding via React Context
- **Detection**: On page load, the domain determines which organization's services to display

To add a new whitelabel domain, update the `ORGANIZATIONS` map in `src/utlis/Whitelabel.ts`.

### Routing Structure

- `/` - Organization marketplace (domain-based)
- `/[projectId]` - Project-specific marketplace

The root page redirects to timerise.io if no organization ID is found for the domain.

### Data Flow

1. **API Routes** (`src/app/api/*`): 8 Next.js API routes proxy GraphQL requests to Timerise API
   - Organization routes: `/api/organizations/[organizationId]/*` (4 routes)
   - Project routes: `/api/projects/[projectId]/*` (3 routes)
   - Generic services route: `/api/services` (1 route)

2. **Models** (`src/models/*`): 3 fetch modules that call API routes
   - `organizations.ts` - Fetch organization data
   - `projects.ts` - Fetch project data
   - `services.ts` - Fetch services with various filters

3. **SWR Hooks** (`src/hooks/SWR/*`): 11 React hooks using SWR for data fetching and caching
   - Organization hooks: `useOrganization`, `useOrganizationFeaturedServices`, `useOrganizationProjects`, `useOrganizationServices`, `useOrganizationServicesLabel`, `useOrganizationServicesLabelQuery`, `useOrganizationServicesQuery`
   - Project hooks: `useProject`, `useProjectServicesLabel`, `useProjectServicesQuery`
   - Generic hooks: `useServices`
   - Pattern: `use[Entity][Filter]` - Automatically handle loading, error states, and revalidation

4. **Components** (`src/components/*`): 19 TypeScript components organized by scope
   - `Organization/*` - Organization-level views (5 components: Home, ServicesLabels, ServicesLabelsSearch, ServicesList, ServicesSearch)
   - `Project/*` - Project-level views (3 components: Home, ServicesList, ServicesSearch)
   - Root level - Shared/reusable components (11 components: ClientOnly, EmptyList, Error, Footer, Header, LabelsBox, Loading, Logo, ProjectsBox, SearchBox, ServiceBox)

### TypeScript Configuration

- Path alias: `@/*` maps to `src/*`
- Strict mode enabled
- Type definitions in `src/utlis/Types.ts`

### Internationalization

- **Framework**: i18next v25.7.2 with react-i18next v16.5.0
- **Backend**: i18next-http-backend v3.0.2 for loading translations
- **Language Detection**: i18next-browser-languagedetector v8.2.0
- **Translation Files**: `public/locales/[lang]/translation.json`
- **Supported Languages** (18 total): bg, cs, de, el, en, es, fi, fr, hu, it, nb, nl, pl, pt, sk, sv, tr, uk
- **Configuration File**: `src/utlis/i18n.ts`
- **Detection Order**: querystring → cookie → localStorage → navigator → HTML tag
- **Query Parameter**: Use `?lang=XX` to override language
- **Fallback Language**: en (English)

### Styling

- **Tailwind CSS v4.1.18**: Utility-first styling framework
- **PostCSS v8**: CSS processing with @tailwindcss/postcss v4.1.18
- **Headless UI v2.2.9**: Unstyled, accessible UI components
- **React Responsive v10.0.1**: Responsive design utilities
- **Custom Theme**: Colors from whitelabel context (`primaryColor`, `secondaryColor`)

### Key Data Models

**Service**: Core entity with fields like `serviceId`, `title`, `shortDescription`, `price`, `locations`, `hosts`, `media`, `featured`

**Organization**: Top-level entity with `organizationId`, `title`, `labels`, branding assets

**Project**: Nested under organizations with `projectId`, `shortId`, theme settings, branding

### Client-Side Rendering

Use `ClientOnly` wrapper (src/components/ClientOnly.ts) for components requiring browser APIs or avoiding SSR hydration mismatches.

## Common Patterns

### Adding a New Service Filter

1. Add API route in `src/app/api/organizations/[organizationId]/services/` or project equivalent
2. Add fetch function in `src/models/services.ts`
3. Create SWR hook in `src/hooks/SWR/use[FilterName].ts`
4. Use hook in component with automatic loading/error handling

### Adding New Whitelabel Configuration

1. Update `WhitelabelContextType` in `src/utlis/Types.ts`
2. Update `defaultWhitelabelContextValue` in `src/context/Whitelabel.ts`
3. Update components to consume new configuration via `useWhitelabel()` hook

### GraphQL Integration

All Timerise API calls use GraphQL. Query structure:
```javascript
const query = JSON.stringify({
  query: `{ organization(organizationId:"${id}") { field1 field2 } }`
});
```

Use `Env.NEXT_PUBLIC_TIMERISE_API_ENDPOINT` for the endpoint.
