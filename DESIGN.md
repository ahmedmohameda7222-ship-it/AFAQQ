# AFAAQ ARAB — Design System Source of Truth

## Approved direction

The approved website direction is **Corporate Grid Power**.

The intended visual character is:

**established electrical engineering company — not design studio, startup landing page, architecture portfolio, or generated technical template.**

## Brand words

Use these words to evaluate visual decisions:

**precise / electrical / institutional**

Avoid using vague taste words such as "premium", "modern", or "clean" as the only justification for a design change.

## Color system

Primary tokens:

- Canvas: `#FBFCFE`
- Surface: `#F4F7FA`
- Ink: `#111827`
- AFAAQ Navy: `#0A2F82`
- AFAAQ Deep Navy: `#061D58`
- AFAAQ Electric Blue: `#0B8CFF`
- Rule: `#D7DEE8`

Rules:

- Use Deep Navy for authority moments, not as a page-wide default.
- Use Electric Blue as a deliberate brand/action signal, not scattered decoration.
- Prefer cool near-white over pure white as the main site canvas.
- Do not return to the old warm-cream site foundation.

## Hero blend lock

The Home **Hero blend must remain visually unchanged** unless the user explicitly requests a Hero redesign.

Implementation requirement:

- Hero-local canvas remains the warm `#F4F3EF` treatment currently used by the blend.
- Global canvas changes must not alter the Hero blend.
- Keep the current Home substation image unless the user explicitly changes it.

## Typography

Final system:

- Display/headlines: **Archivo**
- Body/navigation/interface: **Public Sans**
- Genuine technical data: **IBM Plex Mono**

Roles:

### Archivo

Use for:

- H1/H2/H3 statements
- large company facts
- strong CTA statements

### Public Sans

Use for:

- body copy
- navigation
- buttons
- forms
- relationship names
- explanatory content

### IBM Plex Mono

Use only when the content is genuinely technical/data-like:

- voltage values
- years
- standards/protocols
- technical identifiers
- tabular engineering data

Do not use technical mono as generic UI decoration.

### Tracking

- Long display headlines: approximately `-0.025em` to `-0.04em`
- Body copy: normal tracking
- Navigation: near-normal tracking
- Avoid `-0.048em` to `-0.052em` on long inner-page headlines.

## AFAAQ signature device

The primary visual signature is the **AFAAQ Power Rail**.

Use it for:

- voltage proof
- important technical data
- selected company proof moments

Do not invent several competing brand signatures.

Technical diagrams may exist where they explain real engineering content, but they are content—not decorative brand motifs.

## Section-label / eyebrow rule

Repeated tiny uppercase tracked labels are prohibited as a default section pattern.

Guideline:

- Roughly no more than one eyebrow per three major sections.
- Keep one only when it adds taxonomy/context that the heading cannot provide.
- Do not put an eyebrow above every section.

## Split-intro rule

Do not repeatedly use:

**large heading left + generic explanatory paragraph right**

across the site.

A right-hand column is justified when it contains a real object such as:

- technical data
- project fact
- CTA
- diagram
- image
- equipment information
- interactive control

Otherwise use a conventional heading + supporting paragraph stack.

## Numbering rule

Numbering must communicate real order or data.

Allowed:

- Project Execution `01–06`, because it is an actual process sequence.
- A service-specific delivery path when the sequence is supported by verified source content.

Not allowed:

- Project 01 / 02 / 03
- decorative service numbering
- Engineering Focus 01 / 02
- equipment numbering used only for visual effect
- project scope numbering with no sequential meaning

## Borders and geometry

- Prefer whitespace before borders.
- Use borders for grouping, lists, technical separation, or interaction boundaries.
- Do not frame every block as a card.
- Corners should remain sharp or use very small radii (`2–4px`).
- Avoid soft SaaS card grids, floating shadows, glassmorphism and pill-heavy layouts.

## Project presentation

### No project photography policy

**No project photography is currently authenticated for public project references.**

Therefore:

- Do not use `ProjectMedia` placeholders as simulated project imagery.
- Do not use stock photos as named-project evidence.
- Do not use images from project folders as evidence unless explicitly verified by the user.
- Use structured factual project references: name, relationship, voltage, location, year, scope, systems and summary.

If authenticated project photography becomes available later, add it only after explicit verification.

## Service presentation

Services must not all look like the same text template.

Use service-specific factual structure:

- Testing & Commissioning: delivery path from review/testing through commissioning/handover.
- Protection & Control: review, relay testing, wiring checks, functional verification, energization support.
- Electrical Installation: equipment/cabling/panels/auxiliary/control/RTU scope.
- Power Quality: measurement/performance/monitoring/thermal-inspection scope.
- O&M: inspection, maintenance, testing, troubleshooting and operational support.
- Engineering Support: technical review, testing procedures, interfaces and site support.
- Training: testing/protection/control/secondary/practical-site knowledge.

Do not add a technical visual if it is not supported by verified content.

## Relationships

Home placement is locked as:

**Company Scale → Moving Relationships Rail → Project Execution**

Home behavior:

- slow 50s seamless movement
- Pause/Resume control
- pause on hover
- pause on focus
- `prefers-reduced-motion` static fallback

About behavior:

- static relationship wall
- no continuous marquee

Logo policy:

- Prefer verified local transparent corporate marks.
- Use official-domain favicon fallback only when a verified local asset is not available.
- Never fabricate a corporate logo.

## Motion

Continuous motion is limited to the Home relationship rail.

Other motion should be functional:

- hover/focus feedback
- navigation underline
- CTA arrow movement

Avoid autoplay carousels and decorative section animations.

## About

About should feel institutional:

- company statement
- approved AFAAQ artwork
- company facts
- engineering focus
- static relationships
- consolidated technical reference
- projects/contact path

It must not read like another Services template.

## Contact

Preserve:

- one-page technical inquiry form
- explicit labels
- required fields
- service/project/voltage context prefill
- native accessible file input
- file limits
- loading state
- `aria-live`
- direct email fallback

Outcome states must be explicit:

- **Requirement received**
- **Unable to send requirement**

## Header and footer

Header foundation is approved:

- sticky
- active underline
- clear AFAAQ mark
- `aria-current`
- accessible mobile dialog/focus trap

Footer foundation is approved:

- Deep Navy authority zone
- reversed AFAAQ mark
- navigation/contact/office structure

Do not redesign either without a specific reason.

## Accessibility baseline

Every redesign must preserve:

- visible keyboard focus
- skip-to-content
- `aria-current`
- mobile focus trap and Escape behavior
- return focus to mobile-nav trigger
- 44px+ interaction targets
- form labels
- `aria-live` status feedback
- reduced-motion behavior
- long-name wrapping
- no horizontal overflow
- WCAG AA text contrast
- no hover-only information

## Responsive rule

Mobile is a recomposition, not desktop columns blindly stacked.

Check:

- Hero text/image/proof rhythm
- project fact hierarchy
- service process visual stacking
- long organization names
- form controls/file input
- relationship reduced-motion layout
- navigation safe areas

## Anti-slop stop conditions

Reject a proposed change when its main justification is visual novelty rather than user/engineering value.

Do not reintroduce:

- warm cream site-wide canvas
- fake project media
- black abstract dossier as project evidence
- repeated tiny uppercase labels
- arbitrary `01 / 02 / 03` scaffolding
- excessive hairlines
- equal-weight card grids for every capability
- generic AI engineering slogans
- random circuit graphics
- decorative gradients/glass effects

The website is considered aligned when it communicates engineering scope, proof and institutional confidence with fewer decorative devices—not more.
