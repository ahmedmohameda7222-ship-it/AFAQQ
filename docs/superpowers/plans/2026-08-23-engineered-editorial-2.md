# Engineered Editorial 2.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved premium visual refinement with image-led project storytelling, real Home About photography, stronger proof hierarchy and consistent responsive presentation.

**Architecture:** Preserve the existing Next.js 16 / React 19 / Tailwind v4 component structure. Restore approved project image metadata in the central project content model, render those images through the existing `ProjectMedia` component across all project surfaces, and recompose the Home page around the existing primitives and verified content. Keep project cards server-rendered and avoid adding client JavaScript.

**Tech Stack:** Next.js 16.2.11, React 19.2.0, TypeScript 5.9, Tailwind CSS v4, Next Image.

**Spec:** `docs/superpowers/specs/2026-08-23-engineered-editorial-2-design.md`

## Global Constraints
- Preserve verified project names, scopes, voltage/system labels, relationships, locations and years.
- Keep `public/images/home/home-substation-original-1440.jpg` as the Home hero.
- Use only existing project image assets already present in `public/images/projects/`.
- Maintain 320px minimum responsive support, 48px interactive targets, keyboard focus and reduced-motion behavior.
- Keep project portfolio surfaces server-rendered; no carousel or horizontal scrolling.
- Avoid decorative card/shadow/glass/gradient-heavy styling.

---

### Task 1: Define visual regression invariants

**Files:**
- Modify: `scripts/validate-project-media.mjs`
- Modify: `scripts/validate-home-polish.mjs`

**Interfaces:**
- Consumes: project content and Home/project source files.
- Produces: deterministic checks that enforce the new image-led project direction and real-photo Home About treatment.

- [x] Change project-media validation to require approved image + alt metadata on every verified project and require `ProjectMedia` on Home, project index, project detail and Home project-grid surfaces.
- [x] Change Home polish validation to require the approved hero, image-led flagship/projects, verified company facts and a real engineering About image while rejecting `AboutBrandArtwork` on Home.
- [x] Run the new project-media check against the pre-change fixture and confirm RED because project image metadata is absent.

### Task 2: Restore the approved project-image model

**Files:**
- Modify: `src/content/projects.ts`

**Interfaces:**
- Produces: `Project.image`, `Project.imageAlt` and `Project.imagePosition` values consumed by `ProjectMedia` across the site.

- [x] Restore DRCC, CRCC, Canal RCC and Benban image paths to the existing assets in `public/images/projects/`.
- [x] Restore concise descriptive alt text and stable center image positions.
- [x] Keep every factual project field unchanged.

### Task 3: Rebuild Home project storytelling and proof

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/afaaq/project-showcase-rail.tsx`

**Interfaces:**
- Consumes: `verifiedProjects`, `companyFacts`, `ProjectMedia`, existing CTA/label/relationship primitives.
- Produces: image-led flagship DRCC case study, image-led three-project grid, stronger technical proof strip and real-photo About composition.

- [x] Preserve the Home hero photo and copy while reducing the image wash and strengthening headline/body scale.
- [x] Pair 220 / 66 / 11 kV with their technical disciplines and add only the verified 150+ and 60% company proof facts.
- [x] Recompose DRCC as a split image/case-study block with relationship, scope, location and action.
- [x] Render the remaining three projects as a server-rendered image grid with consistent 16:10 media and restrained hover movement.
- [x] Replace Home brochure artwork with the existing RCC commissioning/control photograph and verified company facts.
- [x] Group secondary service disciplines under a clear supporting-services label.

### Task 4: Restore image-led project index and detail pages

**Files:**
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/projects/[slug]/page.tsx`

**Interfaces:**
- Consumes: `ProjectMedia` and restored project metadata.
- Produces: consistent project photography on project discovery and detail surfaces.

- [x] Add a consistent optimized image to every Projects index entry.
- [x] Add the project hero image between project title metadata and scope on project detail pages.
- [x] Keep project copy, metadata, relationship and inquiry behavior unchanged.

### Task 5: Source-level verification

**Files:**
- Verify: `scripts/validate-project-media.mjs`
- Verify: `scripts/validate-home-polish.mjs`

- [x] Run the project-media invariant after implementation and confirm GREEN.
- [x] Run the Home visual-invariant check and confirm GREEN.
- [x] Run a TypeScript syntax parse on changed TS/TSX files and confirm no parser errors before pushing.

### Task 6: Repository QA and merge gate

**Files:**
- No production files unless CI exposes a real defect.

- [ ] Push all code + spec/plan changes in one feature-branch commit to avoid repeated Vercel preview deployments.
- [ ] Run repository `npm run check` / Vercel Preview build and confirm success.
- [ ] Review branch diff against `main` and confirm only intended files changed.
- [ ] Perform available visual/responsive preview inspection and document any tooling limitation if browser screenshot comparison is unavailable.
- [ ] Open a PR and verify the final branch head did not drift.
- [ ] Squash merge to `main` only after verification passes.
- [ ] Confirm production deployment/check status before reporting completion.
