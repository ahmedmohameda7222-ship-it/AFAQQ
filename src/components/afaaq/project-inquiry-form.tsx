"use client";

import { FormEvent, useState } from "react";
import { company } from "@/content/company";

type ProjectInquiryFormProps = {
  serviceOptions: readonly string[];
  defaultService?: string;
  defaultProject?: string;
  defaultVoltage?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const MAX_FILES = 3;
const MAX_TOTAL_FILE_BYTES = 3 * 1024 * 1024;

export function ProjectInquiryForm({
  serviceOptions,
  defaultService = "",
  defaultProject = "",
  defaultVoltage = "",
}: ProjectInquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const files = formData
      .getAll("attachments")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (files.length > MAX_FILES) {
      setStatus("error");
      setMessage(`Attach no more than ${MAX_FILES} files.`);
      return;
    }

    const totalFileBytes = files.reduce((total, file) => total + file.size, 0);
    if (totalFileBytes > MAX_TOTAL_FILE_BYTES) {
      setStatus("error");
      setMessage("Attachments must be 3 MB or less in total.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/project-inquiry", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        throw new Error(result?.error || "We could not send your requirement. Please try again.");
      }

      setStatus("success");
      setMessage("AFAAQ's engineering team can reply directly to the email you provided.");
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your requirement. Please try again.");
    }
  }

  const fieldClass =
    "min-h-13 w-full min-w-0 max-w-full border-0 border-b border-[var(--rule)] bg-transparent px-0 py-4 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--muted)]/75 focus:border-[var(--brand-navy)]";
  const labelClass = "text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)] sm:text-xs";

  return (
    <form onSubmit={onSubmit} aria-busy={status === "submitting"} className="relative grid min-w-0 gap-x-8 md:grid-cols-2">
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="grid min-w-0 gap-2">
        <span className={labelClass}>Name *</span>
        <input name="name" className={fieldClass} autoComplete="name" maxLength={100} required />
      </label>
      <label className="mt-7 grid min-w-0 gap-2 md:mt-0">
        <span className={labelClass}>Company *</span>
        <input name="company" className={fieldClass} autoComplete="organization" maxLength={120} required />
      </label>
      <label className="mt-7 grid min-w-0 gap-2">
        <span className={labelClass}>Business Email *</span>
        <input name="email" type="email" inputMode="email" className={fieldClass} autoComplete="email" maxLength={160} required />
      </label>
      <label className="mt-7 grid min-w-0 gap-2">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" inputMode="tel" className={fieldClass} autoComplete="tel" maxLength={50} />
      </label>
      <label className="mt-7 grid min-w-0 gap-2">
        <span className={labelClass}>Service Required *</span>
        <select name="service" className={fieldClass} defaultValue={defaultService} required>
          <option value="" disabled>Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </label>
      <label className="mt-7 grid min-w-0 gap-2">
        <span className={labelClass}>Project / Site Location</span>
        <input name="location" className={fieldClass} maxLength={160} />
      </label>

      {defaultProject ? (
        <label className="mt-7 grid min-w-0 gap-2 md:col-span-2">
          <span className={labelClass}>Reference Project</span>
          <input name="project" className={`${fieldClass} cursor-default`} defaultValue={defaultProject} maxLength={160} readOnly />
        </label>
      ) : (
        <input type="hidden" name="project" value="" />
      )}

      <label className="mt-7 grid min-w-0 gap-2 md:col-span-2">
        <span className={labelClass}>Voltage / System Level</span>
        <input
          name="voltage"
          className={fieldClass}
          defaultValue={defaultVoltage}
          maxLength={80}
          placeholder="Example: 66 kV, 220 kV, MV"
        />
      </label>
      <label className="mt-7 grid min-w-0 gap-2 md:col-span-2">
        <span className={labelClass}>Technical Requirement / Scope *</span>
        <textarea name="scope" rows={6} className={`${fieldClass} min-h-40 resize-y`} minLength={20} maxLength={5000} required />
      </label>

      <label className="mt-7 grid min-w-0 gap-3 md:col-span-2">
        <span className={labelClass}>Technical Files <span className="normal-case tracking-normal">(optional)</span></span>
        <span className="block border border-[var(--rule)] bg-[var(--surface)] px-4 py-4 sm:px-5">
          <input
            name="attachments"
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
            className="block w-full min-w-0 max-w-full overflow-hidden text-[0.82rem] text-[var(--muted)] file:mr-4 file:min-h-11 file:border-0 file:bg-[var(--brand-deep-navy)] file:px-4 file:py-2.5 file:text-[0.82rem] file:font-semibold file:text-white sm:text-sm sm:file:text-sm"
          />
        </span>
        <span className="text-[0.75rem] leading-5 text-[var(--muted)] sm:text-xs">Up to 3 files, 3 MB total. PDF, Word, Excel, JPG or PNG.</span>
      </label>

      <div className="mt-8 min-w-0 md:col-span-2 md:mt-9">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-[52px] w-full max-w-full items-center justify-between gap-6 rounded-[var(--radius-xs)] bg-[var(--brand-deep-navy)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-navy)] disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:gap-8"
        >
          <span className="min-w-0">{status === "submitting" ? "Sending Requirement…" : "Send Project Requirement"}</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none">
            <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>

        <div className="mt-5 min-h-6" aria-live="polite">
          {status === "success" ? (
            <div role="status" className="border-l-4 border-[var(--brand-blue)] bg-[var(--surface)] px-5 py-4 sm:px-6 sm:py-5">
              <p className="font-display m-0 text-[1.2rem] font-semibold tracking-[-0.02em] text-[var(--brand-deep-navy)]">
                Requirement received
              </p>
              <p className="mb-0 mt-2 max-w-2xl text-[0.95rem] leading-6 text-[var(--muted)]">{message}</p>
            </div>
          ) : status === "error" ? (
            <div role="alert" className="border-l-4 border-[#9f2f2f] bg-[#fff7f7] px-5 py-4 sm:px-6 sm:py-5">
              <p className="font-display m-0 text-[1.2rem] font-semibold tracking-[-0.02em] text-[#7d2323]">
                Unable to send requirement
              </p>
              <p className="mb-0 mt-2 max-w-2xl text-[0.95rem] leading-6 text-[var(--muted)]">{message}</p>
              <a href={`mailto:${company.email}`} className="mt-3 inline-flex min-h-11 items-center font-semibold text-[var(--brand-navy)] underline decoration-[var(--brand-blue)] underline-offset-4">
                Email AFAAQ directly
              </a>
            </div>
          ) : (
            <p className="m-0 max-w-xl text-[0.78rem] leading-5 text-[var(--muted)]">
              Your requirement is sent directly to AFAAQ&apos;s engineering contact. Required fields are marked with *.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
