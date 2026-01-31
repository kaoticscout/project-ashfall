# Ashfall Prototype Toolkit — Visual Style Guide (WoW Midnight-Inspired)

Inspiration reference: [World of Warcraft: Midnight site](https://worldofwarcraft.blizzard.com/en-us/midnight)

This guide defines a **design system** for the Ashfall prototype toolkit website that evokes the same premium, cinematic, “expansion reveal” feel as the WoW Midnight page, while still supporting **data-heavy tools** (map layers, graphs, tables, builds).

---

## 1. Design Principles (Non-Negotiables)
- **Cinematic first impression, tool-grade usability second**: pages open with a premium hero section, then transition into functional tooling without feeling like a different site.
- **High contrast + high clarity**: dark UI with bright accents; readable text and legible controls in tool contexts.
- **Ornamented frames, modern internals**: decorative borders/embellishments for headers/sections; inside those frames, clean modern UI patterns.
- **Big typography, intentional whitespace**: strong hierarchy; never cramped.
- **“Expansion website” polish**: tasteful motion, depth, and visual storytelling—no flat admin-dashboard feel.

---

## 2. Brand Moodboard (How It Should Feel)
Keywords:
- **Mythic**, **apocalyptic**, **prestige**
- **Dark metal**, **ember glow**, **arcane energy**
- **Ancient tech**, **ruins**, **faction heraldry**

Avoid:
- playful/cartoonish visuals
- “bootstrap dashboard” UI
- neon cyberpunk unless explicitly themed per season

---

## 3. Layout System

### 3.1 Page Shell
- **Top nav**: transparent over hero; becomes solid/blurred on scroll.
- **Max content width**: 1200–1320px for prose-heavy pages; tools (map/graphs) can go full width.
- **Section rhythm**: hero → overview → deep content modules (cards, grids) → footer.

### 3.2 Grid
- Desktop: 12-column grid
- Tablet: 8-column grid
- Mobile: 4-column grid

Spacing scale (example token names):
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-5`: 24px
- `space-6`: 32px
- `space-7`: 48px
- `space-8`: 64px
- `space-9`: 96px

---

## 4. Color System (Tokens)
The WoW Midnight inspiration is dark, premium, and accent-driven. Ashfall should keep a similar structure:

### 4.1 Core Neutrals
- **`bg-0`**: near-black (page background)
- **`bg-1`**: slightly lighter black (raised panels)
- **`bg-2`**: charcoal (hover/active)
- **`text-0`**: near-white (primary text)
- **`text-1`**: soft white (secondary text)
- **`text-2`**: muted gray (metadata)

### 4.2 Accent Colors (Ashfall defaults)
Pick 1 “primary” accent and 1 “arcane” accent; keep the rest reserved.
- **`accent-gold`**: prestige/CTA highlight (buttons, headings, rank highlights)
- **`accent-ember`**: danger/war/heat (events, raids, alerts)
- **`accent-arcane`**: hero magic/VFX (class tags, ability UI)

### 4.3 Status Colors (Functional UI)
- **Success**: green (used sparingly; never neon)
- **Warning**: amber
- **Error**: red (reserved for critical states)
- **Info**: blue/cyan (muted)

### 4.4 Gradients
Use gradients primarily in hero sections and key banners:
- **Hero gradient**: dark → accent-arcane glow
- **CTA gradient**: accent-gold → subtle warm highlight

Rule: gradients must not reduce text contrast or tool readability.

---

## 5. Typography
The WoW Midnight site vibe relies heavily on confident typography and hierarchy.

### 5.1 Typeface Strategy
- **Display font** (headings): a sharp serif or “fantasy serif” that reads premium.
- **UI/body font**: modern sans (high legibility for tooling).

If you want simple defaults:
- Display: a classic serif with strong caps
- Body: a neutral sans (Inter-like)

### 5.2 Type Scale (Desktop)
- H1: 56–72px (hero title)
- H2: 36–44px (section title)
- H3: 24–28px (module title)
- Body: 16–18px
- Small/meta: 12–14px

### 5.3 Text Styling
- Use **uppercase** sparingly for nav + small labels.
- Use **wide tracking** for eyebrow labels (“SEASON”, “FEATURE”, “OVERVIEW”).
- Use **short line lengths** (55–80 chars) in narrative sections.

---

## 6. Iconography & Illustrations
- Icons should feel **etched/metallic** or **glyph-like**, not flat outline sets.
- Prefer:
  - faction sigils
  - rune motifs
  - material icons (wood/stone/scrap) with realistic shading
- Avoid:
  - generic “feather icons” look for primary UI (okay for secondary utilities if subtle)

---

## 7. Imagery & Background Treatment
Inspired by the cinematic approach of the WoW Midnight page ([reference](https://worldofwarcraft.blizzard.com/en-us/midnight)).

### 7.1 Hero Sections
Each major page should have:
- **full-bleed background** (art/abstract map texture)
- a **dark overlay** (improves readability)
- accent **light bloom** behind the title (subtle)

### 7.2 Section Backgrounds
- Alternate:
  - pure dark
  - dark with texture (noise, brushed metal, ash)
  - framed panels for key modules

---

## 8. Surfaces, Borders, and Depth
This is where the “premium expansion” vibe lives.

### 8.1 Cards / Panels
- Use **soft elevation** (shadow + subtle highlight border).
- Use **ornamental frames** only on high-level modules (hero, major feature blocks).
- Internal tooling panels should remain clean and consistent.

### 8.2 Borders
Border token examples:
- `border-subtle`: 1px, low-contrast
- `border-accent`: 1px, accent color at low opacity

### 8.3 Glass / Blur
Allowed for nav and floating inspectors:
- transparent dark + backdrop blur + thin border
Keep blur minimal to maintain performance.

---

## 9. Motion & Interaction (Micro + Macro)
The inspiration site uses “trailer-page” motion: fade/slide, parallax, tasteful reveals.

### 9.1 Motion Principles
- **Fast UI**: 120–180ms for hovers and micro transitions.
- **Cinematic sections**: 240–400ms for hero and big module entrances.
- **Never block**: motion should never delay interaction.

### 9.2 Recommended Patterns
- Hero: subtle parallax background (optional), title fade-up
- Buttons: glow on hover (accent-gold), press-in on active
- Cards: lift + border brighten on hover
- Map pins: scale-in on enable; pulse for “dynamic event”

### 9.3 Avoid
- excessive bounce
- long easing on frequent interactions (filters, toggles)

---

## 10. Component Style Recipes

### 10.1 Navigation
- Left: logo + primary nav
- Right: search, “Current Season”, GitHub/Share (if applicable)
- Sticky behavior: transparent → solid on scroll

### 10.2 Buttons
Variants:
- **Primary CTA** (accent-gold): used sparingly (1–2 per view)
- **Secondary**: dark surface + border
- **Tertiary**: text-only

States:
- hover: glow + slight lift
- disabled: low contrast, no glow

### 10.3 Tabs & Segmented Controls
Use for tool filters (map layers, class sections):
- dark track + bright active indicator
- active label uses `text-0`

### 10.4 Badges (Tags)
Use for:
- class roles (Warden, Hunter, Architect)
- map feature types (Camp Tier 2, Resource Node)
- season themes

Badge style: pill shape, subtle gradient, clear icon optional.

### 10.5 Tables (Tooling)
Tables must look premium, not like admin dashboards:
- dark rows with subtle separators
- hover highlight
- sticky header with blur

### 10.6 Inspector / Side Panel
Used for map feature details and node details:
- floating panel with glass/blur
- clear section dividers
- “related links” list to jump to other pages

---

## 11. Page-Specific Visual Notes

### 11.1 World Map Page
- Full-bleed map canvas
- Layer toggles in a framed panel
- Legend uses badge system and high-contrast icons
- Events should visually “feel alive” (pulse + glow)

### 11.2 Classes Page
Mobalytics-like structure but with Ashfall branding:
- left rail: sections (Overview, Abilities, Progression, Synergies)
- main: content modules with framed headings
- ability cards show icon + short clip + tags

### 11.3 Base Progression Page
- Graph background uses subtle texture (grid/etching)
- Nodes use category colors (defense/hero/siege/gathering)
- Hover/selection highlights path dependencies

### 11.4 Seasons Page
- Rank ladder should feel like a “medal case”:
  - Bronze → Legend with distinct metal/energy accents
- Battle pass track is a prestige rail:
  - reward cards with strong thumbnails
  - premium lane visually separated, but not garish

---

## 12. Accessibility & Readability Constraints
- Minimum contrast: WCAG AA for body text (especially important on dark UI).
- Never encode meaning by color alone (icons + labels).
- “Effect customizations” must be **readability-safe**:
  - avoid overly bright or screen-filling particles
  - keep enemy telegraphs and hit feedback consistent

---

## 13. Design Tokens (Starter Set)
Define tokens so engineering can implement consistently:
- `color.*` (bg/text/accent/status)
- `space.*`
- `radius.*` (4/8/12/16)
- `shadow.*` (panel, floating, hero)
- `font.*` (display/body)
- `motion.*` (fast, standard, cinematic)

---

## 14. Deliverables Checklist (What Design Should Produce)
- 1 global theme (light/dark not required; dark is default)
- Component library Figma page:
  - buttons, tabs, badges, cards, table, inspector
- Page mockups:
  - Map, Class detail, Progression tree, Seasons overview
- Asset pack:
  - background textures (ash/metal), icon set, sample hero art placeholders

