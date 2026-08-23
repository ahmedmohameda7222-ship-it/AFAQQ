# AFAAQ ARAB — Corporate Grid Power Home Design

Date: 2026-08-24
Status: Approved direction, pending written-spec review
Scope: Home page + shared visual foundation/chrome

## 1. Purpose

Reframe AFAAQ ARAB from an editorial/minimal portfolio presentation into the digital presence of an established electrical engineering and contracting company.

The target perception is:

> Established power-engineering company with real delivery capability, credible project references, clear technical depth, and a recognizable corporate identity.

The site must not read as a design-studio concept, an AI-generated editorial template, a SaaS landing page, or a specialist contractor using visual drama to compensate for weak proof.

The visual benchmark is the corporate maturity of large energy and engineering companies such as Schneider Electric, ABB, and Hitachi Energy. The implementation must not copy their layouts, branding, or component styling. AFAAQ must remain recognizably its own brand.

## 2. Approved Design Direction

Direction name: **Corporate Grid Power**

Core characteristics:

- corporate rather than editorial
- utility-grade rather than lifestyle-oriented
- clear, high-legibility typography
- strong information hierarchy
- white and cool-neutral foundation
- AFAAQ navy and electric blue as deliberate brand signatures
- real engineering data used as structure
- sharp geometry and low-radius surfaces
- limited, purposeful motion
- no decorative technical fiction
- no project photography unless verified real AFAAQ project photography becomes available

The design should feel composed and engineered, not embellished.

## 3. Hard Constraints

These requirements are non-negotiable for this pass.

### 3.1 Project imagery

AFAAQ does not currently have verified project photography available for the Home portfolio.

Therefore:

- do not use `drcc.jpg`, `crcc.jpg`, `rcc.jpg`, `benban.jpg`, or any other repository image as project evidence unless the user explicitly verifies it later
- do not use stock photography as project photography
- do not create generated/fake project imagery
- do not create empty image-shaped placeholders
- do not create faux schematics or technical drawings that imply actual project documentation

Project credibility must come from verified facts, relationships, voltage levels, locations, years, scopes, and company proof.

### 3.2 Hero image and blend

The current Home hero image and blend are approved and must remain unchanged.

Preserve:

- image path: `/images/home/home-substation-original-1440.jpg`
- `priority` behavior
- current responsive image composition/crop
- current desktop blend treatment
- current mobile blend treatment
- current blend gradient values and direction

The Corporate Grid Power redesign may change typography, surrounding layout rhythm, CTA styling, and the proof treatment beneath the hero, but it must **not** replace the hero photo, convert the hero into a hard split, or alter the approved blend.

### 3.3 Facts and content integrity

Do not invent or inflate:

- project names
- clients/relationships
- voltage levels
- locations
- years
- project scopes
- company statistics
- standards, protocols, equipment, or capability claims

Use the current verified content sources as the source of truth.

Do not modify `src/content/projects.ts` merely to support visual layout.

### 3.4 One-pass discipline

This is a deliberate brand-maturity pass, not an invitation to redesign indefinitely.

Once the page satisfies the visual acceptance criteria in this spec, further cosmetic alternatives are not reasons to reopen the design. New changes require a concrete usability, accessibility, factual, responsive, or brand-system failure.

## 4. Audience and Page Job

Primary audience:

- utilities and transmission/distribution organizations
- EPC project managers
- consultants
- procurement teams
- protection and control engineers
- commissioning managers
- OEM and engineering partners

Primary Home-page job:

> Establish capability and credibility quickly enough that a technical or commercial decision-maker is willing to inspect project references or discuss a project scope.

The page must answer, in order:

1. Who is AFAAQ and what does it do?
2. What technical domains and voltage levels does it work in?
3. What are its core capabilities?
4. What projects prove that capability?
5. What scale and relationships support the claim?
6. How does AFAAQ execute work?
7. What kind of company is behind the work?
8. How does a prospect start a project conversation?

## 5. Visual Identity System

### 5.1 Palette

Replace the warm-cream foundation with a cooler corporate system.

Proposed locked tokens:

