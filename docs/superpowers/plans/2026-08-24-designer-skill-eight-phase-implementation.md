# AFAAQ Designer Skill Eight-Phase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the complete eight-phase correction program from the canonical Designer Skill audit without redesigning the approved Corporate Grid Power Home from zero.

**Architecture:** Work on one isolated feature branch and one eventual PR. Each phase is an independently reviewable task group with a source-level validator that is introduced RED-first, production code changes, then GREEN verification. Preserve immutable content sources; presentation components consume the same verified `company`, `companyFacts`, `services`, and `projects` data. Full repository lint/typecheck/build is gated by Vercel preview on the eventual PR because the current sandbox cannot clone GitHub over DNS.

**Tech Stack:** Next.js 16.2.11, React 19.2.0, TypeScript 5.9, Tailwind CSS 4.3, `next/font/google`, Node-based source validators, Vercel.

**Spec:** `docs/superpowers/specs/2026-08-24-designer-skill2-website-audit-reference.md`

## Global Constraints

- Keep the approved **Corporate Grid Power** design direction.
- Keep the current Home Hero image.
- Keep the current Home Hero blend visually unchanged.
- Do not use unverified project photography, stock project imagery, or fake project-media placeholders.
- Do not change verified project/company/service facts unless the user explicitly requests content edits.
- Keep `Project Execution` numbering because it is a real sequence; remove decorative numbering elsewhere.
- Reduce repeated uppercase eyebrows and repeated heading-left/explainer-right layouts.
- Preserve the AFAAQ Power Rail as the primary signature device.
- Preserve keyboard focus, skip link, `aria-current`, mobile navigation focus trap, reduced-motion behavior, 44px+ targets, form labels, `aria-live`, and no horizontal overflow.
- Relationship rail remains on Home between Company Scale and Project Execution.
- Relationship rail remains slow, seamless, pauseable, and static under `prefers-reduced-motion`.
- All implementation/fixes for this program stay on one branch and one PR until squash merge.
- No deployment claim before Vercel reports `success` on the exact squash commit.

---

### Task 1: Phase 1 — Project Truth

**Files:**
- Create: `scripts/validate-project-truth.mjs`
- Modify: `package.json`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/projects/[slug]/page.tsx`
- Create: `src/components/afaaq/project-facts-panel.tsx`
- Modify or retire usage from: `src/components/afaaq/project-media.tsx`

**Interfaces:**
- Consumes: `verifiedProjects`, `getProjectTechnicalLabel`, `Project`, `ProjectClientMark`, `PrimaryAction`, `ArrowLink`.
- Produces: `ProjectFactsPanel({ project, compact? })` for image-free project facts presentation.

- [ ] **Step 1: Write the failing validator**

```js
// scripts/validate-project-truth.mjs
import fs from "node:fs";

const listing = fs.readFileSync("src/app/projects/page.tsx", "utf8");
const detail = fs.readFileSync("src/app/projects/[slug]/page.tsx", "utf8");

