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
      setMessage("Requirement received. AFAAQ's engineering team can reply directly to the email you provided.");
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your requirement. Please try again.");
    }
  }

  const fieldClass =
    "min-h-13 w-full border-0 border-b border-[var(--rule)] bg-transparent px-0 py-4 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--muted)]/75 focus:border-[var(--ink)]";
  const labelClass = "text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]";

  return (
    <form onSubmit={onSubmit} className="relative grid gap-x-8 md:grid-cols-2">
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="grid gap-2">
        <span className={labelClass}>Name *</span>
        <input name="name" className={fieldClass} autoComplete="name" maxLength={100} required />
      </label>
      <label className="grid gap-2">
        <span className={labelClass}>Company *</span>
        <input name="company" className={fieldClass} autoComplete="organization" maxLength={120} required />
      </label>
      <label className="mt-7 grid gap-2">
        <span className={labelClass}>Business Email *</span>
        <input name="email" type="email" className={fieldClass} autoComplete="email" maxLength={160} required />
      </label>
      <label className="mt-7 grid gap-2">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" className={fieldClass} autoComplete="tel" maxLength={50} />
      </label>
      <label className="mt-7 grid gap-2">
        <span className={labelClass}>Service Required *</span>
        <select name="service" className={fieldClass} defaultValue={defaultService} required>
          <option value="" disabled>Select a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </label>
      <label className="mt-7 grid gap-2">
        <span className={labelClass}>Project / Site Location</span>
        <input name="location" className={fieldClass} maxLength={160} />
      </label>

      {defaultProject ? (
        <label className="mt-7 grid gap-2 md:col-span-2">
          <span className={labelClass}>Reference Project</span>
          <input name="project" className={`${fieldClass} cursor-default`} defaultValue={defaultProject} maxLength={160} readOnly />
        </label>
      ) : (
        <input type="hidden" name="project" value="" />
      )}

      <label className="mt-7 grid gap-2 md:col-span-2">
        <span className={labelClass}>Voltage / System Level</span>
        <input
          name="voltage"
          className={fieldClass}
          defaultValue={defaultVoltage}
          maxLength={80}
          placeholder="Example: 66 kV, 220 kV, MV"
        />
      </label>
      <label className="mt-7 grid gap-2 md:col-span-2">
        <span className={labelClass}>Technical Requirement / Scope *</span>
        <textarea name="scope" rows={6} className={`${fieldClass} resize-y`} minLength={20} maxLength={5000} required />
      </label>

      <label className="mt-7 grid gap-3 md:col-span-2">
        <span className={labelClass}>Technical Files <span className="normal-case tracking-normal">(optional)</span></span>
        <input
          name="attachments"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
          className="block w-full border-b border-[var(--rule)] pb-4 text-sm text-[var(--muted)] file:mr-4 file:border-0 file:bg-[var(--ink)] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-[var(--canvas)]"
        />
        <span className="text-xs leading-5 text-[var(--muted)]">Up to 3 files, 3 MB total. PDF, Word, Excel, JPG or PNG.</span>
      </label>

      <div className="mt-9 md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-[52px] items-center justify-between gap-8 rounded-[var(--radius-xs)] bg-[var(--ink)] px-5 text-sm font-semibold text-[var(--canvas)] transition-colors hover:bg-[var(--graphite)] disabled:cursor-wait disabled:opacity-60"
        >
          <span>{status === "submitting" ? "Sending Requirement…" : "Send Project Requirement"}</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
            <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>

        <div className="mt-4 min-h-6" aria-live="polite">
          {message ? (
            <p className={`m-0 max-w-2xl text-sm leading-6 ${status === "success" ? "font-medium text-[var(--ink)]" : "text-[var(--muted)]"}`}>
              {message}{" "}
              {status === "error" ? <a href={`mailto:${company.email}`} className="font-semibold underline underline-offset-4">Email AFAAQ directly</a> : null}
            </p>
          ) : (
            <p className="m-0 max-w-xl text-xs leading-5 text-[var(--muted)]">
              Your requirement is sent directly to AFAAQ&apos;s engineering contact. Required fields are marked with *.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
