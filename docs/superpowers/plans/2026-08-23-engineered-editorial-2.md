# Engineered Editorial 2.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement the premium Home/project refinement while preserving verified content and ensuring unauthenticated representative imagery is never presented as AFAAQ project evidence.

**Architecture:** Preserve the existing Next.js 16 / React 19 / Tailwind v4 structure. Keep `ProjectMedia` on the new flagship/grid/index/detail compositions so the design remains image-ready, but leave project image metadata undefined until authenticated AFAAQ photography is supplied; `ProjectMedia` then uses its branded text-only fallback. Keep the Home hero and approved About brand artwork.

**Tech Stack:** Next.js 16.2.11, React 19.2.0, TypeScript 5.9, Tailwind CSS v4, Next Image.

**Spec:** `docs/superpowers/specs/2026-08-23-engineered-editorial-2-design.md`

## Global Constraints
- Preserve verified project names, scopes, voltage/system labels, relationships, locations and years.
- Keep `public/images/home/home-substation-original-1440.jpg` as the Home hero.
- Do not assign project image metadata without authenticated AFAAQ project photography.
- Respect `public/images/projects/README.md`: no unrelated stock imagery as project evidence.
- Maintain 320px minimum responsive support, 48px interactive targets, keyboard focus and reduced-motion behavior.
- Keep project portfolio surfaces server-rendered; no carousel or horizontal scrolling.

---

### Task 1: Define integrity regression invariants
- [x] Update `scripts/validate-project-media.mjs` to reject unauthenticated project image metadata while requiring `ProjectMedia` fallback surfaces.
- [x] Update `scripts/validate-home-polish.mjs` to require the approved hero, lazy flagship fallback, company proof, approved About artwork and no `rcc.jpg` Home evidence.
- [x] Verify the new tests fail against the stock-image version before production changes.

### Task 2: Remove misleading project-image metadata
- [x] Remove `image`, `imageAlt` and `imagePosition` from DRCC, CRCC, Canal RCC and Benban project records.
- [x] Keep all factual project fields unchanged.
- [x] Retain `ProjectMedia` on Home, Projects index, project detail and project-grid surfaces so the design stays ready for real photography later.

### Task 3: Preserve the premium Home redesign without false imagery
- [x] Keep refined hero scale and edge wash.
- [x] Keep 220 / 66 / 11 kV discipline proof and verified 150+ / 60% credibility facts.
- [x] Keep the split DRCC flagship and stable three-project grid using honest ProjectMedia fallbacks.
- [x] Replace the unrelated `rcc.jpg` About image with the approved `AboutBrandArtwork`.
- [x] Keep the supporting-services hierarchy and final CTA improvements.

### Task 4: Keep project discovery/detail surfaces image-ready
- [x] Keep `ProjectMedia` on the Projects index and project detail hero positions.
- [x] With no authenticated image metadata, allow `ProjectMedia` to render the text-only project-reference fallback.
- [x] Keep project copy, metadata, relationship and inquiry behavior unchanged.

### Task 5: Source-level verification
- [x] RED: integrity validators fail against the stock-image version.
- [ ] GREEN: run both validators against the corrected branch.
- [ ] Run a TypeScript syntax parse on changed TS/TSX files.

### Task 6: Repository QA and merge gate
- [ ] Update PR with the integrity correction and resolve review feedback.
- [ ] Run repository `npm run check` and `npm run build` if an execution environment is available; otherwise state the tooling limitation explicitly.
- [ ] Review branch diff against `main` and confirm only intended files changed.
- [ ] Re-run Codex review on the final head.
- [ ] Squash merge to `main` only after available verification passes and no blocking review feedback remains.
- [ ] Confirm production/check status where the connected deployment environment permits it.
