import { Sidebar } from "@/components/Sidebar";
import { StylePreview } from "@/components/StylePreview";
import { TooltipProvider } from "@/components/ui/tooltip";
import { styles,type Style } from "@/data/styles";
import { useEffect,useMemo,useState } from "react";

type FilterMode = "All" | "Light" | "Dark";
type FilterType = "All" | "General" | "Landing Page" | "BI/Analytics";
const FAVORITES_STORAGE_KEY = "style-gallery.favorite-styles";

function App() {
  const [selectedStyle, setSelectedStyle] = useState<Style>(styles[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState<FilterMode>("All");
  const [filterType, setFilterType] = useState<FilterType>("All");
  const [favoriteStyleNos, setFavoriteStyleNos] = useState<number[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const storedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (!storedFavorites) {
        return [];
      }

      const parsedFavorites = JSON.parse(storedFavorites);

      if (!Array.isArray(parsedFavorites)) {
        return [];
      }

      const validFavorites = parsedFavorites
        .map((value) => Number(value))
        .filter((value) => Number.isInteger(value) && styles.some((style) => style.no === value));

      return Array.from(new Set(validFavorites));
    } catch {
      return [];
    }
  });

  const filteredStyles = useMemo(() => {
    return styles.filter((style) => {
      const matchesSearch =
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.keywords.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMode =
        filterMode === "All" ||
        (filterMode === "Light" && style.lightMode.includes("✓")) ||
        (filterMode === "Dark" && style.darkMode.includes("✓"));
      const matchesType =
        filterType === "All" || style.type === filterType;
      return matchesSearch && matchesMode && matchesType;
    });
  }, [searchQuery, filterMode, filterType]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteStyleNos));
  }, [favoriteStyleNos]);

  const handleToggleFavorite = (styleNo: number) => {
    setFavoriteStyleNos((currentFavorites) =>
      currentFavorites.includes(styleNo)
        ? currentFavorites.filter((currentStyleNo) => currentStyleNo !== styleNo)
        : [...currentFavorites, styleNo]
    );
  };

  return (
    <TooltipProvider>
      <div className="h-screen flex bg-black text-white overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          styles={filteredStyles}
          selectedStyle={selectedStyle}
          onSelectStyle={setSelectedStyle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterMode={filterMode}
          onFilterModeChange={setFilterMode}
          filterType={filterType}
          onFilterTypeChange={setFilterType}
          favoriteStyleNos={favoriteStyleNos}
          onToggleFavorite={handleToggleFavorite}
          totalCount={styles.length}
        />

        {/* Main Preview Area */}
        <main className="flex-1 overflow-hidden">
          <StylePreview style={selectedStyle} />
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
