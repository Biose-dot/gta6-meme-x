// main.ts — the hand-in step for this make.fun entry (gta6-meme-x-01).
//
// The entry itself is a post on X; this program's only job is to carry
// POST.json (which names that post) from the bot directory — the
// checked-out repository — into the output directory, where the grader
// picks it up. It uses nothing but the Node.js standard library, reads
// no network and no clock, and touches no file outside those two
// directories, so every run writes exactly the same bytes.

import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

// Without POST.json there is no entry to hand in: fail loudly instead
// of letting the grader find an empty output directory.
if (!existsSync(source)) {
  console.error(`main.ts: POST.json not found in the bot directory (${source}); nothing to hand in.`);
  process.exit(1);
}

// Prepare the output directory. The grader's filesystem keeps the
// parent of /output read-only, so the directory itself must never be
// removed — only the entries inside it are cleared. That way a re-run
// into the same directory starts from a clean slate and still works.
mkdirSync(outputDir, { recursive: true });
for (const entry of readdirSync(outputDir)) {
  rmSync(join(outputDir, entry), { recursive: true, force: true });
}

copyFileSync(source, target);

// Say what was handed in, so a human reading the run log can see at a
// glance that the entry's post file landed, and how large it is.
console.log(`main.ts: handed in POST.json (${statSync(target).size} bytes) at ${target}.`);
