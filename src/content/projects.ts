export type ContentStatus = "verified" | "pending";

export type Project = {
  slug: string;
  name: string;
  voltage: readonly string[];
  scopes: readonly string[];
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  systems?: readonly string[];
  relationship?: string;
  location?: string;
  year?: string;
  latest?: boolean;
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
    location: "Egypt",
    status: "verified",
  },
  {
    slug: "delta-control-project",
    name: "Delta Control Project",
    voltage: ["66 kV", "220 kV"],
    scopes: ["Protection & Control Systems", "Testing & Commissioning", "SCADA Integration", "Point-to-Point Testing"],
    summary:
      "Protection and control systems, SCADA integration, point-to-point testing, and testing and commissioning across 66 kV and 220 kV systems.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Substation_busbars_and_breakers.jpg",
    imageAlt: "High-voltage substation busbars and circuit breakers viewed from above.",
    imagePosition: "center 48%",
    relationship: "EETC – Delta Area",
    location: "Delta Region, Egypt",
    year: "2023–2024",
    status: "verified",
  },
  {
    slug: "canal-control-project",
    name: "Canal Control Project",
    voltage: ["66 kV", "220 kV"],
    scopes: ["Control & Monitoring Systems", "SCADA Integration", "Testing & Commissioning", "System Handover"],
    summary:
      "Control and monitoring, SCADA integration, testing and commissioning, and system handover across 66 kV and 220 kV systems.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/US_Navy_110328-N-OJ170-009_Hideji_Kawasaki_operates_the_supervisory_control_and_data_acquisition_%28SCADA%29_system_to_balance_an_electrical_load_insid.jpg",
    imageAlt: "Electrical supervisory control and data acquisition control-room operations.",
    imagePosition: "center 52%",
    relationship: "ELSEWEDY ELECTRIC",
    location: "Canal Region, Egypt",
    year: "2023",
    status: "verified",
  },
  {
    slug: "heliopolis-dcc",
    name: "Heliopolis DCC",
    voltage: ["MV"],
    scopes: ["Distribution Boards", "ARMU Installation", "MV Modifications", "Testing & Commissioning"],
    summary: "Distribution-board works, ARMU installation, MV modifications, and testing and commissioning.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Layout_and_installation_of_control_panels_in_a_recently_installed_power_substation_in_Queens._09-11-2019_%2848727688143%29.jpg",
    imageAlt: "Technicians installing electrical control panels inside a power substation.",
    imagePosition: "center 55%",
    relationship: "Schneider Electric",
    location: "Cairo, Egypt",
    year: "2023–2024",
    status: "verified",
  },
  {
    slug: "menia-project",
    name: "Menia Project",
    voltage: ["MV"],
    scopes: ["MV Modifications", "Protection & Control", "BBVT & DP Installation", "Testing & Commissioning"],
    summary: "MV modifications, protection and control, BBVT and DP installation, and testing and commissioning.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Distribution_substation_switchgear.jpg",
    imageAlt: "Distribution substation switchgear and associated high-voltage equipment.",
    imagePosition: "center 54%",
    relationship: "Schneider Electric",
    location: "Menia, Egypt",
    year: "2024–2025",
    latest: true,
    status: "verified",
  },
  {
    slug: "safaga-adaptation",
    name: "Safaga Adaptation",
    voltage: ["MV"],
    scopes: ["Kiosk Adaptation", "MV & LV Modifications", "Testing & Commissioning"],
    summary: "Kiosk adaptation, MV and LV modifications, and testing and commissioning.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Ausgrid_Kiosk_Substation_Transformer_S6443.jpg",
    imageAlt: "Outdoor electrical kiosk substation transformer.",
    imagePosition: "center 50%",
    relationship: "Schneider Electric",
    location: "Red Sea, Egypt",
    year: "2024",
    status: "verified",
  },
  {
    slug: "gharbia-zone-project",
    name: "Gharbia Zone Project",
    voltage: ["66 kV"],
    scopes: ["Protection & Control", "Secondary Systems", "Testing & Commissioning"],
    summary: "Protection and control, secondary systems, and testing and commissioning for 66 kV works.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Transformer_at_substation.jpg",
    imageAlt: "Power transformer and electrical equipment in an outdoor substation.",
    imagePosition: "center 52%",
    relationship: "EETC – Gharbia",
    location: "Gharbia, Egypt",
    year: "2024",
    status: "verified",
  },
];

export const verifiedProjects = projects.filter((project) => project.status === "verified");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
