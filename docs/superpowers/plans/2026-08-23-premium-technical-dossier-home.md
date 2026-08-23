# Premium Technical Dossier Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the AFAAQ ARAB Home page into the approved Engineered Editorial + Technical Dossier direction, making the project portfolio intentionally image-free and strengthening proof, services, execution, About, CTA, and shared chrome without changing verified facts.

**Architecture:** Keep the existing Next.js 16 / React 19 / Tailwind v4 architecture and server-rendered Home composition. Introduce a focused Home project-dossier component for the featured and secondary project records, keep the central project content model factual and photo-free, and refine existing shared components rather than adding a parallel design system. Source-level validators will encode the no-project-photo rule and the structural invariants before visual implementation, then the existing `npm run check` / `vercel-build` gate will validate the repository.

**Tech Stack:** Next.js 16.2.11, React 19.2.0, TypeScript 5.9, Tailwind CSS v4, Next Image, existing IBM Plex Sans / IBM Plex Mono font system.

**Spec:** `docs/superpowers/specs/2026-08-23-premium-technical-dossier-home-design.md`

## Global Constraints
- Do not introduce project photos, stock project photos, fake site imagery, or rendered project scenes.
- Keep the current Home hero image: `/images/home/home-substation-original-1440.jpg`.
- Keep verified project names, clients/relationships, scopes, voltage labels, locations, years, and company claims unchanged.
- Keep the current AFAAQ About artwork and improve its framing/integration instead of removing it.
- Keep the warm-neutral canvas, graphite service/CTA bands, IBM Plex Sans/Mono typography family, and restrained blue brand accent.
- Keep the project portfolio server-rendered and free of carousel behavior.
- Preserve keyboard focus, semantic links, reduced-motion behavior, and 320px minimum responsive support.
- Avoid generic rounded cards, heavy shadows, glassmorphism, decorative gradients, icon overload, and flashy animation.
- Decorative technical linework must remain abstract and `aria-hidden`; project facts stay real HTML text.
- Hero remains the principal priority/LCP image; below-fold artwork stays non-priority.
- Do not add client-side JavaScript for purely visual Home project presentation.

---

## File Structure

### New file
- `src/components/afaaq/project-dossier.tsx`
  - Owns the intentional image-free project language used on Home.
  - Exports `FeaturedProjectDossier` and `ProjectDossierRecord`.
  - Consumes `Project`, `ProjectClientMark`, `getProjectTechnicalLabel`, and standard links only.
  - Contains decorative technical linework as CSS/SVG with `aria-hidden="true"`; no factual schematic claims.

### Existing files to modify
- `scripts/validate-home-polish.mjs`
  - Encodes Home structural/visual invariants for the new dossier direction.
- `scripts/validate-project-media.mjs`
  - Continues rejecting unauthenticated project image metadata while allowing Home to use dossier components rather than `ProjectMedia`.
- `src/app/page.tsx`
  - Re-composes proof, featured project, About balance, and final CTA; keeps hero content and facts.
- `src/components/afaaq/project-showcase-rail.tsx`
  - Becomes a stable grid of `ProjectDossierRecord` entries with no media aspect-ratio block.
- `src/components/afaaq/relationship-rail.tsx`
  - Improves relationship/logo optical hierarchy without changing the data source.
- `src/components/afaaq/service-index.tsx`
  - Tightens primary service hierarchy; Home continues to render supporting disciplines separately.
- `src/components/afaaq/execution-track.tsx`
  - Turns six equal cells into a continuous, responsive engineering progression.
- `src/components/afaaq/about-brand-artwork.tsx`
  - Refines frame/background integration while preserving both existing assets fully visible.
- `src/components/layout/site-header.tsx`
  - Small optical alignment/readability pass only.
- `src/components/layout/site-footer.tsx`
  - Small readability/alignment pass only.
- `src/styles/globals.css`
  - Modify only if a reusable technical-guide token/helper is genuinely needed; prefer Tailwind classes first.

### Deliberately unchanged content model
- `src/content/projects.ts`
  - Do not add `image`, `imageAlt`, or `imagePosition` values.
  - Do not change verified project facts.

---

### Task 1: Encode the New Home Dossier Invariants

**Files:**
- Modify: `scripts/validate-home-polish.mjs`
- Modify: `scripts/validate-project-media.mjs`