- `Corporate White`: `#FFFFFF`
- `Cool Surface`: `#F4F7FA`
- `AFAAQ Ink`: `#111827`
- `AFAAQ Muted`: `#52606D`
- `AFAAQ Rule`: `#D7DEE8`
- `AFAAQ Navy`: `#0A2F82`
- `AFAAQ Deep Navy`: `#061D58`
- `AFAAQ Electric Blue`: `#0B8CFF`

The navy/blue values are derived from the approved AFAAQ mark rather than introduced as unrelated decoration.

Usage principles:

- white is the dominant page field
- cool surface separates major content groups
- navy carries authority and large corporate statements
- electric blue is used sparingly for active/action/brand-signature moments
- graphite/near-black is no longer the default branded dark surface
- no warm cream foundation
- no purple gradients, glass effects, warm shadows, paper grain, or cozy visual treatment

### 5.2 Typography

Typography should stop behaving like an editorial display system and start behaving like a corporate engineering identity.

Roles:

- **Display / corporate headings:** Archivo
- **Body / navigation / UI:** IBM Plex Sans
- **Technical data only:** IBM Plex Mono

Archivo usage:

- page and section headlines
- major project names
- major company proof numerals where appropriate
- strong corporate statements

IBM Plex Sans usage:

- body copy
- navigation
- service descriptions
- project scope text
- CTA copy
- relationship names unless a verified wordmark is used

IBM Plex Mono usage is restricted to information that is genuinely technical or tabular, such as:

- `220 kV / 66 kV / 11 kV`
- project reference IDs if retained
- years
- short engineering metadata
- ordered execution step numbers because order is semantically meaningful

Avoid mono for generic eyebrows, marketing labels, and decorative section names.

Readability targets:

- normal body copy approximately 17–18 px at desktop-equivalent sizing
- metadata must remain comfortably legible; do not create 9–11 px visual-text systems
- headlines use weight and scale rather than extreme negative letter-spacing for personality
- line lengths should remain controlled and readable

### 5.3 Geometry

- sharp corners or very small radii only
- no pill UI except where semantically required
- no floating cards with soft shadows
- no hover-lift card behavior
- no left-border accent-card cliché
- grouping should come from spacing, surfaces, and meaningful section structure

## 6. AFAAQ Signature: Power Rail

The single recognizable visual signature is the **AFAAQ Power Rail**.

It is inspired by two real sources from the brand/subject:

1. the blue sweep in the approved AFAAQ mark
2. the visual logic of power-system busbars/distribution rails

The Power Rail is not a decorative squiggle.

Rules:

- it appears only when it carries a real structural or informational role
- it may anchor voltage experience, project classification, or a primary action
- it uses AFAAQ navy/electric blue
- it should be geometrically simple and easy to reproduce consistently
- it must not become a repeated separator on every section
- it must not imply an electrical single-line diagram unless it actually represents one

Primary uses in this pass:

- immediate proof band beneath/at the base of the Hero
- major project-reference hierarchy
- final project inquiry / CTA treatment

The rest of the page stays restrained so this signature remains memorable.

## 7. Home Information Architecture

Approved order:

1. Hero
2. Immediate Proof
3. Capabilities
4. Major Project References
5. Company Scale
6. Selected Relationships
7. Project Execution
8. About AFAAQ
9. Project Inquiry

This order is intentional:

> Identity → capability → evidence → scale → trust → process → company → action.

## 8. Hero

### 8.1 What stays

Keep the current:

- hero image
- responsive crop
- blend/gradient treatment
- core positioning statement
- primary CTA to Contact
- secondary CTA to Projects

The current approved headline remains:

> Electrical testing, commissioning and protection for power systems.

Do not rewrite it merely for novelty.

### 8.2 What changes

The hero should gain more corporate authority through:

- Archivo headline typography
- cleaner white/cool-neutral page foundation around the existing blend
- stronger AFAAQ navy/blue action hierarchy
- reduced dependence on tiny section-label typography
- cleaner spacing between positioning, headline, body, and actions
- immediate technical/company proof connected visually to the hero

The hero remains the primary LCP image.

## 9. Immediate Proof

