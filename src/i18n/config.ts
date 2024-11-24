import { LocalePrefixMode } from "next-intl/routing";
import { Locale, locales } from "./config.types";

export const config = {
  // A list of all locales that are supported
  locales: locales as string[],
 
  // Used when no locale matches
  defaultLocale: Locale.en,
  localePrefix: 'always' as LocalePrefixMode,
  pathnames: {
    '/': '/',
  }
};