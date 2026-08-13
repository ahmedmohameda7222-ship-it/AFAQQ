import { NextResponse } from "next/server";
import { company } from "@/content/company";
import { services } from "@/content/services";

export const runtime = "nodejs";

const MAX_FILES = 3;
const MAX_TOTAL_FILE_BYTES = 3 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const allowedExtensions = new Set(["pdf", "doc", "docx", "xls", "xlsx", "png", "jpg", "jpeg"]);
const allowedServices = new Set([...services.map((service) => service.title), "Other / Not sure"]);
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function textField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function singleLineField(formData: FormData, key: string) {
  return textField(formData, key).replace(/[\r\n]+/g, " ").replace(/\s{2,}/g, " ");
}

function cleanFilename(filename: string) {
  return filename.replace(/[\\/\u0000-\u001f\u007f]/g, "-").slice(0, 120) || "attachment";
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  if (rateBuckets.size > 500) {
    for (const [key, bucket] of rateBuckets) {
      if (bucket.resetAt <= now) rateBuckets.delete(key);
    }
  }

  const existing = rateBuckets.get(ip);
  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX) return true;
  existing.count += 1;
  return false;
}

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site") {
    return NextResponse.json({ ok: false, error: "Request origin is not allowed." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return badRequest("Invalid form submission.");
  }

  const formData = await request.formData();

  // Honeypot: return a normal success response so automated spam receives no signal.
  if (textField(formData, "website")) {
    return NextResponse.json({ ok: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const name = singleLineField(formData, "name");
  const business = singleLineField(formData, "company");
  const email = singleLineField(formData, "email");
  const phone = singleLineField(formData, "phone");
  const service = singleLineField(formData, "service");
  const location = singleLineField(formData, "location");
  const voltage = singleLineField(formData, "voltage");
  const project = singleLineField(formData, "project");
  const scope = textField(formData, "scope");

  if (!name || !business || !email || !service || !scope) {
    return badRequest("Please complete all required fields.");
  }

  const limits: Array<[string, string, number]> = [
    ["Name", name, 100],
    ["Company", business, 120],
    ["Email", email, 160],
    ["Phone", phone, 50],
    ["Service", service, 80],
    ["Project location", location, 160],
    ["Voltage", voltage, 80],
    ["Project reference", project, 160],
    ["Scope", scope, 5000],
  ];

  for (const [label, value, maxLength] of limits) {
    if (value.length > maxLength) return badRequest(`${label} is too long.`);
  }

  if (scope.length < 20) {
    return badRequest("Please provide a little more detail about the technical requirement.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("Enter a valid business email address.");
  }

  if (!allowedServices.has(service)) {
    return badRequest("Select a valid service.");
  }

  const files = formData
    .getAll("attachments")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (files.length > MAX_FILES) {
    return badRequest(`Attach no more than ${MAX_FILES} files.`);
  }

  let totalFileBytes = 0;
  for (const file of files) {
    totalFileBytes += file.size;
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!allowedExtensions.has(extension)) {
      return badRequest("Attachments must be PDF, Word, Excel, JPG or PNG files.");
    }
  }

  if (totalFileBytes > MAX_TOTAL_FILE_BYTES) {
    return badRequest("Attachments must be 3 MB or less in total.");
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || company.email;

  if (!apiKey || !fromEmail) {
    console.error("Project inquiry email is not configured: RESEND_API_KEY or CONTACT_FROM_EMAIL is missing.");
    return NextResponse.json(
      { ok: false, error: "Online submission is temporarily unavailable. Please contact AFAAQ directly by email or phone." },
      { status: 503 },
    );
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: cleanFilename(file.name),
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    })),
  );

  const message = [
    "New AFAAQ website project inquiry",
    "",
    `Name: ${name}`,
    `Company: ${business}`,
    `Business email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    `Service required: ${service}`,
    project ? `Reference project: ${project}` : "",
    location ? `Project / site location: ${location}` : "",
    voltage ? `Voltage / system level: ${voltage}` : "",
    "",
    "Technical requirement / scope:",
    scope,
  ]
    .filter(Boolean)
    .join("\n");

  const payload: Record<string, unknown> = {
    from: fromEmail,
    to: [toEmail],
    reply_to: email,
    subject: `[Website Inquiry] ${service} — ${business}`,
    text: message,
  };

  if (attachments.length) payload.attachments = attachments;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!resendResponse.ok) {
    const providerError = await resendResponse.text();
    console.error("Resend project inquiry failure", resendResponse.status, providerError.slice(0, 500));
    return NextResponse.json(
      { ok: false, error: "We could not send your requirement right now. Please try again or contact AFAAQ directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
