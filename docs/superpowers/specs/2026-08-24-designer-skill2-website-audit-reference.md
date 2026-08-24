# AFAAQ ARAB — Designer Skill 2 Website Audit & Correction Reference

> Canonical reference for future AFAAQ website chats and implementation passes.
>
> This document records the approved audit findings derived from the uploaded **Designer Skill 2** standard, the current AFAAQ design direction, and the agreed 8-phase correction program. Future chats should read this file before proposing or implementing visual changes.

## Purpose

The goal is **not** to redesign the website from zero again. The current Home direction — **Corporate Grid Power** — is the approved foundation. The correction program exists to remove remaining AI-template patterns, align inner pages with the Home maturity level, preserve truthful project presentation, and establish a durable design system for future work.

The desired outcome is:

**AFAAQ should read as an established electrical engineering and contracting company — not a design studio, portfolio site, startup landing page, or generated technical template.**

Primary audience:

- Utility project managers
- EPC project managers
- Engineering consultants
- Protection & control engineers
- Procurement stakeholders
- OEM and electrical-infrastructure partners

Primary commercial job of the site:

1. Establish AFAAQ's engineering competence quickly.
2. Prove scale and real project experience.
3. Explain technical capability without marketing filler.
4. Build trust with utility/EPC decision-makers.
5. Drive qualified project inquiries.

---

# 1. Locked Design Direction

The approved design direction is **Corporate Grid Power**.

## 1.1 Visual character

Use:

- Corporate white / cool neutral surfaces
- AFAAQ Navy
- AFAAQ Deep Navy
- AFAAQ Electric Blue
- Strong industrial/corporate typography
- Real engineering data
- Large, clean modules
- Sharp or very small-radius geometry
- Clear hierarchy
- Intentional whitespace
- Technical visuals only when they encode real information

Avoid:

- Warm cream as the general website foundation
- Soft SaaS cards
- Glassmorphism
- Decorative gradients
- Large soft shadows
- Rounded-card grids
- Fake dashboards
- Decorative one-line electrical graphics that do not encode real project data
- Repeated tiny mono labels
- Excessive hairlines
- Arbitrary numbering
- Generic AI-generated engineering copy
- Fake project photography

## 1.2 Brand signature

The primary AFAAQ signature device is the **AFAAQ Power Rail**.

It should remain the one main recognizable visual system and should be used sparingly.

Best uses:

- Voltage proof
- High-value technical data
- Key corporate proof moments
- Selected CTA / section transitions when justified

Do not create several competing signature devices.

## 1.3 Hero lock

The current Home Hero image remains approved.

The **current Hero blend must remain visually unchanged** unless the user explicitly requests a change.

Important implementation rule:

- Even if global canvas tokens change, the Hero must preserve its current warm blend appearance through a dedicated Hero-local canvas token or equivalent treatment.

## 1.4 Project photography lock

AFAAQ does **not currently have verified project photography available for the website project references**.

Therefore:

- Do not present any unverified image as a real AFAAQ project photo.
- Do not use stock imagery as if it were a specific project.
- Do not use existing project-folder images as project evidence unless the user explicitly verifies them.
- Do not create fake media placeholders that imitate missing project photography.

Generic engineering photography is allowed only where it is clearly generic, such as the Home Hero.

---

# 2. Designer Skill Audit Rules to Enforce

These rules should guide all future redesign and review work.

## 2.1 Tiny uppercase eyebrow rule

The uploaded Designer Skill identifies repeated small uppercase tracked labels above sections as a major AI-generated interface fingerprint.

Rule:

- Do not place a tiny uppercase eyebrow above every section.
- Aim for no more than roughly **one eyebrow per three major sections** unless a label adds real taxonomy or navigation value.

Eyebrows should be kept only where they genuinely clarify context.

## 2.2 Split-header repetition rule

Avoid repeatedly using:

**Large heading on left + small explanatory paragraph on right**

across every section and every page.

Use a right-hand column only when it contains something meaningful, such as:

- Technical data
- A diagram
- A project fact
- A real CTA
- Equipment information
- An image
- An interactive object

Otherwise use a conventional readable heading + supporting paragraph stack.

## 2.3 Numbering rule

Remove numbering that does not communicate a real sequence.

Remove patterns such as:

- Project 01
- Project 02
- Service 01
- Engineering Focus 01
- Equipment 01
- Project Scope 01

Keep numbering only where order matters.

Approved example:

**Project Execution 01–06**, because it represents an actual ordered process.

## 2.4 Project imagery rule

