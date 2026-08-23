# Premium Technical Dossier Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the AFAAQ ARAB Home page into the approved Engineered Editorial + Technical Dossier direction, making the project portfolio intentionally image-free and strengthening proof, services, execution, About, CTA, and shared chrome without changing verified facts.

**Architecture:** Keep the existing Next.js 16 / React 19 / Tailwind v4 architecture and server-rendered Home composition. Add one focused Home project-dossier component for the featured and secondary project records, keep the central project content model factual and photo-free, and refine existing shared components instead of introducing a parallel design system. Source validators encode the no-project-photo and structural requirements before visual work; the existing repository check and Vercel build remain the final gates.

**Tech Stack:** Next.js 16.2.11, React 19.2.0, TypeScript 5.9, Tailwind CSS v4, Next Image, existing IBM Plex Sans / IBM Plex Mono font system.

**Spec:** `docs/superpowers/specs/2026-08-23-premium-technical-dossier-home-design.md`

## Global Constraints
- Do not introduce project photos, stock project photos, fake site imagery, or rendered project scenes.
- Keep the Home hero image at `/images/home/home-substation-original-1440.jpg`.
- Keep verified project names, clients/relationships, scopes, voltage labels, locations, years, and company claims unchanged.
- Keep the current AFAAQ About artwork and improve its framing/integration instead of removing it.
- Keep the warm-neutral canvas, graphite service/CTA bands, IBM Plex Sans/Mono typography family, and restrained blue brand accent.
- Keep the Home project portfolio server-rendered and free of carousel behavior.
- Preserve keyboard focus, semantic links, reduced-motion behavior, and 320px minimum responsive support.
- Avoid generic rounded cards, heavy shadows, glassmorphism, decorative gradients, icon overload, and flashy animation.
- Decorative technical linework must remain abstract and `aria-hidden`; project facts remain real HTML text.
- Hero remains the principal priority/LCP image; below-fold artwork remains non-priority.
- Do not add client-side JavaScript for purely visual Home project presentation.

---

## File Map

### Create
- `src/components/afaaq/project-dossier.tsx`
  - Exports `FeaturedProjectDossier` and `ProjectDossierRecord`.
  - Owns the intentional image-free project visual language used on Home.

### Modify
- `scripts/validate-home-polish.mjs`
- `scripts/validate-project-media.mjs`
- `src/app/page.tsx`
- `src/components/afaaq/project-showcase-rail.tsx`
- `src/components/afaaq/relationship-rail.tsx`
- `src/components/afaaq/service-index.tsx`
- `src/components/afaaq/execution-track.tsx`
- `src/components/afaaq/about-brand-artwork.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`

### Deliberately do not modify
- `src/content/projects.ts`
  - No image metadata.
  - No factual edits.
- Inner Projects/About/Services/Contact page copy unless a shared component refinement propagates naturally.

---

### Task 1: Encode the New Dossier Invariants

**Files:**
- Modify: `scripts/validate-home-polish.mjs`
- Modify: `scripts/validate-project-media.mjs`

**Interfaces:**
- Consumes: Home/project source text and `projects` from `src/content/projects.ts`.
- Produces: deterministic RED/GREEN checks for the intentional image-free Home portfolio.

- [ ] **Step 1: Rewrite `validate-home-polish.mjs` project assertions**

Keep the current imports and helper, then use these assertions:

```js
import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const projectIndex = readFileSync(new URL("../src/components/afaaq/project-showcase-rail.tsx", import.meta.url), "utf8");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved substation photo.",
);
assert(home.includes("FeaturedProjectDossier"), "Home must render the featured project as a technical dossier.");
assert(!home.includes("<ProjectMedia"), "Home must not render a media-shaped project placeholder.");
assert(home.includes("Power System Experience"), "Home must preserve the voltage-experience proof layer.");
assert(home.includes("Company Proof"), "Home must label company proof separately from voltage experience.");
assert(home.includes("AboutBrandArtwork"), "Home About must keep the approved AFAAQ artwork.");
assert(!home.includes('/images/projects/'), "Home must not render project photography.");
assert(home.includes("companyFacts"), "Home proof area must expose verified company credibility facts.");
assert(projectIndex.includes("ProjectDossierRecord"), "Home project portfolio must render technical dossier records.");
assert(!projectIndex.includes("ProjectMedia"), "Home secondary project records must not render media placeholders.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must remain server-rendered.");
assert(projectIndex.includes("lg:grid-cols-3"), "Home project portfolio must retain a stable three-column desktop grid.");

console.log("Premium Technical Dossier Home invariants OK.");
```

