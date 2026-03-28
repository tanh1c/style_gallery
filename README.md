# style-gallery

`style-gallery` is a React + TypeScript + Vite reference library for exploring UI styles across a shared product world.

Instead of browsing disconnected screenshots, the app lets you compare many visual directions against the same product narrative, inspect their metadata, preview full demo pages, open the source code behind each demo, and generate reusable prompts from selected style implementations.

## What this project does

This project is designed as a design research and prompt engineering playground.

It currently allows you to:

- Browse a large UI style catalog with search and filtering.
- Compare different visual languages using the same fictional product universe: `ViCode`.
- Preview each style inside a browser-like frame.
- Switch the preview viewport between desktop, tablet, and mobile.
- Pin favorite styles in the sidebar and persist them with `localStorage`.
- Open the source code for a demo in a modal with line numbers, copy, and download actions.
- Generate prompts from live demo code for supported styles in two modes:
  - `Recreate Exactly`
  - `Adapt This Style`

## Core idea

The app keeps the product/content layer relatively stable so the comparison is about design language, not content noise.

That makes it useful for:

- visual benchmarking
- prompt writing for design/code models
- design direction reviews
- UI experimentation
- teaching or documenting style systems

## Main structure

```text
src/
  App.tsx                     # top-level app state and layout
  data/styles.ts              # style catalog metadata
  components/
    Sidebar.tsx               # library browsing, favorites, search, filters
    demoRegistry.ts           # lazy registry for demo previews and source loading
    StylePreview.tsx          # preview shell, viewport switching, code/prompt modals
    demos/*.tsx               # one demo implementation per style
  lib/
    generated-prompts.ts      # prompt generation from demo source
  index.css                   # Tailwind v4 base styles and tokens
```

## Current feature set

- Search by style name or keywords.
- Filter by light/dark support.
- Filter by style category.
- Pin favorite styles and keep them across reloads.
- Lazy-load demo components to reduce initial bundle cost.
- Render previews in an iframe-based viewport so responsive breakpoints behave like real device widths.
- Open demo code in a styled viewer with syntax highlighting, line numbers, copy, and download.
- Generate prompts directly from demo source code for supported styles.

## Style groups

The gallery currently includes 67 styles across 3 main groups:

- `General`
- `Landing Page`
- `BI/Analytics`

Some example entries:

- Minimalism & Swiss Style
- Neumorphism
- Aurora UI
- Hero-Centric Design
- AI-Native UI
- Vintage Analog / Retro Film

## How it works

1. `src/data/styles.ts` stores the metadata for the style catalog.
2. `src/App.tsx` manages the selected style, filters, and favorites.
3. `src/components/Sidebar.tsx` handles browsing, filtering, and pinned styles.
4. `src/components/demoRegistry.ts` maps `style.no` to lazy-loaded demo components and source files.
5. `src/components/StylePreview.tsx` renders the active demo, device viewport controls, and code/prompt modals.
6. `src/lib/generated-prompts.ts` builds structured prompts from live demo source for supported styles.
7. Each file in `src/components/demos/` is a standalone visual implementation of one style.

## Tech stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Lucide React
- shadcn / Base UI primitives
- Geist Variable font

## Local development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## TypeScript note

The project keeps strict TypeScript checks enabled, including unused locals and unused parameters, so demo files do not accumulate dead imports or abandoned state over time.

## Suggested next steps

- Expand source-based prompt generation to the remaining unsupported styles.
- Add thumbnail covers for each style in the sidebar.
- Introduce compare mode for side-by-side style review.
- Add export options for design tokens or starter code.
- Continue improving bundle chunking if you want to optimize the large main chunk further.