Do not replace missing required imagery with generic decorative cards or fake CSS media panels.

If authentic project photography is unavailable, design the project presentation around:

- Project name
- Client / relationship
- Voltage
- Location
- Year
- Scope
- Systems
- Verified project summary

Truthful structured project data is preferred over simulated imagery.

## 2.5 Border rule

Whitespace should carry hierarchy before borders do.

Avoid using borders around every block.

Use borders only when they communicate:

- Grouping
- Table structure
- Technical separation
- Interaction boundary

## 2.6 Motion rule

Motion must have a clear purpose.

Approved continuous motion:

- Client / relationship rail on Home

Avoid adding other auto-moving carousels or decorative motion systems.

Always preserve:

- `prefers-reduced-motion`
- Keyboard usability
- Focus visibility
- Manual pause where continuous motion exists

---

# 3. Current Audit Snapshot

## Home

Status: **Needs targeted cleanup, not redesign**

Strong foundation:

- Hero composition
- Hero blend
- Hero image
- Power Rail
- Home section order
- Project Reference concept
- Execution sequence
- About artwork
- Project Inquiry CTA

Weaknesses:

- Too many section eyebrows
- Repeated split-heading pattern
- Some supporting service modules remain card-like
- Company Scale includes design-rationale copy
- Relationship logos use favicon sources instead of proper local brand assets
- Relationship motion has no explicit pause button

## Services landing

Status: **Major change needed**

Weaknesses:

- Old visual language remains
- Long display headline
- Repeated split header
- Numbered Core Services without sequence meaning
- Supporting content still feels template-driven
- Standards and equipment are presented primarily as large lists

## Service detail pages

Status: **Major change needed**

Weaknesses:

- Reused page template across very different services
- Repeated numbered lists
- Too much structural similarity
- Insufficient subject-specific technical visual language

## Projects landing

Status: **Fail under Designer Skill rules**

Main issue:

- Uses `ProjectMedia` even though projects do not have verified photos.
- Missing project images become large dark simulated media panels.

Required correction:

- Remove fake project media presentation.
- Replace with structured corporate project references.

## Project detail pages

Status: **Fail under Designer Skill rules**

Main issue:

- Large media region reserved for project imagery even though authentic project photography is unavailable.

Required correction:

- Replace media area with a project facts / technical reference header.

## About

Status: **Major cleanup needed**

Weaknesses:

- Repeated split layout
- Too many eyebrows
- Arbitrary Engineering Focus numbering
- Repeated relationship marquee may reduce uniqueness of Home motion
- Technical reference section can be consolidated

## Contact

Status: **Mostly pass**

Strong:

- Proper labels
- Required state handling
- Context prefill
- Attachments validation
- Submit loading state
- `aria-live`
- Email fallback

Needs improvement:

- Stronger visible error state
- Stronger success confirmation state
- File upload visual treatment can improve

## Header

Status: **Pass / minor refinement**

Strong:

- Clear logo
- Active underline
- Sticky behavior
- `aria-current`
- Good touch targets
- Accessible mobile navigation

Potential improvement:

- Consider a restrained `Discuss a Project` desktop CTA instead of generic `Contact`.

## Footer

Status: **Pass**

Do not redesign unless required by later typography/system changes.

---

# 4. Eight-Phase Correction Program

The phases below define the implementation order.

---

## Phase 1 — Project Truth

### Goal

Make Projects fully truthful, premium, and image-independent.

### Required changes

#### Projects landing

- Remove `ProjectMedia` from project listing rows.
- Remove fake project media placeholders.
- Remove `Project 01 / 02 / 03 / 04` scaffolding.
- Rebuild listing as corporate project references.
- Show project data directly:
  - name
  - relationship/client
  - voltage / technical label
  - location
  - year
  - scope
- Keep a strong `View Project Scope` action.
- Simplify the page proof strip if it behaves like a dashboard.

#### Project detail pages

- Remove the large empty/fake media region.
- Replace it with a Project Facts Header / Technical Reference Panel.
- Prioritize:
  - project name
  - voltage
  - client relationship
  - location
  - year
  - verified scope
  - systems involved when available
- Keep project inquiry context prefill.
- Keep next-project navigation.
- Add diagrams only if they encode verified project information.

### Acceptance criteria

- No project page visually implies that a placeholder is a real project image.
- No project reference depends on unverified photography.
- Project information is scannable in under 10 seconds.
- Mobile project references remain readable without horizontal scrolling.
- `src/content/projects.ts` factual content remains unchanged unless the user explicitly requests content edits.

