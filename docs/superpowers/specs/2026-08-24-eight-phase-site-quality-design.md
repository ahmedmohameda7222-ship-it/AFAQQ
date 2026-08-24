# AFAAQ Eight-Phase Site Quality Design

## Goal
Bring the entire AFAAQ website up to the same mature Corporate Grid Power standard as the approved Home direction while removing the remaining AI-generated design tells identified by Designer Skill 2. The work must preserve verified engineering facts, preserve current functionality, and keep the current Home hero image and blend visually unchanged.

## Design preflight
- Surface: AFAAQ corporate engineering website for electrical contracting, substations, testing, commissioning, protection and control.
- Audience: utility, EPC, consultant, engineering, procurement and project-management stakeholders.
- Register: brand.
- Aesthetic system: corporate industrial brand identity / Corporate Grid Power.
- designVariance: 4/10.
- motionIntensity: 3/10.
- visualDensity: 6/10.
- Physical scene: an EPC or utility project manager reviews AFAAQ on a bright office laptop shortly before contractor/vendor shortlisting.
- Signature device: AFAAQ Power Rail. No competing decorative signature system.
- Inverse test: the pages should not read as a generic engineering template, editorial portfolio, SaaS landing page, or AI-generated technical theme.

## Binding Designer Skill rules
1. Remove fake project imagery and decorative media placeholders where no verified project photo exists.
2. Reduce repeated tiny uppercase tracked eyebrows; target at most one meaningful eyebrow per roughly three major sections.
3. Stop repeating the split-heading-left / explanatory-paragraph-right template when the right column contains no meaningful visual, data or action.
4. Remove arbitrary numbering unless the number communicates real sequence or technical meaning.
5. Prefer whitespace and hierarchy over repeated border framing.
6. Keep motion purposeful, preserve reduced-motion alternatives, and give continuous motion explicit user control.
7. Preserve semantic HTML, keyboard navigation, focus-visible states, 44px+ targets, form labels, aria-live feedback and mobile wrapping.
8. Do not invent project facts, company claims, accreditations, systems or imagery.
9. No stock/project photography may be presented as a real AFAAQ project.
10. Existing AFAAQ brand colors take precedence over the skill's greenfield color procedure.

## Locked elements
- Keep current Home hero image.
- Keep current Home hero blend visually unchanged, including its warm hero-specific base.
- Keep Home architecture: Hero → Power Rail → Capabilities → Major Project References → Company Scale → Relationships → Execution → About → Project Inquiry.
- Keep AFAAQ navy / deep navy / electric blue identity.
- Keep Power Rail as the single primary visual signature.
- Keep 150+ / 60% proof treatment as verified company evidence.
- Keep current execution sequence and its numbering because it represents real process order.
- Keep About brand artwork.
- Keep header and footer foundations unless a specific phase changes a small interaction or typography detail.
- Keep contact form architecture and submission behavior.
- Keep all verified content in `src/content/*` unchanged unless an explicit content correction is required by the user.

## Phase 1 — Project Truth
### Problem
`/projects` and `/projects/[slug]` still reserve large visual areas for `ProjectMedia`; because the verified project records have no images, the component renders fabricated dark project-reference panels. This violates the user-approved no-project-photo rule and Designer Skill's anti-placeholder guidance.

### Direction
- Remove project-media presentation from project listing and detail pages.
- Present projects as factual corporate case references using project name, relationship, voltage/technical label, location, year, scope, systems and inquiry action.
- Reuse the mature image-free information hierarchy established by Home, but do not clone Home mechanically.
- Do not add decorative fake one-line diagrams.

## Phase 2 — Anti-AI-Slop Cleanup
### Problem
Repeated SectionLabel eyebrows, split heading layouts, arbitrary numbering, and frequent border scaffolding remain across Home and inner pages.