- [ ] **Step 2: Rewrite `validate-project-media.mjs` surface checks**

Keep the three metadata assertions for every project, then use:

```js
const dossierSurfaces = [
  "../src/app/page.tsx",
  "../src/components/afaaq/project-showcase-rail.tsx",
];

for (const relativePath of dossierSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(!source.includes("ProjectMedia"), `${relativePath} must not use a media-shaped Home project placeholder.`);
}

const innerProjectSurfaces = [
  "../src/app/projects/page.tsx",
  "../src/app/projects/[slug]/page.tsx",
];

for (const relativePath of innerProjectSurfaces) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  assert(source.includes("ProjectMedia"), `${relativePath} must keep the honest image-ready fallback surface.`);
}

console.log(`Project media integrity OK: ${projects.length} projects remain photo-free.`);
```

- [ ] **Step 3: Run both validators and confirm RED**

```bash
npm run test:project-media
npm run test:home-polish
```

Expected: failures because Home and the secondary portfolio still use `ProjectMedia`, and the new dossier component names do not exist.

- [ ] **Step 4: Commit the RED tests**

```bash
git add scripts/validate-home-polish.mjs scripts/validate-project-media.mjs
git commit -m "test: define premium Home dossier invariants"
```

---

### Task 2: Build the Image-Free Project Dossier Components

**Files:**
- Create: `src/components/afaaq/project-dossier.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/afaaq/project-showcase-rail.tsx`
- Test: `scripts/validate-home-polish.mjs`
- Test: `scripts/validate-project-media.mjs`

**Interfaces:**

```ts
export function FeaturedProjectDossier(props: {
  project: Project;
  projectNumber: string;
}): React.JSX.Element;

export function ProjectDossierRecord(props: {
  project: Project;
  projectNumber: string;
}): React.JSX.Element;
```

- [ ] **Step 1: Create `project-dossier.tsx` with the exact component boundaries**

Use this implementation shape:

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

