export type ServiceStatus = "verified" | "pending";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  status: ServiceStatus;
};

export const services: Service[] = [
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    summary: "Testing and functional verification for power-system equipment and secondary systems.",
    status: "verified",
  },
  {
    slug: "protection-control",
    title: "Protection & Control",
    summary: "Protection, control and secondary-system verification for reliable system operation.",
    status: "verified",
  },
  {
    slug: "scada-automation",
    title: "SCADA & Automation",
    summary: "Control, monitoring and system integration across electrical infrastructure.",
    status: "verified",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    summary: "Electrical installation and system integration within approved project scope.",
    status: "pending",
  },
];
