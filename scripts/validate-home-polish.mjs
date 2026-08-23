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
assert(home.includes("FeaturedProjectDossier"), "Home must render the featured project as a technical dossier.");
assert(!home.includes("<ProjectMedia"), "Home must not render a media-shaped project placeholder.");
assert(home.includes("Power System Experience"), "Home must preserve the voltage-experience proof layer.");
assert(home.includes("Company Proof"), "Home must label company proof separately from voltage experience.");
assert(home.includes("AboutBrandArtwork"), "Home About must keep the approved AFAAQ artwork.");
assert(!home.includes('/images/projects/'), "Home must not render project photography.");
assert(home.includes("companyFacts"), "Home proof area must expose verified company credibility facts.");
assert(projectIndex.includes("ProjectDossierRecord"), "Home project portfolio must render technical dossier records.");
assert(!projectIndex.includes("ProjectMedia"), "Home secondary project records must not render media placeholders.");
assert(!projectIndex.includes('"use client"'), "Home project portfolio must remain server-rendered.");
assert(projectIndex.includes("lg:grid-cols-3"), "Home project portfolio must retain a stable three-column desktop grid.");
assert(dossier.includes("Technical Dossier"), "Featured project panel must identify itself as a Technical Dossier.");
assert(dossier.includes("Voltage Levels"), "Featured project panel must surface its real voltage-level count.");
assert(dossier.includes("Work Scopes"), "Featured project panel must surface its real scope count.");
assert(dossier.includes("md:min-h-[26rem]"), "Featured project panel must use the reduced 26rem desktop minimum height.");
assert(!dossier.includes("md:min-h-[32rem]"), "Featured project panel must not retain the oversized 32rem desktop minimum height.");
assert(dossier.includes("md:py-7"), "Featured project details column must use compact desktop vertical padding.");

console.log("Premium Technical Dossier Home invariants OK.");
