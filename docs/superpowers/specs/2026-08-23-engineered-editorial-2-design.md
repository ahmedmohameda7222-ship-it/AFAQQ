# Engineered Editorial 2.0 Design

## Goal
Raise the AFAAQ ARAB website from a clean editorial engineering site to a premium bespoke corporate presentation by strengthening hierarchy, technical proof, project storytelling and responsive composition without changing verified project facts or presenting unauthenticated stock photography as AFAAQ project evidence.

## Design decisions
1. **Keep the approved Home hero photograph.** Retain `/images/home/home-substation-original-1440.jpg`, with the refined edge wash and stronger headline/body hierarchy.
2. **Strengthen technical proof.** Keep the 220 / 66 / 11 kV language, pair each voltage with a clear discipline, and surface only verified company credibility facts already in `src/content/company.ts`.
3. **Preserve the image-ready project composition without false photography.** Home, Projects index and project detail surfaces keep `ProjectMedia`, but verified projects have no `image`, `imageAlt` or `imagePosition` metadata until authenticated AFAAQ project photography is supplied. `ProjectMedia` therefore renders its branded text-only fallback rather than unrelated stock imagery.
4. **Treat DRCC as the flagship case study.** Keep the split flagship layout, structured technical metadata, relationship, scope and project action while the media side remains the honest project-reference fallback.
5. **Use stable project grids, not a carousel.** The three secondary Home projects remain server-rendered in a responsive grid with consistent fallback media, typography and restrained interaction.
6. **Use approved brand artwork in Home About.** Keep the approved AFAAQ About artwork until authenticated field photography is available; do not use images from `public/images/projects/` as generic company evidence.
7. **Preserve the dark services band.** Keep Testing & Commissioning and Protection & Control as the primary service rows; explicitly group the four smaller disciplines as supporting engineering disciplines.
8. **Keep the current execution sequence, header and footer foundations.** They already implement the approved editorial direction; only surrounding Home rhythm is adjusted where necessary.
9. **Motion stays restrained.** Only small arrow translations, fallback/media treatment and existing marquee motion are used. Reduced-motion behavior and focus-visible states remain intact.

## Responsive rules
- 320px remains the supported minimum width.
- No horizontal project carousel or overflow.
- Flagship project stacks project-reference fallback then technical content on mobile and becomes a split case-study layout on desktop.
- Secondary projects stack on smaller screens and become a three-column grid on large screens.
- About stacks artwork then copy on mobile and uses a balanced artwork/text split on desktop.
- Interactive targets remain at least 48px.

## Content and asset constraints
- Do not invent project facts, clients, voltage levels, dates, locations, claims or services.
- Do not assign or imply project photography unless its provenance as an AFAAQ project image is authenticated.
- `public/images/projects/README.md` remains authoritative: unrelated stock imagery must not be presented as project photography.
- Keep the current Home hero photo.
- Keep the warm-neutral canvas, graphite service/CTA bands, IBM Plex typography system and editorial rule language.
- No generic rounded-card redesign, heavy shadows, glassmorphism, decorative gradients, icon overload or flashy motion.
- Preserve Next.js semantics, keyboard focus and reduced-motion behavior.
