---
name: stitch-to-react
description: Convert UI screens designed in Google Stitch (accessed via the Antigravity/Stitch MCP connector) into a pixel-accurate, fully responsive React website that works correctly on both desktop web and smartphone viewports. Use this skill whenever the user mentions "Stitch", "Stitch screens", "Antigravity", asks to "build the exact screen" from a design tool, wants a design turned into React, or wants a mockup converted into working responsive code — even if they don't explicitly say "Stitch MCP" or "responsive." Always trigger this before writing any React component derived from an external screen/mockup design, so the design is fetched and inspected first rather than guessed from memory.
---

# Stitch → React

Turns Stitch-generated UI screens into a working, responsive React implementation that matches
the design exactly on desktop and shrinks/reflows correctly on phones.

Stitch screens are usually designed at a single fixed mockup width (commonly ~375–414px, i.e. a
phone frame), even when the end product needs to run on web too. The two hard parts of this skill
are (1) extracting the *exact* visual spec from Stitch rather than eyeballing a screenshot, and
(2) turning a single fixed-width mockup into a layout that is genuinely responsive, not just
scaled.

## Workflow

### 1. Find and load the Stitch MCP tools

Do not assume tool names. Call `tool_search` (or `search_mcp_registry` if no Stitch connector is
attached yet) with keywords like `"stitch"`, `"screen"`, `"design"`, `"ui"`. Load whatever tools
come back — typically something that lists projects/screens and something that returns a single
screen's detail.

If no Stitch connector is available at all, say so and offer to proceed from an uploaded
screenshot/spec instead of silently fabricating a design.

### 2. Pull the exact screen spec, not just a thumbnail

For every screen the user references, fetch the richest representation the MCP tool offers, in
this order of preference:

1. Structured design data (JSON/HTML/CSS export, layer tree, design tokens) — use this as the
   source of truth for spacing, colors, typography, and component hierarchy.
2. A high-resolution screen image — use this to visually verify structured data, or as the only
   source if no structured export exists.

Record for each screen:
- Exact colors (hex values, not "looks like blue")
- Font family, sizes, weights, and line-heights
- Spacing/padding/margin values (in px or rem as given)
- Component hierarchy and grouping (nav, hero, cards, footer, etc.)
- States shown (empty state, filled state, error, etc.) if Stitch exposes more than one
- The mockup's native width (needed for step 4)

If the export gives raw pixel values, keep them — don't round or "simplify" them away. Exactness
is the point of this skill.

### 3. Check for an existing project structure before scaffolding

Look for an existing React app (Vite/CRA/Next) in the working directory. If one exists, add
components into its existing structure and conventions. If none exists, scaffold a minimal Vite +
React + Tailwind project (see `references/scaffold.md` for the exact commands) rather than a bare
single HTML file, since the user asked for "a website," not a static mockup.

### 4. Convert fixed-width mockup → responsive layout

This is the step most likely to be done lazily — don't just recreate the mockup at one width and
call it done. For each screen:

- Identify which elements are fixed-size (icons, avatars, fixed-height headers) vs. which should
  flex (text columns, card grids, images).
- Convert absolute pixel widths from the mockup into relative/responsive equivalents: flexbox/grid
  with `flex-wrap`, `minmax()`, `%`/`fr` units, `max-width` containers, and `clamp()` for fluid
  type where appropriate — instead of literally hardcoding the mockup's px width.
- Use this breakpoint convention unless the user's project already defines its own:
  - `sm` (mobile): base styles, single column, stacked nav
  - `md` (≥768px, tablet): 2-column grids where the mockup shows cards/lists
  - `lg` (≥1024px, desktop/web): full multi-column layout, revealed nav bar, max content width
    (e.g. `max-w-6xl mx-auto`) so content doesn't stretch edge-to-edge on wide screens
- If Stitch only provided one phone-width screen, you are responsible for designing the sensible
  desktop expansion (e.g., a single-column list becomes a grid; a bottom tab bar becomes a top
  nav) — state the assumptions you made about the desktop layout explicitly in your reply, since
  Stitch didn't specify them.
- Never use fixed `px` widths on top-level containers; reserve `px` for small fixed elements
  (icon size, border width) and use responsive units everywhere else.

### 5. Build the components

- One component per screen/major section, matching the naming the user or Stitch project uses.
- Reproduce the exact values captured in step 2 (colors, spacing, typography) via Tailwind
  classes or a theme/tokens file — don't approximate.
- Reuse shared elements (buttons, cards, nav) as their own components instead of duplicating
  markup per screen.
- Consult the `frontend-design` skill for general layout/typography quality judgment calls the
  Stitch export doesn't fully specify (e.g. hover states, focus rings, empty states).

### 6. Verify against the source

Before presenting the result, compare the rendered component back against the Stitch screen
(image or structured export) section by section — spacing, colors, and hierarchy — and against
the responsive checklist in step 4. Call out any place you deviated from the exact spec and why
(e.g., "Stitch used a fixed 375px card width; I made it responsive with `min-width: 280px` so it
doesn't overflow on smaller phones").

## Output expectations

- Deliver working React component files (not a single inline snippet) plus whatever
  config/Tailwind setup is needed to run them, unless the user explicitly asked for a quick
  artifact preview only.
- Confirm the app renders correctly at at least three widths conceptually: ~375px (phone),
  ~768px (tablet), ~1280px (desktop) — describe how each breakpoint's layout differs if asked, or
  when something non-obvious changes between them.

## Reference files

- `references/scaffold.md` — exact commands for scaffolding a new Vite + React + Tailwind project
  when no existing project is present.
