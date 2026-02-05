export const ZONE_MAP_IDS = [
  "emberwastes",
  "ironwood",
  "silvershade",
  "voidreach",
  "bc07_zangarmarsh",
] as const;

export type ZoneMapId = (typeof ZONE_MAP_IDS)[number];

export function isZoneMapId(value: string): value is ZoneMapId {
  return (ZONE_MAP_IDS as readonly string[]).includes(value);
}

export type MapMarkerType = "harvest" | "event" | "raidBoss" | "base";

export type MapMarker = {
  id: string;
  type: MapMarkerType;
  name: string;
  detail?: string;
  /**
   * Optional "zone" radius for area highlights (percent of map width).
   * Rendered as a circular region around the marker.
   */
  areaRadius?: number;
  /**
   * Used for highly-visible callouts (e.g. active raid boss).
   */
  status?: "active" | "inactive";
  /**
   * Base footprint cells (grid offsets).
   * Used when `type === "base"`.
   */
  cells?: Array<{ x: number; y: number }>;
  /**
   * Optional base footprint size, in percent of map width/height.
   * Used by the map renderer for rectangular base overlays.
   */
  w?: number;
  h?: number;
  /**
   * Percent coordinates within the map image:
   * - x: 0..100 from left → right
   * - y: 0..100 from top → bottom
   */
  x: number;
  y: number;
};

export type ZoneMap = {
  id: ZoneMapId;
  name: string;
  imageSrc: string;
  /**
   * Tailwind aspect ratio, e.g. [16, 9] for `aspect-[16/9]`.
   * Keep this aligned with the actual image for accurate marker placement.
   */
  aspect: [number, number];
  markers: MapMarker[];
};

