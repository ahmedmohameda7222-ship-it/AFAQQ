export type ContentStatus = "verified" | "pending";

export type Project = {
  slug: string;
  name: string;
  voltage: readonly string[];
  scopes: readonly string[];
  summary: string;
  systems?: readonly string[];
  relationship?: string;
  location?: string;
  year?: number;
  status: ContentStatus;
};

export const projects: Project[] = [
  {
    slug: "delta-regional-control-center",
    name: "Delta Regional Control Center",
    voltage: ["11 kV", "66 kV", "220 kV"],
    scopes: ["Electrical Installation", "Testing & Commissioning", "Protection & Control", "RTU & Telecommunications"],
    summary:
      "Electrical installation, testing and commissioning work across power, protection, control and automation systems.",
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
    location: "Egypt",
    status: "verified",
  },
  {
    slug: "delta-control-project",
    name: "Delta Control Project",
    voltage: ["66 kV", "220 kV"],
    scopes: ["Protection & Control", "SCADA", "Testing & Commissioning"],
    summary: "Protection, SCADA and commissioning work for 66 kV and 220 kV control systems.",
    status: "verified",
  },
  {
    slug: "canal-control-project",
    name: "Canal Control Project",
    voltage: ["66 kV", "220 kV"],
    scopes: ["Protection & Control", "SCADA", "Testing & Commissioning"],
    summary: "Testing, protection and SCADA work for 66 kV and 220 kV control systems.",
    status: "verified",
  },
  {
    slug: "heliopolis-dcc",
    name: "Heliopolis DCC",
    voltage: ["MV"],
    scopes: ["Distribution", "Testing & Commissioning"],
    summary: "Testing and commissioning support for medium-voltage distribution systems.",
    status: "verified",
  },
];

export const verifiedProjects = projects.filter((project) => project.status === "verified");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
