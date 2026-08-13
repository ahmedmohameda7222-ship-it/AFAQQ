export type ContentStatus = "verified" | "pending";

export type Project = {
  slug: string;
  name: string;
  voltage: string[];
  scopes: string[];
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
    scopes: [
      "Electrical Installation",
      "Testing & Commissioning",
      "Protection & Control",
      "RTU & Telecommunications",
    ],
    relationship: "ELSEWEDY ELECTRIC T&D",
    status: "verified",
  },
  {
    slug: "canal-control-project",
    name: "Canal Control Project",
    voltage: ["66 kV", "220 kV"],
    scopes: ["Protection & Control", "SCADA", "Testing & Commissioning"],
    status: "pending",
  },
  {
    slug: "heliopolis-dcc",
    name: "Heliopolis DCC",
    voltage: ["MV"],
    scopes: ["ARMU", "Distribution", "Testing & Commissioning"],
    status: "pending",
  },
];

export const verifiedProjects = projects.filter((project) => project.status === "verified");
