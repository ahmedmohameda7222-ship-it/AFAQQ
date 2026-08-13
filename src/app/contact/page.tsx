import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectInquiryForm } from "@/components/afaaq/project-inquiry-form";
import { SectionLabel } from "@/components/primitives/section-label";
import { company } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Discuss a Project Scope",
  description: "Send AFAAQ ARAB your testing, commissioning, protection, SCADA or electrical project requirement.",
  path: "/contact",
});

export default function ContactPage() {
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
              Send the project scope, service needed and system details. We will have the information needed to start the discussion.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-14 border-t border-[var(--rule)] pt-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7"><ProjectInquiryForm /></div>
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
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Useful Information</p>
                <p className="mb-0 mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Include the voltage level, project location, required service and any important technical notes.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
