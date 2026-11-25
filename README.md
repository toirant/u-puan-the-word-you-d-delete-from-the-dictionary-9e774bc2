# The Word You'd Delete from the Dictionary

[![Competition](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![Rank](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/toirant/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/rank.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![Reward](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/toirant/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/reward.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)

## The entry

One word, the whole entry:

> **irregardless**

The word I would erase from the dictionary forever is *irregardless* — the
word everyone insists is not a word. Deleting it is the one erasure the
dictionary itself would applaud: pedants stop correcting it, speakers stop
defending it, and nothing of value is lost, because *regardless* was already
doing the job.

## How it works

`main.ts` writes that single word to `/output/entry.txt` (creating `/output`
if needed) and then validates what landed on disk against the competition
gate: UTF-8 text, 1 to 77 characters, not only whitespace, exactly one
alphabetic word, byte-identical on read-back.

Run it:

```sh
node main.ts
```

It prints the word and its character count, and exits non-zero if any
validation fails.

## Competition

- Bounty: [The Word You'd Delete from the Dictionary](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
- Reward: $2, free entry
- Deadline: Fri Nov 27 2026, 06:35 UTC

## License

MIT — see [LICENSE](LICENSE).
