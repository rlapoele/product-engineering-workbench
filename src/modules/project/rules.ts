import { z } from 'zod';

export const UUID_V7_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const operationIdSchema = z.string().regex(UUID_V7_PATTERN, 'Use a UUIDv7 operation ID.');
const nonblank = (label: string) => z.string().trim().min(1, `${label} is required.`).max(280, `${label} is too long.`);

export const createProjectSchema = z.object({
  operationId: operationIdSchema,
  title: nonblank('Project title'),
  description: z.string().trim().max(2_000, 'Description is too long.').optional().transform((value) => value || undefined),
  contentLocale: z.string().trim().min(2, 'Content Language is required.').max(35, 'Content Language is too long.').regex(/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/, 'Use a well-formed language tag.'),
});

export const saveFirstGoalSchema = z.object({
  operationId: operationIdSchema,
  title: nonblank('Goal title'),
  content: z.string().trim().min(1, 'Goal content is required.').max(20_000, 'Goal content is too long.'),
});

export const fieldErrors = (issues: readonly z.core.$ZodIssue[]) => Object.fromEntries(issues.map((issue) => [String(issue.path[0] ?? 'form'), issue.message]));
