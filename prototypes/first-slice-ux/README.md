# First-Slice UX Prototype

This is a standalone, low-fidelity clickable model for the first-slice UX study defined in `docs/knowledge/ux/document-first-ui.md`.

It deliberately simulates local state, pending states and failures. It is not product implementation, does not select a production technology, and has no persistence, authentication or network behavior.

## Exercise flow

1. Open the Project-creation form and submit it with no title to see validation.
2. Enter a Project name, choose a different Content language if required, then create the Project. The first valid attempt simulates a failure; retry succeeds.
3. In `Goals and Success Criteria`, add a Goal and select `Done editing`. The first save for each new Goal simulates a failure; retry saves it as `Draft`.
4. Add a disposable second Goal to exercise explicit discard after its simulated save failure.
5. Use the `Projects` action to return home, then reopen the saved Project with the primary action.

## Local use

Open `index.html` in a browser, or serve this directory with any static-file server. The prototype has no dependencies.

The `Prototype facilitator controls` disclosure offers a restart action between solo walkthroughs or moderated sessions.
