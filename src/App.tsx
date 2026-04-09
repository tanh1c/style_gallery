import { Sidebar, type LibraryTab } from "@/components/Sidebar";
import { StylePreview } from "@/components/StylePreview";
import { TooltipProvider } from "@/components/ui/tooltip";
import { loadExternalStyles } from "@/data/externalSites";
import { styles,type Style } from "@/data/styles";
import { useEffect,useMemo,useState } from "react";

type FilterMode = "All" | "Light" | "Dark";
type FilterType = "All" | "General" | "Landing Page" | "BI/Analytics";
const FAVORITES_STORAGE_KEY = "style-gallery.favorite-styles";

const getStoredFavorites = (): number[] => {
  try {
    const storedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!storedFavorites) {
      return [];
    }

    const parsedFavorites = JSON.parse(storedFavorites);

    if (!Array.isArray(parsedFavorites)) {
      return [];
    }

    return Array.from(
      new Set(
        parsedFavorites
          .map((value) => Number(value))
          .filter((value) => Number.isInteger(value))
      )
    );
  } catch {
    return [];
  }
};

function App() {
  const [externalStyles, setExternalStyles] = useState<Style[]>([]);
  const allStyles = useMemo(() => [...styles, ...externalStyles], [externalStyles]);
  const internalCount = useMemo(
    () => allStyles.filter((style) => style.source !== "external").length,
    [allStyles]
  );
  const hostedCount = useMemo(
    () => allStyles.filter((style) => style.source === "external").length,
    [allStyles]
  );
  const [selectedStyleNo, setSelectedStyleNo] = useState<number>(styles[0]?.no ?? 1);
  const [libraryTab, setLibraryTab] = useState<LibraryTab>("styles");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState<FilterMode>("All");
  const [filterType, setFilterType] = useState<FilterType>("All");
  const [favoriteStyleNos, setFavoriteStyleNos] = useState<number[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return getStoredFavorites();
  });
  const selectedStyle = useMemo(
    () => allStyles.find((style) => style.no === selectedStyleNo) ?? allStyles[0] ?? null,
    [allStyles, selectedStyleNo]
  );
  const tabStyles = useMemo(() => {
    return allStyles.filter((style) =>
      libraryTab === "hosted" ? style.source === "external" : style.source !== "external"
    );
  }, [allStyles, libraryTab]);

  useEffect(() => {
    let isActive = true;

    loadExternalStyles(styles.length + 1)
      .then((nextStyles) => {
        if (isActive) {
          setExternalStyles(nextStyles);
        }
      })
      .catch(() => {
        if (isActive) {
          setExternalStyles([]);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  const filteredStyles = useMemo(() => {
    return tabStyles.filter((style) => {
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
  }, [tabStyles, searchQuery, filterMode, filterType]);

  useEffect(() => {
    if (allStyles.length === 0) {
      return;
    }

    if (!allStyles.some((style) => style.no === selectedStyleNo)) {
      setSelectedStyleNo(tabStyles[0]?.no ?? allStyles[0].no);
      return;
    }

    if (!selectedStyle) {
      setSelectedStyleNo(tabStyles[0]?.no ?? allStyles[0].no);
      return;
    }

    const selectedStyleMatchesTab =
      libraryTab === "hosted"
        ? selectedStyle.source === "external"
        : selectedStyle.source !== "external";

    if (!selectedStyleMatchesTab) {
      if (tabStyles[0]) {
        setSelectedStyleNo(tabStyles[0].no);
      }
    }
  }, [allStyles, libraryTab, selectedStyle, tabStyles]);

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
          libraryTab={libraryTab}
          onLibraryTabChange={setLibraryTab}
          internalCount={internalCount}
          hostedCount={hostedCount}
          styles={filteredStyles}
          selectedStyle={selectedStyle}
          onSelectStyle={(style) => setSelectedStyleNo(style.no)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterMode={filterMode}
          onFilterModeChange={setFilterMode}
          filterType={filterType}
          onFilterTypeChange={setFilterType}
          favoriteStyleNos={favoriteStyleNos}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Main Preview Area */}
        <main className="flex-1 overflow-hidden">
          {selectedStyle ? <StylePreview style={selectedStyle} /> : null}
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
