import { Locale, locales } from '@/i18n/config.types';
import { NextRequest, NextResponse } from 'next/server';
import { data } from './data';

export async function GET(request: NextRequest) {
  let locale = (request.headers.get('accept-language') as Locale) || Locale.en;
  
  console.log(locale);

  if (!locales.includes(locale)) {
    locale = Locale.en;
  }

  try {
    return NextResponse.json(
      data[locale] || data[Locale.en],
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}