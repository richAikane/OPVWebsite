# Oahu Pride Volleyball (OPV) Website

## Overview

This is a single-page website for Oahu Pride Volleyball (OPV) - an inclusive, all-gender grass volleyball league in Honolulu, Hawaii. The site serves as the digital presence for Season 4 (Fall 2025) of the league, which is affiliated with Aikāne ʻOhana, a 501(c)(3) organization.

The application is built as a full-stack React application with Express backend, featuring a vibrant Pride-themed design with an optional "Pride Mode" that transforms the site with rainbow gradients and animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- React Query (@tanstack/react-query) for data fetching and state management

**UI Component System:**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Components follow the "New York" style variant from Shadcn
- Custom Pride Mode theme system using React Context API

**Styling Approach:**
- Tailwind CSS with extensive customization via `tailwind.config.ts`
- CSS variables for theming (light mode base with Pride Mode overlay)
- Custom color palette: Cream background (#fef9ed), Pink primary (335 85% 49%), Yellow accent (48 100% 62%)
- Typography: Inter for body text, Poppins for headings
- Responsive design with mobile-first approach

**Key Design Patterns:**
- Context-based Pride Mode toggle (`PrideModeContext`) that applies body class and rainbow gradients
- Component-based architecture with separate files for each section (Hero, About, Features, Sponsors, etc.)
- Reusable UI components in `client/src/components/ui/`
- Page-level components in `client/src/pages/`

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- Node.js runtime
- Development mode uses tsx for hot reloading
- Production build uses esbuild for bundling

**API Structure:**
- Routes registered in `server/routes.ts` with `/api` prefix
- Currently minimal backend implementation (starter template)
- Session-based architecture prepared (connect-pg-simple for sessions)

**Development Setup:**
- Vite dev server proxy for API requests
- Hot module replacement in development
- Replit-specific plugins for error handling and debugging

### Data Storage

**Database:**
- PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- Drizzle ORM for type-safe database queries
- Schema defined in `shared/schema.ts`
- Migrations managed with drizzle-kit in `migrations/` directory

**Current Schema:**
- Users table with id, username, password fields
- Prepared for authentication but not yet implemented
- Uses Zod for runtime validation via drizzle-zod

**Storage Pattern:**
- IStorage interface defines CRUD operations
- MemStorage implementation for in-memory fallback
- Database connection configured via DATABASE_URL environment variable

### External Dependencies

**Third-Party Services:**
- **Neon Database**: Serverless PostgreSQL hosting
- **TeamSideline**: Schedules and standings (https://teamsideline.com/sites/aikaneohana)
- **Eric Z Martin Photography**: Official game photos (https://ericzmartin.com/)
- **Zeffy**: Donation platform (https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league)
- **Aikāne ʻOhana**: Parent organization website (https://www.aikaneohana.com/)

**External Assets:**
- Season 4 poster image hosted on Aikāne ʻOhana CDN
- Sponsor logos (local and external)
- Google Fonts: Inter and Poppins
- Tailwind CSS via CDN in static version

**APIs & Integrations:**
- Linktree for social media aggregation (https://linktr.ee/oahupridevolleyball)
- No payment processing on site (redirects to Zeffy)
- No authentication system currently active

**Development Tools:**
- Replit-specific plugins for development environment
- ESBuild for production bundling
- PostCSS with Autoprefixer for CSS processing

**Key Features:**
- Pride Mode toggle with animated rainbow gradients
- Responsive navigation with mobile menu
- Sponsor showcase section
- Links to external tournament registration and photo galleries
- Accessibility features (focus states, alt text, semantic HTML)