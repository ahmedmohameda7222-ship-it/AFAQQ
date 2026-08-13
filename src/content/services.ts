export type ServiceStatus = "verified" | "pending";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  capabilities: readonly string[];
  methods?: readonly string[];
  standards?: readonly string[];
  relatedProjectSlugs: readonly string[];
  status: ServiceStatus;
};

export const services: Service[] = [
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    summary: "We test electrical equipment and control systems before energization.",
    intro:
      "AFAAQ tests primary equipment, protection systems, control circuits and metering systems. We support projects from test preparation through functional checks, commissioning and energization.",
    capabilities: [
      "Primary injection testing",
      "Secondary injection testing",
      "Protection relay testing",
      "Functional testing",
      "Point-to-point checks",
      "Transformer testing",
      "Circuit breaker testing",
      "Cable testing",
      "Metering testing",
    ],
    methods: [
      "Insulation resistance testing",
      "Micro-ohm measurement",
      "Signal and alarm checks",
      "Control circuit verification",
      "Interlocking checks",
      "Commissioning and energization support",
    ],
    standards: ["IEC 60255", "IEC 62271", "IEEE C37"],
    relatedProjectSlugs: ["delta-regional-control-center"],
    status: "verified",
  },
  {
    slug: "protection-control",
    title: "Protection & Control",
    summary: "We test protection relays, control circuits and interlocking systems.",
    intro:
      "AFAAQ supports protection and control systems from engineering review through relay testing, wiring checks, functional verification and energization support.",
    capabilities: [
      "Protection engineering",
      "Relay testing and configuration",
      "Interlocking verification",
      "Control panel testing",
      "Secondary wiring and loop checks",
      "Signal and alarm verification",
      "Protection circuit functional testing",
      "Energization support",
    ],
    methods: [
      "Secondary injection",
      "Trip and close circuit checks",
      "Binary input and output checks",
      "Point-to-point verification",
      "Logic and interlocking checks",
      "IEC 61850 verification",
    ],
    standards: ["IEC 61850", "IEC 60255", "IEEE C37"],
    relatedProjectSlugs: ["delta-regional-control-center", "cairo-regional-control-center-upgrade", "benban-dcc"],
    status: "verified",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    summary: "Electrical installation for power, control and auxiliary systems.",
    intro:
      "AFAAQ installs electrical systems and the connections required for testing, commissioning and operation.",
    capabilities: [
      "Switchgear and electrical panels",
      "Cable systems",
      "LV control panels",
      "AC and DC auxiliary systems",
      "Control and protection circuits",
      "RTU and telecommunication connections",
    ],
    relatedProjectSlugs: ["delta-regional-control-center"],
    status: "verified",
  },
  {
    slug: "power-quality",
    title: "Power Quality & Energy Solutions",
    summary: "Measurement and analysis for electrical power quality and energy use.",
    intro:
      "AFAAQ supports power-quality measurement and electrical performance checks using dedicated test equipment.",
    capabilities: ["Power quality measurement", "Electrical performance checks", "Energy monitoring support", "Thermal inspection"],
    standards: ["IEEE 519", "IEC 61000"],
    relatedProjectSlugs: [],
    status: "verified",
  },
  {
    slug: "operation-maintenance",
    title: "Operation & Maintenance",
    summary: "Inspection, maintenance and technical support for electrical systems.",
    intro:
      "AFAAQ supports electrical assets after commissioning through inspection, testing, troubleshooting and maintenance work.",
    capabilities: ["Preventive maintenance", "Electrical inspection", "Troubleshooting", "Testing support", "Operational technical support"],
    relatedProjectSlugs: [],
    status: "verified",
  },
  {
    slug: "engineering-consultancy",
    title: "Engineering & Consultancy",
    summary: "Technical review and engineering support for electrical projects.",
    intro:
      "AFAAQ provides engineering support for project review, technical interfaces, testing plans and execution requirements.",
    capabilities: ["Technical review", "Engineering support", "Testing procedures", "Project interface review", "Site technical support"],
    relatedProjectSlugs: [],
    status: "verified",
  },
  {
    slug: "training",
    title: "Training & Capacity Building",
    summary: "Technical training for electrical testing, protection and control work.",
    intro:
      "AFAAQ provides technical training to help engineers and technicians build practical knowledge in electrical systems.",
    capabilities: ["Testing fundamentals", "Protection systems", "Control systems", "SCADA and automation", "Practical site knowledge"],
    relatedProjectSlugs: [],
    status: "verified",
  },
];

const primaryServiceSlugs = ["testing-commissioning", "protection-control"] as const;

export const primaryServices = services.filter((service) =>
  primaryServiceSlugs.includes(service.slug as (typeof primaryServiceSlugs)[number]),
);

export const supportingServices = services.filter((service) =>
  !primaryServiceSlugs.includes(service.slug as (typeof primaryServiceSlugs)[number]),
);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
