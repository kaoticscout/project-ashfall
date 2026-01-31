# Ashfall Prototype Toolkit — Tech Recommendations (Static Site)

Goal: build a **static** (no backend required) website that supports:
- an interactive **world map** (layers + filters + inspector + shareable links)
- **class/build guide** pages (Mobalytics-like layout)
- **progression views** (hero + secondary homestead progression, graph visualization where useful)
- a **seasons** page (battle pass track + rank ladder + rewards)

This doc recommends a practical stack that is fast to ship, easy to iterate, and deployable as a static export.

---

## 1. Recommended Stack (Default)
### 1.1 Framework
- **Next.js + React + TypeScript**
  - Supports route-based pages, static generation, and static export.
  - Great ecosystem for complex UI.

Static export approach:
- Use **static generation** for content pages (classes, seasons).
- Use a **client-rendered tool shell** for heavy interactive pages (map, progression graph) but keep data local.

### 1.2 Styling / UI
- **Tailwind CSS** (fast iteration, easy theming/tokens)
- Optional: **shadcn/ui** (for accessible primitives) *skinned to your WoW-inspired style guide*
- Icon set: **Lucide** (utility icons) + custom “glyph” icon pack for Ashfall flavor

### 1.3 Content/Data
- Store canonical data in-repo:
  - `data/map/*.geojson` (or JSON)
  - `data/classes/*.json`
  - `data/progression/*.json`
  - `data/seasons/*.json`
- Validate at build time using:
  - **Zod** (TypeScript-friendly schema validation)
  - Optional: generate **JSON Schema** for non-dev editors

### 1.4 Search
- **FlexSearch** (client-side full-text search, fast, works offline)
  - Build an index at build time from all entities

---

## 2. World Map Page — Tech Options
You have two viable map approaches depending on whether you have a “real” geographic map or a game-world image.

### Option A (recommended MVP): Image Map + Coordinate System
Best when you have a concept/painted world map.
- Library: **Leaflet**
- Technique: **image overlay** with a simple XY coordinate plane
- Features:
  - render points/polygons from GeoJSON-like data
  - layer toggles + filters
  - click-to-inspect side panel
  - URL state (center/zoom/layers/selected)

Why it’s great:
- dead simple, minimal setup, performs well, perfect for prototypes.

### Option B (later): Vector Tiles + MapLibre
Best when you want tiles, biomes, contour layers, etc.
- Library: **MapLibre GL**
- Data:
  - raster tiles (pre-rendered) or vector tiles
  - features as GeoJSON sources

Why it’s great:
- richer styling, smoother zoom, more “Satisfactory-calculator vibe” for large maps.

Static-site note:
- You can still host tiles statically (e.g., in `/public/tiles/...`) if size is reasonable.

---

## 3. Progression Views — Graph Rendering
Requirement: progression visualization with categories, prerequisites, highlight paths, inspector (hero-first; homestead secondary).

Recommended:
- **React Flow**
  - fast to implement node/edge graphs
  - supports custom nodes, minimap, zoom/pan, selection, and path highlighting

Data model:
- nodes + edges in JSON (stable ids)
- categories/tags for filtering
- computed “dependency paths” in client code (graph traversal)

---

## 4. Classes / Build Guide Pages
Requirement: pages that look like a build guide with sections, ability cards, and media.

Recommended:
- Next.js page per class: `/classes/[classId]`
- Use a consistent “guide layout” component:
  - sticky section nav
  - overview module
  - ability grid (with filters/tags)
  - progression highlights
  - synergy callouts

Optional authoring approach:
- keep the data in JSON for strict structure
- allow **MDX** blocks for rich narrative sections (lore/overview) while abilities remain structured

---

## 5. Seasons Page (Quarterly Season + Battle Pass + Ladder)
Recommended components:
- **Battle Pass Track**
  - horizontal rail or vertical track
  - reward cards (free/premium lanes)
  - tier markers + “you are here” mock profile
- **Rank Ladder**
  - tier list component (Bronze → Legend)
  - reward bundles per rank

Data:
- `Season` file with:
  - cadence dates
  - objective sets (weekly/season-long)
  - battle pass tiers with reward refs
  - rank rewards with reward refs

---

## 6. URL State, Share Links, and Deep Linking
This matters a lot for “tool” pages.

Recommended:
- For map/graph: store state in query params:
  - `?zoom=...&x=...&y=...&layers=resource,npc_camp&selected=camp_003`
- Use a small helper:
  - **nuqs** (query-state binding) or a tiny custom serializer

Result:
- share a link in Discord and it opens to the exact same view.

---

## 7. Performance + Asset Strategy
### 7.1 Media
- Put icons/images in `public/assets/...`
- Keep preview videos/GIFs small; prefer short MP4 loops where possible.

### 7.2 Large Map Assets
- Start with a single background image (compressed).
- If you later need tiles:
  - keep tiles under `/public/tiles/`
  - consider splitting per biome/region

### 7.3 Client Performance
- Use virtualized lists for huge feature sets (optional):
  - `react-virtual` or similar

---

## 8. Dev Experience / Quality
Recommended baseline:
- **ESLint + Prettier**
- Type-check in CI
- Build-time schema validation (fail fast if data is invalid)

Optional but helpful:
- **Storybook** for UI components (buttons, badges, reward cards)

---

## 9. Hosting (Static)
Any of these work well:
- **Cloudflare Pages** (fast, great static hosting)
- **GitHub Pages** (simple, free)
- **Vercel** (works well; static export or SSG)

Recommended for speed:
- Cloudflare Pages or Vercel.

---

## 10. Suggested Repo Structure (Static Toolkit)
Example:
- `app/` or `src/` (Next.js)
- `data/`
  - `map/`
  - `classes/`
  - `progression/`
  - `seasons/`
- `public/assets/`
  - `icons/`
  - `images/`
  - `video/`
- `lib/`
  - schema validators, search index builder, data loaders

---

## 11. MVP Build Order (Recommended)
1. **Map v1 (Leaflet image overlay)**: layers + inspector + shareable URL state
2. **Classes v1**: list + detail + ability cards
3. **Base progression v1 (React Flow)**: tree + filters + inspector
4. **Seasons v1**: battle pass track + rank ladder + reward catalog
5. Global search + polish

---

## 12. If You Want a “More Opinionated” Alternative
If you want something even more static-first than Next.js:
- **Astro + React islands**
  - Astro for content pages, React only for map/graph widgets
  - still supports the same libraries (Leaflet/React Flow)

This is excellent for performance, but Next.js is usually simpler if you want everything in one mental model.

