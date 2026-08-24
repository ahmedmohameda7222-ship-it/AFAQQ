import type { Metadata } from "next";
import { ProjectInquiryForm } from "@/components/afaaq/project-inquiry-form";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/primitives/section-label";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Discuss a Project Scope",
  description: "Send AFAAQ ARAB your testing, commissioning, protection, control or electrical project requirement.",
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
      <section className="pb-14 pt-12 sm:pb-16 sm:pt-14 md:pb-20 md:pt-20">
        <Container>
          <div className="max-w-4xl">
            <SectionLabel>Discuss a Project Scope</SectionLabel>
            <h1 className="font-display mt-5 max-w-[15ch] text-[clamp(2.8rem,6vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.04em] sm:mt-6">
              Send AFAAQ your technical requirement.
            </h1>
            <p className="mb-0 mt-6 max-w-2xl text-[1.05rem] leading-7 text-[var(--muted)] sm:text-[1.1rem] sm:leading-8">
              Send the service, voltage level, project details and any useful technical files. Service and project context is retained when you arrive from another AFAAQ page.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 md:pb-32">
        <Container>
          <div className="grid gap-10 border-t border-[var(--rule)] pt-8 sm:gap-12 sm:pt-10 md:grid-cols-12 md:gap-10">
            <div className="min-w-0 md:col-span-7">
              <ProjectInquiryForm
                serviceOptions={serviceOptions}
                defaultService={defaultService}
                defaultProject={defaultProject}
                defaultVoltage={defaultVoltage}
              />
            </div>
            <aside className="min-w-0 border-t border-[var(--rule)] pt-7 md:col-span-4 md:col-start-9 md:border-t-0 md:pt-0">
              <div className="border-t border-[var(--rule)] pt-5 md:border-t">
                <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em]">Email</p>
                <a href={`mailto:${company.email}`} className="mt-2 inline-flex min-h-12 max-w-full items-center break-all text-[1rem] font-medium sm:mt-3 sm:text-lg">{company.email}</a>
              </div>
              <div className="mt-6 border-t border-[var(--rule)] pt-5 sm:mt-9">
                <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em]">Phone</p>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex min-h-12 items-center text-[1rem] font-medium sm:mt-3 sm:text-lg">{company.phone}</a>
              </div>
              <div className="mt-6 border-t border-[var(--rule)] pt-5 sm:mt-9">
                <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em]">Office</p>
                <p className="mb-0 mt-3 text-[1rem] font-medium sm:text-lg">{company.location}</p>
              </div>
              <div className="mt-6 border-t border-[var(--rule)] pt-5 sm:mt-9">
                <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[var(--muted)] sm:text-xs sm:tracking-[0.12em]">For Faster Review</p>
                <p className="mb-0 mt-3 max-w-sm text-[0.88rem] leading-6 text-[var(--muted)] sm:text-sm">
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
