import type { OperationRecorder } from '@modules/project/ports';

/** Isolates independent diagnostics so one failing sink cannot prevent another from observing a command. */
export const bestEffortRecorder = (...recorders: readonly OperationRecorder[]): OperationRecorder => ({
  async record(input) {
    await Promise.all(recorders.map(async (recorder) => { try { await recorder.record(input); } catch { /* Diagnostic sinks are non-authoritative. */ } }));
  },
});
