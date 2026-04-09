import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const styleGalleryRoot = path.resolve(__dirname, "..");
const templateRoot = path.join(styleGalleryRoot, "template");
const publicSitesRoot = path.join(styleGalleryRoot, "public", "sites");
const templateNodeModulesPath = path.join(templateRoot, "node_modules");
const templateLockfilePath = path.join(templateRoot, "package-lock.json");
const viteExecutableAbsolutePath = path.join(
    templateNodeModulesPath,
    ".bin",
    process.platform === "win32" ? "vite.cmd" : "vite"
);
const viteExecutableRelativePath = process.platform === "win32"
    ? "..\\node_modules\\.bin\\vite.cmd"
    : "../node_modules/.bin/vite";

const accentPalette = [
    "#2563EB",
    "#0F766E",
    "#EA580C",
    "#BE123C",
    "#4F46E5",
    "#15803D",
    "#B45309",
    "#1D4ED8",
    "#C2410C",
    "#0F766E"
];

const ignoredSlugTokens = new Set([
    "hero",
    "landing",
    "page",
    "website",
    "builder",
    "section",
    "public"
]);

const args = new Set(process.argv.slice(2));
const skipInstall = args.has("--skip-install");
const incremental = args.has("--incremental");
const forceFullBuild = args.has("--force");

const ensureDirectory = (targetPath) => {
    fs.mkdirSync(targetPath, { recursive: true });
};

const readJsonFile = (targetPath) => JSON.parse(fs.readFileSync(targetPath, "utf8"));
const pathExists = (targetPath) => fs.existsSync(targetPath);

const runCommand = (command, commandArgs, options = {}) => {
    const result = spawnSync(command, commandArgs, {
        stdio: "inherit",
        shell: process.platform === "win32" && command.toLowerCase().endsWith(".cmd"),
        ...options
    });

    if (result.error) {
        throw result.error;
    }

    if (result.status !== 0) {
        throw new Error(`Command failed: ${command} ${commandArgs.join(" ")}`);
    }
};

const ensureTemplateDependencies = () => {
    if (skipInstall || fs.existsSync(templateNodeModulesPath)) {
        return;
    }

    if (!fs.existsSync(path.join(templateRoot, "package.json"))) {
        throw new Error("Missing template/package.json. Shared template dependencies cannot be installed.");
    }

    const installArgs = fs.existsSync(templateLockfilePath)
        ? ["ci", "--prefix", templateRoot, "--no-fund", "--no-audit"]
        : ["install", "--prefix", templateRoot, "--no-fund", "--no-audit"];

    console.log("Installing shared template dependencies...");
    runCommand("npm", installArgs, { cwd: styleGalleryRoot });
};

const toTitleCase = (value) =>
    value
        .split(/[\s.-]+/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

const normalizeKeywords = (slug, description, type) => {
    const descriptionWords = description
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, " ")
        .split(/\s+/)
        .filter((word) => word.length > 2);

    const slugWords = slug
        .toLowerCase()
        .split(/[-.]+/)
        .filter((word) => word && !ignoredSlugTokens.has(word));

    const orderedWords = [...slugWords, ...descriptionWords, type.toLowerCase(), "hosted", "showcase"];
    const uniqueWords = [];

    for (const word of orderedWords) {
        if (uniqueWords.includes(word)) {
            continue;
        }

        uniqueWords.push(word);

        if (uniqueWords.length >= 10) {
            break;
        }
    }

    return uniqueWords.join(", ");
};

const inferType = (slug, name, description) => {
    const value = `${slug} ${name} ${description}`.toLowerCase();

    if (/(analytics|dashboard|monitor|financial|intelligence|sales|data)/.test(value)) {
        return "BI/Analytics";
    }

    if (/(portfolio|nft|assets|gallery|collection)/.test(value)) {
        return "General";
    }

    return "Landing Page";
};

const pickAccentColor = (slug) => {
    let hash = 0;

    for (const character of slug) {
        hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
    }

    return accentPalette[hash % accentPalette.length];
};

const findTemplateApps = () => {
    if (!fs.existsSync(templateRoot)) {
        throw new Error(`Template directory not found at ${templateRoot}`);
    }

    return fs
        .readdirSync(templateRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => {
            const directory = path.join(templateRoot, entry.name);
            const requiredFiles = ["package.json", "vite.config.ts", "metadata.json", "index.html"];
            const hasAllFiles = requiredFiles.every((fileName) => fs.existsSync(path.join(directory, fileName)));

            if (!hasAllFiles || !fs.existsSync(path.join(directory, "src"))) {
                return null;
            }

            return {
                slug: entry.name,
                directory,
                metadataPath: path.join(directory, "metadata.json"),
                outputDirectory: path.join(publicSitesRoot, entry.name)
            };
        })
        .filter(Boolean)
        .sort((left, right) => left.slug.localeCompare(right.slug));
};

