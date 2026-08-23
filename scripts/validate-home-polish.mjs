import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const projectIndex = readFileSync(new URL("../src/components/afaaq/project-showcase-rail.tsx", import.meta.url), "utf8");
const aboutArtwork = readFileSync(new URL("../src/components/afaaq/about-brand-artwork.tsx", import.meta.url), "utf8");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved original compressed substation photo.",
);
assert(!home.includes("ProjectMedia"), "Home project presentation must remain text-only.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must not regress to a client-side carousel.");
assert(!projectIndex.includes("aria-roledescription=\"carousel\""), "Home project portfolio must not expose carousel semantics.");
assert(!projectIndex.includes("overflow-x-auto"), "Home project portfolio must not regress to horizontal scrolling.");
assert(projectIndex.includes("lg:grid-cols-3"), "Home project portfolio must retain the stable desktop project index.");
assert(
  aboutArtwork.includes('src="/images/about/afaaq-about-16x9.webp"'),
  "Approved wide About artwork must remain available for desktop presentation.",
);

console.log("Home premium visual polish invariants OK.");
