# Ashfall — Game Design Document (Comprehensive Draft)

Project Codename: **Ashfall**  
Genre: **Multiplayer Survival Action RPG (Embodied Third-Person)**

## 1. High Concept
Ashfall is a multiplayer survival **action RPG** where you play a **hero character** in a dangerous world: you **level up**, unlock a **splashy ability kit**, gear up, and take on escalating enemies and bosses. Moment-to-moment play is fast and responsive (WoW-like movement/combat), with **mounted exploration** for traversal and roaming between points of interest.

Base building exists, but it is **secondary**: a personal/faction homestead that supports crafting, storage, comfort buffs, and travel convenience—without turning the core loop into colony/RTS management.

## 2. Design Goals (What Must Be True)
- **Spotlight moments**: the game reliably generates clip-worthy, streamable moments players remember for weeks.
- **Time-budget fit**: core players (3–4 hours, ~3 days/week) can meaningfully compete; hardcore play adds depth without invalidating core progress.
- **Embodied tension**: leaving safety is risky; returning home is relief and preparation.
- **Hero-first play**: the default activity is **adventuring and fighting**, not managing production chains.
- **Fast traversal**: movement feels quick and fluid; mounts make the world feel large without feeling slow.
- **Predictable escalation, unpredictable outcomes**: the week’s arc is known; player stories aren’t.
- **Seasonal cadence**: content and competitive incentives refresh on a cadence, without requiring the core game to feel like an RTS “war sim.”

## 3. Core Pillars
1. **Spotlight Moments (Rust-like highs)**: clip-worthy, streamable moments with splashy minute-to-minute gameplay.
2. **Core Player Time Budget**: designed around ~3–4 hour sessions, ~3 days/week; hardcore motivation exists without grind dominance.
3. **Embodied Hero Adventure**: WASD, third-person; you are the hero and the action happens in the world.
4. **WoW-Inspired Combat Kit**: hotbar abilities, cooldown windows, readable telegraphs, satisfying AoE, and skill-expressive play.
5. **Mounted Exploration**: fast traversal + instant dismount-to-fight pacing.
6. **Progression & Buildcraft**: leveling, talents/runes, gear upgrades, and crafting that meaningfully change playstyle.
7. **Homestead Building (Secondary)**: Valheim-like building that supports adventuring (crafting/comfort/travel), not an RTS colony economy.
8. **PvP Raids & Sieges (Core)**: structured, high-stakes base assaults powered by high-end resources and hero combat—not offline griefing or RTS macro.
9. **Seasonal Competitive Structure (Optional Layer)**: periodic ladders/objectives that reward mastery and participation without requiring RTS macro play.

## 4. Target Experience
- **Session length**: 30–90 min “meaningful progress”; 3+ hour optional marathons.
- **Drop-in/drop-out**: your base continues functioning while offline, but is not invulnerable.
- **Social shape**: solo or small factions (2–6); temporary alliances; betrayal supported.
- **Core cadence**: a core player should feel competitive with ~3 sessions/week (~3–4 hours each); hardcore play should primarily increase options/optimization, not invalidate others.

## 5. Game Structure
### 5.1 World Shards
- **40–80 players** per shard (MVP: 20–30).
- **Factions**: 1–6 players.
- **Cadence**: optional weekly/seasonal objectives and world events (refreshing incentives, not mandatory “wipe” gameplay).

### 5.2 The Weekly Arc (Macro Loop)
If Ashfall uses a 7-day cadence, it should feel like an **adventure chapter**, not an RTS war:
- **Day 1–2: Scouting & First Clears**
  - explore, unlock travel routes, clear early POIs/bosses, establish a simple home
- **Day 3–4: Escalation & Rivalry**
  - contested POIs, stronger elites, faction skirmishes, dungeon-style objectives
- **Day 5–6: High Threat Windows**
  - dangerous roaming events, elite boss chains, “risk runs” with high-value rewards
- **Day 7: Finale Event**
  - a culminating world event / boss convergence with scoring/rewards

### 5.3 World Escalation Modifiers (Examples)
- **Day 3**: “Blood Moon” — monsters attack bases.
- **Day 5**: “Resource decay” — scarcity pressure.
- **Day 6**: “Storm zone shrink” — map pressure/forced conflict.
- **Day 7**: “Apocalypse” — hard convergence + scoring push.

## 6. Core Gameplay Loop (Moment-to-Moment)
1. Choose an objective (quest, POI, dungeon-like run, boss)
2. Travel fast (mounted exploration, quick pathing, instant dismount to engage)
3. Fight (WoW-like hotbar combat: cooldowns, AoE, interrupts, defensives)
4. Loot + XP (gear, crafting materials, currency)
5. Upgrade (levels, talents/runes, gear, consumables)
6. Return home when useful (craft, rest/comfort buffs, storage, travel setup)
7. Repeat with harder biomes/encounters and higher stakes

