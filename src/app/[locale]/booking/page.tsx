"use client";

import { Stepper } from "@/app/components/Stepper/Stepper";
import styles from "./booking.module.css";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n/config.types";
import { Translations } from "@/app/components/Stepper/Stepper.types";
import { SelectOptionProps, SelectProps } from "@/app/components/Select/Select.types";
import { Select } from "@/app/components/Select";

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
  const selectOptions: SelectOptionProps[] = [
    {
      value: "value1",
      selected: false,
      title: "Option 1",
      testId: "option1",
      leftIcon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 9.33334H24V15.3333H0V9.33334Z" fill="#141414"/>
        <path d="M21.3333 3.33334H2.66667C1.95942 3.33334 1.28115 3.61429 0.781049 4.11439C0.280952 4.61449 0 5.29277 0 6.00001L0 9.33334H24V6.00001C24 5.29277 23.719 4.61449 23.219 4.11439C22.7189 3.61429 22.0406 3.33334 21.3333 3.33334Z" fill="#4891D9"/>
        <path d="M21.3333 20.6667H2.66667C1.95942 20.6667 1.28115 20.3857 0.781049 19.8856C0.280952 19.3855 0 18.7073 0 18V15.3333H24V18C24 18.7073 23.719 19.3855 23.219 19.8856C22.7189 20.3857 22.0406 20.6667 21.3333 20.6667Z" fill="#EEEEEE"/>
        </svg>
    `,
    },
    {
      value: "value2",
      selected: false,
      title: "Option 2",
      testId: "option2",
      leftIcon: '🇹🇭'
    }
  ];
  const selectArgs: SelectProps<SelectOptionProps> = {
    label: "Select label",
    value: "",
    values: selectOptions,
    disabled: false,
    onSelect: ()=>{},
    required: true,
    testId: "selectId",
    helperText:"Select an option",
    placeholder:"sdas",
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{t("booking")}</h1>
      </div>
      <div className={styles.stepper}>
      
        <Stepper translations={translations} locale={locale}/>
      </div>
      <Select {...selectArgs} />
    </div>

  );
}