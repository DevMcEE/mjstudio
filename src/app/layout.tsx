import { Lato, Song_Myung } from "next/font/google";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { headers } from "next/headers";
import Script from "next/script";

export const lato = Lato({
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  subsets: ['latin'],
});

export const songMuong = Song_Myung({
  weight: '400',
  variable: '--font-song-myung',
  subsets: ['latin']
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#000000',
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') || '';
  const locale = await getLocale();
  // Ensure that the incoming `locale` is valid
  const translations = await getMessages();

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId={process.env.GTM_ID || ''} nonce={nonce} />
      <body className={`${lato.variable} ${songMuong.variable}`}>
        <Script
          strategy="afterInteractive"
          id="nonce-script"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `__webpack_nonce__ = ${JSON.stringify(nonce)}`
          }}
        />
        <NextIntlClientProvider messages={translations}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