## 7. Player Lifecycle
### 7.1 Phase 1 — Adventurer
- start as a capable hero (basic kit online immediately)
- learn the world, clear early POIs, get your first gear upgrades
- establish a simple home base for crafting/storage (optional but recommended)

### 7.2 Phase 2 — Specialization
- unlock build-defining mechanics (talents/runes/ability augments)
- acquire movement options and class identity (mobility, AoE kit, defensives)
- begin targeting elite objectives (bosses, contested events, dungeon-style runs)

### 7.3 Phase 3 — Endgame Mastery
- optimized buildcraft + gear chasing
- high-skill combat against elite threats
- optional competitive layers (PvP hotspots, ladders, timed events)

## 8. Controls, Camera, and Combat
### 8.1 Controls
- **WASD movement**
- **Third-person camera** with mouse look/aim
- **Ability hotbar**
- **Dodge/mobility**
- Optional **soft lock / tab target assist**
- **Mount summon/dismount** (fast, combat-aware)

### 8.2 Combat Goals
Combat must feel:
- **responsive and quick**
- **readable**
- **skill-expressive**
- **splashy without visual noise**

### 8.3 Combat Model (High-Level)
Target: **WoW-like ability combat** in a third-person controller.
- core hotbar abilities on cooldowns (with clear roles: ST, AoE, defensive, mobility, utility)
- readable enemy telegraphs (cones, circles, ground effects)
- interrupts/CC exist but are curated (no “MMO bloat”)
- strong hit feedback and VFX silhouettes (clarity-first)

Example kit shape (illustrative):
- Q: dash slash
- E: shield stance
- R: area stun
- Passive: rally nearby allied units

## 9. Death & Risk
### 9.1 Death Outcomes (Default)
Default target is closer to **Valheim risk** than loot-shooter deletion:
- drop carried inventory/crafting mats into a recoverable “tombstone”
- respawn at home/nearest shrine after a timer
- optional temporary injury debuff (short-lived)

Design intent: **Death is punishing, not deleting.** Your character build/gear progression should not be routinely destroyed.

### 9.2 Optional Late-Game “Hero Core” Stakes
In special events:
- hero enters wounded state on death
- recover fallen core within time to avoid severe penalty
Creates legendary moments without permanent identity deletion.

## 10. Base Building
### 10.1 Building Style
Inspired by Valheim/Rust:
- snap placement
- blueprint ghost previews
- physical placement in space
- crafting stations and storage
- comfort/home buffs (rested-style bonuses)
- optional travel convenience (waystones/portals if supported)

### 10.2 Base Tiers
These tiers should represent **adventure support**, not strategic dominance:
- **Tier 1 — Camp**: basic crafting + storage + bed/rest bonus
- **Tier 2 — Homestead**: advanced stations, farming, stronger comfort buffs, travel setup
- **Tier 3 — Hall**: prestige base, trophy displays, high-end crafting, convenience upgrades

## 11. Companions & Convenience Automation (Optional)
If Ashfall includes “helpers,” they should support the hero loop without turning the game into RTS management:
- optional gather/craft conveniences (e.g., station queues, simple follower tasks)
- no army micro as a primary skill test
- anything automated should be **bounded** so adventuring remains the best use of player time

## 12. PvE Content (What You Fight)
Ashfall’s content should be structured around clear adventure targets:
- roaming enemy populations by biome
- POIs/camps (repeatable, tiered difficulty)
- elite/boss encounters (build checks and mechanic checks)
- dynamic world events (time windows that create social convergence)

## 13. Loot, Crafting, and Economy (Adventure-First)
- resources exist to support crafting/consumables/gear upgrades, not to feed a production RTS
- valuable materials come from **adventure risk** (bosses, elite POIs, contested events)
- travel and extraction still matter (getting home with loot is a story engine), but the loop should stay hero-forward

## 14. Survival Systems (Foundational Pressure)
From the original PRD draft:
- hunger / stamina / temperature
- weather hazards
- biome-specific survival rules

Design intent:
- Survival pressure should **increase vulnerability** (especially in PvP), not become busywork.

## 15. NPC Camps & PvE Escalation
### 15.1 Purpose
NPC camps are escalation gates that act as:
- PvE challenge
- PvP hotspots
- strategic resource choke points

### 15.2 Camp Tiers (Example)
1. **Bandit camps** (scrap, basic components)
2. **Fortified outposts** (traps, stronger raiders)
3. **Boss strongholds** (relic cores, hero milestones)
4. **World event zones** (endgame components, score drivers)

### 15.3 PvE Escalation Over the Week
- Camps become more aggressive/dangerous as days progress.
- Some escalations should specifically pressure bases (e.g., “Blood Moon”).

