export const Locale = {
  en: 'en',
  et: 'et',
  ru: 'ru',
  th: 'th'
} as const;

export const locales = Object.values(Locale);
export type Locale = typeof Locale[keyof typeof Locale];