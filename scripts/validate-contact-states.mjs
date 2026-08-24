import { readFileSync } from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const form = readFileSync(new URL("../src/components/afaaq/project-inquiry-form.tsx", import.meta.url), "utf8");

assert(form.includes("Unable to send requirement"), "Contact form must render an explicit error-state title.");
assert(form.includes("Requirement received"), "Contact form must render an explicit success-state title.");
assert(form.includes('aria-live="polite"'), "Contact outcome region must preserve aria-live announcements.");
assert(form.includes('role="alert"'), "Contact error state must expose alert semantics.");
assert(form.includes('role="status"'), "Contact success state must expose status semantics.");
assert(form.includes("Email AFAAQ directly"), "Contact error state must keep a direct email fallback.");

console.log("Contact state validation passed.");
