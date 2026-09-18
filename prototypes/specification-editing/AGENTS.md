# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Settled study direction

- Preserve the Craft-led document treatment and text-first specification outline.
- Model requirement interaction as reading → selected → editing. Selection must not start editing.
- Reveal Edit through hover and keyboard focus on pointer devices; keep the action visible on narrow or touch layouts.
- Keep editing inline and preserve a private draft when the user returns to reading or navigates elsewhere.
- Only `Done editing` updates the simulated saved Specification; discard remains explicit and locally confirmed.
- Keep ochre and blue as controlled palette treatments with identical content, layout and interaction.
- Treat this prototype as exploratory evidence, not production UI or a replacement for crystallized visual direction.

## Open experiential feedback — 2026-09-18

- The main Specification document loses hierarchy and location context during sustained scrolling.
- Requirement groups need clearer visual separation from their requirement items; `Rescheduling` currently reads too similarly to `Reschedule an appointment`.
- Peer requirement items such as FR-012 and FR-013 should use the same title hierarchy and treatment.
- Place a requirement reference such as `FR-012` or `FR-013` on the same line as its requirement title so identity and title read as one unit.
- Evaluate Urbanist and Poppins variable fonts as alternatives to Source Sans 3; no replacement typeface is selected yet.
- Remove the duplicated project name from the desktop application header while preserving enough project and destination context.
- Treat these as refinement candidates pending an updated prototype comparison, not as production UI decisions.

## Bounded hierarchy refinement — 2026-09-18

- Retain Source Sans 3 so hierarchy can be assessed independently from typeface choice.
- Keep the semantic `h1` → `h2` → `h3` outline while making the group heading visibly larger than requirement titles.
- Render FR-012 and FR-013 with one shared title treatment and place each reference on its title line.
- Show the project name once in the desktop header, within the project/destination context.
- Defer sticky scroll context and Urbanist/Poppins comparison until this hierarchy pass has been evaluated.
