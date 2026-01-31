# Ashfall — Product Requirements Document (PRD)

Project Codename: **Ashfall**  
Product Type: **Multiplayer Survival Action RPG (Embodied Third-Person)**  
Cadence: **Seasonal progression** with optional weekly objectives/events (no RTS “match” framing)

## 1. Vision
Ashfall is a multiplayer survival **action RPG** where you play a **hero**: you level up, gear up, and take on escalating enemies and bosses with **WoW-inspired combat** (quick movement, hotbar abilities, cooldown windows, readable telegraphs, satisfying AoE). Exploration is fast and fluid thanks to **mounted traversal** and quick dismount-to-fight pacing.

Base building exists, but it is **secondary**: a Valheim-like homestead that supports crafting, storage, comfort buffs, and travel convenience—without turning the primary gameplay loop into an RTS/colony economy.

## 2. Product Pillars (Non-Negotiables)
1. **Spotlight Moments (Rust-like highs)**
   - The game must reliably generate **clip-worthy, streamable moments** that players remember for weeks.
   - Moment-to-moment gameplay should be **splashy** (high impact visuals/audio/readability) without becoming unreadable chaos.
2. **Core Player Time Budget (3–4 hours, 3 days/week)**
   - The product must feel “complete” for a core player who can play **~9–12 hours/week**.
   - Hardcore enthusiasts should have **more to do**, but not in a way that **invalidates** or **overrides** core-player progress.
3. **Embodied Hero Adventure**
   - Players are physically present and vulnerable; the default activity is adventuring and combat.
4. **WoW-Inspired Combat + Movement**
   - Quick, responsive traversal; hotbar ability combat with cooldowns, AoE, defensives, interrupts, and curated CC.
5. **Progression & Buildcraft**
   - Leveling, talents/runes, and gear upgrades meaningfully change playstyle and power.
6. **Mounted Exploration**
   - The world is meant to be traveled; mounts make exploration fast and satisfying.
7. **Secondary Homestead Building**
   - Valheim-like base building supports the adventure loop (crafting/comfort/storage/travel) without becoming the main power curve.
8. **PvP Raids & Sieges (Core)**
   - Players can **initiate a siege** on another base by spending **high-end resources** to craft and deploy siege weaponry.
   - Raids are **structured events** with clear objectives, clear counterplay, and guardrails against offline griefing.
   - The primary skill test is **hero combat + tactical execution**, not 24/7 availability or RTS macro.
9. **Seasonal Competitive Structure (Optional Layer)**
   - Periodic ladders/objectives that reward mastery/participation without requiring RTS macro play.

## 3. Target Player Experience
- **Session size**: 30–90 minutes “meaningful progress”; 3+ hour marathons optional.
- **Social**: solo or factions (2–6). Temporary alliances allowed; betrayal supported.
- **Streaming-friendly**: fights, raids, and defenses should be understandable to viewers and exciting in short clips.
 - **Time-budget fit**: a core player can meaningfully compete and contribute with ~3 sessions/week.

## 4. Core Gameplay Loops
### 4.1 Moment-to-Moment Loop
Choose objective → travel (mount) → fight → loot + XP → upgrade build/gear → craft/rest at home (optional) → repeat.

### 4.2 Weekly Macro Loop
If the game uses weekly cadence, it should be framed as **refreshing adventure incentives** (events, objectives, ladders), not wipe-driven RTS war:
- early week: new objectives + accessible events
- mid week: contested elite content ramps
- late week: finale event + rewards/leaderboards

## 5. Requirements — Spotlight Moments (New Core Pillar)
The game should systematically produce “Rust highlight” moments across PvP, PvE, base play, and traversal.

### 5.1 Moment Design Requirements
- **High stakes**: valuable objectives require exposure (loot runs, relic components, boss camps).
- **High clarity**: viewers must understand what happened (who won, what was at stake, why it mattered).
- **High punch**: impactful audio/visual feedback for kills, defenses, breaches, hero ultimates, and last-second saves.
- **Emergence**: systems should allow unplanned outcomes (third-party fights, betrayals, clutch defenses).
- **Narrative closure**: the week ends with a definitive “war story” resolution.