The current large editorial-style voltage/proof section is replaced with a more compact corporate proof band directly after the Hero.

Primary technical proof:

- `220 kV`
- `66 kV`
- `11 kV`

Primary scale proof surfaced at the same early stage:

- `150+ Substations delivered`

The band should be quick to scan and should use the Power Rail as a meaningful structural element.

Important distinction:

- voltage values communicate **technical system experience**
- `150+` communicates **company delivery scale**

The later Company Scale section still gives the company statistics more complete prominence; the immediate band is an early credibility signal, not the full proof story.

## 10. Capabilities

Capabilities move earlier in the page because prospects should understand what AFAAQ actually does before reading project references.

Hierarchy:

### Core capabilities

1. Testing & Commissioning
2. Protection & Control

These receive the strongest visual and content hierarchy.

### Supporting capabilities

- Electrical Installation
- Power Quality
- Operation & Maintenance
- Engineering Support

Requirements:

- no decorative numbering for capabilities
- no tiny footnote treatment for supporting services
- core and supporting hierarchy must be obvious without making supporting services feel unimportant
- use large readable service titles and concise descriptions
- avoid six identical rounded cards
- use a modular corporate grid with clear grouping and controlled white space
- mostly white/cool-neutral treatment; this direction is not a dark-industrial page

## 11. Major Project References

The existing black DRCC Technical Dossier is removed from the Home page.

Reason:

It still behaves visually like an abstract media replacement. The new system must present projects as engineering references rather than as missing images or graphic posters.

### 11.1 Flagship DRCC reference

DRCC remains the flagship project.

It should be presented as a large corporate information module containing only verified facts:

- Delta Regional Control Center (DRCC)
- ELSEWEDY ELECTRIC T&D
- `220 kV / 66 kV / 11 kV`
- Delta Region, Egypt
- Electrical Installation
- Testing & Commissioning
- Protection & Control
- RTU & Telecommunications

Visual structure:

- no image box
- no faux schematic
- no decorative voltage/scope counts
- large project name
- relationship/client highly visible
- technical metadata clearly grouped
- scope easy to scan
- AFAAQ navy/blue used to establish reference hierarchy
- cool-white/cool-surface module rather than a large black rectangle

### 11.2 Secondary references

CRCC, Canal RCC, and Benban DCC become strong information rows/modules rather than small editorial cards.

Each reference should expose, when available:

- project name
- project relationship
- voltage level or technical type
- location
- year
- scope
- clear link to the full project page

Long project names must have enough horizontal room; the layout must not force them into awkward card shapes.

Preferred desktop behavior:

- structured reference rows or broad grid records
- not a horizontal carousel
- not a client-side presentation widget
- not image placeholders

The portfolio remains server-rendered.

## 12. Company Scale

Company proof must feel like corporate credentials, not small metadata.

Primary facts:

- `150+` — Substations delivered
- `60%` — of EETC control centers project experience

Secondary company facts may support the section where compositionally useful, but no unverified claims may be introduced.

Visual requirements:

- large, readable numerals
- clear plain-language labels
- enough white space to feel authoritative rather than promotional
- blue/navy identity, not generic black statistics
- do not mix these numbers conceptually with voltage levels

## 13. Selected Relationships

Replace the continuously moving marquee with a static corporate relationship system.

Section intent:

> Selected Project & Client Relationships

Requirements:

- static on desktop
- no infinite marquee
- no clipped names at viewport edges
- no continuous attention-seeking motion
- responsive wrapping/stacking on smaller screens
- relationship names must be readable at normal viewing distance

Logo policy:

- use verified local logo/wordmark assets only when they exist and are appropriate
- do not use Google/favicon-style remote logos as a substitute for proper corporate marks
- when no verified logo exists, use the organization name typographically and confidently
- do not invent or redraw third-party logos

## 14. Project Execution

Keep the current six-step execution logic because it represents a real ordered process.

Sequence:

1. Review
2. Procedures
3. Installation
4. Testing
5. Commissioning
6. Handover

Requirements:

- ordered numbers `01–06` may remain because order is meaningful
- remove repeated decorative `STEP` labeling if present
- descriptions remain readable
- visual flow should communicate continuity and control
- no dashboard-style process cards
- mobile layout stacks naturally without horizontal scrolling

## 15. About AFAAQ

Keep the current approved AFAAQ artwork.

Rebalance the section so the company, not the artwork, is the primary subject.

Core company proof:

- AFAAQ ARAB for Engineering & Contracting
- Cairo, Egypt
- Founded 2017
- electrical engineering and contracting focus

The artwork becomes a supporting branded asset.

Requirements:

- no poster/banner feeling
- more corporate information hierarchy
- factual company data is more prominent
- clear link to About
- preserve artwork quality and no forced cropping

## 16. Project Inquiry and Footer

The final CTA is a strong branded authority moment.

Use AFAAQ Deep Navy rather than generic graphite.

CTA remains direct:

> Discuss a Project Scope

Requirements:

- high contrast
- one obvious primary action
- restrained Power Rail usage is allowed here
- no decorative gradients or glow

Footer:

- deep-navy corporate close
- readable contact information
- existing information architecture may remain unless a clarity issue is found
- minimum readable body/link sizing
- no excessive low-contrast micro-text

## 17. Header / Shared Chrome

The header should feel like the navigation of an established engineering company.

Requirements:

- white/cool-neutral surface
- stronger AFAAQ brand lockup
- clear active route state
- restrained border/shadow if needed for separation
- no oversized decorative navigation treatment
- mobile menu remains accessible and usable
- current route structure remains unchanged

Shared footer/header changes are part of this pass so the Home does not feel disconnected from the rest of the site.

## 18. Global Foundation and Scope on Other Pages

This pass updates the shared visual foundation, including likely typography and color tokens.

Therefore other routes may inherit:

- white/cool-neutral canvas
- new ink/muted/rule colors
- Archivo heading typography
- updated shared header/footer

However, this pass does **not** structurally redesign every page.

Other pages must be visually regression-tested for:

- readability
- contrast
- spacing breakage
- overflow
- header/footer compatibility
- heading wrapping

If a global token change causes a concrete regression on another route, fix that regression within the same pass. Do not opportunistically redesign unrelated page content.

## 19. Motion

Motion is deliberately limited.

Rules:

- remove the infinite relationship marquee
- no auto-scrolling portfolio
- no hover-lift cards
- no constant ambient animation
- interactions may use subtle color/underline/arrow movement
- if a Power Rail reveal is used, it should be one controlled brand moment rather than repeated animation everywhere
- animate transform/opacity only where practical
- respect `prefers-reduced-motion`

The page should still feel complete with all motion disabled.

## 20. Responsive Behavior

Minimum support target: 320 px viewport width.

General requirements:

- no horizontal overflow
- no clipped client/relationship names
- no fixed-width project modules that break on mobile
- hero image and approved blend remain coherent across mobile/tablet/desktop
- proof band stacks or wraps without becoming a tiny four-column grid
- capability hierarchy remains clear when stacked
- project rows become readable vertical records on small screens
- execution sequence stacks naturally
- CTA remains obvious and touch-friendly
- minimum practical touch target around 44–48 px for interactive controls

Mobile is not a shrunk desktop layout.

## 21. Accessibility

Required quality floor:

- semantic section headings
- visible keyboard focus
- links remain actual links
- sufficient color contrast for text and controls
- no functional information encoded by color alone
- no important text embedded in decorative images
- reduced-motion support
- logical reading order matches visual order
- decorative brand/rail elements are `aria-hidden` when appropriate
- remote third-party logo failures must not remove the organization name

## 22. Performance

- preserve hero `priority` loading as the principal LCP asset
- do not add below-fold priority images
- avoid client JavaScript for purely presentational project/relationship layouts
- static relationship wall should be server-rendered
- project references should be server-rendered
- use existing Next Image behavior for real imagery
- avoid layout shifts through stable dimensions/aspect ratios
- do not add heavy animation libraries for this pass

## 23. Likely Component / File Impact

Expected implementation surface may include:

