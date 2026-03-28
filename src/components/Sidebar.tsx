import { Input } from "@/components/ui/input";
import { type Style } from "@/data/styles";
import { cn } from "@/lib/utils";
import { Moon,Search,Star,Sun } from "lucide-react";
import React, { useMemo } from "react";

interface SidebarProps {
    styles: Style[];
    selectedStyle: Style | null;
    onSelectStyle: (style: Style) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    filterMode: "All" | "Light" | "Dark";
    onFilterModeChange: (mode: "All" | "Light" | "Dark") => void;
    filterType: "All" | "General" | "Landing Page" | "BI/Analytics";
    onFilterTypeChange: (type: "All" | "General" | "Landing Page" | "BI/Analytics") => void;
    favoriteStyleNos: number[];
    onToggleFavorite: (styleNo: number) => void;
    totalCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
    styles,
    selectedStyle,
    onSelectStyle,
    searchQuery,
    onSearchChange,
    filterMode,
    onFilterModeChange,
    filterType,
    onFilterTypeChange,
    favoriteStyleNos,
    onToggleFavorite,
}) => {
    const favoriteStyleSet = useMemo(() => new Set(favoriteStyleNos), [favoriteStyleNos]);
    const pinnedStyles = useMemo(
        () => styles.filter((style) => favoriteStyleSet.has(style.no)),
        [favoriteStyleSet, styles]
    );
    const unpinnedStyles = useMemo(
        () => styles.filter((style) => !favoriteStyleSet.has(style.no)),
        [favoriteStyleSet, styles]
    );

    const renderStyleItem = (style: Style) => {
        const hexMatch = style.primaryColors.match(/#[A-Fa-f0-9]{6}/);
        const primaryColor = hexMatch ? hexMatch[0] : "#333";
        const isSelected = selectedStyle?.no === style.no;
        const isFavorite = favoriteStyleSet.has(style.no);

        return (
            <div key={style.no} className="relative group">
                <button
                    type="button"
                    onClick={() => onSelectStyle(style)}
                    className={cn(
                        "w-full flex items-center gap-4 p-3.5 pr-12 rounded-xl transition-all relative overflow-hidden text-left",
                        isSelected
                            ? "bg-white/[0.08] border border-white/5 shadow-xl"
                            : "hover:bg-white/[0.04] active:scale-[0.98] border border-transparent"
                    )}
                >
                    <div
                        className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[11px] font-black transition-transform group-hover:scale-110 relative z-10"
                        style={{
                            background: `linear-gradient(135deg, ${primaryColor}22, #000)`,
                            border: `1px solid ${primaryColor}44`
                        }}
                    >
                        <div
                            className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            style={{ backgroundColor: primaryColor }}
                        />
                        <span className={cn(
                            "transition-opacity font-mono",
                            isSelected ? "opacity-100 text-white" : "opacity-40 text-white/40"
                        )}>
                            {style.no.toString().padStart(2, "0")}
                        </span>
                    </div>

                    <div className="flex-1 text-left min-w-0 relative z-10">
                        <div className={cn(
                            "text-[12px] font-bold tracking-tight truncate transition-colors",
                            isSelected ? "text-white" : "text-white/60 group-hover:text-white/90"
                        )}>
                            {style.name}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span
                                className={cn(
                                    "text-[9px] uppercase tracking-widest font-black transition-opacity",
                                    isSelected ? "text-white opacity-80" : "text-white/40 opacity-40 group-hover:opacity-70"
                                )}
                            >
                                {style.type}
                            </span>
                            {isFavorite ? (
                                <span className="text-[8px] uppercase tracking-[0.28em] font-black text-[#FACC15]/80">
                                    Pinned
                                </span>
                            ) : null}
                        </div>
                    </div>

                    {isSelected ? (
                        <div
                            className="absolute left-0 top-0 bottom-0 w-[2.5px] shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            style={{ backgroundColor: primaryColor }}
                        />
                    ) : null}
                </button>

                <button
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggleFavorite(style.no);
                    }}
                    className={cn(
                        "absolute right-3 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-lg border flex items-center justify-center transition-all",
                        isFavorite
                            ? "bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/25 opacity-100"
                            : "bg-transparent text-white/20 border-transparent opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-white/5 hover:text-white/70 hover:border-white/10"
                    )}
                    aria-label={isFavorite ? `Unpin ${style.name}` : `Pin ${style.name}`}
                    aria-pressed={isFavorite}
                    title={isFavorite ? "Unpin favorite style" : "Pin favorite style"}
                >
                    <Star className={cn("w-3.5 h-3.5", isFavorite && "fill-current")} />
                </button>
            </div>
        );
    };

    return (
        <div className="w-[320px] bg-[#0c0c0c] border-r border-white/5 flex flex-col h-full overflow-hidden select-none">
            <div className="p-6 space-y-5">
                <div className="flex items-center justify-between mb-2">
                    <h1
                        className="text-xl font-bold tracking-tighter flex items-center gap-2 text-white"
                        style={{ textShadow: "0 0 20px rgba(255,255,255,0.15), 0 4px 8px rgba(0,0,0,0.5)" }}
                    >
                        style<span className="text-white/40">/library</span>
                    </h1>
                    <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
                        v1.0
                    </span>
                </div>

                <p className="text-[12px] text-white/50 leading-relaxed font-light">
                    Select a style to preview the design system prompt and interactive gallery mockup.
                </p>

                <div className="space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                        <Input
                            placeholder="Search library..."
                            className="bg-white/5 border-white/5 pl-9 h-9 text-[12px] focus:ring-1 focus:ring-white/10 transition-all placeholder:text-white/10 rounded-lg"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-1.5 p-1 bg-white/5 rounded-lg">
                        {(["All", "Light", "Dark"] as const).map((mode) => (
                            <button
                                key={mode}
                                onClick={() => onFilterModeChange(mode)}
                                className={cn(
                                    "flex-1 py-1.5 text-[10px] rounded-md transition-all flex items-center justify-center gap-1.5 font-bold uppercase tracking-wider",
                                    filterMode === mode
                                        ? "bg-white text-black shadow-lg"
                                        : "text-white/40 hover:text-white/70"
                                )}
                            >
                                {mode === "Light" && <Sun className="w-3 h-3" />}
                                {mode === "Dark" && <Moon className="w-3 h-3" />}
                                {mode}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {(["All", "General", "Landing Page", "BI/Analytics"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => onFilterTypeChange(type)}
                                className={cn(
                                    "px-2.5 py-1.5 text-[10px] rounded-lg transition-all border flex items-center gap-1.5 font-bold uppercase tracking-widest",
                                    filterType === type
                                        ? "bg-white/10 text-white border-white/20"
                                        : "bg-transparent text-white/20 border-white/5 hover:text-white/40 hover:border-white/10"
                                )}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0 bg-white/[0.01]">
                <div className="px-6 py-3 border-y border-white/5 flex items-center justify-between shrink-0">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
                        Library ({styles.length})
                    </span>
                    {pinnedStyles.length > 0 ? (
                        <span className="text-[9px] uppercase font-black tracking-[0.24em] text-[#FACC15]/70">
                            Pinned ({pinnedStyles.length})
                        </span>
                    ) : null}
                </div>

                {/* Fixed Scrollable Area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <div className="p-3 space-y-4">
                        {pinnedStyles.length > 0 ? (
                            <div className="space-y-1">
                                <div className="px-2 pt-1 pb-2 text-[9px] uppercase tracking-[0.28em] font-black text-[#FACC15]/55">
                                    Pinned Styles
                                </div>
                                {pinnedStyles.map(renderStyleItem)}
                            </div>
                        ) : null}

                        {unpinnedStyles.length > 0 ? (
                            <div className="space-y-1">
                                {pinnedStyles.length > 0 ? (
                                    <div className="px-2 pt-2 pb-2 text-[9px] uppercase tracking-[0.28em] font-black text-white/18">
                                        All Styles
                                    </div>
                                ) : null}
                                {unpinnedStyles.map(renderStyleItem)}
                            </div>
                        ) : null}

                        {styles.length === 0 ? (
                            <div className="px-4 py-10 text-center rounded-xl border border-white/5 bg-white/[0.02]">
                                <p className="text-[10px] uppercase tracking-[0.28em] font-black text-white/20 mb-3">
                                    No Matches
                                </p>
                                <p className="text-xs text-white/35 leading-relaxed">
                                    Try a different keyword or reset the current filters.
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-white/5 bg-black/40">
                <div className="flex items-center justify-between text-[10px] text-white/10 uppercase tracking-[0.2em] font-black">
                    <span>Style Library v1</span>
                </div>
            </div>
        </div>
    );
};
