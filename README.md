# AFAAQ ARAB Website

Canonical working repository for the new AFAAQ ARAB engineering website.

## Current implementation
- Next.js App Router + React + TypeScript
- Tailwind CSS + CSS design tokens
- Responsive Home, About, Services, Projects and Contact pages
- Individual service detail routes
- Individual project detail routes
- Accessible desktop/mobile navigation
- Client flow: automatic on desktop, manual horizontal swipe on mobile
- Project inquiry form that prepares a structured email to AFAAQ
- SEO metadata, sitemap, robots and Organization structured data
- Reduced-motion and keyboard-focus support
- Vercel validation gate before production builds

## Content authority
The previous AFAAQ website is the company-information source for this build. The new website uses a completely new design and simpler English while preserving the supplied company facts, services, projects, clients and technical information.

## Image workflow
Image creation is intentionally deferred until the page system is complete. Final AI-created visuals will be added in one coordinated pass under `public/images/`. Until then, image slots remain intentional placeholders and no placeholder should be presented as real project photography.

## Asset folders
- `public/brand/` — approved logo and brand assets
- `public/images/projects/` — project visuals
- `public/images/people/` — engineering/people visuals
- `public/images/placeholders/` — temporary implementation assets only
