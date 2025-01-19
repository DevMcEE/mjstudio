import { MetadataRoute } from "next";
import { Locale, locales } from '@/i18n/config.types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL || '/';

  const sitemap = [] as  MetadataRoute.Sitemap;

  for (const locale of locales) {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      alternates: {
        languages: locales.reduce((acc, lang) => {
          if (lang === locale) return acc;
          
          acc[lang] = `${baseUrl}/${lang}`;
          
          return acc;
        }, {} as Record<Locale, string>),
      },
    });
  }

  return sitemap;
}