- `src/app/layout.tsx` — add Archivo display font while preserving body/mono roles
- `src/styles/globals.css` — corporate tokens, typography foundation, remove marquee animation styles if unused
- `src/app/page.tsx` — Home architecture/order and major composition
- `src/components/afaaq/project-dossier.tsx` — replace or retire Home dossier presentation
- `src/components/afaaq/project-showcase-rail.tsx` — convert to reference records/rows
- `src/components/afaaq/relationship-rail.tsx` — static relationship wall
- `src/components/afaaq/service-index.tsx` — corporate capability hierarchy
- `src/components/afaaq/execution-track.tsx` — simplify visual treatment while preserving sequence
- `src/components/afaaq/about-brand-artwork.tsx` — retain asset, adjust integration only if required
- `src/components/layout/site-header.tsx` — corporate chrome polish
- `src/components/layout/site-footer.tsx` — corporate close and readability
- Home/source validators — update to enforce the new invariants

Component names may be changed during implementation if clearer boundaries emerge, but this is not a license for unrelated refactoring.

## 24. Explicit Removals from the Current Home Language

Remove/replace from the Home design:

- warm cream page foundation
- large black DRCC dossier
- faux technical linework
- decorative project counts such as `Voltage Levels 03` and `Work Scopes 04`
- excessive mono labels
- repeated hairline-rule treatment as the main aesthetic
- infinite relationship marquee
- tiny supporting-service treatment
- graphite as the primary brand dark color

Keep:

- approved hero image
- approved hero blend exactly as-is
- verified project facts
- verified company facts
- core services content
- execution content
- AFAAQ About artwork
- navigation structure
- no-project-photo policy until real project photography is verified

## 25. Validation / Test Invariants

Implementation must add or update source-level validation so future changes do not silently undo the approved system.

At minimum validate:

- approved hero image path remains present
- current hero blend strings remain unchanged
- Home contains no `/images/projects/` usage
- Home does not render the old black Technical Dossier presentation
- project references remain free of project media placeholders
- relationship section has no infinite marquee/client animation dependency
- `150+` and `60%` remain sourced from verified company facts, not duplicated hard-coded claims where avoidable
- voltage experience remains `220 / 66 / 11 kV`
- project reference data still comes from existing project content
- no `src/content/projects.ts` fact edits are introduced by the redesign
- project and relationship presentation remains server-rendered where presentation does not require client state

## 26. Visual Acceptance Criteria

The Home passes the design review when all of the following are true.

### First-impression test

At desktop width, the first screen should communicate:

- AFAAQ is an electrical engineering/contracting company
- power systems are its subject
- the company has recognizable blue/navy branding
- the site feels corporate and established rather than editorial

### Five-second scan test

Without reading paragraphs, a viewer should be able to identify:

- Testing & Commissioning
- Protection & Control
- 220 / 66 / 11 kV
- 150+ substations
- major projects
- selected relationships
- a clear project-inquiry action

### Identity test

If the logo is temporarily hidden during design review, the page should still feel internally consistent through:

- AFAAQ navy/electric-blue system
- Archivo corporate typography
- Power Rail signature
- structured engineering-reference presentation

It does not need to be literally identifiable as AFAAQ without the logo, but it must not collapse into a generic website template.

### Anti-AI-template test

The page must not depend on:

- cream editorial background
- broadsheet hairline-grid styling
- fake technical diagrams
- oversized rounded cards
- pill-heavy navigation
- decorative gradients/glow
- random numbering
- generic three-card feature layouts repeated section after section

### Credibility test

Project and company proof must be factual, readable, and more prominent than decorative design devices.

### Restraint test

The Power Rail is the main signature. If multiple unrelated visual tricks compete with it, remove the extras.

## 27. Stop Condition

After implementation, responsive QA, accessibility review, and code review, the redesign is considered complete when it meets this spec.

Do not reopen the design because an alternate layout, font size, or spacing choice is also aesthetically valid.

A future change should require at least one of:

- factual correction
- user/business requirement
- broken responsive behavior
- accessibility issue
- performance issue
- clear brand-system inconsistency
- demonstrated usability problem

This stop condition is part of the design system and is intended to prevent endless taste-driven churn.
