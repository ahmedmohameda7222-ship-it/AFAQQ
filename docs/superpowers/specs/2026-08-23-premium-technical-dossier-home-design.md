# AFAAQ ARAB — Premium Technical Dossier Home Design

## Status
Approved visual direction: **Engineered Editorial + Technical Dossier**, with restrained blueprint/engineering cues.

This specification refines the current PR #28 Home direction. It does **not** replace the brand language, factual content, hero photography, or About artwork. It removes the visual ambiguity created by project-media placeholders and raises the overall execution quality toward a bespoke premium engineering website.

## Goal
Make the AFAAQ ARAB Home page read as a custom high-end engineering/corporate experience rather than a polished template, while preserving the serious utility/EPC tone and the explicit constraint that **project sections must not use project photography**.

The page should feel:
- technically credible,
- editorial rather than SaaS-like,
- controlled and precise,
- visually specific to power-system engineering,
- premium without decorative excess.

## Core constraints
- Do not introduce project photos, stock project photos, fake site imagery, or rendered project scenes.
- Keep the current Home hero image: `/images/home/home-substation-original-1440.jpg`.
- Keep verified project names, clients/relationships, scopes, voltage labels, locations, years, and company claims unchanged.
- Keep the current AFAAQ About artwork and improve its framing/integration instead of removing it.
- Keep the warm-neutral canvas, graphite service/CTA bands, IBM Plex Sans/Mono typography family, and restrained blue brand accent.
- Keep the project portfolio server-rendered and free of carousel behavior.
- Preserve keyboard focus, semantic links, reduced-motion behavior, and 320px minimum responsive support.
- Avoid generic rounded cards, heavy shadows, glassmorphism, decorative gradients, icon overload, and flashy animation.

## Signature visual language
The site will use a restrained AFAAQ-specific engineering language across the Home page:

1. **Voltage rail** — `220 / 66 / 11 kV` remains a primary visual proof system.
2. **Project references** — `PROJECT REF / 01`, project codes, relationship labels, voltage/system metadata, and scope records form the portfolio language.
3. **Technical linework** — thin busbar-like rules, control-node marks, grid coordinates, terminal-style labels, or one-line-diagram-inspired geometry may appear as subtle structural graphics.
4. **Large engineering numerals** — major numbers communicate scale and hierarchy.
5. **Editorial rules and alignment** — strong grid discipline replaces decorative card chrome.

Technical graphics must remain abstract and non-factual unless directly derived from verified project data. They are visual structure, not representations of actual project schematics.

---

# Section Design

## 1. Header

### Keep
- Sticky warm-neutral header.
- Current IA: Services / Projects / About / Contact.
- Current active-section underline behavior.
- AFAAQ mark + wordmark.

### Refine
- Preserve current overall header height but tighten optical alignment between mark, wordmark, and nav.
- Ensure the brand lockup has more visual authority than the nav without becoming oversized.
- Keep nav text comfortably readable; avoid micro-navigation.
- Reduce any excess contrast between the header and Hero so they feel like one composed opening frame.

### Success condition
The header should feel designed as part of the Hero rather than a generic navigation bar placed above it.

---

## 2. Hero

### Keep
- Current hero image and image-blend treatment.
- Current headline copy.
- Primary CTA: `Discuss a Project Scope`.
- Secondary project action.

### Refine
- Preserve the strong headline scale but improve line-break control so the block reads as one intentional typographic object.
- Increase body-copy readability relative to the headline; the supporting copy should not collapse into microtext.
- Give the primary CTA slightly more presence and keep the secondary action clearly subordinate.
- Keep the image wash subtle enough that the substation photography retains richness and detail.

### Success condition
The Hero remains the strongest visual moment on the page, with clear hierarchy: brand → headline → engineering proposition → actions → photography.

---

## 3. Power-System Experience + Company Proof

### Current issue
The current system treats `220 / 66 / 11 kV` and `150+ / 60%` as one continuous table, which mixes two different semantic categories: technical system range and company credibility.

