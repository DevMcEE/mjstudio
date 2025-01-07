import { LocalePrefixMode } from "next-intl/routing";
import { Locale, locales } from "./config.types";

export const config = {
  // A list of all locales that are supported
  locales: locales as string[],
 
  // Used when no locale matches
  defaultLocale: Locale.en,
  localePrefix: 'always' as LocalePrefixMode,
  localeDetection: true,
  pathnames: {
    '/': {
      [Locale.en]: '/',
      [Locale.et]: '/',
      [Locale.ru]: '/',
      [Locale.th]: '/',
    },
    '/booking': {
      [Locale.en]: '/booking',
      [Locale.et]: '/broneering',
      [Locale.ru]: '/bronirovanie',
      [Locale.th]: '/gaan-jaawng',
    },
  }
};