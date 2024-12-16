import styles from "./page.module.css";
import { ContentItem, MetaDataLocale, Route } from "../api/route.types";
import { HeroBlock } from "./_blocks/HeroBlock";
import { ServicesBlock } from "./_blocks/ServicesBlock";
import { AboutUsBlock } from "./_blocks/AboutUsBlock";
import { ContactsBlock } from "./_blocks/ContactsBlock";
import { Locale, locales } from '@/i18n/config.types';
import { headers } from "next/headers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  let data = {} as MetaDataLocale;

  try {
    data = await fetch(`${process.env.API_URL}/${Route.homePageMetadata}`, {
      headers: {
        'Accept-Language': locale,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  };

  const languagesUrls = {} as Record<Locale, string>;

  if (locales.length) {
    for (const locale of locales) {
      languagesUrls[locale] = `/${locale}`;
    }
  }

  return {
    ...data,
    robots: 'index, follow',
    authors: ['MJ Studio'],
    metadataBase: new URL(process.env.BASE_URL|| '/'),
    alternates: {
      canonical: `/${locale}`,
      languages: languagesUrls,
    },
    openGraph: {
      type: 'website',
      title: data.title,
      description: data.description,
      image: `${new URL(process.env.BASE_URL|| '/')}/${data.image}`,
      images: [
        {
          url: data.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  let data: ContentItem | null = null;
  const { locale } = await params;
  const nonce = (await headers()).get('x-nonce') || '';
   
  try {
    data = await fetch(`${process.env.API_URL}/${Route.homePageBody}`, {
      cache: 'no-cache',
      headers: {
        'Accept-Language': locale,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }

  return (
    <div className={styles.page}>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data?.jsonLd) }}
      />
      <HeroBlock {...data}/>
      <ServicesBlock {...data} />
      <AboutUsBlock {...data} />
      <ContactsBlock {...data} />
    </div>
  );
}
