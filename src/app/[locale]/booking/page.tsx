import { Stepper } from "@/app/components/Stepper/Stepper";
import styles from "./booking.module.css";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n/config.types";
import { FormStep, Translations } from "@/app/components/Stepper/Stepper.types";
import { ServiceSelectionForm } from "@/app/components/ServiceSelectionForm/ServiceSelectionForm";
import { MockForm } from "@/app/components/Stepper/StepperMockData";

export default function BookingPage() {
  const t = useTranslations("booking");
  const locale = useLocale() as Locale;

  const steps: FormStep[] = [
    { name: "service", component: ServiceSelectionForm, showServiceInActionBar: true },
    { name: "date_time", component: MockForm, showServiceInActionBar: false },
    { name: "contacts", component: MockForm, showServiceInActionBar: false },
    { name: "finish", component: MockForm, showServiceInActionBar: false },
  ];

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
        <Stepper translations={translations} locale={locale} steps={steps} />
      </div>
    </div>

  );
}