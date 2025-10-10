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
- **Trade Winds Sunset Color Palette:**
  - Pacific Navy #0B1F2A (193, 58%, 10%) - Primary text and headers
  - Lagoon #00A7C7 (190, 100%, 39%) - Secondary buttons and CTAs
  - Hibiscus #FF3E81 (339, 100%, 62%) - Primary buttons and highlights
  - Plumeria #FFD166 (42, 100%, 70%) - Accent color and badges
  - Sand #F7EFEA (23, 48%, 94%) - Background color
  - Signature gradient: `linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)`
- **Typography System:**
  - Headings (h1, h2, h3): Barlow Condensed (font-display font-bold text-gray-800)
  - Body text: Inter (text-gray-700 for main content, text-gray-800 for emphasis)
  - Buttons/labels: font-semibold
  - Consistent font weights across all sections
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
- Comprehensive homepage sections:
  - Hero section with Season 4 poster and CTAs
  - About OPV with league information
  - Feature cards highlighting league benefits
  - Season 4 Schedule with division cards (Competitive, Intermediate, Social) and PDF downloads
  - Captain's Corner with resource links for team captains (using Lucide icons)
  - Sponsors showcase with 6 sponsor logos and "Become a Sponsor" CTA
  - Tournament registration section
  - Board of Directors with member photos and titles
  - Final CTA and footer
- Links to external tournament registration and photo galleries
- Accessibility features (focus states, alt text, semantic HTML, data-testid attributes)
- Design compliance: No emoji icons in UI (uses Lucide React icons instead), no single-side borders on rounded elements

**Recent Updates (October 2025):**
- Updated to new transparent OPV logo featuring rainbow arc, volleyball, Diamond Head mountain, and hibiscus flower
- Standardized typography across all sections using Barlow Condensed for headings and Inter for body text
- Improved text contrast with text-gray-700/800 color scheme
- Removed all emoji characters from UI elements per design guidelines
- Implemented ScheduleSection with division-specific schedules and PDF downloads
- Added CaptainsCornerSection with resource cards for team captains
- Updated SponsorsSection with grid layout and sponsor names
- Created BoardSection showing all board members with photos and titles