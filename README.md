# impeccable + patch

[impeccable](https://github.com/pbakaus/impeccable) 4.8.0 by Paul Bakaus, with 8 extra rules appended to `SKILL.md`. This is an unofficial, modified copy, not the upstream project.

Each extra rule comes from a real design session where the user found a problem the skill had not stopped. Each rule is written as Cause → Fix → Verify. The full text is in [`patch.md`](patch.md).

1. Build the world's devices at full strength on the first pass.
2. Study real comparable sites before choosing a world.
3. After a rejected round, evolve the incumbent before proposing a rebuild.
4. Confirm the era before building a physical-metaphor world.
5. Check the page's horizontal balance, not only overflow.
6. A semantic colour must appear wherever its label appears; result pages lead with the usable output.
7. Data-driven rows need a count limit; check the share card with the largest real count.
8. Content links, images and code in rendered markdown stay on the page and inside the column.

## Blind test result

Same model (claude-sonnet-5-5), same one-line user requests, only the installed skill changes. 6 conditions × 6 tasks × 2 runs = 72 pages. Two reviewers (Claude and Codex) compared screenshots in pairs without knowing which skill made which page. A win counts only when both reviewers pick the same page.

| Condition | Score | vs. no skill (W-T-L, 12 games) |
|---|---|---|
| impeccable + this patch | 0.73 | 8-4-0 |
| impeccable 4.8.0 | 0.67 | 9-2-1 |
| Anthropic frontend-design | 0.54 | 6-5-1 |
| taste-skill | 0.44 | 5-5-2 |
| hallmark | 0.33 | 4-6-2 |
| no skill | 0.28 | — |

Head to head, this patch against plain impeccable is 3 wins, 7 ties and 2 losses. **The difference is within the error.** Do not expect better pages than upstream impeccable from this patch alone. The rules target problems that show up over several review rounds with a user (direction choice, layout balance, links and images), which a one-shot test does not measure.

The tested text named the original project and quoted the user. The published text removes those details. The rules are unchanged.

## Install

Recommended: install upstream impeccable first (it also installs its agents and design hook), then append the patch.

```bash
npx impeccable@4.8.0 install
curl -fsSL https://raw.githubusercontent.com/wifecooky/impeccable/main/patch.md \
  | { printf '\n'; cat; } >> ~/.claude/skills/impeccable/SKILL.md
```

Updating upstream impeccable overwrites `SKILL.md`. Append the patch again after each update.

Skill only, without the agents and hook:

```bash
git clone https://github.com/wifecooky/impeccable.git
cp -R impeccable/skills/impeccable ~/.claude/skills/
```

Use it like upstream: `/impeccable build a landing page for a coffee shop…`

## License

Apache License 2.0, the same as upstream. See [`LICENSE`](LICENSE) and [`NOTICE.md`](NOTICE.md) for the attribution and the list of changes.
