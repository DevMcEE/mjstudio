import styles from "../page.module.css";
import Image from "next/image";

interface HeroBlockProps {
  pageTitle?: string;
  pageSubTitle?: string;
  pageDescription?: string;
  address?: string;
};

export const HeroBlock = ({
  pageTitle = '',
  pageSubTitle = '',
  pageDescription = '',
  address = ''
}: HeroBlockProps) => {
  return (
    <section className={styles.heroBlock}>
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

      <div className={styles.heroText}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
          <h2 className={styles.pageSubtitle}>{pageSubTitle}</h2>
        </div>

        <p className={styles.pageDescription}>{pageDescription}</p>
        <p className={styles.address}>{address}</p>
      </div>
    </section>
  );
};