# AFAAQ Corporate Grid Power Home Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AFAAQ Home visual system from an editorial/minimal portfolio into a mature Corporate Grid Power engineering-company experience while preserving verified content and the approved Hero photo/blend.

**Architecture:** Keep the existing Next.js App Router and server-rendered content model. Introduce the new corporate visual foundation through global tokens and heading typography, then rebuild Home as a sequence of focused server components: immediate proof, capability grid, project reference system, company scale, static relationships, execution, About, and CTA. Preserve project/company data sources; presentation components consume them without mutating content.

**Tech Stack:** Next.js 16.2.11, React 19.2, TypeScript 5.9, Tailwind CSS 4.3, `next/font/google`, Node source-validation scripts, ESLint, Vercel.

**Spec:** `docs/superpowers/specs/2026-08-24-afaaq-corporate-grid-power-home-design.md`

## Global Constraints

- Preserve Hero image path `/images/home/home-substation-original-1440.jpg`.
- Preserve Hero `priority`, responsive crop, desktop blend, mobile blend, gradient values, and direction exactly.
- Because the global canvas changes, isolate the Hero blend against the current warm base `#f4f3ef` so it remains visually unchanged.
- Do not use `drcc.jpg`, `crcc.jpg`, `rcc.jpg`, `benban.jpg`, stock imagery, generated imagery, empty media placeholders, or faux schematics as Home project evidence.
- Do not invent or inflate project names, relationships, voltages, locations, years, scopes, company statistics, standards, protocols, equipment, or capability claims.
- Do not modify `src/content/projects.ts` to support layout.
- Corporate foundation tokens: `#FFFFFF`, `#F4F7FA`, `#111827`, `#52606D`, `#D7DEE8`, `#0A2F82`, `#061D58`, `#0B8CFF`.
- Display/corporate headings use Archivo; body/navigation/UI use IBM Plex Sans; IBM Plex Mono is restricted to genuinely technical/tabular data and ordered process numbers.
- No infinite relationship marquee, horizontal project carousel, hover-lift cards, glassmorphism, pill-heavy UI, decorative technical fiction, or repeated ornamental numbering.
- Home order: Hero → Immediate Proof → Capabilities → Major Project References → Company Scale → Selected Relationships → Project Execution → About AFAAQ → Project Inquiry.
- Minimum viewport support: 320 px. No horizontal overflow or clipped relationship names.
- Keep the portfolio server-rendered. Do not introduce client JavaScript only for presentation.
- Respect visible keyboard focus and `prefers-reduced-motion`.
- Use one branch and one pull request for the full pass; fixes and review feedback stay on that PR until squash merge.

---

## File Structure

### Create

- `src/components/afaaq/power-rail.tsx` — reusable AFAAQ signature rail with semantic voltage/proof content; no animation dependency.
- `src/components/afaaq/company-scale.tsx` — large corporate proof module sourced from `companyFacts`.
- `src/components/afaaq/project-reference-board.tsx` — flagship + secondary project references, image-free and server-rendered.
- `src/components/afaaq/capability-grid.tsx` — core/supporting capability hierarchy.
- `scripts/validate-corporate-grid-power.mjs` — source-level regression guard for approved design invariants.

### Modify

- `src/app/layout.tsx` — add Archivo via `next/font/google`; expose display-font variable.
- `src/styles/globals.css` — replace foundation tokens, define display role, retain reduced-motion behavior, remove obsolete marquee CSS after component migration.
- `src/app/page.tsx` — implement approved section order and Hero exception.
- `src/components/afaaq/relationship-rail.tsx` — convert marquee to static relationship wall and remove remote favicon behavior.
- `src/components/afaaq/execution-track.tsx` — remove repeated `Step`, reduce editorial linework, keep meaningful `01–06` sequence.
- `src/components/afaaq/about-brand-artwork.tsx` — only if required to support the new About composition; preserve paths/object-contain/no crop.
- `src/components/layout/site-header.tsx` — corporate white/cool-neutral chrome and stronger brand lockup without route changes.
- `src/components/layout/site-footer.tsx` — deep-navy corporate close and legibility pass.
- `scripts/validate-home-polish.mjs` — replace obsolete dossier/marquee assumptions with current Home invariants or delegate to the new validator.
- `scripts/validate-project-media.mjs` — ensure Home project-reference surfaces remain image-free.
- `package.json` — add `test:corporate-grid` to `check`.

