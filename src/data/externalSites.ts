import { type Style } from "@/data/styles";

interface ExternalSiteManifestEntry {
    slug: string;
    name: string;
    description: string;
    type: "General" | "Landing Page" | "BI/Analytics";
    keywords: string;
    previewUrl: string;
    liveUrl: string;
    accentColor: string;
}

interface ExternalSiteManifest {
    generatedAt: string;
    sites: ExternalSiteManifestEntry[];
}

const EXTERNAL_SITES_MANIFEST_PATH = "/sites/manifest.json";

const EXTERNAL_SITE_DEFAULTS = {
    secondaryColors: "Graphite #111827, Mist #E5E7EB",
    effects: "Hosted standalone Vite React site previewed through an iframe",
    bestFor: "Showcasing production-ready landing pages, hero sections, and microsites",
    doNotUseFor: "Inline code extraction or prompt generation inside the gallery",
    lightMode: "✓ Full",
    darkMode: "✓ Full",
    performance: "⚡ Hosted",
    accessibility: "◐ Varies by site",
    mobileFriendly: "✓ Responsive",
    conversionFocused: "✓ High",
    era: "2026 Showcase",
    complexity: "Medium",
    aiPrompt: "Hosted external site. Open the live preview to inspect the full implementation.",
    cssKeywords: "vite, react, tailwind, iframe, hosted showcase"
} as const;

const createExternalStyle = (site: ExternalSiteManifestEntry, no: number): Style => ({
    no,
    name: site.name,
    type: site.type,
    keywords: site.keywords,
    primaryColors: `Hosted Accent ${site.accentColor}`,
    secondaryColors: EXTERNAL_SITE_DEFAULTS.secondaryColors,
    effects: EXTERNAL_SITE_DEFAULTS.effects,
    bestFor: EXTERNAL_SITE_DEFAULTS.bestFor,
    doNotUseFor: EXTERNAL_SITE_DEFAULTS.doNotUseFor,
    lightMode: EXTERNAL_SITE_DEFAULTS.lightMode,
    darkMode: EXTERNAL_SITE_DEFAULTS.darkMode,
    performance: EXTERNAL_SITE_DEFAULTS.performance,
    accessibility: EXTERNAL_SITE_DEFAULTS.accessibility,
    mobileFriendly: EXTERNAL_SITE_DEFAULTS.mobileFriendly,
    conversionFocused: EXTERNAL_SITE_DEFAULTS.conversionFocused,
    era: EXTERNAL_SITE_DEFAULTS.era,
    complexity: EXTERNAL_SITE_DEFAULTS.complexity,
    aiPrompt: EXTERNAL_SITE_DEFAULTS.aiPrompt,
    cssKeywords: EXTERNAL_SITE_DEFAULTS.cssKeywords,
    source: "external",
    externalSite: {
        slug: site.slug,
        previewUrl: site.previewUrl,
        liveUrl: site.liveUrl,
        description: site.description
    }
});

export const loadExternalStyles = async (startingNo: number): Promise<Style[]> => {
    const response = await fetch(EXTERNAL_SITES_MANIFEST_PATH, {
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error(`Unable to load hosted site manifest (${response.status})`);
    }

    const manifest = (await response.json()) as ExternalSiteManifest;

    return manifest.sites.map((site, index) => createExternalStyle(site, startingNo + index));
};
