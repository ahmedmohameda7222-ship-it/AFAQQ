"use client";

import { FormEvent, useState } from "react";
import { company } from "@/content/company";

export function ProjectInquiryForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const business = String(form.get("company") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const location = String(form.get("location") ?? "").trim();
    const voltage = String(form.get("voltage") ?? "").trim();
    const scope = String(form.get("scope") ?? "").trim();

    if (!name || !business || !email || !service || !scope) {
      setError("Please complete the required fields.");
      return;
    }

    const subject = `Project requirement — ${service}`;
    const body = [
      `Name: ${name}`,
      `Company: ${business}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Service: ${service}`,
      location ? `Project / Site Location: ${location}` : "",
      voltage ? `Voltage / System Level: ${voltage}` : "",
      "",
      "Technical Requirement / Scope:",
      scope,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldClass =
    "min-h-13 w-full border-0 border-b border-[var(--rule)] bg-transparent px-0 py-4 text-[1rem] text-[var(--ink)] outline-none placeholder:text-[var(--muted)]/75 focus:border-[var(--ink)]";

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 md:grid-cols-2" noValidate>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Name *</span>
        <input name="name" className={fieldClass} autoComplete="name" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Company *</span>
        <input name="company" className={fieldClass} autoComplete="organization" />
      </label>
      <label className="mt-7 grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Business Email *</span>
        <input name="email" type="email" className={fieldClass} autoComplete="email" />
      </label>
      <label className="mt-7 grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Phone</span>
        <input name="phone" type="tel" className={fieldClass} autoComplete="tel" />
      </label>
      <label className="mt-7 grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Service Required *</span>
        <select name="service" className={fieldClass} defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Testing & Commissioning</option>
          <option>Protection & Control</option>
          <option>SCADA & Automation</option>
          <option>Electrical Installation</option>
          <option>Power Quality</option>
          <option>Operation & Maintenance</option>
          <option>Engineering & Consultancy</option>
          <option>Training</option>
        </select>
      </label>
      <label className="mt-7 grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Project / Site Location</span>
        <input name="location" className={fieldClass} />
      </label>
      <label className="mt-7 grid gap-2 md:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Voltage / System Level</span>
        <input name="voltage" className={fieldClass} placeholder="Example: 66 kV, 220 kV, MV" />
      </label>
      <label className="mt-7 grid gap-2 md:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">Technical Requirement / Scope *</span>
        <textarea name="scope" rows={6} className={`${fieldClass} resize-y`} />
      </label>

      <div className="mt-9 md:col-span-2">
        {error ? <p className="mb-4 text-sm font-medium" role="alert">{error}</p> : null}
        <button
          type="submit"
          className="group inline-flex min-h-[52px] items-center justify-between gap-8 rounded-[var(--radius-xs)] bg-[var(--ink)] px-5 text-sm font-semibold text-[var(--canvas)] transition-colors hover:bg-[var(--graphite)]"
        >
          <span>Send Project Requirement</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
            <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
        <p className="mt-4 max-w-xl text-xs leading-5 text-[var(--muted)]">
          This opens your email app with the project details ready to send to AFAAQ.
        </p>
      </div>
    </form>
  );
}