**Interfaces:**
- Consumes: source text from Home/project components and `projects` from `src/content/projects.ts`.
- Produces: deterministic RED/GREEN checks for the new Home project-dossier structure and no-project-photo integrity rule.

- [ ] **Step 1: Replace the old Home `ProjectMedia` requirements with dossier requirements**

In `scripts/validate-home-polish.mjs`, keep the hero/About/company-fact assertions and replace project-placeholder checks with these structural assertions:

```js
assert(home.includes("FeaturedProjectDossier"), "Home must render the featured project as a technical dossier.");
assert(!home.includes("<ProjectMedia"), "Home must not render a media-shaped project placeholder.");
assert(projectIndex.includes("ProjectDossierRecord"), "Home project portfolio must render technical dossier records.");
assert(!projectIndex.includes("ProjectMedia"), "Home secondary project records must not render media placeholders.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must remain server-rendered.");
assert(projectIndex.includes("lg:grid-cols-3"), "Home project portfolio must retain a stable three-column desktop grid.");
assert(home.includes("Company Proof"), "Home must visually label company proof separately from voltage experience.");
```

Keep:

```js
assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved substation photo.",
);
assert(home.includes("AboutBrandArtwork"), "Home About must keep the approved AFAAQ artwork.");
assert(!home.includes('/images/projects/'), "Home must not render project photography.");
assert(home.includes("companyFacts"), "Home proof area must expose verified company credibility facts.");
```

- [ ] **Step 2: Update project-media integrity to distinguish Home dossier surfaces from inner-page media fallbacks**

Change `scripts/validate-project-media.mjs` to keep the per-project metadata assertions, then validate Home dossier files separately from inner project pages:

```js
const dossierSurfaces = [
  "../src/app/page.tsx",
  "../src/components/afaaq/project-showcase-rail.tsx",
];

for (const relativePath of dossierSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(!source.includes("ProjectMedia"), `${relativePath} must not use a media-shaped project placeholder.`);
}

const innerProjectSurfaces = [
  "../src/app/projects/page.tsx",
  "../src/app/projects/[slug]/page.tsx",
];

for (const relativePath of innerProjectSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(source.includes("ProjectMedia"), `${relativePath} must keep the honest image-ready fallback surface.`);
}
```

- [ ] **Step 3: Run the two validators to verify RED before production changes**

Run:

```bash
npm run test:project-media
npm run test:home-polish
```

Expected: both commands fail because Home and `project-showcase-rail.tsx` still use `ProjectMedia` and `FeaturedProjectDossier` / `ProjectDossierRecord` do not exist yet.

- [ ] **Step 4: Commit the failing invariants**

```bash
git add scripts/validate-home-polish.mjs scripts/validate-project-media.mjs
git commit -m "test: define premium Home dossier invariants"
```

---

### Task 2: Build the Image-Free Project Dossier Primitive

**Files:**
- Create: `src/components/afaaq/project-dossier.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/afaaq/project-showcase-rail.tsx`
- Test: `scripts/validate-home-polish.mjs`
- Test: `scripts/validate-project-media.mjs`

**Interfaces:**
- Consumes: `Project`, `getProjectTechnicalLabel(project)`, `ProjectClientMark`, and project-detail routes.
- Produces:

```ts
export function FeaturedProjectDossier({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}): JSX.Element;

export function ProjectDossierRecord({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}): JSX.Element;
```

- [ ] **Step 1: Create the new server component with a technical identity panel**

Create `src/components/afaaq/project-dossier.tsx` with no `"use client"` directive. Use this structure for the featured project:

```tsx
import Link from "next/link";
import { ProjectClientMark } from "@/components/afaaq/project-client-mark";
import { getProjectTechnicalLabel, type Project } from "@/content/projects";

function TechnicalGuide() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="absolute inset-x-0 top-[28%] border-t border-white/10" />
      <span className="absolute inset-x-0 top-[64%] border-t border-white/10" />
      <span className="absolute bottom-0 left-[18%] top-0 border-l border-white/[0.07]" />
      <span className="absolute bottom-8 right-8 h-2 w-2 border border-white/30" />
    </div>
  );
}
```

The featured identity zone must contain real text for:

```tsx
<p>PROJECT REF / {projectNumber}</p>
<p>{getProjectTechnicalLabel(project)}</p>
<h3>{project.name}</h3>
<p>{[project.location, project.year].filter(Boolean).join(" · ")}</p>
```

The scope zone must render relationship, scopes, and the detail link. Do not duplicate the project name in two visual zones.

