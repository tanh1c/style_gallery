import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { demoRegistry, getDemoSource } from "@/components/demoRegistry";
import { type Style } from "@/data/styles";
import {
    getGeneratedPromptDescription,
    generatePromptFromCode,
    type PromptGenerationMode,
    supportsGeneratedPrompt
} from "@/lib/generated-prompts";
import { cn } from "@/lib/utils";
import {
    ChevronLeft,
    ChevronRight,
    Code as CodeIcon,
    Copy,
    Download,
    Lock,
    Monitor,
    Smartphone,
    Tablet,
    X
} from "lucide-react";
import React, { Fragment, Suspense, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

interface StylePreviewProps {
    style: Style;
}

interface HighlightToken {
    content: string;
    className: string;
}

type PreviewDevice = "desktop" | "tablet" | "mobile";

const previewDevices: Array<{
    id: PreviewDevice;
    label: string;
    icon: typeof Monitor;
    shellClassName: string;
    dimensionLabel: string;
}> = [
    {
        id: "desktop",
        label: "Desktop",
        icon: Monitor,
        shellClassName: "w-full",
        dimensionLabel: "Auto"
    },
    {
        id: "tablet",
        label: "Tablet",
        icon: Tablet,
        shellClassName: "w-full max-w-[834px]",
        dimensionLabel: "834px"
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        shellClassName: "w-full max-w-[430px]",
        dimensionLabel: "430px"
    }
];

const CODE_TOKEN_PATTERN =
    /(\/\/.*|\/\*.*?\*\/|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\b(?:import|from|export|default|const|let|var|return|if|else|await|async|try|catch|finally|new|type|interface|extends|implements|function|null|true|false|as|typeof)\b|\b\d+(?:\.\d+)?\b|<\/?[A-Za-z][\w.-]*|\b[A-Za-z_:][\w:-]*(?==)|\/?>|[{}()[\].,;:+\-*/=<>!&|?]+)/g;

const getTokenClassName = (token: string): string => {
    if (token.startsWith("//") || token.startsWith("/*")) {
        return "text-emerald-400 italic";
    }

    if (/^["'`]/.test(token)) {
        return "text-amber-300";
    }

    if (/^(import|from|export|default|const|let|var|return|if|else|await|async|try|catch|finally|new|type|interface|extends|implements|function|null|true|false|as|typeof)$/.test(token)) {
        return "text-sky-300";
    }

    if (/^\d/.test(token)) {
        return "text-orange-300";
    }

    if (/^<\/?[A-Za-z]/.test(token)) {
        return "text-fuchsia-300";
    }

    if (/^[A-Za-z_:][\w:-]*$/.test(token)) {
        return "text-cyan-300";
    }

    if (/^[{}()[\].,;:+\-*/=<>!&|?/]+$/.test(token)) {
        return "text-white/30";
    }

    return "text-white/85";
};

const highlightCodeLine = (line: string): HighlightToken[] => {
    const tokens: HighlightToken[] = [];
    let cursor = 0;

    for (const match of line.matchAll(CODE_TOKEN_PATTERN)) {
        const matched = match[0];
        const start = match.index ?? 0;

        if (start > cursor) {
            tokens.push({
                content: line.slice(cursor, start),
                className: "text-white/85"
            });
        }

        tokens.push({
            content: matched,
            className: getTokenClassName(matched)
        });

        cursor = start + matched.length;
    }

    if (cursor < line.length) {
        tokens.push({
            content: line.slice(cursor),
            className: "text-white/85"
        });
    }

    return tokens;
};

const GenericDemoFallback: React.FC<{ style: Style }> = ({ style }) => (
    <div className="flex-1 bg-white overflow-y-auto text-black font-sans relative flex flex-col items-center justify-center p-20 text-center space-y-8">
        <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center">
            <CodeIcon className="w-10 h-10 text-black/10" />
        </div>
        <div className="max-w-md space-y-4">
            <h1 className="text-4xl font-black tracking-tighter">{style.name}</h1>
            <p className="text-black/40 leading-relaxed font-bold uppercase tracking-widest text-[10px]">
                {style.keywords}
            </p>
            <p className="text-black/40 leading-relaxed">
                This style demo is currently under construction.
            </p>
        </div>
        <Button className="bg-black text-white hover:bg-black/90 font-black uppercase tracking-widest text-[10px] h-11 px-8">
            Request Implementation
        </Button>
    </div>
);

const DemoLoadingFallback: React.FC<{ style: Style; primaryColor: string }> = ({ style, primaryColor }) => (
    <div className="flex-1 bg-white overflow-y-auto text-black font-sans relative flex flex-col items-center justify-center p-20 text-center space-y-8">
        <div
            className="w-24 h-24 rounded-full flex items-center justify-center border animate-pulse"
            style={{
                background: `linear-gradient(135deg, ${primaryColor}22, #f5f5f5)`,
                borderColor: `${primaryColor}44`
            }}
        >
            <div
                className="w-10 h-10 rounded-full animate-spin"
                style={{
                    border: `3px solid ${primaryColor}33`,
                    borderTopColor: primaryColor
                }}
            />
        </div>
        <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-black tracking-tighter">{style.name}</h1>
            <p className="text-black/40 leading-relaxed font-bold uppercase tracking-widest text-[10px]">
                Loading preview
            </p>
            <p className="text-black/40 leading-relaxed">
                Fetching the interactive mockup for this style.
            </p>
        </div>
    </div>
);

const DemoViewport: React.FC<{
    children: React.ReactNode;
    device: PreviewDevice;
    styleName: string;
}> = ({ children, device, styleName }) => {
    const [iframeNode, setIframeNode] = useState<HTMLIFrameElement | null>(null);
    const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (!iframeNode || typeof document === "undefined") {
            return;
        }

        const syncIframeDocument = () => {
            const iframeDocument = iframeNode.contentDocument;

            if (!iframeDocument) {
                return;
            }

            if (!iframeDocument.getElementById("style-gallery-preview-root")) {
                iframeDocument.open();
                iframeDocument.write(`<!DOCTYPE html><html lang="en"><head></head><body><div id="style-gallery-preview-root"></div></body></html>`);
                iframeDocument.close();
            }

            const previewRoot = iframeDocument.getElementById("style-gallery-preview-root");

            if (!previewRoot) {
                return;
            }

            iframeDocument.title = `${styleName} Preview`;

            if (!iframeDocument.head.querySelector("[data-style-gallery-preview-base='true']")) {
                const previewBaseStyle = iframeDocument.createElement("style");

                previewBaseStyle.setAttribute("data-style-gallery-preview-base", "true");
                previewBaseStyle.textContent = `
                    html, body {
                        margin: 0;
                        height: 100%;
                        background: #ffffff;
                    }

                    body {
                        overflow: auto;
                    }

                    #style-gallery-preview-root {
                        min-height: 100%;
                        height: 100%;
                    }
                `;

                iframeDocument.head.appendChild(previewBaseStyle);
            }

            const headNodes = Array.from(
                document.head.querySelectorAll("style, link[rel='stylesheet']")
            );

            headNodes.forEach((node, index) => {
                const selector = `[data-style-gallery-head-node="${index}"]`;

                if (iframeDocument.head.querySelector(selector)) {
                    return;
                }

                const clonedNode = node.cloneNode(true) as HTMLElement;

                clonedNode.setAttribute("data-style-gallery-head-node", String(index));
                iframeDocument.head.appendChild(clonedNode);
            });

            setMountNode(previewRoot);
        };

        syncIframeDocument();
        iframeNode.addEventListener("load", syncIframeDocument);

        return () => {
            iframeNode.removeEventListener("load", syncIframeDocument);
        };
    }, [iframeNode, styleName]);

    return (
        <div className="flex-1 min-h-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_55%)]">
            <iframe
                ref={setIframeNode}
                title={`${styleName} ${device} preview`}
                className="h-full w-full bg-white"
                srcDoc="<!DOCTYPE html><html lang='en'><head></head><body><div id='style-gallery-preview-root'></div></body></html>"
            />
            {mountNode ? createPortal(children, mountNode) : null}
        </div>
    );
};

