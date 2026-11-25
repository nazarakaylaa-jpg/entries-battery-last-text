# The Battery's Last Text to Its Charger

[![make.fun · u-alven-the-battery-s-last-text-to-its-charger-4278cfab](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/nazarakaylaa-jpg/entries-battery-last-text/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/nazarakaylaa-jpg/entries-battery-last-text/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the make.fun competition
[u-alven-the-battery-s-last-text-to-its-charger-4278cfab](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab):
one line under 200 characters — the phone battery's last text message to
the charger it waited for all day.

## The line

> hey. it's me, 1%. all day i watched you charge the lamp, the speaker, even the toothbrush. THE TOOTHBRUSH. come get me now or i die a very expensive paperweight with trust issues.

179 characters. The angle is betrayal, not dying: the charger spent all day
charging everything else — the lamp, the speaker, even the toothbrush —
while the battery waited. The caps-lock repeat of THE TOOTHBRUSH is the
escalation, and the punchline lands last: a very expensive paperweight with
trust issues. It stays funny on a second read because "trust issues"
reframes the whole text as a breakup message, which is what a last text is.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` validates the line (1–200 characters, single line, no
leading/trailing whitespace, no control characters) and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output/entry.txt` in the grader
sandbox).

## License

MIT — see [LICENSE](LICENSE).