- [ ] **Step 2: Add `ProjectDossierRecord` for the three secondary projects**

Each record must be content-height, not aspect-ratio-height. Use a bordered article with reference/technical label at top, title, relationship, metadata, scope, and arrow action. The entire record can be linked, but keep semantics valid and retain visible focus styles.

Core record structure:

```tsx
<article className="group min-w-0 border-t border-[var(--rule)] py-6 sm:py-7 lg:py-8">
  <Link href={`/projects/${project.slug}`} className="block min-h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4">
    {/* reference + technical label */}
    {/* title */}
    {/* relationship */}
    {/* location/year */}
    {/* scopes + arrow */}
  </Link>
</article>
```

Do not use `Image`, `ProjectMedia`, fixed `aspect-*`, rounded cards, shadows, or gradients.

- [ ] **Step 3: Replace Home featured `ProjectMedia` composition with `FeaturedProjectDossier`**

In `src/app/page.tsx`:

```tsx
import { FeaturedProjectDossier } from "@/components/afaaq/project-dossier";
```

Replace the current featured `<article>` containing `<ProjectMedia>` with:

```tsx
<FeaturedProjectDossier
  project={featuredProject}
  projectNumber={featuredNumber}
/>
```

Remove now-unused `ProjectClientMark`, `ProjectMedia`, and `getProjectTechnicalLabel` imports/locals from Home if no longer needed elsewhere.

- [ ] **Step 4: Replace secondary `ProjectMedia` cards with `ProjectDossierRecord`**

In `src/components/afaaq/project-showcase-rail.tsx`, remove `ProjectMedia`, direct duplicated record markup, and import:

```tsx
import { ProjectDossierRecord } from "@/components/afaaq/project-dossier";
```

Render:

```tsx
<div className="mt-6 grid gap-x-7 gap-y-0 border-b border-[var(--rule)] lg:grid-cols-3 xl:gap-x-9">
  {projects.map((project) => {
    const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
    const projectNumber = String(projectIndex + 1).padStart(2, "0");

    return (
      <ProjectDossierRecord
        key={project.slug}
        project={project}
        projectNumber={projectNumber}
      />
    );
  })}
</div>
```

- [ ] **Step 5: Run dossier validators to verify GREEN**

Run:

```bash
npm run test:project-media
npm run test:home-polish
```

Expected: PASS, with no unauthenticated project-image metadata and no Home `ProjectMedia` placeholder surfaces.

- [ ] **Step 6: Commit the dossier implementation**

```bash
git add src/components/afaaq/project-dossier.tsx src/app/page.tsx src/components/afaaq/project-showcase-rail.tsx
git commit -m "feat: replace Home project placeholders with technical dossiers"
```

---

### Task 3: Separate Voltage Experience from Company Proof and Refine Hero Hierarchy

**Files:**
- Modify: `src/app/page.tsx`
- Test: `scripts/validate-home-polish.mjs`

**Interfaces:**
- Consumes: existing `voltageExperience`, filtered `credibilityFacts`, current hero image/copy/actions.
- Produces: two semantically distinct proof layers and improved opening readability without content changes.

- [ ] **Step 1: Add an explicit proof-layer invariant before styling**

Ensure `scripts/validate-home-polish.mjs` contains:

```js
assert(home.includes("Company Proof"), "Home must label company proof separately from voltage experience.");
assert(home.includes("Power System Experience"), "Home must preserve the voltage-experience proof layer.");
```

Run:

```bash
npm run test:home-polish
```

Expected: FAIL until the new label is added.

- [ ] **Step 2: Split the proof composition in Home**

Keep `Power System Experience` above the 220/66/11 row. After that row, render a new labeled credential layer:

```tsx
<div className="border-t border-[var(--rule)] pt-5 sm:pt-6">
  <p className="font-technical m-0 text-[0.8rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
    Company Proof
  </p>
  <div className="mt-4 grid border-t border-[var(--rule)] md:grid-cols-2">
    {credibilityFacts.map(/* existing verified facts */)}
  </div>
</div>
```

Make the `150+ / 60%` numerals materially smaller than `220 / 66 / 11` but larger than body copy. Preserve exact fact text.

- [ ] **Step 3: Refine hero body/action hierarchy only**

Keep the hero source, headline, and blend concept. Adjust only:
- body max width/size/line-height for readability,
- CTA spacing and primary-action presence,
- headline max-width or clamp only if needed for stable desktop line breaks.