const buildSiteManifestEntry = (app) => {
    const metadata = readJsonFile(app.metadataPath);
    const name = metadata.name?.trim() || toTitleCase(app.slug);
    const description = metadata.description?.trim() || `${name} hosted inside the style gallery showcase.`;
    const type = inferType(app.slug, name, description);

    return {
        slug: app.slug,
        name,
        description,
        type,
        keywords: normalizeKeywords(app.slug, description, type),
        previewUrl: `/sites/${app.slug}/index.html`,
        liveUrl: `/sites/${app.slug}/index.html`,
        accentColor: pickAccentColor(app.slug)
    };
};

const collectLatestModifiedTime = (targetPath) => {
    if (!pathExists(targetPath)) {
        return 0;
    }

    const stats = fs.statSync(targetPath);

    if (stats.isFile()) {
        return stats.mtimeMs;
    }

    if (!stats.isDirectory()) {
        return 0;
    }

    let latestModifiedTime = stats.mtimeMs;
    const ignoredDirectories = new Set(["node_modules", "dist", ".git"]);

    for (const entry of fs.readdirSync(targetPath, { withFileTypes: true })) {
        if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
            continue;
        }

        latestModifiedTime = Math.max(
            latestModifiedTime,
            collectLatestModifiedTime(path.join(targetPath, entry.name))
        );
    }

    return latestModifiedTime;
};

const getAppSourceModifiedTime = (app) => {
    const trackedPaths = [
        "src",
        "public",
        "index.html",
        "package.json",
        "vite.config.ts",
        "metadata.json",
        "tsconfig.json",
        ".env.example"
    ];

    return trackedPaths.reduce(
        (latestModifiedTime, relativePath) =>
            Math.max(latestModifiedTime, collectLatestModifiedTime(path.join(app.directory, relativePath))),
        0
    );
};

const isAppBuildStale = (app) => {
    const outputIndexPath = path.join(app.outputDirectory, "index.html");

    if (!pathExists(outputIndexPath)) {
        return true;
    }

    const outputModifiedTime = fs.statSync(outputIndexPath).mtimeMs;

    return getAppSourceModifiedTime(app) > outputModifiedTime;
};

const pruneRemovedOutputs = (apps) => {
    ensureDirectory(publicSitesRoot);

    const activeSlugs = new Set(apps.map((app) => app.slug));

    for (const entry of fs.readdirSync(publicSitesRoot, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }

        if (activeSlugs.has(entry.name)) {
            continue;
        }

        fs.rmSync(path.join(publicSitesRoot, entry.name), { recursive: true, force: true });
    }
};

const buildTemplateApps = (apps) => {
    if (!fs.existsSync(viteExecutableAbsolutePath)) {
        throw new Error(`Vite executable not found at ${viteExecutableAbsolutePath}`);
    }

    if (forceFullBuild || !incremental) {
        fs.rmSync(publicSitesRoot, { recursive: true, force: true });
        ensureDirectory(publicSitesRoot);
    } else {
        pruneRemovedOutputs(apps);
    }

    const failures = [];

    for (const app of apps) {
        const outputDirectory = path.relative(app.directory, app.outputDirectory);

        if (incremental && !forceFullBuild && !isAppBuildStale(app)) {
            console.log(`Skipping up-to-date site: ${app.slug}`);

            continue;
        }

        fs.rmSync(app.outputDirectory, { recursive: true, force: true });
        ensureDirectory(app.outputDirectory);
        console.log(`Building hosted site: ${app.slug}`);

        try {
            runCommand(
                viteExecutableRelativePath,
                [
                    "build",
                    "--base",
                    `/sites/${app.slug}/`,
                    "--outDir",
                    outputDirectory
                ],
                {
                    cwd: app.directory,
                    env: {
                        ...process.env,
                        GEMINI_API_KEY: process.env.GEMINI_API_KEY ?? "",
                        APP_URL: process.env.APP_URL ?? ""
                    }
                }
            );
        } catch (error) {
            failures.push({
                slug: app.slug,
                error
            });
        }
    }

    if (failures.length > 0) {
        const failedSlugs = failures.map((failure) => failure.slug).join(", ");

        throw new Error(`Failed to build hosted template apps: ${failedSlugs}`);
    }
};

const writeManifest = (entries) => {
    const manifestPath = path.join(publicSitesRoot, "manifest.json");
    const manifest = {
        generatedAt: new Date().toISOString(),
        sites: entries
    };

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`Wrote hosted site manifest to ${manifestPath}`);
};

const templateApps = findTemplateApps();

if (templateApps.length === 0) {
    console.log("No template apps found. Skipping hosted site preparation.");
    process.exit(0);
}

const manifestEntries = templateApps.map(buildSiteManifestEntry);

ensureTemplateDependencies();
buildTemplateApps(templateApps);
writeManifest(manifestEntries);
