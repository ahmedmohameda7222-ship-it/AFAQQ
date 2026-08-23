# AFAAQ ARAB — Corporate Grid Power Home Design

Date: 2026-08-24
Status: Approved direction, pending written-spec review
Scope: Home page + shared visual foundation/chrome

## 1. Purpose

Reframe AFAAQ ARAB from an editorial/minimal portfolio presentation into the digital presence of an established electrical engineering and contracting company.

Target perception:

> Established power-engineering company with real delivery capability, credible project references, clear technical depth, and a recognizable corporate identity.

The site must not read as a design-studio concept, AI-generated editorial template, SaaS landing page, or dark industrial mood-board.

The maturity benchmark is the corporate clarity of major energy/engineering companies such as Schneider Electric, ABB, and Hitachi Energy. We do not copy their layouts or branding; AFAAQ must remain recognizably its own brand.

## 2. Approved Direction

Direction: **Corporate Grid Power**

Core characteristics:

- corporate rather than editorial
- utility-grade rather than lifestyle-oriented
- high-legibility typography
- strong information hierarchy
- white/cool-neutral foundation
- AFAAQ navy and electric blue as deliberate signatures
- real engineering data used as structure
- sharp geometry and low-radius surfaces
- purposeful, limited motion
- no decorative technical fiction
- no project photography until verified real AFAAQ project photography exists

The design should feel engineered and composed, not embellished.

## 3. Hard Constraints

### 3.1 No project-image fiction

AFAAQ does not currently have verified project photography for the Home portfolio.

Therefore:

- do not use `drcc.jpg`, `crcc.jpg`, `rcc.jpg`, `benban.jpg`, or any other repository image as project evidence unless the user explicitly verifies it later
- do not use stock imagery as project photography
- do not generate fake project imagery
- do not create empty image-shaped placeholders
- do not create faux schematics that imply actual project documentation

Project credibility must come from verified facts: project names, relationships, voltage levels, locations, years, scopes, and company proof.

### 3.2 Hero image and blend are locked

The current Home hero image and **rendered blend look** are approved and must remain visually unchanged.

Preserve:

- `/images/home/home-substation-original-1440.jpg`
- `priority` loading
- current responsive crop/composition
- current desktop blend geometry/stops/direction
- current mobile blend geometry/stops/direction
- the current warm blend base used by the hero

Important implementation note:

The global page canvas will change from warm cream to corporate white. The hero blend must therefore be decoupled from the global canvas if necessary (for example with a hero-local blend token using the existing warm base) so the **hero keeps the same visual blend even though the rest of the site becomes cooler**.

The redesign may change hero typography, spacing, CTA styling, and the proof treatment beneath it. It must not convert the hero to a hard split or alter the approved blend.

### 3.3 Facts remain source-of-truth driven

Do not invent or inflate:

- project names
- clients/relationships
- voltage levels
- locations
- years
- project scopes
- company statistics
- capability claims

Use current content modules as the source of truth. Do not edit `src/content/projects.ts` merely to support layout.

### 3.4 Stop endless taste churn

This pass is complete when it satisfies this spec, responsive QA, accessibility, and code review. An aesthetically valid alternative is not by itself a reason to redesign again.

## 4. Audience and Home Page Job

Primary audience:

- utilities and T&D organizations
- EPC project managers
- consultants
- procurement teams
- protection/control engineers
- commissioning managers
- OEM and engineering partners

Primary job:

> Establish enough capability and credibility that a technical or commercial decision-maker will inspect project references or discuss a project scope.

The page should answer in order:

1. Who is AFAAQ and what does it do?
2. What technical domains/voltage levels does it work in?
3. What are the core capabilities?
4. What projects prove them?
5. What scale and relationships support the company?
6. How does AFAAQ execute work?
7. What company is behind the work?
8. How does a prospect start a conversation?

## 5. Visual Identity System

### 5.1 Palette

Locked direction:

- Corporate White — `#FFFFFF`
- Cool Surface — `#F4F7FA`
- AFAAQ Ink — `#111827`
- AFAAQ Muted — `#52606D`
- AFAAQ Rule — `#D7DEE8`
- AFAAQ Navy — `#0A2F82`
- AFAAQ Deep Navy — `#061D58`
- AFAAQ Electric Blue — `#0B8CFF`