### 5.2 Clip-Worthy Moment Sources (Must Exist)
- **Loot run escapes**: sprinting home with rare resources while chased.
- **Boss/elite clutch wins**: last-second defensives, interrupt saves, AoE clears.
- **Hero duels**: readable 1v1/2v2 hero fights that look skillful.
- **Contested objective fights**: multiple groups collide at a world event or elite POI.
- **World events**: scheduled “finale” encounters, roaming threats, rare spawns.
- **Betrayal/alliances**: diplomacy decisions that flip outcomes.

### 5.3 Combat & Presentation Requirements (Support “Splashy”)
- Combat must remain **weighty + readable** even at high intensity.
- Abilities should have:
  - distinct silhouettes/telegraphs
  - strong hit feedback
  - “moment peaks” (e.g., ult windows) tuned for highlights
- Important events should generate:
  - clear UI callouts (base under attack, breach detected, boss engaged)
  - strong audio cues (global/local)

## 5B. Requirements — Time Budget & Anti-Grind Dominance
This pillar exists to ensure the game rewards dedication without becoming “whoever played 12 hours/day wins.”

### 5B.1 Core Time Budget Targets
- In **~3–4 hours per session**, a core player should be able to:
  - stabilize a base state appropriate to the current week phase
  - complete at least one meaningful “risk run” (strategic resource/camp objective)
  - participate in at least one meaningful conflict (defense, raid, camp contest, hero duel)
- Missing a day should not permanently doom competitive relevance (week is an arc, not a daily chore checklist).

### 5B.2 Hardcore Motivation (Must Exist)
Hardcore players should have additional goals that are primarily:
- **prestige/leaderboard optimization** (pushing score, consistency, execution)
- **cosmetics/seasonal status** (non-power rewards)
- **variety/mastery** (alternate builds, different hero archetypes, optional objectives)
- **social leadership** (organizing raids/defenses, diplomacy)

### 5B.3 Anti-Grind Dominance Guardrails (Must Exist)
Systems must avoid “time played = unstoppable power.” Examples of acceptable constraints:
- **diminishing returns** on repeatable farming loops (rate limits, escalating costs, contested node depletion)
- **strategic choke points** that require risk/coordination (not solo grind in safety)
- **periodic refresh** (events/objectives) keeps runaway compounding in check
- **power ceilings** where extra hours produce marginal gains (optimization > raw stat inflation)
- **catch-up paths** for core players (clear milestones, event participation value, salvage paths)

### 5B.4 Offline/Asynchronous Considerations
- Offline base productivity should help time-budget players, but cannot create unstoppable offline snowballing.
- Systems should preserve:
  - meaningful defense (architecture + guards)
  - meaningful counterplay (raids require commitment/risk; defenders have tools)

## 6. Systems Requirements (Core)
### 6.1 Player Lifecycle
- Start as a capable **hero** (basic kit online immediately).
- Progress into **specialization** (talents/runes/augments) and gear tiers.
- Reach **endgame mastery** via elite content, buildcraft, and optional competitive layers.

### 6.2 Combat & Controls
- Third-person, **WASD movement**
- Ability hotbar
- Dodge/mobility
- Mount summon/dismount (fast)
- Combat inspiration: **WoW-like kit** (cooldowns, AoE, interrupts, defensives) with clarity-first telegraphs

### 6.3 Death & Risk
- Death is punishing, not deleting:
  - drop carried inventory/crafting mats to a recoverable “tombstone” (Valheim-like)
  - respawn timer at home/nearest shrine
  - optional short injury debuff

### 6.4 Base Building
- Valheim-like snap + blueprint placement
- Base is **secondary**: crafting stations, storage, comfort buffs, farming, trophies, travel convenience

### 6.5 Convenience Automation (Optional)
- If included, “helpers” should be bounded (crafting queues, simple tasks) and must not become an RTS micro layer.

### 6.6 Economy & Resources
- Resources exist to support crafting/consumables/gear upgrades.
- Valuable materials come from **adventure risk** (bosses, elite POIs, contested events).

### 6.7 NPC Camps
- Escalation gates + PvP hotspots
- Tiered camps: bandits → fortified → bosses → world events

### 6.8 Territory
- PvP is a **core pillar** via structured **raids/sieges** and contested objectives:
  - sieges require crafted siege kits (resource-driven)
  - raid windows + warm-up notifications reduce 24/7 pressure
  - outcomes prioritize **steal/sabotage objectives** over total deletion