### Direction
- Remove redundant labels and keep only labels that add real taxonomy.
- Convert most split headings to a single readable content column unless the second column contains real data/action/visual content.
- Remove decorative numbering from services, engineering focus, project rows/scopes and equipment lists.
- Keep numbering for Project Execution only.
- Reduce border density where spacing can communicate grouping.
- Remove copy that explains design decisions rather than company/project reality.

## Phase 3 — Services
### Problem
Services landing and service detail pages still use the previous editorial/list template and do not differentiate capabilities strongly enough.

### Direction
- Rebuild Services landing as an engineering capability catalogue with clear hierarchy between core and supporting services.
- Remove arbitrary service numbering.
- Create subject-specific factual technical visual structures for service details using existing verified content only.
- Examples of permitted content structures: testing/commissioning workflow, protection/control signal path, installation delivery chain, maintenance lifecycle and engineering-support workflow. These must be descriptive UI diagrams, not invented engineering schematics.
- Keep related-project links and inquiry context.

## Phase 4 — About
### Problem
About still repeats the same split/editorial patterns and uses arbitrary engineering-focus numbering.

### Direction
- Make About more institutional: company statement → brand artwork → company story → verified scale → engineering focus → relationships → technical reference → projects CTA.
- Remove arbitrary focus numbers.
- Keep relationships static on About so the animated relationship rail remains a special Home signature moment.
- Consolidate standards/equipment into a cleaner technical credibility block.

## Phase 5 — Typography
### Problem
IBM Plex Sans/Mono still gives much of the inner site a predictable technical-template tone; large inner-page headlines are often long sentences with aggressive negative tracking.

### Direction
- Evaluate body/technical typography using the Designer Skill brand-font process against three words: precise / electrical / institutional.
- Do not replace fonts blindly. Compare current system against real alternatives before committing.
- Mono is reserved for genuinely technical data: voltage, years, codes, standards and similar values.
- Shorten display headlines where possible without changing verified meaning.
- Recalibrate tracking after final font choice.

## Phase 6 — Relationship Quality
### Problem
Home relationship rail uses favicons instead of proper logo assets and has no explicit pause/resume control.

### Direction
- Prefer approved local transparent company marks when available; if no trustworthy local asset is available, keep a text-first fallback rather than inventing logos.
- Add a discreet accessible pause/resume control for continuous movement.
- Preserve hover/focus pause and reduced-motion static fallback.
- Keep relationship rail on Home only; About uses static presentation.

## Phase 7 — Contact States
### Problem
Contact form function is good but success and error states are visually too close to helper text.

### Direction
- Add explicit status blocks/titles for success and error while preserving `aria-live` behavior and entered data on failure.
- Keep direct email fallback for errors.
- Improve file upload presentation only if it can remain simple, accessible and framework-native.
- Do not turn the B2B inquiry into a wizard.

## Phase 8 — Brand Governance
### Direction
Create canonical root-level `PRODUCT.md` and `DESIGN.md`.

`PRODUCT.md` locks:
- audience and commercial job,
- company positioning,
- geography,
- three-word personality,
- messaging principles,
- anti-references,
- accessibility commitments.

`DESIGN.md` locks:
- palette,
- typography,
- Power Rail rules,
- hero blend exception,
- project imagery policy,
- eyebrow limit,
- mono usage,
- border/radius rules,
- motion rules,
- relationship behavior,
- responsive/accessibility requirements,
- stop conditions for future redesign work.

## Verification and ship gate
- Add deterministic source validators for each phase where practical.
- Every production change follows RED → GREEN for its relevant validator.
- Run the repository's full `npm run check`/Vercel build gate before merge.
- Review at 375 / 768 / 1440px when rendered preview access is available.
- Check keyboard navigation, focus order, mobile menu, reduced motion and long text.
- Final Codex review must be clean or all findings resolved on the same PR.
- One branch implementation stream and one PR only for the eight phases.
- Squash merge only after all phases and verification are green.
