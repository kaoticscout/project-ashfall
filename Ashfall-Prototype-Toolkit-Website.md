# Ashfall — Game Design Prototype Toolkit (Website) — Approach Doc

This document outlines an approach for building a **game design prototype toolkit** as a website: a set of interactive pages that visualize Ashfall’s world, classes, progression, and seasonal systems in a form that is easy to iterate on and share.

Reference inspirations:
- Map visualization style: [`https://satisfactory-calculator.com/en/interactive-map`](https://satisfactory-calculator.com/en/interactive-map)
- Class/build layout style: [`https://mobalytics.gg/diablo-4/builds/sorcerer-mekuna-crackling-energy`](https://mobalytics.gg/diablo-4/builds/sorcerer-mekuna-crackling-energy)

## 1. Goals
- **Fast iteration**: designers can update data without code changes whenever possible.
- **Shareable**: stable URLs per map layer, class, building, season.
- **Readable**: everything is skimmable; visuals are clear and presentation-grade.
- **Interactive**: filters, layers, and drill-down views replace huge text docs.
- **Source of truth (lightweight)**: the toolkit references canonical JSON/YAML data files, not scattered notes.

## 2. Non-Goals (for v1)
- Not an in-game editor.
- Not a full simulation (pathfinding, economy balancing, combat calc) unless explicitly added later.
- Not an account system unless needed for collaboration (can be added later).

## 3. Information Architecture (Site Map)
- **Home / Dashboard**
  - quick links, recent changes, “current season”, quick search
- **World Map**
  - interactive map + layer toggles + object inspector
- **Classes**
  - list of hero classes → detail page per class (build-guide layout)
- **Progression**
  - progression views for hero power (levels/talents/gear) and secondary homestead unlocks
- **Seasons**
  - current season overview + battle pass track + rank ladder + reward catalog + “player rank” position (mock)

## 4. Shared Data Model (Recommended)
Store data as versioned files in-repo (easy diff/review), e.g. `data/*.json` or `data/*.yaml`.

### 4.1 Core Entities
- **Map**
  - metadata: name, bounds, coordinate system, image tiles or vector source
- **MapFeature**
  - types: resource_node, npc_camp, dynamic_event, key_location, spawn, territory_beacon, etc.
- **Class**
  - name, role, fantasy, strengths/weaknesses, gameplay loop, progression, visuals
- **Ability**
  - name, type (basic/skill/ultimate/passive), description, tags, cooldown, costs, upgrades
- **ProgressionNode / Unlock**
  - node id, prerequisites, track (hero/homestead), category (talent/gear/crafting/travel/comfort/etc.), unlock outputs
- **Season**
  - theme, dates, objectives/events, rank ladder, reward track
- **Reward**
  - cosmetic types (base/defense/armor/VFX/mount/titles/emotes), rarity, preview assets

### 4.2 “Design First” Constraints
- Every entity has:
  - **stable id**
  - **display name**
  - **short summary**
  - optional **media** (icon, image, video)
  - **tags** for filtering/search

## 5. Page Designs (What Each Page Must Do)

## 5.1 World Map Page (Interactive)
Goal: visualize the world at a glance and answer “where is X?” and “what’s contested?” quickly.

Core features:
- **Pan/zoom map** (image tiles or vector basemap)
- **Layer toggles**:
  - resource nodes (with type/purity/respawn rules if applicable)
  - NPC camps (tier, faction, loot table refs)
  - dynamic events (by day, frequency, trigger)
  - key locations (POIs, bosses, relic sites, spawns)
- **Filtering**:
  - by type, tier, biome, day-in-week, contest level, tags
- **Click inspect**:
  - side panel with details + links to related entities (camp → loot → base unlocks, etc.)
- **Shareable state**:
  - URL query params store zoom, center, enabled layers, filters, selected feature

Data notes:
- MapFeatures should include either:
  - point (x,y), or polygon/polyline, plus optional radius/area for influence
- Events can be placed or have “zone shapes”.

## 5.2 Classes Page (Build-Guide Style)
Goal: present each class like a “build guide” that is easy to understand and compare.

Class list:
- cards with: role, difficulty, playstyle tags, signature mechanics

Class detail page (layout inspired by Mobalytics):
- **Overview**
  - fantasy, role, signature loop, strengths/weaknesses
- **Core Kit**
  - abilities grouped by: basic/core/mobility/defensive/ultimate/passives
- **Progression**
  - leveling milestones (high-level for prototype)
  - talent/rune highlights
- **Synergies**
  - adventure synergies (group roles, cooldown windows, objective strengths)
  - optional homestead/crafting synergies (prep benefits, consumable focus)
- **Media**
  - GIF/video clips, ability previews (even placeholder)

## 5.3 Progression Page (Hero + Homestead)
Goal: a visual progression view that answers “what unlocks when?” and “why do we care?”—with hero power as the primary path.

Core features:
- **Progression visualization** (tiered or grouped):
  - hero: levels → talent/rune unlocks → gear targets
  - homestead (secondary): camp → homestead → hall (crafting/comfort/travel)
- **Node categories** (filterable):
  - Talents / Runes
  - Gear Upgrades
  - Crafting Stations
  - Consumables
  - Homestead Upgrades
  - Travel Convenience
- **Node details panel**
  - prerequisites, costs (placeholder ok), unlock outputs, screenshots
- **Highlight paths**
  - “show everything needed to reach X”
  - “compare two build paths”

Implementation note:
- Represent the tree as a graph (nodes + edges) so it can render in multiple layouts later.

## 5.4 Seasons Page (Quarterly Seasons + Battle Pass)
Goal: show how optional objectives/events fit into a quarterly season and what players earn.

Core features:
- **Season overview**
  - theme, dates, weekly objective/event schedule
  - key seasonal mechanics (if any)
- **Objectives**
  - weekly objectives (refresh each week)
  - season-long objectives
- **Battle pass track**
  - tiers with reward previews (free + premium lanes optional)
  - XP sources (events, objectives, spotlight actions)
- **Rank ladder**
  - Bronze → Iron → Silver → Gold → Mythic → Legend (or final ladder)
  - show reward bundles per rank
- **Player position mock**
  - a “you are here” marker on the ladder and pass track (no auth required for v1; can use sample profiles)

## 6. Cross-Cutting UX Requirements
- **Global search** across map features, classes, abilities, unlocks, seasons.
- **Deep-linking** everywhere (share links in Discord/Notion).
- **Consistent inspector panels** (same interaction pattern across pages).
- **Accessibility**:
  - keyboard navigation for lists
  - colorblind-safe palette for map layers

## 7. Implementation Approach (Pragmatic MVP)
Build in layers so you can ship value early.

### 7.1 Phase 0 — Foundations (1–2 days)
- pick stack (see section 8)
- set up routing + layout + theme
- define the initial data schemas and add a few sample entities

### 7.2 Phase 1 — Map v1 (highest leverage)
- render a basemap (image overlay or tiles)
- add MapFeature points + toggles + inspector panel
- URL state for sharing

### 7.3 Phase 2 — Classes v1
- list page + detail page
- ability components + “build guide” layout

### 7.4 Phase 3 — Base Progression v1
- render graph from data
- filters by category + node inspector

### 7.5 Phase 4 — Seasons v1
- season overview + objectives list
- battle pass track component with reward cards
- rank ladder component with reward bundles

### 7.6 Phase 5 — Polish / Shareability
- global search, cross-links, nicer previews
- import/export data utilities

## 8. Tech Recommendations (Default)
These are defaults chosen for speed + maintainability for a prototype toolkit.

Frontend:
- **React + TypeScript** (component-rich, good ecosystem)
- Routing: **Next.js** (or another React router if you prefer SPA)
- Styling: Tailwind or CSS modules (team preference)

Map:
- **MapLibre GL** (open) or Mapbox GL-style API
- Alternative: Leaflet for simpler image-overlay maps

Graphs/trees:
- **React Flow** (fast for node graphs) or D3 for full control

Data:
- Start with **static JSON/YAML** committed to the repo
- Optional later: a small backend or CMS if non-technical editing becomes the bottleneck

## 9. Asset & Authoring Workflow
- Put canonical data in `data/`:
  - `data/map/*.json`
  - `data/classes/*.json`
  - `data/progression/*.json`
  - `data/seasons/*.json`
- Put icons/images in `public/` or an asset folder with stable paths.
- Prefer “small PRs” that update data files and preview changes locally.

## 10. Risks / Design Traps to Avoid
- **Overbuilding simulation** before visuals are useful.
- **No stable IDs** → broken links and impossible diffing.
- **Unreadable map layer soup** → enforce filters and sensible defaults.
- **Reward VFX that harms clarity** → keep strict readability constraints even in prototype.

## 11. Immediate Next Step (If You Want)
Define the first-pass schemas and seed data for:
- 1 map with ~20 features (5 nodes, 5 camps, 5 events, 5 POIs)
- 2 hero classes with 6–10 abilities each
- 1 base progression tree covering Tier 1→2 with ~15 nodes
- 1 quarterly season with a sample battle pass (20 tiers) + rank rewards

