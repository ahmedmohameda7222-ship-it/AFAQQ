# Engineered Editorial 2.0 Design

## Goal
Raise the AFAAQ ARAB website from a clean editorial engineering site to a premium bespoke corporate presentation by strengthening visual proof, image-led project storytelling, real engineering photography, hierarchy and responsive composition without changing verified project facts or the established warm-neutral/dark visual identity.

## Design decisions
1. **Keep the approved Home hero photograph.** Retain `/images/home/home-substation-original-1440.jpg`, but reduce the desktop/mobile edge wash so the substation remains visually present while text stays readable.
2. **Strengthen technical proof.** Keep the 220 / 66 / 11 kV language, pair each voltage with a clear discipline, and surface only verified company credibility facts already in `src/content/company.ts`.
3. **Make projects image-led.** Restore the approved project images already stored in `public/images/projects/` and use them on the Home flagship project, Home project cards, Projects index and project detail pages. Project names, scopes, voltage labels, relationships, locations and years remain unchanged.
4. **Treat DRCC as the flagship case study.** Use a large project photograph beside structured technical metadata, relationship, scope and project action; eliminate the text-only dead space that made the section feel unfinished.
5. **Use stable project grids, not a carousel.** The three secondary Home projects remain server-rendered in a responsive grid with consistent image aspect ratio, typography and restrained hover movement.
6. **Use real engineering photography in Home About.** Remove the brochure-style `AboutBrandArtwork` from the Home page and use the existing RCC commissioning/control image as the visual proof. Keep the company positioning and verified company facts beside it.
7. **Preserve the dark services band.** Keep Testing & Commissioning and Protection & Control as the primary service rows; explicitly group the four smaller disciplines as supporting engineering disciplines with stronger readable treatment.
8. **Keep the current execution sequence, header and footer foundations.** They already implement the approved editorial direction; only the surrounding Home rhythm is adjusted where necessary.
9. **Motion stays restrained.** Only small arrow translations, subtle project-image scale and existing marquee motion are used. Reduced-motion behavior and focus-visible states remain intact.

## Responsive rules
- 320px remains the supported minimum width.
- No horizontal project carousel or overflow.
- Flagship project stacks image then technical content on mobile and becomes a split case-study layout on desktop.
- Secondary projects stack on smaller screens and become a three-column image grid on large screens.
- About stacks image then copy on mobile and uses a balanced image/text split on desktop.
- Interactive targets remain at least 48px.

## Content and asset constraints
- Do not invent project facts, clients, voltage levels, dates, locations, claims or services.
- Use only existing approved project imagery from `public/images/projects/`.
- Keep the current Home hero photo.
- Keep the warm-neutral canvas, graphite service/CTA bands, IBM Plex typography system and editorial rule language.
- No generic rounded-card redesign, heavy shadows, glassmorphism, decorative gradients, icon overload or flashy motion.
- Preserve Next.js image optimization, semantic links, keyboard focus and reduced-motion behavior.
