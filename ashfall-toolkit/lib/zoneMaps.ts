export type ZoneMapId = "bc07_zangarmarsh";

export type MapMarkerType = "harvest" | "event" | "raidBoss";

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

      // South / Umbrafen
      { id: "harvest-s-umbra-01", type: "harvest", name: "Sporewood Stands", detail: "Wood", x: 73.2, y: 78.1 },
      { id: "harvest-s-umbra-02", type: "harvest", name: "Bog Iron Vein", detail: "Ore", x: 77.4, y: 80.8 },
      { id: "harvest-s-umbra-03", type: "harvest", name: "Reedbank Fiber", detail: "Fiber", x: 70.8, y: 74.9 },
      { id: "harvest-s-umbra-04", type: "harvest", name: "Glowcap Patch", detail: "Herbs", x: 79.8, y: 74.4 },
      { id: "harvest-s-umbra-05", type: "harvest", name: "Silted Ore", detail: "Ore", x: 68.0, y: 82.9 },
      { id: "harvest-s-umbra-06", type: "harvest", name: "Marsh Reed Loop", detail: "Fiber", x: 75.8, y: 71.8 },

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
    ],
  },
};

export function getZoneMap(id: ZoneMapId) {
  return zoneMaps[id];
}

