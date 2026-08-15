import { randomUUID } from 'node:crypto';
import pino from 'pino';
import type { OperationRecorder } from '@modules/project/ports';

export const pinoRecorder = ({ sourceRevision, environment }: Readonly<{ sourceRevision: string; environment: 'local' | 'staging' | 'production' }>): OperationRecorder => {
  const logger = pino({ base: null, level: 'info', redact: ['*.title', '*.content', '*.description', '*.email', '*.authorization', '*.cookie'] });
  return {
    async record({ command, outcome, durationMs }) {
      logger.info({ event: 'project_command', command, outcome, durationMs, correlationId: randomUUID(), environment, sourceRevision });
    },
  };
};
