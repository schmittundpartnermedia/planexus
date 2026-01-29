# Planexus GmbH Website

## Overview

This is a corporate website for Planexus GmbH, a German company specializing in laboratory containers (Laborcontainer) and modular laboratory construction (Modulbau). The site serves as a marketing and informational platform showcasing the company's services, team, and expertise in mobile laboratory solutions, BSL-2/BSL-3 labs, and smart lab integrations.

The application is a full-stack TypeScript project with a React frontend and Express backend, designed for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## Geplante Änderungen

### Astro Migration (geplant für nächste Woche)
- Umstellung von React/Vite auf Astro im SSG-Modus (Static Site Generation)
- Fertiges, statisches HTML für besseres SEO und Google-Ranking
- Tailwind CSS bleibt für Styling
- Semantisches HTML, optimierte Bilder mit astro:assets
- Automatische sitemap.xml und Meta-Tags für alle Seiten
- **Design bleibt 1:1 identisch** - nur technische Umstellung im Hintergrund

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and interactive elements
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with development HMR support via Vite middleware
- **API Pattern**: RESTful routes prefixed with `/api`
- **Static Serving**: Production builds served from `dist/public`

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Current Schema**: Basic users table with UUID primary keys
- **Storage Layer**: Abstracted through `IStorage` interface in `server/storage.ts`
- **Development**: In-memory storage implementation (`MemStorage`)
- **Database Migrations**: Drizzle Kit with migrations in `/migrations`

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (shadcn + custom)
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
│   └── public/       # Static assets
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev middleware
├── shared/           # Shared code (schemas, types)
└── script/           # Build scripts
```

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

### Build System
- Development: `tsx` for TypeScript execution with Vite HMR
- Production: esbuild bundles server, Vite builds client
- Output: `dist/` directory with `index.cjs` (server) and `public/` (client)

## External Dependencies

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Session Storage**: `connect-pg-simple` for Express sessions

### UI Dependencies
- **Radix UI**: Full suite of accessible primitives
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **Vaul**: Drawer component
- **cmdk**: Command menu component

### Development Tools
- **Replit Plugins**: Cartographer, dev banner, runtime error overlay
- **Drizzle Kit**: Database schema management

### SEO & Meta
- Custom Vite plugin for OpenGraph image handling
- Comprehensive meta tags for German market SEO
- Structured data (JSON-LD) for organization schema