import styles from "./page.module.css";
import { ContentItem, Route } from "../api/route.types";
import { HeroBlock } from "./_blocks/HeroBlock";
import { ServicesBlock } from "./_blocks/ServicesBlock";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  let data = {};
  try {
    data = await fetch(`${process.env.API_URL}/${Route.homePageMetadata}`, {
      headers: {
        'Accept-Language': locale,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  };

  return data;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  let data: ContentItem | null = null;
  const { locale } = await params;
  
  try {
    data = await fetch(`${process.env.API_URL}/${Route.homePageBody}`, {
      cache: 'no-cache',
      headers: {
        'Accept-Language': locale,
      },
    }).then((res) => res.json());

    console.log('data:', data);
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }

  return (
    <div className={styles.page}>
      <HeroBlock {...data}/>
      <ServicesBlock {...data} />
    </div>
  );
}