---

## Phase 2 — Anti-AI-Slop Cleanup

### Goal

Remove repeated structural patterns that make the site feel generated or templated.

### Required changes

#### Eyebrows

- Reduce `SectionLabel` usage by approximately 60–70% across the site.
- Keep labels only where they add taxonomy or contextual value.

#### Split headings

- Remove repeated heading-left / explainer-right structures where the right column contains only generic copy.
- Convert most to:
  - heading
  - supporting paragraph
  - content

#### Arbitrary numbering

Remove decorative numbering from:

- Services
- Projects
- Project scopes
- Engineering focus
- Equipment lists
- Other non-sequential content

Keep numbering only for real sequences such as Project Execution.

#### Borders

- Remove unnecessary section and card borders.
- Use spacing as the primary hierarchy tool.

#### Copy cleanup

Remove copy that explains the website design or information architecture.

Example to remove/rewrite:

> Company credentials are presented separately from voltage experience so technical depth and delivery scale remain distinct.

Prefer factual business language.

### Acceptance criteria

- Home no longer has an eyebrow on nearly every section.
- Inner pages no longer look like clones built from the same heading/list template.
- Numbers communicate actual order or data only.
- Visual hierarchy still works after borders and labels are reduced.

---

## Phase 3 — Services

### Goal

Bring Services into the same corporate maturity level as Home while making each service feel specific to electrical engineering.

### Services landing changes

- Simplify Hero structure.
- Shorten or strengthen the headline.
- Remove arbitrary numbering from Core Services.
- Preserve strong hierarchy for:
  - Testing & Commissioning
  - Protection & Control
- Make supporting capabilities more compact and catalogue-like.
- Reduce card behavior.
- Rework Standards & Protocols to include context rather than only large text names.
- Remove equipment numbering where it is decorative.

### Service detail differentiation

Each service should have its own subject-specific information structure.

#### Testing & Commissioning

Potential factual process visual:

Engineering Review
→ Inspection
→ Primary / Secondary Testing
→ Functional Testing
→ Commissioning
→ Energization / Handover

#### Protection & Control

Potential technical chain:

CT / VT
→ Protection Relay
→ Trip / Close Logic
→ Circuit Breaker
→ Control / SCADA

#### Electrical Installation

Potential system relationship:

Equipment
→ Cabling
→ Panels
→ Earthing
→ Checks
→ Energization

#### Power Quality

Potential visual language:

- waveform
- harmonics
- voltage-quality indicators

Only if technically accurate and supported by actual service content.

#### Operation & Maintenance

Potential lifecycle:

Inspection
→ Preventive Maintenance
→ Diagnostic Testing
→ Corrective Action
→ Records

#### Engineering Support

Potential workflow:

Inputs
→ Engineering Review
→ Technical Clarification
→ Documentation
→ Field Support

### Acceptance criteria

- Service detail pages no longer feel like the same template with different text.
- Technical visuals encode real concepts rather than decorate empty space.
- Core services remain visually dominant over supporting services.

---

## Phase 4 — About

### Goal

Make About feel institutional and credible rather than like another landing-page template.

### Required changes

- Simplify Hero composition.
- Reduce SectionLabel frequency.
- Remove arbitrary Engineering Focus numbering.
- Preserve approved AFAAQ artwork.
- Present company facts as institutional proof.
- Consolidate standards/equipment presentation where appropriate.
- Consider making Relationships static on About while Home retains the moving rail.
- Strengthen company story around:
  - who AFAAQ is
  - Cairo base
  - engineering focus
  - company scale
  - delivery philosophy
  - verified project experience

### Acceptance criteria

- About reads as a company profile, not a services landing page.
- Motion remains special to Home unless intentionally justified.
- Company facts remain factual and sourced from existing content.

---

## Phase 5 — Typography

### Goal

Remove predictable “technical website” typography while keeping AFAAQ precise, industrial, and institutional.

### Current system

- Archivo — display
- IBM Plex Sans — body
- IBM Plex Mono — technical data

### Required review

Re-evaluate IBM Plex Sans because the Designer Skill flags IBM Plex as an increasingly predictable technical-brand shorthand.

The font decision must be made through a real comparison rather than replacing it with another fashionable default.

Brand words for evaluation:

**precise / electrical / institutional**

Avoid choosing fonts because they are merely:

- modern
- premium
- clean
- popular

### Mono rule

Use mono typography only for genuine technical/data contexts such as:

- voltage
- years
- standards
- relay/device codes
- technical identifiers

