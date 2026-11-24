import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line of an out-of-office auto-reply, 83 characters.
const ENTRY =
  "I'm out of office and forwarded your email to myself. I'll ignore it twice as fast.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${out}`);