### Retire from Home presentation

- `src/components/afaaq/project-dossier.tsx` — no longer used by Home after Task 4. Keep only if other routes consume it; otherwise remove in Task 4 after code search confirms no consumers.
- `src/components/afaaq/project-showcase-rail.tsx` — no longer used by Home after Task 4. Keep/remove based on consumers.
- `src/components/afaaq/service-index.tsx` — superseded by `capability-grid.tsx` on Home; keep if other routes consume it.

---

### Task 1: Lock Corporate Foundation and Regression Tests

**Files:**
- Create: `scripts/validate-corporate-grid-power.mjs`
- Modify: `package.json`
- Modify: `src/app/layout.tsx`
- Modify: `src/styles/globals.css`

**Interfaces:**
- Produces: CSS variables `--canvas`, `--surface`, `--ink`, `--muted`, `--rule`, `--brand-navy`, `--brand-deep-navy`, `--brand-blue`; font variable `--font-display`.
- Consumed by: every later Home/shared component task.

- [ ] **Step 1: Write the failing corporate-grid validator**

Create `scripts/validate-corporate-grid-power.mjs` with initial assertions for tokens/fonts:

```js
import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");

assert(layout.includes("Archivo"), "Corporate Grid Power must load Archivo for display typography.");
assert(layout.includes("--font-display"), "Archivo must be exposed as --font-display.");
assert(globals.includes("--canvas: #ffffff"), "Global canvas must be Corporate White.");
assert(globals.includes("--surface: #f4f7fa"), "Global surface must be Cool Surface.");
assert(globals.includes("--brand-navy: #0a2f82"), "AFAAQ Navy token must match the approved mark.");
assert(globals.includes("--brand-deep-navy: #061d58"), "Deep Navy token must be available for authority surfaces.");
assert(globals.includes("--brand-blue: #0b8cff"), "Electric Blue token must match the approved mark.");
assert(globals.includes(".font-display"), "Global CSS must expose a display-font utility.");

console.log("Corporate Grid Power foundation invariants OK.");
```

- [ ] **Step 2: Run validator and verify RED**

Run:

```bash
node --experimental-strip-types scripts/validate-corporate-grid-power.mjs
```

Expected: FAIL on missing Archivo / new tokens.

- [ ] **Step 3: Add validator to package scripts before implementation**

Add:

```json
"test:corporate-grid": "node --experimental-strip-types scripts/validate-corporate-grid-power.mjs"
```

and include it in `check` before lint/typecheck.

- [ ] **Step 4: Implement Archivo in root layout**

Use `next/font/google`:

```tsx
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
```

Update `<html>`:

```tsx
<html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
```

- [ ] **Step 5: Replace global foundation tokens and define display role**

Set:

```css
:root {
  --canvas: #ffffff;
  --surface: #f4f7fa;
  --ink: #111827;
  --graphite: #111827;
  --muted: #52606d;
  --muted-dark: #c4ced8;
  --rule: #d7dee8;
  --brand-navy: #0a2f82;
  --brand-deep-navy: #061d58;
  --brand-blue: #0b8cff;
  --accent: var(--brand-blue);
  /* existing spacing/motion tokens stay unless a later task proves a concrete need */
}

.font-display {
  font-family: var(--font-display), var(--font-sans), "Helvetica Neue", sans-serif;
}
```

Do not globally force every `h1/h2/h3` into Archivo yet; later components opt into `font-display` explicitly so unrelated pages do not get an uncontrolled structural redesign.

- [ ] **Step 6: Run foundation validator and repository checks**

Run:

```bash
npm run test:corporate-grid
npm run lint
npm run typecheck
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add package.json scripts/validate-corporate-grid-power.mjs src/app/layout.tsx src/styles/globals.css
git commit -m "feat: establish corporate grid power foundation"
```

---

