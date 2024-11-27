import Image from "next/image";
import styles from "./page.module.css";
import { ContentItem, Route } from "../api/route.types";

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
      <div className={styles.heroBlock}>
        <video className={styles.bgVideo} width="768" height="1200" autoPlay muted loop preload="auto" playsInline >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.heroImage}>
        <Image
          src="/face-logo-white.svg"
          alt="MJ Studio"
          width={246}
          height={246}
          priority
        />
        </div>

        {!!data && (
          
          <div className={styles.heroText}>
            <div className={styles.pageTitleContainer}>
              <h1 className={styles.pageTitle}>{data.pageTitle}</h1>
              <h2 className={styles.pageSubtitle}>{data.pageSubTitle}</h2>
            </div>

            <p className={styles.pageDescription}>{data.pageDescription}</p>
            <p className={styles.address}>{data.address}</p>

          </div>
        )}
 
      </div>
      
    </div>
  );
}
