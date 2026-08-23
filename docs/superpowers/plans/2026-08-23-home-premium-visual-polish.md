# Home Premium Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a coordinated premium visual polish pass for the AFAAQ ARAB homepage and shared chrome while preserving factual content, the approved image-blend hero and text-only project presentation.

**Architecture:** Keep the existing Next.js/Tailwind structure and improve the existing components instead of introducing a new design system. Shared primitives handle typography/action scale, Home composes the revised sections, and focused components own project portfolio, relationship, service, execution, header/footer and artwork presentation.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, existing IBM Plex Sans/Mono fonts.

**Spec:** `docs/superpowers/specs/2026-08-23-home-premium-visual-polish-design.md`

## Global Constraints
- Preserve all current project facts and service facts.
- Keep `public/images/home/home-substation-original-1440.jpg` as the Home hero photo.
- Do not render `ProjectMedia` on project surfaces.
- Preserve 320px minimum responsive support and 48px interactive targets.
- Preserve reduced-motion and focus-visible behavior.
- No decorative card/shadow/gradient-heavy redesign.

---

### Task 1: Shared typography and action hierarchy

**Files:**
- Modify: `src/components/primitives/section-label.tsx`
- Modify: `src/components/primitives/primary-action.tsx`
- Modify: `src/components/primitives/arrow-link.tsx`

**Interfaces:**
- Consumes: existing primitive props unchanged.
- Produces: stronger shared label/action hierarchy without call-site changes.

- [ ] Increase `SectionLabel` from 0.78rem to a responsive 0.8–0.84rem range and raise opacity to improve legibility.
- [ ] Increase `PrimaryAction` height/padding/text size while keeping full-width mobile behavior and tone API.
- [ ] Increase `ArrowLink` text size slightly while preserving the existing arrow motion and 48px target.
- [ ] Verify no prop/API changes are required at call sites.

### Task 2: Header and footer presence

**Files:**
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/site-footer.tsx`

**Interfaces:**
- Consumes: existing navigation IA and `company` content.
- Produces: stronger brand/navigation hierarchy and a compact legal close.

- [ ] Increase desktop header height, logo mark scale, wordmark scale and nav text/spacing while retaining sticky behavior and underline state.
- [ ] Keep mobile navigation behavior unchanged and ensure brand lockup still fits 320px.
- [ ] Recompose footer columns with more readable headings/body/link sizes.
- [ ] Replace the oversized isolated logo ending with a compact bottom brand/legal row using the existing mark and company legal/location data.

### Task 3: Home hero and proof rhythm

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: existing hero image source and copy.
- Produces: stronger hero hierarchy and tighter power-system proof section.

- [ ] Keep the hero image source and blend overlays unchanged in concept.
- [ ] Rebalance the hero copy column/headline max width and responsive type scale for cleaner line wrapping.
- [ ] Improve body text size/contrast and CTA spacing so primary/secondary hierarchy is obvious.
- [ ] Tighten the Power System Experience section and strengthen discipline labels/rules.

### Task 4: Text-only Major Projects redesign

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/afaaq/project-showcase-rail.tsx`
- Test: `scripts/validate-project-media.mjs`

**Interfaces:**
- Consumes: `verifiedProjects`, project relationship marks and project metadata.
- Produces: text-only featured project ledger plus responsive remaining-project index.

- [ ] Preserve the existing no-project-media validation.
- [ ] Recompose featured project into a compact ledger with title/technical label on the left and relationship/scope/meta/actions aligned in a structured right column.
- [ ] Simplify excess whitespace around the featured project.
- [ ] Replace the JS carousel presentation in `ProjectShowcaseRail` with a stable responsive grid/index; keep the exported component name and props so Home call sites remain unchanged.
- [ ] Increase project title/meta/relationship readability and preserve links to detail pages.
- [ ] Ensure no image imports/placeholders are introduced.

### Task 5: Relationship and service hierarchy

**Files:**
- Modify: `src/components/afaaq/relationship-rail.tsx`
- Modify: `src/components/afaaq/service-index.tsx`

**Interfaces:**
- Consumes: existing client names and verified service content.
- Produces: stronger relationship marquee and service rows.

- [ ] Increase relationship logo/mark and name scale, reduce generic separator spacing, and keep marquee/reduced-motion behavior intact.
- [ ] Rework service rows so number/title/summary/action read as one unit with clearer proportions.
- [ ] Increase summary/action legibility and add restrained row hover/focus treatment without card styling.

### Task 6: Execution process and About integration

**Files:**
- Modify: `src/components/afaaq/execution-track.tsx`
- Modify: `src/components/afaaq/about-brand-artwork.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: existing six process steps and approved About assets.
- Produces: stronger sequential process and less brochure-like About composition.

- [ ] Increase execution numeral/title hierarchy and use strong rules/progression markers to make the six-step sequence explicit.
- [ ] Keep descriptions and step order unchanged.
- [ ] Use the 16:9 approved About artwork for compact desktop presentation while retaining 4:3 on mobile.
- [ ] Reduce artwork dominance with a restrained frame and rebalance Home About columns/spacing.

### Task 7: Final CTA and page rhythm

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/styles/globals.css` only if a reusable token/helper is genuinely needed.

**Interfaces:**
- Consumes: existing final CTA copy/action.
- Produces: decisive closing CTA and consistent section rhythm.

- [ ] Tighten final CTA grid and increase support copy/action presence.
- [ ] Audit Home vertical spacing to remove dead space while preserving generous editorial breathing room.
- [ ] Avoid adding new decorative patterns; prefer rules, scale and alignment.

### Task 8: QA and merge gate

**Files:**
- Modify/Create validation only if needed for deterministic source-level checks.

**Interfaces:**
- Consumes: completed branch.
- Produces: evidence for merge decision.

- [ ] Run/trigger `npm run check` and Next production build through the Vercel Preview deployment.
- [ ] Review branch diff against `main` and confirm only intended visual/shared files changed.
- [ ] Confirm project media validation remains green and no project image metadata/rendering returns.
- [ ] Confirm Vercel Preview status is success.
- [ ] Re-check `main` has not moved unexpectedly.
- [ ] Squash merge into `main`.
- [ ] Confirm Production Vercel status is success before reporting completion.