### New composition
Create two related but visibly distinct layers.

#### A. Voltage Experience Rail
- Three large entries: `220 kV`, `66 kV`, `11 kV`.
- Each entry pairs the voltage with its verified discipline.
- Use strong numerals, controlled vertical separators, and subtle engineering alignment marks.
- The voltage row is the dominant layer.

#### B. Company Proof Strip
- `150+ Substations delivered`.
- `60% of EETC control centers project experience`.
- Use a different scale, spacing, and labeling pattern so these read as credentials rather than voltage levels.
- May use compact technical labels around the facts without changing the factual wording.

### Success condition
A viewer should instantly distinguish **what systems AFAAQ works on** from **what AFAAQ has delivered**.

---

## 4. Major Projects — Core Redesign

### Principle
There will be **no project-photo container** and no large dark rectangle that resembles a missing image.

The project portfolio becomes an **AFAAQ Technical Project Dossier**.

## 4.1 Section Introduction
- Keep `Major Projects` label.
- Keep the current project-reference heading or a minimally refined version with the same factual meaning.
- Align `View All Projects` directly with the heading grid instead of leaving it visually detached.
- Add optional low-emphasis portfolio metadata such as project count/reference sequence if derived from the existing verified collection.

## 4.2 Featured Project — DRCC

### Replace
Remove the current `ProjectMedia` fallback rectangle as a visual-media block.

### New featured dossier composition
Use a structured 12-column case-study composition with two functional zones.

#### Technical identity zone
Contains:
- `PROJECT REF / 01`,
- project abbreviation where already established,
- full project name,
- voltage/system label where verified,
- location and year,
- relationship/client,
- restrained abstract technical linework.

This zone may use graphite as a background, but it must read as an **information panel**, not an image placeholder.

#### Scope zone
Contains:
- `Project Relationship`,
- verified relationship mark/name,
- `Scope`,
- verified scope list,
- location/year if not placed in the identity zone,
- `View Full Project Scope` action.

### Technical graphic treatment
The featured dossier can include subtle non-literal engineering graphics:
- busbar-like horizontal/vertical rails,
- numbered nodes,
- small terminal/control symbols,
- coordinate marks,
- system notation when verified for that project.

No graphic may imply an actual project schematic unless it is an authenticated source document.

### Success condition
The technical identity zone must unmistakably read as **designed technical information**, not “where a photo should have been.”

## 4.3 Secondary Projects

### Replace
Remove the three repeated black `ProjectMedia` rectangles.

### New format
Render the remaining projects as three consistent **technical project records**.

Each record should include:
- reference number,
- project name,
- technical label/voltage,
- relationship/client,
- location/year,
- concise verified scope,
- project-detail action.

### Visual differentiation
Use typography, rules, reference numbering, and subtle project-specific metadata placement rather than images. Cards should not become rounded UI cards. Maintain the editorial grid.

### Desktop
Three-column project index with clear shared baselines and aligned metadata.

### Tablet/mobile
Stack records vertically. Do not preserve large fixed media aspect ratios; let content determine height.

### Success condition
Projects should look intentionally image-free and information-rich at every breakpoint.

---

## 5. Project Relationships

### Current issue
The relationship rail contains strong company names but the presentation still reads slightly like a generic ticker.

### Refine
- Increase optical consistency of logos/marks.
- Give names and marks more breathing room.
- Keep continuous motion only if it remains restrained and reduced-motion compliant.
- Maintain the relationship label and editorial borders.
- Improve the visual authority of verified relationships without creating logo-wall clutter.

### Asset rule
Prefer authenticated/local brand assets if already present. Do not introduce low-quality screenshots or decorative logo treatments.

### Success condition
The strip should function as a credibility proof point, not merely motion between sections.

---

## 6. Core Technical Services

### Keep
- Graphite section.
- Testing & Commissioning and Protection & Control as the two primary disciplines.
- Existing verified service descriptions and detail links.

