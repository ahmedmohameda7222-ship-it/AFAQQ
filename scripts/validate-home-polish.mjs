import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const projectBoard = readFileSync(new URL("../src/components/afaaq/project-reference-board.tsx", import.meta.url), "utf8");
const capabilityGrid = readFileSync(new URL("../src/components/afaaq/capability-grid.tsx", import.meta.url), "utf8");
const companyScale = readFileSync(new URL("../src/components/afaaq/company-scale.tsx", import.meta.url), "utf8");
const relationships = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Home hero must keep the approved substation photo.",
);
assert(home.includes('[--hero-canvas:#f4f3ef]'), "Home Hero must preserve its approved warm blend base.");
assert(home.includes("<PowerRail"), "Home must expose immediate voltage and delivery proof through the Power Rail.");
assert(home.includes("<CapabilityGrid"), "Home must render the corporate capability hierarchy.");
assert(home.includes("<ProjectReferenceBoard"), "Home must render the image-free corporate project reference board.");
assert(home.includes("<CompanyScale"), "Home must render verified company scale separately from voltage experience.");
assert(home.includes("<RelationshipRail"), "Home must render selected relationships after company scale.");
assert(!home.includes("FeaturedProjectDossier"), "Home must not retain the black technical dossier presentation.");
assert(!home.includes("<ProjectMedia"), "Home must not render a media-shaped project placeholder.");
assert(home.includes("AboutBrandArtwork"), "Home About must keep the approved AFAAQ artwork.");
assert(!home.includes('/images/projects/'), "Home must not render project photography.");
assert(companyScale.includes('from "@/content/company"'), "Company scale must source proof from verified company content.");
assert(!projectBoard.includes("ProjectMedia"), "Project references must remain image-free.");
assert(!projectBoard.includes('"use client"'), "Project references must remain server-rendered.");
assert(!capabilityGrid.includes("padStart"), "Capabilities must not use decorative numbering.");
assert(!relationships.includes("relationship-marquee__track"), "Relationships must not use the old marquee.");

console.log("Corporate Grid Power Home invariants OK.");