### 6.9 PvP Raids & Sieges (Core Requirements)
Sieges must be:
- **Initiated via high-end resources**: attackers craft a **Siege Kit** that includes a declaration token + siege weapon modules.
- **Time-bounded**: a predictable **warm-up** followed by a fixed **assault window** (e.g., 15–30 minutes).
- **Objective-based (not wipe-based)**: vault extraction, relic capture, or limited sabotage (downtime), rather than base deletion.
- **Defender-playable**: clear warning + meaningful counterplay (destroy siege engines, disarm charges, hold objectives).
- **Anti-grief**:
  - vulnerability windows / raid hours
  - frequency caps (attacks per day/week; vulnerability per day/week)
  - tier/power band matchmaking so high-end factions can’t endlessly farm new bases
- **Readable**: breaches and raid states have clear UI/audio callouts for players and viewers.

## 7. Progression & Competitive Structure
### 7.1 Character Progression (Persistent)
Persists:
- hero levels
- build unlocks (talents/runes/augments)
- gear progression (as designed)

### 7.2 Meta-Progression (Persists Across Updates)
Persists:
- cosmetics
- blueprint unlocks
- commander traits
- starting bonuses
- prestige ranks

### 7.3 Seasons (Quarterly) + Battle-Pass Style Progression
- **Season cadence**: **once per quarter** (≈ 12–13 weeks).
- **Season structure**:
  - multiple weekly refreshes inside one season
  - season objectives that encourage engagement each week
  - battle-pass style progression track (free + premium lanes optional; never pay-to-win)

#### 7.3.0 Season Rewards (Examples / Target Catalog)
Season rewards should be primarily cosmetic/customization-based, including:
- **Base customization** (themes, materials/skins, props, banners, lighting, decor)
- **Defense customization** (tower skins, trap skins, wall/door cosmetics, VFX on defenses)
- **Character cosmetics** (armor skins, capes/cloaks, helmets, silhouettes that remain readable)
- **Ability/effect customization** (spell VFX, trails, kill effects; tuned to preserve combat clarity)
- **Mount cosmetics** (mount skins, saddles, barding, particle accents)
- **Emotes / titles / badges** (prestige identity)

#### 7.3.1 Season Objectives (Must Exist)
Each season must include:
- **weekly objectives** that refresh each week (encourage “come back for new objectives”)
- **season-long objectives** (multi-week goals) that provide long-tail engagement
- objectives should push players into:
  - contested zones / strategic resources
  - PvE camp progression
  - faction conflict/defense participation
  - Day 7 final stand participation

Design constraints:
- objectives must be completable on the core time budget (3–4 hours, 3 days/week)
- objectives should promote spotlight moments, not chores (quality > quantity)
- avoid “must log in daily” pressure; weekly cadence is primary

#### 7.3.2 Battle Pass Progress Sources (Preferred)
Battle-pass XP should come from:
- participating in weekly arc milestones (Day 3+ conflicts, Day 7 finale)
- accomplishing “spotlight moment” actions (boss clears, base defense, raid success/repel)
- completing season objectives
- optional bonus for winning/placing, without making pass completion dependent on victory

Battle-pass constraints:
- rewards must be **non-power** (cosmetic/customization/prestige)
- VFX rewards must preserve **readability** (no pay-for-clarity disadvantage)

### 7.4 Seasonal Ranking (Competitive Ladder)
- Season length: **quarterly** (contains **~6–10 weekly worlds**, depending on exact cadence)
- Weekly points sources:
  - territory control
  - NPC camp clears
  - hero combat performance
  - base survival
  - resource dominance
  - PvP victories
  - final collapse placement
- Rank tiers example: Bronze → Iron → Silver → Gold → Mythic → Legend

## 8. MVP Scope (Prototype)
- 1 biome
- 20–30 player shard
- Tier 1 base building (camp + crafting + comfort)
- hero prototype (6–8 abilities incl. AoE/interrupt/defensive/mobility) + WoW-like movement feel
- mount traversal prototype
- NPC camps/POIs tier 1–2 + 1 boss encounter
- optional event objective prototype (1–2 events)

Goal: validate **combat feel + travel pacing + adventure loop + spotlight moments**.

## 9. Key Risks
- snowballing factions
- offline raiding frustration
- complexity barrier
- server cost for multi-day simulation
- burnout from weekly cadence
- “splashy” combat becoming unreadable

## 10. Success Criteria (What We’d Measure)
(Initial targets to refine later.)
- Players can recall and share highlight moments after a week.
- Day 7 participation remains high (final stand is a strong draw).
- New players can reach “Hero Ascension” within the first week via clear onboarding.

