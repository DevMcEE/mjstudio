import { Stepper } from "@/app/components/Stepper/Stepper";
import styles from "./booking.module.css";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n/config.types";
import { Translations } from "@/app/components/Stepper/Stepper.types";

export default function HomePage() {
  const t = useTranslations("booking");
  const locale = useLocale() as Locale;

  const translations: Translations = {
    stepsTranslationsMap: {
      'service': t('service'),
      'date_time': t('date_time'),
      'contacts': t('contacts'),
      'finish': t('finish')
    },
    submit: t('submit'),
    next: t('next'),
    back: t('back'),
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{t("booking")}</h1>
      </div>
      <div className={styles.stepper}>
        <Stepper translations={translations} locale={locale}/>
      </div>
    </div>

  );
}