Do not use mono for decorative UI scaffolding or generic labels.

### Display type rule

Reduce giant long-sentence display headlines on inner pages.

Prefer:

- shorter brand statement
- supporting explanatory paragraph below

### Acceptance criteria

- Typography feels deliberate rather than default-tech.
- Headlines are readable and do not depend on extreme negative tracking.
- Technical mono usage has a factual reason.
- Typography remains responsive across desktop and mobile.

---

## Phase 6 — Relationship Quality

### Goal

Keep the approved moving relationship rail while upgrading its brand quality and interaction control.

### Current approved placement

Home:

**Company Scale → Moving Relationships Rail → Project Execution**

This placement is locked unless the user requests a change.

### Required changes

#### Logos

Replace remote favicon substitutes with proper local transparent logo/mark assets where available and legally/visually appropriate.

Targets include:

- Schneider Electric
- ELSEWEDY ELECTRIC
- Madkour
- GE Vernova
- Siemens Energy
- ABB
- Hitachi Energy
- EGEMAC
- EETC
- Arab Organization for Industrialization

Requirements:

- transparent background
- correct aspect ratio
- consistent optical sizing
- no white boxes around marks
- local asset loading where possible

#### Motion

Preserve:

- slow seamless loop
- pause on hover
- pause on focus
- reduced-motion static fallback

Add:

- explicit manual Pause / Resume control

### Acceptance criteria

- Logos look like corporate marks, not browser favicons.
- The rail remains calm and slow.
- Keyboard users can pause motion.
- Reduced-motion users get a complete static presentation.
- Long names wrap safely on narrow screens.

---

## Phase 7 — Contact States

### Goal

Make form outcome states as visually clear as the rest of the website while preserving the strong existing form engineering.

### Preserve

- Form structure
- Labels
- Required fields
- Service prefill
- Project prefill
- Voltage prefill
- File limits
- API submission
- Loading state
- `aria-live`
- Email fallback

### Improve

#### Error state

Use an explicit status treatment such as:

**Unable to send requirement**

Then display:

- concise explanation
- direct email fallback
- clear next action

#### Success state

Use an explicit confirmation such as:

**Requirement received**

Then display:

- confirmation sentence
- expectation for reply

#### File upload

Improve visual treatment if needed, but avoid unnecessary drag-and-drop complexity unless there is a functional reason.

### Acceptance criteria

- Success and failure states are visually distinct without relying on color alone.
- Status remains accessible through `aria-live`.
- Submission and attachment limits remain unchanged unless explicitly requested.

---

## Phase 8 — Brand Governance

### Goal

Stop future chats and implementation passes from drifting into new visual directions without reference to the approved system.

### Required files

Create root-level or clearly canonical equivalent documentation:

#### `PRODUCT.md`

Should define:

- company context
- target audience
- website commercial goal
- geographical market
- positioning
- tone of voice
- messaging hierarchy
- benchmark maturity level
- anti-references
- what AFAAQ is not

#### `DESIGN.md`

Should define:

- Corporate Grid Power direction
- color tokens
- typography
- spacing
- Power Rail
- Hero blend lock
- project photography policy
- image policy
- dark-section usage
- eyebrow limit
- numbering rule
- mono rule
- border rule
- radius rule
- motion rules
- relationship rail behavior
- accessibility baseline
- mobile baseline

### Acceptance criteria

- Future chats can identify the current design system without reading old conversation history.
- New design suggestions can be evaluated against explicit rules.
- The site no longer changes direction because a different style is merely available.

---

# 5. Home-Specific Corrections

The Home architecture is approved and should remain:

**Hero → Power Rail → Capabilities → Major Project References → Company Scale → Relationships → Project Execution → About → Project Inquiry**

Do not reorder this flow without explicit user approval.

## 5.1 Hero

Keep:

- current image
- current blend
- current CTA hierarchy
- generic-photo positioning

Review later:

- headline length
- typography only

Do not change Hero copy automatically. Present options before replacing the approved headline.

## 5.2 Capabilities

Keep the two primary capabilities visually dominant:

- Testing & Commissioning
- Protection & Control

Supporting services should become more compact and less card-like.

## 5.3 Company Scale

Keep:

- `150+`
- `60%`
- large proof treatment

Remove/rewrite any copy that explains the design rationale rather than the company.

## 5.4 Relationships

Keep the moving rail in its current Home position.

Upgrade logos and add manual motion control in Phase 6.

## 5.5 Execution

Keep the numbered sequence because order is meaningful.

