import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const parts = [
  "scripts/assets/home-hero/part-01.txt",
  "scripts/assets/home-hero/part-02.txt",
  "scripts/assets/home-hero/part-03.txt",
  "scripts/assets/home-hero/part-04.txt",
  "scripts/assets/home-hero/part-05.txt",
  "scripts/assets/home-hero/part-06.txt",
  "scripts/assets/home-hero/part-07.txt",
];

const encoded = (
  await Promise.all(parts.map((part) => readFile(resolve(root, part), "utf8")))
).join("");

const buffer = Buffer.from(encoded, "base64");
const expectedBytes = 49298;
const expectedSha256 =
  "821808867b05d135576a15ede1a7971d0bd008af3828bf7164e8d75265349c37";

if (buffer.byteLength !== expectedBytes) {
  throw new Error(
    `Home hero asset size mismatch: expected ${expectedBytes}, got ${buffer.byteLength}`,
  );
}

const actualSha256 = createHash("sha256").update(buffer).digest("hex");

if (actualSha256 !== expectedSha256) {
  throw new Error(
    `Home hero asset checksum mismatch: expected ${expectedSha256}, got ${actualSha256}`,
  );
}

const target = resolve(
  root,
  "public/images/home/home-substation-original.avif",
);

await mkdir(dirname(target), { recursive: true });
await writeFile(target, buffer);

console.log(
  `Home hero asset ready: ${buffer.byteLength} bytes (${actualSha256.slice(0, 12)}...)`,
);
