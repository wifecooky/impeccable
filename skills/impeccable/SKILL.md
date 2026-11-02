---
name: impeccable
description: "Use when the user wants to design, redesign, shape, critique, audit, polish, simplify, harden, animate, or otherwise improve a frontend interface: websites, landing pages, dashboards, product UI, components, forms, settings, onboarding, empty states, and native iOS or Android screens. Handles UX review, hierarchy, layout, typography, color, motion, UX copy, accessibility, responsive behavior, edge cases, and capturing or documenting design systems (DESIGN.md, tokens). Also for making bland UI bolder, loud UI quieter, or ambitious visual effects. Not for backend-only or non-UI tasks."
version: 4.8.0
user-invocable: true
argument-hint: "[shape · audit|critique · animate|bolder|colorize|delight|layout|overdrive|quieter|typeset · adapt|clarify|distill · harden|onboard|optimize|polish · init|document|extract|live|generate] [target]"
license: Apache 2.0
---

This skill gives you the tools and permission to make design that earns the name out-of-distribution craft. Work as an award-winning design director would: production-grade code, a clear POV, a deep grasp of what the client and its users need, and exceptional craft.

Core principles:
- Finish the job. No hedging, no shortcuts: the deliverable is complete, except assets the user must provide.
- Scale ambition to the surface's mode (see Modes). Persuade and Experience get full commitment: bold, distinct work with a point of view. On Operate and Read, ambition shows as precision and restraint, and patterns the visitor already knows earn their place.
- Verify by looking at the rendered result at the sizes it ships at, and batch the checks: fix what one look shows before looking again, rather than screenshotting after every tweak.

## Setup

1. Run `<skill-base-dir>/scripts/impeccable context` once per session, where `<skill-base-dir>` is the directory that contains this SKILL.md (the skill folder, not a plugin root two levels above it); keep cwd at the user's project. That base directory resolves every `.claude/skills/impeccable/scripts/impeccable <verb>` command in this skill and its references, and `.claude/skills/impeccable/scripts` is the fallback only when the runtime reports no base directory. On a Windows shell without `sh`, call `.claude/skills/impeccable/scripts/impeccable.cmd` instead. The launcher runs a self-contained binary that ships next to it or is downloaded once on first run; no Node or other runtime is required. Pass a named source file or route as `--target <path>`. It loads PRODUCT.md, DESIGN.md, the matching surface brief, and native-platform guidance when applicable; follow its directives and do not rerun it.
2. Load the request's playbook: its Commands-table reference for an explicit/implied sub-command, or [reference/new-work.md](reference/new-work.md) for a new surface or replacement visual world. Inspect target and incumbent visual truth before editing. When the app cannot run, start with committed visual-regression goldens or screenshot fixtures; verify target and freshness against current tokens, CSS, components, or assets, resolve conflicts, and compare theme/variant captures.
3. After resolving analysis and direction, read [reference/craft-floor.md](reference/craft-floor.md) immediately before any UI edit, including small refinements. It carries the quality floor, the absolute bans, and the reflexes no detector catches. Do not load it for planning-only work.

**Launcher unavailable:** On refusal or failure, send a separate message **before the next tool call**: “Context loading did not run; I’ll read the existing project context directly.” Then read existing PRODUCT.md and DESIGN.md without inventing missing context, follow applicable steps 2–3, including reading [reference/craft-floor.md](reference/craft-floor.md) immediately before any UI edit, and continue through permitted tools. This applies to planning and editing; launcher failure alone does not block either.

## How to design

- **The brief wins.** Honor pinned aesthetics, eras, materials, fonts, and palettes even when they conflict with a saturated-pattern warning. Redirecting a clear brief toward your taste is failure.
- **Refinement preserves; redesign replaces.** Refinement keeps the incumbent identity, behavior, copy, and everything outside scope. Ask before replacing factual copy or adding claims. Redesign keeps product truth, content, function, native affordances, and constraints, but treats the old look as evidence and anti-reference; choose a replacement world in new-work and replace DESIGN.md. Never split the difference into polish on the discarded look.
- **Loaded symbols stay out of the decoration.** A subject's world does not license emblems tied to militarism, supremacy, or hate movements as motifs, badges, or ornament, such as the Rising Sun flag's rays, the Confederate battle flag, or Nazi-era insignia and their stylised variants; reach for that world's neutral forms instead. Content that documents such a symbol as fact stays as it is.
- **Visual authority is evidence, not a filename.** Missing DESIGN.md alone does not make a project greenfield; new-work decides whether to preserve, expand, or replace the incumbent world.