Do not remove numbering from this component as part of the global anti-numbering cleanup.

---

# 6. Content Integrity Rules

## 6.1 Do not invent claims

Do not add:

- certifications
- awards
- project values
- completion percentages
- client claims
- employee counts
- office locations
- technical capabilities

unless they are verified in the repository content or explicitly supplied by the user.

## 6.2 Project facts

Treat `src/content/projects.ts` as the factual source of truth unless the user explicitly requests changes.

## 6.3 Company facts

Use `src/content/company.ts` as the source of truth for company credentials.

Do not hardcode duplicate fact values in UI components when an existing source-of-truth value can be used.

## 6.4 Technical language

Prefer concrete technical nouns over vague engineering marketing.

Prefer:

- protection relay testing
- secondary circuit verification
- functional testing
- RTU integration
- commissioning procedures
- energization support

Avoid repeated vague phrases such as:

- advanced solutions
- innovative engineering
- world-class services
- end-to-end excellence

unless the claim is substantiated and necessary.

---

# 7. Accessibility and Engineering Baseline

These behaviors currently pass and must not regress during redesign work.

Preserve and verify:

- visible keyboard focus
- skip-to-content link
- `aria-current` navigation state
- mobile navigation focus trap
- Escape-to-close mobile navigation
- focus return to navigation trigger
- body scroll lock while mobile nav is open
- 44px+ practical hit targets
- semantic form labels
- form error/success `aria-live`
- reduced-motion support
- no horizontal page overflow
- safe wrapping for long relationship/client names
- readable contrast
- mobile-first responsiveness
- Hero LCP priority behavior

---

# 8. Current Pass / Needs Change / Fail Summary

| Area | Status | Direction |
|---|---|---|
| Home architecture | PASS / targeted cleanup | Keep structure |
| Hero composition | PASS | Preserve image + blend |
| Power Rail | PASS | Keep as brand signature |
| Capabilities | NEEDS CHANGE | Reduce card behavior |
| Home project references | PASS | Keep image-free system |
| Company Scale | NEEDS CHANGE | Remove rationale copy / simplify framing |
| Relationships | NEEDS CHANGE | Proper logos + pause control |
| Execution | PASS | Keep meaningful numbering |
| Home About | PASS / minor cleanup | Preserve artwork |
| Header | PASS | Optional stronger inquiry CTA |
| Footer | PASS | Preserve |
| Services landing | FAIL / major change | Align with Corporate Grid Power |
| Service details | FAIL / major change | Make service-specific |
| Projects landing | FAIL | Remove fake media |
| Project details | FAIL | Replace media block with facts header |
| About page | NEEDS MAJOR CHANGE | More institutional, less templated |
| Contact | MOSTLY PASS | Improve outcome states |
| Accessibility | MOSTLY PASS | Preserve and regression-test |
| Brand governance | MISSING | Add PRODUCT.md + DESIGN.md |

---

# 9. Priority Order

Implement in this order unless the user explicitly reprioritizes:

1. **Phase 1 — Project Truth**
2. **Phase 2 — Anti-AI-Slop Cleanup**
3. **Phase 3 — Services**
4. **Phase 4 — About**
5. **Phase 5 — Typography**
6. **Phase 6 — Relationship Quality**
7. **Phase 7 — Contact States**
8. **Phase 8 — Brand Governance**

Do not start with typography or visual polish while the Projects pages still contain fake project-media presentation.

---

# 10. Development Workflow for Future Chats

For every implementation pass:

1. Read this audit reference.
2. Read the current relevant design spec.
3. Use Superpowers process skills where applicable.
4. Reason about the requested change before coding.
5. Make a concise implementation plan.
6. Use one branch / one PR for the implementation pass.
7. Keep all review fixes on the same PR.
8. Validate desktop and mobile behavior.
9. Preserve factual content sources.
10. Request Codex review when appropriate.
11. Resolve all valid review findings on the same PR.
12. Squash merge only after verification.
13. Verify `main` matches the squash SHA.
14. Verify the production deployment status before claiming completion.

Avoid unnecessary production deployments solely for intermediate commits.

---

# 11. Stop Conditions

Do not make changes merely because another visual alternative looks attractive.

A change should be made only when it improves at least one of:

- clarity
- credibility
- subject specificity
- hierarchy
- accessibility
- responsiveness
- performance
- brand consistency
- factual communication
- conversion path

Do not restart a full-site redesign unless the user explicitly rejects the approved Corporate Grid Power direction.

The site should evolve through deliberate correction, not endless stylistic churn.