## 16. PvP Raids & Social Conflict (Core)
PvP is a **core pillar** of Ashfall, centered on a structured **raid/siege experience**:
- players initiate sieges by **spending high-end resources** to craft siege weaponry
- defenders get **clear warning and a fair chance to respond**
- the skill test is primarily **hero combat + tactical execution**, not RTS macro or “who can be online 24/7”

### 16.1 Design Intent
Ashfall sieges should feel like:
- **a planned heist** (scout → craft a kit → strike a target) with real stakes
- **a readable spectacle** (breaches, counter-pushes, clutch saves)
- **a resource sink** that converts late-game materials into conflict and stories

Non-goals:
- unbounded offline raiding as the dominant loop
- full deletion of bases (defeat should sting, not end the season for a player)
- endless repair tax / chore pressure for defenders

### 16.2 The Siege Loop (Player-Facing)
1. **Scout** a target base (learn layout, defenses, vault placement, weak angles).
2. **Acquire high-end resources** via risky PvE and contested objectives.
3. **Craft a Siege Kit** (consumable declaration item + siege weaponry modules).
4. **Declare a Siege** (starts a short warm-up; defenders are notified).
5. **Assault Window** (15–30 minutes): breach, fight, secure objective.
6. **Resolution**: rewards paid out; damage state persists temporarily; repairs/cleanup follow.

### 16.3 Siege Declaration & Fair-Play Guardrails
To keep sieges high-stakes but not oppressive:
- **Warm-up timer**: siege begins after a visible countdown (e.g., 10–20 minutes) to allow defenders to rally.
- **Siege windows**: siege declarations only work during predictable shard “raid hours” (configurable), reducing 24/7 pressure.
- **Base tier gating**: you can only siege bases within a tier band (or power band) to prevent bullying.
- **Frequency caps**: attackers have limited siege declarations per day/week; defenders have limited “vulnerability” windows per day/week.
- **Opt-in escalation**: higher base tiers unlock higher-stakes siege objectives and higher rewards.

### 16.4 Siege Weapons (Built from High-End Resources)
Siege weapons are crafted, deployed, and protected like “raid objectives,” not free explosives spam.

Example modules (illustrative):
- **Breach Ram**: short-range wall/door breaker; strong but vulnerable while pushing.
- **Trebuchet / Arc Caster**: long-range structure pressure with slow cadence and clear audio/visual tells.
- **Sapper Charges**: place-and-arm demolition charges (requires time on target; counterplay via disarm).
- **Shield Projector**: temporary cover bubble for attackers to stage a breach (limited duration; countered by focus fire/EMP effects).

Constraints to preserve readability and prevent base deletion:
- siege weapons require **setup time** and can be **destroyed**
- siege damage is **bounded** by the assault window and objective rules
- core structures (e.g., “Foundation Core”) may be **immune**; victory is about **vault objectives**, not wiping

### 16.5 Siege Objectives (Win Conditions)
Pick one core objective model (or support multiple modes) that fits “sting without deletion”:
- **Vault Extraction**: attackers breach and steal a limited amount of high-value items (vault has a protected cap).
- **Relic Capture**: attackers seize a relic/banner and hold it for \(X\) seconds, then extract.
- **Sabotage**: attackers destroy or disable a key structure (e.g., waypoint/forge core) for a limited downtime.

Key rule: rewards should be meaningful, but **loss should not erase weeks of progress**.

### 16.6 Defender Tools (So Defense Is Real Gameplay)
Defense needs active and passive counterplay:
- **Early warning**: map ping + base UI callouts + audible signal at the base.
- **Defender respawn advantage**: defenders respawn closer (bounded, not infinite).
- **Repair during siege**: limited “field repairs” (slow, interruptible) to create clutch moments.
- **Anti-sapper gameplay**: disarm interactions, trap triggers, detection wards.
- **Hirelings/guards (optional)**: bounded NPC defenders that buy time, not win sieges alone.

### 16.7 Rewards, Stakes, and Scoring
Sieges should convert resources into story:
- **Attacker stake**: Siege Kit cost is significant; failure means meaningful loss (materials + time).
- **Defender stake**: potential loss of vault items, temporary downtime, or repair cost—but not total deletion.
- **Season/weekly scoring**: successful raids, successful defenses, and “objective holds” feed competitive rankings.

### 16.8 Offline & Low-Pop Protection
If defenders are offline, the system must still be fair:
- **No instant offline breaches**: siege cannot begin without the warm-up; offline bases get stronger “warding” and NPC delay tools.
- **Vulnerability schedule**: factions set preferred vulnerable windows (within constraints) to fit time budgets.
- **New player protection**: fresh bases are protected until a threshold (tier/time played) is reached.

## 17. Progression Layers
### 17.1 Weekly Refresh (Optional)
If Ashfall uses a weekly cadence, the weekly “reset” should be a **refresh of incentives**, not deletion of your hero:
- objectives/events rotate
- leaderboards/scoring periods roll over
- world states may shift (spawns, modifiers), without wiping core character progression