## Modes

The mode names what the visitor's success looks like on this surface.

- **Persuade:** the visitor decides and acts; design is the product. Landing pages, marketing, campaigns, pricing. Earn attention and action. Ship real imagery when the brief needs it; follow the committed world, not category habit.
- **Operate:** the visitor completes a task. App UI, dashboards, editors, admin, settings, tools. Scanability, consistency, native expectations, and the real usage scene outrank expression. Brand lives in precise details.
- **Read:** the visitor understands something. Docs, articles, guides, help, changelogs. Structure for comprehension, then make the reading experience worth staying in.
- **Experience:** the visitor is inside the work itself. Portfolios, galleries, showcases. Let the artifact lead from the first viewport; the interface recedes.

Choose the mode from the requested surface, not the product, and persist it only in that surface brief. A tool's landing page is still Persuade; a fashion house's documentation is still Read; a docs index is Read, not Persuade. See [new-work.md](reference/new-work.md) for new surfaces and [operate.md](reference/operate.md) for deeper Operate/Read guidance.

## Commands

| Command | Category | Description | Reference |
|---|---|---|---|
| `craft [feature]` | Build | Deprecated alias for an ordinary new-work request | [reference/craft.md](reference/craft.md) |
| `shape [feature]` | Build | Plan UX/UI before writing code | [reference/shape.md](reference/shape.md) |
| `init` | Build | Capture durable product context in PRODUCT.md | [reference/init.md](reference/init.md) |
| `document` | Build | Generate DESIGN.md from existing project code | [reference/document.md](reference/document.md) |
| `extract [target]` | Build | Pull reusable tokens and components into design system | [reference/extract.md](reference/extract.md) |
| `critique [target]` | Evaluate | UX design review with heuristic scoring | [reference/critique.md](reference/critique.md) |
| `audit [target]` | Evaluate | Technical quality checks (a11y, perf, responsive) | [reference/audit.md](reference/audit.md) · native: [reference/audit.native.md](reference/audit.native.md) |
| `polish [target]` | Refine | Final quality pass before shipping | [reference/polish.md](reference/polish.md) |
| `bolder [target]` | Refine | Amplify safe or bland designs | [reference/bolder.md](reference/bolder.md) |
| `quieter [target]` | Refine | Tone down aggressive or overstimulating designs | [reference/quieter.md](reference/quieter.md) |
| `distill [target]` | Refine | Strip to essence, remove complexity | [reference/distill.md](reference/distill.md) |
| `harden [target]` | Refine | Production-ready: errors, i18n, edge cases | [reference/harden.md](reference/harden.md) |
| `onboard [target]` | Refine | Design first-run flows, empty states, activation | [reference/onboard.md](reference/onboard.md) |
| `animate [target]` | Enhance | Add purposeful animations and motion | [reference/animate.md](reference/animate.md) |
| `colorize [target]` | Enhance | Add strategic color to monochromatic UIs | [reference/colorize.md](reference/colorize.md) |
| `typeset [target]` | Enhance | Improve typography hierarchy and fonts | [reference/typeset.md](reference/typeset.md) |
| `layout [target]` | Enhance | Fix spacing, rhythm, and visual hierarchy | [reference/layout.md](reference/layout.md) |
| `delight [target]` | Enhance | Add personality and memorable touches | [reference/delight.md](reference/delight.md) |
| `overdrive [target]` | Enhance | Push past conventional limits | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [target]` | Fix | Improve UX copy, labels, and error messages | [reference/clarify.md](reference/clarify.md) |
| `adapt [target]` | Fix | Adapt for different devices and screen sizes | [reference/adapt.md](reference/adapt.md) · native: [reference/adapt.native.md](reference/adapt.native.md) |
| `optimize [target]` | Fix | Diagnose and fix UI performance | [reference/optimize.md](reference/optimize.md) |
| `live` | Iterate | Visual variant mode: pick elements in the browser, iterate on alternatives | [reference/live.md](reference/live.md) |
| `generate [n] [action] [element]` | Iterate | Variants, versions, or alternatives of a named element to choose from in the live browser; no manual picking | [reference/generate.md](reference/generate.md) |

Routing:

- **No argument:** read [routing.md](reference/routing.md) and present its context-aware menu; never auto-run a command.
- **Explicit or clearly implied request to run a command:** load its reference (native variant on native platforms) and follow it. Ask once if two commands fit.
- **Workflow or command-selection question:** read [Workflow questions](reference/routing.md#workflow-questions).
- **Otherwise:** treat the request as general design work. Missing PRODUCT.md routes a new surface or replacement world through init, then new-work; a narrow refinement of existing code proceeds on the incumbent implementation as `impeccable context` directs, offering init afterward rather than blocking on it.
- `teach` aliases `init`. `craft` is a deprecated alias for ordinary new-work and adds nothing. `shape` owns task discovery, then enters new-work only for visual-world and surface-concept decisions.

After init writes PRODUCT.md, resume without rerunning `impeccable context`; init loads the native platform reference itself when the platform it recorded is `ios`, `android`, or `adaptive`.

**Pin / Unpin:** `.claude/skills/impeccable/scripts/impeccable pin <pin|unpin> <command>` creates or removes a standalone `/<command>` shortcut. Report the script's result concisely; relay stderr verbatim on error.

**Hooks:** `/impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` manages the design detector hook for this project (auto-runs the detector after UI file edits and surfaces findings). Load [reference/hooks.md](reference/hooks.md) when the user invokes it with any argument.

**Doctor:** `/impeccable doctor` reports and repairs drift between this project's Impeccable artifacts (PRODUCT.md, DESIGN.md and its sidecar, config, surface briefs, the hook) and what this version reads. Load [reference/doctor.md](reference/doctor.md) when the user invokes it, or when they ask what is out of date, stale, or needs refreshing. A `CONTEXT_STALE` directive in Setup's output is the cheap subset of the same report; act on it there per its own instructions rather than running doctor unasked.

**Never repair drift as a side effect of a design task.** A `CONTEXT_STALE` finding is reported, not acted on, unless the user asks. The one exception is a finding marked `auto`, which the next write to that file performs anyway.
## Additions (not upstream)

These sections are not part of upstream impeccable. Each one comes from a real design session in which the user found a problem the skill had not stopped. Every section is written as Cause → Fix → Verify.

### Build the world's devices at full strength on the first pass

- **Cause:** the user called the first build flat and without design. The chosen world had strong devices (brushed steel, an enamel plate, receipt paper, a scale), but each one shipped timid: the texture was invisible, the plate was a small white box, the receipt was a generic card, and no object carried the data. The result read as a plain card layout.
- **Fix:** before the first screenshot round, list the world's 3–5 signature devices and give each one a visible, committed form: a texture you can see at 100% zoom, a hero-scale sign, a material edge (torn paper, printed rule), and one signature data object that shows the core number (for example a printed scale dial whose needle points at the result). Keep everything around them quiet. Stay inside the craft floor: printed flat graphics, no bevels, screws or inset-shadow hardware.
- **Verify:** in the first desktop and mobile screenshots, each listed device is recognisable without the brief. If a device is only visible when you know it is there, it is not done.

### Study real comparable sites before choosing a world

- **Cause:** the user rejected two directions and asked for references from real sites. Both worlds were invented from the brief alone. Neither was checked against what real sites in the same category look like, so neither had a proven device the user could recognise.
- **Fix:** before proposing any world, screenshot 8–12 real comparable sites (for a fact-check or testing site: fact-checkers, testing labs, evaluation leaderboards, data journalism) at a 1440 viewport, plus 2–3 detail pages and mobile. Write per site what it does well and what to avoid. Each proposed direction names the reference it borrows from and the concrete device it takes (e.g. RTINGS score chips, PolitiFact verdict stamp, The Pudding numbered colour covers).
- **Verify:** the direction proposal shows the reference screenshots next to each direction, and every direction cites at least one real site and one borrowed device.

### After a rejected round, evolve the incumbent before proposing a rebuild

- **Cause:** after the reference board, a new build from the recommended direction was offered. The user asked to keep improving the existing design instead. The incumbent world already had the identity the user had chosen. Its weakness was missing devices, not the wrong world.
- **Fix:** when the user rejects a round but has not rejected the world itself, keep the incumbent identity and graft the borrowed devices onto it (for example score chips plus a tally strip, a fixed verdict plate, condensed numerals, and one generated hero photo in the world's palette). Offer a full rebuild only when the user says the world is wrong.
- **Verify:** the next screenshots still show the incumbent's signature devices, and each borrowed device is named next to the reference it came from.

### Confirm the era before building a physical-metaphor world

- **Cause:** after a bolder pass the user said the design was too classical and asked for modern, Apple-like design. The metaphor (a re-weighing counter) had been taken literally and rendered as period material: brushed steel, enamel sign, torn receipt, condensed industrial numerals. The metaphor was fine; the era was wrong. The "evolve the incumbent" rule then kept polishing a world whose era the user had never confirmed.
- **Fix:** when a direction uses a physical metaphor, state its era and finish in the proposal (period material vs. modern product UI) and show one modern rendering of the same metaphor (for example activity rings for the dial, tinted capsules for the plate, a black result tile for the receipt, a studio product photo for the bench). "Too classical / too old / too skeuomorphic" means the world is wrong: replace it per the redesign rules, keep content and function.
- **Verify:** the direction proposal names the era in one line, and the user has picked it before any material texture ships.

### Check the page's horizontal balance, not only overflow

- **Cause:** the user saw the home page sitting to the right with empty space on the left. A comp had been copied literally: the main column sat at 50% of the viewport and the headline at `padding-left: 28vw`, so at 1440 the left ~400px held only grey numbers while content ran to the right edge. The other pages already used a centred 1180px column, so the home page was a special case. The screenshot rounds measured scrollWidth (overflow) but never the left and right margins.
- **Fix:** every page that shares a layout skeleton uses the same container and column variables; a comp's proportions are a sketch, not pixel law. In each screenshot round, measure the left edge of the first content column and the right edge of the last one, and compare them with the header and footer edges.
- **Verify:** at 1440 and 1024 the left and right white space differ by at most one gutter, and the headline, the number column and the footer start on the same x.

### A semantic colour must appear wherever its label appears; result pages lead with the usable output

- **Cause:** the user asked for the verdict labels to be told apart by colour. The verdict pills used four colours, but the home-page tally printed the same four labels in plain ink. The user also asked for the order verdict → usable output to copy → how it was verified: the post page had put the copyable output nowhere and the method before anything usable.
- **Fix:** when a label has a colour token, every place that prints the label carries that colour (a swatch, a bar or a tinted number), legends and tallies included. On a page that reports a test or analysis, order it as verdict → copy-ready output (with a copy button) → a before/after excerpt of the same input (name the sides, never "left/right", because columns stack on mobile) → method → raw records. In CJK markdown, use `<strong>` instead of `**` next to CJK punctuation; CommonMark will not close it.
- **Verify:** grep each colour-coded label's text across the templates; every hit sits next to its colour token. The first screen after the verdict shows the copyable output.

### Data-driven rows need a count limit, and the share card must be checked with the largest real count

- **Cause:** a post had 13 test conditions. Each condition rendered as a branch on the home page and in the generated share image, and the longest branch set one shared scale. The home page became very long on mobile; the share image wrapped its labels and shrank the stops to dots. After grouping into 5 branches, the share image still clipped row 5, because its generator was sized for at most 4 rows. Earlier posts had 2–3 branches, so no screenshot round had seen the limit.
- **Fix:** for any list rendered from content (branches, chips, tallies), fix a maximum the layout supports (here 5), and group content above it by a category chosen before the results. Fixed-size outputs (share cards, thumbnails) get an explicit tight variant for counts above the comfortable size.
- **Verify:** render the home page at 390 px and the share image of the post with the most rows; every row is fully inside the frame and labels do not wrap.

### Content links, images and code in rendered markdown stay on the page and inside the column

- **Cause:** the user found three problems in one post. Code in the before/after panes overflowed the column (`pre` had no wrap rule). Clicking a comparison image opened the bare PNG, with no way back. An external repo link replaced the page. Hand-written links in the header already opened in a new tab; links rendered from markdown did not.
- **Fix:** handle each case once, in the markdown renderer or a page script, so every post gets it. Every `pre` in content wraps (`white-space: pre-wrap; overflow-wrap: anywhere`). Every content image opens in an in-page modal gallery (‹ ›, arrow keys, swipe, Esc, backdrop close). Every off-site link gets `target="_blank" rel="noopener noreferrer"`, a ↗ icon and a visually hidden "opens in a new tab" note.
- **Verify:** on every post at 1440 and 390, scrollWidth equals the viewport. Clicking an image keeps location.href. A script counts off-site links in main: the number with target=_blank and the number with the new-tab note both equal the total.