export const StylePreview: React.FC<StylePreviewProps> = ({ style }) => {
    const [isGettingCode, setIsGettingCode] = useState(false);
    const [isPreparingPrompt, setIsPreparingPrompt] = useState(false);
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
    const [isCopyingCode, setIsCopyingCode] = useState(false);
    const [isCopyingPrompt, setIsCopyingPrompt] = useState(false);
    const [isCopyingGeneratedPrompt, setIsCopyingGeneratedPrompt] = useState(false);
    const [codePreview, setCodePreview] = useState<{ code: string; fileName: string } | null>(null);
    const [promptPreview, setPromptPreview] = useState<{ code: string; fileName: string } | null>(null);
    const [promptMode, setPromptMode] = useState<PromptGenerationMode>("recreate");
    const [previewDevice, setPreviewDevice] = useState<PreviewDevice>("desktop");
    const [adaptProductName, setAdaptProductName] = useState("NovaFlow");
    const [adaptProductBrief, setAdaptProductBrief] = useState(
        "An AI operations platform for product teams to plan launches, align docs, and automate execution."
    );

    const hexMatch = style.primaryColors.match(/#[A-Fa-f0-9]{6}/);
    const primaryColor = hexMatch ? hexMatch[0] : "#333";
    const DemoComponent = demoRegistry[style.no];
    const supportsCodeGeneratedPrompt = supportsGeneratedPrompt(style.no);
    const activePreviewDevice = useMemo(
        () => previewDevices.find((item) => item.id === previewDevice) ?? previewDevices[0],
        [previewDevice]
    );
    const codeLines = useMemo(
        () => (codePreview ? codePreview.code.replace(/\r\n/g, "\n").split("\n") : []),
        [codePreview]
    );
    const highlightedCodeLines = useMemo(
        () => codeLines.map((line) => highlightCodeLine(line)),
        [codeLines]
    );
    const generatedPrompt = useMemo(() => {
        if (!promptPreview) {
            return "";
        }

        return (
            generatePromptFromCode({
                code: promptPreview.code,
                fileName: promptPreview.fileName,
                mode: promptMode,
                productBrief: adaptProductBrief,
                productName: adaptProductName,
                style
            }) ?? ""
        );
    }, [adaptProductBrief, adaptProductName, promptMode, promptPreview, style]);
    const promptModeDescription = useMemo(
        () => getGeneratedPromptDescription(style.no, promptMode),
        [promptMode, style.no]
    );

    const handlePromptAction = async () => {
        if (supportsCodeGeneratedPrompt) {
            setIsPreparingPrompt(true);

            try {
                if (promptPreview) {
                    setPromptMode("recreate");
                    setIsPromptModalOpen(true);

                    return;
                }

                const source = await getDemoSource(style.no);

                if (!source) {
                    return;
                }

                setPromptPreview(source);
                setPromptMode("recreate");
                setIsPromptModalOpen(true);
            } finally {
                setIsPreparingPrompt(false);
            }

            return;
        }

        setIsCopyingPrompt(true);

        try {
            await navigator.clipboard.writeText(style.aiPrompt);
        } finally {
            window.setTimeout(() => setIsCopyingPrompt(false), 1200);
        }
    };

    const handleGetCode = async () => {
        setIsGettingCode(true);

        try {
            const source = await getDemoSource(style.no);

            if (!source) {
                return;
            }

            setCodePreview(source);
            setIsCodeModalOpen(true);
        } finally {
            setIsGettingCode(false);
        }
    };

    const handleCopyCode = async () => {
        if (!codePreview) {
            return;
        }

        setIsCopyingCode(true);

        try {
            await navigator.clipboard.writeText(codePreview.code);
        } finally {
            window.setTimeout(() => setIsCopyingCode(false), 1200);
        }
    };

    const handleCopyGeneratedPrompt = async () => {
        if (!generatedPrompt) {
            return;
        }

        setIsCopyingGeneratedPrompt(true);

        try {
            await navigator.clipboard.writeText(generatedPrompt);
        } finally {
            window.setTimeout(() => setIsCopyingGeneratedPrompt(false), 1200);
        }
    };

    const handleDownloadCode = () => {
        if (!codePreview) {
            return;
        }

        const blob = new Blob([codePreview.code], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = codePreview.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        if (!isCodeModalOpen && !isPromptModalOpen) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsCodeModalOpen(false);
                setIsPromptModalOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isCodeModalOpen, isPromptModalOpen]);

    useEffect(() => {
        setIsCodeModalOpen(false);
        setIsPromptModalOpen(false);
        setCodePreview(null);
        setPromptPreview(null);
        setPromptMode("recreate");
        setIsCopyingCode(false);
        setIsCopyingPrompt(false);
        setIsCopyingGeneratedPrompt(false);
    }, [style.no]);

    return (
        <div className="h-full flex flex-col bg-[#050505] overflow-hidden relative text-left">
            <div className="flex items-center justify-between px-8 py-3 shrink-0 border-b border-white/5 bg-[#050505]/95 backdrop-blur-xl z-20">
                <div className="flex items-center gap-4">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{
                            background: `linear-gradient(135deg, ${primaryColor}33, ${primaryColor}11)`,
                            border: `1px solid ${primaryColor}44`
                        }}
                    >
                        <div
                            className="w-5 h-5 rounded-md shadow-lg"
                            style={{
                                backgroundColor: primaryColor,
                                boxShadow: `0 4px 12px ${primaryColor}44`
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-sm font-bold tracking-tight text-white flex items-center gap-2 leading-none mb-1">
                            {style.name}
                            <Badge variant="outline" className="text-[7px] bg-white/10 border-white/20 text-white/60 px-1 py-0 uppercase tracking-widest font-bold h-3.5 leading-none">
                                #{style.no.toString().padStart(2, "0")}
                            </Badge>
                        </h2>
                        <p className="text-[9px] text-white/50 truncate max-sm:max-w-[120px] font-bold uppercase tracking-[0.2em] mt-0.5">
                            {style.keywords}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 mr-1 hidden sm:flex">
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-white/30 hover:text-white transition-colors">
                            <ChevronLeft className="w-3.5 h-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-white/30 hover:text-white transition-colors">
                            <ChevronRight className="w-3.5 h-3.5" />
                        </Button>
                    </div>

                    <Button
                        size="sm"
                        onClick={handlePromptAction}
                        disabled={supportsCodeGeneratedPrompt ? isPreparingPrompt : isCopyingPrompt}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[10px] gap-2 h-8 px-3 font-bold uppercase tracking-widest disabled:opacity-60"
                    >
                        <Copy className="w-3 h-3" />
                        {supportsCodeGeneratedPrompt
                            ? isPreparingPrompt
                                ? "Generating..."
                                : "Prompt"
                            : isCopyingPrompt
                                ? "Copied"
                                : "Prompt"}
                    </Button>

                    <Button
                        size="sm"
                        onClick={handleGetCode}
                        disabled={isGettingCode}
                        className="bg-white hover:bg-white/90 text-black text-[10px] gap-2 h-8 px-4 font-black uppercase tracking-widest disabled:opacity-60"
                    >
                        <CodeIcon className="w-3 h-3" />
                        {isGettingCode ? "Preparing..." : "Get Code"}
                    </Button>
                </div>
            </div>

            <div className="flex-1 relative overflow-hidden px-6 pt-3 pb-0 flex flex-col">
                <div
                    className={cn(
                        "flex-1 flex flex-col bg-white rounded-t-xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 animate-in zoom-in-95 fade-in duration-700 mx-auto transition-[width,max-width] duration-300 ease-out",
                        activePreviewDevice.shellClassName
                    )}
                >
                    <div className="h-8 bg-[#f8f8f8] border-b border-black/5 grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-2 px-4 shrink-0">
                        <div className="flex gap-1.5 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f57] shadow-inner" />
                            <div className="w-2 h-2 rounded-full bg-[#febc2e] shadow-inner" />
                            <div className="w-2 h-2 rounded-full bg-[#28c840] shadow-inner" />
                        </div>

                        <div className="min-w-0 flex justify-center">
                            <div className="min-w-0 w-full max-w-sm h-5 bg-white/80 border border-black/5 rounded flex items-center px-3 gap-2 text-[9px] text-black/30">
                                <Lock className="w-2 h-2 text-black/20" />
                                <span className="truncate">
                                    stylelibrary.dev/preview/{style.name.toLowerCase().replace(/\s+/g, "-")}?viewport={activePreviewDevice.id}
                                </span>
                            </div>
                        </div>

                        <div className="flex shrink-0 justify-end items-center gap-1">
                            {previewDevices.map(({ id, icon: Icon, label, dimensionLabel }) => {
                                const isActive = previewDevice === id;

                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setPreviewDevice(id)}
                                        className={cn(
                                            "h-5 w-8 rounded-md border flex items-center justify-center transition-all",
                                            isActive
                                                ? "bg-black text-white border-black shadow-sm"
                                                : "bg-white/70 text-black/30 border-black/5 hover:text-black/60 hover:border-black/15"
                                        )}
                                        aria-label={`Switch preview to ${label}`}
                                        aria-pressed={isActive}
                                        title={`${label} preview (${dimensionLabel})`}
                                    >
                                        <Icon className="w-3 h-3" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <DemoViewport device={previewDevice} styleName={style.name}>
                        {DemoComponent ? (
                            <Suspense fallback={<DemoLoadingFallback style={style} primaryColor={primaryColor} />}>
                                <DemoComponent />
                            </Suspense>
                        ) : (
                            <GenericDemoFallback style={style} />
                        )}
                    </DemoViewport>
                </div>
            </div>

            {isPromptModalOpen && promptPreview && typeof document !== "undefined" &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm p-6 flex items-center justify-center"
                        onClick={() => setIsPromptModalOpen(false)}
                    >
                        <div
                            className="w-full max-w-5xl h-[82vh] min-h-0 bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4 bg-black/30 shrink-0">
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">
                                        Generated Prompt From Code
                                    </p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-sm font-bold tracking-tight text-white truncate">
                                            {style.name}
                                        </h3>
                                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                                            {promptMode === "recreate" ? "Recreate Exactly" : "Adapt This Style"}
                                        </span>
                                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                                            {promptPreview.fileName}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <Button
                                        size="sm"
                                        onClick={handleCopyGeneratedPrompt}
                                        disabled={isCopyingGeneratedPrompt || !generatedPrompt}
                                        className="bg-white text-black hover:bg-white/90 text-[10px] gap-2 h-8 px-3 font-black uppercase tracking-widest disabled:opacity-60"
                                    >
                                        <Copy className="w-3 h-3" />
                                        {isCopyingGeneratedPrompt ? "Copied" : "Copy Prompt"}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsPromptModalOpen(false)}
                                        className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/10"
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="px-6 py-4 border-b border-white/10 bg-[#090909] flex flex-col gap-4 shrink-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Button
                                        size="sm"
                                        onClick={() => setPromptMode("recreate")}
                                        className={promptMode === "recreate"
                                            ? "bg-white text-black hover:bg-white/90 text-[10px] h-8 px-3 font-black uppercase tracking-widest"
                                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 text-[10px] h-8 px-3 font-black uppercase tracking-widest"}
                                    >
                                        Recreate Exactly
                                    </Button>
                                    <Button
                                        size="sm"
                                        onClick={() => setPromptMode("adapt")}
                                        className={promptMode === "adapt"
                                            ? "bg-white text-black hover:bg-white/90 text-[10px] h-8 px-3 font-black uppercase tracking-widest"
                                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 text-[10px] h-8 px-3 font-black uppercase tracking-widest"}
                                    >
                                        Adapt This Style
                                    </Button>
                                </div>

                                <p className="text-xs leading-relaxed text-white/50 max-w-3xl">
                                    {promptModeDescription}
                                </p>
                            </div>

                            {promptMode === "adapt" ? (
                                <div className="px-6 py-4 border-b border-white/10 bg-[#0b0b0b] grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-4 shrink-0">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
                                            Product Name
                                        </label>
                                        <Input
                                            value={adaptProductName}
                                            onChange={(event) => setAdaptProductName(event.currentTarget.value)}
                                            className="h-10 border-white/10 bg-white/5 text-white placeholder:text-white/25"
                                            placeholder="NovaFlow"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
                                            Product Brief
                                        </label>
                                        <textarea
                                            value={adaptProductBrief}
                                            onChange={(event) => setAdaptProductBrief(event.currentTarget.value)}
                                            className="min-h-24 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/25 focus-visible:border-white/30"
                                            placeholder="Describe the new product, audience, and the promise this landing page should communicate."
                                        />
                                    </div>
                                </div>
                            ) : null}

                            <ScrollArea className="flex-1 min-h-0 bg-[#080808]">
                                <div className="px-6 py-6">
                                    <pre className="whitespace-pre-wrap break-words text-[12px] leading-6 font-mono text-white/80">
                                        {generatedPrompt}
                                    </pre>
                                </div>
                            </ScrollArea>
                        </div>
                    </div>,
                    document.body
                )}

            {isCodeModalOpen && codePreview && typeof document !== "undefined" &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm p-6 flex items-center justify-center"
                        onClick={() => setIsCodeModalOpen(false)}
                    >
                        <div
                            className="w-full max-w-6xl h-[82vh] min-h-0 bg-[#0c0c0c] border border-white/10 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4 bg-black/30 shrink-0">
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">
                                        Demo Source
                                    </p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-sm font-bold tracking-tight text-white truncate">
                                            {codePreview.fileName}
                                        </h3>
                                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                                            TSX
                                        </span>
                                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                                            {codeLines.length} lines
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <Button
                                        size="sm"
                                        onClick={handleDownloadCode}
                                        className="bg-white/5 text-white border border-white/10 hover:bg-white/10 text-[10px] gap-2 h-8 px-3 font-black uppercase tracking-widest"
                                    >
                                        <Download className="w-3 h-3" />
                                        Download
                                    </Button>
                                    <Button
                                        size="sm"
                                        onClick={handleCopyCode}
                                        disabled={isCopyingCode}
                                        className="bg-white text-black hover:bg-white/90 text-[10px] gap-2 h-8 px-3 font-black uppercase tracking-widest disabled:opacity-60"
                                    >
                                        <Copy className="w-3 h-3" />
                                        {isCopyingCode ? "Copied" : "Copy"}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsCodeModalOpen(false)}
                                        className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/10"
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <ScrollArea showHorizontalScrollbar className="flex-1 min-h-0 bg-[#080808]">
                                <div className="min-w-max pb-6">
                                    <div className="grid [grid-template-columns:72px_minmax(0,1fr)] divide-y divide-white/5">
                                        {highlightedCodeLines.map((tokens, index) => (
                                            <Fragment key={`${codePreview.fileName}-${index + 1}`}>
                                                <div className="sticky left-0 z-10 bg-[#0a0a0a] border-r border-white/5 px-4 py-1 text-right text-[11px] leading-6 font-mono text-white/20 select-none">
                                                    {index + 1}
                                                </div>
                                                <div className="px-5 py-1 text-[12px] leading-6 font-mono whitespace-pre">
                                                    {tokens.length > 0 ? (
                                                        tokens.map((token, tokenIndex) => (
                                                            <span key={`${index + 1}-${tokenIndex}`} className={token.className}>
                                                                {token.content}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-white/15">{" "}</span>
                                                    )}
                                                </div>
                                            </Fragment>
                                        ))}
                                    </div>
                                </div>
                            </ScrollArea>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
};