### 17.2 Seasonal Persistence (Meta Progression)
Persists season-to-season:
- cosmetics
- blueprint unlocks
- commander traits
- strategic starting bonuses
- prestige ranks / seasonal identity

Examples of seasonal cosmetic reward categories:
- base customization (themes, props, banners)
- defense customization (tower/trap skins, wall/door cosmetics)
- character armor/effect customization (armor skins, ability VFX; readability-safe)
- mount skins (and related tack cosmetics)
- titles/emotes/badges (prestige identity)

### 17.3 Season Objectives + Battle-Pass Style Progress
Seasons run **once per quarter** and provide an engagement layer that spans multiple weekly refreshes.

Requirements:
- objectives that refresh weekly (push participation without “wipe” pressure)
- season-long objectives that give long-tail goals across the quarter
- battle-pass style progression track (free + premium lanes optional; never pay-to-win)

Design intent:
- objectives should bias players toward **spotlight moments** (raids, defenses, boss camps, Day 7 finales)
- objectives must fit the core cadence (3–4 hours, ~3 days/week)
- avoid daily-chore pressure; weekly cadence is the heartbeat (if used)

Meta progression principles (from PRD):
- reward skill and varied playstyles
- avoid pay-to-win
- keep competitive skill expression meaningful each week

## 18. Seasonal Structure & Competitive Ranking
### 18.1 Season Format
Each season contains:
- **quarterly cadence** (multiple weekly refreshes per season; typically **~6–10 weeks**)
- a **cumulative ranking system**
- leaderboard visibility
- cosmetic + prestige rewards

At season end:
- ranks lock
- rewards distribute
- new season meta begins

### 18.2 Weekly Scoring Categories (Inputs)
Players earn points weekly based on:
- territory control
- NPC camp clears
- hero combat performance
- base survival
- resource dominance
- PvP victories
- final collapse placement

### 18.3 Rank Tiers (Example)
Bronze → Iron → Silver → Gold → Mythic → Legend

Design intent: ranks represent **strategic mastery**, not only kill count.

## 19. Social Structure & Diplomacy
- factions capped at small sizes (1–6)
- temporary alliances allowed
- betrayal is supported as part of the drama
- in-game diplomacy tools (lightweight, readable; details TBD)

## 20. UX / UI (Experience Requirements)
### 20.1 Key Modes
- **Exploration/combat**: default third-person, WASD
- **Build mode**: snap/ghost placement, rotate, place
- **Command mode**: in-world tactical overlay (no top-down camera)

### 20.2 Clarity Requirements (Because Complexity Risk Is High)
- Complex systems should unlock gradually via onboarding and level-appropriate pacing
- UI must make “what to do next” obvious (especially Day 1–2)
- clear warnings for: raid risk, contested zones, escalation events, base under attack

## 21. Monetization (Optional Direction)
From PRD direction:
- cosmetic skins
- commander cosmetics
- seasonal passes
- **no direct competitive advantages sold**

## 22. MVP Scope (Prototype Validation)
Prototype scope from conversation:
- 1 biome
- 20–30 player shard
- Tier 1 base building (camp + crafting stations + comfort buff)
- hero prototype (WoW-like movement + 6–8 abilities including AoE/interrupt/defensive/mobility)
- mount prototype (summon/dismount, travel feel)
- POIs/camps tier 1–2 + 1 boss encounter
- optional event cadence prototype (1–2 scheduled events)

Prototype goal: **validate combat feel + travel pacing + adventure loop** (fight → loot → upgrade → repeat).

## 23. Key Risks & Mitigation Targets
Risks called out in the draft:
- snowball factions
- offline raiding frustration
- system overload / complexity creep
- complexity intimidation barrier
- server cost / persistence simulation cost
- burnout from weekly cadence

Mitigation themes:
- careful pacing + onboarding
- event pacing / escalation calendar
- rubber-banding (non-feels-bad)
- strong UI clarity

## 24. Technical / Production Notes (High-Level)
These are implied requirements based on the design:
- shard-based server model supporting multi-day persistence
- server-authoritative combat (PvP tension + loot risk)
- base simulation running while players are offline
- visibility/notification systems for attacks/escalations

## 25. Content Roadmap Hooks (Next Design Docs)
The conversation explicitly flagged these as follow-ups:
- hero class roster + ability trees
- (optional) event calendar (weekly cadence)
- loot/crafting economy model (spreadsheet)
- combat system spec (WoW-like kit rules, targeting, GCD/cooldowns, telegraphs)
- UI wireframes (combat HUD, class/talent UI, map/POI UI)
- networking/server architecture outline
- tutorial flow + onboarding
- example 1-week narrative “war story”
