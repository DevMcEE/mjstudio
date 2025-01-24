import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { Locale } from './config.types';

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../translations/${locale}.json`)).default
  };
});