const failures = [];
if (listing.includes("<ProjectMedia")) failures.push("Projects listing still renders ProjectMedia");
if (detail.includes("<ProjectMedia")) failures.push("Project detail still renders ProjectMedia");
if (/Project\s*\{?projectNumber|Project \\d/i.test(listing)) failures.push("Projects listing still uses decorative project numbering");
if (detail.includes("Project / {projectNumber}")) failures.push("Project detail still uses decorative project numbering");
if (!detail.includes("ProjectFactsPanel")) failures.push("Project detail does not use ProjectFactsPanel");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("Project truth validation passed");
```

- [ ] **Step 2: Verify RED**

Run locally when available: `node --experimental-strip-types scripts/validate-project-truth.mjs`
Expected before implementation: FAIL because both project pages still render `ProjectMedia` and decorative numbering.

- [ ] **Step 3: Implement image-free project listing**

Replace each `/projects` row with a corporate reference record using only verified fields:

```tsx
<article className="border-t border-[var(--rule)] py-8 last:border-b">
  <Link href={`/projects/${project.slug}`} className="group grid gap-6 lg:grid-cols-12 lg:items-start">
    <div className="lg:col-span-5">
      <h2 className="font-display ...">{project.name}</h2>
      {project.relationship ? <ProjectClientMark name={project.relationship} /> : null}
    </div>
    <div className="lg:col-span-3">
      {technicalLabel ? <p className="font-technical ...">{technicalLabel}</p> : null}
      {projectMeta ? <p className="...">{projectMeta}</p> : null}
    </div>
    <div className="lg:col-span-4">
      <p>{project.scopes.join(" · ")}</p>
      <span>View Project Scope →</span>
    </div>
  </Link>
</article>
```

Remove the three dashboard-like proof cells from the listing hero unless the retained information can be expressed as one concise factual sentence.

- [ ] **Step 4: Implement `ProjectFactsPanel`**

```tsx
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";

export function ProjectFactsPanel({ project }: { project: Project }) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <section aria-label={`${project.name} project facts`} className="bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9 lg:px-10">
      <div className="h-1 w-16 bg-[var(--brand-blue)]" aria-hidden="true" />
      <div className="mt-7 grid gap-7 lg:grid-cols-12">
        <div className="lg:col-span-5">
          {technicalLabel ? <p className="font-technical text-[clamp(1.6rem,3vw,2.8rem)] font-semibold text-[var(--brand-navy)]">{technicalLabel}</p> : null}
          {locationYear ? <p className="mt-3 text-[var(--muted)]">{locationYear}</p> : null}
        </div>
        <div className="lg:col-span-7">
          {project.relationship ? <ProjectClientMark name={project.relationship} /> : null}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.scopes.map((scope) => <li key={scope}>{scope}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Replace the huge project-detail media region**

Render `<ProjectFactsPanel project={project} />` immediately after the title block. Keep summary, systems involved, next project, and inquiry CTA. Remove the unused `ProjectMedia` import and `projectNumber` variable.

- [ ] **Step 6: Wire validator into `package.json`**

```json
"test:project-truth": "node --experimental-strip-types scripts/validate-project-truth.mjs"
```

Append it before lint/typecheck in `check`.

- [ ] **Step 7: Verify GREEN and commit**

Expected validator result: `Project truth validation passed`.
Commit message: `refactor: make project references image independent`

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
- Modify as needed: `src/components/primitives/section-label.tsx`
- Modify as needed: `src/components/afaaq/capability-grid.tsx`

**Interfaces:**
- Consumes: current page content and the shared `SectionLabel` primitive.
- Produces: reduced eyebrow usage, stacked readable intros, non-decorative numbering policy, less border dependence.

- [ ] **Step 1: Add RED validator**

```js
import fs from "node:fs";
const files = [
  "src/app/page.tsx",
  "src/app/services/page.tsx",
  "src/app/services/[slug]/page.tsx",
  "src/app/projects/page.tsx",
  "src/app/projects/[slug]/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
];
const source = Object.fromEntries(files.map((file) => [file, fs.readFileSync(file, "utf8")]));
const failures = [];
const homeLabels = (source["src/app/page.tsx"].match(/<SectionLabel>/g) ?? []).length;
if (homeLabels > 3) failures.push(`Home has ${homeLabels} SectionLabel usages; target is <= 3`);
for (const [file, text] of Object.entries(source)) {
  if (/String\(index \+ 1\)\.padStart/.test(text) && !file.endsWith("page.tsx") /* tightened during implementation */) failures.push(`${file} contains decorative numbering`);
}
if (source["src/app/page.tsx"].includes("Company credentials are presented separately")) failures.push("Home still exposes design-rationale copy");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Anti-slop validation passed");
```

During implementation, make the numbering checks explicit per file so `ExecutionTrack` remains allowed.

- [ ] **Step 2: Verify RED**
Expected: FAIL from excess Home labels and current design-rationale copy.

- [ ] **Step 3: Home cleanup**
Keep no more than three meaningful labels on Home. Preserve Hero positioning and Project Inquiry; retain `Major Project References` only if needed for taxonomy. Remove labels that duplicate their section headings. Convert Technical Capabilities, Company Scale, Project Execution, and About intros to direct heading + paragraph stacks instead of repeated 12-column split intros.

Replace:

```text
Company credentials are presented separately from voltage experience so technical depth and delivery scale remain distinct.
```

with factual copy:

```text
Experience across substations and utility control infrastructure in Egypt.
```

- [ ] **Step 4: Remove decorative numbering site-wide**
Remove `01/02/...` from Core Services, About Engineering Focus, equipment lists, project scope lists, and project labels. Preserve only sequential Project Execution numbering.

- [ ] **Step 5: Reduce unnecessary borders**
Where a section is already separated by whitespace/background, remove redundant top/bottom rules. Do not remove table/list boundaries that genuinely group data.

- [ ] **Step 6: Verify GREEN and commit**
Commit message: `refactor: remove generated interface scaffolding`

---

### Task 3: Phase 3 — Services

**Files:**
- Create: `scripts/validate-service-differentiation.mjs`
- Modify: `package.json`
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/services/[slug]/page.tsx`
- Create: `src/components/afaaq/service-process-visual.tsx`
- Modify if necessary: `src/content/services.ts` only for presentation-neutral derived mappings; do not change verified facts.

**Interfaces:**
- Consumes: `Service`, service slugs, capabilities, methods, standards.
- Produces: `ServiceProcessVisual({ slug }: { slug: string })` with factual, slug-specific visual structures.

- [ ] **Step 1: Add RED validator**

```js
import fs from "node:fs";
const landing = fs.readFileSync("src/app/services/page.tsx", "utf8");
const detail = fs.readFileSync("src/app/services/[slug]/page.tsx", "utf8");
const failures = [];
if (/String\(index \+ 1\)\.padStart/.test(landing)) failures.push("Services landing still uses decorative numbering");
if (/String\(index \+ 1\)\.padStart/.test(detail)) failures.push("Service detail still uses decorative numbering");
if (!detail.includes("ServiceProcessVisual")) failures.push("Service detail lacks differentiated process visual");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Service differentiation validation passed");
```

- [ ] **Step 2: Verify RED**
Expected: FAIL on numbering and missing `ServiceProcessVisual`.

- [ ] **Step 3: Rebuild Services landing hierarchy**
Use a conventional readable intro stack, retain Testing & Commissioning and Protection & Control as primary services, convert supporting services to a compact catalogue/index instead of equal-weight cards, and present Standards & Protocols with one short contextual sentence before the list.

- [ ] **Step 4: Add `ServiceProcessVisual`**
Use a factual mapping without inventing capabilities:

```ts
const serviceFlows = {
  "testing-commissioning": ["Engineering Review", "Inspection", "Primary / Secondary Testing", "Functional Testing", "Commissioning", "Energization / Handover"],
  "protection-control": ["CT / VT", "Protection Relay", "Trip / Close Logic", "Circuit Breaker", "Control / SCADA"],
  "electrical-installation": ["Equipment", "Cabling", "Panels", "AC / DC Systems", "Checks", "Energization"],
  "power-quality": ["Measurement", "Power Quality Analysis", "Performance Checks", "Energy Monitoring", "Thermal Inspection"],
  "operation-maintenance": ["Inspection", "Preventive Maintenance", "Diagnostic Testing", "Troubleshooting", "Technical Records"],
  "engineering-consultancy": ["Inputs", "Technical Review", "Testing Procedures", "Interface Review", "Site Support"],
  "training": ["Testing Fundamentals", "Protection Systems", "Control Systems", "Secondary Systems", "Practical Site Knowledge"],
} as const;
```

Render as one calm horizontal/stacked process, not a decorative dashboard. On mobile, stack steps vertically. Do not imply sequence where the source content does not support one; for non-sequential services label the component as `Technical Scope` and visually connect rather than number.

- [ ] **Step 5: Integrate visual into each service detail**
Place it after the service intro and before long capability lists. Reduce redundant dark numbered-list treatment.

- [ ] **Step 6: Verify GREEN and commit**
Commit message: `refactor: differentiate engineering service pages`

---

### Task 4: Phase 4 — About

**Files:**
- Create: `scripts/validate-about-institutional.mjs`
- Modify: `package.json`
- Modify: `src/app/about/page.tsx`
- Modify: `src/components/afaaq/relationship-rail.tsx` to support static mode.

**Interfaces:**
- Consumes: `company`, `companyFacts`, `clients`, `AboutBrandArtwork`, `RelationshipRail`.
- Produces: `RelationshipRail` prop `motion?: "marquee" | "static"` defaulting to `"marquee"`.

- [ ] **Step 1: Add RED validator**

```js
import fs from "node:fs";
const about = fs.readFileSync("src/app/about/page.tsx", "utf8");
const rail = fs.readFileSync("src/components/afaaq/relationship-rail.tsx", "utf8");
const failures = [];
if (/String\(index \+ 1\)\.padStart/.test(about)) failures.push("About still uses decorative Engineering Focus numbering");
if (!about.includes('motion="static"')) failures.push("About does not use static relationships presentation");
if (!rail.includes('motion?: "marquee" | "static"')) failures.push("RelationshipRail lacks static mode");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("About institutional validation passed");
```

- [ ] **Step 2: Verify RED**
Expected: FAIL.

- [ ] **Step 3: Make About institutional**
Use direct Hero copy, preserve approved artwork, combine company story and facts into a deliberate profile section, remove arbitrary focus numbering, consolidate Standards + Equipment into a single Technical Reference block, and keep Projects CTA.

- [ ] **Step 4: Add static relationship mode**
For `motion="static"`, render one responsive relationship wall without duplicate items, animation, focusable marquee viewport, or continuous motion. Home keeps default marquee behavior.

- [ ] **Step 5: Verify GREEN and commit**
Commit message: `refactor: make About page institutional`

---

### Task 5: Phase 5 — Typography

**Files:**
- Create: `docs/superpowers/research/2026-08-24-afaaq-typography-comparison.md`
- Create: `scripts/validate-typography-system.mjs`
- Modify: `package.json`
- Modify: `src/app/layout.tsx`
- Modify: `src/styles/globals.css`
- Modify page/component tracking classes where necessary.

**Interfaces:**
- Consumes: brand words `precise / electrical / institutional`, existing Archivo display role, technical-data mono role.
- Produces: one documented body-font decision and restrained tracking scale.

- [ ] **Step 1: Research and document body-font candidates before code changes**
Compare at least three viable web-font systems available through a reliable catalogue/runtime. Record for each candidate: lowercase readability, numerals, industrial tone, long-form body texture, bold navigation behavior, and risk of looking like a current AI/SaaS default. Keep Archivo if it wins the display comparison; replace it only if evidence supports the change.

- [ ] **Step 2: Add RED validator after decision**
If the chosen body family replaces IBM Plex Sans, assert the chosen import/variable and absence of `IBM_Plex_Sans` from `layout.tsx`. Always assert mono is not used for generic section labels.

```js
import fs from "node:fs";
const layout = fs.readFileSync("src/app/layout.tsx", "utf8");
const label = fs.readFileSync("src/components/primitives/section-label.tsx", "utf8");
const failures = [];
if (label.includes("font-technical")) failures.push("SectionLabel must not use technical mono");
if (/tracking-\[-0\.05[0-9]em\]/.test(fs.readFileSync("src/app/services/page.tsx", "utf8"))) failures.push("Extreme negative tracking remains on Services display type");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Typography validation passed");
```

- [ ] **Step 3: Apply chosen font system**
Use `next/font/google` with `display: "swap"`; keep `IBM_Plex_Mono` only if it remains the best technical-data family. Update CSS fallbacks and body/nav weights.

- [ ] **Step 4: Normalize display tracking**
Reduce extreme `-0.048em` to `-0.052em` usage on long inner-page headings. Target approximately `-0.025em` to `-0.04em` based on the chosen display font and size.

- [ ] **Step 5: Verify GREEN and commit**
Commit message: `style: refine AFAAQ typography system`

---

### Task 6: Phase 6 — Relationship Quality

**Files:**
- Create: `scripts/validate-relationship-quality.mjs`
- Modify: `package.json`
- Modify: `src/components/afaaq/relationship-rail.tsx`
- Modify: `src/styles/globals.css`
- Create local logo assets under: `public/brand/relationships/` when valid transparent assets are available.

**Interfaces:**
- Consumes: `clients` names and existing Home placement.
- Produces: explicit pause/resume control and local-asset-first logo resolution with fallback only when necessary.

- [ ] **Step 1: Add RED validator**

```js
import fs from "node:fs";
const rail = fs.readFileSync("src/components/afaaq/relationship-rail.tsx", "utf8");
const failures = [];
if (!/Pause motion|Resume motion/.test(rail)) failures.push("Relationship rail lacks manual motion control");
if (!rail.includes("relationship-marquee__paused")) failures.push("Relationship rail lacks explicit paused state hook");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Relationship quality validation passed");
```

- [ ] **Step 2: Verify RED**
Expected: FAIL on manual control.

- [ ] **Step 3: Add motion control**
Convert the marquee component to a client component only if needed for state. Add a compact button with `aria-pressed` and text `Pause motion` / `Resume motion`. Paused state sets `animation-play-state: paused` without disabling reduced-motion fallback.

- [ ] **Step 4: Replace favicon marks where proper assets are available**
Prefer local transparent SVG/PNG files with consistent optical sizing. Do not fabricate logos. Where a verified local logo cannot be sourced during this pass, keep the existing favicon fallback rather than inventing an asset; document the remaining fallback names in the PR.

- [ ] **Step 5: Verify GREEN and commit**
Commit message: `feat: improve relationship rail controls and marks`

---

### Task 7: Phase 7 — Contact States

**Files:**
- Create: `scripts/validate-contact-states.mjs`
- Modify: `package.json`
- Modify: `src/components/afaaq/project-inquiry-form.tsx`
- Modify if required: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: existing `FormStatus`, `message`, API submission, `company.email` fallback.
- Produces: explicit semantic status panels for success/error while retaining `aria-live`.

- [ ] **Step 1: Add RED validator**

```js
import fs from "node:fs";
const form = fs.readFileSync("src/components/afaaq/project-inquiry-form.tsx", "utf8");
const failures = [];
if (!form.includes("Unable to send requirement")) failures.push("Missing explicit error-state title");
if (!form.includes("Requirement received")) failures.push("Missing explicit success-state title");
if (!form.includes('role="status"') && !form.includes('aria-live="polite"')) failures.push("Status announcement missing");
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Contact state validation passed");
```

- [ ] **Step 2: Verify RED**
Expected: FAIL on explicit titles.

- [ ] **Step 3: Implement clear success/error panels**
Keep one-page form architecture. Render a visible status title and short body. Error panel must include direct email fallback. Success panel confirms receipt and reply path. Preserve the current API behavior and file limits.

- [ ] **Step 4: Improve file upload treatment without adding drag/drop complexity**
Use a clear bordered field grouping, stronger `Choose files` button treatment, and preserve native file input accessibility.

- [ ] **Step 5: Verify GREEN and commit**
Commit message: `refactor: clarify project inquiry states`

---

### Task 8: Phase 8 — Brand Governance

**Files:**
- Create: `PRODUCT.md`
- Create: `DESIGN.md`
- Create: `scripts/validate-brand-governance.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: canonical Designer Skill audit and implemented final state.
- Produces: canonical product and design rules for future chats.

- [ ] **Step 1: Add RED validator**

```js
import fs from "node:fs";
const failures = [];
for (const file of ["PRODUCT.md", "DESIGN.md"]) {
  if (!fs.existsSync(file)) failures.push(`${file} is missing`);
}
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log("Brand governance validation passed");
```

- [ ] **Step 2: Verify RED**
Expected: FAIL because both root files do not exist.

- [ ] **Step 3: Create `PRODUCT.md`**
Document: primary audiences, commercial job, company positioning, verified messaging rules, technical specificity, geographic/company truth, benchmark category, and what AFAAQ is not.

- [ ] **Step 4: Create `DESIGN.md`**
Document: Corporate Grid Power direction, palette, final font system, Power Rail, Hero blend lock, imagery/project-photo policy, eyebrow limit, numbering rule, border/radius rules, relationship motion, accessibility baseline, mobile rules, and anti-slop constraints.

- [ ] **Step 5: Verify GREEN and commit**
Commit message: `docs: establish AFAAQ product and design governance`

---

### Task 9: Final Integration, Review, and One-PR Gate

**Files:**
- Modify: validators only if self-review exposes false positives.
- No content-source edits unless explicitly approved.

**Interfaces:**
- Consumes: all eight phase outputs.
- Produces: one reviewable PR ready for squash merge.

- [ ] **Step 1: Re-run every source validator**
Required scripts in `npm run check` after this program:

```text
test:site-url
test:content
test:project-media
test:home-polish
test:corporate-grid
test:relationship-marquee
test:project-truth
test:anti-slop
test:service-differentiation
test:about-institutional
test:typography-system
test:relationship-quality
test:contact-states
test:brand-governance
lint
typecheck
```

Existing validators that encode superseded decisions must be updated rather than deleted silently.

- [ ] **Step 2: Diff gate**
Verify no changes under `src/content/projects.ts`, `src/content/company.ts`, or verified service facts unless explicitly approved. Verify no project-photo assets were added or referenced.

- [ ] **Step 3: Create one PR**
Title: `Complete Designer Skill website correction program`

PR body must enumerate all eight phases, known remaining favicon fallbacks if any, local-test limitation, and Vercel as the full build gate.

- [ ] **Step 4: Wait for Vercel preview**
Require Vercel `success` on the current PR head before merge.

- [ ] **Step 5: Request Codex review**
Resolve every valid finding on the same PR. Re-request review after any head change.

- [ ] **Step 6: Final source/diff verification**
Confirm PR mergeable, no unresolved review threads, and only approved files changed.

- [ ] **Step 7: Squash merge**
Merge with exact expected head SHA.

- [ ] **Step 8: Production verification**
Confirm `main` points to the squash SHA and wait for Vercel `success` on that exact commit before reporting completion.

---

## Self-Review

### Spec coverage

- Phase 1 Project Truth: Task 1.
- Phase 2 Anti-AI cleanup: Task 2.
- Phase 3 Services: Task 3.
- Phase 4 About: Task 4.
- Phase 5 Typography: Task 5.
- Phase 6 Relationship Quality: Task 6.
- Phase 7 Contact States: Task 7.
- Phase 8 Brand Governance: Task 8.
- One-branch/one-PR, content integrity, accessibility, Vercel and Codex gates: Task 9 + Global Constraints.

### Placeholder scan

No `TBD`, `TODO`, or unspecified implementation placeholders are permitted. Logo sourcing is explicitly bounded: use verified local assets when available; otherwise retain current favicon fallback and report it rather than fabricating a mark.

### Type/interface consistency

- `ProjectFactsPanel({ project }: { project: Project })` is defined in Task 1 and consumed only by project pages.
- `RelationshipRail` gains `motion?: "marquee" | "static"`, default `"marquee"`; Home remains unchanged in call shape, About uses `motion="static"`.
- `ServiceProcessVisual({ slug }: { slug: string })` is defined in Task 3 and consumed by `src/app/services/[slug]/page.tsx`.
- Existing `FormStatus` remains unchanged; Phase 7 changes presentation only.
