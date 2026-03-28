import { type Style } from "@/data/styles";

export type PromptGenerationMode = "recreate" | "adapt";

interface GeneratePromptOptions {
    code: string;
    fileName: string;
    mode: PromptGenerationMode;
    productBrief?: string;
    productName?: string;
    style: Style;
}

const DEFAULT_ADAPT_PRODUCT_NAME = "NovaFlow";
const DEFAULT_ADAPT_PRODUCT_BRIEF =
    "An AI operations platform for product teams to plan launches, align docs, and automate execution.";

const normalizeValue = (value: string | undefined, fallback: string) => {
    const normalized = value?.trim();

    return normalized ? normalized : fallback;
};

const analyzeMinimalistSwissCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasDarkShowcase: code.includes("bg-black text-white"),
    hasFooterGrid: code.includes("grid-cols-2 md:grid-cols-4 lg:grid-cols-6"),
    hasStickyNavigation: code.includes("sticky top-0"),
    hasSwissHeroGrid: code.includes("grid-cols-12"),
    usesSquareButtons: code.includes("rounded-none")
});

const analyzeNeumorphismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-0"),
    hasFloatingActionBar: code.includes("fixed bottom-10"),
    hasInsetShowcase: code.includes("shadow-[inset_12px_12px_24px"),
    hasTerminalPreview: code.includes("vicode deploy --mesh"),
    hasSoftIllustrationCard: code.includes("aspect-square"),
    usesPressStates: code.includes("hover:shadow-[inset") || code.includes("hover:shadow-inner")
});

const analyzeGlassmorphismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasAuroraMeshBackground: code.includes("blur-[150px]") || code.includes("mix-blend-plus-lighter"),
    hasStickyGlassNav: code.includes("sticky top-4") && code.includes("backdrop-blur-[60px]"),
    hasFloatingGlassBar: code.includes("sticky bottom-6"),
    hasGlassShowcase: code.includes("backdrop-blur-[100px]") || code.includes("bg-[#050b09]/40"),
    hasGradientBranding: code.includes("bg-gradient-to-tr") || code.includes("bg-gradient-to-r"),
    hasTerminalPreview: code.includes("vicode deploy --aurora")
});

const analyzeBrutalismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-0"),
    hasHardBorders: code.includes("border-2 border-black"),
    usesPrimaryColorBlocks: code.includes("#FF0000") || code.includes("#0000FF") || code.includes("#FFFF00"),
    hasGridTerminalSection: code.includes("TERMINAL://") || code.includes("vicode deploy --mesh"),
    hasFloatingCTA: code.includes("fixed bottom-10 right-10"),
    usesTransitionNone: code.includes("transition-none")
});

const analyzeHyperrealismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-4"),
    hasPerspectiveHero: code.includes("perspective-[1000px]") || code.includes("rotate-y-6"),
    has3DAssetStage: code.includes("vicode_hyperreal_server.png") || code.includes("drop-shadow-[0_20px_40px"),
    hasAnalyticsShowcase: code.includes("construct --mesh global") || code.includes("System_Active_Region_Alpha"),
    hasFloatingConsole: code.includes("fixed bottom-10 left-[calc(320px+((100vw-320px)/2))]"),
    usesGlossySurfaces: code.includes("backdrop-blur-2xl") || code.includes("shadow-[0_20px_50px")
});

const analyzeVibrantBlockCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-4"),
    hasBlockyAssetStage: code.includes("vicode_vibrant_robot.png") || code.includes("shadow-[12px_12px_0_#000]"),
    hasFixedCTA: code.includes("fixed bottom-10 right-10"),
    usesPlayfulColorBlocks: code.includes("#8B5CF6") || code.includes("#FFD600") || code.includes("#EC4899"),
    hasCodePreview: code.includes("npm install vicode-core") || code.includes("SUCCESS_82ms"),
    hasPulseAnimation: code.includes("pulse-vibe")
});

const analyzeOLEDCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasFixedAtmosphere: code.includes("fixed inset-0") || code.includes("bg-[linear-gradient(rgba(147,51,234,0.03)"),
    hasStickyHeader: code.includes("sticky top-4"),
    hasObsidianAssetStage: code.includes("vicode_oled_obsidian_server.png") || code.includes("SYNCING_CLUSTER"),
    hasTerminalSection: code.includes("root@obsidian:~$") || code.includes("Global_Status_Online_12ms"),
    hasFloatingCTA: code.includes("fixed bottom-10 right-10"),
    usesGlowPalette: code.includes("#9333ea") || code.includes("#3b82f6"),
    usesRoundedStealthChrome: code.includes("rounded-full") && code.includes("border border-white/5")
});

const analyzeAccessibleEthicalCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-6"),
    hasHumanCentricHero: code.includes("vicode_inclusive_team.png") || code.includes("Radical Accessibility Active"),
    hasTransparencySection: code.includes("Open Source Pledge") || code.includes("Radical\\nTransparency") || code.includes("Radical\nTransparency"),
    hasFocusStates: code.includes("focus:ring") || code.includes("aria-label"),
    hasFixedSupportCTA: code.includes("fixed bottom-12 right-12"),
    usesTrustPalette: code.includes("#4F46E5") || code.includes("#0F172A"),
    hasMetricsGrid: code.includes("Accessibility") && code.includes("AES-256")
});

const analyzeClaymorphismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-6"),
    hasSoftAssetStage: code.includes("vicode_clay_cloud_robot.png") || code.includes("rounded-[64px]"),
    hasJoyTerminal: code.includes("vicode deploy --joy") || code.includes("SOFT_SUCCESS_12ms"),
    hasFloatingCTA: code.includes("fixed bottom-12 right-12"),
    hasBounceAnimation: code.includes("bounce-soft"),
    usesInflatedChrome: code.includes("inset_") && code.includes("shadow-["),
    usesPlayfulSoftPalette: code.includes("#6366F1") || code.includes("#EC4899") || code.includes("#3B82F6")
});

const analyzeAuroraCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-6"),
    hasAtmosphericMesh: code.includes("blur-[160px]") || code.includes("noise.svg"),
    hasAuroraAssetStage: code.includes("vicode_aurora_core_engine.png") || code.includes("Atmosphere_Ready"),
    hasLumineTerminal: code.includes("vicode deploy --aurora") || code.includes("CLUSTER_ONLINE_12MS"),
    hasStickyActionButton: code.includes("sticky bottom-12"),
    usesGradientAura: code.includes("from-indigo-500") || code.includes("via-violet-500") || code.includes("to-cyan-500"),
    usesGlassSurfaces: code.includes("backdrop-blur-3xl") || code.includes("bg-white/5")
});

const analyzeRetroFuturismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasScanlineOverlay: code.includes("repeating-linear-gradient") || code.includes("animate-scan"),
    hasGridFloor: code.includes("rotateX(60deg)") || code.includes("backgroundSize: '40px 40px'"),
    hasStickyHeader: code.includes("sticky top-6"),
    hasCRTStage: code.includes("System_Load_Active") || code.includes("Chrome className"),
    hasTerminalSection: code.includes("vicode.exe --run") || code.includes("SUCCESS_LOAD_2026"),
    hasFixedCTA: code.includes("fixed bottom-12 right-12"),
    usesNeonPalette: code.includes("#00FFFF") || code.includes("#FF00FF"),
    usesMonospaceChrome: code.includes("font-mono") || code.includes("ViCode.exe"),
    hasFlickerMotion: code.includes("animate-flicker") || code.includes("@keyframes flicker")
});

const analyzeFlatDesignCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasStickyHeader: code.includes("sticky top-6"),
    hasFlatAssetStage: code.includes("vicode_flat_server_illustration.png") || code.includes("System_Online"),
    hasTerminalSection: code.includes("vicode deploy --clear") || code.includes("STACK_SIMPLIFIED_v2.0"),
    hasFixedCTA: code.includes("fixed bottom-12 right-12"),
    usesNoShadowLanguage: code.includes("shadow-none") || code.includes("transition-none"),
    usesSolidPalette: code.includes("bg-blue-600") || code.includes("bg-emerald-500"),
    has2DProofSection: code.includes("PURE.<br />FLAT.") || code.includes("2D_ENGINE_ACTIVE")
});

const analyzeSkeuomorphismCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasTextureOverlay: code.includes("noise.svg") || code.includes("mix-blend-overlay"),
    hasStickyHeader: code.includes("sticky top-6"),
    hasBrushedMetalHeader: code.includes("bg-gradient-to-b from-[#334155] to-[#1E293B]") || code.includes("animate-shimmer"),
    hasIndustrialAssetStage: code.includes("Operational_State") || code.includes("Monitor className"),
    hasHeavyTerminalSection: code.includes("deploy --heavy") || code.includes("DONE_LOAD_UNIT_88"),
    hasFixedPowerCTA: code.includes("fixed bottom-12 right-12"),
    usesPhysicalDepth: code.includes("border-t-8") || code.includes("shadow-[0_12px_25px") || code.includes("inset_0_4px_10px"),
    usesIndustrialPalette: code.includes("#334155") || code.includes("#1E293B") || code.includes("text-blue-500"),
    hasMechanicalMetrics: code.includes("PSI: 1200_STABLE") || code.includes("ASSEMBLY: 44.1A")
});

const analyzeLiquidGlassCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasCustomGlassPrimitive: code.includes("const LiquidGlassEffect") || code.includes("Specular Highlight Layer"),
    hasSVGDistortionFilter: code.includes("feTurbulence") || code.includes("feDisplacementMap") || code.includes("url(#lg-dist)"),
    hasMacOSBackground: code.includes("macos_bg.jpg"),
    hasGlassHeader: code.includes("LiquidGlassEffect className=\"rounded-full w-full max-w-fit\""),
    hasHeroNodeMonitor: code.includes("Node_Cluster_X88") || code.includes("V-Engine_Live"),
    hasLiquidTerminalSection: code.includes("deploy --as-liquid") || code.includes("FLUIDIZED_SYSTEM_ACTIVE"),
    hasBottomGlassToggle: code.includes("absolute bottom-12 right-12") || code.includes("Droplets"),
    usesWhiteGlassPalette: code.includes("bg-white/[0.25]") || code.includes("text-white/40"),
    usesBackdropBlur: code.includes("backdropFilter") || code.includes("backdrop-blur-sm")
});

const analyzeMotionDrivenCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 6,
    hasScrollReactiveHeader: code.includes("setScrolled") && code.includes("backdrop-blur-xl") && code.includes("scale-95"),
    hasAnimatedGridBackground: code.includes("animate-grid-drift"),
    hasStaggeredHero: code.includes("stagger-text") && code.includes("animate-slide-in-left") && code.includes("animate-slide-in-right"),
    hasMarqueeBand: code.includes("animate-marquee"),
    hasKineticConsole: code.includes("vicode deploy --kinetic --global") || code.includes("DOMAIN ACCELERATION ACTIVE"),
    hasParallaxDecor: code.includes("animate-bounce") || code.includes("animate-spin-slow"),
    usesAccentLime: code.includes("#D9F99D"),
    hasCustomKeyframes: code.includes("@keyframes marquee") || code.includes("@keyframes grid-drift")
});

const analyzeMicroInteractionsCode = (code: string) => ({
    feedbackCardCount: (code.match(/<FeedbackCard/g) || []).length || 3,
    hasScrollReactiveHeader: code.includes("setScrolled") && code.includes("backdrop-blur-xl"),
    hasToastFeedback: code.includes("System_Node_Synchronized") || code.includes("setNotif"),
    hasProcessingButton: code.includes("setProcessing") && code.includes("Processing...") && code.includes("progress"),
    hasInteractiveHeroCard: code.includes("micro_tactile.png") && code.includes("rotate-x-6") && code.includes("rotate-y-[-6deg]"),
    hasFloatingMetricCard: code.includes("animate-float") && code.includes("NODE_THROUGHPUT"),
    hasShimmerProgress: code.includes("animate-shimmer") || code.includes("@keyframes shimmer"),
    hasStatusFooterBlock: code.includes("active_processes") && code.includes("Cloud_Sync"),
    usesIndigoFeedbackPalette: code.includes("bg-indigo-600") || code.includes("text-indigo-600"),
    hasReusableHoverCard: code.includes("const FeedbackCard")
});

const analyzeInclusiveDesignCode = (code: string) => ({
    featureCount: (code.match(/title:\s*"/g) || []).length || 4,
    hasAccessibilityToolbar: code.includes("Universal_A11y_Tools") && code.includes("High_Contrast_"),
    hasContrastToggle: code.includes("setContrast") && code.includes("High_Contrast_ON"),
    hasFontScaling: code.includes("setFontSize") && code.includes("Zoom_("),
    hasStickyShortcutBar: code.includes("sticky top-0 z-[100]"),
    hasRepresentativeHero: code.includes("inclusive_vicode.png") && code.includes("Accessibility_Health"),
    hasAAAComplianceBadge: code.includes("WCAG_2.2_AAA_Compliant_Platform"),
    hasStatusFooter: code.includes("Accessibility_Status") && code.includes("100%_PASS"),
    usesDualPalette: code.includes("#FDE047") && code.includes("#0F172A"),
    hasTestimonialBlock: code.includes("Finally, a SaaS platform") || code.includes("User_Impact")
});

const analyzeZeroInterfaceCode = (code: string) => ({
    hasAmbientBackground: code.includes("fiber-paper.png") || code.includes("radial-gradient(circle_at_50%_50%"),
    hasMinimalHeader: code.includes("ViCode.Invisible") && code.includes("opacity-20 hover:opacity-100"),
    hasMountReveal: code.includes("setVisible(true)") && code.includes("transition-all duration-1000"),
    hasRippleInteraction: code.includes("setRippling") && code.includes("animate-ripple"),
    hasHeroImageStage: code.includes("zen_vicode.png") && code.includes("Listening_to_Void"),
    hasIntentInput: code.includes("State your engineering intent") && code.includes("setIntent"),
    hasGhostMetrics: code.includes("Flow") && code.includes("Ambient") && code.includes("bottom-12 left-12 right-12"),
    hasVoiceActions: code.includes("Mic2") && code.includes("Search"),
    usesSoftPaperPalette: code.includes("#FAFAFA") && code.includes("border-black/5"),
    hasProgressiveDisclosure: code.includes("opacity-20 hover:opacity-80") || code.includes("opacity-20 hover:opacity-100")
});

const analyzeSoftUIEvolutionCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 4,
    planCount: (code.match(/n:\s*"/g) || []).length || 3,
    hasSoftFloatingHeader: code.includes("rounded-[32px]") && code.includes("shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff]"),
    hasPressedCTAState: code.includes("setActive") && code.includes("shadow-inner scale-95"),
    hasBillingToggle: code.includes("setBilling") && code.includes("Yearly_(-20%)"),
    hasHeroStatsCard: code.includes("CPU_Load") && code.includes("Security") && code.includes("Latency"),
    hasLogoWall: code.includes("Trusted_by_Engineering_Giants") && code.includes("GitHub"),
    hasTestimonialBlock: code.includes("The Soft UI Evolution isn't just a design choice") || code.includes("Sarah_Jenkins"),
    usesAccessibleSoftPalette: code.includes("bg-[#F1F5F9]") && code.includes("text-teal-600"),
    usesOuterAndInnerSoftDepth: code.includes("shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]") || code.includes("shadow-[inset_4px_4px_8px_#d1d5db")
});

const analyzeHeroCentricCode = (code: string) => ({
    capabilityCount: (code.match(/t:\s*"/g) || []).length || 4,
    hasAbsoluteHeader: code.includes("absolute top-0 left-0 right-0 z-50"),
    hasFullHeroSection: code.includes("min-h-[85vh]"),
    hasImmersiveGlowBackground: code.includes("bg-indigo-600/10") && code.includes("bg-emerald-600/10"),
    hasDominantHeroMedia: code.includes("ViCode Cyber Dashboard") && code.includes("h-[500px]"),
    hasFloatingHeroMetric: code.includes("animate-bounce-slow") && code.includes("Compute"),
    hasTrustBar: code.includes("Synchronized_with_Global_Network") && code.includes("TITAN"),
    hasFocusedCTABlock: code.includes("Initialize_Sync?") && code.includes("Upgrade_To_Mesh_Pro"),
    usesDarkConversionPalette: code.includes("bg-[#0A0A0B]") && code.includes("text-indigo-400") && code.includes("text-emerald-400"),
    hasCapabilityRail: code.includes("Atomic_Consistency") && code.includes("Neural_Mesh")
});

const analyzeConversionOptimizedCode = (code: string) => ({
    valuePropCount: (code.match(/t:\s*"/g) || []).length || 3,
    planCount: (code.match(/Sync_Starter|Sync_Pro/g) || []).length || 2,
    hasAbsoluteHeader: code.includes("absolute top-0 left-0 right-0 z-50"),
    hasUrgencyBadge: code.includes("Limited_Beta: 40_slots_remaining_this_week"),
    hasHeroForm: code.includes("Enter_Engineering_Email") && code.includes("handleSubmit"),
    hasLoadingCTA: code.includes("Synchronizing...") && code.includes("setLoading"),
    hasAvatarTrustProof: code.includes("Trusted by") && code.includes("12,400+ Systems_Engineers"),
    hasLogoGrid: code.includes("TITAN_GRID") && code.includes("MESH_LABS"),
    hasDarkTestimonial: code.includes("Sync V2 cut our infrastructure drift by 94%") || code.includes("Marcus_Vane"),
    usesEmeraldConversionPalette: code.includes("bg-emerald-600") && code.includes("text-emerald-600")
});

const analyzeFeatureRichShowcaseCode = (code: string) => ({
    capabilityCount: (code.match(/t:\s*"/g) || []).length || 4,
    hasAbsoluteHeader: code.includes("absolute top-0 left-0 right-0 z-50"),
    hasBalancedHero: code.includes("min-h-[90vh]") && code.includes("The OS for"),
    hasFloatingHeroCard: code.includes("Scaling_Safe") && code.includes("Nodes/sec"),
    hasCoreCapabilityGrid: code.includes("Multi_Node_Capabilities") && code.includes("Atomic Registry"),
    hasDeepDiveSections: code.includes("Sovereign_Control.") && code.includes("Atomic_Sync."),
    hasGovernanceConsole: code.includes("vicode deploy --target global --policy sovereign") || code.includes("DEPLOYMENT_SUCCESS_CONSENSUS_REACHED"),
    hasPricingCTASection: code.includes("Ready_to_Register?") && code.includes("Upgrade_To_Mesh_Pro"),
    usesIndigoShowcasePalette: code.includes("bg-indigo-600") && code.includes("text-indigo-600"),
    hasBadgeSystem: code.includes("Governance_Console") && code.includes("Registry_Pulse")
});

const analyzeMinimalDirectCode = (code: string) => ({
    valueStackCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasAbsoluteHeader: code.includes("absolute top-0 left-0 right-0 z-50"),
    hasMassiveHero: code.includes("min-h-[90vh]") && code.includes("Universal") && code.includes("Protocol."),
    hasSingleColumnValueStack: code.includes("max-w-2xl mx-auto space-y-32"),
    hasSpecsGrid: code.includes("Propagation") && code.includes("Uptime") && code.includes("Latency"),
    hasSinglePlanPricing: code.includes("Mesh_Pricing.") && code.includes("$29") && code.includes("Synchronize_Plan"),
    hasMinimalFooter: code.includes("API_REF") && code.includes("GOVERNANCE") && code.includes("Sovereign_Compliance_Verified"),
    usesMonochromePalette: code.includes("bg-white text-black") && code.includes("border-black/5"),
    hasTrustWordRow: code.includes("TITAN") && code.includes("AURORA") && code.includes("VOID")
});

const analyzeSocialProofFocusedCode = (code: string) => ({
    testimonialCount: (code.match(/n:\s*"/g) || []).length || 6,
    metricCount: (code.match(/<MetricBlock/g) || []).length || 4,
    hasAbsoluteHeader: code.includes("absolute top-0 left-0 right-0 z-50"),
    hasAwardBadgeHero: code.includes("Voted_#1_SaaS_Infrastructure_of_2026"),
    hasHeroMetricCards: code.includes("Sync_Success") && code.includes("Global_Wait") && code.includes("Security") && code.includes("Growth"),
    hasLogoWall: code.includes("Synchronized_With_Industry_Titans") && code.includes("NOVA_LABS"),
    hasTestimonialMosaic: code.includes("Voices_from_the_Edge") && code.includes("Clinical_Evidence_from_Elite_Engineers"),
    hasCaseStudySection: code.includes("Case_Study: Global_Optimization") && code.includes("How_Zenith_Co_Saved"),
    hasClosingConsensusCTA: code.includes("The_Future_is_Verified.") && code.includes("Join_12,400+_Engineers_Already_in_the_Mesh"),
    usesTrustIndigoPalette: code.includes("bg-indigo-600") && code.includes("text-indigo-600") && code.includes("text-emerald-400")
});

const analyzeInteractiveProductDemoCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasLiveHeaderChip: code.includes("Engine_v4.2_Live"),
    hasTabbedSimulation: code.includes("setActiveTab") && code.includes("'sync' | 'secure' | 'scale'"),
    hasSyncExecutionState: code.includes("setIsSyncing") && code.includes("Propagating..."),
    hasHeroDashboardPreview: code.includes("Global_Grid_Status") && code.includes("42,400 Nodes_Synced"),
    hasTooltipGuide: code.includes("This is a live simulation. Click the tabs on the left to swap modules."),
    hasRegistryConsole: code.includes("Registry_Console_v2") && code.includes("Interaction_Logs_Feed"),
    hasInteractiveFeatureGrid: code.includes("Deep Inspections") && code.includes("Atomic Rollbacks") && code.includes("Smart Tooltips"),
    hasProductCtaSection: code.includes("The_Console_is_Waiting.") && code.includes("Activate_Free_Node"),
    usesDarkLabPalette: code.includes("bg-slate-950") && code.includes("bg-indigo-600") && code.includes("text-emerald-400")
});

const analyzeTrustAuthorityCode = (code: string) => ({
    complianceCount: (code.match(/<ComplianceItem/g) || []).length || 5,
    statBlockCount: (code.match(/<StatBlock/g) || []).length || 4,
    hasAbsoluteHeader: code.includes("absolute top-0 left-0 right-0 z-50"),
    hasCorporateHero: code.includes("The Infrastructure") && code.includes("of_Absolute_Trust."),
    hasStatusOverlayCard: code.includes("Global_Status_Pulse") && code.includes("99.999%_Verified"),
    hasComplianceStrip: code.includes("SOC2_TYPE_II") && code.includes("PCI_DSS_L1"),
    hasTrustedLogos: code.includes("Trusted_by_Fortune_500_Leaders") && code.includes("GLOBAL_GEN"),
    hasAuthorityMetricGrid: code.includes("Proven_Performance.") && code.includes("Zero_Guesswork."),
    hasCorporateCta: code.includes("Secure_Your_Infrastructure Future_Today.") && code.includes("Contact_Enterprise_Sales"),
    usesEnterpriseBluePalette: code.includes("#1E3A8A") && code.includes("text-blue-700") && code.includes("text-slate-500")
});

const analyzeStorytellingDrivenCode = (code: string) => ({
    chapterCount: (code.match(/CHAPTER/g) || []).length + ((code.match(/CLIMAX/g) || []).length > 0 ? 1 : 0) || 4,
    narrativeCardCount: (code.match(/t:\s*"/g) || []).length || 3,
    climaxStatCount: (code.match(/l:\s*"/g) || []).length || 4,
    hasStickyNarrativeNav: code.includes("story-scroll-container") && code.includes("scrollProgress") && code.includes("I_Origination"),
    hasProgressLine: code.includes("style={{ width: `${scrollProgress}%` }}"),
    hasScrollCueHero: code.includes("Scroll_Into_The_Consensus"),
    hasDarkFrictionChapter: code.includes("A_Global_Pulse") && code.includes("+400ms_Drift"),
    hasNarrativeCardGrid: code.includes("The Pulse") && code.includes("The Memory") && code.includes("The Reach"),
    hasLegacyMetricsClimax: code.includes("A_New_Era_of_Scale.") && code.includes("42.4k"),
    hasStoryFooter: code.includes("Join_The_Tale") && code.includes("Characters") && code.includes("STORY_ENGINE_v4.2"),
    usesAlternatingLightDarkActs: code.includes("bg-slate-950 text-white") && code.includes("bg-white"),
    usesIndigoNarrativePalette: code.includes("bg-indigo-600") && code.includes("text-indigo-400")
});

const analyzeNeubrutalismCode = (code: string) => ({
    featureCount: (code.match(/i:\s*(Layers|Fingerprint|Cpu|Terminal|Zap|Monitor)/g) || []).length || 6,
    planCount: (code.match(/n:\s*"/g) || []).length || 3,
    hasStickyHeader: code.includes("sticky top-0 z-[100]"),
    hasHeroImageStage: code.includes("Verified_Hardware") && code.includes("object-cover border-4 border-black"),
    hasHardOffsetShadows: code.includes("shadow-[4px_4px_0px_#000]") || code.includes("shadow-[16px_16px_0px_#000]"),
    hasLogoWall: code.includes("Hard-Coded_Trust_Partners") && code.includes("Github") && code.includes("Figma") && code.includes("Slack"),
    hasPricingToggle: code.includes("setBilling") && code.includes("Monthly") && code.includes("Yearly"),
    hasPopularPlanBadge: code.includes("ELITE_NODE"),
    hasTestimonialSlab: code.includes("The raw speed of ViCodeNeu is disturbing") && code.includes("HeavyTech"),
    hasFinalCtaBand: code.includes("BUILD_OR_FAIL.") && code.includes("GET_STARTED"),
    usesPopPalette: code.includes("#fde047") && code.includes("#f0abfc") && code.includes("#22d3ee"),
    usesHeavyUppercaseCopy: code.includes("font-black uppercase") && code.includes("No gradients. No compromises.")
});

const analyzeBentoBoxGridCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasStickyBentoNav: code.includes("backdrop-blur-xl") && code.includes("rounded-[24px] sticky top-0"),
    hasAsymmetricHeroGrid: code.includes("md:grid-cols-4 grid-rows-6 md:grid-rows-3"),
    hasPrimaryTitleTile: code.includes("Modular.<br />Logic.<br />Scale.") && code.includes("V.90.2_Production_Live"),
    hasVerticalImageTile: code.includes("Hardware_Integration") && code.includes("Silicon-Native_Performance."),
    hasMetricTile: code.includes("Compute_Efficiency") && code.includes("99.8%"),
    hasShellAccessTile: code.includes("Shell_Access_Control.") && code.includes("Deploy_Globally_with_single_command"),
    hasMinimalLogoWall: code.includes("Silicon_Native_Architectures") && code.includes("Github") && code.includes("ShieldCheck"),
    hasDarkPricingShell: code.includes("Scale-Your-Impact.") && code.includes("Onboard_Infrastructure"),
    hasModularFooter: code.includes("The_Modular_Void.") && code.includes("Terminal_API"),
    usesAppleIndigoPalette: code.includes("bg-[#fcfcfd]") && code.includes("bg-indigo-600") && code.includes("text-slate-400"),
    usesLargeRoundedTiles: code.includes("rounded-[40px]") && code.includes("rounded-[56px]")
});

const analyzeY2KAestheticCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasGridOverlay: code.includes("rgba(0,255,255,0.05)_1.5px") && code.includes("bg-[size:50px_50px]"),
    hasChromeBlobAtmosphere: code.includes("bg-[#FF69B4]/15") && code.includes("bg-[#00FFFF]/10"),
    hasFloatingStars: code.includes("Star className") && code.includes("animate-spin-slow"),
    hasChromeGelNav: code.includes("bg-gradient-to-b from-white/20 to-transparent") && code.includes("backdrop-blur-2xl"),
    hasGiantHeroHeadline: code.includes("CHROME.<br />LOGIC.<br />FLOW.") && code.includes("mix-blend-difference"),
    hasLiquidMetalStage: code.includes("bg-gradient-to-br from-white via-[#C0C0C0] to-zinc-600") && code.includes("rounded-[60px] p-1.5"),
    hasFloatingHudWidgets: code.includes("animate-bounce-slow") && code.includes("Cpu className") && code.includes("Activity className"),
    hasChromeLogoWall: code.includes("Network_Infrastructure_Global") && code.includes("group-hover:scale-150"),
    hasBubbleFeatureGrid: code.includes("Iridescent_Tools.") && code.includes("Logic_Gel") && code.includes("Cyber_Vault"),
    hasCyberPricingSection: code.includes("HOLOGRAPHIC.<br />SCALE.") && code.includes("JOIN_THE_FUTURE"),
    hasGhostFooterWord: code.includes("STATIC") && code.includes("Vi_Code.2K"),
    usesNeonChromePalette: code.includes("#FF69B4") && code.includes("#00FFFF") && code.includes("#C0C0C0")
});

const analyzeCyberpunkUICode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasScanlineOverlay: code.includes("rgba(18,16,16,0)_50%") && code.includes("bg-[size:100%_2px,3px_100%]"),
    hasAngularHudNav: code.includes("sticky top-0") && code.includes("INIT_UPLINK") && code.includes("VER_4.1.0_STABLE"),
    hasGlitchHeadline: code.includes("CODE.<br />OR_DIE.") && code.includes("animate-glitch-slow") && code.includes("animate-glitch-fast"),
    hasHudStatsRow: code.includes("LATENCY") && code.includes("THREAT_LVL") && code.includes("UPTIME") && code.includes("NODES"),
    hasTerminalFrameHero: code.includes("REMOTE_SESSION_ACTIVE") && code.includes("DECRYPTING_INFRASTRUCTURE_MODULE_B: COMPLETE"),
    hasAngularDecorations: code.includes("border-r-2 border-t-2 border-[#FF00FF]/50") && code.includes("border-l-2 border-b-2 border-cyan-500/50"),
    hasMonospacedLogoWall: code.includes("CRITICAL_SYSTEM_PARTNERS") && code.includes("grayscale invert opacity-60"),
    hasHudFeatureGrid: code.includes("Decoupled.<br />Hardened.") && code.includes("READ_SOURCE"),
    hasTerminalPricingShell: code.includes("PROTOCOL_LOADED: BILLING_MODULE_X") && code.includes("ACCEPT_TERMS_AND_DEPLOY"),
    hasTechNoirFooter: code.includes("SYSTEM_STABLE // NO_ERRORS_DETECTED // GRID_ONLINE") && code.includes("KERNEL_LOGS"),
    usesMatrixPalette: code.includes("#00FF00") && code.includes("#FF00FF") && code.includes("#00FFFF"),
    usesMonospaceChrome: code.includes("font-mono") && code.includes("text-[9px] font-mono")
});

const analyzeOrganicBiophilicCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasBreathableNav: code.includes("backdrop-blur-3xl") && code.includes("rounded-[40px] sticky top-4"),
    hasClimateNeutralHero: code.includes("CLIMATE_NEUTRAL_INFRASTRUCTURE") && code.includes("Code that <br /> <span className=\"text-[#588157] italic\">Breathes</span> Life."),
    hasGrowthStats: code.includes("Renewable_Energy") && code.includes("Carbon_Footprint"),
    hasOrganicFrameStage: code.includes("rounded-[80px_40px_100px_40px]") && code.includes("rounded-[60px_30px_80px_30px]"),
    hasBotanicalOverlayCard: code.includes("Pulse_Vitality: OPTIMAL") && code.includes("Ecosystem_Synced"),
    hasNatureAccents: code.includes("Flower2") && code.includes("animate-spin-slow") && code.includes("Leaf className=\"absolute -bottom-8 -left-8"),
    hasEcoLogoWall: code.includes("Stewards_of_the_Modern_Web") && code.includes("rounded-[60px]"),
    hasEcoPodsFeatureGrid: code.includes("Naturally Built Systems.") && code.includes("Mycelial_Sync") && code.includes("Deep_Root_Security"),
    hasTerraPricingShell: code.includes("Sustainability <br /> meets Scale.") && code.includes("JOIN_THE_CLUSTERS"),
    hasGhostFooterWord: code.includes("NATURALLY_OPTIMIZED") && code.includes("Architected_Symbiotically_©2026"),
    usesEarthyPalette: code.includes("#344e41") && code.includes("#588157") && code.includes("#a3b18a") && code.includes("#dad7cd")
});

const analyzeAINativeUICode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasNeuralMeshBackground: code.includes("bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_1px,transparent_1px)]") && code.includes("animate-pulse"),
    hasAdaptivePillNav: code.includes("rounded-[32px]") && code.includes("Summon_Intelligence") && code.includes("ViCode_AI"),
    hasSentientStatusBadge: code.includes("GENERATIVE_SYSTEM_STATUS: SENTIENT"),
    hasGradientHeroHeadline: code.includes("Intelligent. <br /> By_Design.") && code.includes("bg-gradient-to-b from-white via-white to-slate-500"),
    hasAmbientMockupStage: code.includes("REALTIME_THOUGHT_FLOW") && code.includes("INFERENCE_ACCURACY"),
    hasPulsingThoughtOrbs: code.includes("w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"),
    hasGhostPartnerGrid: code.includes("CALIBRATED_WITH_GLOBAL_MAINFRAMES") && code.includes("contrast-200"),
    hasGenerativeFeatureTiles: code.includes("Neural_Infrastructure.") && code.includes("SUMMON_SPECS"),
    hasAdaptivePricingShell: code.includes("PRICING_ENGINE_CALIBRATED") && code.includes("INITIATE_UPGRADE"),
    hasNeuralFooterLogoff: code.includes("THOUGHT_ENGINE_STABLE // NO_DIVERGENCE_DETECTED // SYNCHRONIZING_GLOBAL_NEURAL_WEIGHTS"),
    usesIndigoVioletAIPalette: code.includes("from-indigo-600 to-violet-700") && code.includes("text-indigo-400") && code.includes("text-violet-400")
});

const analyzeMemphisDesignCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasConfettiPatternField: code.includes("bg-[radial-gradient(#00A3FF_1.5px,transparent_1.5px)]") && code.includes("SQUIGGLES"),
    hasFloatingPopNav: code.includes("shadow-[8px_8px_0px_#50FA7B] sticky top-4") && code.includes("Start_Jamming"),
    hasVibeBadge: code.includes("VIBE_LEVEL_CRITICAL"),
    hasRadicalHeroHeadline: code.includes("Create. <br /> <span className=\"text-white bg-black px-4 ml-[-0.5rem] rotate-1 inline-block\">Execute.</span> <br /> Disrupt."),
    hasGeometricImageFrame: code.includes("bg-[#00A3FF] border-[4px] border-black shadow-[15px_15px_0px_#50FA7B]"),
    hasFloatingSpecsPanel: code.includes("INFRA_VITALITY: 100%") && code.includes("PATTERN_OPTIMIZED"),
    hasAsymmetricalDecorations: code.includes("Triangle className") && code.includes("Circle className") && code.includes("bg-[#FFD700]"),
    hasContrastLogoWall: code.includes("THE_RADICAL_COLLECTIVE") && code.includes("repeating-linear-gradient(45deg"),
    hasPatternedFeatureGrid: code.includes("Patterns_Over_Patience.") && code.includes("VIEW_SPECS"),
    hasRadicalPricingCard: code.includes("PRICING_MODEL: RADICAL") && code.includes("JOIN_THE_POP_OS"),
    hasMarqueeFooter: code.includes("SYSTEM_OPERATIONAL_CHECK // VIBE_REACHED_MAXIMUM // PATTERN_SYNC_COMPLETE //") && code.includes("STAY_RADICAL // NO_SAFE_COLORS // SHAPES_OVER_SHADOWS"),
    usesMemphisPalette: code.includes("#FF00FF") && code.includes("#00A3FF") && code.includes("#50FA7B") && code.includes("#FFD700")
});

const analyzeVaporwaveCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasCustomVhsStyles: code.includes("@keyframes grid-flow") && code.includes("@keyframes vhs-jitter") && code.includes(".vhs-overlay"),
    hasWireframeFloor: code.includes("perspective(600px) rotateX(65deg)") && code.includes("animate-grid-flow"),
    hasStripedSun: code.includes("sunset-gradient") && code.includes("repeating-linear-gradient(to_bottom"),
    hasRetroTerminalNav: code.includes("MAIN_OS_VER_84.EXE") && code.includes("GET_ESTHETIC") && code.includes("animate-[vhs-jitter_10s_infinite]"),
    hasVirtualizingHeroBadge: code.includes("[INFRA_STATUS: VIRTUALIZING]"),
    hasGlitchHeroTypography: code.includes("Soft_UI.") && code.includes("Hard_Performance.") && code.includes("vhs-text"),
    hasPalmAndWaveOrnaments: code.includes("Palmtree") && code.includes("Waves") && code.includes("美学"),
    hasLofiLogoWall: code.includes("G L O B A L _ C O N S U M E R _ G R I D"),
    hasDreamFeatureGrid: code.includes("Virtual_Plaza.") && code.includes("RETRIEVE_DATA_OBJ") && code.includes("記憶"),
    hasVhsPricingShell: code.includes("MEMORY_PURCHASE_OS") && code.includes("JOIN_THE_PLAZA_NOW"),
    hasBroadcastFooter: code.includes("P L E A S E _ R E W I N D _ A F T E R _ U S E") && code.includes("TAPE_POSITION: [45:00:00]"),
    usesVaporPalette: code.includes("#FF71CE") && code.includes("#01CDFE") && code.includes("#05FFA1") && code.includes("#B967FF")
});

const analyzeDimensionalLayeringCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    hasPerspectiveRoot: code.includes("perspective-[3000px]") && code.includes("transform-style: preserve-3d"),
    hasFloatLayerAnimation: code.includes("@keyframes float-layer") && code.includes("animate-[float-layer_12s_infinite]"),
    hasGlassNav: code.includes("bg-white/5 backdrop-blur-md") && code.includes("START_STACKING"),
    hasStackEngineBadge: code.includes("STACK_ENGINE: OPTIMIZED"),
    hasGradientHeroHeadline: code.includes("Deeper. <br />") && code.includes("Layered.") && code.includes("bg-gradient-to-r from-pink-500 to-blue-500"),
    hasVolumetricStackStage: code.includes("translate-z-[20px] rotate-x-[25deg] rotate-y-[-20deg]") && code.includes("VI-LAYER-OS"),
    hasMetricOverlayCard: code.includes("METRIC_LOAD") && code.includes("98"),
    hasSyncModuleCard: code.includes("V_SYNC_CORE"),
    hasStackFeatureGrid: code.includes("Anatomy_Of_The_Stack.") && code.includes("INSPECT_LAYER_OBJ"),
    hasStructuralPricingShell: code.includes("PRICING_ENGINE_V3") && code.includes("ENTER_THE_STACK"),
    hasStructuralFooter: code.includes("BUILT_ON_DIMENSIONAL_LAYERING_STRUCTURES") && code.includes("STRUCTURAL_OS_©2026"),
    usesPinkIndigoDepthPalette: code.includes("bg-[#0a0412]") && code.includes("text-pink-400") && code.includes("text-blue-400")
});

const analyzeExaggeratedMinimalismCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 4,
    hasOversizedStickyNav: code.includes("border-b-[8px] border-black") && code.includes("GET_CORE"),
    hasSystemStabilityChip: code.includes("SYSTEM_STABILITY: 100%"),
    hasMassiveHeroTypography: code.includes("Simple.</span>") && code.includes("Product.</span>") && code.includes("Hard.</span>"),
    hasVoidWatermark: code.includes("VOID") && code.includes("text-[30rem]"),
    hasTrustGridWall: code.includes("T R U S T E D _ G R I D"),
    hasTheCoreSection: code.includes("The_Core.") && code.includes("V2/ENGINE"),
    hasMassiveFeatureBlocks: code.includes("Logic_Stream") && code.includes("Admin_Port") && code.includes("min-h-[350px]"),
    hasStatementPricing: code.includes("One. <br />") && code.includes("Flat. <br />") && code.includes("Price."),
    hasFlatOsCard: code.includes("THE_OS") && code.includes("PER_INSTALLATION") && code.includes("BUY_CORE"),
    hasReductionFooter: code.includes("REDUCE_EVERYTHING_TO_THE_CORE") && code.includes("STABILITY_OVER_NOISE"),
    usesSingleBlueAccent: code.includes("text-blue-600") && code.includes("border-blue-600") && code.includes("shadow-[25px_25px_0px_#1e3a8a]")
});

const analyzeKineticTypographyCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 4,
    hasCustomMarqueeStyles: code.includes("@keyframes marquee-l") && code.includes("@keyframes marquee-r") && code.includes(".font-syncopate"),
    hasGoogleFontImport: code.includes("fonts.googleapis.com/css2?family=Syncopate") && code.includes("Space+Mono"),
    hasOrangeAccentNav: code.includes("BUILD_CORE") && code.includes("bg-[#FF5C00]") && code.includes("font-syncopate"),
    hasBackgroundHeroMarquees: code.includes("GRID_LOGIC_KINETIC_ARCHITECTURE_SYSTEMS_") && code.includes("CORE_INFINITE_SCALING_NODES_DATAPOINTS_"),
    hasKineticHeroHeadline: code.includes("Build.") && code.includes("Ship_Fast.") && code.includes("hover:tracking-[0.15em]"),
    hasAnimatedDivider: code.includes("animate-[marquee-l_1.5s_linear_infinite]"),
    hasSinglePrimaryHeroCta: code.includes("INITIALIZE") && !code.includes("READ_ROM"),
    hasMarqueeWall: code.includes("STABILITY") && code.includes("SCALABILITY") && code.includes("animate-marquee-l"),
    hasTypographicFeatureList: code.includes("Logic.Go") && code.includes("Grid.Core") && code.includes("font-syncopate"),
    hasValueModelPricing: code.includes("ONE_PLAN.") && code.includes("FULL_CORE.") && code.includes("KERNEL_ACCESS"),
    hasFooterMarquee: code.includes("VICODE_CORE") && code.includes("KINETIC_CORE_ARCHITECTURE_OS_V48"),
    usesOrangeBlackPalette: code.includes("#FF5C00") && code.includes("#FFC700") && code.includes("bg-[#0a0a0a]")
});

const analyzeParallaxStorytellingCode = (code: string) => ({
    chapterCardCount: (code.match(/t:\s*"/g) || []).length || 4,
    finalPlanFeatureCount: (code.match(/f:\s*"/g) || []).length || 4,
    hasMinimalStoryStyles: code.includes("@keyframes fade-up") && code.includes("timeline-flow") && code.includes("parallax-blob"),
    hasStickyStoryNav: code.includes("START_READING") && code.includes("The_Origin") && code.includes("sticky top-0"),
    hasOriginHero: code.includes("00_THE_INITIAL_STATE") && code.includes("Where_Code.") && code.includes("Meets_Consequence."),
    hasTimelineIndicator: code.includes("timeline-line") && code.includes("animate-[bounce_2s_infinite]"),
    hasGrowthChapter: code.includes("01 // THE_GRID_AWAKENS") && code.includes("Scaling. <br />") && code.includes("Exponential."),
    hasNarrativeLogPanel: code.includes("REALTIME_EVOLUTION_LOG") && code.includes("ACTIVE_VOYAGE"),
    hasScalingNarrativeSection: code.includes("02 // THE_SCALING_NARRATIVE") && code.includes("Modular_Architecture."),
    hasFinalActPricing: code.includes("THE_ENDLESS_MODEL") && code.includes("The_Final. <br /> Act.") && code.includes("LEGACY_PLAN_V.01"),
    hasNarrativeFooter: code.includes("vi.story") && code.includes("ARCHITECTURE_IS_NARRATIVE_IN_MOTION"),
    usesIndigoStoryAccent: code.includes("text-indigo-600") && code.includes("bg-indigo-50")
});

const analyzeSwissModernism2Code = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 4,
    metricCount: (code.match(/n:\s*"/g) || []).length || 3,
    hasSwissStyleSheet: code.includes("@import url('https://fonts.googleapis.com/css2?family=Inter") && code.includes(".swiss-grid"),
    hasTopHudBar: code.includes("h-4 bg-[#ef4444] w-full sticky top-0"),
    hasStrictNav: code.includes("VICODE_SWISS") && code.includes("SYSTEM_DOCUMENTATION_50") && code.includes("sticky top-4"),
    hasAsymmetricHeroGrid: code.includes("col-span-12 lg:col-span-8") && code.includes("col-span-12 lg:col-span-4"),
    hasObjectiveHeroClaim: code.includes("Objective. <br />") && code.includes("Infra.") && code.includes("Structure."),
    hasRealtimeStreamCard: code.includes("REAL_TIME_STREAM") && code.includes("99.99"),
    hasFourUpFeatureGrid: code.includes("Logic.Go") && code.includes("View.S") && code.includes("lg:grid-cols-4"),
    hasMetricsSpecSection: code.includes("Precision. <br /> Always.") && code.includes("VISUAL_SPEC"),
    hasBlackLicensingPricing: code.includes("LICENSING_2026") && code.includes("Fixed_Fee.") && code.includes("V_CORE_LICENCE"),
    hasSwissFooter: code.includes("SWISS_SYSTEM_2026") && code.includes("THE_CORE") && code.includes("EXIT"),
    usesRedAccentOnly: code.includes("#ef4444") && code.includes("bg-[#ef4444]") && code.includes("text-[#ef4444]")
});

const analyzeHUDTechCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 4,
    accessFeatureCount: (code.match(/Full HUD Access Interface|Real-Time Telemetry Stream|Neural Encryption Keys|24\/7 Command Support/g) || []).length || 4,
    hasFuiStyleSheet: code.includes("Share Tech Mono") && code.includes(".scanline") && code.includes(".hud-border"),
    hasLiveTelemetryState: code.includes("setCurrentTime") && code.includes("setTelemetry"),
    hasStickyHudBar: code.includes("VICODE_FUI_V51") && code.includes("LINK_ESTABLISHED") && code.includes("SECURE_ENC_256"),
    hasCommandCoreHero: code.includes("SYSCALL_01_INITIALIZED") && code.includes("NEURAL<br />INFRA.") && code.includes("INITIALIZE_DEPLOY"),
    hasLeftTelemetryRail: code.includes("SYSTEM_HEAT_MAP") && code.includes("CORE_NETWORK_ACTIVITY"),
    hasRightStatusRail: code.includes("NODE_STATUS_STREAM") && code.includes("ENCRYPTION_LAYER_V2"),
    hasMissionTicker: code.includes("MISSION_VICODE_ALPHA") && code.includes("SYNC_ING"),
    hasOperationsGrid: code.includes("01 // OPERATIONS") && code.includes("Logic.Scan") && code.includes("Sync.Link"),
    hasAccessPricingModule: code.includes("LICENSE_ACQUISITION") && code.includes("V_CORE_ELITE") && code.includes("AUTHORIZE_PURCHASE"),
    hasHudFooter: code.includes("STATION_ACTIVE_ID // ALPHA_DELTA_51") && code.includes("TERMINATE_SEC."),
    usesCyanOnObsidianPalette: code.includes("bg-[#020617]") && code.includes("text-[#22d3ee]") && code.includes("bg-slate-950")
});

const analyzePixelArtCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    tierCount: (code.match(/l:\s*"/g) || []).length || 3,
    characterCount: (code.match(/n:\s*"/g) || []).length || 4,
    hasPixelFontSystem: code.includes("Press Start 2P") && code.includes("VT323"),
    hasPixelUtilityClasses: code.includes(".pixel-border") && code.includes(".pixel-card") && code.includes(".pixel-btn"),
    hasHeartBarNav: code.includes("VICODE.RPG") && code.includes("QUESTS") && code.includes("LVL 52"),
    hasQuestHero: code.includes("NEW QUEST AVAILABLE") && code.includes("BUILD.<br />") && code.includes("LOOT.</span>"),
    hasSpriteShowcase: code.includes("BUG_BOUNTY_LIVE") && code.includes(".pixel-slime") && code.includes(".pixel-cloud"),
    hasCharacterSelectGrid: code.includes("KUBE_V1") && code.includes("DOCK_V2") && code.includes("CODE_X") && code.includes("API_Z"),
    hasShopGrid: code.includes("UPGRADE_YOUR_REEL") && code.includes("Infinite Buffer") && code.includes("Sprint Boot"),
    hasLootBoxPricing: code.includes("SELECT_<br />MEMBERSHIP") && code.includes("OPEN_LOOT_BOX") && code.includes("LEGEND"),
    hasPressStartFooter: code.includes("WORLD_MAP") && code.includes("PRESS START TO CONTINUE") && code.includes("VICODE_SYSTEMS"),
    usesRetroConsolePalette: code.includes("bg-[#1f2937]") && code.includes("bg-[#374151]") && code.includes("text-[#facc15]")
});

const analyzeEInkPaperCode = (code: string) => ({
    featureCount: (code.match(/i:\s*[A-Za-z]/g) || []).length || 6,
    tierCount: (code.match(/Digital Only|Hybrid Core|Legacy Print/g) || []).length || 3,
    hasPaperTypographySystem: code.includes("Plus Jakarta Sans") && code.includes("Playfair Display"),
    hasPaperTexture: code.includes("natural-paper.png") && code.includes(".paper-texture"),
    hasEditorialNav: code.includes("ViCode | Paper") && code.includes("Manifesto") && code.includes("Archive"),
    hasIssueHero: code.includes("VOL 01. ISSUE 55 // 2026") && code.includes("Narrative for<br /> the mindful."),
    hasReadingCtas: code.includes("Start Reading") && code.includes("View Archive"),
    hasRotatedLogStamp: code.includes("Infrastructure Deployment Log // 10.08.2026"),
    hasSixCardArchiveGrid: code.includes("Minimalist Logic.") && code.includes("Story Archive") && code.includes("Export Ready"),
    hasPrintTierPricing: code.includes("Select Subscription Tier") && code.includes("Paper // Digital // Hybrid") && code.includes("Activate Tier"),
    hasLiteraryFooter: code.includes("Documenting the future of infrastructure") && code.includes("Catalog") && code.includes("Manifesto"),
    usesOffWhitePaperPalette: code.includes("bg-[#fbfaf8]") && code.includes("bg-[#f4f3f0]") && code.includes("text-[#121212]")
});

const analyzeGenZChaosCode = (code: string) => ({
    featureCount: (code.match(/i:\s*[A-Za-z]/g) || []).length || 6,
    tierCount: (code.match(/Newbie|Main Player|Whale/g) || []).length || 3,
    hasChaosFontSystem: code.includes("Anton") && code.includes("Epilogue") && code.includes("Bungee"),
    hasStickerBombHero: code.includes("DROP #056 // SYSTEM_OVERLOAD") && code.includes("STAY REAL // STAY LOUD") && code.includes("sticker animate-bounce-slow"),
    hasMaximalistNav: code.includes("ViCode_Chaos_v1") && code.includes("JOIN_THE_CULT") && code.includes("The_Drop"),
    hasExplosiveHero: code.includes("DECODE<br />") && code.includes("THE_CHAOS") && code.includes("F***IN START"),
    hasMessyFeatureGrid: code.includes("X-TREME_LOGIC") && code.includes("Dopamine Sync") && code.includes("Hype Stack"),
    hasHypeTierPricing: code.includes("Secure_Your_Spot") && code.includes("NO_REFUNDS // ONLY_GAINS") && code.includes("MOST_STEEZE"),
    hasChaoticFooter: code.includes("ViCode Chaos") && code.includes("THE_LINKS") && code.includes("THE_RULES"),
    usesClashingChaosPalette: code.includes("bg-[#EEFF41]") && code.includes("bg-[#E11D48]") && code.includes("bg-[#00E5FF]")
});

const analyzeBiomimeticOrganicCode = (code: string) => ({
    featureCount: (code.match(/i:\s*[A-Za-z]/g) || []).length || 6,
    tierCount: (code.match(/Sprout|Sapling|Ancient/g) || []).length || 3,
    hasOrganicFontSystem: code.includes("Outfit") && code.includes("Quicksand"),
    hasMorphingBlobSystem: code.includes(".blob-animated") && code.includes("@keyframes morph") && code.includes(".breathing"),
    hasNatureNav: code.includes("ViCode | Bio") && code.includes("Ecosystem") && code.includes("Grow with us"),
    hasVitalityHero: code.includes("SYSTEM_VITALITY: 99.8%") && code.includes("Engineered <br />by nature."),
    hasTaxonomyCtas: code.includes("Begin Evolution") && code.includes("View Taxonomy"),
    hasFlowIndicator: code.includes(">Flow<") || code.includes("Flow</span>"),
    hasOrganicArchitectureGrid: code.includes("Organic Architecture.") && code.includes("Cellular Scale") && code.includes("Adaptive Sight"),
    hasVitalityTierPricing: code.includes("Select Vitailty Tier") && code.includes("Sprout // Sapling // Ancient") && code.includes("PEAK_VITALITY"),
    hasEarthyFooter: code.includes("ViCode Bio") && code.includes("Respecting the natural laws of infrastructure.") && code.includes("Gene-Pool"),
    usesBiomorphicPalette: code.includes("bg-[#fdfcf9]") && code.includes("bg-[#4CAF50]") && code.includes("bg-[#1a2e29]")
});

const analyzeAntiPolishRawCode = (code: string) => ({
    featureCount: (code.match(/i:\s*[A-Za-z]/g) || []).length || 8,
    benchmarkRowCount: (code.match(/id:\s*"/g) || []).length || 4,
    tierCount: (code.match(/Community|High-Freq|Sovereign/g) || []).length || 3,
    hasRawFontSystem: code.includes("Space+Mono") && code.includes("Inter"),
    hasNoTransitionRule: code.includes("transition: none !important"),
    hasSystemNav: code.includes("ViCode/Raw-v0.4.2") && code.includes("SYSTEM_STABLE") && code.includes("Specs"),
    hasRawHero: code.includes("BUILD_09.2026 // ALPHA-STABLE") && code.includes("Without The<br /> Bullsh*t."),
    hasTerminalStatusBlock: code.includes("[INFO] CONNECTION SECURED via SSL_v3.4") && code.includes("NODES_ONLINE: 14,293"),
    hasExposedLogicGrid: code.includes("Exposed_Logic") && code.includes("CORE_COMPUTE") && code.includes("P2P_SYNAPSE"),
    hasBenchmarkTable: code.includes("System_Benchmarking") && code.includes("US-EAST-1") && code.includes("WARNING"),
    hasTierAccessPricing: code.includes("Tier_Access") && code.includes("COMMUNITY // ENTERPRISE // GOV") && code.includes("Activate_ID"),
    hasRawFooter: code.includes("ViCode | Raw") && code.includes("non-proprietary documentation standard") && code.includes("COMPLIANCE"),
    usesBlackWhiteGridPalette: code.includes("bg-[#ffffff]") && code.includes("bg-black text-white") && code.includes(".grid-bg")
});

const analyzeTactileDigitalCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 6,
    tierCount: (code.match(/Light|Solid|Dense/g) || []).length || 3,
    hasTactileStyleSystem: code.includes("Outfit") && code.includes(".squishy-shadow") && code.includes(".liquid-glass"),
    hasDeformableOrbSystem: code.includes(".deformable-orb") && code.includes("@keyframes deform") && code.includes(".floating"),
    hasNeomorphicNav: code.includes("ViCode.touch") && code.includes("Press_To_Start") && code.includes("Surface"),
    hasFrictionHero: code.includes("Interface <br />With") && code.includes("Friction.</span>"),
    hasPrimaryTouchCtas: code.includes("Get Your Hands On") && code.includes("Explore Density"),
    hasFloatingComponentBox: code.includes("w-64 h-64 liquid-glass squishy-shadow") && code.includes("Array.from({ length: 4 })"),
    hasTactileNodesGrid: code.includes("Tactile_Nodes") && code.includes("Elastic Scaling") && code.includes("Synapse Logic"),
    hasVolumeAccessPricing: code.includes("Volume_Access") && code.includes("MOST_FLUID") && code.includes("Select Tier"),
    hasSoftEndingFooter: code.includes("Re-imaging the digital experience through the lens of physical mass") && code.includes("SURFACE") && code.includes("CORE"),
    usesIndigoJellyPalette: code.includes("bg-[#F8F9FE]") && code.includes("#6366F1") && code.includes("#D946EF")
});

const analyzeNatureDistilledCode = (code: string) => ({
    featureCount: (code.match(/Atmospheric Cache|Erosive Flow|Photosynthetic Logic|Root Stability|Zen Compute|Sacred Security/g) || []).length || 6,
    tierCount: (code.match(/Stream|Spring|Ocean/g) || []).length || 3,
    hasDistilledFontSystem: code.includes("Libre+Baskerville") && code.includes("Jost"),
    hasNatureTextureLayer: code.includes("asfalt-dark.png") && code.includes(".nature-bg") && code.includes("background-blend-mode: soft-light"),
    hasZenMinimalNav: code.includes("ViCode_Nature") && code.includes("Begin Silence") && code.includes("Provenance"),
    hasDistilledHero: code.includes("NATURAL SELECTION // v1.0") && code.includes("distilled to its") && code.includes("essence.</span>"),
    hasSilenceCtas: code.includes("The Distillation Process") && code.includes("View Provenance"),
    hasStillnessCue: code.includes("Stillness"),
    hasPurityGrid: code.includes("Purity in") && code.includes("Infrastructure.</span>") && code.includes("Sacred Security"),
    hasSilentTierPricing: code.includes("Honoring") && code.includes("Commitment.</span>") && code.includes("Join The Silence"),
    hasSereneFooter: code.includes("ViCode | Nature") && code.includes("Respecting the natural boundaries of technical speed.") && code.includes("SYNTHESIS"),
    usesEarthyMutedPalette: code.includes("bg-[#F5F3EF]") && code.includes("#4A5D4E") && code.includes("#E8E6E0")
});

const analyzeInteractiveCursorCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 4,
    tierCount: (code.match(/Observer|Architect|Ether/g) || []).length || 3,
    hasCustomCursorEngine: code.includes("cursorRef") && code.includes("ringRef") && code.includes("revealBoxRef") && code.includes("requestAnimationFrame"),
    hasCursorFontSystem: code.includes("Syncopate") && code.includes("Plus Jakarta Sans"),
    hasVoidNav: code.includes("ViCode_") && code.includes("CONNECT_VOICE") && code.includes("Protocol"),
    hasRevealHero: code.includes(".reveal-image") && code.includes("Explore <br /> The") && code.includes("Immersive.</span>"),
    hasFluxMetricBlock: code.includes("Cursor Directional Flux") && code.includes("99.9%"),
    hasCoreLogicGrid: code.includes("Core_Logic.") && code.includes("Dynamic Light") && code.includes("Synthesis Sync"),
    hasVoidTierPricing: code.includes("Observer") && code.includes("Architect") && code.includes("EXECUTE_CONNECT"),
    hasIntentFooter: code.includes("Interfaces designed by the movement of your intent.") && code.includes("PROTOCOL") && code.includes("VOID"),
    usesBlackAndWhiteCursorPalette: code.includes("bg-[#000000]") && code.includes("text-[#FFFFFF]") && code.includes("mix-blend-difference")
});

const analyzeVoiceMultimodalCode = (code: string) => ({
    featureCount: (code.match(/t:\s*"/g) || []).length || 3,
    metricCount: (code.match(/0\\.03ms|99\\.9%/g) || []).length || 2,
    hasSonicFontSystem: code.includes("Bricolage+Grotesque") && code.includes("Inter") && code.includes(".wave-bar"),
    hasAuraButtonSystem: code.includes(".aura-btn") && code.includes(".multimodal-card"),
    hasVoiceNav: code.includes("ViCode_Sonic") && code.includes("Enable Audio") && code.includes("Modality"),
    hasListeningHero: code.includes("AI Listening...") && code.includes("Infrastructure <br />at the speed of") && code.includes("sound.</span>"),
    hasWaveformCore: code.includes("wave-bar") && code.includes("Initialize Voice Path") && code.includes("Watch Presentation"),
    hasTriadGrid: code.includes("A Triad of Intent.") && code.includes("Voice Stream") && code.includes("Logic Flow"),
    hasSonicAnalyticsBlock: code.includes("Sonic <br /> Architecture.") && code.includes("Audio Latency") && code.includes("Live Spectrum Analysis"),
    hasMultiverseFooter: code.includes("Auditory infrastructure for the modern builder.") && code.includes("CHANNELS") && code.includes("Multimodal API"),
    usesPurplePinkAudioPalette: code.includes("#7C3AED") && code.includes("#EC4899") && code.includes("bg-[#050505]")
});

const analyzeProduct3DPreviewCode = (code: string) => ({
    specCount: (code.match(/Volumetric Scaling|Spatial Intelligence|Core Assembly/g) || []).length || 3,
    moduleCount: (code.match(/Logic Core|Mass Storage|Energy Flux|Shield Plate/g) || []).length || 4,
    tierCount: (code.match(/SINGLE|CLUSTER|QUANTUM/g) || []).length || 3,
    has3DStyleSystem: code.includes("Space+Grotesk") && code.includes(".perspective-container") && code.includes(".product-3d"),
    hasRotationState: code.includes("const [rotation, setRotation]") && code.includes("handleMouseMove") && code.includes("resetRotation"),
    hasIndustrialNav: code.includes("ViCode_3D.CORE") && code.includes("Physical Layers") && code.includes("Order License"),
    hasWorkbenchHero: code.includes("ENGINE_MODULE_01") && code.includes("The Depth <br /> of Story.") && code.includes("Launch Workbench"),
    hasRotatableObject: code.includes("PARALLAX_X1") && code.includes("67% Sync") && code.includes("SYSTEM_STABLE"),
    hasStructuralUnitsGrid: code.includes("Structural Units") && code.includes("Integrated <span className=\"text-white/20\">Modules.</span>"),
    hasHardwarePricing: code.includes("Hardware License.") && code.includes("Confirm Assembly") && code.includes("CLUSTER_UNIT"),
    hasAssemblyFooter: code.includes("ViCode_3D") && code.includes("MODULES") && code.includes("ASSEMBLY"),
    usesIndigoStudioPalette: code.includes("bg-[#0A0A0C]") && code.includes("#6366F1") && code.includes("bg-[#1A1A1E]")
});

const analyzeAuroraEvolvedCode = (code: string) => ({
    featureCount: (code.match(/Dynamic Mesh|Atmospheric UI|Core Logic|Diffusion Lock/g) || []).length || 4,
    metricCount: (code.match(/99\\.8%|0\\.05s/g) || []).length || 2,
    hasAuroraBlobSystem: code.includes(".aurora-blob") && code.includes("@keyframes aurora-float") && code.includes(".glass-card"),
    hasLightAuroraNav: code.includes("ViCode_Aurora") && code.includes("Diffusion") && code.includes("Sign In"),
    hasDiffusionHero: code.includes("System_Diffusion_Initialized") && code.includes("Evolve the <br />") && code.includes("Narrative.</span>"),
    hasHeroCtas: code.includes("Explore Mesh") && code.includes("Watch Motion"),
    hasGlassGrid: code.includes("Fluid Infrastructure.") && code.includes("Dynamic Mesh") && code.includes("Diffusion Lock"),
    hasShowcaseEngine: code.includes("Diffused <br /> Intelligence.") && code.includes("Engine_Preview.mp4") && code.includes("Live Render"),
    hasDiffusionMetrics: code.includes("Diffusion Index") && code.includes("Sync Latency"),
    hasAuroraFooter: code.includes("Fluid narratives diffused through atmospheric SaaS infrastructure.") && code.includes("EVOLUTION") && code.includes("CONNECT"),
    usesLightMeshPalette: code.includes("bg-[#F9FAFB]") && code.includes("#6366F1") && code.includes("bg-emerald-200")
});

const analyzeVintageRetroCode = (code: string) => ({
    featureCount: (code.match(/Silver_Cell|Grain_Metric|Exposure_API/g) || []).length || 3,
    footerColumnCount: (code.match(/REELS|PROCESS/g) || []).length || 2,
    hasVintageFontSystem: code.includes("Abril+Fatface") && code.includes("Merriweather") && code.includes("Courier+Prime"),
    hasAnalogOverlaySystem: code.includes(".film-grain") && code.includes(".vignette") && code.includes(".light-leak") && code.includes(".line-texture"),
    hasArchiveNav: code.includes("VICODE_8MM") && code.includes("Archive_Station_067") && code.includes("DEVELOP_FILM"),
    hasReelHero: code.includes("EST. 1976 / LAB_UPGRADED") && code.includes("Narrative <br />") && code.includes("START_PROJECTION"),
    hasFilmFrameShowcase: code.includes("border-[20px] border-black rounded-[40px]") && code.includes("The Silver Lab / Paris") && code.includes("sepia-img"),
    hasExposureGrid: code.includes("Archival <br /> Capabilities.") && code.includes("Silver_Cell") && code.includes("VIEW_DETAIL"),
    hasFullWidthQuote: code.includes("TECHNICAL_NOTE_09") && code.includes("Nostalgia is not a step backward") && code.includes("SIGNAL_STRENGTH_100%"),
    hasCanisterFooter: code.includes("ViCode_Analog.") && code.includes("FILM_TYPE: KODAK_400") && code.includes("Archive_Policy"),
    usesSepiaPaperPalette: code.includes("bg-[#EADDCA]") && code.includes("bg-[#F5F5DC]/40") && code.includes("text-[#2C2C2C]") && code.includes("#C04000")
});

const buildReferenceBlock = (fileName: string, code: string) => [
    "Reference source code",
    `Reference file: ${fileName}`,
    "Use this source as a fidelity anchor for layout, hierarchy, spacing, and styling decisions.",
    "<reference_code>",
    code.trim(),
    "</reference_code>"
].join("\n");

const buildMinimalistSwissPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeMinimalistSwissCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: monochrome Swiss modernism, rational hierarchy, wide negative space, functional SaaS polish",
        "- Typography: bold sans-serif headlines, very tight tracking on display text, tiny uppercase labels with wide letter spacing",
        "- Surfaces: mostly white and soft neutral panels such as #fafafa, with one high-contrast black showcase section",
        `- Navigation: ${analysis.hasStickyNavigation ? "sticky top bar with blur and light border" : "clean top navigation bar"}`,
        `- Hero layout: ${analysis.hasSwissHeroGrid ? "12-column asymmetric grid with text-heavy left side and visual card on the right" : "asymmetric Swiss hero composition"}`,
        `- Feature density: exactly ${analysis.featureCount} feature cards in a spacious grid`,
        `- CTA treatment: ${analysis.usesSquareButtons ? "square-edged buttons with uppercase microcopy" : "minimal button styling"}`,
        `- Footer architecture: ${analysis.hasFooterGrid ? "multi-column grid with strict informational grouping" : "clean structured footer"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, contrast, and component rhythm.",
            "- Do not redesign, simplify, add extra sections, or introduce a new aesthetic.",
            "- Match the same information architecture, section ordering, and interaction subtlety.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a strict top navigation with logo on the left, tiny uppercase nav links in the middle, and two auth actions on the right.",
            "- Build a hero section with oversized two-line headline, a restrained announcement badge, descriptive body copy, and two CTAs.",
            "- Place a tall editorial-style illustration card on the right side of the hero with a light neutral background and a bottom gradient caption.",
            `- Follow with a spacious features section containing exactly ${analysis.featureCount} cards arranged in a balanced grid.`,
            `- Include ${analysis.hasDarkShowcase ? "a black high-contrast showcase block with code-terminal styling and three metrics" : "a strong product showcase section"} below the features.`,
            "- Finish with a structured footer that includes brand text, grouped links, and a thin copyright row.",
            "",
            "Interaction and styling constraints",
            "- Keep hover states subtle and fast.",
            "- Use black, white, and neutral grays as the dominant color system.",
            "- Keep corners sharp or minimally rounded; avoid playful rounded SaaS styling.",
            "- Maintain the quiet Swiss editorial feeling with large whitespace and precise alignment.",
            "- Do not add gradients except where the reference already uses restrained overlays.",
            "- Do not introduce decorative icons, bright accent colors, glassmorphism, or soft UI effects.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: monochrome Swiss minimalism, strict hierarchy, oversized typography, rational spacing, and editorial balance.",
        "- Change the content, messaging, product framing, navigation labels, features, showcase content, stats, and footer copy so they fit the new product.",
        "- The final result should feel like the same designer and same design system, but for a different company and product.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same hero composition, but swap the copy, CTA labels, and right-side visual caption to match ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same card density and visual rhythm.`,
        "- Rework the dark showcase section into a product-specific proof block such as workflow, command center, product snapshot, or operational sequence that fits the new brief.",
        "- Update metrics so they feel credible for the new product and retain the same concise visual format.",
        "- Keep the footer structure, but rewrite brand copy, link groups, and legal labels to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to a different aesthetic.",
        "- Do not add colorful branding unless the new product absolutely requires a tiny restrained accent.",
        "- Do not add extra sections, testimonials, pricing tables, or complex illustrations unless they already map to the reference structure.",
        "- Keep the same level of whitespace, contrast, restraint, and precision.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildNeumorphismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeNeumorphismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: tactile soft UI, calm blue-grey atmosphere, ergonomic depth, premium but approachable SaaS polish",
        "- Typography: bold geometric sans-serif with dark desaturated blue-grey text, tight tracking on headings, small high-weight utility labels",
        "- Surfaces: nearly everything lives on the same soft background color, with depth created by outer and inset shadows rather than flat contrast blocks",
        "- Corners: heavily rounded cards, pills, capsules, and large rounded showcase containers",
        `- Navigation: ${analysis.hasStickyHeader ? "sticky neumorphic header with pressed and raised controls" : "soft tactile header with raised controls"}`,
        `- Hero layout: ${analysis.hasSoftIllustrationCard ? "two-column layout with tactile copy block and large square neumorphic visual card" : "soft two-column hero composition"}`,
        `- Feature density: exactly ${analysis.featureCount} feature cards in a spacious grid`,
        `- Showcase section: ${analysis.hasInsetShowcase ? "large inset container with tactile metrics and an embedded terminal panel" : "soft inset proof section"}`,
        `- Interaction language: ${analysis.usesPressStates ? "buttons and controls switch between raised and pressed shadow states" : "subtle tactile hover states"}`,
        `- Utility chrome: ${analysis.hasFloatingActionBar ? "includes a floating bottom action bar with soft depth" : "minimal floating utility chrome"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in palette, depth, spacing, component hierarchy, and tactile interaction style.",
            "- Do not flatten the neumorphic look, modernize it into another aesthetic, or introduce unrelated visual motifs.",
            "- Match the same section order, balance, and softness of motion.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a sticky neumorphic header with a raised logo block, pill-like nav controls, and a prominent primary action.",
            "- Create a two-column hero with a small tactile announcement chip, a bold headline with one accent-colored keyword, supporting copy, and two CTA controls.",
            "- Place a large soft square illustration card on the right side of the hero with a hover-revealed utility icon.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} raised cards, each with a pressed icon well and concise benefit copy.`,
            `- Include ${analysis.hasInsetShowcase ? "a large inset showcase section with metrics chips and a soft terminal preview card" : "a product proof section with deep inset treatment"} below the feature grid.`,
            "- Finish with a multi-column footer that keeps the same soft depth language and structured information grouping.",
            `- Preserve ${analysis.hasFloatingActionBar ? "the floating bottom action bar with tactile controls" : "the reference utility controls"} as part of the final page.`,
            "",
            "Interaction and styling constraints",
            "- Use a soft blue-grey base background across the whole page.",
            "- Create depth using layered outer shadows and inset pressed states, not glass, gradients, or hard borders.",
            "- Keep corners generously rounded and interactions tactile.",
            "- Use one restrained cool accent color for emphasis and CTAs.",
            "- Avoid harsh black sections, brutalist edges, bright neon, or editorial minimalism.",
            "- Maintain the calm ergonomic feel of a physical interface rendered digitally.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: soft neumorphic depth, calm monochrome blue-grey palette, tactile controls, ergonomic spacing, and rounded surfaces.",
        "- Change the content, messaging, product framing, feature set, stats, utility labels, and footer copy so they fit the new product.",
        "- The final result should feel like the same tactile design system applied to a different company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same hero composition, but update the chip label, CTA labels, illustration captioning cues, and supporting copy to fit ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same card density and tactile rhythm.`,
        "- Rework the inset showcase section into a product-specific proof panel such as workflow view, AI control center, operations feed, or command sequence that suits the new product.",
        "- Update the stats so they feel credible for the new product while keeping the same soft chip treatment.",
        `- Keep ${analysis.hasFloatingActionBar ? "the floating bottom action bar" : "the utility control pattern"} but rename its actions to something appropriate for the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, and legal text to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to flat design, glassmorphism, Swiss minimalism, or a dark cyber aesthetic.",
        "- Do not introduce hard borders, sharp corners, or aggressive contrast jumps.",
        "- Do not add extra sections, testimonials, pricing tables, or complex decorative layers unless they clearly map to the reference structure.",
        "- Keep the same soft, tactile, friendly, physical-feeling interface language throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildGlassmorphismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeGlassmorphismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: premium midnight glass, crystalline depth, aurora atmosphere, futuristic SaaS energy",
        "- Typography: bold uppercase display text, sharp hierarchy, glowing accent gradients, minimal but dramatic supporting copy",
        "- Surfaces: translucent black-green glass panels, heavy backdrop blur, white borders at low opacity, soft ring highlights",
        `- Background system: ${analysis.hasAuroraMeshBackground ? "large blurred aurora color clouds layered behind the content with subtle texture overlay" : "dark atmospheric background with translucent color layers"}`,
        `- Navigation: ${analysis.hasStickyGlassNav ? "floating sticky glass navigation pill with blur, border, and soft shadow" : "floating glass navigation"}`,
        `- Feature density: exactly ${analysis.featureCount} glass cards in a spacious grid`,
        `- Showcase section: ${analysis.hasGlassShowcase ? "large translucent showcase slab with blurred layers, stats, and embedded terminal card" : "glass proof section with strong depth"}`,
        `- Branding cues: ${analysis.hasGradientBranding ? "uses emerald, violet, and sky accents in gradients and glowing icons" : "uses restrained aurora accents"}`,
        `- Utility chrome: ${analysis.hasFloatingGlassBar ? "includes a floating bottom glass command bar with CTA" : "minimal floating utility glass bar"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in atmosphere, translucency, blur, glow, spacing, and visual hierarchy.",
            "- Do not flatten the glassmorphism into standard dark SaaS UI or replace the aurora environment with generic gradients.",
            "- Match the same section order, visual drama, and floating-glass behavior.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a floating sticky navigation bar with blur, border, ring, shadow, and a glowing brand mark.",
            "- Create a centered hero with a small glass version chip, oversized uppercase heading, and restrained futuristic description text.",
            "- Add a prominent central glass stats card with three columns, each using an icon, accent color, and short label/value pair.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} large glass cards with soft hover lift and colored icon accents.`,
            `- Include ${analysis.hasGlassShowcase ? "a wide glass showcase section with copy on the left, a terminal-like glass code panel on the right, and compact stats" : "a premium glass product proof section"} below the feature grid.`,
            "- Finish with a translucent footer that keeps the same atmospheric hierarchy and understated link structure.",
            `- Preserve ${analysis.hasFloatingGlassBar ? "the floating bottom glass command bar with product badge and CTA" : "the floating utility overlay"} as part of the composition.`,
            "",
            "Interaction and styling constraints",
            "- Use deep near-black backgrounds with emerald, violet, cyan, and white highlights.",
            "- Create depth with backdrop blur, translucent borders, ring highlights, and layered glows.",
            "- Maintain rounded corners and premium floating spacing.",
            "- Keep text crisp and readable against translucent surfaces.",
            "- Avoid brutalist edges, flat corporate cards, warm earthy tones, or soft clay styling.",
            "- Do not remove the atmospheric mesh background or the futuristic glass identity.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: premium glassmorphism, midnight aurora background, translucent layers, glowing accents, and floating UI depth.",
        "- Change the content, messaging, product framing, feature set, stats, utility labels, and footer copy so they fit the new product.",
        "- The final result should feel like the same futuristic glass design system applied to another company and product.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same centered hero composition, glass stat card, and aurora mood, but rewrite the copy and labels for the new product.",
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same glass card density and luminous rhythm.`,
        "- Rework the showcase section into a product-specific proof area such as live command center, AI console, network fabric, or orchestration panel that suits the new brief.",
        "- Update metrics and small labels so they feel credible for the new product while preserving the same concise futuristic style.",
        `- Keep ${analysis.hasFloatingGlassBar ? "the floating bottom command bar" : "the floating utility overlay"} but rename its badge and CTA to fit the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, and legal text to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to flat SaaS, Swiss editorial minimalism, or tactile neumorphism.",
        "- Do not introduce opaque white cards that kill the translucent atmosphere.",
        "- Do not add extra sections, testimonials, pricing tables, or dense dashboards unless they clearly map to the reference structure.",
        "- Keep the same premium crystalline, futuristic, aurora-powered feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildBrutalismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeBrutalismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: raw anti-design energy, loud software poster aesthetic, severe contrast, industrial confidence",
        "- Typography: monospaced UI base, oversized uppercase headlines, italic interruptions, zero softness",
        "- Surfaces: white or black panels with hard 2px borders, shadow offsets, and no blur or softness",
        `- Navigation: ${analysis.hasStickyHeader ? "sticky hard-edged header with segmented tab-like links" : "segmented brutalist header"}`,
        `- Feature density: exactly ${analysis.featureCount} boxed feature tiles in a hard grid`,
        `- Color language: ${analysis.usesPrimaryColorBlocks ? "pure primary/accent blocks such as red, blue, yellow, green, magenta, cyan" : "raw high-contrast color interrupts"}`,
        `- Proof section: ${analysis.hasGridTerminalSection ? "split information grid with metrics on one side and a stark terminal pane on the other" : "split brutalist proof section"}`,
        `- Interaction model: ${analysis.usesTransitionNone ? "uses abrupt hover changes and transition-none behavior" : "uses immediate hard transitions"}`,
        `- Utility chrome: ${analysis.hasFloatingCTA ? "includes a fixed bottom-right CTA block with offset shadow" : "includes hard utility CTA chrome"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in contrast, grid structure, hard edges, typography aggression, and anti-polish attitude.",
            "- Do not smooth, modernize, or beautify the brutalist aesthetic.",
            "- Match the same section order, panel segmentation, and abrupt interaction style.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a boxed page shell with hard borders, offset shadow, and a sticky segmented header.",
            "- Create a hero split into two aggressive columns: a text-heavy left panel with oversized stacked headline and a visual-heavy right panel with bold asset framing.",
            "- Use pure color interruption blocks to punch emphasis into the hero and CTA areas.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} rigid tiles on a black section, each with a hard icon box and abrupt hover color swap.`,
            `- Include ${analysis.hasGridTerminalSection ? "a split proof section with metric rows on one side and a stark terminal console on the other" : "a split proof section with hard contrast panels"} below the feature grid.`,
            "- Finish with a hard-edged footer that keeps the same uppercase information density and offset utility details.",
            `- Preserve ${analysis.hasFloatingCTA ? "the fixed bottom-right CTA block" : "the floating utility CTA"} as part of the page.`,
            "",
            "Interaction and styling constraints",
            "- Use hard borders, flat fills, offset shadows, and zero blur.",
            "- Keep corners square and transitions abrupt or absent.",
            "- Use black, white, and raw primary colors with no tasteful moderation.",
            "- Maintain the monospaced, coded, confrontational voice.",
            "- Avoid gradients, soft shadows, neumorphism, glass, or editorial elegance.",
            "- Let the interface feel intentionally raw, loud, and slightly uncomfortable in a controlled way.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: brutalist anti-design, hard borders, sharp contrast, monospaced aggression, and raw color interruptions.",
        "- Change the content, messaging, product framing, feature set, stats, utility labels, and footer copy so they fit the new product.",
        "- The final result should feel like the same brutal software poster system applied to another company and product.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same split hero composition and loud headline behavior, but rewrite the copy, emphasis blocks, and CTA labels for the new product.",
        `- Replace the ${analysis.featureCount} feature tiles with benefits that fit ${resolvedProductName}, while preserving the same harsh grid rhythm and raw labeling style.`,
        "- Rework the proof section into a product-specific command slab, audit board, signal feed, operations wall, or system readout that suits the new product.",
        "- Update the metrics and terminal lines so they feel credible for the new product while keeping the same confrontational tone.",
        `- Keep ${analysis.hasFloatingCTA ? "the fixed bottom-right CTA block" : "the utility CTA treatment"} but rename it to fit the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, version markers, and legal text to fit the new company.",
        "",
        "Strict constraints",
        "- Do not polish the interface into clean SaaS UI, neumorphism, or glassmorphism.",
        "- Do not round corners, soften shadows, or smooth transitions.",
        "- Do not add extra sections, testimonials, pricing tables, or decorative gradients unless they clearly map to the reference structure.",
        "- Keep the same loud, raw, coded, anti-design posture throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildHyperrealismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeHyperrealismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: cinematic premium technology, hardware-level realism, dark spatial depth, high-spec product launch energy",
        "- Typography: large refined sans-serif headlines, tight tracking, glossy minimal copy, premium product-marketing hierarchy",
        "- Surfaces: dark glass-metal panels, luminous edge highlights, deep shadows, layered gradients and subtle volumetric glow",
        `- Navigation: ${analysis.hasStickyHeader ? "sticky premium header with glossy glass treatment, low-opacity borders, and polished CTA" : "premium floating top navigation"}`,
        `- Hero staging: ${analysis.hasPerspectiveHero ? "split cinematic hero with premium copy on the left and a pseudo-3D product stage on the right" : "premium split hero with spatial staging"}`,
        `- Product realism: ${analysis.has3DAssetStage ? "uses a large hyper-real product render framed like a physical object in a studio environment" : "uses a premium product-stage composition"}`,
        `- Feature density: exactly ${analysis.featureCount} premium depth cards in a spacious grid`,
        `- Proof section: ${analysis.hasAnalyticsShowcase ? "large analytics/proof slab with metrics and a high-depth terminal panel" : "premium proof section with stats and systems view"}`,
        `- Utility chrome: ${analysis.hasFloatingConsole ? "includes a floating bottom console bar with premium CTA" : "includes premium floating utility chrome"}`,
        `- Surface quality: ${analysis.usesGlossySurfaces ? "glossy, reflective, high-depth surfaces with soft highlights and serious shadow weight" : "high-depth premium surfaces"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in cinematic depth, realism cues, spacing, shadow quality, and premium technology atmosphere.",
            "- Do not flatten the experience into standard dark SaaS UI or replace the pseudo-3D product staging with ordinary cards.",
            "- Match the same section order, product-launch tone, and physical-feeling hierarchy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a glossy sticky header with premium logo treatment, restrained nav links, and a polished CTA.",
            "- Create a split hero with refined copy on the left and a large pseudo-3D product stage on the right.",
            "- Use a small premium status chip, oversized heading, restrained supporting copy, and two polished CTA controls in the hero.",
            "- Add a floating metadata badge inside the product stage to reinforce the hyper-real physical-object feeling.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} deep premium cards with refined icon wells and luxury shadow treatment.`,
            `- Include ${analysis.hasAnalyticsShowcase ? "a wide proof section with metrics tiles and a premium terminal/analytics panel" : "a premium proof section with strong stats and systems framing"} below the feature grid.`,
            "- Finish with a refined dark footer that keeps the same high-end engineering launch tone.",
            `- Preserve ${analysis.hasFloatingConsole ? "the floating bottom console bar with CTA" : "the floating utility bar"} as part of the composition.`,
            "",
            "Interaction and styling constraints",
            "- Use dark studio backgrounds with cyan, blue, and subtle cool-spectrum highlights.",
            "- Create depth using shadows, perspective cues, product render staging, and glossy edge highlights.",
            "- Keep corners soft and premium, but avoid playful softness or cheap glassmorphism.",
            "- Maintain a serious, high-spec, almost hardware-advertising feel.",
            "- Avoid brutalist rawness, flat enterprise cards, or childish color blocking.",
            "- Let the page feel like a cinematic flagship product reveal for an advanced computing platform.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: cinematic dark realism, pseudo-3D product staging, premium shadow depth, and flagship-product polish.",
        "- Change the content, messaging, product framing, feature set, stats, metadata, and footer copy so they fit the new product.",
        "- The final result should feel like the same luxury engineering launch system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same cinematic split composition, but rewrite the hero copy, chip label, CTA labels, metadata badge, and proof language for the new product.",
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same premium depth rhythm and high-end systems tone.`,
        "- Rework the analytics/proof section into a product-specific command view, lab interface, systems board, or control surface that suits the new brief.",
        "- Update metrics, status badges, and footer metadata so they feel credible for the new product while preserving the same premium industrial tone.",
        `- Keep ${analysis.hasFloatingConsole ? "the floating bottom console bar" : "the floating utility chrome"} but rename its messaging and CTA to fit the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, and operational metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to glassmorphism, brutalism, playful block UI, or soft neumorphism.",
        "- Do not remove the cinematic depth or premium product-render staging.",
        "- Do not add extra sections, testimonials, pricing tables, or dashboard overload unless they clearly map to the reference structure.",
        "- Keep the same flagship-product, hyper-real, physically premium feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildVibrantBlockPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeVibrantBlockCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: playful software playground, high-energy block composition, bold anti-boring SaaS optimism",
        "- Typography: oversized heavy uppercase headings, punchy labels, cheerful direct copy, toy-like confidence",
        "- Surfaces: solid color blocks, hard outlines, chunky shadows, sticker-like badges, and rounded toy-card geometry",
        `- Navigation: ${analysis.hasStickyHeader ? "sticky header with chunky outlined controls and playful CTA treatment" : "playful outlined header controls"}`,
        `- Hero staging: ${analysis.hasBlockyAssetStage ? "split hero with bold copy and a large toy-like product illustration frame" : "playful split hero with blocky stage"}`,
        `- Feature density: exactly ${analysis.featureCount} colorful block cards in a spacious grid`,
        `- Color system: ${analysis.usesPlayfulColorBlocks ? "uses loud purple, blue, pink, yellow, green, and orange blocks with black outlines" : "uses bold saturated color blocks"}`,
        `- Proof section: ${analysis.hasCodePreview ? "large outlined detail slab with stats cards and a playful code preview panel" : "playful proof section with code/metric framing"}`,
        `- Utility chrome: ${analysis.hasFixedCTA ? "includes a fixed bottom-right playful CTA button" : "includes a playful floating CTA element"}`,
        `- Motion cue: ${analysis.hasPulseAnimation ? "includes a subtle looping playful animation on the global action element" : "uses lively playful motion cues"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in color-block energy, chunky shadow language, playful hierarchy, and toy-like UI rhythm.",
            "- Do not tone down the color system into safe SaaS aesthetics or remove the outlined block personality.",
            "- Match the same section order, block spacing, and cheerful interaction language.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a sticky outlined header with chunky controls, bold brand treatment, and a bright playful CTA.",
            "- Create a split hero with loud headline typography, a small playful chip, bold supporting copy, and two large blocky CTA buttons.",
            "- Place a large colorful toy-like illustration frame on the right side of the hero with decorative badge elements and playful motion.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} colorful block cards with thick outlines and chunky black shadows.`,
            `- Include ${analysis.hasCodePreview ? "a large outlined proof section with metrics cards and a playful code preview panel" : "a playful proof section with strong outlined composition"} below the feature grid.`,
            "- Finish with a cheerful footer that keeps the same outlined, blocky, high-energy visual language.",
            `- Preserve ${analysis.hasFixedCTA ? "the fixed bottom-right playful CTA block" : "the floating action element"} as part of the composition.`,
            "",
            "Interaction and styling constraints",
            "- Use solid saturated color blocks with black outlines and offset shadows.",
            "- Keep corners rounded and slightly toy-like, not premium-luxury rounded.",
            "- Let buttons, cards, and badges feel tactile, fun, and bold.",
            "- Maintain strong contrast and visual cheerfulness.",
            "- Avoid muted enterprise palettes, glass blur, soft gradients, or hyper-real rendering.",
            "- Let the page feel like an energetic creative-tool landing page built from colorful modular pieces.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: colorful block composition, playful SaaS energy, black outlines, chunky shadows, and joyful interaction tone.",
        "- Change the content, messaging, product framing, feature set, stats, button labels, and footer copy so they fit the new product.",
        "- The final result should feel like the same vibrant block-based design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same playful split hero composition, but rewrite the chip label, hero copy, CTA labels, and illustration framing cues for the new product.",
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same colorful modular rhythm and optimistic tone.`,
        "- Rework the proof section into a product-specific playbook, ops panel, installation preview, or setup playground that fits the new brief.",
        "- Update stats, code-preview labels, and footer metadata so they feel credible for the new product while keeping the same playful confidence.",
        `- Keep ${analysis.hasFixedCTA ? "the fixed playful CTA button" : "the playful action element"} but rename its label and role to fit the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, and metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to polished enterprise minimalism, premium hyper-real dark UI, glassmorphism, or brutalist anti-design.",
        "- Do not mute the palette or remove the black outlines and chunky shadow language.",
        "- Do not add extra sections, testimonials, pricing tables, or serious dashboard complexity unless they clearly map to the reference structure.",
        "- Keep the same bright, joyful, modular, high-energy feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildOLEDPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeOLEDCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: stealth black interface, premium night-ops atmosphere, violet/sapphire glow, low-light engineering drama",
        "- Typography: bold uppercase tech-marketing hierarchy with sharp tracking and restrained body copy",
        "- Surfaces: true-black backgrounds, ultra-dark panels, faint white borders, subtle glass blur, and selective violet glow",
        `- Background system: ${analysis.hasFixedAtmosphere ? "fixed atmospheric overlays with scanline texture, soft violet/blue blooms, and almost-black negative space" : "deep black atmospheric backdrop with subtle glow layers"}`,
        `- Navigation: ${analysis.hasStickyHeader ? "sticky stealth header with pill geometry, subtle glow states, and active-system microbadge" : "stealth top navigation with active system state"}`,
        `- Hero staging: ${analysis.hasObsidianAssetStage ? "split hero with bold obsidian-tech copy and a large dark product stage featuring an object render plus HUD status overlay" : "split hero with stealth product-stage composition"}`,
        `- Feature density: exactly ${analysis.featureCount} dark precision cards in a spacious grid`,
        `- Proof section: ${analysis.hasTerminalSection ? "deep black proof section with metrics tiles and a stealth terminal console" : "dark proof section with stats and systems view"}`,
        `- Utility chrome: ${analysis.hasFloatingCTA ? "includes a fixed bottom-right stealth CTA chip" : "includes stealth floating utility chrome"}`,
        `- Surface personality: ${analysis.usesRoundedStealthChrome ? "rounded stealth hardware-like chrome with subtle glow and border contrast" : "sleek low-light chrome"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in true-black contrast, violet/blue glow behavior, stealth chrome, and cinematic night-ops atmosphere.",
            "- Do not brighten the page into standard dark SaaS UI or replace the deep-black OLED character with generic gradients.",
            "- Match the same section order, silence, and precision of the original.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a sticky stealth header with rounded pill geometry, faint borders, a system-status microbadge, and a strong violet CTA.",
            "- Create a split hero with a small scanline-inspired chip, oversized headline, restrained descriptive copy, and two pill-shaped CTA controls.",
            "- Stage a large dark product render on the right with HUD-like syncing indicators and atmospheric glow.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} dark precision cards with subtle hover glow and sharp technical naming.`,
            `- Include ${analysis.hasTerminalSection ? "a deep black proof section with metrics tiles and a stealth terminal panel" : "a dark proof section with metrics and systems framing"} below the feature grid.`,
            "- Finish with an obsidian footer that keeps the same low-light premium engineering tone.",
            `- Preserve ${analysis.hasFloatingCTA ? "the fixed bottom-right stealth CTA chip" : "the floating utility control"} as part of the composition.`,
            "",
            "Interaction and styling constraints",
            "- Use true black and near-black surfaces with selective violet and blue glow accents.",
            "- Keep borders faint, highlights sharp, and hover states subtle but luminous.",
            "- Maintain a low-noise, high-contrast, OLED-first feeling.",
            "- Avoid colorful playful blocks, soft neumorphic depth, or editorial white-space minimalism.",
            "- Let the page feel like premium stealth infrastructure software designed for dark environments.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: OLED black surfaces, stealth chrome, violet/blue glow accents, and premium low-light engineering atmosphere.",
        "- Change the content, messaging, product framing, feature set, metrics, system badges, and footer copy so they fit the new product.",
        "- The final result should feel like the same stealth infrastructure design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same split hero composition and stealth atmosphere, but rewrite the chip label, hero copy, CTA labels, HUD status text, and system badge language for the new product.",
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same low-light precision rhythm and technical tone.`,
        "- Rework the proof section into a product-specific control plane, systems terminal, command feed, or stealth operations panel that suits the new brief.",
        "- Update metrics, console output, and footer metadata so they feel credible for the new product while preserving the same obsidian-tech voice.",
        `- Keep ${analysis.hasFloatingCTA ? "the fixed bottom-right stealth CTA chip" : "the floating utility treatment"} but rename it to fit the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, and metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to bright light UI, glass-heavy aurora styling, brutalism, or soft humane SaaS aesthetics.",
        "- Do not brighten the blacks or remove the stealth glow language.",
        "- Do not add extra sections, testimonials, pricing tables, or dense dashboards unless they clearly map to the reference structure.",
        "- Keep the same silent, premium, OLED-native, stealth-system feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildAccessibleEthicalPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeAccessibleEthicalCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: humane, trustworthy, ethically grounded, calm civic-grade clarity with premium accessibility polish",
        "- Typography: large readable sans-serif, strong hierarchy, generous spacing, humane line height, clear action labels",
        "- Surfaces: soft light backgrounds, white panels, clean borders, strong focus rings, visible shadows without excess drama",
        `- Navigation: ${analysis.hasStickyHeader ? "sticky trust-first header with strong CTA, visible focus states, and calm transparency" : "accessible trust-first header"}`,
        `- Hero staging: ${analysis.hasHumanCentricHero ? "split hero with inclusive messaging on the left and a human-centered team image with supportive overlay on the right" : "human-centered split hero"}`,
        `- Feature density: exactly ${analysis.featureCount} accessible values cards in a spacious grid`,
        `- Proof section: ${analysis.hasTransparencySection ? "large transparency-focused section with explicit pledge messaging and a clean metrics grid" : "trust and transparency proof section"}`,
        `- Accessibility layer: ${analysis.hasFocusStates ? "focus rings, keyboard-friendly controls, readable contrasts, and explicit accessibility signaling are core to the UI" : "clear accessible interaction states are core to the UI"}`,
        `- Utility chrome: ${analysis.hasFixedSupportCTA ? "includes a fixed support-oriented floating action button with accessible labeling" : "includes accessible floating support CTA"}`,
        `- Metrics language: ${analysis.hasMetricsGrid ? "uses trust metrics such as security, accessibility, and offset impact instead of vanity growth stats" : "uses trust-oriented proof metrics"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in clarity, trustworthiness, accessible hierarchy, spacing, and human-centered product framing.",
            "- Do not turn it into generic corporate SaaS UI or remove the accessibility-first and ethical-design personality.",
            "- Match the same section order, soft trust palette, and explicit accessibility cues.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Build a sticky transparent header with a clear brand block, readable nav, strong CTA, and visible focus states.",
            "- Create a split hero with a clear accessibility-compliance chip, large humane headline, explanatory copy, and two large accessible CTA controls.",
            "- Place a human-centered image card on the right side of the hero with a supportive trust overlay.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} values cards focused on privacy, access, inclusion, security, and social responsibility.`,
            `- Include ${analysis.hasTransparencySection ? "a large transparency section with pledge language and a clean trust-metrics grid" : "a trust proof section with metrics and civic-grade clarity"} below the values grid.`,
            "- Finish with a calm structured footer that continues the accessible and ethical product language.",
            `- Preserve ${analysis.hasFixedSupportCTA ? "the floating accessibility-support action button" : "the floating support CTA"} as part of the composition.`,
            "",
            "Interaction and styling constraints",
            "- Keep contrast strong, text readable, and tap targets large.",
            "- Use visible focus rings and accessible hover/focus behavior throughout.",
            "- Maintain a calm, humane, respectful tone instead of aggressive conversion energy.",
            "- Avoid dark-pattern UI, tiny text, ornamental clutter, or inaccessible low-contrast chrome.",
            "- Let the page feel like a platform built for trust, inclusion, and long-term human use.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: accessibility-first clarity, humane spacing, trust-oriented proof, and ethical product framing.",
        "- Change the content, messaging, product framing, feature set, trust metrics, pledge language, and footer copy so they fit the new product.",
        "- The final result should feel like the same ethical and inclusive design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same humane split-hero composition, but rewrite the compliance chip, hero copy, CTA labels, image overlay text, and trust framing for the new product.",
        `- Replace the ${analysis.featureCount} values cards with benefits that fit ${resolvedProductName}, while preserving the same inclusion-first and human-centered rhythm.`,
        "- Rework the transparency section into a product-specific trust page, ethical pledge, open-governance panel, or public-accountability section that suits the new brief.",
        "- Update trust metrics, legal language, and footer metadata so they feel credible for the new product while preserving the same ethical tone.",
        `- Keep ${analysis.hasFixedSupportCTA ? "the floating accessibility-support action button" : "the floating support control"} but rename it to fit the new product.`,
        "- Keep the footer structure, but rewrite brand copy, grouped links, and trust/legal metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to dark flashy cyber UI, playful color-block maximalism, or raw brutalist anti-design.",
        "- Do not remove visible focus states, accessible sizing, or the explicit ethical/trust language.",
        "- Do not add extra sections, testimonials, pricing tables, or complicated dashboards unless they clearly map to the reference structure.",
        "- Keep the same calm, inclusive, high-trust, human-centered feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildClaymorphismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeClaymorphismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: soft tactile futurism, inflated cloud-software friendliness, toy-like confidence, and cheerful depth",
        "- Typography: extra-bold sans serif, oversized headlines, uppercase micro-labels, and playful compressed emphasis",
        "- Surfaces: thick rounded cards, pill buttons, inflated containers, and soft clay shells with inner highlights plus outer depth",
        `- Navigation: ${analysis.hasStickyHeader ? "floating sticky clay header with rounded chrome and inflated CTA" : "soft clay navigation bar"}`,
        `- Hero composition: ${analysis.hasSoftAssetStage ? "split hero with bold text on the left and a giant rounded product toy-stage on the right" : "soft split hero with tactile product staging"}`,
        `- Feature density: exactly ${analysis.featureCount} bubbly feature cards in a soft grid`,
        `- Showcase behavior: ${analysis.hasJoyTerminal ? "dark tactile terminal/proof card with playful command feedback and rounded progress treatment" : "soft proof section with tactile metrics and command feedback"}`,
        `- Motion language: ${analysis.hasBounceAnimation ? "gentle bounce and squash on the floating action control, plus soft hover scaling" : "gentle tactile hover motion"}`,
        `- Surface treatment: ${analysis.usesInflatedChrome ? "heavy soft shadows, inset highlights, and rounded extruded geometry" : "rounded soft-depth surfaces"}`,
        `- Accent logic: ${analysis.usesPlayfulSoftPalette ? "friendly indigo, candy pink, bright blue, and warm amber used as playful clay accents" : "pastel-to-bright playful accent system"}`,
        `- Footer architecture: ${analysis.hasFloatingCTA ? "structured footer plus a fixed bouncing circular action button" : "structured footer with playful controls"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, depth, and tactile interaction rhythm.",
            "- Do not redesign, flatten, simplify, or replace the claymorphism aesthetic with generic SaaS styling.",
            "- Match the same information architecture, section ordering, and playful-but-polished personality.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a floating rounded sticky header with a soft brand block on the left, short playful nav links in the middle, and a chunky pill CTA on the right.",
            "- Build a split hero with a badge, oversized multi-line headline, friendly explanatory copy, and two large inflated CTAs on the left.",
            "- Place a giant rounded product stage on the right with a soft glowing backdrop, a toy-like product asset, and small clay bubbles as decoration.",
            `- Follow with a feature section containing exactly ${analysis.featureCount} large bubbly cards arranged in a spacious grid.`,
            "- Add a major clay-style proof section with oversized headline copy, two rounded metric cards, and a dark tactile terminal panel with a soft command readout.",
            "- Finish with a roomy footer that includes a soft brand block, grouped link columns, and a chunky status row.",
            `- Include ${analysis.hasFloatingCTA ? "a fixed circular floating action button in the bottom-right corner" : "a floating tactile action control"} as part of the final page chrome.`,
            "",
            "Interaction and styling constraints",
            "- Make all major cards and buttons feel inflated, squishy, and tactile through layered shadows and inset highlights.",
            "- Use big radii everywhere; avoid sharp edges and corporate stiffness.",
            "- Keep the page bright and friendly, with indigo, pink, blue, and warm amber accents against a pale soft background.",
            "- Use hover states with gentle lift, scale, and rotation rather than harsh movement.",
            "- Keep the tone joyful and productized, not childish or chaotic.",
            "- Do not introduce glassmorphism, brutalist hard borders, or flat minimalist austerity.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: claymorphic softness, inflated geometry, tactile shadows, playful friendliness, and rounded interface rhythm.",
        "- Change the content, messaging, product framing, features, stats, command copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same soft design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the badge, hero copy, CTA labels, product-stage captioning, and floating action language for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} bubbly feature cards with benefits that fit ${resolvedProductName}, while preserving the same large-card density and tactile rhythm.`,
        "- Rework the dark proof section into a product-specific workflow, status console, onboarding sequence, or proof-of-delight panel that suits the new brief.",
        "- Update metrics and the command-line or status copy so they feel credible for the new product while preserving the same playful confidence.",
        `- Keep ${analysis.hasFloatingCTA ? "the floating circular action button" : "a floating tactile action control"} and rename it to match the new product's primary action.`,
        "- Keep the footer structure, but rewrite the brand block, grouped links, and status metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to flat enterprise UI, severe dark cyberpunk styling, or raw brutalist anti-design.",
        "- Do not remove the inflated depth, large rounded geometry, or soft tactile shadow system.",
        "- Do not add extra sections, testimonials, pricing tables, or complex dashboards unless they clearly map to the reference structure.",
        "- Keep the same joyful, friendly, soft-technology feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildAuroraPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeAuroraCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: luminous atmospheric futurism, cinematic dark depth, vibrant energy fields, and polished next-gen infra confidence",
        "- Typography: black-weight display sans, uppercase tracking for labels, glowing emphasis text, and confident compact body copy",
        "- Surfaces: dark glass panels, soft translucent borders, large rounded containers, and layered blur-based lighting",
        `- Background system: ${analysis.hasAtmosphericMesh ? "multi-layer aurora mesh with huge blurred indigo, violet, and cyan light fields plus noise texture" : "dark atmospheric gradient background with luminous color fields"}`,
        `- Navigation: ${analysis.hasStickyHeader ? "floating sticky glass header with blur, subtle borders, and bright CTA contrast" : "glass navigation bar"}`,
        `- Hero composition: ${analysis.hasAuroraAssetStage ? "split cinematic hero with left text stack and right luminous product core inside a glass chamber" : "split atmospheric hero with luminous product staging"}`,
        `- Feature density: exactly ${analysis.featureCount} glassy feature cards in a spacious grid`,
        `- Proof section: ${analysis.hasLumineTerminal ? "large gradient-dark showcase with vivid metrics and a luminous terminal/proof console" : "cinematic dark proof section with vivid metrics"}`,
        `- Accent logic: ${analysis.usesGradientAura ? "indigo, violet, and cyan gradients drive glow, emphasis, and motion" : "aurora gradient accents drive the page atmosphere"}`,
        `- Surface treatment: ${analysis.usesGlassSurfaces ? "dark glass cards with blur, faint borders, ring highlights, and controlled glow" : "luminous dark panels with restrained chrome"}`,
        `- Action chrome: ${analysis.hasStickyActionButton ? "sticky floating action orb anchored near the bottom-right" : "floating atmospheric action control"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, atmosphere, gradients, and glass-depth behavior.",
            "- Do not redesign, flatten, or replace the aurora visual language with a generic dark SaaS page.",
            "- Match the same information architecture, section ordering, and cinematic interaction restraint.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a floating glassy sticky header with a gradient logo block, uppercase nav labels, a subtle live-network utility chip, and a bright contrasting CTA.",
            "- Build a split hero with a glowing badge, oversized cinematic headline, atmospheric body copy, and two rounded glass-forward CTAs on the left.",
            "- Place a luminous product chamber on the right with layered gradients, blur halos, a hero asset, and a small HUD readiness badge.",
            `- Follow with a feature section containing exactly ${analysis.featureCount} translucent glass cards arranged in a balanced grid.`,
            "- Add a dramatic showcase block with giant headline copy, two vivid gradient metrics, and a dark luminous terminal panel with system status output.",
            "- Finish with a footer that preserves the same atmospheric brand area, grouped links, and understated status row.",
            `- Include ${analysis.hasStickyActionButton ? "a sticky floating action orb near the bottom-right edge" : "a floating atmospheric action control"} as part of the page chrome.`,
            "",
            "Interaction and styling constraints",
            "- Use true dark backgrounds with layered indigo, violet, and cyan light fields rather than flat black sections alone.",
            "- Make glass surfaces feel deep through blur, subtle borders, soft rings, and restrained glow.",
            "- Keep motion atmospheric and elegant: gentle scale, glow changes, and shimmer rather than loud animation.",
            "- Preserve the cinematic feeling of a future-ready infrastructure product.",
            "- Do not introduce playful clay depth, harsh brutalist borders, or sterile monochrome minimalism.",
            "- Avoid clutter; the page should feel luminous and advanced, not noisy.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: dark atmospheric glass, aurora gradients, luminous product staging, and cinematic future-tech confidence.",
        "- Change the content, messaging, product framing, features, metrics, terminal language, and footer copy so they fit the new product.",
        "- The final result should feel like the same designer and same aurora-driven design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same cinematic split-hero composition, but rewrite the badge, hero copy, CTA labels, HUD text, and product-stage labeling for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same glass-card density and luminous rhythm.`,
        "- Rework the dark showcase section into a product-specific control room, command center, system proof panel, or advanced workflow demonstration that suits the new brief.",
        "- Update metrics and terminal/status copy so they feel credible for the new product while preserving the same vibrant high-performance tone.",
        `- Keep ${analysis.hasStickyActionButton ? "the sticky floating action orb" : "a floating atmospheric action control"} and rename it to fit the new product's main action.`,
        "- Keep the footer structure, but rewrite the brand block, grouped links, and metadata row to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to flat enterprise layout, soft toy-like claymorphism, or raw brutalist anti-design.",
        "- Do not remove the aurora mesh atmosphere, glass blur language, or luminous gradient-driven emphasis.",
        "- Do not add extra sections, testimonials, pricing tables, or dense dashboards unless they clearly map to the reference structure.",
        "- Keep the same future-facing atmospheric intensity throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildRetroFuturismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeRetroFuturismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: neon retro-computing drama, synthwave infrastructure fantasy, arcade confidence, and chrome-terminal nostalgia",
        `- Typography: ${analysis.usesMonospaceChrome ? "monospace-led chrome UI with uppercase labels, italic display emphasis, and terminal-like microcopy" : "uppercase retro-tech typography with terminal accents"}`,
        "- Surfaces: black panels, neon borders, rectangular buttons, CRT frames, and chrome utility boxes",
        `- Atmosphere: ${analysis.hasScanlineOverlay ? "CRT scanlines layered over the full page with subtle flicker and display noise" : "retro display texture across the page"}`,
        `- Background system: ${analysis.hasGridFloor ? "deep black space with a magenta perspective grid floor fading into the horizon" : "retro perspective grid environment"}`,
        `- Navigation: ${analysis.hasStickyHeader ? "sticky chrome header with cyan neon border, monochrome interior, and bold utility CTA" : "retro chrome navigation bar"}`,
        `- Hero composition: ${analysis.hasCRTStage ? "split hero with neon headline on the left and a glowing CRT terminal chamber on the right" : "split retro-tech hero composition"}`,
        `- Feature density: exactly ${analysis.featureCount} neon-accented module cards in a grid`,
        `- Proof section: ${analysis.hasTerminalSection ? "large CRT logic block with two numeric stats and a terminal command panel showing boot success" : "retro terminal showcase with metrics and command output"}`,
        `- Accent logic: ${analysis.usesNeonPalette ? "cyan and hot pink dominate with occasional white, yellow, green, and red signal accents" : "neon cyan and magenta drive the visual hierarchy"}`,
        `- Action chrome: ${analysis.hasFixedCTA ? "fixed bottom-right terminal button with offset shadow movement" : "floating terminal-style action control"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, neon contrast, and retro display atmosphere.",
            "- Do not redesign, modernize, soften, or flatten the retro-futurist aesthetic into a generic cyber or SaaS page.",
            "- Match the same information architecture, section ordering, and dramatic neon-console rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky chrome header with a neon icon badge, retro wordmark, compact uppercase nav links, and a rectangular utility CTA.",
            "- Build a split hero with a boot-sequence chip, oversized neon-glow headline, concise uppercase supporting copy, and two rectangular CTA buttons.",
            "- Place a CRT-style product chamber on the right with heavy neon borders, scanline cues, a symbolic chrome icon, tiny status labels, and a glow halo.",
            `- Follow with a module grid containing exactly ${analysis.featureCount} boxed cards with black interiors, neon borders, numbered overlays, and color-coded accents.`,
            "- Add a large CRT logic section with a huge display headline, two metric tiles, and a terminal-style command area that shows system boot success.",
            "- Finish with a retro footer that includes a chrome brand block, grouped link columns, and a terminal-status metadata row.",
            `- Include ${analysis.hasFixedCTA ? "a fixed square terminal action button in the bottom-right corner" : "a floating neon terminal action control"} as part of the page chrome.`,
            "",
            "Interaction and styling constraints",
            "- Keep the entire page dark with cyan and magenta glow as the primary emotional drivers.",
            "- Use neon borders, offset shadows, scanline textures, and CRT-style framing instead of soft glass or modern depth systems.",
            "- Favor rectangular, sharp-edged controls over pills or soft rounded buttons.",
            `- Include ${analysis.hasFlickerMotion ? "subtle scan/flicker motion and pulse effects" : "subtle retro pulse motion"} without making the page unreadable.`,
            "- Preserve the nostalgic 80s sci-fi terminal feeling throughout.",
            "- Do not introduce soft clay surfaces, flat minimalist branding, or contemporary glassmorphism.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: neon retro-futurism, CRT display atmosphere, chrome terminal framing, and synthwave infrastructure energy.",
        "- Change the content, messaging, product framing, modules, metrics, terminal copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same retro-operating-system design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the boot chip, hero copy, CTA labels, CRT panel status text, and system IDs for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} module cards with product capabilities that fit ${resolvedProductName}, while preserving the same boxed density and neon-signaling rhythm.`,
        "- Rework the large CRT logic section into a product-specific control room, launch console, proof panel, or retro command center that suits the new brief.",
        "- Update stats and terminal/status output so they feel credible for the new product while preserving the same nostalgic machine tone.",
        `- Keep ${analysis.hasFixedCTA ? "the fixed terminal action button" : "a floating neon action control"} and rename it to match the new product's primary action.`,
        "- Keep the footer structure, but rewrite the chrome brand block, grouped links, and status metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not switch to soft rounded SaaS UI, accessible neutral trust pages, or modern flat product marketing.",
        "- Do not remove the neon palette, CRT atmosphere, scanline/grid environment, or terminal-like tone.",
        "- Do not add extra sections, testimonials, pricing tables, or dense analytics dashboards unless they clearly map to the reference structure.",
        "- Keep the same arcade-computing, vaporwave-adjacent future nostalgia throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildFlatDesignPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeFlatDesignCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: crisp 2D clarity, startup-product confidence, direct hierarchy, and zero ornamental noise",
        "- Typography: strong modern sans serif, big bold headlines, compact labels, and high legibility without decorative treatments",
        "- Surfaces: flat solid-color blocks, light cards, no shadows, no gradients, and simple rounded corners",
        `- Navigation: ${analysis.hasStickyHeader ? "sticky flat header with clean brand mark, plain nav links, and a solid CTA" : "clean flat navigation bar"}`,
        `- Hero composition: ${analysis.hasFlatAssetStage ? "split hero with left-aligned clarity-first copy and a simple illustrated product stage on the right" : "clean split hero with clear 2D staging"}`,
        `- Feature density: exactly ${analysis.featureCount} clean feature cards in a balanced grid`,
        `- Proof section: ${analysis.has2DProofSection ? "large solid-color block with two metric tiles and a terminal-like proof panel stripped of visual noise" : "clean proof section with solid blocks and direct metrics"}`,
        `- Styling behavior: ${analysis.usesNoShadowLanguage ? "flat interactions with almost no transitions, no shadows, and no depth tricks" : "flat, low-friction interaction styling"}`,
        `- Accent logic: ${analysis.usesSolidPalette ? "solid blue and emerald lead the system with slate neutrals and a few supporting brights" : "solid color accents lead the system without gradients"}`,
        `- Action chrome: ${analysis.hasFixedCTA ? "fixed bottom-right success button with flat color treatment" : "a simple floating 2D action button"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, color blocking, and pure flat interaction behavior.",
            "- Do not redesign, add depth, add gradients, or turn the page into a premium-shadow SaaS landing page.",
            "- Match the same information architecture, section ordering, and direct 2D product-marketing rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky clean header with a simple blue brand block, restrained nav links, and a flat emerald CTA.",
            "- Build a split hero with a tiny pill badge, oversized direct headline, calm explanatory copy, and two large flat CTA buttons.",
            "- Place a clear illustration stage on the right with a pale background, a clean product image, and a small flat status badge.",
            `- Follow with a feature section containing exactly ${analysis.featureCount} light flat cards arranged in a clear grid.`,
            "- Add a large blue proof section with giant typographic messaging, two simple metric tiles, and a dark code/proof panel that still feels strictly 2D.",
            "- Finish with a clean footer that includes a flat brand area, grouped links, and a simple metadata row.",
            `- Include ${analysis.hasFixedCTA ? "a fixed rounded-corner success button in the bottom-right corner" : "a simple floating flat action control"} as part of the final page chrome.`,
            "",
            "Interaction and styling constraints",
            "- Keep the page visually flat: no drop shadows, no glossy surfaces, and no background gradients.",
            "- Use solid colors with clean contrast and restrained radii.",
            "- Keep hover states direct and simple rather than animated or tactile.",
            "- Preserve the feeling of clarity, efficiency, and fast-loading utility.",
            "- Do not introduce glass blur, neon glow, clay depth, or luxury editorial minimalism.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: pure flat 2D surfaces, solid color blocks, clean hierarchy, and zero-noise product clarity.",
        "- Change the content, messaging, product framing, features, metrics, command copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same flat design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the badge, hero copy, CTA labels, illustration context, and status badge for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} feature cards with benefits that fit ${resolvedProductName}, while preserving the same clean flat density and readable rhythm.`,
        "- Rework the big proof section into a product-specific clarity panel, simple workflow proof, command center, or operational snapshot that suits the new brief.",
        "- Update metrics and command/status copy so they feel credible for the new product while preserving the same simplified directness.",
        `- Keep ${analysis.hasFixedCTA ? "the fixed flat success button" : "a simple floating flat action control"} and rename it to fit the new product's main action.`,
        "- Keep the footer structure, but rewrite the brand block, grouped links, and metadata row to fit the new company.",
        "",
        "Strict constraints",
        "- Do not introduce shadows, gradients, glass blur, neon glow, skeuomorphic depth, or ornamental texture.",
        "- Do not make the layout luxurious, cinematic, or heavily animated.",
        "- Do not add extra sections, testimonials, pricing tables, or complex dashboards unless they clearly map to the reference structure.",
        "- Keep the same clarity-first, efficient, stripped-back 2D tone throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildSkeuomorphismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeSkeuomorphismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: industrial premium hardware, forged steel authority, tactile control surfaces, and heavy-machine confidence",
        "- Typography: bold utilitarian sans serif, uppercase system labels, italic mechanical emphasis, and embossed-style headline treatment",
        "- Surfaces: brushed metal consoles, dark steel panels, bevels, raised buttons, inset displays, and hardware-like framing",
        `- Atmosphere: ${analysis.hasTextureOverlay ? "subtle grain/noise overlay with a dark foundry background and premium console realism" : "dark tactile industrial atmosphere"}`,
        `- Navigation: ${analysis.hasStickyHeader ? "sticky brushed-metal header console with shimmering light pass, physical borders, and a mechanical CTA" : "industrial console header"}`,
        `- Hero composition: ${analysis.hasIndustrialAssetStage ? "split hero with a heavy industrial headline on the left and a realistic server/control-box stage on the right" : "split industrial hero with a tactile product stage"}`,
        `- Feature density: exactly ${analysis.featureCount} mechanical feature cards in a structured grid`,
        `- Proof section: ${analysis.hasHeavyTerminalSection ? "large forged panel with two machine-like metrics and an inset terminal/control area showing heavy deployment success" : "heavy information panel with tactile metrics and control output"}`,
        `- Surface behavior: ${analysis.usesPhysicalDepth ? "multi-layer gradients, inset highlights, hard bottom shadows, and pressable hardware depth" : "strong physical depth and tactile button behavior"}`,
        `- Accent logic: ${analysis.usesIndustrialPalette ? "slate steel, black, silver, and electric blue are the core industrial accents, with occasional signal red and amber" : "metallic neutrals with utility accent colors"}`,
        `- Footer/action chrome: ${analysis.hasFixedPowerCTA ? "industrial footer plus a fixed red power-toggle button in the bottom-right" : "industrial footer plus a floating hardware action control"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, material depth, and tactile industrial interaction.",
            "- Do not redesign, flatten, or modernize the skeuomorphic hardware aesthetic into a generic SaaS page.",
            "- Match the same information architecture, section ordering, and heavy-console rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky brushed-metal header console with a tactile brand cluster on the left, compact hardware nav labels in the middle, and a raised blue system button on the right.",
            "- Build a split hero with a system-status badge, oversized industrial headline, tactile supporting copy, and two large pressable buttons with obvious physical depth.",
            "- Place a realistic server-rack or console chamber on the right with metal outer housing, an inset display window, hardware details, and status LEDs.",
            `- Follow with a feature section containing exactly ${analysis.featureCount} metallic cards arranged in a structured grid.`,
            "- Add a large forged information panel with giant typographic messaging, two physical metric blocks, and an inset terminal/control panel that shows successful deployment.",
            "- Finish with an industrial footer that includes a metal brand badge, grouped links, and machinery-like metadata labels.",
            `- Include ${analysis.hasFixedPowerCTA ? "a fixed red power-toggle button in the bottom-right corner" : "a floating industrial hardware control"} as part of the page chrome.`,
            "",
            "Interaction and styling constraints",
            "- Make major controls feel physically pressable through stacked shadows, bevels, inset highlights, and bottom-edge depth.",
            "- Use layered dark-metal gradients, subtle texture overlays, and hardware framing instead of flat or glass surfaces.",
            "- Keep the palette grounded in steel, black, and slate, with blue utility glow and occasional machine-status colors.",
            "- Preserve the sense of weight, force, and engineered reliability.",
            "- Do not introduce glass blur, flat 2D simplification, playful clay softness, or airy editorial minimalism.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: skeuomorphic material depth, industrial hardware surfaces, physical controls, and forged-machine product confidence.",
        "- Change the content, messaging, product framing, features, metrics, terminal copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same tactile industrial design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the status chip, hero copy, CTA labels, hardware-stage labeling, and system language for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same mechanical density and tactile card rhythm.`,
        "- Rework the heavy information section into a product-specific command bay, control room, machine-status panel, or industrial proof block that suits the new brief.",
        "- Update metrics and terminal/control copy so they feel credible for the new product while preserving the same heavy-duty operational tone.",
        `- Keep ${analysis.hasFixedPowerCTA ? "the fixed power-toggle action button" : "a floating industrial control"} and rename it to fit the new product's primary action.`,
        "- Keep the footer structure, but rewrite the brand block, grouped links, and machine metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the design into modern minimal SaaS, neon retro-futurism, or transparent glassmorphism.",
        "- Do not remove the tactile bevels, stacked shadows, material gradients, or hardware-like controls.",
        "- Do not add extra sections, testimonials, pricing tables, or dense dashboards unless they clearly map to the reference structure.",
        "- Keep the same industrial, durable, machinery-first feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildLiquidGlassPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeLiquidGlassCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: premium fluid translucency, refractive calm, macOS-like polish, and high-end liquid-material elegance",
        "- Typography: bold modern sans serif, uppercase micro-labels, italic emphasis, and crisp white-on-glass hierarchy",
        `- Core primitive: ${analysis.hasCustomGlassPrimitive ? "a reusable liquid-glass wrapper with multiple layers for specular highlight, white overlay, distortion, and elevated content" : "reusable layered liquid-glass panels"}`,
        `- Material behavior: ${analysis.hasSVGDistortionFilter ? "refractive distortion driven by an SVG turbulence/displacement filter" : "fluid distortion and refractive blur on translucent panels"}`,
        `- Background system: ${analysis.hasMacOSBackground ? "a photographic macOS-style wallpaper with grain overlay and dark vignette tint" : "a vibrant premium background beneath translucent glass panels"}`,
        `- Navigation: ${analysis.hasGlassHeader ? "header assembled from separate pill-shaped glass components rather than one solid opaque bar" : "floating glass navigation system"}`,
        `- Hero composition: ${analysis.hasHeroNodeMonitor ? "split hero with headline/copy on the left and a liquid-glass node-monitor card on the right" : "split hero with a premium liquid product card"}`,
        `- Feature density: exactly ${analysis.featureCount} glass cards in a spacious grid`,
        `- Proof section: ${analysis.hasLiquidTerminalSection ? "large liquid-glass showcase with oversized copy, two luminous stats, and a nested glass command panel showing fluid activation" : "large refractive proof block with nested glass terminal content"}`,
        `- Surface styling: ${analysis.usesWhiteGlassPalette ? "mostly white translucent overlays, soft borders, subtle highlight rims, and bright text on dark background" : "bright translucent glass styling with restrained chrome"}`,
        `- Blur logic: ${analysis.usesBackdropBlur ? "glass panels rely on blur, layering, and refractive overlays instead of hard depth" : "soft-blur layered glass treatment"}`,
        `- Action chrome: ${analysis.hasBottomGlassToggle ? "bottom-right liquid-glass orb/button anchored inside the page shell" : "a floating liquid-glass action control"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, translucency, refraction, and premium fluid behavior.",
            "- Do not redesign, flatten, or replace the liquid-glass aesthetic with ordinary glassmorphism or a standard dark SaaS page.",
            "- Match the same information architecture, section ordering, and material rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a top header composed of separate pill-like glass elements: brand capsule on the left, floating glass nav chips in the middle, and a glass CTA pill on the right.",
            "- Build a split hero with a live-status glass badge, oversized headline, soft supporting copy, and two rounded liquid-glass CTA buttons on the left.",
            "- Place a premium node-monitor glass card on the right with a CPU icon, live indicator, stats, and a shimmering progress bar.",
            `- Follow with a feature section containing exactly ${analysis.featureCount} rounded glass cards arranged in a spacious grid.`,
            "- Add a large refractive showcase block with oversized copy, two high-contrast stats, and a nested liquid-glass command panel showing fluid-system activation.",
            "- Finish with a refined footer that preserves the same glass-era brand tone, grouped links, and subtle metadata row.",
            `- Include ${analysis.hasBottomGlassToggle ? "a bottom-right liquid-glass orb/button" : "a floating liquid-glass action control"} as part of the page chrome.`,
            "",
            "Interaction and styling constraints",
            "- Use a reusable liquid-glass material system with layered highlight, overlay, distortion, and content separation.",
            "- Keep surfaces translucent, bright, and premium; avoid opaque cards or hard industrial borders.",
            "- Use blur, refraction, subtle glow, and clean white text as the main styling language.",
            "- Preserve the calm, high-end, fluid-material feeling rather than making it loud or futuristic in a cyberpunk way.",
            "- Do not switch to basic glassmorphism, flat design, or tactile skeuomorphism.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: liquid-glass translucency, refractive layering, premium ambient background, and calm fluid-material polish.",
        "- Change the content, messaging, product framing, features, metrics, command copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same liquid-material design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the status badge, hero copy, CTA labels, node-monitor labels, and system language for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} glass feature cards with capabilities that fit ${resolvedProductName}, while preserving the same luminous density and material rhythm.`,
        "- Rework the large refractive section into a product-specific command center, premium proof panel, operational status block, or fluid workflow showcase that suits the new brief.",
        "- Update metrics and command/status copy so they feel credible for the new product while preserving the same elegant liquid-tech tone.",
        `- Keep ${analysis.hasBottomGlassToggle ? "the bottom-right liquid-glass action orb" : "a floating liquid-glass action control"} and rename it to fit the new product's primary action.`,
        "- Keep the footer structure, but rewrite the brand block, grouped links, and metadata row to fit the new company.",
        "",
        "Strict constraints",
        "- Do not convert the design into opaque cards, ordinary glass blur, or hard-edged enterprise UI.",
        "- Do not remove the layered liquid-glass primitive, refractive distortion logic, or premium translucent material behavior.",
        "- Do not add extra sections, testimonials, pricing tables, or dense analytics dashboards unless they clearly map to the reference structure.",
        "- Keep the same serene, premium, fluid-material atmosphere throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildMotionDrivenPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeMotionDrivenCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: high-velocity storytelling, energetic editorial motion, bold kinetic product marketing, and constant forward momentum",
        "- Typography: huge italic uppercase display text, compressed supporting copy, micro labels with wide tracking, and loud directional emphasis",
        "- Surfaces: stark black-and-white blocks, lime signal accents, sharp rectangular elements, and motion-first content framing",
        `- Background system: ${analysis.hasAnimatedGridBackground ? "animated grid drift over a dark field, used as a subtle motion texture behind the page" : "dark kinetic background with moving spatial cues"}`,
        `- Navigation behavior: ${analysis.hasScrollReactiveHeader ? "sticky header that morphs on scroll into a blurred, scaled, high-speed control bar" : "sticky motion-aware header"}`,
        `- Hero composition: ${analysis.hasStaggeredHero ? "split hero with staggered headline entrances, moving rings, and a dynamic visual stage on the right" : "split hero with animated typographic choreography"}`,
        `- Motion devices: ${analysis.hasMarqueeBand ? "a full-width marquee band reinforces the brand through continuous lateral movement" : "large motion-led brand separators between sections"}`,
        `- Feature density: exactly ${analysis.featureCount} kinetic feature cards in a spacious grid`,
        `- Proof section: ${analysis.hasKineticConsole ? "high-contrast console block with oversized copy and a terminal proving kinetic deployment performance" : "high-energy proof section with command-console treatment"}`,
        `- Accent logic: ${analysis.usesAccentLime ? "acid-lime is the main motion accent against black, white, and muted gray surfaces" : "a single bright motion accent drives hierarchy across a mostly monochrome page"}`,
        `- Motion grammar: ${analysis.hasParallaxDecor ? "hover transforms, entrance animation, marquee movement, ping/bounce/spin accents, and large directional translations" : "strong motion across headings, cards, and accents"}`,
        `- Animation system: ${analysis.hasCustomKeyframes ? "custom keyframes are an essential part of the design rather than a decorative afterthought" : "custom CSS animation drives the experience"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, motion choreography, and kinetic interaction behavior.",
            "- Do not redesign, calm down, or remove the movement-driven storytelling.",
            "- Match the same information architecture, section ordering, and sense of momentum across the entire page.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky motion-reactive header with a transforming shell on scroll, a rotating/underlined brand cluster, tracked nav buttons, and a bold CTA.",
            "- Build a split hero with a small activity badge, an oversized staggered headline, strong supporting copy, and two directional CTAs with aggressive hover movement.",
            "- Place a motion-heavy media stage on the right with a grayscale image, long-duration zoom/rotation behavior, floating numeric overlays, and animated geometric accents.",
            `- Insert ${analysis.hasMarqueeBand ? "a full-width marquee section" : "a wide kinetic divider section"} between hero and feature content to keep the page in motion.`,
            `- Follow with a feature section containing exactly ${analysis.featureCount} interactive cards with animated icon blocks, glow accents, and directional callouts.`,
            "- Add a strong black-and-white proof section with giant typography and a terminal console proving high-speed deployment.",
            "- Finish with a footer that keeps motion alive through rotating brand elements, animated status indicators, and link hover shifts.",
            "",
            "Interaction and styling constraints",
            "- Motion is a primary design material, not an optional enhancement.",
            "- Use custom keyframes for drift, marquee, staggered text entry, and slow spin where needed.",
            "- Keep the page mostly black and white with one bright lime accent color doing the heavy visual work.",
            "- Use sharp offsets, directional transforms, and movement cues that imply acceleration.",
            "- Do not make the page soft, glassy, static, or overly polished in a luxury sense.",
            "- Do not remove animation unless it clearly harms readability.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: kinetic storytelling, aggressive motion cues, bold monochrome layout, and a single vivid accent color.",
        "- Change the content, messaging, product framing, features, proof block, terminal copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same motion system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the activity badge, hero copy, CTA labels, visual-stage labels, and proof language for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same kinetic density and motion rhythm.`,
        "- Rework the proof section into a product-specific motion demo, launch console, performance theater, or command sequence that suits the new brief.",
        "- Update marquee phrases, terminal copy, and performance signals so they feel credible for the new product while preserving the same fast-moving energy.",
        "- Keep the footer structure, but rewrite the brand block, grouped links, and status metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the experience into a static SaaS page or a calm trust-oriented layout.",
        "- Do not remove the motion-led typography, scroll-reactive header, or marquee/entrance choreography.",
        "- Do not add extra sections, testimonials, pricing tables, or dense dashboards unless they clearly map to the reference structure.",
        "- Keep the same sense of momentum, movement, and velocity throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildMicroInteractionsPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeMicroInteractionsCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: tactile modern SaaS, responsive product feedback, polished gentleness, and subtle delight layered into every action",
        "- Typography: bold modern sans serif, clean spacing, restrained uppercase utility labels, and warm but precise product language",
        "- Surfaces: soft light cards, rounded panels, subtle borders, airy shadows, and indigo-led feedback accents",
        `- Navigation behavior: ${analysis.hasScrollReactiveHeader ? "sticky header that gains blur, border, and shadow on scroll for a refined app-like feel" : "refined sticky app header"}`,
        `- Feedback system: ${analysis.hasToastFeedback ? "top-centered toast confirmation, animated badge states, hover dots, and small status pulses" : "small feedback surfaces and animated confirmations"}`,
        `- Hero interaction: ${analysis.hasProcessingButton ? "primary CTA transforms into a processing state with spinner and inline progress bar, while secondary controls have small rotational feedback" : "primary actions include tactile loading and state feedback"}`,
        `- Media stage: ${analysis.hasInteractiveHeroCard ? "3D-tilting hero card with floating metric chip, shimmer bar, and hover depth response" : "interactive hero stage with layered hover feedback"}`,
        `- Feature density: exactly ${analysis.feedbackCardCount} tactile feature cards with stateful hover transitions`,
        `- Reusable component logic: ${analysis.hasReusableHoverCard ? "feature cards are driven by a reusable interaction component with internal hover state" : "repeated cards share a consistent hover-feedback behavior"}`,
        `- Progress language: ${analysis.hasShimmerProgress ? "progress bars and loading surfaces use shimmer or slow-easing fill animations" : "progress surfaces animate in a subtle tactile way"}`,
        `- Footer/proof section: ${analysis.hasStatusFooterBlock ? "dark status block with live process bars, soft glow, and restrained CTA transitions" : "status footer with live operational feedback"}`,
        `- Accent logic: ${analysis.usesIndigoFeedbackPalette ? "indigo is the main feedback color, supported by emerald success, amber warnings, and soft slate neutrals" : "subtle feedback accents drive the experience"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, tactile feedback states, and refined micro-interaction behavior.",
            "- Do not redesign, oversimplify, or remove the subtle response patterns that make the interface feel alive.",
            "- Match the same information architecture, section ordering, and product-feedback rhythm across the entire page.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky app-like header with a subtle scroll state, a brand mark that slightly evolves on hover, tiny tracked nav items, and a compact primary CTA.",
            "- Add a top-centered toast confirmation system that can animate in and out independently of the rest of the page.",
            "- Build a split hero with a small live-status badge, oversized headline, calm supporting copy, and a primary action that can enter a processing state with spinner plus inline progress bar.",
            "- Place a tactile hero card on the right with a subtle 3D tilt, zooming image, floating metric module, and shimmer-based throughput bar.",
            `- Follow with a micro-detail section containing exactly ${analysis.feedbackCardCount} reusable interactive feedback cards with hover-driven icon, text, and callout transitions.`,
            "- Add a dark status/proof block with live process meters, rotating refresh icon, and compact call-to-action buttons.",
            "- Finish with a quiet footer whose links still respond with small scale/color changes and lightweight delight.",
            "",
            "Interaction and styling constraints",
            "- Favor small, believable interactions over giant theatrical motion.",
            "- Use hover, press, processing, toast, progress, shimmer, float, and tiny rotational cues as the main interaction language.",
            "- Keep the palette light and clean with indigo as the main interaction accent.",
            "- Make everything feel tactile, polished, and product-ready without becoming flashy.",
            "- Do not introduce noisy kinetic marquees, giant motion storytelling, or heavy dark cyber aesthetics.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: subtle tactile motion, responsive feedback states, light product surfaces, and polished micro-interactions.",
        "- Change the content, messaging, product framing, cards, status labels, progress copy, and footer language so they fit the new product.",
        "- The final result should feel like the same designer and same feedback system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the live-status badge, hero copy, CTA labels, processing text, floating metric labels, and toast message for ${resolvedProductName}.`,
        `- Replace the ${analysis.feedbackCardCount} interactive feature cards with capabilities that fit ${resolvedProductName}, while preserving the same hover-state rhythm and card density.`,
        "- Rework the dark status block into a product-specific live-operations area, command panel, active workflow summary, or onboarding state block that suits the new brief.",
        "- Update progress labels, status indicators, and process names so they feel credible for the new product while preserving the same responsive feedback tone.",
        "- Keep the footer structure, but rewrite the brand copy, platform links, and status metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not turn the page into a static flat layout or into a heavy theatrical motion showcase.",
        "- Do not remove the toast, processing, hover, float, shimmer, and progress-state feeling that defines the interaction system.",
        "- Do not add extra sections, testimonials, pricing tables, or dense dashboards unless they clearly map to the reference structure.",
        "- Keep the same light, tactile, responsive, and delight-oriented product feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildInclusiveDesignPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeInclusiveDesignCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: accessibility-first product design, humane clarity, universal participation, and explicit adaptability for different user needs",
        "- Typography: bold highly legible sans serif, clear size hierarchy, spacious line height, tracked uppercase utility labels, and readable contrast over decorative style",
        "- Surfaces: clean panels, strong borders when needed, obvious state changes, roomy spacing, and trust-oriented structure",
        `- Accessibility tooling: ${analysis.hasAccessibilityToolbar ? "a dedicated sticky shortcut bar exposes assistive controls up front instead of hiding them in settings" : "assistive controls are surfaced directly in the main UI"}`,
        `- Adaptive behavior: ${analysis.hasContrastToggle ? "the interface can flip into a high-contrast mode with black/yellow emphasis" : "the interface exposes a clear high-contrast pathway"}`,
        `- Scaling behavior: ${analysis.hasFontScaling ? "font sizing or zoom is adjustable from the main toolbar and the layout adapts cleanly" : "the layout respects dynamic text scaling"}`,
        `- Hero composition: ${analysis.hasRepresentativeHero ? "split hero with explicit compliance messaging on the left and a representative inclusive-image stage plus accessibility health overlay on the right" : "split hero with accessibility proof built into the visual stage"}`,
        `- Feature density: exactly ${analysis.featureCount} inclusion-focused principle cards in a readable grid`,
        `- Footer/proof behavior: ${analysis.hasStatusFooter ? "footer includes a live accessibility status panel with visible pass state" : "footer includes explicit accessibility trust signals"}`,
        `- Accent logic: ${analysis.usesDualPalette ? "normal mode uses deep blue and slate on white, while high-contrast mode flips to black with strong yellow emphasis" : "the system prioritizes contrast-safe accent behavior over branding flourish"}`,
        `- Social proof: ${analysis.hasTestimonialBlock ? "a user-impact testimonial block reinforces real-world accessibility outcomes" : "trust proof is centered on inclusive user outcomes"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, adaptive accessibility behavior, and universal-design framing.",
            "- Do not redesign, make it more decorative, or hide the accessibility controls behind secondary flows.",
            "- Match the same information architecture, section ordering, and readability-first product tone.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky accessibility shortcut bar at the very top with visible assistive controls such as high-contrast mode and font scaling, plus a keyboard-search hint.",
            "- Build a clean main header below it with brand, navigation, and a clear primary CTA.",
            "- Create a split hero with a strong compliance/inclusion badge, oversized headline, readable supporting copy, and two large clear CTAs.",
            "- Place an inclusive representative image stage on the right with an accessibility-health overlay card.",
            `- Follow with a feature grid containing exactly ${analysis.featureCount} principle cards focused on clarity, navigation, simplified cognition, and inclusive trust.`,
            `- Add ${analysis.hasTestimonialBlock ? "a centered user-impact testimonial block" : "a strong proof block about real-world inclusive outcomes"} after the feature grid.`,
            "- Finish with a clean footer that includes grouped links and a clearly visible accessibility-status module.",
            "",
            "Interaction and styling constraints",
            "- Accessibility is the primary design system, not a secondary enhancement.",
            "- Maintain strong readability, obvious affordances, and safe contrast in every state.",
            "- Let adaptive controls materially change the interface rather than acting as decorative toggles.",
            "- Keep the design calm, direct, and high-trust rather than flashy or experimental.",
            "- Do not introduce motion-heavy theatrics, dense visual noise, or ambiguous controls.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: universal accessibility framing, adaptive controls, strong readability, representative imagery, and trust-first inclusion proof.",
        "- Change the content, messaging, product framing, feature principles, testimonial, status modules, and footer language so they fit the new product.",
        "- The final result should feel like the same inclusive design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same adaptive top-bar pattern, but rename the assistive controls, compliance messaging, hero copy, CTA labels, and health/status labels for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} principle cards with values or capabilities that fit ${resolvedProductName}, while preserving the same inclusion-first rhythm and readability.`,
        "- Rework the testimonial/proof block into a product-specific accessibility story, community outcome statement, or trust section that suits the new brief.",
        "- Update the accessibility status module and footer metadata so they feel credible for the new product while preserving the same explicit commitment to inclusion.",
        "- Keep the footer structure, but rewrite the grouped links and status text to fit the new company.",
        "",
        "Strict constraints",
        "- Do not hide or remove the adaptive accessibility tools.",
        "- Do not reduce contrast, shrink text hierarchy, or trade clarity for visual trendiness.",
        "- Do not add extra sections, testimonials, pricing tables, or complex dashboards unless they clearly map to the reference structure.",
        "- Keep the same humane, inclusive, high-clarity, universal-design feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildZeroInterfacePrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeZeroInterfaceCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: ambient intelligence, intentional stillness, near-invisible interface, contemplative product minimalism, and AI-like anticipation of user intent",
        "- Typography: sparse ultra-clean sans serif, oversized quiet headlines, micro uppercase labels, low-contrast supporting text, and lots of empty space",
        "- Surfaces: nearly invisible chrome, paper-like background, ultra-soft borders, floating minimal controls, and content that fades in only when needed",
        `- Environment: ${analysis.hasAmbientBackground ? "soft paper texture and gentle radial light give the page a physical calm rather than a digital dashboard feeling" : "ambient neutral background with subtle tactile texture"}`,
        `- Header behavior: ${analysis.hasMinimalHeader ? "header is ghosted, low-opacity, and only fully reveals itself on hover or attention" : "header remains visually recessive and secondary"}`,
        `- Entrance behavior: ${analysis.hasMountReveal ? "core chrome fades/slides in progressively on load instead of appearing all at once" : "UI reveals itself gradually"}`,
        `- Core interaction: ${analysis.hasRippleInteraction ? "clicking the scene triggers soft ripple waves and temporary state changes through the central hero surface" : "interaction is expressed through soft ambient ripples and state shifts"}`,
        `- Hero stage: ${analysis.hasHeroImageStage ? "a central zen-like image card acts as the visual anchor, with an ephemeral overlay that appears only during interaction" : "a single calm visual anchor carries the experience"}`,
        `- Input model: ${analysis.hasIntentInput ? "a minimal intent field invites the user to state what they want, rather than navigate a dense UI" : "interaction centers on intent capture rather than explicit controls"}`,
        `- Peripheral data: ${analysis.hasGhostMetrics ? "metrics exist only as ghosted low-emphasis ambient signals at the bottom edge" : "operational data stays peripheral and low-emphasis"}`,
        `- Control strategy: ${analysis.hasVoiceActions ? "voice and search controls appear as tiny circular affordances rather than dominant UI panels" : "secondary actions remain minimal and peripheral"}`,
        `- Visual disclosure: ${analysis.hasProgressiveDisclosure ? "many elements stay semi-transparent until hover, focus, or interaction brings them forward" : "content is progressively disclosed based on attention"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, ambient interaction, and zero-interface philosophy.",
            "- Do not redesign it into a normal SaaS landing page or add obvious UI chrome.",
            "- Match the same information architecture, section ordering, and contemplative interaction model.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a nearly invisible floating header with tiny brand language on the left and a minimal low-contrast nav on the right.",
            "- Build the page around one central visual anchor: a calm image panel that responds to interaction with ripple waves and temporary overlays.",
            "- Keep the main headline and supporting copy sparse, centered, and softened when interaction takes focus.",
            "- Add a single intent-capture input below the core visual stage, with minimal chrome and a widening/focus response.",
            "- Place ambient metrics and secondary controls at the bottom edge in a ghosted low-emphasis layout.",
            "- Preserve the overall feeling that the user is interacting with an intelligent environment rather than navigating a conventional interface.",
            "",
            "Interaction and styling constraints",
            "- Favor absence, silence, and progressive disclosure over explicit navigation or dense UI.",
            "- Use ripple, fade, blur, soft scale, and opacity shifts as the primary feedback system.",
            "- Keep the palette pale, paper-like, and mostly monochrome.",
            "- Make controls feel optional and peripheral, not dominant.",
            "- Do not add sections, cards, testimonials, pricing tables, or obvious dashboard modules.",
            "- Do not turn this into glassmorphism, minimal SaaS, or futuristic HUD design.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: ambient interaction, invisible chrome, intent-first input, ghosted metrics, and a contemplative AI-era product feeling.",
        "- Change the content, messaging, product framing, ambient labels, intent prompt, metric labels, and microcopy so they fit the new product.",
        "- The final result should feel like the same zero-interface system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the ambient headline and support copy so they clearly communicate this product promise: ${resolvedProductBrief}`,
        `- Keep the same centered composition, but rewrite the ghost header labels, overlay text, intent-input placeholder, ambient metrics, and bottom controls for ${resolvedProductName}.`,
        "- Rework the ripple interaction so it still feels like the system is sensing intention rather than responding through obvious UI panels.",
        "- Update the bottom metrics and action buttons so they feel credible for the new product while staying peripheral and low-emphasis.",
        "",
        "Strict constraints",
        "- Do not add dense cards, visible navigation systems, testimonials, feature grids, or explicit dashboard modules.",
        "- Do not remove the ripple interaction, progressive disclosure, or intent-first input pattern.",
        "- Do not increase contrast or visual density so much that the interface stops feeling invisible.",
        "- Keep the same serene, anticipatory, AI-native atmosphere throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildSoftUIEvolutionPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeSoftUIEvolutionCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: evolved soft UI for modern SaaS, tactile but cleaner than classic neumorphism, high-confidence product polish, and accessible depth",
        "- Typography: bold clean sans serif, confident display headlines, compact uppercase utility labels, and softer secondary body copy",
        "- Surfaces: pale soft backgrounds, rounded shells, airy outer shadows, inset controls, and improved contrast compared with older soft UI",
        `- Header behavior: ${analysis.hasSoftFloatingHeader ? "floating soft-depth header with rounded shell and clean neumorphic contrast" : "soft floating app header"}`,
        `- CTA behavior: ${analysis.hasPressedCTAState ? "primary CTA can visibly press into an active state rather than only hover" : "primary CTA uses tactile soft-depth feedback"}`,
        `- Hero composition: ${analysis.hasHeroStatsCard ? "split hero with bold left-side messaging and a large soft card on the right containing image plus three inset status tiles" : "split hero with a tactile product stage and embedded soft metrics"}`,
        `- Trust structure: ${analysis.hasLogoWall ? "a logo/trust wall sits immediately after the hero to reinforce credibility" : "trust proof follows the hero early in the page"}`,
        `- Feature density: exactly ${analysis.featureCount} core capability cards in a soft grid`,
        `- Pricing behavior: ${analysis.hasBillingToggle ? "pricing section includes a tactile monthly/yearly toggle plus ${analysis.planCount} plan cards with one highlighted choice" : `pricing section includes ${analysis.planCount} tactile plan cards`}`,
        `- Social proof: ${analysis.hasTestimonialBlock ? "a dark testimonial block contrasts the light page and punctuates the conversion flow" : "conversion flow includes a strong proof/testimonial section"}`,
        `- Accent logic: ${analysis.usesAccessibleSoftPalette ? "teal and soft indigo accents drive hierarchy against pale slate backgrounds" : "soft modern accent colors lead the hierarchy without overpowering the page"}`,
        `- Depth model: ${analysis.usesOuterAndInnerSoftDepth ? "both outer neumorphic shadows and inset surfaces are used, but with cleaner contrast and stronger usability" : "soft depth is used in a modern, readable way"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, soft-depth styling, and conversion-oriented SaaS structure.",
            "- Do not redesign it into flat UI, heavy glassmorphism, or old-school mushy neumorphism.",
            "- Match the same information architecture, section ordering, and upgraded soft-UI polish.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a floating rounded header with soft outer shadow depth, compact nav, and a clear primary CTA.",
            "- Build a split hero with a tactile badge, oversized headline, soft supporting copy, one primary action that can press into an active state, and lightweight avatar/social proof treatment.",
            "- Place a large soft card on the right with a hero image and three inset stat tiles.",
            `- Follow with ${analysis.hasLogoWall ? "a trust logo wall" : "early trust proof"} after the hero.`,
            `- Add a feature section containing exactly ${analysis.featureCount} soft capability cards.`,
            `- Include a pricing section with a tactile billing toggle and exactly ${analysis.planCount} pricing plans, including one highlighted plan.`,
            `- Add ${analysis.hasTestimonialBlock ? "a dark testimonial block" : "a strong testimonial/proof block"} before the footer.`,
            "- Finish with a detailed SaaS footer that preserves the same clean utility grouping and social icons.",
            "",
            "Interaction and styling constraints",
            "- Keep the palette light, soft, and modern, but maintain better contrast than classic neumorphism.",
            "- Use rounded corners, soft shadows, and inset controls thoughtfully instead of everywhere indiscriminately.",
            "- Keep hover and press states subtle, tactile, and product-like.",
            "- Make the page feel premium and usable, not toy-like or low-contrast.",
            "- Do not add hard brutalist edges, dark cyberpunk atmosphere, or totally flat 2D treatment.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: evolved soft UI, improved contrast, tactile depth, modern SaaS trust signals, and conversion-friendly structure.",
        "- Change the content, messaging, product framing, features, plans, stats, testimonial, and footer language so they fit the new product.",
        "- The final result should feel like the same modern soft-UI design system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the badge, hero copy, CTA labels, stat labels, and trust indicators for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} capability cards with benefits that fit ${resolvedProductName}, while preserving the same soft-card density and readable rhythm.`,
        `- Rework the pricing section into ${analysis.planCount} plans that make sense for ${resolvedProductName}, preserving the same toggle behavior and highlighted middle option if appropriate.`,
        "- Rewrite the testimonial block into a credible proof statement for the new product while keeping the same contrast and emphasis pattern.",
        "- Keep the footer structure, but rewrite brand copy, grouped links, and social/trust language to fit the new company.",
        "",
        "Strict constraints",
        "- Do not revert to low-contrast old neumorphism or turn the page into generic flat SaaS UI.",
        "- Do not remove the tactile soft-depth system, pricing toggle behavior, or early trust signals.",
        "- Do not add extra sections, testimonials, pricing complexity, or dashboards unless they clearly map to the reference structure.",
        "- Keep the same accessible, polished, modern soft-product feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildHeroCentricPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeHeroCentricCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: premium dark launch page, concentrated conversion energy, dominant hero persuasion, and controlled enterprise-futurist drama",
        "- Typography: oversized hero display text, italic emphasis, tight tracking, tiny uppercase utility labels, and concise command-like microcopy",
        "- Surfaces: dark matte backgrounds, subtle glow fields, rounded premium cards, thin translucent borders, and minimal chrome outside the hero",
        `- Header strategy: ${analysis.hasAbsoluteHeader ? "header floats over the hero and stays visually secondary so the hero remains dominant" : "header is minimized to protect hero focus"}`,
        `- Hero scale: ${analysis.hasFullHeroSection ? "hero occupies most of the first viewport and carries the primary conversion message" : "hero dominates the first impression with oversized presence"}`,
        `- Background drama: ${analysis.hasImmersiveGlowBackground ? "soft indigo and emerald glow blobs plus dark texture create an immersive premium field" : "hero atmosphere relies on restrained dark glows and texture"}`,
        `- Hero media: ${analysis.hasDominantHeroMedia ? "a large right-side visual card anchors the hero with premium imagery and strong shadow depth" : "hero includes a dominant media object on the right"}`,
        `- Hero proof detail: ${analysis.hasFloatingHeroMetric ? "a floating status widget hovers over the hero media and adds live-compute credibility" : "hero media includes a small live-proof overlay"}`,
        `- Trust architecture: ${analysis.hasTrustBar ? "trust moves immediately below the hero as a compressed logo/status band" : "trust proof follows the hero in a tight supporting band"}`,
        `- Capability structure: ${analysis.hasCapabilityRail ? "one explanatory capability rail on the left and ${analysis.capabilityCount} supporting cards on the right" : `${analysis.capabilityCount} capability blocks support the hero promise`}`,
        `- CTA architecture: ${analysis.hasFocusedCTABlock ? "the page culminates in a focused dark CTA section with one dominant action" : "conversion is resolved through a dedicated CTA section after supporting proof"}`,
        `- Accent logic: ${analysis.usesDarkConversionPalette ? "indigo drives primary actions while emerald acts as a trust/performance accent over a near-black foundation" : "a restrained dark palette with one strong CTA color dominates the experience"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, hero dominance, and dark premium conversion flow.",
            "- Do not rebalance the page into an even multi-section SaaS layout; the hero must remain the main event.",
            "- Match the same information architecture, section ordering, and concentrated launch-page energy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished landing page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a minimal absolute header that floats over the hero with brand, compact nav, and one small primary CTA.",
            "- Build a dominant dark hero with oversized headline, concise support copy, two strong CTAs, and compact numeric proof directly under the copy.",
            "- Place a premium hero image card on the right with one floating status widget or live metric chip.",
            `- Add ${analysis.hasTrustBar ? "a compressed trust bar immediately below the hero" : "an immediate post-hero trust strip"} to sustain conversion momentum.`,
            `- Follow with a capabilities section that combines a strong explanatory rail and ${analysis.capabilityCount} supporting cards.`,
            `- Add ${analysis.hasFocusedCTABlock ? "a focused final CTA section with one dominant action" : "a strong CTA section"} before the footer.`,
            "- Finish with a compact footer that stays secondary to the hero and CTA narrative.",
            "",
            "Interaction and styling constraints",
            "- The hero must visually dominate the whole experience.",
            "- Keep the page dark, premium, and conversion-focused, with restrained indigo and emerald accents.",
            "- Use glow, texture, and shadow sparingly to heighten the hero rather than decorate every section equally.",
            "- Maintain a clean story arc from hero to trust to capabilities to final CTA.",
            "- Do not add busy navigation, multiple competing sections above the fold, or dense app-like UI.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: hero-dominant dark launch page, concentrated conversion architecture, premium media-led persuasion, and restrained supporting sections.",
        "- Change the content, messaging, proof metrics, capabilities, CTA language, and footer content so they fit the new product.",
        "- The final result should feel like the same hero-centric landing page system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same hero-dominant composition, but rewrite the badge, headline, supporting copy, CTA labels, hero metrics, and media overlay proof for ${resolvedProductName}.`,
        `- Replace the ${analysis.capabilityCount} supporting capability cards with benefits that fit ${resolvedProductName}, while preserving the same supporting-role rhythm behind the hero.`,
        "- Rework the trust band and final CTA block so they feel credible and conversion-ready for the new product.",
        "- Keep the footer structure, but rewrite the grouped links, governance/protocol language, and metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the page into a balanced section-first SaaS layout.",
        "- Do not remove the oversized hero, floating header, trust strip, or focused final CTA.",
        "- Do not add extra sections, testimonials, pricing grids, or dashboards unless they clearly map to the reference structure.",
        "- Keep the same premium, dark, decisive, hero-led conversion feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildConversionOptimizedPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeConversionOptimizedCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: clean lead-gen SaaS, high-trust sales urgency, single-action conversion focus, and friction-reduced signup flow",
        "- Typography: bold direct sans serif, oversized hero headlines, tight supporting copy, and uppercase conversion microcopy",
        "- Surfaces: bright white backgrounds, emerald action accents, soft card shadows, and obvious form focus states",
        `- Header strategy: ${analysis.hasAbsoluteHeader ? "absolute header stays lightweight and keeps the first screen dominated by the signup CTA" : "header remains secondary to the main conversion action"}`,
        `- Hero strategy: ${analysis.hasUrgencyBadge ? "hero opens with a scarcity/urgency badge before pushing one dominant signup path" : "hero is structured around one primary action and fast clarity"}`,
        `- Conversion mechanic: ${analysis.hasHeroForm ? "the main hero CTA is an inline email capture form rather than just a button" : "the hero centers around a high-clarity primary action"}`,
        `- CTA behavior: ${analysis.hasLoadingCTA ? "submission shows an immediate loading/synchronizing state to reinforce progress and responsiveness" : "primary CTA includes feedback-oriented state changes"}`,
        `- Trust architecture: ${analysis.hasAvatarTrustProof ? "avatar proof and engineer-count trust text sit directly under the hero form" : "trust proof appears immediately after the primary CTA"}`,
        `- Social proof: ${analysis.hasLogoGrid ? "a dedicated logo band follows early to reinforce credibility before deeper explanation" : "logos/trust proof follow the hero quickly"}`,
        `- Value proposition density: exactly ${analysis.valuePropCount} proof-oriented benefit rows explain the core reasons to convert`,
        `- Pricing structure: exactly ${analysis.planCount} plans are presented, with one premium recommendation receiving strong emphasis`,
        `- Proof section: ${analysis.hasDarkTestimonial ? "a dark testimonial block interrupts the bright page to amplify credibility and outcomes" : "a strong testimonial section reinforces the conversion case mid-page"}`,
        `- Accent logic: ${analysis.usesEmeraldConversionPalette ? "emerald is the action color for urgency, trust, and primary CTA emphasis over mostly white surfaces" : "one strong action color drives the conversion hierarchy"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, trust signals, and conversion-first behavior.",
            "- Do not redesign it into a feature-heavy exploration page or a generic balanced SaaS landing page.",
            "- Match the same information architecture, section ordering, and single-primary-action sales flow.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a lightweight absolute header with restrained nav and one strong CTA button.",
            "- Build a centered hero with urgency badge, oversized promise headline, tight benefit copy, and one dominant inline email capture form.",
            "- Add immediate trust proof under the form, including social avatars or equivalent human proof and a compact user-count claim.",
            `- Follow with ${analysis.hasLogoGrid ? "a logo/social-proof strip" : "an early trust section"} before deeper explanation.`,
            `- Add a value proposition section containing exactly ${analysis.valuePropCount} focused reasons-to-buy paired with a supporting visual.`,
            `- Insert ${analysis.hasDarkTestimonial ? "a dark testimonial/proof section" : "a strong testimonial block"} to reinforce results.`,
            `- Finish with a pricing section showing exactly ${analysis.planCount} plans, including one clearly recommended offer, then a clean conversion-oriented footer.`,
            "",
            "Interaction and styling constraints",
            "- Keep the page bright, calm, and fast-loading, with emerald reserved for action and trust emphasis.",
            "- Make the primary CTA unmistakable and reduce all competing interactions.",
            "- Use loading feedback, strong form focus, and clean trust signals to increase perceived momentum.",
            "- Do not overload the page with feature grids, deep-dive modules, or decorative experimentation.",
            "- The entire composition should feel optimized to capture signups quickly.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: form-first conversion flow, urgency cueing, immediate trust proof, and one dominant signup path.",
        "- Change the content, messaging, email capture framing, benefits, testimonial, pricing copy, and footer language so they fit the new product.",
        "- The final result should feel like the same conversion system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same centered hero composition, but rewrite the urgency badge, headline, form placeholder, CTA labels, and trust copy for ${resolvedProductName}.`,
        `- Replace the ${analysis.valuePropCount} value-proposition rows with benefits that fit ${resolvedProductName}, while preserving the same sales-focused density and proof rhythm.`,
        `- Rework the ${analysis.planCount}-plan pricing section so it makes sense for ${resolvedProductName}, keeping one offer clearly recommended if appropriate.`,
        "- Rewrite the testimonial section into a credible customer-outcome story for the new product.",
        "- Keep the footer structure, but rewrite grouped links, mission copy, and security metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not turn the page into a feature-heavy product showcase or a dense documentation-style landing page.",
        "- Do not remove the inline form, urgency cueing, or immediate trust proof.",
        "- Do not add extra sections, testimonials, pricing complexity, or exploratory modules unless they clearly map to the reference structure.",
        "- Keep the same friction-minimized, conversion-maximized feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildFeatureRichShowcasePrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeFeatureRichShowcaseCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: enterprise product showcase, capability-rich persuasion, polished software marketing, and confident operational sophistication",
        "- Typography: bold product-marketing sans serif, italic emphasis for key feature names, uppercase badge/caption language, and compact enterprise copy",
        "- Surfaces: white and slate surfaces, indigo accents, rounded product cards, feature grids, and deep-dive modules with alternating rhythm",
        `- Header strategy: ${analysis.hasAbsoluteHeader ? "a light absolute header sits above the hero so the page opens clean and premium" : "a minimal header protects the first-screen product story"}`,
        `- Hero strategy: ${analysis.hasBalancedHero ? "the hero is visually balanced rather than single-CTA obsessed, with copy on the left and showcase media on the right" : "the hero introduces the platform and sets up a broader feature narrative"}`,
        `- Hero proof: ${analysis.hasFloatingHeroCard ? "a floating mini-card overlays the hero media and previews one standout capability" : "hero media includes a compact proof widget"}`,
        `- Capability structure: ${analysis.hasCoreCapabilityGrid ? "a 4-card capability grid establishes breadth before deeper sections" : "a broad feature grid introduces the product surface area"}`,
        `- Deep-dive rhythm: ${analysis.hasDeepDiveSections ? "multiple alternating deep-dive sections follow, mixing prose, badges, metrics, and productized visual modules" : "feature storytelling continues through multiple deeper showcase modules"}`,
        `- Product proof: ${analysis.hasGovernanceConsole ? "one deep-dive uses a terminal/governance console, while another uses a visual orchestrator card with progress bars and stats" : "deep-dive modules mix code-like proof with visual status modules"}`,
        `- CTA architecture: ${analysis.hasPricingCTASection ? "the page resolves with a pricing/CTA-style registration block rather than a long pricing matrix" : "the page ends with a strong product CTA after the showcase modules"}`,
        `- Accent logic: ${analysis.usesIndigoShowcasePalette ? "indigo is the primary feature/highlight color, with emerald and rose used for secondary capability signaling" : "one primary brand accent plus secondary capability colors drive the feature hierarchy"}`,
        `- Badge system: ${analysis.hasBadgeSystem ? "small rounded badges label major sections and help chunk the narrative into product modules" : "section labeling is handled through compact feature badges"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, feature density, and product-showcase flow.",
            "- Do not collapse it into a simple lead-gen page or a single-hero conversion funnel.",
            "- Match the same information architecture, section ordering, and sense of enterprise capability breadth.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a clean absolute header with restrained nav, a secondary auth action, and a single primary CTA.",
            "- Build a balanced hero with left-side platform messaging, two CTAs, and a premium product image card on the right with a floating metric badge.",
            `- Follow with a capability grid containing exactly ${analysis.capabilityCount} core feature cards.`,
            `- Continue with ${analysis.hasDeepDiveSections ? "multiple alternating deep-dive sections" : "deeper showcase sections"} that explain the product from different angles.`,
            "- Include at least one console-like proof module and at least one visual orchestration/status module.",
            `- Resolve the page with ${analysis.hasPricingCTASection ? "a large registration/CTA section" : "a strong final CTA block"} and a comprehensive enterprise footer.`,
            "",
            "Interaction and styling constraints",
            "- The page should feel rich in product breadth, not minimal or single-action constrained.",
            "- Use card hover states, subtle badge systems, and layered product proof to reveal capability density.",
            "- Keep the palette bright and enterprise-clean, anchored by indigo with selected accent colors for feature signaling.",
            "- Maintain a premium software-marketing feeling rather than a dark dramatic launch page.",
            "- Do not reduce the page to only one hero and one CTA or strip out the deeper feature storytelling.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: feature-rich enterprise SaaS storytelling, broad capability coverage, alternating deep-dive modules, and polished platform presentation.",
        "- Change the content, messaging, features, badges, proof modules, CTA language, and footer content so they fit the new product.",
        "- The final result should feel like the same showcase system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same balanced hero composition, but rewrite the headline, support copy, CTA labels, hero metrics, and mini-proof card for ${resolvedProductName}.`,
        `- Replace the ${analysis.capabilityCount} core capability cards with features that fit ${resolvedProductName}, while preserving the same breadth-first overview pattern.`,
        "- Rework the alternating deep-dive sections into product-specific modules that show governance, orchestration, workflow, or system proof suitable for the new brief.",
        "- Rewrite the final CTA/register block so it feels credible for the new product while preserving the same strong resolution after the feature tour.",
        "- Keep the footer structure, but rewrite grouped links, protocol/market language, and metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the page into a single-form conversion funnel or an ultra-minimal landing page.",
        "- Do not remove the capability grid, the alternating deep-dive modules, or the strong final CTA block.",
        "- Do not add extra sections, pricing complexity, or dashboard sprawl unless they clearly map to the reference structure.",
        "- Keep the same feature-dense, enterprise-showcase, product-rich feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildMinimalDirectPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeMinimalDirectCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: severe clarity, low-noise persuasion, architectural confidence, and a one-message-at-a-time landing page discipline",
        "- Typography: giant uppercase headlines, black-on-white directness, tiny uppercase utility labels, and very restrained supporting copy",
        "- Surfaces: white backgrounds, thin black dividers, almost no decoration, square or lightly rounded controls, and strong spacing rhythm",
        `- Header strategy: ${analysis.hasAbsoluteHeader ? "absolute minimal header keeps the page visually open while preserving one visible CTA" : "the header is visually recessive and stripped down"}`,
        `- Hero scale: ${analysis.hasMassiveHero ? "hero dominates the first screen with massive headline and only two direct actions" : "hero is oversized and intentionally sparse"}`,
        `- Trust logic: ${analysis.hasTrustWordRow ? "trust is expressed as a simple row of terse brand words rather than logos, badges, or complex proof panels" : "trust is minimal and abstract rather than elaborate"}`,
        `- Value structure: ${analysis.hasSingleColumnValueStack ? `a single-column value stack with exactly ${analysis.valueStackCount} direct sections` : `${analysis.valueStackCount} direct value sections in a highly reduced layout`}`,
        `- Technical proof: ${analysis.hasSpecsGrid ? "a clean specs band translates product value into four hard numbers without charts or decoration" : "technical proof is reduced to concise metric rows"}`,
        `- Pricing pattern: ${analysis.hasSinglePlanPricing ? "a single-plan pricing block acts as the decisive conversion moment" : "pricing is reduced to one obvious offer"}`,
        `- Palette logic: ${analysis.usesMonochromePalette ? "the page is essentially monochrome with one occasional accent underline or micro-highlight" : "color is heavily restrained and secondary to hierarchy"}`,
        `- Footer behavior: ${analysis.hasMinimalFooter ? "footer remains sparse, technical, and understated, echoing the minimal system" : "footer is minimal and low-noise"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, reduction, and directness.",
            "- Do not add decorative sections, feature bloat, or trendy visual systems that dilute the minimal message.",
            "- Match the same information architecture, section ordering, and one-thing-at-a-time persuasive rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a minimal absolute header with small brand mark, a few terse nav items, and one direct CTA.",
            "- Build an oversized centered hero with one badge, one massive headline, one short supporting paragraph, and two simple CTAs.",
            `- Add ${analysis.hasTrustWordRow ? "a small row of trust words/brands" : "a minimal trust indicator"} below the hero rather than a full proof system.`,
            `- Follow with a single-column value stack containing exactly ${analysis.valueStackCount} direct value sections with strong typographic separation.`,
            `- Insert ${analysis.hasSpecsGrid ? "a simple four-metric specs band" : "a tightly reduced metrics section"} before pricing.`,
            `- Finish with ${analysis.hasSinglePlanPricing ? "one single-plan pricing block" : "one decisive pricing offer"} and a sparse technical footer.`,
            "",
            "Interaction and styling constraints",
            "- Keep everything reduced, monochrome, and brutally clear without becoming brutalist.",
            "- Use whitespace and scale as the main design materials instead of cards, glow, gradients, or complex illustration.",
            "- Let hover states stay very subtle and fast.",
            "- Avoid feature-heavy storytelling, testimonials, logo mosaics, or dashboard-like proof.",
            "- The page should feel direct, confident, and anti-fluff.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: minimal structure, direct persuasion, monochrome hierarchy, and very low content noise.",
        "- Change the content, messaging, value stack, specs, pricing offer, and footer language so they fit the new product.",
        "- The final result should feel like the same minimal-direct landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same sparse hero composition, but rewrite the badge, headline, CTA labels, trust words, and supporting paragraph for ${resolvedProductName}.`,
        `- Replace the ${analysis.valueStackCount} value-stack sections with benefits that fit ${resolvedProductName}, while preserving the same single-column directness.`,
        "- Rewrite the specs band and the single pricing offer so they feel credible for the new product without adding extra plans or complexity.",
        "- Keep the footer structure, but rewrite the low-noise technical links and metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not add testimonial walls, feature grids, case studies, or deep-dive showcase sections.",
        "- Do not introduce colorful visual systems, glass effects, or exaggerated motion.",
        "- Do not add more than one main offer or clutter the page with secondary conversions.",
        "- Keep the same sparse, confident, stripped-down product feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildSocialProofFocusedPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeSocialProofFocusedCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: trust-heavy SaaS persuasion, market leadership proof, verified enterprise reliability, and social consensus as the main conversion engine",
        "- Typography: bold confident sans serif, italic emphasis on key trust statements, uppercase label systems, and high-credibility marketing language",
        "- Surfaces: bright white sections, indigo trust accents, metric cards, testimonial mosaics, and premium case-study blocks",
        `- Header strategy: ${analysis.hasAbsoluteHeader ? "header itself starts with trust proof, ratings, and social validation before anything else" : "header reinforces trust immediately"}`,
        `- Hero strategy: ${analysis.hasAwardBadgeHero ? "hero opens with an award badge and then stacks headline, CTA, and visible human proof" : "hero prioritizes awards, rating, and community validation"}`,
        `- Hero proof: ${analysis.hasHeroMetricCards ? `right side of the hero is a ${analysis.metricCount}-card metric proof stack instead of a single image` : "hero visual area is built from proof cards and hard metrics"}`,
        `- Trust architecture: ${analysis.hasLogoWall ? "a dedicated logo wall follows to show recognizable market adoption" : "trust continues through visible brand adoption blocks"}`,
        `- Human proof: ${analysis.hasTestimonialMosaic ? `a mosaic of exactly ${analysis.testimonialCount} testimonials creates the main evidence body of the page` : "multiple customer testimonials form the evidence core of the page"}`,
        `- Case study proof: ${analysis.hasCaseStudySection ? "a large flagship case study section translates social proof into concrete business outcomes" : "a dedicated case study expands trust into measurable results"}`,
        `- Closing conversion: ${analysis.hasClosingConsensusCTA ? "the final CTA reuses the language of consensus, verification, and the size of the community" : "the page closes with a trust-reinforced CTA rather than a generic signup ask"}`,
        `- Accent logic: ${analysis.usesTrustIndigoPalette ? "indigo is the main trust color, supported by amber ratings and emerald success signals" : "trust colors and rating accents guide the hierarchy"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, proof sequencing, and trust-driven conversion flow.",
            "- Do not simplify it into a generic hero-plus-features page or reduce the social proof density.",
            "- Match the same information architecture, section ordering, and evidence-first persuasive rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a header that already contains rating or trust cues, not just navigation.",
            "- Build a hero with award badge, oversized trusted-product claim, one strong CTA, and visible human/community proof.",
            `- Use ${analysis.metricCount} metric cards on the hero side to reinforce proof immediately.`,
            `- Follow with ${analysis.hasLogoWall ? "a logo wall" : "a brand-adoption section"} before deeper content.`,
            `- Add a testimonial mosaic containing exactly ${analysis.testimonialCount} testimonial cards with names, roles, and faces or equivalents.`,
            `- Insert ${analysis.hasCaseStudySection ? "a large case-study section" : "a flagship proof block"} that turns social validation into measurable outcomes.`,
            `- Finish with ${analysis.hasClosingConsensusCTA ? "a community/consensus-driven final CTA" : "a strong proof-led final CTA"} and a trust-focused footer.`,
            "",
            "Interaction and styling constraints",
            "- Every major section should strengthen credibility, not introduce unrelated exploration.",
            "- Use indigo and trust-safe accents with clean white layouts and premium spacing.",
            "- Make ratings, testimonials, logos, metrics, and case study evidence feel like the backbone of the page.",
            "- Keep hover and motion subtle so proof remains readable and believable.",
            "- Do not turn the page into a sparse minimal landing or a feature-deep showcase architecture.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: social-proof-first persuasion, trust-heavy enterprise validation, and consensus-driven conversion.",
        "- Change the content, messaging, award/rating language, metrics, testimonials, case study, CTA copy, and footer language so they fit the new product.",
        "- The final result should feel like the same proof-driven landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same trust-first hero composition, but rewrite the award badge, headline, CTA labels, community count, and metric-card proof for ${resolvedProductName}.`,
        `- Replace the ${analysis.testimonialCount} testimonial cards with credible voices that fit ${resolvedProductName}, while preserving the same evidence density and mosaic rhythm.`,
        "- Rework the case study section into a flagship success story that suits the new product and provides concrete measurable outcomes.",
        "- Rewrite the closing CTA and footer so they continue the same message of verification, community trust, and proven performance.",
        "",
        "Strict constraints",
        "- Do not reduce the amount of proof or replace it with abstract feature marketing.",
        "- Do not remove the logo wall, testimonial mosaic, or flagship case study.",
        "- Do not add complex pricing, dashboard modules, or feature-deep explorations unless they clearly map to the reference structure.",
        "- Keep the same trust-saturated, evidence-led, market-validation feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildInteractiveProductDemoPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeInteractiveProductDemoCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: product-led dark demo experience, hands-on experimentation, SaaS lab atmosphere, and conversion through interaction rather than static claims",
        "- Typography: bold uppercase lab copy, italic display emphasis, compact console labels, and interface-first product language",
        "- Surfaces: dark dashboard shells, indigo interaction highlights, subtle emerald/rose semantic accents, rounded lab-console cards, and live system panels",
        `- Header behavior: ${analysis.hasLiveHeaderChip ? "header includes a live engine-status chip and a product-trial CTA instead of generic marketing navigation" : "header behaves like a lightweight product-console bar"}`,
        `- Hero strategy: ${analysis.hasTabbedSimulation ? "hero centers on an interactive tabbed product simulation with multiple states that the user can switch between" : "hero contains an interactive product mockup rather than a static image"}`,
        `- Interaction model: ${analysis.hasSyncExecutionState ? "one module can be executed live and enters a temporary syncing/loading state" : "the demo includes live interactive state changes"}`,
        `- Product proof: ${analysis.hasHeroDashboardPreview ? "the right side of the hero is a working dashboard-like preview that visualizes product behavior, not just a screenshot" : "the hero includes active product proof with interface state changes"}`,
        `- Guidance system: ${analysis.hasTooltipGuide ? "the demo includes a small tooltip/help affordance that teaches the interaction model" : "the interface uses subtle in-product guidance cues"}`,
        `- Secondary proof: ${analysis.hasRegistryConsole ? "a terminal/log-feed section below the hero reinforces that the demo is backed by live system activity" : "below-the-fold proof continues the product simulation through logs or console output"}`,
        `- Feature density: exactly ${analysis.featureCount} interactive feature cards reinforce what users can explore inside the product`,
        `- CTA architecture: ${analysis.hasProductCtaSection ? "the page resolves with a product-trial CTA that feels like continuing the simulation rather than starting a generic signup" : "the final CTA continues the interactive product story"}`,
        `- Accent logic: ${analysis.usesDarkLabPalette ? "indigo is the primary interaction color over a slate-black lab interface, with emerald and rose used sparingly for status meaning" : "one strong product accent color organizes the dark interface"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, interactive behavior, and product-demo-first persuasion.",
            "- Do not redesign it into a passive marketing page or replace the simulation with static screenshots.",
            "- Match the same information architecture, section ordering, and hands-on product-trial rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a minimal dark header with brand, live engine-status chip, and one CTA to try the console.",
            "- Build a split hero where the left side explains the product and offers interactive tabs, while the right side shows a working simulation panel.",
            "- Make the simulation switch between at least three meaningful states or modules, each with its own visual treatment.",
            "- Include one action inside the simulation that can enter a temporary live-processing state.",
            `- Add ${analysis.hasTooltipGuide ? "a small contextual tooltip/help cue" : "a subtle interactive guidance cue"} inside the demo surface.`,
            `- Follow with ${analysis.hasRegistryConsole ? "a registry/log console section" : "a live technical proof section"} that continues the product narrative below the hero.`,
            `- Add exactly ${analysis.featureCount} interactive feature cards that explain what users can inspect or try in the product.`,
            `- Finish with ${analysis.hasProductCtaSection ? "a strong product-trial CTA section" : "a conversion section that continues the demo story"} and a dark lab-style footer.`,
            "",
            "Interaction and styling constraints",
            "- The page should sell through interaction and interface proof, not through large testimonial or pricing sections.",
            "- Keep the dark lab aesthetic clean, premium, and obviously product-led.",
            "- Use indigo as the primary interface color, with semantic accent colors only where the product state demands them.",
            "- Preserve transitions, tab swapping, live states, and console/telemetry feedback.",
            "- Do not flatten the experience into a generic hero-plus-features page.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: interactive product-demo hero, dark lab-console UI, live state changes, and proof-through-experience persuasion.",
        "- Change the content, messaging, tab/module names, console logs, feature descriptions, and CTA language so they fit the new product.",
        "- The final result should feel like the same interactive product-demo system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same split-hero composition, but rewrite the engine badge, hero copy, tab labels, module names, simulation metrics, and CTA labels for ${resolvedProductName}.`,
        `- Replace the ${analysis.featureCount} interactive feature cards with exploratory capabilities that fit ${resolvedProductName}, while preserving the same try-it-now rhythm.`,
        "- Rewrite the console/log section so the feed and command language feel credible for the new product while preserving the same live-demo energy.",
        "- Keep the footer structure, but rewrite the links and protocol metadata to fit the new company.",
        "",
        "Strict constraints",
        "- Do not remove the interactive tabbed simulation or replace it with a static hero image.",
        "- Do not introduce heavy social proof walls, pricing matrices, or long testimonial sections unless they clearly map to the reference structure.",
        "- Do not reduce the role of the product UI below the role of the hero copy.",
        "- Keep the same product-first, demo-led, interactive lab feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildTrustAuthorityPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeTrustAuthorityCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: corporate institutional trust, audited enterprise confidence, blue-chip authority, and risk-reducing credibility at every layer",
        "- Typography: executive sans serif, large authoritative headlines, disciplined uppercase support labels, and conservative enterprise hierarchy",
        "- Surfaces: white and slate-blue corporate surfaces, clear borders, credential strips, stat blocks, and large documentary-style photo support",
        `- Header strategy: ${analysis.hasAbsoluteHeader ? "the header behaves like a professional corporate website with governance/compliance nav and a high-intent access CTA" : "the header reinforces enterprise credibility and restraint"}`,
        `- Hero architecture: ${analysis.hasCorporateHero ? "hero pairs a strong trust claim with hard enterprise numbers and a documentary-style image plus status overlay" : "hero uses large trust language backed by visible institutional proof"}`,
        `- Overlay proof: ${analysis.hasStatusOverlayCard ? "the hero image is reinforced by an uptime/status verification card rather than a decorative badge" : "hero imagery includes functional trust proof overlay"}`,
        `- Credential density: ${analysis.hasComplianceStrip ? `a compliance strip with exactly ${analysis.complianceCount} visible certifications follows early in the page` : "formal certifications and audits are surfaced prominently"}`,
        `- Enterprise adoption: ${analysis.hasTrustedLogos ? "a large Fortune-500-style logo block reinforces corporate legitimacy" : "brand adoption proof follows the credential strip"}`,
        `- Authority metrics: ${analysis.hasAuthorityMetricGrid ? `a dark authority section presents ${analysis.statBlockCount} audited stat blocks alongside an institutional proof narrative` : "a dark enterprise proof section quantifies performance and reliability"}`,
        `- CTA behavior: ${analysis.hasCorporateCta ? "the final CTA is framed as enterprise access and governance engagement, not casual signup" : "conversion remains formal, high-trust, and sales-led"}`,
        `- Palette logic: ${analysis.usesEnterpriseBluePalette ? "deep enterprise blue and slate neutrals carry the authority system, with green reserved for verified status signals" : "professional blue-grey tones organize the page"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, credential sequencing, and enterprise-authority tone.",
            "- Do not redesign it into a startup-style product landing page or reduce the institutional trust markers.",
            "- Match the same information architecture, section ordering, and corporate credibility narrative.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a professional corporate header with governance/compliance navigation, a restrained login action, and one high-intent request-access CTA.",
            "- Build a split hero with an authoritative headline, hard enterprise stats, a formal documentary-style image, and a verification/status overlay card.",
            `- Add ${analysis.hasComplianceStrip ? `an early compliance strip with ${analysis.complianceCount} certifications` : "an early visible compliance strip"} after the hero.`,
            `- Follow with ${analysis.hasTrustedLogos ? "an enterprise logo section" : "a large adoption-proof section"} before deeper proof.`,
            `- Add ${analysis.hasAuthorityMetricGrid ? `a dark authority section with ${analysis.statBlockCount} stat blocks` : "a dark enterprise metric section"} and a supporting narrative about audited performance.`,
            `- Finish with ${analysis.hasCorporateCta ? "a formal enterprise CTA section" : "a strong corporate CTA"} and a highly structured governance-heavy footer.`,
            "",
            "Interaction and styling constraints",
            "- Keep the design conservative, executive, and authoritative rather than trendy or playful.",
            "- Use blue-grey professional tones, strong spacing, and documentary evidence as the main trust devices.",
            "- Prioritize certifications, audited metrics, enterprise adoption, and governance language over product experimentation.",
            "- Hover states should remain subtle and professional.",
            "- Do not introduce loud gradients, casual consumer language, or experimental motion systems.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: enterprise authority, compliance-first proof, formal credibility, and high-trust sales posture.",
        "- Change the content, messaging, credential labels, stats, logos, CTA language, and footer content so they fit the new product.",
        "- The final result should feel like the same trust-and-authority system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        `- Keep the same formal hero composition, but rewrite the trust statement, stats, navigation labels, image overlay status, and CTA labels for ${resolvedProductName}.`,
        `- Replace the ${analysis.complianceCount} compliance items with certifications or controls that fit ${resolvedProductName}, while preserving the same enterprise-proof density.`,
        `- Rework the authority section so the ${analysis.statBlockCount} stat blocks and support narrative feel credible for the new product while preserving the same audit-style framing.`,
        "- Keep the footer structure, but rewrite governance, corporate, and resource groupings to fit the new company.",
        "",
        "Strict constraints",
        "- Do not soften the page into a casual startup landing page or a feature-demo-heavy experience.",
        "- Do not remove the compliance strip, enterprise logos, or authority metrics.",
        "- Do not add playful interactivity, dense pricing grids, or consumer-style conversion patterns unless they clearly map to the reference structure.",
        "- Keep the same enterprise-grade, verified, policy-conscious, authority-led feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildStorytellingDrivenPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeStorytellingDrivenCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: cinematic brand mythmaking, chapter-based narrative flow, literary future-tech storytelling, and persuasion through emotional progression rather than feature dumping",
        "- Typography: oversized italic-black display headlines, uppercase chapter markers, poetic body copy, and tiny wide-tracked labels that read like story metadata",
        "- Surfaces: alternating bright white narrative acts and dark tension chapters, indigo progress accents, atmospheric blur shapes, editorial spacing, and occasional documentary imagery",
        `- Navigation behavior: ${analysis.hasStickyNarrativeNav ? "a sticky narrative bar tracks story progress, chapter names, and a single begin-the-journey CTA" : "the top chrome behaves like a narrative progress navigator"}`,
        `- Reading rhythm: ${analysis.usesAlternatingLightDarkActs ? `the page alternates between light and dark acts across ${analysis.chapterCount} major story beats` : "the page is structured like a sequence of narrative acts instead of a flat marketing stack"}`,
        `- Hero invitation: ${analysis.hasScrollCueHero ? "the opening section ends with a strong scroll cue that invites the user into the next chapter" : "the hero transitions into the next act through explicit narrative direction"}`,
        `- Conflict chapter: ${analysis.hasDarkFrictionChapter ? "an early dark chapter visualizes tension with a single high-drama metric panel and story copy" : "the narrative includes a distinct conflict chapter with darker visual pressure"}`,
        `- Resolution chapter: ${analysis.hasNarrativeCardGrid ? `the middle act resolves into exactly ${analysis.narrativeCardCount} narrative principle cards` : "the middle of the page transforms the narrative into structured principle cards"}`,
        `- Legacy climax: ${analysis.hasLegacyMetricsClimax ? `the climax section is a giant dark metrics act with exactly ${analysis.climaxStatCount} legacy stats and dual CTAs` : "the story culminates in a large metric-driven final act with two CTAs"}`,
        `- Footer architecture: ${analysis.hasStoryFooter ? "the footer keeps the fiction alive with chapters, characters, and narrative metadata rather than generic company links" : "the footer preserves the story-world language and chapter framing"}`,
        `- Accent logic: ${analysis.usesIndigoNarrativePalette ? "indigo is the narrative accent across progress, chapter markers, and transformation moments" : "one primary story accent color guides the narrative arc"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, section pacing, and scroll-led narrative progression.",
            "- Do not flatten it into a generic hero-plus-features landing page or remove the chapter-based storytelling structure.",
            "- Match the same information architecture, emotional sequencing, and literary product-world framing.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky narrative header with brand, chapter labels, one primary CTA, and a live progress line that tracks reading progress.",
            "- Build an opening origin chapter with one small chapter marker, a huge italic headline, a poetic supporting paragraph, atmospheric blur shapes, and an obvious scroll invitation.",
            `- Follow with ${analysis.hasDarkFrictionChapter ? "a dark conflict chapter" : "a high-tension narrative chapter"} that pairs emotional copy with one dramatic drift/status visualization.`,
            `- Add a white transformation chapter with a centered reveal and exactly ${analysis.narrativeCardCount} principle cards that reframe the product as a new system.`,
            `- Build a dark climax section with a giant legacy headline, exactly ${analysis.climaxStatCount} core stats, and a dual-CTA ending.` ,
            `- Finish with ${analysis.hasStoryFooter ? "a story-themed footer that still speaks in chapter/world-building language" : "a footer that keeps the narrative tone alive instead of turning generic"}.`,
            "",
            "Interaction and styling constraints",
            "- The page should feel like reading a brand story in acts, not scanning a product datasheet.",
            "- Keep the alternating white/dark pacing, indigo chapter accents, and generous editorial spacing.",
            "- Preserve the emotional shift from chaos to transformation to legacy.",
            "- Use motion sparingly and in support of the story: progress, hover emphasis, atmospheric movement, and gentle reveal behavior.",
            "- Do not replace the narrative rhythm with dense feature grids, pricing tables, or dashboard-first sections.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: chapter-based storytelling, editorial pacing, indigo narrative accents, and cinematic emotional progression.",
        "- Change the content, narrative arc, chapter labels, stats, supporting copy, CTA language, and footer world-building so they fit the new product.",
        "- The final result should feel like the same storytelling-driven landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the opening narrative so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same chapter-based structure: origin, friction, transformation, and legacy/climax.",
        `- Replace the ${analysis.narrativeCardCount} mid-story principle cards with values or capabilities that fit ${resolvedProductName}, while preserving the same narrative reveal rhythm.`,
        `- Rewrite the ${analysis.climaxStatCount} climax metrics so they feel credible for ${resolvedProductName} while preserving the same epic end-state framing.`,
        "- Keep the footer structure, but rewrite chapter names, character groups, and story metadata to fit the new company and product world.",
        "",
        "Strict constraints",
        "- Do not remove the sticky progress narrative bar or the act-by-act chapter progression.",
        "- Do not convert the page into a normal feature showcase, pricing landing page, or heavy testimonial wall.",
        "- Do not add busy app dashboards that overpower the literary narrative tone.",
        "- Keep the same premium, editorial, myth-building feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildNeubrutalismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeNeubrutalismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: loud startup anti-polish, confident Gen Z software energy, toy-like enterprise swagger, and raw directness over refinement",
        "- Typography: ultra-heavy uppercase sans serif, tight brutal headlines, tiny black-label UI copy, and punchy one-line statements",
        "- Surfaces: white cards with thick black borders, hard offset shadows, flat pop-color blocks, zero gradients, and almost no soft corners",
        `- Header behavior: ${analysis.hasStickyHeader ? "a sticky hard-outline header with black/yellow branding, small nav, and two CTA treatments" : "the header behaves like a hard-outlined utility bar"}`,
        `- Hero staging: ${analysis.hasHeroImageStage ? "the hero is split between a raw text block and a hard-framed image stage with a verification sticker" : "the hero combines text aggression with a strong framed visual panel"}`,
        `- Shadow language: ${analysis.hasHardOffsetShadows ? "every important surface uses offset black box-shadows that behave like printed stickers" : "hard offset shadows define the entire depth system"}`,
        `- Trust proof: ${analysis.hasLogoWall ? "a yellow logo wall with outlined partner badges appears early to prove cultural adoption" : "brand trust is handled through outlined partner tiles rather than polished enterprise logos"}`,
        `- Feature density: exactly ${analysis.featureCount} feature cards appear as colored brutal blocks with icons and microcopy`,
        `- Pricing architecture: ${analysis.hasPricingToggle ? `pricing includes a billing toggle and exactly ${analysis.planCount} boxed plans` : "pricing uses hard-boxed plans with very obvious tiering"}`,
        `- Plan emphasis: ${analysis.hasPopularPlanBadge ? "the middle plan gets a floating badge and louder contrast treatment" : "one plan receives an elevated visual emphasis"}`,
        `- Proof block: ${analysis.hasTestimonialSlab ? "a giant testimonial slab acts like a poster pasted into the layout" : "social proof appears as a single oversized quote block"}`,
        `- Closing CTA: ${analysis.hasFinalCtaBand ? "the page ends on a bright yellow band with one aggressive CTA" : "the page resolves in one loud color-block CTA band"}`,
        `- Accent logic: ${analysis.usesPopPalette ? "yellow is the dominant action color, with magenta and cyan used as blunt pop accents" : "a few loud flat colors drive hierarchy over white and black"}`,
        `- Copy style: ${analysis.usesHeavyUppercaseCopy ? "microcopy stays raw, direct, uppercase, and intentionally unpolished" : "copy remains terse, direct, and aggressively simplified"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, color blocking, and hard-shadow interaction behavior.",
            "- Do not smooth it into a polished SaaS page or replace the neubrutalist rawness with modern premium refinement.",
            "- Match the same information architecture, section ordering, and anti-polish visual confidence.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky hard-outline header with brand lockup, small navigation, a secondary login button, and one loud primary CTA.",
            "- Build a split hero with a status chip, giant stacked headline, one highlighted word block, direct product promise, CTA cluster, and a right-side framed image panel with a sticker/badge.",
            `- Follow with ${analysis.hasLogoWall ? "a bright partner logo wall" : "an outlined adoption-proof section"} that feels loud and immediate.`,
            `- Add exactly ${analysis.featureCount} colored feature blocks with icons, hard borders, and offset shadows.`,
            `- Build a pricing section with a billing toggle and exactly ${analysis.planCount} hard-boxed plans, including one emphasized plan.`,
            `- Add ${analysis.hasTestimonialSlab ? "one giant testimonial slab" : "a single oversized proof block"} before the final CTA band.`,
            `- Finish with ${analysis.hasFinalCtaBand ? "a bright full-width CTA band" : "a loud final CTA section"} and a rigid utility footer.`,
            "",
            "Interaction and styling constraints",
            "- Use thick black borders, flat fills, offset shadows, and almost no gradients or glass effects.",
            "- Keep rounded corners minimal or absent and favor boxy sticker-like geometry.",
            "- Buttons should feel pressable through movement and shadow changes, not through soft hover polish.",
            "- Copy should stay direct, funny, and confrontational rather than soft or corporate.",
            "- Do not introduce luxury spacing, muted palettes, or subtle enterprise aesthetics.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: hard outlines, flat pop colors, offset shadows, raw uppercase copy, and loud startup neubrutalist energy.",
        "- Change the content, plan names, product claims, feature labels, testimonial, CTA copy, and footer language so they fit the new product.",
        "- The final result should feel like the same neubrutalist landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same split-hero composition, but rewrite the status chip, headline, highlight block, CTA labels, visual-stage caption, and trust badge for the new product.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same loud block-grid rhythm.`,
        `- Rewrite the ${analysis.planCount} pricing tiers and the emphasized plan so they feel credible for ${resolvedProductName} while preserving the same anti-polish tiering.`,
        "- Keep the testimonial slab, CTA band, and footer structure, but rewrite the content so it fits the new company without losing the raw tone.",
        "",
        "Strict constraints",
        "- Do not soften the page into a polished enterprise landing page or a premium glass product showcase.",
        "- Do not remove the logo wall, pricing toggle, loud CTA band, or offset-shadow button behavior.",
        "- Do not replace the pop-color palette with muted neutrals.",
        "- Keep the same irreverent, boxy, punchy, no-gradients feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildBentoBoxGridPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeBentoBoxGridCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: modular Apple-like product clarity, calm premium organization, soft enterprise confidence, and conversion through balanced tiles instead of one giant monolithic hero",
        "- Typography: bold clean sans serif, tight product headlines, micro uppercase support labels, and restrained copy density",
        "- Surfaces: off-white canvas, soft white cards, one indigo hero tile, one dark pricing shell, thin borders, soft shadows, and oversized rounded corners",
        `- Navigation behavior: ${analysis.hasStickyBentoNav ? "a sticky rounded navigation shell with segmented tabs and one compact CTA" : "top chrome behaves like a rounded product-control bar"}`,
        `- Hero structure: ${analysis.hasAsymmetricHeroGrid ? "the hero is a multi-size bento grid rather than a traditional two-column section" : "the opening section uses a modular tile layout instead of a single hero block"}`,
        `- Lead tile: ${analysis.hasPrimaryTitleTile ? "one oversized indigo statement tile anchors the grid with headline, short body copy, and one CTA" : "the main tile is a large accent-colored statement block"}`,
        `- Supporting tiles: ${analysis.hasVerticalImageTile ? "the grid includes a vertical image tile, small metric/proof tiles, and one elongated action tile" : "the hero combines multiple tile shapes for image, proof, and action"}`,
        `- Utility proof: ${analysis.hasMetricTile ? "small tiles are used for metrics and team/readiness proof, not for verbose copy" : "supporting proof appears in compact utility cards"}`,
        `- Mid-page modules: exactly ${analysis.featureCount} modular feature cards extend the same tile logic below the hero`,
        `- Brand adoption: ${analysis.hasMinimalLogoWall ? "a very restrained icon-based logo wall sits between the hero and features" : "a minimal adoption strip separates the major sections"}`,
        `- Pricing shell: ${analysis.hasDarkPricingShell ? "pricing appears as one large dark rounded shell with a left narrative column and right checklist card" : "pricing is handled inside one large contrast-heavy shell rather than multiple separate cards"}`,
        `- Footer architecture: ${analysis.hasModularFooter ? "the footer stays compact, modular, and low-noise with a small brand block and a few utility links" : "the footer remains compact and structured"}`,
        `- Accent logic: ${analysis.usesAppleIndigoPalette ? "indigo is the only strong accent over soft off-white and slate neutrals" : "one restrained accent color organizes an otherwise quiet palette"}`,
        `- Corner system: ${analysis.usesLargeRoundedTiles ? "large 24-56px radii unify the entire system and make every block feel like part of the same kit" : "rounded modular corners unify the whole layout"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, tile sizing, and modular product rhythm.",
            "- Do not flatten it into a normal hero-plus-features landing page or remove the bento composition logic.",
            "- Match the same information architecture, visual hierarchy, and calm premium organization.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a rounded sticky nav with logo, segmented tab-like navigation, and one compact CTA.",
            "- Build an opening bento hero grid with one oversized primary statement tile, one vertical image tile, small proof/metric tiles, and one long utility/action tile.",
            "- Keep the opening section as a composition of different card sizes, not a conventional row/column hero.",
            `- Follow with ${analysis.hasMinimalLogoWall ? "a minimal icon/logo strip" : "a restrained adoption strip"} before deeper feature content.`,
            `- Add exactly ${analysis.featureCount} modular feature cards that continue the same tile logic and premium rounded system.`,
            `- Build ${analysis.hasDarkPricingShell ? "one large dark rounded pricing shell" : "one large contrast pricing block"} with pricing narrative on one side and a checklist/CTA card on the other.`,
            `- Finish with ${analysis.hasModularFooter ? "a compact modular footer" : "a restrained utility footer"} that keeps the same clean product tone.`,
            "",
            "Interaction and styling constraints",
            "- Keep the page airy, ordered, and product-system-driven rather than emotionally dramatic.",
            "- Use soft borders and small hover lifts instead of loud animations.",
            "- Preserve the asymmetry of tile sizes and the feeling of a carefully arranged modular grid.",
            "- Avoid noisy gradients, oversized decorative effects, or aggressive color variety.",
            "- Do not turn the page into a dashboard or a text-heavy enterprise document.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: modular bento tile composition, large rounded cards, quiet premium spacing, and indigo-led product clarity.",
        "- Change the content, messaging, tile labels, metrics, feature descriptions, pricing language, and footer copy so they fit the new product.",
        "- The final result should feel like the same bento-grid landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same modular hero architecture with one dominant statement tile, smaller proof tiles, one visual tile, and one elongated action tile.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same modular tile rhythm.`,
        "- Rewrite the metric, team/proof, utility tile, and pricing shell so they feel credible for the new product while preserving the same bento hierarchy.",
        "- Keep the footer structure low-noise and compact, but rewrite the links and product language for the new company.",
        "",
        "Strict constraints",
        "- Do not convert the layout into a traditional full-width hero followed by generic sections.",
        "- Do not remove the multi-size tile composition or replace it with a plain three-column card grid.",
        "- Do not introduce loud neon colors, brutal borders, or cinematic dark storytelling aesthetics.",
        "- Keep the same calm modular, Apple-like, systemized feel throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildY2KAestheticPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeY2KAestheticCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: nostalgic digital futurism, chrome-and-bubblegum excess, optimistic cyber-pop energy, and glossy turn-of-the-millennium fantasy translated into a product landing page",
        "- Typography: oversized italic uppercase chrome-like display text, neon-accent labels, heavy black UI copy on bright buttons, and high-drama logo treatment",
        "- Surfaces: black base canvas, cyan grid overlay, hot-pink and cyan glows, metallic silver gradients, glassy HUD chips, chrome bubbles, and bright white contrast cards",
        `- Atmosphere: ${analysis.hasGridOverlay ? "a persistent cyan grid overlay and blurred neon blobs create the base world before any content appears" : "the page begins with a synthetic Y2K atmospheric treatment"}`,
        `- Navigation behavior: ${analysis.hasChromeGelNav ? "the nav is a sticky chrome-gel bar with metallic brand icon, glowing links, and a glossy rainbow CTA" : "top chrome behaves like a translucent metallic gel bar"}`,
        `- Hero drama: ${analysis.hasGiantHeroHeadline ? "the hero relies on a giant chrome-pop headline with strong text shadows and a liquid-metal visual stage" : "the hero is an oversized expressive Y2K statement paired with glossy media"}`,
        `- Media stage: ${analysis.hasLiquidMetalStage ? "the right side uses a liquid-metal frame around an image with floating HUD widgets layered on top" : "the main media area behaves like a chrome-framed futuristic window"}`,
        `- Decorative motion: ${analysis.hasFloatingStars ? "floating chrome stars and pulsing blobs add playful ornamental movement" : "ornamental floating elements reinforce the nostalgic cyber-pop feel"}`,
        `- Mid-page proof: ${analysis.hasChromeLogoWall ? "a glowing icon/logo wall appears as a hover-reactive chrome strip" : "brand proof is expressed through luminous iconography rather than sober logos"}`,
        `- Feature density: exactly ${analysis.featureCount} bubble-like feature cards continue the chrome-glass product language`,
        `- Pricing shell: ${analysis.hasCyberPricingSection ? "pricing appears inside a massive metallic shell with oversized pink/cyan numbers and a white inset CTA card" : "pricing is treated as a dramatic chrome showcase instead of a normal table"}`,
        `- Footer signature: ${analysis.hasGhostFooterWord ? "the footer ends with a giant ghosted wordmark in the background to keep the era fantasy alive" : "the footer closes with a large ghosted era-marking typography move"}`,
        `- Palette logic: ${analysis.usesNeonChromePalette ? "hot pink, cyan, silver, black, and white define the entire hierarchy with visible glow and reflection cues" : "neon-cyber accents and chrome neutrals organize the page"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, metallic treatment, glow behavior, and nostalgic Y2K atmosphere.",
            "- Do not modernize it into a tasteful minimal page or soften the chrome-pop excess.",
            "- Match the same information architecture, section ordering, and theatrical turn-of-the-millennium visual fantasy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a dark page with a cyan grid overlay, blurred neon blobs, and a few floating ornamental star/chrome accents.",
            "- Add a sticky chrome-gel nav with metallic icon, glowing links, and one glossy CTA.",
            "- Build a split hero with a giant chrome-pop headline on the left and a liquid-metal framed visual stage on the right.",
            "- Layer small floating HUD widgets over the hero media instead of leaving it as a plain image.",
            `- Follow with ${analysis.hasChromeLogoWall ? "a glowing chrome logo/icon wall" : "a luminous mid-page proof strip"} before the features.`,
            `- Add exactly ${analysis.featureCount} bubble-like glossy feature cards with big icons and dramatic rounded geometry.`,
            `- Build ${analysis.hasCyberPricingSection ? "a large metallic pricing shell with giant neon numbers and an inset white CTA card" : "a dramatic chrome pricing showcase"} before the footer.`,
            `- Finish with ${analysis.hasGhostFooterWord ? "a footer that includes a giant ghosted background word" : "a footer that preserves the oversized Y2K typographic flourish"}.`,
            "",
            "Interaction and styling constraints",
            "- Preserve the chrome, gel, gloss, and glow effects throughout the page.",
            "- Use neon pink and cyan aggressively, with silver metallic gradients and black backgrounds.",
            "- Motion should feel decorative and era-specific: floating, pulsing, glowing, and hover-amplified.",
            "- Do not replace the surreal styling with flat modern cards or enterprise-safe design choices.",
            "- Keep the page playful, loud, and nostalgic rather than restrained.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: chrome Y2K nostalgia, neon pink/cyan palette, metallic hero staging, glow-heavy UI, and futuristic bubblegum energy.",
        "- Change the content, messaging, feature names, pricing copy, logo-wall language, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same Y2K-aesthetic landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same giant chrome headline, chrome-gel navigation, liquid-metal media stage, and glow-heavy layout structure.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same glossy bubble-card rhythm.`,
        "- Rewrite the pricing shell, metric language, and CTA labels so they feel credible for the new product while preserving the same neon-futurist drama.",
        "- Keep the oversized footer flourish and era-specific ornamental details, but rewrite the text and labels to fit the new company.",
        "",
        "Strict constraints",
        "- Do not clean it up into a minimalist or enterprise-safe page.",
        "- Do not remove the grid overlay, chrome nav, metallic hero frame, or neon glow system.",
        "- Do not replace the pink/cyan/silver palette with muted contemporary tones.",
        "- Keep the same loud, glossy, nostalgic cyber-pop feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildCyberpunkUIPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeCyberpunkUICode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: terminal-noir aggression, neon hacker HUD atmosphere, glitchy sci-fi tension, and zero-polish command-line bravado",
        "- Typography: monospaced UI chrome, giant uppercase italic display words, tiny coordinate/status labels, and terse command-language CTAs",
        "- Surfaces: deep black shells, green wireframe borders, magenta/cyan accent glows, terminal panels, scanlines, and angular HUD framing details",
        `- Atmosphere: ${analysis.hasScanlineOverlay ? "the page begins with a persistent scanline/noise overlay and distant neon glows" : "the page uses synthetic technoir overlays before content begins"}`,
        `- Navigation behavior: ${analysis.hasAngularHudNav ? "a sticky angular HUD bar contains system versioning, coordinates, and a command CTA instead of a friendly marketing nav" : "the top chrome behaves like a terminal HUD header"}`,
        `- Hero drama: ${analysis.hasGlitchHeadline ? "the hero centers on a giant glitch-reactive slogan with layered magenta/cyan ghost copies" : "the hero relies on a huge aggressive technoir headline"}`,
        `- Telemetry proof: ${analysis.hasHudStatsRow ? "a compact stats strip in the hero reinforces the operating-state fiction" : "small HUD metrics support the hero copy"}`,
        `- Media stage: ${analysis.hasTerminalFrameHero ? "the right side is a terminal-window media frame with remote-session chrome, progress meters, and decryption status overlays" : "the hero media behaves like a live terminal viewport rather than a lifestyle image"}`,
        `- Decorative framing: ${analysis.hasAngularDecorations ? "angular corner lines and HUD markers extend beyond the main stage to heighten the cyberpunk fiction" : "the page uses angular sci-fi framing instead of soft modern cards"}`,
        `- Mid-page proof: ${analysis.hasMonospacedLogoWall ? "a monospaced inverted partner strip provides brand proof without breaking the matrix aesthetic" : "brand adoption appears as a monochrome system strip"}`,
        `- Feature density: exactly ${analysis.featureCount} HUD-style feature modules continue the terminal logic below the hero`,
        `- Pricing shell: ${analysis.hasTerminalPricingShell ? "pricing is reframed as a billing protocol shell with command-like checklist rows and one accept-and-deploy CTA" : "pricing behaves like a system protocol module instead of a consumer table"}`,
        `- Footer architecture: ${analysis.hasTechNoirFooter ? "the footer reads like a system logoff with docs/logs links and a final all-systems-stable line" : "the footer keeps the technoir system language active"}`,
        `- Palette logic: ${analysis.usesMatrixPalette ? "matrix green dominates, with magenta and cyan appearing as glitch/signal accents over black" : "neon terminal colors organize the page"}`,
        `- Type system: ${analysis.usesMonospaceChrome ? "monospace is critical for chrome, metadata, and system status, while the headline remains massive and aggressive" : "system labels should feel terminal-native"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, neon HUD treatment, and technoir interaction mood.",
            "- Do not clean it up into a tasteful dark SaaS page or remove the hacker-terminal fiction.",
            "- Match the same information architecture, section ordering, and aggressive cyberpunk system energy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a dark page with a persistent scanline/noise overlay and a few large blurred neon glow fields in the background.",
            "- Add a sticky angular HUD nav with brand, version metadata, tiny link labels, coordinate text, and one command-style CTA.",
            "- Build a split hero with a huge glitch-reactive headline on the left and a terminal-frame media stage on the right.",
            "- Keep the left side filled with one threat/status badge, a command-style paragraph block, dual CTAs, and compact HUD stats.",
            "- Layer remote-session chrome, progress indicators, and decryption status into the media stage rather than leaving it as a plain image.",
            `- Follow with ${analysis.hasMonospacedLogoWall ? "a monochrome/inverted system-partner wall" : "a monospaced partner proof strip"} before the features.`,
            `- Add exactly ${analysis.featureCount} HUD-style feature modules with angular borders and system markers.`,
            `- Build ${analysis.hasTerminalPricingShell ? "a billing-protocol pricing shell with checklist rows and one deploy CTA" : "a terminal-style pricing section"} before the footer.`,
            `- Finish with ${analysis.hasTechNoirFooter ? "a system-logoff footer with final stable-status copy" : "a footer that still reads like a shutdown/status terminal"}.`,
            "",
            "Interaction and styling constraints",
            "- Preserve the matrix-green-on-black dominance and use magenta/cyan only as signal accents.",
            "- Keep borders sharp, geometry angular, and shadows/glows synthetic rather than soft.",
            "- Motion should feel glitchy, pulsing, or signal-like rather than calm and premium.",
            "- Do not replace the monospaced HUD language with polished startup copy.",
            "- Keep the page hostile, high-frequency, and terminal-native rather than friendly or corporate.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: cyberpunk HUD chrome, matrix-green terminal palette, glitch hero, angular system framing, and protocol-style pricing.",
        "- Change the content, messaging, system labels, feature names, pricing language, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same cyberpunk landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same sticky HUD nav, giant glitch headline, terminal media frame, and high-frequency technoir structure.",
        `- Replace the ${analysis.featureCount} feature modules with capabilities that fit ${resolvedProductName}, while preserving the same angular HUD-card rhythm.`,
        "- Rewrite the coordinates, threat status, telemetry metrics, billing protocol language, and CTA labels so they feel credible for the new product while preserving the same hacker-fiction tone.",
        "- Keep the footer structure as a system logoff, but rewrite the links and shutdown/status copy to fit the new company.",
        "",
        "Strict constraints",
        "- Do not soften the page into a normal dark startup landing page.",
        "- Do not remove the scanline overlay, monospaced system chrome, glitch headline, or terminal pricing shell.",
        "- Do not replace the green-magenta-cyan palette with muted contemporary dark-mode colors.",
        "- Keep the same loud, terminal-driven, cyberpunk command-center feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildOrganicBiophilicPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeOrganicBiophilicCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: calm sustainable optimism, wellness-grade natural softness, eco-luxury friendliness, and resilience expressed through organic form rather than technical severity",
        "- Typography: clean humanist sans serif, large softened display text, restrained uppercase labels, and warm explanatory copy",
        "- Surfaces: creamy off-white canvas, forest and moss green accents, translucent white panels, asymmetrical organic radii, soft botanical shadows, and breathable spacing",
        `- Navigation behavior: ${analysis.hasBreathableNav ? "the nav is a floating breathable glass bar with soft organic corners and a single cultivation CTA" : "the top chrome behaves like a light floating ecosystem bar"}`,
        `- Hero message: ${analysis.hasClimateNeutralHero ? "the hero opens with a climate-neutral badge and a nature-metaphor headline instead of hard technical language" : "the hero frames the product through sustainability and organic wellbeing"}`,
        `- Proof system: ${analysis.hasGrowthStats ? "small renewable-energy and carbon-footprint stats are embedded in the hero as trust signals" : "environmental proof appears early in the hero"}`,
        `- Media stage: ${analysis.hasOrganicFrameStage ? "the right-side image sits inside an asymmetrical organic frame with soft curves rather than a rigid rectangle" : "the media frame uses irregular organic geometry"}`,
        `- Overlay detail: ${analysis.hasBotanicalOverlayCard ? "a soft botanical status card overlays the hero image to translate the product into ecosystem health" : "the hero media includes a soft ecosystem-status overlay"}`,
        `- Decorative accents: ${analysis.hasNatureAccents ? "subtle leaves, flowers, and blurred earth-tone blobs reinforce the biophilic atmosphere" : "ornamental nature accents soften the entire page"}`,
        `- Mid-page proof: ${analysis.hasEcoLogoWall ? "a harmonized eco-logo wall appears inside a translucent rounded shell" : "brand proof sits inside a soft translucent support block"}`,
        `- Feature density: exactly ${analysis.featureCount} eco-pod feature cards continue the nature-inspired system below the hero`,
        `- Pricing shell: ${analysis.hasTerraPricingShell ? "pricing appears as a deep green organic shell with a white card nested inside like a cultivated control panel" : "pricing is handled as an earthy high-contrast organic block"}`,
        `- Footer signature: ${analysis.hasGhostFooterWord ? "the footer ends with a giant ghosted environmental wordmark that keeps the calm ecosystem tone alive" : "the footer closes with a large low-contrast organic typographic flourish"}`,
        `- Palette logic: ${analysis.usesEarthyPalette ? "forest green, moss, sage, clay-beige, and warm white define the entire hierarchy" : "the page relies on earth greens and soft neutrals rather than synthetic color"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, organic geometry, and sustainability-first emotional tone.",
            "- Do not turn it into a generic green startup page or remove the biophilic softness.",
            "- Match the same information architecture, section ordering, and natural-system storytelling.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a light earthy page with large blurred botanical blobs in the background and a floating glass-like organic nav bar.",
            "- Build a split hero with one sustainability badge, a large soft headline, warm body copy, dual CTAs, and a small pair of environmental proof stats.",
            "- Use an asymmetrical organic frame for the hero media rather than a normal rectangle.",
            "- Overlay one soft ecosystem-status card on the image and add a few botanical accent icons around the media stage.",
            `- Follow with ${analysis.hasEcoLogoWall ? "a translucent rounded eco-logo wall" : "a soft ecosystem-proof block"} before the features.`,
            `- Add exactly ${analysis.featureCount} large organic feature cards with soft lift, natural copy, and nature-metaphor naming.`,
            `- Build ${analysis.hasTerraPricingShell ? "a deep-green organic pricing shell with a nested white checklist card" : "an earthy pricing block"} before the footer.`,
            `- Finish with ${analysis.hasGhostFooterWord ? "a calm footer with a large ghosted environmental wordmark" : "a footer that preserves the same low-noise natural finish"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep corners varied and organic rather than mathematically rigid.",
            "- Use soft shadows, gentle hover lifts, and breathable spacing instead of sharp technical contrast.",
            "- Preserve the earthy greens, sage accents, warm neutrals, and translucent white layers.",
            "- Avoid loud neon colors, hard HUD borders, or overly clinical enterprise styling.",
            "- Keep the page restorative, optimistic, and nature-modeled rather than aggressive or futuristic.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: biophilic organic forms, earthy palette, sustainability proof, soft ecosystem metaphors, and organic pricing shell structure.",
        "- Change the content, messaging, feature names, environmental metrics, pricing language, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same organic-biophilic landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same breathable nav, soft sustainability-led hero, organic media frame, and ecosystem-status overlay structure.",
        `- Replace the ${analysis.featureCount} eco-pod feature cards with capabilities that fit ${resolvedProductName}, while preserving the same calm botanical rhythm.`,
        "- Rewrite the renewable/carbon proof stats, pricing shell, checklist content, and CTA labels so they feel credible for the new product while preserving the same eco-luxury tone.",
        "- Keep the footer structure and ghosted closing wordmark, but rewrite the links and language to fit the new company.",
        "",
        "Strict constraints",
        "- Do not harden the layout into rigid enterprise cards or turn it into a typical green SaaS page.",
        "- Do not remove the organic radii, environmental proof cues, translucent logo shell, or earthy deep-green pricing section.",
        "- Do not replace the forest/moss/sage palette with synthetic bright-tech colors.",
        "- Keep the same restorative, sustainability-first, naturally-optimized feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildAINativeUIPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeAINativeUICode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: ambient machine intelligence, calm but uncanny sentience, premium neural-product confidence, and conversion through future capability rather than traditional software certainty",
        "- Typography: huge compressed uppercase display text, technical status labels, premium sans-serif product copy, and agentic CTA language",
        "- Surfaces: deep midnight backgrounds, indigo-violet aura fields, frosted translucent shells, ghost logo grids, luminous gradient buttons, and white inset upgrade cards",
        `- Atmosphere: ${analysis.hasNeuralMeshBackground ? "the page begins with a living neural-mesh background made from blurred indigo/violet fields and a subtle dot grid" : "the page uses ambient AI field effects before any content appears"}`,
        `- Navigation behavior: ${analysis.hasAdaptivePillNav ? "the nav is a floating adaptive pill bar with a glowing brain mark and a summon-intelligence CTA" : "the top chrome behaves like an AI control pill rather than a normal nav"}`,
        `- Hero framing: ${analysis.hasSentientStatusBadge ? "the hero opens with a sentient-status badge before delivering the main intelligence claim" : "the hero begins with AI-system status rather than a marketing eyebrow"}`,
        `- Hero typography: ${analysis.hasGradientHeroHeadline ? "the main headline uses a soft white-to-slate gradient fill to feel machine-generated and atmospheric" : "the headline feels luminous and AI-native rather than flat white"}`,
        `- Media stage: ${analysis.hasAmbientMockupStage ? "a wide ambient intelligence stage shows thought-flow and inference-accuracy telemetry instead of a conventional dashboard" : "the main visual is an ambient AI inference stage rather than a standard product screenshot"}`,
        `- Decorative motion: ${analysis.hasPulsingThoughtOrbs ? "soft pulsing neural orbs float inside the media stage to reinforce the living-intelligence illusion" : "ambient motion cues suggest a system that is thinking in real time"}`,
        `- Mid-page proof: ${analysis.hasGhostPartnerGrid ? "partner proof appears as a sleek ghosted icon grid rather than a loud logo wall" : "brand proof stays subtle and spectral"}`,
        `- Feature density: exactly ${analysis.featureCount} generative feature tiles explain the system as a set of intelligent capabilities`,
        `- Pricing shell: ${analysis.hasAdaptivePricingShell ? "pricing is framed as an adaptive AI engine, with floating indigo/violet numbers and a bright upgrade card nested inside" : "pricing feels computed and generative rather than fixed and traditional"}`,
        `- Footer architecture: ${analysis.hasNeuralFooterLogoff ? "the footer closes like a stable neural logoff with docs, safety logs, synthesis links, and a systems-stable line" : "the footer keeps the AI logoff language alive"}`,
        `- Palette logic: ${analysis.usesIndigoVioletAIPalette ? "indigo and violet lead the system, with white and slate neutrals supporting the intelligence aura" : "cool AI-era purples and midnight neutrals define the hierarchy"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, ambient AI atmosphere, and machine-intelligence product framing.",
            "- Do not collapse it into a normal SaaS landing page or a chatbot UI.",
            "- Match the same information architecture, section ordering, and premium agentic-system tone.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a deep dark page with ambient indigo/violet background fields and a subtle neural dot grid.",
            "- Add a floating adaptive pill nav with glowing brand icon, sparse links, and a summon-style CTA.",
            "- Build a centered hero with one sentient-status badge, giant gradient headline, short agentic product statement, and two premium AI-themed CTAs.",
            "- Place a wide ambient intelligence stage below the hero copy instead of a normal dashboard or illustration.",
            "- Include thought-flow and inference-accuracy telemetry inside the stage, plus soft pulsing orbs or similar neural motion cues.",
            `- Follow with ${analysis.hasGhostPartnerGrid ? "a ghosted global-mainframe partner strip" : "a subtle spectral partner strip"} before the features.`,
            `- Add exactly ${analysis.featureCount} large generative feature tiles with luminous gradients and soft frosted surfaces.`,
            `- Build ${analysis.hasAdaptivePricingShell ? "an adaptive-pricing shell with glowing stats and a bright inset upgrade card" : "a computed AI-pricing section"} before the footer.`,
            `- Finish with ${analysis.hasNeuralFooterLogoff ? "a neural logoff footer with docs, safety logs, and a stable-systems line" : "a footer that still feels like an AI system logoff"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep the page calm, futuristic, and sentient rather than playful or corporate.",
            "- Use translucent shells, cool glow, and ambient motion instead of hard borders or heavy textures.",
            "- Avoid chat bubbles, form-heavy flows, or explicit assistant conversation UIs.",
            "- Preserve the indigo/violet aura and the feeling that the product is thinking in the background.",
            "- Do not turn the page into a normal dashboard, pricing-table SaaS site, or neon cyberpunk control room.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: ambient AI aura, sentient-status framing, neural-stage hero, ghost partner proof, and adaptive-pricing structure.",
        "- Change the content, messaging, feature names, telemetry labels, pricing language, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same AI-native landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same adaptive pill navigation, status-led hero, ambient neural stage, and future-agentic structure.",
        `- Replace the ${analysis.featureCount} feature tiles with intelligent capabilities that fit ${resolvedProductName}, while preserving the same generative-tile rhythm.`,
        "- Rewrite the telemetry labels, pricing-engine language, upgrade CTA, and footer logoff copy so they feel credible for the new product while preserving the same AI-native tone.",
        "- Keep the ghosted partner strip and the stable neural footer structure, but rewrite the labels and links for the new company.",
        "",
        "Strict constraints",
        "- Do not simplify the page into a chatbot or copilot chat window.",
        "- Do not remove the ambient neural background, sentient-status badge, or adaptive pricing shell.",
        "- Do not replace the indigo/violet AI palette with warm consumer colors or stark monochrome minimalism.",
        "- Keep the same premium, agentic, intelligent-by-default feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildMemphisDesignPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeMemphisDesignCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: irreverent postmodern pop-art energy, playful radical execution, creative-agency confidence, and visual disruption as the main persuasion device",
        "- Typography: huge black uppercase headlines, clashing color shadows, sticker-like labels, and loud playful CTA copy",
        "- Surfaces: pastel-lilac page base, hard black outlines, hot-pink/blue/green/yellow blocks, comic-style shadows, and geometric overlays everywhere",
        `- Atmosphere: ${analysis.hasConfettiPatternField ? "the page is wrapped in a field of dots, squiggles, confetti blocks, and bouncing geometric ornaments" : "the page relies on dense Memphis ornamentation before content starts"}`,
        `- Navigation behavior: ${analysis.hasFloatingPopNav ? "the nav is a floating pop bar with hard borders, comic shadows, and one loud jam/start CTA" : "the top chrome behaves like a pop-art sticker bar"}`,
        `- Hero framing: ${analysis.hasVibeBadge ? "the hero begins with a vibe-level badge rather than a polished business eyebrow" : "the hero opens with playful status energy instead of sober product framing"}`,
        `- Hero typography: ${analysis.hasRadicalHeroHeadline ? "the headline stacks bold verbs with rotated highlight blocks and colored drop shadows" : "the hero headline behaves like a poster headline, not a clean SaaS display"}`,
        `- Media stage: ${analysis.hasGeometricImageFrame ? "the right side uses a square geometric image frame with loud outlines and thick offset shadows" : "the main visual is framed like a pop-art poster block"}`,
        `- Overlay proof: ${analysis.hasFloatingSpecsPanel ? "a floating specs panel overlaps the hero media like a pasted sticker card" : "hero proof appears as a loud overlapping sticker-like panel"}`,
        `- Decorative geometry: ${analysis.hasAsymmetricalDecorations ? "triangles, circles, squares, and random offset shapes remain visible around the hero frame" : "asymmetrical geometric ornaments keep the layout off-balance in a good way"}`,
        `- Mid-page proof: ${analysis.hasContrastLogoWall ? "the logo wall becomes a contrast-heavy collective strip with striped patterning" : "brand proof uses contrast patterning rather than calm premium logos"}`,
        `- Feature density: exactly ${analysis.featureCount} patterned feature cards continue the loud Memphis block language`,
        `- Pricing shell: ${analysis.hasRadicalPricingCard ? "pricing becomes a radical poster card with striped background texture and a bright inset plan card" : "pricing is treated like a pop-art pricing poster rather than a quiet pricing table"}`,
        `- Footer architecture: ${analysis.hasMarqueeFooter ? "the footer includes a marquee alert bar and a final radical slogan line like a broadcast signoff" : "the footer keeps the broadcast-style radical energy alive"}`,
        `- Palette logic: ${analysis.usesMemphisPalette ? "hot pink, electric blue, slime green, and yellow clash intentionally over black and white" : "the hierarchy is driven by loud clashing geometric colors"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, color clash, and Memphis postmodern energy.",
            "- Do not tame it into a tasteful modern marketing page.",
            "- Match the same information architecture, section ordering, and radical pop-art rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a pastel base page with dense Memphis patterns, squiggles, dots, confetti shapes, and floating ornaments in the background.",
            "- Add a floating pop-art nav with thick black borders, large comic shadows, and one loud CTA.",
            "- Build a split hero with one vibe/status badge, a poster-like headline, a sticker-style paragraph block, dual CTAs, and a square image frame on the right.",
            "- Overlay a loud floating specs card on the hero image and keep extra geometric decorations orbiting the frame.",
            `- Follow with ${analysis.hasContrastLogoWall ? "a patterned collective/logo strip" : "a high-contrast brand strip"} before the features.`,
            `- Add exactly ${analysis.featureCount} bold patterned feature modules with hard outlines and comic shadows.`,
            `- Build ${analysis.hasRadicalPricingCard ? "a radical pricing poster section with one bright inset plan card" : "a loud pop-art pricing block"} before the footer.`,
            `- Finish with ${analysis.hasMarqueeFooter ? "a broadcast-style footer with a marquee strip and radical signoff copy" : "a footer that preserves the same broadcast radicalism"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep hard black borders, clashing colors, and chunky offset shadows throughout the page.",
            "- Use rotation, skew, underline, patterns, and geometric asymmetry freely.",
            "- Motion should feel playful and poster-like, not subtle or premium.",
            "- Do not introduce quiet whitespace, muted palettes, or enterprise-safe balance.",
            "- Keep the page loud, weird, energetic, and unapologetically postmodern.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: Memphis patterns, hard black outlines, clashing pop colors, poster-style hero, and radical pricing-card composition.",
        "- Change the content, messaging, feature names, pricing copy, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same Memphis-design landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same floating pop nav, vibe badge, poster-style hero, geometric image stage, and loud Memphis pattern system.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same bold block-grid rhythm.`,
        "- Rewrite the specs panel, collective strip, pricing poster, and footer marquee/signoff copy so they feel credible for the new product while preserving the same radical pop tone.",
        "- Keep the geometric ornamentation, clashing colors, and hard-shadow CTA language intact even as the narrative changes.",
        "",
        "Strict constraints",
        "- Do not sanitize the design into a modern startup landing page.",
        "- Do not remove the squiggles, confetti patterns, hard outlines, or rotating geometric accents.",
        "- Do not replace the hot-pink/blue/green/yellow palette with restrained brand colors.",
        "- Keep the same loud, playful, postmodern, shapes-over-subtlety feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildVaporwavePrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeVaporwaveCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: dreamy retro-digital nostalgia, surreal consumer-future fantasy, VHS-era spectacle, and synthwave product theater instead of sober SaaS clarity",
        "- Typography: huge italic uppercase headlines, glitchy VHS text treatment, tiny all-caps system labels, and broadcast-style microcopy",
        "- Surfaces: dark purple night background, cyan/pink/mint neon accents, retro terminal bars, black translucent panels, and loud offset-shadow CTA blocks",
        `- Atmosphere: ${analysis.hasCustomVhsStyles ? "custom VHS/glitch keyframes and overlays are part of the design language, not optional decoration" : "the page relies on custom retro motion and analog-noise treatments"}`,
        `- Worldbuilding: ${analysis.hasWireframeFloor && analysis.hasStripedSun ? "a 3D wireframe floor and striped sunset sun create the entire vaporwave scene before any product content begins" : "the page establishes a surreal retro-futurist environment as its core backdrop"}`,
        `- Navigation behavior: ${analysis.hasRetroTerminalNav ? "the nav behaves like a retro terminal bar with jitter, neon borders, and two contrasting login/get-aesthetic actions" : "the nav feels like an analog terminal UI rather than a modern website bar"}`,
        `- Hero framing: ${analysis.hasVirtualizingHeroBadge ? "the hero starts with a virtualizing system-status badge before the main dreamlike product claim" : "the hero opens with a retro system-status cue"}`,
        `- Hero typography: ${analysis.hasGlitchHeroTypography ? "the main headline combines glitch-treated neon gradient text with one oversized framed secondary line" : "the hero headline is split into layered retro statements rather than one clean sentence"}`,
        `- Decorative set pieces: ${analysis.hasPalmAndWaveOrnaments ? "palms, waves, Japanese characters, and other surreal ornaments remain visible around the hero" : "the page keeps surreal ornaments visible as part of the era fantasy"}`,
        `- Mid-page proof: ${analysis.hasLofiLogoWall ? "brand proof appears as a lo-fi broadcast strip with multicolor neon icons instead of a polished logo wall" : "partner proof stays lo-fi and theatrical"}`,
        `- Feature density: exactly ${analysis.featureCount} dream-feature cards continue the plaza/world-building logic below the hero`,
        `- Pricing shell: ${analysis.hasVhsPricingShell ? "pricing is treated like a VHS popup/storefront with giant nostalgic numbers and a bright inset action card" : "pricing behaves like a retro broadcast purchase module"}`,
        `- Footer architecture: ${analysis.hasBroadcastFooter ? "the footer closes like the end of a VHS tape, complete with rewind copy and tape-position metadata" : "the footer keeps the broadcast-tape fiction alive"}`,
        `- Palette logic: ${analysis.usesVaporPalette ? "pink, cyan, mint, and violet clash over dark plum backgrounds with strong neon glow and tape-noise energy" : "retro neon gradients and synthwave accents drive the page"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, VHS/glitch treatment, and vaporwave worldbuilding.",
            "- Do not clean it up into a tasteful retro-modern page or reduce the surreal nostalgia.",
            "- Match the same information architecture, section ordering, and synthwave spectacle.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a dark vaporwave world with VHS overlays, custom glitch motion, a striped sun, and a 3D wireframe floor.",
            "- Add a retro terminal nav with jitter motion, neon borders, and contrasting CTA buttons.",
            "- Build a centered hero with one virtualization status badge, a split glitch headline, one neon-framed supporting paragraph, and two large CTA blocks.",
            "- Keep ornamental palms, waves, and surreal symbols around the hero so the scene feels theatrical rather than minimal.",
            `- Follow with ${analysis.hasLofiLogoWall ? "a lo-fi broadcast-style partner strip" : "a theatrical neon proof strip"} before the features.`,
            `- Add exactly ${analysis.featureCount} dream-feature cards with neon borders, VHS text, and surreal side details.`,
            `- Build ${analysis.hasVhsPricingShell ? "a VHS-popup pricing shell with giant nostalgic numbers and a bright inset card" : "a retro pricing broadcast module"} before the footer.`,
            `- Finish with ${analysis.hasBroadcastFooter ? "an end-of-tape footer with rewind messaging and tape metadata" : "a footer that preserves the VHS-broadcast fiction"}.`,
            "",
            "Interaction and styling constraints",
            "- Preserve the retro noise, glitch text, neon glow, and tape-era theatrics across the whole page.",
            "- Use pink, cyan, mint, and violet aggressively over dark purple-black backgrounds.",
            "- Motion should feel analog, jittery, dreamy, and slightly unstable rather than sleek and premium.",
            "- Do not turn the layout into a normal app-marketing page with clean, balanced modern spacing.",
            "- Keep the page surreal, nostalgic, over-styled, and deliberately dramatic.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: vaporwave worldbuilding, VHS overlays, striped-sun hero environment, retro terminal chrome, and plaza-style pricing structure.",
        "- Change the content, messaging, feature names, pricing copy, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same vaporwave landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same retro terminal nav, surreal vaporwave environment, split glitch headline, and VHS pricing module structure.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same dream-plaza rhythm.`,
        "- Rewrite the status badge, surreal ornaments, pricing labels, footer broadcast language, and CTA text so they feel credible for the new product while preserving the same nostalgic fiction.",
        "- Keep the VHS end-of-tape footer structure and retro metadata, but rewrite the labels and links for the new company.",
        "",
        "Strict constraints",
        "- Do not modernize the page into a clean pastel retro site or a conventional SaaS layout.",
        "- Do not remove the wireframe floor, sunset sun, VHS overlays, or neon-poster typography.",
        "- Do not replace the pink/cyan/mint/violet palette with restrained brand colors.",
        "- Keep the same dreamy, over-stylized, nostalgic consumer-future feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildDimensionalLayeringPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeDimensionalLayeringCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: high-depth premium SaaS drama, spatial layering as the core persuasion device, and tactile performance engineering rendered as a volumetric object system",
        "- Typography: huge italic display headlines, compact uppercase engine labels, bold product copy, and structural CTA language",
        "- Surfaces: midnight-black base, subtle glass nav, volumetric gradient cards, 3D-transformed layers, white accent modules, and pink/indigo depth glows",
        `- Structural root: ${analysis.hasPerspectiveRoot ? "the page root itself establishes perspective and 3D preservation so depth is real, not just implied" : "the layout depends on a strong perspective context for its visual system"}`,
        `- Motion system: ${analysis.hasFloatLayerAnimation ? "floating layer keyframes and optimized transform styles are part of the core visual behavior" : "depth motion is driven by subtle floating 3D transforms"}`,
        `- Navigation behavior: ${analysis.hasGlassNav ? "the nav is a restrained glass shell that lets the 3D hero take visual priority" : "the top chrome stays light and understated against the dimensional hero"}`,
        `- Hero framing: ${analysis.hasStackEngineBadge ? "the hero begins with a stack-engine status badge before the main dimensional claim" : "the hero opens with a structural system cue"}`,
        `- Hero typography: ${analysis.hasGradientHeroHeadline ? "the display headline mixes solid white with a pink-to-blue gradient middle line to emphasize depth" : "the hero headline uses contrast and gradient to heighten the sense of space"}`,
        `- Main stage: ${analysis.hasVolumetricStackStage ? "the right side is a true volumetric stack made of multiple translated Z-layers rather than a flat hero image" : "the main visual is a multi-plane layered object system instead of a single media card"}`,
        `- Supporting modules: ${analysis.hasMetricOverlayCard && analysis.hasSyncModuleCard ? "small metric and sync modules float in front of and around the core layer to prove real depth hierarchy" : "secondary floating modules reinforce the z-axis structure around the main stage"}`,
        `- Feature density: exactly ${analysis.featureCount} structural feature cards explain the system as layered objects and flows`,
        `- Pricing shell: ${analysis.hasStructuralPricingShell ? "pricing is framed as a structural engine with giant numbers and a large inset plan surface" : "pricing continues the deep structural product language rather than switching to a generic pricing table"}`,
        `- Footer architecture: ${analysis.hasStructuralFooter ? "the footer closes with restrained structural branding and a giant low-contrast statement about dimensional-layering structures" : "the footer preserves the spatial-system language and structural branding"}`,
        `- Palette logic: ${analysis.usesPinkIndigoDepthPalette ? "pink and indigo/blue accents define the depth hierarchy over dark neutral space" : "cool depth accents and dark spatial neutrals define the composition"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography, z-axis layering, and premium spatial-product drama.",
            "- Do not flatten it into a normal dark SaaS page or fake the depth with a single illustration.",
            "- Match the same information architecture, section ordering, and volumetric hierarchy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a dark page with subtle depth-grid background treatments and a restrained glass navigation shell.",
            "- Build a split hero where the left side handles copy and CTA while the right side is a true multi-plane stacked object system.",
            "- The main hero visual should include several rotated and translated Z-layers, not a flat screenshot.",
            "- Add one main core layer, one deeper base layer, and at least two floating overlay modules around it.",
            `- Use ${analysis.hasMetricOverlayCard ? "a floating metric card" : "one floating stats module"} and ${analysis.hasSyncModuleCard ? "a separate sync/status module" : "an extra support module"} to emphasize the spatial hierarchy.`,
            `- Follow with exactly ${analysis.featureCount} structural feature cards that continue the same refined-depth language.`,
            `- Build ${analysis.hasStructuralPricingShell ? "a structural pricing engine section with one large inset plan surface" : "a depth-aware pricing section"} before the footer.`,
            `- Finish with ${analysis.hasStructuralFooter ? "a restrained structural footer and a large low-contrast structural statement" : "a footer that preserves the same architectural depth tone"}.`,
            "",
            "Interaction and styling constraints",
            "- Preserve the real perspective context, translateZ illusions, and floating-layer motion.",
            "- Keep the page premium and spatial, not playful or retro.",
            "- Use pink and blue highlights to guide depth, not to overwhelm the interface.",
            "- Avoid flat sections, simplistic card rows, or generic dashboard layouts.",
            "- Keep the entire experience focused on layered physicality and structural elegance.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: dimensional depth, multi-plane hero stack, structural feature cards, and pink/indigo spatial hierarchy.",
        "- Change the content, messaging, module labels, pricing language, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same dimensional-layering landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same glass nav, stack-engine badge, volumetric hero composition, and structural pricing section.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same depth-first object-card rhythm.`,
        "- Rewrite the metric module, sync/status module, pricing labels, and footer structural language so they feel credible for the new product while preserving the same layered-system fiction.",
        "- Keep the giant structural footer statement and spatial UI logic, but rewrite labels and links for the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the main hero into a normal image or dashboard screenshot.",
        "- Do not remove the perspective context, translateZ layering, or floating module hierarchy.",
        "- Do not replace the pink/indigo depth accents with flat monochrome minimalism.",
        "- Keep the same premium, structural, volumetric, stacked-object feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildExaggeratedMinimalismPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeExaggeratedMinimalismCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: severe reduction, oversized confidence, editorial product absolutism, and persuasion through scale and contrast rather than ornament",
        "- Typography: gigantic black display type, ultra-bold uppercase support labels, sharp italic emphasis, and almost no decorative copy",
        "- Surfaces: pure white fields, solid black structure, one electric-blue accent, oversized borders, flat blocks, and almost no visual softness",
        `- Navigation behavior: ${analysis.hasOversizedStickyNav ? "the nav is oversized, sticky, and brutally clean, with a thick black baseline and one hard CTA" : "the top chrome behaves like an oversized editorial control bar"}`,
        `- Hero framing: ${analysis.hasSystemStabilityChip ? "the hero starts with one micro status chip, then immediately explodes into giant display typography" : "the hero prioritizes one tiny system cue before massive typography"}`,
        `- Hero typography: ${analysis.hasMassiveHeroTypography ? "the main claim is broken into three enormous words, with only one blue accent word and aggressive hover distortions" : "the hero relies on a few enormous words rather than a conventional headline-and-subhead stack"}`,
        `- Negative-space device: ${analysis.hasVoidWatermark ? "a giant low-contrast watermark reinforces scale without adding real content" : "oversized background typography supports the reductive composition"}`,
        `- Mid-page proof: ${analysis.hasTrustGridWall ? "brand proof is reduced to a monochrome trust strip with icons and extreme spacing" : "partner proof remains stripped down and monochrome"}`,
        `- Feature density: exactly ${analysis.featureCount} massive bordered feature blocks carry the entire proof system below the hero`,
        `- Section architecture: ${analysis.hasTheCoreSection ? "the main body is framed as a single huge 'core' section with giant headings and almost architectural spacing" : "the content sections behave like monumental editorial panels"}`,
        `- Pricing shell: ${analysis.hasStatementPricing ? "pricing is presented as a giant statement section with one flat-price thesis and one oversized white card" : "pricing works like a typographic manifesto, not a normal pricing grid"}`,
        `- Offer card: ${analysis.hasFlatOsCard ? "the product offer is condensed into one stark white plan card with one large blue price and almost no decoration" : "there is only one highly reduced offer card"}`,
        `- Footer architecture: ${analysis.hasReductionFooter ? "the footer closes with giant brand typography and one reductionist manifesto line" : "the footer remains extremely reduced and typographic"}`,
        `- Accent logic: ${analysis.usesSingleBlueAccent ? "blue is the only accent and should appear as a deliberate interruption inside an otherwise black-white system" : "a single accent color interrupts an otherwise monochrome system"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, typography scale, and exaggerated minimalist severity.",
            "- Do not soften it into ordinary minimalism or add decorative refinement.",
            "- Match the same information architecture, section ordering, and monumental editorial rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a stark white page with a sticky oversized nav, thick black dividers, and one accent-colored CTA shadow system.",
            "- Build a hero with one tiny status chip, a giant three-line statement, one reduced support paragraph, and two huge CTA bars.",
            "- Keep a giant low-contrast background watermark or equivalent typographic negative-space device in the hero.",
            `- Follow with ${analysis.hasTrustGridWall ? "a stripped-down monochrome trust strip" : "a reduced trust/proof strip"} before the features.`,
            `- Add exactly ${analysis.featureCount} huge bordered feature blocks with oversized headings and almost no extra ornament.`,
            `- Build ${analysis.hasStatementPricing ? "a statement-style pricing section with one single-price thesis" : "a manifesto-like pricing section"} and ${analysis.hasFlatOsCard ? "one single offer card" : "one reduced plan card"} before the footer.`,
            `- Finish with ${analysis.hasReductionFooter ? "a reductionist footer and one giant closing manifesto line" : "a minimal typographic footer"} .`,
            "",
            "Interaction and styling constraints",
            "- Use almost only black, white, and one blue accent.",
            "- Favor giant type, thick borders, huge spacing, and flat contrast over subtle polish.",
            "- Keep hover behavior simple but forceful: skew, translate, color swap, underline, or shadow removal.",
            "- Do not add gradients, glass effects, soft corners, or decorative color variety.",
            "- Keep the page ruthless, editorial, and reduced-to-the-core throughout.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: gigantic type, black-white reduction, single blue accent, monumental feature blocks, and one-plan pricing statement.",
        "- Change the content, messaging, feature names, pricing copy, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same exaggerated-minimalist landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same status-chip hero, giant three-part statement, massive CTA bars, and reduced trust strip structure.",
        `- Replace the ${analysis.featureCount} feature blocks with capabilities that fit ${resolvedProductName}, while preserving the same oversized block rhythm.`,
        "- Rewrite the single-plan pricing statement, plan card, and footer manifesto so they feel credible for the new product while preserving the same severity and reduction.",
        "- Keep the blue accent as the only deliberate color interruption even as the content changes.",
        "",
        "Strict constraints",
        "- Do not turn this into ordinary minimalist SaaS marketing.",
        "- Do not add extra color accents, testimonials, decorative icons everywhere, or dense product illustrations.",
        "- Do not replace the giant type and monumental spacing with conventional balanced proportions.",
        "- Keep the same bold, reductive, exaggerated-minimal feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildKineticTypographyPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeKineticTypographyCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: motion-led typography, rhythmic system branding, aggressive launch energy, and visual meaning created through movement and type behavior rather than illustration",
        "- Typography: Syncopate-like display type, mono system labels, giant uppercase words, italic emphasis, and text as the primary visual object",
        "- Surfaces: nearly black canvas, hot orange action color, occasional yellow emphasis, thin white lines, and minimal physical UI chrome",
        `- Motion foundation: ${analysis.hasCustomMarqueeStyles ? "marquee keyframes and custom typography handling are core to the page, not small enhancements" : "custom text-motion primitives drive the page"}`,
        `- Typography stack: ${analysis.hasGoogleFontImport ? "a geometric display font and mono support font create a strict high-contrast type system" : "the type system relies on a sharp display font paired with mono support labels"}`,
        `- Navigation behavior: ${analysis.hasOrangeAccentNav ? "the nav is minimal and lets orange-accent type and CTA motion do the work" : "the top chrome stays understated while typography remains the hero"}`,
        `- Hero environment: ${analysis.hasBackgroundHeroMarquees ? "large background marquees move behind the hero to create constant kinetic rhythm" : "the hero is surrounded by large moving typographic fields"}`,
        `- Hero typography: ${analysis.hasKineticHeroHeadline ? "the main claim is split into a few giant words that react through skew, scale, tracking, and color changes" : "the hero uses animated display words rather than static copy blocks"}`,
        `- Divider motion: ${analysis.hasAnimatedDivider ? "one animated line/divider acts as a rhythmic punctuation mark between major words" : "motion punctuation appears between text beats"}`,
        `- CTA strategy: ${analysis.hasSinglePrimaryHeroCta ? "the hero intentionally keeps only one dominant CTA so motion and rhythm stay focused" : "hero conversion is intentionally sparse and typography-led"}`,
        `- Mid-page proof: ${analysis.hasMarqueeWall ? "a marquee wall repeats trust/performance words as the main proof device instead of logos or screenshots" : "proof is expressed through repeated moving keywords"}`,
        `- Feature density: exactly ${analysis.featureCount} typographic feature entries continue the motion-first system below the hero`,
        `- Pricing shell: ${analysis.hasValueModelPricing ? "pricing is communicated as a giant typographic value statement plus one stark black plan card" : "pricing behaves like a typographic manifesto rather than a normal pricing table"}`,
        `- Footer architecture: ${analysis.hasFooterMarquee ? "the footer keeps motion alive with a low-contrast marquee and one final kinetic system stamp" : "the footer remains kinetic and typographic"}`,
        `- Palette logic: ${analysis.usesOrangeBlackPalette ? "black, orange, white, and a small amount of yellow define the whole system" : "a hot accent color over black drives the hierarchy"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, type motion, and typography-led rhythm.",
            "- Do not reduce it to a static hero with some bold text.",
            "- Match the same information architecture, section ordering, and motion-through-type energy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a dark page where the main visual system is moving typography, not imagery.",
            "- Add a restrained top nav with geometric display branding, small orange-accent interactions, and one orange CTA.",
            "- Build a hero with large background marquees, one small system-status chip, a giant split display headline, one animated divider, and one single strong CTA.",
            "- Keep the hero intentionally sparse so the typography and motion remain the primary event.",
            `- Follow with ${analysis.hasMarqueeWall ? "a moving keyword wall" : "a typographic proof wall"} before the features.`,
            `- Add exactly ${analysis.featureCount} large typographic feature entries with strong hover reactions and very little visual decoration.`,
            `- Build ${analysis.hasValueModelPricing ? "a typographic pricing statement section and one stark plan card" : "a typography-led pricing section"} before the footer.`,
            `- Finish with ${analysis.hasFooterMarquee ? "a footer that includes another slow kinetic marquee and a final system stamp" : "a footer that preserves the same motion-led type system"}.`,
            "",
            "Interaction and styling constraints",
            "- Make typography the dominant visual object in every section.",
            "- Use orange as the main action/emphasis color over black and white, with yellow only as a secondary highlight.",
            "- Motion should come from marquee movement, tracking shifts, skew, scale, rotation, and animated lines.",
            "- Avoid hero illustrations, glossy cards, decorative gradients, or icon-heavy layouts.",
            "- Keep the page sharp, rhythmic, and text-driven rather than cinematic or ornamental.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: kinetic type motion, black-orange palette, marquee-based proof, sparse hero structure, and typography-first pricing communication.",
        "- Change the content, messaging, feature names, pricing copy, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same kinetic-typography landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same geometric type nav, marquee-backed hero, split headline, single CTA, and motion punctuation system.",
        `- Replace the ${analysis.featureCount} feature entries with capabilities that fit ${resolvedProductName}, while preserving the same typographic rhythm and hover behavior.`,
        "- Rewrite the repeated marquee keywords, pricing statement, plan-card labels, and footer system stamp so they feel credible for the new product while preserving the same kinetic language.",
        "- Keep typography as the main visual object even as the narrative changes.",
        "",
        "Strict constraints",
        "- Do not introduce big hero images, dashboard mockups, or decorative card systems that compete with the type.",
        "- Do not remove the marquees, animated divider, or orange-led motion cues.",
        "- Do not replace the black-orange-white system with softer or more colorful palettes.",
        "- Keep the same hard-edged, movement-first, typography-as-interface feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildParallaxStorytellingPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeParallaxStorytellingCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: cinematic but restrained storytelling, chapter-based product narrative, literary system documentation, and emotional pacing through sections instead of feature overload",
        "- Typography: giant black chapter headlines, italic contrast lines, tiny chapter index labels, and elegant narrative-support copy",
        "- Surfaces: mostly white and near-white sections, soft slate neutrals, indigo accent lines, document-like cards, and sparse atmospheric blobs",
        `- Story engine: ${analysis.hasMinimalStoryStyles ? "the page uses custom fade, timeline-flow, and soft parallax-blob motion to support the narrative structure" : "subtle custom motion drives the narrative rhythm"}`,
        `- Navigation behavior: ${analysis.hasStickyStoryNav ? "a sticky minimal nav acts like a chapter index with one start-reading CTA" : "the top chrome behaves like a narrative chapter bar"}`,
        `- Opening act: ${analysis.hasOriginHero ? "the hero is a full-height opening chapter with a chapter label, literary headline, one supporting paragraph, and a timeline cue" : "the first screen behaves like an opening chapter rather than a normal hero"}`,
        `- Timeline device: ${analysis.hasTimelineIndicator ? "a thin animated timeline indicator reinforces that the story continues below the fold" : "one vertical timeline cue suggests narrative progression"}`,
        `- Mid-story contrast: ${analysis.hasGrowthChapter ? "the second act shifts into a split-layout growth chapter with metrics and a more operational tone" : "the middle act expands the story into measurable operational proof"}`,
        `- Proof artifact: ${analysis.hasNarrativeLogPanel ? "a log-style narrative artifact panel visualizes the story as an evolution timeline rather than a generic dashboard" : "supporting proof appears as a narrative artifact, not a polished app mockup"}`,
        `- Modular act: ${analysis.hasScalingNarrativeSection ? `the third act resolves into exactly ${analysis.chapterCardCount} modular narrative cards` : "the later story resolves into modular chapter cards"}`,
        `- Final act: ${analysis.hasFinalActPricing ? `pricing is framed as a final act with one legacy plan and exactly ${analysis.finalPlanFeatureCount} supporting proof bullets` : "pricing is treated as the final chapter rather than a normal pricing table"}`,
        `- Footer architecture: ${analysis.hasNarrativeFooter ? "the footer keeps the chapter language alive and closes with a large architecture-is-narrative statement" : "the footer preserves the narrative language and chapter framing"}`,
        `- Accent logic: ${analysis.usesIndigoStoryAccent ? "indigo is the only meaningful accent and appears in chapter labels, timeline moments, and the ending CTA" : "one restrained story accent color guides the narrative"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, section pacing, and chapter-based storytelling rhythm.",
            "- Do not turn it into a generic product page with ordinary feature sections.",
            "- Match the same information architecture, narrative flow, and restrained cinematic feel.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky minimal narrative nav with chapter labels and one start-reading CTA.",
            "- Build an opening full-height chapter with one chapter badge, huge literary headline, short supporting paragraph, and a vertical timeline cue at the bottom.",
            `- Follow with ${analysis.hasGrowthChapter ? "a split-layout growth chapter" : "a second narrative chapter"} that combines strong copy on one side and a narrative operational panel on the other.`,
            `- Include ${analysis.hasNarrativeLogPanel ? "a log-style evolution card with timestamps and status markers" : "one narrative artifact panel"} instead of a normal hero screenshot.`,
            `- Add a third major narrative act with exactly ${analysis.chapterCardCount} modular story cards.`,
            `- Build ${analysis.hasFinalActPricing ? "a final-act pricing section with one legacy plan and chapter-like framing" : "an ending section that treats pricing as the final chapter"}.`,
            `- Finish with ${analysis.hasNarrativeFooter ? "a footer that still speaks in chapter language" : "a footer that preserves the storytelling tone"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep the page airy, editorial, and story-driven rather than product-grid-heavy.",
            "- Use subtle fades, timeline movement, and atmospheric blob motion instead of loud animations.",
            "- Preserve the mostly white surfaces and indigo accent logic.",
            "- Avoid bright gradients, dense dashboards, or overly salesy conversion design.",
            "- Keep the page feeling like a structured narrative document in motion.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: chapter-based story structure, timeline cues, restrained cinematic pacing, and final-act pricing narration.",
        "- Change the content, chapter labels, story copy, artifact panel details, feature-card content, pricing copy, and footer language so they fit the new product.",
        "- The final result should feel like the same parallax-storytelling landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the opening chapter so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same chaptered structure: opening act, growth act, modular act, and final act.",
        `- Replace the ${analysis.chapterCardCount} modular story cards with capabilities or chapters that fit ${resolvedProductName}, while preserving the same narrative spacing and card rhythm.`,
        `- Rewrite the final plan section and its ${analysis.finalPlanFeatureCount} supporting bullets so they feel credible for ${resolvedProductName} while preserving the same “final act” framing.`,
        "- Keep the narrative footer structure and the chapter-index feel, but rewrite labels and links for the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the page into a standard landing page with generic feature rows.",
        "- Do not remove the chapter markers, timeline cues, or narrative artifact panel.",
        "- Do not add loud neon visuals, glassmorphism, or dense dashboard blocks.",
        "- Keep the same refined storytelling-first, architecture-as-narrative feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildSwissModernism2Prompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeSwissModernism2Code(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: rational Swiss-system authority, mathematical information design, hard editorial precision, and modern product clarity without softness",
        "- Typography: Inter/Helvetica-like sans serif, giant grid-aligned display type, tiny uppercase metadata labels, and disciplined bold weights",
        "- Surfaces: white, black, and light neutral fields with one red accent, strict grid divisions, strong borders, and almost no decorative softness",
        `- Style foundation: ${analysis.hasSwissStyleSheet ? "the page explicitly defines a 12-column Swiss grid, utility border system, and mathematical text sizing" : "the layout depends on a strict Swiss grid and mathematical spacing system"}`,
        `- Top system bar: ${analysis.hasTopHudBar ? "a thin red sticky HUD strip sits above the main nav as a system marker" : "one minimal accent strip marks the top of the system"}`,
        `- Navigation behavior: ${analysis.hasStrictNav ? "the nav is a strict documentation-style bar with metadata, grouped utility links, and one square red action object" : "the top chrome behaves like a Swiss documentation header"}`,
        `- Hero architecture: ${analysis.hasAsymmetricHeroGrid ? "the hero uses a hard 8/4 asymmetrical split inside a 12-column grid" : "the hero is built from strict asymmetrical grid logic"}`,
        `- Hero claim: ${analysis.hasObjectiveHeroClaim ? "the headline is reduced to three objective structural words, with red carrying the emphasis" : "the hero communicates through rational display words rather than marketing flourish"}`,
        `- Sidebar proof: ${analysis.hasRealtimeStreamCard ? "the right hero rail contains a large realtime-stream proof card and an index marker" : "the hero includes a right-side proof rail rather than a decorative image"}`,
        `- Feature density: exactly ${analysis.featureCount} feature cells appear in a strict four-up divided grid`,
        `- Metrics zone: ${analysis.hasMetricsSpecSection ? `a metrics section pairs one visual-spec panel with ${analysis.metricCount} mathematical bars and values` : "a later section pairs a visual-spec panel with rational metric bars"}`,
        `- Pricing shell: ${analysis.hasBlackLicensingPricing ? "pricing flips to a black section with a split Swiss licensing object and red-accented acquisition CTA" : "pricing becomes a strict licensing block rather than a playful conversion panel"}`,
        `- Footer architecture: ${analysis.hasSwissFooter ? "the footer closes with a red accent rule, a few grid links, and one reduced system label" : "the footer remains strict, reduced, and grid-aligned"}`,
        `- Accent logic: ${analysis.usesRedAccentOnly ? "red is the only true accent and should appear only when hierarchy requires emphasis" : "a single accent color interrupts an otherwise black-white-neutral system"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spacing, grid discipline, and Swiss-system precision.",
            "- Do not soften it into generic modern minimalism or a typical SaaS layout.",
            "- Match the same information architecture, rational hierarchy, and documentation-like product feeling.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a thin red top bar, then a strict grid-based nav with metadata blocks, grouped links, and one square red action object.",
            "- Build a hero using a rigid 12-column 8/4 split, with huge objective typography on the left and rational proof/system objects on the right.",
            "- Keep the hero image-free on the main side; the right rail should carry metrics and one realtime-stream system card.",
            `- Add exactly ${analysis.featureCount} feature cells in a four-up divided grid with strong borders and almost no ornament.`,
            `- Build a metrics section that pairs one visual-spec module with ${analysis.metricCount} rational bar-based metrics.`,
            `- Follow with ${analysis.hasBlackLicensingPricing ? "a black licensing/pricing block with a split Swiss plan layout" : "a strict licensing section"} before the footer.`,
            `- Finish with ${analysis.hasSwissFooter ? "a reduced Swiss footer with a red accent bar and sparse grid links" : "a sparse grid-aligned footer"} .`,
            "",
            "Interaction and styling constraints",
            "- Use strict borders, mathematical spacing, and asymmetric grid logic everywhere.",
            "- Keep red as the only accent and deploy it sparingly.",
            "- Avoid playful icons, rounded cards, gradients, glass effects, or soft motion systems.",
            "- Make every section feel like part of a documented system rather than a marketing spectacle.",
            "- Preserve the sense of objective, measured, rational structure throughout.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: strict 12-column Swiss grid, black-white-neutral system, sparse red accent, asymmetric hero split, and licensing-style pricing.",
        "- Change the content, metadata labels, feature names, metrics, pricing copy, footer copy, and CTA text so they fit the new product.",
        "- The final result should feel like the same Swiss Modernism 2.0 system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same top red HUD strip, strict nav, asymmetrical 8/4 hero split, and objective display-claim structure.",
        `- Replace the ${analysis.featureCount} feature cells with capabilities that fit ${resolvedProductName}, while preserving the same divided Swiss grid rhythm.`,
        `- Rewrite the metrics panel and ${analysis.metricCount} rational data bars so they feel credible for ${resolvedProductName} while preserving the same mathematical hierarchy.`,
        "- Keep the licensing/pricing block and sparse footer structure, but rewrite the labels and resource groupings for the new company.",
        "",
        "Strict constraints",
        "- Do not relax the grid into a soft modern marketing page.",
        "- Do not add playful color systems, imagery-heavy hero sections, or rounded SaaS card patterns.",
        "- Do not use more than one meaningful accent color.",
        "- Keep the same rigorous, objective, structured Swiss-system feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildHUDTechPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeHUDTechCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: command-center sci-fi telemetry, defensive cyber-ops confidence, holographic mission control, and cinematic FUI precision rather than consumer SaaS softness",
        "- Typography: monospaced techno fonts, uppercase machine labels, bold compressed command headlines, and status-copy that reads like system firmware",
        "- Surfaces: obsidian black and deep navy panels, transparent dark glass, cyan borders, neon telemetry bars, and sparse red-alert accents only inside status chips",
        `- FUI style engine: ${analysis.hasFuiStyleSheet ? "custom scanline, hud-border, corner-marker, and grid-background rules define the whole system" : "the design depends on custom HUD borders, scanlines, and grid overlays"}`,
        `- Live status behavior: ${analysis.hasLiveTelemetryState ? "the layout includes live time and streaming telemetry states, so the interface should feel active even when static" : "the interface should imply active telemetry and live monitoring"}`,
        `- Navigation behavior: ${analysis.hasStickyHudBar ? "a sticky top command bar exposes system id, link status, encryption status, clock, and signal blocks" : "the top chrome behaves like a command console header"}`,
        `- Hero architecture: ${analysis.hasCommandCoreHero ? "the first screen centers on one glowing circular command core with a huge two-line codename headline and one authorize-style CTA" : "the hero is a command-core showcase, not a conventional marketing hero"}`,
        `- Side rails: ${analysis.hasLeftTelemetryRail && analysis.hasRightStatusRail ? "left and right telemetry rails flank the hero with heat maps, activity graphs, node statuses, and encrypted data" : "supporting telemetry panels wrap the hero like a tactical console"}`,
        `- Mission ticker: ${analysis.hasMissionTicker ? "a bottom mission ticker closes the hero with battery, sync, and mission-ready signals" : "the hero ends with one compact mission-status ticker"}`,
        `- Feature density: exactly ${analysis.featureCount} operations cards appear in a rigid HUD grid`,
        `- Access module: ${analysis.hasAccessPricingModule ? `pricing is framed as a license-acquisition console with one elite plan and exactly ${analysis.accessFeatureCount} access bullets` : "pricing is framed like an access-authorization console rather than a normal SaaS plan table"}`,
        `- Footer architecture: ${analysis.hasHudFooter ? "the footer behaves like command shutdown chrome with sparse technical link groups and one terminate marker" : "the footer should feel like shutdown-phase command chrome"}`,
        `- Accent logic: ${analysis.usesCyanOnObsidianPalette ? "cyan on obsidian is the dominant signal system; use other colors only as tiny operational warnings" : "keep the palette narrow and signal-driven"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, telemetry rhythm, command-center hierarchy, and futuristic HUD language.",
            "- Do not simplify it into a normal dark SaaS page with generic cards.",
            "- Match the same operational information architecture, scanning overlays, and mission-control energy.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sticky top HUD bar that exposes a system identifier, link status, encryption state, live time readout, and compact signal blocks.",
            "- Build a full-height hero around one circular command core with one giant codename headline and one primary initialize-style CTA.",
            `- Flank the hero with ${analysis.hasLeftTelemetryRail ? "a left telemetry rail containing a heat map and network activity graph" : "one left telemetry rail"} and ${analysis.hasRightStatusRail ? "a right rail containing node-status and encryption panels" : "one right-side status rail"}.`,
            `- Close the hero with ${analysis.hasMissionTicker ? "a bottom mission ticker carrying battery, sync, and mission-ready status" : "one bottom mission-status ticker"}.`,
            `- Add exactly ${analysis.featureCount} operations cards in a strict HUD grid section with labels, icons, and segmented bars.`,
            `- Build ${analysis.hasAccessPricingModule ? "a license-acquisition pricing console with one elite plan and four access bullets" : "one access-authorization pricing console"} before the footer.`,
            `- Finish with ${analysis.hasHudFooter ? "a shutdown-style footer with sparse technical columns and a terminate marker" : "a sparse technical footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep the layout technical, angular, and signal-first.",
            "- Use scanlines, corner markers, grids, pulses, and telemetry bars instead of soft shadows or consumer-product decoration.",
            "- Preserve the cyan-on-black signal language and monospaced command tone.",
            "- Avoid friendly illustration, rounded lifestyle cards, or bright multicolor marketing gradients.",
            "- Make the page feel like a deployed command interface rather than a standard landing page.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: command-center HUD chrome, cyan telemetry system, circular core hero, side rails, operations grid, and access-console pricing.",
        "- Change the labels, product story, status strings, feature names, telemetry copy, pricing copy, and footer links so they fit the new product.",
        "- The final result should feel like the same HUD / sci-fi FUI system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same sticky command bar, command-core hero, telemetry side rails, operations section, and license-acquisition pricing shell.",
        `- Replace the ${analysis.featureCount} operations cards with system capabilities that fit ${resolvedProductName}, while preserving the same tactical layout and label rhythm.`,
        `- Rewrite the elite access module and its ${analysis.accessFeatureCount} included-access bullets so they feel credible for ${resolvedProductName} while keeping the same authorization-console framing.`,
        "- Keep the shutdown-style footer and sparse technical link groups, but rewrite their labels to suit the new product world.",
        "",
        "Strict constraints",
        "- Do not turn the page into a regular dashboard screenshot plus CTA layout.",
        "- Do not remove the scanline, telemetry, side-rail, or mission-ticker language.",
        "- Do not replace the cyan-on-obsidian palette with a soft corporate gradient system.",
        "- Keep the same tactical, cinematic, operator-console feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildPixelArtPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzePixelArtCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: playful 8-bit quest energy, arcade-game humor, nostalgic retro console UI, and blocky toy-like confidence rather than polished modern SaaS restraint",
        "- Typography: pixel headline font for all major labels, bitmap arcade microcopy, and bigger readable monospace body copy for secondary information",
        "- Surfaces: chunky black borders, square cards, limited-color background fields, flat yellow action buttons, and shadows rendered like sprite-era depth",
        `- Pixel system: ${analysis.hasPixelFontSystem && analysis.hasPixelUtilityClasses ? "the page explicitly defines pixel-border, pixel-card, pixel-btn, and sprite rules around arcade fonts" : "the style depends on a complete pixel-UI utility system with hard borders and bitmap fonts"}`,
        `- Navigation behavior: ${analysis.hasHeartBarNav ? "the top nav behaves like a retro status bar with hearts, a player level badge, and quest tabs" : "the header should feel like a game HUD rather than a website nav"}`,
        `- Hero architecture: ${analysis.hasQuestHero ? "the first screen reads like a level-select intro with a quest badge, three-line verb stack, one start-quest CTA, and one side quest chip" : "the hero is a retro game intro rather than a corporate product hero"}`,
        `- Sprite staging: ${analysis.hasSpriteShowcase ? "the hero visual includes clouds, a slime sprite, floating combat text, and a chunky battle arena frame" : "the main visual should feel like a sprite-based character select screen"}`,
        `- Character grid: ${analysis.hasCharacterSelectGrid ? `the showcase includes exactly ${analysis.characterCount} selectable character or module cards` : "the showcase should present a small grid of selectable retro modules"}`,
        `- Feature density: exactly ${analysis.featureCount} shop-style upgrade cards appear in the secondary section`,
        `- Pricing shell: ${analysis.hasLootBoxPricing ? `pricing is presented as a membership or loot-box screen with exactly ${analysis.tierCount} tiers` : "pricing behaves like a retro unlock screen rather than a normal SaaS pricing table"}`,
        `- Footer architecture: ${analysis.hasPressStartFooter ? "the footer closes like a game-over screen with world-map links and a press-start prompt" : "the footer should feel like the end screen of an arcade interface"}`,
        `- Accent logic: ${analysis.usesRetroConsolePalette ? "gold/yellow, white, red, green, and blue appear as limited cartridge-era accents over dark gray and black" : "keep the palette limited, bright, and cartridge-like"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, pixel rhythm, retro game framing, and arcade-style progression.",
            "- Do not modernize it into a generic colorful startup page.",
            "- Match the same gameified information architecture, pixel hardware tone, and chunky low-fi delight.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a top heart-bar navigation with a logo tile, pixel brand wordmark, quest-like links, health hearts, and a player-level badge.",
            "- Build a full-height level-select hero with a quest badge, three-line pixel headline, one primary start button, and one side quest sprite chip.",
            `- Add one chunky arena showcase that contains ${analysis.characterCount} selectable cards and retro battle annotations such as damage or XP popups.`,
            `- Follow with exactly ${analysis.featureCount} shop-style upgrade cards in a merchandise grid.`,
            `- Build ${analysis.hasLootBoxPricing ? `a membership selection screen with ${analysis.tierCount} retro tiers and one open-loot-box CTA` : "a retro unlock-style pricing screen"} before the footer.`,
            `- Finish with ${analysis.hasPressStartFooter ? "a footer that reads like a game-over / continue screen" : "a footer with end-screen arcade energy"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep everything hard-edged, pixelated, and square.",
            "- Use chunky borders, low-color backgrounds, bitmap fonts, and playful sprite-like accents.",
            "- Preserve the feeling of an 8-bit or 16-bit console menu rather than a web app dashboard.",
            "- Avoid modern glass effects, smooth gradients, soft drop shadows, or luxury-minimal spacing systems.",
            "- Make the page feel like a playable retro cartridge UI transformed into a landing page.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: pixel fonts, heart-bar nav, quest hero, character-select showcase, upgrade shop grid, and loot-box style pricing.",
        "- Change the product story, quest labels, upgrade names, sprite-card labels, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Pixel Art landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same heart-bar nav, level-select hero, sprite showcase, upgrade shop section, and membership selection screen.",
        `- Replace the ${analysis.characterCount} showcase cards with retro-styled modules, characters, or items that fit ${resolvedProductName}, while preserving the same arena layout and chunky card rhythm.`,
        `- Replace the ${analysis.featureCount} upgrade cards with benefits that fit ${resolvedProductName}, while preserving the same shop-card structure and CTA treatment.`,
        `- Rewrite the ${analysis.tierCount} pricing tiers and footer labels so they feel native to ${resolvedProductName} while keeping the same arcade reward-system framing.`,
        "",
        "Strict constraints",
        "- Do not smooth the style into generic playful illustration or modern cartoon SaaS.",
        "- Do not remove the pixel-border system, arcade typography, or retro game-state language.",
        "- Do not introduce realistic photos, soft gradients, or highly polished enterprise UI chrome.",
        "- Keep the same nostalgic console-menu feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildEInkPaperPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeEInkPaperCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: contemplative editorial calm, literary technical publishing, distraction-free reading, and tactile print sensibility rather than glossy software marketing",
        "- Typography: clean contemporary sans for interface text, elegant high-contrast serif for large editorial headlines, and italic secondary copy for reflective tone",
        "- Surfaces: off-white paper fields, slightly darker section paper blocks, crisp black rules, white cards with offset black shadows, and almost no chroma except black and paper tones",
        `- Paper system: ${analysis.hasPaperTypographySystem && analysis.hasPaperTexture ? "the page explicitly combines editorial serif/sans typography with a paper-texture layer and e-ink card/button treatments" : "the style depends on editorial typography, paper texture, and black-ink interface primitives"}`,
        `- Navigation behavior: ${analysis.hasEditorialNav ? "the top nav behaves like the masthead of a technical journal with archive and manifesto links" : "the top chrome should feel like a literary publication masthead"}`,
        `- Hero architecture: ${analysis.hasIssueHero ? "the hero is a full-height literary cover with an issue stamp, giant serif headline, reflective subtitle, and almost no visual clutter" : "the first screen should behave like a printed issue cover rather than a SaaS hero"}`,
        `- Reading controls: ${analysis.hasReadingCtas ? "the primary actions are simple reading/archive choices rather than sales-heavy CTA language" : "calls to action should feel like reading or archive controls"}`,
        `- Editorial detail: ${analysis.hasRotatedLogStamp ? "one rotated technical-log stamp sits at the page edge like a printed artifact" : "small publication-like artifacts should reinforce the paper metaphor"}`,
        `- Feature density: ${analysis.hasSixCardArchiveGrid ? `exactly ${analysis.featureCount} archive-style cards explain the core capabilities` : "the mid-page section should use an archive-like capability grid"}`,
        `- Pricing shell: ${analysis.hasPrintTierPricing ? `pricing is presented as a print-subscription comparison with exactly ${analysis.tierCount} tiers` : "pricing behaves like a journal subscription comparison rather than a flashy SaaS table"}`,
        `- Footer architecture: ${analysis.hasLiteraryFooter ? "the footer closes like the back matter of a publication, with restrained copy and sparse index columns" : "the footer should feel like publication back matter"}`,
        `- Accent logic: ${analysis.usesOffWhitePaperPalette ? "stay almost entirely monochrome: ink black over off-white paper with rare tonal shifts only" : "keep the palette nearly monochrome and paper-first"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, editorial pacing, paper tactility, and distraction-free reading mood.",
            "- Do not turn it into a generic minimal SaaS page.",
            "- Match the same literary-product framing, high-contrast calm, and publication-like information architecture.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a restrained masthead navigation with a paper-brand mark, archive-style links, and one minimal login button.",
            "- Build a full-height issue-cover hero with one issue stamp, one giant serif headline, one reflective subtitle, and two reading/archive actions.",
            `- Preserve ${analysis.hasRotatedLogStamp ? "the rotated infrastructure-log artifact at the page edge" : "one subtle printed artifact near the hero edge"} to reinforce the publication feeling.`,
            `- Follow with exactly ${analysis.featureCount} archive-style capability cards in a calm editorial grid.`,
            `- Build ${analysis.hasPrintTierPricing ? `a print-subscription pricing section with ${analysis.tierCount} paper-minded tiers` : "a restrained subscription comparison section"} before the footer.`,
            `- Finish with ${analysis.hasLiteraryFooter ? "a publication-style footer with sparse link columns and quiet copy" : "a sparse back-matter footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep motion minimal and intentional.",
            "- Use paper texture, black rules, subtle hover offsets, and high-contrast typography instead of glossy effects.",
            "- Preserve the off-white reading surface and the sense of quiet technical literature.",
            "- Avoid bright accent colors, dashboards, glassmorphism, or startup-style illustration blocks.",
            "- Make the page feel like a calm technical journal translated into the browser.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: paper masthead, issue-cover hero, archive capability grid, print-subscription pricing, and literary footer.",
        "- Change the product story, issue labels, feature names, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same E-Ink / Paper landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same issue-cover hero, archive-minded CTA language, calm card grid, and print-subscription framing.",
        `- Replace the ${analysis.featureCount} archive-style capability cards with offerings that fit ${resolvedProductName}, while preserving the same editorial spacing and card treatment.`,
        `- Rewrite the ${analysis.tierCount} subscription tiers so they feel credible for ${resolvedProductName} while preserving the same paper/digital/hybrid comparison logic.`,
        "- Keep the footer sparse and publication-like, but rewrite the labels and back-matter links for the new company.",
        "",
        "Strict constraints",
        "- Do not inject bright marketing colors or animated trend aesthetics.",
        "- Do not flatten the page into generic minimal startup blocks with ordinary SaaS cards.",
        "- Do not remove the paper texture, editorial serif headline, or publication issue framing.",
        "- Keep the same contemplative, literate, high-contrast reading experience throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildGenZChaosPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeGenZChaosCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: internet-core overstimulation, meme-fueled confidence, sticker-bombed anti-corporate energy, and intentional visual chaos that still converts",
        "- Typography: enormous condensed display headlines, loud uppercase labels, collage-like mixed fonts, and slang-heavy copy that feels posted rather than carefully edited",
        "- Surfaces: clashing neon blocks, white interruption cards with heavy black borders, black shadow offsets, stickers, rotation, and loud editorial collisions",
        `- Chaos system: ${analysis.hasChaosFontSystem ? "the page mixes Anton, Epilogue, and Bungee with stickers, loud cards, and raw collision-heavy spacing" : "the style depends on oversized display type, mixed fonts, and controlled collage chaos"}`,
        `- Navigation behavior: ${analysis.hasMaximalistNav ? "the nav behaves like a merch bar with rotated pills, clashing background chips, and one cult-join CTA" : "the top chrome should feel like a merch-drop control strip, not a normal navbar"}`,
        `- Hero architecture: ${analysis.hasExplosiveHero ? "the hero is a sticker-bombed explosion with a drop label, giant two-line slogan, slang CTA pair, and background noise statement" : "the hero should feel like an internet drop poster rather than a product hero"}`,
        `- Sticker field: ${analysis.hasStickerBombHero ? "floating sticker icons and background callouts should make the first screen feel unstable, loud, and hyper-shareable" : "the first screen should be crowded with sticker-like artifacts and chaotic motion cues"}`,
        `- Feature density: ${analysis.hasMessyFeatureGrid ? `exactly ${analysis.featureCount} rotated chaos cards explain the core offer` : "the mid-page section should be a rotated maximalist feature grid"}`,
        `- Pricing shell: ${analysis.hasHypeTierPricing ? `pricing is framed as a hype-drop conversion scene with exactly ${analysis.tierCount} tiers and one marked primary tier` : "pricing should feel like a hype-drop conversion wall rather than a standard SaaS table"}`,
        `- Footer architecture: ${analysis.hasChaoticFooter ? "the footer closes with a giant chaotic wordmark, loud manifesto copy, platform chips, and shouted link groups" : "the footer should feel like the final panel of an internet zine"}`,
        `- Accent logic: ${analysis.usesClashingChaosPalette ? "use clashing acid yellow, cyan, hot pink, orange, black, and white with no attempt to calm the palette" : "keep the palette loud, clashing, and intentionally overstimulating"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, visual aggression, sticker-collage rhythm, and maximalist conversion energy.",
            "- Do not clean it up into a tasteful modern landing page.",
            "- Match the same clashing internet-core mood, chaotic hierarchy, and meme-era confidence.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a merch-drop style nav with rotated utility pills and one loud cult-join CTA.",
            "- Build a full-height hero with a drop label, giant two-line slogan, loud slang subtitle, and two oversized chaotic buttons.",
            `- Preserve ${analysis.hasStickerBombHero ? "the floating sticker-bomb icon field and giant background statement" : "a loud sticker field around the hero"} so the page feels unstable in the intended way.`,
            `- Follow with exactly ${analysis.featureCount} rotated chaos cards in a loud maximalist feature grid.`,
            `- Build ${analysis.hasHypeTierPricing ? `a hype-tier pricing wall with ${analysis.tierCount} plans and one “most steeze” primary tier` : "a drop-style pricing wall"} before the footer.`,
            `- Finish with ${analysis.hasChaoticFooter ? "a giant chaotic footer with manifesto copy and link clusters" : "a loud internet-zine footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep borders heavy, cards rotated, colors clashing, and CTAs shamelessly loud.",
            "- Use sticker motion, contrasting chips, oversized type, and raw phrases instead of polished enterprise copy.",
            "- Preserve the feeling of internet chaos that is still intentionally composed enough to navigate.",
            "- Avoid soft minimalism, restrained corporate spacing, or elegant neutral systems.",
            "- Make the page feel like a viral drop poster exploded into a landing page.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: merch-drop nav, sticker-bomb hero, rotated chaos-card grid, hype-tier pricing, and manifesto footer.",
        "- Change the slogans, product story, feature names, pricing copy, sticker text, and footer links so they fit the new product.",
        "- The final result should feel like the same Gen Z Chaos / Maximalism landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same merch-drop nav, explosive hero, rotated feature grid, hype-tier pricing wall, and chaotic footer structure.",
        `- Replace the ${analysis.featureCount} chaos cards with loud capabilities that fit ${resolvedProductName}, while preserving the same rotated-card rhythm and maximalist hierarchy.`,
        `- Rewrite the ${analysis.tierCount} pricing tiers and their conversion framing so they feel native to ${resolvedProductName} while preserving the same hype-drop attitude.`,
        "- Keep the footer loud and internet-zine-like, but rewrite the manifesto copy, social/platform labels, and link groups for the new company.",
        "",
        "Strict constraints",
        "- Do not clean the interface into tasteful contemporary minimalism.",
        "- Do not neutralize the palette, remove the sticker field, or smooth out the slang-heavy aggression.",
        "- Do not replace the collage-like, rotated, clashing composition with orderly SaaS sections.",
        "- Keep the same loud, funny, overstimulated, viral-internet energy throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildBiomimeticOrganicPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeBiomimeticOrganicCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: calm living-system intelligence, sustainable future-tech optimism, soft ecological sophistication, and biological growth metaphors instead of mechanical efficiency theater",
        "- Typography: rounded modern sans for structure, friendlier organic support typography, large softened display headlines, and language that feels adaptive rather than hard-sell",
        "- Surfaces: light organic gradients, translucent glass-like rounded shells, large biomorphic corners, glowing green accents, and deep earthy dark-green footer grounding",
        `- Organic motion system: ${analysis.hasMorphingBlobSystem ? "the page uses morphing blobs, breathing motion, and soft surface tension hover cues to feel alive" : "the design should imply living organic motion through blobs and breathing surfaces"}`,
        `- Navigation behavior: ${analysis.hasNatureNav ? "the top nav behaves like a soft ecological brand bar with ecosystem-style links and one growth CTA" : "the top chrome should feel like a living-system product nav"}`,
        `- Hero architecture: ${analysis.hasVitalityHero ? "the first screen opens with a vitality status pill, a giant nature-led headline, one calm supporting paragraph, and soft rounded CTAs" : "the hero should feel like a breathing biotech manifesto rather than a standard SaaS opener"}`,
        `- Secondary cues: ${analysis.hasTaxonomyCtas ? "the calls to action are framed as evolution and taxonomy rather than signup and demo" : "call-to-action language should use evolution/taxonomy metaphors"}`,
        `- Scroll cue: ${analysis.hasFlowIndicator ? "a minimal flow indicator at the bottom suggests gentle progression instead of aggressive conversion pressure" : "one subtle flow cue should guide the user downward"}`,
        `- Feature density: ${analysis.hasOrganicArchitectureGrid ? `exactly ${analysis.featureCount} organic glass capability cards form the ecosystem grid` : "the mid-page section should be a soft biomorphic capability grid"}`,
        `- Pricing shell: ${analysis.hasVitalityTierPricing ? `pricing is framed as vitality tiers with exactly ${analysis.tierCount} growth stages and one peak-vitality emphasis` : "pricing should behave like a growth-stage system rather than a typical SaaS plan table"}`,
        `- Footer architecture: ${analysis.hasEarthyFooter ? "the footer becomes a grounded dark-earth habitat with pill tags and ecosystem/evolution link groups" : "the footer should feel like the rooted ground of the system"}`,
        `- Accent logic: ${analysis.usesBiomorphicPalette ? "greens, plant neutrals, and light aqueous blues should dominate, with dark evergreen used for grounding and authority" : "keep the palette nature-led, soft, and growth-oriented"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, biomorphic softness, organic motion, and eco-system storytelling.",
            "- Do not flatten it into a generic green SaaS page.",
            "- Match the same living-interface mood, biological metaphors, and calm future-tech optimism.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a soft organic nav with a circular leaf mark, ecosystem-oriented links, and one growth CTA.",
            "- Build a full-height hero with a vitality status pill, giant nature-led headline, one calm explanatory paragraph, and two soft rounded CTAs.",
            `- Preserve ${analysis.hasFlowIndicator ? "the subtle bottom flow indicator" : "one gentle downward flow cue"} so the page keeps its breathing rhythm.`,
            `- Follow with exactly ${analysis.featureCount} rounded organic-glass capability cards in a living ecosystem grid.`,
            `- Build ${analysis.hasVitalityTierPricing ? `a vitality-tier pricing section with ${analysis.tierCount} growth stages and one “peak vitality” plan` : "a growth-stage pricing section"} before the footer.`,
            `- Finish with ${analysis.hasEarthyFooter ? "a dark grounded footer with soft pills and sparse ecosystem link groups" : "a dark earthy footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep corners large and biomorphic, motion slow and breathable, and surfaces airy.",
            "- Use morphing blobs, soft glass, and growth metaphors instead of dashboards, grids, or rigid enterprise chrome.",
            "- Preserve the feeling of an adaptive living system rather than a technical machine.",
            "- Avoid hard borders, monochrome austerity, neon cyber language, or dense data-table sections.",
            "- Make the page feel like infrastructure designed by ecological principles.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: organic gradient atmosphere, vitality hero, biomorphic glass capability cards, growth-stage pricing, and earthy footer.",
        "- Change the product story, capability names, vitality labels, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Biomimetic / Organic 2.0 landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same vitality-first hero framing, evolution/taxonomy CTA language, organic card grid, and growth-stage pricing structure.",
        `- Replace the ${analysis.featureCount} capability cards with offerings that fit ${resolvedProductName}, while preserving the same rounded organic card rhythm and living-system metaphors.`,
        `- Rewrite the ${analysis.tierCount} growth-stage plans and supporting bullets so they feel credible for ${resolvedProductName} while preserving the same biomimetic vocabulary.`,
        "- Keep the grounded dark footer and ecosystem/evolution link group structure, but rewrite labels for the new company.",
        "",
        "Strict constraints",
        "- Do not harden the page into a sharp enterprise dashboard or ordinary sustainable-brand website.",
        "- Do not remove the biomorphic corners, blob motion, or vitality/growth framing.",
        "- Do not replace the ecological palette with aggressive neon or strict monochrome systems.",
        "- Keep the same living, adaptive, bio-inspired feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildAntiPolishRawPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeAntiPolishRawCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: stripped-down system truth, anti-marketing bluntness, engineering-first transparency, and no-bullsh*t documentation attitude rather than polished product theater",
        "- Typography: monospaced technical voice, uppercase system labels, simple sans support text, and dense utilitarian copy that feels logged rather than advertised",
        "- Surfaces: white paper-like field, black rules, zero rounded corners, no shadows, no smooth transitions, grid background, and one stark black pricing block",
        `- Raw system behavior: ${analysis.hasRawFontSystem && analysis.hasNoTransitionRule ? "the page explicitly removes smooth transitions and leans on mono/sans system typography over a visible grid scaffold" : "the style depends on visible scaffolding, no transitions, and raw system typography"}`,
        `- Navigation behavior: ${analysis.hasSystemNav ? "the top nav behaves like a system UI header with docs/specs/logs and one system-stable indicator" : "the top chrome should feel like a system shell rather than a branded navbar"}`,
        `- Hero architecture: ${analysis.hasRawHero ? "the hero is pure text: one build stamp, a brutally direct headline, a terse uppercase explainer, and two command-like CTAs" : "the hero should feel like a raw command sheet rather than a polished hero composition"}`,
        `- Status artifact: ${analysis.hasTerminalStatusBlock ? "a low-contrast terminal status block sits in the hero corner like real ops output" : "one ops-status artifact should sit around the hero as raw evidence"}`,
        `- Feature density: ${analysis.hasExposedLogicGrid ? `exactly ${analysis.featureCount} exposed-logic cells appear in a rigid border grid` : "the mid-page section should be a strict exposed-logic border grid"}`,
        `- Benchmark section: ${analysis.hasBenchmarkTable ? `the page includes a real benchmarking table with exactly ${analysis.benchmarkRowCount} rows of cluster data` : "a later section should include a stark benchmarking table"}`,
        `- Pricing shell: ${analysis.hasTierAccessPricing ? `pricing flips to a black access block with exactly ${analysis.tierCount} stark tiers` : "pricing should become a stark black access block rather than a glossy pricing section"}`,
        `- Footer architecture: ${analysis.hasRawFooter ? "the footer closes as an end-log block with source links and compliance/navigation groups" : "the footer should feel like end logs and documentation links"}`,
        `- Accent logic: ${analysis.usesBlackWhiteGridPalette ? "stay almost entirely black, white, gray, and system-status green/red cues only where operationally necessary" : "keep the palette brutally restrained and system-oriented"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, raw-system tone, visible grid discipline, and anti-polished bluntness.",
            "- Do not beautify it into a nice minimal SaaS page.",
            "- Match the same exposed logic, operational honesty, and unsoftened engineering feel.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a stark system nav with a terminal-like brand block, docs/specs/logs links, and one system-stable indicator.",
            "- Build a full-height text-led hero with a build stamp, one brutally direct multiline headline, a terse uppercase explainer, and two command-style CTAs.",
            `- Preserve ${analysis.hasTerminalStatusBlock ? "the corner status-log artifact" : "one small ops-status artifact"} so the page feels operational rather than promotional.`,
            `- Follow with exactly ${analysis.featureCount} exposed-logic cells in a border-grid section.`,
            `- Add a benchmarking table with ${analysis.benchmarkRowCount} rows of system data and stark hover-state row inversion.`,
            `- Build ${analysis.hasTierAccessPricing ? `a black tier-access pricing block with ${analysis.tierCount} plans` : "a stark access-pricing block"} before the footer.`,
            `- Finish with ${analysis.hasRawFooter ? "an end-logs footer with source and compliance groups" : "a sparse documentation footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep everything square, raw, immediate, and mostly monochrome.",
            "- Use visible rules, tables, grid backgrounds, and command labels instead of shadows, blur, or decorative softness.",
            "- Preserve the feeling of a build sheet or system document, not a refined marketing artifact.",
            "- Avoid friendly illustrations, rounded cards, glass effects, or high-emotion brand polish.",
            "- Make the page feel like infrastructure presented without cosmetic mediation.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: system nav, raw text hero, exposed-logic border grid, benchmarking table, and stark black pricing block.",
        "- Change the product story, feature names, cluster/table data, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Anti-Polish / Raw Aesthetic landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same build-stamp hero, ops-status artifact, exposed-logic grid, benchmarking table, and tier-access pricing structure.",
        `- Replace the ${analysis.featureCount} exposed-logic cells with capabilities that fit ${resolvedProductName}, while preserving the same raw border-grid rhythm.`,
        `- Rewrite the benchmarking table with ${analysis.benchmarkRowCount} rows and the ${analysis.tierCount} pricing tiers so they feel credible for ${resolvedProductName} while preserving the same operational-document tone.`,
        "- Keep the footer as sparse end logs with source/compliance groupings, but rewrite the labels for the new company.",
        "",
        "Strict constraints",
        "- Do not make the page smooth, elegant, or premium-minimal.",
        "- Do not add rounded surfaces, softened hover motion, or decorative marketing imagery.",
        "- Do not remove the visible grid scaffold, table logic, or anti-bullsh*t language.",
        "- Keep the same raw, transparent, no-cosmetic-layer feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildTactileDigitalPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeTactileDigitalCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: glossy physical-digital play, squishy mass, tactile delight, depth-heavy interaction, and premium consumer-tech softness rather than enterprise austerity",
        "- Typography: bold modern geometric sans, huge softened display type, crisp labels, and interaction copy that speaks in terms of touch, layers, and density",
        "- Surfaces: pale indigo-white environment, jelly-like shadows, inset pressure states, liquid-glass cards, soft gradients, and rounded forms everywhere",
        `- Tactile system: ${analysis.hasTactileStyleSystem ? "the page explicitly defines squishy-shadow, liquid-glass, and spring-like active states to simulate touch pressure" : "the style depends on pressure-reactive shadows and rounded tactile surfaces"}`,
        `- Deformation engine: ${analysis.hasDeformableOrbSystem ? "large deformable background orbs and floating components create a sense of soft physical mass" : "the background should imply soft deformation and buoyant depth"}`,
        `- Navigation behavior: ${analysis.hasNeomorphicNav ? "the nav behaves like a soft neomorphic control strip with tactile tabs and one press-to-start button" : "the top chrome should feel like a tactile control surface"}`,
        `- Hero architecture: ${analysis.hasFrictionHero ? "the first screen centers on one massive headline about interface friction, one tactile primary CTA, one exploratory text CTA, and a floating component specimen" : "the hero should frame the product as a physical digital object, not a flat website"}`,
        `- Touch actions: ${analysis.hasPrimaryTouchCtas ? "primary actions are framed as getting hands on the product and exploring its density" : "CTA language should stay touch-led and physical"}`,
        `- Specimen object: ${analysis.hasFloatingComponentBox ? "one floating liquid-glass specimen card demonstrates layered tactile modules inside the hero" : "the hero should include one floating tactile specimen object"}`,
        `- Feature density: ${analysis.hasTactileNodesGrid ? `exactly ${analysis.featureCount} tactile-node cards make up the feature section` : "the mid-page section should be a tactile-node grid"}`,
        `- Pricing shell: ${analysis.hasVolumeAccessPricing ? `pricing is framed as volume access with exactly ${analysis.tierCount} density tiers and one “most fluid” emphasis` : "pricing should behave like density-based access tiers rather than a standard SaaS table"}`,
        `- Footer architecture: ${analysis.hasSoftEndingFooter ? "the footer closes softly with tactile pills and two high-level link groups about surface and core" : "the footer should feel like a soft decompression zone"}`,
        `- Accent logic: ${analysis.usesIndigoJellyPalette ? "soft indigo, violet, cyan, white, and pale gray should dominate, with gradients used for sensory emphasis" : "keep the palette airy, glossy, and tactile"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, tactile depth, squishy interaction language, and physical-digital softness.",
            "- Do not flatten it into a normal soft-SaaS landing page.",
            "- Match the same friction-led narrative, liquid-glass specimen staging, and pressure-reactive UI feeling.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a soft neomorphic nav with a squishy logo tile, rounded utility links, and one press-to-start CTA.",
            "- Build a full-height hero with a giant friction-led headline, one tactile primary CTA, one secondary exploration CTA, and a floating component specimen object.",
            `- Preserve ${analysis.hasFloatingComponentBox ? "the floating glass specimen box with small internal modules" : "one floating tactile specimen object"} so the page feels physically demonstrative.`,
            `- Follow with exactly ${analysis.featureCount} tactile-node cards in a rounded, depth-heavy grid.`,
            `- Build ${analysis.hasVolumeAccessPricing ? `a volume-access pricing section with ${analysis.tierCount} tactile tiers and one “most fluid” plan` : "a density-based pricing section"} before the footer.`,
            `- Finish with ${analysis.hasSoftEndingFooter ? "a soft tactile footer with surface/core link groups" : "a soft decompression footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep corners large, depth soft, hover states springy, and active states pressure-based.",
            "- Use layered shadows, liquid-glass panels, floating modules, and deformable background shapes instead of flat cards.",
            "- Preserve the feeling that components have mass, softness, and reactive texture.",
            "- Avoid hard borders, monochrome severity, or cold dashboard aesthetics.",
            "- Make the page feel like a product you could physically press.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: tactile neomorphic nav, friction-led hero, floating glass specimen, tactile-node grid, and density-based pricing.",
        "- Change the product story, feature names, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Tactile Digital / Deformable UI landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same pressure-led CTA language, floating specimen object, tactile-node grid, and volume-access pricing structure.",
        `- Replace the ${analysis.featureCount} tactile-node cards with capabilities that fit ${resolvedProductName}, while preserving the same rounded mass-and-depth rhythm.`,
        `- Rewrite the ${analysis.tierCount} pricing tiers and their supporting bullets so they feel credible for ${resolvedProductName} while preserving the same tactile density framing.`,
        "- Keep the footer soft and tactile with surface/core groupings, but rewrite labels for the new company.",
        "",
        "Strict constraints",
        "- Do not simplify the style into generic neumorphism or soft enterprise SaaS.",
        "- Do not remove the squishy interaction language, deformable shapes, or floating specimen object.",
        "- Do not replace the glossy tactile palette with neutral monochrome or harsh geometric systems.",
        "- Keep the same sensual, touch-forward digital-material feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildNatureDistilledPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeNatureDistilledCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: warm artisan stillness, premium wellness restraint, muted earthy sophistication, and serene humanist storytelling rather than overt tech energy",
        "- Typography: humanist sans for UI, elegant italic serif for statements, soft uppercase metadata labels, and copy that feels meditative and refined",
        "- Surfaces: sand and stone neutrals, terracotta/olive/earth accents, translucent stone cards, subtle grain texture overlays, and large fields of warm negative space",
        `- Material system: ${analysis.hasDistilledFontSystem && analysis.hasNatureTextureLayer ? "the page combines grain-softened earthy surfaces, blurred stone cards, and serif/sans contrast to create a distilled natural atmosphere" : "the style depends on earthy surfaces, subtle texture, and serif-led refinement"}`,
        `- Navigation behavior: ${analysis.hasZenMinimalNav ? "the nav behaves like a quiet zen brand bar with tiny spaced labels and one begin-silence CTA" : "the top chrome should feel quiet, minimal, and ceremonial"}`,
        `- Hero architecture: ${analysis.hasDistilledHero ? "the first screen is a distilled statement piece with one small metadata line, one large serif-led claim, and two very restrained CTAs" : "the hero should feel like a meditative brand statement rather than a conversion-heavy opener"}`,
        `- CTA language: ${analysis.hasSilenceCtas ? "the calls to action are framed as distillation and provenance rather than signup and demo" : "CTA language should remain poetic, quiet, and provenance-oriented"}`,
        `- Scroll cue: ${analysis.hasStillnessCue ? "a tiny stillness cue at the bottom reinforces the slow contemplative pacing" : "one quiet cue should reinforce still contemplative pacing"}`,
        `- Feature density: ${analysis.hasPurityGrid ? `exactly ${analysis.featureCount} stone-card essentials form the main grid` : "the mid-page section should be a serene stone-card essentials grid"}`,
        `- Pricing shell: ${analysis.hasSilentTierPricing ? `pricing is framed as a commitment ritual with exactly ${analysis.tierCount} silent tiers` : "pricing should feel ceremonial and restrained rather than sales-heavy"}`,
        `- Footer architecture: ${analysis.hasSereneFooter ? "the footer closes with a serene brand block, a muted manifesto line, and two calm link columns about elements and synthesis" : "the footer should feel like a quiet closing ritual"}`,
        `- Accent logic: ${analysis.usesEarthyMutedPalette ? "use terracotta-adjacent warm earth neutrals, muted olive greens, soft cream, and warm stone tones with very low saturation" : "keep the palette muted, earthy, and artisan"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, muted-earth atmosphere, serif-led serenity, and artisan stillness.",
            "- Do not turn it into a generic organic SaaS page.",
            "- Match the same nature-distilled restraint, quiet hierarchy, and premium wellness-like calm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a very quiet nav with a floral mark, tiny spaced labels, and one rounded begin-silence CTA.",
            "- Build a full-height hero with one small metadata line, one giant serif-led claim, one restrained paragraph, and two very quiet actions.",
            `- Preserve ${analysis.hasStillnessCue ? "the stillness cue at the bottom of the hero" : "one small contemplative scroll cue"} so the pacing remains meditative.`,
            `- Follow with exactly ${analysis.featureCount} stone-card essentials in a spacious serene grid.`,
            `- Build ${analysis.hasSilentTierPricing ? `a silent-tier pricing section with ${analysis.tierCount} plans and ceremonial spacing` : "a restrained commitment-focused pricing section"} before the footer.`,
            `- Finish with ${analysis.hasSereneFooter ? "a serene footer with elements and synthesis columns" : "a calm closing footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep motion minimal, easing soft, and hover states understated.",
            "- Use warm earthy colors, grain texture, translucent stone cards, and serif-led elegance instead of bright UI polish.",
            "- Preserve the feeling of silence, provenance, and natural refinement.",
            "- Avoid high-energy product language, neon accents, or hard enterprise grids.",
            "- Make the page feel like an artisan object shaped from natural materials.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: quiet zen nav, distilled statement hero, stone-card essentials grid, silent-tier pricing, and serene footer.",
        "- Change the product story, feature names, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Nature Distilled landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same distilled metadata line, serif-led hero, provenance/distillation CTA language, and serene essentials grid.",
        `- Replace the ${analysis.featureCount} essentials cards with offerings that fit ${resolvedProductName}, while preserving the same stone-card rhythm and meditative spacing.`,
        `- Rewrite the ${analysis.tierCount} pricing tiers and supporting bullets so they feel credible for ${resolvedProductName} while preserving the same quiet commitment framing.`,
        "- Keep the footer serene with elements/synthesis style groupings, but rewrite labels for the new company.",
        "",
        "Strict constraints",
        "- Do not energize the page into modern startup minimalism or wellness cliche overload.",
        "- Do not remove the serif-led stillness, muted earth palette, or ceremonial CTA language.",
        "- Do not introduce harsh contrast, bright chroma, or aggressive interaction states.",
        "- Keep the same distilled, grounded, artisan-natural feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildInteractiveCursorPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeInteractiveCursorCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: dark experimental immersion, pointer-led discovery, high-contrast void aesthetics, and interaction-as-brand rather than static visual decoration",
        "- Typography: techno display font for all major labels, crisp modern sans for support copy, tiny uppercase protocol labels, and sparse interface language that rewards curiosity",
        "- Surfaces: almost entirely black with white type, ultra-thin lines, reveal masks, glow fields, and cursor-driven inversion rather than colorful cards",
        `- Cursor engine: ${analysis.hasCustomCursorEngine ? "the page uses a custom direct-DOM cursor, trailing ring, moving glow, reveal mask, and requestAnimationFrame loop inside the demo container" : "the style depends on a custom cursor engine with glow, ring, and reveal interactions"}`,
        `- Font system: ${analysis.hasCursorFontSystem ? "Syncopate and Plus Jakarta Sans create the whole contrast between techno chrome and readable support text" : "a techno display font should pair with a clean sans support font"}`,
        `- Navigation behavior: ${analysis.hasVoidNav ? "the nav behaves like a sparse protocol bar with hover-reactive cursor text and one connect-style CTA" : "the top chrome should feel like a protocol layer activated by the cursor"}`,
        `- Hero architecture: ${analysis.hasRevealHero ? "the hero is a reveal-driven statement where the cursor uncovers imagery behind giant immersive type" : "the first screen should revolve around a cursor-controlled reveal statement, not a normal hero"}`,
        `- Intent proof: ${analysis.hasFluxMetricBlock ? "a small flux metric block and directional-stat moment sit below the hero statement to prove the cursor logic" : "one small intent-mapping proof block should appear beneath the hero"}`,
        `- Feature density: ${analysis.hasCoreLogicGrid ? `exactly ${analysis.featureCount} pointer-sensitive logic panels form the feature section` : "the mid-page section should be a pointer-sensitive feature grid"}`,
        `- Pricing shell: ${analysis.hasVoidTierPricing ? `pricing is framed as a void-grid of exactly ${analysis.tierCount} tiers with one central architect plan` : "pricing should feel like a protocol / void access grid rather than a normal SaaS table"}`,
        `- Footer architecture: ${analysis.hasIntentFooter ? "the footer closes with a low-contrast manifesto line and two sparse columns called protocol and void" : "the footer should feel like a dark protocol epilogue"}`,
        `- Accent logic: ${analysis.usesBlackAndWhiteCursorPalette ? "stay overwhelmingly black and white, using cursor inversion, opacity shifts, and reveal masks as the main source of dynamism" : "keep the palette ultra-restrained and interaction-led"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, pointer-led interaction, custom-cursor behavior, and dark immersive atmosphere.",
            "- Do not reduce it to a nice dark landing page with ordinary hover states.",
            "- Match the same interaction-first storytelling and cursor-as-interface behavior.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for desktop first, while degrading gracefully where cursor-specific interactions cannot exist.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a sparse dark nav with a protocol-style logo treatment, tiny utility links, and one connect-style CTA that changes the custom cursor label on hover.",
            "- Build a full-height reveal-driven hero where giant immersive typography sits above a cursor-controlled image reveal field.",
            `- Include ${analysis.hasFluxMetricBlock ? "the small directional-flux metric block" : "one small intent metric block"} and one circular go-style action below the hero statement.`,
            `- Follow with exactly ${analysis.featureCount} pointer-sensitive logic panels in a hard-edged black grid.`,
            `- Build ${analysis.hasVoidTierPricing ? `a void-tier access block with ${analysis.tierCount} plans and one emphasized architect tier` : "a void/protocol-style pricing grid"} before the footer.`,
            `- Finish with ${analysis.hasIntentFooter ? "a dark epilogue footer with protocol and void columns" : "a sparse dark protocol footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep the custom cursor, ring, reveal mask, and hover-text behavior central to the experience.",
            "- Use black, white, opacity, and reveal mechanics instead of colorful interface ornaments.",
            "- Preserve the feeling that meaning is uncovered by movement and intent, not immediately shown.",
            "- Avoid soft rounded consumer cards, glossy gradients, or generic animated dashboards.",
            "- Make the page feel like a creative interactive experience rather than a standard landing page.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: custom cursor engine, reveal-driven hero, pointer-sensitive feature grid, void tiering, and sparse dark footer.",
        "- Change the product story, hover labels, feature names, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Interactive Cursor Design landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same cursor-text hover behavior, reveal hero, pointer-reactive logic grid, and void/protocol tiering structure.",
        `- Replace the ${analysis.featureCount} feature panels with capabilities that fit ${resolvedProductName}, while preserving the same interaction-led reveal rhythm.`,
        `- Rewrite the ${analysis.tierCount} pricing tiers and protocol labels so they feel credible for ${resolvedProductName} while preserving the same cursor-first immersive framing.`,
        "- Keep the footer dark and sparse with protocol/void style groupings, but rewrite labels for the new company.",
        "",
        "Strict constraints",
        "- Do not flatten the experience into ordinary hover cards and a static hero image.",
        "- Do not remove the custom cursor, reveal mask, or intent-led interaction language.",
        "- Do not brighten the palette or replace the severe black-white system with colorful brand surfaces.",
        "- Keep the same immersive cursor-driven discovery feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildVoiceMultimodalPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeVoiceMultimodalCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: sonic-futurist calm, ambient AI confidence, multimodal orchestration, and voice-led product theater rather than dashboard-heavy SaaS presentation",
        "- Typography: expressive grotesque display font for hero and section titles, clean sans for support copy, tiny uppercase utility labels, and language centered on sound, modality, and listening",
        "- Surfaces: deep near-black environment, purple-pink glows, soft glass cards, waveform visualizers, and rounded audio-control objects",
        `- Sonic system: ${analysis.hasSonicFontSystem ? "the page explicitly defines waveform bars, sonic glow, and audio-reactive chrome through custom styles" : "the design depends on waveform bars, sonic glow, and audio-led visualizers"}`,
        `- CTA treatment: ${analysis.hasAuraButtonSystem ? "primary CTAs are luminous aura buttons with soft scale and glow expansion" : "primary actions should glow like audio activation controls"}`,
        `- Navigation behavior: ${analysis.hasVoiceNav ? "the nav behaves like a minimal multimodal control bar with one audio-enable action" : "the top chrome should feel like a multimodal control surface"}`,
        `- Hero architecture: ${analysis.hasListeningHero ? "the hero centers on a pulsing sonic core with waveform bars, AI-listening status, huge sound-led headline, and two activation/watch CTAs" : "the first screen should feel like an active listening core rather than a conventional hero"}`,
        `- Waveform cue: ${analysis.hasWaveformCore ? "animated waveform bars and pulsing rings must make the hero feel like a living voice interface" : "waveform-like motion should drive the hero mood"}`,
        `- Feature density: ${analysis.hasTriadGrid ? `exactly ${analysis.featureCount} modality cards explain the core triad of voice, vision, and logic` : "the feature section should be a small multimodal triad, not a large generic grid"}`,
        `- Analytics block: ${analysis.hasSonicAnalyticsBlock ? `a later analytics section pairs sonic-architecture copy with ${analysis.metricCount} core audio metrics and a live spectrum visualizer` : "the page should include a sonic analytics block with a spectrum-style visualizer"}`,
        `- Footer architecture: ${analysis.hasMultiverseFooter ? "the footer closes with a soft multiverse manifesto and two columns called channels and core" : "the footer should feel like a multimodal epilogue"}`,
        `- Accent logic: ${analysis.usesPurplePinkAudioPalette ? "lean on purple, pink, black, white, and subtle blue-toned glows with audio-reactive emphasis" : "keep the palette nocturnal and audio-reactive"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, sonic atmosphere, multimodal clarity, and voice-first product framing.",
            "- Do not turn it into a generic AI landing page with chat bubbles or dashboard screenshots.",
            "- Match the same pulsing-audio hero, triad of intent structure, and spectrum-led analytics mood.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create a dark minimal nav with a small sonic brand marker, multimodal utility links, and one enable-audio action.",
            "- Build a full-height hero centered on one glowing sonic core with waveform bars, pulsing rings, an AI-listening status chip, and a large sound-led headline.",
            `- Add exactly ${analysis.featureCount} multimodal cards representing the core triad beneath the hero narrative layer.`,
            `- Follow with ${analysis.hasSonicAnalyticsBlock ? `a large sonic-architecture analytics block containing ${analysis.metricCount} metrics and a spectrum visualizer` : "a large sonic analytics block with metrics and a spectrum visualizer"}.`,
            `- Finish with ${analysis.hasMultiverseFooter ? "a dark multimodal footer with channels/core columns" : "a dark multimodal epilogue footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep the page nocturnal, atmospheric, and audio-reactive.",
            "- Use waveform bars, soft glows, pulsing rings, rounded audio chrome, and glass-like cards instead of generic AI illustrations.",
            "- Preserve the sense that the product is listening, interpreting, and orchestrating across modalities.",
            "- Avoid corporate blue SaaS styling, chatbot bubbles, or dense data-heavy dashboard modules.",
            "- Make the page feel like a voice-led operating layer for modern software.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: sonic-core hero, listening status, multimodal triad cards, audio-analytics visualizer, and dark channels/core footer.",
        "- Change the product story, modality labels, feature names, metrics, and footer copy so they fit the new product.",
        "- The final result should feel like the same Voice-First Multimodal landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same listening-core hero framing, multimodal triad structure, sonic analytics block, and channels/core footer architecture.",
        `- Replace the ${analysis.featureCount} modality cards with capabilities that fit ${resolvedProductName}, while preserving the same triad-based logic and card rhythm.`,
        `- Rewrite the sonic-architecture section and its ${analysis.metricCount} key metrics so they feel credible for ${resolvedProductName} while preserving the same audio-led analytical framing.`,
        "- Keep the footer dark and atmospheric with channels/core groupings, but rewrite the labels for the new company.",
        "",
        "Strict constraints",
        "- Do not reduce the style to a generic AI chatbot aesthetic or assistant dashboard.",
        "- Do not remove the waveform bars, listening state, or sonic spectrum visualizer.",
        "- Do not replace the purple-pink nocturnal palette with flat enterprise branding.",
        "- Keep the same voice-first, multimodal, sound-reactive feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildProduct3DPreviewPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeProduct3DPreviewCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: premium industrial showroom, spatial hardware confidence, productized engineering drama, and high-conversion 3D workbench energy rather than flat SaaS messaging",
        "- Typography: Space Grotesk for major industrial headlines and labels, DM Sans for support copy, uppercase metadata tags, and concise hardware-spec language",
        "- Surfaces: near-black studio environment, indigo-lit accents, dark machine panels, reflective floor gradients, and crisp hardware edges with subtle rounded industrial corners",
        `- 3D system: ${analysis.has3DStyleSystem ? "the page explicitly defines a perspective container, rotatable 3D product shell, side plates, and studio-light environment" : "the design depends on perspective staging, rotatable product depth, and studio-light presentation"}`,
        `- Interaction engine: ${analysis.hasRotationState ? "mouse position directly updates product rotation, so the central object must feel inspectable and alive" : "the main product should feel rotatable and physically inspectable"}`,
        `- Navigation behavior: ${analysis.hasIndustrialNav ? "the nav behaves like an industrial product header with physical layers, specifications, assembly links, and one order-license action" : "the top chrome should feel like an industrial product configurator header"}`,
        `- Hero architecture: ${analysis.hasWorkbenchHero ? "the hero splits into a left spec column and a central 3D object stage with a workbench CTA" : "the hero should feel like a 3D workbench reveal rather than a normal marketing hero"}`,
        `- Spec density: exactly ${analysis.specCount} left-side spec labels establish the hardware language before the user reaches the main content`,
        `- Core object: ${analysis.hasRotatableObject ? "the centerpiece is a rotatable product object with sync state, rendering bar, and status plate" : "the main stage should center on one detailed 3D product object with system state"}`,
        `- Module density: ${analysis.hasStructuralUnitsGrid ? `exactly ${analysis.moduleCount} structural module cards form the assembly grid` : "the mid-page section should be a structural module grid"}`,
        `- Pricing shell: ${analysis.hasHardwarePricing ? `pricing is framed as a hardware-license block with exactly ${analysis.tierCount} industrial units` : "pricing should behave like hardware licensing rather than SaaS subscriptions"}`,
        `- Footer architecture: ${analysis.hasAssemblyFooter ? "the footer closes as an industrial core with modules and assembly columns" : "the footer should feel like an assembly manual epilogue"}`,
        `- Accent logic: ${analysis.usesIndigoStudioPalette ? "use indigo as the only strong accent against black, charcoal, and machine-metal neutrals" : "keep the palette studio-dark with one technical accent"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, spatial staging, rotatable product presentation, and industrial showroom tone.",
            "- Do not flatten it into a generic dark SaaS page.",
            "- Match the same hardware-spec hierarchy, central 3D object drama, and assembly-license conversion flow.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create an industrial minimal nav with machine-like brand chrome, tiny uppercase links, and one order-license action.",
            "- Build a hero that splits between a left spec column and a central 3D object stage with one workbench CTA.",
            `- Preserve the ${analysis.specCount} spec labels on the left and the rotatable product centerpiece with sync/status plates in the center.`,
            `- Follow with exactly ${analysis.moduleCount} structural module cards in a dark assembly grid.`,
            `- Build ${analysis.hasHardwarePricing ? `a hardware-license pricing section with ${analysis.tierCount} industrial tiers` : "an industrial hardware pricing section"} before the footer.`,
            `- Finish with ${analysis.hasAssemblyFooter ? "an assembly-style footer with modules and assembly columns" : "an industrial documentation footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep the central product stage inspectable, premium, and spatially convincing.",
            "- Use perspective, studio light, reflective floor cues, hard edges, and machine-status language instead of soft SaaS card tropes.",
            "- Preserve the feeling of a high-end hardware configurator or 3D workbench.",
            "- Avoid playful color systems, glassy consumer bubbles, or dashboard-heavy enterprise layouts.",
            "- Make the page feel like a product object is the main character.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: industrial nav, left-side spec column, rotatable 3D product stage, module assembly grid, and hardware-license pricing.",
        "- Change the product story, spec labels, module names, pricing copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same 3D Product Preview landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same spec-column plus rotatable-object composition, module grid, and hardware-license framing.",
        `- Replace the ${analysis.specCount} hero spec labels and ${analysis.moduleCount} assembly modules with concepts that fit ${resolvedProductName}, while preserving the same industrial hierarchy.`,
        `- Rewrite the ${analysis.tierCount} pricing tiers and footer labels so they feel credible for ${resolvedProductName} while preserving the same product-workbench framing.`,
        "- Keep the footer industrial with modules/assembly groupings, but rewrite the labels for the new company.",
        "",
        "Strict constraints",
        "- Do not turn the page into a generic ecommerce product page with photos and buy-now cards only.",
        "- Do not remove the rotatable 3D centerpiece, spec-column structure, or hardware-language hierarchy.",
        "- Do not replace the studio-dark indigo system with soft pastel SaaS styling.",
        "- Keep the same premium spatial-product feeling throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildAuroraEvolvedPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeAuroraEvolvedCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: airy light-mode futurism, chromatic clarity, polished gradient diffusion, and uplifting atmospheric softness rather than dark cyber drama",
        "- Typography: bold Outfit-led headlines, clean Inter support copy, tiny uppercase utility labels, and a balance of futuristic confidence with approachable clarity",
        "- Surfaces: frosted white glass cards, luminous light-mode aurora blobs, translucent gradients, white-to-emerald-indigo diffusion, and very soft depth shadows",
        `- Aurora system: ${analysis.hasAuroraBlobSystem ? "the page explicitly defines animated blurred aurora blobs, vibrant gradient text, and glass-card hover behavior" : "the style depends on light aurora blobs, glass cards, and chromatic text diffusion"}`,
        `- Navigation behavior: ${analysis.hasLightAuroraNav ? "the nav behaves like an ethereal light control bar with tiny diffusion links and one glass sign-in action" : "the top chrome should feel airy, light, and aurora-infused"}`,
        `- Hero architecture: ${analysis.hasDiffusionHero ? "the hero uses one small diffusion status pill, a giant two-line headline with a vibrant gradient word, and two soft contrasting CTAs" : "the hero should feel like a clean atmospheric diffusion statement rather than a standard SaaS hero"}`,
        `- CTA rhythm: ${analysis.hasHeroCtas ? "one strong dark CTA balances one frosted watch-motion CTA" : "CTA treatment should contrast a solid action with a glass secondary action"}`,
        `- Feature density: ${analysis.hasGlassGrid ? `exactly ${analysis.featureCount} glass capability cards form the main grid` : "the mid-page section should be a glass-card capability grid"}`,
        `- Showcase block: ${analysis.hasShowcaseEngine ? `a later showcase section pairs diffused-intelligence copy with ${analysis.metricCount} key metrics and one large glass media preview` : "the page should include a glass showcase block with metrics and media preview"}`,
        `- Footer architecture: ${analysis.hasAuroraFooter ? "the footer closes lightly with evolution/connect columns and a very low-contrast atmospheric manifesto line" : "the footer should feel like a soft light epilogue"}`,
        `- Accent logic: ${analysis.usesLightMeshPalette ? "use indigo, emerald, soft blue, pale amber, and white as airy light-mode chromatic accents" : "keep the palette bright, airy, and chromatic rather than dark and heavy"}` 
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, light aurora atmosphere, glass-card softness, and chromatic diffusion clarity.",
            "- Do not darken it or turn it into a generic gradient landing page.",
            "- Match the same uplifting light-mode future-tech feel, glass depth, and airy showcase rhythm.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create an ethereal light nav with a chromatic brand tile, tiny diffusion links, and one glass sign-in button.",
            "- Build a full-height hero with a diffusion status pill, one giant chromatic headline, one airy explanatory paragraph, and two contrasting CTAs.",
            `- Follow with exactly ${analysis.featureCount} glass capability cards in a light atmospheric grid.`,
            `- Add ${analysis.hasShowcaseEngine ? `a diffused-intelligence showcase block containing ${analysis.metricCount} key metrics and one large media preview` : "a large showcase block with metrics and media preview"} before the footer.`,
            `- Finish with ${analysis.hasAuroraFooter ? "a light atmospheric footer with evolution/connect columns" : "a soft airy footer"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep everything bright, soft, chromatic, and glass-infused.",
            "- Use animated light aurora blobs, frosted white cards, gradient text, and subtle lift interactions instead of harsh contrast or dark cyber styling.",
            "- Preserve the feeling of diffusion, lightness, and atmospheric polish.",
            "- Avoid dense enterprise dashboards, brutal lines, or dark neon palettes.",
            "- Make the page feel like aurora aesthetics matured into a clear, premium light-mode system.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: light aurora nav, diffusion hero, glass-card feature grid, metrics/media showcase, and airy footer.",
        "- Change the product story, feature names, metrics, CTA copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Gradient Mesh / Aurora Evolved landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the same diffusion status pill, chromatic headline treatment, glass-card grid, and metrics/media showcase structure.",
        `- Replace the ${analysis.featureCount} feature cards with capabilities that fit ${resolvedProductName}, while preserving the same airy glass rhythm.`,
        `- Rewrite the showcase copy and its ${analysis.metricCount} key metrics so they feel credible for ${resolvedProductName} while preserving the same diffused-intelligence framing.`,
        "- Keep the footer light and atmospheric with evolution/connect groupings, but rewrite the labels for the new company.",
        "",
        "Strict constraints",
        "- Do not darken the experience into standard aurora cyberpunk or glossy SaaS.",
        "- Do not remove the light-mode glass atmosphere, animated aurora blobs, or vibrant gradient text treatment.",
        "- Do not replace the airy diffusion logic with hard cards, dense charts, or enterprise UI patterns.",
        "- Keep the same clear, lifted, chromatic lightness throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

const buildVintageRetroPrompt = ({
    code,
    fileName,
    mode,
    productBrief,
    productName,
    style
}: GeneratePromptOptions) => {
    const analysis = analyzeVintageRetroCode(code);
    const resolvedProductName = normalizeValue(productName, DEFAULT_ADAPT_PRODUCT_NAME);
    const resolvedProductBrief = normalizeValue(productBrief, DEFAULT_ADAPT_PRODUCT_BRIEF);
    const sharedReference = buildReferenceBlock(fileName, code);
    const sharedVisualSystem = [
        "Visual system extracted from the reference",
        `- Design language: ${style.name}`,
        `- Keywords: ${style.keywords}`,
        `- Primary palette: ${style.primaryColors}`,
        "- Visual mood: warm analog nostalgia, tactile paper-and-film storytelling, sepia editorial softness, and archival romance rather than modern glossy product chrome",
        "- Typography: dramatic Abril Fatface headlines, literary Merriweather body copy, and Courier Prime utility labels that make the product feel cataloged and preserved",
        "- Surfaces: faded cream paper, sepia film stills, analog cards with gentle lifted shadows, dark film-frame borders, line textures, film grain, vignettes, and drifting light leaks",
        `- Overlay system: ${analysis.hasAnalogOverlaySystem ? "the page explicitly layers film grain, vignette, light leaks, and subtle horizontal paper texture over the entire experience" : "the page should feel coated in analog grain, vignette, and paper texture"}`,
        `- Navigation behavior: ${analysis.hasArchiveNav ? "the nav behaves like an analog archive header with a tilted film icon, archive-station label, and one strong DEVELOP_FILM action" : "the top chrome should feel like a film archive console rather than a standard SaaS navbar"}`,
        `- Hero architecture: ${analysis.hasReelHero ? "the hero pairs a giant analog editorial headline with one reel-activation CTA and one framed film still on the right" : "the hero should feel like a cinematic analog spread rather than a generic startup hero"}`,
        `- Showcase staging: ${analysis.hasFilmFrameShowcase ? "the right side of the hero is a dramatic film-frame image with heavy border, sepia treatment, play button, and perforation rails" : "the hero should include a framed film still with tactile analog staging"}`,
        `- Feature density: ${analysis.hasExposureGrid ? `exactly ${analysis.featureCount} archival capability cards form the exposure grid` : "the mid-page should include a short analog capability grid"}`,
        `- Quote architecture: ${analysis.hasFullWidthQuote ? "a full-width black quote section interrupts the warm paper flow with one giant nostalgic statement and a technical-signal label" : "the page should include one dramatic monochrome quote intermission"}`,
        `- Footer architecture: ${analysis.hasCanisterFooter ? `the footer behaves like a canister/archive epilogue with ${analysis.footerColumnCount} utility columns, analog metadata labels, and a final legal strip` : "the footer should feel like the back of a film canister with archive metadata and simple utility groups"}`,
        `- Accent logic: ${analysis.usesSepiaPaperPalette ? "use faded cream, beige, warm sepia, black, and burnt orange as analog accents over an aged-paper foundation" : "keep the palette warm, faded, archival, and analog"}`,
        `- Font fidelity: ${analysis.hasVintageFontSystem ? "preserve the serif-display plus editorial-body plus courier-utility contrast from the reference" : "keep a strong contrast between decorative serif headlines, literary body text, and monospaced utility labels"}`
    ].join("\n");

    if (mode === "recreate") {
        return [
            "You are an expert React + TypeScript + Tailwind engineer.",
            "Recreate the reference landing page as faithfully as possible.",
            "",
            "Goal",
            "- Rebuild the page so it feels almost identical to the reference in layout, analog warmth, film-texture atmosphere, and archival storytelling rhythm.",
            "- Do not modernize it into clean contemporary SaaS or slick editorial minimalism.",
            "- Match the same sepia paper palette, reel-stage hero, tactile cards, and nostalgic film-lab identity.",
            "",
            "Technical requirements",
            "- Use React + TypeScript + Tailwind CSS.",
            "- Return a single polished page component that is easy to drop into a project.",
            "- Keep the implementation production-quality and readable.",
            "- Preserve responsive behavior for mobile, tablet, and desktop.",
            "",
            sharedVisualSystem,
            "",
            "Layout blueprint",
            "- Create an analog archive nav with the circular film-mark brand, archive-station label, simple utility links, and one DEVELOP_FILM CTA.",
            "- Build a full-height hero with a small analog timecode label, one giant serif headline, one editorial paragraph, one projection CTA, and one film-frame showcase on the right.",
            `- Preserve the film-frame staging with perforation rails, sepia image treatment, and cinematic caption overlay if ${analysis.hasFilmFrameShowcase ? "possible from the reference" : "possible"}.`,
            `- Follow with exactly ${analysis.featureCount} analog capability cards in an exposure-style grid.`,
            `- Insert ${analysis.hasFullWidthQuote ? "a full-width dark quote intermission with signal labeling" : "a dramatic monochrome quote band"} before the footer.`,
            `- Finish with ${analysis.hasCanisterFooter ? `an archival footer containing ${analysis.footerColumnCount} utility groups, analog metadata, and a final legal strip` : "a vintage archive footer with metadata and utility links"}.`,
            "",
            "Interaction and styling constraints",
            "- Keep everything tactile, warm, grainy, and analog.",
            "- Use paper colors, sepia imagery, film grain, light leaks, and subtle lifted shadows instead of glossy gradients or futuristic glass.",
            "- Preserve the feeling of handling a preserved film archive that has been translated into a landing page.",
            "- Avoid flat modern UI kits, neon accents, enterprise dashboards, or glossy SaaS interactions.",
            "- Make the page feel like a living analog reel, not just a beige website.",
            "",
            "Output format",
            "- Return only the final React + TypeScript + Tailwind code.",
            "- Do not add explanation text before or after the code.",
            "",
            sharedReference
        ].join("\n");
    }

    return [
        "You are an expert React + TypeScript + Tailwind engineer.",
        "Use the reference source as a visual-system blueprint, then adapt it to a new product without changing the overall design language.",
        "",
        "New product to express",
        `- Product name: ${resolvedProductName}`,
        `- Product brief: ${resolvedProductBrief}`,
        "",
        "Primary goal",
        "- Preserve the reference visual language almost exactly: analog archive nav, reel-style hero, exposure-card grid, dark quote intermission, and canister-like footer.",
        "- Change the product story, feature names, metrics, CTA copy, and footer copy so they fit the new product.",
        "- The final result should feel like the same Vintage Analog / Retro Film landing system applied to another company and offering.",
        "",
        "Technical requirements",
        "- Use React + TypeScript + Tailwind CSS.",
        "- Return a single polished landing page component.",
        "- Keep the same overall page architecture and section count as the reference.",
        "",
        sharedVisualSystem,
        "",
        "Adaptation rules",
        `- Replace all mentions of ViCode and developer tooling with language appropriate for ${resolvedProductName}.`,
        `- Rewrite the hero so it clearly communicates this product promise: ${resolvedProductBrief}`,
        "- Keep the analog archive brand treatment, serif/editorial/monospace typography contrast, film-frame hero staging, and nostalgic paper palette.",
        `- Replace the ${analysis.featureCount} exposure cards with capabilities that fit ${resolvedProductName}, while preserving the same archival storytelling rhythm.`,
        "- Keep the dark quote intermission, but rewrite the quote and supporting labels so they fit the new product narrative.",
        `- Preserve the footer structure with ${analysis.footerColumnCount} utility groups, analog metadata, and archival legal language, but rewrite the labels for the new company.`,
        "",
        "Strict constraints",
        "- Do not turn the experience into generic retro neon, vaporwave, or modern editorial minimalism.",
        "- Do not remove the film-grain warmth, paper textures, sepia image treatment, or archive-lab framing.",
        "- Do not replace the tactile analog identity with clean glass cards, bright gradients, or enterprise UI patterns.",
        "- Keep the same faded, archival, cinematic warmth throughout.",
        "",
        "Output format",
        "- Return only the final React + TypeScript + Tailwind code.",
        "- Do not add explanation text before or after the code.",
        "",
        sharedReference
    ].join("\n");
};

export const getGeneratedPromptDescription = (
    styleNo: number,
    mode: PromptGenerationMode
) => {
    if (styleNo === 1) {
        return mode === "recreate"
            ? "This prompt is generated from the live demo source so another coding model can rebuild the page with much higher visual fidelity."
            : "This prompt keeps the same Swiss/minimalist visual system, but rewrites the product narrative so you can reuse the style for a new SaaS or landing page.";
    }

    if (styleNo === 2) {
        return mode === "recreate"
            ? "This prompt captures the soft shadows, rounded depth, and tactile interaction states from the live demo source so another coding model can rebuild the page much more faithfully."
            : "This prompt preserves the same neumorphic visual language and tactile UI behavior, but rewrites the product story so you can apply the style to a different product.";
    }

    if (styleNo === 3) {
        return mode === "recreate"
            ? "This prompt captures the layered blur, translucent glass panels, aurora background system, and glowing utility chrome from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same glassmorphism visual language and luminous futuristic atmosphere, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 4) {
        return mode === "recreate"
            ? "This prompt captures the raw borders, hard color blocks, monospaced aggression, and anti-design layout behavior from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same brutalist anti-design language and raw interaction style, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 5) {
        return mode === "recreate"
            ? "This prompt captures the cinematic dark depth, pseudo-3D product staging, premium shadow system, and flagship engineering atmosphere from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same hyper-real premium visual language and cinematic product-launch feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 6) {
        return mode === "recreate"
            ? "This prompt captures the colorful block composition, chunky shadow language, playful outlined controls, and joyful product-marketing energy from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same vibrant block-based visual language and playful energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 7) {
        return mode === "recreate"
            ? "This prompt captures the true-black OLED atmosphere, violet stealth glow, obsidian product staging, and low-light systems mood from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same OLED-first stealth visual language and premium night-ops atmosphere, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 8) {
        return mode === "recreate"
            ? "This prompt captures the inclusive hierarchy, strong accessibility cues, humane trust-first layout, and ethical-proof messaging from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same accessible and ethical visual language, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 9) {
        return mode === "recreate"
            ? "This prompt captures the inflated clay surfaces, tactile soft shadows, rounded toy-like geometry, and cheerful proof-of-product atmosphere from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same claymorphism visual language and joyful tactile product feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 10) {
        return mode === "recreate"
            ? "This prompt captures the atmospheric aurora mesh, dark glass surfaces, luminous gradient staging, and cinematic future-tech mood from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same aurora-driven glass visual language and vibrant atmospheric energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 11) {
        return mode === "recreate"
            ? "This prompt captures the neon cyan-magenta palette, CRT scanlines, retro grid floor, terminal chrome, and synthwave machine atmosphere from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same retro-futurist visual language and nostalgic neon-machine energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 12) {
        return mode === "recreate"
            ? "This prompt captures the pure 2D surfaces, solid color blocks, no-shadow interaction system, and clarity-first product framing from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same flat design visual language and clean 2D clarity, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 13) {
        return mode === "recreate"
            ? "This prompt captures the brushed-metal materials, hardware-like controls, industrial depth, and heavy console atmosphere from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same skeuomorphic industrial visual language and tactile machine-like feel, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 14) {
        return mode === "recreate"
            ? "This prompt captures the layered liquid-glass material system, refractive distortion filter, premium translucent panels, and fluid macOS-like atmosphere from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same liquid-glass visual language and premium refractive atmosphere, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 15) {
        return mode === "recreate"
            ? "This prompt captures the motion-led layout choreography, scroll-reactive header, marquee systems, animated typography, and kinetic proof-of-performance mood from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same motion-driven visual language and high-velocity storytelling energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 16) {
        return mode === "recreate"
            ? "This prompt captures the tactile feedback patterns, toast confirmations, processing buttons, hover-state cards, and polished micro-interaction system from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same micro-interaction visual language and responsive tactile product feel, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 17) {
        return mode === "recreate"
            ? "This prompt captures the accessibility-toolbar behavior, contrast and font-scaling controls, inclusive representation, and readability-first universal design system from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same inclusive-design visual language and adaptive accessibility-first product feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 18) {
        return mode === "recreate"
            ? "This prompt captures the ambient paper-like environment, low-visibility chrome, ripple-based interaction, intent-first input, and ghosted zero-interface philosophy from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same zero-interface visual language and AI-native ambient interaction model, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 19) {
        return mode === "recreate"
            ? "This prompt captures the evolved soft-depth system, cleaner neumorphic contrast, tactile pricing toggle, trust/logo wall, and modern SaaS conversion flow from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same soft UI evolution visual language and accessible tactile SaaS feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 20) {
        return mode === "recreate"
            ? "This prompt captures the dominant dark hero architecture, floating header, premium right-side media stage, compressed trust band, and focused hero-centric conversion flow from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same hero-centric dark launch-page visual language and concentrated conversion energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 21) {
        return mode === "recreate"
            ? "This prompt captures the urgency-led hero, inline signup form, immediate trust proof, dark testimonial block, and tight conversion funnel structure from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same conversion-optimized visual language and friction-minimized signup flow, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 22) {
        return mode === "recreate"
            ? "This prompt captures the balanced showcase hero, dense capability grid, alternating deep-dive modules, product proof cards, and feature-rich enterprise storytelling from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same feature-rich showcase visual language and broad enterprise SaaS storytelling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 23) {
        return mode === "recreate"
            ? "This prompt captures the monochrome minimal hierarchy, oversized direct hero, single-column value stack, sparse specs band, and one-offer pricing structure from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same minimal and direct visual language and stripped-down one-message-at-a-time persuasion, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 24) {
        return mode === "recreate"
            ? "This prompt captures the trust-first hero, metric proof cards, logo wall, testimonial mosaic, flagship case study, and consensus-driven CTA structure from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same social-proof-focused visual language and evidence-led trust architecture, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 25) {
        return mode === "recreate"
            ? "This prompt captures the interactive tabbed product simulation, dark lab-console hero, live syncing state, registry log feed, and try-the-product CTA flow from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same interactive product-demo visual language and product-first lab experience, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 26) {
        return mode === "recreate"
            ? "This prompt captures the enterprise-trust hero, compliance strip, Fortune-500 logo wall, authority metric grid, and formal blue-chip CTA system from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same trust-and-authority visual language and enterprise-grade institutional credibility, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 27) {
        return mode === "recreate"
            ? "This prompt captures the chapter-based scroll narrative, sticky progress header, alternating light-dark acts, editorial story pacing, and metric-driven climax from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same storytelling-driven visual language and cinematic chapter-based product narrative, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 38) {
        return mode === "recreate"
            ? "This prompt captures the hard-outline neubrutalist chrome, offset-shadow color blocks, loud hero framing, boxed pricing system, and anti-polish startup energy from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same neubrutalist visual language and loud anti-polish product energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 39) {
        return mode === "recreate"
            ? "This prompt captures the modular bento tile hierarchy, Apple-like rounded card system, asymmetrical hero grid, restrained icon wall, and dark pricing shell from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same bento-box-grid visual language and calm modular product-system feel, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 40) {
        return mode === "recreate"
            ? "This prompt captures the chrome-gel navigation, neon pink/cyan Y2K palette, metallic hero stage, glowing icon wall, and holographic pricing shell from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Y2K-aesthetic visual language and glossy cyber-pop nostalgia, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 41) {
        return mode === "recreate"
            ? "This prompt captures the scanline-noise overlay, angular HUD nav, glitch headline, matrix-green terminal shell, and protocol-style pricing system from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same cyberpunk-UI visual language and terminal-noir command-center energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 42) {
        return mode === "recreate"
            ? "This prompt captures the breathable glass nav, organic asymmetrical framing, earthy sustainable palette, eco-pod feature system, and deep-green biophilic pricing shell from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same organic-biophilic visual language and calm sustainability-first ecosystem feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 43) {
        return mode === "recreate"
            ? "This prompt captures the neural-mesh background, adaptive pill nav, sentient-status hero, ambient inference stage, and adaptive AI-pricing shell from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same AI-native visual language and ambient sentient-product atmosphere, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 44) {
        return mode === "recreate"
            ? "This prompt captures the Memphis pattern field, floating pop-art nav, poster-style hero, geometric sticker overlays, and radical pricing poster from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Memphis-design visual language and loud postmodern pop energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 45) {
        return mode === "recreate"
            ? "This prompt captures the vaporwave sunset scene, wireframe floor, VHS overlays, retro terminal nav, dream-plaza feature cards, and end-of-tape footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same vaporwave visual language and surreal VHS-era nostalgia, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 46) {
        return mode === "recreate"
            ? "This prompt captures the perspective-rooted layering system, volumetric stack hero, floating metric modules, structural feature cards, and dimensional pricing shell from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same dimensional-layering visual language and premium spatial depth system, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 47) {
        return mode === "recreate"
            ? "This prompt captures the oversized sticky nav, giant three-word hero, monochrome trust strip, monumental feature blocks, and single-plan pricing manifesto from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same exaggerated-minimalist visual language and monumental reductionist product feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 48) {
        return mode === "recreate"
            ? "This prompt captures the Syncopate-style motion typography system, marquee-backed hero, moving keyword walls, typographic feature list, and black-orange pricing statement from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same kinetic-typography visual language and rhythm-driven motion-first product energy, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 49) {
        return mode === "recreate"
            ? "This prompt captures the chapter-index navigation, opening timeline hero, split growth chapter, modular narrative cards, and final-act pricing structure from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same parallax-storytelling visual language and refined chapter-based product narrative, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 50) {
        return mode === "recreate"
            ? "This prompt captures the red HUD bar, strict Swiss 12-column system, asymmetrical 8/4 hero split, divided feature grid, and licensing-style pricing block from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Swiss Modernism 2.0 visual language and rigorous objective product-system feel, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 51) {
        return mode === "recreate"
            ? "This prompt captures the sticky command bar, circular command-core hero, telemetry side rails, operations grid, and license-acquisition console from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same HUD / sci-fi FUI visual language and command-center product feeling, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 52) {
        return mode === "recreate"
            ? "This prompt captures the heart-bar nav, level-select hero, sprite showcase, upgrade shop grid, and loot-box membership screen from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Pixel Art visual language and arcade-quest product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 55) {
        return mode === "recreate"
            ? "This prompt captures the paper masthead, issue-cover hero, archive-style capability grid, print-tier subscription layout, and literary footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same E-Ink / Paper visual language and contemplative publication-style product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 56) {
        return mode === "recreate"
            ? "This prompt captures the merch-drop nav, sticker-bomb hero, rotated chaos-card grid, hype-tier pricing wall, and manifesto footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Gen Z Chaos / Maximalism visual language and viral internet-core product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 57) {
        return mode === "recreate"
            ? "This prompt captures the vitality hero, morphing biomorphic atmosphere, organic-glass ecosystem grid, growth-stage pricing, and grounded earthy footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Biomimetic / Organic 2.0 visual language and living-system product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 58) {
        return mode === "recreate"
            ? "This prompt captures the system nav, brutally direct raw-text hero, exposed-logic border grid, benchmarking table, and stark black tier-access pricing block from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Anti-Polish / Raw Aesthetic visual language and anti-cosmetic system-document framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 59) {
        return mode === "recreate"
            ? "This prompt captures the tactile neomorphic nav, friction-led hero, floating glass specimen, tactile-node grid, and density-based pricing block from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Tactile Digital / Deformable UI visual language and touch-first physical-digital product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 60) {
        return mode === "recreate"
            ? "This prompt captures the quiet zen nav, distilled serif hero, stone-card essentials grid, silent-tier pricing block, and serene earthy footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Nature Distilled visual language and artisan serene product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 61) {
        return mode === "recreate"
            ? "This prompt captures the custom cursor engine, reveal-driven hero, pointer-sensitive logic grid, void-tier pricing block, and sparse protocol footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Interactive Cursor Design visual language and cursor-driven immersive product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 62) {
        return mode === "recreate"
            ? "This prompt captures the sonic-core hero, listening state chrome, multimodal triad cards, spectrum analytics block, and dark channels/core footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Voice-First Multimodal visual language and sound-reactive AI product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 63) {
        return mode === "recreate"
            ? "This prompt captures the industrial nav, spec-column hero, rotatable 3D product centerpiece, structural module grid, and hardware-license pricing block from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same 3D Product Preview visual language and industrial spatial-product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 64) {
        return mode === "recreate"
            ? "This prompt captures the light aurora nav, diffusion hero, glass-card capability grid, diffused-intelligence showcase block, and airy atmospheric footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Gradient Mesh / Aurora Evolved visual language and chromatic light-diffusion product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    if (styleNo === 67) {
        return mode === "recreate"
            ? "This prompt captures the analog archive nav, reel-style hero, film-frame showcase, exposure-card grid, full-width quote intermission, and canister footer from the live demo source so another coding model can rebuild it much more faithfully."
            : "This prompt preserves the same Vintage Analog / Retro Film visual language and warm archival product framing, but rewrites the product story so you can reuse the style for a different product.";
    }

    return mode === "recreate"
        ? "This prompt is generated from the live demo source so another coding model can rebuild the page with higher visual fidelity."
        : "This prompt keeps the same visual language, but rewrites the product narrative so you can reuse the style for a new product.";
};

export const supportsGeneratedPrompt = (styleNo: number) =>
    styleNo === 1 || styleNo === 2 || styleNo === 3 || styleNo === 4 || styleNo === 5 || styleNo === 6 || styleNo === 7 || styleNo === 8 || styleNo === 9 || styleNo === 10 || styleNo === 11 || styleNo === 12 || styleNo === 13 || styleNo === 14 || styleNo === 15 || styleNo === 16 || styleNo === 17 || styleNo === 18 || styleNo === 19 || styleNo === 20 || styleNo === 21 || styleNo === 22 || styleNo === 23 || styleNo === 24 || styleNo === 25 || styleNo === 26 || styleNo === 27 || styleNo === 38 || styleNo === 39 || styleNo === 40 || styleNo === 41 || styleNo === 42 || styleNo === 43 || styleNo === 44 || styleNo === 45 || styleNo === 46 || styleNo === 47 || styleNo === 48 || styleNo === 49 || styleNo === 50 || styleNo === 51 || styleNo === 52 || styleNo === 55 || styleNo === 56 || styleNo === 57 || styleNo === 58 || styleNo === 59 || styleNo === 60 || styleNo === 61 || styleNo === 62 || styleNo === 63 || styleNo === 64 || styleNo === 67;

export const generatePromptFromCode = (options: GeneratePromptOptions) => {
    if (options.style.no === 1) {
        return buildMinimalistSwissPrompt(options);
    }

    if (options.style.no === 2) {
        return buildNeumorphismPrompt(options);
    }

    if (options.style.no === 3) {
        return buildGlassmorphismPrompt(options);
    }

    if (options.style.no === 4) {
        return buildBrutalismPrompt(options);
    }

    if (options.style.no === 5) {
        return buildHyperrealismPrompt(options);
    }

    if (options.style.no === 6) {
        return buildVibrantBlockPrompt(options);
    }

    if (options.style.no === 7) {
        return buildOLEDPrompt(options);
    }

    if (options.style.no === 8) {
        return buildAccessibleEthicalPrompt(options);
    }

    if (options.style.no === 9) {
        return buildClaymorphismPrompt(options);
    }

    if (options.style.no === 10) {
        return buildAuroraPrompt(options);
    }

    if (options.style.no === 11) {
        return buildRetroFuturismPrompt(options);
    }

    if (options.style.no === 12) {
        return buildFlatDesignPrompt(options);
    }

    if (options.style.no === 13) {
        return buildSkeuomorphismPrompt(options);
    }

    if (options.style.no === 14) {
        return buildLiquidGlassPrompt(options);
    }

    if (options.style.no === 15) {
        return buildMotionDrivenPrompt(options);
    }

    if (options.style.no === 16) {
        return buildMicroInteractionsPrompt(options);
    }

    if (options.style.no === 17) {
        return buildInclusiveDesignPrompt(options);
    }

    if (options.style.no === 18) {
        return buildZeroInterfacePrompt(options);
    }

    if (options.style.no === 19) {
        return buildSoftUIEvolutionPrompt(options);
    }

    if (options.style.no === 20) {
        return buildHeroCentricPrompt(options);
    }

    if (options.style.no === 21) {
        return buildConversionOptimizedPrompt(options);
    }

    if (options.style.no === 22) {
        return buildFeatureRichShowcasePrompt(options);
    }

    if (options.style.no === 23) {
        return buildMinimalDirectPrompt(options);
    }

    if (options.style.no === 24) {
        return buildSocialProofFocusedPrompt(options);
    }

    if (options.style.no === 25) {
        return buildInteractiveProductDemoPrompt(options);
    }

    if (options.style.no === 26) {
        return buildTrustAuthorityPrompt(options);
    }

    if (options.style.no === 27) {
        return buildStorytellingDrivenPrompt(options);
    }

    if (options.style.no === 38) {
        return buildNeubrutalismPrompt(options);
    }

    if (options.style.no === 39) {
        return buildBentoBoxGridPrompt(options);
    }

    if (options.style.no === 40) {
        return buildY2KAestheticPrompt(options);
    }

    if (options.style.no === 41) {
        return buildCyberpunkUIPrompt(options);
    }

    if (options.style.no === 42) {
        return buildOrganicBiophilicPrompt(options);
    }

    if (options.style.no === 43) {
        return buildAINativeUIPrompt(options);
    }

    if (options.style.no === 44) {
        return buildMemphisDesignPrompt(options);
    }

    if (options.style.no === 45) {
        return buildVaporwavePrompt(options);
    }

    if (options.style.no === 46) {
        return buildDimensionalLayeringPrompt(options);
    }

    if (options.style.no === 47) {
        return buildExaggeratedMinimalismPrompt(options);
    }

    if (options.style.no === 48) {
        return buildKineticTypographyPrompt(options);
    }

    if (options.style.no === 49) {
        return buildParallaxStorytellingPrompt(options);
    }

    if (options.style.no === 50) {
        return buildSwissModernism2Prompt(options);
    }

    if (options.style.no === 51) {
        return buildHUDTechPrompt(options);
    }

    if (options.style.no === 52) {
        return buildPixelArtPrompt(options);
    }

    if (options.style.no === 55) {
        return buildEInkPaperPrompt(options);
    }

    if (options.style.no === 56) {
        return buildGenZChaosPrompt(options);
    }

    if (options.style.no === 57) {
        return buildBiomimeticOrganicPrompt(options);
    }

    if (options.style.no === 58) {
        return buildAntiPolishRawPrompt(options);
    }

    if (options.style.no === 59) {
        return buildTactileDigitalPrompt(options);
    }

    if (options.style.no === 60) {
        return buildNatureDistilledPrompt(options);
    }

    if (options.style.no === 61) {
        return buildInteractiveCursorPrompt(options);
    }

    if (options.style.no === 62) {
        return buildVoiceMultimodalPrompt(options);
    }

    if (options.style.no === 63) {
        return buildProduct3DPreviewPrompt(options);
    }

    if (options.style.no === 64) {
        return buildAuroraEvolvedPrompt(options);
    }

    if (options.style.no === 67) {
        return buildVintageRetroPrompt(options);
    }

    return null;
};
