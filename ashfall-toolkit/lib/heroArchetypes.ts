export type HeroArchetype = {
  id: string;
  name: string;
  roleLine: string; // short label used in roster
  oneLiner: string; // short pitch
  overview: string; // longer paragraph
  tags: string[];
  kit: { name: string; type: string; summary: string }[];
  isNewest?: boolean;
  portraitSrc?: string; // optional marketing portrait art (toolkit website)
  portraitFocus?: "center" | "top"; // image focal point for cropping
};

export const HERO_ARCHETYPES: HeroArchetype[] = [
  {
    id: "voidmancer",
    name: "Voidmancer",
    roleLine: "Control / disruption / rituals",
    oneLiner: "Bends the battlefield with zones, debuffs, and void pressure.",
    overview:
      "A high-impact controller whose kit is built around area denial, forced movement, and ritual peaks that create highlight moments during elite POIs, boss fights, and world events.",
    tags: ["Control", "Ritual", "Teamfight"],
    isNewest: true,
    portraitSrc: "/assets/Classes/void-wizard.jpg",
    portraitFocus: "top",
    kit: [
      {
        name: "Void Sigil",
        type: "Core",
        summary: "Place a rune that slows and marks enemies within its radius.",
      },
      {
        name: "Gravity Shear",
        type: "Utility",
        summary: "Pull or shove a small cluster to break formations.",
      },
      {
        name: "Abyssal Convergence",
        type: "Ultimate",
        summary: "A dramatic zone that forces a decision: flee or fight.",
      },
    ],
  },
  {
    id: "warlord",
    name: "Warlord",
    roleLine: "Frontline / rally / engage",
    oneLiner: "Creates rally windows and clean, decisive engages.",
    overview:
      "The Warlord creates tempo spikes for elite clears and contested events. Their identity is about leading pushes, stabilizing lines, and turning skirmishes into decisive wins.",
    tags: ["Assault", "Leadership", "Teamfight"],
    portraitSrc: "/assets/Classes/gladiator.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Rally Cry", type: "Ultimate", summary: "Burst morale + unit haste." },
      { name: "Shield Break", type: "Core", summary: "Punish frontliners and crack guards." },
      { name: "Command Banner", type: "Utility", summary: "Zone control for clean engages." },
    ],
  },
  {
    id: "architect",
    name: "Architect",
    roleLine: "Homestead / crafting / preparation",
    oneLiner: "Turns downtime into momentum: craft faster, prep smarter, recover stronger.",
    overview:
      "The Architect makes the homestead feel valuable without making it mandatory: comfort buffs, crafting throughput, and preparation that helps your next run feel stronger.",
    tags: ["Crafting", "Homestead", "Tempo"],
    portraitSrc: "/assets/Classes/engineer.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Rapid Build", type: "Core", summary: "Fast placement + repair burst." },
      {
        name: "Overcharge Turrets",
        type: "Ultimate",
        summary: "A short defensive spike window for holds and repels.",
      },
      {
        name: "Fortify",
        type: "Utility",
        summary: "Temporary reinforcement for a key structure.",
      },
    ],
  },
  {
    id: "hunter",
    name: "Hunter",
    roleLine: "Scout / pick / escape",
    oneLiner: "Ambush, track, and extract with contested loot.",
    overview:
      "The Hunter is built for Rust-style clips: ambushes, last-second escapes, and high-stakes loot runs. They convert information into fights they choose.",
    tags: ["Mobility", "Ambush", "Information"],
    portraitSrc: "/assets/Classes/hunter.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Mark Prey", type: "Core", summary: "Track enemies and reveal trails." },
      { name: "Shadow Step", type: "Mobility", summary: "Blink to reposition." },
      { name: "Execution", type: "Ultimate", summary: "High-risk finisher window." },
    ],
  },
  {
    id: "warden",
    name: "Warden",
    roleLine: "Frontline / protection / control",
    oneLiner: "Holds the line, anchors zones, and protects objectives.",
    overview:
      "The Warden specializes in holding space: protecting allies, stabilizing fights, and turning pushes into costly failures for attackers.",
    tags: ["Defense", "Frontline", "Protection"],
    portraitSrc: "/assets/Classes/warden.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Bulwark Stance", type: "Core", summary: "Damage reduction + threat hold." },
      { name: "Ward Field", type: "Utility", summary: "Protect a small area and allies." },
      { name: "Stand the Line", type: "Ultimate", summary: "A heroic hold window." },
    ],
  },
  {
    id: "mystic",
    name: "Mystic",
    roleLine: "Support / control / sustain",
    oneLiner: "Keeps squads alive through chaos and enables big plays.",
    overview:
      "The Mystic is a support-first archetype that enables spotlight moments: clutch saves, rally resets, and coordinated pushes with clear, readable utility.",
    tags: ["Support", "Control", "Utility"],
    portraitSrc: "/assets/Classes/mystic.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Aegis Pulse", type: "Core", summary: "Shield allies in a short radius." },
      { name: "Cleanse", type: "Utility", summary: "Remove key debuffs and slow effects." },
      { name: "Sanctuary", type: "Ultimate", summary: "A short safe zone for turnarounds." },
    ],
  },
  {
    id: "raider",
    name: "Raider",
    roleLine: "Breaker / demolition / chaos",
    oneLiner: "Creates openings—shields crack, lines break, chaos follows.",
    overview:
      "The Raider is defined by breach moments. Their kit focuses on breaking lines and creating chaos long enough for a group to capitalize.",
    tags: ["Damage", "Disruption", "Chaos"],
    portraitSrc: "/assets/Classes/raider.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Breach Charge", type: "Core", summary: "Explosive pressure on clustered foes." },
      { name: "Smoke Screen", type: "Utility", summary: "Break line-of-sight and reset." },
      { name: "Demolition Rush", type: "Ultimate", summary: "A high-risk breach window." },
    ],
  },
  {
    id: "stalker",
    name: "Stalker",
    roleLine: "Infiltration / sabotage / intel",
    oneLiner: "Slips into backlines and turns logistics into liabilities.",
    overview:
      "The Stalker is about infiltration and sabotage: scouting routes, disrupting pulls, and creating paranoia that changes how rivals move.",
    tags: ["Infiltration", "Sabotage", "Intel"],
    portraitSrc: "/assets/Classes/stalker.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Silent Step", type: "Core", summary: "Stealth window for positioning." },
      { name: "Sapper Kit", type: "Utility", summary: "Disable a defense briefly." },
      { name: "Blackout", type: "Ultimate", summary: "A short disruption peak for raids." },
    ],
  },
  {
    id: "marshal",
    name: "Marshal",
    roleLine: "Logistics / escort / rally",
    oneLiner: "Turns risky travel into coordinated, protected movement.",
    overview:
      "The Marshal is the escort archetype: protects caravans, organizes rallies, and makes contested hauling and rotations feel like an event.",
    tags: ["Escort", "Logistics", "Leadership"],
    portraitSrc: "/assets/Classes/marshal.jpg",
    portraitFocus: "top",
    kit: [
      { name: "Escort Orders", type: "Core", summary: "Buff nearby allies and units." },
      { name: "Signal Flare", type: "Utility", summary: "Call rally to a marked point." },
      { name: "Breakthrough", type: "Ultimate", summary: "A coordinated push/escape window." },
    ],
  },
];

export function getNewestHero(): HeroArchetype {
  const newest = HERO_ARCHETYPES.find((h) => h.isNewest);
  return newest ?? HERO_ARCHETYPES[0]!;
}

export function getHeroById(id: string): HeroArchetype | undefined {
  return HERO_ARCHETYPES.find((h) => h.id === id);
}

