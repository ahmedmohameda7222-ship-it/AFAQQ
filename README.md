# AFAAQ ARAB Website

Canonical working repository for the new AFAAQ ARAB engineering website.

## Current scope
- Phase 4B foundation
- Next.js App Router + React + TypeScript
- Tailwind CSS v4.3 + CSS design tokens
- Global responsive container/grid foundation
- Accessible header/footer primitives
- Typed company/service/project content with verification status
- SEO metadata helpers, sitemap and robots
- Reduced-motion and keyboard-focus foundations
- Placeholder route shells only — final homepage/page compositions are intentionally not implemented yet

## Important content rule
Only `verified` content should be surfaced in production. Pending project/client/service claims must not become public copy until confirmed.

## Brand rule
The current accent token and system font fallback are temporary. Replace them only after the official AFAAQ logo/brand color and final font are visually locked.

## Asset rule
All production and placeholder website assets belong in this repository. Use `public/brand/` for approved brand assets and `public/images/` for project, field, human, and temporary placeholder imagery. Placeholder/generated imagery must be clearly named and replaced before launch if it is not authentic AFAAQ project photography.
