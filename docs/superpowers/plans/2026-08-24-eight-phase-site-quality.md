# AFAAQ Eight-Phase Site Quality Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the remaining AI-generated design tells from AFAAQ's full website, align all inner pages with Corporate Grid Power, and harden brand/accessibility behavior without inventing content or project imagery.

**Architecture:** Keep the existing Next.js App Router and content sources. Refactor presentation in small server-rendered components, extend source validators to make the user-approved constraints deterministic, and preserve the current Home architecture/hero while bringing Projects, Services, About and Contact into the same brand system. One implementation branch and one final PR cover all eight phases.

**Tech Stack:** Next.js 16.2.11, React 19.2, TypeScript 5.9, Tailwind CSS 4.3, next/font, existing source validators, Vercel.

**Spec:** `docs/superpowers/specs/2026-08-24-eight-phase-site-quality-design.md`

## Global Constraints
- Keep current Home hero image and hero blend visually unchanged.
- No unauthenticated project photography or fake project-media placeholders.
- Do not modify verified facts in `src/content/*` unless explicitly requested.
- Power Rail remains the primary brand signature.
- Project Execution is the only decorative-looking numbered sequence allowed because its order is meaningful.
- Reduce repeated uppercase eyebrows, split-heading scaffolds, arbitrary numbering and border framing.
- Preserve keyboard navigation, focus-visible styles, reduced-motion alternatives, 44px+ targets and mobile wrapping.
- Continuous relationship motion requires explicit pause/resume control.
- One final PR only; all review fixes stay on that PR.

---

### Task 1: Phase 1 — Project Truth

**Files:**
- Modify: `scripts/validate-project-media.mjs`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/projects/[slug]/page.tsx`
- Create: `src/components/afaaq/project-index.tsx`
- Create: `src/components/afaaq/project-facts-panel.tsx`
- Remove if unused after refactor: `src/components/afaaq/project-media.tsx`

**Interfaces:**
- Consumes: `Project`, `verifiedProjects`, `getProjectTechnicalLabel` from `src/content/projects.ts`; `ProjectClientMark`; existing CTA primitives.
- Produces: `ProjectIndex({ projects })` for `/projects`; `ProjectFactsPanel({ project })` for project detail pages.

- [ ] **Step 1: Write the failing validator**
  - Change `validate-project-media.mjs` so `/projects` and `/projects/[slug]` must *not* contain `ProjectMedia` or project image paths.
  - Assert that the listing imports `ProjectIndex` and detail imports `ProjectFactsPanel`.

- [ ] **Step 2: Run the focused validator and confirm RED**
  - Run: `npm run test:project-media`
  - Expected: FAIL because both inner project surfaces still use `ProjectMedia`.

- [ ] **Step 3: Implement image-free project index**
  - Build `ProjectIndex` as factual corporate reference rows: project name, relationship, technical label, location/year, scope summary and arrow CTA.
  - No placeholder media, decorative grid art or fake one-line diagram.

- [ ] **Step 4: Implement project facts header**
  - Build `ProjectFactsPanel` with voltage/technical profile, relationship, location, year and scope.
  - Use technical font only for voltage/year values.

- [ ] **Step 5: Replace ProjectMedia on both routes**
  - Remove large media region from detail page.
  - Remove arbitrary `Project 01` / `Project / 01` labels while preserving project navigation.

- [ ] **Step 6: Remove `project-media.tsx` if repository search confirms no remaining imports**

- [ ] **Step 7: Run focused verification**
  - Run: `npm run test:project-media`
  - Expected: PASS.

- [ ] **Step 8: Commit**
  - Commit message: `refactor: present projects as factual references`

---

### Task 2: Phase 2 — Anti-AI-Slop Cleanup

**Files:**
- Create: `scripts/validate-anti-slop.mjs`
- Modify: `package.json`
- Modify: `src/app/page.tsx`
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/services/[slug]/page.tsx`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/projects/[slug]/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/components/afaaq/capability-grid.tsx`
- Modify: `src/components/afaaq/company-scale.tsx`

**Interfaces:**
- Consumes: existing `SectionLabel` only where taxonomy is meaningful.
- Produces: site-wide presentation with fewer eyebrows, no arbitrary numbering, less split-header repetition and less border scaffolding.

- [ ] **Step 1: Add RED anti-slop validator**
  - Assert forbidden strings/patterns are absent from targeted surfaces: `Project ${number}`, service `padStart` numbering, Engineering Focus numbered scaffold, testing-equipment numbering.
  - Assert Home retains no more than three `SectionLabel` uses.
  - Assert Company Scale no longer contains the design-rationale sentence.

- [ ] **Step 2: Run `node scripts/validate-anti-slop.mjs` and confirm RED**

- [ ] **Step 3: Remove redundant Home labels and design-rationale copy**
  - Keep meaningful labels only for Hero, Major Project References and Project Inquiry.
  - Preserve Home architecture and hero blend.

- [ ] **Step 4: Convert repeated split headers to readable content stacks**
  - Use second columns only for real CTA/data/visual content.
  - Keep content widths around readable line lengths instead of filling grid columns with filler copy.

- [ ] **Step 5: Remove arbitrary numbering from non-sequential service/project/about/equipment content**
  - Preserve Project Execution sequence numbering.

- [ ] **Step 6: Reduce border framing where whitespace already communicates groups**

- [ ] **Step 7: Add validator to `npm run check` and run focused GREEN**

- [ ] **Step 8: Commit**
  - Commit message: `refactor: remove repeated ai design scaffolding`

---

### Task 3: Phase 3 — Services

**Files:**
- Create: `scripts/validate-service-system.mjs`
- Modify: `package.json`
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/services/[slug]/page.tsx`
- Create: `src/components/afaaq/service-capability-catalogue.tsx`
- Create: `src/components/afaaq/service-scope-visual.tsx`

