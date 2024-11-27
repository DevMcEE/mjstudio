import { MenuItem } from "../../api/route.types";
import { Logo } from "../Logo/Logo";
import { MobileMenu } from "../MobileMenu";
import styles from './TopBar.module.css';

interface TopBarProps {
  menu: MenuItem[];
}


export const TopBar = ({ menu }: TopBarProps) => {
  return (
      <div className={styles.topBarContainer}>
        {/* <Logo /> */}
        <span></span>
        <MobileMenu menu={menu} />
      </div>
  );
}