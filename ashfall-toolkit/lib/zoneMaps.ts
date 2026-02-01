export type ZoneMapId = "bc07_zangarmarsh";

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
   * Base footprint size (percent of map width/height).
   * Used when `type === "base"`.
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
      { id: "base-01", type: "base", name: "Homestead", detail: "Small build", w: 1.8, h: 1.2, x: 7.0, y: 40.0 },
      { id: "base-02", type: "base", name: "Homestead", detail: "Small build", w: 2.2, h: 1.6, x: 28.0, y: 18.0 },
      { id: "base-03", type: "base", name: "Homestead", detail: "Medium build", w: 2.8, h: 2.0, x: 60.0, y: 18.0 },
      { id: "base-04", type: "base", name: "Homestead", detail: "Medium build", w: 3.4, h: 2.4, x: 95.0, y: 24.0 },
      { id: "base-05", type: "base", name: "Homestead", detail: "Small build", w: 2.0, h: 1.5, x: 6.0, y: 83.0 },
      { id: "base-06", type: "base", name: "Homestead", detail: "Large build", w: 4.4, h: 3.2, x: 95.0, y: 78.0 },
      { id: "base-07", type: "base", name: "Homestead", detail: "Medium build", w: 3.0, h: 2.2, x: 48.0, y: 88.0 },
      { id: "base-08", type: "base", name: "Homestead", detail: "Small build", w: 1.6, h: 1.2, x: 52.0, y: 10.0 },
    ],
  },
};

export function getZoneMap(id: ZoneMapId) {
  return zoneMaps[id];
}