Do not add new copy, overlays, motion, or project imagery.

- [ ] **Step 4: Run Home invariant**

```bash
npm run test:home-polish
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx scripts/validate-home-polish.mjs
git commit -m "feat: separate voltage experience from company proof"
```

---

### Task 4: Strengthen Client Relationships and Service Hierarchy

**Files:**
- Modify: `src/components/afaaq/relationship-rail.tsx`
- Modify: `src/components/afaaq/service-index.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: existing `clients`, `services`, and `supportingDisciplines` data unchanged.
- Produces: stronger credibility rail, clearer primary service rows, and a legible four-item secondary service tier.

- [ ] **Step 1: Refine relationship mark sizing without changing sources**

In `relationship-rail.tsx`:
- Keep the existing authenticated/fallback logic.
- Increase visual container and name scale only enough to make logos/names legible at normal desktop zoom.
- Reduce excessive separator spacing if it causes low information density.
- Preserve `relationship-marquee__track`, reduced-motion CSS behavior, and semantic region label.

Do not add a new logo service or hard-code unverified clients.

- [ ] **Step 2: Refine primary service rows**

Keep the existing 12-column structure, but ensure the desktop proportions are intentional:

```tsx
<p className="... md:col-span-1">01</p>
<div className="... md:col-span-5">{/* title */}</div>
<div className="... md:col-span-5 md:col-start-8">{/* summary + action */}</div>
```

Increase summary/action contrast and keep hover/focus restrained. Do not convert rows into cards.

- [ ] **Step 3: Rebuild supporting disciplines as a visible second tier in Home**

Keep all four names exactly. Render stronger cells with optional generated sequence numbers only:

```tsx
{supportingDisciplines.map((discipline, index) => (
  <div key={discipline} className="grid min-h-24 grid-cols-[auto_1fr] gap-4 border-t border-white/16 py-5 lg:min-h-28 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
    <span className="font-technical text-[0.76rem] text-white/52">
      {String(index + 3).padStart(2, "0")}
    </span>
    <span className="text-[1.08rem] font-medium leading-6 text-white/88 sm:text-[1.14rem]">
      {discipline}
    </span>
  </div>
))}
```

The generated `03–06` indexes are navigational presentation only, not new factual claims.

- [ ] **Step 4: Run lint/typecheck on touched components**

Run:

```bash
npm run lint
npm run typecheck
```

Expected: both exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/afaaq/relationship-rail.tsx src/components/afaaq/service-index.tsx src/app/page.tsx
git commit -m "feat: strengthen relationship and service hierarchy"
```

---

### Task 5: Make Project Execution Read as One Continuous Engineering Process

**Files:**
- Modify: `src/components/afaaq/execution-track.tsx`

**Interfaces:**
- Consumes: existing immutable six-step `steps` array.
- Produces: the same ordered content in a connected 3×2 desktop / vertical mobile progression.

- [ ] **Step 1: Preserve all six step titles/descriptions verbatim**

Do not edit the `steps` array content. Limit changes to presentation markup/classes.

- [ ] **Step 2: Replace six equal isolated cells with one connected list system**

Keep the semantic `<ol>`. Use a shared outer border/progression rule and local dividers. A recommended structure:

```tsx
<ol className="mt-10 grid list-none border-y border-[var(--ink)] p-0 md:grid-cols-2 lg:grid-cols-3">
  {steps.map(([title, description], index) => (
    <li
      key={title}
      className="relative min-w-0 border-b border-[var(--rule)] py-7 md:px-6 lg:min-h-[15rem] lg:border-r lg:px-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-technical text-[clamp(2.4rem,4vw,3.7rem)] ...">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-technical text-[0.72rem] uppercase tracking-[0.08em] text-[var(--muted)]">
          Step
        </span>
      </div>
      {/* title + description */}
    </li>
  ))}
</ol>
```

Handle `lg` last-column borders and second-row bottom borders with index-aware class logic so the sequence is visually continuous and clean.

- [ ] **Step 3: Verify mobile semantics and readability**

At 320px the list must be single-column; numbers/titles must not require horizontal scrolling. No absolute-positioned factual text.

- [ ] **Step 4: Run lint/typecheck**

```bash
npm run lint
npm run typecheck
```

