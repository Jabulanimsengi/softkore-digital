import fs from "node:fs";
import path from "node:path";

const BATCH_FILES = [
  "src/data/guide-batches/core.ts",
  "src/data/guide-batches/websites.ts",
  "src/data/guide-batches/seo.ts",
  "src/data/guide-batches/security.ts",
  "src/data/guide-batches/industries.ts",
];
const PAGE_PLAN_PATH = "deploy/page-plan.json";

function todayDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Johannesburg",
  }).format(new Date());
}

function unescapeStringLiteral(value) {
  return value.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

function readField(block, name) {
  const match = block.match(new RegExp(`\\b${name}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return match ? unescapeStringLiteral(match[1]) : undefined;
}

function scanObjectBlocks(source) {
  const arrayStart = source.indexOf("= [");
  if (arrayStart === -1) return [];

  const blocks = [];
  let inString = null;
  let escaped = false;
  let braceDepth = 0;
  let blockStart = -1;

  for (let i = arrayStart + 2; i < source.length; i += 1) {
    const ch = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === inString) {
        inString = null;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      inString = ch;
      continue;
    }

    if (ch === "{") {
      if (braceDepth === 0) blockStart = i;
      braceDepth += 1;
    } else if (ch === "}") {
      braceDepth -= 1;
      if (braceDepth === 0 && blockStart !== -1) {
        const block = source.slice(blockStart, i + 1);
        blocks.push({
          start: blockStart,
          end: i + 1,
          block,
          slug: readField(block, "slug"),
          category: readField(block, "category"),
          status: readField(block, "status"),
          scheduledFor: readField(block, "scheduledFor"),
          title: readField(block, "title"),
        });
        blockStart = -1;
      }
    } else if (ch === "]" && braceDepth === 0) {
      break;
    }
  }

  return blocks;
}

function loadAllEntries() {
  const entries = [];
  for (const relPath of BATCH_FILES) {
    const fullPath = path.resolve(relPath);
    if (!fs.existsSync(fullPath)) continue;
    const source = fs.readFileSync(fullPath, "utf8");
    const blocks = scanObjectBlocks(source);
    for (const item of blocks) {
      if (!item.slug || !item.status) continue;
      entries.push({
        ...item,
        file: relPath,
        fullPath,
      });
    }
  }
  return entries;
}

function parseArgs(argv) {
  const flags = {
    list: process.env.npm_config_list === "true",
    due: process.env.npm_config_due === "true",
    all: process.env.npm_config_all === "true",
    slug: process.env.npm_config_slug ? process.env.npm_config_slug.trim() : null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--list" || arg === "-l") {
      flags.list = true;
    } else if (arg === "--due") {
      flags.due = true;
    } else if (arg === "--all") {
      flags.all = true;
    } else if (arg.startsWith("--slug=")) {
      flags.slug = arg.slice("--slug=".length).trim();
    } else if (arg === "--slug" && argv[i + 1]) {
      flags.slug = argv[i + 1].trim();
      i += 1;
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  return flags;
}

function printSchedule(published, scheduled) {
  console.log(`\nPublished guides (${published.length}):`);
  for (const item of published) {
    console.log(`  [LIVE] ${item.published ?? "-"} | ${item.category} | /guides/${item.slug}/`);
  }

  console.log(`\nScheduled weekly queue (${scheduled.length}):`);
  scheduled.forEach((item, index) => {
    const week = String(index + 1).padStart(2, "0");
    console.log(
      `  Week ${week} (${item.scheduledFor ?? "unscheduled"}) | ${item.category.padEnd(28)} | /guides/${item.slug}/ — ${item.title}`,
    );
  });
  console.log("");
}

function publishEntry(entry, publishDate) {
  const source = fs.readFileSync(entry.fullPath, "utf8");
  const refreshed = scanObjectBlocks(source).find((block) => block.slug === entry.slug);
  if (!refreshed) {
    throw new Error(`Could not locate guide block for slug "${entry.slug}" in ${entry.file}`);
  }

  const updatedBlock = refreshed.block
    .replace(/(\bstatus:\s*)"scheduled"/, '$1"published"')
    .replace(/(\bpublished:\s*)"[^"]*"/, `$1"${publishDate}"`)
    .replace(/(\bupdated:\s*)"[^"]*"/, `$1"${publishDate}"`);

  if (updatedBlock === refreshed.block) {
    throw new Error(`No status change applied when publishing "${entry.slug}".`);
  }

  const nextSource =
    source.slice(0, refreshed.start) + updatedBlock + source.slice(refreshed.end);
  fs.writeFileSync(entry.fullPath, nextSource, "utf8");
}

function updatePagePlan(publishedSlugs) {
  const planFile = path.resolve(PAGE_PLAN_PATH);
  const plan = JSON.parse(fs.readFileSync(planFile, "utf8"));
  const keepSet = new Set(plan.keep ?? []);

  for (const slug of publishedSlugs) {
    const route = `/guides/${slug}/`;
    keepSet.add(route);
    if (plan.redirects && route in plan.redirects) {
      delete plan.redirects[route];
    }
  }

  plan.keep = [...keepSet].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  fs.writeFileSync(planFile, `${JSON.stringify(plan, null, 2)}\n`, "utf8");
  return plan.keep.length;
}

const args = parseArgs(process.argv.slice(2));
const entries = loadAllEntries();
const published = entries.filter((entry) => entry.status === "published");
const scheduled = entries
  .filter((entry) => entry.status === "scheduled")
  .sort((a, b) => (a.scheduledFor ?? "").localeCompare(b.scheduledFor ?? ""));

if (args.list) {
  printSchedule(published, scheduled);
  process.exit(0);
}

if (scheduled.length === 0) {
  console.log("All guides are already published.");
  process.exit(0);
}

const today = todayDate();
let toPublish = [];

if (args.slug) {
  const match = entries.find((entry) => entry.slug === args.slug);
  if (!match) {
    console.error(`Guide slug not found: ${args.slug}`);
    process.exit(1);
  }
  if (match.status === "published") {
    console.log(`Guide "/guides/${match.slug}/" is already published.`);
    process.exit(0);
  }
  toPublish = [match];
} else if (args.all) {
  toPublish = scheduled;
} else if (args.due) {
  toPublish = scheduled.filter((entry) => entry.scheduledFor && entry.scheduledFor <= today);
  if (toPublish.length === 0) {
    console.log(
      `No scheduled guides due on or before ${today}. Next up: Week 01 (${scheduled[0].scheduledFor}) — /guides/${scheduled[0].slug}/`,
    );
    process.exit(0);
  }
} else {
  toPublish = [scheduled[0]];
}

for (const item of toPublish) {
  publishEntry(item, today);
  console.log(`Published: /guides/${item.slug}/ (${item.title}) [${item.file}]`);
}

const totalKept = updatePagePlan(toPublish.map((item) => item.slug));
console.log(`Updated ${PAGE_PLAN_PATH}: ${totalKept} kept routes total.`);
console.log("Next steps:");
console.log("  1. Run `npm run predeploy` to regenerate redirects, build `out/`, and validate the static export.");
console.log("  2. Deploy the updated `out/` directory and submit the new URL with `npm run submit:indexnow` (and Google Search Console URL Inspection).");
