import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const projectIndex = readFileSync(new URL("../src/components/afaaq/project-showcase-rail.tsx", import.meta.url), "utf8");
const dossier = readFileSync(new URL("../src/components/afaaq/project-dossier.tsx", import.meta.url), "utf8");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved substation photo.",
);
assert(home.includes('[--hero-canvas:#f4f3ef]'), "Home Hero must preserve its approved warm blend base.");
assert(home.includes("<PowerRail"), "Home must expose immediate voltage and delivery proof through the Power Rail.");
assert(!home.includes("Power System Experience"), "Home must remove the oversized editorial voltage section.");
assert(home.includes("FeaturedProjectDossier"), "Home project portfolio remains on the technical dossier system until the project-reference task replaces it.");
assert(!home.includes("<ProjectMedia"), "Home must not render a media-shaped project placeholder.");
assert(home.includes("AboutBrandArtwork"), "Home About must keep the approved AFAAQ artwork.");
assert(!home.includes('/images/projects/'), "Home must not render project photography.");
assert(home.includes("companyFacts"), "Home must continue sourcing company credibility from verified content.");
assert(projectIndex.includes("ProjectDossierRecord"), "Current secondary project portfolio must remain server-rendered dossier records until replacement.");
assert(!projectIndex.includes("ProjectMedia"), "Home secondary project records must not render media placeholders.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must remain server-rendered.");
assert(dossier.includes("Technical Dossier"), "Current featured project panel must remain internally coherent until replacement.");
assert(!dossier.includes("text-white/36"), "Functional dossier micro labels must not use low-contrast white/36 text.");

console.log("Corporate Grid Power transitional Home invariants OK.");