### Task 2: Preserve Hero Blend and Add Immediate Proof Power Rail

**Files:**
- Create: `src/components/afaaq/power-rail.tsx`
- Modify: `src/app/page.tsx`
- Modify: `scripts/validate-corporate-grid-power.mjs`
- Modify: `scripts/validate-home-polish.mjs`

**Interfaces:**
- `PowerRail` consumes three voltage entries plus one scale proof string.
- `HomePage` keeps exact Hero image/blend values and renders `PowerRail` immediately after Hero.

- [ ] **Step 1: Extend validator for exact Hero preservation and new order**

Add assertions that `page.tsx` contains the exact current image source and both approved gradient strings, and that `PowerRail` appears before Capabilities/Projects.

```js
const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");

assert(home.includes('src="/images/home/home-substation-original-1440.jpg"'), "Hero image must remain unchanged.");
assert(home.includes("linear-gradient(180deg, var(--hero-canvas) 0%"), "Mobile Hero blend must remain on the approved warm base.");
assert(home.includes("linear-gradient(90deg, var(--hero-canvas) 0%"), "Desktop Hero blend must remain on the approved warm base.");
assert(home.includes("<PowerRail"), "Home must render the AFAAQ Power Rail immediately after Hero.");
```

Also assert the Hero declares a local warm token:

```js
assert(home.includes('[--hero-canvas:#f4f3ef]'), "Hero must isolate its approved warm blend base from the new global canvas.");
```

- [ ] **Step 2: Run validator and verify RED**

Run `npm run test:corporate-grid`; expected FAIL on missing `PowerRail` / `--hero-canvas`.

- [ ] **Step 3: Create `PowerRail` as a semantic server component**

Use a component shaped like:

```tsx
type PowerRailProps = {
  voltages: readonly { value: string; unit: string }[];
  scaleValue: string;
  scaleLabel: string;
};

export function PowerRail({ voltages, scaleValue, scaleLabel }: PowerRailProps) {
  return (
    <section aria-label="AFAAQ power-system experience" className="bg-[var(--brand-deep-navy)] text-white">
      <div className="grid md:grid-cols-[1fr_auto]">
        <dl className="grid grid-cols-3">
          {voltages.map(({ value, unit }) => (
            <div key={value} className="min-w-0 py-5 sm:py-6">
              <dt className="sr-only">Voltage experience</dt>
              <dd className="m-0 flex items-baseline gap-2">
                <span className="font-technical text-[clamp(1.9rem,4vw,3.3rem)] font-semibold">{value}</span>
                <span className="font-technical text-sm text-white/76">{unit}</span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="border-t border-white/18 py-5 md:border-l md:border-t-0 md:px-8">
          <strong className="font-display text-[clamp(1.9rem,3vw,2.8rem)]">{scaleValue}</strong>
          <span className="ml-3 text-base text-white/82">{scaleLabel}</span>
        </div>
      </div>
    </section>
  );
}
```

Use sharp geometry, no animation, no decorative technical markings.

- [ ] **Step 4: Preserve Hero blend exactly while changing global canvas**

Give the Hero section local warm canvas:

```tsx
<section className="relative isolate overflow-hidden [--hero-canvas:#f4f3ef] bg-[var(--hero-canvas)] ...">
```

Replace `var(--canvas)` only inside the existing Hero gradients with `var(--hero-canvas)` while keeping all stops, percentages, directions, and `color-mix` values unchanged.

Keep image path, `priority`, `sizes`, crop classes, and current Hero copy.

- [ ] **Step 5: Render Immediate Proof after Hero**

Use current verified values only:

```tsx
<PowerRail
  voltages={[
    { value: "220", unit: "kV" },
    { value: "66", unit: "kV" },
    { value: "11", unit: "kV" },
  ]}
  scaleValue="150+"
  scaleLabel="Substations delivered"
/>
```

Remove the old large `Power System Experience` + `Company Proof` section from Home; Company Scale returns later in Task 5.

- [ ] **Step 6: Run tests/checks**

```bash
npm run test:corporate-grid
npm run test:home-polish
npm run lint
npm run typecheck
```

