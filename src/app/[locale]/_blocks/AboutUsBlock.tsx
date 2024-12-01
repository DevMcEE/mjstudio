import { AboutBlock } from "@/app/api/route.types";
import Image from 'next/image';
import styles from '../page.module.css';

interface AboutUsBlockProps {
  aboutUs?: AboutBlock;
  aboutUsId?: string;
};
export const AboutUsBlock = ({ aboutUs, aboutUsId = 'aboutUs' }: AboutUsBlockProps) => {
  const { title, description, abouyUsImage } = aboutUs || {};

  return aboutUs ? (
    <div className={styles.aboutBlockContainer} id={aboutUsId}>
      <div className={styles.blockTitleContainer}>
        <h2 className={styles.blockTitle}>{title}</h2>
      </div>
      <div className={styles.aboutBlockImageContainer}>
        <Image className={styles.aboutUsImage} src={abouyUsImage || ''} alt="About us" width={2048} height={1153} />

      </div>
      <div className={`${styles.blockContainer} ${styles.innerBlockDelimiter} ${styles.blockContent}`}>
        <div className={styles.contentContainer}>
          {description?.map((paragraph, index) => (
            <p className={styles.contentParagraph} key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};