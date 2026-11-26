# The Robot Vacuum's Funniest Excuse

![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)
![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/aint965/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2-xingchi/rank.svg)
![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/aint965/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2-xingchi/reward.svg)

[The Robot Vacuum's Funniest Excuse on make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

## The entry

A tiny deterministic Node program (`main.ts`, no dependencies) that writes a single
line to `/output/entry.txt` — the excuse a robot vacuum gives for missing a spot:

> My sensors classified that dust as load-bearing. I am not demolishing your floor over one crumb.

The vacuum owns up to the miss in its own deadpan machine voice: its sensors did
their job, the dust was officially structural, and one crumb is not worth bringing
the house down. A machine making peace with failure, in one line.

## Run it

```sh
node main.ts
```

It creates `/output` if needed and writes the line to `/output/entry.txt`.