Expected: PASS after updating obsolete `validate-home-polish` assertions to the new structure.

- [ ] **Step 7: Commit**

```bash
git add src/app/page.tsx src/components/afaaq/power-rail.tsx scripts/validate-corporate-grid-power.mjs scripts/validate-home-polish.mjs
git commit -m "feat: add corporate hero proof rail"
```

---

### Task 3: Build Corporate Capability Grid

**Files:**
- Create: `src/components/afaaq/capability-grid.tsx`
- Modify: `src/app/page.tsx`
- Modify: `scripts/validate-corporate-grid-power.mjs`

**Interfaces:**
- Consumes: verified `services` from `@/content/services`.
- Produces: `CapabilityGrid` with two core services and four supporting disciplines, no decorative numbering.

- [ ] **Step 1: Add failing capability assertions**

Assert:

```js
assert(home.includes("<CapabilityGrid"), "Capabilities must appear as the Corporate Grid Power capability system.");
const capability = readFileSync(new URL("../src/components/afaaq/capability-grid.tsx", import.meta.url), "utf8");
assert(!capability.includes("padStart"), "Capabilities must not use decorative numbering.");
assert(capability.includes("Testing & Commissioning") || capability.includes("testing-commissioning"), "Testing & Commissioning must remain a core capability.");
assert(capability.includes("Protection & Control") || capability.includes("protection-control"), "Protection & Control must remain a core capability.");
```

- [ ] **Step 2: Run validator and verify RED**

Run `npm run test:corporate-grid`; expected FAIL.

- [ ] **Step 3: Implement `CapabilityGrid`**

Resolve the two verified core services by slug and render them as broad readable modules. Render supporting disciplines as four smaller but still substantial modules.

Core structure:

```tsx
<section>
  <div className="grid lg:grid-cols-2">
    {primaryServices.map((service) => (
      <article key={service.slug} className="bg-[var(--surface)] p-7 sm:p-9 lg:p-10">
        <h3 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold">{service.title}</h3>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-[var(--muted)]">{service.summary}</p>
        <Link className="mt-6 inline-flex min-h-12 items-center font-semibold text-[var(--brand-navy)]" ...>...</Link>
      </article>
    ))}
  </div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4">...</div>
</section>
```

Do not use six identical cards. Use spacing/surface hierarchy and one restrained navy accent area if needed.

- [ ] **Step 4: Move Capabilities directly after Immediate Proof**

Update Home order so the capability section comes before Major Projects. Use Archivo on the section headline and standard sans for copy/labels.

- [ ] **Step 5: Verify**

```bash
npm run test:corporate-grid
npm run lint
npm run typecheck
```

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/components/afaaq/capability-grid.tsx scripts/validate-corporate-grid-power.mjs
git commit -m "feat: rebuild home capability hierarchy"
```

---

### Task 4: Replace Technical Dossier with Project Reference Board

**Files:**
- Create: `src/components/afaaq/project-reference-board.tsx`
- Modify: `src/app/page.tsx`
- Modify: `scripts/validate-project-media.mjs`
- Modify: `scripts/validate-corporate-grid-power.mjs`
- Potentially remove: `src/components/afaaq/project-dossier.tsx`
- Potentially remove: `src/components/afaaq/project-showcase-rail.tsx`

**Interfaces:**
- Consumes: `verifiedProjects`, `Project`, `getProjectTechnicalLabel`.
- Produces: `ProjectReferenceBoard({ projects })` with first project as flagship and remaining projects as rows.

- [ ] **Step 1: Write failing project-reference assertions**

```js
assert(home.includes("<ProjectReferenceBoard"), "Home must use the corporate project reference board.");
assert(!home.includes("FeaturedProjectDossier"), "Home must remove the black technical dossier presentation.");

