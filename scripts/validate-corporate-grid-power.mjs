import { existsSync, readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function readRequired(path, message) {
  const url = new URL(path, import.meta.url);
  assert(existsSync(url), message);
  return readFileSync(url, "utf8");
}

const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const globals = readFileSync(new URL("../src/styles/globals.css", import.meta.url), "utf8");
const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");

assert(layout.includes("Archivo"), "Corporate Grid Power must load Archivo for display typography.");
assert(layout.includes("--font-display"), "Archivo must be exposed as --font-display.");
assert(globals.includes("--canvas: #ffffff"), "Global canvas must be Corporate White.");
assert(globals.includes("--surface: #f4f7fa"), "Global surface must be Cool Surface.");
assert(globals.includes("--brand-navy: #0a2f82"), "AFAAQ Navy token must match the approved mark.");
assert(globals.includes("--brand-deep-navy: #061d58"), "Deep Navy token must be available for authority surfaces.");
assert(globals.includes("--brand-blue: #0b8cff"), "Electric Blue token must match the approved mark.");
assert(globals.includes(".font-display"), "Global CSS must expose a display-font utility.");

assert(
  home.includes('src="/images/home/home-substation-original-1440.jpg"'),
  "Hero image must remain unchanged.",
);
assert(home.includes("priority"), "Hero image must remain priority/LCP media.");
assert(
  home.includes('[--hero-canvas:#f4f3ef]'),
  "Hero must isolate its approved warm blend base from the new global canvas.",
);
assert(
  home.includes("linear-gradient(180deg, var(--hero-canvas) 0%"),
  "Mobile Hero blend must remain on the approved warm base.",
);
assert(
  home.includes("linear-gradient(90deg, var(--hero-canvas) 0%"),
  "Desktop Hero blend must remain on the approved warm base.",
);
assert(home.includes("<PowerRail"), "Home must render the AFAAQ Power Rail immediately after Hero.");
assert(!home.includes("Power System Experience"), "Old oversized voltage proof section must be removed from Home.");

assert(home.includes("<CapabilityGrid"), "Capabilities must use the Corporate Grid Power capability system.");
const capability = readRequired(
  "../src/components/afaaq/capability-grid.tsx",
  "Capability grid component must exist.",
);
assert(!capability.includes("padStart"), "Capabilities must not use decorative numbering.");
assert(capability.includes("testing-commissioning"), "Testing & Commissioning must remain a core capability.");
assert(capability.includes("protection-control"), "Protection & Control must remain a core capability.");

assert(home.includes("<ProjectReferenceBoard"), "Home must use the corporate project reference board.");
assert(!home.includes("FeaturedProjectDossier"), "Home must remove the black technical dossier presentation.");
const projectBoard = readRequired(
  "../src/components/afaaq/project-reference-board.tsx",
  "Project reference board component must exist.",
);
assert(!projectBoard.includes("ProjectMedia"), "Project reference board must remain image-free.");
assert(!projectBoard.includes('/images/projects/'), "Project reference board must not reference repository project images.");
assert(!projectBoard.includes('"use client"'), "Project reference board must remain server-rendered.");
assert(!projectBoard.includes("Voltage Levels"), "Do not display decorative derived voltage counts.");
assert(!projectBoard.includes("Work Scopes"), "Do not display decorative derived scope counts.");

assert(home.includes("<CompanyScale"), "Home must have a dedicated company-scale section.");
const companyScale = readRequired(
  "../src/components/afaaq/company-scale.tsx",
  "Company scale component must exist.",
);
assert(companyScale.includes("Substations delivered"), "Company scale must surface the verified 150+ delivery proof.");
assert(
  companyScale.includes("of EETC control centers project experience"),
  "Company scale must surface the verified 60% control-center proof.",
);

const relationships = readFileSync(new URL("../src/components/afaaq/relationship-rail.tsx", import.meta.url), "utf8");
assert(
  relationships.includes("Selected Project & Client Relationships"),
  "Relationships must use the approved corporate label.",
);
assert(!relationships.includes("relationship-marquee__track"), "Relationships must not use an infinite marquee.");
assert(!relationships.includes("google.com/s2/favicons"), "Relationships must not use remote favicon substitutes as logos.");

const capabilityIndex = home.indexOf("<CapabilityGrid");
const projectIndex = home.indexOf("<ProjectReferenceBoard");
const scaleIndex = home.indexOf("<CompanyScale");
const relationshipIndex = home.indexOf("<RelationshipRail");
assert(capabilityIndex >= 0 && projectIndex > capabilityIndex, "Capabilities must appear before project references.");
assert(scaleIndex > projectIndex, "Company Scale must appear after project references.");
assert(relationshipIndex > scaleIndex, "Selected Relationships must appear after Company Scale.");

console.log("Corporate Grid Power core Home invariants OK.");
