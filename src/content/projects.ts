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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Performing_relay_trip_check_and_setting_on_a_switchgear_cabinet_at_a_power_facility_in_Queens._10-01-2019_%2848843694488%29.jpg",
    imageAlt: "Protection and control testing on switchgear equipment.",
    imagePosition: "center 47%",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/US_Navy_110328-N-OJ170-009_Hideji_Kawasaki_operates_the_supervisory_control_and_data_acquisition_%28SCADA%29_system_to_balance_an_electrical_load_insid.jpg",
    imageAlt: "Electrical supervisory control and data acquisition control-room operations.",
    imagePosition: "center 52%",
    relationship: "Madkour",
    location: "Cairo, Egypt",
    year: "2022",
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
