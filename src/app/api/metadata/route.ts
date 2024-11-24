import { Locale, locales } from '@/i18n/config.types';
import { NextRequest, NextResponse } from 'next/server';
import { MetadataType } from '../route.types';

const metadata: MetadataType = {
  [Locale.en]: {
    title: 'MJ Studio',
    description: 'Refresh Your Look! Expert Care for Face, Head and Shoulders',
  },
  [Locale.ru]: {
    title: 'MJ Studio',
    description: 'Освежите свой образ! Профессиональный уход за лицом, головой и плечами',
  },
  [Locale.et]: {
    title: 'MJ Studio',
    description: 'Värskenda oma välimust! Professionaalne näo-, pea- ja õlahooldus',
  },
  [Locale.th]: {
    title: 'MJ Studio',
    description: 'เปลี่ยนลุคของคุณให้สดใหม่! การดูแลมืออาชีพสำหรับใบหน้า ศีรษะ และไหล่',
  },
} as const;

export async function GET(request: NextRequest) {
  let locale = (request.headers.get('accept-language') as Locale) || Locale.en;  

  if (!locales.includes(locale)) {
    locale = Locale.en;
  }

  try {
    return NextResponse.json(
      metadata[locale],
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}