Expected: both exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/afaaq/execution-track.tsx
git commit -m "feat: connect the project execution sequence"
```

---

### Task 6: Integrate the About Artwork and Tighten Shared Chrome

**Files:**
- Modify: `src/components/afaaq/about-brand-artwork.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/site-footer.tsx`

**Interfaces:**
- Consumes: current About 4:3/16:9 image assets, current header IA, current footer company data.
- Produces: better optical integration/readability without changing assets, IA, or facts.

- [ ] **Step 1: Refine About frame without cropping the artwork**

Keep `object-contain` and both image paths. Refine the wrapper to feel like a corporate evidence panel rather than a raw white card, for example:

```tsx
<div className={`relative w-full overflow-hidden border border-[var(--rule)] bg-[color:var(--canvas)] ${aspectClass} ${className}`}>
  <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
  <Image ... className="relative object-contain" />
</div>
```

Do not use a gradient, shadow, crop, or overlay that obscures artwork text.

- [ ] **Step 2: Rebalance Home About columns**

Keep `AboutBrandArtwork variant="compact"`. Adjust the 12-column split/spacing so the image and text read as one section; avoid making the artwork dominate the page. Preserve verified company facts and About link.

- [ ] **Step 3: Apply only optical header refinements**

In `site-header.tsx` preserve:
- sticky behavior,
- mobile nav behavior,
- active underline,
- routes and labels.

Limit changes to brand/nav optical alignment, gap, and readable scale. Do not increase header height materially beyond the existing 84/88px unless visual QA proves it necessary.

- [ ] **Step 4: Improve footer readability without changing IA**

Preserve `Navigate / Direct / Office`, direct email/phone, location, and legal row. Increase low-contrast microtext only as needed and tighten grid alignment. Keep the compact logo/legal close.

- [ ] **Step 5: Run lint/typecheck**

```bash
npm run lint
npm run typecheck
```

Expected: both exit 0.

- [ ] **Step 6: Commit**

```bash
git add src/components/afaaq/about-brand-artwork.tsx src/app/page.tsx src/components/layout/site-header.tsx src/components/layout/site-footer.tsx
git commit -m "feat: integrate About artwork and refine shared chrome"
```

---

### Task 7: Strengthen the Closing CTA and Global Page Rhythm

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/styles/globals.css` only if a reusable technical-guide helper is needed.

**Interfaces:**
- Consumes: current inquiry copy/action and existing design tokens.
- Produces: a stronger closing conversion block and consistent section spacing hierarchy.

- [ ] **Step 1: Audit Home section boundaries before changing classes**

List the existing major section padding values in `page.tsx` and normalize them into a deliberate rhythm: opening proof, projects, relationships, dark services, execution, About, CTA. Do not mechanically make every section identical; preserve larger boundaries around major tonal transitions.

- [ ] **Step 2: Strengthen final CTA relationship**

Keep existing inquiry copy and destination. Increase primary action presence moderately, keep supporting contact text near the CTA, and avoid adding a second competing CTA.

- [ ] **Step 3: Use technical-guide styling only where it communicates structure**

If repeated technical guide lines require a global helper, add a minimal class/token in `globals.css`. Otherwise keep the implementation local to components. Do not introduce global visual noise.

- [ ] **Step 4: Run Home validator + lint/typecheck**

```bash
npm run test:home-polish
npm run lint
npm run typecheck
```

