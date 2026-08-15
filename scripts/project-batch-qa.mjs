import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const base = "http://127.0.0.1:3000";
await mkdir("qa-artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });
const cases = [
  ["mobile", { width: 390, height: 844 }],
  ["desktop", { width: 1440, height: 1000 }],
];
const report = [];

for (const [name, viewport] of cases) {
  const context = await browser.newContext({ viewport });
  for (const route of ["/projects", "/about"]) {
    const page = await context.newPage();
    const failures = [];
    page.on("pageerror", (err) => failures.push(`pageerror: ${err.message}`));
    page.on("response", (res) => { if (res.status() >= 400) failures.push(`${res.status()} ${res.url()}`); });
    const response = await page.goto(base + route, { waitUntil: "networkidle", timeout: 60000 });
    if (!response || response.status() >= 400) failures.push(`route status ${response?.status()}`);

    await page.evaluate(async () => {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(500, innerHeight * 0.7)) {
        scrollTo(0, y); await wait(70);
      }
      scrollTo(0, 0); await wait(150);
    });

    const data = await page.evaluate((route) => {
      const doc = document.documentElement;
      const text = document.body.innerText;
      const brokenImages = [...document.images].filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src);
      return {
        overflow: doc.scrollWidth - doc.clientWidth,
        brokenImages,
        sectorsPresent: /\bSectors\b/.test(text),
        rccPresent: text.includes("Canal Control Project (RCC)"),
        rccVoltagePresent: text.includes("220 kV / 66 kV / 22 kV"),
        fourProjectsPresent: text.includes("04") && text.includes("Four AFAAQ ARAB project references"),
        removedCompaniesPresent: ["Petrojet", "ENPPI", "Red Sea", "Orascom", "Arab Contractors", "Gama"].filter((x) => text.includes(x)),
        aoiPresent: text.includes("Arab Organization for Industrialization"),
        localProjectImages: [...document.images].map((img) => img.getAttribute("src") || "").filter((src) => src.includes("/images/projects/")),
        route,
      };
    }, route);

    if (data.overflow > 1) failures.push(`horizontal overflow ${data.overflow}px`);
    if (data.brokenImages.length) failures.push(`broken images ${data.brokenImages.join(", ")}`);
    if (route === "/projects") {
      if (!data.rccPresent) failures.push("RCC project missing");
      if (!data.rccVoltagePresent) failures.push("RCC voltage missing");
      if (!data.fourProjectsPresent) failures.push("four-project overview missing");
      if (data.localProjectImages.length < 4) failures.push(`expected 4 local project images, saw ${data.localProjectImages.length}`);
    }
    if (route === "/about") {
      if (data.sectorsPresent) failures.push("Sectors section still present");
      if (data.removedCompaniesPresent.length) failures.push(`removed companies present: ${data.removedCompaniesPresent.join(", ")}`);
      if (!data.aoiPresent) failures.push("Arab Organization for Industrialization missing");
    }

    await page.screenshot({ path: `qa-artifacts/${name}-${route.slice(1)}.png`, fullPage: true });
    report.push({ name, viewport, route, data, failures });
    await page.close();
  }
  await context.close();
}

await browser.close();
await writeFile("qa-artifacts/report.json", JSON.stringify(report, null, 2));
const failures = report.flatMap((r) => r.failures.map((f) => `${r.name} ${r.route}: ${f}`));
console.log(JSON.stringify({ report, failures }, null, 2));
if (failures.length) process.exit(1);
