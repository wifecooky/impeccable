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

### A brand metaphor goes in the mark and the accents, not in the reading surface

- **Cause:** a channel's visual concept was a student's notebook: ruled paper, chalkboard, red pen, highlighter. The whole site was rendered as that notebook: paper-colour background, ruled lines, a hand-written font, decorative annotations. The user had already supplied a comp with a white background, whitespace, rounded cards and a sans-serif body. After the merge, the user said their original design was cleaner, and picked "my layout, the channel's colours". The concept was right for the avatar and thumbnails. As a page texture it made long reading heavier, and it overrode a comp the user had already approved.
- **Fix:** put a brand metaphor in the logo mark, the thumbnails and one or two accents (a highlighter underline, a red footnote badge). Keep reading surfaces plain: white or one tint band, sans-serif body, cards and whitespace. When the user has supplied a comp, the first build applies the brand tokens to the user's layout. Offer the full-metaphor version only as a second option, with screenshots of both.
- **Verify:** content pages have no ruled-line backgrounds (`repeating-linear-gradient`) and no hand-written font outside the logo and thumbnails. When a user comp exists, a side-by-side screenshot of the comp and the build at 1440 and 390 shows the same section order and card shapes.

### A red circle on an icon's corner reads as a notification badge

- **Cause:** a channel mark was a single character with a red filled circle holding a white "1" at the top right, meant as a footnote number ("every claim has a citation"). The user said it looked like a notification. On phones and in video-platform UIs, a red disc with a number on an icon's corner is the system unread badge; that reading wins over any private meaning. A first regeneration that only removed the disc (a bare superscript, a red tick, a highlighter stroke) was also rejected: the fix needed a new concept, not a lighter badge.
- **Fix:** never put a filled red or orange circle, dot or number bubble on the corner of a logo, avatar or app icon. Carry a "source / citation / marked" idea with an object that has no UI meaning (for example a red bookmark ribbon hanging from a notebook). When the user rejects a mark's reading, generate several different concepts (6 or more), not variants of the rejected one, and show each cropped to a circle at 48 px.
- **Verify:** look at the mark at 48 px inside a circle next to a real app icon with a badge; it must not look like the same pattern. No mark draws a `border-radius: 50%` red element at a corner.

### A selection mode's action bar appears when the mode turns on, not after the first pick

- **Cause:** a "Select" toggle at the top right let the user pick items to share as a link. The action bar (count, share button, clear) appeared only after the first pick, at the bottom left, as a white strip with a hairline border, the same as the page. The user said the bar was hard to notice. After the toggle nothing told the user what to do next; when the bar appeared it read as a static footer, far from both the toggle and the tapped card.
- **Fix:** show the bar as soon as the mode is on. With zero picks it states the next step ("Tap the items to send") and the primary button is disabled; with picks it shows the count. Give it a surface the page does not use (for example the brand's dark colour, white text, an inverted white button, a top shadow) and a short slide-up entrance. Put the primary action on the side of the toggle that started the mode (on a tablet, usually the right thumb side); the secondary "clear" goes on the far side. A mode toggle's icon must name the mode's current purpose, not a past one.
- **Verify:** turn the mode on with nothing picked; the bar is visible with the hint and a disabled primary button. Pick 2 items; the count reads 2 and the button opens the dialog. Screenshot landscape and portrait; the bar's background differs from the page and the primary button lines up with the toggle's column.