export const zoneMaps: Record<ZoneMapId, ZoneMap> = {
  emberwastes: {
    id: "emberwastes",
    name: "Emberwastes",
    imageSrc: "/assets/ZoneMaps/EmberWastes.png",
    aspect: [3, 2],
    markers: [
      // Harvestables
      { id: "harvest-ember-cinderstone-01", type: "harvest", name: "Cinderstone Vein", detail: "Ore", x: 52.0, y: 34.0 },
      { id: "harvest-ember-cinderstone-02", type: "harvest", name: "Cinderstone Vein", detail: "Ore", x: 61.0, y: 46.0 },
      { id: "harvest-ember-cinderstone-03", type: "harvest", name: "Cinderstone Vein", detail: "Ore", x: 44.0, y: 52.0 },
      { id: "harvest-ember-ashwood-01", type: "harvest", name: "Ashwood Stands", detail: "Timber", x: 24.0, y: 58.0 },
      { id: "harvest-ember-ashwood-02", type: "harvest", name: "Ashwood Stands", detail: "Timber", x: 32.0, y: 42.0 },
      { id: "harvest-ember-sulfur-01", type: "harvest", name: "Sulfur Blooms", detail: "Explosives mats", x: 70.0, y: 60.0 },
      { id: "harvest-ember-sulfur-02", type: "harvest", name: "Sulfur Blooms", detail: "Explosives mats", x: 58.0, y: 70.0 },
      { id: "harvest-ember-glasssand-01", type: "harvest", name: "Glass‑sand Dunes", detail: "Optics mats", x: 16.0, y: 72.0 },
      { id: "harvest-ember-glasssand-02", type: "harvest", name: "Glass‑sand Dunes", detail: "Optics mats", x: 38.0, y: 78.0 },

      // Strongholds
      { id: "poi-ember-cinder-bastion", type: "event", name: "Cinder Bastion", detail: "Stronghold • layered walls, ballista nests", areaRadius: 9.5, x: 48.0, y: 55.0 },
      { id: "poi-ember-meltworks", type: "event", name: "The Meltworks", detail: "Stronghold • dense scrap + elites", areaRadius: 8.0, x: 30.0, y: 64.0 },
      { id: "poi-ember-ashgate-pass", type: "event", name: "Ashgate Pass", detail: "Chokepoint • caravan lane", areaRadius: 7.5, x: 62.0, y: 28.0 },

      // Events
      { id: "event-ember-ash-squall-surge", type: "event", name: "Ash Squall Surge", detail: "Storm window • bonus nodes", areaRadius: 12.0, x: 56.0, y: 44.0 },
      { id: "event-ember-salvage-convoy", type: "event", name: "Salvage Convoy", detail: "Escort/ambush • siege parts", areaRadius: 10.0, x: 40.0, y: 46.0 },
      { id: "event-ember-breach-drill", type: "event", name: "Breach Drill", detail: "Timed objective • siege permit", areaRadius: 8.5, x: 68.0, y: 52.0 },

      // Bosses
      { id: "boss-ember-furnace-wyrm", type: "raidBoss", status: "inactive", name: "The Furnace Wyrm", detail: "World boss • collapsing cover", areaRadius: 13.5, x: 74.0, y: 42.0 },
      { id: "boss-ember-castellan", type: "raidBoss", status: "inactive", name: "Bastion Castellan", detail: "Stronghold boss • shield phases", areaRadius: 10.0, x: 46.0, y: 56.0 },

      // Player bases (sample placements)
      {
        id: "base-ember-01",
        type: "base",
        name: "Homestead",
        detail: "2×2 core",
        x: 36.0,
        y: 72.0,
        cells: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-ember-02",
        type: "base",
        name: "Homestead",
        detail: "Courtyard (13 cells)",
        x: 60.0,
        y: 66.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 }, { x: 3, y: 1 },
          { x: 0, y: 2 }, { x: 3, y: 2 },
          { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-ember-03",
        type: "base",
        name: "Homestead",
        detail: "L‑shape (12 cells)",
        x: 26.0,
        y: 52.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: 2 },
          { x: 0, y: 3 },
          { x: 1, y: 3 }, { x: 2, y: 3 },
          { x: 1, y: 2 }, { x: 2, y: 2 },
          { x: 1, y: 1 },
        ],
      },
    ],
  },
  ironwood: {
    id: "ironwood",
    name: "Ironwood",
    imageSrc: "/assets/ZoneMaps/Ironwood.png",
    aspect: [3, 2],
    markers: [
      // Harvestables
      { id: "harvest-iron-heartwood-01", type: "harvest", name: "Ironwood Heartwood", detail: "Timber", x: 18.0, y: 34.0 },
      { id: "harvest-iron-heartwood-02", type: "harvest", name: "Ironwood Heartwood", detail: "Timber", x: 30.0, y: 44.0 },
      { id: "harvest-iron-heartwood-03", type: "harvest", name: "Ironwood Heartwood", detail: "Timber", x: 42.0, y: 58.0 },
      { id: "harvest-iron-fiber-01", type: "harvest", name: "Verdant Fiber", detail: "Fiber", x: 58.0, y: 52.0 },
      { id: "harvest-iron-fiber-02", type: "harvest", name: "Verdant Fiber", detail: "Fiber", x: 64.0, y: 66.0 },
      { id: "harvest-iron-sapstone-01", type: "harvest", name: "Sapstone", detail: "Adhesives", x: 72.0, y: 44.0 },
      { id: "harvest-iron-shadowleaf-01", type: "harvest", name: "Shadowleaf Herbs", detail: "Potions", x: 52.0, y: 38.0 },
      { id: "harvest-iron-shadowleaf-02", type: "harvest", name: "Shadowleaf Herbs", detail: "Potions", x: 36.0, y: 30.0 },

      // Strongholds / POIs
      { id: "poi-iron-rootgate", type: "event", name: "Rootgate Keep", detail: "Stronghold • vertical fights", areaRadius: 9.0, x: 22.0, y: 52.0 },
      { id: "poi-iron-hollow-market", type: "event", name: "Hollow Market", detail: "POI • neutral-ish trading hub", areaRadius: 8.0, x: 50.0, y: 60.0 },
      { id: "poi-iron-old-road", type: "event", name: "The Old Road", detail: "Lane • escorts & intercepts", areaRadius: 10.0, x: 66.0, y: 56.0 },

      // Events
      { id: "event-iron-stag-king", type: "event", name: "Hunt: The Stag‑King", detail: "Trackable roaming elite", areaRadius: 11.0, x: 34.0, y: 64.0 },
      { id: "event-iron-timberfall", type: "event", name: "Timberfall", detail: "Mass harvesting window", areaRadius: 12.5, x: 62.0, y: 48.0 },
      { id: "event-iron-wardstone", type: "event", name: "Wardstone Ritual", detail: "Hold circles • claim a zone buff", areaRadius: 9.5, x: 78.0, y: 38.0 },

      // Bosses
      { id: "boss-iron-briar-matron", type: "raidBoss", status: "inactive", name: "The Briar Matron", detail: "World boss • root snares + adds", areaRadius: 13.0, x: 84.0, y: 54.0 },
      { id: "boss-iron-rootgate-warden", type: "raidBoss", status: "inactive", name: "Rootgate Warden", detail: "Stronghold boss • patrol callouts", areaRadius: 10.0, x: 24.0, y: 52.0 },

      // Player bases (sample placements)
      {
        id: "base-iron-01",
        type: "base",
        name: "Homestead",
        detail: "3×3 with hole (8 cells)",
        x: 58.0,
        y: 70.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 },
          { x: 0, y: 1 },               { x: 2, y: 1 },
          { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        ],
      },
      {
        id: "base-iron-02",
        type: "base",
        name: "Homestead",
        detail: "6×3 camp (18 cells)",
        x: 40.0,
        y: 78.0,
        cells: Array.from({ length: 18 }, (_, i) => ({ x: i % 6, y: Math.floor(i / 6) })),
      },
      {
        id: "base-iron-03",
        type: "base",
        name: "Homestead",
        detail: "4×3 with notch (11 cells)",
        x: 34.0,
        y: 56.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 3, y: 1 },
          { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 },
        ],
      },
    ],
  },
  silvershade: {
    id: "silvershade",
    name: "Silvershade",
    imageSrc: "/assets/ZoneMaps/Silvershade.png",
    aspect: [3, 2],
    markers: [
      // Harvestables
      { id: "harvest-silver-slate-01", type: "harvest", name: "Silver‑slate", detail: "Armor trims", x: 18.0, y: 58.0 },
      { id: "harvest-silver-slate-02", type: "harvest", name: "Silver‑slate", detail: "Armor trims", x: 34.0, y: 46.0 },
      { id: "harvest-silver-moonreed-01", type: "harvest", name: "Moonreed", detail: "Arcane fiber", x: 56.0, y: 54.0 },
      { id: "harvest-silver-moonreed-02", type: "harvest", name: "Moonreed", detail: "Arcane fiber", x: 62.0, y: 40.0 },
      { id: "harvest-silver-river-ore-01", type: "harvest", name: "River‑ore", detail: "Weapon fittings", x: 48.0, y: 66.0 },
      { id: "harvest-silver-lumen-01", type: "harvest", name: "Lumen Herbs", detail: "Cleanse + clarity", x: 74.0, y: 56.0 },
      { id: "harvest-silver-lumen-02", type: "harvest", name: "Lumen Herbs", detail: "Cleanse + clarity", x: 66.0, y: 70.0 },

      // Strongholds / POIs
      { id: "poi-silver-abbey", type: "event", name: "Gloamspire Abbey", detail: "Stronghold • shrine rooms + puzzle doors", areaRadius: 10.5, x: 78.0, y: 34.0 },
      { id: "poi-silver-bridge", type: "event", name: "The Silver Bridge", detail: "Landmark • prime siege fights", areaRadius: 9.0, x: 56.0, y: 58.0 },
      { id: "poi-silver-wharf", type: "event", name: "Sable Wharf", detail: "Extraction hub • contested", areaRadius: 8.5, x: 40.0, y: 74.0 },

      // Events
      { id: "event-silver-procession", type: "event", name: "Relic Procession", detail: "Escort • relic shards", areaRadius: 11.0, x: 52.0, y: 60.0 },
      { id: "event-silver-convergence", type: "event", name: "Moonlit Convergence", detail: "Ritual • rune holds", areaRadius: 12.0, x: 70.0, y: 52.0 },
      { id: "event-silver-bell-toll", type: "event", name: "Abbey Bell Toll", detail: "Dungeon surge • bonus rooms", areaRadius: 9.0, x: 80.0, y: 36.0 },

      // Bosses
      { id: "boss-silver-pale-duchess", type: "raidBoss", status: "inactive", name: "The Pale Duchess", detail: "World boss • charm/fear telegraphs", areaRadius: 13.0, x: 26.0, y: 56.0 },
      { id: "boss-silver-abbot", type: "raidBoss", status: "inactive", name: "Abbot of Gloamspire", detail: "Stronghold boss • phase switches", areaRadius: 10.0, x: 78.0, y: 34.0 },

      // Player bases (sample placements)
      {
        id: "base-silver-01",
        type: "base",
        name: "Homestead",
        detail: "2×5 outpost (10 cells)",
        x: 46.0,
        y: 82.0,
        cells: Array.from({ length: 10 }, (_, i) => ({ x: i % 2, y: Math.floor(i / 2) })),
      },
      {
        id: "base-silver-02",
        type: "base",
        name: "Homestead",
        detail: "3×6 longhall (18 cells)",
        x: 22.0,
        y: 66.0,
        cells: Array.from({ length: 18 }, (_, i) => ({ x: i % 3, y: Math.floor(i / 3) })),
      },
      {
        id: "base-silver-03",
        type: "base",
        name: "Homestead",
        detail: "2×2 core",
        x: 64.0,
        y: 70.0,
        cells: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ],
      },
    ],
  },
  voidreach: {
    id: "voidreach",
    name: "Voidreach",
    imageSrc: "/assets/ZoneMaps/VoidReach.jpg",
    aspect: [3, 2],
    markers: [
      // Harvestables
      { id: "harvest-void-voidstone-01", type: "harvest", name: "Voidstone", detail: "High‑tier crafting", x: 22.0, y: 62.0 },
      { id: "harvest-void-voidstone-02", type: "harvest", name: "Voidstone", detail: "High‑tier crafting", x: 36.0, y: 70.0 },
      { id: "harvest-void-aether-01", type: "harvest", name: "Aether Thread", detail: "Mobility items", x: 54.0, y: 44.0 },
      { id: "harvest-void-fracture-01", type: "harvest", name: "Fracture Crystal", detail: "Upgrade catalyst", x: 66.0, y: 58.0 },
      { id: "harvest-void-fracture-02", type: "harvest", name: "Fracture Crystal", detail: "Upgrade catalyst", x: 44.0, y: 34.0 },
      { id: "harvest-void-nullbloom-01", type: "harvest", name: "Nullbloom", detail: "Rare cleanse mats", x: 78.0, y: 50.0 },

      // Strongholds / POIs
      { id: "poi-void-riftworks", type: "event", name: "The Riftworks", detail: "Stronghold • puzzle gates + elites", areaRadius: 10.5, x: 58.0, y: 38.0 },
      { id: "poi-void-obsidian-spire", type: "event", name: "Obsidian Spire", detail: "Stronghold • knockback hazards", areaRadius: 10.0, x: 78.0, y: 62.0 },
      { id: "poi-void-causeway", type: "event", name: "The Shattered Causeway", detail: "Main lane • most contested", areaRadius: 12.0, x: 46.0, y: 58.0 },

      // Events
      { id: "event-void-rift-tide", type: "event", name: "Rift Tide", detail: "Safe lanes rotate", areaRadius: 14.0, x: 52.0, y: 52.0 },
      { id: "event-void-echo-storm", type: "event", name: "Echo Storm", detail: "Hold objectives while debuffed", areaRadius: 12.5, x: 70.0, y: 46.0 },
      { id: "event-void-gate-breach", type: "event", name: "Gate Breach", detail: "Open sealed doors • 20 min", areaRadius: 11.0, x: 60.0, y: 40.0 },

      // Bosses
      { id: "boss-void-null-titan", type: "raidBoss", status: "inactive", name: "The Null Titan", detail: "World raid boss • arena hazards + adds", areaRadius: 15.0, x: 62.0, y: 56.0 },
      { id: "boss-void-spire-architect", type: "raidBoss", status: "inactive", name: "Spire Architect", detail: "Stronghold boss • geometry attacks", areaRadius: 11.0, x: 78.0, y: 62.0 },

      // Player bases (sample placements)
      {
        id: "base-void-01",
        type: "base",
        name: "Homestead",
        detail: "2×2 core",
        x: 34.0,
        y: 74.0,
        cells: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-void-02",
        type: "base",
        name: "Homestead",
        detail: "L‑shape (12 cells)",
        x: 56.0,
        y: 66.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: 2 },
          { x: 0, y: 3 },
          { x: 1, y: 3 }, { x: 2, y: 3 },
          { x: 1, y: 2 }, { x: 2, y: 2 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-void-03",
        type: "base",
        name: "Homestead",
        detail: "3×3 with hole (8 cells)",
        x: 70.0,
        y: 74.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 },
          { x: 0, y: 1 },               { x: 2, y: 1 },
          { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        ],
      },
    ],
  },
  bc07_zangarmarsh: {
    id: "bc07_zangarmarsh",
    name: "Zangarmarsh",
    imageSrc: "/assets/ZoneMaps/bc07_zangarmarsh.jpg",
    aspect: [16, 9],
    markers: [
      // Harvesting (loaded pass — tune as we define real node layouts)
      // West / Sporeggar / The Spawning Glen
      { id: "harvest-w-sporeggar-01", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 12.8, y: 55.2 },
      { id: "harvest-w-sporeggar-02", type: "harvest", name: "Bogbloom Cluster", detail: "Herbs", x: 16.9, y: 56.4 },
      { id: "harvest-w-sporeggar-03", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 14.7, y: 61.3 },
      { id: "harvest-w-sporeggar-04", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 18.9, y: 50.1 },
      { id: "harvest-w-sporeggar-05", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 20.4, y: 58.9 },
      { id: "harvest-w-glen-01", type: "harvest", name: "Fungal Caps", detail: "Herbs", x: 10.5, y: 67.1 },
      { id: "harvest-w-glen-02", type: "harvest", name: "Silted Ore", detail: "Ore", x: 17.1, y: 70.2 },
      { id: "harvest-w-glen-03", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 22.6, y: 64.7 },
      { id: "harvest-w-glen-04", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 24.2, y: 69.6 },
      { id: "harvest-w-glen-05", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 15.1, y: 73.5 },
      // West (extra density)
      { id: "harvest-w-sporeggar-06", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 9.8, y: 58.3 },
      { id: "harvest-w-sporeggar-07", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 13.9, y: 51.8 },
      { id: "harvest-w-sporeggar-08", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 19.4, y: 53.8 },
      { id: "harvest-w-sporeggar-09", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 21.9, y: 60.9 },
      { id: "harvest-w-sporeggar-10", type: "harvest", name: "Bogbloom Cluster", detail: "Herbs", x: 12.0, y: 63.9 },
      { id: "harvest-w-glen-06", type: "harvest", name: "Silted Ore", detail: "Ore", x: 8.3, y: 71.2 },
      { id: "harvest-w-glen-07", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 12.2, y: 69.4 },
      { id: "harvest-w-glen-08", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 20.9, y: 73.1 },
      { id: "harvest-w-glen-09", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 26.1, y: 66.6 },
      { id: "harvest-w-glen-10", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 19.3, y: 63.0 },

      // North / Ango'rosh / Orebore / Marshlight
      { id: "harvest-n-ango-01", type: "harvest", name: "Shoreline Ore", detail: "Ore", x: 18.8, y: 28.8 },
      { id: "harvest-n-ango-02", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 24.3, y: 30.7 },
      { id: "harvest-n-ango-03", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 28.5, y: 26.8 },
      { id: "harvest-n-orebore-01", type: "harvest", name: "Rocky Outcrop", detail: "Ore", x: 46.8, y: 29.7 },
      { id: "harvest-n-orebore-02", type: "harvest", name: "Bogbloom Cluster", detail: "Herbs", x: 44.0, y: 33.0 },
      { id: "harvest-n-marshlight-01", type: "harvest", name: "Marshlight Ore", detail: "Ore", x: 28.3, y: 42.4 },
      { id: "harvest-n-marshlight-02", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 33.2, y: 44.2 },
      { id: "harvest-n-marshlight-03", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 25.6, y: 47.0 },
      { id: "harvest-n-marshlight-04", type: "harvest", name: "Silted Ore", detail: "Ore", x: 23.5, y: 40.9 },
      // North (extra density)
      { id: "harvest-n-ango-04", type: "harvest", name: "Bogbloom Cluster", detail: "Herbs", x: 16.0, y: 33.2 },
      { id: "harvest-n-ango-05", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 20.9, y: 35.9 },
      { id: "harvest-n-ango-06", type: "harvest", name: "Shoreline Ore", detail: "Ore", x: 26.9, y: 22.8 },
      { id: "harvest-n-orebore-03", type: "harvest", name: "Rocky Outcrop", detail: "Ore", x: 52.8, y: 27.5 },
      { id: "harvest-n-orebore-04", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 41.2, y: 26.1 },
      { id: "harvest-n-orebore-05", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 47.1, y: 35.8 },
      { id: "harvest-n-marshlight-05", type: "harvest", name: "Marshlight Ore", detail: "Ore", x: 31.8, y: 38.9 },
      { id: "harvest-n-marshlight-06", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 34.2, y: 47.7 },
      { id: "harvest-n-marshlight-07", type: "harvest", name: "Silted Ore", detail: "Ore", x: 21.6, y: 46.2 },

      // Center / Zabra'jin / Twin Spire / Serpent Lake / Lagoon
      { id: "harvest-c-zab-01", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 33.7, y: 56.8 },
      { id: "harvest-c-zab-02", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 37.6, y: 60.6 },
      { id: "harvest-c-zab-03", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 39.4, y: 54.1 },
      { id: "harvest-c-twin-01", type: "harvest", name: "Glowcap Grove", detail: "Herbs • high density", x: 48.6, y: 53.2 },
      { id: "harvest-c-twin-02", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 52.1, y: 55.6 },
      { id: "harvest-c-twin-03", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 45.2, y: 58.0 },
      { id: "harvest-c-serpent-01", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 44.7, y: 45.8 },
      { id: "harvest-c-serpent-02", type: "harvest", name: "Silted Ore", detail: "Ore", x: 49.5, y: 41.9 },
      { id: "harvest-c-lagoon-01", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 61.4, y: 60.8 },
      { id: "harvest-c-lagoon-02", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 63.2, y: 56.0 },
      // Center (extra density)
      { id: "harvest-c-zab-04", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 29.7, y: 60.1 },
      { id: "harvest-c-zab-05", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 36.2, y: 52.1 },
      { id: "harvest-c-zab-06", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 40.5, y: 62.8 },
      { id: "harvest-c-twin-04", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 50.8, y: 49.9 },
      { id: "harvest-c-twin-05", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 46.8, y: 50.7 },
      { id: "harvest-c-twin-06", type: "harvest", name: "Silted Ore", detail: "Ore", x: 53.9, y: 58.8 },
      { id: "harvest-c-serpent-03", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 41.2, y: 40.9 },
      { id: "harvest-c-serpent-04", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 45.1, y: 37.7 },
      { id: "harvest-c-lagoon-03", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 57.9, y: 57.0 },
      { id: "harvest-c-lagoon-04", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 66.2, y: 60.2 },

      // East / Telredor / Swamprat / Cenarion / Dead Mire
      { id: "harvest-e-tel-01", type: "harvest", name: "River Reeds", detail: "Fiber", x: 70.9, y: 45.2 },
      { id: "harvest-e-tel-02", type: "harvest", name: "Bogbloom Cluster", detail: "Herbs", x: 73.9, y: 48.9 },
      { id: "harvest-e-tel-03", type: "harvest", name: "Shoreline Ore", detail: "Ore", x: 66.8, y: 43.1 },
      { id: "harvest-e-swamprat-01", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 88.3, y: 50.4 },
      { id: "harvest-e-swamprat-02", type: "harvest", name: "Silted Ore", detail: "Ore", x: 86.7, y: 54.5 },
      { id: "harvest-e-cenarion-01", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 84.1, y: 59.9 },
      { id: "harvest-e-cenarion-02", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 82.2, y: 63.6 },
      { id: "harvest-e-deadmire-01", type: "harvest", name: "Dead Mire Herbs", detail: "Herbs • dangerous", x: 86.1, y: 39.0 },
      { id: "harvest-e-deadmire-02", type: "harvest", name: "Rocky Outcrop", detail: "Ore • dangerous", x: 82.7, y: 33.6 },
      // East (extra density)
      { id: "harvest-e-tel-04", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 68.9, y: 49.2 },
      { id: "harvest-e-tel-05", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 75.9, y: 43.7 },
      { id: "harvest-e-tel-06", type: "harvest", name: "Silted Ore", detail: "Ore", x: 77.8, y: 50.9 },
      { id: "harvest-e-swamprat-03", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 91.6, y: 55.1 },
      { id: "harvest-e-swamprat-04", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 89.0, y: 47.0 },
      { id: "harvest-e-cenarion-03", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 79.8, y: 62.2 },
      { id: "harvest-e-cenarion-04", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 86.2, y: 66.0 },
      { id: "harvest-e-deadmire-03", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 80.5, y: 38.6 },
      { id: "harvest-e-deadmire-04", type: "harvest", name: "Rocky Outcrop", detail: "Ore", x: 88.8, y: 33.0 },

      // South / Umbrafen
      { id: "harvest-s-umbra-01", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 73.2, y: 78.1 },
      { id: "harvest-s-umbra-02", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 77.4, y: 80.8 },
      { id: "harvest-s-umbra-03", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 70.8, y: 74.9 },
      { id: "harvest-s-umbra-04", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 79.8, y: 74.4 },
      { id: "harvest-s-umbra-05", type: "harvest", name: "Silted Ore", detail: "Ore", x: 68.0, y: 82.9 },
      { id: "harvest-s-umbra-06", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 75.8, y: 71.8 },
      // South (extra density)
      { id: "harvest-s-umbra-07", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 69.5, y: 79.1 },
      { id: "harvest-s-umbra-08", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 82.2, y: 82.5 },
      { id: "harvest-s-umbra-09", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 72.4, y: 84.9 },
      { id: "harvest-s-umbra-10", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 77.9, y: 69.3 },
      { id: "harvest-s-umbra-11", type: "harvest", name: "Silted Ore", detail: "Ore", x: 80.6, y: 76.9 },
      { id: "harvest-s-umbra-12", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 66.2, y: 75.9 },

      // Events (sample points — tune as we define event rules)
      {
        id: "event-serpentlake-rift",
        type: "event",
        name: "Abyssal Rift",
        detail: "Dynamic event • 10–15 min • rewards: arcane mats",
        areaRadius: 10.0,
        x: 43.0,
        y: 42.0,
      },
      {
        id: "event-coilfang-ambush",
        type: "event",
        name: "Coilfang Ambush",
        detail: "Escort interruption • squad-scale",
        areaRadius: 8.0,
        x: 56.5,
        y: 35.0,
      },
      {
        id: "event-deadmire-hunt",
        type: "event",
        name: "Dead Mire Hunt",
        detail: "Roaming elite • drops: trinket shards",
        areaRadius: 9.0,
        x: 85.0,
        y: 35.5,
      },

      // Active raid boss
      {
        id: "raidboss-the-drowned-colossus",
        type: "raidBoss",
        status: "active",
        name: "The Drowned Colossus",
        detail: "RAID BOSS • active now • brings adds + flood zones",
        areaRadius: 14.0,
        x: 61.5,
        y: 58.5,
      },

      // Player bases (placed to avoid nodes + event/raid zones)
      // Bases are made of adjacent "cells" (tiles). Keep shapes <= ~18 cells.
      {
        id: "base-01",
        type: "base",
        name: "Homestead",
        detail: "2×2 core",
        x: 32.0,
        y: 58.0,
        cells: [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-02",
        type: "base",
        name: "Homestead",
        detail: "L‑shape (12 cells)",
        x: 26.0,
        y: 46.5,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: 2 },
          { x: 0, y: 3 },
          { x: 1, y: 3 }, { x: 2, y: 3 },
          { x: 1, y: 2 }, { x: 2, y: 2 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-03",
        type: "base",
        name: "Homestead",
        detail: "3×6 longhall (18 cells)",
        x: 34.0,
        y: 70.0,
        cells: Array.from({ length: 18 }, (_, i) => ({ x: i % 3, y: Math.floor(i / 3) })),
      },
      {
        id: "base-04",
        type: "base",
        name: "Homestead",
        detail: "4×3 with notch (11 cells)",
        x: 72.0,
        y: 46.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 3, y: 1 },
          { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 },
        ],
      },
      {
        id: "base-05",
        type: "base",
        name: "Homestead",
        detail: "Courtyard (13 cells)",
        x: 40.0,
        y: 60.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
          { x: 0, y: 1 }, { x: 3, y: 1 },
          { x: 0, y: 2 }, { x: 3, y: 2 },
          { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
          { x: 1, y: 1 },
        ],
      },
      {
        id: "base-06",
        type: "base",
        name: "Homestead",
        detail: "6×3 camp (18 cells)",
        x: 78.0,
        y: 70.0,
        cells: Array.from({ length: 18 }, (_, i) => ({ x: i % 6, y: Math.floor(i / 6) })),
      },
      {
        id: "base-07",
        type: "base",
        name: "Homestead",
        detail: "3×3 with hole (8 cells)",
        x: 50.0,
        y: 78.0,
        cells: [
          { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 },
          { x: 0, y: 1 },               { x: 2, y: 1 },
          { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 },
        ],
      },
      {
        id: "base-08",
        type: "base",
        name: "Homestead",
        detail: "2×5 outpost (10 cells)",
        x: 70.0,
        y: 28.0,
        cells: Array.from({ length: 10 }, (_, i) => ({ x: i % 2, y: Math.floor(i / 2) })),
      },
    ],
  },
};

export function getZoneMap(id: ZoneMapId) {
  return zoneMaps[id];
}

