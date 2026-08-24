type ServiceProcessVisualProps = {
  slug: string;
};

type ServiceVisualDefinition = {
  label: string;
  mode: "sequence" | "scope";
  items: readonly string[];
};

const serviceVisuals: Record<string, ServiceVisualDefinition> = {
  "testing-commissioning": {
    label: "Delivery Path",
    mode: "sequence",
    items: [
      "Engineering Review",
      "Inspection",
      "Primary / Secondary Testing",
      "Functional Testing",
      "Commissioning",
      "Energization / Handover",
    ],
  },
  "protection-control": {
    label: "Delivery Path",
    mode: "sequence",
    items: [
      "Engineering Review",
      "Relay Testing",
      "Wiring Checks",
      "Functional Verification",
      "Energization Support",
    ],
  },
  "electrical-installation": {
    label: "Technical Scope",
    mode: "scope",
    items: [
      "Switchgear & Panels",
      "Cable Systems",
      "AC / DC Auxiliary Systems",
      "Control & Protection Circuits",
      "RTU & Telecom Connections",
    ],
  },
  "power-quality": {
    label: "Technical Scope",
    mode: "scope",
    items: [
      "Power Quality Measurement",
      "Electrical Performance Checks",
      "Energy Monitoring Support",
      "Thermal Inspection",
    ],
  },
  "operation-maintenance": {
    label: "Technical Scope",
    mode: "scope",
    items: [
      "Preventive Maintenance",
      "Electrical Inspection",
      "Troubleshooting",
      "Testing Support",
      "Operational Technical Support",
    ],
  },
  "engineering-consultancy": {
    label: "Technical Scope",
    mode: "scope",
    items: [
      "Technical Review",
      "Engineering Support",
      "Testing Procedures",
      "Project Interface Review",
      "Site Technical Support",
    ],
  },
  training: {
    label: "Training Scope",
    mode: "scope",
    items: [
      "Testing Fundamentals",
      "Protection Systems",
      "Control Systems",
      "Secondary Systems",
      "Practical Site Knowledge",
    ],
  },
};

export function ServiceProcessVisual({ slug }: ServiceProcessVisualProps) {
  const definition = serviceVisuals[slug];
  if (!definition) return null;

  return (
    <section aria-label={definition.label} className="bg-[var(--brand-deep-navy)] text-white">
      <div className="h-1 w-full bg-[var(--brand-blue)]" aria-hidden="true" />
      <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white/68">
          {definition.label}
        </p>
        <div
          className={`mt-6 grid gap-0 ${definition.items.length >= 6 ? "lg:grid-cols-6" : definition.items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}
        >
          {definition.items.map((item, index) => (
            <div
              key={item}
              className={`relative min-w-0 border-t border-white/18 py-5 lg:border-t-0 lg:px-5 lg:py-2 ${index > 0 ? "lg:border-l" : ""}`}
            >
              {definition.mode === "sequence" ? (
                <span className="font-technical text-[0.72rem] font-semibold text-[var(--brand-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              <p className={`${definition.mode === "sequence" ? "mt-3" : "mt-0"} mb-0 text-[1rem] font-semibold leading-6 text-white sm:text-[1.05rem]`}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
