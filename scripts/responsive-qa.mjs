import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = (process.env.QA_BASE_URL || "").replace(/\/$/, "");
if (!baseUrl) throw new Error("QA_BASE_URL is required");

const pages = [
  ["home", "/"],
  ["services", "/services"],
  ["projects", "/projects"],
  ["about", "/about"],
  ["contact", "/contact"],
];

const viewports = [
  ["mobile", { width: 390, height: 844 }],
  ["tablet", { width: 768, height: 1024 }],
  ["laptop", { width: 1366, height: 768 }],
  ["desktop", { width: 1920, height: 1080 }],
];

const outDir = path.resolve("qa-artifacts");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const report = [];

for (const [viewportName, viewport] of viewports) {
  const context = await browser.newContext({ viewport });

  for (const [pageName, route] of pages) {
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];

    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    await page.waitForTimeout(1800);

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const header = document.querySelector("header");
      const h1 = document.querySelector("h1");
      const footer = document.querySelector("footer");
      const active = Array.from(document.querySelectorAll('[aria-current="page"]')).map((node) => node.textContent?.trim()).filter(Boolean);
      const brokenImages = Array.from(document.images)
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }));
      const smallTargets = Array.from(document.querySelectorAll("a,button,input,select,textarea"))
        .map((node) => {
          const rect = node.getBoundingClientRect();
          return {
            tag: node.tagName.toLowerCase(),
            text: (node.textContent || node.getAttribute("aria-label") || node.getAttribute("name") || "").trim().slice(0, 80),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          };
        })
        .filter((item) => item.width > 0 && item.height > 0 && item.width < 44 && item.height < 44)
        .slice(0, 30);

      return {
        title: document.title,
        clientWidth: doc.clientWidth,
        scrollWidth: doc.scrollWidth,
        horizontalOverflow: doc.scrollWidth - doc.clientWidth,
        header: header ? {
          height: Math.round(header.getBoundingClientRect().height),
          position: getComputedStyle(header).position,
        } : null,
        h1: h1 ? {
          text: h1.textContent?.trim(),
          fontSize: getComputedStyle(h1).fontSize,
          lineHeight: getComputedStyle(h1).lineHeight,
          width: Math.round(h1.getBoundingClientRect().width),
        } : null,
        footerPresent: Boolean(footer),
        activeNav: active,
        brokenImages,
        smallTargets,
      };
    });

    let mobileMenu = null;
    if (viewport.width < 768) {
      const menu = page.getByRole("button", { name: "Menu" });
      if (await menu.count()) {
        await menu.click();
        await page.waitForTimeout(150);
        mobileMenu = await page.evaluate(() => {
          const dialog = document.querySelector('[role="dialog"][aria-label="Site navigation"]');
          const current = dialog?.querySelector('[aria-current="page"]');
          return {
            open: Boolean(dialog),
            bodyOverflow: document.body.style.overflow,
            activeItem: current?.textContent?.trim() || null,
          };
        });
        await page.screenshot({ path: path.join(outDir, `${viewportName}-${pageName}-menu.png`), fullPage: false });
        await page.keyboard.press("Escape");
      }
    }

    await page.screenshot({ path: path.join(outDir, `${viewportName}-${pageName}.png`), fullPage: true });

    report.push({
      viewport: viewportName,
      dimensions: viewport,
      page: pageName,
      route,
      status: response?.status() ?? null,
      url: page.url(),
      ...metrics,
      mobileMenu,
      consoleErrors,
      pageErrors,
    });

    await page.close();
  }

  await context.close();
}

await browser.close();

await writeFile(path.join(outDir, "report.json"), JSON.stringify(report, null, 2));

const failures = report.filter((entry) =>
  (entry.status && entry.status >= 400) ||
  entry.horizontalOverflow > 1 ||
  entry.brokenImages.length > 0 ||
  entry.pageErrors.length > 0 ||
  !entry.footerPresent ||
  (entry.dimensions.width < 768 && entry.mobileMenu && (!entry.mobileMenu.open || entry.mobileMenu.bodyOverflow !== "hidden"))
);

console.log(JSON.stringify({ audited: report.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