**Interfaces:**
- Consumes: verified `services`, `equipment`, related project slugs and service capability/method/standard arrays.
- Produces: `ServiceCapabilityCatalogue` for landing page; `ServiceScopeVisual({ service })` that maps verified service content into descriptive process/system structures without adding technical claims.

- [ ] **Step 1: Add failing service-system validator**
  - Require new catalogue/visual components.
  - Reject numbered core-service scaffolding and old repeated dark list pattern.

- [ ] **Step 2: Confirm RED**

- [ ] **Step 3: Rebuild Services landing hierarchy**
  - Two core services receive primary emphasis.
  - Supporting services become a compact capability index, not four equal feature cards.
  - Standards/equipment presentation becomes contextual technical reference, without decorative numbering.

- [ ] **Step 4: Build service-specific scope visual component**
  - Testing/commissioning: workflow using existing capability/method language.
  - Protection/control: descriptive system path using only existing verified service terms.
  - Installation/O&M/engineering/power-quality: service-specific ordered or grouped structures derived from their content arrays.
  - No invented relay/system topology.

- [ ] **Step 5: Refactor service detail pages around the service-specific visual**
  - Keep related projects and inquiry CTA.
  - Avoid one identical template rhythm for every service.

- [ ] **Step 6: Run focused validator and type/lint checks**

- [ ] **Step 7: Commit**
  - Commit message: `refactor: differentiate engineering service pages`

---

### Task 4: Phase 4 — About

**Files:**
- Create: `scripts/validate-about-institutional.mjs`
- Modify: `package.json`
- Modify: `src/app/about/page.tsx`
- Create: `src/components/afaaq/static-relationship-grid.tsx`

**Interfaces:**
- Consumes: `company`, `companyFacts`, `clients`, `standards`, `equipment`, `AboutBrandArtwork`.
- Produces: `StaticRelationshipGrid({ names })` for About only.

- [ ] **Step 1: Add failing About validator**
  - Reject `RelationshipRail` on About.
  - Reject `padStart`/arbitrary focus numbering.
  - Require `StaticRelationshipGrid`.

- [ ] **Step 2: Confirm RED**

- [ ] **Step 3: Recompose About institutionally**
  - Company statement → artwork → story → verified scale → engineering focus → static relationships → technical reference → projects CTA.

- [ ] **Step 4: Consolidate standards/equipment credibility section**
  - No separate decorative label stack for every subsection.

- [ ] **Step 5: Run focused GREEN**

- [ ] **Step 6: Commit**
  - Commit message: `refactor: make about page institutional`

---

### Task 5: Phase 5 — Typography

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/styles/globals.css`
- Modify: page/component class names touched by the chosen type system
- Create: `docs/superpowers/specs/2026-08-24-afaaq-typography-decision.md`
- Create or modify: `scripts/validate-typography.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: existing `next/font` integration and Corporate Grid Power palette.
- Produces: final display/body/technical type system and documented rationale.

- [ ] **Step 1: Research current Google/available font catalogue before selecting**
  - Compare the current Archivo + IBM Plex system with real candidates against `precise / electrical / institutional`.
  - Reject generic technical reflex choices and do not introduce a dependency outside `next/font` unless necessary.

- [ ] **Step 2: Write typography decision doc**
  - Record candidates, rejection reasons, chosen pair/family, role of mono, and tracking/size guidance.

