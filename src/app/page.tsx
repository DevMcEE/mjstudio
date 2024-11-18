import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <Image
          src="/logoVertical.svg"
          alt="MJ Studio"
          width={500}
          height={300}
          priority
        />
    </div>
  );
}