Usage:

- white dominates the page
- cool surface separates major content groups
- navy carries authority
- electric blue is reserved for action/signature moments
- graphite/black is no longer the branded dark default
- warm cream is removed as the **global** foundation; the approved Hero blend is the explicit exception
- no purple gradients, glass effects, glow, grain, or warm decorative shadows

### 5.2 Typography

Roles:

- Display/corporate headings — **Archivo**
- Body/navigation/UI — **IBM Plex Sans**
- Real technical/tabular data only — **IBM Plex Mono**

Archivo:

- page/section headlines
- major project names
- major company-proof numerals where appropriate
- strong corporate statements

IBM Plex Sans:

- body copy
- navigation
- service descriptions
- project scopes
- CTAs
- relationship names unless verified local wordmarks exist

IBM Plex Mono is restricted to genuine technical/tabular information such as:

- `220 kV / 66 kV / 11 kV`
- years
- concise engineering metadata
- ordered process numbers `01–06`

Do not use mono as a generic aesthetic for every eyebrow/label.

Readability targets:

- body copy roughly 17–18 px at desktop-equivalent sizing
- no functional 9–11 px micro-text system
- headings use scale/weight rather than extreme letter-spacing
- readable line lengths throughout

### 5.3 Geometry

- sharp corners or minimal radius
- no pill-heavy UI
- no floating cards with soft shadows
- no hover-lift cards
- no decorative left-border card cliché
- use spacing, surfaces, and real grouping instead of rules everywhere

## 6. AFAAQ Signature — Power Rail

The single memorable signature is the **AFAAQ Power Rail**, derived from:

1. the blue sweep in the approved AFAAQ mark
2. power-system busbar/distribution logic

It is not a decorative squiggle or fake single-line diagram.

Rules:

- use only when it carries structure/information
- may anchor voltage proof, project-reference hierarchy, or a primary CTA
- use navy/electric blue
- keep geometry simple and repeatable
- do not turn it into a separator on every section

Primary uses:

- Immediate Proof beneath the Hero
- Major Project References
- Project Inquiry

Everything else stays restrained so the signature remains meaningful.

## 7. Approved Home Architecture

1. Hero
2. Immediate Proof
3. Capabilities
4. Major Project References
5. Company Scale
6. Selected Relationships
7. Project Execution
8. About AFAAQ
9. Project Inquiry

Intent:

> Identity → capability → evidence → scale → trust → process → company → action.

## 8. Hero

Keep:

- approved image
- approved blend exactly in rendered appearance
- headline meaning/copy
- primary Contact CTA
- secondary Projects CTA

Approved headline remains:

> Electrical testing, commissioning and protection for power systems.

Changes are limited to corporate typography, spacing, CTA hierarchy, and integration with the Immediate Proof band.

The Hero remains the principal LCP image.

## 9. Immediate Proof

Replace the current oversized editorial voltage/proof section with a compact corporate proof band immediately following the Hero.

Primary technical proof:

- `220 kV`
- `66 kV`
- `11 kV`

Early company-scale proof:

- `150+ Substations delivered`

Use the Power Rail to make the band recognizably AFAAQ rather than a generic statistics row.

Keep the conceptual distinction clear:

- voltage = technical system experience
- `150+` = company delivery scale

The later Company Scale section provides the fuller credibility moment.

## 10. Capabilities

Capabilities move ahead of Projects.

Core hierarchy:

1. Testing & Commissioning
2. Protection & Control

Supporting capabilities:

- Electrical Installation
- Power Quality
- Operation & Maintenance
- Engineering Support

Requirements:

- no decorative service numbering
- supporting capabilities cannot read like footnotes
- large readable titles/descriptions
- no six identical rounded cards
- use a corporate modular grid with clear core/supporting hierarchy
- primarily white/cool-neutral; this is not the dark-industrial direction

## 11. Major Project References

Remove the current black DRCC Technical Dossier from the Home page.

The new system presents projects as **engineering references**, not media substitutes.

### 11.1 Flagship — DRCC

Present one large factual corporate module containing:

- Delta Regional Control Center (DRCC)
- ELSEWEDY ELECTRIC T&D
- `220 kV / 66 kV / 11 kV`
- Delta Region, Egypt
- Electrical Installation
- Testing & Commissioning
- Protection & Control
- RTU & Telecommunications

Requirements:

- no image box
- no faux schematic/linework
- no decorative `Voltage Levels 03` / `Work Scopes 04`
- large project name
- relationship/client clearly visible
- technical metadata grouped clearly
- scope easy to scan
- navy/blue provides hierarchy
- cool white/surface treatment instead of a large black rectangle

### 11.2 Secondary references

CRCC, Canal RCC, and Benban DCC become broad reference rows/modules, not tiny editorial cards.

Expose when available:

- project name
- relationship
- voltage or technical type
- location
- year
- scope
- full-project link

Long names must have enough width. Preferred desktop treatment is structured reference rows or broad grid records, not carousel/card clutter.

Portfolio remains server-rendered.

## 12. Company Scale

Primary corporate proof:

- `150+` — Substations delivered
- `60%` — of EETC control centers project experience

Requirements:

- large readable numerals
- plain labels
- generous authority-focused spacing
- navy/blue identity
- no mixing these metrics with voltage as if they are the same kind of proof

Secondary verified company facts may support composition if useful, but no new claims are introduced.

## 13. Selected Relationships

Replace the infinite marquee with a static corporate relationship wall.

Intent label:

> Selected Project & Client Relationships

Requirements:

- static on desktop
- no clipped edge names
- no continuous motion
- responsive wrap/stack on smaller screens
- readable at normal viewing distance

Logo policy:

- verified local wordmark/logo assets only
- no Google/favicon-style remote-logo substitutes
- otherwise use organization names typographically
- never invent/redraw third-party logos

## 14. Project Execution

Keep the existing real sequence:

1. Review
2. Procedures
3. Installation
4. Testing
5. Commissioning
6. Handover

Rules:

- `01–06` may remain because order is meaningful
- remove repeated decorative `STEP` labeling
- descriptions stay readable
- communicate continuity/control without dashboard cards
- mobile stacks naturally

## 15. About AFAAQ

Keep the approved AFAAQ artwork, but make the company—not the artwork—the primary subject.

Core company information:

- AFAAQ ARAB for Engineering & Contracting
- Cairo, Egypt
- Founded 2017
- electrical engineering and contracting focus

Requirements:

- artwork is supporting brand material, not a poster
- factual company information gains prominence
- preserve artwork quality and no forced cropping
- clear About link

## 16. Project Inquiry + Footer

Final CTA is a branded authority moment using **AFAAQ Deep Navy**, not generic graphite.

Primary action remains:

> Discuss a Project Scope

Rules:

- one obvious primary action
- high contrast
- restrained Power Rail use allowed
- no glow/decorative gradient

Footer:

- deep-navy corporate close
- readable contact/legal/navigation information
- no excessive low-contrast micro-text

## 17. Header / Shared Chrome

Header requirements:

- white/cool-neutral surface
- stronger AFAAQ brand lockup
- clear active-route state
- restrained separation from content
- accessible mobile navigation
- current route structure unchanged

Shared header/footer are in scope so Home does not feel detached from the rest of the site.

## 18. Global Foundation and Other Routes

This pass may change global typography/color tokens, so other routes can inherit:

- white/cool-neutral canvas
- new ink/muted/rule colors
- Archivo headings
- updated shared header/footer

This is **not** a structural redesign of every page.

Regression-check all main routes for:

- readability/contrast
- overflow
- heading wrapping
- spacing breakage
- shared chrome compatibility

Fix concrete regressions caused by global changes in the same pass; do not opportunistically redesign unrelated pages.

## 19. Motion

- remove relationship marquee animation
- no auto-scrolling portfolio
- no hover-lift cards
- no constant ambient animation
- subtle color/underline/arrow movement is acceptable
- at most one controlled Power Rail reveal if it materially helps
- respect `prefers-reduced-motion`
- page remains complete with motion disabled

## 20. Responsive Behavior

Minimum target: 320 px viewport.

Requirements:

- no horizontal overflow
- no clipped relationship names
- no fixed-width project modules
- approved hero image/blend stays coherent across breakpoints
- proof band wraps/stacks without tiny four-column text
- capabilities retain hierarchy when stacked
- project rows become readable vertical records on small screens
- execution sequence stacks naturally
- CTA remains touch-friendly
- practical interactive targets around 44–48 px

