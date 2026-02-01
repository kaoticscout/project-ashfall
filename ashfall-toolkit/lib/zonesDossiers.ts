export type ZoneDossier = {
  id: string;
  name: string;
  tagline: string;
  hook: string;
  artSrc: string;
  backdropSrc: string;
  signature: string[];
  harvestables: Array<{ name: string; notes: string }>;
  rares: Array<{ name: string; notes: string }>;
  strongholds: Array<{ name: string; notes: string }>;
  events: Array<{ name: string; notes: string }>;
  bosses: Array<{ name: string; notes: string }>;
  routes: Array<{ name: string; notes: string[] }>;
};

/**
 * Canon-ish “zone dossier” content for the toolkit website.
 *
 * NOTE: This is used by `/game/zones` and also as the source-of-truth
 * for “materials” referenced by other pages (e.g. building progression).
 */
export const ZONES: ZoneDossier[] = [
  {
    id: "emberwastes",
    name: "Emberwastes",
    tagline: "Ash storms, ruined battlements, and siege-grade salvage.",
    hook: "High-risk harvesting and siege prep: you ride here when you want materials that change fights.",
    artSrc: "/assets/zone-emberwastes.svg",
    backdropSrc: "/assets/Zones/Emberwastes.png",
    signature: [
      "Visibility swings (ash squalls) create ambush windows",
      "Heat + cinderfall hazards punish slow rotations",
      "Open lanes → long sightlines → clean “clip fights”",
    ],
    harvestables: [
      {
        name: "Cinderstone ore",
        notes: "Siege plating, breacher heads, heat-resistant upgrades.",
      },
      {
        name: "Ashwood timber",
        notes: "Reinforced doors, gate braces, trap frames.",
      },
      { name: "Sulfur blooms", notes: "Explosives, smoke charges, siege consumables." },
      { name: "Glass-sand", notes: "Optics, lenses, arcane focuses, signal gear." },
    ],
    rares: [
      {
        name: "Emberglass shard",
        notes: "Rare craft component used for high-tier siege modules and prestige cosmetics.",
      },
      {
        name: "Cinderheart core",
        notes: "Upgrade catalyst for tier jumps; drops from elites and storm events.",
      },
      {
        name: "Phoenix resin",
        notes: "Consumable ingredient: short “burn-proof” window for breach pushes.",
      },
    ],
    strongholds: [
      {
        name: "Cinder Bastion",
        notes: "Fortress POI: layered walls, ballista nests, vault room routes.",
      },
      {
        name: "The Meltworks",
        notes: "Industrial ruins: dense scrap + elites; noisy fights, fast resets.",
      },
      {
        name: "Ashgate Pass",
        notes: "Chokepoint: caravan lane + siege-friendly terrain.",
      },
    ],
    events: [
      {
        name: "Ash Squall Surge",
        notes: "Storm rolls in; visibility drops; bonus cinderstone nodes spawn for 12 minutes.",
      },
      {
        name: "Salvage Convoy",
        notes: "Escort/ambush event; defenders get repair mats, attackers get siege parts.",
      },
      {
        name: "Breach Drill",
        notes: "Timed objective; complete to earn a “Siege Permit” token (weekly).",
      },
    ],
    bosses: [
      {
        name: "The Furnace Wyrm",
        notes: "World boss: telegraphed flame lanes + collapsing cover; drops Cinderheart cores.",
      },
      {
        name: "Bastion Castellan",
        notes: "Stronghold boss: shield phases; rewards gate tech and base banners.",
      },
    ],
    routes: [
      {
        name: "Quick run (10–15 min)",
        notes: [
          "Ride perimeter nodes during mild weather",
          "Grab sulfur blooms + ashwood; avoid fortress lanes",
          "Extract before squall peak (visibility flips ambush odds)",
        ],
      },
      {
        name: "Siege prep (20–30 min)",
        notes: [
          "Target Cinderstone clusters + Meltworks scrap",
          "Pick up one convoy event for bonus parts",
          "Exit via Ashgate Pass if you want fights; skirt cliffs if you don’t",
        ],
      },
    ],
  },
  {
    id: "ironwood",
    name: "Ironwood",
    tagline: "Towering forests, hidden trails, and predator rules.",
    hook: "Information and flanks: Ironwood rewards scouts, traps, and clean picks more than raw brawling.",
    artSrc: "/assets/zone-ironwood.svg",
    backdropSrc: "/assets/Zones/Ironwood.png",
    signature: [
      "Tight sightlines create high-tension skirmishes",
      "Trail knowledge matters (shortcuts, ridge paths, creekbeds)",
      "Stealth + sound cues are the meta here",
    ],
    harvestables: [
      {
        name: "Ironwood heartwood",
        notes: "High-durability building pieces; trap housings; “quiet door” upgrades.",
      },
      { name: "Verdant fiber", notes: "Bandages, rope, siege nets, base décor." },
      { name: "Sapstone", notes: "Adhesives for repair kits and turret assemblies." },
      {
        name: "Shadowleaf herbs",
        notes: "Potions: tracking resist, stamina sustain, anti-bleed.",
      },
    ],
    rares: [
      { name: "Stag-king antler", notes: "Trophy + crafting component for scout gear and mounts." },
      {
        name: "Groveheart seed",
        notes: "Base upgrade: temporary “ward” against small raids (limited duration).",
      },
      {
        name: "Whisper-bark",
        notes: "Rare wood: enables “silent” trap variants (clarity-safe but harder to spot).",
      },
    ],
    strongholds: [
      {
        name: "Rootgate Keep",
        notes: "Ancient fort in the trees; vertical fights; good for ambush squads.",
      },
      {
        name: "Hollow Market",
        notes: "Neutral-ish POI: trading stalls + guard threats; high player density.",
      },
      { name: "The Old Road", notes: "Long lane through canopy; ideal for escorts and intercepts." },
    ],
    events: [
      { name: "Hunt: The Stag-King", notes: "Trackable roaming elite; rewards antlers + stealth mats." },
      { name: "Timberfall", notes: "Mass harvesting window; nodes spike but noise draws squads." },
      {
        name: "Wardstone Ritual",
        notes: "Hold circles to claim a temporary zone buff (vision, stamina, or stealth).",
      },
    ],
    bosses: [
      { name: "The Briar Matron", notes: "World boss: root snares + summon adds; drops Groveheart seeds." },
      { name: "Rootgate Warden", notes: "Stronghold boss: patrol callouts; rewards defensive blueprints." },
    ],
    routes: [
      {
        name: "Scout loop (10–15 min)",
        notes: [
          "Run creekbeds for fiber + herbs",
          "Take ridge shortcut to Rootgate outskirts",
          "Extract via canopy bridges to avoid road fights",
        ],
      },
      {
        name: "Ambush night (20–30 min)",
        notes: [
          "Hold Old Road chokepoints during Timberfall",
          "Pick one ritual fight; don’t take every engagement",
          "Leave with whisper-bark/heartwood; avoid overfarming (noise escalates)",
        ],
      },
    ],
  },
  {
    id: "silvershade",
    name: "Silvershade",
    tagline: "Moonlit ruins, cold rivers, and relic hunts.",
    hook: "Relics and rituals: Silvershade is where you go for arcane loot, story POIs, and elegant team fights.",
    artSrc: "/assets/zone-silvershade.svg",
    backdropSrc: "/assets/Zones/Silvershade.png",
    signature: [
      "Night visibility + glow markers make positioning a skill",
      "Relic sites are magnets: fights start clean and snowball fast",
      "Lots of “hold the line” terrain for defenders",
    ],
    harvestables: [
      { name: "Silver-slate", notes: "Armor trims, ward plates, aesthetic base themes." },
      { name: "Moonreed", notes: "Arcane fibers for banners, sigils, and ritual kits." },
      { name: "River-ore", notes: "Weapon fittings and tool upgrades." },
      { name: "Lumen herbs", notes: "Potions: cleanse, clarity, and anti-fear." },
    ],
    rares: [
      { name: "Relic lens", notes: "Enables map pings / objective reveals during events (limited uses)." },
      { name: "Silver oathband", notes: "Prestige drop; also used to craft seasonal cosmetics." },
      { name: "Quietstar ink", notes: "Crafting component for banners + faction identity items." },
    ],
    strongholds: [
      { name: "Gloamspire Abbey", notes: "Dungeon-like POI: shrine rooms + puzzle doors; high relic density." },
      { name: "The Silver Bridge", notes: "Iconic landmark; event lane; prime siege/defense fights." },
      { name: "Sable Wharf", notes: "River extraction hub; contested when relic events are active." },
    ],
    events: [
      {
        name: "Relic Procession",
        notes: "Escort: protect a relic cart; attackers get relic shards; defenders get ward mats.",
      },
      {
        name: "Moonlit Convergence",
        notes: "Ritual event: hold runes; spawns elite waves and rewards lenses.",
      },
      { name: "Abbey Bell Toll", notes: "Timed dungeon surge; extra rooms open for 15 minutes." },
    ],
    bosses: [
      { name: "The Pale Duchess", notes: "World boss: charm/fear telegraphs; drops oathbands + arcane mats." },
      { name: "Abbot of Gloamspire", notes: "Stronghold boss: phase switches; rewards ritual upgrades." },
    ],
    routes: [
      {
        name: "Relic runner (10–15 min)",
        notes: [
          "Hit one shrine cluster + river-ore line",
          "Avoid bridge when event is active unless you want PvP",
          "Extract at Sable Wharf during lull windows",
        ],
      },
      {
        name: "Ritual night (20–30 min)",
        notes: [
          "Start with Moonlit Convergence for lenses",
          "Push Abbey for bonus rooms while squads are distracted",
          "Leave via riverbank trails (bridge is the trap)",
        ],
      },
    ],
  },
  {
    id: "voidreach",
    name: "Voidreach",
    tagline: "Reality fractures, vertical space, and boss-grade danger.",
    hook: "Endgame pressure cooker: Voidreach is where squads test builds, chase the rarest mats, and trigger world-scale events.",
    artSrc: "/assets/zone-voidreach.svg",
    backdropSrc: "/assets/Zones/VoidReach.png",
    signature: [
      "Environmental hazards (rift tides) create rotating safe lanes",
      "Vertical routes + collapses reward map knowledge",
      "Highest density of elite encounters and contested objectives",
    ],
    harvestables: [
      { name: "Voidstone", notes: "High-tier crafting; siege modules; ritual focuses." },
      { name: "Aether thread", notes: "Mobility items, grapples, blink consumables." },
      { name: "Fracture crystal", notes: "Upgrade catalyst; used for legendary-tier rolls." },
      { name: "Nullbloom", notes: "Potions: anti-slow, anti-root, debuff cleanse (rare spawns)." },
    ],
    rares: [
      { name: "Rift key fragment", notes: "Opens sealed stronghold doors and bonus boss arenas." },
      { name: "Singularity shard", notes: "Ultra-rare: used for pinnacle cosmetics and “mythic” siege tech." },
      { name: "Echo sigil", notes: "Event token: lets you re-run one boss attempt (weekly cap)." },
    ],
    strongholds: [
      { name: "The Riftworks", notes: "Industrial void complex; puzzle gates + elite patrols; best loot, worst exits." },
      { name: "Obsidian Spire", notes: "Vertical stronghold; knockback hazards; high skill expression." },
      { name: "The Shattered Causeway", notes: "The main lane; most contested fights; siege-friendly terrain." },
    ],
    events: [
      { name: "Rift Tide", notes: "World event: safe lanes rotate; nodes spawn in dangerous pockets." },
      { name: "Echo Storm", notes: "Hold objectives while debuffed; rewards echo sigils and fracture crystals." },
      { name: "Gate Breach", notes: "Server-scale moment: open sealed doors for 20 minutes; bosses inside." },
    ],
    bosses: [
      { name: "The Null Titan", notes: "World raid boss: arena hazards + adds; drops singularity shards (very rare)." },
      { name: "Spire Architect", notes: "Stronghold boss: geometry attacks; rewards high-tier blueprint shards." },
    ],
    routes: [
      {
        name: "Risk run (10–15 min)",
        notes: [
          "Farm voidstone on the edge during Rift Tide",
          "Take one safe-lane fight only; don’t chain brawls",
          "Extract the moment you hit a key fragment (don’t get greedy)",
        ],
      },
      {
        name: "Endgame push (25–40 min)",
        notes: [
          "Coordinate a Gate Breach window",
          "Split roles: objective holders + intercept squad",
          "Exit via fracture ledges when main causeway is camped",
        ],
      },
    ],
  },
];

