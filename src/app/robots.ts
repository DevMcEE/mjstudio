import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.BASE_URL || '/';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/static/',
        '/404/',
        '/500/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}