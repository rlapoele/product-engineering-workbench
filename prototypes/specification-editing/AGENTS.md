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
- Evaluate Urbanist and Poppins as alternatives to Source Sans 3; Urbanist is available as a variable font, while the current Google Fonts Poppins distribution uses static weights. No replacement typeface is selected yet.
- Remove the duplicated project name from the desktop application header while preserving enough project and destination context.
- Nest the Specification outline beneath a single Specification disclosure instead of separating destinations and document sections into two visual groups.
- Render Specification sections in their intended document order and give peer section titles one consistent treatment.
- Keep each requirement reference the same size as its title, with muted color and a visible separator.
- Compare Urbanist and Poppins against identical content, hierarchy, palette and interaction; use Urbanist as the initial candidate without treating it as a selected default.
- Urbanist is comfortable at the current size but needs slightly more tracking for readability; evaluate it with `0.035em` letter spacing throughout while leaving Poppins spacing unchanged.
- Owner comparison prefers the blue palette on screen despite an emotional preference for ochre; blue is now the stronger default-palette candidate. The original `0.13` accent needed clearer chromatic separation from blue-tinted primary ink.
- Owner evaluation found blue accent chroma `0.15` better than `0.13` at the existing `46%` lightness and `255` hue. Keep `0.15` as the preferred blue accent for this prototype while leaving other blue semantic roles unchanged; this does not select a production token or final palette.
- Treat these as refinement candidates pending an updated prototype comparison, not as production UI decisions.

## Bounded hierarchy refinement — 2026-09-18

- Retain Source Sans 3 so hierarchy can be assessed independently from typeface choice.
- Keep a sequential semantic hierarchy from the document title through section, group and requirement headings.
- Render FR-012 and FR-013 with one shared title treatment and place each reference on its title line.
- Show the project name once in the desktop header, within the project/destination context.
- Defer sticky scroll context and Urbanist/Poppins comparison until this hierarchy pass has been evaluated.

## Outline and document structure refinement — 2026-09-18

- Use one text-first navigation sequence: the Specification destination is an ARIA disclosure whose expanded content is the ordered Specification outline; Sources, Conversations and Collaboration requests remain sibling application destinations.
- Render the document as Specification → Product overview → Goals and success criteria → Core features → Functional requirements → Acceptance criteria → Risks and open questions.
- Give all peer Specification sections the same `h2` treatment, with requirement groups at `h3` and requirement items at `h4`.
- Render requirement headings as `FR-012 · Reschedule an appointment`: reference and title share size and weight while the reference and separator remain muted.

## Typeface comparison — 2026-09-18

- Replace the deferred Source Sans 3 treatment with an in-prototype Urbanist/Poppins comparison so reading and editing can be assessed with otherwise identical states.
- Start with Urbanist because its humanist construction is the closer Craft-led reading candidate; retain Poppins as the more geometric comparison.
- Bundle the fonts locally. Urbanist uses its variable font; Google Fonts currently distributes Poppins as static faces, so bundle only the regular and semibold weights used by this study.
- Do not interpret the initial Urbanist setting or the comparison control as production authorization or a final typography decision.
- Apply Urbanist's `0.035em` tracking through one semantic font-tracking token, including headings and editing controls; Poppins retains its native spacing.
- Owner evaluation found both Urbanist headings and body copy comfortable to read at `0.035em`; retain this as the preferred prototype setting while broader sustained-use and production typography decisions remain open.

## Fluid typography refinement — 2026-09-20

- Owner feedback found the prototype's typography generally too large and requested an overall scale closer to 80% of the previous treatment.
- Use a stable inline viewport axis for the root-size interpolation so a mobile virtual keyboard cannot switch the scale from viewport width to viewport height.
- Keep the prototype root between 15 and 17 pixels across a 320–1920-pixel inline viewport, then reduce document typography by semantic role rather than shrinking every control indiscriminately.
- Expose the study's `text-*`, `leading-*` and `tracking-*` values through Tailwind theme variables. Urbanist's preferred `0.035em` treatment is `tracking-relaxed`; Poppins retains native tracking.
- Defer the proposed radius scale so the evaluation changes typography without also changing component shape.
- Treat this as a bounded prototype setting pending sustained reading and editing evaluation, not as production typography authorization.

## Requirement action alignment — 2026-09-20

- Align the local Edit action to the first-line baseline of the requirement reference and title. Preserve the button's full touch target and keep the alignment stable when the title wraps rather than compensating with a reduced height or positional offset.

## Sidebar edge treatment — 2026-09-20

- Keep the left panel itself flush to its inline edges. Navigation rows retain their own internal padding and indentation, but the panel does not add horizontal padding around them.

## Current visual baseline and navigation semantics — 2026-09-21

- Use Urbanist with `0.035em` tracking and the blue palette with `0.15` accent chroma as the current prototype baseline. Retain the comparison controls for now; this preference does not authorize production defaults.
- Structure the sidebar navigation as nested `ul` and `li` lists. Use anchors for destinations and in-document navigation, and reserve buttons for the Specification and requirement-group disclosure actions.
- Use `gap-2` between icons and labels in top-level sidebar links.
