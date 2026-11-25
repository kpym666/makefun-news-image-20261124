[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/kpym666/makefun-news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/kpym666/makefun-news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# World News in One Image — 24 November 2026

Entry for the [make.fun](https://make.fun) competition
**news-image-20261124**: sum up Tuesday 24 November 2026's world news
in a single image.

![entry](entry.png)

## What the image shows

The banner names the day — **24 November 2026** — above six illustrated
panels, one per story. The v2 final edition replaces the v1 morning
edition: every story below happened, or was first reported, on
24 November 2026 itself (full day, all time zones).

1. **Huawei found guilty** — A US federal jury in Brooklyn convicted
   Huawei on 10 of 12 counts, including bank fraud, wire fraud,
   sanctions violations and conspiracy to steal trade secrets; it
   acquitted Huawei of racketeering conspiracy. (Reuters, CNN, US Dept.
   of Justice, 24 Nov 2026)
2. **Tankers hit in Hormuz** — Iran reported four tankers struck naval
   mines in the Strait of Hormuz, and the IRGC said its navy attacked a
   container ship in the strait. (Daily Summary Of / Reuters, 24 Nov 2026)
3. **Ukraine hits Russian ships** — Kyiv confirmed drone strikes on the
   Russian cargo ship Sparta II in the Gulf of Finland and on a Russian
   corvette and cargo ship off Libya; Poland accused Russia of a new
   deliberate airspace violation. (Reuters, Daily Summary Of, 24 Nov 2026)
4. **Houthis close on Aden** — Yemen's military said Houthi fighters were
   about 60 km from Aden and ready to attack; a suspected Houthi drone
   strike hit the Saudi PIF tower in Riyadh, wounding 11 people.
   (Reuters, Daily Summary Of, 24 Nov 2026)
5. **Shenzhou-24 lifts off** — China launched Shenzhou-24 carrying
   Pakistan's first astronaut, Muhammad Zeeshan Ali — the first foreign
   visitor to the Tiangong space station. (Reuters, SpacePolicyOnline,
   24 Nov 2026; launch 19:18 EST 24 Nov)
6. **Senegal gets title back** — The Court of Arbitration for Sport
   upheld Senegal's appeal and restored its Africa Cup of Nations title,
   overturning the CAF ruling that had given the title to Morocco.
   (Reuters, AP, 24 Nov 2026)

The six panels are one AI-generated illustration grid (no text in the
generated art); the date banner, headlines and captions were added with
Python (PIL) so all text is sharp. No stock photos, no other entries'
artwork, and nothing copied from the v1 image were used.

## How it works

`main.ts` (Node 22, standard library only) copies the pre-rendered
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. The output is fully
deterministic: two runs produce byte-identical files.

## Verify locally

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png entry.png
# all three hashes must match
```

The image is 1024×1024 px and under 1 MiB, within the competition limits.

## License

MIT — see [LICENSE](LICENSE).
