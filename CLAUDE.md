# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Westwood Boys School website redesign - rebuilding the existing WordPress site as a modern Next.js application with Sanity CMS for content management.

## Tech Stack

- **Runtime:** NPM
- **Framework:** Next.js (SSG/SSR)
- **CMS:** Sanity
- **Styling:** Tailwind CSS
- **Data Fetching:** TanStack Query (React Query) for client-side data fetching and caching

### SEO Optimization

- Use Next.js Metadata API for page-level meta tags, Open Graph, and Twitter cards
- Implement structured data (JSON-LD) for school organization schema
- Generate dynamic sitemap.xml and robots.txt
- Optimize images with next/image (WebP, lazy loading, responsive sizes)
- Ensure semantic HTML structure with proper heading hierarchy
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

## Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Sanity Studio
npx sanity dev
```

## Project Structure

- `Old site/` - HTML exports from the current WordPress site (reference for content and structure)
- `Logo/` - Brand assets including PNG logo variations
- `plans/` - Implementation plans (create if needed)

## Reference Content

The `Old site/` folder contains archived HTML pages from the existing WordPress site:

- Home, Welcome pages
- About section: Our Mission, Our Journey, Message from Chair of Governors
- Academics: Curriculum, Teaching & Learning, Specialism
- School info: Fees, Term Dates, Contact, Policies
- Additional: British Values, Prayer, Sport & Recreation, The Green Dome Academy, Inspection Reports, School Performance

Use these as reference for content structure and page hierarchy when building the new site.

## Architecture Notes

### Content Flow

All site content should be managed via Sanity CMS. Fetch content at build time (SSG) for static pages or request time (SSR) where dynamic content is needed.

### Key Pages to Implement

Based on existing site structure:

- Homepage with hero/welcome section
- About section (Mission, Journey, Governors)
- Academics section (Curriculum, Teaching, Specialism)
- Admissions/Fees
- School Life (Sport, Prayer, British Values)
- Resources and Policies
- Contact

## Plans

Store all implementation plans in a `plans/` folder at the project root.

## Brand

Brand colors / Tailwind tokens. Use Tailwind. Implement custom colors in `tailwind.config.ts`:

- `brand: { blue: '#121F48' }`
- `ink: '#333333'`
- Blue is primary brand accent; gray is typography base; green is secondary accent sparingly.
- Backgrounds should be soft/clinical using tints (e.g., `bg-slate-50`, subtle blue tint sections)

## Git Workflow

- **Main branch:** `main` - production-ready code
- **Feature branches:** `feature/<name>` for new features
- **Fix branches:** `fix/<name>` for bug fixes
- Commit messages: Use conventional commits (e.g., `feat:`, `fix:`, `chore:`, `docs:`)
- Pull requests required for merging to main

## Deployment

### Railway

- **Platform:** Railway (https://railway.app)
- **Auto-deploy:** Pushes to `main` trigger automatic deployments
- **Build command:** `npm run build`
- **Start command:** `npm start`

#### Environment Variables (set in Railway dashboard)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your-token>
```

#### Railway Configuration

Create `railway.json` in project root if custom settings needed:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```
