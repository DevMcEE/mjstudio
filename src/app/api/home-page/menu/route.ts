import { Locale, locales } from '@/i18n/config.types';
import { NextResponse } from 'next/server';
import { data, SocialLinks } from '../data';
import { NextApiRequest } from 'next';

export async function GET(request: NextApiRequest) {
  let locale = (request.headers['accept-language']) as Locale || Locale.en;  

  if (!locales.includes(locale)) {
    locale = Locale.en;
  }

  try {
    return NextResponse.json(
      { 
        menu: data[locale]?.menu || data[Locale.en].menu,
        socialLinks: SocialLinks
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}