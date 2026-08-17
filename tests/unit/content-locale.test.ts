import { describe, expect, it } from 'vitest';
import { resolveInitialContentLocale } from '@adapters/http/initial-content-locale';
import { createProjectSchema } from '@modules/project/rules';

describe('Content Locale', () => {
  it('selects the highest-preference valid browser locale and falls back to English', () => {
    expect(resolveInitialContentLocale('broken_locale, fr-ca;q=0.8, en;q=0.7')).toBe('fr-CA');
    expect(resolveInitialContentLocale('de-DE;q=0, es-mx;q=0.6')).toBe('es-MX');
    expect(resolveInitialContentLocale('*, broken_locale;q=0.9')).toBe('en');
  });

  it('canonicalizes a valid owner-selected locale and rejects malformed values', () => {
    const parsed = createProjectSchema.parse({ operationId: '01987b06-cfc7-7000-8000-000000000003', title: 'Atlas', contentLocale: 'fr-ca' });

    expect(parsed.contentLocale).toBe('fr-CA');
    expect(createProjectSchema.safeParse({ operationId: '01987b06-cfc7-7000-8000-000000000003', title: 'Atlas', contentLocale: 'broken_locale' }).success).toBe(false);
  });
});