### Refine primary rows
- Strengthen the relationship between number, title, summary, and action.
- Maintain generous horizontal composition but avoid dead space.
- Keep service titles large enough to anchor the section.
- Ensure summaries remain readable and do not fall into microtext.

### Supporting disciplines
Current supporting disciplines read too much like footer metadata.

Rebuild them as a true secondary service tier:
- four equally legible items,
- stronger type size,
- clear grid separators,
- optional small index numbers or discipline codes,
- no icons required.

Supporting disciplines:
- Electrical Installation
- Power Quality
- Operation & Maintenance
- Engineering Support

### Success condition
The section should visibly communicate **2 core disciplines + 4 supporting disciplines**, not “2 services + four footnotes.”

---

## 7. Project Execution

### Keep
All six verified steps and their order:
1. Engineering Review
2. Method & ITP Planning
3. Installation & Wiring
4. Protection & Functional Testing
5. SCADA / RTU & Energization
6. Records & Handover

### Refine
- Strengthen sequential progression from `01` to `06`.
- Increase number prominence.
- Use one continuous technical progression system rather than six isolated boxes.
- Improve description readability.
- Reduce excessive equal-weight rule usage so major progression lines and local dividers have distinct hierarchy.

### Desktop
Retain a 3 × 2 reading sequence if it gives the strongest composition, but visually connect rows so the process reads continuously.

### Mobile
Single vertical sequence with obvious numbering and no horizontal dependency.

### Success condition
The section must read as a controlled engineering process, not a static feature table.

---

## 8. About AFAAQ

### Keep
Keep the current AFAAQ artwork assets:
- 4:3 mobile artwork,
- 16:9 desktop artwork.

### Current issue
The image exists and is valid, but its current white rectangular framing can feel like a separate brochure/social graphic inserted into the page.

### Refine
- Keep the full artwork visible; do not crop away factual branding/content.
- Improve frame weight, background relationship, and spacing so it integrates with the editorial page.
- Balance image and text columns more deliberately.
- Use verified company proof beside the artwork.
- Avoid turning the artwork into a decorative full-bleed hero.

### Success condition
The artwork should feel like **AFAAQ corporate evidence**, not an advertisement embedded inside the Home page.

---

## 9. Final Inquiry CTA

### Keep
Graphite closing band and current inquiry intent.

### Refine
- Make the headline/action relationship stronger.
- Increase CTA button presence moderately.
- Keep supporting contact copy close enough to the action to function as one decision block.
- Preserve generous negative space but remove dead space.

### Success condition
The section should clearly feel like the final conversion moment before the footer.

---

## 10. Footer

### Keep
- Graphite background.
- Brand lockup.
- Navigate / Direct / Office information architecture.
- Legal close.

### Refine
- Improve body/link readability.
- Tighten column alignment and vertical rhythm.
- Ensure direct contact information is visually useful, not secondary microtext.
- Keep the bottom brand/legal row compact.

### Success condition
The page should end with the same level of precision as the Hero rather than visually fading out.

---

# Typography and Spacing Rules

## Type hierarchy
- Large display headlines stay editorial and tightly tracked.
- Body text must remain comfortably readable at normal desktop viewing size.
- Technical mono text is reserved for metadata, project references, voltage/system notation, labels, and process indices.
- Do not use mono for primary paragraph copy.
- Avoid metadata that becomes illegible in a full-page desktop screenshot.

## Spacing
Use a controlled hierarchy rather than one repeated section gap:
1. section boundary,
2. section label to heading,
3. heading to primary content,
4. primary content to supporting proof,
5. internal metadata spacing.

Large whitespace must have compositional purpose. Empty vertical area must not appear accidental.

## Rules and dividers
Use three visual weights conceptually:
- major section boundary,
- internal grid divider,
- subtle technical guide.

Do not render every line with equal contrast.

---

# Responsive Design

## Desktop
- Preserve 12-column editorial composition.
- Featured DRCC dossier can use asymmetric 7/5 or 6/6 structure depending on actual line lengths.
- Secondary project records use three columns without fake media heights.
- Service and About sections maintain strong cross-column baselines.

