import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectInquiryForm } from "@/components/afaaq/project-inquiry-form";
import { SectionLabel } from "@/components/primitives/section-label";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Discuss a Project Scope",
  description: "Send AFAAQ ARAB your testing, commissioning, protection, SCADA or electrical project requirement.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? "";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const serviceOptions = services.map((service) => service.title);
  const requestedService = firstParam(params.service);
  const defaultService = serviceOptions.includes(requestedService) ? requestedService : "";
  const defaultProject = firstParam(params.project).slice(0, 160);
  const defaultVoltage = firstParam(params.voltage).slice(0, 80);

  return (
    <>
      <section className="pb-16 pt-14 md:pb-20 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel>Discuss a Project Scope</SectionLabel>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,5.3rem)] font-medium leading-[0.96] tracking-[-0.052em]">
                Send AFAAQ your technical requirement.
              </h1>
            </div>
            <p className="m-0 max-w-lg text-[1.05rem] leading-8 text-[var(--muted)] md:col-span-4">
              Send the service, voltage level, project details and any useful technical files. The form keeps service or project context when you arrive from another AFAAQ page.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-14 border-t border-[var(--rule)] pt-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <ProjectInquiryForm
                serviceOptions={serviceOptions}
                defaultService={defaultService}
                defaultProject={defaultProject}
                defaultVoltage={defaultVoltage}
              />
            </div>
            <aside className="md:col-span-4 md:col-start-9">
              <div className="border-t border-[var(--rule)] pt-5">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Email</p>
                <a href={`mailto:${company.email}`} className="mt-3 block break-all text-lg font-medium">{company.email}</a>
              </div>
              <div className="mt-9 border-t border-[var(--rule)] pt-5">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Phone</p>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="mt-3 block text-lg font-medium">{company.phone}</a>
              </div>
              <div className="mt-9 border-t border-[var(--rule)] pt-5">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Office</p>
                <p className="mb-0 mt-3 text-lg font-medium">{company.location}</p>
              </div>
              <div className="mt-9 border-t border-[var(--rule)] pt-5">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">For Faster Review</p>
                <p className="mb-0 mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Include the voltage level, project location, required service, technical scope and relevant drawings or specifications where available.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
