import { Stepper, Translations } from "@/app/components/Stepper/Stepper";
import styles from "./booking.module.css";
import { useLocale, useTranslations } from "next-intl";
import { StepperProvider } from "@/app/components/StepperContext/StepperContext";
import { StepperButton } from "@/app/components/StepperButton/StepperButton";
import { Locale } from "@/i18n/config.types";


export default function HomePage() {
  const t = useTranslations("booking");
  const locale = useLocale() as Locale;

  const translations: Translations = {
    stepsList: {
      'service': t('service'),
      'date_time': t('date_time'),
      'contacts': t('contacts'),
      'finish': t('finish')
    },
    submit: t('submit'),
    next: t('next'),
  };


  return (
    <StepperProvider><div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.stepperButtonContainer}>
          <StepperButton />
        </div>
        <h1>{t("booking")}</h1>
      </div>
      <div className={styles.stepper}>
        <Stepper translations={translations} locale={locale}/>
      </div>
    </div>
    </StepperProvider>

  );
}
