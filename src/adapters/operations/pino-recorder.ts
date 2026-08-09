import pino from 'pino';
import type { OperationRecorder } from '../../modules/project/ports';

export const pinoRecorder = (sourceRevision: string): OperationRecorder => {
  const logger = pino({ level: 'info', redact: ['*.title', '*.content', '*.description', '*.email', '*.authorization', '*.cookie'] });
  return {
    async record({ command, outcome, durationMs }) {
      logger.info({ event: 'project_command', command, outcome, durationMs, sourceRevision });
    },
  };
};
