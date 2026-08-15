import type { Pool } from 'pg';
import type { OperationRecorder } from '@modules/project/ports';

/** Records only command outcome aggregates; it never receives Product Knowledge or identity. */
export const postgresLedger = (pool: Pick<Pool, 'query'>): OperationRecorder => ({
  async record({ command, outcome, durationMs, sourceRevision }) {
    await pool.query(`
      INSERT INTO ops.command_outcomes_hourly
        (hour_started_at, command_category, outcome, source_revision, count, total_duration_ms, max_duration_ms)
      VALUES (date_trunc('hour', CURRENT_TIMESTAMP), $1, $2, $3, 1, $4::bigint, ($4::bigint)::integer)
      ON CONFLICT (hour_started_at, command_category, outcome, source_revision)
      DO UPDATE SET
        count = ops.command_outcomes_hourly.count + 1,
        total_duration_ms = ops.command_outcomes_hourly.total_duration_ms + EXCLUDED.total_duration_ms,
        max_duration_ms = GREATEST(ops.command_outcomes_hourly.max_duration_ms, EXCLUDED.max_duration_ms)`,
    [command, outcome, sourceRevision, durationMs]);
  },
});