## Tablet
- Collapse complex metadata into two-column arrangements before stacking fully.
- Keep project dossier information-first.
- Never introduce horizontal scrolling for project records.

## Mobile (320px minimum)
- Hero remains text-first with image below/behind according to existing behavior.
- Voltage entries remain readable without compressed microtext; allow stacking if 3-up becomes illegible.
- Company proof may stack separately.
- Featured and secondary project dossiers become single-column records.
- Execution becomes a vertical `01 → 06` sequence.
- About artwork uses the existing 4:3 mobile asset.
- Interactive targets remain at least 48px where applicable.

---

# Motion

Allowed:
- existing restrained marquee movement,
- subtle arrow translations,
- small line/underline transitions,
- very restrained technical-line reveal only if it does not delay content or require client-heavy logic.

Not allowed:
- parallax-heavy project sections,
- animated fake schematics,
- large scroll-jacking transitions,
- auto-advancing project carousels,
- decorative hover motion that causes layout shift.

All motion must honor `prefers-reduced-motion`.

---

# Accessibility and Performance

- Maintain semantic headings and link hierarchy.
- Decorative technical linework must be `aria-hidden`.
- Project dossier information remains real text, not flattened into SVG/image artwork.
- Do not use images to encode critical text.
- Preserve keyboard focus-visible states.
- Avoid new client-side JavaScript for purely visual project presentation.
- Hero remains the principal priority/LCP image; below-fold artwork remains lazy-loaded where appropriate.

---

# Content Integrity

The redesign may change presentation and small interface labels, but must not invent:
- project photography,
- project technical facts,
- clients,
- voltage levels,
- dates,
- locations,
- scope items,
- company metrics,
- certifications,
- awards,
- utility relationships.

If a technical notation is not verified project data, it must be clearly decorative/structural rather than represented as a factual schematic.

---

# Likely implementation surfaces

Primary implementation will likely touch:
- `src/app/page.tsx`
- `src/components/afaaq/project-media.tsx` or a replacement project-dossier primitive
- `src/components/afaaq/project-showcase-rail.tsx`
- `src/components/afaaq/relationship-rail.tsx`
- `src/components/afaaq/service-index.tsx`
- `src/components/afaaq/execution-track.tsx`
- `src/components/afaaq/about-brand-artwork.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- focused source validators for Home/project presentation

The central project content model should remain factual and should not acquire image metadata.

---

# Non-goals

This pass does not:
- redesign inner Services/Projects/About/Contact pages unless a shared component change naturally propagates,
- add new project facts,
- add project photography,
- change the logo,
- change the core palette,
- replace the existing font system,
- introduce a new JS animation framework,
- convert the site into a dark-first aesthetic,
- add marketing-style statistics not already verified.

---

# Acceptance Criteria

The visual pass is successful when all of the following are true:

1. No project section resembles an unloaded/missing image state.
2. No project photography is introduced.
3. DRCC reads as a deliberate technical case-study dossier.
4. The three secondary projects read as structured project records rather than media cards.
5. `220 / 66 / 11 kV` is visually separated from `150+ / 60%` company proof.
6. Body and metadata typography remain legible in a full-page desktop screenshot.
7. Supporting disciplines have clear secondary-service hierarchy.
8. Project Execution reads as a continuous six-step engineering process.
9. The existing About artwork remains visible and feels integrated into the editorial composition.
10. Client relationships carry stronger credibility weight.
11. Header, CTA, and footer retain the current brand direction but have tighter optical hierarchy.
12. Mobile supports 320px without horizontal overflow or illegible compressed grids.
13. No factual content is invented or altered unintentionally.
14. Reduced-motion, focus-visible, and semantic-link behavior remain intact.
15. Available repository checks/build and deployment verification are green before merge.

## Final design principle
**The absence of project photography must look intentional.** The portfolio should derive premium character from engineering information architecture, typography, grid discipline, technical metadata, and restrained power-system linework — not from generic image placeholders.
