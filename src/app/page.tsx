import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ArrowLink } from "@/components/primitives/arrow-link";
import { PrimaryAction } from "@/components/primitives/primary-action";
import { SectionLabel } from "@/components/primitives/section-label";
import { AboutBrandArtwork } from "@/components/afaaq/about-brand-artwork";
import { ExecutionTrack } from "@/components/afaaq/execution-track";
import { FeaturedProjectDossier } from "@/components/afaaq/project-dossier";
import { ProjectShowcaseRail } from "@/components/afaaq/project-showcase-rail";
import { RelationshipRail } from "@/components/afaaq/relationship-rail";
import { ServiceIndex } from "@/components/afaaq/service-index";
import { clients, companyFacts } from "@/content/company";
import { verifiedProjects } from "@/content/projects";

const voltageExperience = [
  ["220", "kV", "Testing & Commissioning"],
  ["66", "kV", "Protection & Control"],
  ["11", "kV", "Electrical Installation"],
] as const;

const supportingDisciplines = [
  "Electrical Installation",
  "Power Quality",
  "Operation & Maintenance",
  "Engineering Support",
] as const;

const credibilityFacts = companyFacts.filter(([, label]) =>
  label === "Substations delivered" || label === "of EETC control centers project experience"
);

const featuredProject = verifiedProjects[0];
const projectRail = featuredProject
  ? verifiedProjects.filter((project) => project.slug !== featuredProject.slug)
  : verifiedProjects;