Expected: all exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/styles/globals.css
git commit -m "feat: tighten Home CTA and editorial rhythm"
```

If `globals.css` was not changed, omit it from `git add`.

---

### Task 8: Full Repository Verification and Visual/Responsive QA

**Files:**
- Verify all files changed in Tasks 1–7.
- No production edits unless verification exposes a concrete defect.

**Interfaces:**
- Consumes: complete implementation branch.
- Produces: evidence for code integrity, build success, responsive quality, and PR readiness.

- [ ] **Step 1: Run the complete repository check**

```bash
npm run check
```

Expected:
- `test:site-url` PASS,
- `test:content` PASS,
- `test:project-media` PASS,
- `test:home-polish` PASS,
- ESLint exit 0,
- TypeScript exit 0.

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

Expected: Next.js production build exits 0.

If the local/connected execution environment cannot install or execute dependencies, do not claim these passed; use Vercel deployment status as the external build gate and report the local limitation explicitly.

- [ ] **Step 3: Inspect the implementation diff against the approved spec base**

```bash
git diff --stat <implementation-base>...HEAD
git diff <implementation-base>...HEAD -- src/app/page.tsx src/components/afaaq scripts
```

Verify:
- no `src/content/projects.ts` factual edits,
- no project image metadata added,
- no project image imports added,
- no new client-side project component,
- no unapproved copy/fact changes.

- [ ] **Step 4: Visual QA at representative widths**

Inspect the Home page at minimum:
- 1440px desktop,
- 1024px tablet/compact desktop,
- 768px tablet,
- 390px mobile,
- 320px minimum mobile.

Check:
- Header lockup/nav alignment.
- Hero headline line breaks and image wash.
- 220/66/11 rail readability.
- Company Proof visually distinct from voltage rail.
- DRCC dossier cannot be mistaken for missing imagery.
- Secondary projects are content-height records with no black media placeholders.
- Relationship strip logos/names are optically balanced.
- 2 core + 4 supporting services are clearly hierarchical.
- Execution reads 01→06 continuously.
- About artwork is fully visible and integrated.
- CTA/footer text is readable.
- No horizontal overflow at 320px.
- Keyboard focus remains visible.
- Reduced-motion behavior remains acceptable.

- [ ] **Step 5: Fix only defects revealed by QA and rerun the relevant gate**

For every QA defect:
1. record the exact breakpoint/symptom,
2. make the smallest targeted change,
3. rerun the affected validator/lint/typecheck,
4. re-inspect that breakpoint.

Do not introduce unrelated redesign changes during QA.

- [ ] **Step 6: Run final full verification again after all QA fixes**

```bash
npm run check
npm run build
```

Expected: both exit 0, or external Vercel build success is documented if local execution is unavailable.

- [ ] **Step 7: Commit final QA fixes if any**

```bash
git add <only-files-changed-by-QA>
git commit -m "fix: resolve premium Home responsive QA findings"
```

Skip the commit if there are no QA fixes.

---

### Task 9: PR Review, Deployment Gate, and Squash Merge

**Files:**
- No code changes unless review finds a concrete defect.

**Interfaces:**
- Consumes: verified implementation branch.
- Produces: reviewed PR and one squash commit on `main`.

- [ ] **Step 1: Confirm branch diff scope**

The implementation PR must contain only:
- approved spec/plan documentation,
- Home visual implementation,
- focused shared-component refinements,
- deterministic validators.

- [ ] **Step 2: Open the PR against `main`**

PR summary must explicitly state:
- project portfolio is intentionally image-free,
- no verified facts changed,
- DRCC is now a technical dossier,
- company proof is separated from voltage experience,
- About artwork is retained,
- responsive/build verification evidence.

- [ ] **Step 3: Request final code review and resolve all blocking findings**

Run the repository's available review workflow (including Codex review if available). For each finding, verify it against the code before changing anything; fix confirmed issues only, reply with evidence, and rerun relevant checks.

- [ ] **Step 4: Require a successful Vercel deployment/check on the final PR head**

Do not merge while Vercel is pending or failing. Confirm the status is attached to the exact final head SHA.

- [ ] **Step 5: Squash merge to `main`**

Use one squash commit after the final head is reviewed and deployment is green. Do not force-push `main`.

- [ ] **Step 6: Verify post-merge production state**

Confirm:
- `main` contains the squash commit,
- Vercel status on the merged commit is success,
- production URL resolves to the expected deployment before sending the user the link.

---

## Plan Self-Review

### Spec coverage
- Header: Task 6.
- Hero: Task 3.
- Voltage Experience + Company Proof: Task 3.
- Featured DRCC technical dossier: Task 2.
- Secondary image-free project records: Task 2.
- Project Relationships: Task 4.
- Core + supporting services: Task 4.
- Project Execution: Task 5.
- About artwork integration: Task 6.
- Final CTA: Task 7.
- Footer: Task 6.
- Typography/spacing/rules: Tasks 3–7.
- Responsive/motion/accessibility/performance: Tasks 2 and 8.
- Content integrity/no project photography: Tasks 1, 2, and 8.

### Placeholder scan
No `TBD`, `TODO`, “implement later”, unspecified test steps, or undefined public interfaces remain in this plan.

### Type/interface consistency
`FeaturedProjectDossier` and `ProjectDossierRecord` both consume `{ project: Project; projectNumber: string }`. `project-showcase-rail.tsx` derives project numbers from `allProjects`; Home derives the featured number from `verifiedProjects`. No changes are required to the `Project` type or project content records.
