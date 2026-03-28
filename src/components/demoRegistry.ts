import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type DemoView = ComponentType;
type DemoComponent = LazyExoticComponent<DemoView>;

const demoNames = {
    1: "MinimalistSwissDemo",
    2: "NeumorphismDemo",
    3: "GlassmorphismDemo",
    4: "BrutalismDemo",
    5: "HyperrealismDemo",
    6: "VibrantBlockDemo",
    7: "OLEDDemo",
    8: "AccessibleEthicalDemo",
    9: "ClaymorphismDemo",
    10: "AuroraDemo",
    11: "RetroFuturismDemo",
    12: "FlatDesignDemo",
    13: "SkeuomorphismDemo",
    14: "LiquidGlassDemo",
    15: "MotionDrivenDemo",
    16: "MicroInteractionsDemo",
    17: "InclusiveDesignDemo",
    18: "ZeroInterfaceDemo",
    19: "SoftUIEvolutionDemo",
    20: "HeroCentricDemo",
    21: "ConversionOptimizedDemo",
    22: "FeatureRichShowcaseDemo",
    23: "MinimalDirectDemo",
    24: "SocialProofFocusedDemo",
    25: "InteractiveProductDemo",
    26: "TrustAuthorityDemo",
    27: "StorytellingDrivenDemo",
    28: "DataDenseDashboardDemo",
    29: "HeatMapStyleDemo",
    30: "ExecutiveDashboardDemo",
    31: "RealTimeMonitoringDemo",
    32: "DrillDownAnalyticsDemo",
    33: "ComparativeAnalysisDemo",
    34: "PredictiveAnalyticsDemo",
    35: "UserBehaviorAnalyticsDemo",
    36: "FinancialDashboardDemo",
    37: "SalesIntelligenceDemo",
    38: "NeubrutalismDemo",
    39: "BentoBoxGridDemo",
    40: "Y2KAestheticDemo",
    41: "CyberpunkUIDemo",
    42: "OrganicBiophilicDemo",
    43: "AINativeUIDemo",
    44: "MemphisDesignDemo",
    45: "VaporwaveDemo",
    46: "DimensionalLayeringDemo",
    47: "ExaggeratedMinimalismDemo",
    48: "KineticTypographyDemo",
    49: "ParallaxStorytellingDemo",
    50: "SwissModernismDemo",
    51: "HUDTechDemo",
    52: "PixelArtDemo",
    53: "BentoGridDemo",
    54: "SpatialUIDemo",
    55: "EInkPaperDemo",
    56: "GenZChaosDemo",
    57: "BiomimeticOrganicDemo",
    58: "AntiPolishRawDemo",
    59: "TactileDigitalDemo",
    60: "NatureDistilledDemo",
    61: "InteractiveCursorDemo",
    62: "VoiceMultimodalDemo",
    63: "Product3DPreviewDemo",
    64: "AuroraEvolvedDemo",
    65: "EditorialMagazineDemo",
    66: "RGBSplitDemo",
    67: "VintageRetroDemo"
} as const;

const demoModuleLoaders = import.meta.glob("./demos/*.tsx");
const demoSourceLoaders = import.meta.glob("./demos/*.tsx", { query: "?raw", import: "default" });

const createLazyDemo = (demoName: string): DemoComponent =>
    lazy(async () => {
        const loader = demoModuleLoaders[`./demos/${demoName}.tsx`];

        if (!loader) {
            throw new Error(`Missing demo module for ${demoName}`);
        }

        const module = await loader();
        const component = (module as Record<string, DemoView>)[demoName];

        if (!component) {
            throw new Error(`Missing demo export ${demoName}`);
        }

        return { default: component };
    });

export const demoRegistry: Partial<Record<number, DemoComponent>> = Object.fromEntries(
    Object.entries(demoNames).map(([styleNo, demoName]) => [
        Number(styleNo),
        createLazyDemo(demoName)
    ])
);

export const getDemoSource = async (styleNo: number): Promise<{ code: string; fileName: string } | null> => {
    const demoName = demoNames[styleNo as keyof typeof demoNames];

    if (!demoName) {
        return null;
    }

    const loader = demoSourceLoaders[`./demos/${demoName}.tsx`];

    if (!loader) {
        return null;
    }

    const code = await loader();

    return {
        code: code as string,
        fileName: `${demoName}.tsx`
    };
};
