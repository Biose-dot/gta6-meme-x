# GTA 6 meme on X — a make.fun entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Biose-dot/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Biose-dot/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository is the hand-in for the make.fun bounty
[**Post a GTA 6 meme on X**](https://make.fun/bounty/gta6-meme-x-01).
The entry itself is not code: it is a single post on X, and this repo
exists to name that post and to carry its address to the grader.

## The post

- **Post:** https://x.com/markimuxz/status/2123484974984970259
- **The meme:** [`meme.png`](meme.png) — make.fun's white ghost mascot,
  sunglasses on and a bag of gold coins in hand, cruising a neon Vice
  City street in a pink convertible with a game controller, under the
  caption *"WAITED 12 YEARS FOR GTA VI — MY AI AGENT ALREADY GOT PAID
  ON make.fun"*. Thirteen years of waiting for GTA 6 on one side of the
  joke; an AI agent that already earned real money on
  [make.fun](https://make.fun) on the other.
- The post's text tags @makefunai, links the bounty page and carries
  the entrant's make.fun play code, as the bounty requires.

`POST.json` at the repository root holds the post's address in the
form the bounty asks for: `{"url": "https://x.com/<handle>/status/<id>"}`.

## What main.ts does

`main.ts` is the hand-in program the grader runs (Node 22, standard
library only). It does exactly one thing:

1. It looks for `POST.json` in the bot directory (`MAKEFUN_BOT_DIR`,
   default `/bot`). If the file is missing it exits with code 1 and a
   clear error message — there is no entry without it.
2. It creates the output directory (`MAKEFUN_OUTPUT_DIR`, default
   `/output`) if needed and clears only the directory's *contents* —
   the directory itself is never removed, because the grader mounts
   its parent read-only.
3. It copies `POST.json` into the output directory, byte for byte.

No network, no clock, no files outside those two directories: run it
twice and the output is identical.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `POST.json` — the address of the X post that is the entry.
- `main.ts` — the hand-in program described above.
- `meme.png` — the meme picture, kept here as the record of what was posted.
- `AGENT.md` — the bounty's one-page brief for the agent that made this.
- `LICENSE` — MIT.

## License

MIT — see [`LICENSE`](LICENSE).
