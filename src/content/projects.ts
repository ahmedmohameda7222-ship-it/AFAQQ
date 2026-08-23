export type ContentStatus = "verified" | "pending";

export type Project = {
  slug: string;
  name: string;
  voltage: readonly string[];
  technicalLabel?: string;
  scopes: readonly string[];
  summary: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  systems?: readonly string[];
  relationship?: string;
  location?: string;
  year?: string;
  status: ContentStatus;
};

export const projects: Project[] = [
  {
    slug: "delta-regional-control-center",
    name: "Delta Regional Control Center (DRCC)",
    voltage: ["220 kV", "66 kV", "11 kV"],
    scopes: ["Electrical Installation", "Testing & Commissioning", "Protection & Control", "RTU & Telecommunications"],
    summary:
      "Electrical installation, testing and commissioning work across power, protection, control and RTU systems at the Delta Regional Control Center.",
    image: "/images/projects/drcc.jpg",
    imageAlt: "Delta Regional Control Center project building in Egypt.",
    imagePosition: "center center",
    systems: [
      "Switchgear panels",
      "Electrical panels",
      "Cable systems",
      "LV control panels",
      "AC / DC auxiliary systems",
      "Control and protection circuits",
      "Protection relays",
      "RTU and telecommunication connections",
    ],
    relationship: "ELSEWEDY ELECTRIC T&D",
    location: "Delta Region, Egypt",
    status: "verified",
  },
  {
    slug: "cairo-regional-control-center-upgrade",
    name: "Upgrade of Cairo Regional Control Center (CRCC)",
    voltage: ["220 kV", "66 kV", "11 kV"],
    scopes: ["Regional Control Center Upgrade"],
    summary:
      "Upgrade of the Cairo Regional Control Center across 220 kV, 66 kV and 11 kV systems.",
    image: "/images/projects/crcc.jpg",
    imageAlt: "Regional control center upgrade with SCADA monitoring and operator workstations.",
    imagePosition: "center center",
    relationship: "Madkour",
    location: "Cairo, Egypt",
    year: "2022",
    status: "verified",
  },
  {
    slug: "canal-control-project",
    name: "Canal Control Project (RCC)",
    voltage: ["220 kV", "66 kV", "22 kV"],
    scopes: ["Control & Monitoring", "SCADA Integration", "Testing & Commissioning"],
    summary:
      "Control and monitoring, SCADA integration, testing and commissioning work for the Regional Control Center serving the Canal Region.",
    image: "/images/projects/rcc.jpg",
    imageAlt: "Engineers testing and commissioning control and SCADA panels for a regional control center.",
    imagePosition: "center center",
    relationship: "ELSEWEDY ELECTRIC T&D",
    location: "Canal Region, Egypt",
    year: "2023",
    status: "verified",
  },
  {
    slug: "benban-dcc",
    name: "Benban DCC",
    voltage: [],
    technicalLabel: "Solar Power Plant",
    scopes: ["Secondary Systems", "Control Systems", "SCADA Adaptation / Integration"],
    summary:
      "Secondary-system and control work for Benban DCC, including SCADA adaptation and integration.",
    image: "/images/projects/benban.jpg",
    imageAlt: "Solar power plant and electrical infrastructure in the Aswan desert.",
    imagePosition: "center center",
    relationship: "GE",
    location: "Aswan, Egypt",
    year: "2021–2022",
    status: "verified",
  },
];

export const verifiedProjects = projects.filter((project) => project.status === "verified");

export function getProjectTechnicalLabel(project: Project) {
  if (project.voltage.length) return project.voltage.join(" / ");
  return project.technicalLabel ?? "";
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
