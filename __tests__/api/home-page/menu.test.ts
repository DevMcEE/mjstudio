import { describe, expect, it, vi } from 'vitest';
import { createMocks } from 'node-mocks-http';
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import { Locale } from '@/i18n/config.types';
import { beforeEach } from 'node:test';

vi.mock('@/app/api/home-page/data', () => ({
  data: {
    [Locale.en]: {
      menu: [
        { title: 'Services', url: '/', hash: 'services' },
      ]
    },
    [Locale.et]: {
      menu: [
        { title: 'Services et', url: '/', hash: 'services-et' },
      ],
    },
  },
  SocialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  }
}));

describe('/home-page/menu', async () => {
  const { GET } = await import('@/app/api/home-page/menu/route');

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should return the menu and social links', async () => {
    const { req, res } = createMocks<NextApiRequest, NextResponse>({ method: 'GET', headers: { 'accept-language': 'et' } });

    // we use dynamic import to make mocked data work
    const response = await GET(req);

    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({
      menu: [
        { title: 'Services et', url: '/', hash: 'services-et' },
      ],
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
      }
    })
  });

  it('should return the menu and social links', async () => {
    const { req } = createMocks<NextApiRequest, NextResponse>({ method: 'GET', headers: { 'accept-language': 'ru' } });

    // we use dynamic import to make mocked data work
    const response = await GET(req);

    const data = await response.json();

    console.log(data);
    expect(response.status).toBe(200);
    expect(data).toEqual({
      menu: [
        { title: 'Services', url: '/', hash: 'services' },
      ],
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
      }
    })
  });
});