import Image from "next/image";
import styles from "./page.module.css";

export async function generateMetadata({params}: {params: {locale: string}}) {
  const { locale } = await params;
  
  let metadata;
  try {
    const response = await fetch(`${process.env.API_URL}/api/metadata`, {
      headers: {
        'Accept-Language': locale,
      },
    });
    metadata = await response.json();
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
    metadata = { error: 'Internal Server Error' };
  };

  return metadata;
}

export default function Home() {
  return (
    <div className={styles.page}>
        <Image
          src="/face-logo.svg"
          alt="MJ Studio"
          width={500}
          height={300}
          priority
        />

        <div style={{ padding: 10, textAlign: 'center'}}>
          <p>Viru 9, 2 floor, 1</p>
          <p>TALLINN, ESTONIA</p>
        </div>
    </div>
  );
}