- [ ] **Step 3: Add failing typography validator**
  - Enforce mono only in technical-data components/classes.
  - Enforce final font imports and no obsolete family import after decision.

- [ ] **Step 4: Apply the chosen type system**
  - Recalibrate headline tracking and long display copy.
  - Preserve text wrapping and responsive clamps.

- [ ] **Step 5: Run typography validator + lint + typecheck**

- [ ] **Step 6: Commit**
  - Commit message: `style: establish institutional typography system`

---

### Task 6: Phase 6 — Relationship Quality

**Files:**
- Modify: `src/components/afaaq/relationship-rail.tsx`
- Modify: `src/styles/globals.css`
- Modify: `scripts/validate-relationship-marquee.mjs`
- Create local relationship logo assets under `public/brand/relationships/` only when a trustworthy source is available.

**Interfaces:**
- Consumes: `clients` from company content.
- Produces: controllable Home marquee with local marks where verified and robust text fallback otherwise.

- [ ] **Step 1: Inventory available trustworthy company marks**
  - Do not scrape or invent logos. Use local approved/official assets only.

- [ ] **Step 2: Extend validator RED for explicit pause/resume control**

- [ ] **Step 3: Add accessible pause/resume state**
  - Visible discreet button with `aria-pressed` or equivalent clear state.
  - Preserve hover/focus pause and reduced-motion static mode.

- [ ] **Step 4: Replace favicon mappings with local marks where verified**
  - Names without trustworthy marks remain text-first with initials fallback.

- [ ] **Step 5: Run relationship validator GREEN**

- [ ] **Step 6: Commit**
  - Commit message: `refactor: harden relationship motion and marks`

---

### Task 7: Phase 7 — Contact States

**Files:**
- Create: `scripts/validate-contact-states.mjs`
- Modify: `package.json`
- Modify: `src/components/afaaq/project-inquiry-form.tsx`
- Modify if needed: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: existing form submission API and `FormStatus` state.
- Produces: explicit accessible success/error status blocks while preserving form architecture.

- [ ] **Step 1: Add failing validator for explicit status titles and aria wiring**

- [ ] **Step 2: Confirm RED**

- [ ] **Step 3: Add success block**
  - Title: `Requirement received`.
  - Preserve existing explanatory message and `aria-live` behavior.

- [ ] **Step 4: Add error block**
  - Title: `Unable to send requirement`.
  - Keep the returned error message and direct email fallback.
  - Do not clear user input after failure.

- [ ] **Step 5: Improve upload styling only with native input semantics intact**

- [ ] **Step 6: Run focused GREEN**

- [ ] **Step 7: Commit**
  - Commit message: `refactor: clarify project inquiry states`

---

### Task 8: Phase 8 — Brand Governance and Final Gate

**Files:**
- Create: `PRODUCT.md`
- Create: `DESIGN.md`
- Create: `scripts/validate-brand-governance.mjs`
- Modify: `package.json`
- Modify validators as needed to reflect final approved decisions.

**Interfaces:**
- Produces canonical strategic/design context for future work.

- [ ] **Step 1: Create RED governance validator**
  - Require root `PRODUCT.md` and `DESIGN.md` and required headings/rules.

- [ ] **Step 2: Confirm RED**

- [ ] **Step 3: Write `PRODUCT.md`**
  - Audience, commercial job, positioning, Egypt market, personality `precise / electrical / institutional`, messaging principles, anti-references and accessibility commitment.

- [ ] **Step 4: Write `DESIGN.md`**
  - Tokens, typography, Power Rail, hero blend lock, project imagery policy, eyebrow limit, mono rules, border/radius rules, motion, relationship behavior, accessibility/responsive rules and stop conditions.

- [ ] **Step 5: Run governance validator GREEN**

- [ ] **Step 6: Run full repository gate**
  - `npm run check`
  - Vercel `vercel-build` / preview must succeed.
  - Confirm no `src/content/*` fact changes unless explicitly approved.
  - Confirm project surfaces contain no fake media.
  - Confirm reduced-motion and mobile wrapping invariants.

- [ ] **Step 7: Open the single PR**
  - Title: `Align full site with Corporate Grid Power design system`
  - Request Codex review.
  - Resolve all findings on the same PR.

- [ ] **Step 8: Final Designer Skill gate**
  - Review changed files against anti-slop rules and the seven visual dimensions.
  - No blocking AI-slop finding remains.

- [ ] **Step 9: Squash merge after clean review**
  - Verify `main` equals the squash SHA.
  - Verify Vercel SUCCESS on the same SHA before claiming production completion.
