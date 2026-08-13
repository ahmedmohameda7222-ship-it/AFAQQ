import assert from "node:assert/strict";
import { resolveSiteUrl } from "../src/lib/site-url.ts";

const cases = [
  { name: "empty value falls back", args: [""], expected: "https://afaaq-arab.example.invalid/" },
  { name: "whitespace falls back", args: ["   "], expected: "https://afaaq-arab.example.invalid/" },
  { name: "invalid first value uses valid second value", args: ["://bad", "preview.vercel.app"], expected: "https://preview.vercel.app/" },
  { name: "hostname receives https protocol", args: ["afaaq.example.com"], expected: "https://afaaq.example.com/" },
  { name: "https URL is preserved", args: ["https://afaaq.example.com/path"], expected: "https://afaaq.example.com/path" },
];

for (const testCase of cases) {
  const actual = resolveSiteUrl(...testCase.args).toString();
  assert.equal(actual, testCase.expected, testCase.name);
}

console.log(`site-url: ${cases.length} cases passed`);
