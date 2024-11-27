'use client';
import styles from './MenuModal.module.css'; 
import { MenuItem } from "../../api/route.types";
import { Link } from '@/i18n/routing';
import { CloseIcon } from '../icons';
import { IconButton } from '../IconButton';

interface MenuModalProps {
  menu: MenuItem[];
  onClose: () => void;
};

export const MenuModal = ({menu, onClose}: MenuModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconButton icon={<CloseIcon />} onClick={onClose} />
      </div>
     <nav className={styles.content}>
        <ul>
          {
            menu.map(({ title, url, hash }) => (
              <li className={styles.menuItem} key={`${url}${hash}`}>
                {/* @ts-expect-error - type / */}
                <Link href={`${url}${hash}`}>{title}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
  </div>
  )
}