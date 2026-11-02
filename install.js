#!/usr/bin/env node
// Installs this repo into Claude Code: the patched skill, the 4 upstream agents,
// and the upstream design detector hook in settings.json.
//   npx github:wifecooky/impeccable [--force] [--no-hooks]
// Honours CLAUDE_CONFIG_DIR like Claude Code; default ~/.claude.
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const args = new Set(process.argv.slice(2));
const force = args.has("--force");
const hooks = !args.has("--no-hooks") && process.platform !== "win32";
const root = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), ".claude");
const skill = path.join(root, "skills", "impeccable");
const launcher = path.join(skill, "scripts", "impeccable");

const die = msg => { console.error(`impeccable: ${msg}`); process.exit(1); };

// Read settings first, so a broken file stops the install before anything is copied.
const file = path.join(root, "settings.json");
let settings = {};
if (hooks && fs.existsSync(file)) {
  try { settings = JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { die(`${file} is not valid JSON; fix it or run with --no-hooks.`); }
}

// 1. Skill. Never write through a link: it points at someone's checkout.
let st = null;
try { st = fs.lstatSync(skill); } catch {}
if (st?.isSymbolicLink()) die(`${skill} is a symlink; remove it first if you want a copy here.`);
if (st && !force) die(`${skill} already exists. Run again with --force to replace it.`);
fs.rmSync(skill, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, "skills", "impeccable"), skill, { recursive: true });
// npm may drop the executable bit when it packs a git dependency.
const bins = path.join(skill, "scripts", "bin");
for (const p of [launcher, ...fs.readdirSync(bins).map(d => path.join(bins, d, "impeccable"))])
  if (fs.existsSync(p)) fs.chmodSync(p, 0o755);

// 2. Agents, unchanged from upstream.
const agents = path.join(root, "agents");
fs.mkdirSync(agents, { recursive: true });
for (const f of fs.readdirSync(path.join(__dirname, "agents")))
  fs.copyFileSync(path.join(__dirname, "agents", f), path.join(agents, f));

// 3. Hook: the same three entries upstream writes. Old impeccable hook entries are
// replaced, every other setting is kept.
if (hooks) {
  if (fs.existsSync(file)) fs.copyFileSync(file, `${file}.bak`);
  const q = `'${launcher.replace(/'/g, `'\\''`)}'`;
  const entry = (timeout, statusMessage) => ({ type: "command", command: `[ ! -f ${q} ] || ${q} hook`, timeout, statusMessage });
  const ours = h => /skills\/impeccable\/scripts\/impeccable'? hook$/.test(h.command ?? "");
  const want = {
    SessionStart: { hooks: [entry(5, "Preparing build session")] },
    PostToolUse: { matcher: "Edit|Write", hooks: [entry(5, "Checking UI changes")] },
    Stop: { hooks: [entry(30, "Design deep pass")] },
  };
  settings.hooks ??= {};
  for (const [event, group] of Object.entries(want)) {
    const kept = (settings.hooks[event] ?? [])
      .map(g => ({ ...g, hooks: (g.hooks ?? []).filter(h => !ours(h)) }))
      .filter(g => g.hooks.length);
    settings.hooks[event] = [...kept, group];
  }
  fs.mkdirSync(root, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(settings, null, 2) + "\n");
}

console.log(`Installed impeccable + patch into ${root}`);
console.log(`  skill   ${skill}`);
console.log(`  agents  ${agents}`);
console.log(hooks ? `  hook    ${file}` : "  hook    skipped");
console.log("Restart Claude Code, then use /impeccable.");