export function FeaturedProjectDossier({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <article className="mt-8 overflow-hidden border-y border-[var(--rule)] sm:mt-10 md:mt-12">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[22rem] overflow-hidden bg-[var(--graphite)] p-6 text-[var(--canvas)] sm:min-h-[25rem] sm:p-8 md:col-span-7 md:min-h-[32rem] md:border-r md:border-[var(--rule)] lg:p-10">
          <TechnicalGuide />
          <div className="relative z-10 flex h-full flex-col justify-between gap-12">
            <div className="flex items-start justify-between gap-5">
              <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-white/58">
                Project Ref / {projectNumber}
              </p>
              {technicalLabel ? (
                <p className="font-technical m-0 text-right text-[0.8rem] font-medium text-white/64">
                  {technicalLabel}
                </p>
              ) : null}
            </div>
            <div>
              <p className="font-technical m-0 text-[0.72rem] uppercase tracking-[0.1em] text-white/48">
                AFAAQ ARAB / Major Project
              </p>
              <h3 className="mb-0 mt-4 max-w-[16ch] text-[clamp(2.45rem,5vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.052em]">
                {project.name}
              </h3>
              {locationYear ? (
                <p className="font-technical mb-0 mt-6 text-[0.82rem] leading-5 text-white/60">
                  {locationYear}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="min-w-0 border-t border-[var(--rule)] py-7 sm:py-8 md:col-span-5 md:border-t-0 md:pl-8 md:py-9 lg:pl-10">
          {project.relationship ? (
            <div>
              <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
                Project Relationship
              </p>
              <div className="mt-4">
                <ProjectClientMark name={project.relationship} />
              </div>
            </div>
          ) : null}

          <div className="mt-8 border-t border-[var(--rule)] pt-6">
            <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
              Scope
            </p>
            <ul className="mt-5 grid list-none gap-3 p-0">
              {project.scopes.map((scope) => (
                <li key={scope} className="grid grid-cols-[auto_1fr] gap-3 text-[1.02rem] leading-7 text-[var(--ink)]">
                  <span className="mt-[0.72rem] h-px w-4 bg-[var(--brand-blue)]" aria-hidden="true" />
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-[var(--rule)] pt-6">
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex min-h-12 items-center gap-3 text-[0.98rem] font-medium"
            >
              <span>View Full Project Scope</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
                <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectDossierRecord({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}) {
  const technicalLabel = getProjectTechnicalLabel(project);
  const locationYear = [project.location, project.year].filter(Boolean).join(" · ");

  return (
    <article className="group min-w-0 border-t border-[var(--rule)] py-6 sm:py-7 lg:py-8">
      <Link
        href={`/projects/${project.slug}`}
        className="block min-h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-4"
      >
        <div className="flex items-start justify-between gap-5">
          <p className="font-technical m-0 text-[0.76rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)]">
            Project {projectNumber}
          </p>
          {technicalLabel ? (
            <p className="font-technical m-0 max-w-[55%] text-right text-[0.8rem] font-medium leading-5 text-[var(--muted)]">
              {technicalLabel}
            </p>
          ) : null}
        </div>

        <h3 className="mb-0 mt-5 max-w-[18ch] text-[clamp(1.85rem,2.8vw,2.5rem)] font-medium leading-[1] tracking-[-0.04em] text-[var(--ink)] transition-colors group-hover:text-[var(--brand-navy)]">
          {project.name}
        </h3>

        {project.relationship ? (
          <div className="mt-5">
            <ProjectClientMark name={project.relationship} compact />
          </div>
        ) : null}

        {locationYear ? (
          <p className="font-technical mb-0 mt-5 text-[0.78rem] leading-5 text-[var(--muted)]">
            {locationYear}
          </p>
        ) : null}

        <div className="mt-5 flex items-end justify-between gap-5 border-t border-[var(--rule)] pt-5">
          <p className="m-0 max-w-[28rem] text-[0.98rem] leading-7 text-[var(--muted)]">
            {project.scopes.join(" · ")}
          </p>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mb-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none">
            <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
      </Link>
    </article>
  );
}
```

- [ ] **Step 2: Replace the featured Home project block**

In `src/app/page.tsx`, import:

```tsx
import { FeaturedProjectDossier } from "@/components/afaaq/project-dossier";
```

Replace the current featured project article with:

```tsx
<FeaturedProjectDossier
  project={featuredProject}
  projectNumber={featuredNumber}
/>
```

Remove Home imports/local values that were used only by the old project media block: `ProjectMedia`, `ProjectClientMark`, and `featuredTechnicalLabel`.

- [ ] **Step 3: Replace secondary Home project cards**

In `src/components/afaaq/project-showcase-rail.tsx`, use:

```tsx
import { ProjectDossierRecord } from "@/components/afaaq/project-dossier";
import type { Project } from "@/content/projects";
```

Render the project list as:

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

Keep the `Major Project Portfolio` heading row above this grid. Remove `ProjectMedia`, `ProjectClientMark`, and `getProjectTechnicalLabel` imports from this file.

- [ ] **Step 4: Run dossier validators and confirm GREEN**

```bash
npm run test:project-media
npm run test:home-polish
```

Expected: both exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/afaaq/project-dossier.tsx src/app/page.tsx src/components/afaaq/project-showcase-rail.tsx
git commit -m "feat: replace Home project placeholders with technical dossiers"
```

---

### Task 3: Separate Voltage Experience from Company Proof and Refine Hero Readability

**Files:**
- Modify: `src/app/page.tsx`
- Test: `scripts/validate-home-polish.mjs`

**Interfaces:**
- Consumes: existing `voltageExperience`, `credibilityFacts`, hero image/copy/actions.
- Produces: two visually distinct proof layers and a more readable opening hierarchy.

- [ ] **Step 1: Add the `Company Proof` label beneath the voltage rail**

Use this structure immediately after the 220/66/11 grid:

```tsx
<div className="border-t border-[var(--rule)] pt-5 sm:pt-6">
  <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)] sm:text-[0.8rem]">
    Company Proof
  </p>
  <div className="mt-4 grid border-t border-[var(--rule)] md:grid-cols-2">
    {credibilityFacts.map(([value, label], index) => (
      <div
        key={label}
        className={`grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 py-5 sm:gap-5 sm:py-6 md:px-7 ${index === 0 ? "md:border-r md:border-[var(--rule)] md:pl-0" : "md:pr-0"}`}
      >
        <span className="font-technical text-[clamp(1.7rem,3vw,2.8rem)] font-medium leading-none tracking-[-0.045em]">
          {value}
        </span>
        <span className="text-[0.98rem] leading-6 text-[var(--muted)] sm:text-[1.02rem]">
          {label}
        </span>
      </div>
    ))}
  </div>
</div>
```

Keep the 220/66/11 rail above it materially larger.

- [ ] **Step 2: Refine hero body and action rhythm without changing copy**

Target these class values in Home:

```tsx
<p className="mt-6 max-w-[38rem] text-[1.1rem] leading-7 text-[var(--muted)] sm:mt-7 md:text-[1.2rem] md:leading-8">
```

and:

```tsx
<div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
```

Keep the current hero image, priority flag, headline text, and blend overlays.

- [ ] **Step 3: Run the Home invariant**

```bash
npm run test:home-polish
```

Expected: exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: separate voltage experience from company proof"
```

---

### Task 4: Strengthen Relationship and Service Hierarchy

**Files:**
- Modify: `src/components/afaaq/relationship-rail.tsx`
- Modify: `src/components/afaaq/service-index.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: existing `clients`, `services`, and `supportingDisciplines` data unchanged.
- Produces: stronger credibility weight and a visible `2 core + 4 supporting` service hierarchy.

- [ ] **Step 1: Increase relationship optical consistency**

Keep existing data/logo lookup. Change the item sizing to:

```tsx
<span
  className={`relative mr-4 inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-[var(--rule)]/75 bg-white md:mr-5 md:h-13 ${visual?.wide ? "w-[72px] md:w-20" : "w-12 md:w-13"}`}
  aria-hidden="true"
>
```

Use relationship name sizing:

```tsx
className="flex items-center text-[1.5rem] font-medium tracking-[-0.028em] sm:text-[1.72rem] md:text-[clamp(1.85rem,2.5vw,2.3rem)]"
```

Reduce separator margins to `mx-6 sm:mx-7 md:mx-9 lg:mx-10` so the rail carries more proof per viewport.

- [ ] **Step 2: Tighten primary service row proportions**

Keep the current 12-column structure and content. Use:

```tsx
className="group grid min-w-0 gap-5 border-t border-white/20 py-8 transition-colors duration-[var(--motion-ui)] hover:bg-white/[0.025] sm:gap-6 sm:py-9 md:grid-cols-12 md:gap-8 md:px-2 md:py-11 last:border-b"
```

Keep title in `md:col-span-5`, summary/action in `md:col-span-5 md:col-start-8`, and raise summary color to `text-white/80`.

- [ ] **Step 3: Rebuild supporting disciplines in Home**

Replace the current span-only row with:

```tsx
<div className="mt-5 grid border-y border-white/16 lg:grid-cols-4">
  {supportingDisciplines.map((discipline, index) => (
    <div
      key={discipline}
      className="grid min-h-24 grid-cols-[auto_1fr] gap-4 border-b border-white/16 py-5 sm:min-h-26 lg:min-h-28 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
    >
      <span className="font-technical text-[0.74rem] font-medium text-white/50">
        {String(index + 3).padStart(2, "0")}
      </span>
      <span className="text-[1.08rem] font-medium leading-6 text-white/88 sm:text-[1.14rem]">
        {discipline}
      </span>
    </div>
  ))}
</div>
```

- [ ] **Step 4: Run lint and typecheck**

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

### Task 5: Turn Execution into a Connected Engineering Sequence

**Files:**
- Modify: `src/components/afaaq/execution-track.tsx`

**Interfaces:**
- Consumes: the existing immutable six-step `steps` array.
- Produces: the same six steps as a continuous responsive sequence.

- [ ] **Step 1: Keep the six titles and descriptions verbatim**

Do not change the `steps` array.

- [ ] **Step 2: Replace the list presentation with this connected structure**

```tsx
<ol className="mt-10 grid list-none border-y border-[var(--ink)] p-0 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
  {steps.map(([title, description], index) => {
    const isLastColumn = index % 3 === 2;
    const isSecondRow = index >= 3;

    return (
      <li
        key={title}
        className={`relative min-w-0 border-b border-[var(--rule)] py-7 sm:py-8 md:px-6 lg:min-h-[15.5rem] lg:px-8 ${isLastColumn ? "lg:border-r-0" : "lg:border-r"} ${isSecondRow ? "lg:border-b-0" : ""}`}
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-technical text-[clamp(2.5rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.055em] text-[var(--ink)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-technical text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
            Step
          </span>
        </div>
        <h3 className="mb-0 mt-6 max-w-[19rem] text-[1.34rem] font-medium leading-[1.18] tracking-[-0.03em] sm:text-[1.42rem]">
          {title}
        </h3>
        <p className="mb-0 mt-3 max-w-[24rem] text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.04rem]">
          {description}
        </p>
      </li>
    );
  })}
</ol>
```

At 320px this remains one column; no fixed horizontal content.

- [ ] **Step 3: Run lint and typecheck**

```bash
npm run lint
npm run typecheck
```

Expected: both exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/afaaq/execution-track.tsx
git commit -m "feat: connect the project execution sequence"
```

---

### Task 6: Integrate About Artwork and Refine Shared Chrome

**Files:**
- Modify: `src/components/afaaq/about-brand-artwork.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/site-footer.tsx`

**Interfaces:**
- Consumes: existing About assets, header IA, and footer company data.
- Produces: better optical integration/readability without changing assets, IA, or facts.

- [ ] **Step 1: Refine the About artwork frame without cropping**

Change the `ArtworkFrame` wrapper to:

```tsx
<div
  className={`relative w-full overflow-hidden border border-[var(--rule)] bg-[color:var(--canvas)] ${aspectClass} ${className}`}
>
  <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
  <Image
    src={src}
    alt={artworkAlt}
    fill
    sizes={sizes}
    quality={92}
    className="relative object-contain"
  />
</div>
```

Keep both existing image paths and the existing desktop/mobile switching.

- [ ] **Step 2: Rebalance the Home About grid**

Use:

```tsx
<div className="grid gap-8 border-t border-[var(--rule)] pt-8 sm:gap-10 sm:pt-10 md:grid-cols-12 md:items-center md:gap-10">
  <div className="min-w-0 md:col-span-6">
    <AboutBrandArtwork variant="compact" />
  </div>
  <div className="min-w-0 md:col-span-5 md:col-start-8">
```

Keep the current About heading, copy, verified facts, and link.

- [ ] **Step 3: Make only optical header changes**

Keep `h-[84px] sm:h-[88px]`, sticky behavior, routes, active underline, and mobile nav. Use brand gap `gap-3.5 sm:gap-4`, wordmark `text-[0.98rem] sm:text-[1.08rem]`, and desktop nav gap `gap-9 lg:gap-11` so the lockup holds slightly more authority without increasing the bar height.

- [ ] **Step 4: Improve footer readability without changing IA**

Keep `Navigate / Direct / Office`, email, phone, location, legal close, and brand lockup. Raise descriptive/footer link text to a minimum of `0.98rem` and low-contrast labels to at least `text-white/66`; preserve the compact bottom row.

- [ ] **Step 5: Run lint and typecheck**

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

### Task 7: Strengthen the Closing CTA and Page Rhythm

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: current inquiry copy/action and existing section order.
- Produces: a stronger closing conversion moment and more deliberate vertical rhythm.

- [ ] **Step 1: Normalize major Home section spacing with explicit values**

Use these section-level targets unless visual QA proves a single breakpoint needs a smaller correction:
- proof: `pb-18 pt-12 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16`
- projects: `pb-20 sm:pb-24 md:pb-28`
- relationships: `pb-16 sm:pb-18 md:pb-22`
- services: `py-18 sm:py-22 md:py-26`
- execution: `py-18 sm:py-22 md:py-26`
- About: `pb-18 sm:pb-22 md:pb-26`

Do not add empty spacer elements.

- [ ] **Step 2: Strengthen the final inquiry block**

Keep the existing headline/copy/destination. Use a two-column desktop composition where the headline occupies `md:col-span-6` and the contact/action block occupies `md:col-span-4 md:col-start-9`. Keep one primary action and place supporting contact copy directly above it with `text-[1rem] leading-7 text-white/72`.

- [ ] **Step 3: Run Home validator, lint, and typecheck**

```bash
npm run test:home-polish
npm run lint
npm run typecheck
```

Expected: all exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: tighten Home CTA and editorial rhythm"
```

---

### Task 8: Full Repository Verification and Responsive QA

**Files:**
- Verify all implementation files.
- Modify only files tied to a reproduced QA defect.

**Interfaces:**
- Consumes: complete implementation branch.
- Produces: build/check evidence and responsive visual QA evidence.

- [ ] **Step 1: Run complete repository checks**

```bash
npm run check
```

Expected:
- `test:site-url` PASS
- `test:content` PASS
- `test:project-media` PASS
- `test:home-polish` PASS
- ESLint exit 0
- TypeScript exit 0

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

Expected: Next.js production build exits 0.

If the execution environment cannot run dependencies, record that limitation and require Vercel success on the exact final commit before merge. Do not claim a local build passed without local output.

- [ ] **Step 3: Verify diff integrity**

```bash
BASE="$(git merge-base main HEAD)"
git diff --stat "$BASE"...HEAD
git diff "$BASE"...HEAD -- src/app/page.tsx src/components/afaaq scripts
git diff --exit-code "$BASE"...HEAD -- src/content/projects.ts
```

Expected: the final command exits 0, proving no project-content-model edits.

Also run:

```bash
git grep -n '/images/projects/' HEAD -- src/app/page.tsx src/components/afaaq/project-showcase-rail.tsx src/components/afaaq/project-dossier.tsx
```

Expected: no matches.

- [ ] **Step 4: Inspect the Home page at representative widths**

Required widths:
- 1440px
- 1024px
- 768px
- 390px
- 320px

At each width verify:
- header alignment and active navigation
- hero headline line breaks and image blend
- readable 220/66/11 rail
- separate Company Proof layer
- DRCC reads as information, not missing imagery
- secondary projects have content-driven height and no black media boxes
- client marks/names are optically balanced
- 2 core + 4 supporting service hierarchy is obvious
- execution reads continuously from 01 to 06
- About artwork is fully visible
- CTA/footer are readable
- no horizontal overflow
- visible keyboard focus

- [ ] **Step 5: Verify reduced-motion behavior**

With `prefers-reduced-motion: reduce`, confirm the relationship rail does not create distracting continuous movement and project interactions do not depend on motion.

- [ ] **Step 6: Fix only reproduced QA defects**

For each defect, record the breakpoint and symptom in the commit message body or PR notes, make the smallest targeted class/markup change, rerun the affected check, and reinspect that breakpoint.

- [ ] **Step 7: Run final verification after QA fixes**

```bash
npm run check
npm run build
```

Expected: both exit 0, or the documented external Vercel build gate is used because the local environment cannot execute the project.

- [ ] **Step 8: Commit QA fixes only when they exist**

```bash
git status --short
git add src/app/page.tsx src/components/afaaq/project-dossier.tsx src/components/afaaq/project-showcase-rail.tsx src/components/afaaq/relationship-rail.tsx src/components/afaaq/service-index.tsx src/components/afaaq/execution-track.tsx src/components/afaaq/about-brand-artwork.tsx src/components/layout/site-header.tsx src/components/layout/site-footer.tsx scripts/validate-home-polish.mjs scripts/validate-project-media.mjs
git diff --cached --quiet || git commit -m "fix: resolve premium Home responsive QA findings"
```

---

### Task 9: PR Review, Deployment Gate, and Squash Merge

**Files:**
- No code changes unless review reveals a confirmed defect.

**Interfaces:**
- Consumes: verified implementation branch.
- Produces: reviewed PR and one squash commit on `main`.

- [ ] **Step 1: Confirm PR scope**

The PR may include only:
- approved spec and plan
- Home visual implementation
- focused shared-component refinements
- deterministic validators

- [ ] **Step 2: Open the PR against `main`**

The PR body must state:
- project portfolio is intentionally image-free
- no verified facts changed
- DRCC is now a technical dossier
- company proof is separated from voltage experience
- About artwork is retained
- exact check/build/QA evidence

- [ ] **Step 3: Request final review and resolve confirmed findings**

Use the available review workflow, including Codex review when available. Validate each review comment against the code before editing. Rerun the relevant check after every confirmed fix.

- [ ] **Step 4: Require successful Vercel status on the exact final PR head**

Do not merge while Vercel is pending or failing.

- [ ] **Step 5: Squash merge**

Use one squash commit into `main`. Do not force-push `main`.

- [ ] **Step 6: Verify post-merge production state**

Confirm:
- `main` points to the merged result
- Vercel status on the merged commit is success
- the production URL resolves to that deployment before sending the user a live link

---

## Plan Self-Review

### Spec coverage
- Header: Task 6
- Hero: Task 3
- Voltage Experience + Company Proof: Task 3
- DRCC technical dossier: Task 2
- Secondary image-free project records: Task 2
- Relationships: Task 4
- Core + supporting services: Task 4
- Project Execution: Task 5
- About artwork integration: Task 6
- Final CTA: Task 7
- Footer: Task 6
- Responsive/motion/accessibility/performance: Tasks 2 and 8
- Content integrity/no project photography: Tasks 1, 2, and 8

### Placeholder scan
The plan contains no `TBD`, `TODO`, unnamed implementation steps, synthetic factual values, or code comments standing in for missing implementation.

### Type/interface consistency
`FeaturedProjectDossier` and `ProjectDossierRecord` both consume `{ project: Project; projectNumber: string }`. The secondary grid derives numbers from `allProjects`; Home derives the featured number from `verifiedProjects`. No `Project` type changes are required.
