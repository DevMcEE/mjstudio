import styles from "./booking.module.css";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className={styles.main}>
      <h1>Booking {locale}</h1>
    </div>
  );
}
