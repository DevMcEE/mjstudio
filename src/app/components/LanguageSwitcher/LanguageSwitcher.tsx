import { locales } from "@/i18n/config.types";
import { Link } from "@/i18n/routing";
import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps { 
  currentLocale: string;
}
export const LanguageSwitcher = ({currentLocale}:LanguageSwitcherProps) => {
  return (
    <div className={styles.languageSwitcher}>
      {locales.map((locale) => (
         <Link className={currentLocale === locale ? styles.activeLink : styles.regularLink} key={locale} href="/" locale={locale}>{locale}</Link>
      ))}
    </div>
  );
}