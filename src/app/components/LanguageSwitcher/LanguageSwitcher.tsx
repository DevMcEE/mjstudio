import { locales } from "@/i18n/config.types";
import { usePathname, useRouter } from "@/i18n/routing";
import styles from './LanguageSwitcher.module.css';
import { useTransition } from "react";
import { useParams } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export const LanguageSwitcher = ({ currentLocale }: LanguageSwitcherProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useParams();

  let pathname = usePathname();

  // This regex will match any pathname that starts with a locale prefix, e.g. `/en`
  const invalidPathnameRegex = new RegExp('^\/(' + locales.join('|') + ')', 'ig');

  const handleLocaleChange = (locale: string) => {
    if (invalidPathnameRegex.test(pathname)) {
      //@ts-expect-error - TypeScript will validate that only known `params`
      pathname = pathname.slice(3) || '/'; // Remove the locale prefix from the path and fallback to `/`
    }
    console.log({ pathname, params, locale, invalidPathnameRegex });

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale }
      );
    });
  };

  return (
    <div className={`${styles.languageSwitcher} ${isPending ? styles.pending : ''}`}>
      {locales.map((locale) => (
        <button
          type="button"
          disabled={isPending}
          className={`${currentLocale === locale ? styles.activeLink : styles.regularLink}`}
          key={locale}
          onClick={() => handleLocaleChange(locale)}
        >
          {locale}
        </button>
      ))}
    </div>
  );
};