const projectBoard = readFileSync(new URL("../src/components/afaaq/project-reference-board.tsx", import.meta.url), "utf8");
assert(!projectBoard.includes("ProjectMedia"), "Project reference board must remain image-free.");
assert(!projectBoard.includes('/images/projects/'), "Project reference board must not reference repository project images.");
assert(!projectBoard.includes('"use client"'), "Project reference board must remain server-rendered.");
assert(!projectBoard.includes("Voltage Levels"), "Do not display decorative derived voltage counts.");
assert(!projectBoard.includes("Work Scopes"), "Do not display decorative derived scope counts.");
```

- [ ] **Step 2: Run validators and verify RED**

```bash
npm run test:corporate-grid
npm run test:project-media
```

Expected: FAIL on missing board / old dossier still present.

- [ ] **Step 3: Implement flagship reference**

Use only verified fields. Example structure:

```tsx
function FlagshipProjectReference({ project }: { project: Project }) {
  const technicalLabel = getProjectTechnicalLabel(project);
  return (
    <article className="grid overflow-hidden bg-[var(--surface)] lg:grid-cols-12">
      <div className="bg-[var(--brand-deep-navy)] p-7 text-white sm:p-9 lg:col-span-5 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/72">Flagship Project Reference</p>
        <h3 className="font-display mt-5 text-[clamp(2.3rem,4.4vw,4.25rem)] font-semibold leading-[0.96]">{project.name}</h3>
        {project.relationship ? <p className="mt-6 text-xl font-semibold">{project.relationship}</p> : null}
      </div>
      <div className="p-7 sm:p-9 lg:col-span-7 lg:p-10">
        <dl className="grid gap-5 sm:grid-cols-2">
          {technicalLabel ? <div><dt>System</dt><dd className="font-technical">{technicalLabel}</dd></div> : null}
          {project.location ? <div><dt>Location</dt><dd>{project.location}</dd></div> : null}
          {project.year ? <div><dt>Year</dt><dd className="font-technical">{project.year}</dd></div> : null}
        </dl>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">{project.scopes.map(...)}</ul>
        <Link href={`/projects/${project.slug}`}>View project scope →</Link>
      </div>
    </article>
  );
}
```

No fake logos, image shapes, schematics, project counts, or decorative `Project 01` unless the reference number has real user value.

- [ ] **Step 4: Implement secondary reference rows**

Each row must have sufficient width for long names and expose relationship, technical label/type, location/year, scope, and link.

Desktop: broad horizontal information rows.
Mobile: vertical records with natural wrapping.

- [ ] **Step 5: Replace Home project section**

Keep section title/copy only if it still supports the approved corporate tone; switch heading to Archivo. Render:

```tsx
<ProjectReferenceBoard projects={verifiedProjects} />
```

- [ ] **Step 6: Update project-media validator**

Make the Home project surfaces include `project-reference-board.tsx` and assert no `ProjectMedia` or `/images/projects/`. Remove obsolete assumptions that the Home must contain the dossier components.

- [ ] **Step 7: Remove unused old Home project components only after code search**

Run:

```bash
rg "FeaturedProjectDossier|ProjectDossierRecord|ProjectShowcaseRail" src
```

If there are no consumers outside files being retired, delete `project-dossier.tsx` and `project-showcase-rail.tsx`. Otherwise leave them untouched for other routes.

- [ ] **Step 8: Verify**

```bash
npm run test:corporate-grid
npm run test:project-media
npm run lint
npm run typecheck
```

- [ ] **Step 9: Commit**

```bash
git add src/app/page.tsx src/components/afaaq/project-reference-board.tsx scripts/validate-project-media.mjs scripts/validate-corporate-grid-power.mjs
git add -u src/components/afaaq/project-dossier.tsx src/components/afaaq/project-showcase-rail.tsx
git commit -m "feat: introduce corporate project reference system"
```

---

### Task 5: Separate Company Scale and Make Relationships Static

**Files:**
- Create: `src/components/afaaq/company-scale.tsx`
- Modify: `src/components/afaaq/relationship-rail.tsx`
- Modify: `src/styles/globals.css`
- Modify: `src/app/page.tsx`
- Modify: `scripts/validate-corporate-grid-power.mjs`

**Interfaces:**
- `CompanyScale` consumes `companyFacts` and renders the approved `150+` / `60%` proof separately from voltages.
- `RelationshipRail` retains its public `names: readonly string[]` interface but becomes static.

- [ ] **Step 1: Add failing assertions**

```js
const relationships = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
assert(home.includes("<CompanyScale"), "Home must have a dedicated company-scale section.");
assert(relationships.includes("Selected Project & Client Relationships"), "Relationships must use the approved corporate label.");
assert(!relationships.includes("relationship-marquee__track"), "Relationships must not use an infinite marquee.");
assert(!relationships.includes("google.com/s2/favicons"), "Relationships must not use remote favicon substitutes as logos.");
```

- [ ] **Step 2: Run validator and verify RED**

Run `npm run test:corporate-grid`; expected FAIL.

- [ ] **Step 3: Implement `CompanyScale`**

Select verified facts from `companyFacts` by label, not array position:

```tsx
const primaryLabels = new Set([
  "Substations delivered",
  "of EETC control centers project experience",
]);
```

Render two large proof blocks with `font-display` numerals and plain-language sans labels. Use a navy/blue structural accent, not a black stats strip.

- [ ] **Step 4: Convert `RelationshipRail` to a static wall**

Remove `Image`, favicon/domain mapping, duplicated items, marquee track, and animation assumptions.

Use semantic names only:

```tsx
export function RelationshipRail({ names }: RelationshipRailProps) {
  if (names.length === 0) return null;
  return (
    <section aria-labelledby="relationship-heading">
      <h2 id="relationship-heading" className="font-display ...">Selected Project & Client Relationships</h2>
      <ul className="mt-8 grid list-none grid-cols-1 border-y border-[var(--rule)] p-0 sm:grid-cols-2 lg:grid-cols-3">
        {names.map((name) => (
          <li key={name} className="min-w-0 border-b border-[var(--rule)] py-6 text-[1.1rem] font-semibold sm:px-5 lg:py-7">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Ensure long AOI name wraps normally and is never clipped.

- [ ] **Step 5: Remove obsolete marquee CSS**

Delete `@keyframes relationship-marquee`, `.relationship-marquee__track`, hover pause rules, and marquee-specific reduced-motion/scrollbar rules from globals.

- [ ] **Step 6: Place Company Scale then Relationships after Projects**

Home order must now be Projects → Company Scale → Relationships.

- [ ] **Step 7: Verify**

```bash
npm run test:corporate-grid
npm run lint
npm run typecheck
```

- [ ] **Step 8: Commit**

```bash
git add src/app/page.tsx src/components/afaaq/company-scale.tsx src/components/afaaq/relationship-rail.tsx src/styles/globals.css scripts/validate-corporate-grid-power.mjs
git commit -m "feat: strengthen company proof and relationships"
```

---

### Task 6: Refine Execution, About, and Project Inquiry

**Files:**
- Modify: `src/components/afaaq/execution-track.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/afaaq/about-brand-artwork.tsx` only if required for composition
- Modify: `scripts/validate-corporate-grid-power.mjs`

**Interfaces:**
- Execution keeps existing `steps` data and `<ExecutionTrack />` API.
- About artwork keeps `variant="compact"` API unless a concrete need requires a compatible extension.

- [ ] **Step 1: Add failing semantic/style assertions**

```js
const execution = readFileSync(new URL("../src/components/afaaq/execution-track.tsx", import.meta.url), "utf8");
assert(!execution.includes(">Step<"), "Execution must not repeat decorative STEP labels.");
assert(execution.includes("padStart(2"), "Ordered execution numbers 01–06 must remain because order is meaningful.");
assert(home.includes("Founded 2017"), "About must foreground a verified corporate fact.");
assert(home.includes("bg-[var(--brand-deep-navy)]"), "Project Inquiry must use AFAAQ Deep Navy.");
```

- [ ] **Step 2: Run validator and verify RED**

Run `npm run test:corporate-grid`; expected FAIL.

- [ ] **Step 3: Refine execution component**

Remove repeated `Step` label and use simpler corporate continuity. Keep `<ol>` and `01–06`. Reduce excessive hairlines while maintaining clear ordered grouping. Use Archivo for titles only if needed; descriptions remain sans.

- [ ] **Step 4: Rebalance About**

Keep the approved artwork paths and `object-contain`. Make the text/company block primary and artwork supporting. Surface exactly verified facts such as:

```tsx
<p>Founded 2017</p>
<p>Cairo, Egypt</p>
```

Do not introduce new claims.

- [ ] **Step 5: Rebuild final CTA as Deep Navy authority moment**

Use `bg-[var(--brand-deep-navy)]`, strong Archivo heading, one clear primary action, and optional restrained Power Rail line treatment without animation.

- [ ] **Step 6: Verify**

```bash
npm run test:corporate-grid
npm run lint
npm run typecheck
```

- [ ] **Step 7: Commit**

```bash
git add src/app/page.tsx src/components/afaaq/execution-track.tsx src/components/afaaq/about-brand-artwork.tsx scripts/validate-corporate-grid-power.mjs
git commit -m "feat: refine corporate execution and closing sections"
```

---

### Task 7: Align Header and Footer with Corporate Grid Power

**Files:**
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/site-footer.tsx`
- Modify: `scripts/validate-corporate-grid-power.mjs`

**Interfaces:**
- Preserve navigation route structure and active-route behavior.
- Preserve contact/company data sources.

- [ ] **Step 1: Add failing shared-chrome assertions**

Read header/footer in validator and assert:

```js
assert(header.includes("var(--canvas)") || header.includes("bg-white"), "Header must use the corporate light surface.");
assert(footer.includes("var(--brand-deep-navy)"), "Footer must close with AFAAQ Deep Navy.");
```

Also assert no route labels were removed by checking the current required nav names.

- [ ] **Step 2: Run validator and verify RED**

Run `npm run test:corporate-grid`; expected FAIL on footer/deep-navy assumption.

- [ ] **Step 3: Refine Header**

Keep sticky behavior, logo/wordmark, routes, active underline, and mobile navigation behavior. Move visual surface to Corporate White/Cool Neutral; strengthen brand lockup using spacing/type/blue active state rather than decoration.

- [ ] **Step 4: Refine Footer**

Switch branded dark surface to `--brand-deep-navy`; preserve Navigate / Direct / Office structure, contact details, legal close, and brand. Raise low-contrast text where needed; do not shrink body/link text below a comfortable reading size.

- [ ] **Step 5: Verify**

```bash
npm run test:corporate-grid
npm run lint
npm run typecheck
```

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/site-header.tsx src/components/layout/site-footer.tsx scripts/validate-corporate-grid-power.mjs
git commit -m "feat: align shared chrome with afaaq corporate identity"
```

---

### Task 8: Full Regression, Responsive Review, and One-PR Delivery Gate

**Files:**
- Modify: validators only if a concrete false positive/coverage gap is discovered.
- No opportunistic design changes.

**Interfaces:**
- Produces a merge-ready branch whose diff matches the approved spec and nothing else.

- [ ] **Step 1: Run the complete repository check**

```bash
npm run check
```

Expected: all source validators, lint, and typecheck PASS.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: PASS with no build errors.

If the execution environment cannot run dependencies locally, do not claim this step passed; use Vercel status after merge as the production-build gate and report the limitation explicitly.

- [ ] **Step 3: Source integrity checks**

Run:

```bash
rg 'images/projects|ProjectMedia|FeaturedProjectDossier|relationship-marquee' src/app/page.tsx src/components/afaaq
rg 'drcc.jpg|crcc.jpg|rcc.jpg|benban.jpg' src/app/page.tsx src/components/afaaq
rg '"use client"' src/components/afaaq/project-reference-board.tsx src/components/afaaq/capability-grid.tsx src/components/afaaq/company-scale.tsx
```

Expected:
- no Home project-image references
- no old black dossier on Home
- no marquee
- new presentation components remain server components.

- [ ] **Step 4: Confirm content files are untouched**

```bash
git diff main...HEAD -- src/content/projects.ts src/content/company.ts src/content/services.ts
```

Expected: no changes unless a separate explicit factual correction was approved. For this pass, expected output is empty.

- [ ] **Step 5: Responsive visual QA**

Review at minimum:

- 320 px
- 375/390 px
- 768 px
- 1024 px
- 1440 px

Verify:

- Hero image and blend visually match the approved pre-pass Hero.
- No horizontal overflow.
- Power Rail wraps/stacks legibly.
- Long CRCC/AOI names do not clip.
- Capability hierarchy remains obvious on mobile.
- Project references become vertical records without fake media gaps.
- Relationship wall is static and readable.
- Execution order is obvious without repeated `Step` labels.
- About artwork remains uncropped.
- CTA/header/footer contrast is strong.
- Keyboard focus remains visible.
- Reduced motion leaves a complete page.

- [ ] **Step 6: Self-critique against the uploaded frontend-design taste rules**

Ask only these concrete questions:

1. Is any structure decorative rather than truthful?
2. Did warm-cream/editorial hairline defaults leak back outside the preserved Hero blend?
3. Is mono used for marketing labels rather than technical/tabular data?
4. Is there more than one competing visual signature beyond the Power Rail?
5. Does any section look like a generic SaaS/card template?
6. Can a technical/commercial decision-maker scan identity → capability → evidence → scale without reading every paragraph?

If all six pass, STOP. Do not invent another cosmetic redesign.

- [ ] **Step 7: Open or update the single PR**

Use one PR from `design/corporate-grid-power-home` to `main`. The PR description must state:

- Corporate Grid Power visual foundation
- Hero image/blend preserved
- project references remain image-free
- project/company/service facts unchanged
- static relationships
- accessibility/responsive validation

All review fixes stay on this PR.

- [ ] **Step 8: Request Codex review and resolve only concrete findings**

Comment:

```text
@codex review
```

Address findings on the same branch/PR. Re-request review after the final fix. Do not create another PR.

- [ ] **Step 9: Final diff gate before merge**

```bash
git diff --stat main...HEAD
git diff --name-only main...HEAD
```

Confirm no unapproved content/data/image changes.

- [ ] **Step 10: Squash merge**

Squash-merge the single PR only after final review is clean and mergeable.

Suggested squash title:

```text
Reframe Home with Corporate Grid Power identity
```

- [ ] **Step 11: Verify exact merged commit and Vercel production status**

Confirm `main` points to the squash commit, then wait for Vercel status on that exact SHA to become `success` before reporting production completion.

---

## Plan Self-Review

### Spec coverage

- Corporate/cool foundation: Task 1.
- Archivo + restrained mono: Tasks 1–7.
- Hero exact photo/blend preservation despite new global canvas: Task 2.
- AFAAQ Power Rail signature: Task 2, restrained reuse in Task 6 only.
- Capability hierarchy: Task 3.
- Image-free corporate project references: Task 4.
- Separate company scale: Task 5.
- Static relationships/no favicon substitutes: Task 5.
- Ordered execution without decorative STEP labels: Task 6.
- About artwork retained/supporting: Task 6.
- Deep-navy CTA/footer: Tasks 6–7.
- Shared chrome: Task 7.
- Responsive/accessibility/performance/regression/stop condition: Task 8.
- One branch/one PR/squash/Vercel gate: Task 8.

### Placeholder scan

No TBD/TODO/"similar to" steps are permitted. Each task includes explicit files, assertions, implementation shape, verification commands, and commit boundary.

### Type/interface consistency

- `PowerRail` has explicit props and is consumed only by Home.
- `CapabilityGrid` sources verified services internally and has no required props.
- `ProjectReferenceBoard` accepts `projects: readonly Project[]`.
- `CompanyScale` may source `companyFacts` internally; no duplicated factual constants should be created unless they are presentational labels already verified in content.
- `RelationshipRail` keeps the existing `names: readonly string[]` public interface to minimize unrelated call-site changes.
- `ExecutionTrack` and `AboutBrandArtwork` preserve their existing external APIs.

## Stop Condition

The pass is complete when the approved information architecture, corporate identity tokens, image-free project-reference system, static relationship wall, responsive behavior, accessibility checks, Codex review, squash merge, and exact-commit Vercel success all pass. At that point, alternative spacing/color/layout ideas are not defects and must not trigger another redesign without a concrete failure against this spec.
