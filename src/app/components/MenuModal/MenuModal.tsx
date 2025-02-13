'use client';

import styles from './MenuModal.module.css';
import { MenuItem, SocialLinks } from "../../api/route.types";
import { Link } from '@/i18n/routing';
import { CloseIcon } from '../icons';
import { IconButton } from '../IconButton';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { SocialIconLinks } from '../SocialIconLinks';

interface MenuModalProps {
  menu: MenuItem[];
  onClose: () => void;
  currentLocale: string;
  socialLinks?: SocialLinks;
};

export const MenuModal = ({ menu, onClose, currentLocale, socialLinks }: MenuModalProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconButton icon={<CloseIcon />} onClick={onClose} />
      </div>
      <div className={styles.languageContainer}>
        <LanguageSwitcher currentLocale={currentLocale} />
      </div>
      <nav className={styles.content}>
        <ul>
          {
            menu.map(({ title, url, hash }) => (
              <li className={styles.menuItem} key={`${url}${hash}`}>
                {/* @ts-expect-error - type / */}
                <Link href={`${url}#${hash}`} locale={currentLocale} onClick={onClose}>{title}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      {socialLinks && (
        <div className={styles.footer}>
          <div className={styles.socialIconLinksContainer}>
            <SocialIconLinks socialLinks={socialLinks} />
          </div>
        </div>
      )}

    </div>
  );
};