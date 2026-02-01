export type Cost = { item: string; qty: number };

export type UnlockCategory =
  | "Walls & structure"
  | "Doors & access"
  | "Traps"
  | "Turrets"
  | "Power"
  | "Production"
  | "Utilities"
  | "Siege defense";

export type Unlock = {
  name: string;
  category: UnlockCategory;
  unlockCost: Cost[]; // one-time cost to learn/blueprint
  buildCost: Cost[]; // per-instance cost after unlocked
  notes?: string;
};

export type WorkshopTier = {
  tier: number;
  title: string;
  summary: string;
  /**
   * How you actually advance to this workshop tier.
   * Tier 1 is your starter bench; tiers 2+ require an upgrade.
   */
  upgrade?: {
    headline: string;
    steps: string[];
    cost: Cost[];
  };
  unlocks: Unlock[];
};

export const CATEGORY_ORDER: UnlockCategory[] = [
  "Walls & structure",
  "Doors & access",
  "Traps",
  "Turrets",
  "Power",
  "Production",
  "Utilities",
  "Siege defense",
];

const c = (item: string, qty: number): Cost => ({ item, qty });

export const TIERS: WorkshopTier[] = [
  {
    tier: 1,
    title: "Workshop I — Field Bench",
    summary:
      "Your first real base loop: simple walls, basic access control, and starter production so the stronghold feels like home (not a tent).",
    unlocks: [
      {
        name: "Palisade Foundation",
        category: "Walls & structure",
        unlockCost: [c("Ashwood timber", 22), c("Verdant fiber", 14)],
        buildCost: [c("Ashwood timber", 10), c("Verdant fiber", 3)],
      },
      {
        name: "Palisade Wall",
        category: "Walls & structure",
        unlockCost: [c("Ashwood timber", 30), c("Verdant fiber", 20)],
        buildCost: [c("Ashwood timber", 12), c("Verdant fiber", 4)],
        notes: "Cheap, fast, and noisy. Buys time, not safety.",
      },
      {
        name: "Palisade Window Wall",
        category: "Walls & structure",
        unlockCost: [c("Ashwood timber", 22), c("Verdant fiber", 16)],
        buildCost: [c("Ashwood timber", 10), c("Verdant fiber", 4)],
      },
      {
        name: "Palisade Floor",
        category: "Walls & structure",
        unlockCost: [c("Ashwood timber", 20), c("Verdant fiber", 10)],
        buildCost: [c("Ashwood timber", 9), c("Verdant fiber", 2)],
      },
      {
        name: "Palisade Roof",
        category: "Walls & structure",
        unlockCost: [c("Ashwood timber", 20), c("Verdant fiber", 12)],
        buildCost: [c("Ashwood timber", 9), c("Verdant fiber", 3)],
      },

      {
        name: "Doorframe",
        category: "Doors & access",
        unlockCost: [c("Ashwood timber", 16), c("Sapstone", 6)],
        buildCost: [c("Ashwood timber", 8), c("Sapstone", 3)],
      },
      {
        name: "Reinforced Door (Basic)",
        category: "Doors & access",
        unlockCost: [c("Ashwood timber", 26), c("Sapstone", 10)],
        buildCost: [c("Ashwood timber", 14), c("Sapstone", 6)],
        notes: "Early access control with clear breach counterplay.",
      },
      {
        name: "Simple Lock (Keyed)",
        category: "Doors & access",
        unlockCost: [c("Sapstone", 10), c("Verdant fiber", 10)],
        buildCost: [c("Sapstone", 6), c("Verdant fiber", 4)],
      },
      {
        name: "Hatch (Ceiling Access)",
        category: "Doors & access",
        unlockCost: [c("Ashwood timber", 18), c("Sapstone", 8)],
        buildCost: [c("Ashwood timber", 10), c("Sapstone", 4)],
      },

      {
        name: "Spike Trap",
        category: "Traps",
        unlockCost: [c("Ashwood timber", 18), c("Verdant fiber", 10)],
        buildCost: [c("Ashwood timber", 10), c("Verdant fiber", 4)],
      },
      {
        name: "Tripwire Alarm (Rope)",
        category: "Traps",
        unlockCost: [c("Verdant fiber", 18), c("Sapstone", 6)],
        buildCost: [c("Verdant fiber", 10), c("Sapstone", 3)],
      },
      {
        name: "Smoke Trap (Defensive)",
        category: "Traps",
        unlockCost: [c("Sulfur blooms", 18), c("Glass-sand", 10), c("Sapstone", 10)],
        buildCost: [c("Sulfur blooms", 10), c("Glass-sand", 6)],
      },

      {
        name: "Workbench (Upgrade I)",
        category: "Production",
        unlockCost: [c("Ashwood timber", 22), c("Sapstone", 12), c("Cinderstone ore", 10)],
        buildCost: [c("Ashwood timber", 26), c("Sapstone", 14)],
      },
      {
        name: "Smelter (Starter)",
        category: "Production",
        unlockCost: [c("Cinderstone ore", 18), c("Ashwood timber", 12)],
        buildCost: [c("Cinderstone ore", 22), c("Ashwood timber", 10)],
      },
      {
        name: "Loom (Fiber)",
        category: "Production",
        unlockCost: [c("Verdant fiber", 26), c("Ashwood timber", 10)],
        buildCost: [c("Verdant fiber", 18), c("Ashwood timber", 8)],
      },
      {
        name: "Cooking Hearth",
        category: "Production",
        unlockCost: [c("Cinderstone ore", 14), c("Ashwood timber", 12)],
        buildCost: [c("Cinderstone ore", 16), c("Ashwood timber", 10)],
      },

      {
        name: "Storage Chest (Small)",
        category: "Utilities",
        unlockCost: [c("Ashwood timber", 14), c("Sapstone", 6)],
        buildCost: [c("Ashwood timber", 10), c("Sapstone", 4)],
      },
      {
        name: "Storage Chest (Large)",
        category: "Utilities",
        unlockCost: [c("Ashwood timber", 20), c("Sapstone", 10)],
        buildCost: [c("Ashwood timber", 14), c("Sapstone", 6)],
      },
      {
        name: "Camp Light",
        category: "Utilities",
        unlockCost: [c("Sapstone", 8), c("Verdant fiber", 10)],
        buildCost: [c("Sapstone", 4), c("Verdant fiber", 4)],
      },
      {
        name: "Water Catcher",
        category: "Utilities",
        unlockCost: [c("Ashwood timber", 18), c("Sapstone", 10), c("Glass-sand", 6)],
        buildCost: [c("Ashwood timber", 12), c("Sapstone", 6)],
      },
    ],
  },
  {
    tier: 2,
    title: "Workshop II — Carpenter’s Bay",
    summary:
      "Transition from camp to stronghold: sturdier structure pieces, better access, and the first real automation hooks.",
    upgrade: {
      headline: "Upgrade to Workshop II",
      steps: [
        "Craft an Upgrade Kit at Workshop I (consumes the materials below).",
        "Install it at your base and begin the upgrade timer (broadcasts a signal).",
        "Defend the bench until the upgrade completes (attackers can interrupt).",
      ],
      cost: [
        c("Ironwood heartwood", 38),
        c("Cinderstone ore", 28),
        c("Sapstone", 22),
        c("Glass-sand", 14),
        c("Stag-king antler", 1),
      ],
    },
    unlocks: [
      {
        name: "Reinforced Foundation",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 30), c("Sapstone", 14), c("Ashwood timber", 18)],
        buildCost: [c("Ironwood heartwood", 14), c("Sapstone", 6)],
      },
      {
        name: "Reinforced Wall",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 34), c("Sapstone", 18), c("Ashwood timber", 22)],
        buildCost: [c("Ironwood heartwood", 16), c("Sapstone", 8)],
      },
      {
        name: "Reinforced Window Wall",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 26), c("Sapstone", 16), c("Glass-sand", 8)],
        buildCost: [c("Ironwood heartwood", 12), c("Sapstone", 6)],
      },
      {
        name: "Reinforced Floor",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 24), c("Sapstone", 14)],
        buildCost: [c("Ironwood heartwood", 11), c("Sapstone", 5)],
      },
      {
        name: "Reinforced Roof",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 24), c("Sapstone", 14)],
        buildCost: [c("Ironwood heartwood", 11), c("Sapstone", 5)],
      },

      {
        name: "Gate (Two‑panel)",
        category: "Doors & access",
        unlockCost: [c("Ironwood heartwood", 30), c("Ashwood timber", 24), c("Sapstone", 16)],
        buildCost: [c("Ironwood heartwood", 18), c("Sapstone", 10)],
      },
      {
        name: "Metal Door (Basic)",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 28), c("Sapstone", 18), c("Ironwood heartwood", 10)],
        buildCost: [c("Cinderstone ore", 16), c("Sapstone", 10)],
      },
      {
        name: "Code Lock (Prototype)",
        category: "Doors & access",
        unlockCost: [c("Glass-sand", 18), c("Sapstone", 18), c("River-ore", 10)],
        buildCost: [c("Glass-sand", 10), c("Sapstone", 10)],
      },
      {
        name: "Garage Hatch",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 22), c("Ironwood heartwood", 18), c("Sapstone", 14)],
        buildCost: [c("Cinderstone ore", 14), c("Ironwood heartwood", 10)],
      },
      {
        name: "Window Shutter",
        category: "Doors & access",
        unlockCost: [c("Ironwood heartwood", 18), c("Sapstone", 12)],
        buildCost: [c("Ironwood heartwood", 10), c("Sapstone", 6)],
      },

      {
        name: "Bear Trap",
        category: "Traps",
        unlockCost: [c("Cinderstone ore", 18), c("Sapstone", 16)],
        buildCost: [c("Cinderstone ore", 10), c("Sapstone", 8)],
      },
      {
        name: "Barbed Tripline",
        category: "Traps",
        unlockCost: [c("Verdant fiber", 22), c("Sapstone", 10), c("Ironwood heartwood", 10)],
        buildCost: [c("Verdant fiber", 12), c("Sapstone", 6)],
      },
      {
        name: "Spike Trap (Reinforced)",
        category: "Traps",
        unlockCost: [c("Ironwood heartwood", 20), c("Verdant fiber", 12)],
        buildCost: [c("Ironwood heartwood", 10), c("Verdant fiber", 5)],
      },
      {
        name: "Decoy Noisemaker",
        category: "Traps",
        unlockCost: [c("Glass-sand", 10), c("Sapstone", 12), c("Verdant fiber", 10)],
        buildCost: [c("Glass-sand", 6), c("Sapstone", 6)],
      },

      {
        name: "Sentry Turret (Manual)",
        category: "Turrets",
        unlockCost: [c("Cinderstone ore", 34), c("Sapstone", 20), c("River-ore", 18)],
        buildCost: [c("Cinderstone ore", 18), c("Sapstone", 10)],
      },
      {
        name: "Searchlight",
        category: "Turrets",
        unlockCost: [c("Glass-sand", 20), c("Sapstone", 18), c("Cinderstone ore", 10)],
        buildCost: [c("Glass-sand", 12), c("Sapstone", 10)],
      },

      {
        name: "Battery (Basic)",
        category: "Power",
        unlockCost: [c("Glass-sand", 16), c("Sapstone", 12), c("River-ore", 10)],
        buildCost: [c("Glass-sand", 10), c("Sapstone", 8)],
      },
      {
        name: "Wiring Kit",
        category: "Power",
        unlockCost: [c("Verdant fiber", 18), c("Sapstone", 12), c("River-ore", 10)],
        buildCost: [c("Verdant fiber", 10), c("Sapstone", 8)],
      },

      {
        name: "Workshop II Upgrade",
        category: "Production",
        unlockCost: [c("Cinderstone ore", 34), c("Ironwood heartwood", 28), c("Sapstone", 22)],
        buildCost: [c("Cinderstone ore", 40), c("Ironwood heartwood", 24)],
      },
      {
        name: "Sawmill",
        category: "Production",
        unlockCost: [c("Ironwood heartwood", 28), c("Sapstone", 18), c("Ashwood timber", 18)],
        buildCost: [c("Ironwood heartwood", 18), c("Sapstone", 10)],
      },
    ],
  },
  {
    tier: 3,
    title: "Workshop III — Fortification Array",
    summary:
      "Now the base fights back: turrets, layered traps, and power. This tier is about turning a raid into an objective, not a coinflip.",
    upgrade: {
      headline: "Upgrade to Workshop III",
      steps: [
        "Craft the Fortification Upgrade Kit at Workshop II.",
        "Install it and power it during the upgrade window (defend the room).",
        "Complete one local objective during the window (e.g. clear an elite wave) to finalize.",
      ],
      cost: [
        c("Cinderstone ore", 52),
        c("Sulfur blooms", 34),
        c("Glass-sand", 26),
        c("Sapstone", 32),
        c("Emberglass shard", 1),
        c("Cinderheart core", 1),
      ],
    },
    unlocks: [
      {
        name: "Stone‑Plated Foundation",
        category: "Walls & structure",
        unlockCost: [c("Cinderstone ore", 34), c("Ironwood heartwood", 18), c("Sapstone", 14)],
        buildCost: [c("Cinderstone ore", 16), c("Ironwood heartwood", 8)],
      },
      {
        name: "Stone‑Plated Wall",
        category: "Walls & structure",
        unlockCost: [c("Cinderstone ore", 40), c("Ironwood heartwood", 22), c("Sapstone", 18)],
        buildCost: [c("Cinderstone ore", 20), c("Ironwood heartwood", 10)],
      },
      {
        name: "Embrasure (Arrow Slot)",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 24), c("Glass-sand", 14), c("Sapstone", 12)],
        buildCost: [c("Ironwood heartwood", 12), c("Sapstone", 6)],
      },
      {
        name: "Catwalk (Wall‑Top)",
        category: "Walls & structure",
        unlockCost: [c("Ironwood heartwood", 22), c("Verdant fiber", 18)],
        buildCost: [c("Ironwood heartwood", 12), c("Verdant fiber", 8)],
      },
      {
        name: "Vault Room Frame",
        category: "Walls & structure",
        unlockCost: [c("Cinderstone ore", 44), c("Sapstone", 26), c("Glass-sand", 12)],
        buildCost: [c("Cinderstone ore", 22), c("Sapstone", 12)],
      },

      {
        name: "Vault Door (Basic)",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 46), c("Sapstone", 26), c("Glass-sand", 18)],
        buildCost: [c("Cinderstone ore", 24), c("Sapstone", 14)],
      },
      {
        name: "Reinforced Gate (Portcullis)",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 38), c("Ironwood heartwood", 26), c("Sapstone", 20)],
        buildCost: [c("Cinderstone ore", 20), c("Ironwood heartwood", 14)],
      },
      {
        name: "Roof Hatch (Armored)",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 28), c("Ironwood heartwood", 18), c("Sapstone", 16)],
        buildCost: [c("Cinderstone ore", 14), c("Sapstone", 10)],
      },
      {
        name: "Lock System (Reinforced)",
        category: "Doors & access",
        unlockCost: [c("Glass-sand", 24), c("Relic lens", 1), c("Sapstone", 18)],
        buildCost: [c("Glass-sand", 12), c("Sapstone", 12)],
      },

      {
        name: "Arrow Turret",
        category: "Turrets",
        unlockCost: [c("Cinderstone ore", 42), c("Sapstone", 26), c("Glass-sand", 14)],
        buildCost: [c("Cinderstone ore", 24), c("Sapstone", 12)],
      },
      {
        name: "Shot Trap (Prototype)",
        category: "Turrets",
        unlockCost: [c("River-ore", 26), c("Sapstone", 22), c("Cinderstone ore", 18)],
        buildCost: [c("River-ore", 14), c("Sapstone", 10)],
      },
      {
        name: "Searchlight (Powered)",
        category: "Turrets",
        unlockCost: [c("Glass-sand", 22), c("Sapstone", 20), c("River-ore", 12)],
        buildCost: [c("Glass-sand", 12), c("Sapstone", 10)],
      },

      {
        name: "Pressure Plate Mine",
        category: "Traps",
        unlockCost: [c("Sulfur blooms", 34), c("Cinderstone ore", 18)],
        buildCost: [c("Sulfur blooms", 16), c("Cinderstone ore", 10)],
      },
      {
        name: "Flame Canister Trap",
        category: "Traps",
        unlockCost: [c("Sulfur blooms", 28), c("Glass-sand", 14), c("Sapstone", 12)],
        buildCost: [c("Sulfur blooms", 14), c("Glass-sand", 8)],
      },
      {
        name: "Breach‑Delay Foam",
        category: "Traps",
        unlockCost: [c("Sapstone", 22), c("Shadowleaf herbs", 14), c("Glass-sand", 10)],
        buildCost: [c("Sapstone", 12), c("Shadowleaf herbs", 6)],
      },
      {
        name: "Shock Trap (Arcane)",
        category: "Traps",
        unlockCost: [c("Moonreed", 18), c("Glass-sand", 14), c("Quietstar ink", 1)],
        buildCost: [c("Moonreed", 10), c("Glass-sand", 8)],
      },

      {
        name: "Power Generator (Basic)",
        category: "Power",
        unlockCost: [c("Cinderstone ore", 24), c("Glass-sand", 18), c("Sapstone", 14)],
        buildCost: [c("Cinderstone ore", 18), c("Glass-sand", 10)],
      },
      {
        name: "Battery Bank (Improved)",
        category: "Power",
        unlockCost: [c("Glass-sand", 24), c("Sapstone", 20), c("River-ore", 18)],
        buildCost: [c("Glass-sand", 14), c("Sapstone", 12)],
      },

      {
        name: "Ammo Press (Prototype)",
        category: "Production",
        unlockCost: [c("River-ore", 34), c("Sapstone", 20), c("Sulfur blooms", 18)],
        buildCost: [c("River-ore", 18), c("Sulfur blooms", 10)],
      },
      {
        name: "Repair Station",
        category: "Utilities",
        unlockCost: [c("Ironwood heartwood", 26), c("Sapstone", 22), c("Shadowleaf herbs", 10)],
        buildCost: [c("Ironwood heartwood", 14), c("Sapstone", 10)],
      },
    ],
  },
  {
    tier: 4,
    title: "Workshop IV — Siege Countermeasures",
    summary:
      "The stronghold graduates into a fortress: advanced doors, anti-siege tech, and high-end production. This is where sieges become stories.",
    upgrade: {
      headline: "Upgrade to Workshop IV",
      steps: [
        "Craft a Wardwork Upgrade Kit at Workshop III.",
        "Install it and hold the area during a siege-like upgrade window.",
        "Complete the ritual step (channel/hold points) to lock the upgrade in.",
      ],
      cost: [
        c("Silver-slate", 48),
        c("Moonreed", 38),
        c("Glass-sand", 30),
        c("Sapstone", 40),
        c("Relic lens", 1),
        c("Silver oathband", 1),
        c("Quietstar ink", 2),
      ],
    },
    unlocks: [
      {
        name: "Ward‑Plated Wall",
        category: "Walls & structure",
        unlockCost: [c("Silver-slate", 36), c("Moonreed", 22), c("Cinderheart core", 2)],
        buildCost: [c("Silver-slate", 18), c("Moonreed", 10)],
      },
      {
        name: "Ward‑Plated Foundation",
        category: "Walls & structure",
        unlockCost: [c("Silver-slate", 32), c("Moonreed", 18), c("Cinderheart core", 1)],
        buildCost: [c("Silver-slate", 16), c("Moonreed", 8)],
      },
      {
        name: "Ward‑Plated Roof",
        category: "Walls & structure",
        unlockCost: [c("Silver-slate", 28), c("Moonreed", 18), c("Glass-sand", 12)],
        buildCost: [c("Silver-slate", 14), c("Moonreed", 8)],
      },

      {
        name: "Ward‑Plated Gate",
        category: "Doors & access",
        unlockCost: [c("Silver-slate", 34), c("Moonreed", 18), c("Cinderheart core", 1)],
        buildCost: [c("Silver-slate", 18), c("Moonreed", 10)],
      },
      {
        name: "Vault Door (Reinforced)",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 54), c("Glass-sand", 22), c("Sapstone", 26)],
        buildCost: [c("Cinderstone ore", 28), c("Sapstone", 14)],
      },
      {
        name: "Roof Hatch (Fortress)",
        category: "Doors & access",
        unlockCost: [c("Cinderstone ore", 34), c("Ironwood heartwood", 20), c("Sapstone", 18)],
        buildCost: [c("Cinderstone ore", 18), c("Sapstone", 10)],
      },
      {
        name: "Lock System (Reinforced)",
        category: "Doors & access",
        unlockCost: [c("Glass-sand", 24), c("Relic lens", 1), c("Sapstone", 18)],
        buildCost: [c("Glass-sand", 12), c("Sapstone", 12)],
      },

      {
        name: "Ballista Turret",
        category: "Turrets",
        unlockCost: [c("Cinderstone ore", 48), c("Ironwood heartwood", 32), c("Emberglass shard", 1)],
        buildCost: [c("Cinderstone ore", 28), c("Ironwood heartwood", 16)],
      },
      {
        name: "Flak Turret (Anti‑Siege)",
        category: "Turrets",
        unlockCost: [c("Cinderstone ore", 54), c("Glass-sand", 22), c("Emberglass shard", 1)],
        buildCost: [c("Cinderstone ore", 30), c("Glass-sand", 12)],
      },
      {
        name: "Searchlight (Fortress)",
        category: "Turrets",
        unlockCost: [c("Glass-sand", 28), c("Sapstone", 22), c("Silver-slate", 12)],
        buildCost: [c("Glass-sand", 14), c("Sapstone", 12)],
      },

      {
        name: "Breach Foam (Advanced)",
        category: "Traps",
        unlockCost: [c("Sapstone", 32), c("Phoenix resin", 10), c("Lumen herbs", 10)],
        buildCost: [c("Sapstone", 18), c("Phoenix resin", 4)],
      },
      {
        name: "Shock Trap (Fortress)",
        category: "Traps",
        unlockCost: [c("Moonreed", 24), c("Glass-sand", 18), c("Quietstar ink", 1)],
        buildCost: [c("Moonreed", 12), c("Glass-sand", 10)],
      },
      {
        name: "Smoke Trap (Anti‑Siege)",
        category: "Traps",
        unlockCost: [c("Sulfur blooms", 26), c("Glass-sand", 14), c("Moonreed", 10)],
        buildCost: [c("Sulfur blooms", 12), c("Glass-sand", 8)],
      },

      {
        name: "Power Generator (Fortress)",
        category: "Power",
        unlockCost: [c("Cinderstone ore", 44), c("Glass-sand", 26), c("Silver-slate", 16)],
        buildCost: [c("Cinderstone ore", 24), c("Glass-sand", 12)],
      },
      {
        name: "Power Core Housing",
        category: "Power",
        unlockCost: [c("Silver-slate", 18), c("Moonreed", 14), c("Glass-sand", 18)],
        buildCost: [c("Silver-slate", 10), c("Glass-sand", 10)],
      },

      {
        name: "Siege Workshop (Modules)",
        category: "Production",
        unlockCost: [c("Cinderstone ore", 52), c("Ashwood timber", 26), c("Emberglass shard", 1)],
        buildCost: [c("Cinderstone ore", 30), c("Ashwood timber", 14)],
      },
      {
        name: "Wardwork Table",
        category: "Production",
        unlockCost: [c("Moonreed", 30), c("Silver-slate", 22), c("Quietstar ink", 2)],
        buildCost: [c("Moonreed", 18), c("Silver-slate", 12)],
      },

      {
        name: "Anti‑Breach Ward",
        category: "Siege defense",
        unlockCost: [c("Moonreed", 28), c("Quietstar ink", 2), c("Silver oathband", 1)],
        buildCost: [c("Moonreed", 14), c("Quietstar ink", 1)],
      },
      {
        name: "Siege Shield Projector (Prototype)",
        category: "Siege defense",
        unlockCost: [c("Silver-slate", 28), c("Moonreed", 26), c("Relic lens", 1)],
        buildCost: [c("Silver-slate", 14), c("Moonreed", 12)],
      },

      {
        name: "Wall Patch Kit (Fortress)",
        category: "Utilities",
        unlockCost: [c("Sapstone", 34), c("Silver-slate", 18), c("Phoenix resin", 8)],
        buildCost: [c("Sapstone", 18), c("Silver-slate", 8)],
      },
    ],
  },
  {
    tier: 5,
    title: "Workshop V — Voidforge Annex",
    summary:
      "Endgame base tech powered by Voidreach materials. Very expensive, very visible, and meant to create ‘raid the fortress’ moments.",
    upgrade: {
      headline: "Upgrade to Workshop V",
      steps: [
        "Craft the Voidforge Annex Kit at Workshop IV.",
        "Install it during a Voidreach-aligned window (high visibility; rivals will notice).",
        "Feed the core with rare Void materials and hold until it stabilizes.",
      ],
      cost: [
        c("Voidstone", 64),
        c("Fracture crystal", 36),
        c("Aether thread", 40),
        c("Glass-sand", 30),
        c("Rift key fragment", 2),
        c("Echo sigil", 2),
        c("Singularity shard", 1),
      ],
    },
    unlocks: [
      {
        name: "Void‑Plated Wall",
        category: "Walls & structure",
        unlockCost: [c("Voidstone", 48), c("Fracture crystal", 18), c("Aether thread", 18)],
        buildCost: [c("Voidstone", 22), c("Fracture crystal", 10)],
      },
      {
        name: "Void Roof (Sealed)",
        category: "Walls & structure",
        unlockCost: [c("Voidstone", 34), c("Aether thread", 18), c("Fracture crystal", 10)],
        buildCost: [c("Voidstone", 18), c("Aether thread", 10)],
      },

      {
        name: "Void‑Reinforced Gate",
        category: "Doors & access",
        unlockCost: [c("Voidstone", 52), c("Rift key fragment", 2), c("Fracture crystal", 12)],
        buildCost: [c("Voidstone", 26), c("Fracture crystal", 6)],
      },
      {
        name: "Rift Hatch (Sealed)",
        category: "Doors & access",
        unlockCost: [c("Voidstone", 28), c("Rift key fragment", 1), c("Aether thread", 14)],
        buildCost: [c("Voidstone", 14), c("Aether thread", 8)],
      },
      {
        name: "Vault Lock (Void)",
        category: "Doors & access",
        unlockCost: [c("Fracture crystal", 22), c("Glass-sand", 22), c("Echo sigil", 1)],
        buildCost: [c("Fracture crystal", 12), c("Glass-sand", 12)],
      },
      {
        name: "Void Airlock Door",
        category: "Doors & access",
        unlockCost: [c("Voidstone", 30), c("Fracture crystal", 14), c("Sapstone", 18)],
        buildCost: [c("Voidstone", 16), c("Sapstone", 10)],
      },

      {
        name: "Arcane Power Core",
        category: "Power",
        unlockCost: [c("Singularity shard", 1), c("Aether thread", 28), c("Fracture crystal", 18)],
        buildCost: [c("Aether thread", 14), c("Fracture crystal", 10)],
      },
      {
        name: "Power Router (Void)",
        category: "Power",
        unlockCost: [c("Aether thread", 22), c("Fracture crystal", 16), c("Echo sigil", 1)],
        buildCost: [c("Aether thread", 12), c("Fracture crystal", 8)],
      },
      {
        name: "Battery Bank (Void)",
        category: "Power",
        unlockCost: [c("Fracture crystal", 24), c("Glass-sand", 20), c("Voidstone", 18)],
        buildCost: [c("Fracture crystal", 14), c("Voidstone", 10)],
      },

      {
        name: "Riftwatch Turret",
        category: "Turrets",
        unlockCost: [c("Voidstone", 44), c("Fracture crystal", 22), c("Echo sigil", 2)],
        buildCost: [c("Voidstone", 22), c("Fracture crystal", 12)],
      },
      {
        name: "Nullbeam Projector",
        category: "Turrets",
        unlockCost: [c("Voidstone", 38), c("Fracture crystal", 24), c("Singularity shard", 1)],
        buildCost: [c("Voidstone", 20), c("Fracture crystal", 14)],
      },
      {
        name: "Rift Sensor Array",
        category: "Turrets",
        unlockCost: [c("Glass-sand", 26), c("Aether thread", 18), c("Echo sigil", 1)],
        buildCost: [c("Glass-sand", 14), c("Aether thread", 10)],
      },

      {
        name: "Blink Trap (Prototype)",
        category: "Traps",
        unlockCost: [c("Aether thread", 24), c("Nullbloom", 10), c("Rift key fragment", 1)],
        buildCost: [c("Aether thread", 12), c("Nullbloom", 4)],
      },
      {
        name: "Nullbloom Gas Trap",
        category: "Traps",
        unlockCost: [c("Nullbloom", 18), c("Glass-sand", 18), c("Aether thread", 12)],
        buildCost: [c("Nullbloom", 8), c("Glass-sand", 8)],
      },
      {
        name: "Phase Net (Prototype)",
        category: "Traps",
        unlockCost: [c("Aether thread", 26), c("Fracture crystal", 14), c("Rift key fragment", 1)],
        buildCost: [c("Aether thread", 12), c("Fracture crystal", 8)],
      },

      {
        name: "Voidforge Station",
        category: "Production",
        unlockCost: [c("Voidstone", 54), c("Fracture crystal", 22), c("Rift key fragment", 2)],
        buildCost: [c("Voidstone", 30), c("Fracture crystal", 12)],
      },
      {
        name: "Riftwork Fabricator",
        category: "Production",
        unlockCost: [c("Aether thread", 28), c("Fracture crystal", 18), c("Echo sigil", 2)],
        buildCost: [c("Aether thread", 14), c("Fracture crystal", 10)],
      },

      {
        name: "Void Repair Station",
        category: "Utilities",
        unlockCost: [c("Voidstone", 30), c("Sapstone", 26), c("Nullbloom", 10)],
        buildCost: [c("Voidstone", 14), c("Sapstone", 12)],
      },
      {
        name: "Extraction Beacon (Base)",
        category: "Utilities",
        unlockCost: [c("Glass-sand", 28), c("Aether thread", 22), c("Relic lens", 1)],
        buildCost: [c("Glass-sand", 14), c("Aether thread", 12)],
      },

      {
        name: "Rift Shield Projector",
        category: "Siege defense",
        unlockCost: [c("Voidstone", 40), c("Fracture crystal", 22), c("Echo sigil", 2)],
        buildCost: [c("Voidstone", 20), c("Fracture crystal", 12)],
      },
    ],
  },
];