Mobile must be intentionally composed, not a shrunken desktop.

## 21. Accessibility

Quality floor:

- semantic headings
- visible keyboard focus
- real links remain links
- sufficient text/control contrast
- no important information encoded by color alone
- no important text embedded in decorative images
- logical reading order
- reduced-motion support
- decorative rail elements `aria-hidden` where appropriate
- relationship names remain present even if any optional logo asset fails

## 22. Performance

- preserve hero `priority` as principal LCP asset
- no below-fold priority images
- no client JS for static project/relationship presentation
- project references server-rendered
- relationship wall server-rendered
- no heavy animation library for this pass
- maintain stable dimensions to avoid layout shift

## 23. Expected Implementation Surface

Likely files/components:

- `src/app/layout.tsx` — Archivo display role
- `src/styles/globals.css` — corporate tokens, hero-local blend token if required, remove unused marquee styles
- `src/app/page.tsx` — architecture/order/composition
- project dossier/showcase components — replace Home dossier with reference system
- `relationship-rail.tsx` — static relationship wall
- `service-index.tsx` — corporate capability hierarchy
- `execution-track.tsx` — simplify visual treatment
- `about-brand-artwork.tsx` — preserve asset; adjust integration only if needed
- `site-header.tsx` / `site-footer.tsx` — shared corporate chrome
- validators — enforce new invariants

No unrelated refactoring.

## 24. Explicit Keep / Remove

### Keep

- hero image
- hero rendered blend **exactly as it looks now**
- verified project facts
- verified company facts
- service content
- execution content
- About artwork
- navigation structure
- no-project-photo policy

### Remove / Replace

- warm cream as the global page foundation (Hero blend is the exception)
- black DRCC dossier
- faux technical linework
- decorative project counts
- excessive mono labels
- hairline rules as the dominant visual language
- infinite relationship marquee
- tiny supporting-service treatment
- graphite as the main brand dark

## 25. Validation Invariants

Update source-level validation so future edits cannot silently undo the approved system.

At minimum validate:

- approved hero image path remains
- hero visual blend remains preserved; if global canvas changes, Hero uses an explicit local blend base so its rendered look does not shift
- Home has no `/images/projects/` usage
- Home no longer renders the old black Technical Dossier presentation
- project references contain no project-media placeholders/faux project imagery
- relationship section contains no infinite-marquee implementation
- company metrics come from verified company data where practical
- voltage experience remains `220 / 66 / 11 kV`
- project reference facts continue to come from project content
- no factual edits to `src/content/projects.ts` are introduced by the redesign
- static project/relationship presentation remains server-rendered

## 26. Visual Acceptance Criteria

### First-impression test

At desktop width the first screen should communicate:

- electrical engineering/contracting
- power systems
- recognizable blue/navy AFAAQ branding
- corporate establishment rather than editorial experimentation

### Five-second scan test

Without reading paragraphs, a viewer can identify:

- Testing & Commissioning
- Protection & Control
- 220 / 66 / 11 kV
- 150+ substations
- major projects
- selected relationships
- project-inquiry action

### Identity test

The page stays coherent through:

- AFAAQ navy/electric blue
- Archivo corporate typography
- Power Rail signature
- engineering-reference presentation

It should not collapse into a generic template if the logo is temporarily hidden during review.

### Anti-AI-template test

Do not depend on:

- global cream editorial background
- broadsheet hairline-grid styling
- fake diagrams
- oversized rounded cards
- pill-heavy UI
- decorative gradients/glow
- random numbering
- repeated generic three-card layouts

### Credibility test

Factual project/company proof must be more prominent than decorative design devices.

### Restraint test

Power Rail is the main signature. If unrelated visual tricks compete with it, remove them.

## 27. Stop Condition

The pass is complete after implementation, responsive/accessibility QA, and code review when it satisfies this spec.

Do not reopen the design because a different layout/font size/spacing choice is also attractive.

Future changes should require at least one of:

- factual correction
- new business requirement
- responsive failure
- accessibility issue
- performance issue
- clear brand-system inconsistency
- demonstrated usability problem
