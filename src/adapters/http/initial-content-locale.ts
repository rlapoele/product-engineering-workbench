import { canonicalContentLocale } from '@modules/project/rules';

type LocalePreference = Readonly<{ locale: string; quality: number; index: number }>;

const preferences = (acceptLanguage: string | null): readonly LocalePreference[] => (acceptLanguage ?? '')
  .split(',')
  .flatMap((entry, index) => {
    const [locale, ...parameters] = entry.split(';').map((value) => value.trim());
    const qualityParameter = parameters.find((parameter) => parameter.toLowerCase().startsWith('q='));
    const quality = qualityParameter ? Number(qualityParameter.slice(2)) : 1;
    return locale && locale !== '*' && Number.isFinite(quality) && quality > 0 && quality <= 1 ? [{ locale, quality, index }] : [];
  })
  .sort((left, right) => right.quality - left.quality || left.index - right.index);

/** Resolves the browser's highest-preference valid locale for a new Project's editable Content Language. */
export const resolveInitialContentLocale = (acceptLanguage: string | null): string => {
  for (const preference of preferences(acceptLanguage)) {
    const locale = canonicalContentLocale(preference.locale);
    if (locale) return locale;
  }
  return 'en';
};
