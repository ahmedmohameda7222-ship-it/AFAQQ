/* eslint-disable @next/next/no-img-element */

type AboutBrandArtworkProps = {
  variant?: "compact" | "wide";
};

const services = [
  ["MV & HV", "Installation", "tower"],
  ["Protection", "& Control", "shield"],
  ["SCADA", "& Automation", "screen"],
  ["Testing", "& Commissioning", "test"],
  ["Power Quality", "Solutions", "wave"],
] as const;

function ServiceIcon({ type }: { type: (typeof services)[number][2] }) {
  if (type === "tower") {
    return <path d="M12 4 7.8 20M12 4l4.2 16M9.2 9h5.6M8.2 13h7.6M6.8 17h10.4M9.6 20 12 16l2.4 4" />;
  }
  if (type === "shield") {
    return <><path d="M12 3.5 18 6v5.2c0 4.2-2.5 7.2-6 9.3-3.5-2.1-6-5.1-6-9.3V6l6-2.5Z" /><path d="m9 12 2 2 4-4" /></>;
  }
  if (type === "screen") {
    return <><rect x="5" y="6" width="14" height="10" rx="0.5" /><path d="M9 20h6M12 16v4" /></>;
  }
  if (type === "test") {
    return <><rect x="7" y="5" width="10" height="15" rx="0.5" /><path d="M9.5 9h5M9.5 12h5M9.5 15h3" /><path d="M10 5V3.5h4V5" /></>;
  }
  return <path d="M4 12h3l2-5 3 10 2.5-7 2 4H20" />;
}

export function AboutBrandArtwork({ variant = "compact" }: AboutBrandArtworkProps) {
  const wide = variant === "wide";

  return (
    <div
      className={`relative isolate w-full overflow-hidden bg-white shadow-[0_1px_0_rgba(17,19,21,0.08)] ${wide ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/3]"}`}
      style={{ containerType: "inline-size" }}
      role="img"
      aria-label="AFAAQ ARAB engineering brand graphic with a high-voltage substation, service disciplines and the message Connecting Energy, Building Futures."
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-[43%] overflow-hidden [clip-path:polygon(21%_0,100%_0,100%_100%,0_100%,17%_58%)]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Transformer_at_substation.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052969]/10 via-transparent to-[#ef9d35]/12" />
        </div>

        <div className="absolute -bottom-[12%] left-[54%] top-[-10%] w-[3.1%] -skew-x-[27deg] bg-[#072f75]" />
        <div className="absolute -bottom-[12%] left-[57.2%] top-[-10%] w-[1.8%] -skew-x-[27deg] bg-[#0877e8]" />
        <div className="absolute -bottom-[12%] left-[59.2%] top-[-10%] w-[0.75%] -skew-x-[27deg] bg-white" />

        <div className="absolute left-[4.6%] top-[7%] flex items-center gap-[1.5cqw]">
          <img src="/brand/afaaq-mark-approved.webp" alt="" className="h-[8.2cqw] w-[8.2cqw] object-contain" />
          <span className="text-[3.7cqw] font-semibold leading-none tracking-[-0.035em] text-[#082a72]">AFAAQ</span>
        </div>

        <div className="absolute left-[4.6%] top-[26%] w-[51%]">
          <p className="m-0 text-[4.35cqw] font-semibold leading-[0.98] tracking-[-0.04em] text-[#082a72]">
            CONNECTING <span className="text-[#0877e8]">ENERGY</span>
          </p>
          <p className="m-0 mt-[0.5cqw] text-[4.35cqw] font-semibold leading-[0.98] tracking-[-0.04em] text-[#082a72]">BUILDING FUTURES</p>
          <div className="mt-[2.2cqw] h-[0.23cqw] w-[8cqw] bg-[#0877e8]" />
          <p className="m-0 mt-[2cqw] max-w-[45cqw] text-[1.78cqw] font-medium leading-[1.25] tracking-[-0.018em] text-[#565b61]">
            Reliable Electrical Solutions, Stronger Systems. Sustainable Future.
          </p>
        </div>

        <div className={`absolute left-[4.6%] bottom-[14%] grid w-[50%] grid-cols-3 gap-x-[1.4cqw] gap-y-[1.1cqw] ${wide ? "md:grid-cols-5" : ""}`}>
          {services.map(([title, subtitle, icon], index) => {
            const offsetClass = index >= 3
              ? wide
                ? "translate-x-[4cqw] md:translate-x-0"
                : "translate-x-[4cqw]"
              : "";

            return (
              <div key={title} className={`${offsetClass} flex min-w-0 items-center gap-[0.75cqw]`}>
                <span className="flex h-[3.6cqw] w-[3.6cqw] shrink-0 items-center justify-center rounded-full border-[0.15cqw] border-[#0877e8] text-[#0877e8]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" className="h-[2.15cqw] w-[2.15cqw]">
                    <ServiceIcon type={icon} />
                  </svg>
                </span>
                <span className="min-w-0">
                  <strong className="block whitespace-nowrap text-[1.18cqw] font-semibold leading-[1.05] text-[#082a72]">{title}</strong>
                  <span className="mt-[0.18cqw] block whitespace-nowrap text-[0.98cqw] leading-[1.05] text-[#565b61]">{subtitle}</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-[8.5%] items-center bg-[#082a72] px-[4.6%] text-white">
          <div className="flex items-center gap-[1.55cqw] whitespace-nowrap text-[1.02cqw] font-medium tracking-[0.025em]">
            <span>SAFETY</span><span className="text-[#58a5ff]">|</span>
            <span>QUALITY</span><span className="text-[#58a5ff]">|</span>
            <span>RELIABILITY</span><span className="text-[#58a5ff]">|</span>
            <span>COMMITMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
