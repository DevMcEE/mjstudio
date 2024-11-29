import { getLocale } from "next-intl/server";
import { MenuItem } from "../../api/route.types";
import { MobileMenu } from "../MobileMenu";
import styles from './TopBar.module.css';

interface TopBarProps {
  menu: MenuItem[];
}

export const TopBar = async ({ menu }: TopBarProps) => {
  const currentLocale = await getLocale();
  return (
      <div className={styles.topBarContainer}>
        {/* <Logo /> */}
        <span></span>
        <MobileMenu menu={menu} currentLocale={currentLocale} />
      </div>
  );
}