export default function HomePage() {
  const featuredIndex = featuredProject
    ? verifiedProjects.findIndex((project) => project.slug === featuredProject.slug)
    : -1;
  const featuredNumber = featuredIndex >= 0 ? String(featuredIndex + 1).padStart(2, "0") : "01";

  return (
    <>
      <section className="relative isolate overflow-hidden pt-8 sm:pt-10 md:pt-12 lg:min-h-[690px] lg:pt-0 xl:min-h-[730px]">
        <Container className="relative z-10">
          <div className="lg:flex lg:min-h-[690px] lg:items-center xl:min-h-[730px]">
            <div className="min-w-0 lg:w-[55%] lg:py-16 xl:w-[52%] xl:py-18">
              <SectionLabel>Electrical Engineering & Contracting</SectionLabel>

              <h1 className="mt-5 max-w-[14.5ch] text-[clamp(2.9rem,5vw,4.9rem)] font-medium leading-[0.96] tracking-[-0.052em] text-[var(--ink)] sm:mt-6">
                Electrical testing, commissioning and protection for power systems.
              </h1>

              <p className="mt-6 max-w-[38rem] text-[1.1rem] leading-7 text-[var(--muted)] sm:mt-7 md:text-[1.2rem] md:leading-8">
                AFAAQ ARAB supports utilities, EPC contractors and power-system teams across substations and control infrastructure, from electrical installation and system integration through testing, energization and handover.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
                <PrimaryAction href="/contact">Discuss a Project Scope</PrimaryAction>
                <ArrowLink href="/projects">View Our Projects</ArrowLink>
              </div>
            </div>
          </div>
        </Container>

        <div className="relative z-0 mt-7 overflow-hidden sm:mt-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[64%] xl:w-[62%]">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:h-full lg:aspect-auto">
            <Image
              src="/images/home/home-substation-original-1440.jpg"
              alt="High-voltage electrical substation at sunset."
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 64vw"
              className="object-cover object-center lg:object-[58%_center]"
            />
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, var(--canvas) 0%, color-mix(in srgb, var(--canvas) 72%, transparent) 9%, color-mix(in srgb, var(--canvas) 24%, transparent) 20%, transparent 34%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, var(--canvas) 0%, var(--canvas) 8%, color-mix(in srgb, var(--canvas) 92%, transparent) 20%, color-mix(in srgb, var(--canvas) 58%, transparent) 37%, color-mix(in srgb, var(--canvas) 14%, transparent) 53%, transparent 66%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="pb-18 pt-12 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16">
        <Container>
          <div className="border-y border-[var(--rule)] py-7 sm:py-8 md:py-10">
            <SectionLabel>Power System Experience</SectionLabel>

            <div className="mt-7 grid grid-cols-3 border-t border-[var(--rule)] sm:mt-8">
              {voltageExperience.map(([value, unit, discipline]) => (
                <div
                  key={value}
                  className="min-w-0 border-r border-[var(--rule)] py-6 pr-3 last:border-r-0 sm:py-7 sm:pr-5 md:py-8 md:pr-8"
                >
                  <div className="flex items-end gap-1.5 sm:gap-2">
                    <span className="font-technical text-[clamp(2.7rem,5.7vw,4.9rem)] font-medium leading-none tracking-[-0.055em]">
                      {value}
                    </span>
                    <span className="font-technical mb-1 text-[0.8rem] font-medium uppercase tracking-[0.06em] text-[var(--muted)] sm:text-[0.84rem] md:mb-2">
                      {unit}
                    </span>
                  </div>
                  <p className="mb-0 mt-5 max-w-[17rem] text-[0.96rem] font-medium leading-6 tracking-[-0.012em] sm:text-[1.02rem] md:text-[1.06rem]">
                    {discipline}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--rule)] pt-5 sm:pt-6">
              <p className="font-technical m-0 text-[0.78rem] font-medium uppercase tracking-[0.09em] text-[var(--muted)] sm:text-[0.8rem]">
                Company Proof
              </p>
              <div className="mt-4 grid border-t border-[var(--rule)] md:grid-cols-2">
                {credibilityFacts.map(([value, label], index) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 py-5 sm:gap-5 sm:py-6 md:px-7 ${index === 0 ? "md:border-r md:border-[var(--rule)] md:pl-0" : "md:pr-0"}`}
                  >
                    <span className="font-technical text-[clamp(1.7rem,3vw,2.8rem)] font-medium leading-none tracking-[-0.045em]">
                      {value}
                    </span>
                    <span className="text-[0.98rem] leading-6 text-[var(--muted)] sm:text-[1.02rem]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {featuredProject ? (
        <section className="pb-20 sm:pb-24 md:pb-28">
          <Container>
            <div className="border-t border-[var(--rule)] pt-7 sm:pt-8 md:pt-10">
              <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
                <div className="min-w-0 md:col-span-8">
                  <SectionLabel>Major Projects</SectionLabel>
                  <h2 className="mt-5 max-w-[22ch] text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[0.99] tracking-[-0.046em] sm:mt-6">
                    Project references across regional control centers and solar-power infrastructure.
                  </h2>
                </div>
                <div className="md:col-span-3 md:col-start-10 md:text-right">
                  <ArrowLink href="/projects">View All Projects</ArrowLink>
                </div>
              </div>

              <FeaturedProjectDossier project={featuredProject} projectNumber={featuredNumber} />
              <ProjectShowcaseRail projects={projectRail} allProjects={verifiedProjects} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-16 sm:pb-18 md:pb-22">
        <Container>
          <RelationshipRail names={clients} />
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-18 text-[var(--canvas)] sm:py-22 md:py-26">
        <Container>
          <SectionLabel>Core Technical Services</SectionLabel>
          <h2 className="mt-5 max-w-[18ch] text-[clamp(2.35rem,4.8vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.047em] sm:mt-6">
            Technical disciplines for substations, protection and control.
          </h2>

          <ServiceIndex />

          <div className="mt-10 border-t border-white/20 pt-6 sm:mt-12 sm:pt-7">
            <p className="font-technical m-0 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-white/58">
              Supporting Engineering Disciplines
            </p>
            <div className="mt-5 grid border-y border-white/16 lg:grid-cols-4">
              {supportingDisciplines.map((discipline, index) => (
                <div
                  key={discipline}
                  className="grid min-h-24 grid-cols-[auto_1fr] gap-4 border-b border-white/16 py-5 sm:min-h-26 lg:min-h-28 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <span className="font-technical text-[0.74rem] font-medium text-white/50">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                  <span className="text-[1.08rem] font-medium leading-6 text-white/88 sm:text-[1.14rem]">
                    {discipline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-18 sm:py-22 md:py-26">
        <Container>
          <div className="grid gap-7 sm:gap-8 md:grid-cols-12 md:items-end md:gap-8">
            <div className="min-w-0 md:col-span-5">
              <SectionLabel>Project Execution</SectionLabel>
              <h2 className="mt-5 max-w-[14ch] text-[clamp(2.2rem,3.9vw,3.7rem)] font-medium leading-[1] tracking-[-0.043em] sm:mt-6">
                A controlled path from engineering review to energization.
              </h2>
            </div>
            <p className="m-0 max-w-xl text-[1.04rem] leading-7 text-[var(--muted)] md:col-span-6 md:col-start-7 md:text-[1.08rem] md:leading-8">
              Each scope moves through documented review, approved procedures, installation, functional testing, commissioning and final records for handover.
            </p>
          </div>
          <ExecutionTrack />
        </Container>
      </section>

      <section className="pb-18 sm:pb-22 md:pb-26">
        <Container>
          <div className="grid gap-8 border-t border-[var(--rule)] pt-8 sm:gap-10 sm:pt-10 md:grid-cols-12 md:items-center md:gap-10">
            <div className="min-w-0 md:col-span-6">
              <AboutBrandArtwork variant="compact" />
            </div>
            <div className="min-w-0 md:col-span-5 md:col-start-8">
              <SectionLabel>About AFAAQ</SectionLabel>
              <h2 className="mt-5 max-w-[17ch] text-[clamp(2.1rem,3.5vw,3.35rem)] font-medium leading-[1.01] tracking-[-0.041em] sm:mt-6">
                A Cairo-based engineering contractor focused on power-system delivery.
              </h2>
              <p className="mt-5 max-w-xl text-[1.03rem] leading-7 text-[var(--muted)] sm:mt-6 md:text-[1.08rem] md:leading-8">
                Founded in 2017, AFAAQ ARAB delivers electrical contracting, testing and commissioning, protection and control work for power-system environments.
              </p>
              <div className="mt-7 grid grid-cols-2 border-y border-[var(--rule)]">
                {companyFacts.slice(0, 1).concat(companyFacts.slice(3, 4)).map(([value, label], index) => (
                  <div key={label} className={`py-5 ${index === 0 ? "border-r border-[var(--rule)] pr-5" : "pl-5"}`}>
                    <p className="font-technical m-0 text-[1.45rem] font-medium tracking-[-0.04em]">{value}</p>
                    <p className="mb-0 mt-2 text-[0.9rem] leading-5 text-[var(--muted)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <ArrowLink href="/about">About AFAAQ</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--graphite)] py-18 text-[var(--canvas)] sm:py-22 md:py-26">
        <Container>
          <div className="grid gap-8 border-t border-white/16 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-12 md:items-end">
            <div className="min-w-0 md:col-span-6">
              <SectionLabel>Project Inquiry</SectionLabel>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(2.4rem,5vw,4.7rem)] font-medium leading-[0.97] tracking-[-0.05em] sm:mt-6">
                Have a testing, commissioning or protection scope?
              </h2>
            </div>
            <div className="min-w-0 md:col-span-4 md:col-start-9">
              <p className="m-0 max-w-md text-[1rem] leading-7 text-white/72">
                Discuss your project requirements directly with AFAAQ&apos;s engineering team.
              </p>
              <div className="mt-6">
                <PrimaryAction href="/contact" tone="light">Discuss a Project Scope</PrimaryAction>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
