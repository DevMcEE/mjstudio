import { getLocale } from "next-intl/server";
import { MenuItem, SocialLinks } from "../../api/route.types";
import { MobileMenu } from "../MobileMenu";
import styles from './TopBar.module.css';

interface TopBarProps {
  menu: MenuItem[];
  socialLinks?: SocialLinks
}

export const TopBar = async ({ menu, socialLinks }: TopBarProps) => {
  const currentLocale = await getLocale();
  return (
      <div className={styles.topBarContainer}>
        {/* <Logo /> */}
        <span></span>
        <MobileMenu menu={menu} currentLocale={currentLocale}  socialLinks={socialLinks}/>
      </div>
  );
}