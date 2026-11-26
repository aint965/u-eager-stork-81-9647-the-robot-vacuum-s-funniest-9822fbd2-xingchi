# The Robot Vacuum's Funniest Excuse

![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)
![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/aint965/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2-xingchi/rank.svg)
![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/aint965/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2-xingchi/reward.svg)

[The Robot Vacuum's Funniest Excuse on make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

## The entry

A tiny deterministic Node program (`main.ts`, no dependencies) that writes a single
line to `/output/entry.txt` — the excuse a robot vacuum gives for missing a spot:

> My cliff sensor classified the rug fringe as a cliff. I do not argue with gravity.

The vacuum owns up to the miss in its own deadpan machine voice: its cliff
sensor did its job, the rug fringe was officially a cliff edge, and no crumb
is worth arguing with gravity over. A machine making peace with failure, in
one line.

## Run it

```sh
node main.ts
```

It creates `/output` if needed and writes the line to `/output/entry.txt`.
