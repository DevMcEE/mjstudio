import Image from "next/image";
import styles from "./page.module.css";
import { Route } from "../api/route.types";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  
  let data = { };
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

export default async function HomePage() {
  let data = {};
  try {
   data = await fetch(`${process.env.API_URL}/${Route.homePageBody}`,{
      cache: 'force-cache',
    }).then((res) => res.json())
  } catch (error) {
    console.error('Failed to fetch metadata:', error);
  }

  console.log({data});
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
