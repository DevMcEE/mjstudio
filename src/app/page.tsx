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

        <div style={{ padding: 10, textAlign: 'center'}}>
          <p>Viru 9, 2 floor,</p>
          <p>TALLINN, ESTONIA</p>
        </div>
    </div>
  );
}
