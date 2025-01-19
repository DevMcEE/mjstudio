import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  request.headers.set('x-nonce', nonce);

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  if (process.env.NODE_ENV !== 'development') {
    const cspHeader = `
        default-src 'self';
        connect-src 'self' ${process.env.WHITELISTED_EXTERNAL_TARGETS || ''};
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
        style-src 'self' 'nonce-${nonce}';
        img-src 'self' blob: data: ${process.env.WHITELISTED_EXTERNAL_TARGETS || ''};
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-src  ${process.env.WHITELISTED_EXTERNAL_TARGETS || ''};
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `;
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
      .replace(/\s{2,}/g, ' ')
      .trim();

    response.headers.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue
    );
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/', '/(ru|en|et|th)/:path*'
  ],
};